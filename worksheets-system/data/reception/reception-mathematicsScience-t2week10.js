// Grade Reception - Term 2 Week 10 Data
// Subject: Mathematics & Science - Reinforcement and Assessment
const gradeReceptionWeek10 = {
    metadata: {
        grade: "reception",
        subject: "Mathematics & Science",
        term: 2,
        week: 10,
        title: "Reinforcement and Assessment",
        description: "Consolidating mathematical and scientific skills through mixed operations, shapes, time, assessment, and celebration"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Mixed Operations",
        subtopic: "Adding and Taking Away",
        lessonContent: `
            <p>Hello wonderful learners! Today we will practice adding and taking away!</p>
            <p><strong>Key Words to Remember:</strong></p>
            <ul>
                <li><strong>Adding:</strong> Putting more things together → gets BIGGER</li>
                <li><strong>Taking away:</strong> Removing some things → gets SMALLER</li>
            </ul>
            <p><strong>Let's Learn:</strong></p>
            <ul>
                <li>Adding means "and more" (➕)</li>
                <li>Taking away means "take away" (➖)</li>
                <li>Adding = count up</li>
                <li>Taking away = count down</li>
            </ul>
            <p><strong>Remember:</strong> When we add, we get MORE. When we take away, we have FEWER.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title">🍎 Adding Example</div>
                <p>You have 2 apples. Your friend gives you 1 more apple. Now you have 3 apples! (2 + 1 = 3)</p>
            </div>
            <div class="example-box">
                <div class="example-title">🍪 Taking Away Example</div>
                <p>You have 4 cookies. You eat 1 cookie. Now you have 3 cookies! (4 - 1 = 3)</p>
            </div>
        `,
        taskInstructions: "Copy and complete these activities in your book.",
        taskContent: `
            <div class="content-box">
                <p><strong>📝 Activity 1: Adding with Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and count:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🔴🔴 + 🔴 = ________ (How many circles?)</div>
                        <div>🐶🐶 + 🐶🐶 = ________ (How many dogs?)</div>
                        <div>⭐ + ⭐⭐⭐ = ________ (How many stars?)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Activity 2: Taking Away with Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and count:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🍎🍎🍎 - 🍎 = ________ (How many apples left?)</div>
                        <div>🐟🐟🐟🐟 - 🐟🐟 = ________ (How many fish left?)</div>
                        <div>🎈🎈🎈🎈🎈 - 🎈🎈🎈 = ________ (How many balloons left?)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Activity 3: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Is it adding or taking away? Write + or - :
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>2 toys ___ 1 toy = 3 toys (getting more)</div>
                        <div>5 sweets ___ 2 sweets = 3 sweets (getting fewer)</div>
                        <div>4 birds ___ 2 birds = 6 birds (getting more)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🎤 Oral Activity:</strong> Show your teacher using your fingers: 2 fingers + 1 finger. Then 4 fingers - 2 fingers.</p>
            </div>
        `,
        homework: "Use objects at home (stones, buttons, spoons). Show your family: 3 + 2 = 5 and 5 - 1 = 4. Draw pictures of what you did.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Shapes and Shadows",
        subtopic: "Identifying Shapes in Shadows",
        lessonContent: `
            <p>Hello learners! Today we will look at shadows and find shapes inside them!</p>
            <p><strong>Key Words to Remember:</strong></p>
            <ul>
                <li><strong>Shadow:</strong> A dark shape made when something blocks light</li>
                <li><strong>Circle:</strong> Round like a ball (⚪)</li>
                <li><strong>Square:</strong> Four same sides (⬛)</li>
                <li><strong>Triangle:</strong> Three sides (🔺)</li>
                <li><strong>Rectangle:</strong> Two long sides, two short sides (📱)</li>
            </ul>
            <p><strong>Fun Fact:</strong> Your shadow changes size during the day! Morning and evening shadows are LONG. Noon shadows are SHORT.</p>
            <p><strong>Remember:</strong> Every object makes a shadow. The shadow looks like the shape of the object!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title">☀️ Shadow Hunt</div>
                <p>A ball makes a CIRCLE shadow. A book makes a RECTANGLE shadow. A party hat makes a TRIANGLE shadow!</p>
            </div>
            <div class="example-box">
                <div class="example-title">🌳 Outside Fun</div>
                <p>Go outside on a sunny day. Look at tree shadows, car shadows, YOUR shadow! What shapes do you see?</p>
            </div>
        `,
        taskInstructions: "Copy and complete these activities in your book.",
        taskContent: `
            <div class="content-box">
                <p><strong>📝 Activity 1: What Shape Shadow?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the shadow shape each object makes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🏀 Basketball → Shadow shape: _________ (draw it)</div>
                        <div>📦 Square box → Shadow shape: _________ (draw it)</div>
                        <div>🎩 Party hat → Shadow shape: _________ (draw it)</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Activity 2: Match the Shadow</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from each object to its shadow:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Object: ☀️ Circle sun → Shadow: ______</div>
                        <div>Object: 📺 TV screen (rectangle) → Shadow: ______</div>
                        <div>Object: ⛰️ Mountain (triangle) → Shadow: ______</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Activity 3: Draw Your Shadow</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> On a sunny day, stand outside. Look at your shadow. Draw your shadow shape:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🎤 Oral Activity:</strong> Point to something in the classroom. Tell your teacher: "This object is a [shape]. Its shadow would look like a [shape]."</p>
            </div>
        `,
        homework: "With a flashlight at home, make shadows on the wall. Make a circle shadow, a square shadow, and a triangle shadow. Tell your family the shape names.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Time and Routine",
        subtopic: "Matching Daily Activities to Morning/Night",
        lessonContent: `
            <p>Hello learners! Today we will learn about morning time and night time!</p>
            <p><strong>Key Words to Remember:</strong></p>
            <ul>
                <li><strong>Morning:</strong> When the sun comes up (sunrise) 🌅</li>
                <li><strong>Night:</strong> When the sun goes down (sunset) 🌙</li>
                <li><strong>Day activities:</strong> Things we do when the sun is shining ☀️</li>
                <li><strong>Night activities:</strong> Things we do when the moon is out 🌟</li>
            </ul>
            <p><strong>Morning Activities:</strong> Wake up, brush teeth, eat breakfast, go to school.</p>
            <p><strong>Night Activities:</strong> Eat dinner, take a bath, put on pajamas, go to sleep.</p>
            <p><strong>Remember:</strong> The sun tells us the time! Sun up = morning. Sun down = night.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title">🌅 Morning Routine</div>
                <p>When you wake up, you see the SUN. That means it's MORNING! Time for breakfast and school.</p>
            </div>
            <div class="example-box">
                <div class="example-title">🌙 Night Routine</div>
                <p>When you see the MOON and STARS, that means it's NIGHT! Time for dinner, bath, and sleep.</p>
            </div>
        `,
        taskInstructions: "Copy and complete these activities in your book.",
        taskContent: `
            <div class="content-box">
                <p><strong>📝 Activity 1: Morning or Night?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a 🌅 for morning or 🌙 for night:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Eating breakfast → _________</div>
                        <div>Brushing teeth before bed → _________</div>
                        <div>Playing outside in the sun → _________</div>
                        <div>Reading a bedtime story → _________</div>
                        <div>Going to school → _________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Activity 2: Draw Your Day</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one thing you do in the morning and one thing you do at night:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>🌅 MORNING</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>🌙 NIGHT</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Activity 3: Cut and Paste Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> (With teacher's help) Sort these pictures into morning and night:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Morning: ________ (sun, breakfast, school, playing outside)</div>
                        <div>Night: ________ (moon, dinner, pajamas, sleeping)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🎤 Oral Activity:</strong> Tell your teacher one thing you do in the morning and one thing you do at night. Say "Good morning" and "Good night" to a friend.</p>
            </div>
        `,
        homework: "At home, tell your family: 'Good morning' when you wake up and 'Good night' before sleeping. Draw one morning activity and one night activity.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Formative Assessment",
        subtopic: "Practical Demonstration of Term Competencies",
        lessonContent: `
            <p>Good morning wonderful learners! Today is assessment day!</p>
            <p><strong>Don't worry!</strong> This is just a fun way to show your teacher everything you have learned this term.</p>
            <p><strong>What We Will Do Today:</strong></p>
            <ul>
                <li>Show your teacher how you can add and take away</li>
                <li>Identify shapes and their shadows</li>
                <li>Tell the difference between morning and night activities</li>
                <li>Sing our favorite learning songs!</li>
            </ul>
            <p><strong>Remember:</strong> You are all superstars! Just try your best. Your teacher is proud of you! ⭐</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title">✅ What Your Teacher Will Check</div>
                <p>Can you count 5 objects? Can you add 2 more? Can you take away 1? Can you name a circle, square, triangle? Do you know morning vs night?</p>
            </div>
            <div class="example-box">
                <div class="example-title">🎵 Let's Review with Songs!</div>
                <p>Sing: "1, 2, 3, 4, 5" counting song. Sing: "The sun comes up in the morning..." shape song!</p>
            </div>
        `,
        taskInstructions: "Complete these assessment activities with your teacher's help.",
        taskContent: `
            <div class="content-box">
                <p><strong>📝 Assessment 1: Show Me Numbers (Practical)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With objects (blocks, counters, stones):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Show me 3 objects</div>
                        <div>• Add 2 more. How many now? _________</div>
                        <div>• Take away 1. How many now? _________</div>
                        <div>• Show me 5 objects, then take away 2</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Assessment 2: Shape Hunt (Oral & Drawing)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Point to or draw:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Draw a circle: ________</div>
                        <div>• Draw a square: ________</div>
                        <div>• Draw a triangle: ________</div>
                        <div>• What shape shadow does a ball make? _________</div>
                    </div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Assessment 3: Time Sorting (Writing)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line to match the activity to morning or night:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Waking up → 🌅 / 🌙</div>
                        <div>Going to sleep → 🌅 / 🌙</div>
                        <div>Eating lunch at school → 🌅 / 🌙</div>
                        <div>Brushing teeth before bed → 🌅 / 🌙</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Assessment 4: Draw What You Learned</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite thing you learned this term:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🎤 Oral Assessment:</strong> Tell your teacher one thing you learned about numbers, one shape name, and one thing you do in the morning.</p>
            </div>
        `,
        homework: "No written homework today! Rest well. Tomorrow is our celebration day! 🌟",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Term 2 Summary",
        subtopic: "Celebration of Learning Through Songs and Dialogue",
        lessonContent: `
            <p>🎉 CONGRATULATIONS! 🎉</p>
            <p>You have finished Term 2! Today we celebrate everything we learned!</p>
            <p><strong>Let's Celebrate Our Learning!</strong></p>
            <ul>
                <li>We learned to ADD and TAKE AWAY ✨</li>
                <li>We learned SHAPES and SHADOWS 🟡</li>
                <li>We learned about MORNING and NIGHT 🌞🌙</li>
                <li>We are MATHEMATICS and SCIENCE superstars! ⭐</li>
            </ul>
            <p><strong>You should be so proud of yourselves!</strong> Every day you worked hard, listened, and learned new things.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title">🎵 Let's Sing Together!</div>
                <p>"Adding Song": One little, two little, three little numbers... add one more and now there are FOUR!<br>
                "Shape Song": Circle, square, triangle too... I can name my shapes, can you?<br>
                "Morning/Night Song": Sun comes up, it's morning time! Moon comes out, it's sleepy time!</p>
            </div>
            <div class="example-box">
                <div class="example-title">🗣️ Let's Talk!</div>
                <p>Turn to a friend and share: What was your favorite activity this term? What do you want to learn next term?</p>
            </div>
        `,
        taskInstructions: "Celebration activities - follow along with your teacher!",
        taskContent: `
            <div class="content-box">
                <p><strong>🎵 Activity 1: Song Time (Whole Class)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sing together with your class:
                    <div style="margin-left: 20px; margin-top: 10px; background: #FFF8DC; padding: 10px;">
                        <p>🎶 <strong>Counting Song:</strong> "1, 2, 3, 4, 5, once I caught a fish alive..."</p>
                        <p>🎶 <strong>Shapes Song:</strong> "Circle, square, triangle, rectangle... these are the shapes we know!"</p>
                        <p>🎶 <strong>Morning/Night Song:</strong> "In the morning I wake up, in the night I go to sleep..."</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🗣️ Activity 2: Sharing Circle (Oral)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sit in a circle. Take turns sharing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "I learned how to _________."</div>
                        <div>• "My favorite shape is _________."</div>
                        <div>• "In the morning I _________."</div>
                        <div>• "Next term I want to learn about _________."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Activity 3: Memory Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of your favorite thing you learned this term:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #FFD700; background: #FFFEF0;"></div>
                    <div style="margin-top: 10px;">Write one word about your drawing: _________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🎉 Activity 4: Celebration Clap!</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Stand up and give yourself a BIG clap!
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>👏 👏 👏 YOU DID IT! 👏 👏 👏</p>
                        <p>Give a friend a high-five! 🙌</p>
                        <p>Give your teacher a thumbs up! 👍</p>
                    </div>
                </div>
            </div>
        `,
        homework: "🏆 WELL DONE! 🏆 No homework! Rest and play. Tell your family: 'I finished Term 2 and I learned so much!' Be proud of yourself! 🌟",
        homeworkDue: "Next Term"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeReceptionWeek10);
    console.log("grade-reception-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeReceptionWeek10);
    console.log("grade-reception-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeReceptionWeek10',
        metadata: gradeReceptionWeek10.metadata,
        days: gradeReceptionWeek10
    });
    console.log("grade-reception-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeReceptionWeek10 = gradeReceptionWeek10;
console.log("grade-reception-week10.js loaded and registered successfully");