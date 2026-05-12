// Grade 4 Technology Studies - Term 2 Week 4 (Combined into 2 Days)
const grade4TechStudiesWeek4 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 2,
        week: 4,
        title: "Introduction to Spreadsheets",
        description: "Learning the basics of spreadsheets: rows, columns, cell addresses, entering data, formatting, and creating simple spreadsheets"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Meeting the Grid: Rows, Columns, Addresses & Ribbon Basics",
        lessonContent: `
            <p>Welcome to the world of spreadsheets! Today we'll discover how to organize information like a pro.</p>
            <p><strong>Key Question:</strong> How can we organize messy information so it's easy to read?</p>
            <p><strong>What is a Spreadsheet?</strong></p>
            <p>A spreadsheet is like a magical digital table that helps us organize lots of information. Think of it as a giant sheet of graph paper that lives on your computer!</p>
            <p><strong>The Building Blocks of a Spreadsheet:</strong></p>
            <ol>
                <li><strong>Columns:</strong> These go UP and DOWN (vertical). They are labeled with LETTERS: A, B, C, D...</li>
                <li><strong>Rows:</strong> These go ACROSS (horizontal). They are labeled with NUMBERS: 1, 2, 3, 4...</li>
                <li><strong>Cell:</strong> Each little rectangle where a column and row meet is called a CELL.</li>
                <li><strong>Cell Address:</strong> Every cell has a special name made from its column letter + row number (like A1, C5, D6).</li>
            </ol>
            <p><strong>Power-Up: The Ribbon and Active Cell</strong></p>
            <ul>
                <li><strong>Active Cell:</strong> When you click on a cell, it gets a thick border around it. That's the Active Cell - it's the one "listening" for what you want to do!</li>
                <li><strong>The Ribbon:</strong> This is the spreadsheet's "Command Center" at the top of the screen. It has many buttons grouped on different Tabs.</li>
            </ul>
            <p><strong>Important Tabs in the Ribbon:</strong></p>
            <ol>
                <li><strong>File Tab:</strong> Where we save our work, open a new spreadsheet, or print</li>
                <li><strong>Home Tab:</strong> The most popular tab! Has buttons for:
                    <ul>
                        <li>Bold (B), Italic (I), Underline (U)</li>
                        <li>Font colors and fill colors</li>
                        <li>Alignment (left, center, right)</li>
                    </ul>
                </li>
                <li><strong>Insert Tab:</strong> Where we add pictures, charts, or new sheets</li>
            </ol>
            <p><strong>Why Learn Spreadsheets?</strong> They help us organize homework grades, track sports scores, make budgets, and so much more!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Column Analogy</div>
                <p>Think of columns like the columns of a building - they go up and down! Spreadsheet columns are labeled with letters: A, B, C...</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Row Analogy</div>
                <p>Rows are like the rows of seats in a movie theater - they go side to side! Spreadsheet rows are labeled with numbers: 1, 2, 3...</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer"></i> Active Cell</div>
                <p>The active cell is like a student raising their hand - it's telling the computer "I'm ready to receive information!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> The Ribbon = Dashboard</div>
                <p>The Ribbon is like a car's dashboard. Each button is a control that tells the spreadsheet what to do, just like buttons in a car control the radio or air conditioning!</p>
            </div>
        `,
        taskInstructions: "Identify rows, columns, cell addresses, navigate the ribbon, and enter data into cells.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Grid</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the grid below. Label the column letters and row numbers:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <tr>
                                <td style="border: 1px solid #ccc; width: 50px; background: #f0f0f0;"></td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;"><strong>A</strong></td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;"><strong>B</strong></td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;"><strong>C</strong></td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;"><strong>D</strong></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; background: #e0e0e0;"><strong>1</strong></td>
                                <td style="border: 1px solid #ccc; background: #fff9c4;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; background: #e0e0e0;"><strong>2</strong></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc; background: #c8e6c9;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; background: #e0e0e0;"><strong>3</strong></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc; background: #ffcdd2;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; background: #e0e0e0;"><strong>4</strong></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc;"></td>
                                <td style="border: 1px solid #ccc; background: #bbdefb;"></td>
                            </tr>
                          </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Cell Address</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the cell address for each colored cell above:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Yellow cell (top left corner): _________</div>
                        <div>• Green cell: _________</div>
                        <div>• Red cell: _________</div>
                        <div>• Blue cell: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Color the Cells</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> On the grid below, color the following cells:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A1 = Yellow</div>
                        <div>• B3 = Green</div>
                        <div>• C2 = Blue</div>
                        <div>• D4 = Red</div>
                    </div>
                    <div style="margin-top: 15px;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <tr>
                                <td style="border: 1px solid #ccc; width: 50px; background: #f0f0f0;"></td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;">A</td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;">B</td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;">C</td>
                                <td style="border: 1px solid #ccc; width: 80px; background: #e0e0e0;">D</td>
                            </tr>
                            <tr><td style="border: 1px solid #ccc; background: #e0e0e0;">1</td><td style="border: 1px solid #ccc; height: 40px;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td></tr>
                            <tr><td style="border: 1px solid #ccc; background: #e0e0e0;">2</td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td></tr>
                            <tr><td style="border: 1px solid #ccc; background: #e0e0e0;">3</td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td></tr>
                            <tr><td style="border: 1px solid #ccc; background: #e0e0e0;">4</td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td></tr>
                          </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Ribbon Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Answer these questions about the Ribbon:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Which tab would you click to SAVE your work? _________</div>
                        <div>• Which tab has the BOLD button (B)? _________</div>
                        <div>• Which tab would you use to add a PICTURE? _________</div>
                        <div>• Name one button you see in the Home Tab: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Data Entry Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Enter this data into a spreadsheet (or on the grid below):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">A</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">B</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Favorite Pets</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Number of Students</td>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cat</td><td style="padding: 8px; border: 1px solid #ddd;">12</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Dog</td><td style="padding: 8px; border: 1px solid #ddd;">15</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Fish</td><td style="padding: 8px; border: 1px solid #ddd;">8</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Hamster</td><td style="padding: 8px; border: 1px solid #ddd;">5</td></tr>
                          </table>
                    </div>
                    <div style="margin-top: 15px;">
                        <p><strong>Draw your data entry below:</strong></p>
                        <div class="drawing-area" style="height: 150px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Exit Ticket</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Look at the 2x2 grid below (Columns A-B, Rows 1-2). An X is in one cell. Write the correct address of the X:
                    <div style="margin-top: 10px;">
                        <table style="display: inline-block; border-collapse: collapse;">
                            <tr><td style="border: 1px solid #ccc; width: 50px; background: #e0e0e0;"></td><td style="border: 1px solid #ccc; width: 60px; background: #e0e0e0;">A</td><td style="border: 1px solid #ccc; width: 60px; background: #e0e0e0;">B</td></tr>
                            <tr><td style="border: 1px solid #ccc; background: #e0e0e0;">1</td><td style="border: 1px solid #ccc; text-align: center;">X</td><td style="border: 1px solid #ccc;"></td></tr>
                            <tr><td style="border: 1px solid #ccc; background: #e0e0e0;">2</td><td style="border: 1px solid #ccc;"></td><td style="border: 1px solid #ccc;"></td></tr>
                          </table>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 15px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> How do you make text BOLD in a spreadsheet?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple 4x4 grid (columns A-D, rows 1-4). Put a star in cell B3 and a smiley face in cell D2. Label the column letters and row numbers. Then create a simple spreadsheet list on paper titled 'My Weekly Chores' with Column A = Day (Monday-Friday) and Column B = Chore.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Spreadsheets",
        subtopic: "Formatting, Practice, Review & Celebration",
        lessonContent: `
            <p>Today we'll practice formatting our data, create a class survey spreadsheet, and review everything we've learned about spreadsheets!</p>
            <p><strong>Review:</strong></p>
            <ul>
                <li><strong>Columns</strong> go up and down (letters)</li>
                <li><strong>Rows</strong> go across (numbers)</li>
                <li><strong>Cells</strong> have addresses like A1, B3, C5</li>
                <li><strong>Active Cell</strong> is the selected cell</li>
                <li><strong>The Ribbon</strong> has tabs like Home (for formatting) and Insert (for pictures)</li>
            </ul>
            <p><strong>Formatting Your Data:</strong></p>
            <ul>
                <li>Make text <strong>BOLD</strong>, <em>Italic</em>, or <u>Underlined</u></li>
                <li>Change font colors and add colored backgrounds (fill colors)</li>
                <li>Align text to the left, center, or right</li>
            </ul>
            <p><strong>What We Learned This Week:</strong></p>
            <ol>
                <li><strong>Spreadsheet Basics:</strong> Rows (numbers), Columns (letters), and Cells</li>
                <li><strong>Cell Addresses:</strong> How to find and name cells like A1, B3, D6</li>
                <li><strong>The Ribbon:</strong> The command center with File, Home, and Insert tabs</li>
                <li><strong>Data Entry:</strong> How to type information into cells</li>
                <li><strong>Formatting:</strong> Making text BOLD, changing colors, and centering</li>
            </ol>
            <p><strong>You Are Now Ready To:</strong></p>
            <ul>
                <li>Create your own simple spreadsheets</li>
                <li>Organize data in rows and columns</li>
                <li>Use basic formatting to make your data look professional</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-brush"></i> Styling Your Data</div>
                <p>You can make your spreadsheet beautiful! Select a cell, then use the Home Tab to make text BOLD, change the font color, or add a colored background.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Real-World Connection</div>
                <p>Teachers use spreadsheets to track your grades! Each student has a row, and each assignment has a column.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> You're a Spreadsheet Star!</div>
                <p>Spreadsheets are used by scientists, teachers, business owners, and even sports coaches. You now have a valuable skill!</p>
            </div>
        `,
        taskInstructions: "Format your spreadsheet data, create a class survey spreadsheet, complete a review quiz, and create a final project.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Format Your Data</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the data from yesterday's spreadsheet (Favorite Pets), follow these formatting challenges:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Select cells A1 and B1 (the titles). Make the text <strong>BOLD</strong>.</div>
                        <div>• Change the font color of the titles to <span style="color: blue;">BLUE</span>.</div>
                        <div>• Underline the titles</div>
                        <div>• Select all the numbers in column B and center-align them.</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Check the boxes when complete:</em></p>
                        <div>☐ Titles are BOLD</div>
                        <div>☐ Titles are BLUE</div>
                        <div>☐ Titles are underlined</div>
                        <div>☐ Numbers are centered</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Spreadsheet</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a "Favorite School Subjects" spreadsheet:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Title:</strong> Favorite School Subjects</div>
                        <div>• Column A: Student Name (3-4 students)</div>
                        <div>• Column B: Favorite Subject</div>
                        <div>• Column C: Rating (1-10)</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Apply these formatting rules to your spreadsheet:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Make the titles (A1, B1, C1) <strong>BOLD</strong></div>
                        <div>• Underline the titles</div>
                        <div>• Change the font color of the titles to <span style="color: green;">GREEN</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Vocabulary Quiz</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match the word to its meaning:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Column ___ &nbsp;&nbsp;&nbsp; A. The selected cell that is "listening"</div>
                        <div>2. Row ___ &nbsp;&nbsp;&nbsp; B. Goes up and down (letters)</div>
                        <div>3. Cell Address ___ &nbsp;&nbsp;&nbsp; C. The command center with tabs</div>
                        <div>4. Active Cell ___ &nbsp;&nbsp;&nbsp; D. Goes across (numbers)</div>
                        <div>5. Ribbon ___ &nbsp;&nbsp;&nbsp; E. Column letter + Row number (like A1)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Challenge - My Favorites</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a "My Favorites" spreadsheet with:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Column A: Category (Movie, Song, Food, Game, Book)</div>
                        <div>• Column B: Your Favorite Item</div>
                        <div>• Format the titles in BOLD and any color you choose</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most useful thing you learned about spreadsheets this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What is one thing you want to learn next about spreadsheets?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Share your 'My Favorites' spreadsheet with a family member. Teach them one thing you learned about spreadsheets this week! Then ask a family member if they use spreadsheets at work and write down what they use them for.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechStudiesWeek4);
    console.log("grade4-techstudies-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechStudiesWeek4);
    console.log("grade4-techstudies-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechStudiesWeek4',
        metadata: grade4TechStudiesWeek4.metadata,
        days: grade4TechStudiesWeek4
    });
    console.log("grade4-techstudies-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechStudiesWeek4 = grade4TechStudiesWeek4;
console.log("grade4-techstudies-week4.js loaded and registered successfully");