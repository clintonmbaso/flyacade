// Grade 4 Literacy - Term 2 Week 2 Data
const grade4LiteracyWeek2 = {
    metadata: {
        grade: 4,
        subject: "Literacy",
        term: 2,
        week: 2,
        title: "Short & Long Vowel Patterns",
        description: "Exploring doubling consonants in CVC words, silent e with vowel suffixes, and vowel teams"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Spelling & Phonics",
        subtopic: "Doubling Consonants in CVC Words (1-1-1 Rule)",
        lessonContent: `
            <p>Welcome to our spelling adventure! Today we'll learn the 1-1-1 Rule for doubling consonants before adding suffixes.</p>
            <p><strong>Key Question:</strong> When do we double the final consonant before adding -ing, -ed, or -er?</p>
            <p><strong>Introduction:</strong> Sometimes when we add a suffix to a word, we need to double the last letter. The 1-1-1 Rule helps us know exactly when!</p>
            <p><strong>The 1-1-1 Rule:</strong></p>
            <p>A word follows the 1-1-1 Rule when it has:</p>
            <ol>
                <li><strong>1 syllable</strong> (one beat in the word)</li>
                <li><strong>1 vowel</strong> (a, e, i, o, u)</li>
                <li><strong>1 consonant</strong> at the end</li>
            </ol>
            <p><strong>When to Double:</strong> Double the final consonant before adding a suffix that starts with a vowel (-ing, -ed, -er).</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>run → running (double n before -ing)</li>
                <li>hop → hopped (double p before -ed)</li>
                <li>big → bigger (double g before -er)</li>
                <li>stop → stopping (double p before -ing)</li>
                <li>wet → wetter (double t before -er)</li>
            </ul>
            <p><strong>Exceptions - Do NOT double if the word ends in:</strong></p>
            <ul>
                <li><strong>w</strong> (snow → snowing, not snowwing)</li>
                <li><strong>x</strong> (mix → mixing, not mixxing)</li>
                <li><strong>y</strong> (play → playing, not playying)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> The 1-1-1 Check</div>
                <p>Test the word "swim": Is it 1 syllable? YES (swim). 1 vowel? YES (i). 1 consonant at end? YES (m). So double it: swimming!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ban"></i> Exception Alert!</div>
                <p>The word "snow" ends with w, so we don't double it: snow → snowing (not snowwing). Same with "mix" (ends with x): mix → mixing.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Quick Check</div>
                <p>Does "clap" follow the 1-1-1 Rule? Yes! So clap → clapped, clapping. Does "jump" have 1 consonant at the end? No (it ends with mp - two consonants). So jump → jumping (no doubling)!</p>
            </div>
        `,
        taskInstructions: "Practice applying the 1-1-1 Rule to add suffixes correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Does it Double?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each word, circle YES if it follows the 1-1-1 Rule or NO if it doesn't:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• run → YES / NO</div>
                        <div>• jump → YES / NO</div>
                        <div>• big → YES / NO</div>
                        <div>• play → YES / NO</div>
                        <div>• hop → YES / NO</div>
                        <div>• snow → YES / NO</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Add the Suffix</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add -ing, -ed, or -er to each word. Double the consonant if needed:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• run + ing = _________</div>
                        <div>• hop + ed = _________</div>
                        <div>• big + er = _________</div>
                        <div>• stop + ing = _________</div>
                        <div>• wet + er = _________</div>
                        <div>• swim + ing = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a sentence using each word correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• running: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• hopped: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• bigger: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fix the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Each sentence has a misspelled word. Write the correct spelling:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• I am runing to the park. → _________</div>
                        <div>• She stoped at the red light. → _________</div>
                        <div>• My dog is biger than yours. → _________</div>
                        <div>• We are playying a new game. → _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 more CVC words at home (like sit, tap, grab). Write each word with -ing, -ed, and -er added correctly.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Spelling & Phonics",
        subtopic: "Silent E + Vowel Suffix",
        lessonContent: `
            <p>Today we'll learn what happens to silent e words when we add suffixes!</p>
            <p><strong>Key Question:</strong> When do we drop the silent e before adding a suffix?</p>
            <p><strong>Introduction:</strong> Many words end with a silent e (like make, hope, fame). When we add a suffix, sometimes the e stays and sometimes it goes!</p>
            <p><strong>The Rule:</strong></p>
            <p><strong>DROP the silent e</strong> before adding a suffix that starts with a VOWEL:</p>
            <ul>
                <li>Vowel suffixes include: <strong>-ing, -able, -ous, -ed, -er, -est</strong></li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>make → making (drop e, add -ing)</li>
                <li>hope → hoped (drop e, add -ed)</li>
                <li>fame → famous (drop e, add -ous)</li>
                <li>love → lovable (drop e, add -able)</li>
                <li>bake → baker (drop e, add -er)</li>
                <li>late → latest (drop e, add -est)</li>
            </ul>
            <p><strong>KEEP the silent e</strong> before a suffix that starts with a CONSONANT:</p>
            <ul>
                <li>Consonant suffixes include: <strong>-ful, -ly, -less, -ment, -ness</strong></li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>hope → hopeful (keep e, add -ful)</li>
                <li>love → lovely (keep e, add -ly)</li>
                <li>care → careless (keep e, add -less)</li>
                <li>excite → excitement (keep e, add -ment)</li>
                <li>late → lateness (keep e, add -ness)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt"></i> Drop the E!</div>
                <p>When adding -ing to "dance", we drop the e: dance → dancing. The e steps aside so -ing can join!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-save"></i> Keep the E!</div>
                <p>When adding -ful to "care", we keep the e: care → careful. The suffix starts with a consonant (f), so the e stays safe!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> How to Check</div>
                <p>Look at the first letter of the suffix. Is it a vowel (a, e, i, o, u)? Then DROP the e. Is it a consonant? Then KEEP the e.</p>
            </div>
        `,
        taskInstructions: "Practice dropping or keeping silent e when adding suffixes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drop or Keep?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write DROP or KEEP for each word + suffix pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• make + ing → _________</div>
                        <div>• hope + ful → _________</div>
                        <div>• fame + ous → _________</div>
                        <div>• love + ly → _________</div>
                        <div>• bake + er → _________</div>
                        <div>• care + less → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the New Word</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Combine the base word and suffix to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• hope + ed = _________</div>
                        <div>• excite + ing = _________</div>
                        <div>• late + ness = _________</div>
                        <div>• love + able = _________</div>
                        <div>• care + ful = _________</div>
                        <div>• fame + ous = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Fill-in</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• I am (make) _________ a birthday card.</div>
                        <div>• She is a (fame) _________ singer.</div>
                        <div>• He (hope) _________ to win the race.</div>
                        <div>• That is a (love) _________ puppy.</div>
                        <div>• Please be (care) _________ with the glass.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fix the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Correct the spelling errors in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• We are makeing a sandcastle. → _________</div>
                        <div>• She is hopeing for good weather. → _________</div>
                        <div>• The movie was fameous. → _________</div>
                        <div>• He is a carefull driver. → _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 silent e words. Add a vowel suffix to 3 of them and a consonant suffix to 2 of them. Draw a picture for one word.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Spelling & Phonics",
        subtopic: "Vowel Teams: ai/ay, ee/ea, oa/ow",
        lessonContent: `
            <p>Today we'll explore vowel teams - two vowels that work together to make one sound!</p>
            <p><strong>Key Question:</strong> What happens when two vowels go walking together?</p>
            <p><strong>Introduction:</strong> Sometimes two vowels sit next to each other in a word. Together they make a single vowel sound. Let's learn the most common vowel teams!</p>
            
            <p><strong>Vowel Team: AI / AY (says long A - /ā/)</strong></p>
            <ul>
                <li><strong>ai</strong> - usually in the middle of a word or syllable: rain, train, pain, mail, nail</li>
                <li><strong>ay</strong> - usually at the end of a word or syllable: play, day, say, stay, crayon</li>
            </ul>
            
            <p><strong>Vowel Team: EE / EA (says long E - /ē/)</strong></p>
            <ul>
                <li><strong>ee</strong> - common spelling: tree, see, bee, sleep, green, feet</li>
                <li><strong>ea</strong> - can say long E: beach, eat, tea, leaf, easy, teach</li>
            </ul>
            
            <p><strong>Vowel Team: OA / OW (says long O - /ō/)</strong></p>
            <ul>
                <li><strong>oa</strong> - usually in the middle: boat, coat, soap, road, toast, float</li>
                <li><strong>ow</strong> - often at the end: snow, grow, blow, show, throw, window</li>
            </ul>
            
            <p><strong>The Saying:</strong> "When two vowels go walking, the first does the talking!"</p>
            <p>This means the first vowel says its long sound, and the second vowel is silent.</p>
            
            <p><strong>⚠️ Exceptions to Learn:</strong></p>
            <ul>
                <li><strong>ea</strong> can also say short e: head, bread, read (past tense), ready, heavy</li>
                <li><strong>ea</strong> can also say long a: great, steak, break</li>
                <li><strong>said</strong> - the ai says short e (not long a)</li>
                <li><strong>rough</strong> - the ou says short u sound</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking"></i> Two Vowels Walking</div>
                <p>In "rain", A and I walk together. A talks (says /ā/) and I is silent. In "boat", O talks (says /ō/) and A is silent.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marker-alt"></i> Position Matters!</div>
                <p>Notice the pattern: "ai" appears in the middle (rain), "ay" at the end (play). "oa" in the middle (boat), "ow" at the end (snow).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Exception Corner</div>
                <p>Not every vowel team follows the rule! "Head" uses EA but says short e. "Said" uses AI but says short e. These are tricky words to memorize!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using vowel teams in words and sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Which Vowel Team?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing vowel team (ai, ay, ee, ea, oa, ow):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• r ___ n (water from clouds)</div>
                        <div>• pl ___ y (to have fun)</div>
                        <div>• tr ___ (a kind of tree)</div>
                        <div>• b ___ ch (sandy shore near water)</div>
                        <div>• b ___ t (floats on water)</div>
                        <div>• sn ___ (white frozen precipitation)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sort the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these words into the correct vowel team columns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Words: rain, play, tree, beach, boat, snow, paint, day, sleep, leaf, coat, grow</p>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>ai / ay</strong><br>
                                <div class="answer-space" style="height: 120px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>ee / ea</strong><br>
                                <div class="answer-space" style="height: 120px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>oa / ow</strong><br>
                                <div class="answer-space" style="height: 120px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose the correct word to complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• I like to (play / plai) _________ soccer.</div>
                        <div>• The (trane / train) _________ is coming down the track.</div>
                        <div>• Let's go to the (beech / beach) _________.</div>
                        <div>• The (snow / snoa) _________ is falling softly.</div>
                        <div>• I (see / sea) _________ a beautiful butterfly.</div>
                        <div>• Please (tow / toast) _________ my bread.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Exception Words Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a sentence for each exception word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• said: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• head: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• bread: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• great: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reading Passage</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Read the passage and circle all the vowel team words:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 8px;">
                        <p>"On a rainy day, I like to stay inside and read. I see the raindrops on the window. My dog sleeps at my feet. We eat toast with butter and drink hot tea. It's a great way to spend the day!"</p>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>List the vowel team words you found:</em></p>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 10 words with vowel teams (ai, ay, ee, ea, oa, ow) in a book or around your home. Write each word and circle the vowel team.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4LiteracyWeek2);
    console.log("grade4-literacy-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4LiteracyWeek2);
    console.log("grade4-literacy-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4LiteracyWeek2',
        metadata: grade4LiteracyWeek2.metadata,
        days: grade4LiteracyWeek2
    });
    console.log("grade4-literacy-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4LiteracyWeek2 = grade4LiteracyWeek2;
console.log("grade4-literacy-week2.js loaded and registered successfully");