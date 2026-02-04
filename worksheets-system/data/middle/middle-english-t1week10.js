// Grade 1 English - Week 10 Data (Daily Activities)
const middleEnglishWeek10 = {
    metadata: {
        grade: "middle",
        subject: "English",
        week: 10,
        title: "My Busy Day — Describing Daily Activities",
        description: "Learning to describe, role-play, and categorize daily activities like sleeping, eating, and morning/night routines"
    },
    
    monday: {
        subject: "English",
        topic: "My Busy Day",
        subtopic: "Describing daily activities",
        lessonContent: `
            <p>Welcome to Week 10! This week we will learn all about our daily activities—the things we do every day!</p>
            <p><strong>Key Concept:</strong> Daily activities are things we do regularly, like sleeping, eating, waking up, and going to bed.</p>
            <p><strong>What are daily activities?</strong></p>
            <ul>
                <li>Activities we do every day</li>
                <li>Things that happen at certain times</li>
                <li>Actions that help us stay healthy and happy</li>
                <li>Routines that make our days organized</li>
            </ul>
            <p><strong>Common daily activities:</strong></p>
            <ul>
                <li>Sleeping</li>
                <li>Eating (breakfast, lunch, dinner)</li>
                <li>Waking up</li>
                <li>Brushing teeth</li>
                <li>Going to school</li>
                <li>Playing</li>
            </ul>
            <p><strong>Let's think:</strong> What do you do when you first wake up? What do you do before you go to bed?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed" style="color: #5C6BC0;"></i> Morning Activity</div>
                <p>"When I wake up, I brush my teeth." - This is a daily morning activity.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #FF9800;"></i> Eating Activity</div>
                <p>"I eat breakfast with my family." - Eating is an important daily activity.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Discussion Game!</div>
                <p>Let's play "My Day"! We'll sit in a circle and share one thing we do every morning when we wake up.</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice describing daily routines.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the pictures that show daily activities:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Picture of someone sleeping</div>
                    <div>☐ Picture of a birthday cake</div>
                    <div>☐ Picture of eating breakfast</div>
                    <div>☐ Picture of brushing teeth</div>
                    <div>☐ Picture of going on vacation</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw a picture of what you do when you first wake up:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">In the morning, I ________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Complete the sentences about your day:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Before bed, I ________________</div>
                    <div class="answer-space" style="height: 30px; width: 250px; margin-top: 5px;"></div>
                    <div>My favorite daily activity is ________________</div>
                    <div class="answer-space" style="height: 30px; width: 250px; margin-top: 5px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match the activity with the time:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Brushing teeth → ☐ When I wake up</div>
                    <div>Eating dinner → ☐ Before bed</div>
                    <div>Reading a story → ☐ In the evening</div>
                </div>
            </div>
        `,
        homework: "Observe your family's daily activities tonight. Draw one activity that someone in your family does every day.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Acting Out My Day",
        subtopic: "Role-playing daily activities",
        lessonContent: `
            <p>Today we will become actors! We'll role-play our daily activities to help us remember the words and actions.</p>
            <p><strong>Key Concept:</strong> Role-playing helps us understand and remember activities by acting them out!</p>
            <p><strong>What is role-playing?</strong></p>
            <ul>
                <li>Pretending to do something</li>
                <li>Using actions and words together</li>
                <li>Showing instead of just telling</li>
                <li>Having fun while learning!</li>
            </ul>
            <p><strong>Activities we can act out:</strong></p>
            <ul>
                <li>Eating breakfast (pretend to chew, use spoon)</li>
                <li>Sleeping (pretend to yawn, lay head down)</li>
                <li>Brushing teeth (circular brushing motion)</li>
                <li>Washing face (splash, splash!)</li>
                <li>Putting on clothes</li>
            </ul>
            <p><strong>How to describe actions:</strong> Use words like "I am eating," "She is sleeping," "He is brushing."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks" style="color: #9C27B0;"></i> Breakfast Role-Play</div>
                <p>"I am eating cereal with milk." - Act out pouring cereal, adding milk, and eating with a spoon.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon" style="color: #673AB7;"></i> Bedtime Role-Play</div>
                <p>"I am sleeping in my bed." - Act out yawning, laying down, and closing eyes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Action Charades Game!</div>
                <p>Let's play charades! One person acts out a daily activity without talking, and the class guesses what they're doing!</p>
            </div>
        `,
        taskInstructions: "Practice role-playing daily activities with classmates.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Action Cards</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose an action card and act it out for your group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Eating breakfast</div>
                        <div>☐ Brushing teeth</div>
                        <div>☐ Sleeping</div>
                        <div>☐ Washing face</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Describe the Action</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Watch a classmate's role-play. Write what they are doing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My classmate is ________________</div>
                        <div class="answer-space" style="height: 30px; width: 250px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Role-Play</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With a partner, act out this morning scene:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div><strong>Partner 1:</strong> Wake up and stretch</div>
                        <div><strong>Partner 2:</strong> Brush teeth</div>
                        <div><strong>Both:</strong> Eat breakfast together</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Action Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw yourself doing your favorite daily activity:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>In this picture, I am ________________</div>
                        <div class="answer-space" style="height: 30px; width: 250px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Role-play two daily activities for your family tonight. Ask them to guess what you're doing.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Morning vs. Night",
        subtopic: "Differentiating daily activities by time",
        lessonContent: `
            <p>Today we will sort activities into morning activities and night activities!</p>
            <p><strong>Key Concept:</strong> Some activities happen in the morning, and some happen at night.</p>
            <p><strong>Morning activities:</strong> Things we do when the sun rises</p>
            <ul>
                <li>Waking up</li>
                <li>Eating breakfast</li>
                <li>Brushing teeth</li>
                <li>Getting dressed</li>
                <li>Going to school</li>
            </ul>
            <p><strong>Night activities:</strong> Things we do when the sun sets</p>
            <ul>
                <li>Eating dinner</li>
                <li>Taking a bath</li>
                <li>Reading a bedtime story</li>
                <li>Sleeping</li>
                <li>Putting on pajamas</li>
            </ul>
            <p><strong>Some activities can be both:</strong> Like eating (breakfast in morning, dinner at night) or washing (face in morning, bath at night).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FFC107;"></i> Morning Example</div>
                <p>"I eat breakfast in the morning." - Breakfast is a morning activity.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon" style="color: #673AB7;"></i> Night Example</div>
                <p>"I sleep at night." - Sleeping is a night activity.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sorting Game!</div>
                <p>Let's play the "Sun and Moon Sort"! When I hold up the sun picture, shout a morning activity. When I hold up the moon, shout a night activity!</p>
            </div>
        `,
        taskInstructions: "Sort activities into morning and night categories.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Morning or Night?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write "Morning" or "Night" for each activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Eating breakfast: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Sleeping: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Brushing teeth before bed: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Waking up: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Eating dinner: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sort the Pictures</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines to connect activities to the correct time:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🌞 Morning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☐ Putting on pajamas</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☐ Eating breakfast</div>
                        <div>🌙 Night &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☐ Going to school</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ☐ Reading a bedtime story</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Morning and Night</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw two pictures: one morning activity and one night activity:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">🌞 Morning</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">I ________________ in the morning.</div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">🌙 Night</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">I ________________ at night.</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Activity Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find 2 things in the classroom that we might use in the morning and 2 at night:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Morning: ________________ and ________________</div>
                        <div>Night: ________________ and ________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Make a list of 3 morning activities and 3 night activities you do at home. Draw one from each list.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Putting it All Together",
        subtopic: "Describing objects, chores, and activities",
        lessonContent: `
            <p>Today is our review celebration! We'll put everything together: describing objects, chores, AND daily activities!</p>
            <p><strong>Key Concept:</strong> We can use descriptive language for objects, chores we do, and our daily routines.</p>
            <p><strong>Three types of descriptions:</strong></p>
            <ol>
                <li><strong>Describing objects:</strong> "I have a big black bag." (size + color + object)</li>
                <li><strong>Describing chores:</strong> "I help with sweeping." (action + chore)</li>
                <li><strong>Describing activities:</strong> "I like eating." (feeling + activity)</li>
            </ol>
            <p><strong>Putting it all together:</strong></p>
            <p>"I have a small red toothbrush. I help with cleaning my room. I like brushing my teeth."</p>
            <p><strong>Why this is important:</strong> Being able to describe different things helps us communicate clearly and share about our lives!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-bag" style="color: #795548;"></i> Object Description</div>
                <p>"I have a soft blue pillow." - Describing an object with color and texture.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-broom" style="color: #8D6E63;"></i> Chore Description</div>
                <p>"I help with washing dishes." - Describing a household chore.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running" style="color: #4CAF50;"></i> Activity Description</div>
                <p>"I enjoy playing outside." - Describing a daily activity with feeling.</p>
            </div>
        `,
        taskInstructions: "Practice describing objects, chores, and activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Describe an Object</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at your pencil case or bag. Describe it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I have a <span class="answer-space" style="width: 80px;"></span> <span class="answer-space" style="width: 80px;"></span> <span class="answer-space" style="width: 100px;"></span>.</div>
                        <div>(size) (color) (object)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Describe a Chore</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Think of a chore you do at home. Complete the sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I help with <span class="answer-space" style="width: 200px;"></span>.</div>
                        <div style="margin-top: 10px;">Draw yourself doing this chore:</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Describe an Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Think of a daily activity you enjoy. Complete the sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I like <span class="answer-space" style="width: 200px;"></span>.</div>
                        <div style="margin-top: 10px;">Is this a morning or night activity? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Put It All Together</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Now combine all three! Write one sentence for each:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                        <div>Object: I have a ________________</div>
                        <div>Chore: I help with ________________</div>
                        <div>Activity: I like ________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Daily Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of your busy day. Include one object, one chore, and one activity:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        In my picture: I have a ________________. I help with ________________. I like ________________.
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home how to describe three things: an object, a chore, and an activity. Share your sentences from today.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleEnglishWeek10);
    console.log("english-week10-objects.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleEnglishWeek10);
    console.log("english-week10-objects.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleEnglishWeek10',
        metadata: middleEnglishWeek10.metadata,
        days: middleEnglishWeek10
    });
    console.log("english-week10-objects.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleEnglishWeek10 = middleEnglishWeek10;
console.log("english-week10-objects.js loaded and registered successfully");