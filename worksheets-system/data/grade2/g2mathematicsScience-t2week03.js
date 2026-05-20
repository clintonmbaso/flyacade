// Grade 2 Mathematics & Science - Term 2 Week 3
const grade2MathsScienceWeek3 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 2,
        week: 3,
        title: "Time and Length",
        description: "Reading analogue clocks, measuring duration, length, width, and perimeter of plane figures"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Reading and Telling Time Using Analogue Clock (Full Hours and Half Hours)",
        lessonContent: `
            <p>Welcome to our time-telling adventure! Today we'll learn how to read an analogue clock.</p>
            <p><strong>Key Question:</strong> How can we tell what time it is by looking at a clock with hands?</p>
            <p><strong>Introduction:</strong> An analogue clock has a round face with numbers 1 to 12. It has two moving hands that help us tell the time.</p>
            <p><strong>The Two Hands:</strong></p>
            <ol>
                <li><strong>Hour Hand (Short Hand):</strong> Tells us the hour. It moves slowly from one number to the next.</li>
                <li><strong>Minute Hand (Long Hand):</strong> Tells us the minutes. It moves faster around the clock.</li>
            </ol>
            <p><strong>Telling Time to the Hour:</strong></p>
            <ul>
                <li>When the minute hand points to 12, it is exactly <strong>o'clock</strong></li>
                <li>The hour hand points to the current hour</li>
                <li>Example: Hour hand on 3, minute hand on 12 → 3 o'clock</li>
            </ul>
            <p><strong>Telling Time to the Half Hour:</strong></p>
            <ul>
                <li>When the minute hand points to 6, it is <strong>half past</strong> the hour</li>
                <li>The hour hand points halfway between two numbers</li>
                <li>Example: Hour hand halfway between 2 and 3, minute hand on 6 → half past 2 (2:30)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> O'Clock Examples</div>
                <p>When the short hand points to 7 and the long hand points to 12, it's 7 o'clock - breakfast time!</p>
                <p>When the short hand points to 12 and the long hand points to 12, it's 12 o'clock - lunch time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half"></i> Half Past Examples</div>
                <p>When the short hand is halfway between 8 and 9, and the long hand points to 6, it's half past 8 (8:30) - time to get ready for school!</p>
                <p>When the short hand is halfway between 3 and 4, and the long hand points to 6, it's half past 3 (3:30) - snack time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-memory"></i> Easy Memory Trick</div>
                <p>Remember: "Short hand points to the hour, long hand points to the minutes. Long hand at 12 means o'clock, long hand at 6 means half past!"</p>
            </div>
        `,
        taskInstructions: "Draw clock hands and write the correct times.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw the Clock Hands (O'Clock)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the hour and minute hands for 4 o'clock:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the hour and minute hands for 9 o'clock:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Clock Hands (Half Past)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the hour and minute hands for half past 5 (5:30):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw the hour and minute hands for half past 10 (10:30):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write the Time</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Look at each clock and write the time:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Clock A - Hour hand on 2, Minute hand on 12 → _________ o'clock</div>
                        <div>Clock B - Hour hand halfway between 6 and 7, Minute hand on 6 → Half past _________</div>
                        <div>Clock C - Hour hand on 11, Minute hand on 12 → _________ o'clock</div>
                        <div>Clock D - Hour hand halfway between 1 and 2, Minute hand on 6 → Half past _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Daily Schedule</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw the time you wake up (half past 6) and the time you eat dinner (6 o'clock):
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div>Wake up: Half past 6</div>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Dinner: 6 o'clock</div>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look at a clock at home at 3 different times today. Draw each clock and write the time (use o'clock and half past).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Measuring Duration of Activities",
        lessonContent: `
            <p>Today we'll learn how long different activities take! This is called duration.</p>
            <p><strong>Key Question:</strong> How long does it take to do everyday things like brushing teeth or walking to school?</p>
            <p><strong>Introduction:</strong> Duration means the amount of time something takes from start to finish. We can measure duration in seconds, minutes, and hours.</p>
            <p><strong>Units of Time:</strong></p>
            <ul>
                <li><strong>Second:</strong> A very short time (like snapping your fingers)</li>
                <li><strong>Minute:</strong> 60 seconds (like singing the ABC song once)</li>
                <li><strong>Hour:</strong> 60 minutes (like one TV show or a math lesson)</li>
            </ul>
            <p><strong>Estimating Duration:</strong></p>
            <ul>
                <li>Short activities: seconds (blinking, clapping)</li>
                <li>Medium activities: minutes (brushing teeth, eating a snack)</li>
                <li>Long activities: hours (sleeping, being at school)</li>
            </ul>
            <p><strong>Comparing Durations:</strong></p>
            <ul>
                <li>Which takes longer: reading a book or tying a shoe? (reading a book!)</li>
                <li>Which takes less time: eating lunch or blinking? (blinking!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tooth"></i> Tooth Brushing Time</div>
                <p>Dentists say you should brush your teeth for 2 minutes. That's about the time it takes to sing "Happy Birthday" twice!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking"></i> Walking to School</div>
                <p>Walking to a nearby school might take 15 minutes. Watching one cartoon is about 30 minutes - that's two walks to school!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> Sleeping Time</div>
                <p>Children your age need about 10 hours of sleep each night. That's from 8 PM to 6 AM!</p>
            </div>
        `,
        taskInstructions: "Compare, estimate, and measure the duration of everyday activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Short or Long?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle whether each activity takes a short time or a long time:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Brushing teeth → short / long</div>
                        <div>• Sleeping at night → short / long</div>
                        <div>• Blinking eyes → short / long</div>
                        <div>• Eating lunch → short / long</div>
                        <div>• Taking a bath → short / long</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Which Takes Longer?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Compare each pair and circle the longer activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Walking to school OR Blinking your eyes</div>
                        <div>b) Eating an apple OR Saying "hello"</div>
                        <div>c) Washing your hands OR Sleeping all night</div>
                        <div>d) Tying your shoes OR Reading a bedtime story</div>
                        <div>e) Taking a bath OR Clapping once</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Estimate the Duration</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Guess how many minutes each activity might take:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Taking a shower: _________ minutes</div>
                        <div>• Eating breakfast: _________ minutes</div>
                        <div>• Walking to the classroom: _________ minutes</div>
                        <div>• Doing homework: _________ minutes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Measure with a Timer</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> With a partner, use a timer to measure these activities (if possible in class):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• How many times can you clap in 10 seconds? _________ claps</div>
                        <div>• How long does it take to write your name? _________ seconds</div>
                        <div>• How long does it take to stand up and sit down 5 times? _________ seconds</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: My Day in Time</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of something you do that takes a few seconds, something that takes a few minutes, and something that takes an hour:
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">Seconds<br><div class="drawing-area" style="height: 80px; border: 2px dashed #ccc;"></div></div>
                        <div style="flex: 1; text-align: center;">Minutes<br><div class="drawing-area" style="height: 80px; border: 2px dashed #ccc;"></div></div>
                        <div style="flex: 1; text-align: center;">Hours<br><div class="drawing-area" style="height: 80px; border: 2px dashed #ccc;"></div></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Time yourself doing 3 activities at home (like putting on shoes, eating a snack, cleaning your room). Write down how many minutes or seconds each took.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Measuring Length and Width Using Standard Units (cm, mm, m)",
        lessonContent: `
            <p>Today we'll learn how to measure how long or wide things are using rulers and meter sticks!</p>
            <p><strong>Key Question:</strong> How can we measure the length of a pencil or the width of a desk?</p>
            <p><strong>Introduction:</strong> Length tells us how long something is. Width tells us how wide something is. We use standard units so everyone gets the same measurement.</p>
            <p><strong>Standard Units for Length:</strong></p>
            <ol>
                <li><strong>Millimeter (mm):</strong> Very small - about the thickness of a credit card</li>
                <li><strong>Centimeter (cm):</strong> Small - about the width of your pinky finger</li>
                <li><strong>Meter (m):</strong> Long - about one big step or the height of a doorknob</li>
            </ol>
            <p><strong>How to Measure:</strong></p>
            <ul>
                <li>Line up the ruler's zero mark with the edge of the object</li>
                <li>Read the number at the other edge of the object</li>
                <li>Write the number with the correct unit (cm, mm, or m)</li>
            </ul>
            <p><strong>Choosing the Right Unit:</strong></p>
            <ul>
                <li>Small objects (eraser, finger) → centimeters (cm) or millimeters (mm)</li>
                <li>Medium objects (desk, book) → centimeters (cm)</li>
                <li>Large objects (room, playground) → meters (m)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Pencil Length</div>
                <p>A new pencil is about 19 centimeters long. That's the same as 190 millimeters!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Door Width</div>
                <p>A classroom door is about 1 meter wide. That's 100 centimeters or 1,000 millimeters!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Using a Ruler</div>
                <p>Each small line on a ruler is 1 millimeter. Every 10 small lines make 1 centimeter. There are 100 centimeters in 1 meter.</p>
            </div>
        `,
        taskInstructions: "Practice measuring classroom objects using rulers and meter sticks.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Learning the Units</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the unit to what it measures best:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• mm (millimeter) → _____</div>
                        <div>• cm (centimeter) → _____</div>
                        <div>• m (meter) → _____</div>
                    </div>
                    <div style="margin-left: 40px; margin-top: 5px; font-size: 14px;">
                        Options: length of a room, thickness of a coin, height of a book
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measure in Centimeters (cm)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use a ruler to measure these classroom objects in centimeters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Length of your pencil: _________ cm</div>
                        <div>• Width of your desk: _________ cm</div>
                        <div>• Length of your eraser: _________ cm</div>
                        <div>• Height of your book: _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measure in Meters (m)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use a meter stick to measure in meters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Width of the classroom door: _________ m</div>
                        <div>• Length of the teacher's desk: _________ m</div>
                        <div>• Height from floor to doorknob: _________ m</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare Lengths</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the longer object in each pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Pencil (15 cm) OR Ruler (30 cm)</div>
                        <div>b) Desk (1 m) OR Book (30 cm)</div>
                        <div>c) Eraser (5 cm) OR Chalk (8 cm)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a line that is exactly 5 cm long and another line that is 12 cm long:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw something that is about 1 meter long (like a baseball bat or a guitar):
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. Measure their length or width using a ruler (in cm). Write them down: object name and measurement.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Finding the Perimeter of Plane Figures",
        lessonContent: `
            <p>Today we'll learn about perimeter - the distance around the outside of a shape!</p>
            <p><strong>Key Question:</strong> How far would you walk if you went all the way around a garden or a table?</p>
            <p><strong>Introduction:</strong> Perimeter is the total length of the boundary of a shape. We find perimeter by adding up all the sides.</p>
            <p><strong>How to Find Perimeter:</strong></p>
            <ol>
                <li>Measure each side of the shape</li>
                <li>Add all the side lengths together</li>
                <li>Write the answer with the correct unit (cm or m)</li>
            </ol>
            <p><strong>Perimeter of a Square:</strong></p>
            <ul>
                <li>A square has 4 equal sides</li>
                <li>Perimeter = side + side + side + side</li>
                <li>Or: Perimeter = 4 × side length</li>
            </ul>
            <p><strong>Perimeter of a Rectangle:</strong></p>
            <ul>
                <li>A rectangle has 2 long sides (length) and 2 short sides (width)</li>
                <li>Perimeter = length + width + length + width</li>
                <li>Or: Perimeter = 2 × (length + width)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-square"></i> Square Garden</div>
                <p>A square garden has sides of 3 meters. Perimeter = 3 + 3 + 3 + 3 = 12 meters. That's how much fencing you need!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rectangle-ad"></i> Rectangle Table</div>
                <p>A rectangular table has length 150 cm and width 90 cm. Perimeter = 150 + 90 + 150 + 90 = 480 cm.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Dog Run</div>
                <p>If you want to build a fence around a rectangular dog run that is 4 m long and 3 m wide, you need 4+3+4+3 = 14 meters of fencing!</p>
            </div>
        `,
        taskInstructions: "Calculate the perimeter of squares, rectangles, and other shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Perimeter of a Square</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the perimeter of each square:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Square with side 5 cm → Perimeter = _________ cm</div>
                        <div>b) Square with side 2 m → Perimeter = _________ m</div>
                        <div>c) Square with side 7 cm → Perimeter = _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Perimeter of a Rectangle</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the perimeter of each rectangle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Length = 8 cm, Width = 3 cm → Perimeter = _________ cm</div>
                        <div>b) Length = 10 cm, Width = 4 cm → Perimeter = _________ cm</div>
                        <div>c) Length = 6 m, Width = 2 m → Perimeter = _________ m</div>
                        <div>d) Length = 12 cm, Width = 5 cm → Perimeter = _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Calculate</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a square with side length 4 cm. Calculate its perimeter:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Perimeter = _________ cm</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a rectangle with length 6 cm and width 2 cm. Calculate its perimeter:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Perimeter = _________ cm</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Solve these perimeter problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Maria wants to put a ribbon around a square picture frame. Each side is 15 cm. How much ribbon does she need? _________ cm</div>
                        <div style="margin-top: 10px;">b) A rectangular soccer field is 30 m long and 20 m wide. How far would you run if you ran around it once? _________ m</div>
                        <div style="margin-top: 10px;">c) Tom's notebook is 25 cm long and 18 cm wide. What is the perimeter of his notebook? _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge!</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a shape of your own and label each side. Then find its perimeter:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Perimeter = _________ cm</div>
                </div>
            </div>
        `,
        homework: "Find 3 rectangular or square objects at home (table, book, phone, picture frame). Measure each side in cm and calculate the perimeter.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Quiz: Time and Measurement",
        lessonContent: `
            <p>Today we'll review everything we learned this week about time and measurement, then take a short quiz!</p>
            <p><strong>Week 3 Review:</strong></p>
            <ol>
                <li><strong>Time:</strong> Reading analogue clocks (o'clock and half past), measuring duration</li>
                <li><strong>Length:</strong> Using standard units (cm, mm, m) to measure length and width</li>
                <li><strong>Perimeter:</strong> Finding the distance around squares and rectangles</li>
            </ol>
            <p><strong>Key Things to Remember:</strong></p>
            <ul>
                <li>Long hand on 12 = o'clock, long hand on 6 = half past</li>
                <li>100 cm = 1 m</li>
                <li>Perimeter = add all sides together</li>
                <li>Square: all 4 sides equal</li>
                <li>Rectangle: 2 lengths + 2 widths</li>
            </ul>
            <p><strong>Quiz Instructions:</strong> Answer the questions below. Take your time and show your work!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Quiz Tips</div>
                <p>Read each question carefully. If you get stuck, skip it and come back later. Draw pictures to help you think through perimeter problems!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Before You Start</div>
                <p>Take 3 deep breaths. You've learned all of this already - just show what you know!</p>
            </div>
        `,
        taskInstructions: "Complete the quiz to show what you've learned about time, length, and perimeter.",
        taskContent: `
            <div class="content-box">
                <p><strong>📝 QUIZ: Time and Measurement</strong></p>
                <p><em>Name: _________________________ Date: _____________</em></p>
            </div>
            
            <div class="content-box">
                <p><strong>Section A: Telling Time (4 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the clock hands for 7 o'clock:
                    <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the clock hands for half past 4 (4:30):
                    <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write the time if the hour hand is on 9 and the minute hand is on 12: _________ o'clock
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write the time if the hour hand is halfway between 11 and 12 and the minute hand is on 6: Half past _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section B: Duration (3 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle the activity that takes longer:
                    <div>Brushing teeth OR Sleeping all night</div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Circle the activity that takes less time:
                    <div>Eating lunch OR Blinking your eyes</div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> About how many minutes does it take to eat breakfast? (circle one)
                    <div>5 seconds / 10 minutes / 3 hours</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section C: Length and Units (4 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Which unit would you use to measure these? Write cm, mm, or m:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>a) Length of a pencil: _________</div>
                        <div>b) Thickness of a coin: _________</div>
                        <div>c) Height of a door: _________</div>
                        <div>d) Width of a book: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section D: Perimeter (6 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Find the perimeter of a square with side 6 cm:
                    <div>Perimeter = _________ cm</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Find the perimeter of a rectangle with length 9 cm and width 4 cm:
                    <div>Perimeter = _________ cm</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> A rectangular garden is 5 m long and 3 m wide. How much fencing is needed to go around it?
                    <div>_________ m of fencing</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> Draw a rectangle with length 5 cm and width 2 cm. Label the sides and find the perimeter:
                    <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    <div>Perimeter = _________ cm</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section E: Bonus Challenge (1 extra point)</strong></p>
                <div class="task-item">
                    <span class="task-number">⭐</span> A square has a perimeter of 20 cm. How long is each side?
                    <div>Each side = _________ cm</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Quiz Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">📓</span> One thing I learned this week about time or measurement:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "No written homework this weekend! Practice telling time on any clock you see and try to estimate the length of things in centimeters or meters.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathsScienceWeek3);
    console.log("grade2-maths-science-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathsScienceWeek3);
    console.log("grade2-maths-science-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathsScienceWeek3',
        metadata: grade2MathsScienceWeek3.metadata,
        days: grade2MathsScienceWeek3
    });
    console.log("grade2-maths-science-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathsScienceWeek3 = grade2MathsScienceWeek3;
console.log("grade2-maths-science-week3.js loaded and registered successfully");