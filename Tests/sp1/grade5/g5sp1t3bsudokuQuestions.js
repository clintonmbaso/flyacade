const g5sp1t3bsudokuQuestions = [
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term", 
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
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
},


/*
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [8, null, null, null, null, null, null, null, null],
        [null, null, 3, 6, null, null, null, null, null],
        [null, 7, null, null, 9, null, 2, null, null],
        [null, 5, null, null, null, 7, null, null, null],
        [null, null, null, null, 4, 5, 7, null, null],
        [null, null, null, 1, null, null, null, 3, null],
        [null, null, 1, null, null, null, null, 6, 8],
        [null, null, 8, 5, null, null, null, 1, null],
        [null, 9, null, null, null, null, 4, null, null]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [null, 2, null, 6, null, 8, null, null, null],
        [5, 8, null, null, null, 9, 7, null, null],
        [null, null, null, null, 4, null, null, null, null],
        [3, 7, null, null, null, null, 5, null, null],
        [6, null, null, null, null, null, null, null, 4],
        [null, null, 8, null, null, null, null, 1, 3],
        [null, null, null, null, 2, null, null, null, null],
        [null, null, 9, 8, null, null, null, 3, 6],
        [null, null, null, 3, null, 6, null, 9, null]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [null, null, 5, 3, null, null, null, null, null],
        [8, null, null, null, null, null, null, 2, null],
        [null, 7, null, null, 1, null, 5, null, null],
        [4, null, null, null, null, 5, 3, null, null],
        [null, 1, null, null, 7, null, null, null, 6],
        [null, null, 3, 2, null, null, null, 8, null],
        [null, 6, null, 5, null, null, null, null, 9],
        [null, null, 4, null, null, null, null, 3, null],
        [null, null, null, null, null, 9, 7, null, null]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [null, null, null, null, null, null, null, null, null],
        [null, null, 1, null, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [5, 3, null, null, 7, null, null, null, null],
        [6, null, null, 1, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [null, 2, null, 6, null, 8, null, null, null],
        [5, 8, null, null, null, null, null, 9, 7],
        [null, null, null, null, 3, 4, null, 1, null],
        [7, 5, 3, null, null, null, null, null, 2],
        [null, null, null, 1, 9, 5, null, null, null],
        [6, null, null, null, null, null, 5, 3, 1],
        [null, 9, null, 4, 5, null, null, null, null],
        [4, 7, null, null, null, null, null, 2, 6],
        [null, null, null, 7, null, 6, null, 5, null]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [9, 3, null, null, 7, null, 8, null, null],
        [null, 7, null, 2, null, null, 6, null, 9],
        [null, 1, null, null, null, 3, null, 5, null],
        [8, 9, null, null, null, null, null, null, null],
        [null, null, 7, null, null, null, 3, null, null],
        [null, null, null, null, null, null, null, 2, 8],
        [null, 6, null, 5, null, null, null, 1, null],
        [3, null, 8, null, null, 6, null, 9, null],
        [null, null, 2, null, 4, null, null, 6, 7]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [null, null, 4, 3, null, null, 2, 9, null],
        [null, 9, null, null, 2, null, null, 3, null],
        [null, 2, 8, null, null, null, null, 6, 4],
        [2, null, 6, null, null, 4, null, 7, 8],
        [7, null, null, null, null, null, null, null, 5],
        [8, 5, null, 2, null, null, 6, null, 9],
        [4, 7, null, null, null, null, 8, 5, null],
        [null, 1, null, null, 5, null, null, 4, null],
        [null, 6, 5, null, null, 8, 9, null, null]
    ]
},
{
    type: "sudoku",
    class: "Avian Aces",
    subject: "Special Paper 1",
    term: "Term 3",
    part: "End Term",  
    question: "Fill in the Sudoku puzzle.",
    description: "9x9 Sudoku",
    puzzleData: [
        [null, 6, null, 1, null, null, null, 7, 9],
        [5, null, null, null, 9, 3, null, null, 8],
        [null, null, 8, null, null, 6, null, null, 2],
        [8, 5, null, 4, null, null, null, 1, 3],
        [9, null, 6, null, null, null, 7, null, 4],
        [2, 3, null, null, null, 8, null, 5, 6],
        [3, null, null, 9, null, null, 4, null, null],
        [7, null, null, 5, 6, null, null, null, 1],
        [6, 9, null, null, null, 1, null, 8, null]
    ]
}*/
];