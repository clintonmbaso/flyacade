// Grade 2 Math - Week 5 Data
const grade2MathWeek5 = {
    metadata: {
        grade: 2,
        subject: "Mathematics",
        week: 5,
        title: "Two-Digit Numbers and Place Value",
        description: "Understanding place value, building two-digit numbers, expanded form, and rounding"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Building Two-Digit Numbers",
        subtopic: "Creating numbers using place value",
        lessonContent: `
            <p>Today we will learn how to create two-digit numbers using place value. Two-digit numbers have two places: tens and ones!</p>
            <p><strong>Key Concept:</strong> The first digit tells us how many tens, and the second digit tells us how many ones. Together they make a two-digit number.</p>
            <p>When we write numbers, the position of each digit is important. The <strong>tens place</strong> comes first, and the <strong>ones place</strong> comes second.</p>
            <p><strong>Remember:</strong> You can use place value blocks or draw pictures to help you understand tens and ones!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: The number 24</div>
                <p>2 tens + 4 ones = 24</p>
                <p>📚📚 (tens) + 📚📚📚📚 (ones) = 24</p>
                <p>So 20 + 4 = 24</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: The number 53</div>
                <p>5 tens + 3 ones = 53</p>
                <p>5 groups of ten + 3 single blocks = 53</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Building 67</div>
                <p>What digit is in the tens place? 6 (means 6 tens or 60)</p>
                <p>What digit is in the ones place? 7 (means 7 ones)</p>
                <p>Together: 60 + 7 = 67</p>
            </div>
        `,
        taskInstructions: "Build these two-digit numbers. Draw tens and ones or use place value blocks if you have them!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show 3 tens and 5 ones: <span class="answer-space"></span>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Build the number 42 using tens and ones:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> What number has 6 tens and 8 ones? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create the number 79 with blocks or drawing:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Challenge: If I have 9 tens and 0 ones, what number is that? <span class="answer-space"></span>
            </div>
        `,
        homework: "Find 5 two-digit numbers around your house (clocks, calendars, books). Write each number and show the tens and ones.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Expanded Form for Two-Digit Numbers",
        subtopic: "Writing numbers as tens plus ones",
        lessonContent: `
            <p>Today we will learn about expanded form. Expanded form shows the value of each digit in a number!</p>
            <p><strong>Key Concept:</strong> Expanded form breaks a number into its parts: how many tens plus how many ones.</p>
            <p><strong>Strategy:</strong> Look at each digit's place value. The tens digit × 10 plus the ones digit = the number.</p>
            <p><strong>Example:</strong> 34 = 30 + 4 (3 tens = 30, plus 4 ones = 4)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 25 in expanded form</div>
                <p>25 = 20 + 5</p>
                <p>Why? 2 tens = 20, 5 ones = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 61 in expanded form</div>
                <p>61 = 60 + 1</p>
                <p>6 tens = 60, 1 one = 1</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: From expanded form to standard form</div>
                <p>40 + 7 = 47</p>
                <p>80 + 2 = 82</p>
                <p>90 + 0 = 90</p>
            </div>
        `,
        taskInstructions: "Write these numbers in expanded form. Remember to show the tens value and ones value separately!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 38 = <span class="answer-space"></span> + <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 54 = <span class="answer-space"></span> + <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 72 = <span class="answer-space"></span> + <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 19 = <span class="answer-space"></span> + <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 60 = <span class="answer-space"></span> + <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Put back together: 50 + 6 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Put back together: 80 + 3 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">8</span> Challenge: 40 + 0 = <span class="answer-space"></span>
            </div>
        `,
        homework: "Write your age and the ages of 4 family members in expanded form.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Place Value Blocks and Manipulatives", 
        subtopic: "Using tools to understand tens and ones",
        lessonContent: `
            <p>Today we will use place value blocks (also called base-ten blocks) to understand numbers better. These tools help us see math!</p>
            <p><strong>Types of blocks:</strong></p>
            <ul>
                <li><strong>Ones blocks:</strong> Small cubes (each = 1)</li>
                <li><strong>Tens rods:</strong> Long rods made of 10 cubes (each = 10)</li>
            </ul>
            <p><strong>Remember:</strong> 10 ones blocks can be traded for 1 tens rod. This is called "regrouping."</p>
            <p>We can use these blocks to build numbers, compare numbers, and understand place value visually.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Showing 34 with blocks</div>
                <p>34 needs: 3 tens rods + 4 ones cubes</p>
                <p>📏📏📏 (tens rods) + ⬛⬛⬛⬛ (ones cubes)</p>
                <p>Each tens rod = 10, so 3 rods = 30</p>
                <p>Plus 4 ones = 4</p>
                <p>Total = 34</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Trading blocks</div>
                <p>If you have 12 ones cubes, you can trade 10 of them for 1 tens rod.</p>
                <p>So 12 ones = 1 ten + 2 ones</p>
                <p>That's the number 12!</p>
            </div>
        `,
        taskInstructions: "Solve these problems. Draw the blocks or use real ones if you have them!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show 25 using tens and ones blocks:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> How many tens and ones in 47?
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> You have 5 tens rods and 8 ones cubes. What number is that? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Trade time! You have 15 ones cubes. How many tens can you make? <span class="answer-space"></span> How many ones left? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw blocks for the number 63:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Use small objects (beans, coins, buttons) to make groups of ten. Show 3 different numbers using your groups.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Rounding to the Nearest Ten", 
        subtopic: "Making numbers simpler",
        lessonContent: `
            <p>Today we'll learn how to round numbers to the nearest ten. Rounding helps us estimate and work with simpler numbers!</p>
            <p><strong>Key Concept:</strong> We look at the ones digit to decide whether to round up or down.</p>
            <p><strong>Rounding Rules:</strong></p>
            <ul>
                <li>If the ones digit is 0, 1, 2, 3, or 4 → Round <strong>DOWN</strong> to the previous ten</li>
                <li>If the ones digit is 5, 6, 7, 8, or 9 → Round <strong>UP</strong> to the next ten</li>
            </ul>
            <p><strong>Tip:</strong> Use a number line to help visualize! Find which ten the number is closer to.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Round 34 to the nearest ten</div>
                <p>Ones digit is 4 → Round DOWN</p>
                <p>34 is between 30 and 40</p>
                <p>34 is closer to 30 than 40</p>
                <p>Answer: 30</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Round 67 to the nearest ten</div>
                <p>Ones digit is 7 → Round UP</p>
                <p>67 is between 60 and 70</p>
                <p>67 is closer to 70 than 60</p>
                <p>Answer: 70</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Round 25 to the nearest ten</div>
                <p>Special rule: 25 is exactly halfway between 20 and 30</p>
                <p>When it's 5, we round UP</p>
                <p>Answer: 30</p>
            </div>
        `,
        taskInstructions: "Round these numbers to the nearest ten. Use the rules or draw a number line!",
        taskContent: `
            <div class="content-box">
                <p><strong>Round to the nearest ten:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 23 → <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 48 → <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 71 → <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 15 → <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 86 → <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Number line practice:</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a number line from 20 to 40. Show where 33 is. Round it.
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Real-world rounding:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> There are 47 students in our class. About how many is that to the nearest ten? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A book has 62 pages. Rounded to the nearest ten, about how many pages? <span class="answer-space"></span>
                </div>
            </div>
        `,
        homework: "Find 5 numbers in your home (pages in books, items in boxes, etc.). Round each to the nearest ten.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Word Problems Involving Place Value",
        subtopic: "Applying place value to real situations",
        lessonContent: `
            <p>Today we will use our place value skills to solve word problems. This is how we use math in everyday life!</p>
            <p><strong>Strategy:</strong> Read carefully, identify what's being asked, and use place value to solve.</p>
            <p><strong>Steps to solve place value word problems:</strong></p>
            <ol>
                <li>Read the problem slowly</li>
                <li>Find the numbers and what they represent</li>
                <li>Decide if you need to use tens, ones, or both</li>
                <li>Write the number sentence or draw a picture</li>
                <li>Solve and check your answer</li>
            </ol>
            <p><strong>Remember:</strong> You can use expanded form, place value blocks, or rounding to help solve!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Word Problem</div>
                <p><strong>Story:</strong> Sara has 3 boxes with 10 cookies each, and 5 loose cookies. How many cookies total?</p>
                <p><strong>Step 1:</strong> 3 boxes of 10 = 30 cookies (3 tens)</p>
                <p><strong>Step 2:</strong> 5 loose cookies = 5 ones</p>
                <p><strong>Step 3:</strong> Combine: 30 + 5 = 35 cookies</p>
                <p><strong>Answer:</strong> Sara has 35 cookies.</p>
            </div>
        `,
        taskInstructions: "Solve these word problems. Show your work using place value strategies!",
        taskContent: `
            <div class="content-box">
                <p><strong>Solve these place value problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Tom has 4 packs of markers with 10 markers each, plus 3 single markers. How many markers? <span class="answer-space"></span>
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A number has 7 tens and 9 ones. What number is it? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> There are 58 students at a party. Rounded to the nearest ten, about how many? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write 46 in expanded form: <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Create your own:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write a word problem using tens and ones:
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Solve the problem you wrote:
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Weekly Review Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Use place value blocks to show why 34 is different from 43:
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Find 3 real-life situations where you use place value. Write them as word problems and solve.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathWeek5);
    console.log("grade2math-week05.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathWeek5);
    console.log("grade2math-week05.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathWeek5',
        metadata: grade2MathWeek5.metadata,
        days: grade2MathWeek5
    });
    console.log("grade2math-week05.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathWeek5 = grade2MathWeek5;
console.log("grade2math-week05.js loaded and registered successfully");