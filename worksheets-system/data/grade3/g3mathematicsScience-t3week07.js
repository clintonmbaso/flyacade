// Grade 3 Mathematics & Science - Term 3 Week 7 Data
const grade3MathsScienceWeek7 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 3,
        week: 7,
        title: "Subtraction of Whole Numbers",
        description: "Subtracting 3, 4, and 5-digit numbers using expanded notation, borrowing, strategies, and real-world applications"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Using Expanded Notation",
        lessonContent: `
            <p>Welcome! Today we'll learn how to subtract larger numbers by breaking them apart using expanded notation.</p>
            <p><strong>Key Question:</strong> How can breaking numbers into parts help us subtract?</p>
            <p><strong>Introduction:</strong> Expanded notation means writing a number as the sum of its place values. For example: 45,678 = 40,000 + 5,000 + 600 + 70 + 8</p>
            <p><strong>Steps for Subtraction Using Expanded Notation:</strong></p>
            <ol>
                <li>Write both numbers in expanded form</li>
                <li>Subtract the smaller parts from the larger parts</li>
                <li>Add the results back together</li>
            </ol>
            <p><strong>Example:</strong> 56,789 - 23,456</p>
            <ul>
                <li>56,789 = 50,000 + 6,000 + 700 + 80 + 9</li>
                <li>23,456 = 20,000 + 3,000 + 400 + 50 + 6</li>
                <li>Subtract: (50,000-20,000) + (6,000-3,000) + (700-400) + (80-50) + (9-6)</li>
                <li>= 30,000 + 3,000 + 300 + 30 + 3 = 33,333</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Place Value Power</div>
                <p>When we write numbers in expanded form, each digit gets its own "home" (ten-thousands, thousands, hundreds, tens, ones).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Breaking It Down</div>
                <p>Think of expanded notation like breaking a chocolate bar into smaller pieces - it's easier to share (subtract) that way!</p>
            </div>
        `,
        taskInstructions: "Practice subtracting 3, 4, and 5-digit numbers using expanded notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write in Expanded Form</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers in expanded form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 45,678 = _________ + _________ + _________ + _________ + _________</div>
                        <div>b) 32,109 = _________ + _________ + _________ + _________ + _________</div>
                        <div>c) 87,654 = _________ + _________ + _________ + _________ + _________</div>
                        <div>d) 12,345 = _________ + _________ + _________ + _________ + _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Subtract Using Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these problems using expanded notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 67,891 - 23,450 = ________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) 54,321 - 12,310 = ________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) 98,765 - 34,521 = ________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>d) 45,678 - 21,234 = ________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Show Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Show your expanded notation work for 78,945 - 32,123:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Choose 3 subtraction problems from your workbook and solve them using expanded notation. Show all steps.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting with Borrowing (Up to 4 Times)",
        lessonContent: `
            <p>Today we'll master subtraction when we need to borrow from larger place values!</p>
            <p><strong>Key Question:</strong> What do we do when the top digit is smaller than the bottom digit?</p>
            <p><strong>Introduction:</strong> Borrowing (also called regrouping) is needed when the digit we are subtracting is larger than the digit we have. We borrow from the next place value to the left.</p>
            <p><strong>Steps for Borrowing:</strong></p>
            <ol>
                <li>Look at the ones place. Is the top digit smaller than the bottom digit?</li>
                <li>If yes, borrow 1 ten from the tens place (the tens digit decreases by 1, the ones digit increases by 10)</li>
                <li>Continue checking each place value (tens, hundreds, thousands, ten-thousands)</li>
                <li>You may need to borrow up to 4 times in a single problem!</li>
            </ol>
            <p><strong>Example:</strong> 50,000 - 27,384</p>
            <ul>
                <li>Ones: 0 - 4 → Borrow from tens (tens: 0 → need to borrow from hundreds...)</li>
                <li>Continue borrowing across all place values</li>
                <li>After borrowing: 49,9(9)(9)(10) - 27,384 = 22,616</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Borrowing Like Money</div>
                <p>Borrowing is like asking a friend for change. If you need 8 ones but only have 3, you "borrow" 1 ten (which becomes 10 ones) from the tens place!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-left"></i> The Borrowing Chain</div>
                <p>Sometimes borrowing creates a chain. You borrow from hundreds, but hundreds borrowed from thousands, etc. This can happen up to 4 times!</p>
            </div>
        `,
        taskInstructions: "Practice subtraction problems requiring borrowing (regrouping) up to 4 times.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify When to Borrow</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the problems that need borrowing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 45,678 - 12,345 &nbsp;&nbsp;&nbsp; b) 50,000 - 23,456 &nbsp;&nbsp;&nbsp; c) 67,890 - 34,567</div>
                        <div>d) 40,000 - 15,678 &nbsp;&nbsp;&nbsp; e) 88,888 - 44,444 &nbsp;&nbsp;&nbsp; f) 32,100 - 18,765</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Borrowing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these problems (show borrowing steps):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 52,000 - 27,365 = ________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>b) 43,100 - 18,246 = ________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>c) 60,000 - 34,789 = ________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>d) 71,205 - 38,916 = ________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> These problems need borrowing in multiple places:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 80,000 - 59,876 = ________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>b) 95,000 - 67,432 = ________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create 5 subtraction problems that require borrowing. Solve each one and circle where you borrowed each time.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtracting Whole Numbers up to 99,999 (No Regrouping)",
        lessonContent: `
            <p>Today we'll practice subtraction when no borrowing is needed!</p>
            <p><strong>Key Question:</strong> When do we NOT need to borrow in subtraction?</p>
            <p><strong>Introduction:</strong> No regrouping subtraction happens when every digit in the top number is greater than or equal to the digit below it in each place value.</p>
            <p><strong>When No Borrowing is Needed:</strong></p>
            <ul>
                <li>Ones: top digit ≥ bottom digit</li>
                <li>Tens: top digit ≥ bottom digit</li>
                <li>Hundreds: top digit ≥ bottom digit</li>
                <li>Thousands: top digit ≥ bottom digit</li>
                <li>Ten-thousands: top digit ≥ bottom digit</li>
            </ul>
            <p><strong>Example:</strong> 78,954 - 23,421</p>
            <ul>
                <li>Ones: 4 - 1 = 3</li>
                <li>Tens: 5 - 2 = 3</li>
                <li>Hundreds: 9 - 4 = 5</li>
                <li>Thousands: 8 - 3 = 5</li>
                <li>Ten-thousands: 7 - 2 = 5</li>
                <li>Answer: 55,533</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Easy Subtraction</div>
                <p>When no borrowing is needed, you can simply subtract each place value from left to right. It's that simple!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Check Before You Start</div>
                <p>Always check each place value first. If all top digits are bigger, you don't need to borrow at all!</p>
            </div>
        `,
        taskInstructions: "Practice subtraction of whole numbers up to 99,999 without regrouping.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: No Regrouping Needed</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these (no borrowing required):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 56,789 - 23,456 = ________</div>
                        <div>b) 87,654 - 34,532 = ________</div>
                        <div>c) 45,678 - 12,345 = ________</div>
                        <div>d) 98,765 - 43,210 = ________</div>
                        <div>e) 67,891 - 25,670 = ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Is Borrowing Needed?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write "Yes" or "No" for each problem (does it need borrowing?):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 45,678 - 23,459 → ________</div>
                        <div>b) 72,345 - 31,234 → ________</div>
                        <div>c) 50,000 - 12,345 → ________</div>
                        <div>d) 88,999 - 44,555 → ________</div>
                        <div>e) 63,210 - 41,203 → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create 3 subtraction problems that DO NOT need borrowing:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 subtraction problems in a newspaper, magazine, or online that don't need borrowing. Solve them and bring them to class.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Subtraction Strategies (Number Trees, Wheels, Magic Squares)",
        lessonContent: `
            <p>Today we'll explore fun and creative ways to practice subtraction!</p>
            <p><strong>Key Question:</strong> How can games and visual tools help us become better at subtraction?</p>
            <p><strong>Strategy 1: Number Trees</strong></p>
            <ul>
                <li>A number tree shows how a number can be broken into parts</li>
                <li>The top is the whole number, branches are the parts</li>
                <li>Whole - Part = Other Part</li>
            </ul>
            <p><strong>Strategy 2: Number Wheels</strong></p>
            <ul>
                <li>A circle with a center number and outer numbers</li>
                <li>Subtract the center number from each outer number</li>
            </ul>
            <p><strong>Strategy 3: Magic Squares</strong></p>
            <ul>
                <li>A grid where numbers are arranged in a special pattern</li>
                <li>Subtraction can be used to find missing numbers</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Number Tree Example</div>
                <p>If the whole number is 100 and one part is 45, the other part is 100 - 45 = 55.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle-notch"></i> Number Wheel Example</div>
                <p>Center number = 25. Outer numbers: 50, 75, 100, 30. Answers: 25, 50, 75, 5.</p>
            </div>
        `,
        taskInstructions: "Use number trees, number wheels, and magic squares to practice subtraction.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Number Trees</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Whole: 500 &nbsp;&nbsp; Part A: 200 &nbsp;&nbsp; Part B: ________</div>
                        <div>b) Whole: 1,000 &nbsp;&nbsp; Part A: 350 &nbsp;&nbsp; Part B: ________</div>
                        <div>c) Whole: 10,000 &nbsp;&nbsp; Part A: 4,500 &nbsp;&nbsp; Part B: ________</div>
                        <div>d) Whole: 75,000 &nbsp;&nbsp; Part A: 32,500 &nbsp;&nbsp; Part B: ________</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Wheel</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a number wheel with center number 100 and outer numbers: 250, 375, 500, 125, 200, 300. Subtract the center number from each:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Magic Square Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find the missing numbers in this magic square where each row subtracts to the same number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 200px; border-collapse: collapse; text-align: center;">
                            <tr>
                                <td style="border: 1px solid black; padding: 10px;">100</td>
                                <td style="border: 1px solid black; padding: 10px;">45</td>
                                <td style="border: 1px solid black; padding: 10px;">___</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; padding: 10px;">30</td>
                                <td style="border: 1px solid black; padding: 10px;">___</td>
                                <td style="border: 1px solid black; padding: 10px;">90</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; padding: 10px;">___</td>
                                <td style="border: 1px solid black; padding: 10px;">80</td>
                                <td style="border: 1px solid black; padding: 10px;">25</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `,
        homework: "Create your own number tree (with 4 branches), number wheel (with 6 outer numbers), and a 3x3 magic square. Solve all three.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Subtraction",
        subtopic: "Applying Subtraction (Quantities and Money)",
        lessonContent: `
            <p>Today we'll use subtraction in real-life situations with different quantities and money!</p>
            <p><strong>Key Question:</strong> How do we use subtraction when shopping or measuring?</p>
            <p><strong>Introduction:</strong> Subtraction helps us figure out change when buying things, differences in measurements, and how much is left after using something.</p>
            <p><strong>Real-Life Subtraction Applications:</strong></p>
            <ul>
                <li><strong>Money:</strong> Calculating change, comparing prices, finding savings</li>
                <li><strong>Measurements:</strong> Finding differences in length, weight, volume, time</li>
                <li><strong>Quantities:</strong> How many left after sharing, how many more needed</li>
            </ul>
            <p><strong>Money Example:</strong> You have K95.75. You buy a book for K42.50. Your change = K95.75 - K42.50 = K53.25</p>
            <p><strong>Quantity Example:</strong> A bag has 5,000g of rice. You use 2,350g. Rice left = 5,000 - 2,350 = 2,650g</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave"></i> Shopping Scenario</div>
                <p>You have K150. You buy a shirt for K67.50 and a cap for K25.00. How much money do you have left?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight-hanging"></i> Measurement Difference</div>
                <p>A large water bottle holds 2,500 mL. A small bottle holds 750 mL. The large bottle holds 1,750 mL more than the small bottle.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Difference</div>
                <p>If school starts at 8:00 AM and ends at 2:30 PM, how many hours is the school day? 2:30 - 8:00 = 6 hours 30 minutes.</p>
            </div>
        `,
        taskInstructions: "Solve real-world subtraction problems involving money and different quantities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Money Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these money subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) You have K200. You spend K78.50. How much is left? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) A phone costs K1,500. You have K950. How much more do you need? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) Your savings goal is K5,000. You have saved K3,275. How much more to save? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Quantity Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these quantity subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A water tank holds 10,000 liters. 3,450 liters are used. How much remains? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) A school has 650 students. 278 are absent. How many are present? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) A farmer harvested 8,500kg of maize. He sold 5,675kg. How many kg left? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these real-world problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Maria has 45,000 ml of juice. She pours 12,750 ml into cups. How much juice remains? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) A journey is 350 km. After driving 175 km, how far is left? ________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) A book has 250 pages. You read 98 pages on Monday and 67 pages on Tuesday. How many pages left? ________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a word problem about subtraction using money or quantities. Then solve it:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Go shopping with a family member (or pretend). Write down 3 items, their prices, and calculate the total cost and change from K200.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek7);
    console.log("grade3-maths-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek7);
    console.log("grade3-maths-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek7',
        metadata: grade3MathsScienceWeek7.metadata,
        days: grade3MathsScienceWeek7
    });
    console.log("grade3-maths-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek7 = grade3MathsScienceWeek7;
console.log("grade3-maths-science-week7.js loaded and registered successfully");