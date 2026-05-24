// Grade 1 Literacy - Term 3 Week 2 Data
const grade1LiteracyWeek2 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 3,
        week: 2,
        title: "Diphthongs (/ou/, /oi/)",
        description: "Identifying, sounding out, isolating, blending, and reading diphthongs /ou/ and /oi/ in words and phrases"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Diphthongs /ou/ and /oi/ - Identification",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn about two special vowel sounds called diphthongs.</p>
            <p><strong>Key Question:</strong> What happens when two vowels come together to make a new sound?</p>
            <p><strong>Introduction:</strong> A <strong>diphthong</strong> is two vowels that team up to make one gliding sound. Our mouth moves from one position to another as we say them!</p>
            <p><strong>Today's Diphthongs:</strong></p>
            <ol>
                <li><strong>/ou/ sound:</strong> Like in "out" and "loud"
                    <ul>
                        <li>Letters: o + u</li>
                        <li>Sound: "ow" (like saying "ow" when you hurt yourself!)</li>
                    </ul>
                </li>
                <li><strong>/oi/ sound:</strong> Like in "oil" and "boy"
                    <ul>
                        <li>Letters: o + i</li>
                        <li>Sound: "oy" (like saying "oy" when you notice something!)</li>
                    </ul>
                </li>
            </ol>
            <p><strong>How to Make the Sounds:</strong></p>
            <ul>
                <li><strong>/ou/:</strong> Start with "ah" and move to "oo" - "ah-oo" → "ow"</li>
                <li><strong>/oi/:</strong> Start with "oh" and move to "ee" - "oh-ee" → "oy"</li>
            </ul>
            <p><strong>Remember:</strong> Both sounds are diphthongs because your mouth glides between two vowel positions!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Listen and Say</div>
                <p><strong>/ou/ words:</strong> out, loud, mouse, cloud, house, round</p>
                <p><strong>/oi/ words:</strong> oil, boy, toy, coin, boil, join</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer"></i> Mouth Movement</div>
                <p>Watch your mouth in a mirror! For /ou/, your mouth starts open and round, then closes a bit. For /oi/, your mouth starts round and moves to a smile!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Clue Words</div>
                <p>Remember /ou/ by the word "ouch" (what you say when you get hurt!).<br>
                Remember /oi/ by the word "oink" (the sound a pig makes!).</p>
            </div>
        `,
        taskInstructions: "Identify and practice sounding out diphthongs /ou/ and /oi/.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the diphthong you hear in each word (say the word aloud first):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• cloud → /ou/ /oi/</div>
                        <div>• toy → /ou/ /oi/</div>
                        <div>• house → /ou/ /oi/</div>
                        <div>• boil → /ou/ /oi/</div>
                        <div>• mouse → /ou/ /oi/</div>
                        <div>• boy → /ou/ /oi/</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these words into the correct diphthong column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Word bank: <strong>out, oil, loud, coin, round, join, cloud, toy</strong></p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">/ou/ words</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">/oi/ words</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practice Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Trace and write the diphthongs:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ou: ___ ___ ___</div>
                        <div>oi: ___ ___ ___</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of something with the /ou/ sound and something with the /oi/ sound:
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1; border: 2px dashed #ccc; height: 100px; text-align: center; padding: 10px;">/ou/ drawing</div>
                        <div style="flex: 1; border: 2px dashed #ccc; height: 100px; text-align: center; padding: 10px;">/oi/ drawing</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home with the /ou/ sound and 3 things with the /oi/ sound. Draw or write them in your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Diphthong Sound Isolation - Initial, Middle, End Sounds",
        lessonContent: `
            <p>Today we'll become sound detectives! We'll find where diphthongs appear in words - at the beginning, middle, or end.</p>
            <p><strong>Key Question:</strong> Can you hear where the diphthong lives in a word?</p>
            <p><strong>Sound Positions:</strong></p>
            <ul>
                <li><strong>Initial (Beginning):</strong> The diphthong is the first sound you hear</li>
                <li><strong>Middle:</strong> The diphthong is in the middle of the word</li>
                <li><strong>End:</strong> The diphthong is the last sound you hear</li>
            </ul>
            <p><strong>/ou/ Sound Examples:</strong></p>
            <ul>
                <li>Initial: <strong>ou</strong>t, <strong>ou</strong>ch, <strong>ou</strong>r</li>
                <li>Middle: cl<strong>ou</strong>d, h<strong>ou</strong>se, m<strong>ou</strong>th</li>
                <li>End: n<strong>ou</strong> (no words end with /ou/ in English!)</li>
            </ul>
            <p><strong>/oi/ Sound Examples:</strong></p>
            <ul>
                <li>Initial: <strong>oi</strong>l, <strong>oi</strong>nk, <strong>oi</strong>ster</li>
                <li>Middle: c<strong>oi</strong>n, b<strong>oi</strong>l, j<strong>oi</strong>n</li>
                <li>End: b<strong>oy</strong>, t<strong>oy</strong>, j<strong>oy</strong> (spelled "oy" at the end!)</li>
            </ul>
            <p><strong>Important Note:</strong> /oi/ at the end of words is spelled "oy" (boy, toy, joy). /ou/ is never at the end of English words.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Sound Detective</div>
                <p>Listen to "coin" - the /oi/ sound is in the MIDDLE (c - oi - n).<br>
                Listen to "out" - the /ou/ sound is at the BEGINNING (ou - t).<br>
                Listen to "boy" - the /oi/ sound is at the END (b - oy).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Tap It Out</div>
                <p>Tap your finger for each sound in a word. For "loud": l (tap) - ou (tap) - d (tap). The diphthong is in the MIDDLE!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spell-check"></i> Spelling Rule</div>
                <p>Remember: Use "oi" in the middle of words (coin, boil). Use "oy" at the end of words (boy, toy). This rule helps you spell correctly!</p>
            </div>
        `,
        taskInstructions: "Isolate and identify diphthongs in initial, middle, and end positions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Where Is the Sound?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle where you hear the diphthong in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• out → Beginning / Middle / End</div>
                        <div>• coin → Beginning / Middle / End</div>
                        <div>• boy → Beginning / Middle / End</div>
                        <div>• loud → Beginning / Middle / End</div>
                        <div>• oil → Beginning / Middle / End</div>
                        <div>• toy → Beginning / Middle / End</div>
                        <div>• cloud → Beginning / Middle / End</div>
                        <div>• join → Beginning / Middle / End</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Missing Diphthong</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add "ou" or "oi" to complete each word. Then circle if the sound is at the beginning, middle, or end:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• c___n (Beginning / Middle / End)</div>
                        <div>• ___t (Beginning / Middle / End)</div>
                        <div>• b___l (Beginning / Middle / End)</div>
                        <div>• ___l (Beginning / Middle / End)</div>
                        <div>• h___se (Beginning / Middle / End)</div>
                        <div>• j___n (Beginning / Middle / End)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of a word with /ou/ in the beginning:</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of a word with /oi/ in the middle:</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of a word with /oi/ at the end (using "oy"):</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look at 5 words in a book at home. Does any word have /ou/ or /oi/? Where is the sound (beginning, middle, or end)?",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Diphthong Word Blending - VC and CVC Words",
        lessonContent: `
            <p>Today we'll practice blending sounds together to read whole words with diphthongs!</p>
            <p><strong>Key Question:</strong> How do we put sounds together to read words with /ou/ and /oi/?</p>
            <p><strong>Blending Review:</strong></p>
            <ul>
                <li>Blending means putting individual sounds together to make a word</li>
                <li>Say each sound slowly, then say them faster and faster</li>
                <li>Example: c - oi - n → c-oi-n → coin!</li>
            </ul>
            <p><strong>VC Words (Vowel-Consonant):</strong></p>
            <ul>
                <li>These words have a vowel sound followed by a consonant</li>
                <li><strong>out:</strong> ou - t → out</li>
            </ul>
            <p><strong>CVC Words (Consonant-Vowel-Consonant):</strong></p>
            <ul>
                <li>These words have a consonant, then a vowel, then a consonant</li>
                <li><strong>coin:</strong> c - oi - n → coin</li>
                <li><strong>loud:</strong> l - ou - d → loud</li>
                <li><strong>boil:</strong> b - oi - l → boil</li>
                <li><strong>round:</strong> r - ou - n - d → round (CCVC)</li>
            </ul>
            <p><strong>Blending Steps:</strong></p>
            <ol>
                <li>Look at each letter or letter team</li>
                <li>Say each sound: /c/ /oi/ /n/</li>
                <li>Blend the sounds together: ccc-oi- nnn → coin!</li>
                <li>Check if the word makes sense</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Blend Along</div>
                <p>Try blending these words:<br>
                m - ou - s - e → mouse!<br>
                b - oy → boy!<br>
                cl - ou - d → cloud!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Tap and Blend</div>
                <p>Tap each sound on your arm (shoulder to wrist). For "coin": tap shoulder (c), tap elbow (oi), tap wrist (n). Then slide your hand down to blend!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Robot Talk</div>
                <p>Talk like a robot saying each sound slowly: "c - oi - n." Then say it like a regular person: "coin!"</p>
            </div>
        `,
        taskInstructions: "Blend sounds to read VC and CVC words with diphthongs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Blend and Read</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Blend the sounds and write the word, then draw a picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• c - oi - n = _______</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">• ou - t = _______</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">• b - oy = _______</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">• l - ou - d = _______</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read and Match</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from each word to its picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• coin</div>
                                <div>• toy</div>
                                <div>• cloud</div>
                                <div>• oil</div>
                                <div>• mouse</div>
                            </div>
                            <div>
                                <div>[ 🧸 ] [ ☁️ ] [ 🐭 ] [ ⛽ ] [ 💰 ]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write the Word</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at each picture. Write the word using "ou," "oi," or "oy":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🐭 m___se → _______</div>
                        <div>🧸 t___ → _______</div>
                        <div>☁️ cl___d → _______</div>
                        <div>💰 c___n → _______</div>
                        <div>🏠 h___se → _______</div>
                        <div>👦 b___ → _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Blending</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read this sentence by blending each word:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f0f8ff; border-radius: 8px;">
                        <p><strong>The boy has a toy coin.</strong></p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice reading these words to a family member: out, coin, boy, loud, toy, cloud, oil, mouse.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Diphthong Phrases - Reading in Context",
        lessonContent: `
            <p>Today we'll read phrases and short sentences that use our diphthong words!</p>
            <p><strong>Key Question:</strong> Can you read words with /ou/ and /oi/ when they're in phrases?</p>
            <p><strong>What is a Phrase?</strong></p>
            <ul>
                <li>A phrase is a small group of words that go together</li>
                <li>It's not a complete sentence, but it has meaning</li>
                <li>Examples: "hot oil," "my toy," "loud noise"</li>
            </ul>
            <p><strong>Phrases with /ou/:</strong></p>
            <ul>
                <li>out of the house</li>
                <li>loud mouse</li>
                <li>round cloud</li>
                <li>on the ground</li>
            </ul>
            <p><strong>Phrases with /oi/:</strong></p>
            <ul>
                <li>hot oil in a pan</li>
                <li>my toy boat</li>
                <li>a boy and his coin</li>
                <li>join the group</li>
            </ul>
            <p><strong>Reading Tips:</strong></p>
            <ol>
                <li>Look for the diphthong in each word</li>
                <li>Blend the sounds to read the word</li>
                <li>Read the whole phrase smoothly</li>
                <li>Think about what the phrase means</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Hot Oil in a Pan</div>
                <p>Read this phrase: "hot oil in a pan." Can you find the word with /oi/? Yes - "oil"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Out of the House</div>
                <p>Read this phrase: "out of the house." The word "out" has /ou/ at the beginning. The word "house" has /ou/ in the middle!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Joyful Reading</div>
                <p>Practice this phrase: "The boy has joy." "Boy" has /oi/ at the end (oy), and "joy" also has /oi/ at the end!</p>
            </div>
        `,
        taskInstructions: "Read and write phrases containing diphthongs /ou/ and /oi/.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read the Phrases</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each phrase aloud. Circle the words with /ou/ or /oi/:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• hot oil in a pan</div>
                        <div>• the loud mouse ran out</div>
                        <div>• my toy boat</div>
                        <div>• a brown cow on the ground</div>
                        <div>• the boy found a coin</div>
                        <div>• join us for fun</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Phrase</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing word using the word bank:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Word bank: <strong>oil, out, toy, loud, boy, house</strong></p>
                        <div>• hot ___ in a pan</div>
                        <div>• the ___ mouse</div>
                        <div>• my ___ car</div>
                        <div>• run ___ of the ___</div>
                        <div>• a ___ and his dog</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Match Phrase to Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line from each phrase to the matching picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• hot oil in a pan → [ 🍳 ]</div>
                        <div>• a boy with a toy → [ 👦🧸 ]</div>
                        <div>• a loud mouse → [ 🐭📢 ]</div>
                        <div>• out of the house → [ 🏃‍♂️🏠 ]</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own Phrase</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a phrase using at least one /ou/ word and one /oi/ word:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture to go with your phrase:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reading Fluency</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Practice reading this story. Circle all the /ou/ and /oi/ words:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f0f8ff; border-radius: 8px;">
                        <p>A boy had a toy coin. He ran out of his house. He saw a loud mouse on the ground. The mouse found some oil in a pan. "Join me for fun!" said the boy.</p>
                    </div>
                </div>
            </div>
        `,
        homework: "Read the story from Part E to a family member. Ask them to listen for the /ou/ and /oi/ sounds.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek2);
    console.log("grade1-literacy-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek2);
    console.log("grade1-literacy-week2.js registered using DataLoader.registerWorksheet()");
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
    console.log("grade1-literacy-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek2 = grade1LiteracyWeek2;
console.log("grade1-literacy-week2.js loaded and registered successfully");