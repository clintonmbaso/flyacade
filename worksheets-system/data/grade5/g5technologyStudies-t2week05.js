// Grade 5 Technology Studies - Term 2 Week 5 Data
const grade5TechWeek5 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 5,
        title: "Spreadsheets - Subtraction",
        description: "Performing subtraction in spreadsheets and solving real-world problems using addition and subtraction"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Performing Subtraction in Spreadsheets",
        lessonContent: `
            <p>Welcome to our spreadsheet lesson! Today we'll learn how to use subtraction to find differences between numbers.</p>
            <p><strong>Key Question:</strong> How can we use a spreadsheet to subtract numbers quickly and accurately?</p>
            <p><strong>Introduction:</strong> Spreadsheets are powerful tools for performing calculations. Just like we use the minus sign (-) in math, spreadsheets use the same symbol to subtract numbers.</p>
            <p><strong>Basic Subtraction in Spreadsheets:</strong></p>
            <ol>
                <li><strong>Direct Subtraction:</strong> Type =10-5 and press Enter - the cell shows 5</li>
                <li><strong>Cell Reference Subtraction:</strong> If A1 contains 10 and B1 contains 5, type =A1-B1 to get 5</li>
                <li><strong>Multiple Subtractions:</strong> Type =A1-B1-C1 to subtract several numbers</li>
            </ol>
            <p><strong>Important Rules:</strong></p>
            <ul>
                <li>Every formula MUST start with an equals sign (=)</li>
                <li>Use the minus symbol (-) for subtraction</li>
                <li>Cell references (like A1, B2) tell the spreadsheet which numbers to use</li>
                <li>When you change a number in a cell, the answer automatically updates!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 1: Direct Subtraction</div>
                <p>Type <strong>=25-10</strong> in a cell. The spreadsheet shows <strong>15</strong>.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Example 2: Cell References</div>
                <p>Cell A2 has 100, Cell B2 has 30. Type <strong>=A2-B2</strong> in Cell C2. The result is <strong>70</strong>.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 3: Real Use</div>
                <p>Your allowance is $50 in cell A5. You spend $12 in cell B5. Type <strong>=A5-B5</strong> in C5 to find how much remains: <strong>$38</strong>.</p>
            </div>
        `,
        taskInstructions: "Practice using the minus symbol and cell references to perform subtraction in a spreadsheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Direct Subtraction Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the spreadsheet formula for each calculation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 20 minus 7: _________</div>
                        <div>B. 100 minus 45: _________</div>
                        <div>C. 250 minus 80: _________</div>
                        <div>D. 1,000 minus 350: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Cell Reference Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> If Cell A1 = 50 and Cell B1 = 20, what formula would you write in Cell C1?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If Cell D3 = 200, Cell E3 = 75, and Cell F3 = 25, write a formula to subtract all three:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Spreadsheet Simulation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the table below by writing the correct subtraction formula for each row:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Row</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cell A</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cell B</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Formula (A - B)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Result</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">1</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">85</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">30</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">55</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">150</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">65</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">85</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">3</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">300</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">125</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">175</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Question</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it better to use cell references (like =A1-B1) instead of typing numbers directly (like =50-20)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a simple spreadsheet on paper with 5 pairs of numbers. Write the subtraction formula and answer for each pair.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Practical Spreadsheet Application",
        lessonContent: `
            <p>Today we'll use both addition AND subtraction to solve real-world problems like shopping budgets!</p>
            <p><strong>Key Question:</strong> How can spreadsheets help us manage money and solve everyday problems?</p>
            <p><strong>Shopping List Scenario:</strong></p>
            <p>Imagine you have a budget of $50 for a school supplies shopping trip. You need to:</p>
            <ul>
                <li>Add up the prices of everything you want to buy</li>
                <li>Subtract the total from your budget to find your remaining change</li>
            </ul>
            <p><strong>Spreadsheet Formulas You'll Need:</strong></p>
            <ol>
                <li><strong>Addition:</strong> =A1+A2+A3 (adds numbers in cells A1, A2, A3)</li>
                <li><strong>Subtraction:</strong> =B1-B2 (subtracts B2 from B1)</li>
                <li><strong>Combined:</strong> =B1 - (A1+A2+A3) finds the remainder after adding items</li>
            </ol>
            <p><strong>Real-World Uses:</strong></p>
            <ul>
                <li>Calculating change after shopping</li>
                <li>Tracking weekly allowance spending</li>
                <li>Finding how much money is left after paying bills</li>
                <li>Comparing prices to find savings</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping List Example</div>
                <p>Budget: $50 in cell B1<br>
                Items: Notebook $5 (A2), Pencils $3 (A3), Eraser $2 (A4)<br>
                Total = A2+A3+A4 → $10<br>
                Change = B1 - Total → $40</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Allowance Example</div>
                <p>Weekly allowance: $20 (Cell C1)<br>
                Spent on Monday: $5 (C2), Tuesday: $3 (C3)<br>
                Total spent = C2+C3 → $8<br>
                Remaining = C1 - (C2+C3) → $12</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Price Comparison</div>
                <p>Store A price: $25, Store B price: $32<br>
                Savings = Store B - Store A → $7 saved by buying at Store A!</p>
            </div>
        `,
        taskInstructions: "Solve a shopping list scenario using addition and subtraction formulas in a spreadsheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shopping List Scenario</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have a budget of $40. Use the table below to calculate:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Price ($)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cell (for reference)</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Notebook</td><td style="padding: 8px; border: 1px solid #ddd;">8</td><td style="padding: 8px; border: 1px solid #ddd;">A2</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Pencil Case</td><td style="padding: 8px; border: 1px solid #ddd;">12</td><td style="padding: 8px; border: 1px solid #ddd;">A3</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Ruler</td><td style="padding: 8px; border: 1px solid #ddd;">5</td><td style="padding: 8px; border: 1px solid #ddd;">A4</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Glue Stick</td><td style="padding: 8px; border: 1px solid #ddd;">3</td><td style="padding: 8px; border: 1px solid #ddd;">A5</td></tr>
                         </table>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write the formula to calculate the TOTAL cost of all items:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate the total: $_________
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Budget is $40 in cell B1. Write the formula to find remaining money:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Remaining change: $_________
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Your Own Shopping List</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create your own shopping list with 4 items and a budget of $30:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Price ($)</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">$_____</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">$_____</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">$_____</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">$_____</td></tr>
                         </table>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Write the formula to find the total cost:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Total cost: $_________ &nbsp;&nbsp; Remaining change: $_________
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Maria has $25. She buys a book for $12 and a pen for $4. Write the spreadsheet formulas to find how much she has left.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> A video game costs $45. You have saved $28. How much more money do you need? Write the formula.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Why are spreadsheets useful for managing money and budgets?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a parent about a recent shopping trip. Create a spreadsheet on paper showing the items bought, their prices, the total spent, and the change received from the money given.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechWeek5);
    console.log("grade5-technology-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechWeek5);
    console.log("grade5-technology-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechWeek5',
        metadata: grade5TechWeek5.metadata,
        days: grade5TechWeek5
    });
    console.log("grade5-technology-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechWeek5 = grade5TechWeek5;
console.log("grade5-technology-week5.js loaded and registered successfully");