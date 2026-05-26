// Middle Grades - Term 2 Week 7 Data
// Subjects: Mathematics & Science - Body Proportions & Telling Time
const middleGradeWeek7 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 2,
        week: 7,
        title: "Body Proportions & Telling Time",
        description: "Comparing body measurements, understanding daily routines, and connecting activities to time of day"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Body Proportions",
        subtopic: "Comparing Hand Sizes",
        lessonContent: `
            <p>Welcome to our week exploring how our bodies can help us learn about math and science! Today we'll investigate hand sizes.</p>
            <p><strong>Key Question:</strong> Whose hand is wider or longer? How can we compare?</p>
            <p><strong>Introduction:</strong> Our hands are amazing tools! They come in different shapes and sizes. Today we'll trace our hands and compare measurements with our classmates.</p>
            <p><strong>What We'll Learn:</strong></p>
            <ol>
                <li><strong>Comparing:</strong> Looking at two or more things to see how they are different or the same</li>
                <li><strong>Measurement:</strong> Using numbers to describe how big or small something is</li>
                <li><strong>Data Collection:</strong> Gathering information and recording what we find</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Wider:</strong> Measuring from side to side</li>
                <li><strong>Longer:</strong> Measuring from top to bottom</li>
                <li><strong>Compare:</strong> To look at how things are similar or different</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Hand Trace Example</div>
                <p>Place your hand flat on paper with fingers slightly apart. Trace around your hand with a pencil. Now you have a record of your hand size!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Comparing Sizes</div>
                <p>If your hand tracing is longer than your friend's, your hand is longer! If it's wider, your hand is wider. Sometimes one hand can be longer but narrower.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Real-World Connection</div>
                <p>Doctors measure babies' hands to check growth. Glove makers use hand measurements to create the right size gloves for people!</p>
            </div>
        `,
        taskInstructions: "Trace your hand, compare with classmates, and record findings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hand Tracing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace your hand on a piece of paper:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Place hand tracing here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measurement & Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Measure your hand from wrist to tip of middle finger: _________ cm
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Measure your hand across the widest part (including thumb): _________ cm
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Compare with a partner:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Whose hand is longer? _________</div>
                        <div>• Whose hand is wider? _________</div>
                        <div>• How much longer? _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Data</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Class results: Who has the longest hand? _________ Who has the widest hand? _________
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What did you notice about hand sizes in your class?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Trace the hand of a family member at home. Compare it to your own hand. Which is longer? Which is wider? Write your answer.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Body Proportions",
        subtopic: "Comparing Foot Steps",
        lessonContent: `
            <p>Today we'll use our feet to measure distance! We'll count how many heel-to-toe steps it takes to cross the room.</p>
            <p><strong>Key Question:</strong> How many footsteps does it take to cross the room? Does everyone get the same number?</p>
            <p><strong>Introduction:</strong> Before people had rulers and tape measures, they used their own bodies to measure things. Today we'll try this ancient method called "non-standard measurement."</p>
            <p><strong>What We'll Learn:</strong></p>
            <ol>
                <li><strong>Non-standard Measurement:</strong> Using body parts to measure length</li>
                <li><strong>Consistency:</strong> Why it's important to measure the same way each time</li>
                <li><strong>Variation:</strong> Why different people get different measurements</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Heel-to-toe step:</strong> Placing the heel of one foot directly against the toe of the other foot</li>
                <li><strong>Distance:</strong> How far it is from one place to another</li>
                <li><strong>Estimate:</strong> A thoughtful guess before measuring</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> How to Take a Heel-to-Toe Step</div>
                <p>Place your heel right against the toe of your other foot. Then step forward with the back foot, placing its heel against the toe of the front foot. Repeat!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Why Measurements Differ</div>
                <p>If a person with small feet and a person with large feet both walk across the same room, the person with smaller feet will take MORE steps. That's why we invented standard measurements like meters and feet!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-history"></i> Historical Connection</div>
                <p>The word "foot" as a unit of measurement actually came from using human feet to measure! A standard foot is about the length of an adult man's foot.</p>
            </div>
        `,
        taskInstructions: "Count heel-to-toe steps across the room and compare results.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Estimate First</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before walking, estimate how many heel-to-toe steps it will take you to cross the classroom: _________ steps
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Walk and Count</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Walk heel-to-toe across the room. Count each step. Actual steps: _________
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Was your estimate close? How many steps off were you? _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare with Classmates</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Ask three classmates for their step counts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Classmate 1: _________ steps</div>
                        <div>Classmate 2: _________ steps</div>
                        <div>Classmate 3: _________ steps</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Who took the most steps? _________ Who took the fewest? _________
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why do you think different people got different numbers?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Would using footsteps be a good way to measure something that needs to be exact? Why or why not?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Measure the length of a room in your home using heel-to-toe steps. Have a family member do the same. Compare your answers.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Telling Time",
        subtopic: "Day and Night Activities",
        lessonContent: `
            <p>Today we'll learn about the difference between day and night, and what activities we do during each time!</p>
            <p><strong>Key Question:</strong> What activities do we do in the daytime? What do we do at nighttime?</p>
            <p><strong>Introduction:</strong> The Earth spins around once every 24 hours. When our part of the Earth faces the sun, it's daytime. When we face away from the sun, it's nighttime. Different activities happen at different times of day!</p>
            <p><strong>What We'll Learn:</strong></p>
            <ol>
                <li><strong>Daytime:</strong> When the sun is visible in the sky</li>
                <li><strong>Nighttime:</strong> When the sun is not visible and it's dark outside</li>
                <li><strong>Daily Routines:</strong> Activities we do at specific times</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Day:</strong> The time when the sun is shining</li>
                <li><strong>Night:</strong> The time when it's dark outside</li>
                <li><strong>Routine:</strong> Things we do regularly, often at the same time each day</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Daytime Activities</div>
                <p>Going to school, eating lunch, playing at recess, reading books, and drawing pictures are all things we usually do during the day when the sun is out.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Nighttime Activities</div>
                <p>Sleeping, reading bedtime stories, looking at stars, and brushing teeth before bed are things we do at night when it's dark outside.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Some Activities Can Be Both!</div>
                <p>Eating dinner can happen in the early evening when it's still light OR later when it's dark, depending on your family's schedule!</p>
            </div>
        `,
        taskInstructions: "Sort pictures and descriptions into daytime and nighttime activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Day vs. Night Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to sort each activity into Day or Night:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 1px solid #FFD700; padding: 10px; background-color: #FFF8E1;">
                            <strong>☀️ DAYTIME</strong>
                            <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                        </div>
                        <div style="border: 1px solid #4A148C; padding: 10px; background-color: #F3E5F5;">
                            <strong>🌙 NIGHTTIME</strong>
                            <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;">
                        <p>Choose from: <em>eating breakfast, sleeping, playing soccer, brushing teeth before bed, going to school, watching stars, eating lunch, reading a bedtime story, riding a bike, using a flashlight</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Day</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one activity you do during the day:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one activity you do at night:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Discussion Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is your favorite daytime activity? What is your favorite nighttime activity?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of something you do during the day and something you do at night. Share with a family member and ask what their favorite daytime and nighttime activities are.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Telling Time",
        subtopic: "Morning Routines",
        lessonContent: `
            <p>Today we'll explore what happens in the morning and how we get ready for our day!</p>
            <p><strong>Key Question:</strong> What do you do every morning before school? In what order do you do these things?</p>
            <p><strong>Introduction:</strong> Every morning, we follow a sequence of activities to get ready for the day. Understanding our morning routine helps us manage time and be on time for school!</p>
            <p><strong>What We'll Learn:</strong></p>
            <ol>
                <li><strong>Sequence:</strong> The order in which events happen</li>
                <li><strong>Morning Routine:</strong> The set of activities we do after waking up</li>
                <li><strong>Time Management:</strong> Doing things in an order that saves time</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Morning:</strong> The time from sunrise until noon</li>
                <li><strong>Routine:</strong> A regular way of doing things</li>
                <li><strong>Sequence:</strong> The order of events (first, next, last)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> Typical Morning Sequence</div>
                <p>1. Wake up<br>2. Get out of bed<br>3. Wash face and brush teeth<br>4. Get dressed<br>5. Eat breakfast<br>6. Pack school bag<br>7. Walk to school or wait for the bus</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Order Words</div>
                <p>When describing your morning, use words like: First, Next, Then, After that, Finally, Last. These words help others understand the sequence!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Every Family is Different</div>
                <p>Not everyone has the same morning routine! Some people eat breakfast before getting dressed. Some people shower in the morning instead of at night. Your routine is special to you!</p>
            </div>
        `,
        taskInstructions: "Describe and illustrate your morning routine in sequence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: My Morning Sequence</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write what you do each morning in order. Use sequence words (First, Next, Then, Finally):
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Morning</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw what you do FIRST in the morning:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw what you do LAST before going to school:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Thinking About Time</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> About how many minutes does your morning routine take? _________ minutes
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> If you woke up 15 minutes late, what might you have to skip or do faster?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member to describe THEIR morning routine. Write down three things they do that are the same as yours and three things that are different.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Telling Time",
        subtopic: "Afternoon and Evening Tasks",
        lessonContent: `
            <p>Today we'll learn about the afternoon and evening - the time after school and before bedtime!</p>
            <p><strong>Key Question:</strong> What do you do after school? What happens before you go to sleep?</p>
            <p><strong>Introduction:</strong> The day doesn't end when school is over! Afternoon and evening are full of activities like eating lunch, playing games, doing homework, eating dinner, and getting ready for bed.</p>
            <p><strong>What We'll Learn:</strong></p>
            <ol>
                <li><strong>Afternoon:</strong> The time from noon until evening</li>
                <li><strong>Evening:</strong> The time from late afternoon until bedtime</li>
                <li><strong>Bedtime Routine:</strong> Activities that help us get ready for sleep</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Afternoon:</strong> Approximately 12:00 PM to 5:00 PM</li>
                <li><strong>Evening:</strong> Approximately 5:00 PM to bedtime</li>
                <li><strong>Bedtime:</strong> The time when we go to sleep</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Afternoon Activities</div>
                <p>Eating lunch, finishing schoolwork, playing outside, doing homework, having a snack, and going to sports practice are all afternoon activities!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Evening Activities</div>
                <p>Eating dinner with family, watching TV, playing quiet games, taking a bath or shower, brushing teeth, reading a book, and going to sleep are evening activities.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath"></i> Bedtime Routines Matter</div>
                <p>Doing the same things every night before bed (like brushing teeth, putting on pajamas, and reading a story) helps your body know it's time to sleep!</p>
            </div>
        `,
        taskInstructions: "Describe your after-school and evening routine, then create a full daily timeline.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: My Afternoon & Evening</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List three things you do AFTER school:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List three things you do BEFORE going to sleep:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Daily Timeline</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw or write your full day in order. Include morning, school time, afternoon, evening, and bedtime:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Favorite Part of the Day</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is your favorite time of day? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Healthy Habits Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to have a regular bedtime?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What is one thing you do to help you relax before sleeping?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a clock showing your bedtime. Ask a family member what time they go to bed. Draw a clock showing their bedtime too. Compare the times.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleGradeWeek7);
    console.log("middle-grade-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleGradeWeek7);
    console.log("middle-grade-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleGradeWeek7',
        metadata: middleGradeWeek7.metadata,
        days: middleGradeWeek7
    });
    console.log("middle-grade-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleGradeWeek7 = middleGradeWeek7;
console.log("middle-grade-week7.js loaded and registered successfully");