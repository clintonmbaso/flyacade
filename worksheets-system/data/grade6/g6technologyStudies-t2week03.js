// Grade 6 Technology Studies - Term 2 Week 3
const grade6TechnologyWeek3 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 3,
        title: "Multiplication in Spreadsheets",
        description: "Learning to multiply numbers using cell references, multiple multiplication, and practical shopping list applications"
    },
    
    monday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Basic Multiplication - Multiplying Two Real Numbers Using Cell References",
        lessonContent: `
            <p>Welcome to spreadsheets! Today we'll learn how to perform multiplication using cell references instead of typing numbers directly.</p>
            <p><strong>Key Question:</strong> How can we make a spreadsheet multiply numbers automatically?</p>
            <p><strong>Introduction:</strong> Spreadsheets like Microsoft Excel, Google Sheets, or LibreOffice Calc are powerful tools for calculations. Instead of using a calculator, we can enter formulas that update automatically when numbers change.</p>
            <p><strong>Spreadsheet Basics:</strong></p>
            <ul>
                <li><strong>Cells:</strong> Each box in a spreadsheet (identified by column letter and row number, like A1, B2)</li>
                <li><strong>Formulas:</strong> Equations that perform calculations (always start with = sign)</li>
                <li><strong>Cell References:</strong> Using a cell's address (like A1) instead of typing the number directly</li>
            </ul>
            <p><strong>Multiplication Symbol:</strong> In spreadsheets, the asterisk (*) is used for multiplication</p>
            <p><strong>Basic Multiplication Formula:</strong></p>
            <ul>
                <li><code>=A1*B1</code> - Multiplies the value in cell A1 by the value in cell B1</li>
                <li><code>=5*3</code> - Multiplies the numbers 5 and 3 (but using cell references is better!)</li>
            </ul>
            <p><strong>Why Use Cell References?</strong></p>
            <ul>
                <li>If you change a number in a cell, all formulas using that cell update automatically</li>
                <li>You can copy formulas to other cells</li>
                <li>It saves time and reduces errors</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Example 1: Simple Multiplication</div>
                <p>Type 8 in cell A1 and 7 in cell B1. In cell C1, type <code>=A1*B1</code>. Press Enter. Cell C1 will show 56!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Example 2: Automatic Updates</div>
                <p>If you change A1 from 8 to 10, cell C1 automatically changes from 56 to 70! That's the power of cell references.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 3: Decimal Numbers</div>
                <p>Spreadsheets work with decimals too! <code>=2.5*4.2</code> or <code>=C5*D5</code> where C5=2.5 and D5=4.2 equals 10.5.</p>
            </div>
        `,
        taskInstructions: "Practice creating multiplication formulas using cell references in a spreadsheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Setting Up Your Spreadsheet</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open a new spreadsheet. Enter the following data:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px; font-family: monospace;">
                        Cell A1: Type "First Number" <br>
                        Cell B1: Type "Second Number" <br>
                        Cell C1: Type "Product" <br>
                        Cell A2: Type 12 <br>
                        Cell B2: Type 4 <br>
                        Cell A3: Type 15 <br>
                        Cell B3: Type 6 <br>
                        Cell A4: Type 7.5 <br>
                        Cell B4: Type 3
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Multiplication Formulas</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In cell C2, enter a formula that multiplies A2 by B2. Write the formula you used:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What answer appeared in C2? _________
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Repeat for row 3 and row 4. Write the formulas below:
                    <div>Cell C3 formula: _________ (Expected answer: 90)</div>
                    <div>Cell C4 formula: _________ (Expected answer: 22.5)</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practice Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create formulas (using cell references) for these problems. Assume you'll put the first number in A10 and second in B10:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 9 × 8: Formula = _________</div>
                        <div>b) 14 × 6: Formula = _________</div>
                        <div>c) 3.5 × 2.5: Formula = _________</div>
                        <div>d) 100 × 0.5: Formula = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill Down Feature</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> After entering the formula in C2, click and drag the small square at the bottom-right corner of C2 down to C4. What happens?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a multiplication table for numbers 1-5 (1×1 through 5×5) using a spreadsheet. Use cell references for all formulas.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Multiple Multiplication - Multiplying More Than Two Numbers in a Single Formula",
        lessonContent: `
            <p>Today we'll expand our skills by multiplying three or more numbers in a single spreadsheet formula!</p>
            <p><strong>Key Question:</strong> How can we multiply three or more numbers using one formula?</p>
            <p><strong>Review:</strong> Yesterday we learned <code>=A1*B1</code> to multiply two numbers.</p>
            <p><strong>Multiple Multiplication:</strong></p>
            <ul>
                <li>You can multiply as many numbers as you want in one formula</li>
                <li>Use the asterisk (*) between each number or cell reference</li>
                <li>Spreadsheets follow the order of operations (multiplication from left to right)</li>
            </ul>
            <p><strong>Examples of Multiple Multiplication Formulas:</strong></p>
            <ul>
                <li><code>=A1*B1*C1</code> - Multiplies three cells together</li>
                <li><code>=2*3*4*5</code> - Multiplies four numbers directly (equals 120)</li>
                <li><code>=A1*B1*C1*D1*E1</code> - Multiplies five cells together</li>
                <li><code>=A1*5*B2</code> - Mix of cell references and typed numbers</li>
            </ul>
            <p><strong>Order of Operations Reminder:</strong></p>
            <ul>
                <li>Multiplication is performed from left to right</li>
                <li><code>=2*3*4</code> is the same as <code>((2*3)*4)</code> = 24</li>
                <li>You can use parentheses for clarity: <code>=(A1*B1)*C1</code></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 1: Three Numbers</div>
                <p>If A1=2, B1=3, C1=4, then <code>=A1*B1*C1</code> gives 2×3×4 = 24.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-boxes"></i> Example 2: Four Numbers</div>
                <p><code>=5*4*3*2</code> equals 5×4=20, 20×3=60, 60×2=120. The result is 120.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mix"></i> Example 3: Mixed References</div>
                <p><code>=A1*10*B2</code> where A1=3 and B2=2 gives 3×10×2 = 60.</p>
            </div>
        `,
        taskInstructions: "Practice creating formulas that multiply three or more numbers using cell references.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Setting Up Your Spreadsheet</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open a new spreadsheet. Enter the following data:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px; font-family: monospace;">
                        Cell A1: 2 &nbsp;&nbsp; Cell B1: 3 &nbsp;&nbsp; Cell C1: 4 &nbsp;&nbsp; Cell D1: 5<br>
                        Cell A2: 1.5 &nbsp;&nbsp; Cell B2: 2 &nbsp;&nbsp; Cell C2: 3 &nbsp;&nbsp; Cell D2: 4<br>
                        Cell A3: 10 &nbsp;&nbsp; Cell B3: 2 &nbsp;&nbsp; Cell C3: 3<br>
                        Cell A4: 4 &nbsp;&nbsp; Cell B4: 5 &nbsp;&nbsp; Cell C4: 2 &nbsp;&nbsp; Cell D4: 3 &nbsp;&nbsp; Cell E4: 2
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Multiple Multiplication Formulas</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In cell E1, write a formula that multiplies A1 × B1 × C1 × D1:
                    <div>Formula: _________</div>
                    <div>Expected answer: 120 &nbsp;&nbsp; Your answer: _________</div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> In cell E2, write a formula that multiplies A2 × B2 × C2 × D2:
                    <div>Formula: _________</div>
                    <div>Expected answer: 36 &nbsp;&nbsp; Your answer: _________</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> In cell D3, write a formula that multiplies A3 × B3 × C3 (three numbers):
                    <div>Formula: _________</div>
                    <div>Expected answer: 60 &nbsp;&nbsp; Your answer: _________</div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> In cell F4, write a formula that multiplies A4 × B4 × C4 × D4 × E4 (five numbers):
                    <div>Formula: _________</div>
                    <div>Expected answer: 240 &nbsp;&nbsp; Your answer: _________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Practice (Numbers + Cell References)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write formulas for the following (use cell references when possible):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Multiply cell A1 × 10 × cell B1: Formula = _________</div>
                        <div>b) Multiply 5 × cell C2 × 3 × cell D2: Formula = _________</div>
                        <div>c) Multiply cell A3 × cell B3 × 2.5: Formula = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Create a spreadsheet that calculates the volume of a box (length × width × height). Let the user type length in A10, width in B10, and height in C10. What formula would you put in D10?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Create a spreadsheet with 5 different multiple multiplication problems (each with at least 3 numbers). Use only cell references, no typed numbers in your formulas.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Practical Application - Creating a Simple Shopping List (Quantity × Price)",
        lessonContent: `
            <p>Today we'll apply our multiplication skills to a real-world scenario: creating a shopping list that calculates total costs!</p>
            <p><strong>Key Question:</strong> How can a spreadsheet help us calculate the total cost of items in a shopping cart?</p>
            <p><strong>Real-World Application:</strong></p>
            <ul>
                <li>Grocery stores, online shopping, and businesses use spreadsheets to calculate costs</li>
                <li>The formula is simple: <strong>Total = Quantity × Price</strong></li>
                <li>Then we can add all item totals to get the <strong>Grand Total</strong></li>
            </ul>
            <p><strong>Shopping List Spreadsheet Structure:</strong></p>
            <div style="background: #f5f5f5; padding: 10px; font-family: monospace; margin: 10px 0;">
                Column A: Item Name<br>
                Column B: Quantity<br>
                Column C: Price per Item<br>
                Column D: Total Cost (Quantity × Price)<br>
                Row below: Grand Total (SUM of all totals)
            </div>
            <p><strong>Key Formulas for Today:</strong></p>
            <ul>
                <li><code>=B2*C2</code> - Calculates total for an item (quantity × price)</li>
                <li><code>=SUM(D2:D10)</code> - Adds up all the totals to get the grand total</li>
            </ul>
            <p><strong>Why This Matters:</strong> Understanding how to build spreadsheets for calculations prepares you for budgeting, business, and everyday money management!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Example: Grocery Shopping</div>
                <p>If you buy 3 apples at $0.50 each: Total = 3 × 0.50 = $1.50<br>
                Spreadsheet formula: <code>=B2*C2</code> where B2=3 and C2=0.50</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Example: Complete Shopping List</div>
                <p>
                    Item: Apples | Qty: 3 | Price: $0.50 | Total: $1.50<br>
                    Item: Bread | Qty: 2 | Price: $2.00 | Total: $4.00<br>
                    Item: Milk | Qty: 1 | Price: $3.50 | Total: $3.50<br>
                    <strong>GRAND TOTAL: $9.00</strong>
                </p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Example: SUM Function</div>
                <p>If your item totals are in cells D2, D3, and D4, use <code>=SUM(D2:D4)</code> to add them all up automatically.</p>
            </div>
        `,
        taskInstructions: "Create a complete shopping list spreadsheet with quantity, price, totals, and grand total.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build Your Shopping List</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open a new spreadsheet and create the following shopping list:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Quantity</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Price per Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Total Cost</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Apples</td><td style="padding: 8px; border: 1px solid #ddd;">4</td><td style="padding: 8px; border: 1px solid #ddd;">$0.75</td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Bananas</td><td style="padding: 8px; border: 1px solid #ddd;">6</td><td style="padding: 8px; border: 1px solid #ddd;">$0.50</td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Bread</td><td style="padding: 8px; border: 1px solid #ddd;">1</td><td style="padding: 8px; border: 1px solid #ddd;">$2.50</td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Milk</td><td style="padding: 8px; border: 1px solid #ddd;">2</td><td style="padding: 8px; border: 1px solid #ddd;">$3.00</td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Eggs</td><td style="padding: 8px; border: 1px solid #ddd;">12</td><td style="padding: 8px; border: 1px solid #ddd;">$0.25</td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr style="background-color: #e8f4f8;"><td colspan="3" style="padding: 8px; border: 1px solid #ddd;"><strong>GRAND TOTAL</strong></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the Formulas</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the formula to calculate the Total Cost for Apples (assuming Quantity is in column B and Price is in column C):
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> After calculating the total for Apples, how can you quickly copy the formula to the other items?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What formula would you use to calculate the GRAND TOTAL (sum of all item totals)?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Calculate and Verify</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Calculate each item's total manually (showing your work):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Apples: 4 × $0.75 = $_________</div>
                        <div>Bananas: 6 × $0.50 = $_________</div>
                        <div>Bread: 1 × $2.50 = $_________</div>
                        <div>Milk: 2 × $3.00 = $_________</div>
                        <div>Eggs: 12 × $0.25 = $_________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Add all the totals to get the Grand Total: $_________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Shopping List</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Create your own shopping list with at least 5 items. Include quantities, prices, and use formulas to calculate totals and grand total. Describe your spreadsheet below:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> How does using a spreadsheet for a shopping list save time compared to using a calculator?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> If you wanted to add a 10% tax to the grand total, what formula would you use?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create a spreadsheet for a birthday party shopping list with 8 items. Include item name, quantity, price per item, total cost, and grand total. Email or save your spreadsheet to share with the class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek3);
    console.log("grade6-technology-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek3);
    console.log("grade6-technology-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek3',
        metadata: grade6TechnologyWeek3.metadata,
        days: grade6TechnologyWeek3
    });
    console.log("grade6-technology-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek3 = grade6TechnologyWeek3;
console.log("grade6-technology-week3.js loaded and registered successfully");