// Grade 3 Math - Week 4 Data
const grade3MathWeek4 = {
    metadata: {
        grade: 3,
        subject: "Mathematics",
        week: 4,
        title: "Subtraction Foundations",
        description: "Introduction to subtraction with single-digit, two-digit, and three-digit numbers, including regrouping and word problems"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Subtraction",
        subtopic: "Basic subtraction with single-digit numbers",
        lessonContent: `
            <p>Today we will learn about subtraction, which is the opposite of addition. Subtraction helps us find out how many are left when we take some away.</p>
            <p><strong>Key Concept:</strong> Subtraction means taking away or finding the difference between numbers. When we subtract, we start with one number and remove some to find what's left.</p>
            <p>When we write subtraction problems, we use the <strong>- sign</strong> (minus) and <strong>= sign</strong> (equals).</p>
            <p><strong>Remember:</strong> You can use objects like blocks, counters, or draw pictures to help you subtract!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 5 - 2 = 3</div>
                <p>Start with 5 objects, take away 2 objects, and count what's left. You have 3 left!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 8 - 3 = 5</div>
                <p>Imagine you have 8 cookies and you eat 3 cookies. How many cookies are left? Count: 5 cookies left!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 9 - 4 = 5</div>
                <p>Subtraction is not the same as addition. Order matters in subtraction! 9 - 4 is different from 4 - 9.</p>
            </div>
        `,
        taskInstructions: "Solve the following subtraction problems. Use objects or draw pictures if you need help!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 7 - 2 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 9 - 5 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 6 - 3 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 8 - 4 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw 9 stars - 2 stars = <span class="answer-space"></span> stars
                <div class="drawing-area"></div>
            </div>
        `,
        homework: "Practice subtraction at home. Count how many toys you have, then pretend to give some away. How many are left?",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Subtracting Two-Digit Numbers",
        subtopic: "Subtraction without and with regrouping",
        lessonContent: `
            <p>Today we will learn how to subtract two-digit numbers. Some problems will be easy, and some will require regrouping (borrowing).</p>
            <p><strong>Remember:</strong> Always start subtracting from the ones place (right side) first, then move to the tens place.</p>
            <p><strong>Regrouping Strategy:</strong> When the top number is smaller than the bottom number in a column, we need to borrow from the next column.</p>
            <p>Example: For 42 - 17, we can't do 2 - 7, so we borrow 1 ten from the tens column.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 35 - 12 = 23</div>
                <p>No regrouping needed: 5 - 2 = 3 (ones), 3 - 1 = 2 (tens). Answer: 23</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 42 - 17 = 25</div>
                <p>With regrouping: Can't do 2 - 7, so borrow 1 ten from 4 tens. 12 - 7 = 5, 3 - 1 = 2. Answer: 25</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 50 - 28 = 22</div>
                <p>Regrouping needed: 0 - 8 needs borrowing. 10 - 8 = 2, 4 - 2 = 2. Answer: 22</p>
            </div>
        `,
        taskInstructions: "Solve these two-digit subtraction problems. Show your work and remember to regroup when needed!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 48 - 15 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 63 - 27 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 75 - 38 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 56 - 19 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 90 - 45 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Challenge: 81 - 57 = <span class="answer-space"></span>
            </div>
        `,
        homework: "Create 5 two-digit subtraction problems. Make 2 that need regrouping and 3 that don't. Solve them!",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Regrouping with Three-Digit Subtraction", 
        subtopic: "Subtracting three-digit numbers with regrouping",
        lessonContent: `
            <p>Today we will tackle three-digit subtraction! The process is similar to two-digit subtraction, but we might need to regroup from the hundreds or tens places.</p>
            <p><strong>Strategy:</strong> Always start from the ones place, then tens, then hundreds. Regroup when needed!</p>
            <p><strong>Steps for three-digit subtraction:</strong></p>
            <ol>
                <li>Subtract the ones column</li>
                <li>Subtract the tens column</li>
                <li>Subtract the hundreds column</li>
                <li>Regroup if the top digit is smaller than the bottom digit</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: 352 - 168</div>
                <p><strong>Step 1 (ones):</strong> 2 - 8 → can't do it. Borrow from tens: 12 - 8 = 4</p>
                <p><strong>Step 2 (tens):</strong> 4 (after borrowing) - 6 → can't do it. Borrow from hundreds: 14 - 6 = 8</p>
                <p><strong>Step 3 (hundreds):</strong> 2 (after borrowing) - 1 = 1</p>
                <p><strong>Answer:</strong> 352 - 168 = 184</p>
            </div>
        `,
        taskInstructions: "Solve these three-digit subtraction problems. Be careful with regrouping! Show all your work.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 245 - 123 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 417 - 258 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 600 - 327 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 783 - 496 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Show your work for problem #2 here:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Find three-digit numbers in your home (like on food packages or books). Create subtraction problems with them and solve.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Subtraction Word Problems", 
        subtopic: "Applying subtraction to real-life situations",
        lessonContent: `
            <p>Today we will use our subtraction skills to solve real-world problems! Word problems help us understand how math works in everyday life.</p>
            <p><strong>Strategy:</strong> Read carefully, identify what's being subtracted, and find the numbers.</p>
            <p><strong>Steps to solve subtraction word problems:</strong></p>
            <ol>
                <li>Read the problem slowly and carefully</li>
                <li>Find the numbers in the story</li>
                <li>Identify what is being taken away</li>
                <li>Write the subtraction sentence</li>
                <li>Solve and check if your answer makes sense</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Word Problem</div>
                <p><strong>Story:</strong> The library had 347 books. 129 books were checked out. How many books are left in the library?</p>
                <p><strong>Step 1:</strong> Find the numbers: 347 books total, 129 taken away</p>
                <p><strong>Step 2:</strong> Write the number sentence: 347 - 129 = ?</p>
                <p><strong>Step 3:</strong> Solve: 347 - 129 = 218 books</p>
                <p><strong>Answer:</strong> There are 218 books left in the library.</p>
            </div>
        `,
        taskInstructions: "Solve these subtraction word problems. Show your work and write the subtraction sentence for each!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Sarah saved $245. She spent $78 on a new backpack. How much money does she have left? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> A farmer had 563 apples. He sold 287 at the market. How many apples does he have now? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> There were 400 students at school. 156 went on a field trip. How many students are still at school? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create your own subtraction word problem using three-digit numbers:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Find 3 real-life subtraction situations at home. Write them as word problems and solve them.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Review of Subtraction",
        subtopic: "Comprehensive subtraction review",
        revisionContent: `
            <p>Congratulations! You've completed Week 4 of Subtraction. Let's review everything we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Basic subtraction with single-digit numbers</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Subtracting two-digit numbers with and without regrouping</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Subtracting three-digit numbers with regrouping</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Solving subtraction word problems</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Applying subtraction to real-life situations</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Subtraction Vocabulary:</strong></p>
                <p><strong>Minus (-):</strong> The subtraction sign</p>
                <p><strong>Difference:</strong> The answer to a subtraction problem</p>
                <p><strong>Regrouping/Borrowing:</strong> When we take from one column to help another</p>
                <p><strong>Subtraction sentence:</strong> A math problem written with numbers and the minus sign</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 9 - 4 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 56 - 28 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 425 - 197 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A store had 312 cans of soda. They sold 185 cans. How many are left? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What was the easiest part of subtraction this week?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most challenging? How did you overcome it?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Create a subtraction problem that needs regrouping in two places:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create 5 subtraction problems of different types (single-digit, two-digit with regrouping, three-digit, and word problems) for your family to solve.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathWeek4);
    console.log("grade3-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathWeek4);
    console.log("grade3-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathWeek4',
        metadata: grade3MathWeek4.metadata,
        days: grade3MathWeek4
    });
    console.log("grade3-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathWeek4 = grade3MathWeek4;
console.log("grade3-math-week4.js loaded and registered successfully");