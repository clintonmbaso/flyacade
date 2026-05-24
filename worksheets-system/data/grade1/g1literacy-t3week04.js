// Grade 1 Literacy - Term 3 Week 4 Data
const grade1LiteracyWeek4 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 3,
        week: 4,
        title: "Final Consonant Blends",
        description: "Learning to identify, sound out, and build words with final consonant blends: -st, -nd, -sk, -mp"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Consonant Blends - Final Blends (-st, -nd, -sk, -mp)",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we will learn about <strong>final consonant blends</strong>.</p>
            <p><strong>Key Question:</strong> What happens when two consonants come together at the end of a word?</p>
            <p><strong>Introduction:</strong> A consonant blend is when two consonants are together and you can hear both sounds. Today we will focus on blends that come at the <strong>end</strong> of words.</p>
            <p><strong>Our Final Blends for Today:</strong></p>
            <ol>
                <li><strong>-st</strong> (like in "nest"): /s/ /t/</li>
                <li><strong>-nd</strong> (like in "hand"): /n/ /d/</li>
                <li><strong>-sk</strong> (like in "desk"): /s/ /k/</li>
                <li><strong>-mp</strong> (like in "jump"): /m/ /p/</li>
            </ol>
            <p><strong>How to Sound Out Final Blends:</strong></p>
            <ul>
                <li>Say the first sound, then quickly say the second sound</li>
                <li>Practice: <em>n-e-s-t</em> → "nest"</li>
                <li>Practice: <em>h-a-n-d</em> → "hand"</li>
                <li>Practice: <em>d-e-s-k</em> → "desk"</li>
                <li>Practice: <em>j-u-m-p</em> → "jump"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> -st Words</div>
                <p>nest, fast, last, dust, must, rest, best, west</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> -nd Words</div>
                <p>hand, sand, land, end, bend, find, kind, mind</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> -sk Words</div>
                <p>desk, mask, task, ask, whisk, dusk, risk</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> -mp Words</div>
                <p>jump, bump, lamp, camp, stamp, pump, dump, ramp</p>
            </div>
        `,
        taskInstructions: "Practice sounding out and identifying words with final consonant blends.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Say It Aloud</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Practice saying each word. Circle the final blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>nest → blend: ___st___</div>
                        <div>hand → blend: _______</div>
                        <div>desk → blend: _______</div>
                        <div>jump → blend: _______</div>
                        <div>fast → blend: _______</div>
                        <div>sand → blend: _______</div>
                        <div>mask → blend: _______</div>
                        <div>lamp → blend: _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from each word to the correct picture:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>
                            <div>• nest</div>
                            <div>• hand</div>
                            <div>• desk</div>
                            <div>• jump</div>
                        </div>
                        <div style="border-left: 2px solid #ccc; padding-left: 15px;">
                            <div>[Picture of a bird's nest]</div>
                            <div>[Picture of a hand]</div>
                            <div>[Picture of a desk]</div>
                            <div>[Picture of someone jumping]</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each word with the correct final blend (-st, -nd, -sk, -mp):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I put my books on my de___ .</div>
                        <div>b. The bird lives in a ne___ .</div>
                        <div>c. I can ju___ high!</div>
                        <div>d. I wash my ha___ with soap.</div>
                        <div>e. The sun is hot in the we___ .</div>
                        <div>f. Please a___ your teacher a question.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Color the Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Color each word based on its final blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>-st = red &nbsp;&nbsp; -nd = blue &nbsp;&nbsp; -sk = green &nbsp;&nbsp; -mp = yellow</div>
                        <div style="margin-top: 10px;">nest &nbsp;&nbsp; hand &nbsp;&nbsp; desk &nbsp;&nbsp; jump &nbsp;&nbsp; fast &nbsp;&nbsp; sand &nbsp;&nbsp; mask &nbsp;&nbsp; lamp</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that have names ending with -st, -nd, -sk, or -mp. Write or draw them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Word Building - CVCC Structures with Final Blends",
        lessonContent: `
            <p>Today we will become word builders! We will learn how to build words using final consonant blends.</p>
            <p><strong>Key Question:</strong> How do we build words that end with two consonants?</p>
            <p><strong>What is CVCC?</strong></p>
            <ul>
                <li><strong>C</strong> = Consonant (like b, c, d, f...)</li>
                <li><strong>V</strong> = Vowel (a, e, i, o, u)</li>
                <li><strong>C</strong> = Consonant</li>
                <li><strong>C</strong> = Consonant</li>
            </ul>
            <p><strong>CVCC Example:</strong> f-a-s-t → C-V-C-C (fast)</p>
            <p><strong>Let's Build Words Together!</strong></p>
            <ol>
                <li>Start with a vowel sound (a, e, i, o, u)</li>
                <li>Add a beginning consonant</li>
                <li>Add a final consonant blend (-st, -nd, -sk, -mp)</li>
            </ol>
            <p><strong>Word Building Practice:</strong></p>
            <ul>
                <li>f + a + st = fast</li>
                <li>e + n + d = end</li>
                <li>a + s + k = ask</li>
                <li>j + u + mp = jump</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Building -st Words</div>
                <p>f + a + st = fast</p>
                <p>l + a + st = last</p>
                <p>m + u + st = must</p>
                <p>r + e + st = rest</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Building -nd Words</div>
                <p>b + e + nd = bend</p>
                <p>s + a + nd = sand</p>
                <p>l + a + nd = land</p>
                <p>f + i + nd = find</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Building -sk Words</div>
                <p>a + s + k = ask</p>
                <p>m + a + sk = mask</p>
                <p>d + e + sk = desk</p>
                <p>t + a + sk = task</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Building -mp Words</div>
                <p>j + u + mp = jump</p>
                <p>l + a + mp = lamp</p>
                <p>c + a + mp = camp</p>
                <p>b + u + mp = bump</p>
            </div>
        `,
        taskInstructions: "Build CVCC words using letter tiles or by writing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build a Word</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use the letters to build each word. Write the complete word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>f + a + st = _______</div>
                        <div>l + a + st = _______</div>
                        <div>m + u + st = _______</div>
                        <div>b + e + nd = _______</div>
                        <div>s + a + nd = _______</div>
                        <div>f + i + nd = _______</div>
                        <div>a + s + k = _______</div>
                        <div>m + a + sk = _______</div>
                        <div>j + u + mp = _______</div>
                        <div>l + a + mp = _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Change the Beginning Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Change the first letter to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>fast → change f to l → _______</div>
                        <div>sand → change s to l → _______</div>
                        <div>mask → change m to t → _______</div>
                        <div>jump → change j to l → _______</div>
                        <div>nest → change n to r → _______</div>
                        <div>hand → change h to l → _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Build It, Write It, Draw It</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose 3 words you built. Write each word and draw a picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Word 1: ________ &nbsp;&nbsp; <span style="font-style: italic;">Draw:</span> <span class="drawing-area" style="display: inline-block; width: 80px; height: 50px; border: 1px dashed #ccc;"></span></div>
                        <div style="margin-top: 10px;">Word 2: ________ &nbsp;&nbsp; <span style="font-style: italic;">Draw:</span> <span class="drawing-area" style="display: inline-block; width: 80px; height: 50px; border: 1px dashed #ccc;"></span></div>
                        <div style="margin-top: 10px;">Word 3: ________ &nbsp;&nbsp; <span style="font-style: italic;">Draw:</span> <span class="drawing-area" style="display: inline-block; width: 80px; height: 50px; border: 1px dashed #ccc;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Builder</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use one word from above to complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I can run _______. (f_st)</div>
                        <div>b. Please don't _______ me a question. (a_k)</div>
                        <div>c. The frog can _______ high. (j_mp)</div>
                        <div>d. I sit at my _______. (d_sk)</div>
                        <div>e. The bird is in its _______. (n_st)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Use letter cards or paper scraps to build these words: fast, hand, desk, jump, nest, sand, mask, lamp. Read them to a family member.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Reading Words with Consonant Blends - CCVC and CVCC",
        lessonContent: `
            <p>Today we will become fluent readers! We will practice reading words with consonant blends at the <strong>beginning</strong> (CCVC) and at the <strong>end</strong> (CVCC).</p>
            <p><strong>Key Question:</strong> Can you read words with blends at the beginning AND the end?</p>
            <p><strong>Review: Two Types of Consonant Blends</strong></p>
            <ul>
                <li><strong>CCVC</strong> = Beginning blend + vowel + consonant (e.g., <em>stop, frog, tree</em>)</li>
                <li><strong>CVCC</strong> = Consonant + vowel + ending blend (e.g., <em>fast, hand, desk</em>)</li>
            </ul>
            <p><strong>Reading Words with Beginning Blends:</strong></p>
            <ul>
                <li>slip, spot, grab, frog, stop, tree, drum, clip</li>
            </ul>
            <p><strong>Reading Words with Ending Blends:</strong></p>
            <ul>
                <li>nest, hand, desk, jump, fast, land, ask, lamp</li>
            </ul>
            <p><strong>Reading Words with Both Blends (advanced):</strong></p>
            <ul>
                <li>stamp (st - beginning blend, mp - ending blend)</li>
                <li>stand (st - beginning blend, nd - ending blend)</li>
                <li>frost (fr - beginning blend, st - ending blend)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-play"></i> CCVC (Beginning Blends)</div>
                <p>stop, spot, spin, snap, frog, flag, clip, clap, drum, drop, tree, train</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stop"></i> CVCC (Ending Blends)</div>
                <p>nest, rest, fast, last, hand, sand, find, kind, desk, mask, ask, jump, lamp, camp</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Words with Two Blends</div>
                <p>stamp (st + amp), stand (st + and), brand (br + and), frost (fr + ost), blend (bl + end)</p>
            </div>
        `,
        taskInstructions: "Practice reading words with beginning and ending consonant blends fluently.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read and Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each word. Write it in the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div style="background-color: #E8F4FD; padding: 10px;">
                                <strong>CCVC (Beginning Blend)</strong><br>
                                <span style="font-size: 12px;">Example: stop</span>
                                <div style="height: 150px; margin-top: 5px;">
                                    <div>• </div>
                                    <div>• </div>
                                    <div>• </div>
                                </div>
                            </div>
                            <div style="background-color: #E8FCE8; padding: 10px;">
                                <strong>CVCC (Ending Blend)</strong><br>
                                <span style="font-size: 12px;">Example: nest</span>
                                <div style="height: 150px; margin-top: 5px;">
                                    <div>• </div>
                                    <div>• </div>
                                    <div>• </div>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 10px;">Word list: fast, frog, hand, stop, jump, tree, desk, clip, land, flag, mask, spot</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read the Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each sentence. Circle the words with consonant blends:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The frog can jump fast.</div>
                        <div style="height: 20px;"></div>
                        <div>b. Put your hand on the desk.</div>
                        <div style="height: 20px;"></div>
                        <div>c. Stop and rest in the grass.</div>
                        <div style="height: 20px;"></div>
                        <div>d. The bird is in its nest.</div>
                        <div style="height: 20px;"></div>
                        <div>e. Please turn on the lamp.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fluency Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read these words as fast as you can. Time yourself!
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0;">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center;">
                            <div>nest</div><div>fast</div><div>stop</div><div>hand</div>
                            <div>desk</div><div>jump</div><div>frog</div><div>sand</div>
                            <div>mask</div><div>lamp</div><div>tree</div><div>land</div>
                            <div>ask</div><div>find</div><div>spot</div><div>camp</div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;">How many words can you read in 1 minute? _______ words</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Complete the Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in the blanks with words from the box:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Word box:</strong> fast, nest, jump, hand, desk, lamp</div>
                        <div style="margin-top: 10px; padding: 10px; background-color: #F5F5F5;">
                            Tom sat at his _______. He saw a bird fly to its _______ outside the window. 
                            Tom raised his _______ to wave. The bird could _______ very high and fly _______. 
                            Tom turned on his _______ to read a book.
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Read the word list to a family member. Practice any words you find tricky. Read for 5 minutes tonight.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Word Building - Word Families with Ending Structures",
        lessonContent: `
            <p>Today we will learn about <strong>word families</strong>! Words that share the same ending are part of a family.</p>
            <p><strong>Key Question:</strong> How can knowing one word help you read many words?</p>
            <p><strong>What is a Word Family?</strong></p>
            <ul>
                <li>A word family is a group of words that share the same ending sound</li>
                <li>When you know one word, you can read many others by changing the beginning!</li>
                <li>Example: <strong>-un family</strong> → sun, run, fun, bun</li>
                <li>Example: <strong>-ot family</strong> → hot, pot, dot, lot, not</li>
            </ul>
            <p><strong>Word Families with Final Blends:</strong></p>
            <ul>
                <li><strong>-ast family:</strong> fast, last, past, mast, cast</li>
                <li><strong>-and family:</strong> hand, sand, land, band, stand</li>
                <li><strong>-ask family:</strong> ask, mask, task, flask</li>
                <li><strong>-amp family:</strong> lamp, camp, stamp, damp, ramp</li>
                <li><strong>-est family:</strong> nest, rest, best, test, west</li>
                <li><strong>-end family:</strong> end, bend, send, lend, spend</li>
                <li><strong>-ump family:</strong> jump, bump, lump, pump, dump</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> The -un Family</div>
                <p>bun, fun, run, sun, spun</p>
                <p><em>I see the sun. Let's have fun! We can run.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> The -ot Family</div>
                <p>hot, pot, dot, lot, not, got, spot</p>
                <p><em>The pot is hot. Put a dot on the spot.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> The -ast Family</div>
                <p>fast, last, past, mast, cast, blast</p>
                <p><em>Run fast! The last one past the mast.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> The -ump Family</div>
                <p>jump, bump, lump, pump, dump, stump</p>
                <p><em>Jump over the bump. Pump the water into the dump.</em></p>
            </div>
        `,
        taskInstructions: "Build word families by changing the beginning consonant or blend.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build a Word Family</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change the first letter to make new words in the -un family:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>un → b + un = _______</div>
                        <div>un → f + un = _______</div>
                        <div>un → r + un = _______</div>
                        <div>un → s + un = _______</div>
                        <div>Write a sentence using one of these words: _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the -ot Family</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing letters to make -ot family words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>h ___ ___ &nbsp;&nbsp;&nbsp; p ___ ___ &nbsp;&nbsp;&nbsp; d ___ ___ &nbsp;&nbsp;&nbsp; l ___ ___ &nbsp;&nbsp;&nbsp; n ___ ___</div>
                        <div style="margin-top: 10px;">Now write all 5 words: _________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Family Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these words into the correct word families:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Words: fast, hand, lamp, last, sand, camp, past, land, stamp, band</div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                            <div style="background-color: #FFE6E6; padding: 8px;"><strong>-ast Family</strong><br><span style="font-size: 12px;">(fast, last, past)</span><br>_______</div>
                            <div style="background-color: #E6FFE6; padding: 8px;"><strong>-and Family</strong><br><span style="font-size: 12px;">(hand, sand, land, band)</span><br>_______</div>
                            <div style="background-color: #E6E6FF; padding: 8px;"><strong>-amp Family</strong><br><span style="font-size: 12px;">(lamp, camp, stamp)</span><br>_______</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Word Family</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose an ending blend (-st, -nd, -sk, -mp). Create your own word family:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My ending blend: _______</div>
                        <div>Words in my family: 
                            <span class="answer-space" style="display: inline-block; width: 60px;"></span>, 
                            <span class="answer-space" style="display: inline-block; width: 60px;"></span>, 
                            <span class="answer-space" style="display: inline-block; width: 60px;"></span>
                        </div>
                        <div style="margin-top: 10px;">Draw a picture of one word from your family:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Read and Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Read the story. Circle all the words from the -un and -ot families:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF8E1;">
                        <p>It is a hot day. The sun is bright. I got a pot of water. 
                        We can run and have fun. Do not forget the dot on the map. 
                        The bun is on the lot. Let's eat!</p>
                    </div>
                    <div style="margin-top: 10px;">-un family words I found: _________________</div>
                    <div>-ot family words I found: _________________</div>
                </div>
            </div>
        `,
        homework: "Choose one word family we learned today (-un, -ot, -ast, -and, -amp, -ump, -est, -end). Write 5 words from that family and draw a picture for 2 of them.",
        homeworkDue: "Monday"
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