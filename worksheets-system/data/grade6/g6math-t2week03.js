// Grade 6 Mathematics - Term 2 Week 3 Data
const grade6MathWeek3 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 3,
        title: "Indirect Proportion",
        description: "Understanding inverse relationships: as one quantity increases, the other decreases proportionally"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Proportion",
        subtopic: "The Relationship of 'Less' - Comparing Direct vs. Indirect Scenarios",
        lessonContent: `
            <p>Welcome to our study of indirect proportion! Today we'll explore situations where one quantity decreases as another increases.</p>
            <p><strong>Key Question:</strong> What happens to the time it takes to complete a job when more people help?</p>
            <p><strong>Introduction:</strong> In direct proportion, when one quantity increases, the other increases too (e.g., more hours worked = more money earned). In <strong>indirect proportion</strong> (also called inverse proportion), when one quantity increases, the other decreases.</p>
            <p><strong>Indirect Proportion Examples:</strong></p>
            <ol>
                <li><strong>Work & Time:</strong> More workers = less time to complete a job</li>
                <li><strong>Speed & Time:</strong> Faster speed = less time for a journey (same distance)</li>
                <li><strong>Sharing:</strong> More people sharing = smaller portion each person gets</li>
            </ol>
            <p><strong>Comparing Direct and Indirect:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 10px; border: 1px solid #ddd;">Direct Proportion</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Indirect Proportion</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">More hours = More pay</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">More workers = Less time</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">More distance = More time (same speed)</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">More speed = Less time (same distance)</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">More items = More cost</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">More people sharing = Less per person</td>
                </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Workers & Time</div>
                <p>If 2 workers take 6 hours to paint a room, what happens with 3 workers? More workers mean each person does less work, so the time decreases. They will take about 4 hours!</p>
                <p><strong>Pattern:</strong> 2 workers × 6 hours = 12 &nbsp;&nbsp; 3 workers × 4 hours = 12 (same product!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Speed & Time</div>
                <p>Driving at 60 km/h takes 2 hours to reach a destination. At 120 km/h (double the speed), the time is halved to 1 hour.</p>
                <p><strong>Pattern:</strong> 60 × 2 = 120 &nbsp;&nbsp; 120 × 1 = 120 (same product!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Sharing</div>
                <p>A pizza shared among 4 people → each gets 2 slices. Shared among 8 people → each gets 1 slice (half as much). More people = smaller portion!</p>
            </div>
        `,
        taskInstructions: "Identify whether each scenario is direct or indirect proportion.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify Direct or Indirect</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, write "Direct" or "Indirect":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The number of taps open and the time to fill a tank: _________</div>
                        <div>b) The number of books bought and the total cost: _________</div>
                        <div>c) The speed of a car and travel time for a fixed distance: _________</div>
                        <div>d) The number of students sharing sweets and each student's share: _________</div>
                        <div>e) The number of hours worked and wages earned: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-Life Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each statement with "more" or "less":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The _____ workers you have, the _____ time a job takes.</div>
                        <div>b) The _____ speed you travel, the _____ time a journey takes.</div>
                        <div>c) The _____ people sharing food, the _____ food each person gets.</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Create one original example of indirect proportion:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Thinking Deeper</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Explain in your own words: What is the difference between direct and indirect proportion?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of indirect proportion in your daily life (e.g., chores with siblings, travel to school, sharing snacks). Write them down.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Proportion",
        subtopic: "Product Consistency - Understanding x × y = Constant",
        lessonContent: `
            <p>Today we'll discover the mathematical rule that makes indirect proportion work!</p>
            <p><strong>Key Question:</strong> What stays the same when one quantity goes up and the other goes down?</p>
            <p><strong>The Golden Rule of Indirect Proportion:</strong></p>
            <div style="background-color: #FFF8E1; padding: 15px; border-radius: 8px; margin: 15px 0; text-align: center;">
                <strong style="font-size: 1.2em;">x × y = k (constant)</strong>
                <p style="margin-top: 5px;">When two quantities are in indirect proportion, their product is always the same number.</p>
            </div>
            <p><strong>How It Works:</strong></p>
            <ul>
                <li>Let x and y be two quantities in indirect proportion</li>
                <li>If x doubles, y will halve (become half)</li>
                <li>If x triples, y will become one-third</li>
                <li>The product x × y never changes</li>
            </ul>
            <p><strong>Step-by-Step Example:</strong></p>
            <p>4 workers complete a fence in 6 days. Find the constant:</p>
            <p>Constant = workers × days = 4 × 6 = <strong>24</strong></p>
            <p>If 8 workers work: 8 × days = 24 → days = 24 ÷ 8 = <strong>3 days</strong></p>
            <p>If 3 workers work: 3 × days = 24 → days = 24 ÷ 3 = <strong>8 days</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Finding the Constant</div>
                <p><strong>Problem:</strong> A car travels at 80 km/h and takes 3 hours. Find the constant (distance) and the time at 120 km/h.</p>
                <p><strong>Solution:</strong> Constant = speed × time = 80 × 3 = 240 km (the distance)</p>
                <p>At 120 km/h: 120 × time = 240 → time = 240 ÷ 120 = <strong>2 hours</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Table Method</div>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><th style="padding: 5px;">Workers (x)</th><td>2</td><td>3</td><td>4</td><td>6</td></tr>
                    <tr><th style="padding: 5px;">Days (y)</th><td>12</td><td>8</td><td>6</td><td>4</td></tr>
                    <tr><th style="padding: 5px;">Product (x×y)</th><td>24</td><td>24</td><td>24</td><td>24</td></tr>
                </table>
                <p>The product is always 24 — the constant of proportionality!</p>
            </div>
        `,
        taskInstructions: "Calculate missing values using the constant product rule.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Constant</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each indirect proportion pair, calculate the constant (k = x × y):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5 workers take 8 days: k = _________</div>
                        <div>b) 60 km/h takes 4 hours: k = _________</div>
                        <div>c) 10 people share $200: k = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In an indirect proportion, x × y = 36. Complete the table:
                    <table style="width: 80%; margin-top: 10px; border-collapse: collapse;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">x</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">2</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">3</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">4</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">6</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">9</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">12</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f0f0f0;"><strong>y</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> 8 students share a bag of rice, each getting 3 kg. How much would each get if 12 students shared it equally?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A bus travels at 50 km/h and takes 6 hours. How long would it take at 75 km/h?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own indirect proportion word problem. Show the constant and solve for a missing value.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Proportion",
        subtopic: "Calculations in Indirect Proportion - Work, Speed, and Time",
        lessonContent: `
            <p>Today we'll apply our knowledge to solve real-world indirect proportion problems!</p>
            <p><strong>Key Question:</strong> How can we calculate unknown values when two quantities are indirectly proportional?</p>
            <p><strong>Three Common Types of Indirect Proportion:</strong></p>
            <ol>
                <li><strong>Work Problems:</strong> Workers × Days = Constant (total work)</li>
                <li><strong>Speed-Time Problems:</strong> Speed × Time = Constant (distance)</li>
                <li><strong>Sharing Problems:</strong> People × Share = Constant (total amount)</li>
            </ol>
            <p><strong>Method for Solving Indirect Proportion Problems:</strong></p>
            <div style="background-color: #E8F5E9; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>Step 1:</strong> Identify the two quantities (x and y)<br>
                <strong>Step 2:</strong> Find the constant (k = x × y) using the given values<br>
                <strong>Step 3:</strong> Set up the equation (new x × new y = k)<br>
                <strong>Step 4:</strong> Solve for the unknown
            </div>
            <p><strong>Worked Example 1 (Work):</strong></p>
            <p>4 workers can build a wall in 9 days. How long will 6 workers take?</p>
            <p>k = 4 × 9 = 36 &nbsp;&nbsp; 6 × days = 36 → days = 36 ÷ 6 = <strong>6 days</strong></p>
            
            <p><strong>Worked Example 2 (Speed):</strong></p>
            <p>A cyclist travels at 12 km/h and takes 5 hours. How fast must they go to take 3 hours?</p>
            <p>k = 12 × 5 = 60 &nbsp;&nbsp; speed × 3 = 60 → speed = 60 ÷ 3 = <strong>20 km/h</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat"></i> Construction Problem</div>
                <p><strong>Problem:</strong> 10 workers complete a building in 24 days. After 6 days, 5 workers leave. How many total days will it take?</p>
                <p><strong>Solution:</strong> Work remaining after 6 days: 10 workers × 18 days = 180 (remaining work)</p>
                <p>With 5 workers: 5 × days = 180 → days = 36 days remaining → Total = 6 + 36 = <strong>42 days</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Journey Problem</div>
                <p><strong>Problem:</strong> A train travels 240 km. At 80 km/h it takes 3 hours. At 60 km/h, what is the time?</p>
                <p><strong>Solution:</strong> k = 80 × 3 = 240 → 60 × t = 240 → t = <strong>4 hours</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> Production Problem</div>
                <p><strong>Problem:</strong> 6 machines produce 1000 shirts in 8 hours. How many hours for 4 machines?</p>
                <p><strong>Solution:</strong> k = 6 × 8 = 48 → 4 × h = 48 → h = <strong>12 hours</strong></p>
            </div>
        `,
        taskInstructions: "Solve word problems involving indirect proportion.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Work Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 8 gardeners can plant flowers in a park in 5 days. How many days would 10 gardeners take?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 12 bricklayers finish a house in 15 days. How many bricklayers are needed to finish in 10 days?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Speed & Time Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A car travels from Town A to Town B at 90 km/h, taking 4 hours. What speed is needed to make the trip in 3 hours?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Walking at 5 km/h, it takes 2 hours to get to school. How long would it take cycling at 20 km/h?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sharing & Distribution Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> 15 children share a bag of sweets, each getting 8 sweets. How many children would get 5 sweets each from the same bag?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A piece of land is shared equally among 6 families, each receiving 500 m². How much would each family get if there were 10 families?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Multi-Step Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> 20 workers build a road in 30 days. After 10 days, 5 workers are sick. How many total days will the road take to build?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create 3 word problems using indirect proportion (one work, one speed-time, one sharing). Solve each and show your working.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Proportion",
        subtopic: "Graphing Indirect Proportion - The Hyperbola",
        lessonContent: `
            <p>Today we'll learn how to graph indirect proportion and see the special curve it creates!</p>
            <p><strong>Key Question:</strong> What does the graph of an indirect proportion look like?</p>
            <p><strong>The Shape of Indirect Proportion:</strong></p>
            <ul>
                <li>When you graph an indirect proportion, you get a <strong>hyperbola</strong> (a curved line)</li>
                <li>The curve starts high on the left and drops steeply as x increases</li>
                <li>The curve approaches the axes but never touches them</li>
                <li>As x gets larger, y gets smaller (and vice versa)</li>
            </ul>
            <p><strong>Example: Graphing Workers vs. Days (Constant = 24)</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr><th style="padding: 5px;">Workers (x)</th><td>1</td><td>2</td><td>3</td><td>4</td><td>6</td><td>8</td><td>12</td><td>24</td></tr>
                <tr><th style="padding: 5px;">Days (y)</th><td>24</td><td>12</td><td>8</td><td>6</td><td>4</td><td>3</td><td>2</td><td>1</td></tr>
            </table>
            <p><strong>Observations from the Graph:</strong></p>
            <ul>
                <li>When workers double (2→4), days halve (12→6)</li>
                <li>When workers triple (2→6), days become one-third (12→4)</li>
                <li>The product x × y always equals 24</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Reading the Hyperbola</div>
                <p>On a speed-time graph (constant distance = 120 km):</p>
                <p>At 30 km/h → 4 hours &nbsp;&nbsp; At 40 km/h → 3 hours &nbsp;&nbsp; At 60 km/h → 2 hours</p>
                <p>The curve shows that as speed increases, time decreases along a smooth curve.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Direct vs. Indirect Graphs</div>
                <p><strong>Direct proportion:</strong> Straight line through origin (y = kx)</p>
                <p><strong>Indirect proportion:</strong> Curved line (hyperbola) that never touches axes (xy = k)</p>
            </div>
        `,
        taskInstructions: "Plot points and draw the indirect proportion graph (hyperbola).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Table of Values</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the constant k = 48 (x × y = 48), complete the table:
                    <table style="width: 80%; margin-top: 10px; border-collapse: collapse;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">x</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">1</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">2</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">3</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">4</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">6</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">8</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">12</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">16</th>
                         </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f0f0f0;"><strong>y</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                         </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Plot the Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Plot the points from Part A on the grid below and draw the curve (hyperbola):
                    <div class="graph-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2; position: relative;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 100%;">
                            <svg width="100%" height="100%" viewBox="0 0 400 250" style="background: white;">
                                <!-- Axes -->
                                <line x1="40" y1="220" x2="380" y2="220" stroke="black" stroke-width="2"/>
                                <line x1="40" y1="20" x2="40" y2="220" stroke="black" stroke-width="2"/>
                                <!-- Labels -->
                                <text x="370" y="215" font-size="12">x →</text>
                                <text x="30" y="15" font-size="12">↑ y</text>
                            </svg>
                        </div>
                        <p style="text-align: center; color: #999; padding-top: 100px;">[Plot your points and draw the curve here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Graph Interpretation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> From your graph, what is the value of y when x = 5?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Describe what happens to y as x gets larger and larger:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why does the curve never touch the x-axis or y-axis?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Choose a constant (k = 36 or k = 60). Create a table of 6 values and draw the hyperbola graph on graph paper.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Proportion",
        subtopic: "Mastery Review - Differentiating Direct and Indirect Proportion",
        lessonContent: `
            <p>Today we'll review everything we've learned and master the difference between direct and indirect proportion!</p>
            <p><strong>Week 3 Review:</strong></p>
            <ol>
                <li><strong>Indirect Proportion:</strong> When one quantity increases, the other decreases (x × y = k)</li>
                <li><strong>Direct Proportion:</strong> When one quantity increases, the other increases (x ÷ y = k or x/y = k)</li>
                <li><strong>Key Differences:</strong>
                    <ul>
                        <li>Direct: Ratio is constant (x : y stays same)</li>
                        <li>Indirect: Product is constant (x × y stays same)</li>
                    </ul>
                </li>
            </ol>
            <p><strong>How to Identify Which Proportion:</strong></p>
            <div style="background-color: #E3F2FD; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>Ask yourself:</strong> "What happens to y when x doubles?"<br>
                → If y doubles → <strong>Direct</strong><br>
                → If y halves → <strong>Indirect</strong>
            </div>
            <p><strong>Comparison Table:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 10px; border: 1px solid #ddd;">Feature</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Direct Proportion</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Indirect Proportion</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Relationship</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">As x ↑, y ↑</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">As x ↑, y ↓</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Rule</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">x/y = k (constant ratio)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">x × y = k (constant product)</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Graph</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Straight line through origin</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Curve (hyperbola)</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Example</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">More hours = More pay</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">More workers = Less time</td>
                </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Quick Check</div>
                <p><strong>Direct or Indirect?</strong></p>
                <p>"The amount of fuel used and distance traveled" → Direct (more distance = more fuel)</p>
                <p>"Number of water taps and time to fill a tank" → Indirect (more taps = less time)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real-Life Mixed Scenarios</div>
                <p>When buying oranges: more oranges = more cost (DIRECT)<br>
                When sharing oranges: more people = fewer oranges each (INDIRECT)<br>
                Same item, different relationship!</p>
            </div>
        `,
        taskInstructions: "Mastery review: differentiate between direct and indirect proportion in word problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Proportion Type</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, write "Direct" or "Indirect":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The number of pens bought and total cost: _________</div>
                        <div>b) The number of workers and time to complete a job: _________</div>
                        <div>c) The speed of a car and fuel efficiency: _________</div>
                        <div>d) The age of a tree and its height: _________</div>
                        <div>e) The number of taps and water flow rate (fixed tank): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Solve Both Types</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> <strong>Direct Proportion:</strong> 5 apples cost $15. How much do 8 apples cost?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>Indirect Proportion:</strong> 5 workers build a wall in 12 days. How long will 8 workers take?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A farmer has enough feed for 20 cows for 30 days. How long will it last for 25 cows?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A car travels 240 km using 20 litres of fuel. How much fuel is needed for 360 km?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 8 pumps can empty a tank in 5 hours. How many pumps are needed to empty it in 2 hours?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Create one direct proportion problem and one indirect proportion problem:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> What is one clue that tells you a problem involves indirect proportion?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Complete the mastery worksheet. Write 3 real-life examples of direct proportion and 3 of indirect proportion. Explain each.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek3);
    console.log("grade6-math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek3);
    console.log("grade6-math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek3',
        metadata: grade6MathWeek3.metadata,
        days: grade6MathWeek3
    });
    console.log("grade6-math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek3 = grade6MathWeek3;
console.log("grade6-math-week3.js loaded and registered successfully");