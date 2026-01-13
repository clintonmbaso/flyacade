// Grade 2 Math - Week 7 Data
const grade2MathWeek7 = {
    metadata: {
        grade: 2,
        subject: "Mathematics",
        week: 7,
        title: "Introduction to Telling Time",
        description: "Learning to tell time using analog clocks: hours and half-hours"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Telling Time",
        subtopic: "Clock Basics",
        lessonContent: `
            <p>Today we will begin learning how to tell time! Time helps us know when to do different activities throughout our day.</p>
            <p><strong>Key Concept:</strong> A clock helps us measure time. An analog clock has a round face with numbers and hands.</p>
            <p><strong>Parts of a Clock:</strong></p>
            <ul>
                <li><strong>Clock Face:</strong> The round part with numbers 1-12</li>
                <li><strong>Hour Hand:</strong> The shorter hand that tells us the hour</li>
                <li><strong>Minute Hand:</strong> The longer hand that tells us the minutes</li>
                <li><strong>Numbers:</strong> 1 through 12 around the clock</li>
            </ul>
            <p><strong>Remember:</strong> The hour hand moves slowly from one number to the next. The minute hand moves faster!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Identifying Clock Parts</div>
                <p>Look at a clock. Point to the hour hand (short), minute hand (long), and numbers 1-12.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Numbers on a Clock</div>
                <p>The numbers go in order around the circle: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</p>
                <p>12 is at the top, 6 is at the bottom, 3 is on the right, 9 is on the left.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Hand Movements</div>
                <p>When the minute hand goes all the way around (12 to 12), the hour hand moves to the next number.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities about clock parts. Draw or write your answers.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Label the parts of this clock:
                <div class="drawing-area" style="height: 120px;">
                    [Imagine a clock face here. Label: Hour Hand, Minute Hand, Clock Face, Numbers]
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Circle the hour hand: <span style="color: blue;">SHORT</span> or <span style="color: blue;">LONG</span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the minute hand: <span style="color: blue;">SHORT</span> or <span style="color: blue;">LONG</span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Write the missing numbers on the clock:
                <div class="drawing-area" style="height: 100px;">
                    [Clock with some numbers missing: 12, _, 3, _, 6, _, 9, _, _, _, _]
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw your own clock face with all the numbers in the correct places:
                <div class="drawing-area" style="height: 150px;"></div>
            </div>
        `,
        homework: "Look at different clocks in your home. Draw one and label its parts.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Telling Time",
        subtopic: "Telling Time to the Hour",
        lessonContent: `
            <p>Today we will learn to tell time to the nearest hour! This is the first step in becoming a time expert.</p>
            <p><strong>Rule for O'clock:</strong> When the minute hand points straight up to the 12, we say "o'clock."</p>
            <p><strong>How to Read the Hour:</strong> Look at the hour hand (the short hand). It points to the hour.</p>
            <p><strong>Important:</strong> The hour hand doesn't have to point exactly at the number. If it's between numbers, we look at which number it just passed.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 3 o'clock</div>
                <p>Hour hand points to 3, minute hand points to 12. We say "Three o'clock."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 6 o'clock</div>
                <p>Hour hand points to 6, minute hand points to 12. We say "Six o'clock."</p>
                <p>This is dinner time for many families!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 12 o'clock</div>
                <p>Both hands point to 12! Hour hand on 12, minute hand on 12.</p>
                <p>This can be noon (lunch time) or midnight (sleeping time).</p>
            </div>
        `,
        taskInstructions: "Read each clock and write the time. Remember: minute hand on 12 means 'o'clock'.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> [Clock showing 8:00] = <span class="answer-space"></span> o'clock
            </div>
            <div class="task-item">
                <span class="task-number">2</span> [Clock showing 1:00] = <span class="answer-space"></span> o'clock
            </div>
            <div class="task-item">
                <span class="task-number">3</span> [Clock showing 10:00] = <span class="answer-space"></span> o'clock
            </div>
            <div class="task-item">
                <span class="task-number">4</span> [Clock showing 5:00] = <span class="answer-space"></span> o'clock
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw a clock showing 7 o'clock:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Draw a clock showing 11 o'clock:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Write down three times during your day (like wake-up, lunch, bedtime) and draw clocks showing those times.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Telling Time", 
        subtopic: "Telling Time to the Half-Hour",
        lessonContent: `
            <p>Today we will learn about half-hours! When 30 minutes have passed, we say "thirty" or "half past."</p>
            <p><strong>Rule for Half-Hour:</strong> When the minute hand points straight down to the 6, we have 30 minutes past the hour.</p>
            <p><strong>How to Read Half-Hours:</strong> The minute hand points to 6. The hour hand is halfway between two numbers.</p>
            <p><strong>Important:</strong> We say "half past" the hour. If the hour hand is between 3 and 4, it's "half past 3" or "3:30."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: 3:30 (Half past 3)</div>
                <p>Minute hand points to 6. Hour hand is halfway between 3 and 4.</p>
                <p>We say "Three thirty" or "Half past three."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: 1:30 (Half past 1)</div>
                <p>Minute hand on 6. Hour hand halfway between 1 and 2.</p>
                <p>Many schools have lunch around this time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: 10:30 (Half past 10)</div>
                <p>Minute hand on 6. Hour hand halfway between 10 and 11.</p>
                <p>This might be snack time or recess!</p>
            </div>
        `,
        taskInstructions: "Read each clock and write the time. Remember: minute hand on 6 means 'thirty' or 'half past'.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> [Clock showing 4:30] = <span class="answer-space"></span> or Half past <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> [Clock showing 9:30] = <span class="answer-space"></span> or Half past <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> [Clock showing 12:30] = <span class="answer-space"></span> or Half past <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> [Clock showing 6:30] = <span class="answer-space"></span> or Half past <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw a clock showing 2:30:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Match the times:
                <div style="margin-left: 20px;">
                    <p>A. 7:30 <span style="color: blue;">1. Half past 5</span></p>
                    <p>B. 5:30 <span style="color: blue;">2. Seven thirty</span></p>
                    <p>C. 8:30 <span style="color: blue;">3. Half past 8</span></p>
                </div>
            </div>
        `,
        homework: "Ask family members what they do at different half-hour times. Write down two activities with their times.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Time Practice", 
        subtopic: "Mixed Practice: Hours and Half-Hours",
        lessonContent: `
            <p>Let's practice everything we've learned about telling time this week! You're becoming time-telling experts!</p>
            <p>Today we will practice both hours and half-hours. Remember the rules:</p>
            <ul>
                <li><strong>O'clock:</strong> Minute hand on 12</li>
                <li><strong>Half-hour:</strong> Minute hand on 6, hour hand between numbers</li>
            </ul>
            <p><strong>Tip:</strong> Look at the minute hand first! Is it on 12 or 6? This tells you if it's o'clock or half past.</p>
            <p><strong>Real Life Connection:</strong> We use these times every day for school, meals, activities, and bedtime!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Mixed Practice</div>
                <p>[Clock A showing 2:00] = "Two o'clock" (minute hand on 12)</p>
                <p>[Clock B showing 2:30] = "Two thirty" or "Half past two" (minute hand on 6)</p>
                <p>See how the hour hand moves? At 2:00 it points to 2. At 2:30 it's between 2 and 3.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Daily Schedule</div>
                <p>8:00 - School starts</p>
                <p>12:30 - Lunch time</p>
                <p>3:00 - School ends</p>
                <p>6:30 - Dinner time</p>
                <p>8:00 - Bedtime for many children</p>
            </div>
        `,
        taskInstructions: "Read each clock and write the time correctly. Be careful to check if it's o'clock or half past!",
        taskContent: `
            <div class="content-box">
                <p><strong>Tell the Time:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> [Clock showing 11:00] = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> [Clock showing 3:30] = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> [Clock showing 7:00] = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> [Clock showing 10:30] = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Draw the Time:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw 9 o'clock:
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw half past 4:
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Match the Activity to the Time:</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Connect each activity to its common time:
                    <div style="margin-left: 20px;">
                        <p>Breakfast Time <span style="color: blue;">_____ 7:30 AM</span></p>
                        <p>School Start <span style="color: blue;">_____ 8:00 AM</span></p>
                        <p>Lunch Time <span style="color: blue;">_____ 12:30 PM</span></p>
                        <p>Dinner Time <span style="color: blue;">_____ 6:00 PM</span></p>
                    </div>
                </div>
            </div>
        `,
        homework: "Create your own daily schedule with 5 activities and their times (using o'clock and half past).",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Telling Time Week 7",
        revisionContent: `
            <p>Congratulations! You've completed Week 7 of Telling Time. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Parts of a clock: hour hand, minute hand, clock face</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Telling time to the hour (o'clock)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Telling time to the half-hour (thirty)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Reading analog clocks</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Drawing clock hands to show specific times</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Time Vocabulary:</strong></p>
                <p><strong>Analog Clock:</strong> A clock with hands that move around a circle</p>
                <p><strong>Hour Hand:</strong> The shorter hand that shows the hour</p>
                <p><strong>Minute Hand:</strong> The longer hand that shows the minutes</p>
                <p><strong>O'clock:</strong> When the minute hand is on 12</p>
                <p><strong>Half Past:</strong> When 30 minutes have passed (minute hand on 6)</p>
                <p><strong>AM:</strong> Morning (before noon)</p>
                <p><strong>PM:</strong> Afternoon and evening (after noon)</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What are the two main hands on a clock? <span class="answer-space"></span> hand and <span class="answer-space"></span> hand
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> [Clock showing 5:00] = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> [Clock showing 8:30] = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a clock showing your favorite time of day:
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What time does your school usually start? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> True or False: When it's half past 2, the hour hand points exactly to the 2. <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Complete: 30 minutes past an hour is called <span class="answer-space"></span> past.
                </div>
            </div>
        `,
        homework: "Weekend challenge: Find 5 different clocks in your home or neighborhood. Write down what time they show.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathWeek7);
    console.log("math-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathWeek7);
    console.log("math-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathWeek7',
        metadata: grade2MathWeek7.metadata,
        days: grade2MathWeek7
    });
    console.log("math-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathWeek7 = grade2MathWeek7;
console.log("math-week7.js loaded and registered successfully");