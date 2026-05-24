// Grade 1 Literacy - Term 1 Week 4 Data
const grade1LiteracyWeek4 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 1,
        week: 4,
        title: "Introduction to Consonants (s, t, p, n)",
        description: "Identifying and sounding out consonant sounds /s/, /t/, /p/, /n/ and forming lower-case square/short letters"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Consonants",
        subtopic: "Identifying and sounding out consonant sounds /s/ and /t/",
        lessonContent: `
            <p>Welcome to our consonant exploration! Today we'll learn two new letter sounds: /s/ and /t/.</p>
            <p><strong>Key Question:</strong> What sound does the letter 's' make? What sound does the letter 't' make?</p>
            <p><strong>Introduction:</strong> Consonants are letters that are not vowels. Today we will learn the sounds for 's' and 't'.</p>
            <p><strong>The /s/ Sound:</strong></p>
            <ul>
                <li>The letter 's' makes a /s/ sound - like a snake hissing: "ssssss"</li>
                <li>Words that start with /s/: sun, sock, six, sad, sit</li>
                <li>Words that end with /s/: bus, gas, yes, his</li>
            </ul>
            <p><strong>The /t/ Sound:</strong></p>
            <ul>
                <li>The letter 't' makes a /t/ sound - like a ticking clock: "t-t-t-t"</li>
                <li>Words that start with /t/: top, ten, tub, tag, toy</li>
                <li>Words that end with /t/: cat, hat, bat, rat, pot</li>
            </ul>
            <p><strong>Remember:</strong> We use our mouth and tongue to make these sounds. For /s/, our teeth stay close together and air comes out. For /t/, our tongue touches the roof of our mouth!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snake"></i> Snake Sound</div>
                <p>Pretend to be a snake and say "ssssss". That's the /s/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Clock Sound</div>
                <p>Say "t-t-t-t" like a ticking clock. That's the /t/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone"></i> Mouth Position</div>
                <p>Watch your mouth in a mirror. For /t/, your tongue taps the roof of your mouth. For /s/, your tongue stays low and your teeth almost close.</p>
            </div>
        `,
        taskInstructions: "Practice making the /s/ and /t/ sounds and identify words that start with these letters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Practice saying the /s/ sound (sssss) five times.
                    <div class="check-box">✓ Done</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Practice saying the /t/ sound (t-t-t-t) five times.
                    <div class="check-box">✓ Done</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the pictures that start with /s/:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;">☀️ Sun<br>(/s/)</div>
                        <div style="text-align: center;">🐱 Cat<br>(/k/)</div>
                        <div style="text-align: center;">🧦 Sock<br>(/s/)</div>
                        <div style="text-align: center;">🐢 Turtle<br>(/t/)</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the pictures that start with /t/:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;">🔝 Top<br>(/t/)</div>
                        <div style="text-align: center;">🐍 Snake<br>(/s/)</div>
                        <div style="text-align: center;">🍅 Tomato<br>(/t/)</div>
                        <div style="text-align: center;">🎾 Ten<br>(/t/)</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Say and Match</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Say each word. Circle 's' if it starts with /s/. Circle 't' if it starts with /t/:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>sun → <span style="display: inline-block; width: 30px;">s</span> <span style="display: inline-block; width: 30px;">t</span></div>
                        <div>top → <span style="display: inline-block; width: 30px;">s</span> <span style="display: inline-block; width: 30px;">t</span></div>
                        <div>six → <span style="display: inline-block; width: 30px;">s</span> <span style="display: inline-block; width: 30px;">t</span></div>
                        <div>toy → <span style="display: inline-block; width: 30px;">s</span> <span style="display: inline-block; width: 30px;">t</span></div>
                        <div>sad → <span style="display: inline-block; width: 30px;">s</span> <span style="display: inline-block; width: 30px;">t</span></div>
                        <div>tub → <span style="display: inline-block; width: 30px;">s</span> <span style="display: inline-block; width: 30px;">t</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing Fun</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw one thing that starts with /s/ and one thing that starts with /t/:
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1; border: 1px dashed #ccc; height: 100px; text-align: center;">/s/ drawing</div>
                        <div style="flex: 1; border: 1px dashed #ccc; height: 100px; text-align: center;">/t/ drawing</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home that start with /s/ and 3 things that start with /t/. Tell a family member the name of each item.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Letters of the Alphabet",
        subtopic: "Form lower-case square/short letters: s, t",
        lessonContent: `
            <p>Today we will learn how to write the lower-case letters 's' and 't'!</p>
            <p><strong>Key Question:</strong> How do we form the lower-case letters 's' and 't' correctly?</p>
            <p><strong>What are square/short letters?</strong></p>
            <ul>
                <li>Square/short letters are small letters that fit between the middle and bottom lines</li>
                <li>They do not go up high like tall letters (b, d, f)</li>
                <li>They do not go down low like tail letters (g, j, p)</li>
                <li>Examples: a, c, e, i, m, n, o, r, s, t, u, v, w, x, z</li>
            </ul>
            <p><strong>How to write lower-case 's':</strong></p>
            <ol>
                <li>Start in the middle</li>
                <li>Curve to the left and down</li>
                <li>Curve back to the right</li>
                <li>Stop at the middle line</li>
            </ol>
            <p><strong>How to write lower-case 't':</strong></p>
            <ol>
                <li>Start at the top line (it's a tall letter but written like a short letter)</li>
                <li>Pull straight down to the bottom line</li>
                <li>Cross it with a short line in the middle</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Writing 's'</div>
                <p>Think of a snake slithering: curve left, then curve right. That's the letter 's'!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Writing 't'</div>
                <p>Draw a straight line down, then a little line across the middle. Don't forget the cross!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Line Position</div>
                <p>Both 's' and 't' sit on the bottom line. The top of 's' reaches the middle line. The top of 't' reaches the top line.</p>
            </div>
        `,
        taskInstructions: "Practice tracing and writing lower-case 's' and 't'.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tracing 's'</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace the letter 's' following the arrows:
                    <div style="font-family: monospace; font-size: 36px; letter-spacing: 8px; margin-top: 10px;">
                        s s s s s
                    </div>
                    <div class="writing-lines" style="margin-top: 10px;">
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px;">________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tracing 't'</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Trace the letter 't' following the arrows:
                    <div style="font-family: monospace; font-size: 36px; letter-spacing: 8px; margin-top: 10px;">
                        t t t t t
                    </div>
                    <div class="writing-lines" style="margin-top: 10px;">
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px;">________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write the Missing Letter</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the picture, then write 's' or 't' to complete the word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☀️ ___ un</div>
                        <div>🐢 ___ urtle</div>
                        <div>🧦 ___ ock</div>
                        <div>🔝 ___ op</div>
                        <div>🐍 ___ nake</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Independent Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the letters 's' and 't' five times each on your own:
                    <div class="writing-lines" style="margin-top: 10px;">
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px;">________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice writing 's' and 't' ten times each on a piece of paper. Show your work to a family member.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Consonants",
        subtopic: "Identifying and sounding out consonant sounds /p/ and /n/",
        lessonContent: `
            <p>Today we'll learn two more consonant sounds: /p/ and /n/!</p>
            <p><strong>Key Question:</strong> What sound does the letter 'p' make? What sound does the letter 'n' make?</p>
            <p><strong>The /p/ Sound:</strong></p>
            <ul>
                <li>The letter 'p' makes a /p/ sound - like a popping balloon: "p-p-p-p"</li>
                <li>Put your hand in front of your mouth. Feel the puff of air when you say /p/!</li>
                <li>Words that start with /p/: pig, pan, pen, pot, puppy</li>
                <li>Words that end with /p/: cup, up, top, map, hop</li>
            </ul>
            <p><strong>The /n/ Sound:</strong></p>
            <ul>
                <li>The letter 'n' makes a /n/ sound - like a humming noise: "nnnnnn"</li>
                <li>Your tongue touches the roof of your mouth behind your teeth</li>
                <li>Words that start with /n/: nut, net, nest, nine, nose</li>
                <li>Words that end with /n/: sun, man, pan, ten, run</li>
            </ul>
            <p><strong>Remember:</strong> For /p/, your lips close and then pop open. For /n/, air comes out through your nose!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balloon"></i> Pop Sound</div>
                <p>Say "p-p-p-p" like a balloon popping. Can you feel the air on your hand?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Humming Sound</div>
                <p>Say "nnnnnn" like you are humming. That's the /n/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Hand Check</div>
                <p>Put your hand in front of your mouth. For /p/, you feel a puff of air. For /n/, you don't!</p>
            </div>
        `,
        taskInstructions: "Practice making the /p/ and /n/ sounds and identify words that start with these letters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Practice saying the /p/ sound (p-p-p-p) five times with your hand in front of your mouth.
                    <div class="check-box">✓ Done</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Practice saying the /n/ sound (nnnnnn) five times.
                    <div class="check-box">✓ Done</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the pictures that start with /p/:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;">🐷 Pig<br>(/p/)</div>
                        <div style="text-align: center;">🥜 Nut<br>(/n/)</div>
                        <div style="text-align: center;">🍳 Pan<br>(/p/)</div>
                        <div style="text-align: center;">✏️ Pen<br>(/p/)</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the pictures that start with /n/:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;">🐦 Nest<br>(/n/)</div>
                        <div style="text-align: center;">🐷 Pig<br>(/p/)</div>
                        <div style="text-align: center;">9️⃣ Nine<br>(/n/)</div>
                        <div style="text-align: center;">👃 Nose<br>(/n/)</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Say and Match</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Say each word. Circle 'p' if it starts with /p/. Circle 'n' if it starts with /n/:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>pig → <span style="display: inline-block; width: 30px;">p</span> <span style="display: inline-block; width: 30px;">n</span></div>
                        <div>nut → <span style="display: inline-block; width: 30px;">p</span> <span style="display: inline-block; width: 30px;">n</span></div>
                        <div>pen → <span style="display: inline-block; width: 30px;">p</span> <span style="display: inline-block; width: 30px;">n</span></div>
                        <div>net → <span style="display: inline-block; width: 30px;">p</span> <span style="display: inline-block; width: 30px;">n</span></div>
                        <div>pot → <span style="display: inline-block; width: 30px;">p</span> <span style="display: inline-block; width: 30px;">n</span></div>
                        <div>nine → <span style="display: inline-block; width: 30px;">p</span> <span style="display: inline-block; width: 30px;">n</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing Fun</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw one thing that starts with /p/ and one thing that starts with /n/:
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1; border: 1px dashed #ccc; height: 100px; text-align: center;">/p/ drawing</div>
                        <div style="flex: 1; border: 1px dashed #ccc; height: 100px; text-align: center;">/n/ drawing</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home that start with /p/ and 3 things that start with /n/. Say their names to a family member.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Letters of the Alphabet",
        subtopic: "Form lower-case square/short letters: p, n",
        lessonContent: `
            <p>Today we will learn how to write the lower-case letters 'p' and 'n'!</p>
            <p><strong>Key Question:</strong> How do we form the lower-case letters 'p' and 'n' correctly?</p>
            <p><strong>Review: Square/Short Letters</strong></p>
            <ul>
                <li>Most short letters sit on the bottom line and reach the middle line</li>
                <li>But 'p' is special - it's a tail letter that goes below the bottom line!</li>
                <li>'n' is a true short letter - it fits between the middle and bottom lines</li>
            </ul>
            <p><strong>How to write lower-case 'p':</strong></p>
            <ol>
                <li>Start at the middle line</li>
                <li>Pull straight down below the bottom line (into the tail space)</li>
                <li>Come back up to the middle line</li>
                <li>Make a circle that touches the middle line and bottom line</li>
            </ol>
            <p><strong>How to write lower-case 'n':</strong></p>
            <ol>
                <li>Start at the middle line</li>
                <li>Pull straight down to the bottom line</li>
                <li>Go back up to the middle line</li>
                <li>Curve over and down to the bottom line like a hump</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Writing 'p'</div>
                <p>Think of a balloon on a string! The circle is the balloon (at the top) and the line is the string (going down).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Writing 'n'</div>
                <p>Think of a doorway: down, up, and over like a hump. That's the letter 'n'!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Line Position</div>
                <p>'n' sits on the bottom line and reaches the middle line. 'p' has a tail that goes below the bottom line!</p>
            </div>
        `,
        taskInstructions: "Practice tracing and writing lower-case 'p' and 'n'.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tracing 'p'</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace the letter 'p' following the arrows:
                    <div style="font-family: monospace; font-size: 36px; letter-spacing: 8px; margin-top: 10px;">
                        p p p p p
                    </div>
                    <div class="writing-lines" style="margin-top: 10px;">
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px;">________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tracing 'n'</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Trace the letter 'n' following the arrows:
                    <div style="font-family: monospace; font-size: 36px; letter-spacing: 8px; margin-top: 10px;">
                        n n n n n
                    </div>
                    <div class="writing-lines" style="margin-top: 10px;">
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px;">________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write the Missing Letter</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the picture, then write 'p' or 'n' to complete the word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🐷 ___ ig</div>
                        <div>🥜 ___ ut</div>
                        <div>🍳 ___ an</div>
                        <div>🐦 ___ est</div>
                        <div>✏️ ___ en</div>
                        <div>☀️ su ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Independent Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the letters 'p' and 'n' five times each on your own:
                    <div class="writing-lines" style="margin-top: 10px;">
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px;">________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Review All Four Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write all four letters we learned this week: s, t, p, n
                    <div class="writing-lines" style="margin-top: 10px;">
                        <div style="border-bottom: 1px solid #ccc; height: 40px; margin-bottom: 5px;">________________________</div>
                        <div style="border-bottom: 1px solid #ccc; height: 40px;">________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice writing 'p' and 'n' ten times each. Then write 3 words that start with 'p' and 3 words that start with 'n'.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek4);
    console.log("grade1-literacy-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek4);
    console.log("grade1-literacy-week4.js registered using DataLoader.registerWorksheet()");
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
    console.log("grade1-literacy-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek4 = grade1LiteracyWeek4;
console.log("grade1-literacy-week4.js loaded and registered successfully");