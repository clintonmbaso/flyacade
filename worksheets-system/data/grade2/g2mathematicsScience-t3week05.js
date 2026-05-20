// Grade 2 Mathematics & Science - Term 3 Week 5 Data
const grade2MathsScienceWeek5 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 3,
        week: 5,
        title: "Subtraction Strategies",
        description: "Subtraction strategies, number patterns, money activities up to K999, and weekly quiz"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Using Strategies (Number Trees, Magic Squares, Number Games)",
        lessonContent: `
            <p>Welcome to our subtraction week! Today we'll learn fun strategies to make subtraction easier and more exciting!</p>
            <p><strong>Key Question:</strong> What are different ways we can solve subtraction problems?</p>
            <p><strong>Introduction:</strong> Subtraction is taking away one number from another. There are many strategies to help us subtract quickly and correctly!</p>
            <p><strong>Strategy 1: Number Trees</strong></p>
            <ul>
                <li>A number tree helps us break down numbers into smaller parts</li>
                <li>Example: 15 - 7 = ? Think: 15 - 5 = 10, then 10 - 2 = 8</li>
                <li>The tree shows how we "branch" the number into friendlier parts</li>
            </ul>
            <p><strong>Strategy 2: Magic Squares</strong></p>
            <ul>
                <li>In a magic square, each row and column has the same sum</li>
                <li>We can use subtraction to find missing numbers</li>
                <li>Example: If a row should add to 15 and we have 9, we subtract: 15 - 9 = 6</li>
            </ul>
            <p><strong>Strategy 3: Number Games</strong></p>
            <ul>
                <li>Counting backwards on a number line</li>
                <li>Using fingers or counters to take away</li>
                <li>"Think addition" strategy: 9 - 4 = ? Think: 4 + ? = 9</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Number Tree Example</div>
                <p>24 - 9 = ?</p>
                <p>Break 9 into 4 and 5: 24 - 4 = 20, then 20 - 5 = 15</p>
                <p>So 24 - 9 = 15!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Magic Square Example</div>
                <p>In a 3x3 magic square, every row adds to 15.</p>
                <p>If a row has 8 and 4, the missing number is: 15 - 8 - 4 = 3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice"></i> Number Game Example</div>
                <p>Using a number line to subtract 7 from 12:</p>
                <p>Start at 12, count backwards 7 steps: 11, 10, 9, 8, 7, 6, 5 → 12 - 7 = 5</p>
            </div>
        `,
        taskInstructions: "Practice subtraction using number trees, complete magic squares, and play subtraction games.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Number Trees</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use the number tree strategy to solve these:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 32 - 8 = ___</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">b) 45 - 9 = ___</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">c) 53 - 7 = ___</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Magic Squares</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing numbers so each row and column adds to 15:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 200px; border-collapse: collapse; text-align: center;">
                            <tr>
                                <td style="border: 1px solid black; padding: 15px;">8</td>
                                <td style="border: 1px solid black; padding: 15px;">1</td>
                                <td style="border: 1px solid black; padding: 15px;">___</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; padding: 15px;">3</td>
                                <td style="border: 1px solid black; padding: 15px;">___</td>
                                <td style="border: 1px solid black; padding: 15px;">7</td>
                             </tr>
                            <tr>
                                <td style="border: 1px solid black; padding: 15px;">___</td>
                                <td style="border: 1px solid black; padding: 15px;">9</td>
                                <td style="border: 1px solid black; padding: 15px;">2</td>
                             </tr>
                        </table>
                        <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Number Games</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use a number line to solve these subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 18 - 6 = ___</div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">b) 25 - 9 = ___</div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">c) 33 - 8 = ___</div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve using your favorite strategy:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Maria has 47 stickers. She gives 9 to her friend. How many does she have left? ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• There are 56 eggs in a basket. 8 eggs crack. How many eggs are still good? ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach a family member one subtraction strategy you learned today. Practice 5 subtraction problems together.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Identifying Number Patterns Involving Subtraction",
        lessonContent: `
            <p>Today we'll discover exciting number patterns that use subtraction!</p>
            <p><strong>Key Question:</strong> How can we see patterns when we subtract?</p>
            <p><strong>Introduction:</strong> Number patterns are everywhere! When we subtract the same number each time, we create a pattern.</p>
            <p><strong>What is a Number Pattern?</strong></p>
            <ul>
                <li>A number pattern is a sequence that follows a rule</li>
                <li>Example: 20, 18, 16, 14, 12 → subtracting 2 each time</li>
                <li>We call the number we subtract each time the "difference" or "step"</li>
            </ul>
            <p><strong>How to Identify Subtraction Patterns:</strong></p>
            <ol>
                <li>Look at two numbers next to each other</li>
                <li>Subtract the smaller from the larger (or see how much it decreases)</li>
                <li>Check if the same subtraction happens between all numbers</li>
                <li>Continue the pattern by subtracting the same number</li>
            </ol>
            <p><strong>Examples of Subtraction Patterns:</strong></p>
            <ul>
                <li>100, 90, 80, 70, 60 (subtract 10 each time)</li>
                <li>50, 45, 40, 35, 30 (subtract 5 each time)</li>
                <li>33, 30, 27, 24, 21 (subtract 3 each time)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Counting Down Pattern</div>
                <p>Pattern: 45, 40, 35, 30, 25</p>
                <p>45 - 5 = 40, 40 - 5 = 35, 35 - 5 = 30, 30 - 5 = 25</p>
                <p>The rule is: subtract 5 each time. The next number would be 20!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Pattern Table</div>
                <p>Create a table to see patterns:</p>
                <p>Position 1: 100</p>
                <p>Position 2: 95 (subtract 5)</p>
                <p>Position 3: 90 (subtract 5)</p>
                <p>Position 4: 85 (subtract 5)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Find the Rule</div>
                <p>Pattern: 60, 54, 48, 42, ?</p>
                <p>First, find the difference: 60 - 54 = 6, 54 - 48 = 6, 48 - 42 = 6</p>
                <p>The rule is subtract 6. The next number is 42 - 6 = 36!</p>
            </div>
        `,
        taskInstructions: "Identify the subtraction rule in each pattern and continue the sequence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: What's the Rule?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the subtraction rule for each pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 30, 27, 24, 21, ___ → Rule: subtract ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) 75, 70, 65, 60, ___ → Rule: subtract ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) 99, 90, 81, 72, ___ → Rule: subtract ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">d) 50, 45, 40, 35, ___ → Rule: subtract ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Continue the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the next two numbers in each pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 88, 80, 72, 64, ___, ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) 40, 35, 30, 25, ___, ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) 120, 110, 100, 90, ___, ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">d) 66, 60, 54, 48, ___, ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create 2 subtraction patterns of your own:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Pattern 1 (subtract 4): ___, ___, ___, ___, ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">Pattern 2 (subtract 7): ___, ___, ___, ___, ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 subtraction number patterns in your home (clock countdown, countdown on TV, page numbers). Write them down.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Determining the Rule in Number Patterns",
        lessonContent: `
            <p>Today we'll become pattern detectives and learn to find the secret rule in number patterns!</p>
            <p><strong>Key Question:</strong> How can we figure out the rule when we see a pattern?</p>
            <p><strong>Introduction:</strong> Every number pattern follows a rule. Our job is to discover what that rule is!</p>
            <p><strong>Steps to Find the Rule:</strong></p>
            <ol>
                <li>Look at the first two numbers</li>
                <li>Subtract: first number - second number = ?</li>
                <li>Check if the same subtraction works for the next pair</li>
                <li>Write the rule: "subtract ___ each time"</li>
            </ol>
            <p><strong>Let's Practice Finding Rules:</strong></p>
            <ul>
                <li>Pattern: 25, 22, 19, 16, 13 → subtract 3 each time</li>
                <li>Pattern: 100, 95, 90, 85 → subtract 5 each time</li>
                <li>Pattern: 50, 44, 38, 32 → subtract 6 each time</li>
            </ul>
            <p><strong>Challenge Patterns:</strong></p>
            <ul>
                <li>Sometimes the rule is not a simple subtraction - the number we subtract might change</li>
                <li>Example: 40, 35, 29, 22, 14 → subtract 5, then 6, then 7, then 8 (increasing subtraction)</li>
                <li>We'll focus on constant subtraction patterns in Grade 2</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Work</div>
                <p>Find the rule for: 63, 56, 49, 42, 35</p>
                <p>Step 1: 63 - 56 = 7</p>
                <p>Step 2: 56 - 49 = 7</p>
                <p>Step 3: 49 - 42 = 7</p>
                <p>Rule: subtract 7 each time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Missing Rule Practice</div>
                <p>Find the rule for: 90, 82, 74, 66, ?</p>
                <p>90 - 82 = 8, 82 - 74 = 8, 74 - 66 = 8</p>
                <p>Rule: subtract 8. Next number: 66 - 8 = 58</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Pattern Rule Game</div>
                <p>If the rule is "subtract 9", what numbers come after 100?</p>
                <p>100, 91, 82, 73, 64, 55, 46...</p>
            </div>
        `,
        taskInstructions: "Determine the rule for each number pattern and use it to find missing numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each pattern, write the rule and the next number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 80, 74, 68, 62, ___ → Rule: __________ → Next: ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) 45, 38, 31, 24, ___ → Rule: __________ → Next: ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) 100, 92, 84, 76, ___ → Rule: __________ → Next: ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">d) 55, 50, 45, 40, ___ → Rule: __________ → Next: ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing numbers using the rule:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Rule</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Pattern</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Missing Number</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Subtract 4</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">72, 68, 64, ___, 56</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Subtract 9</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">81, 72, ___, 54, 45</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Subtract 6</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">95, 89, 83, ___, 71</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Pattern Detective Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Some patterns have missing numbers in the middle. Find them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 120, ___, 104, 96, 88 → Rule: subtract 8 → Missing: ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) 60, 54, 48, ___, 36 → Rule: subtract 6 → Missing: ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) 43, 37, ___, 25, 19 → Rule: subtract 6 → Missing: ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a pattern with 6 numbers and write the rule. Ask a family member to find the rule and the next number.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Subtraction & Money",
        subtopic: "Practical Activities Involving Money up to K999",
        lessonContent: `
            <p>Today we'll use our subtraction skills with real money! We'll learn how to make change and solve shopping problems.</p>
            <p><strong>Key Question:</strong> How do we use subtraction when we buy things and get change?</p>
            <p><strong>Introduction:</strong> Money is a great way to practice subtraction. When we buy something, we subtract the cost from what we pay to find our change!</p>
            <p><strong>Remember the Currency:</strong></p>
            <ul>
                <li>K = Kwacha (our currency)</li>
                <li>K1, K2, K5, K10, K20, K50, K100 notes</li>
                <li>Coins: 1 ngwee, 5 ngwee, 10 ngwee, 50 ngwee</li>
                <li>100 ngwee = K1</li>
            </ul>
            <p><strong>How to Calculate Change:</strong></p>
            <ol>
                <li>Start with the amount you give to the cashier</li>
                <li>Subtract the price of the item</li>
                <li>The answer is your change!</li>
            </ol>
            <p><strong>Example:</strong> You buy a book for K45 and pay with K100. Change = K100 - K45 = K55</p>
            <p><strong>Real-Life Scenarios:</strong></p>
            <ul>
                <li>Finding if you have enough money: Is K50 - K32 = K18 (yes, you have enough and K18 left)</li>
                <li>Comparing prices: Which costs less? Subtract to find the difference</li>
                <li>Saving money: If you want something for K150 and have K95, how much more do you need? K150 - K95 = K55</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Trip</div>
                <p>You buy a toy car for K67. You pay with K100.</p>
                <p>Change = K100 - K67 = K33</p>
                <p>The cashier gives you back K33!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Saving Money</div>
                <p>A bicycle costs K450. You have K325 saved.</p>
                <p>More money needed = K450 - K325 = K125</p>
                <p>You need to save K125 more!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Making Change</div>
                <p>A snack costs K18. You pay with K50.</p>
                <p>Change = K50 - K18 = K32</p>
                <p>You could get: one K20 + one K10 + two K1 coins = K32</p>
            </div>
        `,
        taskInstructions: "Solve real-world money problems using subtraction up to K999.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Change</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the change you would receive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Item costs K34, you pay K50 → Change = K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) Item costs K78, you pay K100 → Change = K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) Item costs K125, you pay K200 → Change = K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">d) Item costs K299, you pay K500 → Change = K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">e) Item costs K450, you pay K500 → Change = K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Do You Have Enough Money?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write YES or NO. If YES, how much money will be left?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) You have K85. A bag costs K72. → Enough? ___ Leftover: K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) You have K150. A shirt costs K175. → Enough? ___ Leftover: K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) You have K360. Shoes cost K245. → Enough? ___ Leftover: K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">d) You have K500. A radio costs K499. → Enough? ___ Leftover: K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shopping Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these real shopping problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Mary buys a dress for K245 and a hat for K89. How much does she spend in total? K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• John has K500. He buys groceries for K278. How much money does he have left? K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• A bicycle costs K675. Peter has K450. How much more does he need? K___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Make the Change</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Show two different ways to give change:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Change = K46</div>
                        <div>Way 1: ___</div>
                        <div>Way 2: ___</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "With a family member, practice shopping at home. Use play money or real coins to buy items and calculate change. Write about your experience.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Quiz: Subtraction",
        lessonContent: `
            <p>Today we will review everything we learned about subtraction this week and take our weekly quiz!</p>
            <p><strong>Key Question:</strong> What have we learned about subtraction this week?</p>
            <p><strong>Week 5 Review:</strong></p>
            <ol>
                <li><strong>Monday:</strong> Subtraction strategies (number trees, magic squares, number games)</li>
                <li><strong>Tuesday:</strong> Identifying number patterns involving subtraction</li>
                <li><strong>Wednesday:</strong> Determining the rule in number patterns</li>
                <li><strong>Thursday:</strong> Practical money activities up to K999</li>
            </ol>
            <p><strong>Remember These Important Facts:</strong></p>
            <ul>
                <li>Subtraction is taking away one number from another</li>
                <li>Number patterns follow rules (like subtract 3, subtract 5, etc.)</li>
                <li>We find change by subtracting price from money paid</li>
                <li>Different strategies help us solve subtraction problems faster</li>
            </ul>
            <p><strong>Quiz Instructions:</strong></p>
            <ul>
                <li>Read each question carefully</li>
                <li>Show your work when needed</li>
                <li>Check your answers before submitting</li>
                <li>Try your best - you've learned a lot this week!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Quiz Tips</div>
                <p>• Take your time reading each question</p>
                <p>• Use the strategies you learned (number trees, number lines, think addition)</p>
                <p>• For money problems, remember to write "K" before the number</p>
                <p>• Double-check your subtraction by adding your answer to the smaller number</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Check Your Work</div>
                <p>Example: 45 - 18 = 27</p>
                <p>Check: 27 + 18 = 45 ✓ Correct!</p>
                <p>Always check subtraction by adding!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> You've Got This!</div>
                <p>This week you learned:</p>
                <p>✓ 3 different subtraction strategies</p>
                <p>✓ How to find number pattern rules</p>
                <p>✓ How to calculate change with money</p>
                <p>Show what you know on the quiz!</p>
            </div>
        `,
        taskInstructions: "Complete the weekly quiz to show your understanding of subtraction.",
        taskContent: `
            <div class="content-box">
                <p><strong>Quiz: Subtraction</strong></p>
                <p><em>Total points: 25 | Time: 30 minutes</em></p>
                
                <div class="task-item">
                    <span class="task-number">Section A: Basic Subtraction (5 points)</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. 25 - 8 = ___</div>
                        <div>2. 47 - 12 = ___</div>
                        <div>3. 63 - 19 = ___</div>
                        <div>4. 84 - 37 = ___</div>
                        <div>5. 91 - 45 = ___</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">Section B: Number Patterns (6 points)</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>6. Complete the pattern: 50, 45, 40, ___, 30 → ___</div>
                        <div>7. Complete the pattern: 100, 92, 84, ___, 68 → ___</div>
                        <div>8. Find the rule: 36, 31, 26, 21 → Rule: subtract ___</div>
                        <div>9. Find the rule: 77, 70, 63, 56 → Rule: subtract ___</div>
                        <div>10. What comes next? 55, 48, 41, 34, ___ → ___</div>
                        <div>11. What comes next? 120, 111, 102, 93, ___ → ___</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">Section C: Money Problems (8 points)</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>12. A pencil costs K15. You pay K50. Change = K___</div>
                        <div>13. A book costs K78. You pay K100. Change = K___</div>
                        <div>14. A bag costs K234. You pay K300. Change = K___</div>
                        <div>15. You have K400. A radio costs K375. Money left = K___</div>
                        <div>16. A bicycle costs K525. You have K300. Need = K___ more</div>
                        <div>17. Shoes cost K189. A shirt costs K134. Total cost = K___</div>
                        <div>18. You pay K500 for items that cost K276. Change = K___</div>
                        <div>19. A toy costs K89. You pay with K100. Change = K___</div>
                    </div>
                    <div class="answer-space" style="height: 160px; margin-top: 10px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">Section D: Word Problems (6 points)</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>20. Sarah has 45 stickers. She gives 18 to her brother. How many does she have left? ___</div>
                        <div>21. There are 78 apples in a basket. 23 are eaten. How many are left? ___</div>
                        <div>22. A farmer has 156 eggs. He sells 89 at the market. How many eggs remain? ___</div>
                        <div>23. Tom read 92 pages of his 150-page book. How many pages does he have left to read? ___</div>
                        <div>24. A school has 245 students. 67 are away sick. How many students are at school? ___</div>
                        <div>25. A baker made 180 cookies. He sold 124. How many cookies are left? ___</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
                
                <div class="task-item" style="margin-top: 20px;">
                    <span class="task-number">Bonus (2 points extra credit)</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Create a subtraction number pattern with 5 numbers. Write the rule:</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Review your quiz answers with a family member. Practice 10 more subtraction problems of your choice. Bring any questions to next week's class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathsScienceWeek5);
    console.log("grade2-maths-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathsScienceWeek5);
    console.log("grade2-maths-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathsScienceWeek5',
        metadata: grade2MathsScienceWeek5.metadata,
        days: grade2MathsScienceWeek5
    });
    console.log("grade2-maths-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathsScienceWeek5 = grade2MathsScienceWeek5;
console.log("grade2-maths-science-week5.js loaded and registered successfully");