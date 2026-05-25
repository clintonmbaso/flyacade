// Grade Middle English - Term 2 Week 10 Data
const gradeMiddleEnglishWeek10 = {
    metadata: {
        grade: "middle",
        subject: "English",
        term: 2,
        week: 10,
        title: "Rhymes & Rhythms",
        description: "Introducing short rhymes, recitation, actions, and building confidence in solo and group performance"
    },
    
    monday: {
        subject: "English",
        topic: "Rhymes & Rhythms",
        subtopic: "Introduction to Short Rhymes – Listening to a simple structured poem",
        lessonContent: `
            <p>Welcome to our Rhymes & Rhythms week! Today we'll discover the joy of short rhymes and how they create music with words.</p>
            <p><strong>Key Question:</strong> What makes a rhyme different from a regular sentence?</p>
            <p><strong>Introduction:</strong> Rhymes are short poems where the endings of words sound the same. They have a special rhythm that makes them fun to say and easy to remember.</p>
            <p><strong>What is a Rhyme?</strong></p>
            <ul>
                <li>Words that end with the same sound (cat/hat, see/bee, moon/June)</li>
                <li>Rhymes often have a regular beat or rhythm</li>
                <li>They can tell a story or describe something in a playful way</li>
            </ul>
            <p><strong>Listening to a Simple Rhyme:</strong></p>
            <div class="poem-box" style="background-color: #f0f8ff; padding: 15px; border-radius: 10px; margin: 10px 0;">
                <p style="font-style: italic; text-align: center;">
                "The sun is high,<br>
                The birds fly by.<br>
                A gentle breeze<br>
                Shakes through the trees."
                </p>
            </div>
            <p><strong>What to listen for:</strong></p>
            <ul>
                <li>Which words sound the same at the end?</li>
                <li>Can you feel a beat or rhythm?</li>
                <li>What pictures come to your mind?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Rhyme Example 1</div>
                <p>"Twinkle, twinkle, little star,<br>How I wonder what you are!"<br><em>Which words rhyme? (star/are)</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Rhyme Example 2</div>
                <p>"I have a little dog,<br>His name is Pat.<br>He sleeps on a log,<br>And chases a rat."<br><em>Which words rhyme? (dog/log, Pat/rat)</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clap"></i> Finding the Beat</div>
                <p>Clap your hands as you say each syllable. Can you feel the steady beat? Rhymes have a pattern that makes them bouncy and fun!</p>
            </div>
        `,
        taskInstructions: "Listen to rhymes, identify rhyming words, and practice clapping the rhythm.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listening and Identifying</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen as your teacher reads this rhyme. Circle the words that rhyme:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>"Rain, rain, go away,<br>Come again another day.<br>Little children want to play,<br>Rain, rain, go away."</p>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Rhyming Pairs</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match the words that rhyme:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 10px 0;">
                        <div>
                            <div>• cat</div>
                            <div>• tree</div>
                            <div>• moon</div>
                            <div>• light</div>
                            <div>• fun</div>
                        </div>
                        <div>
                            <div>→ bee</div>
                            <div>→ spoon</div>
                            <div>→ night</div>
                            <div>→ hat</div>
                            <div>→ run</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Clapping the Rhythm</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Practice saying this rhyme. Clap on each syllable. How many claps per line?
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>"One, two,<br>Buckle my shoe.<br>Three, four,<br>Knock at the door."</p>
                    </div>
                    <div>Line 1: ____ claps &nbsp;&nbsp;&nbsp; Line 2: ____ claps &nbsp;&nbsp;&nbsp; Line 3: ____ claps &nbsp;&nbsp;&nbsp; Line 4: ____ claps</div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: What Do You See?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of what you imagine when you hear this rhyme:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>"The stars are bright tonight,<br>They give a sparkling light.<br>The moon is round and high,<br>Smiling from the sky."</p>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find a short rhyme at home (nursery rhyme, poem, or song lyric). Write down two pairs of rhyming words you find.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Rhymes & Rhythms",
        subtopic: "Rhyme Recitation – Practicing reciting a short rhyme together as a group",
        lessonContent: `
            <p>Today we'll practice saying rhymes aloud together! Recitation means speaking a rhyme clearly and with feeling.</p>
            <p><strong>Key Question:</strong> How can your voice make a rhyme more interesting?</p>
            <p><strong>What is Recitation?</strong></p>
            <ul>
                <li>Speaking a poem or rhyme out loud</li>
                <li>Using your voice to show meaning and emotion</li>
                <li>Saying words clearly so everyone can understand</li>
            </ul>
            <p><strong>Tips for Great Recitation:</strong></p>
            <ol>
                <li><strong>Speak clearly</strong> – pronounce every word</li>
                <li><strong>Use expression</strong> – let your voice go up and down</li>
                <li><strong>Pause at commas and periods</strong> – don't rush</li>
                <li><strong>Look at your audience</strong> – make eye contact</li>
                <li><strong>Enjoy yourself</strong> – have fun with the words!</li>
            </ol>
            <p><strong>Today's Rhyme to Practice:</strong></p>
            <div class="poem-box" style="background-color: #f0f8ff; padding: 15px; border-radius: 10px; margin: 10px 0;">
                <p style="font-style: italic; text-align: center;">
                "The caterpillar crawled so slow,<br>
                Up the stem and down below.<br>
                Then one day, to my surprise,<br>
                A butterfly began to rise!"
                </p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Voice Expression</div>
                <p>Read "The caterpillar crawled so SLOW" - say "slow" in a slow, drawn-out voice. For "A butterfly began to RISE!" - make your voice go up at the end!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Group Recitation</div>
                <p>When reciting as a group, listen to each other. Start together, pause together, and end together. It sounds beautiful when everyone is in sync!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Confidence Tip</div>
                <p>If you feel nervous, take a deep breath. Remember that everyone is learning together. Your voice matters!</p>
            </div>
        `,
        taskInstructions: "Practice reciting rhymes as a group with clear pronunciation and expression.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Warm Up Your Voice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Practice saying these tongue twisters to warm up:
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f9f9f9; padding: 10px;">
                        <div>• "Red lorry, yellow lorry" (say 3 times fast)</div>
                        <div>• "She sells sea shells on the sea shore"</div>
                        <div>• "Betty bought a bit of butter"</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Which one was the hardest? Why?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Group Recitation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> With your group, practice reciting this rhyme. Pay attention to:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ Speaking together at the same time</div>
                        <div>✓ Saying each word clearly</div>
                        <div>✓ Using expression in your voice</div>
                        <div>✓ Pausing at the end of each line</div>
                    </div>
                    <div class="poem-box" style="background-color: #f9f9f9; padding: 15px; margin: 15px 0; border-left: 4px solid #4A90E2;">
                        <p style="text-align: center;">
                        "Little raindrops falling down,<br>
                        Splashing softly on the ground.<br>
                        Pitter-patter, what a sound,<br>
        Little raindrops all around."
                        </p>
                    </div>
                    <div class="answer-space" style="height: 80px;">
                        <p><em>How did your group do? What was easy? What was challenging?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Add Expression Marks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read this rhyme. Add arrows (↑ for higher voice, ↓ for lower voice) to show expression:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>"What is pink? A rose is pink.<br>
                        What is blue? The sky is blue.<br>
                        What is white? A swan is white.<br>
                        What is bright? The stars at night!"</p>
                    </div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> After practicing, rate yourself:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• I spoke clearly: ★ ★ ★ ★ ★</div>
                        <div>• I used expression: ★ ★ ★ ★ ★</div>
                        <div>• I remembered the words: ★ ★ ★ ★ ★</div>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice saying today's rhyme to a family member. Ask them to listen for your clear voice and expression.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Rhymes & Rhythms",
        subtopic: "Rhyme Actions – Adding hand and body gestures to rhymes",
        lessonContent: `
            <p>Today we'll bring rhymes to life by adding actions and gestures! Moving our bodies helps us remember the words and makes recitation more fun.</p>
            <p><strong>Key Question:</strong> How can hand movements and body gestures make a rhyme more exciting?</p>
            <p><strong>Why Add Actions?</strong></p>
            <ul>
                <li>Actions help us remember the words</li>
                <li>Movements show the meaning of the rhyme</li>
                <li>It's more fun for both the speaker and the audience</li>
                <li>Gestures add energy and expression</li>
            </ul>
            <p><strong>Types of Actions:</strong></p>
            <ol>
                <li><strong>Hand gestures</strong> – pointing, waving, clapping</li>
                <li><strong>Body movements</strong> – bending, stretching, turning</li>
                <li><strong>Facial expressions</strong> – smiling, surprised, thoughtful</li>
                <li><strong>Whole body actions</strong> – jumping, swaying, marching</li>
            </ol>
            <p><strong>Today's Action Rhyme:</strong></p>
            <div class="poem-box" style="background-color: #f0f8ff; padding: 15px; border-radius: 10px; margin: 10px 0;">
                <p style="font-style: italic; text-align: center;">
                "I clap my hands, one, two, three,<br>
                I touch my head, then touch my knee.<br>
                I turn around and look up high,<br>
                I wave my hand and say good-bye!"
                </p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands"></i> Action Idea 1</div>
                <p>For "The sun is high" – stretch your arms up like the sun. For "The birds fly by" – flap your arms like wings!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Action Idea 2</div>
                <p>For "Little raindrops falling down" – wiggle your fingers like rain falling. For "Splashing softly on the ground" – tap the floor gently.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grin"></i> Facial Expressions</div>
                <p>If the rhyme is happy, smile! If something surprising happens, open your eyes wide. Your face tells the story too!</p>
            </div>
        `,
        taskInstructions: "Create and practice hand and body gestures to accompany rhymes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Follow the Leader</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow your teacher's actions for this rhyme. Then practice on your own:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>"Open, shut them, open, shut them,<br>
                        Give a little clap, clap, clap.<br>
                        Open, shut them, open, shut them,<br>
                        Put them in your lap, lap, lap."</p>
                    </div>
                    <div class="answer-space" style="height: 60px;">
                        <p><em>What actions did you use?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Actions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read this rhyme and create an action for each line. Write or draw your actions:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>"Hop little bunny, hop, hop, hop,<br>
                        Hop little bunny, don't you stop.<br>
                        Nibble on a carrot, crunch, crunch, crunch,<br>
                        Then find a place to rest, a bunch!"</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">Line 1 action:</div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">Line 2 action:</div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">Line 3 action:</div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">Line 4 action:</div>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Group Action Rhyme</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With your group, practice this rhyme with actions. Decide together what movements to use:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>"Five little monkeys jumping on the bed,<br>
                        One fell off and bumped his head.<br>
                        Mama called the doctor and the doctor said,<br>
                        'No more monkeys jumping on the bed!'"</p>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">Draw one of your group's actions here</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Did adding actions make the rhyme easier or harder to remember? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Teach today's action rhyme to someone at home. Perform it together with movements.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Rhymes & Rhythms",
        subtopic: "Solo & Small Group Rhymes – Building confidence by reciting in small groups",
        lessonContent: `
            <p>Today is our performance day! We'll build confidence by reciting rhymes solo and in small groups.</p>
            <p><strong>Key Question:</strong> How can you feel confident when reciting alone or with a small group?</p>
            <p><strong>Building Confidence:</strong></p>
            <ul>
                <li>Everyone feels nervous sometimes – that's normal!</li>
                <li>Practice makes you feel more prepared</li>
                <li>Take deep breaths before you start</li>
                <li>Remember that your audience wants you to do well</li>
            </ul>
            <p><strong>Tips for Solo Recitation:</strong></p>
            <ol>
                <li>Stand up straight and tall</li>
                <li>Take a deep breath before you begin</li>
                <li>Speak slowly – don't rush!</li>
                <li>Look at your audience (or look just above their heads)</li>
                <li>If you forget a word, take a pause – it will come back</li>
            </ol>
            <p><strong>Tips for Small Group Recitation:</strong></p>
            <ol>
                <li>Stand close together so you can hear each other</li>
                <li>Decide who will start (count to three silently)</li>
                <li>Listen to your group members</li>
                <li>If someone makes a mistake, keep going together</li>
                <li>Smile and have fun!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user"></i> Solo Practice Rhyme</div>
                <p>"I'm a little teapot, short and stout,<br>Here is my handle, here is my spout."<br><em>Perfect for practicing alone – short and simple!</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Small Group Rhyme</div>
                <p>Divide this rhyme among group members. One person says the first line, another says the second, or say it all together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Encouragement</div>
                <p>After each person finishes, clap for them! A supportive audience helps everyone feel brave enough to try.</p>
            </div>
        `,
        taskInstructions: "Practice and perform rhymes individually and in small groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Warm Up Together</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> As a whole class, recite this rhyme together to warm up:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p style="text-align: center;">
                        "The more we get together, together, together,<br>
                        The more we get together, the happier we'll be!"
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Solo Practice Time</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose one of these rhymes to practice alone. You will perform for a partner or small group:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0;">
                        <div style="background-color: #f0f8ff; padding: 10px; border-radius: 5px;">
                            <strong>Choice 1</strong><br>
                            "Star light, star bright,<br>
                            First star I see tonight,<br>
                            I wish I may, I wish I might,<br>
                            Have the wish I wish tonight."
                        </div>
                        <div style="background-color: #f0f8ff; padding: 10px; border-radius: 5px;">
                            <strong>Choice 2</strong><br>
                            "I like popcorn, crispy and light,<br>
                            Popping up and turning white.<br>
                            In a bowl or in a cup,<br>
                            I can never get enough!"
                        </div>
                    </div>
                    <div>I chose: _________</div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>How do you feel about reciting alone? Circle: excited / nervous / ready / a little scared</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Small Group Rhyme</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In a small group (2-4 people), practice and perform this rhyme together:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p style="text-align: center;">
                        "Row, row, row your boat,<br>
                        Gently down the stream.<br>
                        Merrily, merrily, merrily, merrily,<br>
                        Life is but a dream."
                        </p>
                    </div>
                    <div>Your group's plan (who says what? will you add actions?):</div>
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Performance & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> After your performances, answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What was your favorite part of reciting today?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>• Was it easier to recite solo or in a group? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>• What will you remember about rhymes and rhythms this week?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Teacher Feedback</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Your teacher will write feedback about your recitation:
                    <div class="answer-space" style="height: 60px; background-color: #f9f9f9;"></div>
                </div>
            </div>
        `,
        homework: "Choose your favorite rhyme from this week. Write it neatly on paper and illustrate it with a drawing. Bring it to share next week!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleEnglishWeek10);
    console.log("gradeMiddleEnglish-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleEnglishWeek10);
    console.log("gradeMiddleEnglish-week10.js registered using DataLoader.registerWorksheet()");
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
    console.log("gradeMiddleEnglish-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleEnglishWeek10 = gradeMiddleEnglishWeek10;
console.log("gradeMiddleEnglish-week10.js loaded and registered successfully");