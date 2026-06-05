// Grade 3 Mathematics & Science - Term 2 Week 3 Data
const grade3MathsScienceWeek3 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 2,
        week: 3,
        title: "Time and Calendar",
        description: "Telling time using 24-hour clock, reading analogue clocks, using the Gregorian calendar, and solving time problems"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Telling Time - 24-Hour Clock (Half & Quarter Hour)",
        lessonContent: `
            <p>Welcome to our week on Time and Calendar! Today we'll learn how to tell time using the 24-hour clock.</p>
            <p><strong>Key Question:</strong> How do we tell time at half past and quarter past the hour using the 24-hour clock?</p>
            <p><strong>Introduction:</strong> The 24-hour clock is used by the military, airlines, hospitals, and many countries around the world. It helps avoid confusion between morning and afternoon times.</p>
            <p><strong>Understanding the 24-Hour Clock:</strong></p>
            <ul>
                <li>Hours run from 00:00 (midnight) to 23:59 (one minute before midnight)</li>
                <li>No need to write "am" or "pm" - the number tells you if it's morning or afternoon</li>
                <li><strong>Morning times (12:00 am to 11:59 am):</strong> Written as 00:00 to 11:59</li>
                <li><strong>Afternoon/Evening times (12:00 pm to 11:59 pm):</strong> Add 12 to the hour (1:00 pm = 13:00)</li>
            </ul>
            <p><strong>Telling Half and Quarter Hours in 24-Hour Time:</strong></p>
            <ul>
                <li><strong>Half past:</strong> :30 (e.g., 8:30 am = 08:30, 2:30 pm = 14:30)</li>
                <li><strong>Quarter past:</strong> :15 (e.g., 9:15 am = 09:15, 3:15 pm = 15:15)</li>
                <li><strong>Quarter to:</strong> :45 (e.g., 10:45 am = 10:45, 4:45 pm = 16:45)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Example 1</div>
                <p>What is 2:30 pm in 24-hour time?<br>
                <strong>Answer:</strong> 14:30 (2 + 12 = 14, thirty minutes = :30)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Example 2</div>
                <p>What is 7:15 am in 24-hour time?<br>
                <strong>Answer:</strong> 07:15 (morning times stay the same, just add a 0 before single digits)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Example 3</div>
                <p>What is 16:45 in 12-hour time?<br>
                <strong>Answer:</strong> 4:45 pm (16 - 12 = 4, and it's afternoon)</p>
            </div>
        `,
        taskInstructions: "Convert times between 12-hour and 24-hour clocks, focusing on half and quarter hours.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Converting am Times to 24-Hour Clock</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Convert these times to 24-hour format:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6:30 am → ________</div>
                        <div>b) 9:15 am → ________</div>
                        <div>c) 11:45 am → ________</div>
                        <div>d) 10:30 am → ________</div>
                        <div>e) 8:15 am → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Converting pm Times to 24-Hour Clock</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert these times to 24-hour format (remember: add 12 to the hour for pm times):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 1:30 pm → ________</div>
                        <div>b) 2:15 pm → ________</div>
                        <div>c) 4:45 pm → ________</div>
                        <div>d) 3:30 pm → ________</div>
                        <div>e) 5:15 pm → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Converting from 24-Hour to 12-Hour Clock</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Convert these 24-hour times to 12-hour format (with am or pm):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 08:30 → ________</div>
                        <div>b) 14:15 → ________</div>
                        <div>c) 19:45 → ________</div>
                        <div>d) 22:30 → ________</div>
                        <div>e) 11:15 → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> The school bus arrives at 7:45 am. What is this in 24-hour time?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Dinner is at 18:30. What time is this on a normal clock?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Write down 5 things you do in a day (wake up, eat breakfast, go to school, eat dinner, go to bed). Write each time in both 12-hour and 24-hour format.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Reading the Analogue Clock",
        lessonContent: `
            <p>Today we'll practice reading analogue clocks accurately!</p>
            <p><strong>Key Question:</strong> How do you read the hour and minute hands on an analogue clock?</p>
            <p><strong>Parts of an Analogue Clock:</strong></p>
            <ul>
                <li><strong>Hour hand (short hand):</strong> Shows the hour</li>
                <li><strong>Minute hand (long hand):</strong> Shows the minutes</li>
                <li><strong>Numbers 1-12:</strong> Represent the hours</li>
                <li><strong>60 small tick marks:</strong> Represent the minutes</li>
            </ul>
            <p><strong>How to Read the Time:</strong></p>
            <ol>
                <li>Look at the hour hand (short hand) - this tells you the hour</li>
                <li>Look at the minute hand (long hand) - each number represents 5 minutes</li>
                <li>Count by 5s around the clock: 12=0, 1=5, 2=10, 3=15, 4=20, 5=25, 6=30, 7=35, 8=40, 9=45, 10=50, 11=55</li>
            </ol>
            <p><strong>Special Times to Know:</strong></p>
            <ul>
                <li><strong>Quarter past (:15):</strong> Minute hand on the 3</li>
                <li><strong>Half past (:30):</strong> Minute hand on the 6</li>
                <li><strong>Quarter to (:45):</strong> Minute hand on the 9</li>
                <li><strong>O'clock (:00):</strong> Minute hand on the 12</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Example 1</div>
                <p>When the hour hand is between 3 and 4, and the minute hand is on 6, what time is it?<br>
                <strong>Answer:</strong> 3:30 (half past three)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Example 2</div>
                <p>When the hour hand is just past 7, and the minute hand is on 3, what time is it?<br>
                <strong>Answer:</strong> 7:15 (quarter past seven)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Example 3</div>
                <p>When the hour hand is almost at 5, and the minute hand is on 9, what time is it?<br>
                <strong>Answer:</strong> 4:45 (quarter to five)</p>
            </div>
        `,
        taskInstructions: "Draw clock hands and read analogue clock faces.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read the Clock</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the time shown on each clock (use the template):
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px solid #ccc; border-radius: 50%; position: relative;">
                                <p style="padding-top: 35px;">[Clock with hands at 3:00]</p>
                            </div>
                            <span>Time: ________</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px solid #ccc; border-radius: 50%;">
                                <p style="padding-top: 35px;">[Clock with hands at 7:30]</p>
                            </div>
                            <span>Time: ________</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px solid #ccc; border-radius: 50%;">
                                <p style="padding-top: 35px;">[Clock with hands at 2:15]</p>
                            </div>
                            <span>Time: ________</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Hands</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the hour and minute hands on each clock:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px solid #ccc; border-radius: 50%;"></div>
                            <span>10:30</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px solid #ccc; border-radius: 50%;"></div>
                            <span>4:45</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px solid #ccc; border-radius: 50%;"></div>
                            <span>1:15</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Missing Information</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Time in Words</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Digital Time</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Minute Hand Position</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Quarter past three</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Half past nine</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Quarter to six</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice reading an analogue clock at home. Write down 5 different times you see during the evening (dinner, TV time, bath time, story time, bed time).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Reading and Using the Gregorian Calendar (January - December)",
        lessonContent: `
            <p>Today we'll learn how to read and use the Gregorian calendar!</p>
            <p><strong>Key Question:</strong> How do we find dates, days of the week, and months on a calendar?</p>
            <p><strong>About the Gregorian Calendar:</strong></p>
            <ul>
                <li>Has 12 months: January, February, March, April, May, June, July, August, September, October, November, December</li>
                <li>7 days in a week: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</li>
                <li>Each month has 28, 29, 30, or 31 days</li>
                <li>Used by most countries around the world</li>
            </ul>
            <p><strong>Days in Each Month:</strong></p>
            <ul>
                <li><strong>31 days:</strong> January, March, May, July, August, October, December</li>
                <li><strong>30 days:</strong> April, June, September, November</li>
                <li><strong>28 or 29 days:</strong> February (29 in leap year)</li>
            </ul>
            <p><strong>How to Read a Calendar:</strong></p>
            <ol>
                <li>Find the month at the top</li>
                <li>Find the day of the week (column)</li>
                <li>Find the date number (row)</li>
                <li>You can now find what day of the week any date falls on</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Example 1</div>
                <p>If January 1st is a Monday, what day is January 15th?<br>
                <strong>Answer:</strong> Monday (1st) → 8th (Monday) → 15th (Monday)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Example 2</div>
                <p>How many days are in August?<br>
                <strong>Answer:</strong> 31 days (August is one of the months with 31 days)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Example 3</div>
                <p>What month comes after September?<br>
                <strong>Answer:</strong> October</p>
            </div>
        `,
        taskInstructions: "Read and answer questions about a calendar (January-December).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Month Facts</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Answer these questions about months:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Which month has the fewest days? ________</div>
                        <div>b) Name two months with 30 days: ________ and ________</div>
                        <div>c) Which month comes after July? ________</div>
                        <div>d) Which month comes before April? ________</div>
                        <div>e) How many months have 31 days? ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calendar Reading (Use a 2025 calendar or the one provided by your teacher)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer these questions using a calendar:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What day of the week is your birthday? ________</div>
                        <div>b) How many Sundays are in October? ________</div>
                        <div>c) What is the date of the first Tuesday in March? ________</div>
                        <div>d) How many days are there from June 10th to June 20th? ________</div>
                        <div>e) What month is 3 months after September? ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Calendar Math</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these calendar problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) School starts on September 2nd and ends on December 15th. How many months is that? ________</div>
                        <div>b) If today is Tuesday, what day will it be in 6 days? ________</div>
                        <div>c) Summer vacation is July and August. How many total days is that? ________</div>
                        <div>d) Your cousin's birthday is 2 weeks after May 10th. What is the date? ________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Fill in a blank calendar page for your birthday month. Mark special days (birthdays, holidays, weekends). Bring it to class tomorrow.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Solving Time Problems",
        lessonContent: `
            <p>Today we'll practice solving real-world problems involving time!</p>
            <p><strong>Key Question:</strong> How do we calculate elapsed time and solve time word problems?</p>
            <p><strong>Strategies for Solving Time Problems:</strong></p>
            <ul>
                <li><strong>Count on a clock:</strong> Move the minute hand forward in 5-minute or 15-minute jumps</li>
                <li><strong>Use a number line:</strong> Draw a line and mark the start and end times</li>
                <li><strong>Break it down:</strong> Count hours first, then minutes</li>
                <li><strong>Use subtraction:</strong> End time minus start time = elapsed time</li>
            </ul>
            <p><strong>Types of Time Problems:</strong></p>
            <ol>
                <li><strong>Finding elapsed time:</strong> How much time has passed?</li>
                <li><strong>Finding end time:</strong> If an activity starts at a certain time and lasts for a duration, when does it end?</li>
                <li><strong>Finding start time:</strong> If an activity ends at a certain time and lasted for a duration, when did it start?</li>
                <li><strong>Comparing times:</strong> Which is longer/shorter?</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half"></i> Example 1: Elapsed Time</div>
                <p>Math class starts at 9:15 and ends at 10:00. How long is math class?<br>
                <strong>Answer:</strong> 45 minutes (from 9:15 to 9:45 is 30 minutes, to 10:00 is 15 more minutes = 45 minutes total)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-start"></i> Example 2: Finding End Time</div>
                <p>Lunch starts at 12:30 and lasts 30 minutes. What time does lunch end?<br>
                <strong>Answer:</strong> 1:00 pm (12:30 + 30 minutes = 1:00)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-end"></i> Example 3: Finding Start Time</div>
                <p>A movie ends at 8:45 pm and lasted 1 hour and 30 minutes. What time did it start?<br>
                <strong>Answer:</strong> 7:15 pm (8:45 - 1 hour = 7:45; 7:45 - 30 minutes = 7:15)</p>
            </div>
        `,
        taskInstructions: "Solve word problems involving elapsed time, start time, and end time.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Elapsed Time</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> How much time has passed?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) From 2:00 to 3:30 → ________</div>
                        <div>b) From 8:15 to 9:45 → ________</div>
                        <div>c) From 11:30 to 12:15 → ________</div>
                        <div>d) From 4:45 to 5:30 → ________</div>
                        <div>e) From 10:00 to 11:45 → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the End Time</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What time does it end?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Start: 9:00 am, Duration: 45 minutes → ________</div>
                        <div>b) Start: 1:15 pm, Duration: 30 minutes → ________</div>
                        <div>c) Start: 3:30 pm, Duration: 1 hour → ________</div>
                        <div>d) Start: 10:45 am, Duration: 20 minutes → ________</div>
                        <div>e) Start: 7:00 pm, Duration: 1 hour 15 minutes → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Start Time</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What time did it start?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) End: 10:30 am, Duration: 30 minutes → ________</div>
                        <div>b) End: 2:15 pm, Duration: 45 minutes → ________</div>
                        <div>c) End: 12:00 pm, Duration: 1 hour → ________</div>
                        <div>d) End: 4:45 pm, Duration: 20 minutes → ________</div>
                        <div>e) End: 8:00 pm, Duration: 1 hour 30 minutes → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sam starts his homework at 4:15 pm and finishes at 5:00 pm. How long does he spend on homework?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Soccer practice starts at 3:30 pm and lasts 1 hour and 15 minutes. What time does practice end?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A train arrives at 11:45 am. The journey took 2 hours. What time did the train leave?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create 3 word problems about time for a friend to solve. Include the answers on the back.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Quiz: Time and Calendar",
        lessonContent: `
            <p>Today we will review everything we learned this week and take a quiz on Time and Calendar!</p>
            <p><strong>Week 5 Review:</strong></p>
            <ul>
                <li><strong>Monday:</strong> 24-hour clock (half and quarter hours)</li>
                <li><strong>Tuesday:</strong> Reading analogue clocks</li>
                <li><strong>Wednesday:</strong> Reading and using the Gregorian calendar</li>
                <li><strong>Thursday:</strong> Solving time problems (elapsed time, start time, end time)</li>
            </ul>
            <p><strong>Key Facts to Remember:</strong></p>
            <ul>
                <li>60 minutes = 1 hour</li>
                <li>24 hours = 1 day</li>
                <li>7 days = 1 week</li>
                <li>12 months = 1 year</li>
                <li>Months with 31 days: January, March, May, July, August, October, December</li>
                <li>Months with 30 days: April, June, September, November</li>
                <li>February has 28 days (29 in leap year)</li>
                <li>To convert pm to 24-hour: add 12 to the hour</li>
            </ul>
            <p><strong>Quiz Instructions:</strong> Answer all questions. Show your work for word problems. You have 30 minutes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Quiz Format Example</div>
                <p>The quiz will have:<br>
                • Multiple choice questions about calendar facts<br>
                • Clock reading questions (analogue and 24-hour)<br>
                • Time conversion problems<br>
                • Word problems about elapsed time</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Reminder</div>
                <p>Read each question carefully. Use the clock or calendar if you need help. You can do this!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Show Your Work</div>
                <p>For word problems, write down how you solved it. Drawing a number line or clock can help!</p>
            </div>
        `,
        taskInstructions: "Complete the quiz on Time and Calendar.",
        taskContent: `
            <div class="content-box">
                <p style="text-align: center; font-size: 1.2em; font-weight: bold;">📝 QUIZ: Time and Calendar 📝</p>
                <p style="text-align: center;">Name: ___________________________ Date: ___________</p>
                <p style="text-align: center;">Total points: 25 &nbsp;&nbsp; Time limit: 30 minutes</p>
            </div>
            
            <div class="content-box">
                <p><strong>Section A: Multiple Choice (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> How many days are in September?
                    <div style="margin-left: 20px;">
                        <div>a) 28 &nbsp;&nbsp; b) 29 &nbsp;&nbsp; c) 30 &nbsp;&nbsp; d) 31</div>
                        <div>Answer: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What is 3:30 pm in 24-hour time?
                    <div style="margin-left: 20px;">
                        <div>a) 03:30 &nbsp;&nbsp; b) 13:30 &nbsp;&nbsp; c) 15:30 &nbsp;&nbsp; d) 33:30</div>
                        <div>Answer: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> When the minute hand is on 6, what time is it?
                    <div style="margin-left: 20px;">
                        <div>a) Quarter past &nbsp;&nbsp; b) Quarter to &nbsp;&nbsp; c) Half past &nbsp;&nbsp; d) O'clock</div>
                        <div>Answer: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which month comes after March?
                    <div style="margin-left: 20px;">
                        <div>a) February &nbsp;&nbsp; b) April &nbsp;&nbsp; c) May &nbsp;&nbsp; d) June</div>
                        <div>Answer: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> From 8:00 to 9:30, how much time has passed?
                    <div style="margin-left: 20px;">
                        <div>a) 30 minutes &nbsp;&nbsp; b) 1 hour &nbsp;&nbsp; c) 1 hour 30 minutes &nbsp;&nbsp; d) 2 hours</div>
                        <div>Answer: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section B: Convert these times (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 7:15 am → 24-hour format: _________
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 2:45 pm → 24-hour format: _________
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 10:30 am → 24-hour format: _________
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 20:15 → 12-hour format: _________
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 14:30 → 12-hour format: _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section C: Calendar Questions (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> How many months have 30 days? _________
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> Which month has 28 or 29 days? _________
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> How many days are in May? _________
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> If January 1st is a Monday, what day is January 8th? _________
                </div>
                <div class="task-item">
                    <span class="task-number">15</span> Name the month that comes between August and October: _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section D: Word Problems (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">16</span> Art class starts at 10:15 am and ends at 11:00 am. How long is art class? (2 points)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">17</span> Maria goes to bed at 8:30 pm and sleeps for 9 hours. What time does she wake up? (2 points)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">18</span> A basketball game starts at 4:45 pm and lasts 1 hour and 30 minutes. What time does the game end? (2 points)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">19</span> A bus leaves the station at 09:15 and arrives at 11:45. How long is the bus ride? (2 points)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">20</span> Emma starts reading at 7:30 pm. She reads for 45 minutes. What time does she finish? (2 points)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p style="text-align: center; color: #4A90E2;">✨ End of Quiz ✨</p>
                <p style="text-align: center;">Check your work before submitting!</p>
            </div>
        `,
        homework: "No homework this weekend! Enjoy your break and practice telling time on any clock you see.",
        homeworkDue: "Monday (next week)"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek3);
    console.log("grade3-maths-science-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek3);
    console.log("grade3-maths-science-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek3',
        metadata: grade3MathsScienceWeek3.metadata,
        days: grade3MathsScienceWeek3
    });
    console.log("grade3-maths-science-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek3 = grade3MathsScienceWeek3;
console.log("grade3-maths-science-week3.js loaded and registered successfully");