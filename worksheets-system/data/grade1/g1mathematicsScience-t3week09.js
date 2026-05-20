// Grade 1 Mathematics & Science - Term 3 Week 9 Data
const grade1MathScienceWeek9 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 3,
        week: 9,
        title: "Relating Addition and Subtraction",
        description: "Understanding subtraction, relating it to addition, and applying to real-life quantities"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Addition and Subtraction",
        subtopic: "Subtracting Whole Numbers Up to 100",
        lessonContent: `
            <p>Welcome to our week of learning about subtraction! Today we'll learn how to take away numbers from other numbers.</p>
            <p><strong>Key Question:</strong> What does it mean to subtract?</p>
            <p><strong>Introduction:</strong> Subtraction means taking away. When we subtract, we have a group of things and we remove some. What's left is the answer!</p>
            <p><strong>Subtraction Vocabulary:</strong></p>
            <ul>
                <li><strong>Subtract:</strong> To take away</li>
                <li><strong>Minus:</strong> Another word for subtract (the - symbol)</li>
                <li><strong>Equals:</strong> What is left after subtracting (= symbol)</li>
                <li><strong>Difference:</strong> The answer in a subtraction problem</li>
            </ul>
            <p><strong>How to Subtract Numbers Up to 100:</strong></p>
            <ol>
                <li>Write the bigger number first (the whole amount)</li>
                <li>Write the number you are taking away</li>
                <li>Count backwards or use objects to find how many are left</li>
            </ol>
            <p><strong>Example:</strong> 25 - 10 = 15 (Start with 25, take away 10, left with 15)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Apple Takeaway</div>
                <p>Sarah has 15 apples. She gives 3 apples to her friend. How many apples does she have left? 15 - 3 = 12 apples!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Number Line Hop</div>
                <p>To solve 20 - 5, start at 20 on the number line and hop backwards 5 spaces. You land on 15!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Finger Counting</div>
                <p>For 8 - 3, hold up 8 fingers. Put 3 fingers down. How many fingers are still up? 5 fingers!</p>
            </div>
        `,
        taskInstructions: "Practice subtracting whole numbers up to 100 using different strategies.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Subtract Using Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw circles to show your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>23 - 5 = _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">45 - 12 = _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Subtract on a Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Show your hops on the number line:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>30 - 8 = _____</div>
                        <div class="number-line" style="height: 40px; margin-top: 5px; border: 1px solid #ccc; background: #f9f9f9;"></div>
                        <div style="margin-top: 10px;">50 - 15 = _____</div>
                        <div class="number-line" style="height: 40px; margin-top: 5px; border: 1px solid #ccc; background: #f9f9f9;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practice Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these subtraction problems:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                        <div>a) 18 - 6 = _____</div>
                        <div>b) 27 - 4 = _____</div>
                        <div>c) 42 - 10 = _____</div>
                        <div>d) 55 - 20 = _____</div>
                        <div>e) 33 - 8 = _____</div>
                        <div>f) 61 - 5 = _____</div>
                        <div>g) 84 - 12 = _____</div>
                        <div>h) 99 - 7 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read and solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Problem 1:</strong> Mom baked 36 cookies. The family ate 12 cookies. How many cookies are left?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>Problem 2:</strong> There are 45 students in the lunch line. 20 students get their food and sit down. How many students are still in line?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 10 things at home (pencils, books, toys). Count them, then take 3 away. Write the subtraction sentence.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Addition and Subtraction",
        subtopic: "Relating Subtraction to Addition",
        lessonContent: `
            <p>Today we'll discover how addition and subtraction are best friends! They work together like a team.</p>
            <p><strong>Key Question:</strong> How is subtraction related to addition?</p>
            <p><strong>Introduction:</strong> Addition and subtraction are opposites. If you know an addition fact, you can figure out a subtraction fact! This is called a "fact family."</p>
            <p><strong>Fact Families:</strong> A group of related math facts using the same three numbers.</p>
            <p><strong>Example:</strong> For the numbers 4, 2, and 6:</p>
            <ul>
                <li>Addition: 4 + 2 = 6 and 2 + 4 = 6</li>
                <li>Subtraction: 6 - 2 = 4 and 6 - 4 = 2</li>
            </ul>
            <p><strong>The Relationship Rule:</strong></p>
            <ul>
                <li>If a + b = c, then c - b = a and c - a = b</li>
                <li>Addition puts together → Subtraction takes apart</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Puzzle Partners</div>
                <p>If 7 + 3 = 10, then 10 - 3 = 7 and 10 - 7 = 3. The three numbers (7, 3, 10) are a family!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Inverse Operations</div>
                <p>Think of addition like going up stairs and subtraction like coming down. They undo each other!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> The Number Train</div>
                <p>2 + 5 = 7 means 2 and 5 join together to make 7. 7 - 5 = 2 means we take 5 away and get back to 2.</p>
            </div>
        `,
        taskInstructions: "Practice relating subtraction to addition using fact families.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Fact Family</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each addition fact, write the two subtraction facts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: 5 + 3 = 8 → 8 - 3 = 5 and 8 - 5 = 3</div>
                        <div style="margin-top: 10px;">a) 6 + 4 = 10 → _____ and _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div style="margin-top: 5px;">b) 9 + 2 = 11 → _____ and _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div style="margin-top: 5px;">c) 15 + 5 = 20 → _____ and _____</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Use Addition to Solve Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Think of the addition fact that helps you:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 12 - 4 = _____ because 4 + _____ = 12</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 5px;">b) 25 - 10 = _____ because 10 + _____ = 25</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 5px;">c) 33 - 8 = _____ because 8 + _____ = 33</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Build Your Own Fact Families</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each set of numbers, write the fact family (2 addition + 2 subtraction):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Numbers: 8, 7, 15</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 10px;">Numbers: 12, 9, 21</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 10px;">Numbers: 24, 6, 30</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Missing Number Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find the missing number using fact families:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 7 + ___ = 15 so 15 - 7 = ___</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 5px;">b) ___ + 9 = 24 so 24 - 9 = ___</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Pick 3 fact families from around your house (use numbers you see on clocks, calendars, or food packages). Write the 4 facts for each family.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Addition and Subtraction",
        subtopic: "Completing Subtraction Number Sentences",
        lessonContent: `
            <p>Today we'll practice completing subtraction number sentences. Sometimes a number is missing, and we need to find it!</p>
            <p><strong>Key Question:</strong> How can I find a missing number in a subtraction sentence?</p>
            <p><strong>Introduction:</strong> A number sentence is a math equation with numbers and symbols. Sometimes one number is missing. We can use what we know about addition and subtraction to find it!</p>
            <p><strong>Three Types of Missing Numbers:</strong></p>
            <ol>
                <li><strong>Missing answer (difference):</strong> 15 - 7 = ___</li>
                <li><strong>Missing number being subtracted:</strong> 20 - ___ = 12</li>
                <li><strong>Missing starting number (whole):</strong> ___ - 5 = 10</li>
            </ol>
            <p><strong>Strategies to Find Missing Numbers:</strong></p>
            <ul>
                <li><strong>Count backwards:</strong> For 15 - 7 = ___, start at 15 and count back 7</li>
                <li><strong>Use fact families:</strong> For 20 - ___ = 12, think 12 + ___ = 20</li>
                <li><strong>Draw pictures:</strong> Draw the whole, cross out what's taken away</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Missing Answer</div>
                <p>42 - 8 = ? Count back: 42, 41, 40, 39, 38, 37, 36, 35. Answer = 35!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-undo-alt"></i> Missing Subtracted Number</div>
                <p>25 - ___ = 18. Think: 18 + ___ = 25. 18 + 7 = 25. So the missing number is 7!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Missing Starting Number</div>
                <p>___ - 9 = 14. Think: 14 + 9 = 23. So the missing number is 23! Check: 23 - 9 = 14 ✓</p>
            </div>
        `,
        taskInstructions: "Complete subtraction number sentences by finding missing numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Missing Difference</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve for the missing number (difference):
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>a) 16 - 4 = ___</div>
                        <div>b) 28 - 7 = ___</div>
                        <div>c) 35 - 10 = ___</div>
                        <div>d) 44 - 6 = ___</div>
                        <div>e) 52 - 8 = ___</div>
                        <div>f) 67 - 5 = ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Missing Number Being Subtracted</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the number that is being taken away:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>a) 20 - ___ = 15</div>
                        <div>b) 30 - ___ = 22</div>
                        <div>c) 45 - ___ = 40</div>
                        <div>d) 50 - ___ = 38</div>
                        <div>e) 73 - ___ = 70</div>
                        <div>f) 86 - ___ = 80</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Missing Starting Number</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find the number you start with:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>a) ___ - 3 = 12</div>
                        <div>b) ___ - 6 = 18</div>
                        <div>c) ___ - 8 = 24</div>
                        <div>d) ___ - 5 = 35</div>
                        <div>e) ___ - 10 = 27</div>
                        <div>f) ___ - 7 = 43</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these mixed missing number problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 38 - ___ = 31</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 5px;">b) ___ - 9 = 46</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 5px;">c) 55 - 12 = ___</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 5px;">d) ___ - 4 = 29</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 5px;">e) 64 - ___ = 57</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write one subtraction sentence with a missing number. Trade with a partner!
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create 5 subtraction problems with missing numbers. Give them to a family member to solve, then check together.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Addition and Subtraction",
        subtopic: "Using Subtraction for Real-Life Quantities",
        lessonContent: `
            <p>Today we'll use subtraction to solve real problems we face every day!</p>
            <p><strong>Key Question:</strong> How do we use subtraction in real life?</p>
            <p><strong>Introduction:</strong> We use subtraction all the time without even thinking about it! When we share snacks, count how many toys are left, or figure out how many more days until a birthday - we are subtracting!</p>
            <p><strong>Real-Life Subtraction Situations:</strong></p>
            <ul>
                <li><strong>Shopping:</strong> How much money is left after buying something?</li>
                <li><strong>Cooking:</strong> How many eggs are left after using some?</li>
                <li><strong>Time:</strong> How many minutes until recess ends?</li>
                <li><strong>Sharing:</strong> How many cookies are left after sharing?</li>
                <li><strong>Games:</strong> How many points are left to win?</li>
            </ul>
            <p><strong>Steps to Solve Real-Life Subtraction Problems:</strong></p>
            <ol>
                <li>Read the problem carefully</li>
                <li>Find the starting number (whole)</li>
                <li>Find the number being taken away</li>
                <li>Subtract to find what's left</li>
                <li>Check if your answer makes sense</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Sharing Cookies</div>
                <p>You have 24 cookies. You give 5 cookies to your friend and 3 cookies to your brother. How many do you have left? 24 - 5 = 19, then 19 - 3 = 16 cookies!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Left</div>
                <p>Recess lasts 30 minutes. You have been playing for 12 minutes. How many minutes are left? 30 - 12 = 18 minutes left!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Saving Money</div>
                <p>You have $50. You buy a toy for $18. How much money do you have left? 50 - 18 = $32 left!</p>
            </div>
        `,
        taskInstructions: "Solve real-life subtraction word problems about quantities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: School Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these school-themed problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> There are 28 pencils in the box. The teacher gives out 12 pencils. How many pencils are left in the box?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>b)</strong> 35 students are in the classroom. 9 students go to the bathroom. How many students are still in the classroom?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>c)</strong> The library has 45 books. Students check out 20 books. How many books are left?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Home & Food Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these home and food problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Mom buys 36 oranges. The family eats 11 oranges. How many oranges are left?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>b)</strong> There are 52 stickers in the sticker book. You use 8 stickers for art. How many stickers are still in the book?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>c)</strong> You have 47 toy cars. You donate 15 toy cars. How many do you keep?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shopping & Money Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these money problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> You have $60. You buy a book for $14. How much money do you have left?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>b)</strong> A video game costs $45. You have $70. How much money will you have after buying the game?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>c)</strong> You save $85. You spend $22 on a gift. How much money do you have left?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write your own real-life subtraction story. Draw a picture to go with it!
                    <div class="answer-space" style="height: 80px;"></div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Name one way you used subtraction today before this lesson:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of subtraction in your daily life (sharing food, counting toys, time left until bed). Write or draw each example with the subtraction sentence.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek9);
    console.log("grade1-mathscience-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek9);
    console.log("grade1-mathscience-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek9',
        metadata: grade1MathScienceWeek9.metadata,
        days: grade1MathScienceWeek9
    });
    console.log("grade1-mathscience-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek9 = grade1MathScienceWeek9;
console.log("grade1-mathscience-week9.js loaded and registered successfully");