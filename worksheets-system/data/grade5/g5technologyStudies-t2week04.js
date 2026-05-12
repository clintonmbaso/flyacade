// Grade 5 Technology Studies - Term 2 Week 4 Data
const grade5TechnologyWeek4 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 4,
        title: "Spreadsheets - Addition",
        description: "Introduction to spreadsheet tools and performing addition using formulas"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Introduction to Spreadsheet Tools",
        lessonContent: `
            <p>Welcome to the world of spreadsheets! Today we'll learn about the tools that make calculations easy and fast.</p>
            <p><strong>Key Question:</strong> How do spreadsheets help us perform calculations?</p>
            <p><strong>Introduction:</strong> A spreadsheet is a computer program that helps us organize data and perform calculations. Microsoft Excel, Google Sheets, and LibreOffice Calc are examples of spreadsheet software.</p>
            <p><strong>Important Spreadsheet Concepts:</strong></p>
            <ol>
                <li><strong>Cells:</strong> Each rectangular box where you enter data is called a cell</li>
                <li><strong>Cell Address/Reference:</strong> Every cell has a unique name made of a column letter and row number (e.g., A1, B2, C3)</li>
                <li><strong>Formula Bar:</strong> The area where you enter or edit formulas</li>
                <li><strong>The Equal Sign (=):</strong> This tells the spreadsheet that you are entering a formula, not just text or numbers</li>
            </ol>
            <p><strong>Basic Operators:</strong></p>
            <ul>
                <li><strong>Addition (+):</strong> Adds numbers together</li>
                <li>Example: =5+3 would show the result 8</li>
            </ul>
            <p><strong>How to Enter a Basic Addition:</strong></p>
            <ol>
                <li>Click on a cell where you want the answer</li>
                <li>Type the equal sign (=)</li>
                <li>Type the numbers with plus signs: 5+3</li>
                <li>Press Enter to see the result</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Cell Addresses</div>
                <p>Think of a spreadsheet like a grid. Column A, Row 1 gives you cell A1. Column B, Row 2 gives you cell B2. This is how the spreadsheet knows where to find your numbers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> The Magic Equal Sign</div>
                <p>If you type 5+3 into a cell, the spreadsheet shows "5+3" as text. But if you type =5+3, the spreadsheet calculates it and shows 8. That equal sign makes all the difference!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer"></i> Finding Your Cells</div>
                <p>Column letters go across the top (A, B, C...). Row numbers go down the side (1, 2, 3...). Find where column D meets row 5 - that's cell D5!</p>
            </div>
        `,
        taskInstructions: "Identify cell addresses and practice entering basic addition formulas.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cell Address Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the cell address for each description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Column B, Row 3: _________</div>
                        <div>b. Column D, Row 1: _________</div>
                        <div>c. Column A, Row 10: _________</div>
                        <div>d. Column C, Row 5: _________</div>
                        <div>e. Column E, Row 2: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing a Spreadsheet Grid</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a 5x5 spreadsheet grid. Label columns A-E and rows 1-5. Shade cell B3 and write "10" in it:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Understanding the Equal Sign</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What would each cell display? (Calculate or Show Text?)
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Cell contains: 10+5 → Shows: _________</div>
                        <div>b. Cell contains: =10+5 → Shows: _________</div>
                        <div>c. Cell contains: 20+15 → Shows: _________</div>
                        <div>d. Cell contains: =20+15 → Shows: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Basic Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the formula you would type to add these numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Add 12 and 8: _________</div>
                        <div>b. Add 25 and 30: _________</div>
                        <div>c. Add 7, 4, and 2: _________</div>
                        <div>d. Add 100 and 50: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What result would each formula show?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. =5+5 = _________</div>
                        <div>b. =15+3 = _________</div>
                        <div>c. =9+11 = _________</div>
                        <div>d. =22+8 = _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice writing 5 different addition formulas using two numbers each. Calculate the answers mentally or on paper.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Performing Addition in Spreadsheets",
        lessonContent: `
            <p>Today we'll learn how to use cell references to add numbers in a spreadsheet!</p>
            <p><strong>Key Question:</strong> How do we add numbers that are already in different cells?</p>
            <p><strong>Review:</strong> Yesterday we learned that typing =5+3 gives us the answer 8. But what if our numbers are already in cells?</p>
            <p><strong>Using Cell References:</strong></p>
            <ul>
                <li>Instead of typing numbers directly, we can use cell references (like A1, B2)</li>
                <li>The spreadsheet will find the numbers in those cells and add them</li>
                <li>If the numbers in the cells change, the answer automatically updates!</li>
            </ul>
            <p><strong>Formula Pattern for Addition:</strong></p>
            <ul>
                <li>=A1+B1 (adds whatever numbers are in cell A1 and cell B1)</li>
                <li>=C3+D3 (adds whatever numbers are in cell C3 and cell D3)</li>
                <li>=B2+B3+B4 (adds multiple cells together)</li>
            </ul>
            <p><strong>Step-by-Step:</strong></p>
            <ol>
                <li>Type a number in cell A1 (e.g., 15)</li>
                <li>Type a number in cell B1 (e.g., 25)</li>
                <li>Click on cell C1 (where you want the answer)</li>
                <li>Type =A1+B1</li>
                <li>Press Enter. The answer (40) appears!</li>
            </ol>
            <p><strong>Important Rules:</strong></p>
            <ul>
                <li>Always start with an equal sign (=)</li>
                <li>Use the correct cell references</li>
                <li>Double-check your typing - no spaces inside the formula</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Automatic Updating</div>
                <p>If you have =A1+B1 in cell C1, and you later change cell A1 from 15 to 20, cell C1 automatically changes from 40 to 45! No need to retype the formula.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Adding More Than Two</div>
                <p>You're not limited to two cells! Try =A1+B1+C1 to add three numbers, or =A1+A2+A3+A4 to add a column of numbers.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistakes</div>
                <p>Don't forget the equal sign! A1+B1 without the = will just show the text "A1+B1" instead of calculating. Also remember: no spaces between parts of the formula.</p>
            </div>
        `,
        taskInstructions: "Practice entering formulas using cell references to add real numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reading Cell References</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at this data and answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Cell A1 = 25, Cell B1 = 15, Cell C1 = 10, Cell D1 = 30, Cell E1 = 5</p>
                        <div>a. What would =A1+B1 show? _________</div>
                        <div>b. What would =C1+D1 show? _________</div>
                        <div>c. What would =A1+C1+E1 show? _________</div>
                        <div>d. What would =B1+D1+E1 show? _________</div>
                        <div>e. What would =A1+B1+C1+D1+E1 show? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Formulas</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the correct formula for each scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Add the numbers in cell A5 and B5: _________</div>
                        <div>b. Add the numbers in cell C2, D2, and E2: _________</div>
                        <div>c. Add the numbers in cell B10 and C10, show answer in D10: _________</div>
                        <div>d. Add the numbers in row 3, columns A through C: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing and Labeling a Spreadsheet</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a spreadsheet grid showing columns A-C and rows 1-4. Fill in:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>- Cell A1 = 12</div>
                        <div>- Cell B1 = 8</div>
                        <div>- Cell C1 = formula that adds A1+B1 (write the formula in C1)</div>
                        <div>- Cell A2 = 24</div>
                        <div>- Cell B2 = 16</div>
                        <div>- Cell C2 = formula that adds A2+B2</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sarah has numbers in cells A1=45, B1=27, and C1=18. She wants to add all three numbers in cell D1.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What formula should she type in D1? _________</div>
                        <div>b. What answer will appear? _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Michael typed "A2+B2" (without the equal sign) in cell C2. What will appear in C2? Why is this incorrect?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Accuracy Check</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> For each formula below, state whether it is CORRECT or INCORRECT. If incorrect, explain why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. =A 1 + B 1 (spaces included) → _________</div>
                        <div>b. =C3+D3 → _________</div>
                        <div>c. A4+B4 (no equal sign) → _________</div>
                        <div>d. =E2+E3+E4 → _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create your own mini spreadsheet on paper. Enter 3 pairs of numbers in different cells. Write the addition formulas that would add each pair. Calculate the answers to check your work.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyWeek4);
    console.log("grade5-technology-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyWeek4);
    console.log("grade5-technology-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyWeek4',
        metadata: grade5TechnologyWeek4.metadata,
        days: grade5TechnologyWeek4
    });
    console.log("grade5-technology-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyWeek4 = grade5TechnologyWeek4;
console.log("grade5-technology-week4.js loaded and registered successfully");