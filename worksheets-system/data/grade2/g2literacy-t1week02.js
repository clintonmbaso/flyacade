// Grade 2 Literacy - Week 2 Data (Alternative Spellings for /s/ and /z/)
const grade2LiteracyWeek2 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        week: 2,
        title: "The Many Faces of /s/ and /z/ — Alternative Spellings",
        description: "Identifying alternative spelling choices for the /s/ (ss, se, c, ce) and /z/ (zz, ze, s, se) sounds"
    },
    
    monday: {
        subject: "Literacy",
        topic: "The Many Faces of /s/ and /z/",
        subtopic: "Introducing alternative spellings for /s/ and /z/ sounds",
        lessonContent: `
            <p>Welcome to our Literacy lesson! Today we will explore how the same sound can be spelled in different ways.</p>
            <p><strong>Key Concept:</strong> The /s/ and /z/ sounds can be made by different letter combinations, not just the letter 's'.</p>
            <p><strong>What is the /s/ sound?</strong></p>
            <ul>
                <li>It's the hissing sound like a snake: sssss</li>
                <li>We often hear it at the beginning, middle, or end of words</li>
                <li>The letter 's' makes this sound, but so do other letters!</li>
            </ul>
            <p><strong>Alternative spellings for /s/:</strong></p>
            <ul>
                <li><strong>'ss'</strong> as in <em>miss</em>, <em>kiss</em>, <em>class</em></li>
                <li><strong>'se'</strong> as in <em>mouse</em>, <em>house</em>, <em>please</em></li>
                <li><strong>'c'</strong> as in <em>city</em>, <em>circle</em>, <em>cent</em></li>
                <li><strong>'ce'</strong> as in <em>ice</em>, <em>face</em>, <em>dance</em></li>
            </ul>
            <p><strong>What is the /z/ sound?</strong></p>
            <ul>
                <li>It's the buzzing sound like a bee: zzzzz</li>
                <li>Sometimes the letter 's' makes this sound too!</li>
            </ul>
            <p><strong>Alternative spellings for /z/:</strong></p>
            <ul>
                <li><strong>'zz'</strong> as in <em>fuzz</em>, <em>buzz</em>, <em>jazz</em></li>
                <li><strong>'ze'</strong> as in <em>freeze</em>, <em>sneeze</em>, <em>breeze</em></li>
                <li><strong>'s'</strong> as in <em>as</em>, <em>is</em>, <em>has</em></li>
                <li><strong>'se'</strong> as in <em>please</em>, <em>cheese</em>, <em>noise</em></li>
            </ul>
            <p><strong>Why is this important?</strong> Knowing different spellings helps us become better readers and spellers!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snake" style="color: #4CAF50;"></i> /s/ Sound Examples</div>
                <p><strong>ss:</strong> miss, grass, lesson</p>
                <p><strong>se:</strong> mouse, house, purse</p>
                <p><strong>c:</strong> city, cent, cycle</p>
                <p><strong>ce:</strong> ice, face, dance</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bee" style="color: #FFC107;"></i> /z/ Sound Examples</div>
                <p><strong>zz:</strong> fuzz, buzz, jazz</p>
                <p><strong>ze:</strong> freeze, sneeze, breeze</p>
                <p><strong>s:</strong> as, is, was</p>
                <p><strong>se:</strong> please, cheese, noise</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sound Detective Game!</div>
                <p>Let's play "Sound Detective!" I'll say a word, and you tell me if it has the /s/ sound or /z/ sound.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice identifying /s/ and /z/ sounds.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the words with the /s/ sound:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ miss ☐ buzz ☐ city ☐ freeze ☐ ice</div>
                    <div>☐ as ☐ house ☐ please ☐ cent ☐ fuzz</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Circle the words with the /z/ sound:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ is ☐ mouse ☐ jazz ☐ dance ☐ sneeze</div>
                    <div>☐ grass ☐ cheese ☐ cycle ☐ was ☐ breeze</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Match the word with its sound:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>miss → ☐ /s/ sound ☐ /z/ sound</div>
                    <div>buzz → ☐ /s/ sound ☐ /z/ sound</div>
                    <div>as → ☐ /s/ sound ☐ /z/ sound</div>
                    <div>ice → ☐ /s/ sound ☐ /z/ sound</div>
                    <div>please → ☐ /s/ sound ☐ /z/ sound</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a picture for each sound:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">/s/ sound (snake)</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">/z/ sound (bee)</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 words at home with the /s/ sound and 3 words with the /z/ sound. Write them in your notebook.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Hunting for Sounds",
        subtopic: "Identifying /s/ and /z/ sounds in text",
        lessonContent: `
            <p>Today we will become sound hunters! We'll listen for /s/ and /z/ sounds in stories and identify which letters make those sounds.</p>
            <p><strong>Key Concept:</strong> The same sound can be spelled different ways, and we need to recognize all the possibilities.</p>
            <p><strong>How to hunt for sounds:</strong></p>
            <ol>
                <li>Listen carefully as the story is read</li>
                <li>When you hear a /s/ or /z/ sound, raise your hand</li>
                <li>Look at the word to see which letters are making the sound</li>
                <li>Sort the word into the correct "Sound Family"</li>
            </ol>
            <p><strong>Remember our sound families:</strong></p>
            <div style="display: flex; margin-top: 10px;">
                <div style="flex: 1; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p><strong>/s/ Sound Family:</strong></p>
                    <ul>
                        <li>ss (miss)</li>
                        <li>se (mouse)</li>
                        <li>c (city)</li>
                        <li>ce (ice)</li>
                    </ul>
                </div>
                <div style="flex: 1; padding: 10px; background-color: #E3F2FD; border-radius: 5px; margin-left: 10px;">
                    <p><strong>/z/ Sound Family:</strong></p>
                    <ul>
                        <li>zz (fuzz)</li>
                        <li>ze (freeze)</li>
                        <li>s (as)</li>
                        <li>se (please)</li>
                    </ul>
                </div>
            </div>
            <p><strong>Story Time:</strong> We'll read "The Sassy Snake and the Buzzing Bee" and hunt for sounds together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader" style="color: #795548;"></i> Story Example</div>
                <p>"Sam the snake sssslithered through the grass. He saw a bee buzzing near some flowers."</p>
                <p><strong>/s/ words:</strong> snake, sssslithered, grass, saw, some</p>
                <p><strong>/z/ words:</strong> bees, buzzing, flowers</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #2196F3;"></i> Sound Hunting Tips</div>
                <p>1. Listen for the hissing /s/ like a snake</p>
                <p>2. Listen for the buzzing /z/ like a bee</p>
                <p>3. Look at the word to see which letters make the sound</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Story Hunt Game!</div>
                <p>Let's read a story together! Every time you hear a /s/ or /z/ sound, make the animal sound (snake hiss or bee buzz)!</p>
            </div>
        `,
        taskInstructions: "Practice identifying /s/ and /z/ sounds in words and sorting them into sound families.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Story Sound Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read the short story and circle all words with /s/ or /z/ sounds:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <p><em>My cat Jazz has nice mice. She sees them in the house. They race on the ice. Please be nice, Jazz!</em></p>
                    </div>
                    <div style="margin-top: 10px;">Number of /s/ words found: <span class="answer-space" style="width: 50px;"></span></div>
                    <div>Number of /z/ words found: <span class="answer-space" style="width: 50px;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sound Family Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these words into the correct columns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex;">
                            <div style="flex: 1;">
                                <div style="font-weight: bold; text-align: center;">/s/ Sound Family</div>
                                <div style="border: 1px solid #ccc; height: 150px; margin: 5px; padding: 5px;">
                                    Words: miss, city, ice, mouse
                                </div>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: bold; text-align: center;">/z/ Sound Family</div>
                                <div style="border: 1px solid #ccc; height: 150px; margin: 5px; padding: 5px;">
                                    Words: buzz, freeze, as, please
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Underline the Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Underline the letters that make the /s/ or /z/ sound in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>dance</div>
                        <div>fuzz</div>
                        <div>circle</div>
                        <div>cheese</div>
                        <div>grass</div>
                        <div>sneeze</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a sentence with at least one /s/ word and one /z/ word:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Read a book at home for 10 minutes. Write down 5 words with /s/ or /z/ sounds that you find.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Sound Families Celebration",
        subtopic: "Reviewing and applying knowledge of /s/ and /z/ sound families",
        lessonContent: `
            <p>Today is our Sound Families celebration! We'll review everything we've learned and show how well we can identify /s/ and /z/ sounds.</p>
            <p><strong>Key Concept:</strong> We now know multiple ways to spell the /s/ and /z/ sounds, and we can recognize them in reading and writing.</p>
            <p><strong>Quick Review:</strong></p>
            <div style="display: flex; margin-top: 10px;">
                <div style="flex: 1; padding: 10px; background-color: #FCE4EC; border-radius: 5px;">
                    <p><strong>/s/ Sound Spellers:</strong></p>
                    <ul>
                        <li>s (sun)</li>
                        <li>ss (class)</li>
                        <li>se (house)</li>
                        <li>c (cent)</li>
                        <li>ce (face)</li>
                    </ul>
                </div>
                <div style="flex: 1; padding: 10px; background-color: #E8F5E9; border-radius: 5px; margin-left: 10px;">
                    <p><strong>/z/ Sound Spellers:</strong></p>
                    <ul>
                        <li>z (zoo)</li>
                        <li>zz (buzz)</li>
                        <li>ze (freeze)</li>
                        <li>s (is)</li>
                        <li>se (cheese)</li>
                    </ul>
                </div>
            </div>
            <p><strong>Why this matters:</strong></p>
            <ul>
                <li>Helps us become better readers</li>
                <li>Makes us better spellers</li>
                <li>Shows us that English has patterns we can learn</li>
                <li>Makes reading and writing more fun!</li>
            </ul>
            <p><strong>Today's activities:</strong> We'll play games, sort words, and create our own sound family charts!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie" style="color: #9C27B0;"></i> Sound Family Chart</div>
                <p><strong>/s/ Family:</strong> snake, ice, city, grass, face</p>
                <p><strong>/z/ Family:</strong> bees, jazz, please, freeze, has</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star" style="color: #FF9800;"></i> Expert Tip</div>
                <p>Remember: sometimes 's' makes the /z/ sound! Think of words like "is," "was," "has," and "as."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sound Family Bingo!</div>
                <p>Let's play Sound Family Bingo! Mark your card when you hear a word with /s/ or /z/ sound!</p>
            </div>
        `,
        taskInstructions: "Complete these final activities to show your understanding of /s/ and /z/ sound families.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Sort Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct sound family:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex;">
                            <div style="flex: 1; padding: 10px; border: 2px solid #4CAF50;">
                                <div style="font-weight: bold; text-align: center;">/s/ Sound Family</div>
                                <div style="min-height: 150px; margin-top: 5px;">
                                    Words to sort: dance, miss, cycle, face, house
                                </div>
                            </div>
                            <div style="flex: 1; padding: 10px; border: 2px solid #2196F3; margin-left: 10px;">
                                <div style="font-weight: bold; text-align: center;">/z/ Sound Family</div>
                                <div style="min-height: 150px; margin-top: 5px;">
                                    Words to sort: fuzz, is, breeze, cheese, sneeze
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create new words using the sound families:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Make a word with 'ss' for /s/: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Make a word with 'ce' for /s/: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Make a word with 'zz' for /z/: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Make a word with 'ze' for /z/: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Family Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short story using at least 3 /s/ words and 2 /z/ words:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sound Family Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design your "Sound Family Expert" certificate:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">
                        <div>I am an expert at finding <span class="answer-space" style="width: 80px;"></span> and <span class="answer-space" style="width: 80px;"></span> sounds!</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The most interesting thing I learned was: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>I can find /s/ and /z/ sounds when I: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>This helps me become a better reader because: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home about the /s/ and /z/ sound families. Find examples in a magazine or newspaper together.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek2);
    console.log("literacy-week2-sounds.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek2);
    console.log("literacy-week2-sounds.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek2',
        metadata: grade2LiteracyWeek2.metadata,
        days: grade2LiteracyWeek2
    });
    console.log("literacy-week2-sounds.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek2 = grade2LiteracyWeek2;
console.log("literacy-week2-sounds.js loaded and registered successfully");