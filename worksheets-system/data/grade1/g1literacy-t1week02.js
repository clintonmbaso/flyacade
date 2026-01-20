// Grade 1 Literacy - Week 2 Data
const grade1LiteracyWeek2 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        week: 2,
        title: "Short Vowel Sounds: /a/, /e/, /i/, /o/, /u/",
        description: "Introduction to short vowel sounds, identification, production, and blending in simple words"
    },
    
    monday: {
        subject: "Literacy",
        topic: "The 'Apple' and 'Egg' Sounds",
        subtopic: "Identifying and producing short /a/ and /e/ sounds",
        lessonContent: `
            <p>Welcome to our Literacy lesson! Today we will learn about two special vowel sounds: /a/ and /e/.</p>
            <p><strong>What are vowels?</strong> Vowels are special letters that make sounds in every word. Today we learn the short sounds of 'a' and 'e'.</p>
            <p><strong>Key Concept:</strong> We can make different mouth shapes to make different vowel sounds.</p>
            <p><strong>The /a/ sound:</strong></p>
            <ul>
                <li>Make a wide smile with your mouth</li>
                <li>Say "/a/" like in "apple"</li>
                <li>Other /a/ words: ant, ax, ask</li>
            </ul>
            <p><strong>The /e/ sound:</strong></p>
            <ul>
                <li>Make a smaller opening with your mouth</li>
                <li>Say "/e/" like in "egg"</li>
                <li>Other /e/ words: elbow, elephant, end</li>
            </ul>
            <p><strong>Why are these sounds important?</strong> Knowing vowel sounds helps us read and spell words!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt" style="color: #ff4444;"></i> /a/ Sound Words</div>
                <p>"apple" - Starts with /a/</p>
                <p>"ant" - Starts with /a/</p>
                <p>"ax" - Starts with /a/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg" style="color: #FFD700;"></i> /e/ Sound Words</div>
                <p>"egg" - Starts with /e/</p>
                <p>"elbow" - Starts with /e/</p>
                <p>"elephant" - Starts with /e/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-air-freshener"></i> Air Writing Practice</div>
                <p>Use your finger to write 'a' and 'e' in the air while saying their sounds!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice /a/ and /e/ sounds.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Color the apples RED if the word starts with /a/. Color the eggs YELLOW if the word starts with /e/:
                <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🍎</span>
                        </div>
                        <div>ant</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🥚</span>
                        </div>
                        <div>egg</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🍎</span>
                        </div>
                        <div>apple</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🥚</span>
                        </div>
                        <div>elbow</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🍎</span>
                        </div>
                        <div>ask</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🥚</span>
                        </div>
                        <div>end</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw two pictures: one of something that starts with /a/, and one that starts with /e/:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div style="flex: 1;">
                        <div style="text-align: center; font-weight: bold;">/a/ sound</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                        <div class="answer-space" style="height: 30px; text-align: center;">Word: ________</div>
                    </div>
                    <div style="flex: 1;">
                        <div style="text-align: center; font-weight: bold;">/e/ sound</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                        <div class="answer-space" style="height: 30px; text-align: center;">Word: ________</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Practice writing the letters 'a' and 'e':
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a a a a a a a</div>
                    <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                    <div>e e e e e e e</div>
                    <div style="height: 30px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the pictures that start with /a/:
                <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 20px;">
                    <div style="text-align: center;">
                        <div style="font-size: 30px;">🐜</div>
                        <div>☐ ant</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 30px;">🐘</div>
                        <div>☐ elephant</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 30px;">🍎</div>
                        <div>☐ apple</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three things at home that start with the /a/ sound. Draw pictures of them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "The 'Igloo' and 'Octopus' Sounds",
        subtopic: "Distinguishing short /i/ and /o/ sounds in CVC words",
        lessonContent: `
            <p>Today we will learn two more vowel sounds: /i/ and /o/. We'll also learn about the middle sounds in words!</p>
            <p><strong>Review:</strong> Yesterday we learned /a/ and /e/. Today we add /i/ and /o/!</p>
            <p><strong>The /i/ sound:</strong></p>
            <ul>
                <li>Crinkle your nose like a mouse</li>
                <li>Say "/i/" like in "igloo"</li>
                <li>Short /i/ sounds like "it"</li>
            </ul>
            <p><strong>The /o/ sound:</strong></p>
            <ul>
                <li>Make your mouth into an "O" shape</li>
                <li>Say "/o/" like in "octopus"</li>
                <li>Short /o/ sounds like "on"</li>
            </ul>
            <p><strong>Middle Sounds:</strong> Vowels can be in the middle of words too! We use the "Sound Arm" to find them:</p>
            <ol>
                <li>Touch your shoulder for the first sound</li>
                <li>Touch your elbow for the vowel (middle sound)</li>
                <li>Touch your wrist for the last sound</li>
            </ol>
            <p><strong>Example:</strong> P-I-G (touch elbow for /i/), D-O-G (touch elbow for /o/)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-igloo" style="color: #2196F3;"></i> /i/ Sound Words</div>
                <p>"igloo" - Starts with /i/</p>
                <p>"it" - Starts with /i/</p>
                <p>"in" - Starts with /i/</p>
                <p>Middle /i/: bin, fin, sit</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish" style="color: #FF9800;"></i> /o/ Sound Words</div>
                <p>"octopus" - Starts with /o/</p>
                <p>"on" - Starts with /o/</p>
                <p>"off" - Starts with /o/</p>
                <p>Middle /o/: dog, hop, pot</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-boxes"></i> Sound Boxes</div>
                <p>We use boxes to see sounds: [b][i][n] - the middle box has /i/!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using /i/ and /o/ sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Arm Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use your sound arm for these words. Circle the vowel sound you hear in the middle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>bin - middle sound: i / o</div>
                        <div>hop - middle sound: i / o</div>
                        <div>fin - middle sound: i / o</div>
                        <div>lot - middle sound: i / o</div>
                        <div>sit - middle sound: i / o</div>
                        <div>pot - middle sound: i / o</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Picture Match</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match each picture to its correct vowel letter:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">⚫</span>
                            <span>dot</span>
                            <span style="margin-left: 30px;">A) i</span>
                            <span style="margin-left: 15px;">B) o</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">🐖</span>
                            <span>pig</span>
                            <span style="margin-left: 30px;">A) i</span>
                            <span style="margin-left: 15px;">B) o</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">📦</span>
                            <span>box</span>
                            <span style="margin-left: 30px;">A) i</span>
                            <span style="margin-left: 15px;">B) o</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">💡</span>
                            <span>lid</span>
                            <span style="margin-left: 30px;">A) i</span>
                            <span style="margin-left: 15px;">B) o</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Boxes</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw boxes for these words. Put an X in the middle box for the vowel:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <div>hop: [  ][  ][  ]</div>
                            <div style="display: flex; gap: 20px; margin-top: 5px;">
                                <div style="width: 40px; height: 40px; border: 1px solid #000;"></div>
                                <div style="width: 40px; height: 40px; border: 1px solid #000;"></div>
                                <div style="width: 40px; height: 40px; border: 1px solid #000;"></div>
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div>bin: [  ][  ][  ]</div>
                            <div style="display: flex; gap: 20px; margin-top: 5px;">
                                <div style="width: 40px; height: 40px; border: 1px solid #000;"></div>
                                <div style="width: 40px; height: 40px; border: 1px solid #000;"></div>
                                <div style="width: 40px; height: 40px; border: 1px solid #000;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vowel Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write each word under the correct vowel sound:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <div style="font-weight: bold;">/i/ sound</div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div>Words: sit, fin, pig</div>
                        </div>
                        <div>
                            <div style="font-weight: bold;">/o/ sound</div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div>Words: dog, hop, pot</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice making the /i/ and /o/ sounds in front of a mirror. Draw your mouth shape for each sound.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "The 'Umbrella' Sound and Vowel Review",
        subtopic: "Producing short /u/ and comparing all five short vowels",
        lessonContent: `
            <p>Today we learn our fifth vowel sound: /u/! We'll also review all five short vowels we've learned.</p>
            <p><strong>The /u/ sound:</strong></p>
            <ul>
                <li>Hold up an invisible umbrella</li>
                <li>Say "/u/ /u/ up!"</li>
                <li>Short /u/ sounds like "umbrella" and "up"</li>
            </ul>
            <p><strong>Short U words:</strong> sun, bug, cut, tub, rug</p>
            <p><strong>Important difference:</strong> /o/ and /u/ can sound similar. Listen carefully!</p>
            <ul>
                <li>/o/ - mouth opens wider (say "hot")</li>
                <li>/u/ - mouth stays more neutral (say "hut")</li>
            </ul>
            <p><strong>Review all five short vowels:</strong></p>
            <ol>
                <li>/a/ - apple (wide smile)</li>
                <li>/e/ - egg (small opening)</li>
                <li>/i/ - igloo (crinkled nose)</li>
                <li>/o/ - octopus ("O" mouth)</li>
                <li>/u/ - umbrella (neutral mouth)</li>
            </ol>
            <p><strong>Remember:</strong> You now know all five short vowel sounds!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-umbrella" style="color: #9C27B0;"></i> /u/ Sound Words</div>
                <p>"umbrella" - Starts with /u/</p>
                <p>"up" - Starts with /u/</p>
                <p>"under" - Starts with /u/</p>
                <p>Middle /u/: sun, bug, cut</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Compare /o/ and /u/</div>
                <p>"hot" - /o/ sound (mouth wide)</p>
                <p>"hut" - /u/ sound (mouth neutral)</p>
                <p>Practice both: "hop" vs. "hug"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Vowel Statues Game</div>
                <p>/a/ = hands on head</p>
                <p>/e/ = hands on shoulders</p>
                <p>/i/ = hands on hips</p>
                <p>/o/ = hands on knees</p>
                <p>/u/ = hands up!</p>
            </div>
        `,
        taskInstructions: "Practice /u/ sound and sort all five vowel sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Short U Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the pictures with the /u/ sound:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 20px; flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">☀️</div>
                            <div>☐ sun</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🐕</div>
                            <div>☐ dog</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🐛</div>
                            <div>☐ bug</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🛁</div>
                            <div>☐ tub</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🐱</div>
                            <div>☐ cat</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🧽</div>
                            <div>☐ rug</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vowel Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Cut out the pictures and glue them into the correct vowel column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center;">A</th>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center;">E</th>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center;">I</th>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center;">O</th>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center;">U</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; height: 100px;"></td>
                                <td style="border: 1px solid #000; height: 100px;"></td>
                                <td style="border: 1px solid #000; height: 100px;"></td>
                                <td style="border: 1px solid #000; height: 100px;"></td>
                                <td style="border: 1px solid #000; height: 100px;"></td>
                            </tr>
                        </table>
                        <div style="margin-top: 10px; padding: 10px; background-color: #f5f5f5;">
                            <strong>Pictures to cut:</strong> cup 🥤, bat 🦇, pen 🖊️, dog 🐕, wig 🎭
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 'O' for /o/ sound or 'U' for /u/ sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>hot: ______</div>
                        <div>hut: ______</div>
                        <div>pot: ______</div>
                        <div>cut: ______</div>
                        <div>mop: ______</div>
                        <div>mug: ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vowel Statues Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw yourself doing the statue pose for each vowel:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
                        <div style="text-align: center;">
                            <div>/a/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/e/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/i/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/o/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/u/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three things at home that have the /u/ sound in their name. Draw or list them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Short Vowel Master Blaster",
        subtopic: "Mastering all five short vowel sounds through blending and practice",
        lessonContent: `
            <p>Today is our vowel celebration day! We'll use everything we learned this week to become Short Vowel Masters!</p>
            <p><strong>Let's review all five short vowels:</strong></p>
            <ul>
                <li>/a/ - apple (wide smile)</li>
                <li>/e/ - egg (small opening)</li>
                <li>/i/ - igloo (crinkled nose)</li>
                <li>/o/ - octopus ("O" mouth)</li>
                <li>/u/ - umbrella (neutral mouth)</li>
            </ul>
            <p><strong>What is blending?</strong> Blending is putting sounds together to make words!</p>
            <p><strong>Blending example:</strong> B-U-S = /b/ /u/ /s/ = "bus"!</p>
            <p><strong>Vowel Valley:</strong> Imagine a valley with vowels. Your mouth goes from wide (/a/) to small (/u/) as you say them!</p>
            <p><strong>Today's activities:</strong></p>
            <ol>
                <li>Vowel Song - Sing about our five vowels</li>
                <li>Speed Sounds - Practice quick vowel recognition</li>
                <li>Blending Practice - Put sounds together to make words</li>
                <li>Vowel Master Assessment - Show what you know!</li>
            </ol>
            <p><strong>Remember:</strong> You are becoming reading experts by learning vowel sounds!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music" style="color: #E91E63;"></i> Vowel Song</div>
                <p>Sing to "B-I-N-G-O": There are five vowels in the alphabet, and these are their sounds: /a/ /e/ /i/ /o/ /u/!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt" style="color: #FFC107;"></i> Speed Sounds</div>
                <p>Flash cards: a, e, i, o, u - Say the sound instantly!</p>
                <p>Then: map, red, tin, mom, gum - Tap out each sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Blending Practice</div>
                <p>C-A-T = /c/ /a/ /t/ = "cat"</p>
                <p>B-E-D = /b/ /e/ /d/ = "bed"</p>
                <p>H-O-P = /h/ /o/ /p/ = "hop"</p>
            </div>
        `,
        taskInstructions: "Show your vowel mastery through these activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Speed Sounds Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say the vowel sound for each letter quickly:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 20px; font-size: 24px;">
                        <div style="border: 2px solid #4CAF50; padding: 10px 15px; border-radius: 5px;">a</div>
                        <div style="border: 2px solid #4CAF50; padding: 10px 15px; border-radius: 5px;">e</div>
                        <div style="border: 2px solid #4CAF50; padding: 10px 15px; border-radius: 5px;">i</div>
                        <div style="border: 2px solid #4CAF50; padding: 10px 15px; border-radius: 5px;">o</div>
                        <div style="border: 2px solid #4CAF50; padding: 10px 15px; border-radius: 5px;">u</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Blending Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Blend these sounds to make words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>/m/ /a/ /p/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/r/ /e/ /d/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/t/ /i/ /n/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/m/ /o/ /m/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/g/ /u/ /m/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Vowel Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the vowel sound you hear in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>cat: a e i o u</div>
                        <div>bed: a e i o u</div>
                        <div>sit: a e i o u</div>
                        <div>top: a e i o u</div>
                        <div>cup: a e i o u</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vowel Master Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher Assessment: Sound out these words with your teacher:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div style="font-weight: bold;">Word List for Teacher:</div>
                        <div>1. map</div>
                        <div>2. red</div>
                        <div>3. tin</div>
                        <div>4. mom</div>
                        <div>5. gum</div>
                        <div>6. hat</div>
                        <div>7. pet</div>
                        <div>8. dig</div>
                        <div>9. log</div>
                        <div>10. sun</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Teacher Notes: <span class="answer-space" style="width: 200px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Vowel Master Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of yourself as a Vowel Master. Write one word for each vowel:
                    <div class="drawing-area" style="height: 120px; margin-bottom: 10px;"></div>
                    <div style="margin-left: 20px;">
                        <div>/a/: <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/e/: <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/i/: <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/o/: <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>/u/: <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home the vowel song. Practice blending three sounds together to make words.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek2);
    console.log("literacy-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek2);
    console.log("literacy-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek2',
        metadata: grade1LiteracyWeek2.metadata,
        days: grade1LiteracyWeek2
    });
    console.log("literacy-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek2 = grade1LiteracyWeek2;
console.log("literacy-week2.js loaded and registered successfully");