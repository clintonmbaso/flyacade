<?php
// Set the correct time zone
date_default_timezone_set('Africa/Lusaka'); // Adjust this to your location if needed

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

// Initialize variables
$teacherName = "";
$message = "";
$limitTime = "07:20:00"; // Time limit for login
$lateGracePeriod = "07:30:00"; // 10 minutes grace period after the limit time
$loginDate = date('Y-m-d');
$loginTime = date('H:i:s');

// Handle form submission for login
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $teacherName = $_POST['teacher_name'];

    // Check if the teacher has already logged in today
    $checkStmt = $conn->prepare("SELECT * FROM teacher_logins WHERE teacher_name = ? AND login_date = ?");
    $checkStmt->bind_param("ss", $teacherName, $loginDate);
    $checkStmt->execute();
    $checkResult = $checkStmt->get_result();

    if ($checkResult->num_rows > 0) {
        $message = "You have already logged in today.";
    } else {
        // Insert login record
        $stmt = $conn->prepare("INSERT INTO teacher_logins (teacher_name, login_date, login_time) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $teacherName, $loginDate, $loginTime);
        if ($stmt->execute()) {
            $message = "Login recorded successfully!";
        } else {
            $message = "Error: " . $stmt->error;
        }

        // Update weekly login count
        $weekStartDate = date('Y-m-d', strtotime('monday this week')); // Start date of the current week
        $countStmt = $conn->prepare("SELECT login_count FROM weekly_login_counts WHERE teacher_name = ? AND week_start_date = ?");
        $countStmt->bind_param("ss", $teacherName, $weekStartDate);
        $countStmt->execute();
        $countResult = $countStmt->get_result();

        if ($countResult->num_rows > 0) {
            // Update login count
            $countRow = $countResult->fetch_assoc();
            $newCount = $countRow['login_count'] + 1;
            $updateStmt = $conn->prepare("UPDATE weekly_login_counts SET login_count = ? WHERE teacher_name = ? AND week_start_date = ?");
            $updateStmt->bind_param("iss", $newCount, $teacherName, $weekStartDate);
            $updateStmt->execute();
        } else {
            // Insert a new record
            $initialCount = 1;
            $insertCountStmt = $conn->prepare("INSERT INTO weekly_login_counts (teacher_name, week_start_date, login_count) VALUES (?, ?, ?)");
            $insertCountStmt->bind_param("ssi", $teacherName, $weekStartDate, $initialCount);
            $insertCountStmt->execute();
        }
    }
}

// Handle logout action
if (isset($_GET['logout_teacher'])) {
    $logoutTeacher = $_GET['logout_teacher'];
    $logoutTime = date('H:i:s');

    // Update logout time for the teacher's record
    $logoutStmt = $conn->prepare("UPDATE teacher_logins SET logout_time = ? WHERE teacher_name = ? AND login_date = ?");
    $logoutStmt->bind_param("sss", $logoutTime, $logoutTeacher, $loginDate);
    $logoutStmt->execute();
}

// Retrieve login records for the current week
$weekStartDate = date('Y-m-d', strtotime('monday this week'));
$loginRecords = [];
$recordStmt = $conn->prepare("SELECT teacher_name, login_date, login_time, logout_time FROM teacher_logins WHERE login_date >= ? ORDER BY login_date, login_time ASC");
$recordStmt->bind_param("s", $weekStartDate);
$recordStmt->execute();
$recordResult = $recordStmt->get_result();

while ($row = $recordResult->fetch_assoc()) {
    $loginRecords[] = $row;
}

$recordStmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teacher Login and Weekly Logins</title>
    <style>
/* General Body Styles */
body {
    font-family: 'Times New Roman', Times, serif; /* Font for the entire page */
    margin: 0;
    padding: 5px;
    background-color: #f9f9f9; /* Light background color for the page */
}

/* Table Styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 5px;
}

table, th, td {
    border: 1px solid #dddddd; /* Light border for the table */
}

th, td {
    padding: 5px;
    text-align: left;
}

th {
    background-color: #f2f2f2; /* Light gray background for header */
}

/* Row Styles */
.on-time {
    color: blue; /* Color for on-time logins */
}

.almost-late {
    color: orange; /* Color for almost late logins */
}

.late {
    color: red; /* Color for late logins */
}

/* Form Styles */
form {
    background-color: #ffffff; /* White background for the form */
    border: 1px solid #cccccc; /* Light border around the form */
    padding: 5px; /* Padding inside the form */
    border-radius: 5px; /* Rounded corners for the form */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
}

label {
    display: block; /* Ensure label takes a full line */
    margin-bottom: 3px; /* Space between label and input */
    font-weight: bold; /* Bold text for labels */
}

input[type="text"] {
    width: 70%; /* Full width for input field */
    padding: 2px; /* Padding inside input field */
    border: 1px solid transparent; 
    border-left: 5px solid grey; /* Light border for input field */
    border-radius: 4px; /* Rounded corners for input */
    margin-bottom: 2px; /* Space below the input field */
    font-size: 12px;
    background-color: rgba(25,67,92,0.3);
}

/* Button Styles */
input[type="submit"] {
    background-color: #007bff; /* Blue background for submit button */
    color: white; /* White text color */
    width: 100%;
    margin-top: 2px; 
    padding: 5px 10px; /* Padding for the button */
    border: none; /* No border for the button */
    border-radius: 0 0 25px 25px; /* Rounded corners for the button */
    cursor: pointer; /* Pointer cursor on hover */
    font-size: 16px; /* Font size for button text */
}

input[type="submit"]:hover {
    background-color: #0056b3; /* Darker blue on hover */
}

/* Message Display Styles */
p {
    font-size: 14px; /* Font size for messages */
    color: #333333; /* Dark color for messages */
}

/* Heading Styles */
h2, h3 {
    color: #333333; /* Dark color for headings */
    margin-bottom: 2px; /* Space below headings */
}

h2 {
    font-size: 18px; /* Larger font for main heading */
}

h3 {
    font-size: 16px; /* Slightly smaller font for subheadings */
}

/* Responsive Design */
@media (max-width: 600px) {
    /* Adjustments for smaller screens */
    body {
        padding: 10px; /* Less padding for small screens */
    }

    input[type="text"], input[type="submit"] {
        font-size: 14px; /* Smaller font size for inputs and buttons */
    }
}
    </style>
</head>
<body>

<h2>Teacher Login</h2>

<!-- Display message -->
<p><?php echo $message; ?></p>

<!-- Login form -->
<form method="POST" action="">
    <label for="teacher_name">Teacher Name:</label>
    <input type="text" id="teacher_name" name="teacher_name" required>
    <br><br>
    <input type="submit" name="login" value="Login">
</form>

<!-- Display login records for the current week -->
<?php if (!empty($loginRecords)): ?>
    <h3>Login Records for This Week</h3>
    <table>
        <thead>
            <tr>
                <th>Teacher Name</th>
                <th>Date</th>
                <th>Login</th>
                <th>Logout</th>
                <th>Comments</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($loginRecords as $record): ?>
                <?php
                // Determine if the login is on time, almost late, or late
$isOnTime = $record['login_time'] <= $limitTime; // On time if before or at the limit time
$isAlmostLate = $record['login_time'] > $limitTime && $record['login_time'] <= $lateGracePeriod; // Almost late if within grace period
$isLate = $record['login_time'] > $lateGracePeriod; // Late if after grace period

// Assign row class and comments based on the login status
if ($isOnTime) {
    $rowClass = 'on-time';
    $comments = 'In Time';
} elseif ($isAlmostLate) {
    $rowClass = 'almost-late'; // New class for almost late
    $comments = 'On Time';
} else {
    $rowClass = 'late';
    $comments = 'Late - (K30)';
}
                ?>
                <tr class="<?php echo $rowClass; ?>">
                    <td><?php echo htmlspecialchars($record['teacher_name']); ?></td>
                    <td><?php echo htmlspecialchars($record['login_date']); ?></td>
                    <td><?php echo htmlspecialchars($record['login_time']); ?></td>
                    <td><?php echo htmlspecialchars($record['logout_time'] ?? '---'); ?></td>
                    <td><?php echo $comments; ?></td>
                    <td>
                        <?php if (empty($record['logout_time'])): ?>
                            <a href="?logout_teacher=<?php echo urlencode($record['teacher_name']); ?>">Logout</a>
                        <?php else: ?>
                            Logged out
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
<?php else: ?>
    <p>No login records for this week yet.</p>
<?php endif; ?>

</body>
</html>