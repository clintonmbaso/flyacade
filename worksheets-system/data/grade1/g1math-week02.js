// Grade 1 Math - Week 1 Data
const grade1MathWeek1 = {
    metadata: {
        grade: 1,
        subject: "Mathematics",
        week: 2,
        title: "Basic Addition",
        description: "Introduction to addition with numbers 1-10"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Basic Addition",
        subtopic: "Adding numbers 1-5",
        lessonContent: `
            <p>Today we will learn how to add numbers from 1 to 5. Addition is one of the most important math skills you'll learn!</p>
            <p><strong>Key Concept:</strong> Addition means putting numbers together to find the total. When we add, we combine two or more numbers to make a bigger number.</p>
            <p>When we write addition problems, we use the <strong>+ sign</strong> (plus) and <strong>= sign</strong> (equals).</p>
            <p><strong>Remember:</strong> You can use objects like blocks, toys, or your fingers to help you add!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 2 + 1 = 3</div>
                <p>We start with 2, add 1 more, and we get 3. Try it with your fingers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 3 + 2 = 5</div>
                <p>Show 3 fingers on one hand, 2 fingers on the other. Count all your fingers: 1, 2, 3, 4, 5!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 1 + 4 = 5</div>
                <p>It doesn't matter which number comes first in addition. 1 + 4 is the same as 4 + 1!</p>
            </div>
        `,
        taskInstructions: "Solve the following addition problems. Use objects or your fingers if you need help!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 1 + 2 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 3 + 1 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 2 + 3 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 4 + 1 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw 2 apples + 3 apples = <span class="answer-space"></span> apples
                <div class="drawing-area"></div>
            </div>
        `,
        homework: "Practice adding with objects at home. Count how many toys you have in total. Try adding different groups of toys together!",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Basic Addition",
        subtopic: "Adding numbers 1-10",
        lessonContent: `
            <p>Today we will continue with addition, now using numbers up to 10. You're becoming an addition expert!</p>
            <p><strong>Remember:</strong> You can use your fingers to help count! You have 10 fingers total - perfect for adding numbers up to 10.</p>
            <p><strong>Strategy:</strong> When adding bigger numbers, start with the larger number and count up. For 5 + 3, start with 5 and count up 3: 6, 7, 8!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 4 + 3 = 7</div>
                <p>Start with 4 fingers up. Count up 3 more: 5, 6, 7. That's 7 total!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 5 + 2 = 7</div>
                <p>Show 5 fingers on one hand (all fingers), add 2 more from the other hand. You have 7!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 6 + 4 = 10</div>
                <p>This is a special fact! 6 and 4 make 10. These are called "number pairs that make 10."</p>
            </div>
        `,
        taskInstructions: "Solve these addition problems. Use your fingers if needed! Try to get faster each time.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 5 + 3 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 4 + 4 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 6 + 2 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 3 + 7 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 8 + 2 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Challenge: 9 + 1 = <span class="answer-space"></span>
            </div>
        `,
        homework: "Find 5 pairs of numbers around your house that add up to 10. Write them down!",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Addition Practice", 
        subtopic: "Word problems",
        lessonContent: `
            <p>Today we will use addition to solve word problems. This is how we use math in real life!</p>
            <p><strong>Strategy:</strong> Read the problem carefully, find the numbers, then add them.</p>
            <p><strong>Steps to solve word problems:</strong></p>
            <ol>
                <li>Read the problem slowly</li>
                <li>Find the numbers in the story</li>
                <li>Decide if you need to add or subtract (today we only add!)</li>
                <li>Write the number sentence</li>
                <li>Solve it!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Word Problem</div>
                <p><strong>Story:</strong> Maria has 3 cookies. Her mom gives her 2 more. How many cookies does Maria have now?</p>
                <p><strong>Step 1:</strong> Find the numbers: 3 cookies and 2 cookies</p>
                <p><strong>Step 2:</strong> Write the number sentence: 3 + 2 = ?</p>
                <p><strong>Step 3:</strong> Solve: 3 + 2 = 5 cookies</p>
                <p><strong>Answer:</strong> Maria has 5 cookies now.</p>
            </div>
        `,
        taskInstructions: "Solve these word problems. Show your work! Draw pictures if it helps you understand.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Tom has 4 pencils. He buys 3 more. How many pencils does he have? <span class="answer-space"></span>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> There are 2 birds on a tree. 5 more birds join them. How many birds are there? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Sara has 1 doll. For her birthday, she gets 4 more dolls. How many dolls now? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create your own word problem:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Find 3 addition problems in your home. Write them down as word problems and solve them.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Addition Review", 
        subtopic: "Mixed practice",
        lessonContent: `
            <p>Let's review everything we've learned about addition this week. You're doing amazing!</p>
            <p>We can add using numbers, pictures, or solving real problems. Today we'll practice all these ways.</p>
            <p><strong>Important reminder:</strong> Addition is commutative. That means 2 + 3 is the same as 3 + 2. The order doesn't matter!</p>
            <p><strong>Tip:</strong> When adding, you can always check your work by counting again or using a different method.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example with pictures</div>
                <p>🍎🍎 + 🍎🍎🍎 = 🍎🍎🍎🍎🍎</p>
                <p>This shows: 2 apples + 3 apples = 5 apples</p>
                <p>So 2 + 3 = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Checking your work</div>
                <p>For 4 + 5 = 9, check by:</p>
                <ul>
                    <li>Counting on your fingers</li>
                    <li>Drawing dots and counting them</li>
                    <li>Using objects like blocks</li>
                </ul>
            </div>
        `,
        taskInstructions: "Complete all the problems below. Use different strategies to check your answers!",
        taskContent: `
            <div class="content-box">
                <p><strong>Number Addition:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 7 + 2 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 4 + 5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 6 + 3 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problem:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> There are 6 children playing. 3 more children come to play. How many children now? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Draw it:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw 3 balls + 4 balls = <span class="answer-space"></span> balls
                    <div class="drawing-area"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Find 3 different ways to make 8:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Teach someone at home how to solve an addition problem. Explain each step!",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Addition Week 1",
        revisionContent: `
            <p>Congratulations! You've completed Week 1 of Addition. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding numbers 1-5</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding numbers 1-10</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Solving addition word problems</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Using pictures and objects to help with addition</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Checking our work using different methods</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Addition Vocabulary:</strong></p>
                <p><strong>Plus (+):</strong> The addition sign</p>
                <p><strong>Equals (=):</strong> Shows that two amounts are the same</p>
                <p><strong>Sum:</strong> The answer to an addition problem</p>
                <p><strong>Number sentence:</strong> A math problem written with numbers and symbols</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 2 + 8 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 5 + 4 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> I have 7 candies. My friend gives me 2 more. How many do I have? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What was the easiest part of addition this week?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most challenging?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a picture showing 3 + 4:
                    <div class="drawing-area"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create 5 addition problems for your family to solve. Be the teacher!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathWeek1);
    console.log("math-week1.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathWeek1);
    console.log("math-week1.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathWeek1',
        metadata: grade1MathWeek1.metadata,
        days: grade1MathWeek1
    });
    console.log("math-week1.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathWeek1 = grade1MathWeek1;
console.log("math-week1.js loaded and registered successfully");