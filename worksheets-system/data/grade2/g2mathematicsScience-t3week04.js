// Grade 2 Mathematics - Term 3 Week 4 Data
const grade2MathsWeek4 = {
    metadata: {
        grade: 2,
        subject: "Mathematics",
        term: 3,
        week: 4,
        title: "Subtraction (Whole Numbers)",
        description: "Subtracting whole numbers using tiles, decomposition, vertical method, expanded notation, and without regrouping"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Numbers Using Tiles",
        lessonContent: `
            <p>Welcome to our week on subtraction! Today we'll learn how to subtract numbers using counting tiles.</p>
            <p><strong>Key Question:</strong> How can we use tiles to help us subtract?</p>
            <p><strong>Introduction:</strong> Subtraction means taking away. When we subtract, we start with a bigger number and take away a smaller number to find out how many are left.</p>
            <p><strong>Using Tiles to Subtract:</strong></p>
            <ol>
                <li>Count out tiles to match the first (bigger) number</li>
                <li>Take away the number of tiles you are subtracting</li>
                <li>Count how many tiles are left - that's your answer!</li>
            </ol>
            <p><strong>Example:</strong> 8 - 3 = ?</p>
            <ul>
                <li>Count out 8 tiles: 🟦 🟦 🟦 🟦 🟦 🟦 🟦 🟦</li>
                <li>Take away 3 tiles: 🟦 🟦 🟦 (remove these)</li>
                <li>Count remaining: 🟦 🟦 🟦 🟦 🟦 (5 tiles left)</li>
                <li>So, 8 - 3 = 5</li>
            </ul>
            <p><strong>Subtraction Vocabulary:</strong></p>
            <ul>
                <li><strong>Minuend:</strong> The number you start with (the biggest number)</li>
                <li><strong>Subtrahend:</strong> The number you take away</li>
                <li><strong>Difference:</strong> The answer (what's left)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Tile Subtraction</div>
                <p>10 - 4 = ? Count out 10 tiles, take away 4, count what's left. Answer: 6 tiles remain!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Real Life Example</div>
                <p>You have 7 apples. You eat 2 apples. How many are left? 7 - 2 = 5 apples left!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Number Sentence</div>
                <p>A subtraction number sentence: 9 - 4 = 5. "Nine minus four equals five."</p>
            </div>
        `,
        taskInstructions: "Use tiles to solve subtraction problems and complete the worksheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tile Subtraction Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use tiles to solve these problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6 - 2 = ___</div>
                        <div>b) 9 - 5 = ___</div>
                        <div>c) 7 - 1 = ___</div>
                        <div>d) 10 - 3 = ___</div>
                        <div>e) 8 - 4 = ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Tiles</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw tiles to show each subtraction:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>5 - 2 = ___</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">7 - 3 = ___</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these real-world problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Maria has 8 crayons. She gives 3 to her friend. How many crayons does Maria have left?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">There are 10 birds on a fence. 4 fly away. How many birds are left?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Use objects at home (buttons, coins, or beans) to practice subtraction. Solve: 8-3, 9-6, 10-2, and 7-4.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Whole Numbers Up to 99 (Including Decomposition)",
        lessonContent: `
            <p>Today we'll learn how to subtract larger numbers up to 99 using decomposition!</p>
            <p><strong>Key Question:</strong> What do we do when we can't subtract the ones place easily?</p>
            <p><strong>Introduction:</strong> Sometimes when we subtract, the top number in the ones place is smaller than the bottom number. We need to decompose (borrow/regroup) from the tens place!</p>
            <p><strong>Decomposition (Borrowing) Steps:</strong></p>
            <ol>
                <li>Look at the ones place. Is the top number smaller than the bottom?</li>
                <li>If yes, borrow 1 ten from the tens place.</li>
                <li>The tens place goes down by 1.</li>
                <li>The ones place gets 10 more (becomes a 2-digit number).</li>
                <li>Now subtract the ones place, then subtract the tens place.</li>
            </ol>
            <p><strong>Example:</strong> 52 - 28 = ?</p>
            <ul>
                <li>Ones place: 2 - 8 (can't do it - 2 is smaller than 8)</li>
                <li>Borrow 1 ten from 5 tens → 5 becomes 4 tens</li>
                <li>Ones place: 2 becomes 12</li>
                <li>Now subtract: 12 - 8 = 4 (ones)</li>
                <li>Tens place: 4 - 2 = 2 (tens)</li>
                <li>Answer: 24</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Borrowing Help</div>
                <p>When you borrow, think: "I need more ones, so I'll take a ten from my tens column!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Step by Step</div>
                <p>43 - 19:<br>
                3 - 9 can't work, so borrow 1 ten from 4 tens.<br>
                3 becomes 13, 4 becomes 3.<br>
                13 - 9 = 4, 3 - 1 = 2. Answer: 24!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Money Example</div>
                <p>You have 5 dimes and 2 pennies (52¢). You need to pay 28¢. You break one dime into 10 pennies. Now you have 4 dimes and 12 pennies. Pay 2 dimes and 8 pennies. Left: 2 dimes and 4 pennies (24¢).</p>
            </div>
        `,
        taskInstructions: "Practice subtracting two-digit numbers with decomposition.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Borrowing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these problems. Show your borrowing work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 34 - 18 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) 53 - 27 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) 41 - 19 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) 62 - 35 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e) 80 - 43 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Show Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For problem 45 - 28, show the borrowing steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: Look at ones: ___ - ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 2: Borrow 1 ten: ___ tens become ___ tens</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 3: Ones become: ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 4: Subtract ones: ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 5: Subtract tens: ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Answer: ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve using decomposition:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>There are 54 students in the cafeteria. 28 leave for recess. How many are still in the cafeteria?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;">A baker has 71 cookies. He sells 39. How many cookies are left?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice 5 subtraction problems that need borrowing. Show your work for each problem.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Whole Numbers Vertically Up to 999",
        lessonContent: `
            <p>Today we'll learn how to subtract three-digit numbers by writing them vertically!</p>
            <p><strong>Key Question:</strong> How do we set up subtraction problems with numbers up to 999?</p>
            <p><strong>Introduction:</strong> When subtracting larger numbers, it helps to write them vertically (stacked on top of each other). This helps us subtract one place value at a time: ones, then tens, then hundreds.</p>
            <p><strong>Vertical Subtraction Steps:</strong></p>
            <ol>
                <li>Write the bigger number on top</li>
                <li>Write the smaller number below it - line up the ones, tens, and hundreds</li>
                <li>Draw a line under the bottom number</li>
                <li>Subtract the ones column first</li>
                <li>Subtract the tens column next</li>
                <li>Subtract the hundreds column last</li>
            </ol>
            <p><strong>Example:</strong> 456 - 123</p>
            <div style="font-family: monospace; font-size: 18px; text-align: center; margin: 10px 0;">
                456<br>
                - 123<br>
                ─────<br>
                333
            </div>
            <ul>
                <li>Ones: 6 - 3 = 3</li>
                <li>Tens: 5 - 2 = 3</li>
                <li>Hundreds: 4 - 1 = 3</li>
            </ul>
            <p><strong>Remember:</strong> Always start from the right (ones column) and move left!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Place Value Chart</div>
                <p>| Hundreds | Tens | Ones |<br>
                |    4     |  5   |  6   |<br>
                |  - 1     |  2   |  3   |<br>
                |    3     |  3   |  3   |</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Column by Column</div>
                <p>789 - 456:<br>
                9 - 6 = 3 (ones)<br>
                8 - 5 = 3 (tens)<br>
                7 - 4 = 3 (hundreds)<br>
                Answer: 333</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Real Numbers</div>
                <p>If you have 567 stickers and give away 234, you have 333 stickers left. Write it vertically to check!</p>
            </div>
        `,
        taskInstructions: "Practice vertical subtraction with three-digit numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vertical Subtraction Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these problems vertically:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 345 - 123 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) 678 - 456 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) 789 - 234 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) 567 - 321 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e) 999 - 555 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Set It Up Vertically</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rewrite and solve vertically:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 475 - 142</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>b) 836 - 514</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> This problem was solved wrong. Find and fix the mistake:
                    <div style="font-family: monospace; font-size: 16px; margin: 10px 20px;">
                        658<br>
                        - 324<br>
                        ─────<br>
                        334
                    </div>
                    <div>What is the correct answer? ___</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 three-digit subtraction problems vertically. Solve them and show your work.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Whole Numbers Up to 999 by Expanded Notation",
        lessonContent: `
            <p>Today we'll learn how to subtract using expanded notation - breaking numbers into hundreds, tens, and ones!</p>
            <p><strong>Key Question:</strong> How can expanded notation help us subtract large numbers?</p>
            <p><strong>Introduction:</strong> Expanded notation means writing a number as the sum of its place values. For example, 456 = 400 + 50 + 6. This helps us subtract each place value separately.</p>
            <p><strong>Subtraction Using Expanded Notation Steps:</strong></p>
            <ol>
                <li>Write both numbers in expanded form</li>
                <li>Subtract the hundreds: ___ - ___</li>
                <li>Subtract the tens: ___ - ___</li>
                <li>Subtract the ones: ___ - ___</li>
                <li>Add the results back together</li>
            </ol>
            <p><strong>Example:</strong> 586 - 243</p>
            <ul>
                <li>Expanded form: 586 = 500 + 80 + 6</li>
                <li>Expanded form: 243 = 200 + 40 + 3</li>
                <li>Subtract hundreds: 500 - 200 = 300</li>
                <li>Subtract tens: 80 - 40 = 40</li>
                <li>Subtract ones: 6 - 3 = 3</li>
                <li>Add: 300 + 40 + 3 = 343</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Break It Down</div>
                <p>748 - 326 = ?<br>
                700 + 40 + 8<br>
                - 300 + 20 + 6<br>
                400 + 20 + 2 = 422</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Big Number Example</div>
                <p>937 - 412 = (900-400) + (30-10) + (7-2) = 500 + 20 + 5 = 525</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Classroom Example</div>
                <p>If a school has 845 students and 423 are girls, how many are boys?<br>
                800 + 40 + 5<br>
                - 400 + 20 + 3<br>
                400 + 20 + 2 = 422 boys</p>
            </div>
        `,
        taskInstructions: "Practice subtraction using expanded notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Expanded Form Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers in expanded form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 472 = ___ + ___ + ___</div>
                        <div>b) 685 = ___ + ___ + ___</div>
                        <div>c) 903 = ___ + ___ + ___</div>
                        <div>d) 254 = ___ + ___ + ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Subtract Using Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve using expanded notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 567 - 234 =</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>b) 789 - 456 =</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>c) 648 - 325 =</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Show Your Expanded Work</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For 876 - 543, show each step:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: Write in expanded form</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 2: Subtract hundreds: ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 3: Subtract tens: ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 4: Subtract ones: ___ - ___ = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Step 5: Add: ___ + ___ + ___ = ___</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Choose 5 three-digit subtraction problems. Solve each using expanded notation. Show all steps.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Whole Numbers Up to 999 Without Regrouping",
        lessonContent: `
            <p>Today we'll review subtracting three-digit numbers without regrouping (no borrowing needed)!</p>
            <p><strong>Key Question:</strong> When do we not need to borrow when subtracting?</p>
            <p><strong>Introduction:</strong> Sometimes when we subtract, every digit in the top number is bigger than the digit below it. That means we can subtract without regrouping!</p>
            <p><strong>Subtraction Without Regrouping Rules:</strong></p>
            <ul>
                <li>Look at each column (hundreds, tens, ones)</li>
                <li>If the top digit is bigger than or equal to the bottom digit, we don't need to borrow</li>
                <li>Subtract each column starting from the right</li>
            </ul>
            <p><strong>Example:</strong> 789 - 234</p>
            <div style="font-family: monospace; font-size: 18px; text-align: center; margin: 10px 0;">
                789<br>
                - 234<br>
                ─────<br>
                555
            </div>
            <ul>
                <li>Ones: 9 - 4 = 5</li>
                <li>Tens: 8 - 3 = 5</li>
                <li>Hundreds: 7 - 2 = 5</li>
            </ul>
            <p><strong>Check Your Work:</strong> Add your answer to the bottom number. It should equal the top number! 555 + 234 = 789 ✓</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> No Borrowing Needed</div>
                <p>568 - 214 = 354 because 8>4, 6>1, 5>2. All columns subtract easily!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Quick Check</div>
                <p>Always check your subtraction by adding: difference + subtrahend = minuend.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Week Review</div>
                <p>This week we learned 4 ways to subtract: tiles, decomposition, vertically, and expanded notation. Today we practice without regrouping!</p>
            </div>
        `,
        taskInstructions: "Review all subtraction methods and complete the mixed practice.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Without Regrouping Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these without regrouping:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 567 - 234 = ___</div>
                        <div>b) 897 - 456 = ___</div>
                        <div>c) 645 - 321 = ___</div>
                        <div>d) 978 - 567 = ___</div>
                        <div>e) 854 - 432 = ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Which Method Would You Use?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each problem, tell which method is best (tiles, decomposition, vertical, or expanded):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5 - 2 = ___ → Method: _________</div>
                        <div>b) 52 - 28 = ___ → Method: _________</div>
                        <div>c) 456 - 123 = ___ → Method: _________</div>
                        <div>d) 586 - 243 = ___ → Method: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Review</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these problems using any method you like:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 9 - 4 = ___</div>
                        <div>b) 43 - 19 = ___</div>
                        <div>c) 765 - 342 = ___</div>
                        <div>d) 891 - 670 = ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A library has 987 books. Students check out 543 books. How many books are left?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;">There are 846 seats in an auditorium. 412 seats are filled. How many seats are empty?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which subtraction method was your favorite this week? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a subtraction poster showing all four methods we learned this week. Include one example for each method.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathsWeek4);
    console.log("grade2-maths-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathsWeek4);
    console.log("grade2-maths-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathsWeek4',
        metadata: grade2MathsWeek4.metadata,
        days: grade2MathsWeek4
    });
    console.log("grade2-maths-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathsWeek4 = grade2MathsWeek4;
console.log("grade2-maths-week4.js loaded and registered successfully");