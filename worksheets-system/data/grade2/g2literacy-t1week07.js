// Grade 2 Literacy - Term 1 Week 7 Data
const grade2LiteracyWeek7 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 1,
        week: 7,
        title: "Vowel Alternative Spellings",
        description: "Identifying alternative spellings for vowel sounds: /u:/, /o/, /o:/, /i/, and /ou/"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Vowel Alternative Spellings: /u:/ sound",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn about different ways to spell the /u:/ sound (the long "oo" sound).</p>
            <p><strong>Key Question:</strong> How many ways can we spell the /u:/ sound?</p>
            <p><strong>Introduction:</strong> The /u:/ sound is the long "oo" sound you hear in words like "blue" and "true". There are three common spellings for this sound.</p>
            <p><strong>The Three Spellings of /u:/:</strong></p>
            <ol>
                <li><strong>u</strong> (at the end of a word or before a consonant)</li>
                <li><strong>u-e</strong> (the magic e makes the u say its name)</li>
                <li><strong>ew</strong> (two letters working together)</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li><strong>u</strong> = super, music, unit, unicorn</li>
                <li><strong>u-e</strong> = tune, rude, June, prune, flute</li>
                <li><strong>ew</strong> = new, few, grew, flew, drew, screw</li>
            </ul>
            <p><strong>Remember:</strong> All these spellings make the same /u:/ sound! The magic 'e' at the end of u-e words jumps back and makes the u say its name.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Music Words</div>
                <p>The word "music" has the /u:/ sound spelled with just the letter u. "Flute" has the same sound but spelled with u-e!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dragon"></i> Magical Creatures</div>
                <p>A "unicorn" starts with the /u:/ sound (u). "New" has the same sound but spelled with ew.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Spelling Tip</div>
                <p>When you hear the /u:/ sound at the end of a word, it's often spelled "ew" (like grew, flew, new).</p>
            </div>
        `,
        taskInstructions: "Sort words by their /u:/ spelling pattern and complete the sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct column: <strong>tune, super, few, June, music, grew, rude, new, unit, drew</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">u</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">u-e</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">ew</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with a /u:/ word from the box:
                    <div style="background-color: #f5f5f5; padding: 10px; margin: 10px 0;">
                        <strong>Word Bank:</strong> new, tune, super, grew, June
                    </div>
                    <div style="margin-left: 20px;">
                        <div>a) My sunflower ________ very tall this summer.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>b) I learned a ________ song on my violin.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>c) ________ is a month when school ends.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>d) My mom bought me a ________ backpack.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>e) That movie was ________ funny!</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the sentence and circle all the words with the /u:/ sound:
                    <div style="background-color: #e8f4f8; padding: 10px; margin: 10px 0;">
                        "In June, a few new students came to our music class. They learned a new tune on the flute."
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that have the /u:/ sound in their name. Write them down and circle the spelling pattern (u, u-e, or ew).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Vowel Alternative Spellings: /o/ and /o:/ sounds",
        lessonContent: `
            <p>Today we'll learn two different vowel sounds: the short /o/ sound and the long /o:/ sound!</p>
            <p><strong>Key Question:</strong> How can the same letters make different sounds?</p>
            <p><strong>Sound 1: /o/ (the short 'e' sound like in 'the')</strong></p>
            <p>This is the soft 'uh' sound you hear at the beginning of words like "about". There are four spellings:</p>
            <ul>
                <li><strong>e</strong> = open, hello, silent (the 'e' can sound like /o/ in some words)</li>
                <li><strong>ea</strong> = ocean, tropical</li>
                <li><strong>ey</strong> = they, hey</li>
                <li><strong>y</strong> (at the end of long words) = family, happy, baby</li>
            </ul>
            <p><strong>Sound 2: /o:/ (the long 'aw' sound like in 'saw')</strong></p>
            <p>This is the sound you hear in "caught" or "ball". There are four spellings:</p>
            <ul>
                <li><strong>a</strong> (before 'l' or 'll') = ball, tall, call, small</li>
                <li><strong>au</strong> = August, author, autumn, sauce</li>
                <li><strong>aw</strong> = saw, draw, crawl, paw</li>
                <li><strong>oor</strong> = door, floor</li>
            </ul>
            <p><strong>Important:</strong> Don't confuse these two sounds! /o/ is soft like "uh", while /o:/ is strong like "aw".</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> August Example</div>
                <p>The month "August" has the /o:/ sound spelled with "au". The word "ball" has the same sound spelled with "a" before 'll'.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Paw and Draw</div>
                <p>"Paw" and "draw" both have the /o:/ sound spelled with "aw". Can you think of more words like these?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Happy Family</div>
                <p>The word "happy" ends with the /o/ sound spelled with 'y'. "Family" also ends with the same sound!</p>
            </div>
        `,
        taskInstructions: "Identify and sort words with /o/ and /o:/ sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into /o/ (soft) or /o:/ (long): <strong>ball, they, draw, family, door, ocean, saw, happy, tall, hey, August, baby</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">/o/ (soft - like "the")</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">/o:/ (long - like "saw")</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 180px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 180px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Spelling Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each word and circle the letters that make the /o/ or /o:/ sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) ocean → /o/ sound spelled ______</div>
                        <div>b) door → /o:/ sound spelled ______</div>
                        <div>c) they → /o/ sound spelled ______</div>
                        <div>d) small → /o:/ sound spelled ______</div>
                        <div>e) August → /o:/ sound spelled ______</div>
                        <div>f) family → /o/ sound spelled ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two sentences. One sentence must use a word with the /o/ sound. The other must use a word with the /o:/ sound.
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 words with the /o/ sound and 3 words with the /o:/ sound in a book you are reading. Write them down and show which spelling pattern each uses.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Vowel Alternative Spellings: /i/ and /ou/ sounds",
        lessonContent: `
            <p>Today we'll learn two more vowel sounds: the long /i/ sound and the /ou/ sound!</p>
            <p><strong>Key Question:</strong> How many ways can you spell the sound in "light" and the sound in "cow"?</p>
            <p><strong>Sound 1: /i/ (the long 'i' sound like in 'bike')</strong></p>
            <p>This is the sound you hear in "kite" and "fly". There are four spellings:</p>
            <ul>
                <li><strong>i</strong> (in short words) = I, hi, tiger</li>
                <li><strong>i-e</strong> (magic e) = bike, time, like, kite, five</li>
                <li><strong>igh</strong> (three letters together) = light, night, high, bright, right</li>
                <li><strong>y</strong> (at the end of words) = my, by, fly, cry, try</li>
            </ul>
            <p><strong>Sound 2: /ou/ (the sound like in 'cow' and 'out')</strong></p>
            <p>This is the sound you hear in "house" and "now". There is one main spelling pattern this week:</p>
            <ul>
                <li><strong>ow</strong> = cow, how, now, brown, down, town, flower</li>
            </ul>
            <p><strong>Remember:</strong> The /ou/ sound can also be spelled "ou" (like in "out" and "loud"), but today we focus on the "ow" spelling!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Light and Night</div>
                <p>"Light" and "night" both have the /i/ sound spelled with "igh". These are tricky because there are three letters but only one sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> Magic e</div>
                <p>In "bike" and "time", the magic 'e' at the end makes the 'i' say its name. Without the 'e', "bik" and "tim" would have short vowel sounds!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Brown Flower</div>
                <p>"Brown" and "flower" both have the /ou/ sound spelled with "ow". Say them slowly: br-ow-n, fl-ow-er. Hear that /ou/ sound?</p>
            </div>
        `,
        taskInstructions: "Identify /i/ and /ou/ sounds in words and complete the activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: /i/ Sound Spelling Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these /i/ sound words into the correct column: <strong>my, time, high, kite, fly, night, bike, cry, bright, tiger, try, light</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">i</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">i-e</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">igh</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">y</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: /ou/ Sound Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the words that have the /ou/ sound (like "cow"):
                    <div style="background-color: #f5f5f5; padding: 10px; margin: 10px 0;">
                        down &nbsp;&nbsp; snow &nbsp;&nbsp; brown &nbsp;&nbsp; grow &nbsp;&nbsp; how &nbsp;&nbsp; show &nbsp;&nbsp; town &nbsp;&nbsp; now &nbsp;&nbsp; flower &nbsp;&nbsp; blow
                    </div>
                    <div class="answer-space" style="height: 40px;"></div>
                    <div>Which words did you NOT circle? Why?</div>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The stars shine ________ (bright/bring) in the sky.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>b) I like to ________ (kite/fly) my kite at the park.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>c) The ________ (brown/blow) bear lives in the forest.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>d) ________ (How/Now) many fish are in the tank?</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>e) Don't ________ (cry/try) if you make a mistake.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read the sentence. Circle all the /i/ sound words and underline all the /ou/ sound words:
                    <div style="background-color: #e8f4f8; padding: 10px; margin: 10px 0;">
                        "I saw a bright light high in the night sky. Down in the brown town, a cow cried out loud."
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences. Use at least one /i/ sound word in each sentence (try different spellings: i, i-e, igh, y). Then write 2 more sentences using /ou/ sound words with the 'ow' spelling.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek7);
    console.log("grade2-literacy-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek7);
    console.log("grade2-literacy-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek7',
        metadata: grade2LiteracyWeek7.metadata,
        days: grade2LiteracyWeek7
    });
    console.log("grade2-literacy-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek7 = grade2LiteracyWeek7;
console.log("grade2-literacy-week7.js loaded and registered successfully");