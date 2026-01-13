// Grade 5 Math - Week 9 Data
const grade5MathWeek9 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        week: 9,
        title: "Multiplying and Dividing Fractions",
        description: "Learning to multiply and divide fractions with whole numbers and other fractions"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Multiplying Fractions",
        subtopic: "Multiplying fractions by whole numbers",
        lessonContent: `
            <p>Welcome to Week 9! This week we'll explore how to multiply and divide fractions. Today we'll start with multiplying fractions by whole numbers.</p>
            <p><strong>Key Concept:</strong> When you multiply a fraction by a whole number, you're finding that fraction of the whole number multiple times.</p>
            <p><strong>Method:</strong> To multiply a fraction by a whole number, multiply the numerator by the whole number and keep the same denominator.</p>
            <p><strong>Remember:</strong> Whole numbers can be written as fractions too! For example, 3 = ³⁄₁</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: ½ × 4</div>
                <p>Step 1: Write 4 as ⁴⁄₁ → ½ × ⁴⁄₁</p>
                <p>Step 2: Multiply numerators: 1 × 4 = 4</p>
                <p>Step 3: Multiply denominators: 2 × 1 = 2</p>
                <p>Step 4: Simplify: ⁴⁄₂ = 2</p>
                <p><strong>Answer:</strong> ½ × 4 = 2</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: ⅔ × 3</div>
                <p>⅔ × ³⁄₁ = (2×3)/(3×1) = ⁶⁄₃ = 2</p>
                <p>This makes sense because ⅔ of 3 is 2!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: ¼ × 5</div>
                <p>¼ × ⁵⁄₁ = (1×5)/(4×1) = ⁵⁄₄ = 1¼</p>
                <p>Five quarters equals one whole and one quarter!</p>
            </div>
        `,
        taskInstructions: "Multiply the following fractions by whole numbers. Simplify your answers when possible.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> ⅓ × 6 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> ¾ × 8 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> ⅖ × 10 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> ⅞ × 4 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create your own problem: 
                <div class="drawing-area" style="height: 60px;"></div>
                <div class="answer-space"></div>
            </div>
        `,
        homework: "Find 3 real-life situations where you might multiply a fraction by a whole number. Write them down with example calculations.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Multiplying Fractions",
        subtopic: "Multiplying fractions by fractions",
        lessonContent: `
            <p>Today we'll learn how to multiply a fraction by another fraction. This might seem tricky, but it's actually simpler than you think!</p>
            <p><strong>Method:</strong> To multiply fractions, multiply the numerators together and multiply the denominators together.</p>
            <p><strong>Formula:</strong> <sup>a</sup>⁄<sub>b</sub> × <sup>c</sup>⁄<sub>d</sub> = <sup>a×c</sup>⁄<sub>b×d</sub></p>
            <p><strong>Important:</strong> Always simplify your answer to its lowest terms. Look for common factors in the numerator and denominator.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: ½ × ½</div>
                <p>Multiply numerators: 1 × 1 = 1</p>
                <p>Multiply denominators: 2 × 2 = 4</p>
                <p><strong>Answer:</strong> ¼ (One half of one half equals one quarter!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: ⅔ × ¾</div>
                <p>Step 1: ⅔ × ¾ = (2×3)/(3×4) = ⁶⁄₁₂</p>
                <p>Step 2: Simplify: Both 6 and 12 can be divided by 6 → ½</p>
                <p><strong>Answer:</strong> ½</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: ⅘ × ½ (with simplification first)</div>
                <p>Instead of ⅘ × ½ = ⁴⁄₁₀ then simplify to ⅖...</p>
                <p>We can simplify BEFORE multiplying: ⅘ × ½ = ²⁄₅ × ¹⁄₁ = ⅖</p>
                <p>This is called cross-cancellation and makes calculations easier!</p>
            </div>
        `,
        taskInstructions: "Multiply the following fractions. Simplify your answers completely.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> ¼ × ⅓ = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> ⅔ × ⅕ = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> ¾ × ⅖ = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> ⅚ × ½ = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> ⅞ × ⅔ = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Challenge: Try simplifying before multiplying: ⁴⁄₉ × ³⁄₈ = <span class="answer-space"></span>
            </div>
        `,
        homework: "Practice cross-cancellation with 5 fraction multiplication problems. Show both methods (multiply then simplify vs. simplify then multiply).",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Dividing Fractions", 
        subtopic: "Dividing fractions by whole numbers",
        lessonContent: `
            <p>Today we begin learning about dividing fractions. We'll start with dividing fractions by whole numbers.</p>
            <p><strong>Key Rule:</strong> Dividing by a whole number is the same as multiplying by its reciprocal.</p>
            <p><strong>Reciprocal:</strong> The reciprocal of a whole number is 1 over that number. The reciprocal of 3 is ⅓.</p>
            <p><strong>Method:</strong> To divide a fraction by a whole number:</p>
            <ol>
                <li>Write the whole number as a fraction (n/1)</li>
                <li>Find its reciprocal (flip it → 1/n)</li>
                <li>Multiply the original fraction by this reciprocal</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: ½ ÷ 2</div>
                <p>Step 1: Write 2 as ²⁄₁</p>
                <p>Step 2: Find reciprocal of ²⁄₁ → ½</p>
                <p>Step 3: Multiply: ½ × ½ = ¼</p>
                <p><strong>Answer:</strong> ½ ÷ 2 = ¼</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: ¾ ÷ 3</div>
                <p>¾ ÷ ³⁄₁ = ¾ × ⅓ = (3×1)/(4×3) = ³⁄₁₂ = ¼</p>
                <p>Notice we could simplify before multiplying: ¾ × ⅓ = ¼ × ¹⁄₁ = ¼</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: ⅘ ÷ 4</div>
                <p>⅘ ÷ ⁴⁄₁ = ⅘ × ¼ = (4×1)/(5×4) = ⁴⁄₂₀ = ⅕</p>
                <p>Think of it as: If you have ⅘ of something and divide it into 4 equal parts, each part is ⅕.</p>
            </div>
        `,
        taskInstructions: "Divide the following fractions by whole numbers. Remember to use reciprocals!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> ⅔ ÷ 2 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> ¾ ÷ 5 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> ⅚ ÷ 3 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> ⅞ ÷ 7 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Word problem: You have ⅘ of a pizza and want to share it equally among 4 friends. How much pizza does each friend get? <span class="answer-space"></span>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 examples in real life where you might need to divide a fraction by a whole number. Explain each situation.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Dividing Fractions", 
        subtopic: "Dividing fractions by fractions",
        lessonContent: `
            <p>Today we'll learn the most important rule for dividing fractions: <strong>"Keep, Change, Flip!"</strong></p>
            <p><strong>Rule for dividing fractions:</strong></p>
            <ol>
                <li><strong>KEEP</strong> the first fraction the same</li>
                <li><strong>CHANGE</strong> the division sign to multiplication</li>
                <li><strong>FLIP</strong> the second fraction (find its reciprocal)</li>
            </ol>
            <p><strong>Why this works:</strong> Dividing by a fraction is the same as multiplying by its reciprocal. This is one of the most useful math tricks you'll learn!</p>
            <p><strong>Remember:</strong> Always simplify your answer when possible.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: ½ ÷ ¼</div>
                <p>Step 1: KEEP ½</p>
                <p>Step 2: CHANGE ÷ to ×</p>
                <p>Step 3: FLIP ¼ to ⁴⁄₁</p>
                <p>Step 4: Multiply: ½ × ⁴⁄₁ = ⁴⁄₂ = 2</p>
                <p><strong>Answer:</strong> ½ ÷ ¼ = 2 (This makes sense: there are 2 quarters in one half!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: ⅔ ÷ ⅖</div>
                <p>⅔ ÷ ⅖ = ⅔ × ⁵⁄₂ = (2×5)/(3×2) = ¹⁰⁄₆ = 1⁴⁄₆ = 1⅔</p>
                <p>Or simplify first: ⅔ × ⁵⁄₂ = ⅓ × ⁵⁄₁ = ⁵⁄₃ = 1⅔</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: ¾ ÷ ½</div>
                <p>¾ ÷ ½ = ¾ × ²⁄₁ = (3×2)/(4×1) = ⁶⁄₄ = 1½</p>
                <p>Think: How many halves are in three-quarters? One and a half!</p>
            </div>
        `,
        taskInstructions: "Use the 'Keep, Change, Flip' method to divide these fractions. Show your work!",
        taskContent: `
            <div class="content-box">
                <p><strong>Basic Practice:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> ⅓ ÷ ¼ = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> ⅖ ÷ ⅓ = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> ¾ ÷ ⅜ = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problems:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A recipe calls for ½ cup of sugar. You only have a ⅛ cup measuring cup. How many ⅛ cups do you need? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> ⅚ ÷ ⅔ = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Create a word problem that requires dividing fractions:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Practice the 'Keep, Change, Flip' method with 5 problems of your own creation. Make some easy and some challenging!",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Multiplying and Dividing Fractions",
        revisionContent: `
            <p>Excellent work this week! You've learned how to multiply and divide fractions. Let's review everything:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Multiplying fractions by whole numbers</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Multiplying fractions by fractions</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Simplifying before multiplying (cross-cancellation)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Dividing fractions by whole numbers using reciprocals</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> The "Keep, Change, Flip" method for dividing fractions</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Fraction Vocabulary:</strong></p>
                <p><strong>Numerator:</strong> The top number in a fraction</p>
                <p><strong>Denominator:</strong> The bottom number in a fraction</p>
                <p><strong>Reciprocal:</strong> Flipping a fraction (a/b becomes b/a)</p>
                <p><strong>Simplify:</strong> Reduce a fraction to its lowest terms</p>
                <p><strong>Cross-cancellation:</strong> Simplifying before multiplying fractions</p>
            </div>
            <div class="content-box">
                <p><strong>Important Rules:</strong></p>
                <p>1. Multiply fractions: Multiply numerators, multiply denominators</p>
                <p>2. Divide fractions: Keep, Change, Flip!</p>
                <p>3. Always simplify your final answer</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> ¾ × 8 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> ⅔ × ⅗ = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> ⅚ ÷ 2 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> ½ ÷ ⅓ = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Word problem: You have ¾ of a yard of ribbon. Each bow needs ⅛ yard. How many bows can you make? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Explain the "Keep, Change, Flip" rule in your own words:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend project: Create a poster explaining how to multiply and divide fractions. Include examples and the key rules.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek9);
    console.log("math-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek9);
    console.log("math-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek9',
        metadata: grade5MathWeek9.metadata,
        days: grade5MathWeek9
    });
    console.log("math-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek9 = grade5MathWeek9;
console.log("math-week9.js loaded and registered successfully");