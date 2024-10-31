const g3sp1t3bsudokuQuestions = [
{
    type: "sudoku",
    class: "Wing Whiz",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Wing Sudoku.",
    puzzleData: {
            "4x4": [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
            ],
            "6x6": [
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null]
            ],
            "9x9": [
                [null, 5, 9, null, 8, 1, null, 3, 2],
                [8, null, 2, 3, null, null, 9, 7, null],
                [3, null, 1, 9, 2, 4, 6, null, null],
                [1, 6, null, 5, 7, null, 2, null, 4],
                [null, 8, null, 4, 3, 6, null, 9, null],
                [5, null, 4, null, 1, 2, null, 6, 7],
                [null, null, 6, 2, 5, 7, 8, null, 9],
                [null, 1, 5, null, null, 8, 7, null, 3],
                [7, 2, null, 1, 9, null, 5, 4, null]
            ]
        }
    },
{
    type: "sudoku",
    class: "Wing Whiz",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Wing Sudoku Puzzle",
    puzzleData: {
            "4x4": [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
            ],
            "6x6": [
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null]
            ],
            "9x9": [
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null]
            ]
        }
    },
{
    type: "sudoku",
    class: "Wing Whiz",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Wing Sudoku Puzzle",
        puzzleData: {
            "4x4": [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
            ],
            "6x6": [
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null],
                [null, null, null, null, null, null]
            ],
            "9x9": [
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null]
            ]
        }
    }
];
/*
// Shuffle and return a new question
function getNewShuffledQuestion() {
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    return questionBank[randomIndex];
}

// Function to load a Sudoku question
function loadSudokuQuestion(question) {
    const gridSize = "4x4"; // Specify grid size or dynamically determine it
    const puzzleData = question.puzzleData[gridSize]; 
    createSudokuGrid(gridSize, puzzleData);
}

// Create the Sudoku grid based on provided data
function createSudokuGrid(size, puzzleData) {
    const sudokuGridContainer = document.getElementById("sudokuGridContainer");
    sudokuGridContainer.innerHTML = ""; // Clear previous grid

    const sudokuTable = document.createElement("table");
    sudokuTable.classList.add("sudoku-table", `sudoku-table-${size}`);

    puzzleData.forEach((rowData, row) => {
        const sudokuRow = document.createElement("tr");
        rowData.forEach((cellData, col) => {
            const sudokuCell = document.createElement("td");
            const inputField = document.createElement("input");
            inputField.setAttribute("type", "number");
            inputField.classList.add("sudoku-input");

            if (cellData !== null) {
                inputField.value = cellData;
                inputField.setAttribute("readonly", true);
            }
            sudokuCell.appendChild(inputField);
            sudokuRow.appendChild(sudokuCell);
        });
        sudokuTable.appendChild(sudokuRow);
    });
    sudokuGridContainer.appendChild(sudokuTable);
}

// Set up refresh button click event
const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", function () {
    const newQuestion = getNewShuffledQuestion(); // Get a new shuffled question
    loadSudokuQuestion(newQuestion); // Load it into the grid
});

// Initial load
loadSudokuQuestion(getNewShuffledQuestion());