// Grade Middle Literacy - Term 3 Week 10 Data
const gradeMiddleLiteracyWeek10 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 3,
        week: 10,
        title: "Grand Skill Consolidation",
        description: "Celebrating literacy skills through pre-reading games and pre-writing fine motor activities"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Pre-Reading Skills",
        subtopic: "Pre-Reading Showcase - Interactive Games",
        lessonContent: `
            <p>Welcome to our Pre-Reading Showcase! Today we'll celebrate all the amazing reading skills we've developed this term through fun, interactive games.</p>
            <p><strong>Key Question:</strong> How can games help us become better readers?</p>
            <p><strong>Introduction:</strong> Before we can read words, our brains need to recognize sounds, sort information, and spot differences. Today we'll practice these essential pre-reading skills through three exciting game stations!</p>
            <p><strong>Skills We'll Practice:</strong></p>
            <ol>
                <li><strong>Sound Recognition:</strong> Identifying beginning, middle, and ending sounds in words</li>
                <li><strong>Sorting:</strong> Grouping pictures and words by their initial sounds or categories</li>
                <li><strong>Odd-One-Out:</strong> Finding which item doesn't belong based on sound or meaning</li>
            </ol>
            <p><strong>Why These Skills Matter:</strong> Strong pre-reading skills help children decode words, build vocabulary, and develop phonemic awareness - the foundation of reading success!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Sound Recognition Game</div>
                <p>Listen to the word "cat." What sound do you hear at the beginning? (/k/) What about the end? (/t/) Being able to hear individual sounds helps us spell and read.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group"></i> Sorting Game</div>
                <p>Can you sort these pictures: cat, car, dog, duck? Put the /c/ words together (cat, car) and the /d/ words together (dog, duck). Sorting builds logical thinking!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Odd-One-Out Challenge</div>
                <p>Look at: sun, sock, fish, sandwich. Which one doesn't start with /s/? (fish!) Finding the odd one out sharpens attention to detail.</p>
            </div>
        `,
        taskInstructions: "Rotate through three interactive game stations: Sound Recognition, Sorting, and Odd-One-Out.",
        taskContent: `
            <div class="content-box">
                <p><strong>🎮 Station 1: Sound Recognition - "What's That Sound?"</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to each word and identify the beginning sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "butterfly" - Beginning sound: _____</div>
                        <div>• "elephant" - Beginning sound: _____</div>
                        <div>• "rainbow" - Beginning sound: _____</div>
                        <div>• "monkey" - Beginning sound: _____</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Listen and identify the ending sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "bird" - Ending sound: _____</div>
                        <div>• "frog" - Ending sound: _____</div>
                        <div>• "snake" - Ending sound: _____</div>
                        <div>• "fish" - Ending sound: _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📦 Station 2: Sorting Game - "Group It!"</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these words by their beginning sounds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Words:</strong> apple, ball, ant, bear, cat, alligator</div>
                        <div style="margin-top: 10px;">
                            <div>/a/ sound words: _________________</div>
                            <div>/b/ sound words: _________________</div>
                            <div>/c/ sound words: _________________</div>
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Sort these pictures by category (animals vs. food):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Items:</strong> cow, pizza, dog, apple, cat, banana, bird, carrot</div>
                        <div style="margin-top: 10px;">
                            <div>Animals: ___________________________</div>
                            <div>Food: _____________________________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🔍 Station 3: Odd-One-Out - "Which One Doesn't Belong?"</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle or name the odd one out in each group (based on beginning sound):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• cat, car, dog, cookie → Odd one: _____</div>
                        <div>• ball, bat, boy, fish → Odd one: _____</div>
                        <div>• sun, snake, star, turtle → Odd one: _____</div>
                        <div>• pig, pen, pan, frog → Odd one: _____</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Find the odd one out (based on category/meaning):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• apple, banana, carrot, shoe → Odd one: _____</div>
                        <div>• dog, cat, bird, car → Odd one: _____</div>
                        <div>• red, blue, happy, green → Odd one: _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🏆 Challenge Round</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Create your own odd-one-out challenge for a friend. Write three items where one doesn't belong:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What was your favorite game today and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three objects at home. Say their names aloud to a family member and identify the beginning sound of each object.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Pre-Writing Skills",
        subtopic: "Pre-Writing Celebration - Fine Motor Circuit",
        lessonContent: `
            <p>Welcome to our Pre-Writing Celebration! Today we'll strengthen the muscles in our hands and fingers so we can become confident writers.</p>
            <p><strong>Key Question:</strong> How do strong hands help us become better writers?</p>
            <p><strong>Introduction:</strong> Before we can write letters and words beautifully, we need to build fine motor skills - the small muscle movements in our hands and fingers. Today we'll complete a fun circuit of fine motor activities!</p>
            <p><strong>Our Fine Motor Circuit Stations:</strong></p>
            <ol>
                <li><strong>Clay Moulding:</strong> Rolling, pinching, and shaping clay to build hand strength</li>
                <li><strong>Shape Drawing:</strong> Tracing and drawing basic shapes to practice pencil control</li>
                <li><strong>Name Writing Patterns:</strong> Creating patterns that prepare us for writing our names</li>
            </ol>
            <p><strong>Why Fine Motor Skills Matter:</strong> Strong finger muscles help us hold pencils correctly, write neatly, and write without getting tired. These skills also help with buttoning shirts, tying shoes, and using scissors!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands"></i> Clay Moulding Magic</div>
                <p>Rolling clay into a snake strengthens the same muscles used to hold a pencil. Try making a long snake, then pinch it into small balls!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shape Drawing Practice</div>
                <p>Before writing letters, practice drawing circles, squares, triangles, and lines. These shapes appear in many letters! (Circle = o, a; Lines = l, t, i)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-signature"></i> Name Writing Patterns</div>
                <p>Drawing waves (~~~~), zigzags (\\\\\\\\), and loops (∞) helps your hand learn the movements needed for writing your name smoothly.</p>
            </div>
        `,
        taskInstructions: "Rotate through three fine motor stations: Clay Moulding, Shape Drawing, and Name Writing Patterns.",
        taskContent: `
            <div class="content-box">
                <p><strong>🎨 Station 1: Clay Moulding - "Squeeze & Shape"</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With clay or play-dough, complete these moulding challenges:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Roll a long "snake" (like a line for writing)</div>
                        <div>• Pinch the snake into 5 small balls</div>
                        <div>• Flatten a ball into a pancake</div>
                        <div>• Roll a new snake and shape it into the first letter of your name</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">[Draw or describe what you made with clay]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>✏️ Station 2: Shape Drawing - "Trace & Draw"</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Practice drawing these shapes. Trace the dotted lines first, then draw your own:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle: <span style="border-bottom: 1px dotted #000;">______</span> Draw your own: <span style="border-bottom: 1px solid #ccc;">__________</span></div>
                        <div style="margin-top: 5px;">Square: <span style="border-bottom: 1px dotted #000;">______</span> Draw your own: <span style="border-bottom: 1px solid #ccc;">__________</span></div>
                        <div style="margin-top: 5px;">Triangle: <span style="border-bottom: 1px dotted #000;">______</span> Draw your own: <span style="border-bottom: 1px solid #ccc;">__________</span></div>
                        <div style="margin-top: 5px;">Line (straight): <span style="border-bottom: 1px dotted #000;">______</span> Draw your own: <span style="border-bottom: 1px solid #ccc;">__________</span></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Now draw a picture using at least three different shapes:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>📝 Station 3: Name Writing Patterns - "Pattern Practice"</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Copy each pattern across the line. These movements help you write your name smoothly:
                    <div style="margin-left: 20px; margin-top: 10px; font-family: monospace; font-size: 18px;">
                        <div>Wave pattern: ~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                        <div style="margin-top: 10px;">Zigzag pattern: /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\</div>
                        <div style="margin-top: 10px;">Loop pattern: ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞</div>
                        <div style="margin-top: 10px;">Hill pattern: ∩∩∩∩∩∩∩∩∩∩∩∩∩∩∩∩∩∩∩∩</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Practice writing your first name three times. Try to stay on the line:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. ______________________________</div>
                        <div>2. ______________________________</div>
                        <div>3. ______________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>🏆 Celebration Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Which fine motor activity was easiest for you? Which was most challenging?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Color the hand below to show how strong your writing hand feels today!
                    <div style="text-align: center; margin-top: 10px;">
                        <span style="display: inline-block; width: 30px; height: 30px; background: #ddd; border-radius: 50%;"></span>
                        <span style="display: inline-block; width: 30px; height: 30px; background: #ddd; border-radius: 50%;"></span>
                        <span style="display: inline-block; width: 30px; height: 30px; background: #ddd; border-radius: 50%;"></span>
                        <span style="display: inline-block; width: 30px; height: 30px; background: #ddd; border-radius: 50%;"></span>
                        <span style="display: inline-block; width: 30px; height: 30px; background: #ddd; border-radius: 50%;"></span>
                        <div style="margin-top: 5px;">(Color the fingers - 1 = weak, 5 = super strong!)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice drawing the wave and zigzag patterns on paper for 5 minutes. Ask a family member to watch your pencil grip.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleLiteracyWeek10);
    console.log("grade-middle-literacy-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleLiteracyWeek10);
    console.log("grade-middle-literacy-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleLiteracyWeek10',
        metadata: gradeMiddleLiteracyWeek10.metadata,
        days: gradeMiddleLiteracyWeek10
    });
    console.log("grade-middle-literacy-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleLiteracyWeek10 = gradeMiddleLiteracyWeek10;
console.log("grade-middle-literacy-week10.js loaded and registered successfully");