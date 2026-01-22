// Grade 2 Literacy - Week 3 Data (Double Trouble: tt, dd, gg, pp)
const grade2LiteracyWeek3 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        week: 3,
        title: "Double Trouble — When Two Letters Make One Sound",
        description: "Learning that doubled consonants (tt, dd, gg, pp) often represent a single consonant sound"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Double Trouble: tt and dd",
        subtopic: "Recognizing that 'tt' and 'dd' make a single sound",
        lessonContent: `
            <p>Welcome to our Literacy lesson! Today we will learn about a fun spelling rule: sometimes two of the same letter work together to make just one sound!</p>
            <p><strong>Key Concept:</strong> Double consonants like 'tt' and 'dd' are another way to spell the sounds /t/ and /d/.</p>
            <p><strong>Let's explore:</strong></p>
            <ul>
                <li>Say "pat" and then "patting"</li>
                <li>Do you hear two /t/ sounds in "patting"?</li>
                <li>No! You hear just one /t/ sound, but we spell it with two 't's!</li>
            </ul>
            <p><strong>Why do we double letters?</strong> Sometimes it helps us know how to say the word correctly, especially when adding endings like -ing or -ed.</p>
            <p><strong>Today's focus:</strong> 'tt' and 'dd'.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #4CAF50;"></i> 'tt' Example</div>
                <p><strong>button</strong> – We say /buh-tuhn/, not /buh-t-tuhn/. The 'tt' makes just one /t/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #2196F3;"></i> 'dd' Example</div>
                <p><strong>ladder</strong> – We say /la-der/, not /la-d-der/. The 'dd' makes just one /d/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sound Detective Game!</div>
                <p>Listen to the word "butter." How many /t/ sounds do you hear? Let's be sound detectives and find the doubles!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice 'tt' and 'dd' words.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the words that have double 'tt' or 'dd':
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ kitten</div>
                    <div>☐ dog</div>
                    <div>☐ ladder</div>
                    <div>☐ butterfly</div>
                    <div>☐ sad</div>
                    <div>☐ muddy</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Fill in the blank with 't', 'tt', 'd', or 'dd':
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>bu<span class="answer-space" style="width: 40px;"></span>on (button)</div>
                    <div>la<span class="answer-space" style="width: 40px;"></span>er (ladder)</div>
                    <div>ki<span class="answer-space" style="width: 40px;"></span>en (kitten)</div>
                    <div>mu<span class="answer-space" style="width: 40px;"></span>y (muddy)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a picture of something that has 'tt' or 'dd' in its name:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">My picture is a: ________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Listen to your teacher say each word. Hold up 1 finger for one consonant sound, 2 fingers for double letters:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>butter → Hold up: ☐ 1 finger ☐ 2 fingers</div>
                    <div>ladder → Hold up: ☐ 1 finger ☐ 2 fingers</div>
                    <div>dog → Hold up: ☐ 1 finger ☐ 2 fingers</div>
                    <div>kitten → Hold up: ☐ 1 finger ☐ 2 fingers</div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home with names that might have double 'tt' or 'dd' (like 'button' or 'ladder'). Write or draw them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Double Trouble: gg and pp",
        subtopic: "Recognizing that 'gg' and 'pp' make a single sound",
        lessonContent: `
            <p>Today we continue learning about double consonants! Now let's look at 'gg' and 'pp'.</p>
            <p><strong>Key Concept:</strong> Just like 'tt' and 'dd', the doubled letters 'gg' and 'pp' still make just one sound each!</p>
            <p><strong>Listening practice:</strong></p>
            <ul>
                <li>Say "egg" – you hear one /g/ sound, not /g-g/</li>
                <li>Say "apple" – you hear one /p/ sound, not /p-p/</li>
            </ul>
            <p><strong>Why it matters:</strong> Knowing this helps us spell words correctly and read them smoothly.</p>
            <p><strong>Watch out!</strong> Some words have two separate sounds (like "up-pen" in "up-pen-d"), but today we focus on words where the double makes one sound.</p>
            <p><strong>Today's focus:</strong> 'gg' and 'pp'.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #FF9800;"></i> 'gg' Example</div>
                <p><strong>egg</strong> – We say /eg/, not /e-g-g/. The 'gg' makes just one /g/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #9C27B0;"></i> 'pp' Example</div>
                <p><strong>apple</strong> – We say /a-pul/, not /a-p-pul/. The 'pp' makes just one /p/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Double or Single Game!</div>
                <p>Teacher says: "dog" (single) or "digging" (double). Hold up 1 or 2 fingers! Let's see who's listening carefully.</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice 'gg' and 'pp' words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the words with double 'gg' or 'pp':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ egg</div>
                        <div>☐ pig</div>
                        <div>☐ apple</div>
                        <div>☐ happy</div>
                        <div>☐ frog</div>
                        <div>☐ puppy</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose 'g', 'gg', 'p', or 'pp' to complete each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>e<span class="answer-space" style="width: 40px;"></span> (egg)</div>
                        <div>a<span class="answer-space" style="width: 40px;"></span>le (apple)</div>
                        <div>ha<span class="answer-space" style="width: 40px;"></span>y (happy)</div>
                        <div>pu<span class="answer-space" style="width: 40px;"></span>y (puppy)</div>
                        <div>di<span class="answer-space" style="width: 40px;"></span>ing (digging)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Doubles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw two pictures: one with 'gg' in its name, one with 'pp' in its name:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">'gg' word</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">Word: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">'pp' word</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">Word: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Listening Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher will say a word. Circle if it has a single letter or double letters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"rabbit" → ☐ Single ☐ Double (bb)</div>
                        <div>"digging" → ☐ Single ☐ Double (gg)</div>
                        <div>"apple" → ☐ Single ☐ Double (pp)</div>
                        <div>"dog" → ☐ Single ☐ Double</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look in a book or around your house for words with 'gg' or 'pp'. Write down or draw two you find.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Double Trouble Review: tt, dd, gg, pp",
        subtopic: "Practicing all four doubled consonant patterns",
        lessonContent: `
            <p>Today is our Double Trouble celebration! We'll review all four doubled consonants: tt, dd, gg, and pp.</p>
            <p><strong>Key Concept:</strong> Doubled consonants are another way to spell single consonant sounds.</p>
            <p><strong>Remember:</strong></p>
            <ul>
                <li>'tt' as in <strong>button</strong></li>
                <li>'dd' as in <strong>ladder</strong></li>
                <li>'gg' as in <strong>egg</strong></li>
                <li>'pp' as in <strong>apple</strong></li>
            </ul>
            <p><strong>Why do we learn this?</strong> It helps us become better readers and spellers! We won't be tricked by seeing two letters and thinking we must say two sounds.</p>
            <p><strong>Today's activities:</strong> We'll play games, do puzzles, and show we're Double Trouble experts!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #4CAF50;"></i> Double Trouble Examples</div>
                <p><strong>button, ladder, egg, apple</strong> – Each has double letters but just one sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece" style="color: #FF5722;"></i> Pattern Spotting</div>
                <p>Look at "rabbit" – it has 'bb', which is also a double consonant! Can you think of others?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Double Trouble Challenge Game!</div>
                <p>We'll form teams and race to write words with doubled consonants. Ready, set, double!</p>
            </div>
        `,
        taskInstructions: "Complete the review activities to show your Double Trouble skills.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Match-Up</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each word to its double consonant pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>button → ☐ dd</div>
                        <div>ladder → ☐ tt</div>
                        <div>egg → ☐ pp</div>
                        <div>apple → ☐ gg</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blank Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing double consonants:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>bu<span class="answer-space" style="width: 40px;"></span>on</div>
                        <div>la<span class="answer-space" style="width: 40px;"></span>er</div>
                        <div>e<span class="answer-space" style="width: 40px;"></span></div>
                        <div>a<span class="answer-space" style="width: 40px;"></span>le</div>
                        <div>ki<span class="answer-space" style="width: 40px;"></span>en</div>
                        <div>pu<span class="answer-space" style="width: 40px;"></span>y</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Double Trouble Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a scene that includes at least two things with double consonants in their names:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>In my picture, I drew: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>They have these double letters: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Double or Single Listening Test</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher will say words. Circle "Double" if you hear a doubled consonant sound pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"rabbit" → ☐ Single ☐ Double</div>
                        <div>"dog" → ☐ Single ☐ Double</div>
                        <div>"butter" → ☐ Single ☐ Double</div>
                        <div>"cat" → ☐ Single ☐ Double</div>
                        <div>"apple" → ☐ Single ☐ Double</div>
                        <div>"digging" → ☐ Single ☐ Double</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Double Trouble Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write a sentence using at least one word with a double consonant (tt, dd, gg, pp):
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        Draw a picture to go with your sentence:
                        <div class="drawing-area" style="height: 120px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Be a Double Detective! Find 5 words with tt, dd, gg, or pp in a book, magazine, or around your home. List or draw them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek3);
    console.log("literacy-week3-double-trouble.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek3);
    console.log("literacy-week3-double-trouble.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek3',
        metadata: grade2LiteracyWeek3.metadata,
        days: grade2LiteracyWeek3
    });
    console.log("literacy-week3-double-trouble.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek3 = grade2LiteracyWeek3;
console.log("literacy-week3-double-trouble.js loaded and registered successfully");