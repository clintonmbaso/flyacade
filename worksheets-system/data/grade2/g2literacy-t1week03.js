// Grade 2 Literacy - Term 1 Week 3 Data
const grade2LiteracyWeek3 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 1,
        week: 3,
        title: "Consonant Alternative Spellings",
        description: "Exploring different graphemes that make the same consonant sounds: c/k/ck/ch, b/bb, r/rr/wr, j/g/ge, m/mm/mb, z/zz/ze/s/se, w/wh, v/ve"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Alternative Spellings: c = k, ck, ch and b = bb",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn that some sounds can be spelled in different ways.</p>
            <p><strong>Key Question:</strong> Can you hear the /k/ sound in these words: cat, duck, and school?</p>
            <p><strong>Introduction:</strong> The /k/ sound can be written in different ways. Let's learn the graphemes that make the /k/ sound!</p>
            <p><strong>The /k/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>c</strong> as in <strong>c</strong>at, <strong>c</strong>up, <strong>c</strong>ar</li>
                <li><strong>k</strong> as in <strong>k</strong>ite, <strong>k</strong>angaroo, <strong>k</strong>ey</li>
                <li><strong>ck</strong> as in du<strong>ck</strong>, so<strong>ck</strong>, blo<strong>ck</strong></li>
                <li><strong>ch</strong> as in <strong>ch</strong>orus, s<strong>ch</strong>ool, <strong>ch</strong>ristmas</li>
            </ul>
            <p><strong>The /b/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>b</strong> as in <strong>b</strong>all, <strong>b</strong>oy, <strong>b</strong>ook</li>
                <li><strong>bb</strong> as in ru<strong>bb</strong>er, pu<strong>bb</strong>y, ca<strong>bb</strong>age</li>
            </ul>
            <div class="note-box">
                <p><strong>💡 Remember:</strong> A <strong>grapheme</strong> is a letter or group of letters that represents a sound. Different graphemes can make the same sound!</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat"></i> /k/ Sound Examples</div>
                <p>• <strong>c</strong> - cat, cot, cup, can, cap<br>
                • <strong>k</strong> - kit, kiss, keep, kettle, kennel<br>
                • <strong>ck</strong> - kick, back, neck, pick, lock<br>
                • <strong>ch</strong> - chemist, ache, echo, character</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baseball-ball"></i> /b/ Sound Examples</div>
                <p>• <strong>b</strong> - bat, bed, big, box, bus<br>
                • <strong>bb</strong> - bubble, rabbit, ribbon, hobby, lobster</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Tip for /k/</div>
                <p>The <strong>ck</strong> spelling usually comes after a short vowel sound, like in "duck" and "sock". The <strong>ch</strong> spelling for /k/ is often in words from Greek, like "school" and "chorus".</p>
            </div>
        `,
        taskInstructions: "Practice reading and writing words with alternative spellings for /k/ and /b/ sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read and Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct columns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Words: cat, duck, kite, school, back, kiss, cup, block, sock, kettle</p>
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px;">
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>c</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>k</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>ck</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>ch</strong></div>
                        </div>
                        <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose the correct spelling (b or bb) to complete each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• ru___er (b/bb)</div>
                        <div>• ca___age (b/bb)</div>
                        <div>• pu___y (b/bb)</div>
                        <div>• ___all (b/bb)</div>
                        <div>• ra___it (b/bb)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two sentences using words with the /k/ sound and two sentences using words with the /b/ sound:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Circle the Grapheme</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the letters that make the /k/ or /b/ sound in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• chicken → ch i ck e n</div>
                        <div>• bubble → b u bb l e</div>
                        <div>• black → b l a ck</div>
                        <div>• rabbit → r a bb i t</div>
                        <div>• kitten → k i tt e n</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that have the /k/ sound in their name and 5 things with the /b/ sound. Write them in your notebook.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Alternative Spellings: r = rr, wr and j = g, ge and m = mm, mb",
        lessonContent: `
            <p>Welcome back! Today we'll learn more consonant alternative spellings for the /r/, /j/, and /m/ sounds.</p>
            <p><strong>Key Question:</strong> Can you hear the /r/ sound at the beginning of "write"?</p>
            <p><strong>The /r/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>r</strong> as in <strong>r</strong>abbit, <strong>r</strong>ed, <strong>r</strong>un</li>
                <li><strong>rr</strong> as in ca<strong>rr</strong>ot, be<strong>rr</strong>y, ho<strong>rr</strong>ible</li>
                <li><strong>wr</strong> as in <strong>wr</strong>ite, <strong>wr</strong>ong, <strong>wr</strong>ist</li>
            </ul>
            <p><strong>The /j/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>j</strong> as in <strong>j</strong>ump, <strong>j</strong>et, <strong>j</strong>elly</li>
                <li><strong>g</strong> as in <strong>g</strong>em, <strong>g</strong>iant, <strong>g</strong>ym</li>
                <li><strong>ge</strong> as in ca<strong>ge</strong>, pa<strong>ge</strong>, hu<strong>ge</strong></li>
            </ul>
            <p><strong>The /m/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>m</strong> as in <strong>m</strong>ouse, <strong>m</strong>ilk, <strong>m</strong>an</li>
                <li><strong>mm</strong> as in <strong>mm</strong>mmm (yummy!), i<strong>mm</strong>ense, co<strong>mm</strong>on</li>
                <li><strong>mb</strong> as in la<strong>mb</strong>, thu<strong>mb</strong>, cli<strong>mb</strong></li>
            </ul>
            <div class="note-box">
                <p><strong>💡 Remember:</strong> In <strong>wr</strong> words, the 'w' is silent! In <strong>mb</strong> words, the 'b' is silent!</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot"></i> /r/ Sound Examples</div>
                <p>• <strong>r</strong> - rat, rug, rope, rose, rock<br>
                • <strong>rr</strong> - sorry, hurry, borrow, mirror, cherry<br>
                • <strong>wr</strong> - wreck, wrap, wriggle, wrinkle, wren</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gem"></i> /j/ Sound Examples</div>
                <p>• <strong>j</strong> - jam, jug, job, jog, jacket<br>
                • <strong>g</strong> - gentle, ginger, magic, energy, giant<br>
                • <strong>ge</strong> - orange, sponge, fringe, lounge, village</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lamb"></i> /m/ Sound Examples</div>
                <p>• <strong>m</strong> - mat, mud, mug, moon, milk<br>
                • <strong>mm</strong> - summer, hammer, tummy, mummy, comma<br>
                • <strong>mb</strong> - comb, bomb, crumb, limb, numb</p>
            </div>
        `,
        taskInstructions: "Practice identifying and writing alternative spellings for /r/, /j/, and /m/ sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words by their /r/ sound spelling:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Words: write, red, carrot, wrong, run, berry, rabbit, wrist</p>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>r</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>rr</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>wr</strong></div>
                        </div>
                        <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Missing Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each word with the correct /j/ sound spelling (j, g, or ge):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• ___ump (j/g/ge)</div>
                        <div>• pa___ (j/g/ge)</div>
                        <div>• ___iant (j/g/ge)</div>
                        <div>• ora___ (j/g/ge)</div>
                        <div>• ___elly (j/g/ge)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circle the Silent Letter</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the silent letter in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• lamb</div>
                        <div>• write</div>
                        <div>• thumb</div>
                        <div>• wrong</div>
                        <div>• comb</div>
                        <div>• wrist</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence using a word with <strong>wr</strong>, one sentence using a word with <strong>g</strong> (as /j/), and one sentence using a word with <strong>mb</strong>:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Make a list of 5 words with the /r/ sound, 5 words with the /j/ sound, and 5 words with the /m/ sound. Use different spellings for each!",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Alternative Spellings: z = zz, ze, s, se and w = wh and v = ve",
        lessonContent: `
            <p>Welcome to our final phonics lesson this week! Today we'll learn alternative spellings for the /z/, /w/, and /v/ sounds.</p>
            <p><strong>Key Question:</strong> Can you hear the /z/ sound at the end of "buzz" and "cheese"?</p>
            <p><strong>The /z/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>z</strong> as in <strong>z</strong>oo, <strong>z</strong>ebra, <strong>z</strong>ero</li>
                <li><strong>zz</strong> as in bu<strong>zz</strong>, fu<strong>zz</strong>, ji<strong>zz</strong></li>
                <li><strong>ze</strong> as in bree<strong>ze</strong>, snee<strong>ze</strong>, free<strong>ze</strong></li>
                <li><strong>s</strong> as in i<strong>s</strong>, hi<strong>s</strong>, a<strong>s</strong>, bu<strong>s</strong>y</li>
                <li><strong>se</strong> as in no<strong>se</strong>, tho<strong>se</strong>, chee<strong>se</strong></li>
            </ul>
            <p><strong>The /w/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>w</strong> as in <strong>w</strong>et, <strong>w</strong>ig, <strong>w</strong>indow</li>
                <li><strong>wh</strong> as in <strong>wh</strong>ale, <strong>wh</strong>ite, <strong>wh</strong>eele</li>
            </ul>
            <p><strong>The /v/ Sound - Different Spellings:</strong></p>
            <ul>
                <li><strong>v</strong> as in <strong>v</strong>an, <strong>v</strong>et, <strong>v</strong>iolin</li>
                <li><strong>ve</strong> as in li<strong>ve</strong>, ha<strong>ve</strong>, gi<strong>ve</strong>, lo<strong>ve</strong></li>
            </ul>
            <div class="note-box">
                <p><strong>💡 Remember:</strong> The letter <strong>s</strong> can make the /z/ sound (like in "is" and "has") - not just the /s/ sound!</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bee"></i> /z/ Sound Examples</div>
                <p>• <strong>z</strong> - zip, zap, zigzag, zero, zombie<br>
                • <strong>zz</strong> - buzz, fizz, jazz, dizzy, pizza<br>
                • <strong>ze</strong> - size, prize, blaze, graze, amaze<br>
                • <strong>s</strong> - is, his, as, has, was, busy<br>
                • <strong>se</strong> - rose, those, these, please, cheese</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-whale"></i> /w/ Sound Examples</div>
                <p>• <strong>w</strong> - web, win, wish, wiggle, window<br>
                • <strong>wh</strong> - what, when, where, why, wheel, whistle</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-van"></i> /v/ Sound Examples</div>
                <p>• <strong>v</strong> - vest, vine, vote, visit, violin<br>
                • <strong>ve</strong> - dove, wave, glove, stove, twelve</p>
            </div>
        `,
        taskInstructions: "Practice identifying and writing alternative spellings for /z/, /w/, and /v/ sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the /z/ Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words by their /z/ sound spelling:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Words: zoo, buzz, cheese, is, size, those, zip, fizz, nose, was</p>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 5px; margin-top: 10px;">
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>z</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>zz</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>ze</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>s</strong></div>
                            <div style="border: 1px solid #ccc; padding: 5px; text-align: center;"><strong>se</strong></div>
                        </div>
                        <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Spelling</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with the correct /w/ spelling (w or wh):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• ___ale (w/wh)</div>
                        <div>• ___et (w/wh)</div>
                        <div>• ___ite (w/wh)</div>
                        <div>• ___indow (w/wh)</div>
                        <div>• ___ere (w/wh)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the /v/ Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Add the correct ending (v or ve) to complete each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• ha___ (v/ve)</div>
                        <div>• lo___ (v/ve)</div>
                        <div>• gi___ (v/ve)</div>
                        <div>• li___ (v/ve)</div>
                        <div>• wa___ (v/ve)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a sentence using a word with <strong>zz</strong>, a sentence using a word with <strong>wh</strong>, and a sentence using a word with <strong>ve</strong>:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Review Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write one word for each grapheme we learned this week:
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-top: 10px;">
                        <div style="font-size: 12px;">ck</div><div style="font-size: 12px;">bb</div><div style="font-size: 12px;">rr</div><div style="font-size: 12px;">wr</div>
                        <div style="font-size: 12px;">g (/j/)</div><div style="font-size: 12px;">ge</div><div style="font-size: 12px;">mm</div><div style="font-size: 12px;">mb</div>
                        <div style="font-size: 12px;">zz</div><div style="font-size: 12px;">ze</div><div style="font-size: 12px;">se (/z/)</div><div style="font-size: 12px;">wh</div>
                        <div style="font-size: 12px;">ve</div><div style="font-size: 12px;">ch (/k/)</div><div style="font-size: 12px;">s (/z/)</div><div style="font-size: 12px;">wr</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing all the different ways to spell the /z/ sound. Include pictures and example words!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek3);
    console.log("grade2-literacy-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek3);
    console.log("grade2-literacy-week3.js registered using DataLoader.registerWorksheet()");
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
    console.log("grade2-literacy-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek3 = grade2LiteracyWeek3;
console.log("grade2-literacy-week3.js loaded and registered successfully");