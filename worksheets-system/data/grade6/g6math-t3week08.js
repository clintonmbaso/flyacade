// Grade 6 Mathematics - Term 3 Week 8 Data
const grade6MathsWeek8 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 8,
        title: "Data Collection & Visuals",
        description: "Exploring tally marks, pictographs, and range in data sets"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "The Art of the Tally",
        lessonContent: `
            <p>Welcome to our data collection week! Today we'll learn how to record information quickly and efficiently using tally marks.</p>
            <p><strong>Key Question:</strong> How can we count things quickly as they happen without losing track?</p>
            <p><strong>Introduction:</strong> Tally marks are a quick way to record data as it happens. Instead of writing numbers, we use lines. Every fifth line helps us count faster!</p>
            <p><strong>How Tally Marks Work:</strong></p>
            <ul>
                <li>Each item counts as one vertical line: |</li>
                <li>When you reach four lines, the fifth line goes diagonally across them: ||||</li>
                <li>Each group of five (||||) is easy to count in fives</li>
                <li>This makes counting large amounts much faster!</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>3 = |||</li>
                <li>7 = |||| || (5 + 2)</li>
                <li>12 = |||| |||| || (5 + 5 + 2)</li>
                <li>24 = |||| |||| |||| |||| |||| (20) + |||| (4)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Live Counting</div>
                <p>Imagine counting cars passing your school. Every time a car passes, you add one tally. At the end, you can quickly count by grouping in fives!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-history"></i> Historical Use</div>
                <p>Tally marks have been used for thousands of years! Ancient cave paintings show tally marks used to count animals and track time.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Classroom Management</div>
                <p>Teachers often use tally marks to track participation. Each time a student answers a question, they add a tally next to their name!</p>
            </div>
        `,
        taskInstructions: "Conduct a traffic survey and convert tallies into a frequency table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Live Traffic Survey</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Observe the school gate (or designated area) for 5 minutes. Use tally marks to count each vehicle type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Cars:</strong> <span class="tally-area" style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div><strong>Bikes/Motorbikes:</strong> <span class="tally-area" style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div><strong>Pedestrians:</strong> <span class="tally-area" style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div><strong>Trucks/Vans:</strong> <span class="tally-area" style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Convert Tally to Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert your tallies into a frequency table:
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">Vehicle Type</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Tally</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Frequency (Number)</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Cars</td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Bikes/Motorbikes</td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Pedestrians</td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Trucks/Vans</td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd;"></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practice Converting</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Convert these tally marks to numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) |||| |||| ||| = ______</div>
                        <div>b) |||| |||| |||| || = ______</div>
                        <div>c) |||| ||| = ______</div>
                        <div>d) |||| |||| |||| |||| |||| || = ______</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Convert these numbers to tally marks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8 = ______</div>
                        <div>b) 15 = ______</div>
                        <div>c) 23 = ______</div>
                        <div>d) 37 = ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Count how many windows, doors, and light fixtures are in your home. Record each using tally marks, then convert to a frequency table.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Pictograph Precision",
        lessonContent: `
            <p>Today we'll learn how to create pictographs - a fun way to show data using pictures!</p>
            <p><strong>Key Question:</strong> How can pictures help us understand data?</p>
            <p><strong>Introduction:</strong> A pictograph uses pictures or symbols to represent numbers. The KEY is the most important part because it tells us what each picture is worth!</p>
            <p><strong>Parts of a Pictograph:</strong></p>
            <ul>
                <li><strong>Title:</strong> Tells us what the pictograph is about</li>
                <li><strong>Categories:</strong> The different items being compared</li>
                <li><strong>Pictures/Symbols:</strong> Visual representation of the data</li>
                <li><strong>Key:</strong> Shows how many items each picture represents</li>
            </ul>
            <p><strong>How to Create a Pictograph:</strong></p>
            <ol>
                <li>Look at your data and decide on a key (what each picture will equal)</li>
                <li>Divide each number by the key value to find how many pictures you need</li>
                <li>Draw the correct number of pictures for each category</li>
                <li>Always show your key so others can read your graph!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> The Bakery Example</div>
                <p>Apple Pies: 20 &nbsp; Cherry Pies: 15 &nbsp; Pumpkin Pies: 5<br>
                Key: 1 🥧 = 5 pies<br>
                Apple: 🥧🥧🥧🥧 (4 pictures = 20)<br>
                Cherry: 🥧🥧🥧 (3 pictures = 15)<br>
                Pumpkin: 🥧 (1 picture = 5)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Choosing a Key</div>
                <p>If your largest number is 40, a key of 5 or 10 works well. If your largest number is 12, a key of 1 or 2 might be better. Choose a key that makes your graph easy to read!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Picture Consistency</div>
                <p>All pictures in a pictograph should be exactly the same size and shape. This ensures the data is not misleading!</p>
            </div>
        `,
        taskInstructions: "Create a pictograph using given data with a clear key and proportional symbols.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bakery Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a pictograph for this bakery data:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Data:</strong><br>
                        Apple Pies: 20<br>
                        Cherry Pies: 15<br>
                        Pumpkin Pies: 5<br>
                        Key: 1 pie picture = 5 actual pies
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: School Attendance Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a pictograph for this attendance data. Choose your own key:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Monday:</strong> 30 students<br>
                        <strong>Tuesday:</strong> 28 students<br>
                        <strong>Wednesday:</strong> 32 students<br>
                        <strong>Thursday:</strong> 29 students<br>
                        <strong>Friday:</strong> 31 students
                    </div>
                    <div>Your chosen key: 1 👩‍🎓 = ______ students</div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Key Calculation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If 1 🍎 = 10 apples, how many pictures do you need for:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 50 apples = ______ pictures</div>
                        <div>b) 35 apples = ______ pictures</div>
                        <div>c) 80 apples = ______ pictures</div>
                        <div>d) 25 apples = ______ pictures</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If you drew 7 ⭐ pictures and each ⭐ = 8 points, how many total points?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Collect data on how many glasses of water your family drinks in one day. Create a pictograph showing this data with an appropriate key.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Interpreting Pictographs",
        lessonContent: `
            <p>Today we'll learn how to read and understand pictographs, including those with half-pictures!</p>
            <p><strong>Key Question:</strong> What does a "half-picture" mean in a pictograph?</p>
            <p><strong>Introduction:</strong> Sometimes numbers don't divide evenly by the key. That's when we use fractions of pictures - like half a picture!</p>
            <p><strong>Understanding Half-Pictures:</strong></p>
            <ul>
                <li>Half a picture represents half the value of the key</li>
                <li>If 1 ⭐ = 10 points, then ½ ⭐ = 5 points</li>
                <li>If 1 🍎 = 4 apples, then ½ 🍎 = 2 apples</li>
                <li>If 1 🚗 = 20 cars, then ½ 🚗 = 10 cars</li>
            </ul>
            <p><strong>How to Read Pictographs:</strong></p>
            <ol>
                <li>First, look at the KEY to know what each picture is worth</li>
                <li>Count the full pictures in each row</li>
                <li>Look for any half-pictures (or quarter-pictures)</li>
                <li>Multiply: (number of full pictures × key value) + (partial picture value)</li>
                <li>Compare values using "how many more" or "how many fewer"</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star-half-alt"></i> Half-Picture Example</div>
                <p>If 1 ★ = 10 points, then:<br>
                ★★★ = 30 points<br>
                ★★½ = 20 + 5 = 25 points<br>
                ★½ = 10 + 5 = 15 points</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Comparison Questions</div>
                <p>"How many more points did Team A get than Team B?"<br>
                Step 1: Find Team A's total<br>
                Step 2: Find Team B's total<br>
                Step 3: Subtract the smaller from the larger</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Quarter Pictures</div>
                <p>Sometimes you might see quarter pictures too! 1 🍕 = 16 slices, so ¼ 🍕 = 4 slices.</p>
            </div>
        `,
        taskInstructions: "Extract information and solve problems based on existing pictographs with half-pictures.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reading a Pictograph with Half-Pictures</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use this pictograph to answer the questions below:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Class Points Competition</strong><br>
                        Key: 1 ⭐ = 10 points<br><br>
                        Team A: ⭐⭐⭐⭐½<br>
                        Team B: ⭐⭐⭐<br>
                        Team C: ⭐⭐½<br>
                        Team D: ⭐⭐⭐⭐
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How many points did Team A score? ______</div>
                        <div>b) How many points did Team C score? ______</div>
                        <div>c) Which team scored the most points? ______</div>
                        <div>d) How many more points did Team D get than Team B? ______</div>
                        <div>e) What is the total points of all teams combined? ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fruit Sale Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use this pictograph to answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Fruit Sold This Week</strong><br>
                        Key: 1 🍎 = 20 fruits<br><br>
                        Monday: 🍎🍎½<br>
                        Tuesday: 🍎🍎🍎<br>
                        Wednesday: 🍎½<br>
                        Thursday: 🍎🍎🍎🍎<br>
                        Friday: 🍎🍎
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How many fruits were sold on Monday? ______</div>
                        <div>b) How many fruits were sold on Wednesday? ______</div>
                        <div>c) What was the total fruit sold for the week? ______</div>
                        <div>d) Which day sold the most fruits? ______</div>
                        <div>e) How many more fruits were sold on Thursday than Tuesday? ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a pictograph with at least one half-picture. Write 3 questions for a classmate to answer:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a pictograph in a newspaper, magazine, or online (or draw one from memory). Write 5 questions about it and answer them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Introduction to the Range",
        lessonContent: `
            <p>Today we'll learn about the RANGE - a simple way to understand the spread of data!</p>
            <p><strong>Key Question:</strong> How spread out is our data from the smallest to the largest?</p>
            <p><strong>Introduction:</strong> The range tells us the difference between the highest value and the lowest value in a data set. It shows us how "spread out" the numbers are.</p>
            <p><strong>The Range Formula:</strong></p>
            <div style="background: #e8f4f8; padding: 15px; text-align: center; margin: 15px 0;">
                <strong>Range = Highest Value - Lowest Value</strong>
            </div>
            <p><strong>Steps to Find the Range:</strong></p>
            <ol>
                <li>Put the numbers in order from smallest to largest</li>
                <li>Identify the smallest number (minimum)</li>
                <li>Identify the largest number (maximum)</li>
                <li>Subtract: Largest - Smallest = Range</li>
            </ol>
            <p><strong>What the Range Tells Us:</strong></p>
            <ul>
                <li>A small range means the data is very similar (clustered together)</li>
                <li>A large range means the data is very spread out</li>
                <li>The range helps us understand the variability in our data</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Family Ages Example</div>
                <p>Ages: 2, 8, 12, 40, 42<br>
                Smallest = 2<br>
                Largest = 42<br>
                Range = 42 - 2 = 40 years</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Temperature Ranges</div>
                <p>City A: 15°C, 18°C, 20°C, 22°C, 25°C (Range = 10°)<br>
                City B: 5°C, 15°C, 20°C, 30°C, 40°C (Range = 35°)<br>
                City B has more variable weather!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Test Scores</div>
                <p>Scores: 65, 70, 72, 68, 75<br>
                Range = 75 - 65 = 10 points<br>
                This tells us all scores are within 10 points of each other.</p>
            </div>
        `,
        taskInstructions: "Calculate the range of different data sets and interpret what the range means.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Family Ages Range</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Record the ages of everyone in a family (real or imaginary) and calculate the range:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Family member ages: ______, ______, ______, ______, ______</div>
                        <div>Smallest age: ______</div>
                        <div>Largest age: ______</div>
                        <div><strong>Range = ______ - ______ = ______ years</strong></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate the Range</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the range for each data set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5, 12, 8, 15, 10 → Range = ______</div>
                        <div>b) 100, 45, 78, 92, 60 → Range = ______</div>
                        <div>c) 2, 2, 2, 5, 2, 3 → Range = ______</div>
                        <div>d) 150, 200, 175, 225, 180 → Range = ______</div>
                        <div>e) 7, 14, 21, 28, 35, 42 → Range = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-World Applications</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A basketball team scored these points in 5 games: 82, 76, 91, 85, 79
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What is the range? ______</div>
                        <div>b) What does this range tell you about the team's performance?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A class recorded their heights in cm: 145, 152, 148, 155, 150, 147
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What is the range? ______</div>
                        <div>b) If a new student who is 140 cm joins, how does the range change?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Data Set</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a data set with 6 numbers that has a range of 25:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Record the high temperature for 5 different days (or use a weather app). Calculate the range of temperatures. Write a sentence explaining what the range tells you.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Range in Different Contexts",
        lessonContent: `
            <p>Today we'll use the range to compare the consistency of different data sets!</p>
            <p><strong>Key Question:</strong> How can the range help us determine which student is more consistent?</p>
            <p><strong>Introduction:</strong> When comparing two sets of data, the range helps us see which one has more variation. A smaller range means the data is more consistent and predictable.</p>
            <p><strong>Comparing Student Test Scores:</strong></p>
            <div style="background: #e8f4f8; padding: 15px; margin: 15px 0;">
                <p><strong>Student A:</strong> 70, 72, 75<br>
                <strong>Student B:</strong> 50, 75, 95</p>
                <p>Both students have a total of 217 points (average about 72), but look at their ranges!</p>
            </div>
            <p><strong>Why Range Matters for Consistency:</strong></p>
            <ul>
                <li><strong>Small Range = Consistent Performance</strong> - Scores are close together</li>
                <li><strong>Large Range = Inconsistent Performance</strong> - Scores vary widely</li>
                <li>Teachers and coaches use range to identify students/players who need extra help or challenge</li>
            </ul>
            <p><strong>Other Uses of Range:</strong></p>
            <ul>
                <li>Weather: Daily temperature range tells us about climate</li>
                <li>Business: Sales range shows which products sell consistently</li>
                <li>Medicine: Range of patient ages in a study</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Student Consistency</div>
                <p>Student A: Range = 75 - 70 = 5 (Very consistent!)<br>
                Student B: Range = 95 - 50 = 45 (Very inconsistent!)<br>
                Even with similar totals, Student A is more reliable.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-basketball-ball"></i> Sports Performance</div>
                <p>Points per game: Player X (10, 12, 11, 9, 13) Range = 4<br>
                Player Y (5, 20, 8, 15, 12) Range = 15<br>
                Player X is more consistent; Player Y has higher highs but lower lows.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Visualizing Range</div>
                <p>On a number line, the range is the distance from the smallest to the largest number. A short distance = small range = consistent data!</p>
            </div>
        `,
        taskInstructions: "Use range to compare the consistency of two different data sets and make recommendations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comparing Student Performance</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the range for each student's test scores:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Maria:</strong> 85, 88, 82, 86, 89<br>
                        <strong>John:</strong> 65, 95, 70, 100, 75<br>
                        <strong>Lisa:</strong> 78, 80, 79, 81, 82
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Maria's range: ______</div>
                        <div>John's range: ______</div>
                        <div>Lisa's range: ______</div>
                        <div>Which student is most consistent? ______ Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Business Application - Sales Consistency</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Two shops recorded their daily sales (in $) for one week:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Shop A:</strong> 200, 210, 195, 205, 215, 190, 205<br>
                        <strong>Shop B:</strong> 150, 300, 180, 250, 200, 275, 160
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Calculate the range for Shop A: ______</div>
                        <div>b) Calculate the range for Shop B: ______</div>
                        <div>c) Which shop has more consistent daily sales?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>d) If you were a bank giving a loan, which shop would you trust more? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Weather Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare the temperature ranges of two cities:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>City X (July temperatures °C):</strong> 22, 24, 23, 25, 24, 23, 26<br>
                        <strong>City Y (July temperatures °C):</strong> 15, 28, 20, 32, 18, 30, 22
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) City X range: ______</div>
                        <div>b) City Y range: ______</div>
                        <div>c) Which city has more predictable weather in July?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create and Compare</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create two data sets of 5 numbers each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Data Set A</strong> (small range / very consistent): ______, ______, ______, ______, ______</div>
                        <div><strong>Data Set B</strong> (large range / very spread out): ______, ______, ______, ______, ______</div>
                        <div>Calculate each range: Range A = ______, Range B = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to look at both the average (mean) and the range when analyzing data?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find two sets of data from real life (sports scores, test results, temperatures, etc.). Calculate the range for each and write a paragraph comparing their consistency.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathsWeek8);
    console.log("grade6-maths-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathsWeek8);
    console.log("grade6-maths-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathsWeek8',
        metadata: grade6MathsWeek8.metadata,
        days: grade6MathsWeek8
    });
    console.log("grade6-maths-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathsWeek8 = grade6MathsWeek8;
console.log("grade6-maths-week8.js loaded and registered successfully");