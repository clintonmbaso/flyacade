// Grade 6 Math - Week 4 Data
const grade6MathWeek4 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 1,
        week: 4,
        title: "Squares, Cubes, and Sequences",
        description: "Exploring perfect squares, cubic numbers, and generating sequences using squares and cubes"
    },
    
    monday: {
        subject: "Math",
        topic: "Squares, Cubes, and Sequences",
        subtopic: "The Concept of Perfect Squares",
        lessonContent: `
            <p>Welcome to our exploration of square numbers! This week we will learn about special numbers that form perfect squares and cubes.</p>
            <p><strong>Key Concept:</strong> A square number is the result of multiplying a whole number by itself.</p>
            <p><strong>Why Are They Called "Square" Numbers?</strong></p>
            <ul>
                <li>They can be arranged to form perfect squares</li>
                <li>Visual representation shows equal rows and columns</li>
                <li>Examples: 4 (2×2), 9 (3×3), 16 (4×4)</li>
            </ul>
            <p><strong>How to Identify Perfect Squares:</strong></p>
            <ol>
                <li>Multiply a whole number by itself</li>
                <li>Check if you can arrange that many objects into a square</li>
                <li>Look for patterns in the results</li>
            </ol>
            <p><strong>Visual Representation:</strong> Using blocks or dots, we can form actual squares like a 3×3 grid to show why 9 is a square number.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th" style="color: #4A90E2;"></i> Square Formation</div>
                <p>1 × 1 = 1 (1 dot forming a tiny square)</p>
                <p>2 × 2 = 4 (4 dots forming a 2×2 square)</p>
                <p>3 × 3 = 9 (9 dots forming a 3×3 square)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Quick Check</div>
                <p>Is 25 a perfect square? Yes, because 5 × 5 = 25, and 25 objects can form a 5×5 square.</p>
            </div>
        `,
        taskInstructions: "Practice identifying and illustrating perfect square numbers by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw dots to show these square numbers:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 4 (2×2)</div>
                    <div class="drawing-area" style="height: 60px; margin: 5px 0 15px 20px; border: 2px dashed #ccc;"></div>
                    <div>b. 9 (3×3)</div>
                    <div class="drawing-area" style="height: 60px; margin: 5px 0 15px 20px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Identify which numbers are perfect squares:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 16 (Is it 4×4?) <div style="margin-left: 20px; height: 30px;"></div></div>
                    <div>b. 20 (Is it a whole number squared?) <div style="margin-left: 20px; height: 30px;"></div></div>
                    <div>c. 36 (Is it 6×6?) <div style="margin-left: 20px; height: 30px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Explain in your own words why 49 is called a "perfect square":
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> List the first 5 perfect square numbers:
                <div class="answer-space" style="height: 50px;"></div>
            </div>
        `,
        homework: "Find 3 square-shaped objects at home. Measure their sides and calculate their areas to verify they're perfect squares.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Squares, Cubes, and Sequences",
        subtopic: "Finding Squares of Whole Numbers",
        lessonContent: `
            <p>Today we will practice calculating squares for a variety of whole numbers and build fluency in recognizing common square numbers.</p>
            <p><strong>Key Concept:</strong> Building fluency in recognizing common square numbers like 25, 49, and 81.</p>
            <p><strong>How to Calculate Squares:</strong></p>
            <ol>
                <li>Take any whole number (e.g., 7)</li>
                <li>Multiply it by itself (7 × 7)</li>
                <li>The result is the square number (49)</li>
            </ol>
            <p><strong>Common Square Numbers to Memorize:</strong></p>
            <ul>
                <li>1² = 1</li>
                <li>2² = 4</li>
                <li>3² = 9</li>
                <li>4² = 16</li>
                <li>5² = 25</li>
                <li>6² = 36</li>
                <li>7² = 49</li>
                <li>8² = 64</li>
                <li>9² = 81</li>
                <li>10² = 100</li>
                <li>11² = 121</li>
                <li>12² = 144</li>
            </ul>
            <p><strong>Why Practice Squares?</strong> They appear frequently in math problems, geometry, and real-world applications.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Calculation Example</div>
                <p>8 squared = 8 × 8 = 64</p>
                <p>12 squared = 12 × 12 = 144</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Pattern Recognition</div>
                <p>Notice that square numbers end with specific digits: 0, 1, 4, 5, 6, or 9, but never 2, 3, 7, or 8.</p>
            </div>
        `,
        taskInstructions: "Practice calculating squares and create a reference chart by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate These Squares</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the square of each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 6² = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>b. 9² = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>c. 11² = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>d. 15² = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Squares Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete this "Squares Chart" for numbers 1 through 12:
                    <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                        <tr>
                            <th style="border: 1px solid #ccc; padding: 8px;">Number</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Square</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Calculation</th>
                        </tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">1</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">1 × 1</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">2</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">2 × 2</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">3</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">3 × 3</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">4</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">4 × 4</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">5</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">5 × 5</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">6</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">6 × 6</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">7</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">7 × 7</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">8</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">8 × 8</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">9</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">9 × 9</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">10</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">10 × 10</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">11</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">11 × 11</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">12</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;">12 × 12</td></tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A square garden has sides of 8 meters. What is its area?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If 7² = 49 and 8² = 64, what whole number squared gives 56? Explain why this is tricky:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Memorize the squares of numbers 1-10. Write them from memory and check against your chart.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Squares, Cubes, and Sequences",
        subtopic: "The Concept of Cubic Numbers",
        lessonContent: `
            <p>Today we will explore cubic numbers - the three-dimensional cousins of square numbers!</p>
            <p><strong>Key Concept:</strong> A cube number is the result of multiplying a whole number by itself twice (three times total).</p>
            <p><strong>What Makes a Number "Cubic"?</strong></p>
            <ul>
                <li>It can form a perfect cube when arranged in 3D</li>
                <li>Examples: 8 (2×2×2), 27 (3×3×3), 64 (4×4×4)</li>
                <li>Visual representation requires 3 equal dimensions</li>
            </ul>
            <p><strong>How to Calculate Cube Numbers:</strong></p>
            <ol>
                <li>Take a whole number (e.g., 3)</li>
                <li>Multiply: 3 × 3 = 9</li>
                <li>Multiply again: 9 × 3 = 27</li>
                <li>Or simply: 3 × 3 × 3 = 27</li>
            </ol>
            <p><strong>Visualizing Cube Numbers:</strong> Using stacked blocks, we can build 3D cubes like a 2×2×2 cube to show why 8 is a cube number.</p>
            <p><strong>Common Cube Numbers:</strong> 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Cube Formation</div>
                <p>2³ = 2 × 2 × 2 = 8 (8 blocks forming a 2×2×2 cube)</p>
                <p>3³ = 3 × 3 × 3 = 27 (27 blocks forming a 3×3×3 cube)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Volume Connection</div>
                <p>If a cube has sides of 4 cm, its volume is 4 × 4 × 4 = 64 cm³. This shows why we call 64 a "cubic" number.</p>
            </div>
        `,
        taskInstructions: "Practice identifying and illustrating cubic numbers by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculating Cubes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate these cube numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>b. 4³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>c. 5³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>d. 6³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Visual Representation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a diagram showing how 27 blocks can form a 3×3×3 cube:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(You can show the cube from one corner to see all three dimensions)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identification Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which of these are cube numbers? Circle YES or NO:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 64 (YES / NO) because <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>b. 100 (YES / NO) because <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>c. 125 (YES / NO) because <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Compare 3² and 3³:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3² = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>3³ = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>How many times larger is the cube than the square? <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 cube-shaped objects at home (like dice or boxes). Measure one side and calculate their volumes.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Squares, Cubes, and Sequences",
        subtopic: "Finding Cubes of Whole Numbers",
        lessonContent: `
            <p>Today we will practice calculating cubes and explore how cubic numbers grow much faster than square numbers.</p>
            <p><strong>Key Concept:</strong> Recognizing that cubic numbers grow much faster than square numbers.</p>
            <p><strong>Growth Comparison:</strong></p>
            <ul>
                <li>2² = 4 vs 2³ = 8 (cube is 2× larger)</li>
                <li>5² = 25 vs 5³ = 125 (cube is 5× larger)</li>
                <li>10² = 100 vs 10³ = 1000 (cube is 10× larger)</li>
            </ul>
            <p><strong>Patterns in Cube Numbers:</strong></p>
            <ol>
                <li>All cube numbers are also multiples of their roots</li>
                <li>Cube numbers can end with any digit (unlike squares)</li>
                <li>The difference between consecutive cubes grows rapidly</li>
            </ol>
            <p><strong>Real-World Application:</strong> Calculating volume of cubes in packaging, storage, and construction.</p>
            <p><strong>Common Cubes to Know:</strong></p>
            <ul>
                <li>1³ = 1</li>
                <li>2³ = 8</li>
                <li>3³ = 27</li>
                <li>4³ = 64</li>
                <li>5³ = 125</li>
                <li>6³ = 216</li>
                <li>7³ = 343</li>
                <li>8³ = 512</li>
                <li>9³ = 729</li>
                <li>10³ = 1000</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Growth Comparison</div>
                <p>From 4 to 5: 4²=16, 5²=25 (increase of 9)</p>
                <p>From 4 to 5: 4³=64, 5³=125 (increase of 61!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Volume Problem</div>
                <p>A shipping box has sides of 3 ft. Its volume is 3 × 3 × 3 = 27 ft³. This is why we call 27 a cubic number.</p>
            </div>
        `,
        taskInstructions: "Practice calculating cubes and solving volume problems by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cube Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate these cubes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 7³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>b. 9³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>c. 10³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>d. 11³ = <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these volume problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A cube-shaped box has sides of 4 cm. What is its volume?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. A storage container is 5 ft on each side. How many cubic feet can it hold?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. If a dice has sides of 1.5 cm, what is its volume?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Growth Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete this comparison table:
                    <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                        <tr>
                            <th style="border: 1px solid #ccc; padding: 8px;">Number</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Square</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Cube</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Cube ÷ Square</th>
                        </tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">2</td><td style="border: 1px solid #ccc; padding: 8px;">4</td><td style="border: 1px solid #ccc; padding: 8px;">8</td><td style="border: 1px solid #ccc; padding: 8px;">2</td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">4</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;"></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">6</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;"></td></tr>
                        <tr><td style="border: 1px solid #ccc; padding: 8px;">8</td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;"></td><td style="border: 1px solid #ccc; padding: 8px;"></td></tr>
                    </table>
                    <p style="margin-top: 10px;">What pattern do you notice in the "Cube ÷ Square" column?</p>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If a number is both a perfect square and a perfect cube, what must be true about it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a chart comparing squares and cubes for numbers 1-10. Notice how much faster cubes grow.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Squares, Cubes, and Sequences",
        subtopic: "Generating Sequences",
        lessonContent: `
            <p>Today we will use our knowledge of squares and cubes to create and analyze number sequences.</p>
            <p><strong>Key Concept:</strong> Identifying the "rule" behind a sequence by checking if the numbers are squares or cubes.</p>
            <p><strong>What is a Sequence?</strong></p>
            <ul>
                <li>An ordered list of numbers</li>
                <li>Each number is called a "term"</li>
                <li>Sequences follow specific patterns or rules</li>
            </ul>
            <p><strong>Types of Sequences We'll Explore:</strong></p>
            <ol>
                <li><strong>Square Sequences:</strong> 1, 4, 9, 16, 25, ... (Rule: n²)</li>
                <li><strong>Cube Sequences:</strong> 1, 8, 27, 64, 125, ... (Rule: n³)</li>
                <li><strong>Mixed Sequences:</strong> May alternate or combine patterns</li>
            </ol>
            <p><strong>How to Generate Sequences:</strong></p>
            <ol>
                <li>Start with a rule (e.g., "square numbers starting from 9")</li>
                <li>Apply the rule to generate terms</li>
                <li>Check that each term follows the pattern</li>
            </ol>
            <p><strong>How to Identify Sequence Rules:</strong></p>
            <ol>
                <li>Check if terms are perfect squares</li>
                <li>Check if terms are perfect cubes</li>
                <li>Look for other patterns (adding, multiplying, etc.)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-up"></i> Sequence Example</div>
                <p>"Next four square numbers starting from 16": 16, 25, 36, 49, 64</p>
                <p>"First five cubes": 1, 8, 27, 64, 125</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Rule Identification</div>
                <p>Sequence: 4, 9, 16, 25, 36 → These are all perfect squares: 2², 3², 4², 5², 6²</p>
            </div>
        `,
        taskInstructions: "Practice generating and analyzing sequences using squares and cubes by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Generating Sequences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Generate these sequences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The next four square numbers starting from 25:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. A decreasing sequence of the first five cubes:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Square numbers between 50 and 100:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identifying Rules</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What rule generates each sequence?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1, 8, 27, 64, 125 → Rule: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>b. 36, 49, 64, 81, 100 → Rule: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>c. 64, 125, 216, 343, 512 → Rule: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Missing Terms</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find the missing terms in these sequences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 9, 16, __, 36, 49, __, 81</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. __, 27, 64, __, 216, 343</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 100, 81, 64, __, 36, __, 16</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create two sequences for a classmate to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A square number sequence with 5 terms:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. A cube number sequence with 4 terms:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Explain how you would test if a sequence uses square numbers or cube numbers:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find or create a number sequence in real life (like house numbers, scores, etc.). Identify if it relates to squares or cubes.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek4);
    console.log("grade6-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek4);
    console.log("grade6-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek4',
        metadata: grade6MathWeek4.metadata,
        days: grade6MathWeek4
    });
    console.log("grade6-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek4 = grade6MathWeek4;
console.log("grade6-math-week4.js loaded and registered successfully");