// Grade Middle English - Term 1 Week 10 Data
const gradeMiddleEnglishWeek10 = {
    metadata: {
        grade: "middle",
        subject: "English",
        term: 1,
        week: 10,
        title: "Simple Commands",
        description: "Learning to listen and respond to basic action commands and classroom management instructions"
    },
    
    monday: {
        subject: "English",
        topic: "Listening & Speaking",
        subtopic: "Action Commands (Part 1)",
        lessonContent: `
            <p>Welcome to our lesson on action commands! Today we'll learn how to understand and respond to basic action words in English.</p>
            <p><strong>Key Question:</strong> How do we understand and follow simple action commands?</p>
            <p><strong>Introduction:</strong> Commands are instructions we give to tell someone to do something. Today we'll learn three important action commands.</p>
            <p><strong>Action Commands - Part 1:</strong></p>
            <ol>
                <li><strong>"Sit down"</strong> - To move from standing to sitting position</li>
                <li><strong>"Stand up"</strong> - To move from sitting to standing position</li>
                <li><strong>"Jump"</strong> - To push your body off the ground using your legs</li>
            </ol>
            <p><strong>How to Respond:</strong></p>
            <ul>
                <li>Listen carefully to the command</li>
                <li>Watch the teacher's gestures and body language</li>
                <li>Perform the action immediately</li>
                <li>Say "Okay!" or "Yes!" to show you understand</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Sit Down</div>
                <p>When your teacher says "Sit down," you bend your knees and lower your body onto your chair or the floor.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-standing"></i> Stand Up</div>
                <p>When your teacher says "Stand up," you push up from your chair and straighten your legs until you are standing tall.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Jump</div>
                <p>When your teacher says "Jump," you push off the ground with both feet and lift your body into the air.</p>
            </div>
        `,
        taskInstructions: "Listen, respond, and practice the action commands with your classmates.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Do</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow your teacher's commands. Perform each action when you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "Sit down"</div>
                        <div>• "Stand up"</div>
                        <div>• "Jump"</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Check each action as you complete it:</em> ___ Sit down &nbsp;&nbsp; ___ Stand up &nbsp;&nbsp; ___ Jump</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Partner Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Work with a partner. Take turns giving and following commands:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing the Actions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of someone following each command:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; text-align: center;">
                            <strong>"Sit down"</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center;">
                            <strong>"Stand up"</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center;">
                            <strong>"Jump"</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which command was easiest for you to follow? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice the three commands with your family. Ask someone to say 'sit down,' 'stand up,' and 'jump' and show them the actions.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Listening & Speaking",
        subtopic: "Action Commands (Part 2)",
        lessonContent: `
            <p>Welcome back! Today we'll learn two more action commands: "come here" and "go there."</p>
            <p><strong>Key Question:</strong> How do we respond to commands that tell us to move toward or away from someone?</p>
            <p><strong>Introduction:</strong> Some commands tell us to change our location. Today we'll learn commands for moving closer or farther away.</p>
            <p><strong>Action Commands - Part 2:</strong></p>
            <ol>
                <li><strong>"Come here"</strong> - To move toward the person who is speaking</li>
                <li><strong>"Go there"</strong> - To move away from the speaker toward a specific place</li>
            </ol>
            <p><strong>Understanding Direction:</strong></p>
            <ul>
                <li><strong>"Here"</strong> means the location of the speaker (near me)</li>
                <li><strong>"There"</strong> means a different location (away from me)</li>
                <li>The speaker often points to show where "there" is</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-right"></i> Come Here</div>
                <p>When your teacher says "Come here" and waves their hand, you walk toward the teacher until you are close to them.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-location-arrow"></i> Go There</div>
                <p>When your teacher says "Go there" and points to the door, you walk away from the teacher to the door.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Opposite Directions</div>
                <p>"Come here" brings you closer to the speaker. "Go there" takes you farther from the speaker. They are opposites!</p>
            </div>
        `,
        taskInstructions: "Practice moving toward and away from the speaker using the commands.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Move</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow your teacher's commands. Move when you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "Come here" (walk toward the teacher)</div>
                        <div>• "Go there" (walk to a pointed location)</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Check each action as you complete it:</em> ___ Come here &nbsp;&nbsp; ___ Go there</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Point and Say</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In pairs, point to a location (door, window, desk) and tell your partner "Go there":
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Take turns. One person says "Come here" while waving. The other person responds:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Directions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture showing someone responding to each command:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; text-align: center;">
                            <strong>"Come here"</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center;">
                            <strong>"Go there"</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How is "come here" different from "go there"? Explain in your own words.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice 'come here' and 'go there' at home. Ask a family member to say each command and point where to go.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Listening & Speaking",
        subtopic: "Classroom Management Commands",
        lessonContent: `
            <p>Today we'll learn important classroom commands that help us follow rules and stay organized!</p>
            <p><strong>Key Question:</strong> What commands do we use to manage our classroom and follow school rules?</p>
            <p><strong>Introduction:</strong> Classroom management commands help teachers give instructions and help students know what to do. These commands keep everyone safe and focused.</p>
            <p><strong>Classroom Management Commands:</strong></p>
            <ol>
                <li><strong>"Close the door"</strong> - To push or pull the door until it is shut</li>
                <li><strong>"Raise your hand"</strong> - To lift one hand in the air to get the teacher's attention</li>
            </ol>
            <p><strong>Why We Use These Commands:</strong></p>
            <ul>
                <li>Closing the door keeps noise out and helps us focus</li>
                <li>Raising your hand shows respect and takes turns when speaking</li>
                <li>These commands create a calm, organized classroom</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-closed"></i> Close the Door</div>
                <p>When your teacher says "Close the door," you walk to the door, grab the handle, and gently push or pull until the door clicks shut.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Raise Your Hand</div>
                <p>When you want to answer a question or speak, you raise your hand in the air. Your teacher will call on you when it's your turn.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Classroom Rules</div>
                <p>Using commands like "raise your hand" helps everyone get a chance to speak. It's a sign of respect for the teacher and classmates.</p>
            </div>
        `,
        taskInstructions: "Practice responding to classroom management commands.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Do</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow your teacher's commands:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "Close the door" (walk to the door and close it gently)</div>
                        <div>• "Raise your hand" (lift your hand in the air)</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Check each action as you complete it:</em> ___ Close the door &nbsp;&nbsp; ___ Raise your hand</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Role Play</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Act out these classroom scenarios with a partner:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The classroom is noisy from the hallway. What command does the teacher give?</div>
                        <div>• You have a question for the teacher. What should you do?</div>
                    </div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing and Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of someone following each command:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; text-align: center;">
                            <strong>"Close the door"</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center;">
                            <strong>"Raise your hand"</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to raise your hand instead of shouting out?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice 'close the door' and 'raise your hand' at home. Show your family the correct way to do each action.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Listening & Speaking",
        subtopic: "Simon Says - Review Game",
        lessonContent: `
            <p>Today we'll play Simon Says, a fun game that uses all the commands we learned this term!</p>
            <p><strong>Key Question:</strong> Can you listen carefully and follow commands only when "Simon says"?</p>
            <p><strong>Introduction:</strong> Simon Says is a game that tests your listening skills. You only follow the command if it starts with "Simon says." If it doesn't, you stay still!</p>
            <p><strong>Commands We Learned This Term (Review):</strong></p>
            <ul>
                <li><strong>Sit down</strong> - Lower your body to a sitting position</li>
                <li><strong>Stand up</strong> - Rise to a standing position</li>
                <li><strong>Jump</strong> - Push off the ground with both feet</li>
                <li><strong>Come here</strong> - Walk toward the speaker</li>
                <li><strong>Go there</strong> - Walk to a pointed location</li>
                <li><strong>Close the door</strong> - Shut the door gently</li>
                <li><strong>Raise your hand</strong> - Lift one hand in the air</li>
            </ul>
            <p><strong>Simon Says Rules:</strong></p>
            <ol>
                <li>Listen carefully to the command</li>
                <li>If the command starts with "Simon says..." - DO the action!</li>
                <li>If the command does NOT start with "Simon says..." - DO NOT move!</li>
                <li>If you move when Simon didn't say, you are out (or try again)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> How to Play Simon Says</div>
                <p>Teacher says: "Simon says jump!" → Everyone jumps. ✓<br>
                Teacher says: "Sit down!" (without Simon says) → Everyone stays still. ✗ (Anyone who sits is out!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Listening is Key</div>
                <p>Simon Says teaches you to listen for the magic words "Simon says" before following any command. It's all about careful listening!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tasks"></i> All Term 1 Commands</div>
                <p>Today we will use sit down, stand up, jump, come here, go there, close the door, and raise your hand. You've learned them all!</p>
            </div>
        `,
        taskInstructions: "Play Simon Says using all the commands from Term 1.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Simon Says Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will lead the game. Follow these rules:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• If you hear "Simon says" + command → DO the action</div>
                        <div>• If you hear a command without "Simon says" → DON'T move</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Game notes - How many commands did you follow correctly?</em> ___</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Be the Leader</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Take turns being "Simon" and giving commands to the class:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write three "Simon says" commands you would give:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Simon says, "_____________________"</div>
                        <div>b. Simon says, "_____________________"</div>
                        <div>c. Simon says, "_____________________"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most challenging part of Simon Says?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which command from this term is your favorite? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Term 1 Review Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Check off all the commands you can now understand and follow:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr;">
                        <div>___ Sit down</div>
                        <div>___ Stand up</div>
                        <div>___ Jump</div>
                        <div>___ Come here</div>
                        <div>___ Go there</div>
                        <div>___ Close the door</div>
                        <div>___ Raise your hand</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach Simon Says to a family member or friend. Use all the commands you learned this term and play together!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleEnglishWeek10);
    console.log("grade-middle-english-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleEnglishWeek10);
    console.log("grade-middle-english-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleEnglishWeek10',
        metadata: gradeMiddleEnglishWeek10.metadata,
        days: gradeMiddleEnglishWeek10
    });
    console.log("grade-middle-english-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleEnglishWeek10 = gradeMiddleEnglishWeek10;
console.log("grade-middle-english-week10.js loaded and registered successfully");