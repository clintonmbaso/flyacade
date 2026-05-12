// Grade 5 Mathematics - Term 3 Week 9 Data
const grade5MathWeek9 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 9,
        title: "Pie Charts",
        description: "Understanding, estimating, creating, and comparing pie charts for data representation"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "The Whole Circle",
        lessonContent: `
            <p>Welcome to our exploration of pie charts! Today we'll learn that a pie chart represents 100% or "The Whole."</p>
            <p><strong>Key Question:</strong> What does a whole circle represent in a pie chart?</p>
            <p><strong>Introduction:</strong> A pie chart is a circular graph divided into slices to show how a whole is divided into different parts. The entire circle represents 100% of the data, or "the whole thing."</p>
            <p><strong>Key Concept - The Whole Circle:</strong></p>
            <ul>
                <li>The full circle = 100% of the data</li>
                <li>The full circle = 360 degrees</li>
                <li>Every slice is a fraction of the whole</li>
                <li>All slices combined = one complete circle</li>
            </ul>
            <p><strong>Why "Pie" Chart?</strong> It looks like a pie that has been cut into slices! Each slice represents a category of data, and bigger slices mean larger amounts.</p>
            <p><strong>Real-World Examples:</strong></p>
            <ul>
                <li>How you spend your 24-hour day (sleep, school, play, eat)</li>
                <li>Class favorite food survey results</li>
                <li>Monthly family budget (housing, food, transport, savings)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Your Day as a Pie</div>
                <p>If you sleep 8 hours, go to school for 6 hours, play for 6 hours, and eat for 4 hours, the whole circle represents your 24-hour day! Each activity gets a slice sized to match its hours.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Fractions of the Whole</div>
                <p>If half the class likes math, that's 50% of the circle - exactly half of the pie! If a quarter likes science, that's 25% - one-quarter of the circle.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> The 100% Rule</div>
                <p>The fractions in a pie chart must always add up to 1 (the whole). The percentages must always add up to 100%. The degrees must always add up to 360°.</p>
            </div>
        `,
        taskInstructions: "Draw and label a whole circle, then divide it into sections representing parts of a whole.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Whole Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a large circle. This circle represents 100% of your data.
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fractions of the Whole</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Divide your circle into these fractions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Shade 1/2 of the circle (50%) - use one color</div>
                        <div>• Shade 1/4 of the circle (25%) - use a different color</div>
                        <div>• Shade 1/4 of the circle (25%) - use a third color</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p>What percentage of the circle is in each color? _________</p>
                        <p>Do all your percentages add up to 100%? _________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Day as a Pie</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Think about your typical school day (24 hours). List activities and estimate hours:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sleep: _____ hours</div>
                        <div>School: _____ hours</div>
                        <div>Homework: _____ hours</div>
                        <div>Play/Free time: _____ hours</div>
                        <div>Eating: _____ hours</div>
                        <div>Other: _____ hours</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p>Do your hours add up to 24? _________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important that the whole circle represents 100%?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a pie chart showing how you spend your Saturday. Use hours (24 hours total) for sleep, play, meals, chores, and screen time.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Dividing the Pie",
        lessonContent: `
            <p>Today we'll practice estimating different sizes of pie slices and understanding what they represent!</p>
            <p><strong>Key Question:</strong> How can you estimate the size of a pie slice just by looking at it?</p>
            <p><strong>Common Slice Sizes:</strong></p>
            <ul>
                <li><strong>50% (Half):</strong> This slice takes up exactly half of the circle</li>
                <li><strong>25% (Quarter):</strong> This slice takes up one-fourth of the circle</li>
                <li><strong>10% (Thin Slice):</strong> A small slice - like a thin piece of pie!</li>
                <li><strong>75% (Three-quarters):</strong> Combine half + quarter</li>
                <li><strong>33% (One-third):</strong> About this size: <span style="display: inline-block; width: 30px; height: 30px; border-radius: 50%; background: conic-gradient(#4A90E2 0deg 120deg, #ccc 120deg 360deg);"></span></li>
            </ul>
            <p><strong>Visual Estimation Tips:</strong></p>
            <ul>
                <li>Half is easy - imagine a line straight across the center</li>
                <li>Quarter is half of a half - imagine two lines crossing at the center (like a plus sign)</li>
                <li>A 10% slice is about as wide as 1/10 of the circle - very narrow!</li>
            </ul>
            <p><strong>Converting Fractions to Percentages and Degrees:</strong></p>
            <ul>
                <li>1/2 = 50% = 180 degrees</li>
                <li>1/4 = 25% = 90 degrees</li>
                <li>1/3 ≈ 33.3% = 120 degrees</li>
                <li>1/10 = 10% = 36 degrees</li>
                <li>1/5 = 20% = 72 degrees</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Comparison</div>
                <p>A pizza cut into 8 equal slices means each slice is 12.5% (100% ÷ 8 = 12.5%). Two slices would be 25% (one-quarter of the whole pizza!).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Eye Training</div>
                <p>Practice looking at circles and estimating: "Is this slice closer to 25% or 50%?" "Is this small slice about 10% or 5%?"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Quick Check</div>
                <p>If you see three slices in a pie chart and one looks like half, one looks like a quarter, and the last looks like a quarter, they add up to 100%!</p>
            </div>
        `,
        taskInstructions: "Estimate slice sizes and match percentages to visual representations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Estimate the Slices</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each pie slice described, write the approximate percentage:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A slice that takes up half the circle: _________ %</div>
                        <div>b) A slice that is one-quarter of the circle: _________ %</div>
                        <div>c) A thin slice that is one-tenth of the circle: _________ %</div>
                        <div>d) A slice that is three-quarters of the circle: _________ %</div>
                        <div>e) A slice that is one-third of the circle: _________ %</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Slice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw circles and shade slices of these sizes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A 50% slice (half)</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 15px;">• A 25% slice (quarter)</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 15px;">• A 10% slice (thin slice)</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Match the Slice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each percentage to its correct description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>50% → _________ (half / quarter / thin slice)</div>
                        <div>25% → _________ (half / quarter / thin slice)</div>
                        <div>10% → _________ (half / quarter / thin slice)</div>
                        <div>75% → _________ (half + quarter / three quarters / whole)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Estimation Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at the circle below. Estimate the percentage of each labeled slice:
                    <div style="display: flex; align-items: center; gap: 20px; margin-top: 10px;">
                        <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#4A90E2 0deg 100deg, #E24A4A 100deg 180deg, #4AE24A 180deg 300deg, #E2E24A 300deg 360deg);"></div>
                        <div>
                            <div>A (blue): _________ %</div>
                            <div>B (red): _________ %</div>
                            <div>C (green): _________ %</div>
                            <div>D (yellow): _________ %</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find or draw 5 different pie slices (from magazines, newspapers, or draw yourself). Label each with your estimated percentage.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "From Table to Pie",
        lessonContent: `
            <p>Today we'll turn real survey data into a pie chart! We'll survey our class about favorite colors and create our own pie chart.</p>
            <p><strong>Key Question:</strong> How do you turn numbers from a table into a pie chart?</p>
            <p><strong>Steps to Create a Pie Chart:</strong></p>
            <ol>
                <li><strong>Collect Data:</strong> Conduct a survey and record results in a frequency table</li>
                <li><strong>Find the Total:</strong> Add up all responses to find the whole (100%)</li>
                <li><strong>Calculate Fractions:</strong> Divide each category count by the total to get a fraction</li>
                <li><strong>Convert to Percentages:</strong> Multiply each fraction by 100%</li>
                <li><strong>Convert to Degrees (Optional):</strong> Multiply each fraction by 360°</li>
                <li><strong>Draw the Slices:</strong> Use a compass and protractor (or estimate) to draw each slice</li>
                <li><strong>Label and Color:</strong> Add labels, colors, and a title</li>
            </ol>
            <p><strong>Example - Favorite Color Survey:</strong></p>
            <ul>
                <li>Blue: 10 votes out of 20 total → 10/20 = 1/2 = 50% (half the circle)</li>
                <li>Red: 5 votes out of 20 total → 5/20 = 1/4 = 25% (quarter)</li>
                <li>Green: 3 votes out of 20 total → 3/20 = 15% (thin slice)</li>
                <li>Yellow: 2 votes out of 20 total → 2/20 = 10% (thin slice)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Step-by-Step</div>
                <p>If 8 students like pizza, 4 like burgers, and 4 like pasta (total 16 students): Pizza = 8/16 = 1/2 (50%), Burgers = 4/16 = 1/4 (25%), Pasta = 4/16 = 1/4 (25%). Half the pie is pizza!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Finding Percentages</div>
                <p>To change a fraction to a percentage: Divide the numerator by the denominator, then multiply by 100. Example: 3/15 = 3 ÷ 15 = 0.2 × 100 = 20%.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Using a Protractor</div>
                <p>A full circle is 360°. To find the angle for a slice: Multiply 360° by the fraction. Example: 1/4 of 360° = 90°.</p>
            </div>
        `,
        taskInstructions: "Conduct a survey, record data in a table, then create a pie chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Class Survey - Favorite Colors</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Survey your classmates or family members. Ask: "What is your favorite color?"
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Color</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Tally</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Number of Votes</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Fraction</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Percentage</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Blue</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Red</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Green</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Yellow</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Purple</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr style="background-color: #f0f0f0;"><td style="padding: 8px; border: 1px solid #ddd;"><strong>TOTAL</strong></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>______</strong></td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>100%</strong></td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Pie Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using your survey results, draw a pie chart showing favorite colors:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Add a title and label each slice with the color and percentage:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Check Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Do all your percentages add up to 100%? _________
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which color was the most popular? _________
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Survey 10 family members or neighbors about their favorite ice cream flavor. Create a frequency table and draw a pie chart showing the results.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Data Handling / ICT",
        subtopic: "Digital Pie Charts (ICT)",
        lessonContent: `
            <p>Today we'll use technology to create digital pie charts! We'll enter survey data into a spreadsheet and let the computer generate a beautiful chart for us.</p>
            <p><strong>Key Question:</strong> How can a spreadsheet help us create pie charts quickly and accurately?</p>
            <p><strong>Digital Tools for Pie Charts:</strong></p>
            <ul>
                <li>Microsoft Excel</li>
                <li>Google Sheets (free online!)</li>
                <li>Numbers (on iPad/Mac)</li>
                <li>Online chart makers (Canva, ChartGo)</li>
            </ul>
            <p><strong>Steps to Create a Digital Pie Chart (Google Sheets/Excel):</strong></p>
            <ol>
                <li><strong>Enter Data:</strong> Type categories in column A, numbers in column B</li>
                <li><strong>Select Data:</strong> Highlight both columns of data</li>
                <li><strong>Insert Chart:</strong> Click Insert → Chart</li>
                <li><strong>Choose Pie Chart:</strong> Select "Pie chart" from the chart types</li>
                <li><strong>Customize:</strong> Add title, labels, and change colors</li>
                <li><strong>Share/Save:</strong> Download or share your chart</li>
            </ol>
            <p><strong>Advantages of Digital Pie Charts:</strong></p>
            <ul>
                <li>Instant calculations - no manual math needed!</li>
                <li>Perfect slices - exactly accurate every time</li>
                <li>Easy to update - change numbers and chart updates automatically</li>
                <li>Professional appearance - colors, labels, and formatting</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fab fa-google"></i> Google Sheets in Action</div>
                <p>Type "Favorite Fruit" in A1, "Apples" in A2, "Bananas" in A3, "Oranges" in A4. Type the numbers in B2, B3, B4. Highlight A2:B4, click Insert → Chart → Pie chart!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Real-Time Updates</div>
                <p>If you add more survey responses, just type the new numbers. The pie chart will automatically recalculate and redraw itself - instant updates!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Customization</div>
                <p>Spreadsheets let you change colors, add data labels (percentages), and even make 3D pie charts that pop off the page!</p>
            </div>
        `,
        taskInstructions: "Enter survey data into a spreadsheet and generate a digital pie chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Data Entry Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the survey data from Wednesday (favorite colors), enter it into a spreadsheet (Google Sheets or Excel):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Open a new spreadsheet</div>
                        <div>• In cell A1, type "Favorite Color"</div>
                        <div>• In cell B1, type "Number of Votes"</div>
                        <div>• Enter each color in column A and votes in column B</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p>Write your data entries here (what you typed):</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Generate the Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Follow the steps to create a pie chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Select/highlight your data (A1:B___ )</div>
                        <div>• Click Insert → Chart</div>
                        <div>• Change chart type to "Pie chart"</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p>What did your pie chart look like? Describe it:</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Customization</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Customize your pie chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Add a title (e.g., "Class Favorite Colors")</div>
                        <div>• Turn on data labels to show percentages</div>
                        <div>• Change at least two slice colors</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p>What title did you give your chart? What colors did you choose?</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare Methods</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Compare your hand-drawn pie chart (Wednesday) to your digital pie chart:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "If you have computer access, create a digital pie chart showing how you spend your allowance. If no computer access, create a 'fake' spreadsheet on paper showing the layout.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Comparing Data Forms",
        lessonContent: `
            <p>Today we'll discuss when a pie chart is better than a bar graph - and when it's not!</p>
            <p><strong>Key Question:</strong> When should you use a pie chart instead of a bar graph?</p>
            <p><strong>Pie Charts Are Best When:</strong></p>
            <ul>
                <li>Showing parts of a whole (percentages that add to 100%)</li>
                <li>Comparing a few categories (3-5 slices works best)</li>
                <li>Emphasizing how one category compares to the whole</li>
                <li>Showing proportion (like "half" or "quarter")</li>
            </ul>
            <p><strong>Bar Graphs Are Better When:</strong></p>
            <ul>
                <li>Comparing many categories (more than 5-6)</li>
                <li>Showing changes over time</li>
                <li>Comparing exact values (not just proportions)</li>
                <li>Data doesn't add up to 100% (like temperatures over a week)</li>
            </ul>
            <p><strong>Side-by-Side Comparison:</strong></p>
            <ul>
                <li><strong>Pie Chart Strength:</strong> Instantly shows "about half," "a quarter," "a small slice"</li>
                <li><strong>Bar Graph Strength:</strong> Shows exact numbers and comparisons between bars</li>
                <li><strong>Pie Chart Weakness:</strong> Hard to compare slices that are similar sizes (e.g., 22% vs 24%)</li>
                <li><strong>Bar Graph Weakness:</strong> Doesn't show how parts relate to the whole</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Perfect for Pie</div>
                <p>"What is the most popular lunch choice in our cafeteria?" would work well as a pie chart because you're showing the percentage of students who choose each option out of the whole school.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Better as a Bar</div>
                <p>"How did monthly rainfall change from January to December?" is better as a bar graph or line graph because you're showing changes over time, not parts of a whole.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Easy Rule</div>
                <p>Ask yourself: Does my data add up to 100% of one thing? If yes → pie chart works! If no → use a bar graph!</p>
            </div>
        `,
        taskInstructions: "Compare pie charts and bar graphs, then decide which is better for different situations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Chart Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, write "Pie Chart" or "Bar Graph":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Showing the percentage of students with different eye colors: _________</div>
                        <div>b) Comparing the height of 20 different students: _________</div>
                        <div>c) Showing how a family spends their monthly budget: _________</div>
                        <div>d) Tracking temperature changes each day for a week: _________</div>
                        <div>e) Showing the results of a class vote for class president: _________</div>
                        <div>f) Comparing the population of 10 different cities: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Pros and Cons</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List one advantage and one disadvantage of each chart type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Pie Chart:</strong></div>
                        <div>Advantage: _________________________________</div>
                        <div>Disadvantage: _______________________________</div>
                        <div style="margin-top: 10px;"><strong>Bar Graph:</strong></div>
                        <div>Advantage: _________________________________</div>
                        <div>Disadvantage: _______________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Data Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the two charts below (imaginary). Which would you choose and why?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario:</strong> You want to show that a quarter of your class walks to school, half takes the bus, and a quarter comes by car.</div>
                        <div>Which chart do you choose? ________ Why? _________</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario:</strong> You want to show the number of books read by each student in your class (15 students).</div>
                        <div>Which chart do you choose? ________ Why? _________</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What did you learn this week about pie charts? When will you use them in the future?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find one example of a pie chart and one example of a bar graph (in newspapers, magazines, online, or ads). For each, write one sentence explaining why that chart type was chosen.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek9);
    console.log("grade5-math-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek9);
    console.log("grade5-math-week9.js registered using DataLoader.registerWorksheet()");
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
    console.log("grade5-math-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek9 = grade5MathWeek9;
console.log("grade5-math-week9.js loaded and registered successfully");