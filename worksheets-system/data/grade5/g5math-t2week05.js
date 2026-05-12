// Grade 5 Mathematics - Term 2 Week 5 Data
const grade5MathWeek5 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 2,
        week: 5,
        title: "Combined Operations (BODMAS/PEMDAS)",
        description: "Understanding the order of operations: Brackets, Orders, Division/Multiplication, Addition/Subtraction"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Combined Operations",
        subtopic: "The Hierarchy of Operations",
        lessonContent: `
            <p>Welcome to our exploration of combined operations! Today we'll learn the order in which we must solve math problems with multiple operations.</p>
            <p><strong>Key Question:</strong> Why is 2 + 3 × 5 not equal to 25?</p>
            <p><strong>Introduction:</strong> In mathematics, we have a special set of rules called the "Order of Operations." These rules tell us which calculation to perform first. Without these rules, everyone would get different answers to the same problem!</p>
            <p><strong>The BODMAS/PEMDAS Rule:</strong></p>
            <ol>
                <li><strong>Brackets (or Parentheses):</strong> Solve anything inside brackets first</li>
                <li><strong>Orders (or Exponents):</strong> Powers and square roots come next</li>
                <li><strong>Division and Multiplication:</strong> From left to right</li>
                <li><strong>Addition and Subtraction:</strong> From left to right</li>
            </ol>
            <p><strong>The Hook:</strong> Multiplication has a "faster engine" than addition and must go first! That's why:</p>
            <ul>
                <li>2 + 3 × 5 = 2 + 15 = <strong>17</strong> (NOT 25!)</li>
                <li>Because multiplication happens before addition</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> The Faster Engine</div>
                <p>Think of multiplication as a race car and addition as a bicycle. The race car (multiplication) always goes first because it's faster!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Why Rules Matter</div>
                <p>If there were no order of operations, 3 + 4 × 2 could be 14 (if you add first) or 11 (if you multiply first). The rules ensure everyone gets 11!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-memory"></i> Easy Reminders</div>
                <p>Remember BODMAS: <strong>B</strong>ig <strong>O</strong>ld <strong>D</strong>inosaurs <strong>M</strong>unch <strong>A</strong>nd <strong>S</strong>nack<br>
                Remember PEMDAS: <strong>P</strong>lease <strong>E</strong>xcuse <strong>M</strong>y <strong>D</strong>ear <strong>A</strong>unt <strong>S</strong>ally</p>
            </div>
        `,
        taskInstructions: "Apply the order of operations to solve expressions correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Which Operation First?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each expression, circle which operation should be done FIRST:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8 + 2 × 3</div>
                        <div>b) 15 - 10 ÷ 2</div>
                        <div>c) 4 × 5 + 6</div>
                        <div>d) 20 ÷ 4 - 2</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Correct or Incorrect?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Mark each calculation as ✓ (correct) or ✗ (incorrect). Fix the incorrect ones:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 3 + 4 × 2 = 14 ______</div>
                        <div>b) 10 - 2 × 3 = 4 ______</div>
                        <div>c) 5 × 2 + 8 = 18 ______</div>
                        <div>d) 12 ÷ 3 + 5 = 9 ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Solve These Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the correct order of operations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6 + 7 × 2 = ______</div>
                        <div>b) 20 - 4 × 3 = ______</div>
                        <div>c) 9 × 2 + 5 = ______</div>
                        <div>d) 18 ÷ 3 - 2 = ______</div>
                        <div>e) 5 × 4 - 6 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Explain the Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In your own words, explain why 4 + 5 × 3 = 19 and not 27:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 expressions of your own that use addition, subtraction, multiplication, and division. Solve them using the correct order. Ask a family member to solve them too—did you get the same answers?",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Combined Operations",
        subtopic: "Brackets First!",
        lessonContent: `
            <p>Today we'll master solving the "inner part" of a problem first—whatever is inside brackets gets solved before anything else!</p>
            <p><strong>Key Question:</strong> How do brackets change the answer to a problem?</p>
            <p><strong>The "Hug" Rule:</strong> Whatever is in the brackets (the "hug") gets solved before anything else. Brackets are like a VIP area that goes to the front of the line!</p>
            <p><strong>Compare These Two Problems:</strong></p>
            <ul>
                <li><strong>Without brackets:</strong> 10 - 2 + 3 = 8 + 3 = <strong>11</strong> (solve left to right)</li>
                <li><strong>With brackets:</strong> 10 - (2 + 3) = 10 - 5 = <strong>5</strong> (brackets first!)</li>
                <li>Same numbers, different brackets, completely different answers!</li>
            </ul>
            <p><strong>Why Brackets Matter:</strong> Brackets tell you which part of the problem to solve first. They can completely change the answer!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hug"></i> Brackets are Hugs</div>
                <p>Think of brackets as arms hugging the numbers inside. The "hug" group gets solved together before anything else!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt"></i> Moving Brackets</div>
                <p>8 + 2 × 3 = 14 (no brackets)<br>
                (8 + 2) × 3 = 30<br>
                8 + (2 × 3) = 14<br>
                Same numbers, different bracket positions = different answers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Inside Out</div>
                <p>Always solve from the innermost brackets outward, like peeling an onion layer by layer!</p>
            </div>
        `,
        taskInstructions: "Solve problems with brackets and create different answers by moving brackets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Brackets First!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these problems (remember: brackets first!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) (3 + 4) × 2 = ______</div>
                        <div>b) 12 - (5 + 2) = ______</div>
                        <div>c) (8 - 3) × 4 = ______</div>
                        <div>d) 20 ÷ (2 + 3) = ______</div>
                        <div>e) (6 + 2) × (5 - 3) = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare With and Without Brackets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each pair. How are the answers different?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 9 - 3 + 2 = ______ &nbsp;&nbsp;&nbsp; 9 - (3 + 2) = ______</div>
                        <div>b) 15 ÷ 3 × 2 = ______ &nbsp;&nbsp;&nbsp; 15 ÷ (3 × 2) = ______</div>
                        <div>c) 4 × 5 - 3 = ______ &nbsp;&nbsp;&nbsp; 4 × (5 - 3) = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Bracket Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Insert brackets to make each equation true:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 3 + 4 × 2 = 14 &nbsp;&nbsp;(Insert brackets) → 3 __ 4 __ 2 = 14</div>
                        <div>b) 10 - 2 × 3 = 24 &nbsp;&nbsp;(Insert brackets) → 10 __ 2 __ 3 = 24</div>
                        <div>c) 20 ÷ 2 + 3 = 4 &nbsp;&nbsp;(Insert brackets) → 20 __ 2 __ 3 = 4</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Two Different Answers</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Using the numbers 6, 2, and 3, create two different expressions (one with brackets, one without) that give different answers:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write four different expressions using the numbers 4, 5, and 2. Use brackets to get the following answers: 22, 14, 18, and 6.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Combined Operations",
        subtopic: "Multiplication & Division in Order",
        lessonContent: `
            <p>Today we'll learn that multiplication and division are equals—they go in order from left to right!</p>
            <p><strong>Key Question:</strong> Does 12 ÷ 3 × 2 equal 8 or 2?</p>
            <p><strong>The Left-to-Right Rule:</strong> When you have only × and ÷ (no brackets, no + or -), solve from LEFT to RIGHT.</p>
            <p><strong>Example: 12 ÷ 3 × 2</strong></p>
            <ul>
                <li><strong>CORRECT:</strong> 12 ÷ 3 = 4, then 4 × 2 = <strong>8</strong> ✓</li>
                <li><strong>INCORRECT:</strong> 3 × 2 = 6, then 12 ÷ 6 = <strong>2</strong> ✗</li>
            </ul>
            <p><strong>Remember:</strong> Multiplication and division are best friends with the same rank. Neither one goes first—you just go left to right!</p>
            <p><strong>Same Rule for Addition and Subtraction:</strong> When you have only + and -, solve left to right:<br>
            10 - 3 + 2 = 7 + 2 = 9 (NOT 10 - 5 = 5!)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stairs"></i> The Step-by-Step Ladder</div>
                <p>Write each step on a new line:<br>
                24 ÷ 4 × 2<br>
                = 6 × 2<br>
                = 12</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Equal Partners</div>
                <p>Think of × and ÷ as equal partners. Neither is the boss—they take turns from left to right!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> The Left-to-Right Road</div>
                <p>Imagine reading a sentence from left to right. Math operations work the same way when operations have the same rank!</p>
            </div>
        `,
        taskInstructions: "Solve expressions with multiple × and ÷ using left-to-right order.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Left to Right with × and ÷</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these step by step (show each line):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 16 ÷ 4 × 2 = ______</div>
                        <div>b) 24 ÷ 3 × 2 = ______</div>
                        <div>c) 30 ÷ 5 × 3 = ______</div>
                        <div>d) 8 × 3 ÷ 4 = ______</div>
                        <div>e) 15 × 2 ÷ 5 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Spot the Mistake</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find and correct the error in each calculation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 20 ÷ 5 × 2 = 20 ÷ 10 = 2 &nbsp;&nbsp; Correction: ______</div>
                        <div>b) 18 × 2 ÷ 6 = 18 × 3 = 54 &nbsp;&nbsp; Correction: ______</div>
                        <div>c) 36 ÷ 6 × 3 = 36 ÷ 18 = 2 &nbsp;&nbsp; Correction: ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Operations (× ÷ + -)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Remember: × and ÷ first (left to right), then + and - (left to right):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8 + 12 ÷ 3 × 2 = ______</div>
                        <div>b) 20 - 15 ÷ 5 × 2 = ______</div>
                        <div>c) 6 × 4 ÷ 2 + 10 = ______</div>
                        <div>d) 30 ÷ 5 × 2 - 4 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: The Step-by-Step Ladder</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Show each step of solving 48 ÷ 6 × 3 - 5 using the "ladder" method:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 expressions that use both multiplication and division. Solve them using left-to-right order. Show each step on a new line.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Combined Operations",
        subtopic: "Combined Operations in Daily Life",
        lessonContent: `
            <p>Today we'll use the order of operations to solve real-world, multi-step word problems!</p>
            <p><strong>Key Question:</strong> How can BODMAS help you calculate the correct change when shopping?</p>
            <p><strong>Real-World Scenario: The School Supply Shop</strong></p>
            <p>You buy 3 notebooks for $4 each and 2 pens for $1 each. You pay with a $20 bill. How much change do you get?</p>
            <p><strong>Step 1: Write the equation</strong><br>
            Change = Money paid - (cost of notebooks + cost of pens)<br>
            20 - (3 × 4 + 2 × 1)</p>
            <p><strong>Step 2: Apply BODMAS</strong><br>
            Brackets first! Inside the brackets: multiplication before addition<br>
            3 × 4 = 12, &nbsp;&nbsp; 2 × 1 = 2<br>
            20 - (12 + 2)</p>
            <p><strong>Step 3: Finish the brackets</strong><br>
            20 - 14</p>
            <p><strong>Step 4: Subtract</strong><br>
            20 - 14 = <strong>$6 change</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-basket"></i> Grocery Math</div>
                <p>You buy 2 bags of apples for $3 each and 1 watermelon for $5. You have $15. How much left?<br>
                15 - (2 × 3 + 5) = 15 - (6 + 5) = 15 - 11 = $4 left</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Party</div>
                <p>4 pizzas cost $12 each. You split cost equally among 8 friends. Cost per friend?<br>
                (4 × 12) ÷ 8 = 48 ÷ 8 = $6 each</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Speed Calculation</div>
                <p>You drive 60 km/h for 2 hours, then 80 km/h for 3 hours. Total distance?<br>
                (60 × 2) + (80 × 3) = 120 + 240 = 360 km</p>
            </div>
        `,
        taskInstructions: "Solve multi-step word problems by writing equations and applying BODMAS.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write the Equation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, write an equation using brackets, then solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a) Movie Tickets:</strong> 4 adult tickets ($15 each) and 3 child tickets ($8 each).</div>
                        <div>Equation: _________</div>
                        <div>Total cost: $______</div>
                        
                        <div style="margin-top: 15px;"><strong>b) Weekly Earnings:</strong> Work 5 hours at $12/hour, plus 3 hours at $10/hour.</div>
                        <div>Equation: _________</div>
                        <div>Total earnings: $______</div>
                        
                        <div style="margin-top: 15px;"><strong>c) Change Calculation:</strong> Buy 6 burgers for $4 each, pay with $50.</div>
                        <div>Equation: _________</div>
                        <div>Change: $______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Two-Step Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each problem. Show your equation and steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a) Phone Plan:</strong> Monthly fee $30 plus $0.10 per text. You send 200 texts. What's your bill?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b) Swimming Pool:</strong> There are 5 groups of 6 children and 3 groups of 4 adults. How many people total?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a real-life word problem that uses at least two different operations. Show the equation and answer:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Find a receipt from a family shopping trip. Create a math problem based on what was bought. Write the equation and solve it using BODMAS.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Combined Operations",
        subtopic: "The Grand Calculation Finale",
        lessonContent: `
            <p>Congratulations! Today we'll put everything together and solve complex strings of operations!</p>
            <p><strong>Key Question:</strong> Why do these rules exist?</p>
            <p><strong>Final Challenge: The Operation Station</strong></p>
            <p>Let's solve: 5 + (10 ÷ 2) × 3 - 4</p>
            <p><strong>Step 1: Brackets</strong><br>
            10 ÷ 2 = 5<br>
            5 + 5 × 3 - 4</p>
            <p><strong>Step 2: Multiplication</strong><br>
            5 × 3 = 15<br>
            5 + 15 - 4</p>
            <p><strong>Step 3: Addition and Subtraction (left to right)</strong><br>
            5 + 15 = 20<br>
            20 - 4 = <strong>16</strong></p>
            <p><strong>Why Do These Rules Exist?</strong> To ensure everyone in the world gets the same answer to the same problem! Mathematicians around the globe all follow BODMAS/PEMDAS so we can share and check our work.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> Universal Language</div>
                <p>A student in Japan and a student in Brazil solving 8 + 2 × 3 will both get 14 because they both follow the same order of operations. Math connects the world!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code"></i> Computer Programming</div>
                <p>Computers use the same order of operations! Every calculator, spreadsheet, and programming language follows BODMAS/PEMDAS.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-crown"></i> The Grand Finale</div>
                <p>You've learned the rules that students learn all around the world. You're now ready for any calculation challenge!</p>
            </div>
        `,
        taskInstructions: "Solve complex expressions, review all rules, and explain why order of operations matters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Final Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these complex expressions. Show each step:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8 + (12 ÷ 4) × 3 - 5 = ______</div>
                        <div>b) (15 - 3) × 2 + 16 ÷ 4 = ______</div>
                        <div>c) 30 ÷ 6 + (4 + 2) × 3 = ______</div>
                        <div>d) 25 - (8 - 3) × 2 + 7 = ______</div>
                        <div>e) (9 + 6) ÷ 3 × 4 - 8 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Review All Rules</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List the order of operations in the correct sequence:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> In your own words, explain why multiplication is done before addition:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Error Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A student solved 10 + 15 ÷ 3 × 2 and got 16.66. What did they do wrong? What is the correct answer?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important that every mathematician follows the same order of operations?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a complex expression that uses brackets, multiplication, division, addition, and subtraction. Give it to a classmate to solve!
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 complex expressions that use all types of operations. Solve them showing every step. Then explain in 2-3 sentences why BODMAS/PEMDAS is important in math and daily life.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek5);
    console.log("grade5-math-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek5);
    console.log("grade5-math-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek5',
        metadata: grade5MathWeek5.metadata,
        days: grade5MathWeek5
    });
    console.log("grade5-math-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek5 = grade5MathWeek5;
console.log("grade5-math-week5.js loaded and registered successfully");