// Grade 6 Math - Week 5 Data
const grade6MathWeek5 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 1,
        week: 5,
        title: "Fractions, Operations, and Percentages",
        description: "Mastering fraction division, mixed operations, and converting between fractions, decimals, and percentages with real-world applications"
    },
    
    monday: {
        subject: "Math",
        topic: "Fractions and Whole Numbers",
        subtopic: "Division Relationships",
        lessonContent: `
            <p>Welcome to our exploration of fraction division! Today we'll learn how to divide fractions by whole numbers and whole numbers by fractions.</p>
            <p><strong>Key Concept:</strong> Division with fractions changes how we think about sharing and grouping. When we divide by a fraction, we're asking "how many of these smaller pieces fit into the larger amount?"</p>
            <p><strong>Dividing a Fraction by a Whole Number:</strong></p>
            <ul>
                <li>Imagine you have 1/2 a pizza and want to share it equally between 2 friends</li>
                <li>You're dividing the half into 2 equal parts</li>
                <li>Each person gets 1/4 of the whole pizza</li>
                <li>This is like "halving the half"</li>
            </ul>
            <p><strong>Dividing a Whole Number by a Fraction:</strong></p>
            <ul>
                <li>Imagine you have 6 candy bars and want to give each person 1/2 a bar</li>
                <li>You're finding how many half-pieces are in 6 wholes</li>
                <li>There are 12 half-pieces in 6 wholes (6 ÷ 1/2 = 12)</li>
                <li>Dividing by a fraction gives MORE pieces than you started with!</li>
            </ul>
            <p><strong>Why This Matters:</strong> We use these skills when sharing food, dividing materials for projects, or working with measurements in recipes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice" style="color: #E74C3C;"></i> Pizza Sharing</div>
                <p>If you have 3/4 of a pizza and share it equally among 3 people, each person gets 1/4 of the whole pizza. (3/4 ÷ 3 = 1/4)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-candy-cane"></i> Candy Distribution</div>
                <p>If you have 4 whole candy bars and give each friend 1/4 of a bar, you can serve 16 friends. (4 ÷ 1/4 = 16)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Visual Tip</div>
                <p>Use paper folding! Fold a paper in half, then fold that half into equal parts to see division visually.</p>
            </div>
        `,
        taskInstructions: "Practice dividing fractions and whole numbers by completing these activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw and solve: You have 2/3 of a chocolate bar. You want to share it equally with 1 friend. What fraction of the WHOLE bar does each person get?
                <div class="answer-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Calculate: How many quarter-cups are in 3 cups of flour? (Draw or explain your thinking)
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Word Problem: A recipe needs 1/2 cup of oil. You have 3 cups of oil. How many batches can you make?
                <div class="answer-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Visual Representation: Draw a rectangle representing 1 whole. Show how you would divide 3/4 of it by 3.
                <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Real-world Connection: When might you need to divide a whole number by a fraction in daily life? Give one example:
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find 2 real-life situations at home where you might divide a fraction by a whole number or a whole number by a fraction. Describe them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Fraction Division",
        subtopic: "Dividing Fractions by Fractions",
        lessonContent: `
            <p>Today we dive deeper into fraction division! We'll learn how to divide one fraction by another using visual models and discover the reciprocal rule.</p>
            <p><strong>Key Question:</strong> How many smaller pieces fit into a larger piece?</p>
            <p><strong>Visual Approach:</strong></p>
            <ul>
                <li>Use fraction strips or bars to see division</li>
                <li>If you have 3/4 of a bar and want to know how many 1/4 pieces fit in it, you can see 3 pieces fit</li>
                <li>So: 3/4 ÷ 1/4 = 3</li>
            </ul>
            <p><strong>The Reciprocal Rule (Inversion):</strong></p>
            <ul>
                <li>A powerful shortcut: Dividing by a fraction = Multiplying by its reciprocal</li>
                <li>Reciprocal means "flip" the fraction (3/4 becomes 4/3)</li>
                <li>Example: 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2</li>
                <li>Check: How many quarters fit in a half? Two quarters make a half!</li>
            </ul>
            <p><strong>Why This Works:</strong> When we divide, we're asking "how many groups of the divisor fit into the dividend?" Flipping the divisor and multiplying gives us the same answer.</p>
            <p><strong>Real-world Application:</strong> Recipe adjustments, measuring fabric, dividing time periods.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chocolate-bar" style="color: #8B4513;"></i> Chocolate Bar</div>
                <p>If you have 3/4 of a chocolate bar and a serving is 1/8 of a bar, how many servings do you have? 3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 servings</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Measuring Tape</div>
                <p>You have 2/3 meter of ribbon. How many 1/6 meter pieces can you cut? 2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4 pieces</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> The Flip Rule</div>
                <p>Remember: "Keep, Change, Flip!" Keep the first fraction, change ÷ to ×, flip the second fraction. Then multiply straight across.</p>
            </div>
        `,
        taskInstructions: "Practice dividing fractions by fractions using visual models and the reciprocal method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Visual Division</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw fraction bars to solve: 3/4 ÷ 1/2 = ?
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Answer: <div style="margin-left: 20px; height: 30px; display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Reciprocal Method</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use "Keep, Change, Flip" to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2/3 ÷ 1/6 = <div style="margin-left: 20px; height: 30px; display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 5/8 ÷ 1/4 = <div style="margin-left: 20px; height: 30px; display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 3/5 ÷ 2/5 = <div style="margin-left: 20px; height: 30px; display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> You have 4/5 of a tank of gas. Your car uses 1/10 of a tank per day. How many days will your gas last?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A piece of wood is 7/8 meters long. You need pieces that are 1/4 meter long. How many pieces can you cut?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a fraction division word problem for a partner. Make sure it has a real-world context:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Solve 5 fraction division problems using both drawing AND the reciprocal method. Show all work.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Fraction Operations",
        subtopic: "The Four Operations Challenge",
        lessonContent: `
            <p>Get ready for a fraction adventure! Today we'll combine all four operations (+, -, ×, ÷) with fractions in one session. This is like a mathematical obstacle course!</p>
            <p><strong>Review of Operations:</strong></p>
            <ul>
                <li><strong>Addition/Subtraction:</strong> Need common denominators</li>
                <li><strong>Multiplication:</strong> Multiply straight across (numerator × numerator, denominator × denominator)</li>
                <li><strong>Division:</strong> Multiply by the reciprocal (Keep, Change, Flip)</li>
            </ul>
            <p><strong>Order of Operations (PEMDAS):</strong></p>
            <ol>
                <li>Parentheses first</li>
                <li>Exponents (we'll learn these later!)</li>
                <li>Multiplication & Division (left to right)</li>
                <li>Addition & Subtraction (left to right)</li>
            </ol>
            <p><strong>Problem-Solving Strategy:</strong></p>
            <ol>
                <li>Read the entire problem carefully</li>
                <li>Identify what operation(s) you need</li>
                <li>Solve step-by-step</li>
                <li>Check if your answer makes sense</li>
            </ol>
            <p><strong>Real-world Context:</strong> Cooking (adjusting recipes), construction (measuring materials), time management (dividing time periods).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #27AE60;"></i> Recipe Example</div>
                <p>A recipe needs 2 1/4 cups flour. You triple the recipe (×3), then use 1 1/2 cups for something else (-). How much is left? (2 1/4 × 3) - 1 1/2 = 6 3/4 - 1 1/2 = 5 1/4 cups</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Construction Project</div>
                <p>You have 8 3/4 feet of wood. Each shelf needs 1 1/4 feet. How many shelves can you make? (8 3/4 ÷ 1 1/4 = 35/4 ÷ 5/4 = 35/4 × 4/5 = 7 shelves)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Step-by-Step</div>
                <p>Always work one step at a time. If a problem has multiple operations, solve them in the correct order (PEMDAS).</p>
            </div>
        `,
        taskInstructions: "Complete the Fraction Journey by solving problems with mixed operations. Show all your work!",
        taskContent: `
            <div class="content-box">
                <p><strong>Station 1: The Recipe Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A cookie recipe calls for 3/4 cup of sugar. You want to make 2 1/2 batches.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How much sugar do you need in total?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. If you only have 1 1/2 cups, how much more do you need?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Station 2: The Woodworking Project</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> You have a board that is 12 3/4 feet long. You cut it into 3 equal pieces.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How long is each piece?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. You then cut one piece into sections that are 2/3 foot each. How many sections do you get?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Station 3: The Time Management Puzzle</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> You have 3 1/2 hours for homework. You spend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 3/4 hour on math</div>
                        <div>• 1 1/4 hours on science</div>
                        <div>• The rest on reading</div>
                        <div>a. How much time do you spend on reading?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. If you divide reading time equally between 2 books, how long for each?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Station 4: Create Your Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design a word problem that uses at least 3 different operations with fractions:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Find a recipe at home. Adjust it to make 1/2 the amount AND double the amount. Show your calculations.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Percentages",
        subtopic: "Introduction and Conversions",
        lessonContent: `
            <p>Welcome to the world of percentages! Today we'll discover what percentages really mean and learn to convert between fractions, decimals, and percentages.</p>
            <p><strong>What is a Percentage?</strong></p>
            <ul>
                <li>"Per cent" means "out of 100"</li>
                <li>25% means 25 out of 100, or 25/100</li>
                <li>It's another way to show parts of a whole</li>
            </ul>
            <p><strong>The Connection Triangle:</strong></p>
            <ul>
                <li><strong>Fraction → Percentage:</strong> Convert to hundredths, then write as %</li>
                <li><strong>Percentage → Decimal:</strong> Divide by 100 (move decimal 2 places left)</li>
                <li><strong>Decimal → Percentage:</strong> Multiply by 100 (move decimal 2 places right)</li>
            </ul>
            <p><strong>Common Conversions:</strong></p>
            <ul>
                <li>1/2 = 0.5 = 50%</li>
                <li>1/4 = 0.25 = 25%</li>
                <li>3/4 = 0.75 = 75%</li>
                <li>1/10 = 0.1 = 10%</li>
                <li>1/5 = 0.2 = 20%</li>
            </ul>
            <p><strong>Visual Tool: The 100-Grid</strong></p>
            <p>A 10×10 grid has 100 squares. Shading 25 squares shows 25%. This helps us see percentages visually.</p>
            <p><strong>Why Learn This?</strong> Percentages are EVERYWHERE: test scores, sales discounts, phone battery, sports statistics!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percentage" style="color: #9B59B6;"></i> Test Score</div>
                <p>If you get 18 out of 20 questions correct, that's 18/20 = 9/10 = 0.9 = 90%. You scored 90%!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Sale Tag</div>
                <p>25% off means you pay 75% of the original price. If something was $40, 25% off is $10 savings, so you pay $30.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-battery-half"></i> Battery Life</div>
                <p>When your phone shows 50% battery, it means it has half its full charge remaining. 50% = 1/2 = 0.5</p>
            </div>
        `,
        taskInstructions: "Practice converting between fractions, decimals, and percentages. Use the 100-grid for visual help.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: 100-Grid Shading</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Shade these percentages on the 100-grids below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 30% <div class="grid-area" style="height: 100px; width: 100px; border: 1px solid #000; display: inline-block; margin-left: 10px;"></div></div>
                        <div>b. 75% <div class="grid-area" style="height: 100px; width: 100px; border: 1px solid #000; display: inline-block; margin-left: 10px;"></div></div>
                        <div>c. 5% <div class="grid-area" style="height: 100px; width: 100px; border: 1px solid #000; display: inline-block; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Conversion Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the conversion table:
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tr style="background-color: #f2f2f2;">
                            <th style="border: 1px solid #ddd; padding: 8px;">Fraction</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Decimal</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Percentage</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">1/2</td>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">3/4</td>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ddd; padding: 8px;">0.2</td>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ddd; padding: 8px;"><div style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ddd; padding: 8px;">60%</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In a class of 25 students, 15 are girls. What percentage are girls?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> You answered 88% of test questions correctly. If there were 50 questions, how many did you get right?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Search</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find 3 examples of percentages in real life (ads, food labels, etc.). Write what each means:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing the connections between fractions, decimals, and percentages with at least 5 examples.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Percentages",
        subtopic: "Real-World Applications",
        lessonContent: `
            <p>Today we put percentages to work! We'll calculate discounts, figure out tips, analyze data, and solve real-world percentage problems.</p>
            <p><strong>Calculating Percentages of Numbers:</strong></p>
            <ul>
                <li>To find 25% of 80: Convert 25% to 0.25, then multiply: 0.25 × 80 = 20</li>
                <li>Or use fractions: 25% = 1/4, so 1/4 of 80 = 20</li>
            </ul>
            <p><strong>Common Applications:</strong></p>
            <ol>
                <li><strong>Sales & Discounts:</strong> 20% off means you pay 80% of the original price</li>
                <li><strong>Tips:</strong> 15% tip on a $40 meal: 0.15 × 40 = $6</li>
                <li><strong>Test Scores:</strong> 18/20 = 90%</li>
                <li><strong>Tax:</strong> 8% sales tax on a $25 item: 0.08 × 25 = $2</li>
                <li><strong>Interest:</strong> 5% interest on $100 savings: 0.05 × 100 = $5</li>
            </ol>
            <p><strong>Problem-Solving Strategies:</strong></p>
            <ol>
                <li>Identify what you're finding (part, whole, or percentage)</li>
                <li>Convert percentage to decimal or fraction</li>
                <li>Multiply or divide as needed</li>
                <li>Check if your answer is reasonable</li>
            </ol>
            <p><strong>Mental Math Shortcuts:</strong></p>
            <ul>
                <li>10%: Move decimal one place left</li>
                <li>5%: Half of 10%</li>
                <li>50%: Half the amount</li>
                <li>25%: Half of 50% (or quarter of the amount)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tags" style="color: #E67E22;"></i> Shopping Discount</div>
                <p>A $60 video game is 25% off. Discount = 0.25 × 60 = $15 off. Sale price = $60 - $15 = $45.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Restaurant Tip</div>
                <p>Meal costs $48. You want to leave 15% tip. 10% = $4.80, 5% = $2.40, so 15% = $4.80 + $2.40 = $7.20.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Data Analysis</div>
                <p>In a survey of 40 students, 30 prefer pizza. That's 30/40 = 3/4 = 0.75 = 75% of students.</p>
            </div>
        `,
        taskInstructions: "Solve these real-world percentage problems. Show your calculations clearly!",
        taskContent: `
            <div class="content-box">
                <p><strong>Activity 1: Classroom Store</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate sale prices:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Notebook: $5.00, 20% off. Sale price: $<div style="margin-left: 20px; height: 30px; display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. Pencils: $3.00, 50% off. Sale price: $<div style="margin-left: 20px; height: 30px; display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. Calculator: $15.00, 30% off. Sale price: $<div style="margin-left: 20px; height: 30px; display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Activity 2: Restaurant Math</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Your family's meal costs $72.50.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Calculate a 15% tip:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. With 8% sales tax, what's the total bill (meal + tax + tip)?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Activity 3: Class Survey Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Our class survey results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Favorite sport: 12 out of 28 chose soccer</div>
                        <div>• Favorite color: 7 out of 28 chose blue</div>
                        <div>• Pets: 21 out of 28 have a pet</div>
                        <div>Calculate the percentage for each:</div>
                        <div style="margin-left: 20px;">
                            <div>a. Soccer: <div style="margin-left: 20px; height: 30px; display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div>%</div>
                            <div>b. Blue: <div style="margin-left: 20px; height: 30px; display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div>%</div>
                            <div>c. Pets: <div style="margin-left: 20px; height: 30px; display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div>%</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Activity 4: Design a Sale</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a store advertisement with 3 items. Show original prices and percentage discounts. Calculate the sale prices:
                    <div class="answer-space" style="height: 200px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Activity 5: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is understanding percentages important in everyday life? Give 3 reasons:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Go shopping with a parent (or look at a store flyer). Find 3 items with percentage discounts and calculate the sale prices.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek5);
    console.log("grade6-math-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek5);
    console.log("grade6-math-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek5',
        metadata: grade6MathWeek5.metadata,
        days: grade6MathWeek5
    });
    console.log("grade6-math-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek5 = grade6MathWeek5;
console.log("grade6-math-week5.js loaded and registered successfully");