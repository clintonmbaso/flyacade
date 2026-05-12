// Grade 5 Mathematics - Term 3 Week 10 Data
const grade5MathematicsWeek10 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 10,
        title: "Data Handling & Geometry Mastery",
        description: "Collecting, organizing, visualizing, and interpreting data about solid shapes"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "The Big Survey - Collecting Data",
        lessonContent: `
            <p>Welcome to our data handling week! Today we'll become data detectives as we survey the world around us.</p>
            <p><strong>Key Question:</strong> What solid shapes can we find in our school playground?</p>
            <p><strong>Introduction:</strong> Data is information we collect to answer questions. Today we'll conduct "The Big Survey" to discover what 3D shapes exist in our playground.</p>
            <p><strong>Types of Solid Shapes to Look For:</strong></p>
            <ol>
                <li><strong>Cube:</strong> 6 square faces (e.g., dice, some play blocks)</li>
                <li><strong>Cuboid (Rectangular Prism):</strong> 6 rectangular faces (e.g., benches, bricks, lunchboxes)</li>
                <li><strong>Sphere:</strong> Perfectly round (e.g., balls, marbles)</li>
                <li><strong>Cylinder:</strong> Two circular faces (e.g., water bottles, poles, bins)</li>
                <li><strong>Cone:</strong> One circular face, one vertex (e.g., party hats, traffic cones)</li>
                <li><strong>Pyramid:</strong> Square base with triangular faces (e.g., some play structures, roofs)</li>
            </ol>
            <p><strong>Survey Steps:</strong></p>
            <ul>
                <li>Work in pairs or small groups</li>
                <li>Walk around the playground safely</li>
                <li>Count how many of each shape you see</li>
                <li>Record your findings in a tally chart</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Sample Tally Chart</div>
                <p>Cube: || (2)<br>
                Cuboid: |||| ||| (8)<br>
                Sphere: |||| (4)<br>
                Cylinder: |||| || (7)<br>
                Cone: | (1)<br>
                Pyramid: (0)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Tip</div>
                <p>Sometimes shapes are part of larger objects! A slide might have cylindrical poles, cuboid steps, and a curved surface that's part of a cylinder.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Teamwork Matters</div>
                <p>One person can spot shapes while another records. Take turns so everyone gets to be the detective!</p>
            </div>
        `,
        taskInstructions: "Conduct a playground survey and record your data in a frequency table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Walk around the playground and count each solid shape you find:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Shape</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Tally</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cube</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cuboid (Rectangular Prism)</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Sphere</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cylinder</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cone</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Pyramid</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Observation Notes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which shape was easiest to find? Which was hardest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one interesting solid shape you found and name it:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Data Collection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Share your group's totals with the class. Record the class totals below:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Look for 5 solid shapes in your home (kitchen, living room, bedroom). List each object and its shape.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Organizing Data - Stem-and-Leaf Plots",
        lessonContent: `
            <p>Today we'll organize our playground survey data using a special tool called a Stem-and-Leaf Plot!</p>
            <p><strong>Key Question:</strong> How can we organize our shape data so it's easy to read and understand?</p>
            <p><strong>What is a Stem-and-Leaf Plot?</strong></p>
            <ul>
                <li>A way to organize numbers while keeping all the original data</li>
                <li>The "stem" shows the first digit(s) (tens place)</li>
                <li>The "leaf" shows the last digit (ones place)</li>
                <li>It helps us see patterns, clusters, and the range of data</li>
            </ul>
            <p><strong>How to Create a Stem-and-Leaf Plot:</strong></p>
            <ol>
                <li>Order your numbers from smallest to largest</li>
                <li>Decide on the stem (tens digit) and leaf (ones digit)</li>
                <li>Write stems in a vertical column</li>
                <li>Write leaves next to their matching stem</li>
                <li>Add a key explaining what the stem and leaf mean</li>
            </ol>
            <p><strong>Example:</strong> Data: 12, 15, 18, 22, 25, 28, 31</p>
            <div style="background: #f5f5f5; padding: 15px; font-family: monospace;">
                Stem | Leaf<br>
                1 | 2 5 8<br>
                2 | 2 5 8<br>
                3 | 1<br>
                Key: 1 | 2 = 12
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Shape Data Example</div>
                <p>If your class found cylinders in these counts per group: 8, 12, 7, 9, 11<br>
                Stem | Leaf<br>
                0 | 7 8 9<br>
                1 | 1 2<br>
                Key: 0 | 7 = 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Why Use Stem-and-Leaf?</div>
                <p>Unlike a bar graph, a stem-and-leaf plot shows EVERY number in your data set. You can find the middle number (median) and see which numbers appear most often (mode)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Finding Order</div>
                <p>Always write your leaves in order from smallest to largest. This makes it easy to find the smallest and largest values in your data.</p>
            </div>
        `,
        taskInstructions: "Convert your class survey data into a Stem-and-Leaf Plot.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Create a Stem-and-Leaf Plot</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the class totals from yesterday, create a stem-and-leaf plot for each shape:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Cubes:</strong> _________________________________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;"><strong>Cuboids:</strong> _________________________________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;"><strong>Spheres:</strong> _________________________________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px;"><strong>Cylinders:</strong> _________________________________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read the Plot</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using your stem-and-leaf plots, answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What was the smallest number of cubes found by any group? _________</div>
                        <div>b) What was the largest number of cylinders found? _________</div>
                        <div>c) Which shape had the most variation (biggest range)? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Make Your Own Plot</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a stem-and-leaf plot for these numbers: 23, 17, 31, 19, 25, 22, 18, 34, 27, 29
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;">Key: _______ = _______</div>
                </div>
            </div>
        `,
        homework: "Ask 10 family members or neighbors their age. Create a stem-and-leaf plot of the data.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Visualization - Creating a Pie Chart",
        lessonContent: `
            <p>Today we'll transform our shape data into a beautiful Pie Chart!</p>
            <p><strong>Key Question:</strong> How can we show our shape data as parts of a whole?</p>
            <p><strong>What is a Pie Chart?</strong></p>
            <ul>
                <li>A circular graph divided into slices</li>
                <li>Each slice represents a category (like a shape type)</li>
                <li>The bigger the slice, the more of that category</li>
                <li>The whole circle = 100% of the data</li>
            </ul>
            <p><strong>How to Create a Pie Chart (3 Steps):</strong></p>
            <ol>
                <li><strong>Find the total:</strong> Add up all the numbers from your survey</li>
                <li><strong>Calculate fractions:</strong> For each shape, write fraction = (shape count) / (total)</li>
                <li><strong>Draw slices:</strong> Use a protractor if possible, or estimate the slice sizes</li>
            </ol>
            <p><strong>Quick Method Without Protractor:</strong></p>
            <ul>
                <li>Half circle = 50%</li>
                <li>Quarter circle = 25%</li>
                <li>Small slice = about 10%</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Pie Chart Example</div>
                <p>If total shapes = 20:<br>
                Cubes: 4 → 4/20 = 1/5 (small slice)<br>
                Spheres: 10 → 10/20 = 1/2 (half the circle!)<br>
                Cylinders: 6 → 6/20 = 3/10 (about 1/3 of circle)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> Percentages Help</div>
                <p>To find the percentage: (Shape count ÷ Total) × 100<br>
                Example: 8 spheres out of 20 total = 8 ÷ 20 × 100 = 40% of the circle</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paintbrush"></i> Color Coding</div>
                <p>Use different colors for each shape type. Add a legend so everyone knows what each color means!</p>
            </div>
        `,
        taskInstructions: "Create a pie chart showing the distribution of shapes found in the playground.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate the Totals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the class survey data, complete this table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Shape</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Count</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Fraction</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Percentage</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cube</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cuboid</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Sphere</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cylinder</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cone</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr style="background-color: #e8f4f8;"><td style="padding: 8px; border: 1px solid #ddd;"><strong>TOTAL</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>_________</strong></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>100%</strong></td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Pie Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using the percentages above, create a pie chart showing the distribution of shapes:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2; display: flex; align-items: center; justify-content: center;">
                        <p style="color: #999;">[Draw your pie chart here - include a legend]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Legend</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a color key for your pie chart:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a pie chart showing how you spend your time in one day (sleep, school, play, meals, etc.).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Data Storytelling - Interpreting Results",
        lessonContent: `
            <p>Today we'll become data storytellers! We'll find interesting facts hidden in our charts.</p>
            <p><strong>Key Question:</strong> What story does our data tell about shapes in the playground?</p>
            <p><strong>What Can We Learn from Data?</strong></p>
            <ul>
                <li><strong>Most common (Mode):</strong> Which shape appears most often?</li>
                <li><strong>Least common:</strong> Which shape is hardest to find?</li>
                <li><strong>Percentages:</strong> What fraction of shapes are one type?</li>
                <li><strong>Comparisons:</strong> Are there twice as many cylinders as cones?</li>
                <li><strong>Surprises:</strong> What unexpected things did we discover?</li>
            </ul>
            <p><strong>How to Write a Data Story:</strong></p>
            <ol>
                <li>State your fact clearly (e.g., "Cuboids were the most common shape")</li>
                <li>Include numbers to support your fact (e.g., "...with 15 found")</li>
                <li>Explain what this might mean (e.g., "This makes sense because playground equipment like benches and steps are often box-shaped")</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Fact Example #1</div>
                <p>"Spheres made up 40% of all shapes in our playground. That's because we found 12 balls, 8 marbles, and 2 round stepping stones!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Fact Example #2</div>
                <p>"We found zero pyramids in our playground. This might be because pyramid shapes are rare in play equipment and building design."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Fact Example #3</div>
                <p>"Cylinders were the second most common shape with 25% of the total. Every flagpole, water bottle, and round trash can contributed to this number."</p>
            </div>
        `,
        taskInstructions: "Write 3 data facts discovered from your charts and explain what they mean.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Analyze Your Data</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at your tally chart, stem-and-leaf plots, and pie chart. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What is the MODE (most common shape)? _________</div>
                        <div>• What is the LEAST common shape? _________</div>
                        <div>• What percentage of shapes were cylinders? _________ %</div>
                        <div>• What shape appeared exactly 0 times? _________</div>
                        <div>• What was the total number of shapes found? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write 3 Data Facts</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write three interesting facts you discovered from your data. Each fact must include a number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Fact #1:</strong></p>
                        <div class="answer-space" style="height: 60px;"></div>
                        <p><strong>Fact #2:</strong></p>
                        <div class="answer-space" style="height: 60px;"></div>
                        <p><strong>Fact #3:</strong></p>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Share Your Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short paragraph summarizing what your data tells us about shapes in the playground:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What surprised you most about your findings?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Comparing Predictions</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Before the survey, what shape did you think would be most common? Was your prediction correct?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short report (5-6 sentences) explaining what you learned about shapes in your environment. Share one fact with a family member.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry & Data",
        subtopic: "Final Mastery Review",
        lessonContent: `
            <p>Today is our Final Mastery Review! We'll test our knowledge of nets, area formulas, and data interpretation.</p>
            <p><strong>Topics to Review:</strong></p>
            <ol>
                <li><strong>Nets of Prisms:</strong> What 2D shapes fold into 3D prisms?</li>
                <li><strong>Area Formulas:</strong> How to find the area of squares, rectangles, and triangles</li>
                <li><strong>Data Interpretation:</strong> Reading charts, finding the mode, median, and range</li>
            </ol>
            <p><strong>Quick Review - Nets of Prisms:</strong></p>
            <ul>
                <li><strong>Cube net:</strong> 6 squares connected in a cross shape</li>
                <li><strong>Cuboid net:</strong> 3 pairs of rectangles (different sizes)</li>
                <li><strong>Triangular prism net:</strong> 2 triangles + 3 rectangles</li>
            </ul>
            <p><strong>Quick Review - Area Formulas:</strong></p>
            <ul>
                <li><strong>Square:</strong> Area = side × side</li>
                <li><strong>Rectangle:</strong> Area = length × width</li>
                <li><strong>Triangle:</strong> Area = (base × height) ÷ 2</li>
            </ul>
            <p><strong>Quick Review - Data Terms:</strong></p>
            <ul>
                <li><strong>Mode:</strong> The value that appears most often</li>
                <li><strong>Median:</strong> The middle value when numbers are in order</li>
                <li><strong>Range:</strong> Largest - smallest</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Net Example</div>
                <p>A cube has 6 faces, so any valid cube net must have 6 squares. If a net has 5 squares, it cannot fold into a cube!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Area Example</div>
                <p>Triangle with base = 8 cm and height = 5 cm:<br>
                Area = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Data Example</div>
                <p>Data: 5, 7, 7, 9, 12<br>
                Mode = 7 (appears twice)<br>
                Median = 7 (middle number)<br>
                Range = 12 - 5 = 7</p>
            </div>
        `,
        taskInstructions: "Complete the mastery review quiz covering prisms, area formulas, and data interpretation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Nets of Prisms (5 marks)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Which of these nets will fold into a cube? Circle yes or no:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6 squares in a row → Yes / No</div>
                        <div>b) A cross shape of 6 squares → Yes / No</div>
                        <div>c) 5 squares (missing one face) → Yes / No</div>
                        <div>d) 4 squares in a square + 2 attached → Yes / No</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> How many faces does a triangular prism have? _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Area Formulas (6 marks)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate each area:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Square with side = 6 cm: Area = _________ cm²</div>
                        <div>b) Rectangle with length = 10 m, width = 4 m: Area = _________ m²</div>
                        <div>c) Triangle with base = 12 mm, height = 5 mm: Area = _________ mm²</div>
                        <div>d) Rectangle with area = 24 cm², width = 4 cm: Length = _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Data Interpretation (6 marks)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use this data set: 4, 8, 6, 4, 10, 7, 9, 4, 5
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Order the numbers from smallest to largest: _________</div>
                        <div>b) What is the mode? _________</div>
                        <div>c) What is the median? _________</div>
                        <div>d) What is the range? _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A pie chart shows 40% cylinders, 35% cuboids, 25% spheres. If there are 20 total shapes, how many are spheres?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create a Net</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a net for a rectangular prism (cuboid) that is 4 cm long, 3 cm wide, and 2 cm high. Label each face with its dimensions:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Self-Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Which topic was easiest for you this week? Which was hardest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What's one thing you want to practice more?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Complete any unfinished review problems. Prepare one question about shapes or data to ask in next week's class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathematicsWeek10);
    console.log("grade5-mathematics-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathematicsWeek10);
    console.log("grade5-mathematics-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathematicsWeek10',
        metadata: grade5MathematicsWeek10.metadata,
        days: grade5MathematicsWeek10
    });
    console.log("grade5-mathematics-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathematicsWeek10 = grade5MathematicsWeek10;
console.log("grade5-mathematics-week10.js loaded and registered successfully");