// Grade 1 Literacy - Term 1 Week 3 Data
const grade1LiteracyWeek3 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 1,
        week: 3,
        title: "Short Vowels (i, o, u) & Circle Patterns",
        description: "Sounding out short vowels, tracking print, and building handwriting skills through circular patterns"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Short Vowels (i, o, u)",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn three new short vowel sounds: /i/, /o/, and /u/.</p>
            <p><strong>Key Question:</strong> Can you hear the difference between /i/, /o/, and /u/ in words?</p>
            <p><strong>Introduction:</strong> Vowels are special letters that make open sounds. Today we focus on short i, short o, and short u.</p>
            <p><strong>Short Vowel Sounds:</strong></p>
            <ol>
                <li><strong>Short /i/ sound:</strong> Like in "igloo" and "sit"</li>
                <li><strong>Short /o/ sound:</strong> Like in "octopus" and "hot"</li>
                <li><strong>Short /u/ sound:</strong> Like in "umbrella" and "cup"</li>
            </ol>
            <p><strong>Let's Practice:</strong> Say each sound after me. Listen to how your mouth moves differently for each vowel!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Short /i/ Words</div>
                <p>igloo, insect, sit, lip, fin, pin, wig</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Short /o/ Words</div>
                <p>octopus, ox, hot, pot, top, log, frog</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Short /u/ Words</div>
                <p>umbrella, up, cup, bus, bug, sun, run</p>
            </div>
        `,
        taskInstructions: "Practice sounding out and identifying short vowel sounds /i/, /o/, and /u/.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Say and Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each picture. Say the word. Circle the vowel sound you hear:
                    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px dashed #ccc;"></div>
                            <div>pig</div>
                            <div style="font-size: 12px;">/i/ /o/ /u/</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px dashed #ccc;"></div>
                            <div>cup</div>
                            <div style="font-size: 12px;">/i/ /o/ /u/</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px dashed #ccc;"></div>
                            <div>hot</div>
                            <div style="font-size: 12px;">/i/ /o/ /u/</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px dashed #ccc;"></div>
                            <div>bug</div>
                            <div style="font-size: 12px;">/i/ /o/ /u/</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Vowel</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from each word to its short vowel sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>log → &nbsp;&nbsp;&nbsp; /i/</div>
                        <div>fin → &nbsp;&nbsp;&nbsp; /o/</div>
                        <div>sun → &nbsp;&nbsp;&nbsp; /u/</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Missing Vowel</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write i, o, or u to complete each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>p___g (pig)</div>
                        <div>c___p (cup)</div>
                        <div>h___t (hot)</div>
                        <div>b___g (bug)</div>
                        <div>f___n (fin)</div>
                        <div>s___n (sun)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home with the short /i/ sound, 3 with short /o/, and 3 with short /u/. Draw a picture of each.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Concepts of Print",
        subtopic: "Tracking Print: Top to Bottom, Left to Right, Return Sweep",
        lessonContent: `
            <p>Today we'll learn how our eyes move when we read! Tracking print helps us become better readers.</p>
            <p><strong>Key Question:</strong> Where do our eyes go when we read a book?</p>
            <p><strong>Introduction:</strong> Good readers know exactly where to look. We start at the top of the page and move our eyes from left to right across each line.</p>
            <p><strong>Tracking Rules:</strong></p>
            <ol>
                <li><strong>Top to Bottom:</strong> We always start reading at the top of the page</li>
                <li><strong>Left to Right:</strong> Our eyes move across each line from left to right</li>
                <li><strong>Return Sweep:</strong> At the end of a line, our eyes go back to the left side of the next line down</li>
            </ol>
            <p><strong>Let's Practice:</strong> Use your finger to follow along as we read together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Left to Right</div>
                <p>When you read "The cat sat," your eyes start at T, then h, then e, moving all the way to t.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-down"></i> Return Sweep</div>
                <p>After finishing "The cat sat," your eyes jump back to the left side of the next line to read "on the mat."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fingerprint"></i> Use Your Finger</div>
                <p>Beginning readers can use their finger to point to each word as they read. This helps train your eyes!</p>
            </div>
        `,
        taskInstructions: "Practice tracking print from top to bottom and returning to the next line.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Follow the Path</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use your finger to trace the reading path. Start at the star ★:
                    <div style="background-color: #f5f5f5; padding: 15px; margin-top: 10px; font-family: monospace; font-size: 18px;">
                        <div>★ The cat is fat.</div>
                        <div style="margin-left: 20px;">The dog can run.</div>
                        <div style="margin-left: 40px;">The pig is pink.</div>
                        <div style="margin-left: 20px;">The bug is on the rug.</div>
                        <div>The sun is hot.</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Which Line Comes Next?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After reading "I like to hop," where do your eyes go?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Back to the beginning of the same line</div>
                        <div>B. Down to the next line on the left side</div>
                        <div>C. Up to the line above</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Read and Track</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read this sentence 3 times. Use your finger to track:
                    <div style="background-color: #e8f4f8; padding: 15px; margin-top: 10px; text-align: center; font-size: 20px;">
                        The little bug ran up the big hill.
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing the Path</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw arrows to show how your eyes move when you read this:
                    <div style="background-color: #f5f5f5; padding: 15px; margin-top: 10px;">
                        <div>I have a red hat.</div>
                        <div>It is on my head.</div>
                        <div>The hat is warm.</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Read a short book with a family member. Use your finger to track each word. Have them watch to see if you return to the left side of the next line.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Reviewing All Short Vowels (a, e, i, o, u)",
        lessonContent: `
            <p>Today we'll review ALL five short vowel sounds: /a/, /e/, /i/, /o/, and /u/!</p>
            <p><strong>Key Question:</strong> Can you quickly identify each short vowel sound when you hear it?</p>
            <p><strong>The Five Short Vowels:</strong></p>
            <ol>
                <li><strong>Short /a/:</strong> apple, cat, hat, bat</li>
                <li><strong>Short /e/:</strong> elephant, bed, red, pen</li>
                <li><strong>Short /i/:</strong> igloo, sit, fin, pig</li>
                <li><strong>Short /o/:</strong> octopus, hot, pot, log</li>
                <li><strong>Short /u/:</strong> umbrella, cup, bug, sun</li>
            </ol>
            <p><strong>Listen Carefully:</strong> Each vowel makes a different mouth shape. Let's practice saying all five sounds together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Quick-Fire Practice</div>
                <p>Listen to these words. Raise one finger for /a/, two for /e/, three for /i/, four for /o/, five for /u/: cat, bed, pig, hot, cup, hat, red, fin, log, sun.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Mouth Shapes</div>
                <p>/a/ - mouth open wide. /e/ - mouth medium, lips back. /i/ - mouth small. /o/ - mouth round. /u/ - mouth tiny and round.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Vowel Song</div>
                <p>Sing to the tune of "Bingo": A-E-I-O-U, A-E-I-O-U, A-E-I-O-U, And now we know our vowels!</p>
            </div>
        `,
        taskInstructions: "Practice identifying all short vowel sounds through audio recognition activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vowel Sound Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say each word. Write the short vowel sound (a, e, i, o, or u):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>cat → ___</div>
                        <div>bed → ___</div>
                        <div>pig → ___</div>
                        <div>hot → ___</div>
                        <div>cup → ___</div>
                        <div>hat → ___</div>
                        <div>red → ___</div>
                        <div>fin → ___</div>
                        <div>log → ___</div>
                        <div>sun → ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Correct Vowel</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each picture (your teacher will show or describe). Circle the vowel you hear:
                    <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 10px;">
                        <div>1. a &nbsp; e &nbsp; i &nbsp; o &nbsp; u</div>
                        <div>2. a &nbsp; e &nbsp; i &nbsp; o &nbsp; u</div>
                        <div>3. a &nbsp; e &nbsp; i &nbsp; o &nbsp; u</div>
                        <div>4. a &nbsp; e &nbsp; i &nbsp; o &nbsp; u</div>
                        <div>5. a &nbsp; e &nbsp; i &nbsp; o &nbsp; u</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Listen and Write</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Your teacher will say 5 words. Write the vowel you hear in each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. ___</div>
                        <div>2. ___</div>
                        <div>3. ___</div>
                        <div>4. ___</div>
                        <div>5. ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vowel Race</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Your teacher will say a word. Hold up the correct vowel card as fast as you can!
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice saying all 5 short vowel sounds with a family member. Have them say a word, and you identify the vowel sound.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Handwriting / Fine Motor",
        subtopic: "Copying Patterns: Circular Shapes and Curves",
        lessonContent: `
            <p>Today we'll build our handwriting muscles by drawing circular shapes and curves!</p>
            <p><strong>Key Question:</strong> Why do we practice drawing circles and curves before writing letters?</p>
            <p><strong>Introduction:</strong> Many letters are made of circles and curves! Practicing these shapes helps our wrists and fingers get ready for writing.</p>
            <p><strong>Patterns We'll Practice:</strong></p>
            <ol>
                <li><strong>Circles:</strong> Round and round - like a rolling ball!</li>
                <li><strong>Curves:</strong> Bumpy paths - like a caterpillar crawling!</li>
                <li><strong>Rainbow Arcs:</strong> Up and down - like a rainbow!</li>
                <li><strong>Spirals:</strong> Round and round getting bigger - like a snail shell!</li>
            </ol>
            <p><strong>Remember:</strong> Use a comfortable grip. Move from your wrist, not your whole arm!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Letters with Circles</div>
                <p>Look at letters like a, b, d, g, o, p, q. They all have circles or curves! Practicing circles helps you write these letters neatly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Wrist Warm-Up</div>
                <p>Before drawing, try this: Hold your hand out like a stop sign. Slowly make circles with your wrist. This loosens up your writing muscles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Tracing Tips</div>
                <p>Always trace the dotted lines first before drawing on your own. Go slowly and carefully - neatness matters more than speed!</p>
            </div>
        `,
        taskInstructions: "Draw circular shapes and curves to build wrist flexibility.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tracing Circles</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace the circles below. Start at the dot and go around:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <div style="display: flex; justify-content: space-around; padding-top: 30px;">
                            <div style="width: 60px; height: 60px; border: 2px dotted #999; border-radius: 50%;"></div>
                            <div style="width: 60px; height: 60px; border: 2px dotted #999; border-radius: 50%;"></div>
                            <div style="width: 60px; height: 60px; border: 2px dotted #999; border-radius: 50%;"></div>
                            <div style="width: 60px; height: 60px; border: 2px dotted #999; border-radius: 50%;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tracing Curves</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Trace the wavy lines and curves:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <div style="padding-top: 20px;">
                            <div style="height: 20px; border-bottom: 2px dotted #999;"></div>
                            <div style="height: 20px; margin-top: 10px; border-bottom: 2px dotted #999;"></div>
                            <div style="height: 20px; margin-top: 10px; border-bottom: 2px dotted #999;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Copy the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at each pattern. Copy it in the empty box next to it:
                    <div style="margin-top: 10px;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <div style="width: 80px; height: 50px; border: 1px solid #ccc; margin-right: 10px;"></div>
                            <div>→</div>
                            <div style="width: 80px; height: 50px; border: 1px solid #ccc; margin-left: 10px;"></div>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <div style="width: 80px; height: 50px; border: 1px solid #ccc; margin-right: 10px;"></div>
                            <div>→</div>
                            <div style="width: 80px; height: 50px; border: 1px solid #ccc; margin-left: 10px;"></div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 80px; height: 50px; border: 1px solid #ccc; margin-right: 10px;"></div>
                            <div>→</div>
                            <div style="width: 80px; height: 50px; border: 1px solid #ccc; margin-left: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> On your own paper (or below), draw:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 5 big circles</div>
                        <div>• 5 small circles</div>
                        <div>• 3 wavy lines</div>
                        <div>• A spiral starting small and getting bigger</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Letter Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which letters have circles or curves? Name or write them:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice drawing 10 circles and 10 wavy lines on a piece of paper. Show a family member how your circles are getting rounder and smoother!",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek3);
    console.log("grade1-literacy-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek3);
    console.log("grade1-literacy-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek3',
        metadata: grade1LiteracyWeek3.metadata,
        days: grade1LiteracyWeek3
    });
    console.log("grade1-literacy-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek3 = grade1LiteracyWeek3;
console.log("grade1-literacy-week3.js loaded and registered successfully");