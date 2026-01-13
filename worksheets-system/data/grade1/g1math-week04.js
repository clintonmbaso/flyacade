// Grade 1 Math - Week 4 Data
const grade1MathWeek4 = {
    metadata: {
        grade: 1,
        subject: "Mathematics",
        week: 4,
        title: "Addition and Subtraction Practice",
        description: "Adding and subtracting numbers 1-10 with mixed practice"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Addition and Subtraction Basics",
        subtopic: "Understanding Both Operations",
        lessonContent: `
            <p>Welcome to Week 4! This week we'll practice both addition AND subtraction. These are the two most important math operations!</p>
            <p><strong>Key Concepts:</strong></p>
            <p><strong>Addition (+):</strong> Putting numbers together to make a bigger number.</p>
            <p><strong>Subtraction (-):</strong> Taking away some from a number to make a smaller number.</p>
            <p>When we write subtraction problems, we use the <strong>- sign</strong> (minus) and <strong>= sign</strong> (equals).</p>
            <p><strong>Remember:</strong> You can use your fingers, objects, or drawings for both addition and subtraction!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Addition</div>
                <p><strong>4 + 3 = 7</strong></p>
                <p>Start with 4, add 3 more, and we get 7. 🍎🍎🍎🍎 + 🍎🍎🍎 = 🍎🍎🍎🍎🍎🍎🍎</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Subtraction</div>
                <p><strong>6 - 2 = 4</strong></p>
                <p>Start with 6, take away 2, and we get 4. 🍪🍪🍪🍪🍪🍪 → take away 2 → 🍪🍪🍪🍪</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Relationship</div>
                <p>Addition and subtraction are related! If 3 + 4 = 7, then 7 - 4 = 3.</p>
                <p>They are like opposites!</p>
            </div>
        `,
        taskInstructions: "Solve these addition and subtraction problems. Circle whether it's addition or subtraction!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 5 + 2 = <span class="answer-space"></span> (Addition/Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 8 - 3 = <span class="answer-space"></span> (Addition/Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 4 + 4 = <span class="answer-space"></span> (Addition/Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 9 - 5 = <span class="answer-space"></span> (Addition/Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw 7 circles, then cross out 3. How many left? <span class="answer-space"></span>
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Write your own addition problem:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Write your own subtraction problem:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Monday Homework: Addition/Subtraction Test</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Part A: Addition (10 points)</strong></p>
                    <p>1. 3 + 2 = <span class="answer-space"></span></p>
                    <p>2. 5 + 4 = <span class="answer-space"></span></p>
                    <p>3. 1 + 7 = <span class="answer-space"></span></p>
                    <p>4. 6 + 3 = <span class="answer-space"></span></p>
                    <p>5. 2 + 8 = <span class="answer-space"></span></p>
                    
                    <p><strong>Part B: Subtraction (10 points)</strong></p>
                    <p>6. 9 - 2 = <span class="answer-space"></span></p>
                    <p>7. 7 - 4 = <span class="answer-space"></span></p>
                    <p>8. 10 - 5 = <span class="answer-space"></span></p>
                    <p>9. 8 - 1 = <span class="answer-space"></span></p>
                    <p>10. 6 - 3 = <span class="answer-space"></span></p>
                    
                    <p><strong>Part C: Word Problem (5 points)</strong></p>
                    <p>11. Maria has 5 apples. She eats 2 apples. How many apples are left?</p>
                    <p>Answer: <span class="answer-space"></span></p>
                </div>
                <p><strong>Total: 25 points</strong></p>
            </div>
        `,
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Mixed Practice",
        subtopic: "When to Add vs. Subtract",
        lessonContent: `
            <p>Today we'll learn how to decide when to use addition and when to use subtraction. This is an important thinking skill!</p>
            <p><strong>Clue Words:</strong></p>
            <div class="content-box">
                <p><strong>Addition Clues:</strong> These words usually mean ADD:</p>
                <ul>
                    <li>Total</li>
                    <li>Sum</li>
                    <li>Altogether</li>
                    <li>In all</li>
                    <li>Combine</li>
                    <li>Both</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Subtraction Clues:</strong> These words usually mean SUBTRACT:</p>
                <ul>
                    <li>Left</li>
                    <li>Remaining</li>
                    <li>Difference</li>
                    <li>Take away</li>
                    <li>Less than</li>
                    <li>How many more</li>
                </ul>
            </div>
            <p><strong>Strategy:</strong> Read the problem carefully, look for clue words, then decide which operation to use!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Addition Word Problem</div>
                <p><strong>Problem:</strong> There are 3 red balls and 4 blue balls. How many balls are there <strong>altogether</strong>?</p>
                <p><strong>Clue Word:</strong> "Altogether" means we ADD</p>
                <p><strong>Solution:</strong> 3 + 4 = 7 balls</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Subtraction Word Problem</div>
                <p><strong>Problem:</strong> You have 8 cookies. You eat 3 cookies. How many cookies are <strong>left</strong>?</p>
                <p><strong>Clue Word:</strong> "Left" means we SUBTRACT</p>
                <p><strong>Solution:</strong> 8 - 3 = 5 cookies</p>
            </div>
        `,
        taskInstructions: "Read each problem carefully. Decide if you need to add or subtract, then solve!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Tom has 5 pencils. He finds 2 more. How many pencils does he have <strong>in all</strong>? 
                <span class="answer-space"></span> (Circle: Addition or Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">2</span> There are 9 birds on a tree. 3 birds fly away. How many birds are <strong>left</strong>? 
                <span class="answer-space"></span> (Circle: Addition or Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Sara has 4 dolls. Her sister has 3 dolls. How many dolls do they have <strong>altogether</strong>? 
                <span class="answer-space"></span> (Circle: Addition or Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">4</span> You have 10 candies. You give 6 to your friend. How many candies do you have <strong>remaining</strong>? 
                <span class="answer-space"></span> (Circle: Addition or Subtraction)
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create a word problem that uses addition:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Create a word problem that uses subtraction:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Tuesday Homework: Operation Decision Test</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Part A: Identify the Operation (10 points)</strong></p>
                    <p>For each problem, circle ADD or SUBTRACT:</p>
                    <p>1. How many are left? <span class="answer-space"></span> (ADD / SUBTRACT)</p>
                    <p>2. What is the total? <span class="answer-space"></span> (ADD / SUBTRACT)</p>
                    <p>3. Find the difference? <span class="answer-space"></span> (ADD / SUBTRACT)</p>
                    <p>4. What is the sum? <span class="answer-space"></span> (ADD / SUBTRACT)</p>
                    <p>5. How many remain? <span class="answer-space"></span> (ADD / SUBTRACT)</p>
                    
                    <p><strong>Part B: Solve the Problems (15 points)</strong></p>
                    <p>6. There are 7 cats. 2 cats run away. How many cats are left? <span class="answer-space"></span></p>
                    <p>7. John has 3 marbles. He gets 5 more. How many marbles does he have now? <span class="answer-space"></span></p>
                    <p>8. You have 8 stickers. You use 4 stickers. How many stickers remain? <span class="answer-space"></span></p>
                    <p>9. There are 6 red flowers and 3 yellow flowers. How many flowers altogether? <span class="answer-space"></span></p>
                    <p>10. I have 10 apples. I eat 7 apples. How many apples are left? <span class="answer-space"></span></p>
                </div>
                <p><strong>Total: 25 points</strong></p>
            </div>
        `,
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Fact Families",
        subtopic: "Related Addition and Subtraction Facts",
        lessonContent: `
            <p>Today we'll learn about fact families! A fact family shows how addition and subtraction are related.</p>
            <p><strong>Key Concept:</strong> A fact family is a group of math facts using the same numbers.</p>
            <p>For the numbers 2, 3, and 5, we can make:</p>
            <div class="content-box">
                <p><strong>Addition Facts:</strong> 2 + 3 = 5 and 3 + 2 = 5</p>
                <p><strong>Subtraction Facts:</strong> 5 - 2 = 3 and 5 - 3 = 2</p>
            </div>
            <p><strong>Rule:</strong> If you know one fact, you know all four facts in the family!</p>
            <p><strong>Memory Tip:</strong> The biggest number is always the sum in addition or the starting number in subtraction!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Numbers 4, 5, 9</div>
                <p><strong>Fact Family:</strong></p>
                <p>4 + 5 = 9</p>
                <p>5 + 4 = 9</p>
                <p>9 - 4 = 5</p>
                <p>9 - 5 = 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Numbers 3, 6, 9</div>
                <p><strong>Fact Family:</strong></p>
                <p>3 + 6 = 9</p>
                <p>6 + 3 = 9</p>
                <p>9 - 3 = 6</p>
                <p>9 - 6 = 3</p>
                <p>Notice: 9 is always the biggest number!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Checking</div>
                <p>If 7 + 2 = 9, then 9 - 2 must equal 7. Check it!</p>
                <p>This helps you check your work!</p>
            </div>
        `,
        taskInstructions: "Complete the fact families. Remember: All facts in a family use the same three numbers!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Fact Family for 2, 4, 6:
                <div style="margin-left: 20px; margin-top: 5px;">
                    <p>2 + 4 = <span class="answer-space"></span></p>
                    <p>4 + 2 = <span class="answer-space"></span></p>
                    <p>6 - 2 = <span class="answer-space"></span></p>
                    <p>6 - 4 = <span class="answer-space"></span></p>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Fact Family for 5, 3, 8:
                <div style="margin-left: 20px; margin-top: 5px;">
                    <p>5 + 3 = <span class="answer-space"></span></p>
                    <p>3 + 5 = <span class="answer-space"></span></p>
                    <p>8 - 5 = <span class="answer-space"></span></p>
                    <p>8 - 3 = <span class="answer-space"></span></p>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Complete this fact family: 7, 2, 9
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> What three numbers make this fact family?
                <p>4 + 5 = 9, 5 + 4 = 9, 9 - 4 = 5, 9 - 5 = 4</p>
                <p>Numbers: <span class="answer-space"></span>, <span class="answer-space"></span>, <span class="answer-space"></span></p>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create your own fact family using numbers 1-10:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Fact Family Test</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Part A: Complete Fact Families (20 points)</strong></p>
                    <p><strong>Family 1:</strong> Numbers: 3, 4, 7</p>
                    <p>3 + 4 = <span class="answer-space"></span></p>
                    <p>4 + 3 = <span class="answer-space"></span></p>
                    <p>7 - 3 = <span class="answer-space"></span></p>
                    <p>7 - 4 = <span class="answer-space"></span></p>
                    
                    <p><strong>Family 2:</strong> Numbers: 2, 6, 8</p>
                    <p>2 + 6 = <span class="answer-space"></span></p>
                    <p>6 + 2 = <span class="answer-space"></span></p>
                    <p>8 - 2 = <span class="answer-space"></span></p>
                    <p>8 - 6 = <span class="answer-space"></span></p>
                    
                    <p><strong>Part B: Find the Missing Number (10 points)</strong></p>
                    <p>5. If 4 + 5 = 9, then 9 - 5 = <span class="answer-space"></span></p>
                    <p>6. If 6 + 2 = 8, then 8 - 2 = <span class="answer-space"></span></p>
                    <p>7. If 7 - 3 = 4, then 3 + 4 = <span class="answer-space"></span></p>
                    <p>8. If 10 - 6 = 4, then 6 + 4 = <span class="answer-space"></span></p>
                    
                    <p><strong>Part C: Create a Fact Family (10 points)</strong></p>
                    <p>9. Choose three numbers between 1-10 and create a fact family:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                <p><strong>Total: 40 points</strong></p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Mixed Operations Challenge",
        subtopic: "Speed and Accuracy Practice",
        lessonContent: `
            <p>Today is challenge day! We'll practice addition and subtraction to become faster and more accurate.</p>
            <p><strong>Tips for Speed:</strong></p>
            <div class="content-box">
                <p><strong>1. Use Known Facts:</strong> Memorize easy facts like 5+5=10, 10-5=5</p>
                <p><strong>2. Count On/Back:</strong> For addition, count up. For subtraction, count down.</p>
                <p><strong>3. Use Doubles:</strong> 3+3=6, 4+4=8 (these are easy to remember!)</p>
                <p><strong>4. Check with Fact Families:</strong> If you know 7+2=9, then 9-2 must be 7.</p>
            </div>
            <p><strong>Remember:</strong> Accuracy is more important than speed! Get it right first, then get faster.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Speed Practice</div>
                <p>Try to solve these quickly:</p>
                <p>3 + 3 = 6 (double - easy!)</p>
                <p>10 - 5 = 5 (half of 10 - easy!)</p>
                <p>4 + 1 = 5 (just one more!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Mixed Practice</div>
                <p>When you see mixed problems, read the sign carefully:</p>
                <p>5 + 2 = 7 (addition - put together)</p>
                <p>8 - 3 = 5 (subtraction - take away)</p>
                <p>Don't rush and look at the sign!</p>
            </div>
        `,
        taskInstructions: "Complete these mixed problems as quickly as you can, but be accurate! Time yourself if you want.",
        taskContent: `
            <div class="content-box">
                <p><strong>Set 1: Quick Facts (1 minute challenge!)</strong></p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                    <div class="task-item">1. 2 + 3 = <span class="answer-space"></span></div>
                    <div class="task-item">2. 7 - 2 = <span class="answer-space"></span></div>
                    <div class="task-item">3. 4 + 4 = <span class="answer-space"></span></div>
                    <div class="task-item">4. 9 - 5 = <span class="answer-space"></span></div>
                    <div class="task-item">5. 1 + 8 = <span class="answer-space"></span></div>
                    <div class="task-item">6. 6 - 3 = <span class="answer-space"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Set 2: Word Problems (Take your time!)</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> You have 5 cookies. Your friend gives you 3 more. How many cookies do you have? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> There are 8 birds. 4 birds fly away. How many birds are left? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Set 3: Fact Family Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Complete this fact family: Numbers 4, 6, 10
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <p>4 + 6 = <span class="answer-space"></span></p>
                        <p>6 + 4 = <span class="answer-space"></span></p>
                        <p>10 - 4 = <span class="answer-space"></span></p>
                        <p>10 - 6 = <span class="answer-space"></span></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Set 4: Challenge!</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> Find all the ways to make 10:
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Final Week 4 Review Test</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Part A: Mixed Operations (30 points)</strong></p>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                        <p>1. 3 + 4 = <span class="answer-space"></span></p>
                        <p>2. 9 - 2 = <span class="answer-space"></span></p>
                        <p>3. 5 + 2 = <span class="answer-space"></span></p>
                        <p>4. 8 - 5 = <span class="answer-space"></span></p>
                        <p>5. 6 + 3 = <span class="answer-space"></span></p>
                        <p>6. 7 - 4 = <span class="answer-space"></span></p>
                        <p>7. 2 + 7 = <span class="answer-space"></span></p>
                        <p>8. 10 - 6 = <span class="answer-space"></span></p>
                        <p>9. 4 + 5 = <span class="answer-space"></span></p>
                        <p>10. 9 - 3 = <span class="answer-space"></span></p>
                    </div>
                    
                    <p><strong>Part B: Word Problems (20 points)</strong></p>
                    <p>11. Tom has 4 red balls and 3 blue balls. How many balls does he have in all? <span class="answer-space"></span></p>
                    <p>12. There are 9 flowers. 5 are picked. How many flowers are left? <span class="answer-space"></span></p>
                    <p>13. You have 7 cookies. You eat 2 cookies. How many cookies remain? <span class="answer-space"></span></p>
                    <p>14. Sara finds 3 shells. Then she finds 4 more shells. How many shells total? <span class="answer-space"></span></p>
                    
                    <p><strong>Part C: Fact Families (20 points)</strong></p>
                    <p>15. Complete this fact family for 2, 5, 7:</p>
                    <p>2 + 5 = <span class="answer-space"></span></p>
                    <p>5 + 2 = <span class="answer-space"></span></p>
                    <p>7 - 2 = <span class="answer-space"></span></p>
                    <p>7 - 5 = <span class="answer-space"></span></p>
                    
                    <p>16. If 6 + 3 = 9, then 9 - 3 = <span class="answer-space"></span></p>
                    <p>17. If 8 - 2 = 6, then 2 + 6 = <span class="answer-space"></span></p>
                </div>
                <p><strong>Total: 70 points</strong></p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Celebration",
        subtopic: "Addition and Subtraction Mastery",
        revisionContent: `
            <div class="celebration-banner">
                <h3>🎉 CONGRATULATIONS! 🎉</h3>
                <p>You've mastered Addition and Subtraction for numbers 1-10! You're a math superstar!</p>
            </div>
            
            <div class="content-box">
                <p><strong>This Week's Achievements:</strong></p>
                <ul>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Mastered both addition and subtraction</strong> for numbers 1-10</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Learned to identify operation words</strong> in word problems</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Discovered fact families</strong> and how they connect addition and subtraction</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Improved speed and accuracy</strong> with mixed practice</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Can solve word problems</strong> using the correct operation</li>
                </ul>
            </div>
            
            <div class="content-box">
                <p><strong>Key Concepts to Remember:</strong></p>
                <p>➕ <strong>Addition:</strong> Putting numbers together to find the total</p>
                <p>➖ <strong>Subtraction:</strong> Taking away to find what's left</p>
                <p>👨‍👩‍👧 <strong>Fact Families:</strong> Groups of related addition and subtraction facts</p>
                <p>🔍 <strong>Clue Words:</strong> Help you decide which operation to use</p>
                <p>✅ <strong>Checking Work:</strong> Use fact families to check your answers</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Final Celebration Challenge!</strong></p>
                
                <div class="task-item celebration-task">
                    <span class="task-number">🏆</span> <strong>Operation Match:</strong> Match the clue word to the operation:
                    <div style="margin-top: 10px;">
                        <p>"Altogether" = <span class="answer-space" style="width: 100px;"></span> (Addition/Subtraction)</p>
                        <p>"Left" = <span class="answer-space" style="width: 100px;"></span> (Addition/Subtraction)</p>
                        <p>"Total" = <span class="answer-space" style="width: 100px;"></span> (Addition/Subtraction)</p>
                        <p>"Remaining" = <span class="answer-space" style="width: 100px;"></span> (Addition/Subtraction)</p>
                    </div>
                </div>
                
                <div class="task-item celebration-task">
                    <span class="task-number">🎯</span> <strong>Quick Recall:</strong> Solve these in 30 seconds:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                        <p>5 + 3 = <span class="answer-space"></span></p>
                        <p>9 - 4 = <span class="answer-space"></span></p>
                        <p>2 + 7 = <span class="answer-space"></span></p>
                        <p>8 - 3 = <span class="answer-space"></span></p>
                    </div>
                </div>
                
                <div class="task-item celebration-task">
                    <span class="task-number">🧩</span> <strong>Fact Family Puzzle:</strong> Create a fact family using 3, 4, and 7:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                
                <div class="task-item celebration-task">
                    <span class="task-number">📝</span> <strong>Word Problem Creation:</strong> Write one addition AND one subtraction word problem:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                
                <div class="celebration-sticker">
                    <p>⭐ MATH MASTER ⭐</p>
                    <p>Officially certified in Addition & Subtraction 1-10!</p>
                    <p>Date: _______________</p>
                    <p>Score: _______________ / 100</p>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Weekend Fun: Math Game Challenge</strong></p>
                
                <p><strong>Game 1: Fact Family Race</strong></p>
                <p>Challenge a family member to a fact family race! Pick three numbers (like 3, 4, 7) and see who can write all four facts fastest!</p>
                
                <p><strong>Game 2: Operation Detective</strong></p>
                <p>Find 5 items around the house and create word problems for them. Mix addition and subtraction!</p>
                
                <p><strong>Game 3: Speed Math</strong></p>
                <p>Time yourself solving these:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Time: ______ seconds</p>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px;">
                        <p>4 + 5 = <span class="answer-space"></span></p>
                        <p>9 - 2 = <span class="answer-space"></span></p>
                        <p>3 + 6 = <span class="answer-space"></span></p>
                        <p>8 - 4 = <span class="answer-space"></span></p>
                        <p>7 + 2 = <span class="answer-space"></span></p>
                        <p>10 - 5 = <span class="answer-space"></span></p>
                    </div>
                </div>
                
                <p><strong>Create Your Own Math Game!</strong></p>
                <p>Design a math game using addition and subtraction. Draw it below:</p>
                <div class="drawing-area" style="height: 100px;"></div>
                
                <p><em>Share your games with the class on Monday!</em></p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathWeek4);
    console.log("math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathWeek4);
    console.log("math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathWeek4',
        metadata: grade1MathWeek4.metadata,
        days: grade1MathWeek4
    });
    console.log("math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathWeek4 = grade1MathWeek4;
console.log("math-week4.js loaded and registered successfully");