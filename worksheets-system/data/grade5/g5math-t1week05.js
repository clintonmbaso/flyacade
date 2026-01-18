// Grade 5 Math - Week 5 Data
const grade5MathWeek5 = {
    metadata: {
        grade: 5,
        subject: "Math",
        term: 1,
        week: 5,
        title: "Fractions Operations and Applications",
        description: "Equivalent fractions, comparing, adding, subtracting, and multiplying fractions with whole numbers and other fractions"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Equivalent Fractions and Ordering",
        subtopic: "Understanding Fraction Equivalence",
        lessonContent: `
            <p>Welcome to our exploration of equivalent fractions! This week we will learn how different fractions can represent the same value and how to compare their sizes.</p>
            <p><strong>Key Concept:</strong> Multiplying or dividing the numerator and denominator by the same number maintains the fraction's value.</p>
            <p><strong>What Are Equivalent Fractions?</strong></p>
            <ul>
                <li>Fractions that have different numerators and denominators but represent the same value</li>
                <li>Example: 1/2 = 2/4 = 3/6 = 4/8</li>
                <li>They occupy the same amount of space on a fraction wall or visual model</li>
            </ul>
            <p><strong>How to Create Equivalent Fractions:</strong></p>
            <ol>
                <li><strong>Scaling Up (Multiply):</strong> Multiply both numerator and denominator by the same number</li>
                <li><strong>Scaling Down (Divide):</strong> Divide both numerator and denominator by the same number</li>
                <li><strong>Golden Rule:</strong> What you do to the top, you must do to the bottom!</li>
            </ol>
            <p><strong>Fraction Walls:</strong> Visual tools that show fractions stacked on top of each other to easily see equivalents.</p>
            <p><strong>Why Learn This?</strong> Equivalent fractions help us compare, add, and subtract fractions easily.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-equals"></i> Equivalent Fractions Example</div>
                <p>To find fractions equivalent to 1/2, multiply both numbers by 2: 2/4, by 3: 3/6, by 4: 4/8.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Fraction Wall Visual</div>
                <p>On a fraction wall, 1/2 takes up the same space as 2/4, 3/6, and 4/8. They line up perfectly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Quick Tip</div>
                <p>When comparing fractions, if you can't tell which is bigger, convert them to equivalent fractions with the same denominator.</p>
            </div>
        `,
        taskInstructions: "Practice creating equivalent fractions and comparing their values.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Creating Equivalent Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find three equivalent fractions for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1/3 = ______ = ______ = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 2/5 = ______ = ______ = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 3/4 = ______ = ______ = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Simplifying Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Simplify these fractions to their lowest terms:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4/8 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 6/9 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 10/15 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 12/18 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparing Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use >, <, or = to compare:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1/2 ______ 3/6</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 2/3 ______ 3/5</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 4/7 ______ 5/8</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 3/4 ______ 7/8</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which discount is better: 1/2 off or 2/5 off? Show your work:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three examples of equivalent fractions in your daily life (recipes, measurements, etc.) and write them down.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Adding and Subtracting Fractions",
        subtopic: "Fractions with Different Denominators",
        lessonContent: `
            <p>Today we will learn how to add and subtract fractions with different denominators. This is like combining pieces from different puzzles – we need to make them fit first!</p>
            <p><strong>Key Concept:</strong> Finding a Least Common Multiple (LCM) to create a common denominator before performing operations.</p>
            <p><strong>The Challenge:</strong> We can only add or subtract fractions when they have the same denominator.</p>
            <p><strong>Step-by-Step Process:</strong></p>
            <ol>
                <li><strong>Find the Common Ground:</strong> Identify the Least Common Multiple (LCM) of the denominators</li>
                <li><strong>The Conversion Step:</strong> Convert both fractions to equivalent forms with the new common denominator</li>
                <li><strong>Perform the Operation:</strong> Add or subtract the numerators while keeping the denominator the same</li>
                <li><strong>Simplify:</strong> Reduce the answer to its simplest form if possible</li>
            </ol>
            <p><strong>Finding the LCM:</strong> The smallest number that both denominators divide into evenly.</p>
            <p><strong>Why This Matters:</strong> This skill helps us combine measurements, mix ingredients, and solve real-world problems involving parts of wholes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Addition Example</div>
                <p>1/4 + 1/3 = ? LCM of 4 and 3 is 12. Convert: 3/12 + 4/12 = 7/12</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus-circle"></i> Subtraction Example</div>
                <p>3/4 - 1/6 = ? LCM of 4 and 6 is 12. Convert: 9/12 - 2/12 = 7/12</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> LCM Finding Tip</div>
                <p>List the multiples of each denominator. The first number that appears in both lists is your LCM!</p>
            </div>
        `,
        taskInstructions: "Practice adding and subtracting fractions with different denominators.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding Common Denominators</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the LCM for each pair of denominators:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3 and 4: ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 5 and 2: ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 6 and 8: ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 4 and 10: ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add these fractions. Show all steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1/3 + 1/4 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. 2/5 + 3/10 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. 5/6 + 1/8 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Subtracting Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Subtract these fractions. Show all steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3/4 - 1/6 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. 7/8 - 1/2 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. 4/5 - 2/3 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A recipe calls for 1/4 cup of water and 1/3 cup of milk. How much liquid is needed in total?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> You had 3/4 of a pizza. You ate 1/6 of it. How much pizza is left?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create two word problems involving addition and subtraction of fractions. Solve them and bring to class.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Multiplying Fractions by Whole Numbers",
        subtopic: "Repeated Addition and Scaling",
        lessonContent: `
            <p>Today we will learn how to multiply whole numbers by fractions. Think of this as repeated addition or finding a fraction of a whole number.</p>
            <p><strong>Key Concept:</strong> A whole number can be treated as a fraction with a denominator of 1 (e.g., 5 = 5/1).</p>
            <p><strong>Three Ways to Think About It:</strong></p>
            <ol>
                <li><strong>Repeated Addition:</strong> 3 × 1/4 = 1/4 + 1/4 + 1/4 = 3/4</li>
                <li><strong>Fraction of a Set:</strong> 1/3 of 12 oranges = 12 ÷ 3 = 4 oranges</li>
                <li><strong>Multiplication Rule:</strong> Multiply the whole number by the numerator, keep the denominator</li>
            </ol>
            <p><strong>The Calculation Rule:</strong> Whole Number × Fraction = (Whole Number × Numerator) / Denominator</p>
            <p><strong>Visual Models:</strong></p>
            <ul>
                <li>Number lines showing repeated jumps</li>
                <li>Groups of objects (like 1/3 of 12 circles)</li>
                <li>Rectangles divided into equal parts</li>
            </ul>
            <p><strong>Why This Matters:</strong> We use this when calculating distances, sharing items, or determining portions in recipes and measurements.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-redo"></i> Repeated Addition</div>
                <p>4 × 2/3 = 2/3 + 2/3 + 2/3 + 2/3 = 8/3 = 2 2/3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group"></i> Fraction of a Set</div>
                <p>2/5 of 15 = (15 ÷ 5) × 2 = 3 × 2 = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Calculation Shortcut</div>
                <p>5 × 3/8 = (5×3)/8 = 15/8 = 1 7/8. Multiply top, keep bottom!</p>
            </div>
        `,
        taskInstructions: "Practice multiplying whole numbers by fractions using different methods.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Repeated Addition Method</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve using repeated addition:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3 × 1/5 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. 4 × 2/7 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. 5 × 3/10 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fraction of a Set</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the fraction of each set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1/4 of 20 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 2/3 of 18 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 3/5 of 25 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 4/7 of 21 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Direct Multiplication</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the multiplication rule. Simplify answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 6 × 2/3 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. 8 × 3/4 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. 9 × 5/6 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>d. 12 × 2/5 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you run 1/2 km every day for 5 days, how far do you run in total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A recipe needs 3/4 cup of flour per batch. How much flour is needed for 6 batches?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> There are 24 students in class. 5/8 are girls. How many girls are there?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three examples in your home where you might need to multiply a whole number by a fraction.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Multiplying Fractions by Fractions",
        subtopic: "Finding a Part of a Part",
        lessonContent: `
            <p>Today we will learn how to multiply a fraction by another fraction. This is like finding "a part of a part" – such as half of a half!</p>
            <p><strong>Key Concept:</strong> Multiply numerators together and denominators together.</p>
            <p><strong>The Algorithm:</strong> Top × Top, Bottom × Bottom</p>
            <p><strong>Visual Understanding:</strong></p>
            <ul>
                <li><strong>Area Models:</strong> Use grid paper to show multiplication visually</li>
                <li>Example: 1/2 × 1/2 = 1/4 – shade half of a half-shaded square</li>
                <li>This shows why the product is smaller than both original fractions</li>
            </ul>
            <p><strong>Step-by-Step Process:</strong></p>
            <ol>
                <li>Multiply the numerators (top numbers)</li>
                <li>Multiply the denominators (bottom numbers)</li>
                <li>Simplify the resulting fraction if possible</li>
            </ol>
            <p><strong>Simplifying Before Multiplying:</strong> Sometimes you can cancel common factors between numerators and denominators before multiplying.</p>
            <p><strong>Why This Matters:</strong> We use this when splitting portions, calculating probabilities, and solving real-world problems involving fractional parts.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> Basic Multiplication</div>
                <p>1/2 × 1/3 = (1×1)/(2×3) = 1/6. One half of one third is one sixth.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th-large"></i> Area Model</div>
                <p>Draw a rectangle, divide into 3 columns and 4 rows. Shade 2/3 of 3/4 to visually show 2/3 × 3/4 = 6/12 = 1/2.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt"></i> Cancelling Shortcut</div>
                <p>2/3 × 3/5 = 2/5 (the 3's cancel out). Cancel common factors before multiplying to make calculations easier!</p>
            </div>
        `,
        taskInstructions: "Practice multiplying fractions by fractions using different strategies.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Fraction Multiplication</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Multiply these fractions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1/2 × 1/4 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 2/3 × 3/5 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 3/4 × 2/7 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 5/6 × 3/10 = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Simplifying Before Multiplying</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Cancel common factors first, then multiply:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4/5 × 10/12 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. 6/8 × 2/3 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. 9/15 × 5/6 = ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Visual Representation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw an area model to show 2/3 × 1/2:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">What fraction of the whole is shaded? ______</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Half a cake is left. You eat half of that remainder. What fraction of the whole cake did you eat?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A recipe needs 2/3 cup of sugar. You only want to make 1/2 of the recipe. How much sugar do you need?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> You have completed 3/4 of your homework. You plan to do 2/3 of the remaining work tonight. What fraction of the total homework will you complete tonight?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a word problem involving multiplying fractions by fractions. Solve it and be ready to share on Monday.",
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