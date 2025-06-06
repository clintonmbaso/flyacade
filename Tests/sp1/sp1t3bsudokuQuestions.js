const sp1t3bsudokuQuestions = [

// Feather Flyers
{
    type: "sudoku",
    class: "Feather Flyers",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Avian Sudoku.",
    puzzleData: {
        "4x4": [
            [1, null, 3, null],
            [null, 2, null, 4],
            [4, null, 2, null],
            [null, 3, null, 1]
        ]
    }
},

// Cloud Chicks
{
    type: "sudoku",
    class: "Cloud Chicks",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Avian Sudoku Puzzle",
    puzzleData: {
        "4x4": [
            [1, null, 3, null],
            [2, null, null, null],
            [null, null, null, 4],
            [null, 1, null, null]
        ]
    }
},

// Wing Whiz
{
    type: "sudoku",
    class: "Wing Whiz",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Avian Sudoku Puzzle",
        puzzleData: {
            "6x6": [
                [null, 3, null, null, 2, null],
                [2, null, 6, null, null, 3],
                [null, null, null, 5, null, null],
                [null, null, 1, null, null, null],
                [3, null, null, 2, null, 6],
                [null, 5, null, null, 1, null]
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
    description: "Avian Sudoku Puzzle",
        puzzleData: {
        "6x6": [
            [5, null, null, null, 4, null],
            [null, null, 3, 5, null, null],
            [null, null, 4, null, null, 5],
            [6, null, null, 4, null, null],
            [null, null, 5, 3, null, null],
            [null, 1, null, null, null, null]
        ]
        }
    },

// Sky Soarers
{
    type: "sudoku",
    class: "Sky Soarers",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Avian Sudoku Puzzle",
        puzzleData: {
        "9x9": [
        [null, 8, 2, null, null, 7, null, 1, null],
        [null, null, null, null, 2, null, 8, 4, null],
        [9, null, null, null, 8, 6, null, null, null],
        [5, null, 4, 7, null, null, null, null, 2],
        [null, 6, null, null, null, null, null, 3, null],
        [7, null, null, null, null, 1, 4, null, 5],
        [null, null, null, 6, 4, null, null, null, 3],
        [null, 2, 6, null, 7, null, null, null, null],
        [null, 7, null, 3, null, null, 6, 2, null]
        ]
        }
    },

// Avian Aces
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "Avian Sudoku Puzzle",
        puzzleData: {
        "9x9": [
        [7, null, null, 5, null, null, null, null, 9],
        [null, 2, null, null, null, null, 3, null, 6],
        [null, null, 6, 3, 8, null, null, null, null],
        [null, 1, null, null, null, 7, null, 6, 8],
        [null, null, 2, 1, null, 3, 7, null, null],
        [4, 9, null, 2, null, null, null, 1, null],
        [null, null, null, null, 9, 1, 6, null, null],
        [5, null, 1, null, null, null, null, 4, null],
        [2, null, null, null, null, 5, null, null, 1]
        ]
        }
    },


    // Add other questions as needed
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