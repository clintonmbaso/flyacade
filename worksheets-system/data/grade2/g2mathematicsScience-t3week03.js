// Grade 2 Mathematics & Science - Term 3 Week 3 Data
const grade2MathScienceWeek3 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 3,
        week: 3,
        title: "Addition Strategies",
        description: "Adding numbers using strategies, number patterns, rules in patterns, money up to K999, and addition quiz"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding Numbers Using Strategies (Number Trees, Wheels, Magic Squares)",
        lessonContent: `
            <p>Welcome to our addition week! Today we'll learn fun ways to add numbers using special strategies.</p>
            <p><strong>Key Question:</strong> What are different ways we can add numbers?</p>
            <p><strong>Introduction:</strong> Addition is when we put numbers together to find the total. There are many fun ways to practice addition!</p>
            <p><strong>Three Addition Strategies:</strong></p>
            <ol>
                <li><strong>Number Trees:</strong> A tree shape that shows how numbers break apart and come together</li>
                <li><strong>Number Wheels:</strong> A circle with numbers that you add to a center number</li>
                <li><strong>Magic Squares:</strong> A square grid where every row and column adds up to the same number</li>
            </ol>
            <p><strong>Remember:</strong> The symbol for addition is + (plus sign). The answer is called the sum.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Number Tree Example</div>
                <p>Draw a tree trunk with the number 10. Two branches show 6 and 4. 6 + 4 = 10!</p>
                <p>Another tree: Trunk = 15, Branches = 7 and 8 (because 7 + 8 = 15)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> Number Wheel Example</div>
                <p>Center number = 5. Numbers on wheel: 2, 3, 4, 1, 6. Add each to 5:</p>
                <p>5+2=7, 5+3=8, 5+4=9, 5+1=6, 5+6=11</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Magic Square Example</div>
                <p>A 3x3 square with numbers that each row adds to 15:</p>
                <p>Row 1: 2 + 7 + 6 = 15</p>
                <p>Row 2: 9 + 5 + 1 = 15</p>
                <p>Row 3: 4 + 3 + 8 = 15</p>
            </div>
        `,
        taskInstructions: "Complete the number trees, wheels, and magic squares.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Number Trees</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing numbers in these number trees:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tree 1: Trunk = 12, Branch 1 = 7, Branch 2 = ____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Tree 2: Trunk = 20, Branch 1 = ____, Branch 2 = 9</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Tree 3: Trunk = ____, Branch 1 = 11, Branch 2 = 8</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Wheels</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the number wheel. Center = 8. Numbers on wheel: 3, 5, 7, 2, 9, 4
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>8 + 3 = ____</div>
                        <div>8 + 5 = ____</div>
                        <div>8 + 7 = ____</div>
                        <div>8 + 2 = ____</div>
                        <div>8 + 9 = ____</div>
                        <div>8 + 4 = ____</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Magic Square</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the magic square so each row adds to 18:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 200px; border-collapse: collapse;">
                            <tr>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">5</td>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">____</td>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">7</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">____</td>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">6</td>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">____</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">4</td>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">____</td>
                                <td style="border: 1px solid black; padding: 10px; text-align: center;">8</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a number tree with trunk = 25 and two branches of your choice:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a number wheel with center = 10 and 6 numbers on the wheel:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Create your own number tree and number wheel at home. Show them to a family member and explain how they work.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Identifying Number Patterns Involving Addition",
        lessonContent: `
            <p>Today we'll discover the secrets of number patterns! Numbers can follow special rules.</p>
            <p><strong>Key Question:</strong> How can we find patterns in numbers?</p>
            <p><strong>What is a Number Pattern?</strong></p>
            <p>A number pattern is a sequence of numbers that follows a rule. When we add the same number each time, we create a pattern!</p>
            <p><strong>Examples of Addition Patterns:</strong></p>
            <ul>
                <li><strong>Counting by 2s:</strong> 2, 4, 6, 8, 10... (add 2 each time)</li>
                <li><strong>Counting by 5s:</strong> 5, 10, 15, 20, 25... (add 5 each time)</li>
                <li><strong>Counting by 10s:</strong> 10, 20, 30, 40, 50... (add 10 each time)</li>
            </ul>
            <p><strong>How to Find the Pattern:</strong></p>
            <ol>
                <li>Look at the first two numbers. How much did they increase?</li>
                <li>Check if the same increase happens between the next two numbers</li>
                <li>If yes, you found the rule!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Pattern 1: Adding 3</div>
                <p>3, 6, 9, 12, 15, 18</p>
                <p>Rule: Add 3 each time. 3+3=6, 6+3=9, 9+3=12, etc.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Pattern 2: Adding 7</div>
                <p>7, 14, 21, 28, 35</p>
                <p>Rule: Add 7 each time. 7+7=14, 14+7=21, etc.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Find the Missing Number</div>
                <p>Pattern: 4, 8, 12, ____, 20</p>
                <p>Rule: Add 4 each time. The missing number is 16!</p>
            </div>
        `,
        taskInstructions: "Identify the rule in each number pattern and fill in missing numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: What's the Rule?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the rule for each pattern (how much is added each time):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 5, 10, 15, 20, 25 → Rule: Add ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. 2, 4, 6, 8, 10 → Rule: Add ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. 11, 22, 33, 44, 55 → Rule: Add ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. 8, 16, 24, 32, 40 → Rule: Add ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>E. 3, 6, 9, 12, 15 → Rule: Add ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 10, 20, 30, ____, 50, ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. 3, 6, 9, ____, 15, ____, 21</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. 25, 30, 35, ____, 45, ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. 100, 200, 300, ____, 500, ____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>E. 4, 8, 12, ____, 20, ____, 28</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a pattern with 6 numbers. Write your rule at the bottom:
                    <div class="answer-space" style="height: 60px;"></div>
                    <div>Rule: Add ____ each time</div>
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at this pattern: 1, 3, 5, 7, 9, 11. What do you notice about all the numbers?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would be the next three numbers in the pattern: 20, 18, 16, 14? (Be careful - what is being added?)
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find number patterns around your home (clocks, calendars, number lines). Write down two patterns you find.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Determining the Rule in Number Patterns",
        lessonContent: `
            <p>Today we'll become pattern detectives! We'll learn how to find the secret rule in any number pattern.</p>
            <p><strong>Key Question:</strong> How can we figure out the rule of a number pattern?</p>
            <p><strong>Steps to Find the Rule:</strong></p>
            <ol>
                <li>Look at the first number and the second number. Subtract or count up to find the difference.</li>
                <li>Check if the same difference works between the second and third numbers.</li>
                <li>Test the rule on the next pair to make sure it works.</li>
                <li>Write the rule: "Add ____ each time"</li>
            </ol>
            <p><strong>Sometimes patterns can be tricky:</strong></p>
            <ul>
                <li><strong>Increasing patterns:</strong> Numbers get bigger (add a number)</li>
                <li><strong>Decreasing patterns:</strong> Numbers get smaller (subtract a number)</li>
                <li><strong>Alternating patterns:</strong> The rule might change back and forth</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Work Example 1</div>
                <p>Pattern: 12, 15, 18, 21, 24</p>
                <p>Step 1: 15 - 12 = 3</p>
                <p>Step 2: 18 - 15 = 3 ✓</p>
                <p>Step 3: 21 - 18 = 3 ✓</p>
                <p>Rule: Add 3 each time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Work Example 2</div>
                <p>Pattern: 50, 45, 40, 35, 30</p>
                <p>Step 1: 50 - 45 = 5 (going down!)</p>
                <p>Step 2: 45 - 40 = 5 ✓</p>
                <p>Rule: Subtract 5 each time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Challenge Pattern</div>
                <p>Pattern: 2, 4, 3, 5, 4, 6</p>
                <p>This pattern adds 2, then subtracts 1, then adds 2, then subtracts 1... It alternates!</p>
            </div>
        `,
        taskInstructions: "Determine the rule for each pattern and find the missing numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each pattern, write the rule (how much is added or subtracted):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 22, 24, 26, 28, 30 → Rule: ________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. 100, 90, 80, 70, 60 → Rule: ________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. 15, 20, 25, 30, 35 → Rule: ________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. 99, 97, 95, 93, 91 → Rule: ________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>E. 7, 14, 21, 28, 35 → Rule: ________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Missing Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Determine the rule, then fill in the missing numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 5, 10, ____, 20, ____, 30</div>
                        <div>Rule: ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div>B. 45, 40, 35, ____, 25, ____</div>
                        <div>Rule: ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div>C. 6, 12, 18, ____, 30, ____, 42</div>
                        <div>Rule: ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What Comes Next?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find the rule and write the next three numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 2, 5, 8, 11, ___, ___, ___</div>
                        <div>Rule: ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div>B. 60, 55, 50, 45, ___, ___, ___</div>
                        <div>Rule: ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at this tricky pattern: 1, 2, 4, 5, 7, 8, 10, ___, ___, ___
                    <div>What is the rule? (Hint: It alternates between adding 1 and adding 2!)</div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create two different number patterns. Give them to a family member to figure out the rule. Check if they got it right!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Exploring Practical Activities Involving Money up to K999",
        lessonContent: `
            <p>Today we'll use our addition skills with real money! We'll learn how to add amounts up to K999.</p>
            <p><strong>Key Question:</strong> How can addition help us with money in real life?</p>
            <p><strong>Money in Papua New Guinea:</strong></p>
            <p>Papua New Guinea uses Kina (K) and Toea (t). 100 Toea = 1 Kina.</p>
            <p><strong>Common Banknotes:</strong> K2, K5, K10, K20, K50, K100</p>
            <p><strong>Common Coins:</strong> 5t, 10t, 20t, 50t, K1</p>
            <p><strong>Adding Money:</strong></p>
            <ul>
                <li>Add the Kina together first</li>
                <li>Add the Toea together</li>
                <li>If Toea is 100 or more, convert to Kina (100t = K1)</li>
            </ul>
            <p><strong>Shopping Scenario:</strong> If you buy an item for K25 and another for K37, how much total? K25 + K37 = K62</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Example 1</div>
                <p>Item 1: K45, Item 2: K32</p>
                <p>Add: K45 + K32 = K77</p>
                <p>No Toea to worry about!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Money Example with Toea</div>
                <p>Item 1: K15 and 50t, Item 2: K10 and 25t</p>
                <p>Kina: K15 + K10 = K25</p>
                <p>Toea: 50t + 25t = 75t</p>
                <p>Total: K25 and 75t</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Converting Toea to Kina</div>
                <p>Item 1: K8 and 70t, Item 2: K5 and 80t</p>
                <p>Kina: K8 + K5 = K13</p>
                <p>Toea: 70t + 80t = 150t</p>
                <p>150t = K1 and 50t (because 100t = K1)</p>
                <p>Total: K13 + K1 = K14 and 50t</p>
            </div>
        `,
        taskInstructions: "Add money amounts up to K999, including Kina and Toea.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Kina Only</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add these Kina amounts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. K45 + K32 = _______</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. K123 + K456 = _______</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. K250 + K320 = _______</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. K500 + K499 = _______</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>E. K111 + K222 + K333 = _______</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding Kina and Toea</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add these amounts (remember: 100t = K1):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. K12 and 30t + K15 and 20t = _______</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>B. K8 and 50t + K6 and 40t = _______</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>C. K25 and 80t + K14 and 90t = _______</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>D. K3 and 45t + K7 and 55t = _______</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>E. K50 and 25t + K30 and 85t = _______</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems - Shopping</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these real-life money problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Maria bought a bag for K85 and shoes for K72. How much did she spend?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div>B. John has K250. He wants to buy a book for K89 and a toy for K105. Does he have enough money? How much will he have left?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div>C. A school needs to buy 3 tables. Each table costs K150. What is the total cost?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Make Your Own Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write your own money addition word problem using amounts up to K999:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at prices in a shop or catalog. Choose two items, add their prices, and write the total. Do this for three different pairs of items.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Quiz: Addition",
        lessonContent: `
            <p>Today is quiz day! We'll review everything we learned about addition this week.</p>
            <p><strong>Week 3 Review:</strong></p>
            <ol>
                <li><strong>Monday:</strong> Adding numbers using strategies (number trees, wheels, magic squares)</li>
                <li><strong>Tuesday:</strong> Identifying number patterns involving addition</li>
                <li><strong>Wednesday:</strong> Determining the rule in number patterns</li>
                <li><strong>Thursday:</strong> Adding money amounts up to K999</li>
            </ol>
            <p><strong>Quiz Tips:</strong></p>
            <ul>
                <li>Read each question carefully</li>
                <li>Show your work when needed</li>
                <li>Check your answers before finishing</li>
                <li>Remember: The sum is the answer when you add</li>
                <li>For money: 100 Toea = 1 Kina</li>
            </ul>
            <p><strong>Good luck!</strong> Do your best and show everything you've learned.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sample Quiz Question</div>
                <p>Complete the number tree: Trunk = 18, Branch 1 = 9, Branch 2 = ?</p>
                <p>Answer: 9 (because 9 + 9 = 18)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sample Quiz Question</div>
                <p>Find the rule: 7, 14, 21, 28, 35</p>
                <p>Answer: Add 7 each time</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sample Quiz Question</div>
                <p>Add: K35 and 40t + K22 and 70t</p>
                <p>Answer: K58 and 10t (because 40t+70t=110t=K1 and 10t, K35+K22=K57, K57+K1=K58)</p>
            </div>
        `,
        taskInstructions: "Complete the addition quiz. Take your time and check your work.",
        taskContent: `
            <div class="content-box">
                <p><strong>Quiz - Addition</strong></p>
                <p><em>Name: ____________________ Date: ____________________</em></p>
                <p><em>Total points: 25</em></p>
            </div>
            
            <div class="content-box">
                <p><strong>Section 1: Number Trees (4 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the number tree: Trunk = 24, Branch 1 = 15, Branch 2 = ____ (1 point)
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the number tree: Trunk = ____, Branch 1 = 22, Branch 2 = 18 (1 point)
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a number tree with trunk = 30 and branches 14 and 16: (2 points)
                    <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 2: Number Wheels (4 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Center number = 6. Add to 3, 5, and 9: (3 points)
                    <div>6 + 3 = ____, 6 + 5 = ____, 6 + 9 = ____</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> If center = 12, and you add it to a number to get 20, what is the number on the wheel? (1 point)
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 3: Number Patterns (8 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Find the rule for each pattern: (4 points - 1 point each)
                    <div>A. 4, 8, 12, 16, 20 → Rule: ________</div>
                    <div>B. 33, 30, 27, 24, 21 → Rule: ________</div>
                    <div>C. 2, 5, 8, 11, 14 → Rule: ________</div>
                    <div>D. 100, 90, 80, 70, 60 → Rule: ________</div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Fill in the missing numbers: (4 points - 1 point each blank)
                    <div>A. 9, 18, ____, 36, ____, 54</div>
                    <div>B. 55, 50, 45, ____, 35, ____</div>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 4: Money Addition (6 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Add these Kina amounts: (2 points)
                    <div>A. K234 + K345 = _______</div>
                    <div>B. K108 + K291 = _______</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Add these Kina and Toea amounts: (4 points - 2 points each)
                    <div>A. K25 and 60t + K18 and 70t = _______</div>
                    <div>B. K42 and 85t + K33 and 50t = _______</div>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 5: Word Problem (3 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> Lisa bought a dress for K78 and a hat for K45. She also bought socks for K12 and 50t. How much did she spend in total?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Bonus (1 extra point)</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Create your own addition number pattern with at least 5 numbers. Write the rule.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><em>End of quiz. Check your answers before submitting!</em></p>
            </div>
        `,
        homework: "Review your quiz answers. Practice addition with a family member using coins or toy money at home.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek3);
    console.log("grade2-mathscience-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek3);
    console.log("grade2-mathscience-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek3',
        metadata: grade2MathScienceWeek3.metadata,
        days: grade2MathScienceWeek3
    });
    console.log("grade2-mathscience-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek3 = grade2MathScienceWeek3;
console.log("grade2-mathscience-week3.js loaded and registered successfully");