// Literacy - Term 2 Week 9 Data
const literacyWeek9 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 2,
        week: 9,
        title: "Phonological Awareness: Initial Sounds",
        description: "Recognizing and matching initial sounds in spoken words to build foundational reading skills"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonological Awareness",
        subtopic: "Lesson 29: Initial Sound Recognition",
        lessonContent: `
            <p>Welcome to our phonological awareness lesson! Today we'll train our ears to hear the very first sound in words.</p>
            <p><strong>Key Question:</strong> What is the first sound you hear when I say the word "sun"?</p>
            <p><strong>Introduction:</strong> Every word has a beginning sound. When we can hear and identify that first sound, we are building an important skill for reading and writing. This is called <strong>initial sound recognition</strong>.</p>
            <p><strong>Let's Practice Listening:</strong></p>
            <ul>
                <li><strong>/s/ sound:</strong> sun, snake, sock, sand, soup</li>
                <li><strong>/a/ sound:</strong> apple, ant, animal, astronaut, axe</li>
                <li><strong>/m/ sound:</strong> moon, monkey, mouse, milk, mom</li>
                <li><strong>/t/ sound:</strong> tiger, turtle, table, tooth, ten</li>
                <li><strong>/p/ sound:</strong> pig, pan, pencil, pumpkin, pizza</li>
            </ul>
            <p><strong>How to Listen for Initial Sounds:</strong></p>
            <ol>
                <li>Say the word slowly: "ssssssun"</li>
                <li>Notice what your mouth does at the very beginning</li>
                <li>Isolate just that first sound: "/s/"</li>
                <li>Remember: We're listening to the SOUND, not the letter name</li>
            </ol>
            <p><strong>Why This Matters:</strong> Being able to hear the first sound in words helps you sound out new words when you read and spell words when you write.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Listen Carefully</div>
                <p>Say "dog" slowly: d-d-d-dog. The first sound is /d/ (not "dee" - just the sound!). Your tongue taps the roof of your mouth.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Mouth Movements</div>
                <p>Try saying /m/ - your lips press together! Try saying /s/ - your teeth stay close and air hisses through. Each sound feels different in your mouth.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Sound vs. Letter</div>
                <p>The letter "c" can make two different sounds: /k/ as in "cat" OR /s/ as in "city". We listen for the SOUND, not the letter name!</p>
            </div>
        `,
        taskInstructions: "Listen to words and identify the beginning sound through games and drawing activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Say</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen as your teacher says each word. Say the first sound you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• sun → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/s/)</div>
                        <div>• apple → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/a/)</div>
                        <div>• tiger → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/t/)</div>
                        <div>• moon → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/m/)</div>
                        <div>• pig → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/p/)</div>
                        <div>• nest → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/n/)</div>
                        <div>• fish → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/f/)</div>
                        <div>• rabbit → first sound: <span class="answer-space-inline" style="display: inline-block; width: 60px; border-bottom: 1px solid #000;"></span> (/r/)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Initial Sound Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each picture. Say the word. Circle the picture if it starts with the given sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Find words that start with /b/: </strong> (ball, cat, bat, dog, bed)</div>
                        <div>Circle: ball / bat / bed</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Find words that start with /k/ (hard c sound): </strong> (cat, kite, sun, car, mouse)</div>
                        <div>Circle: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Find words that start with /h/: </strong> (hat, house, frog, horse, apple)</div>
                        <div>Circle: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Share</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw two things that start with the same sound as your name. For example, if your name is Sam, you might draw a sun and a snake:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What sound do your drawings start with? 
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge!</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Listen to these pairs. Do they start with the SAME sound or DIFFERENT sounds?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• sun / sock → <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span> (same/different)</div>
                        <div>• apple / ant → <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span> (same/different)</div>
                        <div>• tiger / table → <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span> (same/different)</div>
                        <div>• moon / mouse → <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span> (same/different)</div>
                        <div>• pig / fish → <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span> (same/different)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home. Say each word slowly and tell a family member the first sound you hear. Draw one of them in your notebook.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonological Awareness",
        subtopic: "Lesson 30: Initial Sound Matching",
        lessonContent: `
            <p>Welcome back! Today we'll build on our listening skills by matching words that share the same beginning sound.</p>
            <p><strong>Key Question:</strong> Which words start with the same sound - "sun" and "snake" or "sun" and "apple"?</p>
            <p><strong>Introduction:</strong> Now that we can hear the first sound in a word, we can match words that start with the same sound. This is called <strong>initial sound matching</strong>. It helps us recognize patterns in language.</p>
            <p><strong>Same Sound Groups:</strong></p>
            <ul>
                <li><strong>/s/ group:</strong> sun, snake, sock, sandwich, six, sad</li>
                <li><strong>/a/ group:</strong> apple, ant, alligator, astronaut, ax</li>
                <li><strong>/m/ group:</strong> moon, monkey, mitten, milk, mud</li>
                <li><strong>/b/ group:</strong> ball, bat, banana, bed, bus</li>
                <li><strong>/c/ group (/k/ sound):</strong> cat, car, cookie, cup, crayon</li>
                <li><strong>/d/ group:</strong> dog, duck, door, doll, dinosaur</li>
                <li><strong>/f/ group:</strong> fish, frog, flower, fire, feather</li>
            </ul>
            <p><strong>How to Match Initial Sounds:</strong></p>
            <ol>
                <li>Say the first word and listen to its beginning sound</li>
                <li>Say the second word and listen to its beginning sound</li>
                <li>Ask yourself: "Do my lips and tongue make the same movement at the start?"</li>
                <li>If yes, they match! If no, they are different</li>
            </ol>
            <p><strong>Why This Matters:</strong> Matching initial sounds helps you sort words, recognize rhyming patterns, and build phonemic awareness - a key skill for becoming a strong reader.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group"></i> Grouping Game</div>
                <p>If I say "cat, cow, cake" - they all start with the /k/ sound! They belong together. "Cat" and "hat" do NOT belong together because /k/ and /h/ are different.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Visual Clue</div>
                <p>Watch your teacher's mouth! For /m/, lips press together. For /s/, teeth stay close. For /b/, lips pop open. You can SEE the difference!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Sound Sorting</div>
                <p>Imagine three boxes: one for /m/ words, one for /s/ words, one for /b/ words. Where would you put "mouse"? /m/ box! Where would you put "ball"? /b/ box!</p>
            </div>
        `,
        taskInstructions: "Group and match spoken words by their initial sounds through sorting and game-based activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Same or Different?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to each pair. Circle SAME if they start with the same sound. Circle DIFFERENT if they start with different sounds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• sun / snake → SAME / DIFFERENT</div>
                        <div>• apple / ant → SAME / DIFFERENT</div>
                        <div>• moon / fish → SAME / DIFFERENT</div>
                        <div>• cat / car → SAME / DIFFERENT</div>
                        <div>• dog / duck → SAME / DIFFERENT</div>
                        <div>• pig / pan → SAME / DIFFERENT</div>
                        <div>• bed / bat → SAME / DIFFERENT</div>
                        <div>• hat / house → SAME / DIFFERENT</div>
                        <div>• rabbit / rock → SAME / DIFFERENT</div>
                        <div>• lion / lamp → SAME / DIFFERENT</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sound Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these words into groups by their beginning sound. Write each word under the correct sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Word Bank:</strong> sun, ball, apple, bat, ant, snake, bed, alligator, sock, banana</p>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>/s/ sound</strong>
                                <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>/a/ sound</strong>
                                <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>/b/ sound</strong>
                                <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each word, draw a line to another word that starts with the SAME sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• mouse ————— (monkey / fish)</div>
                        <div>• tiger ————— (table / dog)</div>
                        <div>• nest ————— (net / pig)</div>
                        <div>• frog ————— (flower / ball)</div>
                        <div>• lizard ————— (lion / cat)</div>
                        <div>• wagon ————— (water / sun)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Odd One Out</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In each row, circle the word that has a DIFFERENT beginning sound from the others:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• cat &nbsp;&nbsp; cow &nbsp;&nbsp; cake &nbsp;&nbsp; <u>dog</u></div>
                        <div>• sun &nbsp;&nbsp; snake &nbsp;&nbsp; <u>apple</u> &nbsp;&nbsp; sock</div>
                        <div>• <u>ball</u> &nbsp;&nbsp; moon &nbsp;&nbsp; mouse &nbsp;&nbsp; man</div>
                        <div>• pig &nbsp;&nbsp; <u>fan</u> &nbsp;&nbsp; pan &nbsp;&nbsp; pencil</div>
                        <div>• dog &nbsp;&nbsp; duck &nbsp;&nbsp; <u>cat</u> &nbsp;&nbsp; door</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sound Scavenger Hunt (Partner Activity)</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> With a partner, take turns saying a word. Your partner must say another word that starts with the SAME sound:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Example: Teacher says "ball" → Partner says "bat"</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Extension Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Name three things in this classroom that start with the same sound. Write them below:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Play the 'Sound Match Game' with a family member. Take turns saying words. See how many matching pairs you can make in 2 minutes!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(literacyWeek9);
    console.log("literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(literacyWeek9);
    console.log("literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'literacyWeek9',
        metadata: literacyWeek9.metadata,
        days: literacyWeek9
    });
    console.log("literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.literacyWeek9 = literacyWeek9;
console.log("literacy-week9.js loaded and registered successfully");