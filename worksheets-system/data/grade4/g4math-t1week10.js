// Grade 4 Math - Week 10 Data
const grade4MathWeek10 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 1,
        week: 10,
        title: "Operations with Decimals",
        description: "Adding, subtracting, multiplying, and dividing decimal numbers up to 2 decimal places"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Operations with Decimals",
        subtopic: "Adding Decimal Numbers",
        lessonContent: `
            <p>Welcome to our exploration of adding decimals! This week we will learn how to work with numbers that have decimal points.</p>
            <p><strong>What Are Decimal Numbers?</strong></p>
            <p>Decimal numbers are numbers that have a whole part and a fractional part separated by a decimal point.</p>
            <p><strong>Why Do We Need to Line Up Decimal Points?</strong></p>
            <ul>
                <li>Decimals show parts of a whole: tenths, hundredths, etc.</li>
                <li>When adding, we must add tenths to tenths and hundredths to hundredths</li>
                <li>Lining up decimal points keeps the place values in the correct columns</li>
                <li>It's just like adding money! ($1.25 + $2.40)</li>
            </ul>
            <p><strong>Steps for Adding Decimals:</strong></p>
            <ol>
                <li>Write the numbers vertically with decimal points lined up</li>
                <li>Add zeros to make all numbers have the same number of decimal places</li>
                <li>Add each column from right to left, just like with whole numbers</li>
                <li>Bring the decimal point straight down into your answer</li>
                <li>Check your answer by estimating</li>
            </ol>
            <p><strong>Remember:</strong> Adding decimals is just like adding whole numbers once you line up the decimal points correctly!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle" style="color: #4A90E2;"></i> Adding Decimals Example</div>
                <p>1.25 + 2.40 = ?<br>
                   Write it as:<br>
                   &nbsp;&nbsp;1.25<br>
                   + 2.40<br>
                   &nbsp;&nbsp;3.65</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-align-center"></i> Lining Up Decimals</div>
                <p>When adding 0.5 + 0.25:<br>
                   Write 0.5 as 0.50<br>
                   &nbsp;&nbsp;0.50<br>
                   + 0.25<br>
                   &nbsp;&nbsp;0.75</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave"></i> Real-World Application</div>
                <p>If you have $1.25 in your pocket and find $2.40, you now have $3.65. The decimal point shows dollars and cents!</p>
            </div>
        `,
        taskInstructions: "Practice adding decimal numbers by completing the following exercises.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Add these decimal numbers. Remember to line up the decimal points:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 3.25 + 1.75 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>b. 0.60 + 0.35 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>c. 2.80 + 1.15 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>d. 4.99 + 0.01 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Solve these problems. Show your work vertically:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. Sarah bought a pencil for $0.75 and an eraser for $0.50. How much did she spend in total?</div>
                    <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                    <div>b. A recipe needs 1.25 cups of flour and 0.75 cups of sugar. How many cups of dry ingredients are needed?</div>
                    <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Assessment: Calculate the sum of:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 4.56 + 3.21 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>b. 0.80 + 0.15 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is it important to line up decimal points when adding? Explain in your own words:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 real-life examples where you might need to add decimals (like shopping, cooking, or measuring). Write the addition problems.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Operations with Decimals",
        subtopic: "Subtracting Decimal Numbers",
        lessonContent: `
            <p>Today we will learn how to subtract decimal numbers. Just like with addition, lining up decimal points is crucial!</p>
            <p><strong>Steps for Subtracting Decimals:</strong></p>
            <ol>
                <li>Write the numbers vertically with decimal points lined up</li>
                <li>Add zeros to make all numbers have the same number of decimal places</li>
                <li>Subtract each column from right to left, just like with whole numbers</li>
                <li>Borrow or regroup when needed (even across the decimal point!)</li>
                <li>Bring the decimal point straight down into your answer</li>
            </ol>
            <p><strong>Special Attention: Borrowing Across the Decimal Point</strong></p>
            <p>When you need to borrow and there's a zero at the next place value, remember:</p>
            <ul>
                <li>You can borrow from the whole number part</li>
                <li>1 whole = 10 tenths = 100 hundredths</li>
                <li>The decimal point doesn't change when you borrow</li>
            </ul>
            <p><strong>Real-World Subtraction:</strong></p>
            <ul>
                <li>Finding price differences during sales</li>
                <li>Calculating how much more you need to save</li>
                <li>Measuring differences in lengths or weights</li>
                <li>Tracking temperature changes</li>
            </ul>
            <p><strong>Checking Your Work:</strong> Add your answer to the smaller number. You should get the larger number!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus-circle" style="color: #4A90E2;"></i> Subtracting Decimals Example</div>
                <p>5.75 - 2.30 = ?<br>
                   Write it as:<br>
                   &nbsp;&nbsp;5.75<br>
                   - 2.30<br>
                   &nbsp;&nbsp;3.45</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Borrowing Example</div>
                <p>3.50 - 1.75 = ?<br>
                   Borrow from the 3 (3 becomes 2, and 0.50 becomes 1.50):<br>
                   &nbsp;&nbsp;2.15<sup>0</sup><br>
                   - 1.75<br>
                   &nbsp;&nbsp;1.75</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Shopping Application</div>
                <p>An item costs $8.95. You have $4.50. You need $8.95 - $4.50 = $4.45 more to buy it.</p>
            </div>
        `,
        taskInstructions: "Practice subtracting decimal numbers by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Subtract these decimal numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 7.80 - 3.25 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 6.50 - 2.75 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 9.00 - 4.60 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 5.25 - 1.50 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these real-world problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A ribbon is 3.75 meters long. You cut off 1.50 meters. How much ribbon is left?</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. You had $10.00. You spent $4.25 on lunch. How much money do you have left?</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 8.95 - 4.50 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 1.20 - 0.75 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Borrowing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> These problems require borrowing. Show your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4.00 - 2.75 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div class="answer-space" style="height: 80px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. 6.30 - 4.85 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div class="answer-space" style="height: 80px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create 2 word problems involving subtraction of decimals. Solve them and show your work.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Operations with Decimals",
        subtopic: "Multiplying Decimals by Whole Numbers",
        lessonContent: `
            <p>Today we will learn how to multiply decimal numbers by whole numbers. This is like repeated addition of decimals!</p>
            <p><strong>Understanding Decimal Multiplication:</strong></p>
            <p>Multiplying a decimal by a whole number means adding that decimal number multiple times.</p>
            <p>Example: 0.2 × 3 = 0.2 + 0.2 + 0.2 = 0.6</p>
            <p><strong>Steps for Multiplying Decimals by Whole Numbers:</strong></p>
            <ol>
                <li>Multiply the numbers as if there were no decimal points (treat them as whole numbers)</li>
                <li>Count the total number of decimal places in the original decimal number</li>
                <li>Place the decimal point in your answer so it has that many decimal places</li>
                <li>Check your answer by estimating or using repeated addition</li>
            </ol>
            <p><strong>Why This Works:</strong></p>
            <ul>
                <li>When you multiply 1.15 × 4, you're really multiplying 115 hundredths × 4</li>
                <li>115 × 4 = 460, and since we started with hundredths, our answer is 460 hundredths = 4.60</li>
                <li>The decimal point moves to keep the value correct</li>
            </ul>
            <p><strong>Visualizing with Money:</strong></p>
            <p>If one candy costs $0.50, then 6 candies cost $0.50 × 6 = $3.00</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle" style="color: #4A90E2;"></i> Multiplication Example</div>
                <p>1.15 × 4 = ?<br>
                   Multiply as whole numbers: 115 × 4 = 460<br>
                   Since 1.15 has 2 decimal places, answer has 2 decimal places: 4.60</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-redo"></i> Repeated Addition</div>
                <p>0.50 × 6 = 0.50 + 0.50 + 0.50 + 0.50 + 0.50 + 0.50 = 3.00<br>
                   This shows multiplication is repeated addition!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Real-World Example</div>
                <p>If apples cost $1.25 each and you buy 4 apples:<br>
                   $1.25 × 4 = $5.00<br>
                   You can check: $1.25 + $1.25 + $1.25 + $1.25 = $5.00</p>
            </div>
        `,
        taskInstructions: "Practice multiplying decimals by whole numbers by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Multiplication</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Multiply these decimals by whole numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2.50 × 3 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 0.75 × 4 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 1.20 × 5 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 3.25 × 2 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Using Repeated Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these using repeated addition. Show your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 0.25 × 4 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. 1.10 × 3 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these multiplication problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1.15 × 4 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 0.50 × 6 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these real-world problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A pencil costs $0.45. How much do 8 pencils cost?</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. Each lap around the track is 0.25 km. If Sarah runs 5 laps, how far does she run?</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. A recipe calls for 0.75 cups of milk. If you triple the recipe, how much milk do you need?</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 items at home with decimal prices. Multiply each price by different whole numbers (2, 3, 4) and calculate the totals.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Operations with Decimals",
        subtopic: "Dividing Decimals by Whole Numbers",
        lessonContent: `
            <p>Today we will learn how to divide decimal numbers by whole numbers. This is like fair sharing with decimals!</p>
            <p><strong>Understanding Decimal Division:</strong></p>
            <p>Dividing a decimal by a whole number means splitting the decimal into equal parts.</p>
            <p>Example: 0.80 ÷ 2 = 0.40 (If $0.80 is shared between 2 people, each gets $0.40)</p>
            <p><strong>Steps for Dividing Decimals by Whole Numbers:</strong></p>
            <ol>
                <li>Set up the division problem with the decimal number inside (dividend) and the whole number outside (divisor)</li>
                <li>Place the decimal point in the answer directly above the decimal point in the dividend</li>
                <li>Divide as with whole numbers</li>
                <li>Bring down digits and continue dividing if needed</li>
                <li>Add zeros to the dividend if necessary to complete the division</li>
            </ol>
            <p><strong>The Decimal Point Rule:</strong></p>
            <p>The most important rule: The decimal point in the answer goes directly above the decimal point in the number you're dividing.</p>
            <p><strong>Visualizing with Money:</strong></p>
            <p>If you have $4.50 and want to divide it equally among 5 friends, each gets $4.50 ÷ 5 = $0.90</p>
            <p><strong>Checking Your Work:</strong> Multiply your answer by the divisor. You should get the original dividend!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-divide" style="color: #4A90E2;"></i> Division Example</div>
                <p>0.96 ÷ 3 = ?<br>
                   Set up: 3 ⟌0.96<br>
                   Decimal point in answer above the one in 0.96<br>
                   Answer: 0.32</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-share-alt"></i> Fair Sharing Example</div>
                <p>4.50 ÷ 5 = ?<br>
                   If $4.50 is shared by 5 people:<br>
                   Each gets $0.90<br>
                   Check: $0.90 × 5 = $4.50 ✓</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-up"></i> Decimal Point Placement</div>
                <p>When dividing 1.2 ÷ 4:<br>
                   Write as 4 ⟌1.2<br>
                   Place decimal point: __.__<br>
                   Add zero: 4 ⟌1.20<br>
                   Answer: 0.30</p>
            </div>
        `,
        taskInstructions: "Practice dividing decimals by whole numbers by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Division</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Divide these decimals by whole numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 0.84 ÷ 2 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 3.60 ÷ 4 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 2.50 ÷ 5 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 1.44 ÷ 6 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Setting Up Division</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Set up these division problems correctly. Show where the decimal point goes in the answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 5 ⟌2.75 <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> (Show decimal point placement)</div>
                        <div>b. 3 ⟌0.96 <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> (Show decimal point placement)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these division problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 0.96 ÷ 3 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 4.50 ÷ 5 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems and Checking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve and check your answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3.60 meters of ribbon is cut into 4 equal pieces. How long is each piece?</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. $6.75 is shared equally among 3 friends. How much does each friend get?</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. Check your answer to problem b by multiplying: <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> × 3 = $6.75</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> These problems need extra zeros added:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 0.8 ÷ 4 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> (Hint: Write 0.8 as 0.80)</div>
                        <div>b. 1.2 ÷ 8 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> (Hint: Write 1.2 as 1.20)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice all four operations with decimals by creating one problem for addition, subtraction, multiplication, and division. Solve them.",
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