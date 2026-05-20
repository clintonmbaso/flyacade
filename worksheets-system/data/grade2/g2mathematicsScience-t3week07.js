// Grade 2 Mathematics & Science - Term 3 Week 7 Data
const grade2MathScienceWeek7 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 3,
        week: 7,
        title: "Introduction to Multiplication",
        description: "Understanding multiplication through equal groups, arrays, repeated addition, and the commutative law"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Equal Groups and Number of Elements",
        lessonContent: `
            <p>Welcome to our multiplication adventure! Today we'll learn what multiplication means by thinking about equal groups.</p>
            <p><strong>Key Question:</strong> What does it mean when we multiply numbers?</p>
            <p><strong>Introduction:</strong> Multiplication is a fast way to add the same number again and again. When we multiply, we are counting <strong>equal groups</strong>.</p>
            <p><strong>Understanding Equal Groups:</strong></p>
            <ul>
                <li>Equal groups means each group has the SAME number of items</li>
                <li>No group has more or less than the others</li>
                <li>Example: 3 plates with 4 cookies on each plate = equal groups!</li>
            </ul>
            <p><strong>Multiplication Vocabulary:</strong></p>
            <ul>
                <li><strong>Factor:</strong> The numbers we multiply together</li>
                <li><strong>Product:</strong> The answer (the total number of items)</li>
                <li><strong>"Groups of":</strong> 3 groups of 4 means 3 × 4</li>
            </ul>
            <p><strong>Real-Life Example:</strong> If you have 5 bags with 2 apples in each bag, you have 5 groups of 2 apples. That's 5 × 2 = 10 apples total!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Party!</div>
                <p>There are 4 pizza boxes. Each box has 3 slices. How many slices total?<br>
                4 groups of 3 = 4 × 3 = 12 slices!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Toy Cars</div>
                <p>You have 6 rows of toy cars. Each row has 2 cars. How many cars?<br>
                6 groups of 2 = 6 × 2 = 12 cars!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Counting Fingers</div>
                <p>2 hands with 5 fingers each = 2 groups of 5 = 2 × 5 = 10 fingers!</p>
            </div>
        `,
        taskInstructions: "Draw equal groups and write the multiplication sentence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Equal Groups</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw 4 groups with 2 stars in each group. Then write the multiplication sentence:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 30px; margin-top: 5px;">_____ × _____ = _____</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw 3 groups with 5 circles in each group. Then write the multiplication sentence:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 30px; margin-top: 5px;">_____ × _____ = _____</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Count the Groups</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How many groups? How many in each group? Write the multiplication sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🟦🟦🟦 &nbsp;&nbsp; 🟦🟦🟦 &nbsp;&nbsp; 🟦🟦🟦</div>
                        <div>_____ groups of _____ = _____ × _____ = _____</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">🍎🍎 &nbsp;&nbsp; 🍎🍎 &nbsp;&nbsp; 🍎🍎 &nbsp;&nbsp; 🍎🍎</div>
                        <div>_____ groups of _____ = _____ × _____ = _____</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> There are 7 fish tanks. Each tank has 3 fish. How many fish in all?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> You have 4 pockets. Each pocket has 2 coins. How many coins total?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home that come in equal groups (eggs in a carton, cups in a set, windows on a house). Write the multiplication sentence for each.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Strategies: Repeated Addition, Arrays, and Tiles",
        lessonContent: `
            <p>Today we'll learn different strategies to solve multiplication problems!</p>
            <p><strong>Key Question:</strong> What are different ways we can figure out a multiplication problem?</p>
            <p><strong>Strategy 1: Repeated Addition</strong></p>
            <ul>
                <li>Multiplication is adding the same number over and over</li>
                <li>Example: 4 × 3 means 3 + 3 + 3 + 3 = 12</li>
                <li>We add 3 four times!</li>
            </ul>
            <p><strong>Strategy 2: Arrays</strong></p>
            <ul>
                <li>An array arranges items in rows and columns</li>
                <li>Rows go across (left to right)</li>
                <li>Columns go up and down</li>
                <li>Example: 3 rows with 4 in each row = 3 × 4 = 12</li>
            </ul>
            <p><strong>Strategy 3: Tiles or Counters</strong></p>
            <ul>
                <li>Use small objects to build equal groups</li>
                <li>Count all the objects to find the product</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Repeated Addition</div>
                <p>5 × 2 = ?<br>
                2 + 2 + 2 + 2 + 2 = 10<br>
                So 5 × 2 = 10!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Array Example</div>
                <p>Draw 4 rows with 6 dots in each row:<br>
                ●●●●●●<br>
                ●●●●●●<br>
                ●●●●●●<br>
                ●●●●●●<br>
                4 rows × 6 columns = 4 × 6 = 24</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Tile Strategy</div>
                <p>Use 15 tiles to show 3 × 5. Make 3 groups with 5 tiles in each group. Count all tiles = 15!</p>
            </div>
        `,
        taskInstructions: "Solve multiplication problems using repeated addition, arrays, and tiles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Repeated Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each multiplication as repeated addition, then solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3 × 4 = _____ + _____ + _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 10px;">5 × 3 = _____ + _____ + _____ + _____ + _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div style="margin-top: 10px;">2 × 6 = _____ + _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Arrays</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw an array for each multiplication problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>2 × 5</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>4 × 3</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>3 × 6</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Tile Strategy</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw circles to show equal groups for each problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>4 × 2 = _____ (Draw 4 groups with 2 circles each)</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>3 × 5 = _____ (Draw 3 groups with 5 circles each)</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Choose Your Strategy</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve 4 × 4 using any strategy you like. Show your work:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Use small objects at home (beans, buttons, coins) to show 3 × 6. Draw a picture of what you made and write the answer.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Multiplying Single Digit Numbers",
        lessonContent: `
            <p>Today we'll practice multiplying single digit numbers (numbers 1 through 9)!</p>
            <p><strong>Key Question:</strong> How can we multiply numbers like 3 × 4, 5 × 2, or 6 × 3?</p>
            <p><strong>Multiplication Facts to Remember:</strong></p>
            <ul>
                <li>Any number × 0 = 0 (Example: 7 × 0 = 0)</li>
                <li>Any number × 1 = that number (Example: 8 × 1 = 8)</li>
                <li>Any number × 2 = double the number (Example: 4 × 2 = 8)</li>
                <li>Any number × 5 = ends with 0 or 5 (Example: 3 × 5 = 15)</li>
                <li>Any number × 10 = add a zero (Example: 4 × 10 = 40)</li>
            </ul>
            <p><strong>Tips for Multiplying:</strong></p>
            <ol>
                <li>Think about equal groups</li>
                <li>Use repeated addition</li>
                <li>Draw an array</li>
                <li>Use your fingers to count</li>
                <li>Memorize the small multiplication facts!</li>
            </ol>
            <p><strong>Practice Pattern:</strong> 2 × 3 = 6, 3 × 3 = 9, 4 × 3 = 12 (each time we add 3 more!)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> 2s Facts</div>
                <p>2 × 1 = 2<br>
                2 × 2 = 4<br>
                2 × 3 = 6<br>
                2 × 4 = 8<br>
                2 × 5 = 10</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> 5s Facts</div>
                <p>5 × 1 = 5<br>
                5 × 2 = 10<br>
                5 × 3 = 15<br>
                5 × 4 = 20<br>
                5 × 5 = 25</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Helpful Pattern</div>
                <p>When multiplying by 3, you can add the number three times!<br>
                4 × 3 = 4 + 4 + 4 = 12</p>
            </div>
        `,
        taskInstructions: "Practice multiplying single digit numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiply!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these multiplication problems:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                        <div>2 × 3 = _____</div>
                        <div>4 × 2 = _____</div>
                        <div>3 × 3 = _____</div>
                        <div>5 × 2 = _____</div>
                        <div>1 × 7 = _____</div>
                        <div>0 × 9 = _____</div>
                        <div>3 × 4 = _____</div>
                        <div>2 × 6 = _____</div>
                        <div>4 × 4 = _____</div>
                        <div>5 × 3 = _____</div>
                        <div>2 × 8 = _____</div>
                        <div>3 × 5 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Show Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each problem, show your strategy (repeated addition OR draw an array):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>4 × 3 = _____</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;">2 × 7 = _____</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;">3 × 6 = _____</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> There are 6 desks. Each desk has 2 pencils. How many pencils total?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> You have 4 bags of marbles. Each bag has 5 marbles. How many marbles in all?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Sarah sees 3 rows of flowers. Each row has 7 flowers. How many flowers are there?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 4 × 5 = _____.  Then write a story problem to match:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice your 2s, 3s, and 5s multiplication facts. Write them 2 times each in your notebook.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Completing Single Digit Multiplication Tables",
        lessonContent: `
            <p>Today we'll complete multiplication tables and become faster at multiplying!</p>
            <p><strong>Key Question:</strong> How can we fill in a multiplication table quickly and correctly?</p>
            <p><strong>What is a Multiplication Table?</strong></p>
            <ul>
                <li>A chart that shows all the multiplication facts for numbers 1-10</li>
                <li>The row tells you the first factor</li>
                <li>The column tells you the second factor</li>
                <li>Where they meet is the product (answer)</li>
            </ul>
            <p><strong>Tips for Completing Tables:</strong></p>
            <ol>
                <li>Start with the 0s and 1s (they're the easiest!)</li>
                <li>Then do the 2s (doubling)</li>
                <li>Then the 5s and 10s (they have patterns)</li>
                <li>Use facts you already know to find new facts</li>
            </ol>
            <p><strong>Pattern to Notice:</strong> In the 2s table, all answers are even numbers (2,4,6,8,10...). In the 5s table, all answers end in 0 or 5 (5,10,15,20...).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Multiplication Table (×1)</div>
                <p>1 × 1 = 1<br>
                2 × 1 = 2<br>
                3 × 1 = 3<br>
                4 × 1 = 4<br>
                5 × 1 = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Multiplication Table (×2)</div>
                <p>1 × 2 = 2<br>
                2 × 2 = 4<br>
                3 × 2 = 6<br>
                4 × 2 = 8<br>
                5 × 2 = 10</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Finding the Pattern</div>
                <p>Look at the 3s table: 3, 6, 9, 12, 15... Each number is 3 more than the one before it!</p>
            </div>
        `,
        taskInstructions: "Complete multiplication tables and identify patterns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the ×2 Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing products:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1 × 2 = _____</div>
                        <div>2 × 2 = _____</div>
                        <div>3 × 2 = _____</div>
                        <div>4 × 2 = _____</div>
                        <div>5 × 2 = _____</div>
                        <div>6 × 2 = _____</div>
                        <div>7 × 2 = _____</div>
                        <div>8 × 2 = _____</div>
                        <div>9 × 2 = _____</div>
                        <div>10 × 2 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the ×5 Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing products:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1 × 5 = _____</div>
                        <div>2 × 5 = _____</div>
                        <div>3 × 5 = _____</div>
                        <div>4 × 5 = _____</div>
                        <div>5 × 5 = _____</div>
                        <div>6 × 5 = _____</div>
                        <div>7 × 5 = _____</div>
                        <div>8 × 5 = _____</div>
                        <div>9 × 5 = _____</div>
                        <div>10 × 5 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the ×3 Table</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing products:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1 × 3 = _____</div>
                        <div>2 × 3 = _____</div>
                        <div>3 × 3 = _____</div>
                        <div>4 × 3 = _____</div>
                        <div>5 × 3 = _____</div>
                        <div>6 × 3 = _____</div>
                        <div>7 × 3 = _____</div>
                        <div>8 × 3 = _____</div>
                        <div>9 × 3 = _____</div>
                        <div>10 × 3 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in the multiplication table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="border-collapse: collapse; width: 100%; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">×</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">2</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">3</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">4</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">5</th>
                            </tr>
                            <tr><th style="padding: 8px; border: 1px solid #ddd;">2</th>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                            </tr>
                            <tr><th style="padding: 8px; border: 1px solid #ddd;">3</th>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                            </tr>
                            <tr><th style="padding: 8px; border: 1px solid #ddd;">4</th>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                            </tr>
                            <tr><th style="padding: 8px; border: 1px solid #ddd;">5</th>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">____</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Pattern Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What pattern do you notice in the ×2 table? What about the ×5 table?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own multiplication table for ×4 on a piece of paper. Practice saying the facts out loud.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Applying Commutative Law of Multiplication",
        lessonContent: `
            <p>Congratulations! You've made it to Friday. Today we'll learn a special trick called the <strong>Commutative Law</strong>!</p>
            <p><strong>Key Question:</strong> Does the order of numbers matter when we multiply?</p>
            <p><strong>The Commutative Law:</strong></p>
            <ul>
                <li>When multiplying, you can SWITCH the order of the factors</li>
                <li>The product (answer) stays the SAME!</li>
                <li>3 × 4 = 4 × 3 (both equal 12!)</li>
                <li>2 × 5 = 5 × 2 (both equal 10!)</li>
            </ul>
            <p><strong>Why is this helpful?</strong></p>
            <ul>
                <li>If you forget 4 × 3, you can think 3 × 4 instead!</li>
                <li>You can always switch to the fact you know better</li>
                <li>It cuts the number of facts you need to memorize in HALF!</li>
            </ul>
            <p><strong>The "Turn-Around" Rule:</strong> 6 × 2 is the same as 2 × 6. 5 × 4 is the same as 4 × 5. Try it - the answer is always the same!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Turn-Around Facts</div>
                <p>3 × 5 = 15 &nbsp;&nbsp;&nbsp; 5 × 3 = 15<br>
                2 × 7 = 14 &nbsp;&nbsp;&nbsp; 7 × 2 = 14<br>
                4 × 6 = 24 &nbsp;&nbsp;&nbsp; 6 × 4 = 24</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Helpful Trick</div>
                <p>If you know 2 × 8 = 16, then you also know 8 × 2 = 16! That's two facts for the price of one!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Real Life</div>
                <p>4 rows with 5 chairs in each row = 4 × 5 = 20 chairs.<br>
                OR 5 columns with 4 chairs in each column = 5 × 4 = 20 chairs. Same total!</p>
            </div>
        `,
        taskInstructions: "Practice the commutative law by turning around multiplication facts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Turn It Around!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the commutative fact for each multiplication sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3 × 4 = 12 &nbsp;&nbsp;&nbsp; _____ × _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>5 × 2 = 10 &nbsp;&nbsp;&nbsp; _____ × _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>6 × 3 = 18 &nbsp;&nbsp;&nbsp; _____ × _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>4 × 7 = 28 &nbsp;&nbsp;&nbsp; _____ × _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>2 × 9 = 18 &nbsp;&nbsp;&nbsp; _____ × _____ = _____</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Equal Pairs</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the pairs that are equal (they show the commutative law):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3 × 4 &nbsp;&nbsp;&nbsp; 4 × 3</div>
                        <div>5 × 2 &nbsp;&nbsp;&nbsp; 2 × 6</div>
                        <div>7 × 1 &nbsp;&nbsp;&nbsp; 1 × 7</div>
                        <div>8 × 3 &nbsp;&nbsp;&nbsp; 3 × 8</div>
                        <div>4 × 5 &nbsp;&nbsp;&nbsp; 5 × 4</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Use Commutative Law to Solve</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If you know 2 × 6 = 12, what is 6 × 2?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If you know 4 × 3 = 12, what is 3 × 4?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> You forgot 7 × 3. Which fact can you use instead?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems with Commutative Law</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> There are 6 bags with 4 apples in each bag. Write two multiplication sentences that show the total:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a 3 × 5 array. Then draw a 5 × 3 array. What do you notice?
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge - Complete the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Fill in the missing numbers using commutative law:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>4 × 8 = 32 &nbsp;&nbsp;&nbsp; 8 × 4 = _____</div>
                        <div>9 × 2 = 18 &nbsp;&nbsp;&nbsp; 2 × 9 = _____</div>
                        <div>5 × 6 = _____ &nbsp;&nbsp;&nbsp; 6 × 5 = 30</div>
                        <div>7 × _____ = 21 &nbsp;&nbsp;&nbsp; 3 × 7 = 21</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach the commutative law (turn-around rule) to someone at home. Give them 3 examples and show them how it works. Have them sign your notebook.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek7);
    console.log("grade2-mathscience-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek7);
    console.log("grade2-mathscience-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek7',
        metadata: grade2MathScienceWeek7.metadata,
        days: grade2MathScienceWeek7
    });
    console.log("grade2-mathscience-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek7 = grade2MathScienceWeek7;
console.log("grade2-mathscience-week7.js loaded and registered successfully");