// Grade 4 Mathematics - Term 3 Week 10 Data
const grade4MathematicsWeek10 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 10,
        title: "ICT & Data Mastery: The Digital Age",
        description: "Moving from pencil-and-paper tallies to digital spreadsheets, graphing, and data analysis"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "ICT & Data",
        subtopic: "Digital Data (Spreadsheet Basics)",
        lessonContent: `
            <p>Welcome to the world of digital spreadsheets! Today we'll discover how computers help us organize information in powerful ways.</p>
            <p><strong>Key Question:</strong> How can a computer help us organize data better than pencil and paper?</p>
            <p><strong>Introduction:</strong> A spreadsheet is like a "super-powered" grid. It stores information in columns and rows, just like a table, but with amazing digital powers!</p>
            <p><strong>Spreadsheet Vocabulary:</strong></p>
            <ul>
                <li><strong>Column:</strong> Vertical boxes labeled with letters (A, B, C, D...)</li>
                <li><strong>Row:</strong> Horizontal boxes labeled with numbers (1, 2, 3, 4...)</li>
                <li><strong>Cell:</strong> The small rectangle where a column and row meet (e.g., Cell B2 means column B, row 2)</li>
                <li><strong>Data Entry:</strong> Typing information into those cells</li>
            </ul>
            <p><strong>Why Spreadsheets Matter:</strong></p>
            <ul>
                <li>They can do math automatically</li>
                <li>They can create graphs with one click</li>
                <li>They can handle thousands of pieces of data</li>
                <li>They update everything instantly when you make changes</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> The Grid System</div>
                <p>A spreadsheet is like a giant Battleship board! Column A, Row 1 is cell A1. Column C, Row 5 is cell C5.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> The Fruit Stand</div>
                <p>Imagine you're running a fruit stand. Column A lists your fruits (Apples, Bananas, Cherries). Column B shows how many you have (10, 15, 5). That's data organized!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer"></i> Click and Type</div>
                <p>To enter data, just click on any cell and start typing. Press Enter to move down, or Tab to move right!</p>
            </div>
        `,
        taskInstructions: "Practice spreadsheet navigation and data entry.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Cells</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify the following cell addresses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Where column B meets row 3: Cell _____</div>
                        <div>Where column D meets row 7: Cell _____</div>
                        <div>Where column A meets row 1: Cell _____</div>
                        <div>Where column C meets row 5: Cell _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Fruit Stand Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a spreadsheet grid below and complete the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• In Column A, list: Apples, Bananas, Cherries, Grapes, Oranges</div>
                        <div>• In Column B, list quantities: 10, 15, 5, 12, 8</div>
                        <div>• In cell C3, type your name</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If you wanted to add "Strawberries" to your fruit list, what cell would you type it in?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the difference between a column and a row?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a spreadsheet on paper with your family's favorite foods in Column A and how often you eat them in Column B (1-10 scale). Write the cell addresses of three items.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "ICT & Data",
        subtopic: "Auto-Graphing (Creating Bar Graphs)",
        lessonContent: `
            <p>Today we'll discover how computers can instantly turn numbers into beautiful graphs!</p>
            <p><strong>Key Question:</strong> How can a computer draw a perfect bar graph in just a few clicks?</p>
            <p><strong>Introduction:</strong> Computers can "read" our data and draw the bars for us perfectly every time. This magical process is called auto-graphing!</p>
            <p><strong>The 3 Steps to Create a Graph:</strong></p>
            <ol>
                <li><strong>Highlight:</strong> Click and drag the mouse over your data (the numbers and their labels)</li>
                <li><strong>Insert:</strong> Click on the "Insert" menu and select "Chart" or "Graph"</li>
                <li><strong>Choose:</strong> Select "Bar Graph" (sometimes called "Column Chart")</li>
            </ol>
            <p><strong>Why Auto-Graphing is Amazing:</strong></p>
            <ul>
                <li>It's fast - seconds instead of minutes</li>
                <li>It's accurate - bars are perfectly sized</li>
                <li>It's connected - when you change the numbers, the graph updates automatically!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Instant Transformation</div>
                <p>Change the number of "Apples" from 10 to 50 in the spreadsheet. Watch the bar on the graph grow taller automatically! That's the magic of connected data.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse"></i> Click and Drag</div>
                <p>To highlight data, click the first cell (like A1), hold down the mouse button, and drag to the last cell (like B5). Everything between gets selected!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wand-magic"></i> No Math Required</div>
                <p>The computer figures out how tall each bar should be based on your numbers. You don't need to measure anything!</p>
            </div>
        `,
        taskInstructions: "Practice the three steps of creating a bar graph from data.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Three Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the three steps to create a graph in the correct order:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using the fruit data from yesterday (Apples=10, Bananas=15, Cherries=5, Grapes=12, Oranges=8), draw a bar graph below:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What If?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If you changed Bananas from 15 to 30, what would happen to the banana bar on the graph?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which fruit has the most? Which has the least according to your bar graph?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask 5 family members their favorite fruit. Create a small data table on paper, then draw a bar graph showing the results. Label your graph clearly.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "ICT & Data",
        subtopic: "The Big Survey (Real-World Data Collection)",
        lessonContent: `
            <p>Today we'll become real data detectives! We'll conduct a survey, organize results, and create a final presentation.</p>
            <p><strong>Key Question:</strong> How do we collect real data and turn it into a professional-looking graph?</p>
            <p><strong>The Project:</strong> "What is Grade 4's Favorite Superpower?"</p>
            <p><strong>The 4-Step Process:</strong></p>
            <ol>
                <li><strong>Survey:</strong> Interview classmates and record their choices</li>
                <li><strong>Tally:</strong> Create a tally chart on paper first</li>
                <li><strong>Enter:</strong> Type the results into the spreadsheet</li>
                <li><strong>Graph:</strong> Use auto-graphing to create a bar graph</li>
            </ol>
            <p><strong>Poster Design Requirements:</strong></p>
            <ul>
                <li><strong>Title:</strong> A clear heading (e.g., "Grade 4's Favorite Superpowers")</li>
                <li><strong>X-axis Label:</strong> What is being compared (e.g., "Superpowers")</li>
                <li><strong>Y-axis Label:</strong> The unit of measurement (e.g., "Number of Students")</li>
                <li><strong>Conclusion Sentence:</strong> What did the data tell us? (e.g., "Most students chose Flight!")</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Survey Example</div>
                <p>Ask 10 classmates: "If you could have any superpower, would you choose Flight, Super Strength, Invisibility, or Super Speed?" Write down each answer.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-user"></i> Poster Example</div>
                <p>A good poster has a big title at the top, labels on both axes, a colorful graph in the middle, and a conclusion sentence at the bottom explaining what you learned.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tally"></i> Tally Marks</div>
                <p>Tally marks help you count quickly: IIII = 4, IIII III = 8. A diagonal line across four marks makes 5: IIII = 5.</p>
            </div>
        `,
        taskInstructions: "Conduct a survey, create tally marks, and design a poster.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Conduct Your Survey</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Survey 10 classmates about their favorite superpower from these choices: <strong>Flight, Super Strength, Invisibility, Super Speed</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Record your results with tally marks:</div>
                        <div style="margin-top: 5px;">Flight: ________ (tally) = ___ students</div>
                        <div>Super Strength: ________ (tally) = ___ students</div>
                        <div>Invisibility: ________ (tally) = ___ students</div>
                        <div>Super Speed: ________ (tally) = ___ students</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Bar Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using your survey results, draw a bar graph below:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Poster Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Plan your poster by answering these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What will be your title? _________________________________</div>
                        <div>What label goes on the X-axis (bottom)? _________________</div>
                        <div>What label goes on the Y-axis (side)? __________________</div>
                        <div>Write your conclusion sentence: ________________________</div>
                        <div>___________________________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask 5 family members their favorite superpower. Add their answers to your data, update your graph, and write a new conclusion sentence.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "ICT & Data",
        subtopic: "Statistics Mastery (Bar vs. Line Graphs & Review)",
        lessonContent: `
            <p>Today we'll learn to choose the right type of graph and test our knowledge of everything we learned this week!</p>
            <p><strong>Key Question:</strong> When should you use a bar graph vs. a line graph?</p>
            <p><strong>Bar Graphs vs. Line Graphs:</strong></p>
            <ul>
                <li><strong>Bar Graphs:</strong> Used to <strong>compare</strong> different categories (e.g., Flavors of ice cream, Favorite colors, Types of pets)</li>
                <li><strong>Line Graphs:</strong> Used to show <strong>change over time</strong> (e.g., How a plant grows over 5 days, Temperature changes across a week, Height increase over months)</li>
            </ul>
            <p><strong>Week 10 Review:</strong></p>
            <ol>
                <li><strong>Spreadsheet Basics:</strong> Columns (letters), Rows (numbers), Cells (where they meet)</li>
                <li><strong>Data Entry:</strong> Typing information into cells</li>
                <li><strong>Auto-Graphing:</strong> Highlight → Insert → Choose</li>
                <li><strong>Survey Process:</strong> Collect → Tally → Enter → Graph</li>
                <li><strong>Poster Elements:</strong> Title, Axis labels, Graph, Conclusion</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Graph Match-Up #1</div>
                <p>"Temperatures in June" - This shows change over 30 days. Line Graph!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Graph Match-Up #2</div>
                <p>"Favorite Colors in Grade 4" - This compares different categories. Bar Graph!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Graph Match-Up #3</div>
                <p>"How much a puppy grew each month" - This shows growth over time. Line Graph!</p>
            </div>
        `,
        taskInstructions: "Distinguish between bar and line graphs, then complete the final quiz.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bar or Line? Graph Match-Up</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, write "Bar Graph" or "Line Graph":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Student heights over 5 years: _________</div>
                        <div>B. Favorite pizza toppings: _________</div>
                        <div>C. Daily rainfall for a week: _________</div>
                        <div>D. Number of books in each classroom: _________</div>
                        <div>E. Population growth of a city over 50 years: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Final Quiz (Quick Fire)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer the following questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. What do we call the intersection of a Row and Column? _________</div>
                        <div>2. Which axis is vertical - X or Y? _________</div>
                        <div>3. True or False: A spreadsheet can update a graph automatically. _________</div>
                        <div>4. What letter labels column 3? (A=1, B=2, C=___) _________</div>
                        <div>5. What number labels row 40? _________</div>
                        <div>6. Name one thing you should always include on a graph: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What was the most useful thing you learned about spreadsheets this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How could you use a spreadsheet outside of school?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find one bar graph and one line graph in a newspaper, magazine, or online. Cut them out or draw them. Write one sentence explaining what each graph shows.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathematicsWeek10);
    console.log("grade4-mathematics-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathematicsWeek10);
    console.log("grade4-mathematics-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathematicsWeek10',
        metadata: grade4MathematicsWeek10.metadata,
        days: grade4MathematicsWeek10
    });
    console.log("grade4-mathematics-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathematicsWeek10 = grade4MathematicsWeek10;
console.log("grade4-mathematics-week10.js loaded and registered successfully");