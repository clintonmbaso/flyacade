// Grade 2 Math - Week 3 Data
const grade2MathWeek3 = {
    metadata: {
        grade: 2,
        subject: "Mathematics",
        week: 3,
        title: "Introduction to Subtraction",
        description: "Learning subtraction concepts including single-digit, two-digit, and regrouping"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Subtraction",
        subtopic: "Subtracting Single-Digit Numbers",
        lessonContent: `
            <p>Today we will learn about subtraction! Subtraction is the opposite of addition. It helps us find out how many are left when we take some away.</p>
            <p><strong>Key Concept:</strong> Subtraction means taking away or removing something from a group. When we subtract, we find the difference between two numbers.</p>
            <p>When we write subtraction problems, we use the <strong>- sign</strong> (minus) and <strong>= sign</strong> (equals).</p>
            <p><strong>Remember:</strong> You can use counters, objects, or your fingers to help you subtract!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 5 - 2 = 3</div>
                <p>Start with 5 counters. Remove 2 counters. How many are left? 3!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 8 - 3 = 5</div>
                <p>Show 8 fingers. Put down 3 fingers. Count how many are still up: 5 fingers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 7 - 7 = 0</div>
                <p>When we take away all of something, we have zero left!</p>
            </div>
        `,
        taskInstructions: "Solve the following subtraction problems. Use counters or your fingers if you need help!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 6 - 2 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 9 - 4 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 7 - 3 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 10 - 5 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw 8 stars - cross out 3 stars = <span class="answer-space"></span> stars left
                <div class="drawing-area"></div>
            </div>
        `,
        homework: "Practice subtraction at home. Take 10 small objects (beans, buttons, etc.) and practice taking different amounts away. Record your subtraction sentences.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Subtracting Two-Digit Numbers",
        subtopic: "Without Regrouping",
        lessonContent: `
            <p>Today we will learn to subtract two-digit numbers! We'll start with problems that don't need regrouping (borrowing).</p>
            <p><strong>Strategy:</strong> Subtract the ones place first, then subtract the tens place. Always work from right to left!</p>
            <p><strong>Steps:</strong></p>
            <ol>
                <li>Write the numbers neatly in columns</li>
                <li>Subtract the ones column first</li>
                <li>Subtract the tens column next</li>
                <li>Write your answer</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 45 - 23 = 22</div>
                <p>Ones: 5 - 3 = 2</p>
                <p>Tens: 4 - 2 = 2</p>
                <p>Answer: 22</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 78 - 34 = 44</div>
                <p>Ones: 8 - 4 = 4</p>
                <p>Tens: 7 - 3 = 4</p>
                <p>Answer: 44</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 56 - 12 = 44</div>
                <p>Ones: 6 - 2 = 4</p>
                <p>Tens: 5 - 1 = 4</p>
                <p>Answer: 44</p>
            </div>
        `,
        taskInstructions: "Solve these two-digit subtraction problems. Remember to subtract ones first, then tens!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 34 - 11 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 67 - 25 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 89 - 47 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 53 - 22 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 76 - 31 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Challenge: 98 - 45 = <span class="answer-space"></span>
            </div>
        `,
        homework: "Write 5 two-digit subtraction problems without regrouping and solve them. Check your work by adding your answer to the number you subtracted.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Subtraction with Regrouping", 
        subtopic: "Two-Digit Numbers with Borrowing",
        lessonContent: `
            <p>Today we learn a special subtraction skill called regrouping (sometimes called borrowing). We use this when the top number in the ones column is smaller than the bottom number.</p>
            <p><strong>What is regrouping?</strong> When we can't subtract in the ones place, we "borrow" 1 ten from the tens place and turn it into 10 ones!</p>
            <p><strong>Steps for regrouping:</strong></p>
            <ol>
                <li>Look at the ones column</li>
                <li>If the top number is smaller, borrow 1 from the tens place</li>
                <li>Cross out the tens digit, make it 1 less</li>
                <li>Add 10 to the ones digit</li>
                <li>Now subtract!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: 42 - 17</div>
                <p><strong>Step 1:</strong> Can we do 2 - 7? No! 2 is smaller than 7.</p>
                <p><strong>Step 2:</strong> Borrow 1 ten from the 4 tens. Now we have 3 tens left.</p>
                <p><strong>Step 3:</strong> The borrowed ten becomes 10 ones. Add to the 2 ones: 2 + 10 = 12 ones.</p>
                <p><strong>Step 4:</strong> Subtract ones: 12 - 7 = 5</p>
                <p><strong>Step 5:</strong> Subtract tens: 3 - 1 = 2</p>
                <p><strong>Answer:</strong> 42 - 17 = 25</p>
            </div>
        `,
        taskInstructions: "Solve these subtraction problems with regrouping. Show your work by writing the borrowing steps!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 53 - 28 = <span class="answer-space"></span>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 71 - 45 = <span class="answer-space"></span>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 60 - 34 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 82 - 59 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create your own regrouping problem:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Practice 5 subtraction problems with regrouping. Draw base-ten blocks to show the borrowing process.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Subtraction Review", 
        subtopic: "Mixed Practice",
        lessonContent: `
            <p>Let's review everything we've learned about subtraction this week. You're becoming subtraction experts!</p>
            <p>We've learned three types of subtraction: single-digit, two-digit without regrouping, and two-digit with regrouping.</p>
            <p><strong>Important reminder:</strong> Always check if you need to regroup by looking at the ones column first!</p>
            <p><strong>Tip:</strong> You can check your subtraction by adding your answer to the number you subtracted. It should equal the original number.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Checking your work</div>
                <p>For 42 - 17 = 25, check by:</p>
                <p>25 + 17 = 42 ✓</p>
                <p>If the sum equals the original number, your answer is correct!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: When to regroup</div>
                <p>76 - 29 = ?</p>
                <p>Look at ones: 6 - 9 → need to regroup!</p>
                <p>76 becomes 6 tens and 16 ones</p>
                <p>16 - 9 = 7, 6 - 2 = 4</p>
                <p>Answer: 47</p>
            </div>
        `,
        taskInstructions: "Complete all the problems below. Identify which problems need regrouping!",
        taskContent: `
            <div class="content-box">
                <p><strong>Single-Digit Subtraction:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 9 - 5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 10 - 3 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Two-Digit (No Regrouping):</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> 58 - 27 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 86 - 42 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Two-Digit (With Regrouping):</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> 63 - 28 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 91 - 47 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problem:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Sarah has 52 stickers. She gives 38 stickers to her friend. How many stickers does Sarah have left? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Write and solve your own word problem that requires regrouping:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Teach someone at home how to solve a subtraction problem with regrouping. Explain the borrowing process step by step!",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Subtraction Week 3",
        revisionContent: `
            <p>Congratulations! You've completed Week 3 of Subtraction. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Subtracting single-digit numbers</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Subtracting two-digit numbers without regrouping</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Subtracting two-digit numbers with regrouping (borrowing)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Checking subtraction answers by adding</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Solving subtraction word problems</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Subtraction Vocabulary:</strong></p>
                <p><strong>Minus (-):</strong> The subtraction sign</p>
                <p><strong>Difference:</strong> The answer to a subtraction problem</p>
                <p><strong>Regrouping/Borrowing:</strong> When we take 1 ten and turn it into 10 ones</p>
                <p><strong>Ones/Tens:</strong> The place values in two-digit numbers</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 45 - 13 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 67 - 29 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> I have 84 marbles. I lose 27 marbles. How many do I have left? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Explain when you need to regroup in subtraction:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most interesting thing you learned about subtraction this week?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a picture showing 35 - 18 using base-ten blocks:
                    <div class="drawing-area"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create 3 subtraction problems - one single-digit, one two-digit without regrouping, and one two-digit with regrouping. Solve them and check your work.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathWeek3);
    console.log("grade2math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathWeek3);
    console.log("grade2math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathWeek3',
        metadata: grade2MathWeek3.metadata,
        days: grade2MathWeek3
    });
    console.log("grade2math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathWeek3 = grade2MathWeek3;
console.log("grade2math-week3.js loaded and registered successfully");