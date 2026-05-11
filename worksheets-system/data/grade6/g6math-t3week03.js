// Grade 6 Mathematics - Term 3 Week 3 Data
const grade6MathWeek3 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 3,
        title: "Operations with Decimals",
        description: "Mastering addition, subtraction, multiplication, and division of decimals up to 2 places"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Operations with Decimals",
        subtopic: "Adding Decimals",
        lessonContent: `
            <p>Welcome to our week on decimal operations! Today we'll master the art of adding decimals.</p>
            <p><strong>Key Question:</strong> How do we add numbers like 3.45 + 2.17 correctly?</p>
            <p><strong>Introduction:</strong> Adding decimals is just like adding whole numbers - but we must keep the decimal points aligned! This ensures that tenths line up with tenths, hundredths with hundredths.</p>
            <p><strong>The Golden Rule of Decimal Addition:</strong></p>
            <ul>
                <li>Write the numbers vertically with the decimal points lined up</li>
                <li>Add zeros as placeholders if needed (e.g., 3.5 becomes 3.50)</li>
                <li>Add from right to left, just like whole numbers</li>
                <li>Bring the decimal point straight down into your answer</li>
            </ul>
            <p><strong>Step-by-Step Example:</strong> Add 4.35 + 2.8</p>
            <ol>
                <li>Write vertically: 4.35 and 2.80 (add a zero to line up hundredths)</li>
                <li>5 + 0 = 5 (hundredths)</li>
                <li>3 + 8 = 11 (tenths) → write 1, carry 1</li>
                <li>4 + 2 + 1 = 7 (ones)</li>
                <li>Answer: 7.15</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Money Connection</div>
                <p>Adding decimals is exactly how you add money! $3.45 + $2.17 = $5.62. The decimal separates dollars from cents.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Place Value Reminder</div>
                <p>Think of a place value chart: Hundreds | Tens | Ones | <strong>.</strong> | Tenths | Hundredths. Always keep the decimal in the same column!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistake</div>
                <p>Never "just add the numbers" without aligning decimals. 4.5 + 3.24 = 7.74 (NOT 4.5 + 3.24 = 7.29 wrong!).</p>
            </div>
        `,
        taskInstructions: "Practice adding decimals with proper vertical alignment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Align the Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rewrite each pair vertically with decimal points aligned:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 3.45 + 2.17 → _________</div>
                        <div>b) 12.3 + 8.45 → _________</div>
                        <div>c) 7 + 4.56 → _________ (Hint: 7 = 7.00)</div>
                        <div>d) 0.75 + 0.5 → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Add Vertically</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each problem using vertical alignment:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5.23 + 3.14 = _________</div>
                        <div>b) 16.7 + 4.38 = _________</div>
                        <div>c) 9.99 + 0.01 = _________</div>
                        <div>d) 24.05 + 13.95 = _________</div>
                        <div>e) 8.46 + 2.54 = _________</div>
                    </div>
                    <div class="work-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Maria bought a sandwich for $4.75 and a juice for $1.50. How much did she spend in total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A runner completed 2.35 km in the morning and 3.8 km in the afternoon. What was the total distance?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find the missing number: 6.42 + ______ = 10.00
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 receipts at home or create 5 shopping lists. Add the decimal amounts to find the final total.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Operations with Decimals",
        subtopic: "Subtracting Decimals",
        lessonContent: `
            <p>Today we'll learn how to subtract decimals, including borrowing across the decimal point!</p>
            <p><strong>Key Question:</strong> How do you subtract when the top digit is smaller than the bottom digit?</p>
            <p><strong>The Golden Rule of Decimal Subtraction:</strong></p>
            <ul>
                <li>Write numbers vertically with decimal points aligned</li>
                <li>Add zeros as placeholders (e.g., 5.2 becomes 5.20)</li>
                <li>Subtract from right to left</li>
                <li>If needed, borrow from the left (just like whole numbers)</li>
                <li>The decimal point goes straight down into the answer</li>
            </ul>
            <p><strong>Step-by-Step Example 1:</strong> Subtract 5.32 - 2.17</p>
            <ol>
                <li>Write vertically: 5.32 and 2.17 aligned</li>
                <li>2 - 7 can't → borrow 1 from 3 (tenths becomes 2, hundredths become 12)</li>
                <li>12 - 7 = 5 (hundredths)</li>
                <li>2 - 1 = 1 (tenths)</li>
                <li>5 - 2 = 3 (ones)</li>
                <li>Answer: 3.15</li>
            </ol>
            <p><strong>Step-by-Step Example 2:</strong> Subtract 8 - 3.45</p>
            <ol>
                <li>Write 8 as 8.00</li>
                <li>0 - 5 → borrow → becomes 10 - 5 = 5</li>
                <li>0 - 4 (after borrowing) → borrow → 9 - 4 = 5</li>
                <li>7 - 3 = 4</li>
                <li>Answer: 4.55</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> Making Change</div>
                <p>If you pay $10.00 for an item costing $6.75, your change is $10.00 - $6.75 = $3.25. This is decimal subtraction in action!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Borrowing Across the Decimal</div>
                <p>When borrowing, you borrow 1 whole = 10 tenths = 100 hundredths. Don't forget to decrease the digit to the left by 1!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Real-World Example</div>
                <p>A board is 2.5 m long. You cut off 0.75 m. How much remains? 2.50 - 0.75 = 1.75 m.</p>
            </div>
        `,
        taskInstructions: "Practice subtracting decimals with borrowing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Simple Subtraction (No Borrowing)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 7.89 - 3.45 = _________</div>
                        <div>b) 15.67 - 4.23 = _________</div>
                        <div>c) 9.55 - 2.22 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Subtraction with Borrowing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5.32 - 2.47 = _________</div>
                        <div>b) 12.05 - 6.38 = _________</div>
                        <div>c) 8.00 - 3.25 = _________</div>
                        <div>d) 20.34 - 15.67 = _________</div>
                        <div>e) 4.20 - 1.85 = _________</div>
                    </div>
                    <div class="work-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> James had $15.50. He bought a book for $8.75. How much money does he have left?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A bottle holds 2.5 L of water. If you pour out 0.85 L, how much water remains?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Sarah's height is 1.45 m. Her brother is 0.3 m taller. How tall is her brother?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Find the missing number: 10.00 - ______ = 2.75
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 subtraction problems with decimals (up to 2 places). Solve them and show your borrowing steps.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Operations with Decimals",
        subtopic: "Multiplying by Whole Numbers",
        lessonContent: `
            <p>Today we'll learn how to multiply decimals by whole numbers - it's easier than you think!</p>
            <p><strong>Key Question:</strong> How do we multiply 3.25 × 4 correctly?</p>
            <p><strong>The Strategy:</strong></p>
            <ul>
                <li>Ignore the decimal point at first</li>
                <li>Multiply as if you were multiplying whole numbers</li>
                <li>Count how many decimal places were in the original decimal number</li>
                <li>Place the decimal point back into the product (same number of decimal places)</li>
            </ul>
            <p><strong>Step-by-Step Example 1:</strong> Multiply 3.25 × 4</p>
            <ol>
                <li>Ignore decimal: 325 × 4 = 1300</li>
                <li>3.25 has 2 decimal places</li>
                <li>Count 2 places from the right: 13.00</li>
                <li>Answer: 13.00 or 13</li>
            </ol>
            <p><strong>Step-by-Step Example 2:</strong> Multiply 1.5 × 6</p>
            <ol>
                <li>Ignore decimal: 15 × 6 = 90</li>
                <li>1.5 has 1 decimal place</li>
                <li>Count 1 place from the right: 9.0</li>
                <li>Answer: 9.0 or 9</li>
            </ol>
            <p><strong>Memorize This Rule:</strong> The product has the SAME number of decimal places as the decimal factor.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Buying in Bulk</div>
                <p>If one apple costs $1.25 and you buy 8 apples, the total is $1.25 × 8 = $10.00</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gas-pump"></i> Fuel Cost</div>
                <p>If gas costs $2.15 per liter and you buy 15 liters: $2.15 × 15 = $32.25</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> Speed Calculation</div>
                <p>If you run 2.5 km each day for 7 days: 2.5 × 7 = 17.5 km total</p>
            </div>
        `,
        taskInstructions: "Practice multiplying decimals by whole numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Multiplication</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Multiply. Remember to count decimal places!
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2.3 × 5 = _________</div>
                        <div>b) 4.15 × 3 = _________</div>
                        <div>c) 0.75 × 6 = _________</div>
                        <div>d) 1.99 × 4 = _________</div>
                        <div>e) 3.5 × 8 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Two-Digit Whole Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2.25 × 12 = _________</div>
                        <div>b) 5.5 × 20 = _________</div>
                        <div>c) 1.75 × 25 = _________</div>
                        <div>d) 3.40 × 15 = _________</div>
                        <div>e) 0.99 × 50 = _________</div>
                    </div>
                    <div class="work-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A packet of biscuits costs $2.50. How much do 8 packets cost?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A car travels 45.6 km per hour. How far does it travel in 6 hours?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A rectangle has a width of 3.25 cm and a length 4 times its width. Find the length.
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create 2 real-world multiplication problems involving decimals and whole numbers. Solve them.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 items in your kitchen with prices. Calculate the cost of buying 3, 5, and 10 of each item.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Operations with Decimals",
        subtopic: "Dividing by Whole Numbers",
        lessonContent: `
            <p>Today we'll master dividing decimals by whole numbers using long division!</p>
            <p><strong>Key Question:</strong> How do we divide 6.45 ÷ 5?</p>
            <p><strong>The Strategy - Long Division with Decimals:</strong></p>
            <ul>
                <li>Set up long division with the divisor (whole number) outside and dividend (decimal) inside</li>
                <li>Bring the decimal point straight up into the quotient (answer area)</li>
                <li>Divide normally, just like whole numbers</li>
                <li>Add zeros to the dividend if needed for remainder</li>
            </ul>
            <p><strong>Step-by-Step Example 1:</strong> Divide 7.5 ÷ 3</p>
            <ol>
                <li>Set up: 3 ) 7.5</li>
                <li>Bring decimal up: 3 ) 7.5 → quotient: ____ . ___</li>
                <li>3 goes into 7 twice (2 × 3 = 6), remainder 1</li>
                <li>Bring down 5 → 15</li>
                <li>3 goes into 15 five times (5 × 3 = 15)</li>
                <li>Answer: 2.5</li>
            </ol>
            <p><strong>Step-by-Step Example 2:</strong> Divide 6.45 ÷ 5</p>
            <ol>
                <li>Set up: 5 ) 6.45, bring decimal up</li>
                <li>5 goes into 6 once → 1, remainder 1</li>
                <li>Bring down 4 → 14, 5 goes into 14 twice → 2, remainder 4</li>
                <li>Bring down 5 → 45, 5 goes into 45 nine times → 9</li>
                <li>Answer: 1.29</li>
            </ol>
            <p><strong>Remember:</strong> The decimal point in the quotient goes DIRECTLY above the decimal point in the dividend!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Gas Mileage</div>
                <p>A car travels 245.5 km using 5 gallons of fuel. How many km per gallon? 245.5 ÷ 5 = 49.1 km per gallon.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Sharing Food</div>
                <p>4 friends share a $12.40 pizza equally. Each pays: $12.40 ÷ 4 = $3.10</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tape"></i> Equal Lengths</div>
                <p>A 8.4 m ribbon is cut into 6 equal pieces. Each piece: 8.4 ÷ 6 = 1.4 m</p>
            </div>
        `,
        taskInstructions: "Practice dividing decimals by whole numbers using long division.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Simple Division (No Remainders)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Divide:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4.8 ÷ 2 = _________</div>
                        <div>b) 6.6 ÷ 3 = _________</div>
                        <div>c) 9.5 ÷ 5 = _________</div>
                        <div>d) 12.4 ÷ 4 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Division with Remainders (Add Zeros)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve using long division:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 7.3 ÷ 2 = _________</div>
                        <div>b) 5.25 ÷ 4 = _________</div>
                        <div>c) 12.6 ÷ 5 = _________</div>
                        <div>d) 8.44 ÷ 8 = _________</div>
                        <div>e) 15.75 ÷ 7 = _________</div>
                    </div>
                    <div class="work-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A $54.60 bill is shared equally among 5 people. How much does each person pay?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A runner completes 26.2 km in 4 hours. What is the average speed per hour?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 8 boxes weigh a total of 36.8 kg. What is the mass of one box?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A number divided by 6 equals 3.25. What is the number?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 division problems with decimals. Solve each and show your long division steps clearly.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Operations with Decimals",
        subtopic: "Operation Review",
        lessonContent: `
            <p>Today we'll put it all together! We'll solve mixed-operation word problems involving mass and currency.</p>
            <p><strong>Key Question:</strong> How do we decide which operation (+, -, ×, ÷) to use in a word problem?</p>
            <p><strong>Operation Decision Guide:</strong></p>
            <ul>
                <li><strong>Addition (+):</strong> total, combined, altogether, sum, both</li>
                <li><strong>Subtraction (-):</strong> difference, how many more, how much left, remain, change</li>
                <li><strong>Multiplication (×):</strong> product, times, each, per, groups of, repeated addition</li>
                <li><strong>Division (÷):</strong> share equally, split, average, per, each (when dividing into groups)</li>
            </ul>
            <p><strong>Currency Problems:</strong> Always keep money to 2 decimal places (dollars and cents). Remember: $1 = 100¢</p>
            <p><strong>Mass Problems:</strong> Remember conversions: 1 kg = 1000 g. Work in the same units before calculating.</p>
            <p><strong>Step-by-Step Example:</strong> Sarah bought 2.5 kg of apples at $3.20 per kg. She paid with a $10 bill. How much change did she receive?</p>
            <ol>
                <li>Find cost: $3.20 × 2.5 = $8.00</li>
                <li>Find change: $10.00 - $8.00 = $2.00</li>
                <li>Answer: $2.00 change</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Mass Problem</div>
                <p>A bag of rice weighs 5.5 kg. If 2.25 kg is used, and the remaining rice is divided equally into 5 smaller bags, how much is in each small bag?</p>
                <p>Step 1: 5.5 - 2.25 = 3.25 kg remain<br>Step 2: 3.25 ÷ 5 = 0.65 kg per small bag</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Multi-Step Currency</div>
                <p>A shop sold 25.5 kg of flour at $2.40 per kg. The total sales were $61.20. How much additional flour would they need to sell to reach $100 in sales?</p>
                <p>$100 - $61.20 = $38.80 needed; $38.80 ÷ $2.40 = 16.17 kg (about 16.2 kg)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-bag"></i> Shopping Challenge</div>
                <p>Tom bought 3 notebooks at $2.75 each and 5 pens at $1.25 each. He had a $5 coupon. How much did he pay?</p>
                <p>Notebooks: $2.75 × 3 = $8.25<br>Pens: $1.25 × 5 = $6.25<br>Total: $8.25 + $6.25 = $14.50<br>With coupon: $14.50 - $5.00 = $9.50</p>
            </div>
        `,
        taskInstructions: "Solve mixed-operation word problems involving mass and currency.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Currency Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Emma bought a dress for $24.99 and shoes for $18.50. She had $50. How much money does she have left?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A pack of 6 water bottles costs $4.50. What is the cost per bottle?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> John earns $12.50 per hour. He worked 7.5 hours on Monday and 5.5 hours on Tuesday. How much did he earn in total?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mass Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A bag of potatoes weighs 2.5 kg. A bag of onions weighs 1.75 kg. What is the total mass of both bags? How much heavier are the potatoes?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A box contains 12 identical apples. Their total mass is 1.8 kg. What is the mass of one apple?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A recipe requires 0.75 kg of flour to make 15 cookies. How much flour is needed for 45 cookies?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Multi-Step Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Maria bought 2.5 kg of rice at $2.80 per kg and 1.75 kg of beans at $3.20 per kg. She paid with a $20 bill. How much change did she receive?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A factory packs 24.5 kg of sugar into packets. Each packet holds 0.25 kg. How many packets can be filled?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> A restaurant ordered 15.6 kg of meat. They used 4.8 kg on Monday and 3.25 kg on Tuesday. The remaining meat was divided equally among 5 days. How much meat was used each of those days?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> Create a word problem that uses BOTH mass and currency, requiring at least 2 operations. Solve it.
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Which decimal operation do you find most challenging? What strategy helps you?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a 'grocery store' scenario at home. Choose 5 items with prices. Calculate total cost, change from $20 or $50, and cost per item for multipacks.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek3);
    console.log("grade6-math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek3);
    console.log("grade6-math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek3',
        metadata: grade6MathWeek3.metadata,
        days: grade6MathWeek3
    });
    console.log("grade6-math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek3 = grade6MathWeek3;
console.log("grade6-math-week3.js loaded and registered successfully");