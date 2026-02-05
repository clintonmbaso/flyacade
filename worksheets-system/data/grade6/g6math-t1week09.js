// Grade 6 Math - Week 9 Data
const grade6MathWeek9 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 1,
        week: 9,
        title: "Introduction to Ratios and Proportions",
        description: "Understanding, representing, simplifying, and calculating with ratios; introduction to direct proportion"
    },
    
    monday: {
        subject: "Math",
        topic: "Introduction to Ratios",
        subtopic: "Meaning of Ratio",
        lessonContent: `
            <p>Welcome to our exploration of ratios! This week we will learn how to compare quantities using ratios, a fundamental mathematical concept used in everyday life.</p>
            <p><strong>What is a Ratio?</strong> A ratio is a comparison of two quantities. It shows how much of one thing there is compared to another.</p>
            <p><strong>Key Concept:</strong> Ratios tell us about the relationship between two groups. For example, if we have 3 red pens and 2 blue pens, the ratio of red pens to blue pens is 3 to 2.</p>
            <p><strong>How We Write Ratios:</strong></p>
            <ul>
                <li>Using the word "to": 3 to 2</li>
                <li>Using a colon: 3:2</li>
                <li>As a fraction: 3/2 (though we'll use this carefully)</li>
            </ul>
            <p><strong>Why Are Ratios Important?</strong></p>
            <ul>
                <li>They help us compare quantities in recipes</li>
                <li>They show relationships in maps and scales</li>
                <li>They describe mixtures and solutions</li>
                <li>They help us understand sports statistics and probabilities</li>
            </ul>
            <p><strong>Understanding Ratio Language:</strong> When we say "the ratio of A to B," we're comparing the first quantity to the second quantity. Order matters!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #4A90E2;"></i> Classroom Example</div>
                <p>In our classroom: 15 girls to 12 boys. The ratio of girls to boys is 15:12. This means for every 15 girls, there are 12 boys.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Fruit Basket</div>
                <p>A basket has 4 apples and 6 oranges. The ratio of apples to oranges is 4:6. This tells us there are more oranges than apples.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Ratio Tip</div>
                <p>Always pay attention to what's being compared! "The ratio of cats to dogs" is different from "the ratio of dogs to cats."</p>
            </div>
        `,
        taskInstructions: "Practice identifying and writing ratios by completing the following activities using counters or drawings.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Use counters to represent these groups, then write the ratio:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 5 red counters and 3 blue counters (red:blue)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. 2 squares and 6 circles (squares:circles)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. 8 pencils and 4 erasers (pencils:erasers)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Create your own ratio:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Use 10 counters total. Create a ratio of 3:2 (any two colors). Draw your arrangement:</div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">Write your ratio in two different ways:</div>
                    <div style="margin-left: 20px; height: 40px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Real-world ratio identification:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. In a parking lot: 4 cars and 7 motorcycles (cars:motorcycles)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. On a bookshelf: 9 fiction books and 6 non-fiction books (fiction:non-fiction)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. In a pencil case: 3 pens and 5 pencils (pens:pencils)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Explain in your own words: What is a ratio?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 examples of ratios in your home (kitchen, living room, etc.). Write them down with what they compare.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Representing Ratios Visually",
        subtopic: "Diagrams and Models",
        lessonContent: `
            <p>Today we will learn different ways to represent ratios visually. Pictures and diagrams help us understand ratios better and see how they work.</p>
            <p><strong>Why Use Visual Representations?</strong></p>
            <ul>
                <li>They make abstract concepts concrete</li>
                <li>They help us see patterns and relationships</li>
                <li>They make it easier to understand equivalent ratios</li>
                <li>They provide different ways to solve ratio problems</li>
            </ul>
            <p><strong>Different Ways to Represent Ratios Visually:</strong></p>
            <ol>
                <li><strong>Colored Counters or Blocks:</strong> Physical objects we can move and group</li>
                <li><strong>Bar Models:</strong> Rectangular bars divided into sections</li>
                <li><strong>Colored Grids:</strong> Squares colored to show different quantities</li>
                <li><strong>Circle Diagrams:</strong> Circles divided into sectors (like pie charts)</li>
                <li><strong>Tape Diagrams:</strong> Similar to bar models but often used in ratio problems</li>
            </ol>
            <p><strong>What Are Equivalent Ratios?</strong> These are different ratios that represent the same relationship. For example, 2:3 is equivalent to 4:6 and 6:9. Visually, they show the same pattern but with different total amounts.</p>
            <p><strong>How to Create Visual Representations:</strong></p>
            <ol>
                <li>Decide what each part of the ratio represents</li>
                <li>Choose a visual method (bars, grids, etc.)</li>
                <li>Make sure each quantity is clearly shown</li>
                <li>Label your diagram clearly</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Bar Model Example</div>
                <p>Ratio 3:2 shown as two bars: one with 3 equal sections, another with 2 equal sections. This visually compares the quantities side by side.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Grid Method</div>
                <p>A 5×2 grid with 6 squares colored red and 4 colored blue shows ratio 6:4. Each row or column can represent a group.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt"></i> Equivalent Ratios</div>
                <p>2:3 looks like ◯◯ | ◯◯◯. 4:6 looks like ◯◯◯◯ | ◯◯◯◯◯◯. Both show the same pattern of 2 red for every 3 blue.</p>
            </div>
        `,
        taskInstructions: "Practice representing ratios visually using different methods.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bar Models</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw bar models for these ratios:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4:5</div>
                        <div class="drawing-area" style="height: 60px; margin: 5px 0 15px 20px; border: 2px dashed #ccc;"></div>
                        <div>b. 2:7</div>
                        <div class="drawing-area" style="height: 60px; margin: 5px 0 15px 20px; border: 2px dashed #ccc;"></div>
                        <div>c. 3:3</div>
                        <div class="drawing-area" style="height: 60px; margin: 5px 0 15px 20px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Grid Representations</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use grid paper (or draw grids) to show:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Ratio 3:4 using colored squares (15 squares total)</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                        <div>b. Create an equivalent ratio to 3:4 using 28 squares total</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Equivalent Ratios</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For the ratio 2:5:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Draw it using circles (◯) with 14 items total</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. What is the ratio now? __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Draw it again using 21 items total</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>d. What is the ratio now? __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Visualization</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose a real-world ratio from Monday's homework. Draw two different visual representations of it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ratio I chose: __________</div>
                        <div>Representation 1:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>Representation 2:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a picture in a magazine that shows a ratio (like a recipe with ingredients). Draw two visual representations of the ratio.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Simplifying Ratios",
        subtopic: "Lowest Terms",
        lessonContent: `
            <p>Today we will learn how to simplify ratios. Just like fractions, ratios can often be expressed in simpler terms while keeping the same relationship.</p>
            <p><strong>What Does "Simplify" Mean?</strong> To simplify a ratio means to express it using the smallest possible whole numbers while keeping the same relationship between quantities.</p>
            <p><strong>Why Simplify Ratios?</strong></p>
            <ul>
                <li>Makes ratios easier to understand and compare</li>
                <li>Reveals the basic relationship between quantities</li>
                <li>Helps with calculations and problem solving</li>
                <li>Standard way to express ratios in mathematics</li>
            </ul>
            <p><strong>How to Simplify Ratios:</strong></p>
            <ol>
                <li>Write the ratio as two numbers</li>
                <li>Find a common factor (a number that divides evenly into both)</li>
                <li>Divide both numbers by that common factor</li>
                <li>Repeat until the only common factor is 1</li>
            </ol>
            <p><strong>Example:</strong> Ratio 6:9</p>
            <ul>
                <li>Both 6 and 9 can be divided by 3</li>
                <li>6 ÷ 3 = 2 and 9 ÷ 3 = 3</li>
                <li>Simplified ratio: 2:3</li>
                <li>Check: 6:9 and 2:3 represent the same relationship</li>
            </ul>
            <p><strong>Visual Understanding:</strong> When we simplify 6:9 to 2:3, we're grouping items. Instead of thinking "6 red and 9 blue," we think "for every 2 red, there are 3 blue."</p>
            <p><strong>Special Cases:</strong></p>
            <ul>
                <li>Ratios like 5:7 are already in simplest form (no common factors except 1)</li>
                <li>Ratios with decimals or fractions need special treatment (we'll learn later)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator" style="color: #4A90E2;"></i> Simplification Steps</div>
                <p>8:12 → both divisible by 2 → 4:6 → both divisible by 2 → 2:3. Or faster: both divisible by 4 → 2:3 directly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group"></i> Visual Grouping</div>
                <p>10 blue marbles and 15 red marbles. Group them into sets of 5: each set has 2 blue and 3 red. Ratio simplifies to 2:3.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Finding Factors</div>
                <p>For 18:24, find factors of both: 18 (1,2,3,6,9,18), 24 (1,2,3,4,6,8,12,24). Greatest common factor is 6. Divide both by 6 → 3:4.</p>
            </div>
        `,
        taskInstructions: "Practice simplifying ratios to their lowest terms.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Simplification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Simplify these ratios:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4:8 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 9:12 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 15:20 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 14:21 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. 25:30 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Visual Simplification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and simplify:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Draw 8 stars and 12 circles. Group them to show the simplified ratio:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>Simplified ratio: __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Draw 10 triangles and 15 squares. Group them:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>Simplified ratio: __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Simplify these real-world ratios:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A recipe uses 6 cups of flour and 9 cups of sugar (flour:sugar)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. A garden has 18 roses and 24 tulips (roses:tulips)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. A parking lot has 16 cars and 20 motorcycles (cars:motorcycles)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. A box contains 30 red marbles and 45 blue marbles (red:blue)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which of these ratios are already in simplest form? Circle them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3:7  4:10  5:8  9:15  11:13  14:16</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Find the missing number in these equivalent ratios:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3:5 = 9:_____</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 4:7 = _____:21</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. _____:6 = 10:12</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 ratios in your environment and simplify them. Write both the original and simplified forms.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Calculations with Ratios",
        subtopic: "Finding Missing Values",
        lessonContent: `
            <p>Today we will use ratios to solve problems where one part is missing. This is a practical skill that helps us use ratios in real situations like cooking, building, or mixing.</p>
            <p><strong>Real-World Application:</strong> If you know the ratio of ingredients in a recipe and how much of one ingredient you have, you can calculate how much of the other ingredients you need.</p>
            <p><strong>Key Concept:</strong> Equivalent ratios help us find missing values. If 2:3 is equivalent to 6:9, then when we know one pair, we can find the other.</p>
            <p><strong>Two Types of Problems:</strong></p>
            <ol>
                <li><strong>Scaling Up:</strong> When we know the ratio and one quantity, and need to find the other quantity in a larger version</li>
                <li><strong>Scaling Down:</strong> When we know the ratio and one quantity, and need to find the other quantity in a smaller version</li>
            </ol>
            <p><strong>Method 1: Unit Ratio Method</strong></p>
            <ol>
                <li>Find what one unit represents</li>
                <li>Multiply to find the needed quantity</li>
                <li>Example: Ratio 2:3, 6 cups of flour. Each "2" unit = 3 cups (6 ÷ 2 = 3). So sugar needed = 3 × 3 = 9 cups.</li>
            </ol>
            <p><strong>Method 2: Multiplication/Division Method</strong></p>
            <ol>
                <li>See what you multiplied/divided by to get from known part to known quantity</li>
                <li>Apply same operation to other part</li>
                <li>Example: Ratio 2:3, 6 cups flour. 2 → 6 (×3). So 3 → 9 (also ×3).</li>
            </ol>
            <p><strong>Checking Your Work:</strong> After finding the missing value, check that the two ratios are equivalent by simplifying or cross-multiplying.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #4A90E2;"></i> Recipe Example</div>
                <p>Lemonade ratio: 2 lemons to 3 cups water. With 8 lemons, how much water? 2→8 (×4), so 3→12 (×4). Need 12 cups water.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-roller"></i> Paint Mixing</div>
                <p>Paint ratio 3 parts blue to 5 parts white. With 15 parts blue, how much white? 3→15 (×5), so 5→25 (×5). Need 25 parts white.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Building Blocks</div>
                <p>Pattern uses 4 red blocks for every 7 blue. With 28 red blocks, how many blue? 4→28 (×7), so 7→49 (×7). Need 49 blue blocks.</p>
            </div>
        `,
        taskInstructions: "Solve these ratio problems by finding missing values.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the missing values:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Ratio 2:5. If first quantity is 8, second is __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Ratio 3:7. If second quantity is 21, first is __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Ratio 4:9. If first quantity is 16, second is __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. Ratio 5:6. If second quantity is 30, first is __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Recipe Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these cooking problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Smoothie recipe: 3 bananas to 2 cups yogurt. For 9 bananas, how much yogurt?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. Cookie dough: 4 cups flour to 1 cup sugar. With 6 cups flour, how much sugar?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. Pancake mix: 2 eggs to 3 cups milk. With 8 eggs, how much milk?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Visual Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use drawings to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The ratio of squares to triangles is 3:4. There are 12 squares. Draw the triangles needed:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>Number of triangles: __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. The ratio of circles to stars is 5:2. There are 8 stars. Draw the circles:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>Number of circles: __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these multi-step problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The ratio of boys to girls is 3:5. There are 24 girls. How many boys? __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. The ratio of apples to oranges is 7:4. There are 28 apples. How many oranges? __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. A map scale is 1 cm:5 km. Two cities are 8 cm apart on the map. Actual distance? __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. The ratio of flour to sugar is 5:2. You use 15 cups of flour. How much sugar? __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own ratio problem and solve it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Problem:</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>Solution:</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a recipe at home. If you wanted to make double the amount, calculate the new amounts using ratio thinking.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Math",
        topic: "Understanding Direct Proportion",
        subtopic: "Special Relationships",
        lessonContent: `
            <p>Today we will learn about direct proportion, a special type of relationship between two quantities. This is an important concept that appears in shopping, travel, cooking, and many real-life situations.</p>
            <p><strong>What is Direct Proportion?</strong> Two quantities are in direct proportion when:</p>
            <ul>
                <li>As one quantity increases, the other increases at the same rate</li>
                <li>As one quantity decreases, the other decreases at the same rate</li>
                <li>The ratio between them always stays the same</li>
            </ul>
            <p><strong>Key Characteristic:</strong> In direct proportion, if you double one quantity, you double the other. If you halve one, you halve the other.</p>
            <p><strong>Everyday Examples:</strong></p>
            <ol>
                <li><strong>Shopping:</strong> Price and number of items (if 1 apple costs $0.50, 2 apples cost $1.00)</li>
                <li><strong>Travel:</strong> Distance and time at constant speed (if you travel 60 km in 1 hour, you travel 120 km in 2 hours)</li>
                <li><strong>Baking:</strong> Ingredients and number of servings</li>
                <li><strong>Fuel:</strong> Amount of gasoline and distance traveled</li>
            </ol>
            <p><strong>How to Identify Direct Proportion:</strong></p>
            <ol>
                <li>Check if the ratio between two quantities is constant</li>
                <li>See if multiplying/dividing one quantity by a number does the same to the other</li>
                <li>Ask: "If I have twice as much of this, will I need twice as much of that?"</li>
            </ol>
            <p><strong>Direct Proportion vs. Regular Ratios:</strong> All direct proportions are ratios, but not all ratios are direct proportions. Direct proportion specifically means the quantities change together at a constant rate.</p>
            <p><strong>Graphical Representation:</strong> Direct proportion always creates a straight line through the origin (0,0) on a graph. We'll explore this more in future lessons.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart" style="color: #4A90E2;"></i> Shopping Example</div>
                <p>Pencils cost $0.75 each. 1 pencil = $0.75, 2 pencils = $1.50, 3 pencils = $2.25. Price increases at same rate as number of pencils.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Travel Example</div>
                <p>Car uses 1 liter of fuel for every 12 km. 1L = 12km, 2L = 24km, 3L = 36km. Distance is directly proportional to fuel.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Pattern Recognition</div>
                <p>In direct proportion, you can always multiply the first quantity by the same number to get the second. This number is called the "constant of proportionality."</p>
            </div>
        `,
        taskInstructions: "Identify and work with direct proportion relationships.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Direct Proportion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Which situations show direct proportion? Circle YES or NO:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Number of students and number of desks (1 desk per student) YES NO</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. A person's age and their height YES NO</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Cost of bananas and number of pounds YES NO</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. Temperature and time of day YES NO</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. Pages read and time spent reading (at constant speed) YES NO</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Completing Tables</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete these direct proportion tables:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Pencils cost $0.50 each:</div>
                        <div style="margin-left: 20px;">
                            <div>Number of pencils: 1 2 3 4 5</div>
                            <div>Cost: $0.50 _____ _____ _____ _____</div>
                        </div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. A car travels 60 km per hour:</div>
                        <div style="margin-left: 20px;">
                            <div>Time (hours): 1 2 3 4 5</div>
                            <div>Distance (km): 60 _____ _____ _____ _____</div>
                        </div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. A recipe uses 3 cups of flour for 2 cups of sugar:</div>
                        <div style="margin-left: 20px;">
                            <div>Flour (cups): 3 6 9 12 15</div>
                            <div>Sugar (cups): 2 _____ _____ _____ _____</div>
                        </div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these direct proportion problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. If 5 notebooks cost $7.50, how much do 8 notebooks cost?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. A machine makes 12 toys in 3 hours. How many toys can it make in 10 hours?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. A map has a scale of 1:25,000. If two towns are 8 cm apart on the map, what is their actual distance?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>d. A typist can type 240 words in 4 minutes. How many words can they type in 15 minutes?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find or create a real-world example of direct proportion from your life:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Describe the situation:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>Show the ratio:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Create a table with at least 4 values:</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        <div>Explain why it's a direct proportion:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Weekly Review</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Show what you've learned this week:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Write the ratio 16:20 in simplest form:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Draw a visual representation of the ratio 3:5:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>c. If the ratio of red to blue marbles is 4:7 and there are 28 red marbles, how many blue marbles are there?</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>d. Give an example of something that is NOT in direct proportion:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look for three examples of direct proportion in advertisements, recipes, or instructions. Write them down and explain why they are direct proportions.",
        homeworkDue: "Monday",
        weeklySummary: {
            objectives: [
                "Understand and define what a ratio is",
                "Represent ratios visually using various methods",
                "Simplify ratios to their lowest terms",
                "Calculate missing values using equivalent ratios",
                "Identify and work with direct proportion relationships"
            ],
            keyVocabulary: [
                "Ratio - A comparison of two quantities",
                "Equivalent Ratios - Different ratios that represent the same relationship",
                "Simplify - To express a ratio using the smallest whole numbers",
                "Direct Proportion - When two quantities increase or decrease at the same rate",
                "Constant of Proportionality - The constant value of the ratio between two proportional quantities"
            ],
            reflectionQuestions: [
                "Which method of representing ratios do you find most helpful and why?",
                "How might you use ratios in your daily life outside of school?",
                "What was the most challenging concept this week and how did you overcome it?"
            ]
        }
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek9);
    console.log("grade6-math-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek9);
    console.log("grade6-math-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek9',
        metadata: grade6MathWeek9.metadata,
        days: grade6MathWeek9
    });
    console.log("grade6-math-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek9 = grade6MathWeek9;
console.log("grade6-math-week9.js loaded and registered successfully"); 