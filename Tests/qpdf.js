for (let row = 0; row < q.puzzleData.length; row++) {
    const crosswordRow = document.createElement("tr");

    for (let col = 0; col < q.puzzleData[row].length; col++) {
        const crosswordCell = document.createElement("td");

        if (q.puzzleData[row][col] === "#") {
            // Check if the cell is confined
            const isConfined = (
                row > 0 &&
                row < q.puzzleData.length - 1 &&
                col > 0 &&
                col < q.puzzleData[row].length - 1 &&
                (
                    q.puzzleData[row - 1][col] !== "#" || // Top
                    q.puzzleData[row + 1][col] !== "#" || // Bottom
                    q.puzzleData[row][col - 1] !== "#" || // Left
                    q.puzzleData[row][col + 1] !== "#"    // Right
                )
            );

            if (isConfined) {
                crosswordCell.classList.add("confined-blank");
            } else {
                crosswordCell.classList.add("black-cell");
            }
        } else {
            // Add input for playable cells
            const inputField = document.createElement("input");
            inputField.setAttribute("type", "text");
            inputField.setAttribute("maxlength", "1");
            inputField.classList.add("crossword-input");
            crosswordCell.appendChild(inputField);
        }

        crosswordRow.appendChild(crosswordCell);
    }

    crosswordTable.appendChild(crosswordRow);
}