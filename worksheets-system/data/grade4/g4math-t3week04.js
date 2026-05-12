// Grade 4 Mathematics - Term 3 Week 4 Data
const grade4MathematicsWeek4 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 4,
        title: "Mastering Time",
        description: "Converting time units, understanding AM/PM, and calculating elapsed time"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Units of Time (Conversions)",
        lessonContent: `
            <p>Welcome to our week on mastering time! Today we'll learn how to convert between different units of time using the special "Rule of 60".</p>
            <p><strong>Key Question:</strong> How many seconds are in 3 minutes? How many minutes are in 2 hours?</p>
            <p><strong>Introduction:</strong> Time is different from other measurements like length or weight. While many things use base 10 (10 mm in 1 cm), time uses base 60!</p>
            <p><strong>The Rule of 60:</strong></p>
            <ul>
                <li><strong>60 seconds = 1 minute</strong></li>
                <li><strong>60 minutes = 1 hour</strong></li>
                <li><strong>24 hours = 1 day</strong></li>
                <li><strong>7 days = 1 week</strong></li>
            </ul>
            <p><strong>How to Convert:</strong></p>
            <ul>
                <li>To convert from smaller to larger units: <strong>DIVIDE</strong> by 60</li>
                <li>To convert from larger to smaller units: <strong>MULTIPLY</strong> by 60</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> The Stop Watch Challenge</div>
                <p>If a student balances on one leg for 90 seconds, how many minutes is that?</p>
                <p><strong>Solution:</strong> 90 - 60 = 30 seconds remaining. That is <strong>1 minute and 30 seconds</strong>.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-film"></i> Movie Length</div>
                <p>If a movie is 120 minutes long, how many hours is it?</p>
                <p><strong>Solution:</strong> 60 + 60 = 120 minutes, so <strong>2 hours</strong>.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Seconds to Minutes</div>
                <p>180 seconds = ? minutes</p>
                <p><strong>Solution:</strong> 180 ÷ 60 = <strong>3 minutes</strong></p>
            </div>
        `,
        taskInstructions: "Practice converting between seconds, minutes, and hours.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Conversion Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Convert the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 120 seconds = ______ minutes</div>
                        <div>b) 3 minutes = ______ seconds</div>
                        <div>c) 180 minutes = ______ hours</div>
                        <div>d) 2 hours = ______ minutes</div>
                        <div>e) 240 seconds = ______ minutes</div>
                        <div>f) 4 hours = ______ minutes</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Maria watched a cartoon that was 480 seconds long. How many minutes did she watch?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) A basketball game lasted 2 hours. How many minutes is that?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) James ran for 300 seconds. How many minutes and seconds is that?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Question</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If a student holds their breath for 135 seconds, how many minutes and seconds is that? Show your working.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Time yourself doing three different activities (brushing teeth, eating breakfast, walking to school). Record each in seconds, then convert to minutes and seconds.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "The Day Cycle (24 Hours / AM & PM)",
        lessonContent: `
            <p>Today we'll learn about the 24-hour day cycle and how we divide time into AM and PM!</p>
            <p><strong>Key Question:</strong> Why do we have both 7:00 AM and 7:00 PM? How are they different?</p>
            <p><strong>The Earth's Rotation:</strong> The Earth takes 24 hours to spin around once. That's why one full day is 24 hours long. We split this into two 12-hour halves.</p>
            <p><strong>AM (Ante Meridiem):</strong></p>
            <ul>
                <li>Latin for "before midday"</li>
                <li>From Midnight (12:00 AM) to Noon (12:00 PM)</li>
                <li>Morning time: Waking up, breakfast, morning classes</li>
            </ul>
            <p><strong>PM (Post Meridiem):</strong></p>
            <ul>
                <li>Latin for "after midday"</li>
                <li>From Noon (12:00 PM) to Midnight (12:00 AM)</li>
                <li>Afternoon and evening: Lunch, dinner, bedtime</li>
            </ul>
            <p><strong>Important Fact to Remember:</strong> 12:00 PM is lunchtime (NOON). 12:00 AM is sleeping time (MIDNIGHT).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Morning vs. Evening</div>
                <p>7:00 AM = Waking up, eating breakfast, getting ready for school<br>
                7:00 PM = Eating dinner, watching TV, getting ready for bed</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> The 12 O'Clock Trick</div>
                <p>12:00 PM is when the sun is highest in the sky - NOON!<br>
                12:00 AM is the middle of the night - MIDNIGHT!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> School Schedule</div>
                <p>School starts at 8:00 AM (morning) and ends at 3:00 PM (afternoon).<br>
                Lunch time is usually around 12:00 PM (noon!).</p>
            </div>
        `,
        taskInstructions: "Identify whether activities happen in AM or PM, and understand the 24-hour cycle.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: AM or PM?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write AM or PM for each activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Eating breakfast: ______</div>
                        <div>b) Going to bed: ______</div>
                        <div>c) Having lunch at school: ______</div>
                        <div>d) Watching the sunset: ______</div>
                        <div>e) Brushing teeth before school: ______</div>
                        <div>f) Doing homework after dinner: ______</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Human Clock Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a clock face and show where you are at these times:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 7:00 AM (Waking up)</div>
                        <div>• 12:00 PM (Lunch time)</div>
                        <div>• 3:00 PM (School ends)</div>
                        <div>• 7:00 PM (Dinner time)</div>
                        <div>• 12:00 AM (Midnight)</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A full day has ______ hours.</div>
                        <div>b) AM stands for ______ which means "before midday".</div>
                        <div>c) PM stands for ______ which means "after midday".</div>
                        <div>d) 12:00 AM is called ______.</div>
                        <div>e) 12:00 PM is called ______.</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write down 5 things you do in the AM and 5 things you do in the PM. Draw a clock showing one AM activity and one PM activity.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Elapsed Time (Addition)",
        lessonContent: `
            <p>Today we'll learn how to calculate a future time by adding duration to a starting point!</p>
            <p><strong>Key Question:</strong> If school starts at 8:00 AM and we have a 45-minute class, what time does the class end?</p>
            <p><strong>Strategy 1: The T-Chart Method</strong></p>
            <ul>
                <li>Draw a T-chart with "Time" on the left and "Minutes Added" on the right</li>
                <li>Add minutes in groups until you reach the total</li>
            </ul>
            <p><strong>Strategy 2: The Jump Method</strong></p>
            <ul>
                <li>Make jumps on a number line or clock</li>
                <li>First add hours, then add minutes</li>
            </ul>
            <p><strong>Remember:</strong> When minutes add up to 60 or more, convert to hours!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> The Lunch Timer</div>
                <p>Lunch starts at 12:00 and lasts for 45 minutes. When does it end?</p>
                <p><strong>Solution:</strong> Start at 12:00 + 45 minutes = <strong>12:45</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-futbol"></i> Soccer Practice</div>
                <p>Soccer practice starts at 3:30 and lasts 1 hour and 15 minutes. When does it end?</p>
                <p><strong>Solution:</strong> Jump 1 hour → 4:30, then jump 15 minutes → <strong>4:45</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tv"></i> Movie Time</div>
                <p>A movie starts at 2:15 PM and lasts 2 hours and 30 minutes. When does it end?</p>
                <p><strong>Solution:</strong> Jump 2 hours → 4:15, then jump 30 minutes → <strong>4:45 PM</strong></p>
            </div>
        `,
        taskInstructions: "Practice adding time to find end times.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Simple Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the end time for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Start: 9:00 AM + 30 minutes = ______</div>
                        <div>b) Start: 1:15 PM + 20 minutes = ______</div>
                        <div>c) Start: 10:45 AM + 25 minutes = ______</div>
                        <div>d) Start: 2:30 PM + 40 minutes = ______</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Hours and Minutes Together</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the Jump Method to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Start: 8:00 AM + 1 hour 30 minutes = ______</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) Start: 11:15 AM + 2 hours 45 minutes = ______</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) Start: 3:40 PM + 1 hour 50 minutes = ______</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these real-world problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Art class starts at 10:15 AM and lasts 45 minutes. What time does it end?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) A train leaves at 2:20 PM and the journey takes 2 hours and 35 minutes. When does it arrive?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) Sofia starts her homework at 4:05 PM. She works for 1 hour and 55 minutes. What time does she finish?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A birthday party starts at 3:45 PM. It lasts for 2 hours and 40 minutes. What time does the party end? Show your working using the T-chart or Jump Method.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Choose three activities from your day. Record the start time and how long each activity lasts. Calculate when each activity ends.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Elapsed Time (Subtraction / Duration)",
        lessonContent: `
            <p>Today we'll learn how to find the total length of time passed between a start time and an end time!</p>
            <p><strong>Key Question:</strong> If school starts at 8:00 AM and ends at 1:00 PM, how long is the school day?</p>
            <p><strong>Strategy: Mountains, Hills, and Rocks Method</strong></p>
            <ul>
                <li><strong>Mountains:</strong> 1-hour jumps (the big jumps)</li>
                <li><strong>Hills:</strong> 5 or 10-minute jumps (medium jumps)</li>
                <li><strong>Rocks:</strong> 1-minute jumps (small jumps)</li>
            </ul>
            <p><strong>How to Use This Method:</strong></p>
            <ol>
                <li>Start at the start time</li>
                <li>Make "mountain" (1-hour) jumps toward the end time</li>
                <li>Make "hill" (5 or 10-minute) jumps</li>
                <li>Make "rock" (1-minute) jumps to reach exactly the end time</li>
                <li>Add up all the jumps to find the total duration</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> The School Day</div>
                <p><strong>Problem:</strong> School starts at 8:00 AM and ends at 1:00 PM. How long is the day?</p>
                <p><strong>Solution:</strong><br>
                8:00 → 9:00 (1 hour)<br>
                9:00 → 10:00 (2 hours)<br>
                10:00 → 11:00 (3 hours)<br>
                11:00 → 12:00 (4 hours)<br>
                12:00 → 13:00 (5 hours)<br>
                <strong>Total = 5 hours</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> Sleep Duration</div>
                <p><strong>Problem:</strong> If you go to bed at 9:00 PM and wake up at 7:00 AM, how long did you sleep?</p>
                <p><strong>Solution:</strong><br>
                9:00 PM → 12:00 AM (3 hours)<br>
                12:00 AM → 7:00 AM (7 hours)<br>
                <strong>Total = 10 hours</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Practice Time</div>
                <p><strong>Problem:</strong> Music practice started at 3:15 PM and ended at 4:45 PM. How long did practice last?</p>
                <p><strong>Solution:</strong><br>
                3:15 → 4:15 (1 hour)<br>
                4:15 → 4:45 (30 minutes)<br>
                <strong>Total = 1 hour 30 minutes</strong></p>
            </div>
        `,
        taskInstructions: "Calculate durations between start and end times using the Mountains, Hills, and Rocks method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Simple Durations (Same Hour)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find how much time passed:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Start 9:00 AM, End 9:30 AM = ______ minutes</div>
                        <div>b) Start 1:15 PM, End 1:45 PM = ______ minutes</div>
                        <div>c) Start 10:05 AM, End 10:50 AM = ______ minutes</div>
                        <div>d) Start 2:20 PM, End 2:55 PM = ______ minutes</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Durations Crossing Hours</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Calculate the duration:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Start 9:00 AM, End 11:30 AM = ______ hours ______ minutes</div>
                        <div>b) Start 1:30 PM, End 3:15 PM = ______ hours ______ minutes</div>
                        <div>c) Start 10:45 AM, End 2:00 PM = ______ hours ______ minutes</div>
                        <div>d) Start 8:20 AM, End 12:05 PM = ______ hours ______ minutes</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-World Duration Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve using the Mountains, Hills, and Rocks method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Math class starts at 9:15 AM and ends at 10:30 AM. How long is math class?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>b) A family road trip starts at 8:00 AM and ends at 2:30 PM. How long were they driving?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>c) A movie starts at 7:20 PM and ends at 9:50 PM. What is the length of the movie?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>d) Lunch break starts at 12:15 PM and ends at 1:05 PM. How long is lunch?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Calculate the duration of your favorite TV show or how long you slept last night. Show your working:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Track three activities at home (dinner time, TV watching, homework). Record the start and end times, then calculate how long each activity lasted. Use the Mountains, Hills, and Rocks method.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathematicsWeek4);
    console.log("grade4-mathematics-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathematicsWeek4);
    console.log("grade4-mathematics-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathematicsWeek4',
        metadata: grade4MathematicsWeek4.metadata,
        days: grade4MathematicsWeek4
    });
    console.log("grade4-mathematics-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathematicsWeek4 = grade4MathematicsWeek4;
console.log("grade4-mathematics-week4.js loaded and registered successfully");