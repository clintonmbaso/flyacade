// Grade 5 Math - Week 8 Data
const grade5MathWeek8 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        week: 8,
        title: "Adding and Subtracting Fractions",
        description: "Understanding and performing operations with fractions including like and unlike denominators"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Adding and Subtracting Fractions with Like Denominators",
        subtopic: "Understanding fractions as parts of a whole",
        lessonContent: `
            <p>Today we begin our exploration of fractions! Fractions represent parts of a whole. The top number (numerator) tells how many parts we have, and the bottom number (denominator) tells how many equal parts the whole is divided into.</p>
            <p><strong>Key Concept:</strong> When adding or subtracting fractions with like denominators, we only add or subtract the numerators. The denominator stays the same because the size of the parts doesn't change.</p>
            <p>When we write fraction problems, we use the <strong>+ sign</strong> for addition and <strong>- sign</strong> for subtraction, just like with whole numbers.</p>
            <p><strong>Remember:</strong> You can use visual aids like fraction circles, bars, or drawings to help you understand!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 1/4 + 2/4 = 3/4</div>
                <p>Imagine a pizza cut into 4 equal slices. If you have 1 slice and get 2 more slices, you now have 3 out of 4 slices.</p>
                <p><strong>Rule:</strong> 1/4 + 2/4 = (1+2)/4 = 3/4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 5/6 - 2/6 = 3/6</div>
                <p>If you have 5 pieces of a bar divided into 6 parts, and you give away 2 pieces, you have 3 pieces left.</p>
                <p><strong>Rule:</strong> 5/6 - 2/6 = (5-2)/6 = 3/6 (which simplifies to 1/2)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 3/8 + 3/8 = 6/8</div>
                <p>Three eighths plus three eighths equals six eighths. This simplifies to 3/4 if we reduce by dividing numerator and denominator by 2.</p>
            </div>
        `,
        taskInstructions: "Solve the following fraction problems. Use drawings or fraction manipulatives if you need help!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 2/5 + 1/5 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 7/10 - 3/10 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 3/8 + 2/8 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 9/12 - 4/12 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw a pizza divided into 6 slices. Shade 2/6 + 1/6 = <span class="answer-space"></span>
                <div class="drawing-area"></div>
            </div>
        `,
        homework: "Practice with fractions at home. Find three examples of fractions in your kitchen (like 1/2 cup, 3/4 teaspoon, etc.) and write them down.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Finding a Common Denominator",
        subtopic: "Understanding the Least Common Denominator (LCD)",
        lessonContent: `
            <p>Today we learn about common denominators. When fractions have different denominators, we can't add or subtract them directly. We need to find a common denominator first.</p>
            <p><strong>Key Concept:</strong> The Least Common Denominator (LCD) is the smallest number that both denominators divide into evenly.</p>
            <p><strong>Strategy:</strong> To find the LCD, find the Least Common Multiple (LCM) of the denominators. Then rewrite each fraction with the LCD as the new denominator.</p>
            <p><strong>Why we need common denominators:</strong> Fractions represent parts of a whole. If the parts are different sizes (different denominators), we need to make them the same size before we can combine or compare them.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Finding LCD for 1/3 and 1/4</div>
                <p>Multiples of 3: 3, 6, 9, 12, 15...</p>
                <p>Multiples of 4: 4, 8, 12, 16, 20...</p>
                <p>The smallest common multiple is 12. So LCD = 12.</p>
                <p>1/3 becomes 4/12 (multiply numerator and denominator by 4)</p>
                <p>1/4 becomes 3/12 (multiply numerator and denominator by 3)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Finding LCD for 2/5 and 3/10</div>
                <p>Multiples of 5: 5, 10, 15, 20...</p>
                <p>Multiples of 10: 10, 20, 30...</p>
                <p>The smallest common multiple is 10. So LCD = 10.</p>
                <p>2/5 becomes 4/10 (multiply numerator and denominator by 2)</p>
                <p>3/10 stays as 3/10 (already has denominator 10)</p>
            </div>
        `,
        taskInstructions: "Find the Least Common Denominator for each pair of fractions. Then rewrite each fraction with the LCD.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 1/2 and 1/3 → LCD = <span class="answer-space"></span><br>
                1/2 becomes <span class="answer-space"></span><br>
                1/3 becomes <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 2/3 and 3/4 → LCD = <span class="answer-space"></span><br>
                2/3 becomes <span class="answer-space"></span><br>
                3/4 becomes <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 3/5 and 1/10 → LCD = <span class="answer-space"></span><br>
                3/5 becomes <span class="answer-space"></span><br>
                1/10 becomes <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 1/6 and 2/9 → LCD = <span class="answer-space"></span><br>
                1/6 becomes <span class="answer-space"></span><br>
                2/9 becomes <span class="answer-space"></span>
            </div>
        `,
        homework: "Find 5 pairs of fractions in recipes or measurements at home and determine their LCD.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Adding and Subtracting Fractions with Unlike Denominators", 
        subtopic: "Applying LCD to fraction operations",
        lessonContent: `
            <p>Today we combine what we've learned! We'll add and subtract fractions with different denominators by first finding a common denominator.</p>
            <p><strong>Strategy:</strong> Follow these steps:</p>
            <ol>
                <li>Find the Least Common Denominator (LCD)</li>
                <li>Rewrite each fraction with the LCD</li>
                <li>Add or subtract the numerators</li>
                <li>Keep the denominator the same</li>
                <li>Simplify if possible</li>
            </ol>
            <p><strong>Remember:</strong> Always check if your answer can be simplified by dividing both numerator and denominator by their greatest common factor.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: 1/2 + 1/3</div>
                <p><strong>Step 1:</strong> Find LCD of 2 and 3 → 6</p>
                <p><strong>Step 2:</strong> Rewrite fractions: 1/2 = 3/6, 1/3 = 2/6</p>
                <p><strong>Step 3:</strong> Add numerators: 3 + 2 = 5</p>
                <p><strong>Step 4:</strong> Keep denominator: 5/6</p>
                <p><strong>Step 5:</strong> 5/6 cannot be simplified further</p>
                <p><strong>Answer:</strong> 1/2 + 1/3 = 5/6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: 3/4 - 1/6</div>
                <p><strong>Step 1:</strong> Find LCD of 4 and 6 → 12</p>
                <p><strong>Step 2:</strong> Rewrite fractions: 3/4 = 9/12, 1/6 = 2/12</p>
                <p><strong>Step 3:</strong> Subtract numerators: 9 - 2 = 7</p>
                <p><strong>Step 4:</strong> Keep denominator: 7/12</p>
                <p><strong>Step 5:</strong> 7/12 cannot be simplified further</p>
                <p><strong>Answer:</strong> 3/4 - 1/6 = 7/12</p>
            </div>
        `,
        taskInstructions: "Solve these fraction problems with unlike denominators. Show all your work step by step.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 1/3 + 1/4 = <span class="answer-space"></span>
                <div class="work-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 2/5 + 1/2 = <span class="answer-space"></span>
                <div class="work-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 3/4 - 1/3 = <span class="answer-space"></span>
                <div class="work-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 5/6 - 1/4 = <span class="answer-space"></span>
                <div class="work-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Challenge: 1/2 + 2/3 + 1/6 = <span class="answer-space"></span>
                <div class="work-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Create 3 addition and 3 subtraction problems with unlike denominators. Solve them and check your work.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Applying Fraction Operations to Real-World Problems", 
        subtopic: "Using fractions in practical situations",
        lessonContent: `
            <p>Today we'll see how fractions are used in real life! Fractions are everywhere - in recipes, measurements, time, and more.</p>
            <p>We'll solve practical problems that require adding and subtracting fractions.</p>
            <p><strong>Important reminder:</strong> When working with mixed numbers (whole numbers and fractions together), you can convert them to improper fractions or work with the whole and fraction parts separately.</p>
            <p><strong>Tip:</strong> Read word problems carefully. Identify what's being asked and what operations you need to perform.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Cooking with Fractions</div>
                <p><strong>Problem:</strong> A recipe calls for 1/2 cup of flour. You want to double the recipe. How much flour do you need?</p>
                <p><strong>Solution:</strong> 1/2 + 1/2 = 1 cup of flour</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Measuring Fabric</div>
                <p><strong>Problem:</strong> You have 3/4 yard of fabric. You use 1/3 yard for a project. How much fabric is left?</p>
                <p><strong>Solution:</strong> 3/4 - 1/3 = 9/12 - 4/12 = 5/12 yard remaining</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Time Management</div>
                <p><strong>Problem:</strong> You spend 1/2 hour on homework and 1/4 hour reading. How much time did you spend in total?</p>
                <p><strong>Solution:</strong> 1/2 + 1/4 = 2/4 + 1/4 = 3/4 hour (or 45 minutes)</p>
            </div>
        `,
        taskInstructions: "Solve these real-world fraction problems. Show your work and include units in your answers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Cooking Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A recipe needs 2/3 cup of milk and 1/4 cup of oil. How much liquid total? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> You have 1/2 pound of cheese. You use 1/3 pound for pizza. How much cheese is left? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Measurement Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A board is 5/8 meter long. You cut off 1/4 meter. How long is the remaining board? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> You need 3/4 yard of ribbon. You have 1/2 yard. How much more do you need? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Create Your Own:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write a real-world problem using fractions and solve it:
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of fractions used in your home (recipes, measurements, etc.) and write addition or subtraction problems using them.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Review and Assessment in Adding and Subtracting Fractions",
        subtopic: "Weekly review and practice assessment",
        revisionContent: `
            <p>Congratulations! You've completed Week 8 of Fractions. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding and subtracting fractions with like denominators</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Finding the Least Common Denominator (LCD)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Adding and subtracting fractions with unlike denominators</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Applying fraction operations to real-world problems</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Simplifying fractions after operations</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Fraction Vocabulary:</strong></p>
                <p><strong>Numerator:</strong> The top number in a fraction (how many parts you have)</p>
                <p><strong>Denominator:</strong> The bottom number in a fraction (how many equal parts the whole is divided into)</p>
                <p><strong>Least Common Denominator (LCD):</strong> The smallest number that both denominators divide into evenly</p>
                <p><strong>Simplify:</strong> To reduce a fraction by dividing both numerator and denominator by their greatest common factor</p>
                <p><strong>Equivalent Fractions:</strong> Fractions that have the same value but different numerators and denominators</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly assessment:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 2/7 + 3/7 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Find LCD for 3/5 and 2/3: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 1/2 + 1/5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 3/4 - 2/5 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> You have 5/6 of a pizza. You eat 1/3 of it. How much pizza is left? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most challenging concept this week? Why?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a visual representation of 2/3 + 1/6:
                    <div class="drawing-area"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create a fraction worksheet with 5 problems for a family member to solve. Include answer key!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek8);
    console.log("math-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek8);
    console.log("math-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek8',
        metadata: grade5MathWeek8.metadata,
        days: grade5MathWeek8
    });
    console.log("math-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek8 = grade5MathWeek8;
console.log("math-week8.js loaded and registered successfully");