// Grade 3 Mathematics & Science - Week 9 Data (Data Collection and Analysis)
const grade3MathScienceWeek9 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        week: 9,
        title: "Data Collection and Analysis",
        description: "Learning to collect, organize, and interpret data using tally marks and frequency tables"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Collecting Data by Tallying",
        subtopic: "Using tally marks to record information",
        lessonContent: `
            <p>Welcome to Data Week! Today we'll learn how scientists and mathematicians collect information about the world around us.</p>
            <p><strong>Key Concept:</strong> Data is collected information that helps us answer questions.</p>
            <p><strong>What is tallying?</strong></p>
            <ul>
                <li>A quick way to count things as we find them</li>
                <li>Making marks in groups of five</li>
                <li>Keeping track of how many of each item we see</li>
            </ul>
            <p><strong>Tally Mark System:</strong></p>
            <ul>
                <li>One mark (|) for each item</li>
                <li>Four marks (||||) then a diagonal (~~//~~) through for five</li>
                <li>Groups of five make counting easier</li>
            </ul>
            <p><strong>Our Mission:</strong> We're conducting a Kitchen Cabinet Survey to see what types of items families keep in their homes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar" style="color: #4CAF50;"></i> Tally Example</div>
                <p>"If we count 7 apples: |||| ~~//~~ || (that's 5 + 2 = 7)" - The diagonal line helps us see groups of five!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #795548;"></i> Kitchen Categories</div>
                <p>"Soap, Cleaners, Personal Care" - These are our categories for today's survey.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Tally Race!</div>
                <p>I'll show pictures quickly - make tally marks for each type of kitchen item you see!</p>
            </div>
        `,
        taskInstructions: "Complete the Kitchen Cabinet Survey using tally marks.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Look at the "Kitchen Cabinet Images" provided. Make tally marks for each item you see:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Soap Items:</strong> <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    <div>Tally: ________________________________</div>
                    <div>Total: ____ items</div>
                </div>
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Cleaners:</strong> <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    <div>Tally: ________________________________</div>
                    <div>Total: ____ items</div>
                </div>
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Personal Care:</strong> <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    <div>Tally: ________________________________</div>
                    <div>Total: ____ items</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Practice tallying with classroom objects:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Count blue pencils: ____ (show tally)</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>Count red books: ____ (show tally)</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw what a tally for "12 items" looks like:
                <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                <div>Explain: "12 items = ______ groups of five + ______ singles"</div>
            </div>
        `,
        homework: "Find 3 categories of items in your kitchen (canned goods, spices, snacks). Make tally marks for how many are in each category.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Creating Frequency Tables",
        subtopic: "Organizing tally data into tables",
        lessonContent: `
            <p>Today we'll take our tally marks and organize them into a neat, easy-to-read table!</p>
            <p><strong>Key Concept:</strong> A frequency table organizes data so we can see patterns clearly.</p>
            <p><strong>Parts of a Frequency Table:</strong></p>
            <ul>
                <li><strong>Column 1:</strong> Category names (what we're counting)</li>
                <li><strong>Column 2:</strong> Tally marks (how we counted them)</li>
                <li><strong>Column 3:</strong> Frequency number (the total count)</li>
            </ul>
            <p><strong>Why use tables?</strong></p>
            <ul>
                <li>Makes information neat and organized</li>
                <li>Easy to compare different categories</li>
                <li>Helps us see which items are most common</li>
            </ul>
            <p><strong>Converting Tallies to Numbers:</strong> Count your tally groups (each group of 5 = 5) plus any singles.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table" style="color: #2196F3;"></i> Table Example</div>
                <p>"Category: Soap | Tally: |||| ~~//~~ ||| | Frequency: 8" - The table shows everything clearly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator" style="color: #f44336;"></i> Tally to Number</div>
                <p>"|||| ~~//~~ |||| ~~//~~ || = 5 + 5 + 2 = 12" - Count groups of five first!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Table Building Race!</div>
                <p>Work in teams to convert tally charts into frequency tables. First team with a perfect table wins!</p>
            </div>
        `,
        taskInstructions: "Convert your kitchen cabinet tally data into a frequency table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Create Your Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using yesterday's data, complete this table:
                    <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                        <tr style="background-color: #f5f5f5;">
                            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Category</th>
                            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Tally</th>
                            <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Frequency</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Soap Items</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 150px;"></span></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 50px;"></span></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Cleaners</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 150px;"></span></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 50px;"></span></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Personal Care</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 150px;"></span></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 50px;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practice Conversions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert these tallies to numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>|||| ~~//~~ |||| ~~//~~ |||| ~~//~~ = ____</div>
                        <div>|||| ~~//~~ || = ____</div>
                        <div>|||| ~~//~~ |||| ~~//~~ |||| ~~//~~ |||| ~~//~~ | = ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Table</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Make a frequency table for classroom items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Choose 3 categories: ________________, ________________, ________________</div>
                        <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a frequency table for items in your bedroom (books, toys, clothes). Include at least 3 categories.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Interpreting Frequency Tables",
        subtopic: "Reading and understanding data in tables",
        lessonContent: `
            <p>Today we'll learn to read frequency tables and answer questions about the data!</p>
            <p><strong>Key Concept:</strong> Data interpretation means understanding what the numbers tell us.</p>
            <p><strong>Questions We Can Ask:</strong></p>
            <ul>
                <li>Which category has the most?</li>
                <li>Which category has the least?</li>
                <li>How many more does one category have than another?</li>
                <li>What is the total of all items?</li>
            </ul>
            <p><strong>Today's Data:</strong> We'll analyze warning signs found in a classroom. Safety scientists use data like this to know what hazards exist.</p>
            <p><strong>Math Vocabulary:</strong></p>
            <ul>
                <li><strong>Most Common:</strong> The category with the highest frequency</li>
                <li><strong>Least Common:</strong> The category with the lowest frequency</li>
                <li><strong>Difference:</strong> How many more one category has than another</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle" style="color: #FF9800;"></i> Warning Signs Table</div>
                <p>"If 'Poison' has 8 signs and 'Flammable' has 3, then Poison has 5 more signs than Flammable."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #2196F3;"></i> Reading the Table</div>
                <p>Find the highest number in the Frequency column - that's the most common!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Data Detective Game!</div>
                <p>I'll show a frequency table - be the first to answer questions about the data!</p>
            </div>
        `,
        taskInstructions: "Analyze the warning signs frequency table and answer questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Analyze This Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use this frequency table to answer questions:
                    <table style="width: 80%; margin: 10px auto; border-collapse: collapse;">
                        <tr style="background-color: #f5f5f5;">
                            <th style="border: 1px solid #ccc; padding: 8px;">Warning Sign Type</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Frequency</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Poison</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">8</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Flammable</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">3</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Corrosive</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">6</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Explosive</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">1</td>
                        </tr>
                    </table>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Which sign was most common? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>b. Which sign was least common? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>c. How many more "Poison" signs were there than "Flammable" signs? <span class="answer-space" style="width: 50px;"></span></div>
                        <div>d. What is the total number of warning signs? <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write two questions about this data:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 250px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What does this data tell us about classroom safety?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Look at your bedroom frequency table from yesterday. Write 3 questions about your data and answer them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Analyzing Trends in Data",
        subtopic: "Drawing conclusions from data patterns",
        lessonContent: `
            <p>Today we'll move beyond just reading numbers - we'll think about what the data MEANS!</p>
            <p><strong>Key Concept:</strong> Data analysis helps us understand why things are the way they are.</p>
            <p><strong>What are trends?</strong></p>
            <ul>
                <li>Patterns we notice in the data</li>
                <li>Why one category might be larger than another</li>
                <li>What the data tells us about habits or needs</li>
            </ul>
            <p><strong>Today's Focus:</strong> Household Waste Types - using math to understand environmental impact.</p>
            <p><strong>Science Connection:</strong> Scientists use data like this to:</p>
            <ul>
                <li>Understand how households produce waste</li>
                <li>Plan recycling programs</li>
                <li>Educate people about reducing waste</li>
            </ul>
            <p><strong>Thinking Deeper:</strong> If "Plastic Containers" is our largest waste category, what does that tell us about shopping habits?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash" style="color: #795548;"></i> Waste Analysis</div>
                <p>"If a household has 15 plastic containers and only 2 glass jars, they might buy more packaged foods."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb" style="color: #FFC107;"></i> Drawing Conclusions</div>
                <p>"This data suggests we should recycle more plastic to help the environment."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Trend Spotter Game!</div>
                <p>I'll show waste data from different households. Which household is most environmentally friendly?</p>
            </div>
        `,
        taskInstructions: "Analyze household waste data and draw conclusions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Waste Data Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Analyze this household waste frequency table:
                    <table style="width: 80%; margin: 10px auto; border-collapse: collapse;">
                        <tr style="background-color: #f5f5f5;">
                            <th style="border: 1px solid #ccc; padding: 8px;">Waste Type</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Frequency</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Plastic Containers</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">18</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Paper/Cardboard</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">12</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Glass Jars</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">5</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Metal Cans</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">8</td>
                        </tr>
                    </table>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Which waste type is most common? Why might this be? <span class="answer-space" style="width: 200px;"></span></div>
                        <div>b. If plastic is bad for the environment, what should this household do? <span class="answer-space" style="width: 200px;"></span></div>
                        <div>c. What does this data tell us about how this family shops? <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare Two Households</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Household A has 20 plastic items. Household B has 5. What conclusions can you draw?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Make a Recommendation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Based on the waste data, write one recommendation for the family:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Look at your own household waste for one day. Categorize it and think about what it says about your family's habits.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Final Data Project",
        subtopic: "Complete data cycle: collect, record, and interpret",
        lessonContent: `
            <p>Today is our Data Project Day! You'll be real data scientists, completing the full data cycle.</p>
            <p><strong>The Data Cycle:</strong></p>
            <ul>
                <li><strong>Step 1:</strong> Choose a question to answer</li>
                <li><strong>Step 2:</strong> Collect data (use tally marks)</li>
                <li><strong>Step 3:</strong> Organize data (create frequency table)</li>
                <li><strong>Step 4:</strong> Interpret data (answer your question)</li>
            </ul>
            <p><strong>Project Choices:</strong></p>
            <ul>
                <li><strong>Favorite Soap Scent:</strong> Poll classmates about lavender, citrus, or unscented</li>
                <li><strong>Types of Containers:</strong> Survey what containers classmates bring for lunch</li>
                <li><strong>Your Own Idea:</strong> Choose another topic with teacher approval</li>
            </ul>
            <p><strong>Celebration:</strong> You've learned to collect, organize, and interpret data - skills real scientists use every day!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-poll" style="color: #4CAF50;"></i> Data Project Example</div>
                <p>"Question: What's the favorite soap scent? Data shows citrus is most popular. Conclusion: Most people like fruity smells."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-check" style="color: #2196F3;"></i> The Full Cycle</div>
                <p>1. Ask → 2. Tally → 3. Table → 4. Conclude → 5. Share!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Data Scientist Showcase!</div>
                <p>Present your findings to the class like a real scientist would!</p>
            </div>
        `,
        taskInstructions: "Complete your data project following all steps of the data cycle.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plan Your Project</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose your topic and question:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My topic: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>My question: <span class="answer-space" style="width: 300px;"></span></div>
                        <div>My categories (3-4): ________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Collect Data</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Poll your classmates. Make tally marks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Category 1: ________________ Tally: ________________</div>
                        <div>Category 2: ________________ Tally: ________________</div>
                        <div>Category 3: ________________ Tally: ________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Frequency Table</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Organize your data in a table:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Interpret Your Data</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one concluding sentence about your findings:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Present Your Findings</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a mini-poster of your project:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div style="margin-top: 10px;">Include: Title, Table, Conclusion, Your Name</div>
                </div>
            </div>
        `,
        homework: "Share your data project with your family. Explain what you learned about collecting and analyzing data.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek9);
    console.log("math-science-week9-data.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek9);
    console.log("math-science-week9-data.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek9',
        metadata: grade3MathScienceWeek9.metadata,
        days: grade3MathScienceWeek9
    });
    console.log("math-science-week9-data.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek9 = grade3MathScienceWeek9;
console.log("math-science-week9-data.js loaded and registered successfully");