// Grade 5 Math - Week 7 Data
const grade5MathWeek7 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        week: 7,
        title: "Introduction to Fractions",
        description: "Understanding fractions as parts of a whole, identifying parts of fractions, fractions on a number line, equivalent fractions, and fraction concepts"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Fractions",
        subtopic: "Understanding parts of a whole",
        lessonContent: `
            <p>Welcome to fractions! Today we begin our journey into understanding parts of a whole. Fractions are everywhere in our daily lives!</p>
            <p><strong>Key Concept:</strong> A fraction represents a part of a whole. When something is divided into equal pieces, each piece is a fraction of the whole.</p>
            <p><strong>Visualizing Fractions:</strong> We can use shapes like circles, squares, and rectangles to see fractions. When we divide a shape into equal parts, each part is a fraction of the whole shape.</p>
            <p><strong>Real-Life Examples:</strong> Fractions are used when we share food (like pizza or cake), measure ingredients in recipes, or tell time (half past, quarter to).</p>
            <p><strong>Comparing Fractions:</strong> When fractions have the same denominator (bottom number), the fraction with the larger numerator (top number) is larger.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Pizza Fractions</div>
                <p>A pizza is cut into 8 equal slices. If you eat 3 slices, you've eaten 3/8 of the pizza. The 8 represents the total slices (denominator), and 3 represents the slices eaten (numerator).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Shaded Shapes</div>
                <p>A rectangle divided into 4 equal parts with 1 part shaded represents 1/4. If 3 parts are shaded, that's 3/4.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Comparing Fractions</div>
                <p>Which is larger: 3/5 or 4/5? Since both have the same denominator (5), we compare numerators. 4 > 3, so 4/5 is larger than 3/5.</p>
            </div>
        `,
        taskInstructions: "Complete the following fraction exercises. Use visual aids if needed!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Shade 3/4 of the rectangle:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> A chocolate bar is divided into 12 equal pieces. You eat 5 pieces. What fraction of the chocolate bar did you eat? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Compare: 2/7 <span class="answer-space"></span> 5/7 (use <, >, or =)
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a circle and shade 1/3 of it:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Name two real-life examples where you use fractions:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Look for fractions around your home. Find at least 3 examples and draw or describe them.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Identifying Parts of a Fraction",
        subtopic: "Numerator and denominator",
        lessonContent: `
            <p>Today we'll learn about the two important parts of every fraction: the numerator and denominator.</p>
            <p><strong>Numerator:</strong> The top number in a fraction. It tells us how many parts we have or are considering.</p>
            <p><strong>Denominator:</strong> The bottom number in a fraction. It tells us how many equal parts the whole is divided into.</p>
            <p><strong>Visual Aid:</strong> Think of a fraction as a division problem: numerator ÷ denominator.</p>
            <p><strong>Key Relationship:</strong> The denominator must never be zero! We cannot divide something into zero parts.</p>
            <p><strong>Real-World Application:</strong> In recipes, the denominator tells you how many parts the whole recipe is divided into, and the numerator tells you how many of those parts you need.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 3/8</div>
                <p><strong>Numerator:</strong> 3 (3 parts we have)</p>
                <p><strong>Denominator:</strong> 8 (whole divided into 8 equal parts)</p>
                <p>This fraction means "3 out of 8 equal parts."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Circle Diagram</div>
                <p>A circle divided into 6 equal slices with 4 slices shaded represents 4/6. Numerator = 4, Denominator = 6.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Bar Model</div>
                <p>A bar divided into 5 equal sections with 2 sections colored represents 2/5. Numerator = 2, Denominator = 5.</p>
            </div>
        `,
        taskInstructions: "Identify the numerator and denominator in each fraction. Then answer the questions.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> For 5/9: Numerator = <span class="answer-space"></span> Denominator = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw a rectangle divided into 7 equal parts. Shade 4 parts. Write the fraction: <span class="answer-space"></span>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> A cake is cut into 10 equal slices. 7 slices are eaten. What fraction of the cake was eaten? Numerator: <span class="answer-space"></span> Denominator: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create your own fraction with numerator 3 and denominator 8. Draw it:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Why can't a fraction have 0 as the denominator? Explain:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find 5 fractions in newspapers, recipes, or advertisements. Write each with its numerator and denominator.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Fractions on a Number Line", 
        subtopic: "Plotting and understanding fractions",
        lessonContent: `
            <p>Today we'll learn how to represent fractions on a number line. This helps us understand the size and position of fractions.</p>
            <p><strong>Key Concept:</strong> A number line shows fractions as points between whole numbers. The distance from 0 to 1 is divided into equal parts based on the denominator.</p>
            <p><strong>Steps to Plot Fractions:</strong></p>
            <ol>
                <li>Divide the segment between 0 and 1 into equal parts (based on denominator)</li>
                <li>Count from 0 the number of parts shown by the numerator</li>
                <li>Mark that point on the number line</li>
            </ol>
            <p><strong>Fractions Greater Than 1:</strong> When the numerator is larger than the denominator, the fraction is greater than 1. We continue past 1 on the number line.</p>
            <p><strong>Proper vs. Improper:</strong> Fractions less than 1 are proper fractions. Fractions equal to or greater than 1 are improper fractions.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Plotting 3/4</div>
                <p>1. Divide 0 to 1 into 4 equal parts</p>
                <p>2. Each part represents 1/4</p>
                <p>3. Count 3 parts from 0: 1/4, 2/4, 3/4</p>
                <p>4. Mark the point at 3/4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: 5/3 on a number line</div>
                <p>1. Divide each whole number segment into 3 equal parts</p>
                <p>2. Start at 0 and count 5 thirds: 1/3, 2/3, 3/3 (which is 1), 4/3, 5/3</p>
                <p>3. 5/3 is located between 1 and 2 on the number line</p>
            </div>
        `,
        taskInstructions: "Plot the fractions on number lines below. Draw your number lines clearly!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Plot 2/5 on a number line from 0 to 1:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Plot 3/2 on a number line from 0 to 2:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Which is larger: 5/8 or 7/8? Plot both on the same number line to compare:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Plot these fractions in order on a number line: 1/4, 3/4, 0, 1, 5/4
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create your own fraction (proper or improper) and plot it:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Create a number line showing at least 5 different fractions between 0 and 2.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Equivalent Fractions", 
        subtopic: "Understanding equal fractions",
        lessonContent: `
            <p>Today we'll learn about equivalent fractions - different fractions that represent the same value or amount!</p>
            <p><strong>Key Concept:</strong> Equivalent fractions are different fractions that name the same number. They represent the same part of a whole.</p>
            <p><strong>Creating Equivalent Fractions:</strong> Multiply or divide both the numerator and denominator by the same number (not zero).</p>
            <p><strong>Visual Proof:</strong> If you shade 1/2 of a circle, and also shade 2/4 of an identical circle, you'll see they cover the same area.</p>
            <p><strong>Simplest Form:</strong> A fraction is in simplest form when the numerator and denominator have no common factors other than 1. We simplify by dividing both by their greatest common factor.</p>
            <p><strong>Real-Life Connection:</strong> Equivalent fractions help when resizing recipes, comparing prices, and measuring.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 1/2 = 2/4 = 4/8</div>
                <p>All these fractions represent half of something. Multiply numerator and denominator of 1/2 by 2 to get 2/4. Multiply by 4 to get 4/8.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Simplifying 6/8</div>
                <p>Find the greatest common factor of 6 and 8 (which is 2). Divide both by 2: 6÷2=3, 8÷2=4. So 6/8 simplifies to 3/4.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Fraction Strips</div>
                <p>Using fraction strips, you can see that the strip for 1/2 is the same length as strips for 2/4, 3/6, and 4/8.</p>
            </div>
        `,
        taskInstructions: "Find equivalent fractions and simplify where possible. Show your work!",
        taskContent: `
            <div class="content-box">
                <p><strong>Find 3 equivalent fractions for each:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 1/3 = <span class="answer-space"></span> = <span class="answer-space"></span> = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 2/5 = <span class="answer-space"></span> = <span class="answer-space"></span> = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Simplify to simplest form:</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> 4/12 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 9/15 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 10/25 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Visual Exercise:</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw two circles. Shade 1/2 of one and 3/6 of the other. What do you notice?
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Find a fraction equivalent to 3/4 with denominator 20: <span class="answer-space"></span>
                </div>
            </div>
        `,
        homework: "Find 3 pairs of equivalent fractions in real life (recipes, measurements, etc.). Write them down with explanations.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Fraction Concepts",
        subtopic: "Proper, improper, and mixed numbers",
        revisionContent: `
            <p>Congratulations! You've completed Week 7 of Fractions. Let's review all the important concepts we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Fractions as parts of a whole</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Numerator and denominator</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Fractions on a number line</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Equivalent fractions</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Types of fractions: proper, improper, and mixed</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Simplifying fractions</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Fraction Vocabulary:</strong></p>
                <p><strong>Proper Fraction:</strong> Numerator is less than denominator (value < 1)</p>
                <p><strong>Improper Fraction:</strong> Numerator is greater than or equal to denominator (value ≥ 1)</p>
                <p><strong>Mixed Number:</strong> A whole number and a proper fraction combined</p>
                <p><strong>Equivalent Fractions:</strong> Different fractions that represent the same value</p>
                <p><strong>Simplest Form:</strong> When numerator and denominator have no common factors except 1</p>
            </div>
            <div class="content-box">
                <p><strong>Converting Improper to Mixed:</strong></p>
                <p>Divide numerator by denominator. The quotient is the whole number, the remainder is the new numerator, and the denominator stays the same.</p>
                <p>Example: 7/3 = 7 ÷ 3 = 2 remainder 1, so 7/3 = 2 1/3</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify: 5/9 is a <span class="answer-space"></span> fraction (proper/improper)
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Convert 11/4 to a mixed number: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Simplify 8/12 to simplest form: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Plot 5/3 on a number line from 0 to 3:
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Find two fractions equivalent to 2/3: <span class="answer-space"></span> and <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Shade 3/5 of the rectangle below:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Give a real-life example where you would use fractions:
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create a fractions poster showing all the concepts learned this week. Include definitions and examples.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek7);
    console.log("grade5-math-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek7);
    console.log("grade5-math-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek7',
        metadata: grade5MathWeek7.metadata,
        days: grade5MathWeek7
    });
    console.log("grade5-math-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek7 = grade5MathWeek7;
console.log("grade5-math-week7.js loaded and registered successfully");