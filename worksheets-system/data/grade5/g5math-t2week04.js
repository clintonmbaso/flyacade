// Grade 5 Mathematics - Term 2 Week 4 Data
const grade5MathWeek4 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 2,
        week: 4,
        title: "The Laws of Math",
        description: "Exploring the Commutative, Associative, and Distributive Laws of Mathematics"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Number Properties",
        subtopic: "The Commutative Law",
        lessonContent: `
            <p>Welcome to our exploration of the Laws of Math! Today we'll discover that order doesn't matter when adding or multiplying.</p>
            <p><strong>Key Question:</strong> Does changing the order of numbers change the answer when adding or multiplying?</p>
            <p><strong>Introduction:</strong> The <strong>Commutative Law</strong> tells us that when we add or multiply, we can swap the numbers around and get the same answer.</p>
            <p><strong>The Commutative Law Formulas:</strong></p>
            <ul>
                <li><strong>Addition:</strong> a + b = b + a</li>
                <li><strong>Multiplication:</strong> a × b = b × a</li>
            </ul>
            <p><strong>Important Note:</strong> The Commutative Law does NOT work for subtraction or division!</p>
            <ul>
                <li>5 - 3 = 2 but 3 - 5 = -2 (different results!)</li>
                <li>10 ÷ 2 = 5 but 2 ÷ 10 = 0.2 (different results!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Addition Example - Red and Green Apples</div>
                <p>3 red apples + 2 green apples = 5 apples total<br>
                2 green apples + 3 red apples = 5 apples total<br>
                <strong>Same total! Order doesn't matter.</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Multiplication Example - Array of Dots</div>
                <p>A 3 × 4 array of dots has 12 dots total.<br>
                A 4 × 3 array of dots also has 12 dots total.<br>
                <strong>Same total! Order doesn't matter.</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Real-Life Commuting</div>
                <p>The word "commutative" comes from "commute" meaning to move around. Just like you can commute (travel) to school by different routes, numbers can commute to different positions!</p>
            </div>
        `,
        taskInstructions: "Practice swapping numbers in addition and multiplication problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Commutative Law with Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rewrite each equation using the commutative law, then solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 8 + 5 = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>B) 24 + 13 = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>C) 47 + 56 = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Commutative Law with Multiplication</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rewrite each equation using the commutative law, then solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 6 × 4 = ___ × ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>B) 7 × 9 = ___ × ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>C) 8 × 12 = ___ × ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Arrays</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw dots to show that 2 × 5 equals 5 × 2:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Does NOT Work for Subtraction!</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Show that 15 - 7 is different from 7 - 15:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three examples at home where order doesn't matter (like putting on socks then shoes vs shoes then socks - does that work?)",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Number Properties",
        subtopic: "The Associative Law",
        lessonContent: `
            <p>Today we'll learn about the Associative Law - how grouping numbers doesn't change the final answer!</p>
            <p><strong>Key Question:</strong> Does it matter which two numbers we add or multiply first?</p>
            <p><strong>Introduction:</strong> The <strong>Associative Law</strong> tells us that when adding or multiplying three or more numbers, the way we group them doesn't change the answer.</p>
            <p><strong>The Associative Law Formulas:</strong></p>
            <ul>
                <li><strong>Addition:</strong> (a + b) + c = a + (b + c)</li>
                <li><strong>Multiplication:</strong> (a × b) × c = a × (b × c)</li>
            </ul>
            <p><strong>Important Note:</strong> Like the Commutative Law, the Associative Law does NOT work for subtraction or division!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bag-shopping"></i> The Lunch Bag Example</div>
                <p>You have (1 sandwich + 1 juice) in a bag, and 1 apple outside. Total = 3 items.<br>
                If you move the juice to be outside with the apple, you have 1 sandwich + (1 juice + 1 apple). Total is still 3!<br>
                <strong>The grouping changed, but the total stayed the same.</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Math Proof - Addition</div>
                <p>(10 + 5) + 2 = 15 + 2 = 17<br>
                10 + (5 + 2) = 10 + 7 = 17<br>
                <strong>Both ways equal 17!</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Math Proof - Multiplication</div>
                <p>(2 × 3) × 4 = 6 × 4 = 24<br>
                2 × (3 × 4) = 2 × 12 = 24<br>
                <strong>Both ways equal 24!</strong></p>
            </div>
        `,
        taskInstructions: "Practice regrouping numbers in addition and multiplication problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Associative Law with Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Show that both groupings give the same answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) (12 + 8) + 5 = ___ + ___ = ___</div>
                        <div>12 + (8 + 5) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>B) (23 + 7) + 10 = ___ + ___ = ___</div>
                        <div>23 + (7 + 10) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Associative Law with Multiplication</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Show that both groupings give the same answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) (2 × 5) × 3 = ___ × ___ = ___</div>
                        <div>2 × (5 × 3) = ___ × ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>B) (4 × 6) × 2 = ___ × ___ = ___</div>
                        <div>4 × (6 × 2) = ___ × ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Example</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a word problem that shows the Associative Law:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: The Associative Law Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Does (15 - 5) - 2 equal 15 - (5 - 2)? Show your work to prove your answer:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Explain to someone at home how the Associative Law works with an example of your own.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Number Properties",
        subtopic: "The Distributive Law (Multiplication over Addition)",
        lessonContent: `
            <p>Today we'll master the Distributive Law - how to multiply a number by a group of numbers added together!</p>
            <p><strong>Key Question:</strong> How can we multiply a number by a sum?</p>
            <p><strong>Introduction:</strong> The <strong>Distributive Law</strong> tells us that multiplying a number by a sum is the same as multiplying the number by each addend separately and then adding the products.</p>
            <p><strong>The Distributive Law Formula (Addition):</strong></p>
            <ul>
                <li>a × (b + c) = (a × b) + (a × c)</li>
            </ul>
            <p><strong>Why it's called "Distributive":</strong> The multiplier "distributes" itself to each number inside the parentheses - like a teacher handing out papers to every student!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> The Party Bags Example</div>
                <p>You have 5 party bags. Each bag has 2 candies and 3 stickers.<br>
                <strong>Method 1 (Add first):</strong> 5 × (2 + 3) = 5 × 5 = 25 total items<br>
                <strong>Method 2 (Distribute):</strong> (5 × 2) + (5 × 3) = 10 + 15 = 25 total items<br>
                <strong>Both methods give the same answer!</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Distributing Papers</div>
                <p>A teacher has 4 rows of students. Each row has 5 boys and 3 girls.<br>
                4 × (5 + 3) = 4 × 8 = 32 students<br>
                (4 × 5) + (4 × 3) = 20 + 12 = 32 students</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Break Apart to Multiply Easier</div>
                <p>6 × 14 = 6 × (10 + 4) = (6 × 10) + (6 × 4) = 60 + 24 = 84<br>
                <strong>Breaking apart makes multiplication easier!</strong></p>
            </div>
        `,
        taskInstructions: "Practice distributing multipliers to numbers inside parentheses.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Distributive Law - Add First vs. Distribute</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each problem both ways to show they are equal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 3 × (4 + 5)</div>
                        <div>Add first: 3 × (___) = ___</div>
                        <div>Distribute: (3 × ___) + (3 × ___) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div>B) 6 × (7 + 2)</div>
                        <div>Add first: 6 × (___) = ___</div>
                        <div>Distribute: (6 × ___) + (6 × ___) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div>C) 8 × (9 + 3)</div>
                        <div>Add first: 8 × (___) = ___</div>
                        <div>Distribute: (8 × ___) + (8 × ___) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Break Apart Strategy</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the distributive law to solve these tricky multiplications:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 7 × 13 = 7 × (10 + 3) = (7 × 10) + (7 × 3) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>B) 9 × 16 = 9 × (10 + 6) = (9 × 10) + (9 × 6) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>C) 4 × 25 = 4 × (20 + 5) = (4 × 20) + (4 × 5) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Distributive Law</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw an array or picture showing 4 × (3 + 2) = (4 × 3) + (4 × 2):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Use the distributive law to solve 12 × 15 by breaking 15 into 10 + 5. Show your work.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Number Properties",
        subtopic: "The Distributive Law (Subtraction)",
        lessonContent: `
            <p>Today we'll apply the Distributive Law to subtraction problems!</p>
            <p><strong>Key Question:</strong> Does the Distributive Law work when we have subtraction inside the parentheses?</p>
            <p><strong>Introduction:</strong> YES! The Distributive Law also works with subtraction. The multiplier distributes to each number, and we subtract the products.</p>
            <p><strong>The Distributive Law Formula (Subtraction):</strong></p>
            <ul>
                <li>a × (b - c) = (a × b) - (a × c)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tags"></i> Shopping Discount Example</div>
                <p>Buying 4 shirts that were $20 each but now have a $5 discount per shirt.<br>
                <strong>Method 1 (Subtract first):</strong> 4 × (20 - 5) = 4 × 15 = $60 total<br>
                <strong>Method 2 (Distribute):</strong> (4 × 20) - (4 × 5) = 80 - 20 = $60 total<br>
                <strong>Both methods give the same total cost!</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Example</div>
                <p>5 boxes of pizza, each box had 12 slices but 2 slices were eaten.<br>
                5 × (12 - 2) = 5 × 10 = 50 slices left<br>
                (5 × 12) - (5 × 2) = 60 - 10 = 50 slices left</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Mental Math Trick</div>
                <p>8 × 18 = 8 × (20 - 2) = (8 × 20) - (8 × 2) = 160 - 16 = 144<br>
                <strong>Sometimes subtracting is easier than adding!</strong></p>
            </div>
        `,
        taskInstructions: "Practice using the distributive law with subtraction.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Distributive Law with Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each problem both ways:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 6 × (10 - 4)</div>
                        <div>Subtract first: 6 × (___) = ___</div>
                        <div>Distribute: (6 × ___) - (6 × ___) = ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div>B) 9 × (15 - 7)</div>
                        <div>Subtract first: 9 × (___) = ___</div>
                        <div>Distribute: (9 × ___) - (9 × ___) = ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div>C) 7 × (20 - 5)</div>
                        <div>Subtract first: 7 × (___) = ___</div>
                        <div>Distribute: (7 × ___) - (7 × ___) = ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mental Math with Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the distributive law (subtraction) to solve these:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 7 × 19 = 7 × (20 - 1) = (7 × 20) - (7 × 1) = ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>B) 6 × 28 = 6 × (30 - 2) = (6 × 30) - (6 × 2) = ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>C) 4 × 37 = 4 × (40 - 3) = (4 × 40) - (4 × 3) = ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A class has 8 students. Each student needs 15 pencils, but the teacher already gave them 3 pencils each. How many more pencils are needed? Write and solve two ways using the distributive law.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create a word problem that uses the distributive law with subtraction. Solve it and show your work.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Number Properties",
        subtopic: "Law Mastery Lab",
        lessonContent: `
            <p>Today we'll become Law Detectives! We'll identify which math law is being used in different scenarios.</p>
            <p><strong>Key Question:</strong> How can we recognize which math law applies to a given problem?</p>
            <p><strong>Week 4 Review:</strong></p>
            <ol>
                <li><strong>Commutative Law:</strong> Order doesn't matter in addition and multiplication (a + b = b + a; a × b = b × a)</li>
                <li><strong>Associative Law:</strong> Grouping doesn't matter in addition and multiplication ((a + b) + c = a + (b + c))</li>
                <li><strong>Distributive Law:</strong> Multiply by a sum or difference by distributing a × (b + c) = (a × b) + (a × c)</li>
            </ol>
            <p><strong>Quick Memory Aids:</strong></p>
            <ul>
                <li><strong>Commutative:</strong> "Commute" = move around / swap positions</li>
                <li><strong>Associative:</strong> "Associate" = group together / partner up</li>
                <li><strong>Distributive:</strong> "Distribute" = hand out / spread around</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-id-card"></i> Law Detective Tip #1</div>
                <p>If the SAME numbers appear on both sides, but in different ORDER → <strong>COMMUTATIVE LAW</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-id-card"></i> Law Detective Tip #2</div>
                <p>If the numbers are the same but the PARENTHESES (grouping) have moved → <strong>ASSOCIATIVE LAW</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-id-card"></i> Law Detective Tip #3</div>
                <p>If a number outside parentheses multiplies everything inside → <strong>DISTRIBUTIVE LAW</strong></p>
            </div>
        `,
        taskInstructions: "Identify which law is being used in various scenarios and complete the mastery quiz.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Law Cards Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each real-world story to the correct mathematical law:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Story 1:</strong> "I added 5 + 3 and got 8. Then I tried 3 + 5 and also got 8!"</div>
                        <div>Law: _________ (Commutative / Associative / Distributive)</div>
                        <div class="answer-space" style="height: 20px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Story 2:</strong> "I have 4 bags with 3 apples and 2 oranges in each. I can add first or multiply first - same total!"</div>
                        <div>Law: _________ (Commutative / Associative / Distributive)</div>
                        <div class="answer-space" style="height: 20px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Story 3:</strong> "First I added 2 + 3 = 5, then added 4 to get 9. Then I added 3 + 4 = 7, then added 2 to get 9. Same answer!"</div>
                        <div>Law: _________ (Commutative / Associative / Distributive)</div>
                        <div class="answer-space" style="height: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Law</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each equation, write which law is being used:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 7 × 8 = 8 × 7 → __________</div>
                        <div>B) (5 + 3) + 2 = 5 + (3 + 2) → __________</div>
                        <div>C) 6 × (4 + 5) = (6 × 4) + (6 × 5) → __________</div>
                        <div>D) 9 × 7 = 7 × 9 → __________</div>
                        <div>E) (2 × 5) × 3 = 2 × (5 × 3) → __________</div>
                        <div>F) 8 × (10 - 3) = (8 × 10) - (8 × 3) → __________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Examples</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one example for each law:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Commutative: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Associative: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Distributive: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quick Quiz</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve using any law you choose:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) 25 × 8 × 4 = ? (Hint: Commutative can help!)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>B) 7 × 24 = ? (Hint: Distributive can help!)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>C) (13 + 8) + 7 = ? (Hint: Associative can help!)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which math law do you find most useful? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Teach someone at home about one of the math laws you learned this week. Ask them to sign your notebook to confirm!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek4);
    console.log("grade5-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek4);
    console.log("grade5-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek4',
        metadata: grade5MathWeek4.metadata,
        days: grade5MathWeek4
    });
    console.log("grade5-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek4 = grade5MathWeek4;
console.log("grade5-math-week4.js loaded and registered successfully");