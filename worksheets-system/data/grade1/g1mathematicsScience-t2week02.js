// Grade 1 Mathematics & Science - Term 2 Week 2 Data
const grade1MathsScienceWeek2 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 2,
        week: 2,
        title: "Understanding Time",
        description: "Exploring time concepts including daily routines, days of the week, weeks in a month, months in a year, and applying time measures in school routines"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Understanding Time",
        subtopic: "Times of the Day (Morning, Afternoon, Evening)",
        lessonContent: `
            <p>Welcome to our time adventure! Today we'll learn about different times of the day and the activities we do during each time.</p>
            <p><strong>Key Question:</strong> What do you do in the morning? In the afternoon? In the evening?</p>
            <p><strong>Introduction:</strong> Our day is divided into different parts. Each part has special activities we do!</p>
            <p><strong>The Three Main Times of the Day:</strong></p>
            <ol>
                <li><strong>Morning:</strong> From sunrise to noon (about 6:00 AM to 12:00 PM)
                    <ul>
                        <li>Waking up</li>
                        <li>Eating breakfast</li>
                        <li>Going to school</li>
                        <li>Learning in class</li>
                    </ul>
                </li>
                <li><strong>Afternoon:</strong> From noon to sunset (about 12:00 PM to 6:00 PM)
                    <ul>
                        <li>Eating lunch</li>
                        <li>Playing outside</li>
                        <li>Doing homework</li>
                        <li>Finishing school</li>
                    </ul>
                </li>
                <li><strong>Evening:</strong> From sunset to bedtime (about 6:00 PM to bedtime)
                    <ul>
                        <li>Eating dinner</li>
                        <li>Spending time with family</li>
                        <li>Taking a bath</li>
                        <li>Reading bedtime stories</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Fun Fact:</strong> The sun comes up in the <strong>morning</strong> and goes down in the <strong>evening</strong>!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Morning Sun</div>
                <p>When you wake up and see the sun shining through your window, that means it's MORNING time! Time to get ready for school.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Meal Times</div>
                <p>We eat breakfast in the MORNING, lunch in the AFTERNOON, and dinner in the EVENING. Can you remember what you ate for each meal yesterday?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Good Night</div>
                <p>When the moon comes out and it gets dark outside, that means it's EVENING time - almost time for bed!</p>
            </div>
        `,
        taskInstructions: "Sort activities by time of day and draw your daily routine.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Activities</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each activity to the correct time of day:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Eating breakfast</div>
                                <div>• Brushing teeth before bed</div>
                                <div>• Eating lunch at school</div>
                                <div>• Waking up</div>
                                <div>• Playing after school</div>
                                <div>• Reading a bedtime story</div>
                            </div>
                            <div>
                                <div>→ Morning</div>
                                <div>→ Morning</div>
                                <div>→ Afternoon</div>
                                <div>→ Morning</div>
                                <div>→ Afternoon</div>
                                <div>→ Evening</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Day</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one thing you do in the MORNING:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one thing you do in the AFTERNOON:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw one thing you do in the EVENING:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Finish these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. I eat breakfast in the _________.</div>
                        <div>B. The sun shines in the _________.</div>
                        <div>C. I go to bed in the _________.</div>
                        <div>D. I eat lunch at school in the _________.</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "With a family member, talk about what your family does in the morning, afternoon, and evening. Draw one picture for each time.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Understanding Time",
        subtopic: "Days of the Week",
        lessonContent: `
            <p>Today we'll learn about the seven days of the week and the activities we do on each day!</p>
            <p><strong>Key Question:</strong> What day comes after Monday? What do you do on Saturdays?</p>
            <p><strong>The Seven Days of the Week:</strong></p>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; text-align: center; margin: 15px 0;">
                <div style="background: #4A90E2; color: white; padding: 10px; border-radius: 5px;">Monday</div>
                <div style="background: #4A90E2; color: white; padding: 10px; border-radius: 5px;">Tuesday</div>
                <div style="background: #4A90E2; color: white; padding: 10px; border-radius: 5px;">Wednesday</div>
                <div style="background: #4A90E2; color: white; padding: 10px; border-radius: 5px;">Thursday</div>
                <div style="background: #4A90E2; color: white; padding: 10px; border-radius: 5px;">Friday</div>
                <div style="background: #2ECC71; color: white; padding: 10px; border-radius: 5px;">Saturday</div>
                <div style="background: #2ECC71; color: white; padding: 10px; border-radius: 5px;">Sunday</div>
            </div>
            <p><strong>School Days vs. Weekend Days:</strong></p>
            <ul>
                <li><strong>School Days:</strong> Monday, Tuesday, Wednesday, Thursday, Friday
                    <ul>
                        <li>We go to school</li>
                        <li>We learn and play with friends</li>
                        <li>We do homework</li>
                    </ul>
                </li>
                <li><strong>Weekend Days:</strong> Saturday and Sunday
                    <ul>
                        <li>No school!</li>
                        <li>We can play, visit family, or rest</li>
                        <li>We might go to the park or watch movies</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Remember:</strong> A week has 7 days! After Sunday, we start again with Monday.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Yesterday, Today, Tomorrow</div>
                <p>If today is Tuesday, then yesterday was Monday and tomorrow will be Wednesday! Days always come in order.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> School Schedule</div>
                <p>We have Mathematics on Monday and Wednesday. We have Science on Tuesday and Thursday. We have Art on Friday!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Weekend Fun</div>
                <p>On Saturday, my family goes to the market. On Sunday, we go to church and then have a big lunch together!</p>
            </div>
        `,
        taskInstructions: "Order the days of the week and match activities to specific days.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Order the Days</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the missing days of the week in order:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 5px; flex-wrap: wrap;">
                        <div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">Monday</div>
                        <div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">_________</div>
                        <div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">_________</div>
                        <div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">_________</div>
                        <div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">Friday</div>
                        <div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">_________</div>
                        <div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">_________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: School Day or Weekend Day?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle "School Day" or "Weekend Day" for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Wednesday → School Day / Weekend Day</div>
                        <div>B. Saturday → School Day / Weekend Day</div>
                        <div>C. Monday → School Day / Weekend Day</div>
                        <div>D. Sunday → School Day / Weekend Day</div>
                        <div>E. Friday → School Day / Weekend Day</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Week Activities</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw or write one thing you do on each day:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Monday:</strong>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Tuesday:</strong>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Wednesday:</strong>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Thursday:</strong>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Friday:</strong>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Weekend:</strong>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Answer the Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What day comes after Thursday?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What day comes before Saturday?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Look at a calendar at home. Point to each day and say its name. Tell a family member what you do on each school day.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Understanding Time",
        subtopic: "Weeks in a Month and Months in a Year",
        lessonContent: `
            <p>Today we'll learn about bigger chunks of time - weeks and months!</p>
            <p><strong>Key Question:</strong> How many weeks are in one month? How many months are in one year?</p>
            <p><strong>Weeks in a Month:</strong></p>
            <ul>
                <li>One week = 7 days</li>
                <li>Most months have about <strong>4 weeks</strong></li>
                <li>Some months have 4 weeks and a few extra days</li>
                <li>Example: January has 31 days = 4 weeks + 3 extra days</li>
            </ul>
            <p><strong>The 12 Months of the Year:</strong></p>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin: 15px 0; text-align: center;">
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">January</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">February</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">March</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">April</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">May</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">June</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">July</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">August</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">September</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">October</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">November</div>
                <div style="background: #3498DB; color: white; padding: 8px; border-radius: 5px;">December</div>
            </div>
            <p><strong>Months in a Year:</strong></p>
            <ul>
                <li>One year = <strong>12 months</strong></li>
                <li>One year = <strong>52 weeks</strong> (approximately)</li>
                <li>One year = <strong>365 days</strong></li>
            </ul>
            <p><strong>Seasons and Months:</strong></p>
            <ul>
                <li>Some months are hot (summer)</li>
                <li>Some months are cold (winter)</li>
                <li>Some months have rain (rainy season)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cake-candles"></i> Birthday Months</div>
                <p>If your birthday is in May, you have to wait 12 months until your next birthday! That's one whole year.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-week"></i> Counting Weeks</div>
                <p>A month has about 4 weeks. That means you have 4 Mondays, 4 Tuesdays, 4 Wednesdays... in most months!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Harvest Time</div>
                <p>Farmers know that some crops grow in certain months. Maize might be planted in November and harvested in May - about 6 months later!</p>
            </div>
        `,
        taskInstructions: "Count weeks in a month and order the months of the year.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Months of the Year Song</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the 12 months in order (sing the song to help you!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. January</div>
                        <div>2. _________</div>
                        <div>3. _________</div>
                        <div>4. _________</div>
                        <div>5. _________</div>
                        <div>6. _________</div>
                        <div>7. _________</div>
                        <div>8. _________</div>
                        <div>9. _________</div>
                        <div>10. _________</div>
                        <div>11. _________</div>
                        <div>12. _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Weeks in a Month</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at a calendar for this month. Count how many weeks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>This month is: _________</div>
                        <div>Number of days in this month: _________</div>
                        <div>Number of full weeks (circles you can make): _________</div>
                        <div>Extra days: _________</div>
                    </div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. One week has _________ days.</div>
                        <div>B. One month has about _________ weeks.</div>
                        <div>C. One year has _________ months.</div>
                        <div>D. One year has about _________ days.</div>
                        <div>E. The month after October is _________.</div>
                        <div>F. The month before March is _________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Year</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw something special that happens in each season or month:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>January</strong>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>April</strong>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>August</strong>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>December</strong>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "With your family, look at a calendar. Find which month has your birthday. Count how many months until your next birthday.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Understanding Time",
        subtopic: "Using Measures of Time in School Routines",
        lessonContent: `
            <p>Today we'll use everything we've learned about time in our actual school day!</p>
            <p><strong>Key Question:</strong> What time do we do different activities at school?</p>
            <p><strong>Our School Day Timetable:</strong></p>
            <ul>
                <li><strong>Morning (8:00 AM - 12:00 PM):</strong> Lessons and learning</li>
                <li><strong>Break Time (10:00 AM - 10:30 AM):</strong> Snack and play</li>
                <li><strong>Lunch Time (12:00 PM - 1:00 PM):</strong> Eating lunch and resting</li>
                <li><strong>Afternoon (1:00 PM - 3:00 PM):</strong> More lessons or activities</li>
                <li><strong>Home Time (3:00 PM):</strong> Going home</li>
            </ul>
            <p><strong>Time Words We Use Every Day:</strong></p>
            <ul>
                <li><strong>Yesterday:</strong> The day before today</li>
                <li><strong>Today:</strong> This day right now</li>
                <li><strong>Tomorrow:</strong> The day after today</li>
                <li><strong>Now:</strong> This very moment</li>
                <li><strong>Later:</strong> After now</li>
                <li><strong>Soon:</strong> In a little while</li>
            </ul>
            <p><strong>Morning vs. Afternoon at School:</strong></p>
            <ul>
                <li>In the MORNING, we are fresh and ready to learn new things</li>
                <li>In the AFTERNOON, we might do art, music, or physical education</li>
                <li>Some days we have different subjects on different days of the week!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> School Bell</div>
                <p>The school bell rings at 8:00 AM to start the day. It rings again at 10:00 AM for break time. The bell helps us know when activities begin and end!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Subject Schedule</div>
                <p>On Monday morning we have Mathematics. On Tuesday morning we have Science. Different days have different subjects at different times!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half"></i> How Long?</div>
                <p>Mathematics lesson lasts about 45 minutes. Break time lasts 30 minutes. The whole school day lasts about 7 hours from morning to home time!</p>
            </div>
        `,
        taskInstructions: "Create a school day timeline and answer time-related questions about school routines.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: My School Day Timeline</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw what you do at each time during your school day:
                    <div style="margin-top: 10px;">
                        <div style="display: flex; align-items: center; margin: 8px 0;">
                            <div style="width: 80px;"><strong>Morning</strong></div>
                            <div class="drawing-area" style="flex: 1; height: 50px; margin-left: 10px;"></div>
                        </div>
                        <div style="display: flex; align-items: center; margin: 8px 0;">
                            <div style="width: 80px;"><strong>Break Time</strong></div>
                            <div class="drawing-area" style="flex: 1; height: 50px; margin-left: 10px;"></div>
                        </div>
                        <div style="display: flex; align-items: center; margin: 8px 0;">
                            <div style="width: 80px;"><strong>Lunch Time</strong></div>
                            <div class="drawing-area" style="flex: 1; height: 50px; margin-left: 10px;"></div>
                        </div>
                        <div style="display: flex; align-items: center; margin: 8px 0;">
                            <div style="width: 80px;"><strong>Afternoon</strong></div>
                            <div class="drawing-area" style="flex: 1; height: 50px; margin-left: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Schedule Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer these questions about your school routine:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. What subject do you have first in the morning on Monday?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>B. How long is your break time?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>C. What do you eat for lunch at school?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>D. What time do you go home?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Yesterday, Today, Tomorrow</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. If today is Wednesday, yesterday was _________.</div>
                        <div>B. If today is Friday, tomorrow will be _________.</div>
                        <div>C. If today is Monday, the day after tomorrow is _________.</div>
                        <div>D. Yesterday was Tuesday, so today is _________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Tell</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite part of the school day. Write one sentence about what time it happens:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Time Words Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle the correct time word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. We are learning (yesterday / now).</div>
                        <div>B. We will have dinner (soon / yesterday).</div>
                        <div>C. (Tomorrow / Now) we will come to school again.</div>
                        <div>D. We had Mathematics class (today / yesterday morning).</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw a picture of your school day schedule showing what you do in the morning, at break, at lunch, and in the afternoon. Share it with your family.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathsScienceWeek2);
    console.log("grade1-maths-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathsScienceWeek2);
    console.log("grade1-maths-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathsScienceWeek2',
        metadata: grade1MathsScienceWeek2.metadata,
        days: grade1MathsScienceWeek2
    });
    console.log("grade1-maths-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathsScienceWeek2 = grade1MathsScienceWeek2;
console.log("grade1-maths-science-week2.js loaded and registered successfully");