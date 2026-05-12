// Grade 4 Mathematics - Term 3 Week 8 Data
const grade4MathematicsWeek8 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 8,
        title: "Data Handling: The Survey Squad",
        description: "Moving from messy real-world information to organized mathematical data using surveys, tally charts, frequency tables, and sorting"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Data Collection",
        lessonContent: `
            <p>Welcome to our Data Handling week! Today we'll learn how to collect information like real researchers!</p>
            <p><strong>Key Question:</strong> What is data and how do we collect it?</p>
            <p><strong>Introduction:</strong> Data is just another word for "information." To get good data, we need to ask the same question to everyone and write down their answers carefully.</p>
            <p><strong>Our Class Survey Question:</strong></p>
            <p><em>"Which of these 4 playground activities is your favorite?"</em></p>
            <ul>
                <li><strong>Soccer</strong></li>
                <li><strong>Tag</strong></li>
                <li><strong>Swings</strong></li>
                <li><strong>Basketball</strong></li>
            </ul>
            <p><strong>The Rules of Good Data Collection:</strong></p>
            <ol>
                <li>Ask the same question to everyone</li>
                <li>Write down each person's answer</li>
                <li>No one can change their answer once it's written down</li>
                <li>Be honest and accurate</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> The Clipboard Walk</div>
                <p>Imagine you're a detective collecting clues! Walk around the room and ask 10 classmates: "Which of these 4 activities is your favorite?" Write down their names and choices like this: Sarah - Tag, Ben - Soccer.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Why Same Question?</div>
                <p>If you ask one person "What's your favorite sport?" and another "Do you like playing outside?" your data won't match! Always ask the exact same words.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ban"></i> No Changing!</div>
                <p>Once someone says their answer, that's final! In real surveys, you can't change your vote after the poll closes.</p>
            </div>
        `,
        taskInstructions: "Conduct a survey and record raw data about favorite playground activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Class Survey</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Ask 10 classmates: <em>"Which of these 4 activities is your favorite: Soccer, Tag, Swings, or Basketball?"</em>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Record their names and answers below:</div>
                        <div class="answer-space" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Raw Data List</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write your raw data as a list (example: Sarah - Tag):
                    <div class="answer-space" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it important to ask the same question to everyone?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most common answer you heard?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask 5 family members their favorite playground activity. Write down their names and answers.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Tally Charts",
        lessonContent: `
            <p>Today we'll learn a faster way to count data using tally marks!</p>
            <p><strong>Key Question:</strong> How can we count lots of answers quickly without writing every name?</p>
            <p><strong>Tally Marks - The Quick Counting System:</strong></p>
            <ul>
                <li><strong>1 to 4:</strong> Draw vertical lines | | | |</li>
                <li><strong>The 5th Mark:</strong> Draw a diagonal line through the four: <span style="font-family: monospace; font-size: 20px;">~~||||~~</span> (like a gate!)</li>
                <li><strong>6 to 9:</strong> Start a new group of five</li>
            </ul>
            <p><strong>How to Count Tally Marks:</strong></p>
            <ul>
                <li>Each "gate" (group of 5) = 5</li>
                <li>Count the gates, then add the single lines</li>
                <li>Example: <span style="font-family: monospace; font-size: 20px;">~~||||~~ ~~||||~~ |||</span> = 5 + 5 + 3 = 13</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Tally Practice</div>
                <p>If you see: |||| (4 lines) that's 4. If you see: <span style="font-family: monospace;">~~||||~~</span> that's 5. If you see: <span style="font-family: monospace;">~~||||~~ ||</span> that's 5 + 2 = 7.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fast-forward"></i> The Fast-Count Trick</div>
                <p>Imagine counting 23 people. Would you rather count: Sarah, Ben, Emma, Jake... (23 names) OR see: <span style="font-family: monospace;">~~||||~~ ~~||||~~ ~~||||~~ ~~||||~~ |||</span> (4 gates = 20 + 3 = 23)? Tally marks are MUCH faster!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gate"></i> Why the Gate?</div>
                <p>The diagonal line through 4 vertical lines makes a group of 5. Your eyes can see the "gate" as a group, so you don't have to count each line one by one!</p>
            </div>
        `,
        taskInstructions: "Convert raw data from yesterday's survey into tally marks.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tally Your Data</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use your raw data from Tuesday. For each activity, draw tally marks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Soccer:</strong> <span style="font-family: monospace; font-size: 20px;">________</span></div>
                        <div><strong>Tag:</strong> <span style="font-family: monospace; font-size: 20px;">________</span></div>
                        <div><strong>Swings:</strong> <span style="font-family: monospace; font-size: 20px;">________</span></div>
                        <div><strong>Basketball:</strong> <span style="font-family: monospace; font-size: 20px;">________</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tally Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How many does each tally group represent?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. <span style="font-family: monospace; font-size: 20px;">~~||||~~</span> = _____</div>
                        <div>B. <span style="font-family: monospace; font-size: 20px;">~~||||~~ |||</span> = _____</div>
                        <div>C. <span style="font-family: monospace; font-size: 20px;">~~||||~~ ~~||||~~ ~~||||~~</span> = _____</div>
                        <div>D. <span style="font-family: monospace; font-size: 20px;">||||</span> = _____</div>
                        <div>E. <span style="font-family: monospace; font-size: 20px;">~~||||~~ ~~||||~~ ||</span> = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Creating a Tally Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a tally chart with two columns: Activity and Tally:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Ask 10 family members or neighbors their favorite ice cream flavor from 3 choices. Record your answers using tally marks.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Frequency Tables",
        lessonContent: `
            <p>Today we'll convert our tally marks into formal numbers called <strong>frequency</strong>!</p>
            <p><strong>Key Question:</strong> What does "frequency" mean in math?</p>
            <p><strong>The Vocabulary Word:</strong> Frequency is just a fancy math word for <strong>"How many times it happened."</strong></p>
            <p><strong>The Three-Column Table:</strong></p>
            <ul>
                <li><strong>Column 1: Activity</strong> - What we asked about</li>
                <li><strong>Column 2: Tally</strong> - The tally marks we drew</li>
                <li><strong>Column 3: Frequency</strong> - The number (total count)</li>
            </ul>
            <p><strong>How to Convert Tally to Frequency:</strong></p>
            <ol>
                <li>Look at your tally marks for each activity</li>
                <li>Count the "gates" (each gate = 5)</li>
                <li>Add the single lines</li>
                <li>Write that number in the Frequency column</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Sample Frequency Table</div>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr style="background-color: #4A90E2; color: white;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Activity</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Tally</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Soccer</td>
                        <td style="padding: 8px; border: 1px solid #ddd; font-family: monospace;">~~||||~~ ~~||||~~ |||</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">13</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Tag</td>
                        <td style="padding: 8px; border: 1px solid #ddd; font-family: monospace;">~~||||~~</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">5</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Swings</td>
                        <td style="padding: 8px; border: 1px solid #ddd; font-family: monospace;">||</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                    </tr>
                </table>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> The Conversion</div>
                <p>If you have two "gates" (2 × 5 = 10) and three single lines (+3), your frequency is 13. No counting each name one by one!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Double Check</div>
                <p>Add up all your frequencies. They should equal the total number of people you surveyed. If not, check your tally marks!</p>
            </div>
        `,
        taskInstructions: "Convert tally marks into frequency numbers in a three-column table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tally to Frequency Conversion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Convert these tally marks to frequencies:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. <span style="font-family: monospace; font-size: 20px;">~~||||~~ ~~||||~~</span> = _____</div>
                        <div>B. <span style="font-family: monospace; font-size: 20px;">~~||||~~ ||||</span> = _____</div>
                        <div>C. <span style="font-family: monospace; font-size: 20px;">~~||||~~ ~~||||~~ ~~||||~~ ||</span> = _____</div>
                        <div>D. <span style="font-family: monospace; font-size: 20px;">|||||</span> = _____</div>
                        <div>E. <span style="font-family: monospace; font-size: 20px;">~~||||~~ |</span> = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use your tally chart from Wednesday. Create a three-column table: Activity | Tally | Frequency:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Check Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Add up all your frequencies. Total = _____
                    <div>How many people did you survey? _____</div>
                    <div>Do your numbers match? If not, find your mistake.</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is "frequency" a better word than just "count"?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a frequency table for your ice cream survey from yesterday. Include three columns: Flavor, Tally, Frequency.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Sorting Data",
        lessonContent: `
            <p>Today we'll learn how to arrange data in order to see patterns more easily!</p>
            <p><strong>Key Question:</strong> How can sorting data help us understand it better?</p>
            <p><strong>The Concept of Sorting:</strong> Data is easier to read when it is ranked from least to most (or most to least). We call this "Sorting" or "Ordering."</p>
            <p><strong>Important Vocabulary:</strong></p>
            <ul>
                <li><strong>Mode:</strong> The value that appears most often (the most popular choice)</li>
                <li><strong>Range:</strong> The difference between the highest and lowest numbers</li>
                <li><strong>Sort (Ascending):</strong> Arrange from smallest to largest</li>
                <li><strong>Sort (Descending):</strong> Arrange from largest to smallest</li>
            </ul>
            <p><strong>How to Find the Mode:</strong> Look at your frequency table. Which activity has the highest frequency?</p>
            <p><strong>How to Find the Range:</strong> Highest frequency — Lowest frequency = Range</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Sample Sorted Data</div>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr style="background-color: #4A90E2; color: white;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Activity</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Frequency</th>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">Swings</td><td style="padding: 8px; border: 1px solid #ddd;">2</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">Tag</td><td style="padding: 8px; border: 1px solid #ddd;">5</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">Basketball</td><td style="padding: 8px; border: 1px solid #ddd;">8</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">Soccer</td><td style="padding: 8px; border: 1px solid #ddd;">13</td></tr>
                 </table>
                 <p>Mode = Soccer (13 votes). Range = 13 — 2 = 11</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> The Ranking Challenge</div>
                <p>Look at your frequency table. Rewrite it starting with the activity that got the FEWEST votes and ending with the one that got the MOST. Now you can instantly see which is most popular!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Looking Ahead</div>
                <p>Sorted data makes it much easier to draw a bar graph next week! You'll know exactly which bar should be tallest.</p>
            </div>
        `,
        taskInstructions: "Sort frequency data, identify the mode, and calculate the range.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort Your Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use your frequency table from Thursday. Rewrite the table sorted from FEWEST votes to MOST votes:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Mode</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which activity had the highest frequency (the mode)?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How many votes did the mode receive?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Calculate the Range</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Highest frequency = _____
                    <div>Lowest frequency = _____</div>
                    <div>Range (Highest — Lowest) = _____</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Analysis Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What does the mode tell us about our class's playground preferences?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> If the range is very large, what does that mean?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Week Recap</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> What was the most important thing you learned about handling data this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a final report of your playground survey including: your frequency table, sorted data, mode, and range. Write one sentence about what you learned.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathematicsWeek8);
    console.log("grade4-mathematics-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathematicsWeek8);
    console.log("grade4-mathematics-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathematicsWeek8',
        metadata: grade4MathematicsWeek8.metadata,
        days: grade4MathematicsWeek8
    });
    console.log("grade4-mathematics-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathematicsWeek8 = grade4MathematicsWeek8;
console.log("grade4-mathematics-week8.js loaded and registered successfully");