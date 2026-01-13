// Grade 2 Math - Week 2 Data
const grade2MathWeek1to4 = {
    metadata: {
        grade: 2,
        subject: "Mathematics",
        week: "2",
        title: "Introduction to Multi-Digit Addition",
        description: "Learning addition with single-digit to four-digit numbers without regrouping"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Addition",
        subtopic: "Adding single-digit numbers with visual aids",
        lessonContent: `
            <p>Welcome to Grade 2 Math! Today we'll build on your addition skills from Grade 1 and learn new ways to add numbers.</p>
            <p><strong>Key Concept:</strong> Addition is combining numbers to find a total. Today we'll use visual aids like counters and drawings to help us understand addition better.</p>
            <p><strong>Why visual aids help:</strong> When we can see the numbers as objects, it makes addition easier to understand and remember!</p>
            <p>We'll use counters, draw pictures, and work together to solve addition problems.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Using Counters</div>
                <p><strong>Problem:</strong> 5 + 3 = ?</p>
                <p><strong>Solution:</strong> Take 5 counters (🔴🔴🔴🔴🔴) and add 3 more (🔴🔴🔴). Count all: 1, 2, 3, 4, 5, 6, 7, 8</p>
                <p>So: 5 + 3 = 8</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Drawing Pictures</div>
                <p><strong>Problem:</strong> 4 + 6 = ?</p>
                <p><strong>Solution:</strong> Draw 4 circles (○○○○) then draw 6 more (○○○○○○). Count all circles: 10!</p>
                <p>So: 4 + 6 = 10</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Number Line Method</div>
                <p><strong>Problem:</strong> 7 + 2 = ?</p>
                <p><strong>Solution:</strong> Start at 7 on a number line. Jump forward 2 spaces: 8, 9</p>
                <p>So: 7 + 2 = 9</p>
            </div>
        `,
        taskInstructions: "Solve these addition problems using counters, drawings, or number lines. Show your work!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Use counters to solve: 6 + 3 = <span class="answer-space"></span>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw pictures to solve: 8 + 2 = <span class="answer-space"></span>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 7 + 4 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 9 + 1 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create your own addition problem using visual aids:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Find 10 small objects at home (like beans, buttons, or pebbles). Create and solve 3 addition problems using these objects.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Adding Two-Digit Numbers",
        subtopic: "Understanding place value in addition",
        lessonContent: `
            <p>Today we're going to learn how to add bigger numbers! We'll work with two-digit numbers (numbers from 10 to 99).</p>
            <p><strong>Key Concept:</strong> Place Value - Every two-digit number has tens and ones.</p>
            <p>For example: In the number 24, "2" is in the tens place (meaning 2 tens or 20) and "4" is in the ones place (meaning 4 ones or 4).</p>
            <p><strong>Strategy:</strong> When adding two-digit numbers, we add the ones first, then add the tens.</p>
            <p>We'll use base-10 blocks to help us visualize the numbers. A long rod represents 10 (a ten), and a small cube represents 1 (a one).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 23 + 14</div>
                <p><strong>Step 1:</strong> Show 23 with base-10 blocks: 2 rods (tens) and 3 cubes (ones)</p>
                <p><strong>Step 2:</strong> Add 14: 1 rod (ten) and 4 cubes (ones)</p>
                <p><strong>Step 3:</strong> Combine: 3 tens (2+1) and 7 ones (3+4)</p>
                <p><strong>Answer:</strong> 23 + 14 = 37</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 15 + 22</div>
                <p><strong>Step 1:</strong> Line up numbers by place value:</p>
                <pre style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
   Tens | Ones
     1  |  5
   + 2  |  2
   ----------
     3  |  7</pre>
                <p><strong>Answer:</strong> 15 + 22 = 37</p>
            </div>
        `,
        taskInstructions: "Solve these two-digit addition problems. Use base-10 blocks or draw place value charts to help you.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 13 + 24 = <span class="answer-space"></span>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 35 + 12 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 41 + 26 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 18 + 31 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 27 + 32 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Challenge: 45 + 23 = <span class="answer-space"></span>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Write 5 two-digit numbers on separate pieces of paper. Pair them up and solve the addition problems. Use drawings if needed.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Adding Three-Digit Numbers",
        subtopic: "Extending addition to hundreds",
        lessonContent: `
            <p>Today we're going even bigger! We'll learn how to add three-digit numbers (numbers from 100 to 999).</p>
            <p><strong>Key Concept:</strong> Three-digit numbers have hundreds, tens, and ones places.</p>
            <p>For example: In 325, "3" is hundreds (300), "2" is tens (20), and "5" is ones (5).</p>
            <p><strong>Strategy:</strong> When adding three-digit numbers, we:</p>
            <ol>
                <li>Add the ones first</li>
                <li>Add the tens next</li>
                <li>Add the hundreds last</li>
                <li>Always work from right to left (ones → tens → hundreds)</li>
            </ol>
            <p>Remember: We're still NOT regrouping (carrying over) yet. We'll learn that next week!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 123 + 254</div>
                <p><strong>Step 1:</strong> Line up by place value:</p>
                <pre style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
  Hundreds | Tens | Ones
      1    |   2  |   3
  +   2    |   5  |   4
  ----------------------
      3    |   7  |   7</pre>
                <p><strong>Answer:</strong> 123 + 254 = 377</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 312 + 135</div>
                <p><strong>Step 1:</strong> Add ones: 2 + 5 = 7</p>
                <p><strong>Step 2:</strong> Add tens: 1 + 3 = 4</p>
                <p><strong>Step 3:</strong> Add hundreds: 3 + 1 = 4</p>
                <p><strong>Answer:</strong> 312 + 135 = 447</p>
            </div>
        `,
        taskInstructions: "Solve these three-digit addition problems. Show your work step by step!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 124 + 253 = <span class="answer-space"></span>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 231 + 316 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 142 + 235 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 323 + 124 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create a place value chart for: 215 + 322
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Word Problem: A library has 123 story books and 254 science books. How many books total? <span class="answer-space"></span>
            </div>
        `,
        homework: "Find three-digit numbers in your environment (book pages, addresses, etc.). Create 3 addition problems with them and solve.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Adding Four-Digit Numbers",
        subtopic: "Working with thousands",
        lessonContent: `
            <p>Today we reach the highest level of addition in this unit - four-digit numbers! We'll learn to add numbers up to 9,999.</p>
            <p><strong>Key Concept:</strong> Four-digit numbers have thousands, hundreds, tens, and ones places.</p>
            <p>For example: In 2,345, "2" is thousands (2,000), "3" is hundreds (300), "4" is tens (40), and "5" is ones (5).</p>
            <p><strong>Strategy:</strong> The same rules apply, just with more places:</p>
            <ol>
                <li>Add the ones</li>
                <li>Add the tens</li>
                <li>Add the hundreds</li>
                <li>Add the thousands</li>
                <li>Always work from right to left</li>
            </ol>
            <p><strong>Remember:</strong> Use commas in your answers (1,234 not 1234) to make big numbers easier to read!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 1,234 + 1,111</div>
                <p><strong>Step 1:</strong> Line up by place value:</p>
                <pre style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
  Thousands | Hundreds | Tens | Ones
      1     |     2    |   3  |   4
  +   1     |     1    |   1  |   1
  ----------------------------------
      2     |     3    |   4  |   5</pre>
                <p><strong>Answer:</strong> 1,234 + 1,111 = 2,345</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 3,125 + 2,312</div>
                <p><strong>Step 1:</strong> Add ones: 5 + 2 = 7</p>
                <p><strong>Step 2:</strong> Add tens: 2 + 1 = 3</p>
                <p><strong>Step 3:</strong> Add hundreds: 1 + 3 = 4</p>
                <p><strong>Step 4:</strong> Add thousands: 3 + 2 = 5</p>
                <p><strong>Answer:</strong> 3,125 + 2,312 = 5,437</p>
            </div>
        `,
        taskInstructions: "Solve these four-digit addition problems. Remember to use commas in your answers!",
        taskContent: `
            <div class="content-box">
                <p><strong>Basic Four-Digit Addition:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 1,234 + 1,111 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 2,341 + 1,253 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 3,125 + 2,312 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A stadium has 2,345 seats on one side and 3,124 seats on the other. How many seats total? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Create Your Own:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write your own four-digit addition problem and solve it:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Review Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Solve: 1,000 + 2,345 + 123 + 4 = <span class="answer-space"></span>
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look for four-digit numbers in newspapers, magazines, or online. Write down 3 pairs and add them together.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Multi-Digit Addition Review",
        revisionContent: `
            <p>Congratulations! You've completed our multi-digit addition unit. Let's review everything we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Using visual aids (counters, drawings) for addition</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding two-digit numbers with place value</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding three-digit numbers (hundreds, tens, ones)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding four-digit numbers (thousands, hundreds, tens, ones)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Working from right to left in addition</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Using commas in four-digit numbers</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Place Value Vocabulary:</strong></p>
                <p><strong>Ones:</strong> The first place (rightmost), values 0-9</p>
                <p><strong>Tens:</strong> The second place, each digit equals 10 times its value</p>
                <p><strong>Hundreds:</strong> The third place, each digit equals 100 times its value</p>
                <p><strong>Thousands:</strong> The fourth place, each digit equals 1,000 times its value</p>
                <p><strong>Place Value Chart:</strong> A tool to organize numbers by their place values</p>
            </div>
            <div class="content-box">
                <p><strong>Addition Strategy:</strong> Always add:</p>
                <ol>
                    <li>Ones first</li>
                    <li>Tens next</li>
                    <li>Hundreds next</li>
                    <li>Thousands last</li>
                </ol>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Single-digit: 8 + 7 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Two-digit: 34 + 25 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Three-digit: 123 + 256 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Four-digit: 2,345 + 1,234 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Word Problem: A school has 1,234 students in Grades 1-2 and 1,567 students in Grades 3-5. How many students total? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a place value chart showing 1,234 + 2,345:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What was the most interesting thing you learned about adding big numbers?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend project: Create a poster showing how to add two-digit, three-digit, and four-digit numbers. Include examples and tips!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathWeek1to4);
    console.log("grade2math-week1-4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathWeek1to4);
    console.log("grade2math-week1-4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathWeek1to4',
        metadata: grade2MathWeek1to4.metadata,
        days: grade2MathWeek1to4
    });
    console.log("grade2math-week1-4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathWeek1to4 = grade2MathWeek1to4;
console.log("grade2math-week1-4.js loaded and registered successfully");