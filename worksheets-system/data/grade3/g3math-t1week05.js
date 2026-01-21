// Grade 3 Math - Week 5 Data
const grade3MathWeek5 = {
    metadata: {
        grade: 3,
        subject: "Mathematics",
        week: 5,
        title: "Addition and Subtraction Mastery",
        description: "Review and extension of addition and subtraction with single, two, and three-digit numbers"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Addition and Subtraction",
        subtopic: "Review of Single-Digit Operations",
        lessonContent: `
            <p>Welcome back to addition and subtraction! Today we'll review these important math operations and practice with single-digit numbers.</p>
            <p><strong>Key Concepts:</strong></p>
            <p><strong>Addition (+):</strong> Combining numbers to find the total or sum.</p>
            <p><strong>Subtraction (-):</strong> Taking away or finding the difference between numbers.</p>
            <p><strong>Remember:</strong> Addition and subtraction are opposite operations. If 5 + 3 = 8, then 8 - 3 = 5!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Addition Example: 7 + 4 = 11</div>
                <p>Start with 7, count up 4 more: 8, 9, 10, 11. The sum is 11.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Subtraction Example: 9 - 2 = 7</div>
                <p>Start with 9, count back 2: 8, 7. The difference is 7.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Fact Family Example</div>
                <p>5 + 3 = 8<br>3 + 5 = 8<br>8 - 5 = 3<br>8 - 3 = 5</p>
                <p>These four facts make a fact family!</p>
            </div>
        `,
        taskInstructions: "Complete the following addition and subtraction problems. Remember to check your work!",
        taskContent: `
            <div class="content-box">
                <p><strong>Addition:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 8 + 6 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 9 + 7 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 5 + 8 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Subtraction:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 12 - 5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 15 - 8 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 14 - 9 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Mixed Practice:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> 7 + 8 - 3 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 13 - 6 + 4 = <span class="answer-space"></span>
                </div>
            </div>
        `,
        homework: "Create 5 addition and 5 subtraction problems using single-digit numbers. Solve them and check your answers.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Adding and Subtracting Two-Digit Numbers",
        subtopic: "With and Without Regrouping",
        lessonContent: `
            <p>Today we'll learn to add and subtract two-digit numbers. Sometimes we need to regroup (carry or borrow) when the digits don't work easily.</p>
            <p><strong>Regrouping Rules:</strong></p>
            <p><strong>Addition:</strong> When the sum in a column is 10 or more, we carry to the next column.</p>
            <p><strong>Subtraction:</strong> When we can't subtract in a column, we borrow from the next column.</p>
            <p><strong>Strategy:</strong> Always line up the numbers by place value (ones under ones, tens under tens).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Addition with Carrying</div>
                <p>  27<br>+ 45<br>---<br>  72</p>
                <p>7 + 5 = 12 (write 2, carry 1)<br>1 + 2 + 4 = 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Subtraction with Borrowing</div>
                <p>  63<br>- 28<br>---<br>  35</p>
                <p>Can't do 3 - 8, so borrow from 6<br>Now: 13 - 8 = 5<br>5 - 2 = 3</p>
            </div>
        `,
        taskInstructions: "Solve these two-digit problems. Show your work neatly with proper alignment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Addition:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 36 + 24 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 58 + 37 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 49 + 53 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Subtraction:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 72 - 38 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 95 - 47 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 81 - 29 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Mixed:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> 46 + 28 - 15 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 73 - 45 + 19 = <span class="answer-space"></span>
                </div>
            </div>
        `,
        homework: "Find 3 two-digit addition and 3 two-digit subtraction problems in real life (prices, scores, etc.). Solve them.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Word Problems with Addition and Subtraction", 
        subtopic: "Applying Operations to Real Situations",
        lessonContent: `
            <p>Today we'll use our addition and subtraction skills to solve word problems. This shows how math helps us in everyday life!</p>
            <p><strong>Problem-Solving Strategy:</strong></p>
            <ol>
                <li>Read the problem carefully (twice if needed!)</li>
                <li>Identify what you know and what you need to find</li>
                <li>Decide whether to add or subtract</li>
                <li>Write a number sentence</li>
                <li>Solve and check your answer</li>
                <li>Write your answer in a complete sentence</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Word Problem Example</div>
                <p><strong>Problem:</strong> Maria had 58 stickers. She gave 23 to her friend. Then she bought 15 more. How many stickers does she have now?</p>
                <p><strong>Step 1:</strong> Start: 58 stickers</p>
                <p><strong>Step 2:</strong> Gave away: 58 - 23 = 35 stickers</p>
                <p><strong>Step 3:</strong> Bought more: 35 + 15 = 50 stickers</p>
                <p><strong>Answer:</strong> Maria has 50 stickers now.</p>
            </div>
        `,
        taskInstructions: "Solve these word problems. Show all your work step by step.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> There are 47 students in Grade 3A and 39 students in Grade 3B. How many students are there in total? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> A book has 128 pages. Sam read 56 pages on Monday and 42 pages on Tuesday. How many pages does he have left to read? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Emma saved $75. She spent $28 on a toy and $15 on a book. How much money does she have left? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create your own two-step word problem involving addition and subtraction:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Write 2 word problems involving addition and subtraction of two-digit numbers. Bring them to class tomorrow.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Adding and Subtracting Three-Digit Numbers", 
        subtopic: "Extending to Hundreds Place",
        lessonContent: `
            <p>Let's extend our skills to three-digit numbers! The same regrouping rules apply, but now we work with hundreds, tens, and ones.</p>
            <p><strong>Important:</strong> Always line up numbers by place value. Hundreds under hundreds, tens under tens, ones under ones.</p>
            <p><strong>Regrouping with Three Digits:</strong></p>
            <ul>
                <li>You might need to borrow from the tens or hundreds</li>
                <li>You might need to carry to the tens or hundreds</li>
                <li>Check your work by adding in the opposite direction</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Three-Digit Addition</div>
                <p>  247<br>+ 368<br>---<br>  615</p>
                <p>7 + 8 = 15 (write 5, carry 1)<br>1 + 4 + 6 = 11 (write 1, carry 1)<br>1 + 2 + 3 = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Three-Digit Subtraction</div>
                <p>  502<br>- 267<br>---<br>  235</p>
                <p>Can't do 2 - 7, borrow from tens (but tens is 0!)<br>Borrow from hundreds: 5 becomes 4, 0 becomes 10<br>Borrow from tens: 10 becomes 9, 2 becomes 12<br>12 - 7 = 5<br>9 - 6 = 3<br>4 - 2 = 2</p>
            </div>
        `,
        taskInstructions: "Solve these three-digit problems. Take your time and check each step carefully.",
        taskContent: `
            <div class="content-box">
                <p><strong>Addition:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 325 + 148 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 467 + 239 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 583 + 327 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Subtraction:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 642 - 278 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 800 - 345 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 715 - 436 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> 459 + 287 - 136 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 600 - 234 + 189 = <span class="answer-space"></span>
                </div>
            </div>
        `,
        homework: "Practice three-digit addition and subtraction with 5 problems each. Use the regrouping rules we learned.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Review and Assessment of Addition and Subtraction",
        subtopic: "Comprehensive Week Review",
        revisionContent: `
            <p>Excellent work this week! Let's review everything we've learned about addition and subtraction.</p>
            <div class="content-box">
                <p><strong>This week we mastered:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Single-digit addition and subtraction review</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Two-digit operations with regrouping</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Solving word problems with combined operations</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Three-digit addition and subtraction</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Problem-solving strategies for real-life situations</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Key Vocabulary:</strong></p>
                <p><strong>Regrouping:</strong> Changing 10 ones into 1 ten, or 1 ten into 10 ones</p>
                <p><strong>Carrying:</strong> Moving extra value to the next column in addition</p>
                <p><strong>Borrowing:</strong> Taking value from the next column in subtraction</p>
                <p><strong>Sum:</strong> The answer to an addition problem</p>
                <p><strong>Difference:</strong> The answer to a subtraction problem</p>
                <p><strong>Place Value:</strong> The value of a digit based on its position (ones, tens, hundreds)</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Weekly Review Assessment:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 67 + 29 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 145 - 78 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 328 + 196 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 500 - 237 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A store had 250 apples. They sold 128 in the morning and 75 in the afternoon. How many apples are left? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What strategy helps you most when solving subtraction with borrowing?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a place value chart showing how to add 247 and 385:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend project: Create a math poster showing addition and subtraction strategies. Include examples and tips!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathWeek5);
    console.log("math-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathWeek5);
    console.log("math-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathWeek5',
        metadata: grade3MathWeek5.metadata,
        days: grade3MathWeek5
    });
    console.log("math-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathWeek5 = grade3MathWeek5;
console.log("math-week5.js loaded and registered successfully");