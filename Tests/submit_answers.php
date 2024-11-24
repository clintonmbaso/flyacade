<?php
header('Content-Type: application/json');

// Database connection parameters
$servername = "192.168.0.100";
$username = "flyacade_One";
$password = "#Shaelyn2016";
$database = "flyacade_One";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO quiz_results (student_name, class, subject, term, part, answers, correct_answers, score) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssi", $input['student_name'], $input['class'], $input['subject'], $input['term'], $input['part'], json_encode($input['answers']), json_encode($input['correct_answers']), $input['score']);

// Execute the statement
if ($stmt->execute()) {
    $response = [
        'status' => 'success',
        'message' => 'Answers submitted successfully',
        'score' => $input['score'],
        'total_questions' => count($input['answers']),
        'answers' => $input['answers'],
        'correct_answers' => $input['correct_answers']
    ];
} else {
    $response = [
        'status' => 'error',
        'message' => 'Failed to submit answers: ' . $stmt->error
    ];
}

// Close connection
$stmt->close();
$conn->close();

// Return response as JSON
echo json_encode($response);
?>