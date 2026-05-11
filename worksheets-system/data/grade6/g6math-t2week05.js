// Grade 6 Mathematics - Term 2 Week 5 Data
const grade6MathWeek5 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 5,
        title: "Linear Inequalities",
        description: "Understanding, forming, solving, and representing linear inequalities in one variable"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Linear Inequalities",
        subtopic: "Understanding Inequality",
        lessonContent: `
            <p>Welcome to our exploration of inequalities! Today we'll learn what it means when things are NOT equal.</p>
            <p><strong>Key Question:</strong> How do we show that one quantity is greater than or less than another?</p>
            <p><strong>Introduction:</strong> An <strong>inequality</strong> is a mathematical sentence that shows two quantities are NOT equal. We use special symbols to show which is bigger or smaller.</p>
            <p><strong>Inequality Symbols:</strong></p>
            <ol>
                <li><strong>></strong> Greater than (Example: 7 > 3 means "7 is greater than 3")</li>
                <li><strong><</strong> Less than (Example: 2 < 5 means "2 is less than 5")</li>
                <li><strong>≥</strong> Greater than or equal to (Example: x ≥ 4 means "x is greater than or equal to 4")</li>
                <li><strong>≤</strong> Less than or equal to (Example: y ≤ 10 means "y is less than or equal to 10")</li>
            </ol>
            <p><strong>Real-Life Limits:</strong></p>
            <ul>
                <li><strong>Age limits:</strong> "You must be at least 13 years old" means age ≥ 13</li>
                <li><strong>Weight limits:</strong> "Maximum weight 100 kg" means weight ≤ 100</li>
                <li><strong>Speed limits:</strong> "Maximum speed 60 km/h" means speed ≤ 60</li>
                <li><strong>Height restrictions:</strong> "Must be taller than 120 cm" means height > 120</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Age Example</div>
                <p>To ride a roller coaster you must be at least 12 years old. This means: age ≥ 12</p>
                <p>If Sarah is 10 years old, can she ride? No, because 10 is NOT greater than or equal to 12.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight-hanging"></i> Weight Example</div>
                <p>An elevator can hold no more than 500 kg. This means: total weight ≤ 500</p>
                <p>If four people weigh 480 kg total, can they ride together? Yes, because 480 ≤ 500.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> Temperature Example</div>
                <p>Water freezes when temperature is below 0°C: temperature &lt; 0</p>
                <p>Is -5°C cold enough to freeze water? Yes, because -5 &lt; 0.</p>
            </div>
        `,
        taskInstructions: "Illustrate inequalities using real-life scenarios and compare values.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Symbol Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the correct symbol (> , < , ≥ , ≤) between each pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8 ___ 12</div>
                        <div>b) 15 ___ 9</div>
                        <div>c) 7 + 3 ___ 10</div>
                        <div>d) 20 - 5 ___ 10</div>
                        <div>e) 4 × 3 ___ 15</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-Life Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write an inequality for each situation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) To vote, you must be at least 18 years old: age ___ ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) A backpack can hold no more than 15 kg: weight ___ ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) The pool is for swimmers taller than 110 cm: height ___ ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) Your phone battery must have at least 20% charge: battery ___ ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Determine if each statement is true or false:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 15 ≥ 12 _______</div>
                        <div>b) 8 ≤ 5 _______</div>
                        <div>c) 10 > 10 _______</div>
                        <div>d) 7 + 4 ≤ 11 _______</div>
                        <div>e) 20 - 8 ≥ 12 _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Think of a rule at your school or home. Write it as an inequality:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 real-life examples of inequalities at home (on products, signs, or rules). Write each as a mathematical inequality.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Linear Inequalities",
        subtopic: "Forming Inequalities",
        lessonContent: `
            <p>Today we'll practice turning word problems into mathematical inequalities!</p>
            <p><strong>Key Question:</strong> How do we translate phrases like "at least" and "no more than" into symbols?</p>
            <p><strong>Key Phrases and Their Meanings:</strong></p>
            <ul>
                <li><strong>"At least"</strong> means ≥ (greater than or equal to)</li>
                <li><strong>"No less than"</strong> means ≥ (greater than or equal to)</li>
                <li><strong>"Minimum"</strong> means ≥ (greater than or equal to)</li>
                <li><strong>"No more than"</strong> means ≤ (less than or equal to)</li>
                <li><strong>"At most"</strong> means ≤ (less than or equal to)</li>
                <li><strong>"Maximum"</strong> means ≤ (less than or equal to)</li>
                <li><strong>"Greater than"</strong> means ></li>
                <li><strong>"Less than"</strong> means <</li>
                <li><strong>"Between"</strong> means a < x < b</li>
            </ul>
            <p><strong>Examples of Translating:</strong></p>
            <ul>
                <li>"You need at least 5 points to pass" → points ≥ 5</li>
                <li>"Spend no more than $20" → cost ≤ 20</li>
                <li>"The temperature is below freezing" → temperature &lt; 0</li>
                <li>"The race time is less than 10 seconds" → time &lt; 10</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Gaming Example</div>
                <p>"You need at least 1000 points to unlock the next level."</p>
                <p>Inequality: points ≥ 1000</p>
                <p>If you have 950 points, can you unlock it? No, because 950 < 1000.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Example</div>
                <p>"You can buy no more than 3 items with this coupon."</p>
                <p>Inequality: items ≤ 3</p>
                <p>Can you buy 3 items? Yes. Can you buy 4? No.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Speed Example</div>
                <p>"The speed limit is a maximum of 60 km/h."</p>
                <p>Inequality: speed ≤ 60</p>
                <p>Is 65 km/h allowed? No, because 65 > 60.</p>
            </div>
        `,
        taskInstructions: "Translate word problems into mathematical inequalities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Translate the Phrase</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write an inequality for each phrase:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) At least 8 hours of sleep: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) No more than 2 hours of screen time: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) Less than 5 grams of sugar: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) Greater than 50% on the test: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e) A minimum score of 70 to pass: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problem Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write an inequality for each scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Maria wants to buy a shirt that costs $25. She has $40. Let m = money spent. Write an inequality showing she has enough money.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) A elevator can carry a maximum weight of 800 kg. Let w = total weight. Write an inequality for safe operation.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) To join the basketball team, you must be taller than 150 cm. Let h = height. Write an inequality.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Correct Inequality</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the correct inequality for each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) "You can invite at most 10 friends." &nbsp;&nbsp; f ≤ 10 &nbsp;&nbsp; f ≥ 10 &nbsp;&nbsp; f < 10</div>
                        <div>b) "Save at least $50." &nbsp;&nbsp; s > 50 &nbsp;&nbsp; s ≥ 50 &nbsp;&nbsp; s ≤ 50</div>
                        <div>c) "Temperature is below 30°C." &nbsp;&nbsp; t > 30 &nbsp;&nbsp; t ≥ 30 &nbsp;&nbsp; t < 30</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create a Scenario</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a real-life scenario that could be represented by x ≤ 12:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write a real-life scenario that could be represented by y > 100:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences using phrases like 'at least,' 'no more than,' 'below,' or 'above.' Rewrite each as a mathematical inequality.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Linear Inequalities",
        subtopic: "Solving Simple Inequalities",
        lessonContent: `
            <p>Today we'll learn how to solve inequalities, just like solving equations!</p>
            <p><strong>Key Question:</strong> How do we find all the values that make an inequality true?</p>
            <p><strong>Solving Inequalities - The Basic Rules:</strong></p>
            <ul>
                <li>We solve inequalities the SAME way as equations (using inverse operations)</li>
                <li>Add or subtract the same number from both sides</li>
                <li>Multiply or divide both sides by the same POSITIVE number</li>
                <li><strong>IMPORTANT SPECIAL RULE:</strong> When you multiply or divide by a NEGATIVE number, you must FLIP the inequality sign!</li>
            </ul>
            <p><strong>Example 1 (Addition/Subtraction):</strong></p>
            <p>x + 5 > 12<br>
            x + 5 - 5 > 12 - 5<br>
            x > 7</p>
            <p><strong>Example 2 (Multiplication/Division by Positive):</strong></p>
            <p>3x ≤ 18<br>
            3x ÷ 3 ≤ 18 ÷ 3<br>
            x ≤ 6</p>
            <p><strong>Example 3 (Multiplying/Dividing by Negative - Flip the sign!):</strong></p>
            <p>-2x < 10<br>
            -2x ÷ (-2) > 10 ÷ (-2)  &nbsp;&nbsp;<--- sign flips from < to ><br>
            x > -5</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Balancing Act</div>
                <p>Inequalities are like balanced scales. Adding or subtracting the same weight keeps the balance. But when you multiply or divide by a negative, the scale flips!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-step-forward"></i> Step by Step</div>
                <p>Solve: 2x - 7 < 9<br>
                Step 1: Add 7 to both sides → 2x < 16<br>
                Step 2: Divide both sides by 2 → x < 8<br>
                Solution: All numbers less than 8.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> The Flip Rule</div>
                <p>-3x ≥ 12<br>
                Divide both sides by -3 (negative!) → x ≤ -4<br>
                Notice: ≥ flipped to ≤</p>
            </div>
        `,
        taskInstructions: "Solve simple linear inequalities in one variable using inverse operations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Solve by Adding or Subtracting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each inequality:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) x + 7 > 15 &nbsp;&nbsp; x = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) y - 4 ≤ 10 &nbsp;&nbsp; y = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) a + 9 < 20 &nbsp;&nbsp; a = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) b - 3 ≥ 8 &nbsp;&nbsp; b = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Solve by Multiplying or Dividing (Positive Numbers)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each inequality:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4x ≤ 24 &nbsp;&nbsp; x = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) 7y > 35 &nbsp;&nbsp; y = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) 3z < 18 &nbsp;&nbsp; z = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) 5w ≥ 45 &nbsp;&nbsp; w = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Two-Step Inequalities</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each two-step inequality:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2x + 3 < 11 &nbsp;&nbsp; x = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) 5y - 4 ≥ 16 &nbsp;&nbsp; y = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) 4z + 7 ≤ 27 &nbsp;&nbsp; z = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: The Flip Rule (Multiplying/Dividing by Negative)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve (remember to flip the sign!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) -2x < 10 &nbsp;&nbsp; x = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) -3y ≥ 15 &nbsp;&nbsp; y = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) -5z > 25 &nbsp;&nbsp; z = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Solve: 3(x - 2) ≤ 21 and 4x + 7 > 2x - 1. Show each step clearly.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Linear Inequalities",
        subtopic: "Number Line Representation",
        lessonContent: `
            <p>Today we'll learn how to visualize inequalities on a number line!</p>
            <p><strong>Key Question:</strong> How can we show all the possible solutions to an inequality?</p>
            <p><strong>Number Line Symbols:</strong></p>
            <ul>
                <li><strong>Open Circle ○</strong> → Used for > or < (the number IS NOT included)</li>
                <li><strong>Closed Circle ●</strong> → Used for ≥ or ≤ (the number IS included)</li>
                <li><strong>Arrow →</strong> Shows that the solutions continue in that direction</li>
            </ul>
            <p><strong>How to Draw Each Type:</strong></p>
            <ol>
                <li><strong>x > 3:</strong> Open circle at 3, arrow to the RIGHT (numbers greater than 3)</li>
                <li><strong>x < 3:</strong> Open circle at 3, arrow to the LEFT (numbers less than 3)</li>
                <li><strong>x ≥ 3:</strong> Closed circle at 3, arrow to the RIGHT</li>
                <li><strong>x ≤ 3:</strong> Closed circle at 3, arrow to the LEFT</li>
                <li><strong>Between values (a < x < b):</strong> Open circles at both ends, line connecting them</li>
                <li><strong>Between values inclusive (a ≤ x ≤ b):</strong> Closed circles at both ends, line connecting</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Number Line Example 1</div>
                <p>x > 2 → Open circle at 2, arrow to the right.<br>
                <strong>Means:</strong> 2.1, 3, 5, 100, etc. (but NOT 2)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Number Line Example 2</div>
                <p>x ≤ -1 → Closed circle at -1, arrow to the left.<br>
                <strong>Means:</strong> -1, -2, -3, -10, etc.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Number Line Example 3</div>
                <p>3 < x < 7 → Open circles at 3 and 7, line between.<br>
                <strong>Means:</strong> Any number between 3 and 7 (NOT including 3 or 7)</p>
            </div>
        `,
        taskInstructions: "Visualize inequality solutions on a horizontal number line.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw the Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a number line for each inequality:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) x > 4</div>
                        <div class="number-line-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>b) y ≤ -2</div>
                        <div class="number-line-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>c) z < 0</div>
                        <div class="number-line-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>d) w ≥ 5</div>
                        <div class="number-line-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read the Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the inequality shown on each number line:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) &nbsp; <span class="number-line-text">[Number line: open circle at 2, arrow right]</span> → Inequality: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) &nbsp; <span class="number-line-text">[Number line: closed circle at -3, arrow left]</span> → Inequality: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) &nbsp; <span class="number-line-text">[Number line: closed circle at 0, open circle at 5, line between]</span> → Inequality: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Between Values</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw number lines for these inequalities:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2 < x < 8</div>
                        <div class="number-line-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>b) -5 ≤ y ≤ 0</div>
                        <div class="number-line-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>c) -3 ≤ z < 4</div>
                        <div class="number-line-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-Life Number Lines</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A water park has a rule: "You must be at least 120 cm tall but no more than 200 cm to ride this slide." Show this on a number line:
                    <div class="number-line-area" style="height: 60px; margin-top: 10px; border: 1px solid #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw number lines for: x ≥ -4, x < 2, -3 ≤ x ≤ 4, and x > 0.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Linear Inequalities",
        subtopic: "Equation vs. Inequality",
        lessonContent: `
            <p>Today we'll compare and contrast equations and inequalities by solving similar problems both ways!</p>
            <p><strong>Key Question:</strong> How is solving an inequality different from solving an equation?</p>
            <p><strong>Similarities:</strong></p>
            <ul>
                <li>Both use inverse operations (adding, subtracting, multiplying, dividing)</li>
                <li>Both isolate the variable on one side</li>
                <li>Both require you to perform the same operation on both sides</li>
            </ul>
            <p><strong>Differences:</strong></p>
            <ul>
                <li>Equations have ONE solution (unless it's an identity)</li>
                <li>Inequalities have MANY solutions (a whole range of numbers)</li>
                <li>When multiplying or dividing by a NEGATIVE number, inequality signs FLIP</li>
                <li>Inequality solutions are graphed on a number line</li>
                <li>Equations use = sign; inequalities use >, <, ≥, ≤</li>
            </ul>
            <p><strong>Comparison Example:</strong></p>
            <p>Same problem, solved as equation vs. inequality:</p>
            <p><strong>Equation:</strong> 2x + 3 = 11<br>
            2x = 8<br>
            x = 4  → ONE solution!</p>
            <p><strong>Inequality:</strong> 2x + 3 < 11<br>
            2x < 8<br>
            x < 4  → MANY solutions (all numbers less than 4)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-equals"></i> Equation Example</div>
                <p>3x - 7 = 14<br>
                3x = 21<br>
                x = 7<br>
                <strong>Only 7 works!</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-not-equal"></i> Inequality Example</div>
                <p>3x - 7 ≤ 14<br>
                3x ≤ 21<br>
                x ≤ 7<br>
                <strong>7, 6, 5, 4, -10, and everything less than or equal to 7 works!</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> The Flip Matters</div>
                <p><strong>Equation:</strong> -2x = 10 → x = -5 (one answer)<br>
                <strong>Inequality:</strong> -2x > 10 → x < -5 (NOT x > -5! The sign flipped)</p>
            </div>
        `,
        taskInstructions: "Compare and contrast equations and inequalities by solving similar problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Side-by-Side Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each pair (equation and inequality):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Equation: x + 5 = 12 &nbsp;&nbsp; x = _____</div>
                        <div>Inequality: x + 5 < 12 &nbsp;&nbsp; x = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) Equation: 3y = 21 &nbsp;&nbsp; y = _____</div>
                        <div>Inequality: 3y ≥ 21 &nbsp;&nbsp; y = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) Equation: 4z - 3 = 13 &nbsp;&nbsp; z = _____</div>
                        <div>Inequality: 4z - 3 > 13 &nbsp;&nbsp; z = _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Flip Rule Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve and compare:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Equation: -5x = 20 &nbsp;&nbsp; x = _____</div>
                        <div>Inequality: -5x < 20 &nbsp;&nbsp; x = _____ (Remember to flip!)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) Equation: -2y = 14 &nbsp;&nbsp; y = _____</div>
                        <div>Inequality: -2y ≥ 14 &nbsp;&nbsp; y = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Number Line Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the solution for both the equation and inequality on number lines:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Equation: x = 3</div>
                        <div class="number-line-area" style="height: 50px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>Inequality: x > 3</div>
                        <div class="number-line-area" style="height: 50px; margin-top: 5px; border: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How many solutions does an equation usually have? How about an inequality?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What is the most important difference to remember when solving inequalities?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Same numbers, different signs. Solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Equation: 2(x - 4) = 10 &nbsp;&nbsp; x = _____</div>
                        <div>Inequality: 2(x - 4) ≤ 10 &nbsp;&nbsp; x = _____</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create one word problem that can be solved as an equation. Then change ONE word to turn it into an inequality. Solve both.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek5);
    console.log("grade6-math-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek5);
    console.log("grade6-math-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek5',
        metadata: grade6MathWeek5.metadata,
        days: grade6MathWeek5
    });
    console.log("grade6-math-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek5 = grade6MathWeek5;
console.log("grade6-math-week5.js loaded and registered successfully");