// Grade 4 Mathematics - Term 3 Week 9 Data
const grade4MathsWeek9 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 9,
        title: "Data Handling: Telling Stories with Graphs",
        description: "Moving from collecting data to representing it visually - bar graphs, interpretation, and line graphs"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Drawing Bar Graphs",
        lessonContent: `
            <p>Welcome to data handling! Today we'll learn how to draw bar graphs to show and compare information.</p>
            <p><strong>Key Question:</strong> How can we show numbers so people can understand them at a glance?</p>
            <p><strong>Introduction:</strong> A bar graph uses bars of different heights to compare quantities. It's like a race where the tallest bar wins!</p>
            <p><strong>Our Example: The Favorite Fruit Poll</strong></p>
            <p>Let's say we surveyed our class and got these results:</p>
            <ul>
                <li>Apples: 10 students</li>
                <li>Bananas: 15 students</li>
                <li>Grapes: 5 students</li>
                <li>Mangoes: 20 students</li>
            </ul>
            <p><strong>Step 1: Choose a Scale</strong><br>
            Since our highest number is 20, a scale of 5 works best: 0, 5, 10, 15, 20.</p>
            <p><strong>Step 2: Label Your Axes</strong><br>
            The X-axis (horizontal line) gets the fruit names. The Y-axis (vertical line) gets the label "Number of Students".</p>
            <p><strong>Step 3: Draw Your Bars</strong><br>
            Draw bars up to the correct line on the Y-axis. Make sure bars are the same width and have gaps between them.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Bar Graph Rules</div>
                <p>✓ All bars must be the same width<br>
                ✓ Leave equal gaps between bars<br>
                ✓ Always label both axes<br>
                ✓ Give your graph a title</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Why Scale Matters</div>
                <p>If you choose a scale that's too big (like 0, 20, 40), all your bars will be squished at the bottom. If it's too small (0, 2, 4), your bars won't fit!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Quick Comparison</div>
                <p>With a bar graph, you can instantly see that Mangoes are the most popular and Grapes are the least popular - no reading numbers needed!</p>
            </div>
        `,
        taskInstructions: "Construct a bar graph with an appropriate scale and clear labels.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Favorite Fruit Bar Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use the data below to draw a bar graph:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>• Apples: 12 students</div>
                        <div>• Bananas: 18 students</div>
                        <div>• Oranges: 8 students</div>
                        <div>• Strawberries: 22 students</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 100px;">[Draw your bar graph here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Scale Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What scale did you choose for your Y-axis? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Labeling Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> On your graph above, make sure you have:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ A title for your graph</div>
                        <div>□ X-axis labeled "Fruit"</div>
                        <div>□ Y-axis labeled "Number of Students"</div>
                        <div>□ Numbers on the Y-axis (scale)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Survey 10 family members about their favorite season (Summer, Winter, Spring, Fall). Draw a bar graph showing your results.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Interpreting Bar Graphs",
        lessonContent: `
            <p>Today we'll become graph detectives! We'll learn how to read the stories hidden in bar graphs.</p>
            <p><strong>Key Question:</strong> What questions can a bar graph answer?</p>
            <p><strong>Introduction:</strong> Reading a graph is like being a detective. The answers are hidden in the heights of the bars!</p>
            <p><strong>Our Example: The Library Book Challenge</strong></p>
            <p>Here's a bar graph showing books read per day:</p>
            <ul>
                <li>Monday: 4 books</li>
                <li>Tuesday: 8 books</li>
                <li>Wednesday: 2 books</li>
                <li>Thursday: 6 books</li>
                <li>Friday: 10 books</li>
            </ul>
            <p><strong>Three Types of Questions:</strong></p>
            <ol>
                <li><strong>Finding the Least/Most:</strong> Which day has the shortest bar? (Wednesday - 2 books). Which day has the tallest bar? (Friday - 10 books).</li>
                <li><strong>"How Many More" (The Gap):</strong> How many more books were read on Tuesday than Monday?<br>
                <strong>Solving:</strong> 8 - 4 = 4 more books!</li>
                <li><strong>Finding the Total:</strong> Add all the bar heights together: 4 + 8 + 2 + 6 + 10 = 30 books total for the week.</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Tips</div>
                <p>Always check the scale first! If the Y-axis goes up by 2s instead of 1s, you need to be careful when reading bar heights.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Question Templates</div>
                <p>"How many more?" means SUBTRACT.<br>
                "How many altogether?" means ADD.<br>
                "Which has the most?" means find the TALLEST bar.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Real-World Connection</div>
                <p>Pizza shops use bar graphs to track which toppings sell best. That's why they always have enough pepperoni!</p>
            </div>
        `,
        taskInstructions: "Analyze existing graphs to solve comparison problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reading a Class Pet Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use this data to answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>Dogs: 14 students &nbsp;&nbsp; ██████████████</div>
                        <div>Cats: 9 students &nbsp;&nbsp;&nbsp; █████████</div>
                        <div>Fish: 5 students &nbsp;&nbsp;&nbsp; █████</div>
                        <div>Hamsters: 7 students &nbsp; ███████</div>
                        <div>Birds: 3 students &nbsp;&nbsp;&nbsp; ███</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Which pet is the most popular? 
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which pet is the least popular? 
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How many more students chose Dogs than Cats?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How many students chose Hamsters and Fish combined?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What is the total number of students surveyed?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own Question</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Look at the graph above. Write one question that a classmate could answer using the data:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a bar graph in a newspaper, magazine, or online. Write 3 questions someone could answer using that graph. Bring it to class or describe it.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Introduction to Line Graphs",
        lessonContent: `
            <p>Today we'll learn about line graphs - a special kind of graph that shows how things change over time!</p>
            <p><strong>Key Question:</strong> How is a line graph different from a bar graph?</p>
            <p><strong>Introduction:</strong> Unlike bar graphs (which compare different things), line graphs show ONE thing changing over time, like temperature, height, or growth.</p>
            <p><strong>Our Example: Daily Temperature at Noon</strong></p>
            <p>Imagine measuring the temperature every day at noon:</p>
            <ul>
                <li>Monday: 20°C</li>
                <li>Tuesday: 22°C</li>
                <li>Wednesday: 21°C</li>
                <li>Thursday: 25°C</li>
                <li>Friday: 28°C</li>
            </ul>
            <p><strong>Reading the Trend:</strong></p>
            <ul>
                <li>If the dots on the graph are moving UPWARD → it is getting HOTTER</li>
                <li>If the dots are moving DOWNWARD → it is getting COOLER</li>
                <li>If the line is FLAT → no change!</li>
            </ul>
            <p><strong>Connecting the Dots:</strong><br>
            We use a line to connect the dots so we can see the "flow" of the data easily and predict what might happen next.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Bar vs. Line</div>
                <p>Bar Graph = Comparing different categories (Favorite fruits, Pet types)<br>
                Line Graph = Showing change over time (Temperature, Height, Weight)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Weather Reports</div>
                <p>Weather forecasts use line graphs to show how temperature will change throughout the day. You can see when it will be hottest!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> The Trend Story</div>
                <p>A line going up = "increasing"<br>
                A line going down = "decreasing"<br>
                These words help describe what's happening to the data.</p>
            </div>
        `,
        taskInstructions: "Understand that line graphs show how data changes over a period of time.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bar or Line Graph?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each situation, write whether you would use a BAR graph or LINE graph:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Showing the heights of different students in the class: _________</div>
                        <div>B. Showing how a plant grows each week: _________</div>
                        <div>C. Comparing favorite ice cream flavors: _________</div>
                        <div>D. Tracking rainfall each month of the year: _________</div>
                        <div>E. Showing the number of goals scored in each game of the season: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Reading a Temperature Line Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use this data to answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>Day 1: 18°C &nbsp; Day 2: 20°C &nbsp; Day 3: 19°C &nbsp; Day 4: 23°C &nbsp; Day 5: 25°C</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line graph for this temperature data:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Draw your line graph here]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Was the temperature increasing or decreasing from Day 4 to Day 5?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What was the temperature on Day 3?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
        `,
        homework: "Track the temperature at the same time each day for 5 days. Record your data in a table and draw a line graph showing the changes.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Plotting Trends",
        lessonContent: `
            <p>Today we'll become graph builders! We'll learn how to plot points and connect them to show growth over time.</p>
            <p><strong>Key Question:</strong> How do we turn a data table into a line graph?</p>
            <p><strong>Introduction:</strong> Plotting means finding the exact spot on the graph where the day and the measurement meet.</p>
            <p><strong>Our Example: The Growing Bean Plant</strong></p>
            <p>Here's our data table showing how tall a bean plant grows each day:</p>
            <ul>
                <li>Day 1: 0 cm</li>
                <li>Day 2: 2 cm</li>
                <li>Day 3: 5 cm</li>
                <li>Day 4: 7 cm</li>
                <li>Day 5: 10 cm</li>
            </ul>
            <p><strong>The Plotting Process:</strong></p>
            <ol>
                <li>Find "Day 2" on the bottom line (X-axis)</li>
                <li>Move your finger UP to the "2 cm" mark on the side (Y-axis)</li>
                <li>Make a bold dot where the two meet</li>
                <li>Repeat for each day</li>
                <li>Use a ruler to connect the dots from Day 1 to Day 5</li>
            </ol>
            <p><strong>What the Line Tells Us:</strong><br>
            The steepness of the line shows how fast the plant is growing! A steeper line = faster growth.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas-regular fa-chart-line"></i> Finding Coordinates</div>
                <p>Every point on a graph has an address like (Day, Height). For Day 3 at 5 cm, the address is (3, 5). The first number is ALWAYS the X-axis (bottom).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Plant Growth Science</div>
                <p>The bean plant grew fastest between Day 4 and Day 5 - those are the steepest part of the line! That's when it gained 3 cm in one day.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-graduation-cap"></i> Real-World Use</div>
                <p>Doctors use growth charts (line graphs) to track if children are growing at a healthy rate. Your height and weight are plotted over time!</p>
            </div>
        `,
        taskInstructions: "Plot data points on a grid and connect them to show growth.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plot the Bean Plant</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Plot the bean plant height data on this grid:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>Day 1: 0 cm &nbsp; Day 2: 3 cm &nbsp; Day 3: 4 cm &nbsp; Day 4: 8 cm &nbsp; Day 5: 12 cm</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 100px;">[Plot your points and connect them with a line]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Reading Your Graph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How tall was the plant on Day 3?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Between which two days did the plant grow the most?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How much did the plant grow from Day 1 to Day 5?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Your Own Trend</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own data table showing something that changes over 5 days (like money saved, pages read, or steps walked). Then draw a line graph:
                    <div class="answer-space" style="height: 80px;"></div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why do we connect the dots with a line instead of leaving them as separate points?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Measure your plant or yourself once a day for 5 days. Record the measurements in a table, then draw a line graph showing the changes.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathsWeek9);
    console.log("grade4-maths-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathsWeek9);
    console.log("grade4-maths-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathsWeek9',
        metadata: grade4MathsWeek9.metadata,
        days: grade4MathsWeek9
    });
    console.log("grade4-maths-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathsWeek9 = grade4MathsWeek9;
console.log("grade4-maths-week9.js loaded and registered successfully");