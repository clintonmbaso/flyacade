// Grade 6 Mathematics - Term 2 Week 3 Data
const grade6MathWeek4 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 3,
        title: "Linear Equations",
        description: "Writing open sentences, forming equations, solving for variables, multi-step equations, and verifying solutions"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Linear Equations",
        subtopic: "Writing Open Sentences (Translating Word Problems)",
        lessonContent: `
            <p>Welcome to our study of linear equations! Today we'll learn how to translate English word problems into mathematical equations.</p>
            <p><strong>Key Question:</strong> How do we turn words into math?</p>
            <p><strong>Introduction:</strong> An <strong>open sentence</strong> is a mathematical statement that contains a variable and becomes either true or false depending on the value substituted for the variable.</p>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Variable:</strong> A letter (like x, y, or n) that represents an unknown number</li>
                <li><strong>Expression:</strong> A combination of numbers and variables (no equals sign)</li>
                <li><strong>Equation:</strong> Two expressions joined by an equals sign (=)</li>
                <li><strong>Open Sentence:</strong> An equation or inequality with a variable</li>
            </ul>
            <p><strong>Common Translation Words:</strong></p>
            <ul>
                <li>"is," "equals," "gives" → =</li>
                <li>"more than," "sum," "increased by," "added to" → +</li>
                <li>"less than," "difference," "decreased by," "subtracted from" → -</li>
                <li>"times," "product," "multiplied by" → × or no symbol (e.g., 3x)</li>
                <li>"divided by," "quotient," "ratio" → ÷ or fraction</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-language"></i> Word to Math Translation</div>
                <p><strong>"A number plus 5 equals 12"</strong> → n + 5 = 12</p>
                <p><strong>"Twice a number is 24"</strong> → 2n = 24</p>
                <p><strong>"Seven less than a number gives 10"</strong> → n - 7 = 10</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Clue Words</div>
                <p><strong>"More than"</strong> means addition, but order matters! "5 more than x" is x + 5, not 5 + x (though they're equal!).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Open Sentence Example</div>
                <p>x + 3 = 10 is an open sentence. It's true when x = 7, false otherwise.</p>
            </div>
        `,
        taskInstructions: "Translate word problems into algebraic equations and identify open sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Translate These Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Translate each sentence into an algebraic equation using a variable:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The sum of a number and 8 is 20.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) A number decreased by 4 equals 15.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) Twice a number gives 50.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>d) 12 more than a number is 30.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>e) A number divided by 3 equals 7.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Open Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which of these are open sentences? Circle them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5 + 3 = 8</div>
                        <div>b) x - 7 = 10</div>
                        <div>c) 9 + 4</div>
                        <div>d) 2n + 5 = 19</div>
                        <div>e) 15 > 10</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a word problem that translates to each equation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) n + 12 = 25</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>b) 3x = 21</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> For the open sentence x + 5 = 12, is the sentence true or false for each value?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>x = 7 → ________</div>
                        <div>x = 5 → ________</div>
                        <div>x = 12 → ________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create 5 word problems from daily life that can be written as equations. Write both the word problem and the equation.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Linear Equations",
        subtopic: "Forming Equations from Daily Life Situations",
        lessonContent: `
            <p>Today we'll practice creating one-variable equations based on real-life situations we encounter every day!</p>
            <p><strong>Key Question:</strong> How can we use math to describe everyday situations?</p>
            <p><strong>Introduction:</strong> Equations are everywhere! When you shop, cook, travel, or play games, you can use equations to describe what's happening.</p>
            <p><strong>Steps to Form an Equation:</strong></p>
            <ol>
                <li>Identify what needs to be found (this becomes your variable)</li>
                <li>Look for relationships and operations (addition, subtraction, multiplication, division)</li>
                <li>Write the equation linking the known and unknown quantities</li>
            </ol>
            <p><strong>Common Real-Life Situations:</strong></p>
            <ul>
                <li><strong>Shopping:</strong> "If I buy 3 notebooks for $x each and pay $15 total..."</li>
                <li><strong>Age Problems:</strong> "My brother is 3 years older than me. The sum of our ages is 21."</li>
                <li><strong>Travel:</strong> "A car travels at 60 km/h for x hours to cover 240 km."</li>
                <li><strong>Budget:</strong> "I spent $45 on dinner and had $20 left. How much did I start with?"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Situation</div>
                <p><strong>Situation:</strong> Maria bought 4 identical pencils for a total of $12.</p>
                <p><strong>Equation:</strong> Let p = price per pencil → 4p = 12</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Age Problem</div>
                <p><strong>Situation:</strong> John is 5 years older than twice his sister's age. John is 25 years old.</p>
                <p><strong>Equation:</strong> Let s = sister's age → 2s + 5 = 25</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Sharing Situation</div>
                <p><strong>Situation:</strong> A pizza is cut into 8 slices. Each person gets 2 slices. How many people can be served?</p>
                <p><strong>Equation:</strong> Let p = number of people → 2p = 8</p>
            </div>
        `,
        taskInstructions: "Form one-variable equations from various daily life scenarios.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shopping Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write an equation for each situation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Tom bought 6 erasers for $18. Let e = cost of one eraser.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) Sarah has $50. She buys a book for $x and receives $15 change.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) A pack of 8 markers costs $12. Let m = cost per marker.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Age and Time Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Form equations from these age/time situations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Maya is 4 years younger than her brother Ben. Ben is 12 years old.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) In 8 years, Ms. Jones will be 50 years old. Let a = her age now.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) A father is 3 times as old as his son. The father is 36.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Travel and Distance</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write equations for these travel scenarios:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A train travels 300 km in x hours at 75 km/h.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) A cyclist rides 15 km each hour. After h hours, they have traveled 60 km.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) Walking at 5 km/h, it takes t hours to cover 20 km.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a real-life situation that would use this equation: 3x + 5 = 20
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find or create 3 real-life situations at home or school that can be written as equations. Write the situation and the equation.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Linear Equations",
        subtopic: "Solving for X (Keeping the Equation Balanced)",
        lessonContent: `
            <p>Today we'll learn methods for solving linear equations by keeping the equation balanced at all times!</p>
            <p><strong>Key Question:</strong> How do we find the value of an unknown variable?</p>
            <p><strong>Introduction:</strong> Solving an equation means finding the value of the variable that makes the equation true. Think of an equation like a balanced scale - whatever you do to one side, you MUST do to the other!</p>
            <p><strong>The Golden Rule of Equation Solving:</strong></p>
            <div class="highlight-box">
                <p><strong>Whatever operation you perform on one side of the equation, you must perform the same operation on the other side.</strong></p>
            </div>
            <p><strong>Solving Simple Equations (One-Step):</strong></p>
            <ul>
                <li><strong>Addition/Subtraction:</strong> To solve x + a = b, subtract a from both sides → x = b - a</li>
                <li><strong>Multiplication/Division:</strong> To solve ax = b, divide both sides by a → x = b ÷ a</li>
                <li><strong>Why it works:</strong> You're "undoing" the operation to isolate the variable</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> The Balance Scale Method</div>
                <p><strong>Equation:</strong> x + 5 = 12</p>
                <p>Subtract 5 from both sides: x + 5 - 5 = 12 - 5 → x = 7</p>
                <p><strong>Check:</strong> 7 + 5 = 12 ✓</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-divide"></i> Solving with Division</div>
                <p><strong>Equation:</strong> 3x = 18</p>
                <p>Divide both sides by 3: 3x ÷ 3 = 18 ÷ 3 → x = 6</p>
                <p><strong>Check:</strong> 3 × 6 = 18 ✓</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Solving with Subtraction</div>
                <p><strong>Equation:</strong> x - 4 = 9</p>
                <p>Add 4 to both sides: x - 4 + 4 = 9 + 4 → x = 13</p>
                <p><strong>Check:</strong> 13 - 4 = 9 ✓</p>
            </div>
        `,
        taskInstructions: "Solve one-step linear equations using the balance method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Solve by Adding or Subtracting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each equation. Show your work and check your answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) x + 9 = 15</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>b) y - 7 = 10</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>c) n + 12 = 30</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>d) a - 5 = 20</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Solve by Multiplying or Dividing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each equation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4x = 24</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>b) y ÷ 6 = 5 (or y/6 = 5)</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>c) 7n = 49</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>d) m ÷ 8 = 3</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each equation using the balance method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) x + 14 = 27</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) 9y = 36</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) n - 11 = 19</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d) w ÷ 5 = 9</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A student solved x + 8 = 20 by writing x = 20 + 8 = 28. What did they do wrong? Correct the solution.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Solve 10 one-step equations (mix of addition, subtraction, multiplication, division). Show each step and check your answers.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Linear Equations",
        subtopic: "Multi-Step Equations (Two-Step)",
        lessonContent: `
            <p>Today we'll learn how to solve equations that require two steps to isolate the variable!</p>
            <p><strong>Key Question:</strong> What do we do when an equation has two operations?</p>
            <p><strong>Introduction:</strong> Many real-world problems need two steps to solve. For example: 2x + 5 = 15. Here, x is multiplied by 2, then 5 is added. To solve, we "undo" operations in reverse order (undo addition/subtraction first, then multiplication/division).</p>
            <p><strong>Two-Step Equation Strategy:</strong></p>
            <ol>
                <li>First, <strong>add or subtract</strong> to get the term with the variable alone on one side</li>
                <li>Then, <strong>multiply or divide</strong> to get the variable by itself</li>
                <li>Always check your answer by substituting back into the original equation</li>
            </ol>
            <p><strong>Remember PEMDAS backward!</strong> When solving, we reverse the order of operations (undo addition/subtraction before multiplication/division).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-step-forward"></i> Two-Step Example 1</div>
                <p><strong>Equation:</strong> 2x + 5 = 15</p>
                <p>Step 1: Subtract 5 from both sides → 2x = 10</p>
                <p>Step 2: Divide both sides by 2 → x = 5</p>
                <p><strong>Check:</strong> 2(5) + 5 = 10 + 5 = 15 ✓</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-step-backward"></i> Two-Step Example 2</div>
                <p><strong>Equation:</strong> 3x - 7 = 14</p>
                <p>Step 1: Add 7 to both sides → 3x = 21</p>
                <p>Step 2: Divide both sides by 3 → x = 7</p>
                <p><strong>Check:</strong> 3(7) - 7 = 21 - 7 = 14 ✓</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fraction"></i> Two-Step Example 3</div>
                <p><strong>Equation:</strong> x/4 + 3 = 8</p>
                <p>Step 1: Subtract 3 from both sides → x/4 = 5</p>
                <p>Step 2: Multiply both sides by 4 → x = 20</p>
                <p><strong>Check:</strong> 20 ÷ 4 + 3 = 5 + 3 = 8 ✓</p>
            </div>
        `,
        taskInstructions: "Solve two-step linear equations using reverse operations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Two-Step Equations (Addition then Multiplication)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each equation. Show both steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 3x + 4 = 19</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                        <div>b) 5y + 7 = 32</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                        <div>c) 2n + 9 = 21</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Two-Step Equations (Subtraction then Multiplication)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each equation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4x - 5 = 15</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                        <div>b) 7y - 3 = 25</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                        <div>c) 6a - 9 = 27</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Two-Step Equations with Division</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these equations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) x/2 + 6 = 12</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                        <div>b) y/3 - 4 = 2</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                        <div>c) n/5 + 8 = 15</div>
                        <div class="answer-space" style="height: 70px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems to Two-Step Equations</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write an equation and solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Twice a number plus 5 equals 19. Find the number.</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>b) Three times a number decreased by 7 gives 20. Find the number.</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create and solve 5 two-step equations. Each equation should require a different combination of operations.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Linear Equations",
        subtopic: "Equation Verification (Checking Answers)",
        lessonContent: `
            <p>Today we'll learn how to verify our solutions by substituting the answer back into the original equation!</p>
            <p><strong>Key Question:</strong> How can we be sure our answer is correct?</p>
            <p><strong>Introduction:</strong> Verification is a critical step in solving equations. It allows us to check our work and confirm that the value we found truly makes the equation true. This is especially important for multi-step equations where mistakes can happen.</p>
            <p><strong>The Verification Process:</strong></p>
            <ol>
                <li>Take the original equation</li>
                <li>Replace the variable with your solution</li>
                <li>Simplify both sides</li>
                <li>Check if both sides are equal</li>
            </ol>
            <p><strong>Why Verification Matters:</strong></p>
            <ul>
                <li>Catches calculation errors</li>
                <li>Builds confidence in your answer</li>
                <li>Develops mathematical thinking and precision</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Verification Example 1</div>
                <p><strong>Equation:</strong> 3x + 5 = 20</p>
                <p><strong>Solution:</strong> x = 5</p>
                <p><strong>Verify:</strong> Left side: 3(5) + 5 = 15 + 5 = 20</p>
                <p>Right side: 20</p>
                <p>20 = 20 ✓ Correct!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> Catching an Error</div>
                <p><strong>Equation:</strong> 2x - 3 = 11</p>
                <p><strong>Student's answer:</strong> x = 6</p>
                <p><strong>Verify:</strong> 2(6) - 3 = 12 - 3 = 9, not 11</p>
                <p>9 ≠ 11 ✗ Incorrect! Correct answer: x = 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Verification Steps</div>
                <p>Always write: "Check: LS = ... , RS = ... , LS = RS, therefore x = ___ is correct."</p>
            </div>
        `,
        taskInstructions: "Solve equations and verify each solution by substitution.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Verify Given Solutions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Check whether the given value is a solution. Show your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) x + 9 = 17, x = 8</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>b) 5y = 35, y = 6</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>c) 2n - 4 = 10, n = 7</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Solve and Verify</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each equation, then verify your solution:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) x + 12 = 25</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        <div>b) 4x = 32</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        <div>c) 3y - 8 = 13</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find and Correct the Mistake</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A student solved 2x + 7 = 19 and got x = 6. Verify their answer. If incorrect, find the correct solution and verify.
                    <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Complete Verification Table</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the table for the equation 3x + 4 = 16:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">x value</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Left Side (3x+4)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Right Side (16)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Solution?</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">16</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">5</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">16</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">6</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">16</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to verify your solution after solving an equation?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create 4 equations (different types: one-step and two-step). Solve each and verify your solution. Show all verification steps.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek4);
    console.log("grade6-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek4);
    console.log("grade6-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek4',
        metadata: grade6MathWeek4.metadata,
        days: grade6MathWeek4
    });
    console.log("grade6-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek4 = grade6MathWeek4;
console.log("grade6-math-week4.js loaded and registered successfully");