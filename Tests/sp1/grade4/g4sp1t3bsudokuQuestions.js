const g4sp1t3bsudokuQuestions = [
{
    type: "sudoku",
    class: "Sky Soarers",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Sky Sudoku.",
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
    class: "Sky Soarers",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Sky Sudoku Puzzle",
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
    class: "Sky Soarers",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Sky Sudoku Puzzle",
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