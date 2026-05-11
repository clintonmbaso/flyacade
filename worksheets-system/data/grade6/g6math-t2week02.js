// Grade 6 Mathematics - Term 2 Week 2 Data
const grade6MathematicsWeek2 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 2,
        title: "Direct Proportion",
        description: "Understanding direct proportion through relationships, ratios, unitary method, currency, and graphing"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Direct Proportion",
        subtopic: "The Relationship of 'More'",
        lessonContent: `
            <p>Welcome to our exploration of direct proportion! Today we'll discover how two quantities can increase together in a special way.</p>
            <p><strong>Key Question:</strong> What happens to the cost when you buy more items?</p>
            <p><strong>Introduction:</strong> Direct proportion describes a relationship where as one quantity increases, the other increases at a constant rate. If you double one quantity, the other doubles too!</p>
            <p><strong>Real-Life Examples of Direct Proportion:</strong></p>
            <ol>
                <li><strong>Shopping:</strong> The more kilograms of rice you buy, the more money you pay</li>
                <li><strong>Speed & Distance:</strong> The longer you walk at the same speed, the farther you go</li>
                <li><strong>Cooking:</strong> The more people you feed, the more cups of rice you need</li>
                <li><strong>Working:</strong> The more hours you work (at the same hourly rate), the more money you earn</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Direct Proportion:</strong> Two quantities that increase or decrease together at the same rate</li>
                <li><strong>Constant Rate:</strong> The factor by which both quantities multiply stays the same</li>
                <li><strong>Ratio:</strong> The comparison between two quantities</li>
            </ul>
            <p><strong>The Rule of Direct Proportion:</strong> If y is directly proportional to x, then y = k × x, where k is the constant of proportionality.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Example</div>
                <p>If 1 kg of oranges costs $2, then:<br>
                2 kg costs $4 (doubled)<br>
                3 kg costs $6 (tripled)<br>
                5 kg costs $10 (multiplied by 5)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Speed Example</div>
                <p>If a car travels at 60 km/h, in:<br>
                1 hour → 60 km<br>
                2 hours → 120 km<br>
                3 hours → 180 km<br>
                Distance ∝ Time (distance is proportional to time)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-charging-station"></i> NOT Proportional</div>
                <p>Your age and your height are NOT directly proportional. When you were 1 year old, you were much smaller, but at 10 years old you're not 10x taller!</p>
            </div>
        `,
        taskInstructions: "Identify direct proportion relationships and complete tables.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Is it Direct Proportion?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each pair, write "Yes" if directly proportional or "No" if not:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Number of pens bought and total cost: _________</div>
                        <div>b) A person's height and shoe size: _________</div>
                        <div>c) Liters of fuel and distance traveled (same car): _________</div>
                        <div>d) Number of students and number of desks needed: _________</div>
                        <div>e) Time spent studying and exam score: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Proportional Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> If 1 apple costs $0.50, complete the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Number of Apples</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">1</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">2</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">3</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">4</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">5</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Cost ($)</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">0.50</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A recipe uses 3 cups of flour for every 2 cups of sugar. How many cups of flour are needed for 6 cups of sugar?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If 5 textbooks weigh 7.5 kg, how much do 8 textbooks weigh?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own real-life example of direct proportion.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of direct proportion in your home (e.g., how many eggs needed for pancakes, water for rice). Write each as a sentence.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Direct Proportion",
        subtopic: "Ratio & Direct Proportion",
        lessonContent: `
            <p>Today we'll learn how ratios define proportional relationships and how to identify equivalent ratios!</p>
            <p><strong>Key Question:</strong> How do we know if two ratios are proportional?</p>
            <p><strong>What is a Ratio?</strong></p>
            <p>A ratio compares two or more quantities. The ratio 2:3 means for every 2 of the first item, there are 3 of the second.</p>
            <p><strong>Ratios in Direct Proportion:</strong></p>
            <ul>
                <li>When two quantities are in direct proportion, their ratios are equal</li>
                <li>Example: 1:2 = 2:4 = 3:6 = 4:8 (all reduce to 1:2)</li>
                <li>We call these <strong>equivalent ratios</strong></li>
            </ul>
            <p><strong>How to Check for Proportionality Using Ratios:</strong></p>
            <ol>
                <li>Write the two ratios as fractions</li>
                <li>Cross-multiply</li>
                <li>If the products are equal, they are in proportion</li>
            </ol>
            <p><strong>Example:</strong> Is 3:4 proportional to 6:8?<br>
            3/4 = 6/8 → Cross-multiply: 3 × 8 = 24, 4 × 6 = 24 → YES, they are proportional!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Equivalent Ratios</div>
                <p>If the ratio of flour to sugar is 2:1, then:<br>
                2 cups flour : 1 cup sugar<br>
                4 cups flour : 2 cups sugar<br>
                6 cups flour : 3 cups sugar<br>
                All are equivalent to 2:1</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Cross-Multiplication</div>
                <p>Check if 5:8 and 10:16 are proportional:<br>
                5 × 16 = 80<br>
                8 × 10 = 80<br>
                80 = 80 → YES, they are proportional!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Juice Mixture</div>
                <p>A juice recipe uses 3 parts water to 1 part concentrate. If you use 6 cups water, how much concentrate?<br>
                Water : Concentrate = 3:1 = 6:? → ? = 2 cups concentrate</p>
            </div>
        `,
        taskInstructions: "Find equivalent ratios and check for proportionality.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find Equivalent Ratios</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write three equivalent ratios for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 1:3 → ____, ____, ____</div>
                        <div>b) 4:5 → ____, ____, ____</div>
                        <div>c) 2:7 → ____, ____, ____</div>
                        <div>d) 5:6 → ____, ____, ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Are These Proportional? (Use Cross-Multiplication)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Check each pair and write YES or NO:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2:3 and 4:6 → _________</div>
                        <div>b) 3:5 and 6:9 → _________</div>
                        <div>c) 7:8 and 14:16 → _________</div>
                        <div>d) 1:4 and 3:12 → _________</div>
                        <div>e) 5:9 and 10:18 → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Missing Value</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find the missing number to make the ratios proportional:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2:5 = 6:___</div>
                        <div>b) 3:4 = ___ : 16</div>
                        <div>c) 7:3 = 21:___</div>
                        <div>d) ___ : 9 = 4:6</div>
                        <div>e) 8:10 = 12:___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A paint mixture uses 3 parts blue paint to 5 parts yellow paint. If you use 15 parts yellow, how many parts blue should you use?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a recipe at home. Write the ratio of two ingredients. Then write 3 equivalent ratios for that recipe.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Direct Proportion",
        subtopic: "The Unitary Method",
        lessonContent: `
            <p>Today we'll master the unitary method - a powerful way to solve proportion problems by finding the value of ONE unit first!</p>
            <p><strong>Key Question:</strong> How can finding the cost of one item help us find the cost of many items?</p>
            <p><strong>What is the Unitary Method?</strong></p>
            <p>The unitary method means finding the value of one unit (single item) first, then multiplying to find the value of any number of items.</p>
            <p><strong>Steps to Solve Using the Unitary Method:</strong></p>
            <ol>
                <li>Identify what you know (e.g., cost of multiple items)</li>
                <li>Divide to find the cost/measurement for ONE unit</li>
                <li>Multiply by the number of units you need</li>
            </ol>
            <p><strong>Example:</strong> If 5 pens cost $15, how much do 8 pens cost?<br>
            Step 1: Find cost of 1 pen = $15 ÷ 5 = $3<br>
            Step 2: Cost of 8 pens = 8 × $3 = $24</p>
            <p><strong>When to Use the Unitary Method:</strong></p>
            <ul>
                <li>Shopping (finding total cost)</li>
                <li>Cooking (scaling recipes up or down)</li>
                <li>Travel (finding distance, time, or speed)</li>
                <li>Work (calculating wages for different hours)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Cooking Example</div>
                <p>A recipe for 10 cookies uses 2 cups of flour. How much flour for 25 cookies?<br>
                1 cookie → 2 ÷ 10 = 0.2 cups<br>
                25 cookies → 25 × 0.2 = 5 cups</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gas-pump"></i> Fuel Example</div>
                <p>A car uses 12 liters of fuel to travel 100 km. How much fuel for 350 km?<br>
                100 km → 12 liters<br>
                1 km → 12 ÷ 100 = 0.12 liters<br>
                350 km → 350 × 0.12 = 42 liters</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-clock"></i> Work Example</div>
                <p>4 workers can paint a house in 6 days. How long for 8 workers?<br>
                (This is inverse proportion, not direct! Be careful - not everything is direct proportion.)</p>
            </div>
        `,
        taskInstructions: "Use the unitary method to solve real-world proportion problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Unit Cost</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the table by finding the unit cost:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Items</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Total Cost</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Cost of 1 Item</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Cost of 10 Items</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">6 pens</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">$18</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">8 erasers</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">$4</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">5 kg rice</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">$12.50</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Unitary Method Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> If 7 oranges cost $4.20, how much do 10 oranges cost?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A car travels 240 km on 20 liters of fuel. How far will it travel on 35 liters?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A factory produces 450 toys in 6 hours. How many toys will it produce in 15 hours?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A recipe for 12 muffins uses 3 cups of flour. How many cups for 30 muffins?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a word problem that can be solved using the unitary method. Then solve it.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find something at home that comes in a multi-pack (like 6 soda cans, 10 eggs, 24 pack of water). Calculate the unit price and then find the cost of 15 units.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Direct Proportion",
        subtopic: "Currency & Measurement Conversions",
        lessonContent: `
            <p>Today we'll apply proportional methods to currency exchange rates and measurement conversions!</p>
            <p><strong>Key Question:</strong> How can we convert between currencies and units of measurement using proportion?</p>
            <p><strong>Currency Exchange Rates - A Real-World Proportion:</strong></p>
            <p>Exchange rates tell us how much one currency is worth in another currency. This is a direct proportion relationship!</p>
            <p><strong>Example:</strong> If $1 USD = 18.50 ZAR (South African Rand), then:<br>
            2 USD = 37 ZAR<br>
            5 USD = 92.50 ZAR<br>
            10 USD = 185 ZAR</p>
            <p><strong>Measurement Conversions Using Proportion:</strong></p>
            <ul>
                <li><strong>Length:</strong> 1 km = 1000 m, 1 m = 100 cm</li>
                <li><strong>Mass:</strong> 1 kg = 1000 g</li>
                <li><strong>Volume:</strong> 1 L = 1000 mL</li>
                <li><strong>Time:</strong> 1 hour = 60 minutes, 1 minute = 60 seconds</li>
            </ul>
            <p><strong>Unitary Method for Conversions:</strong><br>
            Step 1: Find the value of 1 unit in the new measurement<br>
            Step 2: Multiply by the number of units you have</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> Currency Conversion</div>
                <p>If $1 USD = 130 Kenyan Shillings (KES), how much is $25 USD?<br>
                1 USD = 130 KES<br>
                25 USD = 25 × 130 = 3,250 KES</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Length Conversion</div>
                <p>A rope is 4.5 meters. How many centimeters is that?<br>
                1 m = 100 cm<br>
                4.5 m = 4.5 × 100 = 450 cm</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Volume Conversion</div>
                <p>A water tank holds 2,500 mL. How many liters?<br>
                1000 mL = 1 L<br>
                2,500 mL = 2,500 ÷ 1000 = 2.5 L</p>
            </div>
        `,
        taskInstructions: "Apply proportional reasoning to currency and measurement conversions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Currency Exchange</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the exchange rate $1 USD = 18.50 ZAR, fill in the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">USD ($)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">1</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">2</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">5</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">10</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">20</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">ZAR (R)</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">18.50</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                            </tr>
                         </table>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> If $1 USD = 1,550 Nigerian Naira (NGN), how many Naira do you get for $50 USD?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A tourist exchanged 500 British Pounds (£) for US dollars. If £1 = $1.30 USD, how many dollars did they receive?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measurement Conversions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Convert each measurement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5 km = _________ m</div>
                        <div>b) 750 cm = _________ m</div>
                        <div>c) 3.2 kg = _________ g</div>
                        <div>d) 4,500 g = _________ kg</div>
                        <div>e) 2.5 L = _________ mL</div>
                        <div>f) 3 hours = _________ minutes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A recipe calls for 0.75 kg of flour. The store only sells flour in grams. How many grams do you need?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> You ran 2.5 km. Your friend ran 3,200 m. Who ran farther? By how much?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find today's exchange rate between your local currency and US dollars. Convert $20 USD into your currency. Then convert 500 units of your currency into USD.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Direct Proportion",
        subtopic: "Graphing Direct Proportion",
        lessonContent: `
            <p>Today we'll learn how to draw graphs that represent direct proportion relationships!</p>
            <p><strong>Key Question:</strong> What does a direct proportion graph look like?</p>
            <p><strong>The Direct Proportion Graph Rule:</strong></p>
            <ul>
                <li>A direct proportion graph is always a STRAIGHT LINE</li>
                <li>The line ALWAYS passes through the ORIGIN (0,0)</li>
                <li>If you double x, y doubles (constant rate)</li>
            </ul>
            <p><strong>Equation of a Direct Proportion Graph:</strong></p>
            <p>y = k × x, where k is the constant of proportionality (the slope/gradient)</p>
            <p><strong>How to Draw a Direct Proportion Graph:</strong></p>
            <ol>
                <li>Create a table of values for x and y (where y = k × x)</li>
                <li>Plot the points on a coordinate grid</li>
                <li>Draw a straight line through the points that passes through (0,0)</li>
            </ol>
            <p><strong>Example:</strong> If y = 2x (k=2):<br>
            x: 0, 1, 2, 3, 4<br>
            y: 0, 2, 4, 6, 8<br>
            Plot (0,0), (1,2), (2,4), (3,6), (4,8) → Draw a straight line!</p>
            <p><strong>What does the constant k tell us?</strong> k is the rate of change. In y=3x, for every 1 unit increase in x, y increases by 3 units.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Cost Graph</div>
                <p>If apples cost $2 per kg, the graph of cost vs weight:<br>
                Points: (0,0), (1,2), (2,4), (3,6)<br>
                The line is straight through (0,0) with slope 2.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Distance-Time Graph</div>
                <p>A car travels at 60 km/h. Graph of distance vs time:<br>
                Points: (0,0), (1,60), (2,120), (3,180)<br>
                Steeper line means faster speed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-charging-station"></i> NOT Direct Proportion</div>
                <p>A graph that is curved OR does NOT pass through (0,0) is NOT direct proportion.<br>
                Example: Fixed cost $10 + $5 per item → starts at (0,10) not (0,0)</p>
            </div>
        `,
        taskInstructions: "Plot direct proportion graphs and interpret them.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Table and Plot the Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For the equation y = 3x, complete the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 80%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">x</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">0</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">1</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">2</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">3</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">4</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">y</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">___</td>
                             </tr>
                         </table>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Plot these points on the grid below and draw the line:
                    <div class="graph-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2; position: relative;">
                        <svg width="100%" height="250" style="background: #f9f9f9;">
                            <line x1="40" y1="220" x2="300" y2="220" stroke="black" stroke-width="2"/>
                            <line x1="40" y1="20" x2="40" y2="220" stroke="black" stroke-width="2"/>
                            <text x="300" y="240">x</text>
                            <text x="20" y="15">y</text>
                            <text x="35" y="225">0</text>
                        </svg>
                        <p style="text-align: center; font-size: 12px; margin-top: 5px;">[Plot your points here: (0,0), (1,3), (2,6), (3,9), (4,12)]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify Direct Proportion Graphs</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which of these descriptions would produce a direct proportion graph? Write YES or NO:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Cost of buying multiple identical items (e.g., pens) _________</div>
                        <div>b) Distance traveled at constant speed over time _________</div>
                        <div>c) Water in a tub filling at constant rate over time _________</div>
                        <div>d) A taxi fare with $3 base fee plus $2 per km _________</div>
                        <div>e) Salary earned at $15 per hour _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Interpret the Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A graph shows y = 4x. If x = 7, what is y?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A direct proportion graph passes through (0,0) and (5, 15). What is the equation (y = k × x)?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a real-life direct proportion situation. Draw a table of values and sketch the graph.
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find or create a direct proportion situation at home (e.g., cost of buying multiple items, distance walked over time). Create a table of 5 values and draw the graph on graph paper.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathematicsWeek2);
    console.log("grade6-mathematics-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathematicsWeek2);
    console.log("grade6-mathematics-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathematicsWeek2',
        metadata: grade6MathematicsWeek2.metadata,
        days: grade6MathematicsWeek2
    });
    console.log("grade6-mathematics-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathematicsWeek2 = grade6MathematicsWeek2;
console.log("grade6-mathematics-week2.js loaded and registered successfully");