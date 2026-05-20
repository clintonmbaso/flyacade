// Grade 2 Mathematics & Science - Term 3 Week 8 Data
const grade2MathScienceWeek8 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 3,
        week: 8,
        title: "Multiplication Properties & Money",
        description: "Exploring multiplication properties (1 and 0), composition/decomposition, multiplying double-digit by single-digit numbers, number patterns, and practical money activities"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Properties of 1 and 0 in Multiplication",
        lessonContent: `
            <p>Welcome to our multiplication adventure! Today we'll discover two special numbers: 1 and 0!</p>
            <p><strong>Key Question:</strong> What happens when you multiply a number by 1? What about by 0?</p>
            <p><strong>The Identity Property of 1:</strong></p>
            <ul>
                <li>When you multiply ANY number by 1, the number stays the SAME!</li>
                <li>1 is called the "identity" because it keeps the number's identity unchanged.</li>
                <li><strong>Examples:</strong> 5 × 1 = 5, 12 × 1 = 12, 100 × 1 = 100</li>
            </ul>
            <p><strong>The Zero Property of Multiplication:</strong></p>
            <ul>
                <li>When you multiply ANY number by 0, the answer is ALWAYS 0!</li>
                <li><strong>Examples:</strong> 7 × 0 = 0, 25 × 0 = 0, 0 × 9 = 0</li>
                <li>Think about it: If you have 0 groups of something, you have nothing!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Magic of 1</div>
                <p>If you have 1 basket with 8 apples, you have 8 apples! 1 × 8 = 8</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-empty-set"></i> Power of 0</div>
                <p>If you have 0 baskets with 10 cookies each, how many cookies do you have? 0! Because there are no baskets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Trick</div>
                <p>1 is a "mirror" - it shows you the same number. 0 is an "eraser" - it makes everything disappear!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and applying the properties of 1 and 0 in multiplication.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete these multiplication facts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6 × 1 = ______</div>
                        <div>b) 9 × 0 = ______</div>
                        <div>c) 1 × 15 = ______</div>
                        <div>d) 0 × 24 = ______</div>
                        <div>e) 1 × 33 = ______</div>
                        <div>f) 0 × 41 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Correct Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which property is being used?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8 × 1 = 8 &nbsp;&nbsp;&nbsp; [Identity / Zero]</div>
                        <div>b) 0 × 5 = 0 &nbsp;&nbsp;&nbsp; [Identity / Zero]</div>
                        <div>c) 12 × 1 = 12 &nbsp;&nbsp;&nbsp; [Identity / Zero]</div>
                        <div>d) 0 × 99 = 0 &nbsp;&nbsp;&nbsp; [Identity / Zero]</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Maria has 7 bags with 1 pencil in each bag. How many pencils does she have?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> There are 0 plates with 4 cookies on each plate. How many cookies are there?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that come in groups of 1. Write a multiplication sentence for each. Example: 1 × 3 = 3 (1 set of 3 spoons)",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Multiplication using Composition and Decomposition",
        lessonContent: `
            <p>Today we'll learn a super smart strategy for multiplying bigger numbers: breaking them apart and putting them back together!</p>
            <p><strong>Key Question:</strong> How can we break apart numbers to make multiplication easier?</p>
            <p><strong>What is Composition and Decomposition?</strong></p>
            <ul>
                <li><strong>Decomposition:</strong> Breaking a number into smaller, easier parts</li>
                <li><strong>Composition:</strong> Putting the parts back together to find the total</li>
                <li>This helps us multiply numbers that are hard to do in our heads!</li>
            </ul>
            <p><strong>How to Use Decomposition:</strong></p>
            <p>Example: 7 × 6</p>
            <ul>
                <li>Break 6 into 3 + 3 (or 4 + 2, or 5 + 1)</li>
                <li>Multiply each part: 7 × 3 = 21, and 7 × 3 = 21</li>
                <li>Add them together: 21 + 21 = 42</li>
                <li>So, 7 × 6 = 42!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Breaking Apart 8 × 7</div>
                <p>Break 7 into 5 + 2. 8 × 5 = 40, 8 × 2 = 16. Add: 40 + 16 = 56. So 8 × 7 = 56!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Building Blocks</div>
                <p>Think of decomposition like building with blocks. You build smaller towers (parts), then put them together for the big tower!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Different Ways to Break</div>
                <p>9 × 4 can be broken as 9 × (2+2) OR 9 × (3+1). Both give you 36. Choose what's easiest for you!</p>
            </div>
        `,
        taskInstructions: "Practice using decomposition to solve multiplication problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Break It Down!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use decomposition to solve these:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6 × 7 = 6 × (___ + ___) = (6 × ___) + (6 × ___) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) 5 × 9 = 5 × (___ + ___) = (5 × ___) + (5 × ___) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) 4 × 8 = 4 × (___ + ___) = (4 × ___) + (4 × ___) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d) 7 × 5 = 7 × (___ + ___) = (7 × ___) + (7 × ___) = ___ + ___ = ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Show Two Different Ways</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve 6 × 8 using two different decompositions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Way 1: 6 × 8 = 6 × (___ + ___) = ______</div>
                        <div>Way 2: 6 × 8 = 6 × (___ + ___) = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A baker puts 7 cookies in each box. She has 6 boxes. How many cookies total? Use decomposition to solve.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Show a family member how to decompose 9 × 6. Write down the steps you used.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Multiplying Double-Digit Numbers by Single-Digit Numbers",
        lessonContent: `
            <p>Today we'll learn to multiply bigger numbers like 12 × 4 or 23 × 3!</p>
            <p><strong>Key Question:</strong> How do we multiply numbers like 14 × 5?</p>
            <p><strong>Two Methods to Learn:</strong></p>
            <ol>
                <li><strong>Expanded Form Method (Decomposition):</strong>
                    <ul>
                        <li>Break the double-digit number into tens and ones</li>
                        <li>Multiply each part by the single digit</li>
                        <li>Add the answers together</li>
                    </ul>
                </li>
                <li><strong>Standard Algorithm (Stacking Method):</strong>
                    <ul>
                        <li>Write the numbers vertically</li>
                        <li>Multiply the ones place first</li>
                        <li>Then multiply the tens place</li>
                        <li>Add if needed</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Example using Expanded Form:</strong> 13 × 4</p>
            <ul>
                <li>Break 13 into 10 + 3</li>
                <li>10 × 4 = 40</li>
                <li>3 × 4 = 12</li>
                <li>40 + 12 = 52</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt"></i> Expanded Form: 24 × 3</div>
                <p>24 = 20 + 4. 20 × 3 = 60. 4 × 3 = 12. 60 + 12 = 72!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> Stacking Method: 15 × 6</div>
                <p>Write 15 × 6 vertically. 5 × 6 = 30 (write 0, carry 3). 1 × 6 = 6, plus 3 = 9. Answer: 90!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Real Life</div>
                <p>If 1 toy costs K12, how much for 5 toys? 12 × 5 = (10 × 5) + (2 × 5) = 50 + 10 = K60!</p>
            </div>
        `,
        taskInstructions: "Practice multiplying double-digit numbers by single-digit numbers using both methods.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Expanded Form Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve using expanded form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 12 × 3 = (___ + ___) × 3 = (___ × 3) + (___ × 3) = ___ + ___ = ___</div>
                        <div>b) 21 × 4 = (___ + ___) × 4 = (___ × 4) + (___ × 4) = ___ + ___ = ___</div>
                        <div>c) 32 × 2 = (___ + ___) × 2 = (___ × 2) + (___ × 2) = ___ + ___ = ___</div>
                        <div>d) 43 × 2 = (___ + ___) × 2 = (___ × 2) + (___ × 2) = ___ + ___ = ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Stacking Method Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve using the stacking (vertical) method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) &nbsp;&nbsp; 14 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) &nbsp;&nbsp; 23 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) &nbsp;&nbsp; 35 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d) &nbsp;&nbsp; 42</div>
                        <div>&nbsp;&nbsp;&nbsp; × 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; × 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; × 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; × 2</div>
                        <div>&nbsp;&nbsp;&nbsp; ______ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ______ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ______ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A classroom has 11 rows with 4 chairs in each row. How many chairs are there in total?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> There are 23 students. Each student gets 2 pencils. How many pencils are needed?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 items at home that come in groups (like eggs, cups, books). Write a multiplication sentence for each using double-digit numbers.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Identifying Number Patterns Involving Multiplication",
        lessonContent: `
            <p>Today we'll become pattern detectives and discover the secret patterns in multiplication tables!</p>
            <p><strong>Key Question:</strong> What patterns can we find in multiplication?</p>
            <p><strong>Patterns in the 2 Times Table:</strong></p>
            <ul>
                <li>2, 4, 6, 8, 10, 12, 14, 16, 18, 20...</li>
                <li>Pattern: All numbers end in 0, 2, 4, 6, or 8 (they are EVEN numbers!)</li>
            </ul>
            <p><strong>Patterns in the 5 Times Table:</strong></p>
            <ul>
                <li>5, 10, 15, 20, 25, 30, 35, 40, 45, 50...</li>
                <li>Pattern: All numbers end in either 5 or 0!</li>
            </ul>
            <p><strong>Patterns in the 10 Times Table:</strong></p>
            <ul>
                <li>10, 20, 30, 40, 50, 60, 70, 80, 90, 100...</li>
                <li>Pattern: All numbers end in 0! Just add a 0 to the number you're multiplying by 10!</li>
            </ul>
            <p><strong>Patterns in the 9 Times Table:</strong></p>
            <ul>
                <li>9, 18, 27, 36, 45, 54, 63, 72, 81, 90...</li>
                <li>Pattern: The digits add up to 9! (1+8=9, 2+7=9, 3+6=9, etc.)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Even Number Pattern</div>
                <p>Any number multiplied by 2 gives an even number! 2 × 7 = 14 (even), 2 × 9 = 18 (even)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> 5's Pattern Trick</div>
                <p>For 5 × even number: answer ends in 0. For 5 × odd number: answer ends in 5. Example: 5 × 4 = 20, 5 × 7 = 35!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fingerprint"></i> 9's Finger Trick</div>
                <p>Hold up 10 fingers. For 9 × 4, put down your 4th finger. You have 3 fingers on left, 6 on right = 36!</p>
            </div>
        `,
        taskInstructions: "Identify and complete number patterns involving multiplication.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2, 4, 6, __, 10, 12, __, 16, __, 20</div>
                        <div>b) 5, 10, 15, __, 25, __, 35, __, 45, 50</div>
                        <div>c) 10, 20, 30, __, 50, __, 70, __, 90, 100</div>
                        <div>d) 9, 18, 27, __, 45, __, 63, __, 81, 90</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Describe the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at 4, 8, 12, 16, 20. What pattern do you notice? What multiplication table is this?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Look at 7, 14, 21, 28, 35. What pattern do you notice?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What Comes Next?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Continue each pattern for 3 more numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 3, 6, 9, 12, __, __, __</div>
                        <div>b) 4, 8, 12, 16, __, __, __</div>
                        <div>c) 6, 12, 18, 24, __, __, __</div>
                        <div>d) 8, 16, 24, 32, __, __, __</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create your own multiplication pattern. Write the first 8 numbers and explain the rule. Share it with a family member.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Money",
        subtopic: "Practical Activities Involving Money up to K99",
        lessonContent: `
            <p>Today we'll use everything we've learned about multiplication to solve real-world money problems!</p>
            <p><strong>Key Question:</strong> How can we use multiplication to find the total cost of multiple items?</p>
            <p><strong>Money Vocabulary:</strong></p>
            <ul>
                <li><strong>Total cost:</strong> The final amount you pay for everything</li>
                <li><strong>Price per item:</strong> How much ONE item costs</li>
                <li><strong>Quantity:</strong> How many items you are buying</li>
            </ul>
            <p><strong>Multiplication and Money:</strong></p>
            <p>When you buy multiple items that cost the same price, you MULTIPLY!</p>
            <p>Formula: <strong>Price × Quantity = Total Cost</strong></p>
            <p><strong>Example:</strong> If one mango costs K7 and you buy 6 mangoes:</p>
            <ul>
                <li>7 × 6 = 42</li>
                <li>Total cost = K42</li>
                <li>Is this less than K99? Yes! So you can afford it.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Market Shopping</div>
                <p>One pencil costs K4. You need 8 pencils for your class. Cost = 4 × 8 = K32. That's within K99!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Counting Change</div>
                <p>If you have K50 and you buy 6 notebooks at K6 each (6 × 6 = K36), your change is K50 - K36 = K14.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Budget Check</div>
                <p>Always check if your total is less than or equal to K99! K99 is your spending limit.</p>
            </div>
        `,
        taskInstructions: "Solve real-world money problems involving multiplication up to K99.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Total Cost</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the total cost for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5 apples at K8 each = ______</div>
                        <div>b) 4 loaves of bread at K12 each = ______</div>
                        <div>c) 7 bottles of water at K5 each = ______</div>
                        <div>d) 3 bags of rice at K25 each = ______</div>
                        <div>e) 6 kg of sugar at K9 per kg = ______</div>
                        <div>f) 2 toy cars at K35 each = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Can You Afford It?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle YES if the total is K99 or less. Circle NO if it is more.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8 shirts at K12 each = K96 → YES / NO</div>
                        <div>b) 10 pairs of socks at K10 each = K100 → YES / NO</div>
                        <div>c) 5 backpacks at K20 each = K100 → YES / NO</div>
                        <div>d) 6 hats at K15 each = K90 → YES / NO</div>
                        <div>e) 9 drinks at K11 each = K99 → YES / NO</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> You have K80. You want to buy 6 notebooks for K9 each. How much will it cost? Do you have enough money? How much change will you get?
                    <div class="answer-space" style="height: 70px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Your teacher needs to buy 8 storybooks at K11 each. What is the total cost? Is it less than K99?
                    <div class="answer-space" style="height: 70px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a shopping list of 3 items you would buy. Each item costs between K5 and K30. Show the total cost.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "With a family member, plan a small shopping trip (real or pretend) with a budget of K99. Write down 4 items, their prices, multiply to find the total, and calculate the change.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek8);
    console.log("grade2-mathscience-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek8);
    console.log("grade2-mathscience-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek8',
        metadata: grade2MathScienceWeek8.metadata,
        days: grade2MathScienceWeek8
    });
    console.log("grade2-mathscience-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek8 = grade2MathScienceWeek8;
console.log("grade2-mathscience-week8.js loaded and registered successfully");