// Grade Middle Literacy - Term 1 Week 7 Data
const gradeMiddleLiteracyWeek7 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 1,
        week: 7,
        title: "Visual Memory & Name Recognition",
        description: "Building visual memory skills through object recall and developing name recognition abilities"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Visual Memory",
        subtopic: "Recalling Hidden Objects (Utensils & Toys)",
        lessonContent: `
            <p>Welcome to our visual memory lesson! Today we'll practice our observation skills by remembering objects we see for just a short time.</p>
            <p><strong>Key Question:</strong> How many objects can you remember after looking at them for a few seconds?</p>
            <p><strong>Introduction:</strong> Visual memory is our ability to remember what we see. This skill helps us recognize letters, words, and everything we read! Today we'll practice by looking at familiar objects - utensils and toys - then trying to recall them when they're hidden.</p>
            <p><strong>Why Visual Memory Matters for Literacy:</strong></p>
            <ul>
                <li>Helps us remember what letters and words look like</li>
                <li>Allows us to recognize sight words quickly</li>
                <li>Builds foundation for reading fluency</li>
                <li>Supports spelling and writing skills</li>
            </ul>
            <p><strong>Today's Objects:</strong></p>
            <ol>
                <li><strong>Utensils:</strong> Spoon, fork, knife, ladle, spatula</li>
                <li><strong>Toys:</strong> Ball, blocks, doll, car, stuffed animal</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Look Closely!</div>
                <p>When you look at objects, pay attention to their shape, color, size, and details. These "clues" help your brain remember them better!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Memory Tip</div>
                <p>Try saying the names of objects out loud as you look at them. Hearing the word and seeing the object together makes a stronger memory!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Make It a Game</div>
                <p>Playing "I Spy" or memory matching games at home helps strengthen your visual memory skills!</p>
            </div>
        `,
        taskInstructions: "Look at a group of objects, then recall which ones were hidden or removed.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Object Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look carefully at the objects your teacher shows you. You will have 30 seconds to memorize them.
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p style="text-align: center; color: #999;"><em>Teacher will place 5-7 objects here for observation</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Recall and Record</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After the objects are covered or hidden, write or draw all the objects you remember:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How many objects did you remember correctly? _____ out of _____
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What's Missing?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at the objects again. One object will be removed. Which object is missing?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What strategy helped you remember the most objects?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "At home, have a family member place 5 objects on a tray. Look at them for 30 seconds, then cover them. Write down or say all the objects you remember. Try again with 7 objects tomorrow!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Name Recognition",
        subtopic: "Finding and Identifying My Own Name",
        lessonContent: `
            <p>Today we'll practice recognizing our own name - one of the most important words we will ever learn!</p>
            <p><strong>Key Question:</strong> Can you find your name card among other name cards?</p>
            <p><strong>Introduction:</strong> Your name is special! Learning to recognize your written name is the first step toward reading and writing. Today we'll practice finding our name cards among a small group of other names.</p>
            <p><strong>What to Look For When Finding Your Name:</strong></p>
            <ul>
                <li><strong>First Letter:</strong> What letter does your name start with?</li>
                <li><strong>Length:</strong> How many letters are in your name?</li>
                <li><strong>Special Letters:</strong> Are there any letters that only appear in your name?</li>
                <li><strong>Shape:</strong> Does your name have tall letters (like l, t, k) or letters with tails (like g, j, y)?</li>
            </ul>
            <p><strong>Name Recognition Activities We'll Do:</strong></p>
            <ol>
                <li>Finding our name card among 3 cards</li>
                <li>Finding our name card among 5 cards</li>
                <li>Finding our name card among 7-8 cards</li>
                <li>Matching our name card to a picture of ourselves</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Your Name Is Special</div>
                <p>Your name is the first word most children learn to recognize. When you can find your name, you're becoming a reader!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Work</div>
                <p>Finding your name is like being a detective! Look for clues: the first letter, the last letter, and how long the name is.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Confidence Builder</div>
                <p>Every time you successfully find your name, your brain grows stronger. Celebrate each success - you're learning to read!</p>
            </div>
        `,
        taskInstructions: "Find your name card among a small group of cards, then among larger groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find Your Name (3 Cards)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will show you 3 name cards. Point to your name:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #f0f8ff; border-radius: 8px; text-align: center;">
                        <span style="display: inline-block; width: 80px; padding: 10px; margin: 5px; background: white; border: 1px solid #ccc;">[Name 1]</span>
                        <span style="display: inline-block; width: 80px; padding: 10px; margin: 5px; background: white; border: 1px solid #ccc;">[Name 2]</span>
                        <span style="display: inline-block; width: 80px; padding: 10px; margin: 5px; background: white; border: 1px solid #ccc;">[Name 3]</span>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I found my name! ✓</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find Your Name (5 Cards)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now find your name among 5 cards:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #f0f8ff; border-radius: 8px; text-align: center;">
                        <span style="display: inline-block; width: 70px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 1]</span>
                        <span style="display: inline-block; width: 70px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 2]</span>
                        <span style="display: inline-block; width: 70px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 3]</span>
                        <span style="display: inline-block; width: 70px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 4]</span>
                        <span style="display: inline-block; width: 70px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 5]</span>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Which card is yours? ________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find Your Name (7-8 Cards)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Challenge yourself! Find your name among 7-8 cards:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #f0f8ff; border-radius: 8px; text-align: center;">
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 1]</span>
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 2]</span>
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 3]</span>
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 4]</span>
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 5]</span>
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 6]</span>
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 7]</span>
                        <span style="display: inline-block; width: 65px; padding: 8px; margin: 3px; background: white; border: 1px solid #ccc;">[Name 8]</span>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I found it! My name is ________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Name and Picture Match</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match each name card to the correct picture:
                    <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                            <span style="font-size: 12px;">[Name]</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                            <span style="font-size: 12px;">[Name]</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                            <span style="font-size: 12px;">[Name]</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                            <span style="font-size: 12px;">[My Name]</span>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My name card belongs with my picture! ✓</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Name Tracing & Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Trace and then write your name:
                    <div style="margin-top: 10px;">
                        <div>Trace: <span style="border-bottom: 1px dashed #999; width: 200px; display: inline-block;">__________</span></div>
                        <div style="margin-top: 10px;">Write on your own: <span style="border-bottom: 1px solid #999; width: 200px; display: inline-block;">__________</span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice finding your name at home. Ask a family member to write your name and 3 other names on separate pieces of paper. Mix them up and find your name. Do this 3 times! Then practice tracing your name.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleLiteracyWeek7);
    console.log("grade-middle-literacy-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleLiteracyWeek7);
    console.log("grade-middle-literacy-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleLiteracyWeek7',
        metadata: gradeMiddleLiteracyWeek7.metadata,
        days: gradeMiddleLiteracyWeek7
    });
    console.log("grade-middle-literacy-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleLiteracyWeek7 = gradeMiddleLiteracyWeek7;
console.log("grade-middle-literacy-week7.js loaded and registered successfully");