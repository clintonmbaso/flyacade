// Grade 2 Mathematics & Science - Term 3 Week 9 Data
const grade2MathScienceWeek9 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 3,
        week: 9,
        title: "Understanding Division",
        description: "Illustrating the meaning of division using equal sharing, repeated subtraction, and relating division to multiplication"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Illustrating the Meaning of Division (Equal Sharing)",
        lessonContent: `
            <p>Welcome to our week on division! Today we'll learn what division means by sharing things equally.</p>
            <p><strong>Key Question:</strong> How can we share cookies so everyone gets the same amount?</p>
            <p><strong>What is Division?</strong></p>
            <p>Division means <strong>splitting things into equal groups</strong>. When we divide, we make sure every group gets the same number of items.</p>
            <p><strong>Words We Use:</strong></p>
            <ul>
                <li><strong>Share equally:</strong> Give the same amount to each person or group</li>
                <li><strong>Equal portions:</strong> Groups that have the same number</li>
                <li><strong>Divide:</strong> Split into equal parts</li>
            </ul>
            <p><strong>Example:</strong></p>
            <p>If you have 12 strawberries and want to share them equally among 3 friends, how many strawberries does each friend get?</p>
            <p>You give 1 strawberry to each friend, then another, until all strawberries are gone. Each friend gets 4 strawberries. 12 ÷ 3 = 4</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Cookie Sharing</div>
                <p>8 cookies shared equally between 2 children. Each child gets 4 cookies. 8 ÷ 2 = 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Apple Basket</div>
                <p>15 apples divided into 5 equal bags. Each bag has 3 apples. 15 ÷ 5 = 3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Team Players</div>
                <p>20 children divided into 4 equal teams. Each team has 5 children. 20 ÷ 4 = 5</p>
            </div>
        `,
        taskInstructions: "Draw pictures to show equal sharing and solve division problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Equal Sharing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw 6 candies shared equally between 2 friends. How many does each get?
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Each friend gets ______ candies. 6 ÷ 2 = ______</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw 9 stickers shared equally among 3 children. How many does each get?
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Each child gets ______ stickers. 9 ÷ 3 = ______</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Solve the Sharing Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> 10 marbles shared equally between 2 friends. Each gets ______ marbles.
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 12 pencils shared equally among 4 students. Each gets ______ pencils.
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 16 eggs placed equally into 2 cartons. Each carton has ______ eggs.
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw 18 toy cars shared equally among 6 boxes. Show your drawing.
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Each box has ______ cars. 18 ÷ 6 = ______</div>
                </div>
            </div>
        `,
        homework: "Find 20 small objects at home (beans, buttons, coins). Share them equally into 4 groups. Write how many are in each group.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Strategies: Repeated Subtraction and Equal Sharing",
        lessonContent: `
            <p>Today we'll learn two smart ways to solve division problems: <strong>repeated subtraction</strong> and <strong>equal sharing</strong>!</p>
            <p><strong>Key Question:</strong> What are different ways we can figure out a division problem?</p>
            <p><strong>Strategy 1: Repeated Subtraction</strong></p>
            <p>Repeated subtraction means subtracting the same number over and over until you reach zero. The number of times you subtract is your answer!</p>
            <p><strong>Example:</strong> 15 ÷ 3 = ?</p>
            <p>15 - 3 = 12 (1 time)<br>
            12 - 3 = 9 (2 times)<br>
            9 - 3 = 6 (3 times)<br>
            6 - 3 = 3 (4 times)<br>
            3 - 3 = 0 (5 times)<br>
            I subtracted 3 five times. So 15 ÷ 3 = 5</p>
            <p><strong>Strategy 2: Equal Sharing</strong></p>
            <p>Draw circles for groups. Put one item in each circle at a time until all items are gone. Count how many are in each circle.</p>
            <p><strong>Example:</strong> 12 ÷ 4 = ?</p>
            <p>Draw 4 circles. Put 1 dot in each circle (4 dots used). Do this again and again until all 12 dots are used. Each circle has 3 dots. So 12 ÷ 4 = 3</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus-circle"></i> Repeated Subtraction</div>
                <p>20 ÷ 5 = ?<br>
                20 - 5 = 15 (1)<br>
                15 - 5 = 10 (2)<br>
                10 - 5 = 5 (3)<br>
                5 - 5 = 0 (4)<br>
                I subtracted 4 times. 20 ÷ 5 = 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Equal Sharing</div>
                <p>18 ÷ 3 = ?<br>
                Draw 3 circles. Put 1 dot in each circle (3 dots). Keep going until 18 dots are used. Each circle has 6 dots. 18 ÷ 3 = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Choose Your Strategy</div>
                <p>Some problems are easier with repeated subtraction. Some are easier with drawing. You can choose which strategy works best for you!</p>
            </div>
        `,
        taskInstructions: "Use repeated subtraction and equal sharing to solve division problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Repeated Subtraction Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve 12 ÷ 4 using repeated subtraction:
                    <div class="answer-space" style="height: 80px;"></div>
                    <div>12 ÷ 4 = ______</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Solve 21 ÷ 7 using repeated subtraction:
                    <div class="answer-space" style="height: 80px;"></div>
                    <div>21 ÷ 7 = ______</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Equal Sharing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw equal sharing to solve 14 ÷ 2:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>14 ÷ 2 = ______</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw equal sharing to solve 24 ÷ 6:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>24 ÷ 6 = ______</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: You Choose the Strategy</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> 18 ÷ 3 = ______ (show your work using either strategy)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 25 ÷ 5 = ______ (show your work using either strategy)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Use repeated subtraction to solve: 16 ÷ 2, 24 ÷ 3, and 30 ÷ 5. Write each subtraction step.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Dividing Single-Digit Numbers (Without Remainder)",
        lessonContent: `
            <p>Today we'll practice dividing single-digit numbers! That means we'll split numbers from 1 to 9 into equal groups.</p>
            <p><strong>Key Question:</strong> How do we divide small numbers like 8 ÷ 2 or 9 ÷ 3?</p>
            <p><strong>Division Rules:</strong></p>
            <ul>
                <li>When we divide, the answer is called the <strong>quotient</strong></li>
                <li>We are dividing <strong>without remainder</strong>, which means the numbers split perfectly with nothing left over</li>
                <li>The division symbol ÷ means "divided by"</li>
            </ul>
            <p><strong>Dividing by 1:</strong> Any number divided by 1 equals itself. Example: 7 ÷ 1 = 7</p>
            <p><strong>Dividing by itself:</strong> Any number divided by itself equals 1. Example: 5 ÷ 5 = 1</p>
            <p><strong>Division Facts to Remember:</strong></p>
            <ul>
                <li>2 ÷ 2 = 1, 4 ÷ 2 = 2, 6 ÷ 2 = 3, 8 ÷ 2 = 4</li>
                <li>3 ÷ 3 = 1, 6 ÷ 3 = 2, 9 ÷ 3 = 3</li>
                <li>4 ÷ 4 = 1, 8 ÷ 4 = 2</li>
                <li>5 ÷ 5 = 1, 10 ÷ 5 = 2 (10 is two-digit, but we'll practice)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Division Facts</div>
                <p>6 ÷ 2 = 3 (Six divided by two equals three)<br>
                8 ÷ 4 = 2 (Eight divided by four equals two)<br>
                9 ÷ 3 = 3 (Nine divided by three equals three)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Problem</div>
                <p>If a pizza has 8 slices and 2 people share equally, each gets 4 slices. 8 ÷ 2 = 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Egg Carton</div>
                <p>An egg carton holds 12 eggs. If you have 6 eggs, you fill half the carton. But with single digits: 6 eggs shared into 2 cartons = 3 eggs each. 6 ÷ 2 = 3</p>
            </div>
        `,
        taskInstructions: "Solve single-digit division problems without remainder.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Division Facts</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 4 ÷ 2 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 6 ÷ 3 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 8 ÷ 4 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 9 ÷ 3 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 10 ÷ 5 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Division Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 12 ÷ 3 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 14 ÷ 2 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 15 ÷ 5 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 16 ÷ 4 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 18 ÷ 3 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Sarah has 12 cookies. She puts them equally into 4 bags. How many cookies in each bag?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> There are 20 students. They form 5 equal teams. How many students on each team?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Practice division facts: 2 ÷ 1, 4 ÷ 2, 6 ÷ 3, 8 ÷ 4, 9 ÷ 9, 12 ÷ 4, 15 ÷ 3, 18 ÷ 6. Write the answers.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Dividing Two-Digit Numbers by Single Digit (Without Remainder)",
        lessonContent: `
            <p>Today we'll learn how to divide bigger numbers! We'll divide two-digit numbers by single-digit numbers.</p>
            <p><strong>Key Question:</strong> How do we divide numbers like 24 ÷ 3 or 45 ÷ 5?</p>
            <p><strong>Method 1: Using Repeated Subtraction</strong></p>
            <p>Subtract the same number over and over until you reach zero. Count how many times you subtracted.</p>
            <p><strong>Example:</strong> 24 ÷ 3 = ?<br>
            24 - 3 = 21 (1)<br>
            21 - 3 = 18 (2)<br>
            18 - 3 = 15 (3)<br>
            15 - 3 = 12 (4)<br>
            12 - 3 = 9 (5)<br>
            9 - 3 = 6 (6)<br>
            6 - 3 = 3 (7)<br>
            3 - 3 = 0 (8)<br>
            I subtracted 8 times. So 24 ÷ 3 = 8</p>
            <p><strong>Method 2: Using Multiplication Facts</strong></p>
            <p>Think: What number times the divisor equals the dividend?</p>
            <p><strong>Example:</strong> 24 ÷ 3 = ? → What times 3 equals 24? 8 × 3 = 24, so 24 ÷ 3 = 8</p>
            <p><strong>Method 3: Equal Sharing Drawing</strong></p>
            <p>Draw circles for groups and keep adding dots until you reach the total.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Step-by-Step: 36 ÷ 6</div>
                <p>Think: 6 × ? = 36. I know 6 × 6 = 36, so 36 ÷ 6 = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-candy-cane"></i> Candy Problem</div>
                <p>42 candies shared equally among 7 children. Each child gets 6 candies. 42 ÷ 7 = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Class Activity</div>
                <p>30 students divided into 5 groups. Each group has 6 students. 30 ÷ 5 = 6</p>
            </div>
        `,
        taskInstructions: "Divide two-digit numbers by single-digit numbers using your favorite strategy.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Divide These Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 24 ÷ 4 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 30 ÷ 5 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 32 ÷ 4 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 35 ÷ 7 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 40 ÷ 5 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Two-Digit Division</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 42 ÷ 6 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 45 ÷ 9 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 48 ÷ 8 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 54 ÷ 6 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 63 ÷ 7 = ______
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Show Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> 56 ÷ 8 = ______ (show your strategy)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> 72 ÷ 9 = ______ (show your strategy)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">13</span> A farmer has 48 apples. He puts them equally into 6 baskets. How many apples in each basket?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> There are 56 chairs in a hall. They are arranged in 7 equal rows. How many chairs in each row?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Solve: 28 ÷ 4, 36 ÷ 6, 49 ÷ 7, 64 ÷ 8, 81 ÷ 9. Write the answers.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Relating Division to Multiplication",
        lessonContent: `
            <p>Today we'll discover how division and multiplication are best friends! They are opposites, just like addition and subtraction.</p>
            <p><strong>Key Question:</strong> How can knowing multiplication help us solve division problems?</p>
            <p><strong>The Fact Family:</strong></p>
            <p>Multiplication and division are related. They form a <strong>fact family</strong> - three numbers that work together.</p>
            <p><strong>Example:</strong> 4, 6, and 24</p>
            <p>4 × 6 = 24 (multiplication)<br>
            6 × 4 = 24 (multiplication)<br>
            24 ÷ 4 = 6 (division)<br>
            24 ÷ 6 = 4 (division)</p>
            <p><strong>How to Use Multiplication to Solve Division:</strong></p>
            <p>When you see 24 ÷ 4 = ?, ask yourself: "What number times 4 equals 24?"</p>
            <p>If you know 6 × 4 = 24, then 24 ÷ 4 = 6!</p>
            <p><strong>Remember:</strong> Division is the inverse (opposite) of multiplication. Whatever multiplication does, division undoes!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Fact Family House</div>
                <p>Numbers 3, 5, and 15 live in a fact family house!<br>
                3 × 5 = 15<br>
                5 × 3 = 15<br>
                15 ÷ 3 = 5<br>
                15 ÷ 5 = 3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-random"></i> Turning Multiplication into Division</div>
                <p>If 7 × 4 = 28, then 28 ÷ 7 = 4 and 28 ÷ 4 = 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Missing Number</div>
                <p>___ × 6 = 42. I know 7 × 6 = 42, so 42 ÷ 6 = 7</p>
            </div>
        `,
        taskInstructions: "Complete fact families and relate division to multiplication.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Fact Families</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 3, 4, 12<br>
                    3 × 4 = ______<br>
                    4 × 3 = ______<br>
                    12 ÷ 3 = ______<br>
                    12 ÷ 4 = ______
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 5, 6, 30<br>
                    5 × 6 = ______<br>
                    6 × 5 = ______<br>
                    30 ÷ 5 = ______<br>
                    30 ÷ 6 = ______
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 7, 8, 56<br>
                    7 × 8 = ______<br>
                    8 × 7 = ______<br>
                    56 ÷ 7 = ______<br>
                    56 ÷ 8 = ______
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Use Multiplication to Solve Division</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 18 ÷ 3 = ? I know 3 × ___ = 18, so 18 ÷ 3 = ______
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 28 ÷ 4 = ? I know 4 × ___ = 28, so 28 ÷ 4 = ______
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 45 ÷ 5 = ? I know 5 × ___ = 45, so 45 ÷ 5 = ______
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 54 ÷ 6 = ? I know 6 × ___ = 54, so 54 ÷ 6 = ______
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write the Related Division Facts</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> 4 × 9 = 36<br>
                    Division facts: ______ and ______
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 6 × 7 = 42<br>
                    Division facts: ______ and ______
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 8 × 9 = 72<br>
                    Division facts: ______ and ______
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> 32 ÷ 8 = ? (Use multiplication to help)
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> 49 ÷ 7 = ?
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> 27 ÷ 3 = ?
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> 36 ÷ 9 = ?
                    <div class="answer-space" style="height: 25px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">15</span> How does knowing multiplication help you with division?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own fact family using the numbers 9, 9, and 81. Write all four number sentences. Then do the same with 4, 12, and 48.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek9);
    console.log("grade2-mathscience-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek9);
    console.log("grade2-mathscience-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek9',
        metadata: grade2MathScienceWeek9.metadata,
        days: grade2MathScienceWeek9
    });
    console.log("grade2-mathscience-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek9 = grade2MathScienceWeek9;
console.log("grade2-mathscience-week9.js loaded and registered successfully");