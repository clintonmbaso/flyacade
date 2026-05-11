// Grade 6 Technology Studies - Term 2 Week 5
const grade6TechnologyWeek5 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 5,
        title: "Combined Spreadsheet Operations",
        description: "Using mixed operations in spreadsheets: multiplication, addition, division, and subtraction in real-life contexts"
    },
    
    monday: {
        subject: "Technology Studies",
        topic: "Spreadsheet Operations",
        subtopic: "Lesson 10: Mixed Operations (Multiplying and Adding)",
        lessonContent: `
            <p>Welcome back! Today we'll learn how to combine multiplication and addition in a single spreadsheet formula.</p>
            <p><strong>Key Question:</strong> How can we calculate things like total cost with tax using one formula?</p>
            <p><strong>Introduction:</strong> In real life, we often need to multiply first, then add. For example, buying 3 apples at $2 each plus 4 bananas at $1 each requires multiplying then adding.</p>
            <p><strong>Order of Operations in Spreadsheets:</strong></p>
            <ul>
                <li>Spreadsheets follow the mathematical order: multiplication before addition</li>
                <li>Use parentheses ( ) to control which operation happens first</li>
                <li>Remember: <strong>PEMDAS</strong> (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)</li>
            </ul>
            <p><strong>Basic Mixed Operation Formula:</strong></p>
            <ul>
                <li><code>=A1*B1 + C1*D1</code> (multiplies first, then adds)</li>
                <li><code>=(A1+B1)*C1</code> (adds first, then multiplies)</li>
            </ul>
            <p><strong>Common Uses:</strong></p>
            <ul>
                <li>Calculating shopping totals with multiple items</li>
                <li>Adding tax or service charges</li>
                <li>Calculating total earnings from different products</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Total</div>
                <p>If you buy 5 pencils at $2 each and 3 erasers at $1.50 each:<br>
                Formula: <code>=5*2 + 3*1.5</code><br>
                Result: <code>10 + 4.5 = $14.50</code></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tax"></i> Adding Tax</div>
                <p>Item costs $50. Tax is 10%. Calculate total:<br>
                First method: <code>=50 + 50*0.10</code><br>
                Alternative: <code>=50*(1+0.10)</code><br>
                Result: <code>$55.00</code></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Order Matters!</div>
                <p><code>=2+3*4</code> = 14 (multiplication first: 3*4=12, then +2)<br>
                <code>=(2+3)*4</code> = 20 (parentheses first: 2+3=5, then *4)</p>
            </div>
        `,
        taskInstructions: "Practice writing and using mixed operation formulas in a spreadsheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate the Totals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write a formula for each scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4 cookies at $3 each + 2 drinks at $5 each: Formula: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) 7 notebooks at $8 each + 10 pens at $2 each: Formula: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) $200 item + 15% tax: Formula: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create This Spreadsheet</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create the following table in your spreadsheet:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Quantity</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Price per Unit</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Apples</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">6</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">$1.50</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Bananas</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">$2.00</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Oranges</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">5</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">$1.80</td>
                            </tr>
                         </table>
                    </div>
                    <div style="margin-top: 10px;">Write a formula to calculate the total cost of all items: _________</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A school buys 15 chairs at $45 each and 8 tables at $120 each. There is a $50 delivery fee. Write one formula to calculate the total cost:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the final total?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create a shopping list of 5 items with quantities and prices. Write a spreadsheet formula to calculate the total.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Spreadsheet Operations",
        subtopic: "Lesson 11: Subtraction in Context (Dividing then Subtracting)",
        lessonContent: `
            <p>Today we'll learn how to divide a total and then subtract a specific value from the result.</p>
            <p><strong>Key Question:</strong> How do we calculate something like "split a bill 4 ways, then subtract a paid deposit"?</p>
            <p><strong>Introduction:</strong> Sometimes we need to divide a total into equal parts, then subtract an amount. For example, sharing a dinner bill among friends, then subtracting what someone already paid.</p>
            <p><strong>Order Matters Remember:</strong></p>
            <ul>
                <li>Division and multiplication happen before subtraction</li>
                <li>Use parentheses to do subtraction first if needed</li>
                <li><code>=Total/4 - PaidAmount</code> (divide first, then subtract)</li>
                <li><code>=(Total - PaidAmount)/4</code> (subtract first, then divide)</li>
            </ul>
            <p><strong>Common Uses:</strong></p>
            <ul>
                <li>Splitting bills or costs among multiple people</li>
                <li>Calculating remaining amount after partial payment</li>
                <li>Figuring out equal payments minus discounts</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Splitting a Bill</div>
                <p>Total bill: $120. Split among 4 friends. One paid a $10 deposit already.<br>
                Formula: <code>=120/4 - 10</code><br>
                Each person pays: <code>$30 - $10 = $20</code></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Partial Payment</div>
                <p>Total cost: $500. 5 people sharing. One person already paid $50.<br>
                Formula: <code>=500/5 - 50</code><br>
                That person owes: <code>$100 - $50 = $50</code></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Watch the Order!</div>
                <p><code>=100/5 - 10</code> = 10 (divide first: 20, then subtract 10)<br>
                <code>=100/(5-10)</code> = ERROR! (can't divide by negative)</p>
            </div>
        `,
        taskInstructions: "Practice division and subtraction in spreadsheet formulas.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate Each Scenario</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write formulas and calculate answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) $240 split among 6 people, minus $5 each for a discount: Formula: _________ Result: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) $900 total, 3 people sharing, one already paid $100: Formula: _________ Result: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) A class of 25 students shares $500. Each student subtracts $8 for a field trip they already paid: Formula: _________ Result: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create This Spreadsheet</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A restaurant bill of $360 is to be split among 8 friends. One friend already paid a $30 deposit. Create a formula to calculate how much each person still owes:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Now, 2 other friends say they each paid $15 earlier. How much does each of them owe now? Write the updated formula:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A school buys 120 textbooks for $1,800. They will be distributed equally among 6 classes. One class already received 5 free books from a donation. How many more books does that class need? Write the formula and answer:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which formula correctly calculates: "Split $300 among 5 people, then subtract $10 from one person's share"?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. <code>=300-10/5</code></div>
                        <div>B. <code>=(300/5)-10</code></div>
                        <div>C. <code>=300/(5-10)</code></div>
                        <div>D. <code>=300/5-10</code></div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;">Correct answer(s): _________</div>
                </div>
            </div>
        `,
        homework: "Create a real-life scenario where you need to divide a total among people and then subtract a payment. Write the formula and solve it.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Spreadsheet Operations",
        subtopic: "Lesson 12: Spreadsheet Review (All Operators)",
        lessonContent: `
            <p>Today we'll bring everything together! We'll solve real-life math problems using all the spreadsheet operators we've learned.</p>
            <p><strong>Key Question:</strong> How can we use spreadsheet formulas to solve complex real-world problems efficiently?</p>
            <p><strong>Operators Review:</strong></p>
            <ul>
                <li><strong>Addition (+):</strong> Adds values together</li>
                <li><strong>Subtraction (-):</strong> Subtracts one value from another</li>
                <li><strong>Multiplication (*):</strong> Multiplies values</li>
                <li><strong>Division (/):</strong> Divides one value by another</li>
            </ul>
            <p><strong>Order of Operations (PEMDAS) Review:</strong></p>
            <ol>
                <li><strong>P</strong>arentheses first</li>
                <li><strong>E</strong>xponents (not common in basic spreadsheets)</li>
                <li><strong>M</strong>ultiplication and <strong>D</strong>ivision (left to right)</li>
                <li><strong>A</strong>ddition and <strong>S</strong>ubtraction (left to right)</li>
            </ol>
            <p><strong>Tips for Success:</strong></p>
            <ul>
                <li>Always double-check your parentheses</li>
                <li>Test your formula with easy numbers first</li>
                <li>Use cell references instead of typing numbers when possible</li>
                <li>Break complex problems into smaller steps</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Party Problem</div>
                <p>10 pizzas at $15 each. Split among 8 people. One person paid a $20 deposit.<br>
                Formula: <code>=(10*15)/8 - 20</code><br>
                Person owes: <code>150/8 - 20 = 18.75 - 20 = -$1.25</code> (they get money back!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Budget Calculation</div>
                <p>Monthly budget: $2,000. Rent: $800. Food: $300. Transport: $150.<br>
                Remaining: <code>=2000 - (800+300+150)</code> = $750 left for other expenses.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Store Discount</div>
                <p>Item: $120. Discount: 15%. Then add 8% tax.<br>
                Formula: <code>=120*(1-0.15)*(1+0.08)</code><br>
                Final price: <code>120 * 0.85 * 1.08 = $110.16</code></p>
            </div>
        `,
        taskInstructions: "Solve real-life math problems using all spreadsheet operators.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cell Reference Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In your spreadsheet, create this table and write formulas:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">A</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">B</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">C</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">25</td><td style="padding: 8px; border: 1px solid #ddd;">10</td><td style="padding: 8px; border: 1px solid #ddd;">5</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">40</td><td style="padding: 8px; border: 1px solid #ddd;">8</td><td style="padding: 8px; border: 1px solid #ddd;">12</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">100</td><td style="padding: 8px; border: 1px solid #ddd;">4</td><td style="padding: 8px; border: 1px solid #ddd;">20</td></tr>
                         </table>
                    </div>
                    <div style="margin-top: 10px;">a) In cell D1, calculate: <code>A1 * B1 + C1</code> Result: _________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>b) In cell D2, calculate: <code>(A2 - C2) / B2</code> Result: _________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>c) In cell D3, calculate: <code>A3 / B3 - C3</code> Result: _________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-Life Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A school is organizing a field trip for 120 students. The bus costs $450. Lunch costs $8 per student. Entry fee is $5 per student. The school already has a $300 donation. Write a formula to calculate the total cost each student must pay:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What is the final amount each student owes? Show your work:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a real-life word problem that requires using at least three different operators (+, -, *, /). Write the problem and the spreadsheet formula to solve it:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Exchange your problem with a partner and solve each other's problems:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A bakery sells:
                    <div style="margin-left: 20px;">
                        <div>- Cupcakes: $3 each (buy 5, get 1 free)</div>
                        <div>- Cookies: $2 each (10% discount on orders over 20 cookies)</div>
                        <div>- Pies: $15 each (free delivery on orders over $50)</div>
                    </div>
                    <div style="margin-top: 10px;">A customer buys 12 cupcakes, 25 cookies, and 2 pies. Delivery fee is $5 unless order qualifies for free delivery. Write one formula to calculate the final total:</div>
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find or create a real receipt from shopping. Use a spreadsheet to verify the total. Write down the formula you used.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek5);
    console.log("grade6-technology-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek5);
    console.log("grade6-technology-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek5',
        metadata: grade6TechnologyWeek5.metadata,
        days: grade6TechnologyWeek5
    });
    console.log("grade6-technology-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek5 = grade6TechnologyWeek5;
console.log("grade6-technology-week5.js loaded and registered successfully");