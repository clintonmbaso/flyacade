// Grade 1 Literacy - Week 4 Data
const grade1LiteracyWeek4 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        week: 4,
        title: "Sound Patterns — Blending and Changing Words",
        description: "Introduction to VC and CVC word blending, sound isolation, and sound substitution"
    },
    
    monday: {
        subject: "Literacy",
        topic: "The Power of Pairs",
        subtopic: "Blending Vowel-Consonant (VC) Words",
        lessonContent: `
            <p>Welcome to our Literacy lesson! Today we will learn how vowels and consonants work together like best friends to make words.</p>
            <p><strong>Key Concept:</strong> Vowels (a, e, i, o, u) and consonants are like puzzle pieces. When we put them together, they make special sounds that become words!</p>
            <p><strong>What are VC words?</strong></p>
            <ul>
                <li>VC stands for Vowel-Consonant</li>
                <li>These are two-letter words</li>
                <li>The vowel comes first</li>
                <li>The consonant comes last</li>
                <li>Examples: at, it, on, up, am</li>
            </ul>
            <p><strong>Why are VC words important?</strong> They are the building blocks for longer words! Learning them helps us read and spell better.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper" style="color: #4CAF50;"></i> Sound Buttons</div>
                <p>Let's look at "at": First sound is /a/ (vowel), second sound is /t/ (consonant). Slide your finger under both to say "at"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Best Friends</div>
                <p>"a" and "t" are best friends! When they stand together, they make the word "at."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Blend and Say</div>
                <p>Practice with me: /a/ /t/ → "at". /i/ /t/ → "it". /o/ /n/ → "on". Great job!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice blending VC words.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw sound buttons under each VC word, then read it aloud:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a t → <span class="answer-space" style="width: 150px;"></span></div>
                    <div>i t → <span class="answer-space" style="width: 150px;"></span></div>
                    <div>u p → <span class="answer-space" style="width: 150px;"></span></div>
                    <div>a m → <span class="answer-space" style="width: 150px;"></span></div>
                    <div>i f → <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Match the VC word to the picture:
                <div style="margin-left: 20px; margin-top: 10px; display: flex; flex-wrap: wrap; gap: 15px;">
                    <div style="text-align: center;">
                        <div class="drawing-area" style="height: 60px; width: 60px; border: 1px solid #ccc;"></div>
                        <div>☐ at</div>
                        <div>☐ up</div>
                    </div>
                    <div style="text-align: center;">
                        <div class="drawing-area" style="height: 60px; width: 60px; border: 1px solid #ccc;"></div>
                        <div>☐ it</div>
                        <div>☐ am</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Write your own VC word and draw a picture for it:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>My VC word: <span class="answer-space" style="width: 100px;"></span></div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span" Color the vowel in each word red and the consonant blue:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div style="font-size: 24px;">a t &nbsp;&nbsp; i t &nbsp;&nbsp; o n &nbsp;&nbsp; u p</div>
                </div>
            </div>
        `,
        homework: "Find three VC words in a book or around your home. Write them down and read them to a family member.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Building the CVC Bridge",
        subtopic: "Blending Consonant-Vowel-Consonant (CVC) Words",
        lessonContent: `
            <p>Today we will build longer words! We'll learn about CVC words, which are like sandwiches with consonants as bread and a vowel as filling.</p>
            <p><strong>What are CVC words?</strong> CVC stands for Consonant-Vowel-Consonant. These are three-letter words with a vowel in the middle.</p>
            <p><strong>The Sandwich Word:</strong></p>
            <ol>
                <li>First consonant = top bread</li>
                <li>Vowel = yummy filling</li>
                <li>Last consonant = bottom bread</li>
            </ol>
            <p><strong>How to blend CVC words:</strong></p>
            <ul>
                <li>Tap it out: Use three fingers to tap each sound</li>
                <li>Say each sound: /p/ /o/ /t/</li>
                <li>Blend them together: "pot"</li>
                <li>Slide your finger under the letters as you say it fast</li>
            </ul>
            <p><strong>Why are CVC words important?</strong> Most simple words we read are CVC words! Learning them makes reading fun and easy.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bread-slice" style="color: #FF9800;"></i> Sandwich Words</div>
                <p>"jam" = j (bread) + a (filling) + m (bread). Together they make a delicious word sandwich!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands"></i> Tap It Out</div>
                <p>Let's tap "map": /m/ (tap first finger), /a/ (tap middle finger), /p/ (tap last finger). Now say it fast: "map"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magnet"></i> Magnetic Letters</div>
                <p>Move letters p, o, t apart. Say each sound. Slide them together while saying the sounds faster: "pot"!</p>
            </div>
        `,
        taskInstructions: "Tap out, blend, and write CVC words using the sandwich method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tap and Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Tap each word on your fingers, then write it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>/p/ /o/ /t/ → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>/j/ /a/ /m/ → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>/m/ /a/ /p/ → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>/s/ /i/ /t/ → <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build the Sandwich</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Color the consonants brown (bread) and the vowel red (filling):
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 24px;">
                        <div>c a t</div>
                        <div>d o g</div>
                        <div>p e n</div>
                        <div>h a t</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Picture Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line from the CVC word to its picture:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; justify-content: space-around;">
                        <div>
                            <div>jam</div>
                            <div>map</div>
                            <div>pot</div>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 50px; width: 50px; border: 1px solid #ccc; display: inline-block;"></div>
                            <div class="drawing-area" style="height: 50px; width: 50px; border: 1px solid #ccc; display: inline-block;"></div>
                            <div class="drawing-area" style="height: 50px; width: 50px; border: 1px solid #ccc; display: inline-block;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Build your own CVC word sandwich. Draw it:
                    <div style="margin-left: 20px; margin-top: 10px; text-align: center;">
                        <div>[Top bread: consonant]</div>
                        <div>[Filling: vowel]</div>
                        <div>[Bottom bread: consonant]</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                        <div>My CVC word: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Make three CVC word flashcards. Draw the word on one side and a picture on the other. Practice reading them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Sound Isolation",
        subtopic: "Identifying Beginning, Middle, and End Sounds in CVC Words",
        lessonContent: `
            <p>Today we will become sound detectives! We'll learn to find sounds at the beginning, middle, and end of words.</p>
            <p><strong>The Sound Train:</strong></p>
            <ul>
                <li>Engine = First sound (beginning)</li>
                <li>Passenger car = Middle sound (vowel)</li>
                <li>Caboose = Last sound (ending)</li>
            </ul>
            <p><strong>How to isolate sounds:</strong></p>
            <ol>
                <li>Say the word slowly: "c-a-t"</li>
                <li>Ask: "What's in the engine?" (/c/)</li>
                <li>Ask: "What's in the passenger car?" (/a/)</li>
                <li>Ask: "What's in the caboose?" (/t/)</li>
            </ol>
            <p><strong>Why is sound isolation important?</strong> It helps us spell words correctly and read new words by listening carefully to each part.</p>
            <p><strong>Let's play "I Spy with Sounds"!</strong> I'll say "I spy a word that ends with /m/," and you guess which word I'm thinking of!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train" style="color: #2196F3;"></i> Sound Train</div>
                <p>"cat": Engine = /c/, Passenger = /a/, Caboose = /t/. Choo-choo! Here comes the sound train!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> I Spy Sounds</div>
                <p>"I spy a word that ends with /m/." Look at jam, ham, ram... It's "jam"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-assistive-listening-systems"></i> Middle Sound Match</div>
                <p>"pen" has /e/ in the middle. "pin" has /i/ in the middle. Listen carefully to the vowel!</p>
            </div>
        `,
        taskInstructions: "Identify beginning, middle, and ending sounds in CVC words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Train</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a sound train for each word. Label engine, passenger car, and caboose:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>dog</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                        <div>cat</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: I Spy Sounds</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the word that matches the sound clue:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ends with /t/: cat / dog / jam</div>
                        <div>Begins with /m/: pot / map / sit</div>
                        <div>Middle sound /a/: pen / pin / pan</div>
                        <div>Ends with /p/: hop / hat / hit</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these words by their ending sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>cat, sit, hat → End with /t/</div>
                        <div>jam, ham, ram → End with <span class="answer-space" style="width: 50px;"></span></div>
                        <div>hop, top, mop → End with <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Middle Vowel Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Listen to the middle vowel. Circle the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Teacher says "pen" (with /e/) → pen / pin</div>
                        <div>Teacher says "pin" (with /i/) → pen / pin</div>
                        <div>Teacher says "pan" (with /a/) → pan / pen</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of a CVC word. Label the beginning, middle, and end sounds:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Beginning: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Middle: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>End: <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Play 'I Spy Sounds' with a family member. Give them 3 sound clues about objects in your home.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "The Sound Switch",
        subtopic: "Substituting Sounds to Create New Words",
        lessonContent: `
            <p>Today is our word magic day! We'll learn how changing just one letter can create a completely new word.</p>
            <p><strong>What is sound substitution?</strong> It's when we swap one sound for another to make a new word.</p>
            <p><strong>The Magic Switch:</strong></p>
            <ul>
                <li>Start with a word you know: "cat"</li>
                <li>Switch the first sound: change /c/ to /b/</li>
                <li>New word: "bat"! Magic!</li>
            </ul>
            <p><strong>Types of sound switches:</strong></p>
            <ol>
                <li>Beginning sound switch: cat → bat</li>
                <li>Ending sound switch: cat → can</li>
                <li>Middle sound switch: cat → cot</li>
            </ol>
            <p><strong>Word Ladders:</strong> We can climb up and down the word ladder by changing one sound at a time!</p>
            <p><strong>Why is sound substitution important?</strong> It helps us read new words and understand how words are related to each other.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #9C27B0;"></i> Sound Switch</div>
                <p>"cat" → change "c" to "b" = "bat". Change "b" to "h" = "hat". One letter change, new word!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ladder"></i> Word Ladder</div>
                <p>Start with "hop". Change "h" to "t" = "top". Change "t" to "m" = "mop". We climbed the ladder!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Word Magic</div>
                <p>Watch me do magic! "cat" → "bat" → "bad" → "mad". I changed the word three times!</p>
            </div>
        `,
        taskInstructions: "Practice changing sounds to create new words using word ladders and sound switches.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Beginning Sound Switch</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change the beginning sound to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>cat → change /c/ to /b/ = <span class="answer-space" style="width: 80px;"></span></div>
                        <div>cat → change /c/ to /h/ = <span class="answer-space" style="width: 80px;"></span></div>
                        <div>cat → change /c/ to /m/ = <span class="answer-space" style="width: 80px;"></span></div>
                        <div>cat → change /c/ to /r/ = <span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Ladder</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Climb the word ladder by changing one sound at a time:
                    <div style="margin-left: 20px; margin-top: 10px; text-align: center;">
                        <div>hop</div>
                        <div>↓ change /h/ to /t/</div>
                        <div><span class="answer-space" style="width: 80px;"></span></div>
                        <div>↓ change /t/ to /m/</div>
                        <div><span class="answer-space" style="width: 80px;"></span></div>
                        <div>↓ change /m/ to /t/ (again, but different word!)</div>
                        <div><span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ending Sound Switch</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Change the ending sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>cat → change /t/ to /n/ = <span class="answer-space" style="width: 80px;"></span></div>
                        <div>cat → change /t/ to /p/ = <span class="answer-space" style="width: 80px;"></span></div>
                        <div>jam → change /m/ to /r/ = <span class="answer-space" style="width: 80px;"></span></div>
                        <div>hop → change /p/ to /t/ = <span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw the Change</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw pictures to show how one word changes to another:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; justify-content: space-around;">
                        <div style="text-align: center;">
                            <div>cat</div>
                            <div class="drawing-area" style="height: 80px; width: 80px;"></div>
                        </div>
                        <div style="text-align: center; padding-top: 30px;">
                            <div>→</div>
                        </div>
                        <div style="text-align: center;">
                            <div>bat</div>
                            <div class="drawing-area" style="height: 80px; width: 80px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Create Your Own Switch</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Start with a word. Change one sound to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My starting word: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>I change the <select style="margin: 0 5px;"><option>beginning</option><option>middle</option><option>ending</option></select> sound to <span class="answer-space" style="width: 50px;"></span></div>
                        <div>My new word: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home how to do a sound switch. Show them how to change 'cat' to two different words.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek4);
    console.log("literacy-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek4);
    console.log("literacy-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek4',
        metadata: grade1LiteracyWeek4.metadata,
        days: grade1LiteracyWeek4
    });
    console.log("literacy-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek4 = grade1LiteracyWeek4;
console.log("literacy-week4.js loaded and registered successfully");