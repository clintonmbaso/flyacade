// Grade 1 English - Week 8 Data
const grade1EnglishWeek8 = {
    metadata: {
        grade: 1,
        subject: "English",
        week: 8,
        title: "Understanding Time — Days, Months, and Sequencing",
        description: "Learning about parts of the day, days of the week, months of the year, and using time sequencing language"
    },
    
    monday: {
        subject: "English",
        topic: "Parts of the Day",
        subtopic: "Identifying morning, afternoon, and night",
        lessonContent: `
            <p>Welcome to our time adventure! Today we will learn about the different parts of the day and when we do things.</p>
            <p><strong>Key Concept:</strong> Our day is divided into three main parts: Morning, Afternoon, and Night. Each part has special things we do!</p>
            <p><strong>What happens in each part?</strong></p>
            <ul>
                <li><strong>Morning:</strong> When we wake up, eat breakfast, go to school</li>
                <li><strong>Afternoon:</strong> When we eat lunch, play outside, do homework</li>
                <li><strong>Night:</strong> When we eat dinner, take a bath, go to sleep</li>
            </ul>
            <p><strong>Look for clues:</strong></p>
            <ul>
                <li>Morning has sunshine and birds singing</li>
                <li>Afternoon has the sun high in the sky</li>
                <li>Night has the moon and stars</li>
            </ul>
            <p>Let's think about our own daily routines and when we do different activities!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FF9800;"></i> Morning Activities</div>
                <p>"I brush my teeth in the morning." This is something we do when we first wake up!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FFC107;"></i> Afternoon Activities</div>
                <p>"We eat lunch in the afternoon." This is when the sun is high in the sky!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon" style="color: #2196F3;"></i> Night Activities</div>
                <p>"I read a story at night." This is when we see the moon and stars!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities about parts of the day.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the correct part of the day for each activity:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Eat breakfast - MORNING / AFTERNOON / NIGHT</div>
                    <div>☐ Watch the stars - MORNING / AFTERNOON / NIGHT</div>
                    <div>☐ Play outside after school - MORNING / AFTERNOON / NIGHT</div>
                    <div>☐ Wake up - MORNING / AFTERNOON / NIGHT</div>
                    <div>☐ Eat dinner - MORNING / AFTERNOON / NIGHT</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw the sun's path. Draw where the sun would be for each part of the day:
                <div class="drawing-area" style="height: 100px; margin-top: 10px; position: relative;">
                    <div style="position: absolute; left: 10px; top: 40px;">Morning</div>
                    <div style="position: absolute; left: 50%; top: 10px; transform: translateX(-50%);">Afternoon</div>
                    <div style="position: absolute; right: 10px; top: 40px;">Night</div>
                    <div style="position: absolute; left: 10px; top: 60px; width: 80%; height: 2px; background-color: #ccc;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw one thing you do in the morning and one thing you do at night:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; text-align: center;">
                        <div>Morning</div>
                        <div class="drawing-area" style="height: 80px; margin: 5px;"></div>
                    </div>
                    <div style="flex: 1; text-align: center;">
                        <div>Night</div>
                        <div class="drawing-area" style="height: 80px; margin: 5px;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Write a sentence about your favorite part of the day:
                <div class="answer-space" style="height: 40px; margin-top: 10px;">My favorite part of the day is ________________ because ________________</div>
            </div>
        `,
        homework: "Talk to your family about what they do in the morning and at night. Draw a picture of one family member's morning routine.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "The Seven Days of the Week",
        subtopic: "Naming and sequencing days from Sunday to Saturday",
        lessonContent: `
            <p>Today we will learn about the seven days that make a week! They always come in the same order, just like the letters in your name.</p>
            <p><strong>Key Concept:</strong> There are 7 days in a week: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</p>
            <p><strong>Important facts:</strong></p>
            <ul>
                <li>The days always come in the same order</li>
                <li>Sunday is usually the first day of the week</li>
                <li>Saturday and Sunday are often called "the weekend"</li>
                <li>Monday through Friday are often called "school days" or "weekdays"</li>
            </ul>
            <p><strong>Special days:</strong></p>
            <ul>
                <li>Today is ________________ (we'll fill this in together!)</li>
                <li>Yesterday was ________________</li>
                <li>Tomorrow will be ________________</li>
            </ul>
            <p>Let's sing our days of the week song to help us remember!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt" style="color: #4CAF50;"></i> Days in Order</div>
                <p>"Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday" - They always come in this order!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> School Days</div>
                <p>"Monday, Tuesday, Wednesday, Thursday, Friday" - These are usually our school days!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star" style="color: #FFC107;"></i> Weekend Days</div>
                <p>"Saturday and Sunday" - These are weekend days when we might play or spend time with family!</p>
            </div>
        `,
        taskInstructions: "Complete the activities about days of the week.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Days in Order</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the days of the week in order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 100px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 100px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 100px;"></span></div>
                        <div>4. <span class="answer-space" style="width: 100px;"></span></div>
                        <div>5. <span class="answer-space" style="width: 100px;"></span></div>
                        <div>6. <span class="answer-space" style="width: 100px;"></span></div>
                        <div>7. <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Today, Yesterday, Tomorrow</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Today is <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Yesterday was <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Tomorrow will be <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Favorite Day</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of your favorite day of the week. Then complete the sentence:
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My favorite day is ________ because ________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Day Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw lines to match:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex;">
                            <div style="width: 120px;">First day of week</div>
                            <div style="width: 120px;">Saturday</div>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 120px;">Last day of week</div>
                            <div style="width: 120px;">Sunday</div>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 120px;">A school day</div>
                            <div style="width: 120px;">Wednesday</div>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 120px;">A weekend day</div>
                            <div style="width: 120px;">Friday</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask your family members what their favorite day of the week is and why. Draw a small picture showing something you do on that day.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "The Twelve Months of the Year",
        subtopic: "Learning months from January to December",
        lessonContent: `
            <p>Today we will learn about the twelve months that make a whole year! Just like days make a week, months make a year.</p>
            <p><strong>Key Concept:</strong> There are 12 months in a year: January, February, March, April, May, June, July, August, September, October, November, December</p>
            <p><strong>Important facts:</strong></p>
            <ul>
                <li>The months always come in the same order</li>
                <li>January is the first month</li>
                <li>December is the last month</li>
                <li>Some months have special holidays or seasons</li>
                <li>Everyone has a birthday month!</li>
            </ul>
            <p><strong>Special months:</strong></p>
            <ul>
                <li>This month is ________________ (we'll say it together!)</li>
                <li>My birthday month is ________________</li>
                <li>December has Christmas</li>
                <li>July has Independence Day</li>
                <li>October has Halloween</li>
            </ul>
            <p>Let's do our month chant to help us remember all twelve!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-birthday-cake" style="color: #E91E63;"></i> Birthday Months</div>
                <p>"My birthday is in August." - Everyone has a special month when they celebrate their birthday!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snowflake" style="color: #03A9F4;"></i> Winter Months</div>
                <p>"December, January, February" - These are often cold months with snow in some places!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FF9800;"></i> Summer Months</div>
                <p>"June, July, August" - These are often warm months when school is out!</p>
            </div>
        `,
        taskInstructions: "Complete the activities about months of the year.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Month Order</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the months in the correct order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>January / March / February</div>
                        <div>April / June / May</div>
                        <div>July / September / August</div>
                        <div>October / December / November</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Birthday Line-Up</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the months in order. Circle YOUR birthday month:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; margin-left: 20px; margin-top: 10px;">
                        <div>1. January</div>
                        <div>2. February</div>
                        <div>3. March</div>
                        <div>4. April</div>
                        <div>5. May</div>
                        <div>6. June</div>
                        <div>7. July</div>
                        <div>8. August</div>
                        <div>9. September</div>
                        <div>10. October</div>
                        <div>11. November</div>
                        <div>12. December</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Special Months</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of something special in each of these months:
                    <div style="display: flex; flex-wrap: wrap; margin-top: 10px;">
                        <div style="flex: 1; min-width: 100px; text-align: center; margin: 5px;">
                            <div>December</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="flex: 1; min-width: 100px; text-align: center; margin: 5px;">
                            <div>October</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="flex: 1; min-width: 100px; text-align: center; margin: 5px;">
                            <div>July</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="flex: 1; min-width: 100px; text-align: center; margin: 5px;">
                            <div>Your Birthday Month</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Month Chant</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in the missing months in our chant:
                    <div style="margin-left: 20px; margin-top: 10px; font-family: monospace;">
                        <div>January, February, ________________</div>
                        <div>April, May, ________________</div>
                        <div>July, ________________, September</div>
                        <div>________________, November, December</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Current Month</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> This month is: <span class="answer-space" style="width: 100px;"></span>
                    <div style="margin-top: 10px;">Draw something special about this month:</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Make a list of family members' birthdays and their months. Draw a small cake next to each month on a calendar.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Time Language and Sequencing",
        subtopic: "Using before, after, next, then to talk about time",
        lessonContent: `
            <p>Today we will learn special words that help us talk about when things happen! These words connect our days and months like a story.</p>
            <p><strong>Key Concept:</strong> We use special words to show the order of time: before, after, next, then</p>
            <p><strong>What do these words mean?</strong></p>
            <ul>
                <li><strong>Before:</strong> Something that happens earlier</li>
                <li><strong>After:</strong> Something that happens later</li>
                <li><strong>Next:</strong> The one that comes right after</li>
                <li><strong>Then:</strong> What happens following something else</li>
            </ul>
            <p><strong>Time is like a story:</strong></p>
            <ol>
                <li>First, we wake up in the morning</li>
                <li><strong>Then</strong> we eat breakfast</li>
                <li><strong>After</strong> breakfast, we brush our teeth</li>
                <li><strong>Next</strong>, we go to school</li>
            </ol>
            <p>Let's practice using these special time words together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-left" style="color: #2196F3;"></i> Before</div>
                <p>"<strong>Before</strong> Tuesday comes Monday." Monday happens earlier than Tuesday!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right" style="color: #4CAF50;"></i> After</div>
                <p>"<strong>After</strong> February comes March." March happens later than February!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-forward" style="color: #FF9800;"></i> Next and Then</div>
                <p>"First I wake up, <strong>then</strong> I get dressed. <strong>Next</strong>, I eat breakfast." These words show the order of my morning!</p>
            </div>
        `,
        taskInstructions: "Complete the activities using time sequencing words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: What Comes Next?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What comes after Monday? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>What comes before December? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>What comes after afternoon? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>What comes before January? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Builders</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete these sentences using: before, after, next, or then
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>________ Tuesday comes Monday.</div>
                        <div>________ February is March.</div>
                        <div>I eat dinner, ________ I take a bath.</div>
                        <div>First I do homework, ________ I play outside.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Daily Sequence</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw and write about your morning routine in order:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div>First:</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px; font-size: 12px;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Then:</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px; font-size: 12px;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Next:</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px; font-size: 12px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Time Simon Says</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Follow the directions (circle the correct action):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>If Saturday comes after Friday, circle the smiley: ☺ ☹</div>
                        <div>If morning comes before afternoon, circle the sun: ☼ ☆</div>
                        <div>If January comes before February, circle YES: YES NO</div>
                        <div>If night comes after afternoon, draw a moon here: <span style="width: 30px; height: 20px; border: 1px dashed #ccc; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Time Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a time expert. Write one sentence using a time word:
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I know that ________________ comes before ________________</div>
                </div>
            </div>
        `,
        homework: "Teach someone at home about time words (before, after, next, then). Make up a Simon Says game using days and months.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1EnglishWeek8);
    console.log("english-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1EnglishWeek8);
    console.log("english-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1EnglishWeek8',
        metadata: grade1EnglishWeek8.metadata,
        days: grade1EnglishWeek8
    });
    console.log("english-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1EnglishWeek8 = grade1EnglishWeek8;
console.log("english-week8.js loaded and registered successfully");