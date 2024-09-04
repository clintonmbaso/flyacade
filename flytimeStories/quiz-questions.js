const quizQuestions = [
    {
        question: "What did Wiggly and Squirmy find in the compost?",
        options: {
            a: "A shiny coin",
            b: "A toy",
            c: "A book"
        },
        correctAnswer: "a"
    },
    {
        question: "Who should Wiggly and Squirmy show their find to?",
        options: {
            a: "The Wise Old Worm",
            b: "Their friends",
            c: "A squirrel"
        },
        correctAnswer: "a"
    }
];

function loadQuizQuestions() {
    const quizForm = document.getElementById('quiz-form');
    quizForm.innerHTML = quizQuestions.map((q, index) => `
        <p>${index + 1}. ${q.question}</p>
        ${Object.entries(q.options).map(([key, value]) => `
            <input type="radio" name="question${index + 1}" value="${key}"> ${value}<br>
        `).join('')}
    `).join('');
}