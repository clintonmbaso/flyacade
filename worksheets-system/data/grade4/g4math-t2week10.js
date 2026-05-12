// Grade 4 Mathematics - Term 2 Week 10 Data
const grade4MathWeek10 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 2,
        week: 10,
        title: "Decimal Fractions",
        description: "Mastering decimals up to two decimal places, connecting to money and measurement, and performing basic operations"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Decimal Fractions",
        subtopic: "Decimals as Parts of a Whole",
        lessonContent: `
            <p>Welcome to our revision week on decimal fractions! Today we'll learn how decimals are just another way to write fractions.</p>
            <p><strong>Key Question:</strong> What does the dot in a decimal number mean?</p>
            <p><strong>The Concept:</strong> A decimal is just another way to write a fraction. The first spot after the dot is the <strong>Tenths</strong> (1/10) and the second is the <strong>Hundredths</strong> (1/100).</p>
            <p><strong>Place Value in Decimals:</strong></p>
            <ul>
                <li><strong>Whole number part:</strong> Everything before the decimal point</li>
                <li><strong>Tenths place:</strong> First digit after the decimal - represents 1/10</li>
                <li><strong>Hundredths place:</strong> Second digit after the decimal - represents 1/100</li>
            </ul>
            <p><strong>Real-World Connection:</strong></p>
            <ul>
                <li>Money: $0.25 means 25 cents (quarter of a dollar)</li>
                <li>Measurement: 1.5 meters = 1 meter and 50 centimeters</li>
                <li>Rulers: 0.1 cm = 1 millimeter</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Example 1: The Decimal Grid</div>
                <p>Imagine a 10×10 grid with 100 squares total. If you color 47 squares:</p>
                <p>• As a fraction: 47/100<br>
                • As a decimal: 0.47<br>
                • Place value: 0 (wholes) . 4 (tenths) 7 (hundredths)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> Example 2: Money Connection</div>
                <p>$0.25 = 25/100 of a dollar = 25 cents<br>
                $1.50 = 1 whole dollar and 50/100 of a dollar</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Example 3: Measurement Connection</div>
                <p>2.75 meters = 2 meters and 75 centimeters<br>
                0.3 meters = 30 centimeters (because 0.3 × 100 = 30 cm)</p>
            </div>
        `,
        taskInstructions: "Complete the decimal grid activities and place value practice.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Decimal Grid Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Shade the grid to show each decimal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.32</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>b) 0.78</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>c) 0.05</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fraction to Decimal Conversion</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert each fraction to a decimal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 25/100 = _________</div>
                        <div>b) 7/10 = _________</div>
                        <div>c) 83/100 = _________</div>
                        <div>d) 4/10 = _________</div>
                        <div>e) 100/100 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Place Value Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For the number 36.59, identify:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Whole number part: _________</div>
                        <div>• Tenths digit: _________</div>
                        <div>• Hundredths digit: _________</div>
                        <div>• The number as a fraction: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write each amount as a decimal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 45 cents = $_________</div>
                        <div>b) 8 cents = $_________</div>
                        <div>c) 1 dollar and 25 cents = $_________</div>
                        <div>d) 2 meters and 30 centimeters = _________ m</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw a 10×10 grid. Shade 63 squares. Write the fraction and decimal that represent your shaded area.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Decimal Fractions",
        subtopic: "Adding and Subtracting Decimals",
        lessonContent: `
            <p>Today we'll learn the most important rule for adding and subtracting decimals!</p>
            <p><strong>Key Question:</strong> Why do we have to line up the decimal points?</p>
            <p><strong>The Golden Rule:</strong> The decimal points must stay in a perfectly straight vertical line - like buttons on a shirt!</p>
            <p><strong>Steps for Adding Decimals:</strong></p>
            <ol>
                <li>Write the numbers in a column, lining up the decimal points</li>
                <li>Add zeros as placeholders if needed (e.g., 1.5 becomes 1.50)</li>
                <li>Add from right to left, just like whole numbers</li>
                <li>Bring the decimal point straight down into your answer</li>
            </ol>
            <p><strong>Steps for Subtracting Decimals:</strong></p>
            <ol>
                <li>Line up the decimal points vertically</li>
                <li>Add zeros as placeholders</li>
                <li>Subtract from right to left (borrowing when needed)</li>
                <li>Bring the decimal point straight down</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Example 1: Grocery Receipt (Addition)</div>
                <p>Snack costs $1.25 and juice costs $0.80. What is the total?</p>
                <div style="font-family: monospace; font-size: 16px; background: #f5f5f5; padding: 10px;">
                      1.25<br>
                    + 0.80<br>
                    <hr style="margin: 5px 0;">
                      2.05
                </div>
                <p>Answer: $2.05</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill"></i> Example 2: Making Change (Subtraction)</div>
                <p>You pay with a $5.00 bill. The total is $2.05. How much change do you get?</p>
                <div style="font-family: monospace; font-size: 16px; background: #f5f5f5; padding: 10px;">
                      5.00<br>
                    - 2.05<br>
                    <hr style="margin: 5px 0;">
                      2.95
                </div>
                <p>Answer: $2.95 (Remember to borrow across zeros!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 3: Measurement Subtraction</div>
                <p>A ribbon is 3.45 m long. You cut off 1.28 m. How much remains?</p>
                <div style="font-family: monospace; font-size: 16px; background: #f5f5f5; padding: 10px;">
                      3.45<br>
                    - 1.28<br>
                    <hr style="margin: 5px 0;">
                      2.17
                </div>
                <p>Answer: 2.17 m</p>
            </div>
        `,
        taskInstructions: "Practice lining up decimal points and solving addition/subtraction problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Line Them Up!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rewrite each problem with decimal points lined up vertically, then solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2.34 + 1.52 = _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) 4.56 + 0.89 = _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) 7.80 - 3.25 = _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>d) 5.00 - 2.47 = _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Money Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each money problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Sarah bought a pencil for $0.75 and an eraser for $0.45. How much did she spend?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) Tom had $10.00. He spent $6.35 on lunch. How much money does he have left?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) A sandwich costs $4.50 and a drink costs $1.25. What is the total cost?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measurement Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve the measurement problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A rope is 5.75 m long. You cut off 2.30 m. How much rope is left?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) Maria ran 1.25 km in the morning and 2.50 km in the afternoon. How far did she run in total?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find the missing number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) ______ + 2.35 = 5.00</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) 8.46 - ______ = 3.21</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a grocery list with 5 items and their prices. Find the total cost. If you pay with a $20 bill, how much change do you receive?",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Decimal Fractions",
        subtopic: "Multiplying Decimals by Whole Numbers",
        lessonContent: `
            <p>Today we'll learn how to multiply decimals by whole numbers using a simple strategy!</p>
            <p><strong>Key Question:</strong> How do we know where to put the decimal point when we multiply?</p>
            <p><strong>The Strategy:</strong> Multiply as if the decimal point isn't there, then "put it back" at the end.</p>
            <p><strong>Steps for Multiplying Decimals by Whole Numbers:</strong></p>
            <ol>
                <li>Ignore the decimal point and multiply as if it were a whole number</li>
                <li>Count how many digits are AFTER the decimal in the original number</li>
                <li>The answer must have the SAME number of digits after the decimal</li>
                <li>If needed, add a zero at the beginning (e.g., .3 becomes 0.3)</li>
            </ol>
            <p><strong>Quick Reference:</strong></p>
            <ul>
                <li>0.05 has 2 decimal places → answer must have 2 decimal places</li>
                <li>1.15 has 2 decimal places → answer must have 2 decimal places</li>
                <li>0.8 has 1 decimal place → answer must have 1 decimal place</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ribbon"></i> Example 1: Ribbon Length</div>
                <p>One piece of ribbon is 1.15 m long. How long are 3 pieces?</p>
                <p><strong>Step 1:</strong> Ignore decimal: 115 × 3 = 345</p>
                <p><strong>Step 2:</strong> 1.15 has 2 decimal places</p>
                <p><strong>Step 3:</strong> Answer must have 2 decimal places</p>
                <p><strong>Answer:</strong> 3.45 m</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen"></i> Example 2: Small Decimal</div>
                <p>0.05 × 6 = ?</p>
                <p><strong>Step 1:</strong> 5 × 6 = 30</p>
                <p><strong>Step 2:</strong> 0.05 has 2 decimal places</p>
                <p><strong>Answer:</strong> 0.30 (which is the same as 0.3)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Example 3: Two-Digit Whole Number</div>
                <p>2.12 × 4 = ?</p>
                <p><strong>Step 1:</strong> 212 × 4 = 848</p>
                <p><strong>Step 2:</strong> 2.12 has 2 decimal places</p>
                <p><strong>Answer:</strong> 8.48</p>
            </div>
        `,
        taskInstructions: "Practice multiplying decimals by whole numbers using the 'ignore then replace' method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Multiplication</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Multiply each decimal by the whole number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.05 × 7 = _________</div>
                        <div>b) 0.12 × 5 = _________</div>
                        <div>c) 1.25 × 4 = _________</div>
                        <div>d) 2.50 × 3 = _________</div>
                        <div>e) 0.08 × 9 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A bag of apples weighs 1.25 kg. How much do 6 bags weigh?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) A bottle of water costs $0.85. What is the cost of 8 bottles?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) A piece of string is 0.75 m long. How long are 12 pieces?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the multiplication table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">×</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">2</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">5</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">10</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f0f0f0;">0.25</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f0f0f0;">1.50</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; background-color: #f0f0f0;">0.08</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            20row
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A pack of 6 markers costs $4.50. How much does one marker cost? (Hint: This is division - we'll learn that tomorrow!)
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 items at home with prices (or estimated prices). Calculate the cost of buying 3 of each item.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Decimal Fractions",
        subtopic: "Dividing Decimals (No Remainders)",
        lessonContent: `
            <p>Today we'll learn how to divide decimals by whole numbers - no remainders allowed!</p>
            <p><strong>Key Question:</strong> Where does the decimal point go when we divide?</p>
            <p><strong>The Strategy:</strong> Bring the decimal point straight UP into the "attic" (the quotient/answer line) and divide like normal long division.</p>
            <p><strong>Steps for Dividing Decimals by Whole Numbers:</strong></p>
            <ol>
                <li>Write the division problem using the long division symbol (\u2514\u2500)</li>
                <li>Bring the decimal point straight up into the quotient (answer) space</li>
                <li>Divide as you would with whole numbers</li>
                <li>If needed, add zeros to continue dividing (for no remainders)</li>
            </ol>
            <p><strong>Remember:</strong> The decimal point in the answer goes DIRECTLY above the decimal point in the dividend!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Example 1: Sharing Pizza</div>
                <p>Four friends share a large pizza that costs $12.40. How much does each friend pay?</p>
                <div style="font-family: monospace; font-size: 16px; background: #f5f5f5; padding: 10px; text-align: center;">
                        3.10<br>
                    4 \u2514\u2500 12.40<br>
                        12<br>
                    <hr style="margin: 2px 0; width: 40px; display: inline-block;">
                          0 4<br>
                          4<br>
                    <hr style="margin: 2px 0; width: 30px; display: inline-block;">
                          0
                </div>
                <p>Answer: $3.10 each</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 2: Measurement Division</div>
                <p>A 5.25 m rope is cut into 5 equal pieces. How long is each piece?</p>
                <div style="font-family: monospace; font-size: 16px; background: #f5f5f5; padding: 10px; text-align: center;">
                        1.05<br>
                    5 \u2514\u2500 5.25<br>
                        5<br>
                    <hr style="margin: 2px 0; width: 30px; display: inline-block;">
                          0 2 5<br>
                          2 5<br>
                    <hr style="margin: 2px 0; width: 30px; display: inline-block;">
                          0
                </div>
                <p>Answer: 1.05 m each</p>
            </div>
        `,
        taskInstructions: "Practice dividing decimals by whole numbers using the 'bring it straight up' method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Division</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Divide:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6.30 ÷ 3 = _________</div>
                        <div>b) 8.40 ÷ 4 = _________</div>
                        <div>c) 5.50 ÷ 5 = _________</div>
                        <div>d) 12.60 ÷ 6 = _________</div>
                        <div>e) 2.48 ÷ 2 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Long Division Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve using long division (show your work):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 7.35 ÷ 5 = _________</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        <div>b) 9.60 ÷ 4 = _________</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        <div>c) 4.20 ÷ 7 = _________</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Five friends share the cost of a gift that costs $22.50. How much does each person pay?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) A 10.8 m roll of ribbon is cut into 9 equal pieces. How long is each piece?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) A bottle of juice holds 1.25 L. It is poured equally into 5 glasses. How much juice is in each glass?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Weekly Recap Mini-Quiz</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> One problem from each day this week:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tuesday (Decimals as parts): Write 35/100 as a decimal: _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>Wednesday (Adding decimals): 2.45 + 1.38 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>Thursday (Multiplying decimals): 1.25 × 6 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>Friday (Dividing decimals): 8.40 ÷ 7 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most helpful strategy you learned this week for working with decimals?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a practice quiz with 2 problems from each day (Tuesday-Friday) to test a family member. Grade their answers and correct any mistakes.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek10);
    console.log("grade4-math-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek10);
    console.log("grade4-math-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek10',
        metadata: grade4MathWeek10.metadata,
        days: grade4MathWeek10
    });
    console.log("grade4-math-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek10 = grade4MathWeek10;
console.log("grade4-math-week10.js loaded and registered successfully");