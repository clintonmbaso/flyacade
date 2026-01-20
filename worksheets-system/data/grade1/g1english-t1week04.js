// Grade 1 English - Week 4 Data
const grade1EnglishWeek4 = {
    metadata: {
        grade: 1,
        subject: "English",
        week: 4,
        title: "Listen and Do — Following Directions",
        description: "Learning to understand and follow verbal commands through movement, games, and role-play"
    },
    
    monday: {
        subject: "English",
        topic: "Movement & Action",
        subtopic: "Accurately responding to basic physical movement commands",
        lessonContent: `
            <p>Welcome to Week 4! Today we are going to learn how to listen and move. Our bodies can follow what words tell us to do!</p>
            <p><strong>Warm-up Game:</strong> Let's play "Follow the Leader." Watch what I do, and copy my actions exactly!</p>
            <p><strong>Today's Action Commands:</strong> We will learn four important commands:</p>
            <ol>
                <li><strong>Clap your hands.</strong> - Bring your hands together to make sound.</li>
                <li><strong>Sit down.</strong> - Bend your knees and rest on the floor or chair.</li>
                <li><strong>Jump up and down.</strong> - Push off the ground with both feet.</li>
                <li><strong>Stand up.</strong> - Get on your feet from sitting.</li>
            </ol>
            <p><strong>Why is this important?</strong> Listening to commands helps us in class, at home, and when playing games with friends!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running" style="color: #4CAF50;"></i> Action Example</div>
                <p>When I say <strong>"Clap your hands,"</strong> you bring your palms together like this! Let's try it three times.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Game Time!</div>
                <p>We'll play a fast-action game. When you hear a command, do it as quickly as you can. Ready?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Group Practice</div>
                <p>Let's practice all four commands together. First slowly, then faster!</p>
            </div>
        `,
        taskInstructions: "Show that you can listen and move by completing these activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw a line from the command to the correct picture:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Clap your hands <span style="margin-left: 20px;">☐ [Picture of person sitting]</span></div>
                    <div>Sit down <span style="margin-left: 20px;">☐ [Picture of hands clapping]</span></div>
                    <div>Jump up and down <span style="margin-left: 20px;">☐ [Picture of person standing]</span></div>
                    <div>Stand up <span style="margin-left: 20px;">☐ [Picture of person jumping]</span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Listen to your teacher. When you hear a command, do the action. Check off each one you do correctly:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Clap your hands</div>
                    <div>☐ Sit down</div>
                    <div>☐ Jump up and down</div>
                    <div>☐ Stand up</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw yourself doing your favorite action command:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">This is me: ______________________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Put these actions in order from 1 to 4:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>____ Stand up</div>
                    <div>____ Clap your hands</div>
                    <div>____ Sit down</div>
                    <div>____ Jump up and down</div>
                </div>
            </div>
        `,
        homework: "Teach a family member two action commands. Write down which ones you taught them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "\"Simon Says\" (Listening Skills)",
        subtopic: "Distinguishing when to follow a command based on a verbal cue",
        lessonContent: `
            <p>Today we'll play a famous listening game called "Simon Says." This game teaches us to listen very carefully!</p>
            <p><strong>The Rule:</strong> You only do the action if I say <strong>"Simon says"</strong> first. If I don't say "Simon says," you stay still!</p>
            <p><strong>How to play:</strong></p>
            <ol>
                <li>Listen for the words "Simon says"</li>
                <li>If you hear "Simon says," do the action</li>
                <li>If you don't hear "Simon says," freeze like a statue!</li>
            </ol>
            <p><strong>Commands we'll use:</strong></p>
            <ul>
                <li>"Simon says... touch your ears."</li>
                <li>"Simon says... touch your nose."</li>
                <li>"Touch your chin!" (No Simon says—freeze!)</li>
                <li>"Simon says... jump once."</li>
            </ul>
            <p><strong>Why is this game helpful?</strong> It makes us better listeners, which helps us follow directions in school and at home.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle" style="color: #4CAF50;"></i> Do It Example</div>
                <p>"<strong>Simon says touch your ears.</strong>" → You touch your ears because Simon said so!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle" style="color: #f44336;"></i> Don't Do It Example</div>
                <p>"<strong>Touch your nose!</strong>" → You freeze! Simon didn't say it first.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-crown"></i> Be Simon!</div>
                <p>After we practice, one friend will get to be Simon and give commands to the class!</p>
            </div>
        `,
        taskInstructions: "Play Simon Says and show you know when to move and when to freeze.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Simon Says Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to your teacher. If it's a "Simon says" command, circle DO IT. If not, circle FREEZE:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"Simon says clap." - DO IT / FREEZE</div>
                        <div>"Touch your head." - DO IT / FREEZE</div>
                        <div>"Simon says sit down." - DO IT / FREEZE</div>
                        <div>"Jump up." - DO IT / FREEZE</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture of yourself playing Simon Says. Are you moving or freezing?
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">In this picture, I am ______________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Command</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Invent one "Simon says" command. Write it below:
                    <div class="answer-space" style="height: 40px;">Simon says ________________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Be the Teacher</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> With a partner, take turns being Simon. Check each action your partner does correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Partner followed "Simon says" command</div>
                        <div>☐ Partner froze when no "Simon says"</div>
                        <div>☐ Partner gave one command clearly</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Play Simon Says at home with someone. Write down one command you gave and whether they did it right.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Objects & Directions",
        subtopic: "Following commands related to classroom objects and spatial awareness",
        lessonContent: `
            <p>Today we'll use our listening skills to find and point to things in our classroom!</p>
            <p><strong>First, let's name some classroom objects:</strong></p>
            <ul>
                <li>Door</li>
                <li>Pencil</li>
                <li>Window</li>
                <li>Desk</li>
                <li>Chair</li>
                <li>Book</li>
            </ul>
            <p><strong>Today's Commands:</strong> We will practice "Point and Get" directions.</p>
            <ol>
                <li><strong>Point to the door.</strong> - Use your finger to show where it is.</li>
                <li><strong>Get your pencil.</strong> - Pick up your pencil from your desk.</li>
                <li><strong>Point to the window.</strong> - Show which way the window is.</li>
                <li><strong>Put your pencil on the desk.</strong> - Place it down gently.</li>
            </ol>
            <p><strong>Pair Work:</strong> You'll work with a friend. One gives a command, the other follows it. Then switch!</p>
            <p><strong>Why this matters:</strong> Knowing how to find and handle objects helps us stay organized and follow instructions.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-right" style="color: #2196F3;"></i> Pointing Example</div>
                <p>When I say "<strong>Point to the door,</strong>" you extend your arm and finger toward the door. Let's try!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Getting Example</div>
                <p>"<strong>Get your pencil</strong>" means pick it up carefully. We always treat our supplies gently.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-friends"></i> Partner Practice</div>
                <p>With a friend, take turns telling each other what to point to. Remember to use kind words!</p>
            </div>
        `,
        taskInstructions: "Show you can follow directions about objects by completing these tasks.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Point to It</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will say an object. Point to it, then check it off:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Door</div>
                        <div>☐ Window</div>
                        <div>☐ Desk</div>
                        <div>☐ Pencil</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw your desk and two objects on it. Label them:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Directions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With a partner, give and follow these commands. Check each when done:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ "Point to the chair."</div>
                        <div>☐ "Get your book."</div>
                        <div>☐ "Put your book under the desk."</div>
                        <div>☐ "Point to something blue."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Command Sequence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Follow these three commands in order:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        1. Point to the window.<br>
                        2. Get your pencil.<br>
                        3. Put your pencil on your desk.
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">I followed all three: ☐ Yes ☐ Almost</div>
                </div>
            </div>
        `,
        homework: "At home, give a family member a 'point to' command (like 'Point to the refrigerator'). Write down what you asked them to point to.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Roleplay & Body Parts",
        subtopic: "Giving and responding to commands involving body parts",
        lessonContent: `
            <p>It's Friday—time for roleplay and body parts! Today you'll get to be the teacher or captain.</p>
            <p><strong>Warm-up Song:</strong> Let's sing "Head, Shoulders, Knees, and Toes" to remember our body parts!</p>
            <p><strong>Body Parts We'll Use:</strong></p>
            <ul>
                <li>Head</li>
                <li>Shoulders</li>
                <li>Knees</li>
                <li>Toes</li>
                <li>Eyes</li>
                <li>Nose</li>
                <li>Ears</li>
                <li>Mouth</li>
            </ul>
            <p><strong>Roleplay Activity:</strong> We'll break into small groups. One person is the <strong>Captain</strong>. The Captain gives commands like:</p>
            <ol>
                <li>"Touch your shoulders."</li>
                <li>"Touch your knees."</li>
                <li>"Cover your eyes."</li>
                <li>"Wiggle your toes."</li>
            </ol>
            <p><strong>Reflection:</strong> We'll talk about how it feels to give commands vs. follow them. Both are important!</p>
            <p><strong>Final Challenge:</strong> Command Parade! Listen to three commands in a row and do them all in order.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-tie" style="color: #9C27B0;"></i> Captain Example</div>
                <p>If you are Captain, speak clearly and kindly: "<strong>Touch your nose.</strong>" Watch your friends follow!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Group Example</div>
                <p>In groups of 3 or 4, take turns being Captain. Everyone else follows the commands.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-parade"></i> Command Parade</div>
                <p>For our final challenge: "Clap, touch your nose, sit down." Can you do all three in the right order?</p>
            </div>
        `,
        taskInstructions: "Take turns being Captain and following commands in your group.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Body Part Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from the body part to its picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Shoulders <span style="margin-left: 20px;">☐ [Picture of knees]</span></div>
                        <div>Knees <span style="margin-left: 20px;">☐ [Picture of shoulders]</span></div>
                        <div>Eyes <span style="margin-left: 20px;">☐ [Picture of eyes]</span></div>
                        <div>Toes <span style="margin-left: 20px;">☐ [Picture of toes]</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Group Roleplay</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In your group, take turns being Captain. Check each role you try:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ I was Captain once.</div>
                        <div>☐ I followed commands from my Captain.</div>
                        <div>☐ I gave a command with "touch" in it.</div>
                        <div>☐ I listened carefully to my group.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: How Did It Feel?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a face showing how you felt when you were Captain:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Being Captain made me feel ________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Command Parade</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Listen to your teacher’s three commands. Do them in order, then check:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        Command 1: ________________<br>
                        Command 2: ________________<br>
                        Command 3: ________________
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">I did all three in order: ☐ Yes ☐ I tried my best</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Listening Star Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a star for yourself. Write one thing you're good at listening for:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I am good at listening for ____________________</div>
                </div>
            </div>
        `,
        homework: "Teach someone at home the Command Parade with three actions. Write down the three commands you used.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1EnglishWeek4);
    console.log("english-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1EnglishWeek4);
    console.log("english-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1EnglishWeek4',
        metadata: grade1EnglishWeek4.metadata,
        days: grade1EnglishWeek4
    });
    console.log("english-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1EnglishWeek4 = grade1EnglishWeek4;
console.log("english-week4.js loaded and registered successfully");