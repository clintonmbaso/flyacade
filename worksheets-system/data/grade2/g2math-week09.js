// Grade 2 Math - Week 9 Data
const grade2MathWeek9 = {
    metadata: {
        grade: 2,
        subject: "Mathematics",
        week: 9,
        title: "Time Concepts",
        description: "AM/PM, elapsed time, and digital clocks"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Time Concepts",
        subtopic: "AM and PM",
        lessonContent: `
            <p>Today we will learn about AM and PM. These help us tell if something happens in the morning or afternoon/evening!</p>
            <p><strong>Key Concept:</strong> AM stands for "ante meridiem" and means before noon (morning). PM stands for "post meridiem" and means after noon (afternoon/evening).</p>
            <p><strong>Remember:</strong> Midnight to noon is AM. Noon to midnight is PM.</p>
            <p>When we write times, we use AM or PM to make it clear when something happens.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Morning activities</div>
                <p><strong>7:00 AM:</strong> Waking up, eating breakfast, going to school</p>
                <p><strong>10:30 AM:</strong> Morning math lesson, recess</p>
                <p>These happen in the AM because they are before noon!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Afternoon activities</div>
                <p><strong>1:00 PM:</strong> Lunch time, afternoon classes</p>
                <p><strong>4:30 PM:</strong> Going home, playing outside</p>
                <p>These happen in the PM because they are after noon!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Evening activities</div>
                <p><strong>7:00 PM:</strong> Dinner time, homework</p>
                <p><strong>8:30 PM:</strong> Reading before bed</p>
                <p>These also happen in the PM!</p>
            </div>
        `,
        taskInstructions: "Label each activity with AM or PM. Think about when you usually do these things!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Eating breakfast at 7:30 <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Having lunch at 12:15 <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Going to bed at 8:45 <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Morning recess at 10:00 <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Watching a movie at 6:30 <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Draw your morning routine (AM activities):
                <div class="drawing-area"></div>
            </div>
        `,
        homework: "Keep a schedule of your day. Write down 3 AM activities and 3 PM activities.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Time Concepts",
        subtopic: "Elapsed Time",
        lessonContent: `
            <p>Today we will learn about elapsed time - how much time has passed between two times.</p>
            <p><strong>Key Concept:</strong> Elapsed time is the amount of time that passes from the start of an activity to the end.</p>
            <p><strong>Strategy:</strong> To find elapsed time, count forward from the start time to the end time. You can use a number line, a clock, or count in your head!</p>
            <p><strong>Remember:</strong> When counting time, think about hours and minutes separately.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Simple elapsed time</div>
                <p><strong>Start:</strong> 2:00 PM</p>
                <p><strong>End:</strong> 4:00 PM</p>
                <p>Count from 2:00 to 4:00: 2:00 → 3:00 → 4:00</p>
                <p><strong>Elapsed time:</strong> 2 hours</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: With minutes</div>
                <p><strong>Start:</strong> 3:30 PM</p>
                <p><strong>End:</strong> 4:15 PM</p>
                <p>From 3:30 to 4:00 is 30 minutes</p>
                <p>From 4:00 to 4:15 is 15 minutes</p>
                <p><strong>Elapsed time:</strong> 45 minutes total</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Across the hour</div>
                <p><strong>Start:</strong> 11:45 AM</p>
                <p><strong>End:</strong> 12:30 PM</p>
                <p>From 11:45 to 12:00 is 15 minutes</p>
                <p>From 12:00 to 12:30 is 30 minutes</p>
                <p><strong>Elapsed time:</strong> 45 minutes total</p>
            </div>
        `,
        taskInstructions: "Find the elapsed time for each problem. Use a clock or draw a timeline to help!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Start: 9:00 AM, End: 10:00 AM → Elapsed time: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Start: 1:30 PM, End: 2:15 PM → Elapsed time: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Start: 4:00 PM, End: 5:30 PM → Elapsed time: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Start: 8:45 AM, End: 9:30 AM → Elapsed time: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Math class starts at 10:15 AM and ends at 11:00 AM. How long is math class? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Draw a timeline showing from 3:00 PM to 4:30 PM:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Time yourself doing 3 activities at home. Record start time, end time, and elapsed time.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Time Concepts", 
        subtopic: "Digital Clocks",
        lessonContent: `
            <p>Today we will learn about digital clocks and how to read them. Digital clocks show time with numbers!</p>
            <p><strong>Key Concept:</strong> Digital clocks display time in numbers, usually with a colon (:) separating hours and minutes.</p>
            <p><strong>Comparison:</strong> Analog clocks have hands that move around a circle. Digital clocks show numbers directly.</p>
            <p><strong>Reading digital clocks:</strong> The number before the colon is the hour. The number after the colon is the minutes.</p>
            <p>Example: 3:45 means 3 hours and 45 minutes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Reading digital time</div>
                <p><strong>Digital:</strong> 8:15</p>
                <p><strong>Read as:</strong> "Eight fifteen" or "Quarter past eight"</p>
                <p><strong>On analog clock:</strong> Hour hand between 8 and 9, minute hand on 3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Digital with AM/PM</div>
                <p><strong>Digital:</strong> 2:30 PM</p>
                <p><strong>Read as:</strong> "Two thirty in the afternoon"</p>
                <p><strong>On analog clock:</strong> Hour hand between 2 and 3, minute hand on 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Midnight and noon</div>
                <p><strong>12:00 AM:</strong> Midnight (start of day)</p>
                <p><strong>12:00 PM:</strong> Noon (middle of day)</p>
                <p>These look the same on digital clocks, so AM/PM is very important!</p>
            </div>
        `,
        taskInstructions: "Read the digital times and answer the questions. Try to imagine what the analog clock would look like!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> The digital clock shows 9:20 AM. What time is it? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> A movie starts at 7:15 PM. Draw where the hands would be on an analog clock:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Match the digital times to the analog clocks:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Your favorite TV show is at 4:45 PM. Write this in words: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Find 3 digital clocks in your classroom or home. Write down what they say:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Find 5 digital clocks at home or in stores. Write down the times they show and whether it's AM or PM.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Time Review", 
        subtopic: "Mixed practice",
        lessonContent: `
            <p>Let's review everything we've learned about time this week. You're becoming a time expert!</p>
            <p>We learned about AM/PM, elapsed time, and digital clocks. Today we'll practice all these skills together.</p>
            <p><strong>Important reminder:</strong> Always check if a time is AM or PM. 8:00 AM is very different from 8:00 PM!</p>
            <p><strong>Tip:</strong> When finding elapsed time, draw a timeline or use a clock to help you count.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Complete time problem</div>
                <p><strong>Problem:</strong> School starts at 8:30 AM. Recess is at 10:15 AM. How long from start to recess?</p>
                <p><strong>Step 1:</strong> Both times are AM</p>
                <p><strong>Step 2:</strong> Find elapsed time: 8:30 → 9:00 = 30 min, 9:00 → 10:00 = 1 hour, 10:00 → 10:15 = 15 min</p>
                <p><strong>Step 3:</strong> Total: 1 hour 45 minutes</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Digital to analog</div>
                <p><strong>Digital:</strong> 5:45 PM</p>
                <p><strong>Analog:</strong> Hour hand between 5 and 6, minute hand on 9</p>
                <p><strong>In words:</strong> "Quarter to six in the evening"</p>
            </div>
        `,
        taskInstructions: "Complete all the problems below. Use everything you've learned this week!",
        taskContent: `
            <div class="content-box">
                <p><strong>AM/PM Practice:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Label: Breakfast at 7:45 <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Label: Soccer practice at 5:30 <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Elapsed Time:</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Start: 2:00 PM, End: 3:45 PM → Elapsed: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Reading time: 6:20 PM to 7:05 PM → How long? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Digital Clocks:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write 25 minutes past 9 in the morning digitally: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw an analog clock showing 11:10 AM:
                    <div class="drawing-area"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge Problem:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> You wake up at 7:00 AM. School starts at 8:30 AM. How much time do you have to get ready? <span class="answer-space"></span>
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a schedule for your ideal Saturday. Include 5 activities with times (AM/PM) and how long each lasts.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Time Concepts Week 9",
        revisionContent: `
            <p>Congratulations! You've completed Week 9 of Time Concepts. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> AM (morning) and PM (afternoon/evening)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to tell if activities happen in AM or PM</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Elapsed time - how much time passes</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to read digital clocks</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Comparing digital and analog clocks</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Time Vocabulary:</strong></p>
                <p><strong>AM:</strong> Morning (midnight to noon)</p>
                <p><strong>PM:</strong> Afternoon/evening (noon to midnight)</p>
                <p><strong>Elapsed Time:</strong> The amount of time that passes from start to end</p>
                <p><strong>Digital Clock:</strong> Shows time with numbers (example: 3:45)</p>
                <p><strong>Analog Clock:</strong> Shows time with moving hands on a circle</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Label: Morning exercise at 6:45 <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Start: 9:15 AM, End: 10:05 AM → Elapsed: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write digitally: Half past two in the afternoon <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a digital clock showing 8:20 PM:
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most interesting thing you learned about time this week?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Create a word problem about elapsed time:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Keep a time log for 3 hours. Write down what you do and what time it is (with AM/PM).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathWeek9);
    console.log("math-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathWeek9);
    console.log("math-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathWeek9',
        metadata: grade2MathWeek9.metadata,
        days: grade2MathWeek9
    });
    console.log("math-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathWeek9 = grade2MathWeek9;
console.log("math-week9.js loaded and registered successfully");