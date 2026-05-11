// Grade 6 Mathematics - Term 3 Week 10 Data
const grade6MathWeek10 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 10,
        title: "Data Analysis & Final Project",
        description: "Interpreting data sets, measures of central tendency, analyzing trends, statistics mastery, and comprehensive final review"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Data Analysis",
        subtopic: "Interpreting Data Sets - Mean, Median, Mode",
        lessonContent: `
            <p>Welcome to our week on data analysis! Today we'll learn how to choose the best measure of central tendency for different data sets.</p>
            <p><strong>Key Question:</strong> Which measure (Mean, Mode, or Median) best describes a specific set of data?</p>
            <p><strong>Review of Measures of Central Tendency:</strong></p>
            <ul>
                <li><strong>Mean (Average):</strong> Add all values, then divide by the number of values. Best when data has no extreme outliers.</li>
                <li><strong>Median (Middle):</strong> Arrange values in order, find the middle number. Best when data has outliers.</li>
                <li><strong>Mode (Most Frequent):</strong> The value that appears most often. Best for categorical or repeated data.</li>
            </ul>
            <p><strong>How to Choose:</strong></p>
            <ol>
                <li>If data has extreme outliers → Use MEDIAN</li>
                <li>If data has repeated common values → Use MODE</li>
                <li>If data is balanced with no outliers → Use MEAN</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 1: Test Scores</div>
                <p>Scores: 85, 87, 88, 90, 92 (No outliers)<br>
                <strong>Best measure: MEAN = 88.4</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Example 2: House Prices</div>
                <p>Prices: $100k, $110k, $120k, $500k (Outlier!)<br>
                <strong>Best measure: MEDIAN = $115k</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> Example 3: Shirt Sizes</div>
                <p>Sizes: M, M, M, L, L, XL (Most common is M)<br>
                <strong>Best measure: MODE = M</strong></p>
            </div>
        `,
        taskInstructions: "Analyze data sets and decide which measure of central tendency best describes each set.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose the Best Measure</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each data set, circle the best measure (Mean, Median, or Mode) and explain why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Ages of students in a class: 10, 10, 11, 11, 11, 12, 12</div>
                        <div>Best measure: _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b)</strong> Salaries: $30k, $32k, $35k, $38k, $200k (CEO)</div>
                        <div>Best measure: _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>c)</strong> Daily temperatures (°C): 22, 23, 24, 24, 25, 26</div>
                        <div>Best measure: _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate and Compare</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the mean, median, and mode for this data set: 4, 7, 8, 8, 9, 10, 12
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Mean: _________</div>
                        <div>Median: _________</div>
                        <div>Mode: _________</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which measure best describes this data? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A store manager wants to know which shoe size to order most of. Should they use mean, median, or mode? Explain.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a set of 10 numbers at home (ages of family members, prices of items, etc.). Calculate the mean, median, and mode. Which measure best describes your data?",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Data Analysis",
        subtopic: "Organizing Class Data - Shoe Sizes Investigation",
        lessonContent: `
            <p>Today we'll collect real data from our class and find all three measures of central tendency!</p>
            <p><strong>Key Question:</strong> What is the most common shoe size in our class?</p>
            <p><strong>Steps for Collecting and Analyzing Data:</strong></p>
            <ol>
                <li><strong>Collect Data:</strong> Ask each student for their shoe size</li>
                <li><strong>Organize Data:</strong> Create a frequency table or tally chart</li>
                <li><strong>Find the Mode:</strong> Which size appears most often?</li>
                <li><strong>Find the Median:</strong> Arrange sizes in order, find the middle</li>
                <li><strong>Find the Mean:</strong> Add all sizes, divide by number of students</li>
            </ol>
            <p><strong>Frequency Table Example:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Shoe Size</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Tally</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">5</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">||||</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                 </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">6</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">|||</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">3</td>
                 </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Class Data Example</div>
                <p>Shoe sizes: 5, 5, 6, 6, 6, 7, 7, 8<br>
                Mode = 6 (appears 3 times)<br>
                Median = 6 (middle of ordered list)<br>
                Mean = (5+5+6+6+6+7+7+8) ÷ 8 = 50 ÷ 8 = 6.25</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Store Inventory</div>
                <p>A shoe store uses mode to know which sizes to stock most of. Median helps them understand the middle range of sizes customers wear.</p>
            </div>
        `,
        taskInstructions: "Collect shoe size data from classmates, create a frequency table, and calculate all three measures of central tendency.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Data Collection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Collect shoe sizes from 10-15 classmates. Record them here:
                    <div class="answer-space" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a frequency table (tally chart) of the shoe sizes:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Calculate Measures</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Based on your collected data:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Mode (most common shoe size): _________</div>
                        <div>Median (middle size when ordered): _________</div>
                        <div>Mean (average size): _________</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If a shoe store wanted to stock shoes for your class, which measure would be most useful? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask 5 family members their shoe sizes. Create a frequency table and find the mode, median, and mean.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Data Analysis",
        subtopic: "Analyzing Trends - Using Data to Predict",
        lessonContent: `
            <p>Today we'll learn how to use data to predict future outcomes and make informed decisions!</p>
            <p><strong>Key Question:</strong> How can data help us predict what will happen in the future?</p>
            <p><strong>Using Data for Predictions:</strong></p>
            <ul>
                <li>Data shows us patterns and trends</li>
                <li>We can use these patterns to make educated guesses about the future</li>
                <li>Businesses, schools, and governments use data to plan ahead</li>
            </ul>
            <p><strong>Real-World Examples:</strong></p>
            <ol>
                <li><strong>Shoe Store:</strong> "Most students wear size 5, so we need more of those"</li>
                <li><strong>Cafeteria:</strong> "Last week, 70% of students chose pizza on Friday"</li>
                <li><strong>Weather:</strong> "Based on past data, it usually rains in April"</li>
            </ol>
            <p><strong>Making Predictions:</strong></p>
            <ul>
                <li>If 8 out of 10 students prefer chocolate ice cream → predict 80% will choose chocolate</li>
                <li>If shoe sizes increase by 0.5 each year → predict next year's sizes</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Trend Analysis</div>
                <p>Monthly ice cream sales: Jan(50), Feb(55), Mar(65), Apr(80). The trend is increasing by about 10 each month. Predict May: ≈90 ice creams!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> Inventory Planning</div>
                <p>A store sold: 20 small, 45 medium, 30 large shirts. They should order mostly medium shirts next time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bus"></i> Transportation</div>
                <p>If 60 students take Bus A and 30 take Bus B, the school might order a bigger bus for Route A.</p>
            </div>
        `,
        taskInstructions: "Analyze given data sets and make predictions based on trends.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: What Would You Predict?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A school surveyed students' favorite lunch options:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Pizza: 45 students</div>
                        <div>• Burger: 30 students</div>
                        <div>• Salad: 15 students</div>
                        <div>• Pasta: 10 students</div>
                    </div>
                    <div>If the school is ordering lunch for 200 students, how many pizzas should they order? Show your work.</div>
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Prediction Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A shoe store recorded sales:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Size 4: 8 pairs &nbsp;&nbsp; Size 5: 25 pairs &nbsp;&nbsp; Size 6: 22 pairs &nbsp;&nbsp; Size 7: 10 pairs</div>
                    </div>
                    <div>For their next order of 200 shoes, how many size 5 should they order? Round to nearest whole number.</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Monthly visitors to a museum: Jan(120), Feb(135), Mar(150), Apr(165). What is the pattern? Predict May visitors.
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Prediction</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Think of something you could predict using data at your school (lunch choices, bus routes, club popularity). Describe what data you would collect and what you would predict.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Record what you eat for dinner each night this week. After 3 nights, predict what you might eat on night 5. Check if your prediction was correct!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Data Analysis",
        subtopic: "Statistics Mastery - Complex Word Problems",
        lessonContent: `
            <p>Today we'll combine everything we've learned to solve complex word problems involving multiple data sets!</p>
            <p><strong>Key Question:</strong> How can we solve problems that combine multiple data sets?</p>
            <p><strong>Skills We'll Use:</strong></p>
            <ul>
                <li>Finding mean, median, mode from different data sets</li>
                <li>Comparing two or more groups of data</li>
                <li>Using data to answer real-world questions</li>
                <li>Calculating combined means</li>
            </ul>
            <p><strong>Combined Mean Formula:</strong></p>
            <p>When combining two groups: <strong>Combined Mean = (Sum of Group 1 + Sum of Group 2) ÷ (Total Number in Both Groups)</strong></p>
            <p><strong>Steps for Complex Problems:</strong></p>
            <ol>
                <li>Read the problem carefully and identify what's being asked</li>
                <li>Organize the given data</li>
                <li>Decide which measure(s) to calculate</li>
                <li>Show your work step by step</li>
                <li>Check if your answer makes sense</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Combined Mean Example</div>
                <p>Class A has 20 students with mean height 140cm. Class B has 15 students with mean height 145cm.<br>
                Combined mean = (20×140 + 15×145) ÷ (20+15) = (2800 + 2175) ÷ 35 = 4975 ÷ 35 = 142.14cm</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Comparing Data Sets</div>
                <p>Test scores: Class 1 (mean=82, median=85), Class 2 (mean=78, median=80). Class 1 performed better overall.</p>
            </div>
        `,
        taskInstructions: "Solve complex word problems combining multiple data sets and statistical measures.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Combined Mean Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Class 6A has 25 students with an average test score of 84. Class 6B has 20 students with an average of 78. What is the combined average for both classes?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Group 1 (8 people) has mean age 12. Group 2 (7 people) has mean age 14. What is the mean age of all 15 people combined?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Multiple Data Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Two basketball teams recorded points per game:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Team A: 45, 52, 48, 50, 55</div>
                        <div>Team B: 38, 42, 40, 39, 41</div>
                    </div>
                    <div>Find the mean for each team. Which team performed better? By how many points?</div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Morning temperatures: 18°, 20°, 19°, 21°, 22°<br>
                    Afternoon temperatures: 26°, 28°, 27°, 29°, 30°<br>
                    Find the median for each. Is the afternoon median higher or lower than the morning median?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A teacher has two classes. Class 1 has 22 students with a mean score of 86. Class 2 has 18 students. The combined mean of both classes is 84. What is the mean score of Class 2?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own complex statistics problem using data from two different groups (sports teams, classes, families). Solve it and show your work.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Final Review",
        subtopic: "Comprehensive Quiz - Decimals, Surface Area, Speed, and Statistics",
        lessonContent: `
            <p>Today we'll review everything we've learned this term with a comprehensive quiz!</p>
            <p><strong>Topics Covered This Term:</strong></p>
            <ul>
                <li><strong>Decimals:</strong> Adding, subtracting, multiplying, dividing, and comparing decimals</li>
                <li><strong>Surface Area:</strong> Calculating surface area of cubes, rectangular prisms, and other 3D shapes</li>
                <li><strong>Speed:</strong> Using the formula Speed = Distance ÷ Time, and solving word problems</li>
                <li><strong>Statistics:</strong> Mean, median, mode, data collection, and prediction</li>
            </ul>
            <p><strong>Key Formulas to Remember:</strong></p>
            <ul>
                <li>Surface Area of a Cube = 6 × (side × side) = 6s²</li>
                <li>Surface Area of Rectangular Prism = 2(lw + lh + wh)</li>
                <li>Speed = Distance ÷ Time &nbsp;&nbsp; Distance = Speed × Time &nbsp;&nbsp; Time = Distance ÷ Speed</li>
                <li>Mean = Sum of all values ÷ Number of values</li>
            </ul>
            <p><strong>Quiz Instructions:</strong> Complete all sections. Show your work for full credit.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Final Review Tips</div>
                <p>• Read each question carefully<br>• Show all your steps<br>• Check your answers<br>• Use scrap paper for calculations<br>• Don't rush - you have plenty of time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Speed Reminder</div>
                <p>A car travels 240 km in 3 hours. Speed = 240 ÷ 3 = 80 km/h</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Surface Area Reminder</div>
                <p>A cube with side length 4 cm: SA = 6 × 4 × 4 = 96 cm²</p>
            </div>
        `,
        taskInstructions: "Complete the comprehensive quiz covering all topics from Term 3.",
        taskContent: `
            <div class="content-box">
                <p><strong>Section 1: Decimals (2 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 45.67 + 23.89 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 87.42 - 34.58 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 6.5 × 4.2 = _________
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 15.75 ÷ 2.5 = _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 2: Surface Area (4 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find the surface area of a cube with side length 7 cm.
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A rectangular prism has length 8 cm, width 5 cm, and height 3 cm. Find its surface area.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 3: Speed (4 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> A train travels 300 km in 5 hours. What is its speed?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A cyclist rides at 15 km/h for 2.5 hours. How far does he travel?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> How long will it take to drive 420 km at 70 km/h?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 4: Statistics (4 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> Find the mean, median, and mode of: 5, 8, 8, 10, 12, 15, 18
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> A survey of favorite colors showed: Blue(12), Red(8), Green(5), Yellow(3). Which measure would be most useful for ordering t-shirts? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 5: Challenge Word Problem (8 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">12</span> Two classes took a math test. Class A has 24 students with a mean of 82. Class B has 16 students with a mean of 88. A new student joins Class A with a score of 94. What is the new combined mean of Class A? Then find the combined mean of both classes together.
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section 6: Reflection (Bonus - 2 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">13</span> What topic from this term was most challenging for you? What topic was most interesting?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Review any questions you missed on the quiz. Practice 3 similar problems for each topic you found challenging.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek10);
    console.log("grade6-math-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek10);
    console.log("grade6-math-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek10',
        metadata: grade6MathWeek10.metadata,
        days: grade6MathWeek10
    });
    console.log("grade6-math-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek10 = grade6MathWeek10;
console.log("grade6-math-week10.js loaded and registered successfully");