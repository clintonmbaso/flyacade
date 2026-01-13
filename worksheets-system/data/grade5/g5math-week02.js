// Grade 5 Math - Week 2 Data
const grade5MathWeek2 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        week: 2,
        title: "Numbers and Notations: Roman Numerals & Tallies",
        description: "Introduction to Roman numerals, tally marks, and their practical applications"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Understanding Roman Numerals",
        subtopic: "Historical origin, symbols, and basic rules",
        lessonContent: `
            <p>Today we will dive into the fascinating world of Roman numerals! This ancient system is still used today in clocks, book chapters, and movie credits.</p>
            <p><strong>Key Concept:</strong> Roman numerals are a numeral system that originated in ancient Rome. They use combinations of letters from the Latin alphabet to represent values.</p>
            <p><strong>Basic Symbols:</strong></p>
            <ul>
                <li>I = 1</li>
                <li>V = 5</li>
                <li>X = 10</li>
                <li>L = 50</li>
                <li>C = 100</li>
                <li>D = 500</li>
                <li>M = 1000</li>
            </ul>
            <p><strong>Basic Rules:</strong></p>
            <ol>
                <li>Symbols are written from left to right, largest to smallest.</li>
                <li>If a smaller symbol appears before a larger one, you subtract.</li>
                <li>If a smaller symbol appears after a larger one, you add.</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Basic Symbols</div>
                <p>III = 1 + 1 + 1 = 3</p>
                <p>VI = 5 + 1 = 6</p>
                <p>IV = 5 - 1 = 4 (smaller before larger = subtract)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Numbers 1-10</div>
                <p>I = 1, II = 2, III = 3, IV = 4, V = 5, VI = 6, VII = 7, VIII = 8, IX = 9, X = 10</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Where do we see them?</div>
                <p>• Clock faces (I, II, III, IV...)</p>
                <p>• Movie release years (MMXXIII = 2023)</p>
                <p>• Book chapter numbers</p>
            </div>
        `,
        taskInstructions: "Convert the following Roman numerals to Arabic numbers and vice versa.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> VIII = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> IX = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> XII = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Write 7 in Roman numerals: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Write 15 in Roman numerals: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Find and draw a Roman numeral you see in real life (clock, building, book):
                <div class="drawing-area"></div>
            </div>
        `,
        homework: "Memorize the basic Roman numeral symbols: I, V, X, L, C, D, M. Write each symbol 5 times with its value.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Roman Numeral Conversion",
        subtopic: "Advanced rules and practice",
        lessonContent: `
            <p>Today we will master converting between Roman and Arabic numerals. You'll learn the patterns that make this ancient system work!</p>
            <p><strong>Remember:</strong> Roman numerals don't have a zero, and they're not positional like our decimal system.</p>
            <p><strong>Advanced Rules:</strong></p>
            <ol>
                <li>You cannot repeat a symbol more than 3 times in a row.</li>
                <li>Only I, X, C, and M can be repeated (up to 3 times).</li>
                <li>Only certain subtractions are allowed: IV (4), IX (9), XL (40), XC (90), CD (400), CM (900).</li>
            </ol>
            <p><strong>Conversion Strategy:</strong></p>
            <p>Break the Roman numeral into parts, convert each part, then add or subtract as needed.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: XIV</div>
                <p>X = 10, IV = 4, but IV comes after X so we add: 10 + 4 = 14</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: XIX</div>
                <p>X = 10, IX = 9 → 10 + 9 = 19</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: XL</div>
                <p>X (10) before L (50) means subtract: 50 - 10 = 40</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 4: Writing 28</div>
                <p>20 = XX, 8 = VIII → XXVIII</p>
            </div>
        `,
        taskInstructions: "Convert the following. Pay attention to subtraction cases!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> XXIV = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> XXXIX = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> XLV = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Write 27 in Roman numerals: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Write 44 in Roman numerals: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Convert and explain: Why is 49 written as XLIX, not IL?
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
        `,
        homework: "Convert 5 Roman numerals you find around your house or in books. Write both forms.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Tallies and Roman Numerals", 
        subtopic: "Comparing counting systems",
        lessonContent: `
            <p>Today we explore another ancient counting system: tallies! We'll compare tallies and Roman numerals to see how people counted before our number system.</p>
            <p><strong>What are tallies?</strong> They are marks used for counting, usually grouped in fives for easy reading.</p>
            <p><strong>Basic Tally Rules:</strong></p>
            <ul>
                <li>Each mark (|) = 1</li>
                <li>Every fifth mark crosses the previous four (卌 or similar)</li>
                <li>Groups of five make counting large numbers easier</li>
            </ul>
            <p><strong>Relationship to Roman Numerals:</strong></p>
            <p>Both systems don't use place value. Roman numerals use letters; tallies use marks. Both were practical for their time!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Tallies for 7</div>
                <p>卌 || (5 + 2 = 7)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Tallies for 12</div>
                <p>卌 卌 || (5 + 5 + 2 = 12)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Comparing systems</div>
                <p>Number: 8</p>
                <p>Tallies: 卌 |||</p>
                <p>Roman: VIII</p>
                <p>Both represent the same quantity in different ways!</p>
            </div>
        `,
        taskInstructions: "Convert between tallies, Roman numerals, and standard numbers.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write tallies for 9: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Write Roman numeral for 卌 卌 ||| : <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Convert XIV to tallies: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Which is easier for quick counting: tallies or Roman numerals? Why?
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw tallies for 16 and write its Roman equivalent:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Use tallies to count something in your home (e.g., books, toys). Record your count.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Exploring Tallies and Their Practical Applications", 
        subtopic: "Real-world uses and grouping",
        lessonContent: `
            <p>Tallies aren't just history—they're still used today! From voting to surveys, tally marks help us count quickly and visually.</p>
            <p><strong>Modern Uses:</strong></p>
            <ul>
                <li>Scorekeeping in games</li>
                <li>Taking quick surveys or votes</li>
                <li>Tracking inventory</li>
                <li>Recording repetitions in sports</li>
            </ul>
            <p><strong>Why group in fives?</strong> It's easier for our brains to recognize groups of five than to count individual marks. This is called "subitizing."</p>
            <p><strong>Practice Scenario:</strong> Imagine you're counting votes for class president or tracking how many cars pass by.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Fruit Count</div>
                <p>Apples: 卌 卌 卌 || (5+5+5+2 = 17 apples)</p>
                <p>Bananas: 卌 卌 |||| (5+5+4 = 14 bananas)</p>
                <p>Total fruits: 17 + 14 = 31</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Survey Tally</div>
                <p>Favorite colors in class:</p>
                <p>Blue: 卌 卌 | (11)</p>
                <p>Red: 卌 ||| (8)</p>
                <p>Green: 卌 卌 卌 (15)</p>
            </div>
        `,
        taskInstructions: "Use tallies to solve these real-world scenarios. Show your tally groups clearly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Scenario 1: Class Pet Vote</strong></p>
                <p>Fish: 8 votes, Dog: 12 votes, Cat: 6 votes, Bird: 4 votes</p>
                <div class="task-item">
                    <span class="task-number">1</span> Show each pet's votes in tallies:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Which pet won? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Scenario 2: Library Books</strong></p>
                <p>Monday: 9 books returned, Tuesday: 7 books, Wednesday: 11 books, Thursday: 6 books</p>
                <div class="task-item">
                    <span class="task-number">3</span> Use tallies to track total books returned by Thursday:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Your Own Tally:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create and tally data for something in our classroom (e.g., shoe colors, backpack types):
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Tally how many times you use electricity today (lights on/off, devices). Report tomorrow.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Numbers and Notations Review",
        subtopic: "Roman numerals and tallies comparison",
        revisionContent: `
            <p>Excellent work this week! You've learned two ancient counting systems still relevant today.</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Roman numeral symbols and values (I, V, X, L, C, D, M)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Rules for reading/writing Roman numerals (addition, subtraction, repetition)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Converting between Roman and Arabic numerals</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Tally marks and grouping in fives</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Practical uses of tallies in real life</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Comparing both systems to modern numbers</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Key Vocabulary:</strong></p>
                <p><strong>Roman numerals:</strong> Ancient numeral system using letters</p>
                <p><strong>Arabic numerals:</strong> Our modern number system (0,1,2,3...)</p>
                <p><strong>Tallies:</strong> Marks used for counting, grouped in fives</p>
                <p><strong>Subitizing:</strong> Recognizing small quantities without counting</p>
                <p><strong>Conversion:</strong> Changing from one form to another</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Weekly Review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Convert XXVIII to Arabic: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write 39 in Roman numerals: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw tallies for 14: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which system is better for large numbers? Why?
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name 2 places you see Roman numerals today:
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Explain one real-world use of tallies:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Convert this tally to Roman: 卌 卌 卌 ||| :
                    <span class="answer-space"></span>
                </div>
            </div>
        `,
        homework: "Weekend project: Create a poster showing Roman numerals 1–20, their tallies, and modern equivalents.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek2);
    console.log("grade5math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek2);
    console.log("grade5math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek2',
        metadata: grade5MathWeek2.metadata,
        days: grade5MathWeek2
    });
    console.log("grade5math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek2 = grade5MathWeek2;
console.log("grade5math-week2.js loaded and registered successfully");