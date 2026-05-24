// Grade 1 Literacy - Term 3 Week 3 Data
const grade1LiteracyWeek3 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 3,
        week: 3,
        title: "Initial Consonant Blends (st-, cl-, fl-, gr-)",
        description: "Sounding out, identifying, and building words with initial consonant blends and word families"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Consonant Blends (st-, cl-, fl-, gr-)",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn about consonant blends - two consonants that come together to make a special sound.</p>
            <p><strong>Key Question:</strong> What happens when two consonants stand side by side at the beginning of a word?</p>
            <p><strong>Introduction:</strong> A <strong>consonant blend</strong> (or consonant cluster) is when two or three consonants appear together at the beginning of a word. Each letter makes its own sound, but we say them smoothly together.</p>
            <p><strong>Today's Consonant Blends:</strong></p>
            <ol>
                <li><strong>st-</strong> (s + t): Say /s/ /t/ together - like in <strong>st</strong>op, <strong>st</strong>ar, <strong>st</strong>ep</li>
                <li><strong>cl-</strong> (c + l): Say /c/ /l/ together - like in <strong>cl</strong>ap, <strong>cl</strong>ass, <strong>cl</strong>oud</li>
                <li><strong>fl-</strong> (f + l): Say /f/ /l/ together - like in <strong>fl</strong>ip, <strong>fl</strong>ower, <strong>fl</strong>ag</li>
                <li><strong>gr-</strong> (g + r): Say /g/ /r/ together - like in <strong>gr</strong>ass, <strong>gr</strong>een, <strong>gr</strong>ape</li>
            </ol>
            <p><strong>How to Practice:</strong> Say each sound slowly, then faster until they blend together. Practice with these words: stop, clap, flip, grass.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Listen and Say</div>
                <p>Say "st" - your tongue touches the top of your mouth, then you release air. Now try: st-op, st-ar, st-ep.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Clap and Blend</div>
                <p>Clap once for each sound: /s/ /t/ /o/ /p/ (4 claps). Then say it smoothly: "stop" (1 clap).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Mouth Position</div>
                <p>For "gr", your mouth opens wide, then your tongue lifts. Feel the difference between "g" and "gr"!</p>
            </div>
        `,
        taskInstructions: "Sound out and identify initial consonant blends st-, cl-, fl-, gr-.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Say and Trace</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace each blend and say the sound:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 24px; line-height: 2;">
                        <div>st ___ ___ ___</div>
                        <div>cl ___ ___ ___</div>
                        <div>fl ___ ___ ___</div>
                        <div>gr ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from each picture to the correct beginning blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>[Star picture] → ______</div>
                                <div>[Clap picture] → ______</div>
                                <div>[Flag picture] → ______</div>
                                <div>[Grass picture] → ______</div>
                            </div>
                            <div>
                                <div>st</div>
                                <div>cl</div>
                                <div>fl</div>
                                <div>gr</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circle the Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the beginning blend in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>stop → <span style="border: 1px solid #ccc; padding: 2px 8px;">st</span>op</div>
                        <div>clap → ______ap</div>
                        <div>flip → ______ip</div>
                        <div>grass → ______ass</div>
                        <div>step → ______ep</div>
                        <div>flag → ______ag</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Listening Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Listen to your teacher say each word. Write the beginning blend you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________ (stop)</div>
                        <div>2. _________ (clap)</div>
                        <div>3. _________ (flip)</div>
                        <div>4. _________ (grass)</div>
                        <div>5. _________ (star)</div>
                        <div>6. _________ (green)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home that start with st-, cl-, fl-, or gr-. Draw a picture of each and write the word.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Word Building - CCVC Structures",
        lessonContent: `
            <p>Today we'll become word builders! We'll learn how to build words using initial consonant blends.</p>
            <p><strong>Key Question:</strong> How can we put letters together to make words with beginning blends?</p>
            <p><strong>Introduction:</strong> A <strong>CCVC word</strong> is a word with: Consonant + Consonant + Vowel + Consonant. The first two letters are our consonant blend!</p>
            <p><strong>CCVC Pattern:</strong> C C V C</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li><strong>s t e p</strong> → st (blend) + e (vowel) + p (ending)</li>
                <li><strong>c l a p</strong> → cl (blend) + a (vowel) + p (ending)</li>
                <li><strong>f l i p</strong> → fl (blend) + i (vowel) + p (ending)</li>
                <li><strong>g r a s s</strong> → gr (blend) + a (vowel) + ss (ending)</li>
            </ul>
            <p><strong>Building Steps:</strong> Choose a blend → Add a vowel → Add an ending sound → Read your new word!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Build It!</div>
                <p>Take "st" + "o" + "p" = "stop"! Change the vowel: st + a + p = "stap" (not a real word). Change the ending: st + o + n = "ston" (not a real word).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Word Parts</div>
                <p>Think of blends as puzzle pieces. st- + op = stop. cl- + ap = clap. fl- + ip = flip. gr- + ass = grass.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> Other CCVC Words</div>
                <p>Try these: <strong>trap, drop, slam, spin, glad, plum.</strong> Can you find the blend in each one?</p>
            </div>
        `,
        taskInstructions: "Build CCVC words using initial blends st-, cl-, fl-, gr-.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Blend + Ending = Word</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the ending to each blend to make a real word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>st + ep = _________ (step)</div>
                        <div>cl + ap = _________ (____)</div>
                        <div>fl + ip = _________ (____)</div>
                        <div>gr + ass = _________ (____)</div>
                        <div>st + op = _________ (____)</div>
                        <div>fl + ag = _________ (____)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build Your Own Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the letters to build CCVC words with blends:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Blends: st, cl, fl, gr</div>
                        <div>Vowels: a, e, i, o</div>
                        <div>Endings: p, t, n, b, ss, ck</div>
                        <div style="margin-top: 10px;">
                            <div>Example: st + o + p = stop</div>
                            <div>Your turns: _________</div>
                            <div>_________</div>
                            <div>_________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Read and Draw</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read each word. Draw a picture to show what it means:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>step → <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc; margin-top: 5px;"></div></div>
                        <div>clap → <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc; margin-top: 5px;"></div></div>
                        <div>flag → <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc; margin-top: 5px;"></div></div>
                        <div>grass → <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc; margin-top: 5px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill in the Missing Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete each word with the correct blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___op (st, cl, fl, gr)</div>
                        <div>___ap (st, cl, fl, gr)</div>
                        <div>___ip (st, cl, fl, gr)</div>
                        <div>___ass (st, cl, fl, gr)</div>
                        <div>___ep (st, cl, fl, gr)</div>
                        <div>___ag (st, cl, fl, gr)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 CCVC words with blends. Draw a picture for 2 of them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Consonant Blends in Speech",
        lessonContent: `
            <p>Today we'll practice hearing and saying consonant blends in everyday speech!</p>
            <p><strong>Key Question:</strong> Can you hear the blends when people talk?</p>
            <p><strong>Introduction:</strong> Consonant blends are everywhere! When you say "stop," "clean," "flower," or "grow," you're using blends. Let's train our ears to hear them.</p>
            <p><strong>Practice Blends in Sentences:</strong></p>
            <ul>
                <li><strong>st-:</strong> "The <strong>st</strong>ar <strong>st</strong>opped in the <strong>st</strong>reet."</li>
                <li><strong>cl-:</strong> "Please <strong>cl</strong>ose the <strong>cl</strong>oset and <strong>cl</strong>ap your hands."</li>
                <li><strong>fl-:</strong> "The <strong>fl</strong>ower <strong>fl</strong>oats on the <strong>fl</strong>oor."</li>
                <li><strong>gr-:</strong> "The <strong>gr</strong>ass is <strong>gr</strong>een and <strong>gr</strong>owing."</li>
            </ul>
            <p><strong>Listening Tips:</strong> Pay attention to the beginning of words. Can you hear two consonant sounds right next to each other?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Say It Smoothly</div>
                <p>Don't say "s" pause "t". Say "st" together! Practice: st-op, cl-ap, fl-ip, gr-oss.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Echo Game</div>
                <p>Your teacher says a word with a blend. You echo it back. Then say just the blend! Teacher: "stop" → You: "stop" → "st"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone"></i> Tongue Twisters</div>
                <p>Try this: "Grumpy grasshoppers grow green grass." Say it slowly, then faster!</p>
            </div>
        `,
        taskInstructions: "Identify initial consonant blends in shared speech through listening and speaking activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will say words. Circle the blend you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. stop &nbsp;&nbsp;&nbsp; st &nbsp;&nbsp; cl &nbsp;&nbsp; fl &nbsp;&nbsp; gr</div>
                        <div>2. clap &nbsp;&nbsp;&nbsp; st &nbsp;&nbsp; cl &nbsp;&nbsp; fl &nbsp;&nbsp; gr</div>
                        <div>3. flip &nbsp;&nbsp;&nbsp; st &nbsp;&nbsp; cl &nbsp;&nbsp; fl &nbsp;&nbsp; gr</div>
                        <div>4. grass &nbsp;&nbsp;&nbsp; st &nbsp;&nbsp; cl &nbsp;&nbsp; fl &nbsp;&nbsp; gr</div>
                        <div>5. star &nbsp;&nbsp;&nbsp; st &nbsp;&nbsp; cl &nbsp;&nbsp; fl &nbsp;&nbsp; gr</div>
                        <div>6. green &nbsp;&nbsp;&nbsp; st &nbsp;&nbsp; cl &nbsp;&nbsp; fl &nbsp;&nbsp; gr</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finish the Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Listen to the sentence. Say the missing word with the correct blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Please _______ your hands. (clap / flap)</div>
                        <div>2. The _______ is green. (grass / class)</div>
                        <div>3. Take one _______ forward. (step / stop)</div>
                        <div>4. The bird can _______ its wings. (flip / clap)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Speaking Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With a partner, take turns saying these blends and words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Partner A says: "st" → Partner B says: "stop, star, step"</div>
                        <div>Partner A says: "cl" → Partner B says: "clap, class, clean"</div>
                        <div>Partner A says: "fl" → Partner B says: "flip, flag, flower"</div>
                        <div>Partner A says: "gr" → Partner B says: "grass, green, grow"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Blend Hunt in a Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Listen to this short story. Clap when you hear a word with st-, cl-, fl-, or gr-:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <p>"Sam saw a <strong>star</strong> in the sky. He wanted to <strong>stop</strong> and look. Then he saw <strong>green</strong> <strong>grass</strong>. He bent down to touch it. He heard a <strong>flap</strong> of wings. A bird flew away. Sam started to <strong>clap</strong> with joy!"</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">Words I heard: _______</div>
                </div>
            </div>
        `,
        homework: "Say 5 sentences to a family member using words with st-, cl-, fl-, or gr-. Ask them to echo the blend back to you.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Word Families (-in family)",
        lessonContent: `
            <p>Today we'll learn about word families! Word families are groups of words that share the same ending sound.</p>
            <p><strong>Key Question:</strong> What happens when you change the first letter but keep the ending the same?</p>
            <p><strong>Introduction:</strong> A <strong>word family</strong> is a group of words that have the same ending. Today we'll learn the <strong>-in family</strong>. All these words end with the sound "in".</p>
            <p><strong>The -in Word Family:</strong></p>
            <ul>
                <li><strong>p + in = pin</strong> (a sharp object for sewing)</li>
                <li><strong>s + in = sin</strong> (a wrong action)</li>
                <li><strong>b + in = bin</strong> (a container for storage)</li>
                <li><strong>f + in = fin</strong> (part of a fish)</li>
            </ul>
            <p><strong>How to Build -in Family Words:</strong> Choose a beginning letter → Add "in" → Read your new word!</p>
            <p><strong>Try These Too:</strong> win, tin, chin, thin, spin (this one has a blend at the beginning!)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Family Pattern</div>
                <p>Think of a word family like a real family. The ending "-in" is the last name. The first letter is the first name! Pin, sin, bin, fin are all in the "-in" family.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Change One Letter</div>
                <p>Start with "pin". Change the p to s → "sin". Change s to b → "bin". Change b to f → "fin". Just change the first letter, keep "in"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Picture Connection</div>
                <p>A fish has a fin. A sewing box has a pin. A toy box is a bin. Can you think of a picture for each -in word?</p>
            </div>
        `,
        taskInstructions: "Build and read words in the -in word family.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build -in Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the beginning letter to make -in family words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>p + in = _________ (pin)</div>
                        <div>s + in = _________ (____)</div>
                        <div>b + in = _________ (____)</div>
                        <div>f + in = _________ (____)</div>
                        <div>w + in = _________ (____)</div>
                        <div>t + in = _________ (____)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match Word to Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from each word to the correct picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>pin → [picture of a pin]</div>
                                <div>fin → [picture of a fish fin]</div>
                                <div>bin → [picture of a bin]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with an -in family word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. The fish has a _________. (fin / pin)</div>
                        <div>2. Put the toy in the _________. (bin / fin)</div>
                        <div>3. Mom used a _________ to fix the button. (pin / bin)</div>
                        <div>4. Can you _________ the game? (win / fin)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Read and Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sort these words into the correct word family (-in or not -in):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Words: pin, cat, sin, dog, bin, fin, win, hat, tin, chin</div>
                        <div style="margin-top: 10px;">
                            <div><strong>-in Family:</strong> _________________</div>
                            <div><strong>Not -in Family:</strong> _________________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Write and Draw</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Choose two -in family words. Write them and draw a picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Word 1: _________ <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc; margin-top: 5px;"></div></div>
                        <div>Word 2: _________ <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc; margin-top: 5px;"></div></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find or draw 4 things that belong to the -in family (pin, fin, bin, win). Write each word and draw a small picture.",
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