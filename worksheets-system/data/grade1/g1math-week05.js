// Grade 1 Math - Week 5 Data
const grade1MathWeek5 = {
    metadata: {
        grade: 1,
        subject: "Mathematics",
        week: 5,
        title: "Addition & Subtraction Review",
        description: "Comprehensive review of addition and subtraction with numbers 1-10"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Addition Review",
        subtopic: "Addition Facts 1-10",
        lessonContent: `
            <p>Welcome to Week 5! This week we're reviewing everything we've learned about addition and subtraction. Today we'll focus on <strong>addition facts from 1-10</strong>.</p>
            <p><strong>Key Concept:</strong> Addition means putting together or combining. When we add, we find the total of two or more numbers.</p>
            <p><strong>Addition Strategies:</strong></p>
            <ul>
                <li>Use your fingers to count</li>
                <li>Draw pictures or dots</li>
                <li>Count on from the larger number</li>
                <li>Remember number pairs that make 10</li>
            </ul>
            <p><strong>Remember:</strong> The order doesn't matter in addition! 3 + 2 = 2 + 3</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 4 + 3 = 7</div>
                <p>Strategy: Start with 4, count up 3: 5, 6, 7!</p>
                <p>Or: Draw 4 dots + 3 dots = 7 dots total</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Pairs to 10</div>
                <p>Memorize these important pairs:</p>
                <p>1+9, 2+8, 3+7, 4+6, 5+5</p>
                <p>All these equal 10!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Using Objects</div>
                <p>For 6 + 2:</p>
                <p>Count 6 blocks, add 2 more blocks, count all: 1, 2, 3, 4, 5, 6, 7, 8!</p>
                <p>Answer: 8</p>
            </div>
        `,
        taskInstructions: "Solve these addition problems. Try using different strategies for each one!",
        taskContent: `
            <div class="content-box">
                <p><strong>Basic Addition:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 2 + 5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 7 + 3 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 4 + 6 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 8 + 2 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 1 + 9 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Draw and Solve:</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw 3 stars + 4 stars:
                    <div class="drawing-area" style="height: 60px;"></div>
                    Total: <span class="answer-space"></span> stars
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Number Pairs:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Fill in the missing number to make 10:
                    <div style="margin-top: 10px;">
                        <p>3 + ____ = 10</p>
                        <p>____ + 8 = 10</p>
                        <p>5 + ____ = 10</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Create two different addition problems that both equal 9:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Monday Homework: Addition Test Practice</strong></p>
                <p><strong>Part A: Basic Facts (15 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Solve each problem:</p>
                    <p>1. 5 + 4 = <span class="answer-space"></span></p>
                    <p>2. 3 + 7 = <span class="answer-space"></span></p>
                    <p>3. 6 + 1 = <span class="answer-space"></span></p>
                    <p>4. 2 + 8 = <span class="answer-space"></span></p>
                    <p>5. 4 + 5 = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part B: Number Pairs (10 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>What number makes 10?</p>
                    <p>6 + ____ = 10</p>
                    <p>____ + 9 = 10</p>
                    <p>7 + ____ = 10</p>
                </div>
                
                <p><strong>Part C: Word Problem (5 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Sarah has 4 apples. Her brother gives her 3 more apples. How many apples does Sarah have now?</p>
                    <p>Number sentence: _______________</p>
                    <p>Answer: _______________ apples</p>
                </div>
                
                <p><strong>Total: 30 points</strong></p>
            </div>
        `,
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Subtraction Review", 
        subtopic: "Subtraction Facts 1-10",
        lessonContent: `
            <p>Great job yesterday! Today we'll review <strong>subtraction facts from 1-10</strong>.</p>
            <p><strong>Key Concept:</strong> Subtraction means taking away or finding the difference. When we subtract, we find how many are left.</p>
            <p><strong>Subtraction Strategies:</strong></p>
            <ul>
                <li>Use your fingers to count back</li>
                <li>Draw pictures and cross out</li>
                <li>Think of the related addition fact</li>
                <li>Use a number line</li>
            </ul>
            <p><strong>Remember:</strong> Subtraction is NOT commutative. 7 - 3 is NOT the same as 3 - 7!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 8 - 3 = 5</div>
                <p>Strategy 1: Start with 8 fingers up, put down 3, count what's left: 5!</p>
                <p>Strategy 2: Draw 8 circles, cross out 3, count what remains</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Using a Number Line</div>
                <p>For 9 - 4:</p>
                <p>Start at 9, jump back 4 spaces: 8, 7, 6, 5!</p>
                <p>You land on 5, so 9 - 4 = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Related Facts</div>
                <p>If 3 + 4 = 7, then:</p>
                <p>7 - 3 = 4</p>
                <p>7 - 4 = 3</p>
                <p>Addition and subtraction are related!</p>
            </div>
        `,
        taskInstructions: "Solve these subtraction problems. Try different strategies to check your answers!",
        taskContent: `
            <div class="content-box">
                <p><strong>Basic Subtraction:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 7 - 2 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 9 - 4 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 10 - 3 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 8 - 5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 6 - 1 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Draw and Solve:</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw 9 circles. Cross out 4:
                    <div class="drawing-area" style="height: 60px;"></div>
                    Left: <span class="answer-space"></span> circles
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Related Facts:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Complete the fact family:
                    <div style="margin-top: 10px;">
                        <p>4 + 3 = 7</p>
                        <p>3 + 4 = 7</p>
                        <p>7 - 4 = <span class="answer-space"></span></p>
                        <p>7 - 3 = <span class="answer-space"></span></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Number Line Practice:</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Draw a number line from 0 to 10. Show 10 - 6:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Tuesday Homework: Subtraction Test Practice</strong></p>
                <p><strong>Part A: Basic Facts (15 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Solve each problem:</p>
                    <p>1. 8 - 3 = <span class="answer-space"></span></p>
                    <p>2. 10 - 5 = <span class="answer-space"></span></p>
                    <p>3. 9 - 2 = <span class="answer-space"></span></p>
                    <p>4. 7 - 4 = <span class="answer-space"></span></p>
                    <p>5. 6 - 6 = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part B: Draw and Subtract (10 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Draw 10 squares. Cross out 7 squares.</p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    <p>How many squares are left? <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part C: Word Problem (5 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Tom has 8 marbles. He gives 3 marbles to his friend. How many marbles does Tom have left?</p>
                    <p>Number sentence: _______________</p>
                    <p>Answer: _______________ marbles</p>
                </div>
                
                <p><strong>Part D: Fact Families (10 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Complete the fact family for 5, 2, 7:</p>
                    <p>5 + 2 = <span class="answer-space"></span></p>
                    <p>2 + 5 = <span class="answer-space"></span></p>
                    <p>7 - 5 = <span class="answer-space"></span></p>
                    <p>7 - 2 = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Total: 40 points</strong></p>
            </div>
        `,
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Mixed Operations", 
        subtopic: "Addition and Subtraction Together",
        lessonContent: `
            <p>Excellent work on addition and subtraction! Today we'll practice <strong>both operations together</strong>.</p>
            <p><strong>Key Concept:</strong> We need to read carefully to know whether to add or subtract. Look for clue words!</p>
            <p><strong>Addition Clue Words:</strong> total, sum, together, combine, both, all together, in all</p>
            <p><strong>Subtraction Clue Words:</strong> left, remain, difference, fewer, less, take away, gave away</p>
            <p><strong>Strategy:</strong> Read the problem twice. Underline the numbers and circle the clue words!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Identifying Operations</div>
                <p><strong>"Maria has 5 apples and buys 3 more. How many does she have?"</strong></p>
                <p>Clue words: "and", "more" → This means ADD</p>
                <p>Solution: 5 + 3 = 8 apples</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Subtraction Problem</div>
                <p><strong>"There were 9 birds. 4 birds flew away. How many are left?"</strong></p>
                <p>Clue words: "flew away", "left" → This means SUBTRACT</p>
                <p>Solution: 9 - 4 = 5 birds</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Mixed Practice</div>
                <p>Solve: 6 + 2 = <span class="number-display">8</span></p>
                <p>Then: 8 - 3 = <span class="number-display">5</span></p>
                <p>We can do both operations in order!</p>
            </div>
        `,
        taskInstructions: "Solve these mixed problems. Read carefully to decide if you should add or subtract!",
        taskContent: `
            <div class="content-box">
                <p><strong>Operation Identification:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle ADD or SUBTRACT for each:
                    <div style="margin-top: 10px;">
                        <p>"Find 3 more than 4" → ADD / SUBTRACT</p>
                        <p>"Take away 2 from 7" → ADD / SUBTRACT</p>
                        <p>"How many in total?" → ADD / SUBTRACT</p>
                        <p>"How many are left?" → ADD / SUBTRACT</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Mixed Calculation:</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> 4 + 3 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 9 - 2 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 2 + 6 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 10 - 7 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 5 + 5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 8 - 8 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Two-Step Problem:</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> First: 3 + 4 = <span class="answer-space"></span>
                    <br>Then take away 2: _____ - 2 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> I have 5 pencils. I get 2 more. Then I give 3 away. How many do I have now?
                    <div class="drawing-area" style="height: 80px;"></div>
                    Answer: <span class="answer-space"></span> pencils
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Mixed Operations Test Practice</strong></p>
                <p><strong>Part A: Identify the Operation (10 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Write ADD or SUBTRACT for each:</p>
                    <p>1. "Combine 4 and 3" = <span class="answer-space"></span></p>
                    <p>2. "Take 2 from 9" = <span class="answer-space"></span></p>
                    <p>3. "Find the total" = <span class="answer-space"></span></p>
                    <p>4. "How many remain?" = <span class="answer-space"></span></p>
                    <p>5. "Both together" = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part B: Mixed Calculations (20 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Solve:</p>
                    <p>1. 7 + 2 = <span class="answer-space"></span></p>
                    <p>2. 9 - 3 = <span class="answer-space"></span></p>
                    <p>3. 4 + 5 = <span class="answer-space"></span></p>
                    <p>4. 10 - 4 = <span class="answer-space"></span></p>
                    <p>5. 6 + 1 = <span class="answer-space"></span></p>
                    <p>6. 8 - 5 = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part C: Word Problems (20 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. There are 6 birds on a tree. 3 more birds join them. How many birds are there now?</p>
                    <p>Number sentence: _______________</p>
                    <p>Answer: <span class="answer-space"></span> birds</p>
                    
                    <p>2. Lisa has 8 stickers. She gives 4 stickers to her friend. How many stickers does Lisa have left?</p>
                    <p>Number sentence: _______________</p>
                    <p>Answer: <span class="answer-space"></span> stickers</p>
                </div>
                
                <p><strong>Total: 50 points</strong></p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Comprehensive Review", 
        subtopic: "Final Practice & Test Preparation",
        lessonContent: `
            <p>Today is our final review day! We'll practice everything we've learned about addition and subtraction with numbers 1-10.</p>
            <p><strong>Test-Taking Tips:</strong></p>
            <ol>
                <li><strong>Read carefully:</strong> Read each problem twice before solving</li>
                <li><strong>Show your work:</strong> Draw pictures or use your fingers</li>
                <li><strong>Check your answers:</strong> Use a different method to verify</li>
                <li><strong>Manage your time:</strong> Do easy problems first, then harder ones</li>
                <li><strong>Stay calm:</strong> Take deep breaths if you feel stuck</li>
            </ol>
            <p><strong>Remember:</strong> You've practiced all week! You're ready!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Complete Review Problem</div>
                <p><strong>Problem:</strong> Mark has 4 red blocks and 3 blue blocks. He gives 2 blocks to his sister. How many blocks does he have left?</p>
                <p><strong>Step 1:</strong> Find total blocks: 4 + 3 = 7 blocks</p>
                <p><strong>Step 2:</strong> Subtract given away: 7 - 2 = 5 blocks</p>
                <p><strong>Answer:</strong> Mark has 5 blocks left.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Fact Family</div>
                <p>For numbers 6, 3, 9:</p>
                <p>6 + 3 = 9</p>
                <p>3 + 6 = 9</p>
                <p>9 - 6 = 3</p>
                <p>9 - 3 = 6</p>
                <p>All four facts are related!</p>
            </div>
        `,
        taskInstructions: "Complete this comprehensive review. Treat it like a practice test!",
        taskContent: `
            <div class="content-box">
                <p><strong>Section 1: Basic Facts (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 5 + 4 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 8 - 3 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 2 + 7 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 10 - 6 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 3 + 6 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 2: Number Pairs to 10 (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Complete:
                    <div style="margin-top: 10px;">
                        <p>____ + 7 = 10</p>
                        <p>4 + ____ = 10</p>
                        <p>9 + ____ = 10</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 3: Fact Families (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Complete the fact family for 4, 5, 9:
                    <div style="margin-top: 10px;">
                        <p>4 + 5 = <span class="answer-space"></span></p>
                        <p>5 + 4 = <span class="answer-space"></span></p>
                        <p>9 - 4 = <span class="answer-space"></span></p>
                        <p>9 - 5 = <span class="answer-space"></span></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 4: Word Problems (15 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Sam has 3 cookies. Amy gives him 2 more cookies. How many cookies does Sam have now?
                    <p>Answer: <span class="answer-space"></span> cookies</p>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> There are 8 fish in a tank. 3 fish are moved to another tank. How many fish are left?
                    <p>Answer: <span class="answer-space"></span> fish</p>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Maria had 5 stickers. She got 3 more stickers. Then she gave 4 stickers away. How many stickers does she have now?
                    <div class="drawing-area" style="height: 60px;"></div>
                    <p>Answer: <span class="answer-space"></span> stickers</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 5: Show Your Work (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Draw a picture to solve: 7 - 4 = ?
                    <div class="drawing-area"></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Final Review Test</strong></p>
                <p><strong>Part A: Addition Facts (15 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. 6 + 2 = <span class="answer-space"></span></p>
                    <p>2. 3 + 7 = <span class="answer-space"></span></p>
                    <p>3. 4 + 4 = <span class="answer-space"></span></p>
                    <p>4. 1 + 8 = <span class="answer-space"></span></p>
                    <p>5. 5 + 5 = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part B: Subtraction Facts (15 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. 9 - 3 = <span class="answer-space"></span></p>
                    <p>2. 8 - 4 = <span class="answer-space"></span></p>
                    <p>3. 10 - 5 = <span class="answer-space"></span></p>
                    <p>4. 7 - 2 = <span class="answer-space"></span></p>
                    <p>5. 6 - 6 = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part C: Number Pairs (10 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>What number completes each pair to make 10?</p>
                    <p>1. 2 + ____ = 10</p>
                    <p>2. ____ + 6 = 10</p>
                    <p>3. 8 + ____ = 10</p>
                    <p>4. ____ + 1 = 10</p>
                    <p>5. 5 + ____ = 10</p>
                </div>
                
                <p><strong>Part D: Fact Families (10 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Complete the fact family for 2, 7, 9:</p>
                    <p>2 + 7 = <span class="answer-space"></span></p>
                    <p>7 + 2 = <span class="answer-space"></span></p>
                    <p>9 - 2 = <span class="answer-space"></span></p>
                    <p>9 - 7 = <span class="answer-space"></span></p>
                </div>
                
                <p><strong>Part E: Word Problems (25 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. There are 4 cats and 3 dogs in the park. How many animals are there in total?</p>
                    <p>Number sentence: _______________</p>
                    <p>Answer: <span class="answer-space"></span> animals</p>
                    
                    <p>2. Emma has 10 crayons. She gives 4 crayons to her friend. How many crayons does Emma have left?</p>
                    <p>Number sentence: _______________</p>
                    <p>Answer: <span class="answer-space"></span> crayons</p>
                    
                    <p>3. Ben has 3 toy cars. He gets 5 more toy cars for his birthday. Then he gives 2 toy cars to his brother. How many toy cars does Ben have now?</p>
                    <p>Show your work:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <p>Answer: <span class="answer-space"></span> toy cars</p>
                </div>
                
                <p><strong>Part F: Draw and Solve (5 points)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Draw 9 stars. Cross out 3 stars. How many stars are left?</p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    <p>Answer: <span class="answer-space"></span> stars</p>
                </div>
                
                <p><strong>Total: 80 points</strong></p>
                <p><em>Good luck! You've got this! 🌟</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Celebration",
        subtopic: "Addition & Subtraction Mastery Day",
        revisionContent: `
            <div class="celebration-banner">
                <h3>🎉 CONGRATULATIONS! 🎉</h3>
                <p>You've completed Week 5 and mastered addition and subtraction with numbers 1-10!</p>
                <p>You're now a Grade 1 Math Expert!</p>
            </div>
            
            <div class="content-box">
                <p><strong>This Week's Achievements:</strong></p>
                <ul>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Mastered addition facts</strong> 1-10</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Mastered subtraction facts</strong> 1-10</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Learned number pairs</strong> that make 10</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Understood fact families</strong> and how addition/subtraction are related</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Solved word problems</strong> by identifying correct operations</li>
                    <li><i class="fas fa-star" style="color: gold;"></i> <strong>Used multiple strategies</strong> to solve problems</li>
                </ul>
            </div>
            
            <div class="content-box">
                <p><strong>Key Concepts to Remember:</strong></p>
                <p>➕ <strong>Addition:</strong> Putting together, finding the total, combining</p>
                <p>➖ <strong>Subtraction:</strong> Taking away, finding how many are left, the difference</p>
                <p>🔢 <strong>Fact Families:</strong> Related addition and subtraction facts</p>
                <p>🤝 <strong>Number Pairs to 10:</strong> 1+9, 2+8, 3+7, 4+6, 5+5</p>
                <p>📝 <strong>Word Problem Clues:</strong> "total" = add, "left" = subtract</p>
            </div>
            
            <div class="content-box">
                <p><strong>Problem-Solving Strategies:</strong></p>
                <p>✅ Use your fingers to count</p>
                <p>✅ Draw pictures or dots</p>
                <p>✅ Use a number line</p>
                <p>✅ Check your work with a different method</p>
                <p>✅ Read word problems twice</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Final Celebration Activities:</strong></p>
                
                <div class="task-item celebration-task">
                    <span class="task-number">🏆</span> <strong>Math Champion Challenge:</strong>
                    <p>Solve these as quickly as you can!</p>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                        <div>3 + 4 = <span class="answer-space" style="width: 40px;"></span></div>
                        <div>9 - 2 = <span class="answer-space" style="width: 40px;"></span></div>
                        <div>5 + 5 = <span class="answer-space" style="width: 40px;"></span></div>
                        <div>8 - 3 = <span class="answer-space" style="width: 40px;"></span></div>
                        <div>2 + 7 = <span class="answer-space" style="width: 40px;"></span></div>
                        <div>10 - 6 = <span class="answer-space" style="width: 40px;"></span></div>
                    </div>
                </div>
                
                <div class="task-item celebration-task">
                    <span class="task-number">🎨</span> <strong>Create Your Own Problems:</strong>
                    <p>Create one addition and one subtraction word problem:</p>
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
                
                <div class="task-item celebration-task">
                    <span class="task-number">🌟</span> <strong>Number Pairs Game:</strong>
                    <p>List all the number pairs that make 10:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                
                <div class="task-item celebration-task">
                    <span class="task-number">📊</span> <strong>Fact Family Showcase:</strong>
                    <p>Choose three numbers and show their fact family:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                
                <div class="celebration-sticker">
                    <h4>⭐ MATH MASTERY CERTIFICATE ⭐</h4>
                    <p>Awarded for excellence in Addition & Subtraction</p>
                    <p>Student: __________________________</p>
                    <p>Date: __________________________</p>
                    <p>Teacher Signature: __________________________</p>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Weekend Fun: Be the Math Teacher!</strong></p>
                
                <div class="certificate">
                    <h3>📚 OFFICIAL TEACHING CERTIFICATE 📚</h3>
                    <h4>Junior Math Instructor</h4>
                    <p>This certifies that</p>
                    <p style="font-size: 1.5em; font-weight: bold; border-bottom: 2px dashed #ccc; padding: 10px; margin: 10px 0;">__________________________</p>
                    <p>is qualified to teach addition and subtraction to others</p>
                    <p>and has demonstrated mastery of math facts 1-10</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                        <div>
                            <p>Date Awarded: _______________</p>
                            <p>Grade: A+</p>
                        </div>
                        <div>
                            <p>🌟 MATH WHIZ 🌟</p>
                        </div>
                    </div>
                </div>
                
                <p><strong>Your Teaching Assignment:</strong></p>
                <p>Teach someone at home what you learned this week:</p>
                <ol>
                    <li><strong>Lesson 1:</strong> Teach them how to solve 6 + 3</li>
                    <li><strong>Lesson 2:</strong> Teach them how to solve 9 - 4</li>
                    <li><strong>Lesson 3:</strong> Show them a fact family (like 4, 5, 9)</li>
                    <li><strong>Lesson 4:</strong> Create a word problem for them to solve</li>
                </ol>
                
                <p><strong>Student Evaluation Form:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p><strong>Student's Name:</strong> __________________________</p>
                    <p><strong>What I taught them:</strong></p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    <p><strong>What they learned:</strong></p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    <p><strong>Their test score (out of 5):</strong> <span class="answer-space"></span>/5</p>
                    <p><strong>Teacher's Comments:</strong> __________________________</p>
                </div>
                
                <p><em>Bring your teaching certificate and evaluation form on Monday for a special reward!</em></p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathWeek5);
    console.log("math-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathWeek5);
    console.log("math-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathWeek5',
        metadata: grade1MathWeek5.metadata,
        days: grade1MathWeek5
    });
    console.log("math-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathWeek5 = grade1MathWeek5;
console.log("math-week5.js loaded and registered successfully");