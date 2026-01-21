// Grade 3 Math - Week 8 Data
const grade3MathWeek8 = {
    metadata: {
        grade: 3,
        subject: "Mathematics",
        week: 8,
        title: "Introduction to Fractions",
        description: "Learning about fractions, numerators, denominators, comparing, and basic operations"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Fractions",
        subtopic: "What are fractions?",
        lessonContent: `
            <p>Welcome to the world of fractions! This week we will learn about parts of a whole and how to use fractions.</p>
            <p><strong>Key Concept:</strong> A fraction represents equal parts of a whole. When we divide something into equal pieces, each piece is a fraction of the whole.</p>
            <p><strong>Parts of a Fraction:</strong> A fraction has two parts:</p>
            <ul>
                <li><strong>Numerator</strong> (top number): How many parts we have</li>
                <li><strong>Denominator</strong> (bottom number): How many equal parts the whole is divided into</li>
            </ul>
            <p><strong>Remember:</strong> Fractions are everywhere - when you share pizza, divide candy, or cut paper!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 1/2 (one-half)</div>
                <p>If a pizza is cut into 2 equal slices and you have 1 slice, you have 1/2 of the pizza.</p>
                <p>Numerator: 1, Denominator: 2</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 3/4 (three-fourths)</div>
                <p>If a cake is divided into 4 equal pieces and you take 3 pieces, you have 3/4 of the cake.</p>
                <p>Numerator: 3, Denominator: 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 2/3 (two-thirds)</div>
                <p>If a chocolate bar is divided into 3 equal parts and you eat 2 parts, you ate 2/3 of the bar.</p>
                <p>Numerator: 2, Denominator: 3</p>
            </div>
        `,
        taskInstructions: "Identify and write the fractions shown. Use fraction strips or draw pictures to help!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write the fraction for 3 out of 5 equal parts: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Shade 1/4 of this circle:
                <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; background: white;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> If a rectangle is divided into 8 equal parts and 5 are colored, what fraction is colored? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a square divided into 3 equal parts. Color 2 parts:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> What fraction of these stars are shaded? ★★★☆☆ (3 shaded, 2 not shaded) <span class="answer-space"></span>
            </div>
        `,
        homework: "Find 3 examples of fractions in your home (food items, divided objects, etc.). Draw or describe them.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Understanding Numerators and Denominators",
        subtopic: "Parts of a fraction",
        lessonContent: `
            <p>Today we'll dive deeper into the two important parts of every fraction: the numerator and denominator.</p>
            <p><strong>Numerator:</strong> The top number tells us how many parts we have or are considering.</p>
            <p><strong>Denominator:</strong> The bottom number tells us how many equal parts the whole is divided into.</p>
            <p><strong>Reading Fractions:</strong> We read fractions from top to bottom. For example, 3/5 is read as "three-fifths."</p>
            <p><strong>Special Names:</strong>
                <br>1/2 = one-half
                <br>1/3 = one-third
                <br>1/4 = one-fourth or one-quarter
                <br>1/5 = one-fifth
            </p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 4/7</div>
                <p>Numerator: 4 (we have 4 parts)</p>
                <p>Denominator: 7 (the whole is divided into 7 equal parts)</p>
                <p>Read as: "four-sevenths"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 2/8</div>
                <p>Numerator: 2</p>
                <p>Denominator: 8</p>
                <p>Read as: "two-eighths"</p>
                <p>This can also be simplified to 1/4, but we'll learn that later!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 5/6</div>
                <p>Numerator: 5</p>
                <p>Denominator: 6</p>
                <p>Read as: "five-sixths"</p>
                <p>If you have 5 out of 6 pieces, you have almost the whole thing!</p>
            </div>
        `,
        taskInstructions: "Identify the numerator and denominator in each fraction. Then write how to read each fraction.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> For 3/9: Numerator = <span class="answer-space" style="width: 50px;"></span>, Denominator = <span class="answer-space" style="width: 50px;"></span>, Read as: <span class="answer-space" style="width: 100px;"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> For 7/10: Numerator = <span class="answer-space" style="width: 50px;"></span>, Denominator = <span class="answer-space" style="width: 50px;"></span>, Read as: <span class="answer-space" style="width: 100px;"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a fraction with numerator 2 and denominator 5. Shade it correctly:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Write the fraction for: "three-tenths" <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> If the denominator is 8 and the numerator is 5, what fraction is it? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Challenge: Create your own fraction with different numerator and denominator:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Write 5 different fractions. For each, label the numerator and denominator, and write how to read it.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Comparing Fractions", 
        subtopic: "Which fraction is larger?",
        lessonContent: `
            <p>Today we'll learn how to compare fractions to see which is larger or smaller.</p>
            <p><strong>Important Rule:</strong> When denominators are the same (like denominators), we compare numerators!</p>
            <p><strong>Comparing Strategy:</strong> If denominators are the same, the fraction with the larger numerator is larger.</p>
            <p>Example: 3/5 vs 2/5 → Same denominator (5), so compare numerators: 3 > 2, so 3/5 > 2/5</p>
            <p><strong>Visual Help:</strong> Draw fraction circles or bars to help you see which fraction represents more of the whole.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 4/7 vs 5/7</div>
                <p>Both have denominator 7 (same-sized pieces)</p>
                <p>Compare numerators: 4 vs 5</p>
                <p>5 > 4, so 5/7 > 4/7</p>
                <p>5/7 is larger than 4/7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 2/8 vs 6/8</div>
                <p>Same denominator: 8</p>
                <p>Compare numerators: 2 vs 6</p>
                <p>6 > 2, so 6/8 > 2/8</p>
                <p>Visual: 6 out of 8 pieces is more than 2 out of 8 pieces</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 3/4 vs 1/4</div>
                <p>Same denominator: 4</p>
                <p>Compare numerators: 3 vs 1</p>
                <p>3 > 1, so 3/4 > 1/4</p>
                <p>3/4 is much larger than 1/4</p>
            </div>
        `,
        taskInstructions: "Compare these fractions using > (greater than), < (less than), or = (equal). Draw pictures if it helps!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 2/5 <span class="answer-space" style="width: 30px;"></span> 4/5
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 7/8 <span class="answer-space" style="width: 30px;"></span> 3/8
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 1/3 <span class="answer-space" style="width: 30px;"></span> 2/3
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw to compare 3/6 and 5/6:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Which is larger: 4/10 or 7/10? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Order from smallest to largest: 2/9, 5/9, 1/9, 7/9
                <span class="answer-space" style="width: 200px;"></span>
            </div>
        `,
        homework: "Find 4 pairs of fractions with like denominators around you. Compare them using >, <, or =.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Adding and Subtracting Fractions", 
        subtopic: "With like denominators",
        lessonContent: `
            <p>Today we'll learn how to add and subtract fractions when they have the same denominator (like denominators).</p>
            <p><strong>Adding Fractions:</strong> When denominators are the same, add the numerators and keep the denominator.</p>
            <p>Example: 2/7 + 3/7 = (2+3)/7 = 5/7</p>
            <p><strong>Subtracting Fractions:</strong> When denominators are the same, subtract the numerators and keep the denominator.</p>
            <p>Example: 5/8 - 2/8 = (5-2)/8 = 3/8</p>
            <p><strong>Important:</strong> The denominator tells us the size of the pieces. If pieces are the same size, we can just count how many we have!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 1/4 + 2/4 = 3/4</div>
                <p>Same denominator (4), so add numerators: 1 + 2 = 3</p>
                <p>Keep denominator 4</p>
                <p>Answer: 3/4</p>
                <p>Visual: 1 quarter + 2 quarters = 3 quarters</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 5/6 - 2/6 = 3/6</div>
                <p>Same denominator (6), so subtract numerators: 5 - 2 = 3</p>
                <p>Keep denominator 6</p>
                <p>Answer: 3/6</p>
                <p>This can be simplified to 1/2, but we'll keep it as 3/6 for now</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 2/5 + 2/5 = 4/5</div>
                <p>Denominator stays 5</p>
                <p>Add numerators: 2 + 2 = 4</p>
                <p>Answer: 4/5</p>
                <p>If you have 2 fifths and get 2 more fifths, you have 4 fifths</p>
            </div>
        `,
        taskInstructions: "Add or subtract these fractions. Remember to keep the denominator the same!",
        taskContent: `
            <div class="content-box">
                <p><strong>Addition:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 1/8 + 3/8 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 2/10 + 5/10 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 4/9 + 2/9 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Subtraction:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 7/12 - 3/12 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 8/11 - 2/11 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 9/10 - 4/10 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Sarah ate 3/8 of a pizza. Later she ate 2/8 more. How much pizza did she eat total? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A bottle had 7/9 of juice. Sam drank 3/9. How much is left? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Create your own addition and subtraction fraction problem:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create 3 addition and 3 subtraction fraction problems with like denominators. Solve them.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision and Quiz",
        subtopic: "Fractions Review",
        revisionContent: `
            <p>Congratulations! You've completed Week 8: Introduction to Fractions. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> What fractions are and how to identify them</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Numerators (top) and denominators (bottom)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to read and write fractions</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Comparing fractions with like denominators</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding and subtracting fractions with like denominators</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Fractions Vocabulary:</strong></p>
                <p><strong>Fraction:</strong> A number that represents part of a whole</p>
                <p><strong>Numerator:</strong> The top number in a fraction (how many parts you have)</p>
                <p><strong>Denominator:</strong> The bottom number in a fraction (how many equal parts the whole is divided into)</p>
                <p><strong>Like Denominators:</strong> Fractions with the same denominator</p>
                <p><strong>Sum/Difference:</strong> The answer when adding/subtracting fractions</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Weekly Fractions Quiz:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What is the numerator in 5/9? <span class="answer-space" style="width: 80px;"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write the fraction for "two-sevenths": <span class="answer-space" style="width: 80px;"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Compare: 3/6 <span class="answer-space" style="width: 30px;"></span> 4/6
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Add: 2/5 + 1/5 = <span class="answer-space" style="width: 80px;"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Subtract: 7/8 - 3/8 = <span class="answer-space" style="width: 80px;"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Shade 3/4 of this rectangle:
                    <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; background: white;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> If you have 4/12 of a chocolate bar and get 3/12 more, how much do you have? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What part of fractions was easiest for you this week?
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> What part was most challenging?
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create a fractions poster showing what you learned this week. Include examples!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathWeek8);
    console.log("math-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathWeek8);
    console.log("math-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathWeek8',
        metadata: grade3MathWeek8.metadata,
        days: grade3MathWeek8
    });
    console.log("math-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathWeek8 = grade3MathWeek8;
console.log("math-week8.js loaded and registered successfully");