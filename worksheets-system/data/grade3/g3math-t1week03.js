// Grade 3 Math - Week 3 Data
const grade3MathWeek3 = {
    metadata: {
        grade: 3,
        subject: "Mathematics",
        week: 3,
        title: "Introduction to Addition",
        description: "Building addition skills with single-digit, two-digit numbers, and word problems"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Addition",
        subtopic: "Adding Single-Digit Numbers",
        lessonContent: `
            <p>Welcome to Week 3 of Grade 3 Math! This week we'll build our addition skills.</p>
            <p><strong>Key Concept:</strong> Addition is combining two or more numbers to find the total or sum.</p>
            <p>We use the <strong>+ symbol</strong> (plus sign) to show addition.</p>
            <p><strong>Example:</strong> 5 + 3 = 8 (five plus three equals eight)</p>
            <p><strong>Remember:</strong> You can use manipulatives like counters or cubes to help visualize addition problems!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 7 + 2 = 9</div>
                <p>Start with 7 counters, add 2 more. Count all counters: 1, 2, 3, 4, 5, 6, 7, 8, 9!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 8 + 4 = 12</div>
                <p>Show 8 fingers (both hands minus 2), add 4 more by counting up: 9, 10, 11, 12!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 6 + 5 = 11</div>
                <p>This uses the "make 10" strategy: 6 + 4 = 10, then add 1 more = 11!</p>
            </div>
        `,
        taskInstructions: "Solve the following addition problems. Use counters or number cards if you need help!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 9 + 3 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 7 + 6 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 8 + 5 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 4 + 9 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Use counters to show 6 + 7 = <span class="answer-space"></span>
                <div class="drawing-area"></div>
            </div>
        `,
        homework: "Practice adding single-digit numbers. Create 5 addition problems using numbers 0-9 and solve them.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Adding Two-Digit Numbers",
        subtopic: "Introduction to Carrying/Regrouping",
        lessonContent: `
            <p>Today we will learn how to add two-digit numbers. This is an important skill for bigger math problems!</p>
            <p><strong>Key Concept:</strong> When adding two-digit numbers, we add the ones place first, then the tens place.</p>
            <p><strong>Carrying/Regrouping:</strong> When the ones place adds up to 10 or more, we "carry" the extra ten to the tens place.</p>
            <p>Example with base-ten blocks: 25 + 17 = 42</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 23 + 14 = 37</div>
                <p>No carrying needed: 3 + 4 = 7 (ones), 2 + 1 = 3 (tens). Answer: 37</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 28 + 15 = 43</div>
                <p>Carrying needed: 8 + 5 = 13 (write 3, carry 1), 2 + 1 + 1 = 4. Answer: 43</p>
                <p style="font-family: monospace; margin-left: 20px;">
                  ¹<br>
                  28<br>
                +15<br>
                ---<br>
                  43
                </p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 36 + 27 = 63</div>
                <p>6 + 7 = 13 (write 3, carry 1), 3 + 2 + 1 = 6. Answer: 63</p>
            </div>
        `,
        taskInstructions: "Solve these two-digit addition problems. Show your work and remember to carry when needed!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 34 + 25 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 47 + 18 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 56 + 29 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 63 + 27 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 39 + 45 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Challenge: 78 + 26 = <span class="answer-space"></span>
            </div>
        `,
        homework: "Find 3 examples of two-digit addition in real life (prices, scores, etc.) and solve them.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Adding Three or More Numbers", 
        subtopic: "Multiple Addends",
        lessonContent: `
            <p>Today we will learn how to add three or more numbers together. This builds on our addition skills!</p>
            <p><strong>Strategy:</strong> When adding multiple numbers, add two at a time, then add the next number to the sum.</p>
            <p><strong>Tip:</strong> Look for numbers that add up to 10 first (like 3 + 7 or 6 + 4). This makes adding easier!</p>
            <p><strong>Example:</strong> 4 + 3 + 6 = ? First add 4 + 6 = 10, then add 3 = 13</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: 5 + 2 + 7 = 14</div>
                <p><strong>Method 1:</strong> Add in order: 5 + 2 = 7, then 7 + 7 = 14</p>
                <p><strong>Method 2:</strong> Look for 10: 5 + 7 = 12, then 12 + 2 = 14</p>
                <p>Both methods give the same answer!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: 8 + 4 + 6 + 2 = 20</div>
                <p>Look for pairs that make 10: 8 + 2 = 10 and 4 + 6 = 10</p>
                <p>Then add: 10 + 10 = 20</p>
            </div>
        `,
        taskInstructions: "Solve these addition problems with three or more numbers. Try different strategies!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 3 + 4 + 5 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 7 + 2 + 6 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 9 + 1 + 8 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 5 + 3 + 7 + 2 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 4 + 6 + 8 + 1 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Create your own problem with four numbers:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 groups of items at home (like books, toys, fruits). Count each group and find the total.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Word Problems and Real-Life Addition", 
        subtopic: "Applying Addition Skills",
        lessonContent: `
            <p>Today we'll apply our addition skills to solve word problems and real-life situations!</p>
            <p><strong>Problem-Solving Steps:</strong></p>
            <ol>
                <li>Read the problem carefully</li>
                <li>Identify the numbers and what needs to be added</li>
                <li>Write the addition sentence</li>
                <li>Solve the problem</li>
                <li>Check your answer - does it make sense?</li>
            </ol>
            <p><strong>Real-Life Connection:</strong> We use addition when shopping, cooking, playing games, and many other activities!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Word Problem</div>
                <p><strong>Situation:</strong> Sarah saved $15 last week and $23 this week. How much money has she saved in total?</p>
                <p><strong>Step 1:</strong> Find numbers: $15 and $23</p>
                <p><strong>Step 2:</strong> Write: 15 + 23 = ?</p>
                <p><strong>Step 3:</strong> Solve: 15 + 23 = 38</p>
                <p><strong>Answer:</strong> Sarah has saved $38 total.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Real-Life Addition</div>
                <p><strong>Situation:</strong> A pizza has 8 slices. 3 people eat 2 slices each. How many slices are eaten?</p>
                <p><strong>Solution:</strong> 2 + 2 + 2 = 6 slices</p>
                <p>Or using multiplication: 3 × 2 = 6 slices</p>
            </div>
        `,
        taskInstructions: "Solve these word problems. Show your work and write the addition sentence for each!",
        taskContent: `
            <div class="content-box">
                <p><strong>Word Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Tom has 24 baseball cards. He buys 17 more. How many cards does he have now? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> There are 15 students in Class A and 18 students in Class B. How many students total? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A book has 45 pages on Monday and 38 pages on Tuesday. How many pages read total? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Real-Life Scenario:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> You buy a toy for $12 and a book for $8. How much do you spend? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Create Your Own:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a real-life word problem using addition:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Write 2 addition word problems from your daily life and solve them.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Review of Addition",
        subtopic: "Week 3 Addition Review",
        revisionContent: `
            <p>Congratulations! You've completed Week 3 of Addition. Let's review everything we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding single-digit numbers with strategies</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding two-digit numbers with carrying/regrouping</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding three or more numbers efficiently</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Solving addition word problems</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Applying addition to real-life situations</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Addition Vocabulary:</strong></p>
                <p><strong>Addends:</strong> The numbers being added together</p>
                <p><strong>Sum:</strong> The answer to an addition problem</p>
                <p><strong>Carrying/Regrouping:</strong> Moving extra tens to the next place value</p>
                <p><strong>Place Value:</strong> The value of a digit based on its position (ones, tens)</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 9 + 8 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 47 + 26 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 6 + 5 + 4 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Maria read 28 pages on Monday and 35 pages on Tuesday. How many total pages? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What addition strategy worked best for you this week?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a picture showing 24 + 17 using base-ten blocks:
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create a poster showing different addition strategies you learned this week.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathWeek3);
    console.log("grade3math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathWeek3);
    console.log("grade3math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathWeek3',
        metadata: grade3MathWeek3.metadata,
        days: grade3MathWeek3
    });
    console.log("grade3math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathWeek3 = grade3MathWeek3;
console.log("grade3math-week3.js loaded and registered successfully");