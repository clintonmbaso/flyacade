// Grade 5 Mathematics - Term 2 Week 2 Data
const grade5MathWeek2 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 2,
        week: 2,
        title: "Decimals: Thousandths Place",
        description: "Reading, comparing, adding, and subtracting decimals up to 3 decimal places"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "The Thousandths Place",
        lessonContent: `
            <p>Welcome to our exploration of decimals! Today we'll discover what happens when we go beyond hundredths to the thousandths place.</p>
            <p><strong>Key Question:</strong> How small is a thousandth?</p>
            <p><strong>Introduction:</strong> If a tenth is a slice of pie, and a hundredth is a crumb, then a thousandth is a tiny speck! Thousandths are very small parts of a whole.</p>
            <p><strong>Place Value Chart:</strong></p>
            <div style="background-color: #f0f8ff; padding: 15px; text-align: center; font-family: monospace; font-size: 16px;">
                <div>Thousands | Hundreds | Tens | Ones <strong style="color: #4A90E2;">.</strong> Tenths | Hundredths | Thousandths</div>
                <div style="margin-top: 10px;">1000 | 100 | 10 | 1 <strong style="color: #4A90E2;">.</strong> 0.1 | 0.01 | 0.001</div>
            </div>
            <p><strong>Understanding Thousandths:</strong></p>
            <ul>
                <li>1 thousandth = 0.001 (one out of one thousand equal parts)</li>
                <li>1 millimeter (mm) = 0.001 meters (m)</li>
                <li>There are 1,000 thousandths in 1 whole</li>
            </ul>
            <p><strong>Reading Decimal Numbers:</strong></p>
            <ul>
                <li>0.125 = "one hundred twenty-five thousandths"</li>
                <li>2.007 = "two and seven thousandths"</li>
                <li>0.050 = "fifty thousandths" (or 5 hundredths)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Metric Ruler Connection</div>
                <p>On a meter stick, each millimeter (mm) is 0.001 meters. So 245 mm = 0.245 m!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Place Value Pattern</div>
                <p>Notice the pattern: 0.1 (tenth), 0.01 (hundredth), 0.001 (thousandth). Each step is 10 times smaller!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> Money Connection</div>
                <p>If $0.01 is one penny (hundredth of a dollar), then $0.001 would be one-tenth of a penny - too small for coins!</p>
            </div>
        `,
        taskInstructions: "Complete the place value chart and practice reading and writing decimals to 3 decimal places.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Place Value Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the place value chart for each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Number</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Ones</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tenths</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Hundredths</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Thousandths</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">0.345</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.071</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">15.008</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Reading and Writing Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each decimal in word form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 0.427 = _________________________________</div>
                        <div>B. 3.009 = _________________________________</div>
                        <div>C. 0.050 = _________________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write each as a decimal number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Two hundred thirty-four thousandths = _________</div>
                        <div>B. Eight and fifteen thousandths = _________</div>
                        <div>C. Forty-three thousandths = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Millimeter Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use a metric ruler (or imagine one). Convert each measurement to meters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 345 mm = _________ m</div>
                        <div>B. 12 mm = _________ m</div>
                        <div>C. 1,000 mm = _________ m</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 items at home measured in millimeters (like a pencil length or phone thickness). Convert each to meters as a decimal.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Ordering & Comparing",
        lessonContent: `
            <p>Today we'll learn how to compare decimals correctly - and avoid the common "longer is bigger" mistake!</p>
            <p><strong>Key Question:</strong> Which is bigger: 0.5 or 0.005?</p>
            <p><strong>The Common Mistake:</strong> Many students think 0.385 is bigger than 0.4 because 385 is bigger than 4. But that's wrong!</p>
            <p><strong>The Strategy: Placeholder Zeros</strong></p>
            <ul>
                <li>Add zeros to the end of decimals so all numbers have the same number of digits</li>
                <li>This DOES NOT change the value (0.4 = 0.400 = 0.4000)</li>
                <li>Then compare digit by digit from left to right</li>
            </ul>
            <p><strong>Example: Compare 0.4 and 0.385</strong></p>
            <ul>
                <li>Add zeros: 0.4 becomes 0.400</li>
                <li>Compare: 0.400 vs 0.385</li>
                <li>Step 1: Compare tenths: 4 vs 3 → 4 is bigger!</li>
                <li>Result: 0.400 is larger, so 0.4 > 0.385</li>
            </ul>
            <p><strong>Another Example: Compare 0.05 and 0.2</strong></p>
            <ul>
                <li>Add zeros: 0.05 = 0.050, 0.2 = 0.200</li>
                <li>Compare tenths: 0 vs 2 → 0.200 is larger</li>
                <li>Result: 0.2 > 0.05</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-equals"></i> Placeholder Zeros</div>
                <p>Adding zeros to the right of a decimal does NOT change its value: 0.5 = 0.50 = 0.500 = 0.5000</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Digit-by-Digit Comparison</div>
                <p>Always start from the LEFT (tenths place first). The first place where digits differ tells you which number is larger.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Number Line Visualization</div>
                <p>On a number line, 0.4 is closer to 1 than 0.385 is. That's why 0.4 is larger!</p>
            </div>
        `,
        taskInstructions: "Use placeholder zeros to compare and order decimals correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Placeholder Zeros</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rewrite each decimal so all have three decimal places:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 0.3 = _________</div>
                        <div>B. 0.45 = _________</div>
                        <div>C. 0.125 = _________</div>
                        <div>D. 0.07 = _________</div>
                        <div>E. 6.2 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare Using >, <, or =</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add placeholder zeros, then compare:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 0.5 ___ 0.385</div>
                        <div>B. 0.05 ___ 0.2</div>
                        <div>C. 0.125 ___ 0.13</div>
                        <div>D. 3.007 ___ 3.07</div>
                        <div>E. 0.450 ___ 0.45</div>
                        <div>F. 1.001 ___ 1.01</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ordering from Least to Greatest</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Order each set of decimals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 0.3, 0.287, 0.5, 0.425</div>
                        <div>Order: ______ &lt; ______ &lt; ______ &lt; ______</div>
                        <div style="margin-top: 15px;">B. 0.07, 0.2, 0.099, 0.105</div>
                        <div>Order: ______ &lt; ______ &lt; ______ &lt; ______</div>
                        <div style="margin-top: 15px;">C. 1.5, 1.05, 1.505, 1.055</div>
                        <div>Order: ______ &lt; ______ &lt; ______ &lt; ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A student said "0.385 is bigger than 0.4 because 385 is bigger than 4." Explain why this is wrong and show the correct comparison:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 decimal numbers from a receipt, nutrition label, or measuring tool. Order them from smallest to largest.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Adding Decimals (3 Places)",
        lessonContent: `
            <p>Today we'll learn how to add decimals with different lengths accurately - just like scientists in a lab!</p>
            <p><strong>Key Question:</strong> How do you add 1.2 kg and 0.455 kg?</p>
            <p><strong>The Method: Line Up the Decimal Points</strong></p>
            <ul>
                <li>Write numbers vertically with decimal points aligned</li>
                <li>Fill empty "seats" with zeros to make all numbers have the same number of decimal places</li>
                <li>Add digit by digit from right to left (just like whole numbers)</li>
                <li>Bring the decimal point straight down into your answer</li>
            </ul>
            <p><strong>Example: Adding mass in a science lab</strong></p>
            <div style="background-color: #f0f8ff; padding: 15px; font-family: monospace;">
                1.200 kg<br>
                + 0.455 kg<br>
                ─────────<br>
                1.655 kg
            </div>
            <p>Step 1: Write 1.2 as 1.200 (add two zeros)<br>
            Step 2: Add thousandths: 0 + 5 = 5<br>
            Step 3: Add hundredths: 0 + 5 = 5<br>
            Step 4: Add tenths: 2 + 4 = 6<br>
            Step 5: Add ones: 1 + 0 = 1</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Science Lab Connection</div>
                <p>Scientists measure liquids in milliliters (mL). Adding 0.25 L + 0.125 L + 0.5 L means lining up those decimals carefully!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Always Align the Decimal</div>
                <p>Think of decimal points as "anchors." They must line up vertically so you're adding tenths to tenths, hundredths to hundredths, etc.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Zeros Are Your Friends</div>
                <p>Adding zeros to the end of a decimal doesn't change its value, but it makes addition much easier!</p>
            </div>
        `,
        taskInstructions: "Practice adding decimals with up to 3 decimal places using the alignment method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding with Placeholder Zeros</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add each pair. Show your work by adding zeros first:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 0.25 + 0.375 = _________</div>
                        <div style="margin-left: 20px;">With zeros: 0.250 + 0.375 = ______</div>
                        <div style="margin-top: 10px;">B. 1.5 + 0.234 = _________</div>
                        <div style="margin-left: 20px;">With zeros: 1.500 + 0.234 = ______</div>
                        <div style="margin-top: 10px;">C. 0.8 + 0.075 = _________</div>
                        <div style="margin-left: 20px;">With zeros: 0.800 + 0.075 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vertical Addition Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve using vertical alignment:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 2.345 + 1.567 = _________</div>
                        <div>B. 0.789 + 0.211 = _________</div>
                        <div>C. 5.012 + 3.988 = _________</div>
                        <div>D. 0.456 + 0.544 = _________</div>
                        <div>E. 7.3 + 2.175 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each real-world problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Maria bought 0.75 kg of apples and 0.425 kg of oranges. What is the total mass of fruit?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 15px;">B. A chemist pours 0.25 L of water, then adds 0.125 L of acid, then adds 0.8 L of solution. What is the total volume?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find the sum of 0.125 + 0.25 + 0.5 + 0.075 + 0.005:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create three addition problems using decimals from a grocery store receipt. Solve them showing your work.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Subtracting Decimals (3 Places)",
        lessonContent: `
            <p>Today we'll master subtracting decimals, with special focus on "borrowing" when needed!</p>
            <p><strong>Key Question:</strong> How do you subtract 1.234 from 5?</p>
            <p><strong>The Challenge:</strong> Subtracting a longer decimal from a shorter one (like 5 - 1.234)</p>
            <p><strong>The Method: Line Up the Decimal Points</strong></p>
            <ul>
                <li>Write numbers vertically with decimal points aligned</li>
                <li>Add placeholder zeros to the top number so both have the same number of decimal places</li>
                <li>Subtract digit by digit from right to left (borrowing when needed)</li>
                <li>Bring the decimal point straight down into your answer</li>
            </ul>
            <p><strong>Example 1: 5 - 1.234</strong></p>
            <div style="background-color: #f0f8ff; padding: 15px; font-family: monospace;">
                5.000<br>
                - 1.234<br>
                ─────────<br>
                3.766
            </div>
            <p>Step 1: Write 5 as 5.000 (add three zeros)<br>
            Step 2: Thousandths: 0 - 4 → borrow → 10 - 4 = 6<br>
            Step 3: Hundredths: after borrowing, 9 - 3 = 6<br>
            Step 4: Tenths: after borrowing, 9 - 2 = 7<br>
            Step 5: Ones: 4 - 1 = 3</p>
            <p><strong>Example 2: 2.5 - 0.875</strong></p>
            <div style="background-color: #f0f8ff; padding: 15px; font-family: monospace;">
                2.500<br>
                - 0.875<br>
                ─────────<br>
                1.625
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Calculating Change</div>
                <p>If you pay with a $5 bill for an item costing $1.234, your change is $3.766. (Though we'd round to $3.77 in real life!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> High-Precision Measurement</div>
                <p>In a science lab, precise measurements matter. If you have 2.500 L of solution and use 0.875 L, exactly 1.625 L remains.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Borrowing Reminder</div>
                <p>When you borrow in decimals, it works exactly like borrowing in whole numbers. Just keep the decimal places aligned!</p>
            </div>
        `,
        taskInstructions: "Practice subtracting decimals with up to 3 decimal places, focusing on borrowing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Subtracting with Placeholder Zeros</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Subtract each pair. Show your work by adding zeros first:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 1 - 0.375 = _________</div>
                        <div style="margin-left: 20px;">With zeros: 1.000 - 0.375 = ______</div>
                        <div style="margin-top: 10px;">B. 3.5 - 0.875 = _________</div>
                        <div style="margin-left: 20px;">With zeros: 3.500 - 0.875 = ______</div>
                        <div style="margin-top: 10px;">C. 0.8 - 0.235 = _________</div>
                        <div style="margin-left: 20px;">With zeros: 0.800 - 0.235 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vertical Subtraction Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve using vertical alignment:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 8.456 - 3.789 = _________</div>
                        <div>B. 5 - 2.345 = _________</div>
                        <div>C. 10.5 - 6.875 = _________</div>
                        <div>D. 0.923 - 0.456 = _________</div>
                        <div>E. 4 - 0.999 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each real-world problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A chemist has 2.5 L of solution. They use 1.375 L in an experiment. How much solution remains?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 15px;">B. You have $10.00. You buy an item that costs $6.875. How much change do you receive?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 15px;">C. A runner completes 1.5 km of a 5 km race. How many kilometers remain?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A 1-liter flask contains 0.875 L of liquid. How much more liquid can be added before it overflows?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create three subtraction problems where you need to subtract a decimal from a whole number. Solve them showing borrowing steps.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Weekly Review & Life Situations",
        lessonContent: `
            <p>Today we'll apply everything we've learned about decimals to real-world situations - especially in a chemistry lab!</p>
            <p><strong>Week 2 Review:</strong></p>
            <ul>
                <li><strong>Thousandths Place:</strong> 0.001 is a tiny speck - 1,000 of them make 1 whole</li>
                <li><strong>Comparing Decimals:</strong> Use placeholder zeros to avoid the "longer is bigger" trap</li>
                <li><strong>Adding Decimals:</strong> Line up decimal points, add zeros, then add from right to left</li>
                <li><strong>Subtracting Decimals:</strong> Line up decimal points, add zeros to the top number, borrow when needed</li>
            </ul>
            <p><strong>Key Strategies to Remember:</strong></p>
            <ol>
                <li>Always line up the decimal points vertically</li>
                <li>Add placeholder zeros so all numbers have the same number of decimal places</li>
                <li>Compare from left to right (tenths, then hundredths, then thousandths)</li>
                <li>When subtracting, if the top digit is smaller, borrow from the left</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> The Chemist's Shop Activity</div>
                <p>A chemist mixes three liquids: 0.25 L, 0.125 L, and 0.5 L. First find the total. Then find the difference from a 1 L flask.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Quick Comparison</div>
                <p>Remember: 0.5 > 0.125 because 0.500 > 0.125. Don't let the longer number fool you!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-warning"></i> Common Mistake Alert</div>
                <p>5 - 1.234 does NOT equal 4.234! That's a common error. Always add zeros: 5.000 - 1.234 = 3.766</p>
            </div>
        `,
        taskInstructions: "Complete the review activities and apply decimal skills to 'The Chemist's Shop' problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Place Value Review</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the value of the underlined digit:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 0.2<u>7</u>5 → _________</div>
                        <div>B. 3.0<u>0</u>8 → _________</div>
                        <div>C. <u>1</u>2.345 → _________</div>
                        <div>D. 0.<u>0</u>19 → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare and Order Review</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Compare using >, <, or =:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 0.400 ___ 0.4</div>
                        <div>B. 0.375 ___ 0.4</div>
                        <div>C. 1.005 ___ 1.05</div>
                        <div>D. 0.099 ___ 0.1</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Order from least to greatest: 0.75, 0.5, 0.625, 0.875
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: "The Chemist's Shop" Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> <strong>Step 1:</strong> A chemist mixes three liquids:
                    <div style="margin-left: 20px;">
                        <div>• Water: 0.25 L</div>
                        <div>• Acid: 0.125 L</div>
                        <div>• Solution: 0.5 L</div>
                    </div>
                    What is the total volume of the mixture?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> <strong>Step 2:</strong> The mixture will be poured into a 1 L flask. How much space will remain in the flask?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> <strong>Step 3:</strong> If the chemist decides to add another 0.085 L of water, will the flask overflow? By how much?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> A baker uses 0.75 kg of flour, 0.125 kg of sugar, and 0.5 kg of butter. What is the total mass of the ingredients?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A 2-liter bottle contains 1.375 L of juice. How many more liters are needed to fill the bottle?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> What strategy was most helpful for you when adding or subtracting decimals this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Give one piece of advice to a student who thinks 0.75 is smaller than 0.375.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a 'Chemist's Shop' problem of your own. Choose three liquid volumes, add them, and find the difference from a container size of your choice. Show all steps.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek2);
    console.log("grade5-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek2);
    console.log("grade5-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek2',
        metadata: grade5MathWeek2.metadata,
        days: grade5MathWeek2
    });
    console.log("grade5-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek2 = grade5MathWeek2;
console.log("grade5-math-week2.js loaded and registered successfully");