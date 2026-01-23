// Grade 5 Math - Week 10 Data
const grade5MathWeek10 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        week: 10,
        title: "Fractions Review",
        description: "Comprehensive review of fraction operations: addition, subtraction, multiplication, and division"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Fractions Review",
        subtopic: "Adding and Subtracting Fractions",
        lessonContent: `
            <p>Welcome back to fractions! Today we're reviewing addition and subtraction of fractions. Remember: fractions are just parts of a whole!</p>
            <p><strong>Key Concepts:</strong></p>
            <ul>
                <li><strong>Common Denominator:</strong> To add or subtract fractions, they must have the same denominator.</li>
                <li><strong>Like Fractions:</strong> Fractions with the same denominator.</li>
                <li><strong>Unlike Fractions:</strong> Fractions with different denominators – we need to find a common denominator first.</li>
            </ul>
            <p><strong>Steps for Adding/Subtracting Fractions:</strong></p>
            <ol>
                <li>Check if denominators are the same</li>
                <li>If not, find the Least Common Denominator (LCD)</li>
                <li>Convert fractions to equivalent fractions with LCD</li>
                <li>Add or subtract the numerators</li>
                <li>Keep the denominator the same</li>
                <li>Simplify if possible</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Adding with same denominator</div>
                <p>$$\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$$</p>
                <p>Denominators are the same, so just add numerators: 2 + 3 = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Subtracting with different denominators</div>
                <p>$$\\frac{3}{4} - \\frac{1}{6}$$</p>
                <p>LCD of 4 and 6 is 12</p>
                <p>$$\\frac{3}{4} = \\frac{9}{12}, \\quad \\frac{1}{6} = \\frac{2}{12}$$</p>
                <p>$$\\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}$$</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Adding mixed numbers</div>
                <p>$$2\\frac{1}{3} + 1\\frac{1}{4} = 3\\frac{7}{12}$$</p>
                <p>Add whole numbers: 2 + 1 = 3</p>
                <p>Add fractions: $$\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$</p>
            </div>
        `,
        taskInstructions: "Solve the following fraction addition and subtraction problems. Show all your work!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> $$\\frac{2}{5} + \\frac{1}{5} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> $$\\frac{3}{8} + \\frac{1}{4} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> $$\\frac{5}{6} - \\frac{1}{3} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> $$\\frac{7}{10} - \\frac{2}{5} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> $$1\\frac{1}{2} + 2\\frac{1}{3} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> $$3\\frac{3}{4} - 1\\frac{1}{2} =$$ <span class="answer-space"></span>
            </div>
        `,
        homework: "Create 5 addition/subtraction fraction problems (3 with like denominators, 2 with unlike denominators) and solve them.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Fractions Review",
        subtopic: "Multiplying Fractions",
        lessonContent: `
            <p>Today we review multiplying fractions. This is actually simpler than adding and subtracting because we don't need common denominators!</p>
            <p><strong>Key Rules for Multiplying Fractions:</strong></p>
            <ol>
                <li>Multiply the numerators together</li>
                <li>Multiply the denominators together</li>
                <li>Simplify the result</li>
            </ol>
            <p><strong>Important:</strong> You can simplify BEFORE multiplying by canceling common factors between numerators and denominators. This makes calculations easier!</p>
            <p><strong>Multiplying Mixed Numbers:</strong> First convert mixed numbers to improper fractions, then multiply as usual.</p>
            <p><strong>Remember:</strong> Multiplying by a whole number: Write the whole number as a fraction over 1 (e.g., 3 = 3/1).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Simple multiplication</div>
                <p>$$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$$</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Simplifying before multiplying</div>
                <p>$$\\frac{3}{4} \\times \\frac{8}{9}$$</p>
                <p>Simplify: 4 and 8 share factor 4, 3 and 9 share factor 3</p>
                <p>$$\\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$$</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Multiplying mixed numbers</div>
                <p>$$2\\frac{1}{2} \\times 1\\frac{1}{3}$$</p>
                <p>Convert: $$2\\frac{1}{2} = \\frac{5}{2}, \\quad 1\\frac{1}{3} = \\frac{4}{3}$$</p>
                <p>Multiply: $$\\frac{5}{2} \\times \\frac{4}{3} = \\frac{20}{6} = \\frac{10}{3} = 3\\frac{1}{3}$$</p>
            </div>
        `,
        taskInstructions: "Multiply these fractions. Simplify your answers completely!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> $$\\frac{1}{2} \\times \\frac{3}{4} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> $$\\frac{2}{3} \\times \\frac{5}{8} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> $$\\frac{4}{5} \\times \\frac{10}{12} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> $$3 \\times \\frac{2}{7} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> $$\\frac{3}{4} \\times 2\\frac{2}{3} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> $$1\\frac{1}{2} \\times 2\\frac{2}{5} =$$ <span class="answer-space"></span>
            </div>
        `,
        homework: "Find 3 real-life situations where you would multiply fractions. Write and solve a problem for each.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Fractions Review", 
        subtopic: "Dividing Fractions",
        lessonContent: `
            <p>Today we review dividing fractions. This might seem tricky, but there's a simple trick: <strong>KEEP, CHANGE, FLIP!</strong></p>
            <p><strong>Steps for Dividing Fractions:</strong></p>
            <ol>
                <li><strong>KEEP</strong> the first fraction as it is</li>
                <li><strong>CHANGE</strong> the division sign to multiplication</li>
                <li><strong>FLIP</strong> (find the reciprocal of) the second fraction</li>
                <li>Multiply as we learned yesterday</li>
                <li>Simplify your answer</li>
            </ol>
            <p><strong>Reciprocal:</strong> A fraction flipped upside down. The reciprocal of $$\\frac{a}{b}$$ is $$\\frac{b}{a}$$.</p>
            <p><strong>Why does this work?</strong> Dividing is the same as multiplying by the reciprocal. It's a mathematical rule that always works!</p>
            <p><strong>Dividing Mixed Numbers:</strong> Convert to improper fractions first, then use KEEP, CHANGE, FLIP.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Simple division</div>
                <p>$$\\frac{3}{4} \\div \\frac{2}{5}$$</p>
                <p>KEEP $$\\frac{3}{4}$$, CHANGE ÷ to ×, FLIP $$\\frac{2}{5}$$ to $$\\frac{5}{2}$$</p>
                <p>$$\\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$$</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Dividing by a whole number</div>
                <p>$$\\frac{5}{6} \\div 2$$</p>
                <p>Write 2 as $$\\frac{2}{1}$$, then flip to $$\\frac{1}{2}$$</p>
                <p>$$\\frac{5}{6} \\times \\frac{1}{2} = \\frac{5}{12}$$</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Dividing mixed numbers</div>
                <p>$$2\\frac{1}{3} \\div 1\\frac{1}{2}$$</p>
                <p>Convert: $$2\\frac{1}{3} = \\frac{7}{3}, \\quad 1\\frac{1}{2} = \\frac{3}{2}$$</p>
                <p>$$\\frac{7}{3} \\div \\frac{3}{2} = \\frac{7}{3} \\times \\frac{2}{3} = \\frac{14}{9} = 1\\frac{5}{9}$$</p>
            </div>
        `,
        taskInstructions: "Divide these fractions using KEEP, CHANGE, FLIP. Show your work!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> $$\\frac{2}{3} \\div \\frac{1}{4} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> $$\\frac{5}{8} \\div \\frac{3}{4} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> $$\\frac{4}{5} \\div \\frac{2}{3} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> $$\\frac{3}{7} \\div 2 =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> $$1\\frac{1}{2} \\div \\frac{3}{4} =$$ <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> $$3\\frac{1}{3} \\div 1\\frac{2}{3} =$$ <span class="answer-space"></span>
            </div>
        `,
        homework: "Practice KEEP, CHANGE, FLIP with 5 different division problems. Time yourself – can you get faster?",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Fractions Review", 
        subtopic: "Mixed Operations Practice",
        lessonContent: `
            <p>Let's put it all together! Today we'll practice all four fraction operations in one session.</p>
            <p><strong>Remember these key differences:</strong></p>
            <ul>
                <li><strong>Addition/Subtraction:</strong> Need common denominators</li>
                <li><strong>Multiplication:</strong> Multiply straight across (numerators × numerators, denominators × denominators)</li>
                <li><strong>Division:</strong> KEEP, CHANGE, FLIP then multiply</li>
            </ul>
            <p><strong>Order of Operations:</strong> Remember PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction). Always follow this order!</p>
            <p><strong>Problem Solving Strategy:</strong></p>
            <ol>
                <li>Identify what operation(s) to use</li>
                <li>Follow the rules for that operation</li>
                <li>Simplify your answer</li>
                <li>Check if your answer makes sense</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Mixed operations</div>
                <p>$$\\frac{1}{2} + \\frac{2}{3} \\times \\frac{1}{4}$$</p>
                <p>Multiplication first: $$\\frac{2}{3} \\times \\frac{1}{4} = \\frac{2}{12} = \\frac{1}{6}$$</p>
                <p>Then addition: $$\\frac{1}{2} + \\frac{1}{6} = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$$</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Word problem with multiple operations</div>
                <p>John eats $$\\frac{1}{4}$$ of a pizza. Mary eats $$\\frac{1}{3}$$ of what's left. How much pizza is left after both eat?</p>
                <p>First: $$1 - \\frac{1}{4} = \\frac{3}{4}$$ left after John</p>
                <p>Then: $$\\frac{1}{3} \\times \\frac{3}{4} = \\frac{3}{12} = \\frac{1}{4}$$ eaten by Mary</p>
                <p>Total eaten: $$\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$</p>
                <p>Left: $$1 - \\frac{1}{2} = \\frac{1}{2}$$</p>
            </div>
        `,
        taskInstructions: "Solve these mixed operation problems. Be careful with order of operations!",
        taskContent: `
            <div class="content-box">
                <p><strong>Calculate:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> $$\\frac{2}{3} + \\frac{1}{2} \\times \\frac{3}{4} =$$ <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> $$\\frac{5}{6} - \\frac{1}{3} \\div \\frac{2}{5} =$$ <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> $$(\\frac{1}{4} + \\frac{1}{2}) \\times \\frac{2}{3} =$$ <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A recipe needs $$\\frac{3}{4}$$ cup of flour. You want to make $$\\frac{1}{2}$$ of the recipe. How much flour do you need? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A 6-foot board is cut into pieces that are $$\\frac{2}{3}$$ foot long. How many pieces can you get? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a word problem that uses at least two different fraction operations:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Complete the practice test to prepare for tomorrow's review.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Fraction Operations Mastery",
        revisionContent: `
            <p>Congratulations! You've completed a comprehensive review of fraction operations. Let's summarize what we've mastered:</p>
            <div class="content-box">
                <p><strong>This week we reviewed:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>Adding Fractions:</strong> Find common denominators, add numerators</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>Subtracting Fractions:</strong> Find common denominators, subtract numerators</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>Multiplying Fractions:</strong> Multiply straight across, simplify</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>Dividing Fractions:</strong> KEEP, CHANGE, FLIP then multiply</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>Mixed Numbers:</strong> Convert to improper fractions first</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>Order of Operations:</strong> PEMDAS applies to fractions too!</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Fraction Vocabulary:</strong></p>
                <p><strong>Numerator:</strong> The top number in a fraction</p>
                <p><strong>Denominator:</strong> The bottom number in a fraction</p>
                <p><strong>Common Denominator:</strong> Same denominator for multiple fractions</p>
                <p><strong>Reciprocal:</strong> A fraction flipped upside down</p>
                <p><strong>Simplify:</strong> Reduce a fraction to lowest terms</p>
                <p><strong>Improper Fraction:</strong> Numerator is larger than denominator</p>
                <p><strong>Mixed Number:</strong> Whole number and fraction combined</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the final review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> $$\\frac{3}{5} + \\frac{2}{3} =$$ <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> $$\\frac{7}{8} - \\frac{1}{2} =$$ <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> $$\\frac{4}{9} \\times \\frac{3}{8} =$$ <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> $$\\frac{5}{6} \\div \\frac{2}{3} =$$ <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> $$2\\frac{1}{4} \\times 1\\frac{1}{3} =$$ <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> You have $$\\frac{3}{4}$$ of a cake. You want to share it equally among 3 friends. How much does each friend get? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What fraction operation do you feel most confident with? Why?
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Which operation needs more practice? What will you do to improve?
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend challenge: Create a fraction operations poster showing all four operations with examples and rules.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek10);
    console.log("math-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek10);
    console.log("math-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek10',
        metadata: grade5MathWeek10.metadata,
        days: grade5MathWeek10
    });
    console.log("math-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek10 = grade5MathWeek10;
console.log("math-week10.js loaded and registered successfully");