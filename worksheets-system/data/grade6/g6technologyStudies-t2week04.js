// Grade 6 Technology Studies - Term 2 Week 4 Data
const grade6TechnologyWeek4 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 4,
        title: "Division in Spreadsheets",
        description: "Learning basic division operations in spreadsheets, comparing results, and creating practical sharing sheets"
    },
    
    monday: {
        subject: "Technology Studies",
        topic: "Spreadsheet Operations",
        subtopic: "Basic Division (/)",
        lessonContent: `
            <p>Welcome to our exploration of division in spreadsheets! Today we'll learn how to divide numbers using the forward slash (/) operator.</p>
            <p><strong>Key Question:</strong> How can we use a spreadsheet to perform division calculations quickly and accurately?</p>
            <p><strong>Introduction:</strong> Spreadsheets are powerful tools for performing mathematical operations. Division is one of the four basic operations we use every day - from splitting a bill at a restaurant to calculating averages.</p>
            <p><strong>The Division Operator:</strong></p>
            <ul>
                <li>In spreadsheets, division is represented by the <strong>forward slash (/)</strong></li>
                <li>Formula format: <strong>=A1/B1</strong> or <strong>=number1/number2</strong></li>
                <li>Always start a formula with an <strong>equals sign (=)</strong></li>
                <li>Example: <strong>=10/2</strong> would give the result <strong>5</strong></li>
            </ul>
            <p><strong>Parts of a Division Formula:</strong></p>
            <ol>
                <li><strong>Dividend:</strong> The number being divided (numerator)</li>
                <li><strong>Divisor:</strong> The number you are dividing by (denominator)</li>
                <li><strong>Quotient:</strong> The result of division</li>
            </ol>
            <p><strong>Important Rules:</strong></p>
            <ul>
                <li>You cannot divide by zero - this will cause an error (#DIV/0!)</li>
                <li>Formulas update automatically when source numbers change</li>
                <li>You can divide cell references OR direct numbers</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Simple Division</div>
                <p>To divide 15 by 3 in a spreadsheet: type <strong>=15/3</strong> into any cell and press Enter. The result (5) will appear instantly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Cell Reference Division</div>
                <p>If cell A1 contains 20 and cell B1 contains 4, typing <strong>=A1/B1</strong> in cell C1 will give the result 5. When you change A1 or B1, C1 updates automatically!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Division by Zero</div>
                <p>Typing <strong>=10/0</strong> will display <strong>#DIV/0!</strong> because dividing by zero is mathematically impossible. Always check that your divisor is not zero!</p>
            </div>
        `,
        taskInstructions: "Practice basic division formulas using both direct numbers and cell references.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Direct Number Division</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the spreadsheet formula for each division problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 24 ÷ 6 = ___________</div>
                        <div>b) 100 ÷ 4 = ___________</div>
                        <div>c) 45 ÷ 9 = ___________</div>
                        <div>d) 81 ÷ 3 = ___________</div>
                        <div>e) 144 ÷ 12 = ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Cell Reference Division</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> If the following values are in cells, write the division formula to calculate the quotient:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Cell A2 = 30, Cell B2 = 5 → Formula in C2: ___________</div>
                        <div>b) Cell D5 = 64, Cell E5 = 8 → Formula in F5: ___________</div>
                        <div>c) Cell G10 = 200, Cell H10 = 25 → Formula in I10: ___________</div>
                        <div>d) Cell B12 = 150, Cell C12 = 3 → Formula in D12: ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Error Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What error message would appear and why?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) <strong>=49/0</strong> → Error: ___________ Reason: ___________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) <strong>=A1/B1</strong> where B1 is empty → Error: ___________ Reason: ___________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Practice Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Calculate the following using spreadsheet formulas (show the formula and result):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 250 ÷ 10 = Formula: ___________ Result: ___________</div>
                        <div>• 36 ÷ 0.5 = Formula: ___________ Result: ___________</div>
                        <div>• 1000 ÷ 20 = Formula: ___________ Result: ___________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a list of 5 division problems with answers. Then write the spreadsheet formula for each problem.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Spreadsheet Operations",
        subtopic: "Comparing Results & Auto-Updating",
        lessonContent: `
            <p>Today we'll discover one of the most powerful features of spreadsheets: automatic updating! When you change numbers, division results change instantly.</p>
            <p><strong>Key Question:</strong> How does a spreadsheet update division results when we change the original numbers?</p>
            <p><strong>The Power of Automatic Updates:</strong></p>
            <ul>
                <li>Spreadsheets are <strong>dynamic</strong> - they recalculate automatically</li>
                <li>When you change a number in a cell, every formula that uses that cell updates immediately</li>
                <li>This saves time and prevents calculation errors</li>
            </ul>
            <p><strong>Comparing Different Sets of Numbers:</strong></p>
            <ul>
                <li>You can create multiple division formulas side by side</li>
                <li>Compare quotients from different dividend/divisor pairs</li>
                <li>See how changing one number affects the result</li>
            </ul>
            <p><strong>Example Scenario:</strong></p>
            <ul>
                <li>Set 1: 100 items shared among 5 people → 20 each</li>
                <li>Set 2: 100 items shared among 10 people → 10 each</li>
                <li>Set 3: 100 items shared among 4 people → 25 each</li>
                <li>Watch how the quotient changes as the divisor changes!</li>
            </ul>
            <p><strong>What-If Analysis:</strong></p>
            <ul>
                <li>Spreadsheets are perfect for asking "what if" questions</li>
                <li>What if we increase the number of people? (divisor increases, quotient decreases)</li>
                <li>What if we have more items? (dividend increases, quotient increases)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Instant Updates</div>
                <p>Imagine cell A1 = 60, B1 = 10, and C1 = A1/B1 (result = 6). If you change B1 to 5, C1 instantly becomes 12! No need to recalculate manually.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Comparing Scenarios</div>
                <p>Create columns for different group sizes: 2 people, 4 people, 5 people, 8 people, 10 people. Divide the same total (e.g., 40 cookies) by each group size. Compare how the cookie-per-person changes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> What-If Power</div>
                <p>"What if 120 students are split into 6 classes?" (20 per class). "What if split into 8 classes?" (15 per class). A spreadsheet lets you test unlimited scenarios in seconds!</p>
            </div>
        `,
        taskInstructions: "Create multiple division formulas and observe how results update when numbers change.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fixed Dividend, Changing Divisors</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Imagine you have 120 cookies to share. Complete the table showing how many cookies each person gets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Number of People (Divisor)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Spreadsheet Formula</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cookies Per Person (Quotient)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">4 people</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">=120/4</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">6 people</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">=120/6</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">8 people</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">=120/8</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">10 people</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">=120/10</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">12 people</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">=120/12</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fixed Divisor, Changing Dividends</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> 8 friends are sharing different amounts of money. Complete the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Total Money (Dividend)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Spreadsheet Formula</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Money Per Friend</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$240</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$160</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$320</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$88</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Observing Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer the following questions based on your tables above:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) As the number of people increases (divisor gets larger), what happens to the cookies per person?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) As the total money increases (dividend gets larger), what happens to the money per friend?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) If the divisor doubles, what happens to the quotient?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a scenario of your choice (e.g., sharing pencils, splitting pizza slices, dividing minutes of video time). Show your data in a table:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Create a spreadsheet (on paper or digital) showing how sharing 100 candies among different group sizes (2,4,5,10,20,25 people) changes the result. Write a sentence explaining the pattern you observe.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Spreadsheet Operations",
        subtopic: "Practical Application - Sharing Sheet",
        lessonContent: `
            <p>Today we'll apply our division skills to create a practical "Sharing Sheet" - a tool that divides a total amount of items among a group of people.</p>
            <p><strong>Key Question:</strong> How can we create a reusable spreadsheet that helps us divide any number of items among any number of people?</p>
            <p><strong>The Sharing Sheet Concept:</strong></p>
            <ul>
                <li>A sharing sheet is a simple spreadsheet with three main cells:</li>
                <ul>
                    <li><strong>Total Items</strong> (the dividend)</li>
                    <li><strong>Number of People</strong> (the divisor)</li>
                    <li><strong>Items Per Person</strong> (the quotient - calculation cell)</li>
                </ul>
                <li>When you change either the total items or number of people, the items per person updates automatically!</li>
            </ul>
            <p><strong>Creating Your Sharing Sheet:</strong></p>
            <ol>
                <li>Label cell A1: "Total Items"</li>
                <li>Label cell A2: "Number of People"</li>
                <li>Label cell A3: "Items Per Person"</li>
                <li>Enter your total items in B1 (e.g., 50)</li>
                <li>Enter number of people in B2 (e.g., 10)</li>
                <li>In B3, enter the formula: <strong>=B1/B2</strong></li>
                <li>Result shows how many items each person gets!</li>
            </ol>
            <p><strong>Real-World Applications:</strong></p>
            <ul>
                <li>Party planning: dividing snacks among guests</li>
                <li>Classroom: splitting supplies among groups</li>
                <li>Budgeting: dividing allowance among spending categories</li>
                <li>Cooking: scaling recipes up or down</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-birthday-cake"></i> Birthday Party Sharing</div>
                <p>You have 48 cupcakes for a party. If 12 guests arrive, each gets 4 cupcakes. If 16 guests arrive, each gets 3 cupcakes. Your sharing sheet calculates this instantly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Classroom Supply Sharing</div>
                <p>A teacher has 120 pencils to share among 5 groups. The sharing sheet shows each group gets 24 pencils. If the teacher adds 2 more groups (7 total), each group gets about 17 pencils.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Allowance Budgeting</div>
                <p>You earn $20 per week. Your sharing sheet divides it into: Savings (50% = $10), Spending (30% = $6), Charity (20% = $4). Change the percentages to see different distributions!</p>
            </div>
        `,
        taskInstructions: "Design and create a Sharing Sheet that divides items among people, then test different scenarios.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Design Your Sharing Sheet Layout</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label your sharing sheet layout (cell positions and labels):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2; background: #f8f9fa;">
                        <p style="text-align: center; color: #666; padding-top: 60px;">[Draw your spreadsheet layout here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sharing Sheet Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each scenario, calculate the items per person:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Scenario</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Total Items</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Number of People</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Formula</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Items Per Person</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Classroom Pencils</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">96</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">8 groups</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Pizza Party</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">60 slices</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">15 guests</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Water Bottles</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">72</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">6 teams</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Camping Food</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">84 meals</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">12 campers</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Your Choice:</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Sharing Sheet Scenario</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Describe a real-life situation where you would use a sharing sheet:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in your sharing sheet template with your chosen numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Total Items: _________</div>
                        <div>Number of People: _________</div>
                        <div>Formula (using cell references): _________</div>
                        <div>Result (Items Per Person): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Testing Different Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Using your sharing sheet from above, answer these "what if" questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What if you had 30 more items? New total: _________ New items per person: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) What if 5 more people joined? New number of people: _________ New items per person: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) What if you had half the original items? New total: _________ New items per person: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why would someone use a spreadsheet sharing sheet instead of a calculator?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a full Sharing Sheet on paper with 5 different test scenarios. Show the total items, number of people, formula, and items per person for each scenario. Write one sentence explaining how this tool helps with fair sharing.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek4);
    console.log("grade6-technology-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek4);
    console.log("grade6-technology-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek4',
        metadata: grade6TechnologyWeek4.metadata,
        days: grade6TechnologyWeek4
    });
    console.log("grade6-technology-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek4 = grade6TechnologyWeek4;
console.log("grade6-technology-week4.js loaded and registered successfully");