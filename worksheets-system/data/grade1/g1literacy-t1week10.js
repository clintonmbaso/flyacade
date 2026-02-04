// Grade 1 Literacy - Week 10 Data
const grade1LiteracyWeek10 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        week: 10,
        title: "Blending, Segmenting, and Reading Digraphs",
        description: "Practice blending, segmenting, and reading words with digraphs in VC and CVC patterns"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Blending VC and CVC Digraph Words",
        subtopic: "Blending decodable words with digraphs using VC and CVC patterns",
        lessonContent: `
            <p>Welcome to Week 10! This week we'll become experts at reading words with special letter teams called digraphs.</p>
            <p><strong>What are digraphs?</strong> Digraphs are two letters that work together to make ONE sound. Today we'll focus on blending words with digraphs.</p>
            <p><strong>Today's Objective:</strong> You will blend decodable words with digraphs, focusing on VC and CVC patterns.</p>
            <p><strong>Key Concept:</strong> We use the "sound sliding" method to blend digraph words smoothly.</p>
            <p><strong>VC Pattern:</strong> Vowel-Consonant words like "ash" (a-sh)</p>
            <p><strong>CVC Pattern:</strong> Consonant-Vowel-Consonant words like "book" (b-oo-k)</p>
            <p><strong>Blending Steps:</strong></p>
            <ol>
                <li>Say each sound slowly: /a/ — /sh/</li>
                <li>"Slide" the sounds together</li>
                <li>Say the word at normal speed: "ash"</li>
            </ol>
            <p><strong>Remember:</strong> Digraphs like "sh", "oo", and "ng" make one sound even though they have two letters!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sliders-h" style="color: #2196F3;"></i> Sound Sliding Examples</div>
                <p>"ash" - /a/ — /sh/ → "ash"</p>
                <p>"book" - /b/ — /oo/ — /k/ → "book"</p>
                <p>"ring" - /r/ — /i/ — /ng/ → "ring"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-farm" style="color: #4CAF50;"></i> Letter Card Practice</div>
                <p>Use letter cards: /f/ + /ar/ + /m/</p>
                <p>Push them together: /f/ /ar/ /m/ = "farm"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-people-arrows"></i> Partner Practice</div>
                <p>Take turns being the "sound slider" and the "word reader"</p>
                <p>Practice with: wish, look, song, fish</p>
            </div>
        `,
        taskInstructions: "Practice blending VC and CVC digraph words using the activities below.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Use sound sliding to blend these words. Draw a line from the sounds to the word:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div style="margin-bottom: 10px;">
                        <span>/a/ — /sh/</span>
                        <span style="margin-left: 20px;">→</span>
                        <span style="margin-left: 20px; padding: 5px 10px; border: 1px solid #ccc;">ash</span>
                        <span style="margin-left: 20px; padding: 5px 10px; border: 1px solid #ccc;">ish</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <span>/b/ — /oo/ — /k/</span>
                        <span style="margin-left: 20px;">→</span>
                        <span style="margin-left: 20px; padding: 5px 10px; border: 1px solid #ccc;">back</span>
                        <span style="margin-left: 20px; padding: 5px 10px; border: 1px solid #ccc;">book</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <span>/f/ — /ar/ — /m/</span>
                        <span style="margin-left: 20px;">→</span>
                        <span style="margin-left: 20px; padding: 5px 10px; border: 1px solid #ccc;">farm</span>
                        <span style="margin-left: 20px; padding: 5px 10px; border: 1px solid #ccc;">form</span>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Cut out the letter cards and push them together to make words:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #f0f8ff; border-radius: 5px;">
                    <div style="display: flex; gap: 15px; margin-bottom: 15px; justify-content: center;">
                        <div style="width: 50px; height: 50px; border: 2px solid #4CAF50; display: flex; align-items: center; justify-content: center; font-size: 24px;">f</div>
                        <div style="width: 50px; height: 50px; border: 2px solid #4CAF50; display: flex; align-items: center; justify-content: center; font-size: 24px;">ar</div>
                        <div style="width: 50px; height: 50px; border: 2px solid #4CAF50; display: flex; align-items: center; justify-content: center; font-size: 24px;">m</div>
                    </div>
                    <div style="text-align: center;">Word: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Color the digraphs in these words:
                <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="text-align: center;">
                        <div style="font-size: 24px; margin-bottom: 5px;">📖</div>
                        <div style="font-size: 20px; padding: 5px; border: 1px solid #ccc;">b<strong>oo</strong>k</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 24px; margin-bottom: 5px;">💍</div>
                        <div style="font-size: 20px; padding: 5px; border: 1px solid #ccc;">r<strong>ing</strong></div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 24px; margin-bottom: 5px;">🐟</div>
                        <div style="font-size: 20px; padding: 5px; border: 1px solid #ccc;">f<strong>ish</strong></div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 24px; margin-bottom: 5px;">👑</div>
                        <div style="font-size: 20px; padding: 5px; border: 1px solid #ccc;"><strong>qu</strong>een</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Write two VC words and two CVC words with digraphs:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>VC words: <span class="answer-space" style="width: 80px; display: inline-block;"></span> , <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    <div>CVC words: <span class="answer-space" style="width: 80px; display: inline-block;"></span> , <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                </div>
            </div>
        `,
        homework: "Find three things at home with digraph sounds (sh, ch, th, ng, oo). Draw pictures of them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Sound Positioning and Isolation",
        subtopic: "Identifying initial, middle, and end sounds in words with digraphs",
        lessonContent: `
            <p>Today we'll become sound detectives! We'll learn where digraph sounds live in words.</p>
            <p><strong>Today's Objective:</strong> You will identify initial, middle, and end sounds in words with digraphs.</p>
            <p><strong>Key Concept:</strong> Sounds can be at the beginning, middle, or end of words.</p>
            <p><strong>Initial Sound:</strong> The first sound you hear (like /qu/ in "queen")</p>
            <p><strong>Middle Sound:</strong> The sound in the center (like /oo/ in "moon")</p>
            <p><strong>End Sound:</strong> The last sound you hear (like /ng/ in "ring")</p>
            <p><strong>Sound Boxes:</strong> We use boxes to show where sounds live:</p>
            <ul>
                <li>First box = beginning sound</li>
                <li>Middle box = vowel sound</li>
                <li>Last box = ending sound</li>
            </ul>
            <p><strong>Digraph Position Examples:</strong></p>
            <ul>
                <li>"queen" - /qu/ is at the beginning (initial)</li>
                <li>"moon" - /oo/ is in the middle (medial)</li>
                <li>"ring" - /ng/ is at the end (final)</li>
            </ul>
            <p><strong>Remember:</strong> Some digraphs like "ng" always come at the end of words!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #FF9800;"></i> Sound Detective</div>
                <p>"queen" - Digraph /qu/ is at the BEGINNING</p>
                <p>"moon" - Digraph /oo/ is in the MIDDLE</p>
                <p>"ring" - Digraph /ng/ is at the END</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th" style="color: #9C27B0;"></i> Sound Boxes Practice</div>
                <p>Draw three boxes for "ring":</p>
                <p>[r] [i] [ng] - /ng/ lives in the last box!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marker-alt"></i> Sound Position Game</div>
                <p>Point to your head for beginning sounds</p>
                <p>Point to your tummy for middle sounds</p>
                <p>Point to your toes for ending sounds</p>
            </div>
        `,
        taskInstructions: "Practice identifying where digraph sounds live in words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Position Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle where the digraph sound lives in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>queen: Beginning ☐ Middle ☐ End ☐</div>
                        <div>moon: Beginning ☐ Middle ☐ End ☐</div>
                        <div>ring: Beginning ☐ Middle ☐ End ☐</div>
                        <div>fish: Beginning ☐ Middle ☐ End ☐</div>
                        <div>ship: Beginning ☐ Middle ☐ End ☐</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sound Boxes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw sound boxes for these words. Circle the box where the digraph lives:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <div>ring:</div>
                            <div style="display: flex; gap: 15px; margin-top: 5px;">
                                <div style="width: 40px; height: 40px; border: 2px solid #000; display: flex; align-items: center; justify-content: center;">r</div>
                                <div style="width: 40px; height: 40px; border: 2px solid #000; display: flex; align-items: center; justify-content: center;">i</div>
                                <div style="width: 40px; height: 40px; border: 2px solid #000; display: flex; align-items: center; justify-content: center;">ng</div>
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div>moon:</div>
                            <div style="display: flex; gap: 15px; margin-top: 5px;">
                                <div style="width: 40px; height: 40px; border: 2px solid #000; display: flex; align-items: center; justify-content: center;">m</div>
                                <div style="width: 40px; height: 40px; border: 2px solid #000; display: flex; align-items: center; justify-content: center;">oo</div>
                                <div style="width: 40px; height: 40px; border: 2px solid #000; display: flex; align-items: center; justify-content: center;">n</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Body Position Game</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw yourself pointing to the correct body part for each word:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
                        <div style="text-align: center;">
                            <div>queen</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Point to: head / tummy / toes</div>
                        </div>
                        <div style="text-align: center;">
                            <div>moon</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Point to: head / tummy / toes</div>
                        </div>
                        <div style="text-align: center;">
                            <div>ring</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Point to: head / tummy / toes</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sound Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sort these words by where the digraph sound is:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center; background-color: #E3F2FD;">Beginning</th>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center; background-color: #F3E5F5;">Middle</th>
                                <th style="border: 1px solid #000; padding: 5px; text-align: center; background-color: #E8F5E9;">End</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #000; height: 100px; padding: 5px;">
                                    <div class="answer-space" style="height: 30px;"></div>
                                    <div class="answer-space" style="height: 30px;"></div>
                                </td>
                                <td style="border: 1px solid #000; height: 100px; padding: 5px;">
                                    <div class="answer-space" style="height: 30px;"></div>
                                    <div class="answer-space" style="height: 30px;"></div>
                                </td>
                                <td style="border: 1px solid #000; height: 100px; padding: 5px;">
                                    <div class="answer-space" style="height: 30px;"></div>
                                    <div class="answer-space" style="height: 30px;"></div>
                                </td>
                            </tr>
                        </table>
                        <div style="margin-top: 10px; padding: 10px; background-color: #f5f5f5;">
                            <strong>Words:</strong> ship, book, song, queen, fish, moon
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find one thing at home with a digraph sound at the beginning, one in the middle, and one at the end.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Word Manipulation",
        subtopic: "Segmenting, adding, deleting, and substituting sounds in digraph words",
        lessonContent: `
            <p>Today we'll be word magicians! We'll learn how to change words by manipulating sounds.</p>
            <p><strong>Today's Objective:</strong> You will segment, add, delete, and substitute sounds in digraph words.</p>
            <p><strong>Key Concept:</strong> We can change words by changing their sounds!</p>
            <p><strong>Segmenting:</strong> Breaking words into individual sounds (ring → /r/ /i/ /ng/)</p>
            <p><strong>Deleting:</strong> Taking away a sound (ring - /r/ = ing)</p>
            <p><strong>Adding:</strong> Putting a sound in (ing + /s/ = sing)</p>
            <p><strong>Substituting:</strong> Changing one sound for another (ash → change /a/ to /i/ = ish)</p>
            <p><strong>Word Magic Examples:</strong></p>
            <ul>
                <li>Start with: ring</li>
                <li>Delete /r/: ing</li>
                <li>Add /s/: sing</li>
                <li>New word: sing!</li>
            </ul>
            <p><strong>Sound Isolation:</strong> We can also isolate (separate) the digraph sound from the rest of the word.</p>
            <p><strong>Example:</strong> In "ash", the /sh/ is the digraph. The /a/ is the vowel sound.</p>
            <p><strong>Remember:</strong> Changing just one sound can make a completely new word!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic" style="color: #9C27B0;"></i> Word Magic</div>
                <p>ring → delete /r/ → ing → add /s/ → sing</p>
                <p>ash → change /a/ to /i/ → ish</p>
                <p>book → change /b/ to /h/ → hook</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut" style="color: #F44336;"></i> Sound Isolation</div>
                <p>"ash" = /a/ + /sh/</p>
                <p>Digraph: /sh/</p>
                <p>Vowel: /a/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Sound Substitution</div>
                <p>Change the first sound: ring → sing</p>
                <p>Change the vowel: ash → ish</p>
                <p>Change the ending: book → boot</p>
            </div>
        `,
        taskInstructions: "Practice word manipulation with digraph words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Deletion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Delete the first sound. What's the new word?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ring - /r/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>fish - /f/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>ship - /sh/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>book - /b/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sound Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add the sound. What's the new word?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ing + /s/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>ish + /w/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>ook + /l/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>ash + /tr/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Substitution</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Change one sound to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ring → change /r/ to /s/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>ash → change /a/ to /i/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>book → change /b/ to /h/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>fish → change /f/ to /w/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sound Isolation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the digraph in each word, then write the vowel sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 10px;">
                            <span style="font-size: 20px; padding: 5px 10px; border: 1px solid #ccc;">ash</span>
                            <span style="margin-left: 20px;">Digraph: sh / th</span>
                            <span style="margin-left: 20px;">Vowel sound: <span class="answer-space" style="width: 40px; display: inline-block;"></span></span>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <span style="font-size: 20px; padding: 5px 10px; border: 1px solid #ccc;">ish</span>
                            <span style="margin-left: 20px;">Digraph: sh / ch</span>
                            <span style="margin-left: 20px;">Vowel sound: <span class="answer-space" style="width: 40px; display: inline-block;"></span></span>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <span style="font-size: 20px; padding: 5px 10px; border: 1px solid #ccc;">ring</span>
                            <span style="margin-left: 20px;">Digraph: ng / nk</span>
                            <span style="margin-left: 20px;">Vowel sound: <span class="answer-space" style="width: 40px; display: inline-block;"></span></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Word Transformation Chain</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete the word transformation chain:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>Start: ring</div>
                        <div>Delete /r/: <span class="answer-space" style="width: 60px; display: inline-block;"></span></div>
                        <div>Add /s/: <span class="answer-space" style="width: 60px; display: inline-block;"></span></div>
                        <div>Change /i/ to /a/: <span class="answer-space" style="width: 60px; display: inline-block;"></span></div>
                        <div>Change /s/ to /p/: <span class="answer-space" style="width: 60px; display: inline-block;"></span></div>
                        <div>Final word: <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Take the word 'fish'. Change one sound to make three different words. Draw pictures of your new words.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Reading Phrases and Fluency",
        subtopic: "Reading decodable phrases containing digraphs with accuracy and fluency",
        lessonContent: `
            <p>Today is fluency day! We'll practice reading whole phrases with our digraph words.</p>
            <p><strong>Today's Objective:</strong> You will read decodable phrases containing digraphs correctly.</p>
            <p><strong>Key Concept:</strong> Fluency means reading smoothly, with expression, and at a good pace.</p>
            <p><strong>What is a phrase?</strong> A phrase is a small group of words that go together.</p>
            <p><strong>Digraph Detective:</strong> Before reading, find the digraphs in the phrase!</p>
            <p><strong>Example Phrase:</strong> "a green book"</p>
            <ul>
                <li>Digraphs: /ee/ in "green", /oo/ in "book"</li>
                <li>Read smoothly: "a green book"</li>
            </ul>
            <p><strong>Fluency Tips:</strong></p>
            <ol>
                <li>Point to each word as you read</li>
                <li>Look for digraphs first</li>
                <li>Read the whole phrase smoothly</li>
                <li>Read it again faster</li>
                <li>Add expression if there's an exclamation!</li>
            </ol>
            <p><strong>Partner Reading:</strong> Reading with a friend helps build fluency!</p>
            <p><strong>Remember:</strong> Good readers practice reading the same words many times to become fluent!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader" style="color: #2196F3;"></i> Phrase Examples</div>
                <p>"a green book" - digraphs: /ee/, /oo/</p>
                <p>"thin red fish" - digraphs: /th/, /sh/</p>
                <p>"the farm song" - digraphs: /ar/, /ng/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bullseye" style="color: #4CAF50;"></i> Digraph Detective</div>
                <p>Scan the phrase first</p>
                <p>Circle all digraphs</p>
                <p>Then read the whole phrase</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #FF9800;"></i> Partner Practice</div>
                <p>Read to a partner</p>
                <p>Listen to your partner read</p>
                <p>Give each other "fluency stars"</p>
            </div>
        `,
        taskInstructions: "Practice reading phrases with digraphs fluently.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Digraph Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle all the digraphs in these phrases:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 18px;">
                        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #E0E0E0;">a green book</div>
                        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #E0E0E0;">thin red fish</div>
                        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #E0E0E0;">the farm song</div>
                        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #E0E0E0;">a quick ship</div>
                        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #E0E0E0;">the long moon</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Phrase Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each phrase three times. Color a star each time you read it smoothly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <div style="font-weight: bold; margin-bottom: 5px;">a green book</div>
                            <div style="display: flex; gap: 10px;">
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div style="font-weight: bold; margin-bottom: 5px;">thin red fish</div>
                            <div style="display: flex; gap: 10px;">
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div style="font-weight: bold; margin-bottom: 5px;">the farm song</div>
                            <div style="display: flex; gap: 10px;">
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                                <div style="width: 30px; height: 30px; border: 1px solid #FFD700; border-radius: 50%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read with a partner. Give each other fluency feedback:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #E8F5E9; border-radius: 5px;">
                        <div style="font-weight: bold; margin-bottom: 10px;">Partner Reading Checklist:</div>
                        <div>☐ We pointed to each word</div>
                        <div>☐ We found the digraphs first</div>
                        <div>☐ We read smoothly (not robot words)</div>
                        <div>☐ We read with expression</div>
                        <div style="margin-top: 10px;">Partner's name: <span class="answer-space" style="width: 120px; display: inline-block;"></span></div>
                        <div>Stars given: <span style="color: #FFD700;">★</span> <span style="color: #FFD700;">★</span> <span style="color: #FFD700;">★</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Phrases</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create two phrases using digraph words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Phrase 1: <span class="answer-space" style="width: 200px; display: inline-block;"></span></div>
                        <div>Digraphs in phrase 1: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                        <div style="margin-top: 10px;">Phrase 2: <span class="answer-space" style="width: 200px; display: inline-block;"></span></div>
                        <div>Digraphs in phrase 2: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Fluency Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Teacher Assessment: Read these phrases with your teacher:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #FFF3E0; border-radius: 5px;">
                        <div style="font-weight: bold; margin-bottom: 10px;">Phrases for Teacher Assessment:</div>
                        <div>1. a green book</div>
                        <div>2. thin red fish</div>
                        <div>3. the farm song</div>
                        <div>4. a quick ship</div>
                        <div>5. the long moon</div>
                        <div style="margin-top: 15px;">
                            <div>Fluency Score: <span class="answer-space" style="width: 100px; display: inline-block;"></span> /5</div>
                            <div>Teacher Notes: <span class="answer-space" style="width: 200px; display: inline-block;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Read the phrase 'a green book' to three different people at home. Have them sign your reading log.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek10);
    console.log("literacy-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek10);
    console.log("literacy-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek10',
        metadata: grade1LiteracyWeek10.metadata,
        days: grade1LiteracyWeek10
    });
    console.log("literacy-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek10 = grade1LiteracyWeek10;
console.log("literacy-week10.js loaded and registered successfully");