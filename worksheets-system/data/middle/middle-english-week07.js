// Grade 3 English - Week 7 Data (Simple Stories - Listening and Retelling)
const middleEnglishWeek7 = {
    metadata: {
        grade: "middle",
        subject: "English",
        week: 7,
        title: "Simple Stories — Listening and Retelling",
        description: "Listening to short stories and learning to answer questions and retell events"
    },
    
    monday: {
        subject: "English",
        topic: "The Listening Ears",
        subtopic: "Listen and respond to simple stories",
        lessonContent: `
            <p>Welcome to our storytelling lesson! Today, we will learn how to be good listeners and understand simple stories.</p>
            <p><strong>Key Concept:</strong> Good listeners sit quietly, look at the storyteller, and think about the story.</p>
            <p><strong>What is a story?</strong> A story tells us about people, animals, or things and what happens to them.</p>
            <p><strong>How to be a good listener:</strong></p>
            <ul>
                <li>Sit quietly with your hands in your lap</li>
                <li>Look at the person telling the story</li>
                <li>Think about the pictures in your mind</li>
                <li>Wait until the story is finished before speaking</li>
            </ul>
            <p><strong>Today's story:</strong> We will listen to a short story about a pet cat. Listen carefully for WHO is in the story and WHAT happens!</p>
            <p><strong>Story Time:</strong> "The cat sat on a mat. The cat saw a bird. The cat went meow."</p>
            <p>After listening, we will answer simple questions about the story.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen" style="color: #4CAF50;"></i> Good Listening</div>
                <p>When Teacher reads the story, we sit still like statues and look at Teacher's face.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat" style="color: #FF9800;"></i> Story Character</div>
                <p>The main character in our story is a cat. Characters are WHO the story is about.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Listening Statue Game</div>
                <p>Let's play "Freeze Listening!" When the story starts, freeze like a statue. If you move, you become the next storyteller!</p>
            </div>
        `,
        taskInstructions: "Listen carefully to the story and answer the questions.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Listen to the story. Circle the picture of who the story is about:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Picture of a dog</div>
                    <div>☐ Picture of a cat</div>
                    <div>☐ Picture of a bird</div>
                    <div>☐ Picture of a fish</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> What did the cat do first? Draw a line to match:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>The cat → ☐ saw a bird</div>
                    <div>The cat → ☐ sat on a mat</div>
                    <div>The cat → ☐ went meow</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw what the cat saw:
                <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">The cat saw a ________________.</div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Answer the questions:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <div><strong>Who</strong> was on the mat? <span class="answer-space" style="width: 150px; margin-left: 10px;"></span></div>
                    <div style="margin-top: 10px;"><strong>What</strong> sound did the cat make? <span class="answer-space" style="width: 150px; margin-left: 10px;"></span></div>
                </div>
            </div>
        `,
        homework: "Tell the cat story to someone at home. Ask them one 'Who' question and one 'What' question about the story.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Question Time",
        subtopic: "Respond to simple stories using 'Where' and 'When'",
        lessonContent: `
            <p>Today we will listen to another story and learn to answer TWO important story questions: WHERE and WHEN.</p>
            <p><strong>Key Concept:</strong> Every story happens somewhere (WHERE) and at some time (WHEN).</p>
            <p><strong>WHERE questions:</strong> Help us know the place or setting of the story.</p>
            <ul>
                <li>Where did the story happen?</li>
                <li>Where was the character?</li>
                <li>Where did they go?</li>
            </ul>
            <p><strong>WHEN questions:</strong> Help us know the time of the story.</p>
            <ul>
                <li>When did it happen? (morning, afternoon, night)</li>
                <li>When did they go there?</li>
                <li>When did they come back?</li>
            </ul>
            <p><strong>Today's story:</strong> "Kofi went to the market in the morning. He bought an apple. Then he went home."</p>
            <p>Listen carefully for WHERE Kofi went and WHEN he went there!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marker-alt" style="color: #2196F3;"></i> WHERE Example</div>
                <p>"WHERE did Kofi go?" "He went to the market." The market is the WHERE of the story.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock" style="color: #FF9800;"></i> WHEN Example</div>
                <p>"WHEN did Kofi go?" "He went in the morning." Morning is the WHEN of the story.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Where-When Clap Game</div>
                <p>Let's play a clapping game! When I say "WHERE," clap once. When I say "WHEN," clap twice. Let's see if you can keep up!</p>
            </div>
        `,
        taskInstructions: "Listen to the story and answer the WHERE and WHEN questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Story Listening</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to the story. Circle WHERE Kofi went:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ To school</div>
                        <div>☐ To the market</div>
                        <div>☐ To the park</div>
                        <div>☐ To the farm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: WHEN Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle WHEN Kofi went to the market:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ In the morning</div>
                        <div>☐ In the afternoon</div>
                        <div>☐ At night</div>
                        <div>☐ In the evening</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Setting</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw WHERE the story happened:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This is the ________________. (WHERE)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Time of Day</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture showing WHEN the story happened:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This shows ________________. (WHEN)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Complete the Answers</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>WHERE</strong> did Kofi buy the apple? <span class="answer-space" style="width: 150px;"></span></div>
                        <div style="margin-top: 10px;"><strong>WHEN</strong> did he go there? <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Tell someone at home a short story about going somewhere. Make sure to say WHERE you went and WHEN you went.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "The Story Train",
        subtopic: "Re-tell simple stories (Chronology)",
        lessonContent: `
            <p>Today we will learn how stories have an order, like a train with cars that follow one another!</p>
            <p><strong>Key Concept:</strong> Stories happen in sequence - first one thing, then another, then finally something else.</p>
            <p><strong>Story Sequence Words:</strong></p>
            <ul>
                <li><strong>First</strong> - What happens at the beginning</li>
                <li><strong>Next</strong> - What happens in the middle</li>
                <li><strong>Finally</strong> - What happens at the end</li>
            </ul>
            <p><strong>Today's story:</strong> "Planting a Seed"</p>
            <ol>
                <li><strong>First,</strong> I put soil in a pot.</li>
                <li><strong>Next,</strong> I plant a seed in the soil.</li>
                <li><strong>Finally,</strong> I water the seed and wait for it to grow.</li>
            </ol>
            <p>We will practice saying what happened FIRST, NEXT, and FINALLY in the story.</p>
            <p><strong>The Story Train:</strong> Imagine each story part is a train car. The FIRST car comes first, then the NEXT car, then FINALLY the last car!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train" style="color: #795548;"></i> First Train Car</div>
                <p>"First, I put soil in a pot." This is the beginning of our story train.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train" style="color: #607D8B;"></i> Next Train Car</div>
                <p>"Next, I plant a seed." This is the middle car of our story train.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train" style="color: #4CAF50;"></i> Finally Train Car</div>
                <p>"Finally, I water the seed." This is the last car of our story train!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Story Train Game</div>
                <p>Let's make a human story train! Each person says one part of the story in order: First, Next, Finally!</p>
            </div>
        `,
        taskInstructions: "Put the story events in order using FIRST, NEXT, and FINALLY.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sequence Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the story part with the correct sequence word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Put soil in a pot → <strong>First</strong> / <strong>Next</strong> / <strong>Finally</strong></div>
                        <div>☐ Water the seed → <strong>First</strong> / <strong>Next</strong> / <strong>Finally</strong></div>
                        <div>☐ Plant the seed → <strong>First</strong> / <strong>Next</strong> / <strong>Finally</strong></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Sequence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw what happens FIRST, NEXT, and FINALLY:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">FIRST</div>
                            <div class="drawing-area" style="height: 100px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">NEXT</div>
                            <div class="drawing-area" style="height: 100px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">FINALLY</div>
                            <div class="drawing-area" style="height: 100px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the story sequence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>First,</strong> I ________________________.</div>
                        <div><strong>Next,</strong> I ________________________.</div>
                        <div><strong>Finally,</strong> I ________________________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Story Train Order</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Number the pictures in the correct story order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Picture of watering seed → Number: ____</div>
                        <div>☐ Picture of putting soil → Number: ____</div>
                        <div>☐ Picture of planting seed → Number: ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: What Happened When?</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What happened <strong>FIRST</strong> in the story? <span class="answer-space" style="width: 200px;"></span></div>
                        <div style="margin-top: 10px;">What happened <strong>FINALLY</strong> in the story? <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Tell someone at home how to do something in order using FIRST, NEXT, and FINALLY (like brushing teeth or making a sandwich).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Character Voices",
        subtopic: "Re-tell simple stories (Characters and Plot)",
        lessonContent: `
            <p>Today is our storytelling celebration! We will meet characters in a story and use different voices for them.</p>
            <p><strong>Key Concept:</strong> Characters are the people or animals in a story. Each character can have their own voice!</p>
            <p><strong>Today's story:</strong> "The Lion and the Mouse"</p>
            <p><strong>Story:</strong> "A big lion slept in the sun. A small mouse ran past. The lion woke up and said 'ROAR!' The mouse said 'Squeak, please don't eat me!' The lion let the mouse go."</p>
            <p><strong>Character Voices:</strong></p>
            <ul>
                <li><strong>Lion voice:</strong> Deep, loud, and strong (ROAR!)</li>
                <li><strong>Mouse voice:</strong> High, soft, and squeaky (Squeak!)</li>
            </ul>
            <p><strong>What is plot?</strong> Plot is WHAT happens in the story - the actions and events.</p>
            <p><strong>Today we will:</strong></p>
            <ol>
                <li>Name the characters in the story</li>
                <li>Use different voices for each character</li>
                <li>Describe what each character did (the plot)</li>
                <li>Retell the story with expression!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-crown" style="color: #FFC107;"></i> Lion Character</div>
                <p>"ROAR!" said the lion in a big, deep voice. The lion is strong and sleeps in the sun.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse" style="color: #9E9E9E;"></i> Mouse Character</div>
                <p>"Squeak!" said the mouse in a small, squeaky voice. The mouse is tiny and runs quickly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Voice Switch Game</div>
                <p>Let's play "Voice Switch!" When I show the lion picture, use a lion voice. When I show the mouse, use a mouse voice!</p>
            </div>
        `,
        taskInstructions: "Practice identifying characters and using different voices to retell the story.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Name the Characters</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Who are the characters in the story? Circle both:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ A lion</div>
                        <div>☐ A cat</div>
                        <div>☐ A mouse</div>
                        <div>☐ A dog</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Character Voices</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match the character with their voice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Lion → ☐ High and squeaky voice</div>
                        <div>Mouse → ☐ Deep and loud voice</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Characters</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the lion and the mouse:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">The Lion</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">The Mouse</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Character Actions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What did each character do? Write one action for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The lion: <span class="answer-space" style="width: 200px;"></span></div>
                        <div style="margin-top: 10px;">The mouse: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Retell with Voices</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Practice retelling the story with a partner. Use different voices!
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>Partner 1 (as Lion): "________________"</div>
                        <div>Partner 2 (as Mouse): "________________"</div>
                        <div>Draw your favorite part of the retelling:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Storyteller Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw yourself telling a story with character voices:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I am telling a story about ________________ and ________________.</div>
                </div>
            </div>
        `,
        homework: "Tell the Lion and Mouse story to someone at home. Use a lion voice and a mouse voice. Ask them to name the characters.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleEnglishWeek7);
    console.log("english-week7-objects.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleEnglishWeek7);
    console.log("english-week7-objects.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleEnglishWeek7',
        metadata: middleEnglishWeek7.metadata,
        days: middleEnglishWeek7
    });
    console.log("english-week7-objects.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleEnglishWeek7 = middleEnglishWeek7;
console.log("english-week7-objects.js loaded and registered successfully");