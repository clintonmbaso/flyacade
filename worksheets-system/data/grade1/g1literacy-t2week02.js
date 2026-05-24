// Grade 1 Literacy - Term 2 Week 2 Data
const grade1LiteracyWeek2 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 2,
        week: 2,
        title: "Long Vowels Introduction (ai, ee)",
        description: "Identifying and sounding out long vowel sounds /ai/ and /ee/, forming upper-case letters A, I, E, blending VC and CVC words, and identifying middle sounds"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Long Vowels (ai, ee) - Identifying and Sounding Out",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn about long vowel sounds /ai/ and /ee/.</p>
            <p><strong>Key Question:</strong> What makes a vowel sound "long"?</p>
            <p><strong>Introduction:</strong> Vowels are A, E, I, O, U. Sometimes they say their own name - that's a long vowel sound! Today we'll learn two long vowel sounds: /ai/ (as in "rain") and /ee/ (as in "feet").</p>
            <p><strong>Long Vowel /ai/ Sound:</strong></p>
            <ul>
                <li>The /ai/ sound says its name: "A"</li>
                <li>Words with /ai/: rain, train, tail, sail, pail, nail</li>
                <li>Sometimes it's spelled "ai" (like in rain) or "a_e" (like in cake - we'll learn that later!)</li>
            </ul>
            <p><strong>Long Vowel /ee/ Sound:</strong></p>
            <ul>
                <li>The /ee/ sound says its name: "E"</li>
                <li>Words with /ee/: feet, bee, see, tree, green, sleep</li>
                <li>Sometimes it's spelled "ee" (like in feet) or "ea" (like in leaf - we'll learn that later!)</li>
            </ul>
            <p><strong>How to Make the Sounds:</strong></p>
            <ul>
                <li><strong>/ai/:</strong> Open your mouth wide and smile. Your tongue stays low. Say: "A" (like the letter name)</li>
                <li><strong>/ee/:</strong> Spread your lips wide like a big smile. Your tongue is high and forward. Say: "E" (like the letter name)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Rain Sound</div>
                <p>The /ai/ sound is in "rain" - R-ai-n. Can you hear the letter "A" saying its name?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> Feet Sound</div>
                <p>The /ee/ sound is in "feet" - F-ee-t. The letter "E" says its own name!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer"></i> Listen and Repeat</div>
                <p>Say these words: pain, gain, main, see, tree, knee. Do you hear /ai/ and /ee/?</p>
            </div>
        `,
        taskInstructions: "Practice identifying and sounding out /ai/ and /ee/ words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hear the Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the pictures that have the /ai/ sound:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>rain</div>
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>cat</div>
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>train</div>
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>dog</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the pictures that have the /ee/ sound:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>bee</div>
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>sun</div>
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>tree</div>
                        <div style="text-align: center;"><div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>fish</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Say the Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Practice saying these words out loud. Color the circle green for /ai/ and blue for /ee/:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• rain <span style="margin-left: 20px;">○</span></div>
                        <div>• feet <span style="margin-left: 20px;">○</span></div>
                        <div>• tail <span style="margin-left: 20px;">○</span></div>
                        <div>• bee <span style="margin-left: 20px;">○</span></div>
                        <div>• nail <span style="margin-left: 20px;">○</span></div>
                        <div>• see <span style="margin-left: 20px;">○</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write the Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write "ai" or "ee" to complete each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• r ___ n</div>
                        <div>• f ___ t</div>
                        <div>• tr ___ n</div>
                        <div>• b ___ </div>
                        <div>• s ___ </div>
                        <div>• t ___ l</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home with the /ai/ sound and 3 things with the /ee/ sound. Draw them in your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Handwriting",
        subtopic: "Forming Upper-case Letters: A, I, E",
        lessonContent: `
            <p>Today we'll practice writing upper-case letters A, I, and E!</p>
            <p><strong>Key Question:</strong> How do we write big letters A, I, and E correctly?</p>
            <p><strong>Introduction:</strong> Upper-case letters are also called "capital letters." We use them at the beginning of a sentence and for names. Let's learn to write A, I, and E!</p>
            <p><strong>How to Write Upper-case A:</strong></p>
            <ul>
                <li>Start at the top (the rooftop line)</li>
                <li>Slant down to the left (to the bottom line)</li>
                <li>Go back to the top</li>
                <li>Slant down to the right (to the bottom line)</li>
                <li>Cross in the middle (across the middle line)</li>
                <li>"A is for Apple - up, down, slide, and across!"</li>
            </ul>
            <p><strong>How to Write Upper-case I:</strong></p>
            <ul>
                <li>Start at the top (rooftop line)</li>
                <li>Draw a straight line down to the bottom line</li>
                <li>Add a line across the top (from left to right)</li>
                <li>Add a line across the bottom (from left to right)</li>
                <li>"I is for Igloo - straight down, top hat, bottom hat!"</li>
            </ul>
            <p><strong>How to Write Upper-case E:</strong></p>
            <ul>
                <li>Start at the top (rooftop line)</li>
                <li>Draw a straight line down to the bottom line</li>
                <li>Go back to the top and draw a line across to the right (top arm)</li>
                <li>Draw a line across in the middle (middle arm)</li>
                <li>Draw a line across at the bottom (bottom arm)</li>
                <li>"E is for Elephant - down, across, across, across!"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Letter A Rhyme</div>
                <p>Slant down, slant down, cross the middle - that's the way to make an A!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Letter I Rhyme</div>
                <p>Straight line down, a hat on top, a shoe on bottom - letter I, you've got it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Letter E Rhyme</div>
                <p>Down the pole, then 1-2-3 - that's the way to make an E!</p>
            </div>
        `,
        taskInstructions: "Trace and write upper-case letters A, I, and E.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Trace the Letter A</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace the A's, then write your own:
                    <div style="font-family: monospace; font-size: 32px; margin-top: 10px;">
                        <div>A A A A A</div>
                        <div style="border-bottom: 1px dotted #ccc;">_________</div>
                        <div style="margin-top: 10px;">___ ___ ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Trace the Letter I</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Trace the I's, then write your own:
                    <div style="font-family: monospace; font-size: 32px; margin-top: 10px;">
                        <div>I I I I I</div>
                        <div style="border-bottom: 1px dotted #ccc;">_________</div>
                        <div style="margin-top: 10px;">___ ___ ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Trace the Letter E</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Trace the E's, then write your own:
                    <div style="font-family: monospace; font-size: 32px; margin-top: 10px;">
                        <div>E E E E E</div>
                        <div style="border-bottom: 1px dotted #ccc;">_________</div>
                        <div style="margin-top: 10px;">___ ___ ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write A, I, and E in the boxes:
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                        <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                        <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                        <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                        <div class="drawing-area" style="width: 60px; height: 60px; border: 1px solid #ccc;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write your name using a capital letter at the beginning:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice writing A, I, and E five times each at home. Find things that start with these letters and draw them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Long Vowel Blending - VC (aid) and CVC (rain, feet)",
        lessonContent: `
            <p>Today we'll blend sounds together to read long vowel words!</p>
            <p><strong>Key Question:</strong> How do we put sounds together to read words like "rain" and "feet"?</p>
            <p><strong>Introduction:</strong> Blending means putting sounds together smoothly to make a word. Today we'll practice blending VC words (vowel-consonant) and CVC words (consonant-vowel-consonant) with long vowels.</p>
            <p><strong>What is Blending?</strong></p>
            <ul>
                <li>We say each sound: /r/ /ai/ /n/</li>
                <li>Then we put them together: rrr-ai-iii-nnn → rain!</li>
                <li>The sounds flow into each other like a train</li>
            </ul>
            <p><strong>VC Words (Vowel + Consonant):</strong></p>
            <ul>
                <li>aid (/ai/ + /d/) → ay-d → aid (help)</li>
                <li>aim (/ai/ + /m/) → ay-m → aim (to point at something)</li>
                <li>eel (/ee/ + /l/) → ee-l → eel (a long fish)</li>
                <li>eek (/ee/ + /k/) → ee-k → eek (a squeaky sound!)</li>
            </ul>
            <p><strong>CVC Words (Consonant + Vowel + Consonant):</strong></p>
            <ul>
                <li>rain (/r/ + /ai/ + /n/) → r-ai-n → rain</li>
                <li>feet (/f/ + /ee/ + /t/) → f-ee-t → feet</li>
                <li>pain (/p/ + /ai/ + /n/) → p-ai-n → pain</li>
                <li>see (/s/ + /ee/) → s-ee → see (this is CV - we'll learn that too!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> The Blending Train</div>
                <p>Think of blending like train cars connecting! /r/ + /ai/ + /n/ connect to make "rain"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-sparkles"></i> Say It Slowly, Then Fast</div>
                <p>Say "rrr-ai-iii-nnn" slowly, then say it fast: "rain!" That's blending!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> VC Words Help Us Blend</div>
                <p>Words like "aid" and "eel" have only two sounds. They're a great way to practice blending before trying three-sound words!</p>
            </div>
        `,
        taskInstructions: "Practice blending VC and CVC words with long vowels /ai/ and /ee/.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Blend VC Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say each sound, then blend to read the word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• /ai/ + /d/ = _______ (aid)</div>
                        <div>• /ai/ + /m/ = _______ (aim)</div>
                        <div>• /ee/ + /l/ = _______ (eel)</div>
                        <div>• /ee/ + /k/ = _______ (eek)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Blend CVC Words (/ai/ words)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Touch each dot as you say the sound, then blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• r • ai • n = _______ (rain)</div>
                        <div>• p • ai • n = _______ (pain)</div>
                        <div>• t • ai • l = _______ (tail)</div>
                        <div>• n • ai • l = _______ (nail)</div>
                        <div>• s • ai • l = _______ (sail)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Blend CVC Words (/ee/ words)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Touch each dot as you say the sound, then blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• f • ee • t = _______ (feet)</div>
                        <div>• b • ee = _______ (bee)</div>
                        <div>• s • ee = _______ (see)</div>
                        <div>• tr • ee = _______ (tree)</div>
                        <div>• gr • ee • n = _______ (green)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Read and Match</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a line from each word to its picture:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <div>• rain</div>
                            <div>• feet</div>
                            <div>• tree</div>
                            <div>• tail</div>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #ccc;"></div>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #ccc; margin-top: 5px;"></div>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #ccc; margin-top: 5px;"></div>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice reading these words to a family member: rain, feet, tail, bee, see, tree, nail, green, aid, aim.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Word Positions - Identifying the Middle Sound",
        lessonContent: `
            <p>Today we'll listen carefully to words and find the middle sound!</p>
            <p><strong>Key Question:</strong> Where do we hear the /ai/ and /ee/ sounds in words like "rain" and "feet"?</p>
            <p><strong>Introduction:</strong> Every word has sounds in different positions - beginning, middle, and end. Today we'll focus on finding the MIDDLE sound in long vowel words.</p>
            <p><strong>What is the Middle Sound?</strong></p>
            <ul>
                <li>The middle sound is the vowel sound you hear in the middle of a word</li>
                <li>In CVC words, the middle sound is the vowel (the second sound)</li>
                <li>Example: r - ai - n → the middle sound is /ai/</li>
                <li>Example: f - ee - t → the middle sound is /ee/</li>
            </ul>
            <p><strong>Finding the Middle Sound in /ai/ Words:</strong></p>
            <ul>
                <li>rain: /r/ - /ai/ - /n/ → middle sound = /ai/</li>
                <li>tail: /t/ - /ai/ - /l/ → middle sound = /ai/</li>
                <li>nail: /n/ - /ai/ - /l/ → middle sound = /ai/</li>
                <li>pain: /p/ - /ai/ - /n/ → middle sound = /ai/</li>
            </ul>
            <p><strong>Finding the Middle Sound in /ee/ Words:</strong></p>
            <ul>
                <li>feet: /f/ - /ee/ - /t/ → middle sound = /ee/</li>
                <li>bee: /b/ - /ee/ (this is only 2 sounds - the /ee/ is at the end!)</li>
                <li>see: /s/ - /ee/ (the /ee/ is at the end)</li>
                <li>green: /gr/ - /ee/ - /n/ → middle sound = /ee/</li>
                <li>tree: /tr/ - /ee/ → middle sound = /ee/</li>
            </ul>
            <p><strong>Remember:</strong> Some long vowel words have only 2 sounds (CV words like "bee" and "see"). In those words, the long vowel sound is at the END, not the middle!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Listen for the Middle</div>
                <p>Say "rain" slowly: rrr-aaa-iii-nnn. The /ai/ sound is right in the middle!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> What About "bee"?</div>
                <p>"Bee" has only two sounds: /b/ and /ee/. There's no middle sound because the vowel is at the end!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Middle Sound Detective</div>
                <p>Be a sound detective! Listen to each word and find where the long vowel lives - beginning, middle, or end?</p>
            </div>
        `,
        taskInstructions: "Identify the middle sound in long vowel words (/ai/ and /ee/).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Middle Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say each word. Circle the middle sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• rain → r  <span style="border: 1px solid #ccc; padding: 5px 10px;">ai</span>  n</div>
                        <div>• feet → f  <span style="border: 1px solid #ccc; padding: 5px 10px;">ee</span>  t</div>
                        <div>• tail → t  <span style="border: 1px solid #ccc; padding: 5px 10px;">ai</span>  l</div>
                        <div>• green → gr  <span style="border: 1px solid #ccc; padding: 5px 10px;">ee</span>  n</div>
                        <div>• nail → n  <span style="border: 1px solid #ccc; padding: 5px 10px;">ai</span>  l</div>
                        <div>• tree → tr  <span style="border: 1px solid #ccc; padding: 5px 10px;">ee</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What's the Middle Sound?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write "ai" or "ee" for the middle sound of each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• rain → r ___ n (answer: ai)</div>
                        <div>• feet → f ___ t (answer: ___ )</div>
                        <div>• tail → t ___ l (answer: ___ )</div>
                        <div>• pain → p ___ n (answer: ___ )</div>
                        <div>• green → gr ___ n (answer: ___ )</div>
                        <div>• nail → n ___ l (answer: ___ )</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sort the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Put each word in the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Words:</strong> rain, feet, bee, tail, see, nail, green, tree, pain, eel</p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">/ai/ in the MIDDLE</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">/ee/ in the MIDDLE</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Long vowel at the END</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of a word that has /ai/ in the middle (like rain or tail):
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of a word that has /ee/ in the middle (like feet or green):
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 words at home or in a book with the /ai/ sound and 5 words with the /ee/ sound. Tell a family member if the sound is in the beginning, middle, or end of each word.",
        homeworkDue: "Friday"
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