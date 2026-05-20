// Grade 3 Mathematics & Science - Term 3 Week 5 Data
const grade3MathScienceWeek5 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 3,
        week: 5,
        title: "Addition of Whole Numbers",
        description: "Adding multi-digit numbers using expanded notation, carrying, number patterns, and problem-solving strategies"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding 5-digit numbers to 3, 4, 5 digits (Expanded Notation)",
        lessonContent: `
            <p>Welcome to our week on addition! Today we'll learn how to add large numbers using expanded notation.</p>
            <p><strong>Key Question:</strong> How can we break apart big numbers to make addition easier?</p>
            <p><strong>Introduction:</strong> Expanded notation means writing a number to show the value of each digit. For example: 45,679 = 40,000 + 5,000 + 600 + 70 + 9</p>
            <p><strong>Step-by-Step: Adding with Expanded Notation</strong></p>
            <ol>
                <li>Write both numbers in expanded form</li>
                <li>Add the ten-thousands places</li>
                <li>Add the thousands places</li>
                <li>Add the hundreds places</li>
                <li>Add the tens places</li>
                <li>Add the ones places</li>
                <li>Add all the sums together</li>
            </ol>
            <p><strong>Example:</strong> 34,561 + 2,345 = ?</p>
            <p>34,561 = 30,000 + 4,000 + 500 + 60 + 1</p>
            <p>2,345 = 2,000 + 300 + 40 + 5</p>
            <p>Add: (30,000) + (4,000+2,000=6,000) + (500+300=800) + (60+40=100) + (1+5=6)</p>
            <p><strong>Answer:</strong> 30,000 + 6,000 + 800 + 100 + 6 = 36,906</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Example 1</div>
                <p>Add 52,134 + 3,421</p>
                <p>52,134 = 50,000 + 2,000 + 100 + 30 + 4</p>
                <p>3,421 = 3,000 + 400 + 20 + 1</p>
                <p>Add: 50,000 + (2,000+3,000=5,000) + (100+400=500) + (30+20=50) + (4+1=5)</p>
                <p><strong>= 55,555</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Example 2</div>
                <p>Add 43,210 + 12,345</p>
                <p>43,210 = 40,000 + 3,000 + 200 + 10 + 0</p>
                <p>12,345 = 10,000 + 2,000 + 300 + 40 + 5</p>
                <p>Add: (40,000+10,000=50,000) + (3,000+2,000=5,000) + (200+300=500) + (10+40=50) + (0+5=5)</p>
                <p><strong>= 55,555</strong></p>
            </div>
        `,
        taskInstructions: "Solve the following addition problems using expanded notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Expanded Notation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers in expanded notation:
                    <div class="answer-space" style="height: 80px;"></div>
                    <div>a) 23,456 = _________</div>
                    <div>b) 67,890 = _________</div>
                    <div>c) 12,345 = _________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding with Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve using expanded notation (show your work):
                    <div>a) 54,321 + 4,567 = _________</div>
                    <div class="answer-space" style="height: 60px;"></div>
                    <div>b) 32,109 + 21,890 = _________</div>
                    <div class="answer-space" style="height: 60px;"></div>
                    <div>c) 45,678 + 54,321 = _________</div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A school has 34,567 books in the library. They buy 2,345 more books. How many books are there now?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A farmer harvested 23,456 apples in Week 1 and 12,345 apples in Week 2. How many apples did he harvest in total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 large numbers around your home (prices, page numbers, distances). Write each in expanded notation.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding with Carrying up to 4 Times",
        lessonContent: `
            <p>Today we'll learn how to add large numbers when we need to carry over to the next place value!</p>
            <p><strong>Key Question:</strong> What do we do when a column adds up to 10 or more?</p>
            <p><strong>Introduction:</strong> Carrying (also called regrouping) happens when the sum in a column is 10 or greater. We write the ones digit and carry the tens digit to the next column.</p>
            <p><strong>Step-by-Step: Adding with Carrying</strong></p>
            <ol>
                <li>Start with the ones column (far right)</li>
                <li>Add the digits in that column</li>
                <li>If the sum is 10 or more, write the ones digit and carry the tens digit to the next column</li>
                <li>Move to the tens column, add including any carried number</li>
                <li>Repeat for hundreds, thousands, and ten-thousands columns</li>
            </ol>
            <p><strong>Example:</strong> 34,567 + 56,789 = ?</p>
            <p>Start with ones: 7+9=16 → write 6, carry 1</p>
            <p>Tens: 6+8+1=15 → write 5, carry 1</p>
            <p>Hundreds: 5+7+1=13 → write 3, carry 1</p>
            <p>Thousands: 4+6+1=11 → write 1, carry 1</p>
            <p>Ten-thousands: 3+5+1=9 → write 9</p>
            <p><strong>Answer:</strong> 91,356</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Example 1</div>
                <p>Add 45,678 + 27,891</p>
                <p>Ones: 8+1=9 → write 9</p>
                <p>Tens: 7+9=16 → write 6, carry 1</p>
                <p>Hundreds: 6+8+1=15 → write 5, carry 1</p>
                <p>Thousands: 5+7+1=13 → write 3, carry 1</p>
                <p>Ten-thousands: 4+2+1=7 → write 7</p>
                <p><strong>= 73,569</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Example 2</div>
                <p>Add 29,999 + 1 = ?</p>
                <p>Ones: 9+1=10 → write 0, carry 1</p>
                <p>Tens: 9+0+1=10 → write 0, carry 1</p>
                <p>Hundreds: 9+0+1=10 → write 0, carry 1</p>
                <p>Thousands: 9+0+1=10 → write 0, carry 1</p>
                <p>Ten-thousands: 2+0+1=3 → write 3</p>
                <p><strong>= 30,000</strong></p>
            </div>
        `,
        taskInstructions: "Solve each addition problem. Remember to carry when needed!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Practice Carrying</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these problems (show your carrying work):
                    <div>a) 23,456 + 47,789 = _________</div>
                    <div class="answer-space" style="height: 80px;"></div>
                    <div>b) 54,321 + 38,765 = _________</div>
                    <div class="answer-space" style="height: 80px;"></div>
                    <div>c) 67,890 + 24,567 = _________</div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Challenge Problems (Carry up to 4 times)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these challenging problems:
                    <div>a) 49,999 + 38,888 = _________</div>
                    <div class="answer-space" style="height: 80px;"></div>
                    <div>b) 58,679 + 41,543 = _________</div>
                    <div class="answer-space" style="height: 80px;"></div>
                    <div>c) 73,482 + 26,629 = _________</div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A stadium has 48,500 seats. The owners add 16,800 more seats. How many seats are there now?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A farmer has 39,876 chickens. He buys 27,654 more. How many chickens does he have in total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 addition problems that require carrying. Solve them and check your answers.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding Whole Numbers with Sum up to 99999 (No Regrouping)",
        lessonContent: `
            <p>Today we'll practice adding large numbers without needing to carry or regroup!</p>
            <p><strong>Key Question:</strong> When do we NOT need to carry when adding?</p>
            <p><strong>Introduction:</strong> Some addition problems are easy because each column adds up to 9 or less. This means no carrying is needed!</p>
            <p><strong>Rules for No Regrouping:</strong></p>
            <ul>
                <li>Each digit in the first number + each digit in the second number must be 9 or less</li>
                <li>Add from left to right OR right to left - no carrying needed either way!</li>
                <li>The sum will never exceed 99,999</li>
            </ul>
            <p><strong>Example:</strong> 12,345 + 34,521 = ?</p>
            <p>Ten-thousands: 1+3=4</p>
            <p>Thousands: 2+4=6</p>
            <p>Hundreds: 3+5=8</p>
            <p>Tens: 4+2=6</p>
            <p>Ones: 5+1=6</p>
            <p><strong>Answer:</strong> 46,866</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Example 1</div>
                <p>Add 21,432 + 34,123</p>
                <p>Ten-thousands: 2+3=5</p>
                <p>Thousands: 1+4=5</p>
                <p>Hundreds: 4+1=5</p>
                <p>Tens: 3+2=5</p>
                <p>Ones: 2+3=5</p>
                <p><strong>= 55,555</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Example 2</div>
                <p>Add 10,010 + 20,020</p>
                <p>Ten-thousands: 1+2=3</p>
                <p>Thousands: 0+0=0</p>
                <p>Hundreds: 0+0=0</p>
                <p>Tens: 1+2=3</p>
                <p>Ones: 0+0=0</p>
                <p><strong>= 30,030</strong></p>
            </div>
        `,
        taskInstructions: "Add each pair of numbers. Remember: no carrying needed!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: No Regrouping Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add these numbers (no carrying!):
                    <div>a) 11,111 + 22,222 = _________</div>
                    <div>b) 33,333 + 44,444 = _________</div>
                    <div>c) 12,345 + 23,456 = _________</div>
                    <div>d) 41,023 + 52,134 = _________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve:
                    <div>a) 34,120 + 53,231 = _________</div>
                    <div>b) 22,113 + 35,421 = _________</div>
                    <div>c) 41,002 + 23,345 = _________</div>
                    <div>d) 11,234 + 22,343 = _________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create 3 addition problems where no carrying is needed (sum ≤ 99,999):
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 pairs of numbers that add to a sum between 10,000 and 99,999 without needing to carry.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Strategies: Number Trees, Wheels, Magic Squares",
        lessonContent: `
            <p>Today we'll explore fun and creative ways to practice addition using number trees, number wheels, and magic squares!</p>
            <p><strong>Key Question:</strong> How can we make addition practice more fun and interesting?</p>
            <p><strong>Strategy 1: Number Trees</strong></p>
            <ul>
                <li>A number tree starts with a number at the top</li>
                <li>Each branch shows two numbers that add to the number above</li>
                <li>Keep breaking numbers down until you reach single digits</li>
            </ul>
            <p><strong>Strategy 2: Number Wheels</strong></p>
            <ul>
                <li>A number wheel has a center number</li>
                <li>Numbers in the circle are added to the center number</li>
                <li>Write the sums in the outer ring</li>
            </ul>
            <p><strong>Strategy 3: Magic Squares</strong></p>
            <ul>
                <li>A magic square is a grid where every row, column, and diagonal adds to the same number</li>
                <li>For a 3x3 magic square, the magic sum is 3 times the center number</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Number Tree Example</div>
                <p>Start with 15 at the top. It can break into 7+8. Then 7 breaks into 3+4, and 8 breaks into 5+3.</p>
                <div style="font-family: monospace; text-align: center;">
                    15<br>
                    /  \\<br>
                    7    8<br>
                   / \\  / \\<br>
                  3  4 5  3
                </div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cog"></i> Number Wheel Example</div>
                <p>Center number: 10. Circle numbers: 5, 8, 3, 12, 6, 4</p>
                <p>Sums: 15, 18, 13, 22, 16, 14</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Magic Square Example</div>
                <p>3x3 Magic Square (magic sum = 15):</p>
                <p>2  7  6<br>9  5  1<br>4  3  8</p>
                <p>Each row, column, and diagonal adds to 15!</p>
            </div>
        `,
        taskInstructions: "Complete the number tree, number wheel, and magic square activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Number Tree</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this number tree (break 24 into numbers that add to 24):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; text-align: center;">
                        <p>24</p>
                        <p>/  \\</p>
                        <p>___  ___</p>
                        <p>/ \\  / \\</p>
                        <p>_ _  _ _</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Wheel</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Center number is 25. Add each circle number to 25:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; text-align: center;">
                        <p>     12</p>
                        <p>  8      20</p>
                        <p>    25</p>
                        <p>  15      30</p>
                        <p>     5</p>
                        <p>Sums: ___ ___ ___ ___ ___ ___</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Magic Square</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete this magic square so every row, column, and diagonal adds to 18:
                    <div style="display: grid; grid-template-columns: repeat(3, 80px); gap: 5px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">5</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">6</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">___</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">___</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">___</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">___</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">___</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">___</div>
                        <div style="border: 1px solid #ccc; height: 60px; text-align: center;">___</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create your own number wheel with center number 50 and 8 numbers around it. Find all the sums.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Identifying Number Patterns Involving Addition",
        lessonContent: `
            <p>Today we'll discover how addition creates patterns and how to find missing numbers in patterns!</p>
            <p><strong>Key Question:</strong> How can addition help us see patterns in numbers?</p>
            <p><strong>What are Number Patterns?</strong></p>
            <ul>
                <li>A number pattern is a sequence where each number follows a rule</li>
                <li>Addition patterns: each number increases by the same amount (constant difference)</li>
                <li>Example: 5, 10, 15, 20, 25 → add 5 each time</li>
            </ul>
            <p><strong>Finding the Rule:</strong></p>
            <ol>
                <li>Subtract the first number from the second number to find the difference</li>
                <li>Check if the same difference works for the next pair</li>
                <li>Use the rule to find missing numbers or continue the pattern</li>
            </ol>
            <p><strong>Types of Addition Patterns:</strong></p>
            <ul>
                <li><strong>Constant addition:</strong> 2, 4, 6, 8, 10 (add 2)</li>
                <li><strong>Increasing addition:</strong> 1, 3, 6, 10, 15 (add 2, then 3, then 4, then 5)</li>
                <li><strong>Skip counting:</strong> 5, 10, 15, 20, 25 (add 5)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 1: Constant Addition</div>
                <p>Pattern: 7, 14, 21, 28, ___</p>
                <p>Rule: Add 7 each time</p>
                <p>Next number: 28 + 7 = 35</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 2: Find the Missing Number</div>
                <p>Pattern: 12, 18, 24, ___, 36</p>
                <p>Rule: Add 6 each time</p>
                <p>Missing number: 24 + 6 = 30</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 3: Triangle Numbers</div>
                <p>Pattern: 1, 3, 6, 10, 15</p>
                <p>Rule: Add 2, then 3, then 4, then 5</p>
                <p>Next: 15 + 6 = 21</p>
            </div>
        `,
        taskInstructions: "Identify the pattern rule, find missing numbers, and extend each sequence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each pattern, write the rule and the next two numbers:
                    <div>a) 3, 6, 9, 12, 15, ___, ___</div>
                    <div>Rule: _________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>b) 10, 20, 30, 40, 50, ___, ___</div>
                    <div>Rule: _________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>c) 25, 50, 75, 100, 125, ___, ___</div>
                    <div>Rule: _________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Missing Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing numbers:
                    <div>a) 5, 12, 19, ___, 33, ___</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>b) 44, 55, 66, ___, 88, ___</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>c) 100, 90, 80, ___, 60, ___ (subtraction pattern!)</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a number pattern using addition. Write the rule and list the first 6 numbers:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the pattern? 2, 4, 8, 14, 22, 32, ___? (Hint: Look at the difference between numbers!)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find an addition pattern in your daily life (bus numbers, house numbers, page numbers, etc.). Write the pattern and explain the rule.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek5);
    console.log("grade3-math-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek5);
    console.log("grade3-math-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek5',
        metadata: grade3MathScienceWeek5.metadata,
        days: grade3MathScienceWeek5
    });
    console.log("grade3-math-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek5 = grade3MathScienceWeek5;
console.log("grade3-math-science-week5.js loaded and registered successfully");