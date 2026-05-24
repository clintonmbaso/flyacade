// Grade 2 Literacy - Term 3 Week 8 Data
const grade2LiteracyWeek8 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 3,
        week: 8,
        title: "Spelling Patterns & Word Families",
        description: "Building spelling skills through letter cards, word searching strategies, and spelling journal setup"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Spelling",
        subtopic: "Spelling Building: Letter Cards & Predictable Patterns",
        lessonContent: `
            <p>Welcome to our spelling lesson! Today we'll use letter cards to build words and discover spelling patterns.</p>
            <p><strong>Key Question:</strong> How can letter cards help us build new words?</p>
            <p><strong>Introduction:</strong> Letter cards are a fun way to practice spelling. When you move letters around, you can see how words are built from smaller parts!</p>
            <p><strong>Word Families We'll Explore:</strong></p>
            <ul>
                <li><strong>-at family:</strong> cat, bat, hat, mat, rat, sat, fat</li>
                <li><strong>-an family:</strong> man, fan, pan, can, ran, van, tan</li>
                <li><strong>-ap family:</strong> cap, map, nap, lap, tap, gap, zap</li>
            </ul>
            <p><strong>Spelling Pattern Rule:</strong></p>
            <p>When you know one word in a word family, you can make many new words! Just change the first letter while keeping the ending the same.</p>
            <p><strong>Example:</strong> If you know "cat," change the 'c' to 'b' and you get "bat"!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Magic Letter Swap</div>
                <p>Start with "hat." Change the 'h' to 'c' → "cat"! Change 'c' to 'm' → "mat"! One small change makes a whole new word!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> Word Train</div>
                <p>Build a word train: at → cat → cat + s = cats! You can make words longer by adding letters.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Pattern Power</div>
                <p>Once you learn the -at pattern, you can read AND spell 8 or more words! That's the power of spelling patterns.</p>
            </div>
        `,
        taskInstructions: "Use individual letter cards to construct words following predictable spelling patterns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Letter Card Build</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using your letter cards (or the letters below), build these words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• cat _________</div>
                        <div>• hat _________</div>
                        <div>• mat _________</div>
                        <div>• rat _________</div>
                        <div>• bat _________</div>
                    </div>
                    <div class="letter-cards" style="margin-top: 10px; padding: 10px; background: #f0f0f0; border-radius: 10px;">
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">c</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">a</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">t</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">h</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">m</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">r</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">b</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">f</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">s</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">p</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">n</span>
                        <span style="display: inline-block; background: white; border: 1px solid #ccc; padding: 8px 12px; margin: 4px; border-radius: 5px;">v</span>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build It Yourself</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use your letter cards to build 3 new -at family words on your own:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: -an Family Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Build these -an family words with your letter cards:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• man _________</div>
                        <div>• fan _________</div>
                        <div>• pan _________</div>
                        <div>• can _________</div>
                        <div>• ran _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge!</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What new word do you get when you change the first letter of "cap"? Write it here:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write a sentence using an -at family word:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that have -at, -an, or -ap family names (like 'hat' or 'pan'). Write them in your notebook.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Spelling",
        subtopic: "Word Searching Strategies: Finding Spelling Pattern Words",
        lessonContent: `
            <p>Today we'll become word detectives! We'll search for words that follow our spelling patterns.</p>
            <p><strong>Key Question:</strong> How can we find words that follow spelling rules?</p>
            <p><strong>Introduction:</strong> Word searching is like a treasure hunt! You look for hidden words that match patterns you already know.</p>
            <p><strong>Word Families We're Searching For:</strong></p>
            <ul>
                <li><strong>-op family:</strong> top, mop, pop, hop, stop, drop, shop</li>
                <li><strong>-ot family:</strong> hot, pot, dot, lot, not, got, spot</li>
                <li><strong>-og family:</strong> dog, log, fog, frog, jog, hog</li>
            </ul>
            <p><strong>Searching Strategies:</strong></p>
            <ol>
                <li>Look at the ending of the word first</li>
                <li>Say the word out loud - does it rhyme with words you know?</li>
                <li>Look for small words inside bigger words (like "stop" has "top" inside!)</li>
                <li>Check if changing one letter makes a new word</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Tip #1</div>
                <p>When you see "frog," cover the 'f' with your finger. What's left? "rog"? No - look again! "frog" has "f" + "rog"? Actually, "frog" has "fr" + "og"! It belongs to the -og family!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Detective Tip #2</div>
                <p>Spot the word "hot" in "hotdog"! Sometimes words are hiding inside bigger words.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rhombus"></i> Detective Tip #3</div>
                <p>Words that rhyme usually belong to the same word family! "Hop" and "stop" rhyme, so they are both in the -op family.</p>
            </div>
        `,
        taskInstructions: "Analyze visual aids and text to find words that conform to specific spelling rules.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Search Puzzle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find and circle the -op, -ot, and -og family words in this puzzle:
                    <div style="background: #f9f9f9; padding: 15px; font-family: monospace; font-size: 18px; text-align: center; margin-top: 10px;">
                        <div>h o t d o g s t o p</div>
                        <div>f r o g l o t f r</div>
                        <div>m o p t o p s h o p</div>
                        <div>d o t l o g p o t</div>
                        <div>h o p s p o t c o</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>List the words you found here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Rhyme Time Search</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which word does NOT belong in each group? Cross it out:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Group 1: top, mop, hop, cup → _________</div>
                        <div>Group 2: hot, pot, cat, dot → _________</div>
                        <div>Group 3: dog, log, frog, pig → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Detectives</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read each sentence. Circle the word that belongs to -op, -ot, or -og family:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The <u>frog</u> sat on a <u>log</u>.</div>
                        <div>• My <u>dog</u> likes to <u>hop</u>.</div>
                        <div>• The soup is <u>hot</u> in the <u>pot</u>.</div>
                        <div>• Please <u>stop</u> at the <u>shop</u>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Picture Search</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at the pictures below. Write the word and tell which family it belongs to:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc; display: inline-block;"></div>
                            <div>(picture of a dog)</div>
                            <div>Word: _________</div>
                            <div>Family: _________</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc; display: inline-block;"></div>
                            <div>(picture of a pot)</div>
                            <div>Word: _________</div>
                            <div>Family: _________</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc; display: inline-block;"></div>
                            <div>(picture of a mop)</div>
                            <div>Word: _________</div>
                            <div>Family: _________</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look through a storybook at home. Find 3 -op, -ot, or -og family words. Write them down and bring them to class.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Spelling",
        subtopic: "Spelling Journal Setup: Word Families",
        lessonContent: `
            <p>Today we'll create our own Spelling Journals! This will be your special book to track all the word families you learn.</p>
            <p><strong>Key Question:</strong> How can a spelling journal help me become a better reader and writer?</p>
            <p><strong>Introduction:</strong> A spelling journal is like a treasure chest of words! When you write words down, you remember them better. You can also look back anytime you need help spelling.</p>
            <p><strong>Word Families We're Logging Today:</strong></p>
            <ul>
                <li><strong>-ug family:</strong> bug, hug, jug, mug, rug, tug, dug</li>
                <li><strong>-un family:</strong> run, sun, fun, bun, nun, spun</li>
                <li><strong>-ut family:</strong> cut, hut, nut, rut, shut, but</li>
            </ul>
            <p><strong>How to Set Up Your Spelling Journal:</strong></p>
            <ol>
                <li>Write your name on the cover</li>
                <li>Create a "Table of Contents" on page 1</li>
                <li>Each word family gets its own page</li>
                <li>Write the word family at the top of the page (example: "-at Family")</li>
                <li>List all the words in that family</li>
                <li>Draw a small picture for one or two words</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Journal Page Example</div>
                <p><strong>-at Family</strong><br>
                cat &nbsp; bat &nbsp; hat &nbsp; mat &nbsp; rat &nbsp; sat &nbsp; fat<br>
                🐱 &nbsp; 🦇 &nbsp; 🎩 &nbsp; 🧼 &nbsp; 🐭 &nbsp; 🪑 &nbsp; 🐷</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Growing Your Journal</div>
                <p>Every week you'll add new word families! By the end of the term, your journal will have dozens of words you can spell perfectly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Practice Makes Perfect</div>
                <p>Reading your journal out loud helps your brain remember the spelling patterns. Try it for 5 minutes each day!</p>
            </div>
        `,
        taskInstructions: "Design and set up a personal spelling journal, logging the first structural word families.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Journal Cover Design</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Design the cover of your Spelling Journal. Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Your name</div>
                        <div>• "My Spelling Journal"</div>
                        <div>• A picture or decoration</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: -ug Family Page</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create your first journal page for the <strong>-ug family</strong>:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Write the family name at the top: _________</div>
                        <div>List the -ug words: _________</div>
                        <div>Draw a picture for "bug" or "hug":</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: -un Family Page</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create your second journal page for the <strong>-un family</strong>:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>List all the -un words you can think of: _________</div>
                        <div>Use "sun" in a sentence: _________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>Draw a picture of the sun:</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: -ut Family Page</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create your third journal page for the <strong>-ut family</strong>:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>List the -ut words: _________</div>
                        <div>Choose one word and draw a picture:</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Table of Contents</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> On page 1 of your journal, create a Table of Contents:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Page 2: -ug Family</div>
                        <div>Page 3: -un Family</div>
                        <div>Page 4: -ut Family</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What word family was your favorite today? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Add 2 more words to each word family page in your Spelling Journal (-ug, -un, -ut). Practice reading them out loud to a family member.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek8);
    console.log("grade2-literacy-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek8);
    console.log("grade2-literacy-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek8',
        metadata: grade2LiteracyWeek8.metadata,
        days: grade2LiteracyWeek8
    });
    console.log("grade2-literacy-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek8 = grade2LiteracyWeek8;
console.log("grade2-literacy-week8.js loaded and registered successfully");