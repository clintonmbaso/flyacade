// Grade 6 Math - Week 7 Data
const grade6MathWeek7 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 1,
        week: 7,
        title: "Working with Integers",
        description: "Understanding, comparing, and performing operations with positive and negative integers in real-world contexts"
    },
    
    monday: {
        subject: "Math",
        topic: "Working with Integers",
        subtopic: "Introduction to Integers and Real-World Contexts",
        lessonContent: `
            <p>Welcome to the world of integers! This week we will explore numbers that can be positive, negative, or zero, and discover how they appear in our daily lives.</p>
            <p><strong>Key Concept:</strong> Integers are whole numbers that can be positive, negative, or zero. They help us represent situations like temperatures below freezing, floors below ground level, or financial debt.</p>
            <p><strong>What Are Integers?</strong></p>
            <ul>
                <li><strong>Positive Integers:</strong> Numbers greater than zero (1, 2, 3...)</li>
                <li><strong>Negative Integers:</strong> Numbers less than zero (-1, -2, -3...)</li>
                <li><strong>Zero:</strong> The neutral integer (0) that separates positives and negatives</li>
            </ul>
            <p><strong>Real-World Examples of Negative Numbers:</strong></p>
            <ul>
                <li>Temperature: -5°C (5 degrees below freezing)</li>
                <li>Elevators: B1, B2 (basement levels)</li>
                <li>Finance: -$20 (owing twenty dollars)</li>
                <li>Sports: Losing 10 points in a game</li>
                <li>Geography: 200 meters below sea level</li>
            </ul>
            <p><strong>The Number Ladder (Vertical Number Line):</strong> Imagine a ladder where zero is at ground level. Positive integers go upward, negative integers go downward. This helps visualize above and below zero situations.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half" style="color: #4A90E2;"></i> Temperature Example</div>
                <p>If it's -3°C in the morning and warms up to 5°C by afternoon, we've moved from below zero to above zero on our number ladder.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Building Levels</div>
                <p>A building with floors -2, -1, 0, 1, 2, 3 shows how integers represent different levels. Floor -2 is two levels below ground!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Quick Tip</div>
                <p>The negative sign (-) tells us the number is below zero. No sign means positive (above zero).</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using integers in real-world contexts by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> List 5 real-world situations where you might see or use negative numbers:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw a vertical number line (number ladder) from -5 to 5. Label each integer:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Classify these numbers as positive, negative, or zero:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 12 <div style="display: inline-block; width: 100px; border-bottom: 1px solid #ccc; margin-left: 10px;"></div></div>
                    <div>b. -8 <div style="display: inline-block; width: 100px; border-bottom: 1px solid #ccc; margin-left: 10px;"></div></div>
                    <div>c. 0 <div style="display: inline-block; width: 100px; border-bottom: 1px solid #ccc; margin-left: 10px;"></div></div>
                    <div>d. -15 <div style="display: inline-block; width: 100px; border-bottom: 1px solid #ccc; margin-left: 10px;"></div></div>
                    <div>e. 3 <div style="display: inline-block; width: 100px; border-bottom: 1px solid #ccc; margin-left: 10px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Explain what the integer -25 might represent in a real-life situation:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 examples of negative numbers in your home or neighborhood. Write down what they represent.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Working with Integers",
        subtopic: "Comparing and Ordering Integers",
        lessonContent: `
            <p>Today we will learn how to compare integers and put them in order. Remember: as we move to the right on a number line, numbers get larger, even when we're dealing with negatives!</p>
            <p><strong>Key Concept:</strong> On a horizontal number line, numbers increase as we move right and decrease as we move left. This means -1 is greater than -5, even though 5 looks bigger than 1!</p>
            <p><strong>Comparison Symbols:</strong></p>
            <ul>
                <li><strong>></strong> means "greater than" (points to the smaller number)</li>
                <li><strong><</strong> means "less than" (points to the larger number)</li>
                <li><strong>=</strong> means "equal to"</li>
            </ul>
            <p><strong>Rules for Comparing Integers:</strong></p>
            <ol>
                <li>Any positive integer is greater than any negative integer</li>
                <li>Zero is greater than any negative integer</li>
                <li>Zero is less than any positive integer</li>
                <li>When comparing two negative integers, the one closer to zero is greater</li>
            </ol>
            <p><strong>Ordering Integers:</strong> To order integers from least to greatest, arrange them from left to right as they would appear on a number line.</p>
            <p><strong>Visual Strategy:</strong> Draw a quick number line in your mind or on paper when comparing integers. This prevents confusion!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-not-equal"></i> Comparison Example</div>
                <p>-3 > -7 because -3 is closer to zero on the number line. Even though 7 looks bigger than 3, remember we're dealing with negatives!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-down"></i> Ordering Example</div>
                <p>Order from least to greatest: -4, 2, -1, 0, -3 becomes: -4, -3, -1, 0, 2</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Trick</div>
                <p>Think of the comparison symbol as a hungry alligator's mouth—it always wants to eat the bigger number!</p>
            </div>
        `,
        taskInstructions: "Practice comparing and ordering integers by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comparing Integers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Compare each pair using >, <, or =:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. -5 ___ 3</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 0 ___ -2</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. -4 ___ -1</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. -7 ___ -10</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. 8 ___ -8</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Ordering Integers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Order each set from least to greatest:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 5, -2, 0, -3, 1</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. -10, -5, -15, 0, -1</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. -8, 4, -2, 6, -6</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Integer War Game Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Imagine you drew these cards in Integer War. Which is greater?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Card 1: -4 | Card 2: -9</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Card 1: 0 | Card 2: -6</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Card 1: -12 | Card 2: 3</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which temperature is colder: -8°C or -3°C? Explain using integer comparison:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 integer comparison problems for a classmate to solve tomorrow.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Working with Integers",
        subtopic: "Addition and Subtraction with Number Lines",
        lessonContent: `
            <p>Today we will learn how to add and subtract integers using number lines as visual aids. Remember: adding means moving right, subtracting means moving left!</p>
            <p><strong>Key Concept:</strong> A number line helps us visualize integer operations. Think of it as a path where positive integers are to the right of zero and negative integers are to the left.</p>
            <p><strong>Rules for Adding Integers:</strong></p>
            <ol>
                <li>Start at the first number on the number line</li>
                <li>If adding a positive number, move RIGHT that many spaces</li>
                <li>If adding a negative number, move LEFT that many spaces</li>
                <li>Where you land is your answer</li>
            </ol>
            <p><strong>Rules for Subtracting Integers:</strong></p>
            <ol>
                <li>Start at the first number on the number line</li>
                <li>If subtracting a positive number, move LEFT that many spaces</li>
                <li>If subtracting a negative number, move RIGHT that many spaces (two negatives make a positive!)</li>
                <li>Where you land is your answer</li>
            </ol>
            <p><strong>Human Number Line Activity:</strong> We'll physically walk out problems to understand the movement on a number line.</p>
            <p><strong>Temperature Changes:</strong> Adding and subtracting integers perfectly models temperature changes throughout the day!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Addition Example</div>
                <p>-3 + 5 = 2. Start at -3, move 5 spaces right: -2, -1, 0, 1, 2. You land on 2.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus-circle"></i> Subtraction Example</div>
                <p>4 - 6 = -2. Start at 4, move 6 spaces left: 3, 2, 1, 0, -1, -2. You land on -2.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-three-quarters"></i> Temperature Example</div>
                <p>If it's -5°C and the temperature rises 8 degrees, that's -5 + 8 = 3°C. We went from below freezing to above freezing!</p>
            </div>
        `,
        taskInstructions: "Practice adding and subtracting integers using number lines by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Number Line Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use a number line to solve these addition problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. -2 + 6 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 3 + (-5) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. -4 + (-3) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Line Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use a number line to solve these subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 5 - 7 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. -3 - 2 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 4 - (-3) = ___ (Hint: Subtracting negative = moving right)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Temperature Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these temperature change problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Morning temperature: -8°C. It warms up 12 degrees. What's the new temperature?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Afternoon temperature: 5°C. It cools down 9 degrees overnight. What's the night temperature?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. If it's -3°C and drops another 5 degrees, how cold does it get?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Human Number Line Simulation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Imagine walking on a giant number line. Describe your moves:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Start at -2. Add 5. Where do you land?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Start at 4. Subtract 7. Where do you land?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw number lines to solve: -6 + 9, 2 - 8, and -5 - 3",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Working with Integers",
        subtopic: "Moving Beyond the Number Line",
        lessonContent: `
            <p>Today we'll learn mental math strategies for adding and subtracting integers without always drawing number lines. We'll discover patterns and rules that make integer operations faster!</p>
            <p><strong>Key Concept:</strong> Once we understand how integers work, we can develop rules for adding and subtracting them mentally.</p>
            <p><strong>Pattern Discovery:</strong></p>
            <ul>
                <li>When adding integers with the same sign: Add the absolute values, keep the sign</li>
                <li>When adding integers with different signs: Subtract the smaller absolute value from the larger, take the sign of the number with larger absolute value</li>
                <li>Subtracting a number is the same as adding its opposite</li>
            </ul>
            <p><strong>The "Balance" Method (Using Counters):</strong></p>
            <ol>
                <li>Use positive chips (+) and negative chips (-)</li>
                <li>Each positive cancels one negative (like +1 and -1 make 0)</li>
                <li>Whatever chips remain after cancellation give you the answer</li>
            </ol>
            <p><strong>Mental Math Strategies:</strong></p>
            <ol>
                <li>For subtraction: "Add the opposite" (a - b = a + -b)</li>
                <li>For adding negatives: "Think of owing money" (-5 + -3 = owing $5 plus owing $3 = owing $8)</li>
                <li>For mixed signs: "Who wins?" The number with larger absolute value determines the sign</li>
            </ol>
            <p><strong>Speed Challenge:</strong> We'll practice mental math drills to build fluency with integer operations!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Balance Method Example</div>
                <p>-5 + 3 = ? Start with 5 negatives. Add 3 positives. Cancel: 3 pairs become 0. 2 negatives remain. Answer: -2.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Mental Math Example</div>
                <p>8 - 12 = ? Think: "8 plus negative 12." Different signs, subtract: 12-8=4. 12 has larger absolute value, negative wins. Answer: -4.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Rule Discovery</div>
                <p>Notice: Subtracting a larger number from a smaller gives a negative. 3 - 7 = -4. This pattern always holds true!</p>
            </div>
        `,
        taskInstructions: "Practice mental math and alternative methods for integer operations by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pattern Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these problems and look for patterns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 5 + 3 = ___ &nbsp;&nbsp;&nbsp; 5 + (-3) = ___ &nbsp;&nbsp;&nbsp; -5 + 3 = ___ &nbsp;&nbsp;&nbsp; -5 + (-3) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. What pattern do you notice when adding integers with the same sign?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. What pattern do you notice when adding integers with different signs?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Balance Method Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the balance method (imagining chips) to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. -4 + 7 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 3 + (-5) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. -2 + (-6) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mental Math Drills</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve mentally without number lines:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 9 - 14 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. -7 + 10 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. -4 - 5 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 6 - (-2) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. -8 + (-3) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Rule Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write your own rule for subtracting integers based on what you've learned:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 integer addition/subtraction problems that can be solved mentally. Include answers on the back.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Working with Integers",
        subtopic: "Introduction to Multiplying and Dividing Integers",
        lessonContent: `
            <p>Today we'll extend our integer knowledge to multiplication and division. These operations follow specific patterns that we can discover through real-world examples!</p>
            <p><strong>Key Concept:</strong> Multiplication is repeated addition. Division is the inverse of multiplication. These relationships still hold true with integers.</p>
            <p><strong>Multiplication Patterns:</strong></p>
            <ul>
                <li>Positive × Positive = Positive (3 × 4 = 12)</li>
                <li>Positive × Negative = Negative (3 × -4 = -12)</li>
                <li>Negative × Positive = Negative (-3 × 4 = -12)</li>
                <li>Negative × Negative = Positive (-3 × -4 = 12)</li>
            </ul>
            <p><strong>Real-World Multiplication:</strong> If you lose 5 points (-5) three times, you've lost 15 points total: -5 × 3 = -15.</p>
            <p><strong>Division Patterns:</strong> Since division is the inverse of multiplication, it follows the same sign rules:</p>
            <ul>
                <li>Positive ÷ Positive = Positive</li>
                <li>Positive ÷ Negative = Negative</li>
                <li>Negative ÷ Positive = Negative</li>
                <li>Negative ÷ Negative = Positive</li>
            </ul>
            <p><strong>Simple Rule:</strong> Same signs give positive answers, different signs give negative answers. This works for both multiplication and division!</p>
            <p><strong>Word Problem Application:</strong> We'll solve real-world problems to ensure we understand integer operations in context.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> Multiplication Example</div>
                <p>-3 × 4 = -12. Think: "3 groups of -4" or "lose 4 points 3 times = lose 12 points."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-divide"></i> Division Example</div>
                <p>-15 ÷ 3 = -5. Think: "If 3 groups of -5 equals -15, then -15 divided by 3 must be -5."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Sign Rule</div>
                <p>Remember: Like signs = positive answer. Unlike signs = negative answer. Works for both × and ÷!</p>
            </div>
        `,
        taskInstructions: "Practice multiplying and dividing integers by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiplication Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Multiply these integers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4 × 3 = ___ &nbsp;&nbsp;&nbsp; 4 × (-3) = ___ &nbsp;&nbsp;&nbsp; -4 × 3 = ___ &nbsp;&nbsp;&nbsp; -4 × (-3) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 5 × (-2) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. -6 × 4 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. -3 × (-5) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Division Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Divide these integers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 12 ÷ 3 = ___ &nbsp;&nbsp;&nbsp; 12 ÷ (-3) = ___ &nbsp;&nbsp;&nbsp; -12 ÷ 3 = ___ &nbsp;&nbsp;&nbsp; -12 ÷ (-3) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. -20 ÷ 5 = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 18 ÷ (-2) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. -24 ÷ (-6) = ___</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems with All Operations</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these real-world integer problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The temperature drops 3 degrees each hour for 4 hours. If it started at 5°C, what is the new temperature?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. You owe $6 to each of 3 friends. What is your total debt? (Write as an integer)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. A submarine descends 15 meters in 5 equal steps. How many meters does it descend each step?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. A football team lost 4 yards on each of 3 plays. What was their total yardage change?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the sign rules:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Positive × Positive = ________</div>
                        <div>Positive × Negative = ________</div>
                        <div>Negative × Positive = ________</div>
                        <div>Negative × Negative = ________</div>
                        <div style="margin-top: 10px;">(Same rules apply to division!)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why does a negative times a negative equal a positive? Try to explain:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find one example each of integer multiplication and division in real life. Describe them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek7);
    console.log("grade6-math-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek7);
    console.log("grade6-math-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek7',
        metadata: grade6MathWeek7.metadata,
        days: grade6MathWeek7
    });
    console.log("grade6-math-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek7 = grade6MathWeek7;
console.log("grade6-math-week7.js loaded and registered successfully");