// Grade 5 Mathematics - Term 2 Week 3 Data
const grade5MathWeek3 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 2,
        week: 3,
        title: "Advanced Multiplication & Division",
        description: "Multiplying and dividing decimals, decimal place value, and problem-solving with decimals"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Decimal Operations",
        subtopic: "Multiplying Decimals by Decimals (Part 1)",
        lessonContent: `
            <p>Welcome to our exploration of multiplying decimals! Today we'll learn how to multiply decimals by decimals and understand where the decimal point belongs.</p>
            <p><strong>Key Question:</strong> What happens to the decimal point when we multiply decimals?</p>
            <p><strong>The Golden Rule:</strong> Total decimal places in the question = Total decimal places in the answer.</p>
            <p><strong>Step-by-Step Method:</strong></p>
            <ol>
                <li>Ignore the decimal points and multiply the numbers as if they were whole numbers</li>
                <li>Count the total number of decimal places in both factors</li>
                <li>Place the decimal point in the answer so it has that same number of decimal places</li>
            </ol>
            <p><strong>Example 1: 0.2 × 0.3</strong></p>
            <ul>
                <li>Step 1: 2 × 3 = 6</li>
                <li>Step 2: 0.2 has 1 decimal place, 0.3 has 1 decimal place → Total = 2 decimal places</li>
                <li>Step 3: 0.06 (two decimal places)</li>
                <li><strong>Answer: 0.06</strong></li>
            </ul>
            <p><strong>Example 2: 0.4 × 0.5</strong></p>
            <ul>
                <li>4 × 5 = 20</li>
                <li>Total decimal places = 2</li>
                <li>Answer: 0.20 (which is 0.2)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Money Connection</div>
                <p>0.2 × 0.3 is like finding 0.3 (three tenths) of 0.2 (two tenths of a dollar = 20 cents). Three tenths of 20 cents is 6 cents, or $0.06!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Visual Model</div>
                <p>Imagine a 10×10 grid. 0.2 means 20 small squares out of 100. 0.3 means 30 small squares out of 100. When multiplied, you get 6 small squares out of 100, which is 0.06!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Shortcut</div>
                <p>When multiplying two decimals that are both less than 1, the product will always be less than either factor. Example: 0.2 × 0.3 = 0.06 (smaller than both 0.2 and 0.3)!</p>
            </div>
        `,
        taskInstructions: "Solve each multiplication problem, paying careful attention to decimal places.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 0.2 × 0.4 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 0.3 × 0.3 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 0.5 × 0.2 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 0.1 × 0.9 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 0.4 × 0.6 = _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A recipe calls for 0.3 cup of sugar. If you make 0.5 of the recipe, how much sugar do you need?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A rectangle has length 0.7 m and width 0.2 m. What is its area?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Complete this sentence: When multiplying two decimals less than 1, the product is always _______________ than each factor.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Find three real-world examples where you might need to multiply decimals (e.g., finding tax, calculating area). Solve each example.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Decimal Operations",
        subtopic: "Multiplying Decimals (Part 2)",
        lessonContent: `
            <p>Today we'll continue multiplying decimals, focusing on problems where the answer has up to 3 decimal places.</p>
            <p><strong>Key Question:</strong> How do we multiply decimals that have different numbers of decimal places?</p>
            <p><strong>Rule Reminder:</strong> Count ALL decimal places in the question. That's how many decimal places go in the answer!</p>
            <p><strong>Example: Area of a Tile</strong></p>
            <p>Find the area of a rectangular tile with length 0.12 m and width 0.4 m.</p>
            <ul>
                <li>Step 1: 12 × 4 = 48</li>
                <li>Step 2: Count decimal places - 0.12 has 2 places, 0.4 has 1 place → Total = 3 decimal places</li>
                <li>Step 3: 0.048 (three decimal places)</li>
                <li><strong>Answer: 0.048 m²</strong></li>
            </ul>
            <p><strong>Example 2: 1.25 × 0.6</strong></p>
            <ul>
                <li>125 × 6 = 750</li>
                <li>Decimal places: 1.25 has 2, 0.6 has 1 → Total = 3</li>
                <li>Answer: 0.750 (which is 0.75)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Zero Trick</div>
                <p>Sometimes you need to add zeros to get the right number of decimal places. Example: 0.12 × 0.4 = 0.048 (we added a zero before 48 to make 3 decimal places).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Real World: Flooring</div>
                <p>If you're buying floor tiles that are 0.12 m by 0.4 m, each tile covers 0.048 m². For 100 tiles, you'd multiply 0.048 × 100 = 4.8 m²!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Pattern Recognition</div>
                <p>0.1 × 0.1 = 0.01<br>
                0.01 × 0.1 = 0.001<br>
                0.001 × 0.1 = 0.0001<br>
                Each time, we add one more decimal place!</p>
            </div>
        `,
        taskInstructions: "Multiply these decimals. Remember to count decimal places carefully!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiply (Answers up to 3 decimal places)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 0.12 × 0.3 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 0.25 × 0.4 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 0.32 × 0.5 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 0.45 × 0.2 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 0.08 × 0.7 = _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Area Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A rectangular garden bed has length 1.25 m and width 0.8 m. What is its area?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A book is 0.15 m wide. A shelf is 0.6 m long. How many books can fit if placed side by side?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> 0.12 × 0.4 = 0.048 (True / False)
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 0.05 × 0.6 = 0.03 (True / False)
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 0.125 × 0.8 = 1.000 (True / False)
                </div>
            </div>
        `,
        homework: "Create your own 3 word problems that require multiplying decimals with up to 3 decimal places. Solve them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Decimal Operations",
        subtopic: "Introduction to Dividing Decimals",
        lessonContent: `
            <p>Today we'll learn how to divide a decimal by another decimal!</p>
            <p><strong>Key Question:</strong> How do we divide a number like 0.12 by 0.04?</p>
            <p><strong>The Trick: "Move the House"</strong></p>
            <ul>
                <li>We don't like dividing by decimals. So we make the divisor a whole number!</li>
                <li>Multiply BOTH the divisor and dividend by the same power of 10 (10, 100, 1000, etc.)</li>
                <li>Whatever you do to the divisor, you MUST do to the dividend</li>
            </ul>
            <p><strong>Example 1: 0.12 ÷ 0.04</strong></p>
            <ul>
                <li>Divisor is 0.04 (has 2 decimal places)</li>
                <li>Multiply both numbers by 100: 0.12 × 100 = 12, 0.04 × 100 = 4</li>
                <li>Now we have 12 ÷ 4 = 3</li>
                <li><strong>Answer: 3</strong></li>
            </ul>
            <p><strong>Example 2: 0.24 ÷ 0.06</strong></p>
            <ul>
                <li>Multiply both by 100 → 24 ÷ 6 = 4</li>
                <li><strong>Answer: 4</strong></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Moving the Decimal</div>
                <p>0.12 ÷ 0.04. Move the decimal in BOTH numbers two places to the right: 12 ÷ 4 = 3. We're just shifting the decimal point together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Party!</div>
                <p>If you have 0.6 of a pizza (6/10) and want to share it among 0.3 of a person? That doesn't make sense! Multiplying both by 10 gives 6 ÷ 3 = 2. Each person gets 2 slices worth.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Keep It Equal</div>
                <p>Multiplying both numbers by 10 or 100 doesn't change the answer. 0.12 ÷ 0.04 = 12 ÷ 4 = 3. The relationship stays the same!</p>
            </div>
        `,
        taskInstructions: "For each problem, move the decimal to make the divisor a whole number, then divide.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shift and Divide</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 0.12 ÷ 0.03 = _________ (Shift by 2 places: ___ ÷ ___ = ___)
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 0.15 ÷ 0.05 = _________ 
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 0.24 ÷ 0.08 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 0.36 ÷ 0.06 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 0.45 ÷ 0.09 = _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 0.08 ÷ 0.02 = (___ × 100) ÷ (___ × 100) = ___ ÷ ___ = ___
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 0.21 ÷ 0.07 = _________ 
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> A length of ribbon is 0.36 m long. It is cut into pieces that are 0.06 m each. How many pieces can be made?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> A jug contains 0.45 L of juice. Each glass holds 0.09 L. How many glasses can be filled?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Explain in your own words why multiplying both numbers by 100 doesn't change the answer. Give an example.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Decimal Operations",
        subtopic: "Division Practice with 3 Decimal Places",
        lessonContent: `
            <p>Today we'll practice division problems involving up to 3 decimal places.</p>
            <p><strong>Key Question:</strong> How do we divide decimals when the numbers have 3 decimal places?</p>
            <p><strong>Method:</strong> Same rule applies! Count the decimal places in the divisor. Multiply both numbers by 10, 100, or 1000 to make the divisor a whole number.</p>
            <p><strong>Example: 0.500 ÷ 0.05</strong></p>
            <ul>
                <li>0.500 kg of flour divided into portions of 0.05 kg</li>
                <li>Divisor: 0.05 has 2 decimal places → multiply both by 100</li>
                <li>0.500 × 100 = 50.0 (or 50)</li>
                <li>0.05 × 100 = 5</li>
                <li>50 ÷ 5 = 10 portions</li>
                <li><strong>Answer: 10 portions</strong></li>
            </ul>
            <p><strong>Example 2: 0.024 ÷ 0.006</strong></p>
            <ul>
                <li>Both have 3 decimal places? Count carefully: 0.024 has 3, 0.006 has 3</li>
                <li>Multiply both by 1000 → 24 ÷ 6 = 4</li>
                <li><strong>Answer: 4</strong></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bread-slice"></i> Flour Portions</div>
                <p>0.500 ÷ 0.05 = 10. Each portion is 50 grams, and 500 ÷ 50 = 10. Same calculation, just shown differently!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-crown"></i> Decimal Shifting Shortcut</div>
                <p>Count how many places you need to move the decimal in the divisor. Move BOTH numbers that many places:<br>
                0.500 ÷ 0.05 → move 2 places → 50 ÷ 5 = 10</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Check Your Answer</div>
                <p>Always check: Multiply your answer by the original divisor. You should get the original dividend!<br>
                10 × 0.05 = 0.500 ✓</p>
            </div>
        `,
        taskInstructions: "Solve each division problem. Show your steps for moving the decimal.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 0.500 ÷ 0.10 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 0.250 ÷ 0.05 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 0.360 ÷ 0.12 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 0.024 ÷ 0.008 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 0.450 ÷ 0.15 = _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A 0.750 kg bag of rice is divided into 0.025 kg portions. How many portions are there?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A piece of fabric is 0.125 m long. It needs to be cut into 0.005 m pieces. How many pieces?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A 0.400 L bottle contains syrup. Each dose is 0.008 L. How many doses are in the bottle?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Check Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Verify this calculation: 0.450 ÷ 0.15 = 3
                    <div style="margin-left: 20px;">Check by multiplication: ___ × 0.15 = ___</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create a division word problem using numbers with up to 3 decimal places. Trade with a family member and solve each other's problem.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Decimal Operations",
        subtopic: "Final Mastery Quiz",
        lessonContent: `
            <p>Today we'll review everything we've learned about multiplying and dividing decimals!</p>
            <p><strong>Week 3 Review:</strong></p>
            <ul>
                <li><strong>Multiplying Decimals:</strong> Count total decimal places → that many places in the answer</li>
                <li><strong>Dividing Decimals:</strong> Multiply both numbers by 10, 100, or 1000 → make divisor whole → divide</li>
                <li><strong>Comparing Decimals:</strong> Line up decimal points to compare values</li>
            </ul>
            <p><strong>Key Reminders:</strong></p>
            <ul>
                <li>When multiplying, the product may have fewer digits than decimal places → add zeros!</li>
                <li>When dividing, always check your answer by multiplying</li>
                <li>0.5 × 0.5 = 0.25 (not 0.25? Actually yes, 0.25 is correct!)</li>
                <li>0.48 ÷ 0.12 = 4 (since 12 × 4 = 48)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Ordering Decimals</div>
                <p>To order 0.009, 0.1, 0.02, add zeros: 0.009, 0.100, 0.020 → 0.009, 0.020, 0.100 → 0.009, 0.02, 0.1</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tasks"></i> Gold Thread Problem</div>
                <p>If one thread is 0.005 m thick, 100 threads stacked = 0.005 × 100 = 0.5 m thick!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Study Tip</div>
                <p>Practice with real numbers: 1.25 × 0.5 = 0.625. Check: Half of 1.25 is 0.625. Works perfectly!</p>
            </div>
        `,
        taskInstructions: "Complete the mastery quiz. Show all your work.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Compare and Order (4 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Order these decimals from smallest to largest: 0.009, 0.1, 0.02
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Multiplication (3 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> 1.25 × 0.5 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 0.36 × 0.4 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 0.125 × 0.8 = _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Division (3 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> 0.48 ÷ 0.12 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 0.84 ÷ 0.07 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 0.250 ÷ 0.05 = _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problem (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> A gold thread is 0.005 m thick. How thick are 100 threads stacked together?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge (Bonus - 2 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> A factory produces 0.075 kg of gold dust per hour. How many hours to produce 1.5 kg?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Review all multiplication and division problems from this week. Create a 'cheat sheet' explaining the rules for decimal multiplication and division to share with a classmate.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek3);
    console.log("grade5-math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek3);
    console.log("grade5-math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek3',
        metadata: grade5MathWeek3.metadata,
        days: grade5MathWeek3
    });
    console.log("grade5-math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek3 = grade5MathWeek3;
console.log("grade5-math-week3.js loaded and registered successfully");