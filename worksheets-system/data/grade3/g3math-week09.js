// Grade 3 Math - Week 9 Data
const grade3MathWeek9 = {
    metadata: {
        grade: 3,
        subject: "Mathematics",
        week: 9,
        title: "Multiples and LCM",
        description: "Introduction to multiples, common multiples, and Least Common Multiple (LCM)"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Multiples",
        subtopic: "What are multiples?",
        lessonContent: `
            <p>Today we will learn about <strong>multiples</strong>. Multiples are an important building block in math!</p>
            <p><strong>Key Concept:</strong> A multiple is what we get when we multiply a number by any whole number. Think of it as "skip counting" by that number.</p>
            <p><strong>Examples of multiples of 3:</strong> 3, 6, 9, 12, 15... (We get these by doing 3×1, 3×2, 3×3, etc.)</p>
            <p>When we find multiples, we are listing numbers that can be divided evenly by our starting number.</p>
            <p><strong>Remember:</strong> Every number has an infinite number of multiples!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Multiples of 4</div>
                <p>Start with 4, then add 4 each time: 4, 8, 12, 16, 20, 24...</p>
                <p>These are all multiples of 4 because 4×1=4, 4×2=8, 4×3=12, and so on.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Multiples of 5</div>
                <p>Think of counting by 5s: 5, 10, 15, 20, 25, 30...</p>
                <p>These numbers are all multiples of 5.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Is 21 a multiple of 7?</div>
                <p>Yes! Because 7 × 3 = 21. If we can multiply 7 by a whole number to get 21, then 21 is a multiple of 7.</p>
            </div>
        `,
        taskInstructions: "Find the multiples for each number below. List at least 5 multiples for each.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Multiples of 2: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Multiples of 3: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Multiples of 6: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Is 18 a multiple of 4? <span class="answer-space"></span> (Yes/No) Why? <span class="answer-space" style="width: 200px;"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Circle the multiples of 5: 10, 14, 20, 23, 25, 31, 35
                <div class="answer-space" style="height: 30px;"></div>
            </div>
        `,
        homework: "Find 5 multiples of 8. Also, list 3 numbers that are NOT multiples of 4.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Finding Common Multiples",
        subtopic: "Multiples shared by two or more numbers",
        lessonContent: `
            <p>Today we will learn about <strong>common multiples</strong>. These are multiples that two or more numbers share.</p>
            <p><strong>Key Concept:</strong> A common multiple is a number that is a multiple of two or more different numbers.</p>
            <p><strong>How to find common multiples:</strong></p>
            <ol>
                <li>List the multiples of each number</li>
                <li>Look for numbers that appear in <em>all</em> the lists</li>
                <li>Those are your common multiples!</li>
            </ol>
            <p><strong>Example:</strong> Common multiples of 2 and 3 are numbers like 6, 12, 18, 24... because these appear in both the multiples of 2 AND multiples of 3.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Common multiples of 3 and 4</div>
                <p>Multiples of 3: 3, 6, 9, <strong>12</strong>, 15, 18, 21, <strong>24</strong>, 27...</p>
                <p>Multiples of 4: 4, 8, <strong>12</strong>, 16, 20, <strong>24</strong>, 28, 32...</p>
                <p>Common multiples: 12, 24, 36... (they keep going!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Common multiples of 2 and 5</div>
                <p>Multiples of 2: 2, 4, 6, 8, <strong>10</strong>, 12, 14, 16, 18, <strong>20</strong>...</p>
                <p>Multiples of 5: 5, <strong>10</strong>, 15, <strong>20</strong>, 25, 30...</p>
                <p>Common multiples: 10, 20, 30, 40...</p>
            </div>
        `,
        taskInstructions: "Find the first three common multiples for each pair of numbers below.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Common multiples of 2 and 4: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Common multiples of 3 and 6: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Common multiples of 4 and 5: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Common multiples of 3, 4, and 6: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Is 30 a common multiple of 5 and 6? <span class="answer-space"></span> Explain:
                <div class="answer-space" style="height: 40px;"></div>
            </div>
        `,
        homework: "Find the first 2 common multiples of 7 and 8. Also, find one common multiple of 2, 3, and 4.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Finding the LCM of Two Numbers", 
        subtopic: "Lowest Common Multiple",
        lessonContent: `
            <p>Today we will learn about the <strong>Lowest Common Multiple (LCM)</strong>. This is the smallest number that is a multiple of two or more numbers.</p>
            <p><strong>Key Concept:</strong> The LCM is the smallest common multiple shared by numbers. We use it a lot in math problems!</p>
            <p><strong>How to find the LCM of two numbers:</strong></p>
            <ol>
                <li>List the multiples of each number</li>
                <li>Find the common multiples</li>
                <li>The smallest common multiple is the LCM</li>
            </ol>
            <p><strong>Example:</strong> To find the LCM of 4 and 6:</p>
            <p>Multiples of 4: 4, 8, 12, 16, 20, 24...</p>
            <p>Multiples of 6: 6, 12, 18, 24, 30...</p>
            <p>Common multiples: 12, 24... → The smallest is <strong>12</strong>, so LCM(4,6) = 12</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: LCM of 3 and 5</div>
                <p>Multiples of 3: 3, 6, 9, 12, 15, 18...</p>
                <p>Multiples of 5: 5, 10, 15, 20, 25...</p>
                <p>First common multiple: <strong>15</strong></p>
                <p>So LCM(3,5) = 15</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: LCM of 6 and 8</div>
                <p>Multiples of 6: 6, 12, 18, 24, 30, 36...</p>
                <p>Multiples of 8: 8, 16, 24, 32, 40...</p>
                <p>First common multiple: <strong>24</strong></p>
                <p>So LCM(6,8) = 24</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: LCM of 4 and 12</div>
                <p>When one number is a multiple of the other, the LCM is the larger number.</p>
                <p>Since 12 is a multiple of 4, LCM(4,12) = 12</p>
            </div>
        `,
        taskInstructions: "Find the LCM for each pair of numbers below. Show your work!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> LCM of 2 and 7 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> LCM of 4 and 10 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> LCM of 5 and 8 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> LCM of 9 and 6 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Word Problem: Two buses arrive at a station. Bus A comes every 6 minutes, Bus B comes every 9 minutes. If they just left together, how many minutes until they arrive together again?
                <span class="answer-space"></span> minutes
            </div>
        `,
        homework: "Find the LCM of: a) 3 and 9 b) 5 and 7 c) 8 and 12",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Finding the LCM of Three or More Numbers", 
        subtopic: "Extending LCM to multiple numbers",
        lessonContent: `
            <p>Today we will extend what we know about LCM to three or more numbers. You're becoming an LCM expert!</p>
            <p><strong>Key Concept:</strong> We can find the LCM of three or more numbers using the same process—we just need to find the smallest number that is a multiple of ALL the numbers.</p>
            <p><strong>How to find the LCM of three numbers:</strong></p>
            <ol>
                <li>List multiples of each number</li>
                <li>Look for the smallest number that appears in ALL lists</li>
                <li>That number is your LCM</li>
            </ol>
            <p><strong>Tip:</strong> Sometimes it's easier to find the LCM of two numbers first, then find the LCM of that result and the third number.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: LCM of 2, 3, and 4</div>
                <p>Multiples of 2: 2, 4, 6, 8, 10, <strong>12</strong>, 14...</p>
                <p>Multiples of 3: 3, 6, 9, <strong>12</strong>, 15...</p>
                <p>Multiples of 4: 4, 8, <strong>12</strong>, 16...</p>
                <p>Smallest common multiple: <strong>12</strong> → LCM(2,3,4) = 12</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: LCM of 4, 5, and 6</div>
                <p>Multiples of 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, <strong>60</strong>...</p>
                <p>Multiples of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, <strong>60</strong>...</p>
                <p>Multiples of 6: 6, 12, 18, 24, 30, 36, 42, 48, 54, <strong>60</strong>...</p>
                <p>Smallest common multiple: <strong>60</strong> → LCM(4,5,6) = 60</p>
            </div>
        `,
        taskInstructions: "Find the LCM for each set of numbers below. Try listing multiples until you find a match!",
        taskContent: `
            <div class="content-box">
                <p><strong>Find the LCM:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> LCM of 3, 4, and 6 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> LCM of 2, 5, and 10 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> LCM of 4, 6, and 8 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Three friends exercise every 2, 3, and 5 days. If they all exercised today, how many days until they all exercise on the same day again?
                    <span class="answer-space"></span> days
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find the LCM of 6, 9, and 12. Show your work:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find the LCM of: a) 3, 5, and 6 b) 4, 7, and 14 c) 2, 3, and 7",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Review and LCM Quiz",
        subtopic: "Weekly Review and Assessment",
        revisionContent: `
            <p>Congratulations! You've completed Week 9 on Multiples and LCM. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> What multiples are and how to list them</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to find common multiples of two or more numbers</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to find the LCM (Lowest Common Multiple) of two numbers</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to find the LCM of three or more numbers</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Real-world applications of LCM</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Key Vocabulary:</strong></p>
                <p><strong>Multiple:</strong> A number that can be divided by another number without a remainder</p>
                <p><strong>Common Multiple:</strong> A number that is a multiple of two or more numbers</p>
                <p><strong>LCM (Lowest Common Multiple):</strong> The smallest number that is a multiple of two or more numbers</p>
                <p><strong>Number List:</strong> Writing out multiples in order to find common ones</p>
            </div>
            <p><strong>Quiz Instructions:</strong> Complete the following questions. Show your work where needed. Good luck!</p>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Weekly Quiz:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the first 4 multiples of 9: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Find two common multiples of 4 and 7: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> LCM of 5 and 6 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> LCM of 8 and 12 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> LCM of 3, 4, and 5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Word Problem: A bell rings every 15 minutes, another every 20 minutes. If they just rang together, how long until they ring together again?
                    <span class="answer-space"></span> minutes
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Is 36 a multiple of 4? <span class="answer-space"></span> Is it a multiple of 9? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Explain in your own words what LCM means:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend reflection: Write about one real-life situation where finding multiples or LCM could be useful.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathWeek9);
    console.log("math-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathWeek9);
    console.log("math-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathWeek9',
        metadata: grade3MathWeek9.metadata,
        days: grade3MathWeek9
    });
    console.log("math-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathWeek9 = grade3MathWeek9;
console.log("math-week9.js loaded and registered successfully");