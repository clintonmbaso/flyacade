// Grade 2 Literacy - Week 10 Data (Alternative Consonant Spellings)
const grade2LiteracyWeek10 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        week: 10,
        title: "Alternative Consonant Spellings - Blending and Fluency",
        description: "Blending words with alternative consonants and reading them in context"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Blending Practice with Mixed Consonants",
        subtopic: "Fluent blending and reading of words with alternative consonant spellings",
        lessonContent: `
            <p>Welcome to our Literacy lesson! Today we are all "Word Builders" who will use all the special consonant teams we've learned so far.</p>
            <p><strong>Key Concept:</strong> We can blend and read words with different consonant spellings smoothly and correctly.</p>
            <p><strong>What we're reviewing:</strong></p>
            <ul>
                <li><strong>"ph"</strong> makes the /f/ sound like in <strong>phone</strong></li>
                <li><strong>"kn"</strong> makes the /n/ sound like in <strong>knock</strong></li>
                <li><strong>"wr"</strong> makes the /r/ sound like in <strong>wrist</strong></li>
                <li><strong>"wh"</strong> makes the /w/ sound like in <strong>white</strong></li>
                <li><strong>"ck"</strong> makes the /k/ sound like in <strong>clock</strong></li>
                <li><strong>Double consonants</strong> like in <strong>dress</strong></li>
            </ul>
            <p><strong>Blending Strategy:</strong> Look at the whole word, find the special consonant team, then blend all the sounds together smoothly.</p>
            <p><strong>Why is blending important?</strong> Smooth blending helps us read words quickly and understand what we're reading!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building" style="color: #2196F3;"></i> Word Building</div>
                <p><strong>"phone"</strong> - "ph" says /f/, "o" says /ō/, "n" says /n/, "e" is silent. Blend: /f/ /ō/ /n/ = phone!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hammer"></i> Construction Example</div>
                <p><strong>"knock"</strong> - The "k" is silent! "kn" says /n/, "o" says /ŏ/, "ck" says /k/. Blend: /n/ /ŏ/ /k/ = knock!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Flashcard Drill!</div>
                <p>We'll use flashcards with words like phone, knock, dress, clock, and wrist. We'll blend them together as a class!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice blending words with alternative consonants.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Flashcard Drill Practice:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                    <div>Read these words aloud to your partner:</div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                        <div class="word-card" style="padding: 8px; background: white; border-radius: 4px; text-align: center;">phone</div>
                        <div class="word-card" style="padding: 8px; background: white; border-radius: 4px; text-align: center;">knock</div>
                        <div class="word-card" style="padding: 8px; background: white; border-radius: 4px; text-align: center;">dress</div>
                        <div class="word-card" style="padding: 8px; background: white; border-radius: 4px; text-align: center;">clock</div>
                        <div class="word-card" style="padding: 8px; background: white; border-radius: 4px; text-align: center;">wrist</div>
                        <div class="word-card" style="padding: 8px; background: white; border-radius: 4px; text-align: center;">whale</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Word Path Worksheet:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Read the word path from START to FINISH. Check off each word as you read it correctly:</div>
                    <div style="margin-top: 10px; padding: 15px; background: #FFF8E1; border: 2px dashed #FFC107; border-radius: 8px;">
                        <div style="text-align: center; font-weight: bold; color: #4CAF50;">START → phone → knock → whistle → dress → clock → wrist → photo → FINISH</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <div>Partner check: My partner read _______ words correctly.</div>
                        <div class="answer-space" style="width: 60px; display: inline-block;"></div> out of 7
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Sort the Words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Write each word under the correct consonant pattern:</div>
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; background: #F3E5F5;">
                            <div style="font-weight: bold; text-align: center;">"ph" words</div>
                            <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px; background: #E8F5E9;">
                            <div style="font-weight: bold; text-align: center;">"kn" words</div>
                            <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px; background: #E3F2FD;">
                            <div style="font-weight: bold; text-align: center;">"wr" words</div>
                            <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;">Words: phone, knock, write, photo, knee, wrist, graph, know</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Beat the Clock Game:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFEBEE; border-radius: 5px;">
                    <div><strong>Class Record:</strong> How many words can we read in 60 seconds?</div>
                    <div style="margin-top: 10px;">
                        <div>Number of words read: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>Draw a clock showing 60 seconds:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 words at home that have 'ph', 'kn', 'wr', 'wh', or 'ck' in them. Write them down and bring them to class.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Reading Fluency in Context",
        subtopic: "Reading sentences and phrases containing alternative consonant spellings",
        lessonContent: `
            <p>Today we will practice reading our special words in full sentences and stories!</p>
            <p><strong>Key Concept:</strong> Reading words in lists is good practice, but reading them in sentences helps us understand real stories.</p>
            <p><strong>What is fluency?</strong></p>
            <ul>
                <li>Reading with correct speed - not too fast, not too slow</li>
                <li>Reading with expression - using your voice to show meaning</li>
                <li>Pausing at punctuation - stopping at periods, pausing at commas</li>
                <li>Reading accurately - saying all the words correctly</li>
            </ul>
            <p><strong>Model Sentence:</strong> "She took a photo of the white duck near the rock."</p>
            <p><strong>Fluency Tips:</strong></p>
            <ol>
                <li>Take a breath before you start</li>
                <li>Look for the special consonant teams first</li>
                <li>Read to the punctuation mark</li>
                <li>Use expression - make it sound interesting!</li>
            </ol>
            <p><strong>Why read in context?</strong> Stories are more fun than word lists! When we read sentences, we practice for real books.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader" style="color: #673AB7;"></i> Sentence Example</div>
                <p><strong>"The knight had a sore wrist."</strong> - Read smoothly: "The knight (pause) had a sore wrist (period)."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comments"></i> Dialogue Example</div>
                <p><strong>"Pick up the phone and call him."</strong> - Read with expression like you're really telling someone to do this!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Partner Reading!</div>
                <p>We'll read sentences to a partner. Listeners give a thumbs up for good expression and accuracy!</p>
            </div>
        `,
        taskInstructions: "Practice reading sentences and stories with alternative consonant words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Partner Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read these sentences to your partner. Partner listens and checks for fluency:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                        <div>1. "The knight had a sore wrist."</div>
                        <div>2. "Pick up the phone and call him."</div>
                        <div>3. "I know how to write with my right hand."</div>
                        <div>4. "The white whale is very big."</div>
                        <div>5. "Knock on the door with your knuckles."</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <div>Partner feedback: My partner read with ☐ Good expression ☐ Good speed ☐ Good accuracy</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Story Reading and Underlining</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read this short story. Underline all words with alternative consonant spellings:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #E8F5E9; border-radius: 5px; line-height: 1.6;">
                        <div><strong>The Photo Trip</strong></div>
                        <div>My dad took a photo of a white duck. The duck was near a rock. Then we saw a big clock on a tower. I know how to tell time on that clock!</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Words I underlined: <span class="answer-space" style="width: 300px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture showing what happened in "The Photo Trip":
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My picture shows: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence using at least two alternative consonant words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div class="answer-space" style="height: 40px; width: 100%;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Read a story from your home reading book. Find 3 sentences with special consonant words and copy them in your notebook.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Fluency Showcase and Application",
        subtopic: "Demonstrating reading fluency with alternative consonant words in extended text",
        lessonContent: `
            <p>Today is our Fluency Celebration! We'll show how well we can read words with special consonants in longer texts.</p>
            <p><strong>Key Concept:</strong> Good readers read smoothly, with expression, and understand what they're reading.</p>
            <p><strong>What makes a fluent reader?</strong></p>
            <ul>
                <li><strong>Accuracy:</strong> Reading words correctly</li>
                <li><strong>Rate:</strong> Reading at a good speed - not too fast, not too slow</li>
                <li><strong>Expression:</strong> Using your voice to make the reading sound interesting</li>
                <li><strong>Phrasing:</strong> Grouping words together in meaningful chunks</li>
            </ul>
            <p><strong>Performance Tips:</strong></p>
            <ol>
                <li>Practice reading your sentence 3 times before sharing</li>
                <li>Stand up straight and hold your paper so you can see it</li>
                <li>Look up at your audience when you can</li>
                <li>Speak loud and clear so everyone can hear</li>
                <li>Remember to pause at punctuation</li>
            </ol>
            <p><strong>Today's celebration:</strong> We'll share our reading with the class and celebrate our fluency growth!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks" style="color: #FF9800;"></i> Performance Example</div>
                <p><strong>"She took a photo of the white duck near the rock."</strong> - Read with excitement like you're telling a fun story!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-award" style="color: #FFC107;"></i> Fluency Checklist</div>
                <p>1. All words correct ✓ 2. Good speed ✓ 3. Expression ✓ 4. Phrasing ✓ = FLUENT READER!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Reading Theater!</div>
                <p>We'll take turns reading sentences aloud like we're actors on a stage!</p>
            </div>
        `,
        taskInstructions: "Practice and demonstrate your reading fluency with alternative consonant words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Practice Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Practice reading this paragraph 3 times silently, then once aloud to your partner:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #E3F2FD; border-radius: 5px; line-height: 1.6;">
                        <div><strong>The Clock Tower</strong></div>
                        <div>I know a knight who lives near the clock tower. He has a white phone. He will knock when he wants to talk. He writes with his right hand. His wrist is strong!</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Partner feedback: My partner needs to work on ☐ Speed ☐ Expression ☐ Accuracy ☐ Nothing - it was great!</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find and circle all alternative consonant words in the paragraph above:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I found <span class="answer-space" style="width: 40px;"></span> special words.</div>
                        <div>List them here: <span class="answer-space" style="width: 300px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Reading Performance</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Prepare to read one sentence aloud to the class:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Choose your sentence (circle one):</div>
                        <div>☐ "The knight had a sore wrist."</div>
                        <div>☐ "Pick up the phone and call him."</div>
                        <div>☐ "The white whale is very big."</div>
                        <div>☐ "I know how to write with my right hand."</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Practice reading your sentence here (3 times):</div>
                        <div class="answer-space" style="height: 80px; width: 100%;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fluency Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Rate your own fluency after practicing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ I read all words correctly</div>
                        <div>☐ I used good expression</div>
                        <div>☐ I paused at the period</div>
                        <div>☐ I read at a good speed</div>
                        <div>☐ I looked at my audience</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw yourself reading fluently to the class:</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Fluency Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Design your own "Fluency Expert" certificate:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #FFF8E1; border: 3px solid #FFC107; border-radius: 8px; text-align: center;">
                        <div style="font-size: 20px; font-weight: bold; color: #795548;">CERTIFICATE OF FLUENCY</div>
                        <div style="margin-top: 10px;">This certifies that</div>
                        <div class="answer-space" style="height: 30px; width: 200px; margin: 10px auto;"></div>
                        <div>is a Fluent Reader of Alternative Consonant Words!</div>
                        <div style="margin-top: 15px;">Date: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Teacher Signature: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Read the 'Clock Tower' paragraph to someone at home. Have them sign your fluency certificate as a witness!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek10);
    console.log("literacy-week10-alternative-consonants.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek10);
    console.log("literacy-week10-alternative-consonants.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek10',
        metadata: grade2LiteracyWeek10.metadata,
        days: grade2LiteracyWeek10
    });
    console.log("literacy-week10-alternative-consonants.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek10 = grade2LiteracyWeek10;
console.log("literacy-week10-alternative-consonants.js loaded and registered successfully");