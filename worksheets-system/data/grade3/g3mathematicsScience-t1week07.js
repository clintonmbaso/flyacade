// Grade 3 Mathematics & Science - Term 1 Week 7 Data
const grade3MathsScienceWeek7 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 1,
        week: 7,
        title: "Data Analysis",
        description: "Collecting, recording, presenting, and interpreting data using tallying and frequency tables"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Collecting and Recording Data by Tallying",
        lessonContent: `
            <p>Welcome to our week on data analysis! Today we'll learn how to collect information and record it using tally marks.</p>
            <p><strong>Key Question:</strong> How can we count and record information quickly and accurately?</p>
            <p><strong>Introduction:</strong> Data is information we collect to answer questions. Tally marks are a fast way to count and record data as we collect it.</p>
            <p><strong>What are Tally Marks?</strong></p>
            <ul>
                <li>Tally marks are lines we draw to count things</li>
                <li>Each item gets one line: |</li>
                <li>When we reach 5, we draw a diagonal line across the first four: ||||</li>
                <li>Then we start a new group of 5</li>
            </ul>
            <p><strong>How to Make Tally Marks:</strong></p>
            <ol>
                <li>1 = |</li>
                <li>2 = ||</li>
                <li>3 = |||</li>
                <li>4 = ||||</li>
                <li>5 = ||||</li>
                <li>6 = |||| |</li>
                <li>7 = |||| ||</li>
                <li>8 = |||| |||</li>
                <li>9 = |||| ||||</li>
                <li>10 = |||| ||||</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Class Example</div>
                <p>If 8 students have brown eyes, we record: |||| ||| (one group of 5 and 3 more = 8)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Real-World Connection</div>
                <p>Scientists use tally marks to count animals in the wild. A zookeeper might tally how many elephants they see each day!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Grocery Store Math</div>
                <p>When counting how many apples are in a basket, tally marks help you keep track without losing your place.</p>
            </div>
        `,
        taskInstructions: "Practice making tally marks and collect data from your classmates.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tally Mark Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write tally marks for each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4 = _________</div>
                        <div>b. 7 = _________</div>
                        <div>c. 9 = _________</div>
                        <div>d. 12 = _________</div>
                        <div>e. 15 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Count the Tally Marks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the number for each group of tally marks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. |||| ||| = _________</div>
                        <div>b. |||| |||| = _________</div>
                        <div>c. |||| |||| || = _________</div>
                        <div>d. |||| |||| |||| = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Survey Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Ask 10 classmates: "What is your favorite pet?" Use tally marks to record answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Dog: _________</div>
                        <div>Cat: _________</div>
                        <div>Fish: _________</div>
                        <div>Bird: _________</div>
                        <div>Hamster: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why are tally marks helpful when collecting information?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Tally how many cars of each color you see on your way home (red, blue, white, black, other). Bring your tally sheet to class tomorrow.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Presenting Data in a Frequency Table",
        lessonContent: `
            <p>Today we'll learn how to organize our tally marks into a frequency table!</p>
            <p><strong>Key Question:</strong> How can we organize data so it's easy to read and understand?</p>
            <p><strong>What is a Frequency Table?</strong></p>
            <ul>
                <li>A frequency table is a chart that organizes data into categories</li>
                <li><strong>Frequency</strong> means how many times something happens</li>
                <li>The table has columns for: Category, Tally Marks, and Frequency (Number)</li>
            </ul>
            <p><strong>Parts of a Frequency Table:</strong></p>
            <ol>
                <li><strong>Title:</strong> Tells what the data is about</li>
                <li><strong>Categories:</strong> The different groups we are counting</li>
                <li><strong>Tally Column:</strong> Where we record tally marks</li>
                <li><strong>Frequency Column:</strong> The total number for each category</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Frequency Table Example</div>
                <div style="background: white; padding: 10px; margin-top: 5px;">
                    <p><strong>Favorite Fruit Survey</strong></p>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 5px; border: 1px solid #ddd;">Fruit</th>
                            <th style="padding: 5px; border: 1px solid #ddd;">Tally</th>
                            <th style="padding: 5px; border: 1px solid #ddd;">Frequency</th>
                        </tr>
                        <tr><td style="padding: 5px; border: 1px solid #ddd;">Apple</td><td style="padding: 5px; border: 1px solid #ddd;">||||</td><td style="padding: 5px; border: 1px solid #ddd;">5</td></tr>
                        <tr><td style="padding: 5px; border: 1px solid #ddd;">Banana</td><td style="padding: 5px; border: 1px solid #ddd;">|||</td><td style="padding: 5px; border: 1px solid #ddd;">3</td></tr>
                        <tr><td style="padding: 5px; border: 1px solid #ddd;">Orange</td><td style="padding: 5px; border: 1px solid #ddd;">||||</td><td style="padding: 5px; border: 1px solid #ddd;">6</td></tr>
                    </table>
                </div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Why Use a Table?</div>
                <p>A frequency table helps you see the totals right away. You don't have to count the tally marks over and over!</p>
            </div>
        `,
        taskInstructions: "Convert tally marks into a frequency table with numerals.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use the tally marks to complete the frequency column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Favorite Color</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tally</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Frequency (Number)</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Red</td><td style="padding: 8px; border: 1px solid #ddd;">||||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Blue</td><td style="padding: 8px; border: 1px solid #ddd;">|||| |||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Green</td><td style="padding: 8px; border: 1px solid #ddd;">|||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Yellow</td><td style="padding: 8px; border: 1px solid #ddd;">|||| ||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use your tally marks from yesterday's pet survey. Create a frequency table:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Tally to Frequency</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the frequency for each tally group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. |||| |||| || = _________</div>
                        <div>b. |||| ||| = _________</div>
                        <div>c. |||| |||| |||| = _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask 5 family members their favorite season (spring, summer, fall, winter). Create a frequency table showing your results.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Interpreting Data in a Frequency Table",
        lessonContent: `
            <p>Today we'll learn how to read and understand information from a frequency table!</p>
            <p><strong>Key Question:</strong> What can we learn by looking at a frequency table?</p>
            <p><strong>Interpreting Data Means:</strong></p>
            <ul>
                <li>Looking at the numbers in the table</li>
                <li>Answering questions about the data</li>
                <li>Comparing different categories</li>
                <li>Finding the most popular and least popular choices</li>
            </ul>
            <p><strong>Questions We Can Answer:</strong></p>
            <ol>
                <li>Which category has the highest frequency? (Most popular)</li>
                <li>Which category has the lowest frequency? (Least popular)</li>
                <li>How many more people chose A than B? (Subtraction)</li>
                <li>How many people were surveyed in total? (Add all frequencies)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Class Example</div>
                <div style="background: white; padding: 10px; margin-top: 5px;">
                    <p><strong>Favorite Ice Cream Flavors</strong></p>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 5px; border: 1px solid #ddd;">Flavor</th>
                            <th style="padding: 5px; border: 1px solid #ddd;">Frequency</th>
                        </tr>
                        <tr><td style="padding: 5px; border: 1px solid #ddd;">Chocolate</td><td style="padding: 5px; border: 1px solid #ddd;">8</td></tr>
                        <tr><td style="padding: 5px; border: 1px solid #ddd;">Vanilla</td><td style="padding: 5px; border: 1px solid #ddd;">5</td></tr>
                        <tr><td style="padding: 5px; border: 1px solid #ddd;">Strawberry</td><td style="padding: 5px; border: 1px solid #ddd;">3</td></tr>
                    </table>
                    <p style="margin-top: 10px;"><strong>Questions:</strong> Most popular? Chocolate (8). Total surveyed? 8+5+3=16 people.</p>
                </div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real-World Use</div>
                <p>Teachers use frequency tables to see which questions many students got wrong. This helps them know what to review!</p>
            </div>
        `,
        taskInstructions: "Answer questions by reading and interpreting frequency tables.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read the Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use this table to answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Favorite Animal</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Dog</td><td style="padding: 8px; border: 1px solid #ddd;">12</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cat</td><td style="padding: 8px; border: 1px solid #ddd;">7</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Rabbit</td><td style="padding: 8px; border: 1px solid #ddd;">4</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Hamster</td><td style="padding: 8px; border: 1px solid #ddd;">2</td></tr>
                         </table>
                        <div style="margin-top: 15px;">
                            <div>a. Which animal is the most favorite? _________</div>
                            <div>b. Which animal is the least favorite? _________</div>
                            <div>c. How many more people chose Dog than Cat? _________</div>
                            <div>d. How many people were surveyed in total? _________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Answer Questions from Your Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at the frequency table you made yesterday. Answer:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete and Interpret</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the frequency table, then answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Sport</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tally</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Soccer</td><td style="padding: 8px; border: 1px solid #ddd;">|||| ||||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Basketball</td><td style="padding: 8px; border: 1px solid #ddd;">|||| |</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Tennis</td><td style="padding: 8px; border: 1px solid #ddd;">|||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                         </table>
                        <div style="margin-top: 15px;">
                            <div>a. How many chose Soccer? _________</div>
                            <div>b. How many more chose Basketball than Tennis? _________</div>
                            <div>c. How many people voted in total? _________</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look at the frequency table you made with your family. Write 3 questions someone could answer using your table, then answer them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Project: Class Survey and Frequency Table",
        lessonContent: `
            <p>Today is project day! We'll put everything together by conducting our own class survey and creating a frequency table.</p>
            <p><strong>Key Question:</strong> How do we plan, conduct, and present a complete data investigation?</p>
            <p><strong>Project Steps:</strong></p>
            <ol>
                <li><strong>Choose a Question:</strong> Decide what you want to find out about your class</li>
                <li><strong>Collect Data:</strong> Ask each classmate and record answers with tally marks</li>
                <li><strong>Organize Data:</strong> Create a frequency table with the results</li>
                <li><strong>Interpret Data:</strong> Answer questions about what you found</li>
                <li><strong>Present Findings:</strong> Share your table with the class</li>
            </ol>
            <p><strong>Survey Question Ideas:</strong></p>
            <ul>
                <li>What is your favorite fruit? (apple, banana, orange, grapes)</li>
                <li>What is your favorite subject? (math, science, reading, art)</li>
                <li>How do you get to school? (walk, car, bus, bike)</li>
                <li>What is your favorite pet? (dog, cat, fish, bird)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Sample Project</div>
                <p><strong>Question:</strong> What is our class's favorite fruit?</p>
                <p><strong>Data Collection:</strong> Ask 20 classmates</p>
                <p><strong>Results:</strong> Apple: 7, Banana: 5, Orange: 4, Grapes: 4</p>
                <p><strong>Conclusion:</strong> Apple is the most popular fruit in our class!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Teamwork Tip</div>
                <p>When collecting data, be sure to ask everyone politely and only count each person's answer once.</p>
            </div>
        `,
        taskInstructions: "Conduct a class survey, collect data with tally marks, and create a frequency table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plan Your Survey</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write your survey question and possible answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My Survey Question: _________________________________</div>
                        <div>Answer Choices: ___________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Collect Data with Tally Marks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Ask your classmates and record their answers here:
                    <div class="tally-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Organize your data into a frequency table:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Interpret Your Data</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Answer these questions about your data:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Which answer was the most popular? _________</div>
                        <div>b. Which answer was the least popular? _________</div>
                        <div>c. How many people did you survey in total? _________</div>
                        <div>d. What is one interesting thing you learned? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Presentation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Share your frequency table with a partner. Explain what your data shows:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask 5 family members the same survey question you asked in class. Create a frequency table for their answers. Compare with your class results.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Review: Data Analysis Problems",
        lessonContent: `
            <p>Today we'll review everything we learned about data analysis this week!</p>
            <p><strong>Week 7 Review:</strong></p>
            <ol>
                <li><strong>Collecting Data:</strong> Using tally marks to count as we go</li>
                <li><strong>Presenting Data:</strong> Organizing tallies into frequency tables</li>
                <li><strong>Interpreting Data:</strong> Reading tables to answer questions</li>
                <li><strong>Conducting Surveys:</strong> Planning, collecting, and presenting our own data</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Data:</strong> Information collected to answer questions</li>
                <li><strong>Tally Marks:</strong> Lines used to count and record data</li>
                <li><strong>Frequency:</strong> How many times something happens</li>
                <li><strong>Frequency Table:</strong> A chart showing categories, tallies, and frequencies</li>
                <li><strong>Survey:</strong> Asking people questions to collect data</li>
            </ul>
            <p><strong>Remember:</strong></p>
            <ul>
                <li>One group of tally marks = 5 (||||)</li>
                <li>Always give your frequency table a title</li>
                <li>Add all frequencies to find the total surveyed</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Tally Mark Song</div>
                <p>"One, two, three, four, make a line. Number five goes through to shine! Start a new group, that's the way. Tally marks save the day!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quick Check</div>
                <p>Always double-check your tally marks. Count them again to make sure your frequency number is correct!</p>
            </div>
        `,
        taskInstructions: "Complete mixed review problems and reflect on your learning.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tally Mark Review</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write tally marks and frequency for each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 6 = Tally: _________ Frequency: _________</div>
                        <div>b. 13 = Tally: _________ Frequency: _________</div>
                        <div>c. 9 = Tally: _________ Frequency: _________</div>
                        <div>d. 18 = Tally: _________ Frequency: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read and Interpret</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the frequency table to answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Lunch Choice</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Pizza</td><td style="padding: 8px; border: 1px solid #ddd;">10</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Sandwich</td><td style="padding: 8px; border: 1px solid #ddd;">6</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Salad</td><td style="padding: 8px; border: 1px solid #ddd;">4</td></tr>
                         </table>
                        <div style="margin-top: 15px;">
                            <div>a. How many chose Pizza? _________</div>
                            <div>b. How many chose Sandwich? _________</div>
                            <div>c. How many more chose Pizza than Salad? _________</div>
                            <div>d. How many students voted in total? _________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the tally marks and frequency:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Book Type</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tally</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Adventure</td><td style="padding: 8px; border: 1px solid #ddd;">|||| ||||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Mystery</td><td style="padding: 8px; border: 1px solid #ddd;">|||| |||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Comedy</td><td style="padding: 8px; border: 1px solid #ddd;">|||</td><td style="padding: 8px; border: 1px solid #ddd;">______</td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most useful thing you learned about data analysis this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How could you use tally marks and frequency tables outside of school?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing what you learned about data analysis. Include: what tally marks are, an example frequency table, and 3 things you can learn from a frequency table.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek7);
    console.log("grade3-maths-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek7);
    console.log("grade3-maths-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek7',
        metadata: grade3MathsScienceWeek7.metadata,
        days: grade3MathsScienceWeek7
    });
    console.log("grade3-maths-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek7 = grade3MathsScienceWeek7;
console.log("grade3-maths-science-week7.js loaded and registered successfully");