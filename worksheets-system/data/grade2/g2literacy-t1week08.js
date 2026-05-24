// Grade 2 Literacy - Term 1 Week 8 Data
const grade2LiteracyWeek8 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 1,
        week: 8,
        title: "Vowel Alternative Spellings",
        description: "Identifying alternative spellings for vowel sounds: /oi/ = oy, /ee/ = ir, ur; blending and segmenting words"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Vowel Alternative Spellings: /oi/ = oy, /ee/ = ir, ur",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn about alternative spellings for vowel sounds we already know.</p>
            <p><strong>Key Question:</strong> Can the same sound be spelled in different ways?</p>
            <p><strong>Introduction:</strong> Sometimes, the same sound can be written with different letters. Today we'll learn two new spelling patterns!</p>
            <p><strong>Sound 1: /oi/ as in "boy"</strong></p>
            <ul>
                <li>We know /oi/ can be spelled <strong>oi</strong> (like in "coin" and "soil")</li>
                <li>Today we learn: /oi/ can also be spelled <strong>oy</strong> at the END of words</li>
                <li><strong>Examples:</strong> boy, toy, joy, soy, annoy</li>
            </ul>
            <p><strong>Sound 2: /ee/ as in "see"</strong></p>
            <ul>
                <li>We know /ee/ can be spelled <strong>ee</strong> (like in "bee" and "tree")</li>
                <li>We know /ee/ can be spelled <strong>ea</strong> (like in "sea" and "leaf")</li>
                <li>Today we learn: /ee/ can also be spelled <strong>ir</strong> and <strong>ur</strong> (in the middle of words)</li>
                <li><strong>Examples with ir:</strong> bird, girl, shirt, first, third</li>
                <li><strong>Examples with ur:</strong> fur, curl, turn, nurse, surf</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> The "Boy" Rule</div>
                <p>When you hear the /oi/ sound at the END of a word, it's usually spelled "oy" - like in boy, toy, and joy!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-feather-alt"></i> The "Bird" and "Fur" Pattern</div>
                <p>The /ee/ sound in the middle of words can be tricky! "ir" (bird, shirt) and "ur" (fur, curl) both make the same sound.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Think About It</div>
                <p>Why do you think "boy" has "oy" but "boil" has "oi"? (Hint: where is the /oi/ sound in the word?)</p>
            </div>
        `,
        taskInstructions: "Identify and sort words with /oi/ = oy and /ee/ = ir, ur spelling patterns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: /oi/ Sound - Spot the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the words that have the /oi/ sound spelled with "oy":
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>boy &nbsp;&nbsp; coin &nbsp;&nbsp; toy &nbsp;&nbsp; soil &nbsp;&nbsp; joy &nbsp;&nbsp; boil</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write 3 words that end with "oy":
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: /ee/ Sound - ir and ur</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these words into the correct column:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>bird, fur, shirt, curl, girl, nurse, third, turn</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Words with "ir"</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Words with "ur"</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a sentence using a word with "oy":
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write a sentence using a word with "ir":
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Write a sentence using a word with "ur":
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home that have the /oi/ sound (like toy or coin) and 3 things with the /ee/ sound (like bird picture or fur blanket). Write their names.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Blending words with alternative vowel spelling choices",
        lessonContent: `
            <p>Today we'll practice blending sounds together to read words with our new spelling patterns!</p>
            <p><strong>Key Question:</strong> How do we read words when the same sound has different spellings?</p>
            <p><strong>Introduction:</strong> Blending means putting sounds together smoothly to read a word. Let's practice with words that have our new spelling patterns!</p>
            <p><strong>Words to blend today:</strong></p>
            <ul>
                <li><strong>/oi/ spelled "oy":</strong> boy, toy, joy, soy, ahoy, annoy</li>
                <li><strong>/ee/ spelled "ir":</strong> bird, girl, shirt, first, third, stir</li>
                <li><strong>/ee/ spelled "ur":</strong> fur, curl, turn, surf, nurse, purse</li>
                <li><strong>Special words (review):</strong> night, light, high (the "igh" makes the long /i/ sound)</li>
                <li><strong>Special words (review):</strong> my, by, try (the "y" at the end makes the long /i/ sound)</li>
            </ul>
            <p><strong>Blending Strategy:</strong> Look at the letters, say each sound, then blend them together!</p>
            <p>Example: b-o-y → "boy" &nbsp;&nbsp;&nbsp; s-h-i-r-t → "shirt" &nbsp;&nbsp;&nbsp; n-i-g-h-t → "night"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Say It Slowly, Then Fast</div>
                <p>Try: t-o-y (t-oy) → toy! &nbsp;&nbsp;&nbsp; g-i-r-l (g-ir-l) → girl!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> The "igh" Pattern</div>
                <p>In "night", the letters "igh" work together to make the long /i/ sound. n-igh-t → night!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> The "y" at the End</div>
                <p>When a one-syllable word ends with "y", it often makes the long /i/ sound. m-y → my! &nbsp;&nbsp;&nbsp; tr-y → try!</p>
            </div>
        `,
        taskInstructions: "Practice blending sounds to read words with alternative vowel spellings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Blend and Read</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each word aloud. Draw a line to match the word to its picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• boy</div>
                                <div>• toy</div>
                                <div>• bird</div>
                                <div>• shirt</div>
                                <div>• night</div>
                                <div>• my</div>
                            </div>
                            <div>
                                <div>[Draw a boy]</div>
                                <div>[Draw a toy]</div>
                                <div>[Draw a bird]</div>
                                <div>[Draw a shirt]</div>
                                <div>[Draw a moon/stars]</div>
                                <div>[Draw a pointing hand]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Practice blending these words. Write each word 2 times:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>joy: _________ &nbsp;&nbsp;&nbsp;&nbsp; _________</div>
                        <div>curl: _________ &nbsp;&nbsp;&nbsp;&nbsp; _________</div>
                        <div>first: _________ &nbsp;&nbsp;&nbsp;&nbsp; _________</div>
                        <div>light: _________ &nbsp;&nbsp;&nbsp;&nbsp; _________</div>
                        <div>try: _________ &nbsp;&nbsp;&nbsp;&nbsp; _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Read the Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read this sentence aloud, then copy it:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #e8f4f8;">
                        <p>"The boy in the red shirt will try to fly his toy at night."</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Find the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle all the "oy", "ir", "ur", "igh", and "y" (making long i) words in the sentence above:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Read the sentence from class to a family member. Find 3 more words at home that have 'oy', 'ir', 'ur', 'igh', or 'y' at the end. Write them down.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Segmenting words into structural sounds",
        lessonContent: `
            <p>Today we'll practice segmenting - breaking words apart into their individual sounds!</p>
            <p><strong>Key Question:</strong> How do we break words into their separate sounds?</p>
            <p><strong>Introduction:</strong> Segmenting is the opposite of blending. When we segment, we stretch out a word and say each sound one by one. This helps us spell words correctly!</p>
            <p><strong>What is Segmenting?</strong></p>
            <ul>
                <li>Segmenting means breaking a word into its smallest sounds (phonemes)</li>
                <li>We use finger tapping or boxes to show each sound</li>
                <li>Example: "toy" = t / oy (2 sounds)</li>
                <li>Example: "cow" = c / ow (2 sounds)</li>
                <li>Example: "write" = w / r / i / t / e (5 sounds - the 'w' is silent!)</li>
            </ul>
            <p><strong>Practice Segmenting:</strong></p>
            <ul>
                <li>boy = b / oy (2 sounds)</li>
                <li>night = n / igh / t (3 sounds - 'igh' makes one sound!)</li>
                <li>shirt = sh / ir / t (3 sounds)</li>
                <li>curl = c / ur / l (3 sounds)</li>
                <li>my = m / y (2 sounds - 'y' makes the long /i/ sound)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fingerprint"></i> Finger Tapping</div>
                <p>Tap your fingers as you say each sound: "boy" → tap thumb (b), tap pointer (oy). Two taps = two sounds!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-silent"></i> Silent Letters</div>
                <p>In "write", the 'w' is silent and the 'e' is silent. But we still count them as sounds when segmenting! w/r/i/t/e (5 sounds).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Digraphs Stay Together</div>
                <p>When two letters make ONE sound (like 'sh', 'igh', 'oy'), they stay together in one box: "sh" = one sound, "igh" = one sound, "oy" = one sound.</p>
            </div>
        `,
        taskInstructions: "Segment words by breaking them into their individual sounds using boxes and finger tapping.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Segment with Sound Boxes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw sound boxes for each word. Put one sound in each box:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>toy</strong> → t | oy</div>
                        <div><strong>cow</strong> → c | ow</div>
                        <div style="margin-top: 15px;"><strong>write:</strong></div>
                        <div style="display: flex; gap: 10px; margin-top: 5px; flex-wrap: wrap;">
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;">w</div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;">r</div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;">i</div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;">t</div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;">e</div>
                        </div>
                        <div style="margin-top: 15px;"><strong>night:</strong></div>
                        <div style="display: flex; gap: 10px; margin-top: 5px; flex-wrap: wrap;">
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                        </div>
                        <div style="margin-top: 15px;"><strong>shirt:</strong></div>
                        <div style="display: flex; gap: 10px; margin-top: 5px; flex-wrap: wrap;">
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                        </div>
                        <div style="margin-top: 15px;"><strong>curl:</strong></div>
                        <div style="display: flex; gap: 10px; margin-top: 5px; flex-wrap: wrap;">
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                            <div style="width: 50px; height: 50px; border: 2px solid #333; text-align: center; line-height: 50px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Segment and Write</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Say each word slowly. Write how many sounds you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>boy = ___ sounds &nbsp;&nbsp;&nbsp;&nbsp; (b - oy)</div>
                        <div>my = ___ sounds &nbsp;&nbsp;&nbsp;&nbsp; (m - y)</div>
                        <div>joy = ___ sounds &nbsp;&nbsp;&nbsp;&nbsp; (j - oy)</div>
                        <div>girl = ___ sounds &nbsp;&nbsp;&nbsp;&nbsp; (g - ir - l)</div>
                        <div>turn = ___ sounds &nbsp;&nbsp;&nbsp;&nbsp; (t - ur - n)</div>
                        <div>light = ___ sounds &nbsp;&nbsp;&nbsp;&nbsp; (l - igh - t)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Independent Segmenting</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Segment these words. Write the sounds with slashes between them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: "toy" → t / oy</div>
                        <div style="margin-top: 10px;">"first" → _________</div>
                        <div>"nurse" → _________</div>
                        <div>"try" → _________</div>
                        <div>"high" → _________</div>
                        <div>"annoy" → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Finger Tap Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> With a partner, take turns saying a word and tapping the sounds. Write one word your partner gave you:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. For each object, say the name, tap the sounds on your fingers, and write how many sounds you heard.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek8);
    console.log("grade2-literacy-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek8);
    console.log("grade2-literacy-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek8',
        metadata: grade2LiteracyWeek8.metadata,
        days: grade2LiteracyWeek8
    });
    console.log("grade2-literacy-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek8 = grade2LiteracyWeek8;
console.log("grade2-literacy-week8.js loaded and registered successfully");