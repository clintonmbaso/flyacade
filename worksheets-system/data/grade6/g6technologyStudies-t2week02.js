// Grade 6 Technology Studies - Term 2 Week 2
const grade6TechnologyWeek2 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 2,
        title: "Introduction to Spreadsheets",
        description: "Understanding spreadsheet software, identifying rows/columns/cell addresses, data entry, and spreadsheet symbols"
    },
    
    monday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Introduction to Spreadsheet Software",
        lessonContent: `
            <p>Welcome to the world of spreadsheets! Today we'll learn what spreadsheet software is and how to navigate its basic structure.</p>
            <p><strong>Key Question:</strong> What is a spreadsheet and why do people use it?</p>
            <p><strong>Introduction:</strong> A <strong>spreadsheet</strong> is a computer program that organizes data into rows and columns. It helps people calculate, analyze, and store information efficiently. Popular spreadsheet programs include Microsoft Excel, Google Sheets, and Apple Numbers.</p>
            <p><strong>Why Do We Use Spreadsheets?</strong></p>
            <ul>
                <li>Organizing data (like class lists or inventories)</li>
                <li>Performing calculations (adding up scores or expenses)</li>
                <li>Creating charts and graphs from data</li>
                <li>Analyzing information (finding averages, totals, trends)</li>
            </ul>
            <p><strong>Basic Spreadsheet Vocabulary:</strong></p>
            <ol>
                <li><strong>Row:</strong> A horizontal line of cells identified by numbers (1, 2, 3...)</li>
                <li><strong>Column:</strong> A vertical line of cells identified by letters (A, B, C...)</li>
                <li><strong>Cell:</strong> The intersection of a row and a column where data is entered</li>
                <li><strong>Cell Address (Reference):</strong> The unique name of a cell, combining column letter and row number (e.g., A1, B3, C5)</li>
                <li><strong>Worksheet (Sheet):</strong> A single page within a spreadsheet file</li>
                <li><strong>Workbook:</strong> The entire spreadsheet file containing multiple worksheets</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Think of a Grid</div>
                <p>A spreadsheet is like a giant grid or table. The rows go left-to-right (like lying down), and columns go up-and-down (like standing tall).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marker-alt"></i> Cell Address = Position</div>
                <p>Think of cell addresses like coordinates on a map. A1 is the top-left corner. Just like "seat B3" on an airplane tells you exactly where to sit!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Real-World Uses</div>
                <p>Teachers use spreadsheets to track grades, stores use them to manage inventory, and scientists use them to record experiment data!</p>
            </div>
        `,
        taskInstructions: "Identify rows, columns, and cell addresses on a blank spreadsheet grid.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Rows and Columns</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the blank spreadsheet grid below:
                    <div style="margin-top: 10px; overflow-x: auto;">
                        <table style="border-collapse: collapse; width: 100%; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="border: 1px solid #ddd; padding: 8px;"></th>
                                <th style="border: 1px solid #ddd; padding: 8px;">A</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">B</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">C</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">D</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">E</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>1</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>2</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>3</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>4</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>5</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">&nbsp;</td>
                             </tr>
                        </table>
                    </div>
                    <div style="margin-top: 15px;">
                        <div>A. How many rows are visible in this grid? _________</div>
                        <div>B. How many columns are visible? _________</div>
                        <div>C. What is the column letter of the fourth column? _________</div>
                        <div>D. What is the row number of the third row? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identifying Cell Addresses</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the cell address for each location described:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The cell at column C, row 2: _________</div>
                        <div>B. The cell at column E, row 4: _________</div>
                        <div>C. The cell at column A, row 1: _________</div>
                        <div>D. The cell at column D, row 5: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> On the grid above, shade or mark the following cells:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A1 (top-left corner)</div>
                        <div>• C3 (center of grid)</div>
                        <div>• E5 (bottom-right corner)</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Spreadsheet Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you have access to a computer, open a spreadsheet program (Google Sheets or Excel). Practice moving the cursor to these cells:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Click on cell B2</div>
                        <div>• Click on cell D4</div>
                        <div>• Click on cell A5</div>
                        <div>• Click on cell C1</div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think spreadsheets use letters for columns and numbers for rows instead of all letters or all numbers?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a 6x6 grid (6 rows and 6 columns). Label the column letters A-F and row numbers 1-6. Write the cell address for the four corners of your grid.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Data Entry - Labels and Numbers",
        lessonContent: `
            <p>Today we'll practice entering different types of data into spreadsheet cells!</p>
            <p><strong>Key Question:</strong> What kinds of information can we put into a spreadsheet, and how do we enter it correctly?</p>
            <p><strong>Types of Data in Spreadsheets:</strong></p>
            <ul>
                <li><strong>Labels (Text):</strong> Words or letters that describe data. Examples: "Name", "Subject", "Math Score"</li>
                <li><strong>Numbers (Values):</strong> Numeric data used for calculations. Examples: 85, 92.5, 100</li>
                <li><strong>Formulas:</strong> Equations that perform calculations (we'll learn these later!)</li>
            </ul>
            <p><strong>How to Enter Data:</strong></p>
            <ol>
                <li>Click on the cell where you want to enter data</li>
                <li>Type the label or number</li>
                <li>Press Enter (moves down) or Tab (moves right) to confirm</li>
            </ol>
            <p><strong>Best Practices for Data Entry:</strong></p>
            <ul>
                <li>Use clear, descriptive labels for columns (e.g., "Student Name" instead of "SN")</li>
                <li>Be consistent with number formatting (all decimals or no decimals)</li>
                <li>Check your entries for accuracy before moving on</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Labels vs. Numbers</div>
                <p>"January" is a label (text). "85" is a number (value). Spreadsheets treat them differently - you can add numbers together, but you can't add labels!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Grade Tracker Example</div>
                <p>A teacher might use column A for "Student Name" (labels), column B for "Quiz 1" (numbers), and column C for "Quiz 2" (numbers).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping List Example</div>
                <p>Column A: "Item" (labels: apples, bread, milk). Column B: "Price" (numbers: 1.50, 2.00, 3.50).</p>
            </div>
        `,
        taskInstructions: "Practice entering labels and numbers into a spreadsheet grid.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Creating a Class Grade Sheet</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the blank grid below, enter the following data:
                    <div style="margin-top: 10px; overflow-x: auto;">
                        <table style="border-collapse: collapse; width: 100%; text-align: center; min-width: 400px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="border: 1px solid #ddd; padding: 8px;"></th>
                                <th style="border: 1px solid #ddd; padding: 8px;">A</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">B</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">C</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">D</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>1</strong></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>2</strong></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>3</strong></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>4</strong></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>5</strong></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                                <td style="border: 1px solid #ddd; padding: 10px;"></td>
                             </tr>
                        </table>
                    </div>
                    <div style="margin-top: 15px;">
                        <p><strong>Enter the following:</strong></p>
                        <ul>
                            <li>Cell A1: Type "Student Name" (label)</li>
                            <li>Cell B1: Type "Quiz 1" (label)</li>
                            <li>Cell C1: Type "Quiz 2" (label)</li>
                            <li>Cell D1: Type "Quiz 3" (label)</li>
                            <li>Cell A2: Type "Ana" (label)</li>
                            <li>Cell A3: Type "Ben" (label)</li>
                            <li>Cell A4: Type "Chloe" (label)</li>
                            <li>Cell A5: Type "David" (label)</li>
                            <li>Cell B2: Type 85 (number)</li>
                            <li>Cell B3: Type 92 (number)</li>
                            <li>Cell B4: Type 78 (number)</li>
                            <li>Cell B5: Type 88 (number)</li>
                            <li>Cell C2: Type 90 (number)</li>
                            <li>Cell C3: Type 87 (number)</li>
                            <li>Cell C4: Type 94 (number)</li>
                            <li>Cell C5: Type 82 (number)</li>
                        </ul>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Data Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a spreadsheet table for a topic of your choice (e.g., favorite foods, sports scores, family ages). Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• At least 3 column labels (A1, B1, C1)</div>
                        <div>• At least 4 rows of data (A2-A5)</div>
                        <div>• A mix of labels and numbers</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify Data Types</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each item below, write whether it is a LABEL or a NUMBER:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. "Science" → _________</div>
                        <div>B. 100 → _________</div>
                        <div>C. "Total Points" → _________</div>
                        <div>D. 3.14 → _________</div>
                        <div>E. "Grade 6" → _________</div>
                        <div>F. 42 → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to use clear labels in a spreadsheet? What could go wrong if labels are confusing?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a small spreadsheet on paper for your weekly allowance or expenses. Use labels in row 1 (e.g., 'Day', 'Money Earned', 'Money Spent') and enter numbers for 5 days.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Spreadsheet Symbols - Multiplication and Division",
        lessonContent: `
            <p>Today we'll learn about two important mathematical symbols used in spreadsheets: multiplication and division!</p>
            <p><strong>Key Question:</strong> How do we type multiplication and division in a spreadsheet?</p>
            <p><strong>Important Difference:</strong> Spreadsheets don't use the same symbols as regular math class!</p>
            <p><strong>Spreadsheet Math Symbols:</strong></p>
            <ul>
                <li><strong>Addition:</strong> + (plus sign) - same as regular math</li>
                <li><strong>Subtraction:</strong> - (minus sign) - same as regular math</li>
                <li><strong>Multiplication:</strong> * (asterisk) - NOT the letter x or a dot!</li>
                <li><strong>Division:</strong> / (forward slash) - NOT the ÷ symbol!</li>
                <li><strong>Equals:</strong> = (equal sign) - ALL formulas start with this</li>
            </ul>
            <p><strong>Finding the Symbols on Your Keyboard:</strong></p>
            <ol>
                <li><strong>* (Asterisk) for Multiplication:</strong> Found above the number 8 key. Hold Shift and press 8.</li>
                <li><strong>/ (Forward Slash) for Division:</strong> Found near the right Shift key, or above the number 7 on some keyboards.</li>
            </ol>
            <p><strong>Simple Formulas to Practice:</strong></p>
            <ul>
                <li>To multiply 5 by 3: <code>=5*3</code></li>
                <li>To divide 20 by 4: <code>=20/4</code></li>
                <li>To multiply cell A1 by cell B1: <code>=A1*B1</code></li>
                <li>To divide cell C1 by cell D1: <code>=C1/D1</code></li>
            </ul>
            <div class="warning-box" style="background-color: #FFF3CD; border-left: 4px solid #FFC107; padding: 10px; margin-top: 10px;">
                <strong><i class="fas fa-exclamation-triangle"></i> Remember:</strong> Every formula in a spreadsheet MUST start with an equals sign (=)!
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-keyboard"></i> Keyboard Detective</div>
                <p>Look at your keyboard: The * symbol is SHIFT + 8. The / symbol is usually near the right side, next to the period key.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Real-World Use</div>
                <p>If you have 24 cookies and 4 friends, how many each? =24/4 gives you 6. If each cookie costs $2, total cost =24*2 gives you $48.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Cell Reference Example</div>
                <p>If A1 = 15 and B1 = 3, then =A1/B1 would give you 5. If you change A1 to 20, the answer automatically updates to 6.67!</p>
            </div>
        `,
        taskInstructions: "Practice using the * and / symbols in spreadsheet formulas.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Symbol Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the correct spreadsheet symbol for each operation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Multiplication: _________</div>
                        <div>B. Division: _________</div>
                        <div>C. Which key do you press with SHIFT to get the asterisk? Key _________</div>
                        <div>D. Draw where the forward slash (/) is on a keyboard:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Formulas</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the correct spreadsheet formula for each calculation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Multiply 7 by 8: _________</div>
                        <div>B. Divide 100 by 4: _________</div>
                        <div>C. Multiply cell A2 by cell B2: _________</div>
                        <div>D. Divide cell C5 by cell D5: _________</div>
                        <div>E. Multiply 12.5 by 3: _________</div>
                        <div>F. Divide 45 by 9: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practice Grid - Calculate with Formulas</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using the data in the grid below, calculate the missing values:
                    <div style="margin-top: 10px; overflow-x: auto;">
                        <table style="border-collapse: collapse; width: 100%; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="border: 1px solid #ddd; padding: 8px;"></th>
                                <th style="border: 1px solid #ddd; padding: 8px;">A</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">B</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">C</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">D</th>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>1</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Item</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Price</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Quantity</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Total (Price × Quantity)</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>2</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Apples</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">2</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">5</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">_________</td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>3</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Bananas</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">1</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">6</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">_________</td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>4</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Oranges</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">3</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">4</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">_________</td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #f0f0f0;"><strong>5</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">Grapes</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">4</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">3</td>
                                <td style="border: 1px solid #ddd; padding: 8px;">_________</td>
                             </tr>
                            <tr style="background-color: #e8f4fd;">
                                <td style="border: 1px solid #ddd; padding: 8px; background-color: #e8f4fd;"><strong>6</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;"><strong>GRAND TOTAL</strong></td>
                                <td style="border: 1px solid #ddd; padding: 8px;"></td>
                                <td style="border: 1px solid #ddd; padding: 8px;"></td>
                                <td style="border: 1px solid #ddd; padding: 8px;">_________</td>
                             </tr>
                        </table>
                    </div>
                    <div style="margin-top: 15px;">
                        <p>Write the formulas you would use:</p>
                        <div>Cell D2 formula: _________</div>
                        <div>Cell D3 formula: _________</div>
                        <div>Cell D4 formula: _________</div>
                        <div>Cell D5 formula: _________</div>
                        <div>Cell D6 formula (add all totals): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a spreadsheet formula for each word problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A farmer has 144 eggs and puts them into cartons of 12. How many cartons? <strong>Formula:</strong> _________</div>
                        <div>B. A classroom has 6 tables with 4 chairs each. How many chairs total? <strong>Formula:</strong> _________</div>
                        <div>C. A baker makes 8 trays of 15 cookies. How many cookies? <strong>Formula:</strong> _________</div>
                        <div>D. 250 pages divided equally among 5 chapters. Pages per chapter? <strong>Formula:</strong> _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think spreadsheets use * and / instead of × and ÷ for multiplication and division?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Practice typing these formulas on a computer (if available) or write them on paper: =15*4, =100/5, =8*7, =64/8, =12.5*2. Write the answer for each.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek2);
    console.log("grade6-technology-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek2);
    console.log("grade6-technology-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek2',
        metadata: grade6TechnologyWeek2.metadata,
        days: grade6TechnologyWeek2
    });
    console.log("grade6-technology-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek2 = grade6TechnologyWeek2;
console.log("grade6-technology-week2.js loaded and registered successfully");