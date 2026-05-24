// Grade 2 Literacy - Term 3 Week 2 Data
const grade2LiteracyWeek2 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 3,
        week: 2,
        title: "Building Independent Writing Skills",
        description: "Sentence construction, word relationships through crossword puzzles, and phonic-based writing production"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Writing Development",
        subtopic: "Introduction to Independent Sentence Construction",
        lessonContent: `
            <p>Welcome to our writing lesson! Today we'll learn how to write words and sentences by ourselves using real objects and pictures.</p>
            <p><strong>Key Question:</strong> How can we write words about things we see around us?</p>
            <p><strong>Introduction:</strong> Writers use their eyes and hands to write about the world. Today, you will look at real objects and pictures, then write words to describe them!</p>
            <p><strong>What is a sentence?</strong></p>
            <ul>
                <li>A sentence is a group of words that tells a complete idea</li>
                <li>A sentence starts with a capital letter</li>
                <li>A sentence ends with a period (.), question mark (?), or exclamation point (!)</li>
                <li>Example: "The cat sleeps." or "I see a red apple."</li>
            </ul>
            <p><strong>Steps to Write a Word or Sentence:</strong></p>
            <ol>
                <li>Look carefully at the object or picture</li>
                <li>Think: What is this? What color is it? What does it do?</li>
                <li>Say the word out loud slowly</li>
                <li>Write the letters you hear</li>
                <li>Read your word back to yourself</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Object Example: Apple</div>
                <p>Look at a real apple. What can you write? "apple", "red apple", or "I eat the apple."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Picture Example: Dog</div>
                <p>Look at a picture of a dog. You could write: "dog", "brown dog", or "The dog runs."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Try It Yourself</div>
                <p>Look at your pencil. Write: "pencil", "yellow pencil", or "I write with my pencil."</p>
            </div>
        `,
        taskInstructions: "Use real objects and pictures to write independent words and simple sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Object Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the object your teacher shows you. Write a word that names it:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Add a color word to describe the object:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short sentence about the object:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Picture Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at the picture your teacher shows you (or draw a simple picture in the box below):
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write two words about things you see in the picture:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Write one sentence about the picture:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Own Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Choose an object in your classroom. Write its name and one sentence about it:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Remember to use a capital letter at the beginning and a period at the end!
                </div>
            </div>
        `,
        homework: "Find three objects at home. Write the name of each object and one sentence about it. Remember your capital letters and periods!",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Word Relationships",
        subtopic: "Solving Cross-Reference Crossword Puzzles",
        lessonContent: `
            <p>Today we'll become puzzle solvers! We'll learn how to read and solve crossword puzzles using across and down letter blocks.</p>
            <p><strong>Key Question:</strong> How can we use letter clues to figure out words?</p>
            <p><strong>What is a Crossword Puzzle?</strong></p>
            <ul>
                <li>A crossword puzzle has white boxes where letters go</li>
                <li>Black boxes show where words end</li>
                <li>Words can go ACROSS (left to right)</li>
                <li>Words can go DOWN (top to bottom)</li>
                <li>Clues tell you what the word means</li>
            </ul>
            <p><strong>How to Solve a Crossword:</strong></p>
            <ol>
                <li>Read the clue for number 1 Across</li>
                <li>Think of a word that matches the clue</li>
                <li>Write one letter in each white box</li>
                <li>Use the letters you write to help you solve other words</li>
                <li>Words share letters - that's why it's called cross-reference!</li>
            </ol>
            <p><strong>Example:</strong> If the clue says "A furry pet that says meow" and there are 3 boxes, the answer is C A T.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Across Example</div>
                <p>1 Across (3 letters): "A red fruit" → A P P L E (5 letters, so 5 boxes!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-down"></i> Down Example</div>
                <p>1 Down (3 letters): "Flying animal that says tweet" → B I R D</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-link"></i> Sharing Letters</div>
                <p>If 1 Across is C A T and 1 Down starts with the first letter C, then 1 Down's first letter is C!</p>
            </div>
        `,
        taskInstructions: "Solve a simple crossword puzzle using across and down clues.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mini Crossword Puzzle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve this puzzle using the clues below:
                    <div style="margin-top: 10px; text-align: center;">
                        <table style="margin: 0 auto; border-collapse: collapse;">
                            <tr>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center; background-color: #f0f0f0;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center; background-color: #f0f0f0;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center; background-color: #f0f0f0;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                                <td style="border: 1px solid black; width: 40px; height: 40px; text-align: center;">&nbsp;</td>
                            </tr>
                         </table>
                    </div>
                    <div style="margin-top: 15px;">
                        <p><strong>Clues:</strong></p>
                        <p><strong>ACROSS</strong><br>
                        1. (4 letters) A animal that gives us milk → C O W<br>
                        3. (3 letters) Opposite of hot → C O L D<br>
                        <strong>DOWN</strong><br>
                        1. (4 letters) A baby cat → K I T T E N<br>
                        2. (4 letters) You wear this on your foot → S H O E</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own Clue</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at this 3-letter word: D O G. Write a clue for this word:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write a clue for this 4-letter word: F I S H:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Puzzle</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Work with a partner. Create a 3x3 crossword grid and write 2 clues. Trade with your partner and solve each other's puzzle!
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Create a small crossword puzzle (at least 4 words) for a family member to solve. Write clues for each word.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Phonic Writing Production",
        subtopic: "Writing Words Based on Phonic Sound Clusters",
        lessonContent: `
            <p>Today we will use what we know about letter sounds to write words all by ourselves!</p>
            <p><strong>Key Question:</strong> How can knowing letter sounds help us write new words?</p>
            <p><strong>What are Phonic Sound Clusters?</strong></p>
            <ul>
                <li>Letters make sounds: b says /b/, a says /a/, t says /t/</li>
                <li>When we put sounds together, we make words: b-a-t = bat</li>
                <li>Sound clusters are groups of letters that work together</li>
                <li>Examples: sh (ship), ch (chop), th (this), wh (whale)</li>
                <li>Other clusters: bl (blue), gr (green), st (stop), tr (train)</li>
            </ul>
            <p><strong>How to Write a Word You Hear:</strong></p>
            <ol>
                <li>Listen to the word carefully</li>
                <li>Say it slowly: c-a-t</li>
                <li>Write the first sound you hear</li>
                <li>Write the middle sound</li>
                <li>Write the last sound</li>
                <li>Read what you wrote - does it look right?</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Listen and Write: "ship"</div>
                <p>Say it slowly: sh-i-p. sh (one sound), i (middle sound), p (last sound). Write: S H I P</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Listen and Write: "frog"</div>
                <p>Say it slowly: f-r-o-g. f-r (cluster!), o, g. Write: F R O G</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Sound Helpers</div>
                <p>Remember: sh, ch, th, wh, bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, sw</p>
            </div>
        `,
        taskInstructions: "Write individual words independently based on learned phonic sound clusters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write the Word You Hear (Sound Clusters)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Teacher says: "shop" → Write the word:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Teacher says: "black" → Write the word:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Teacher says: "train" → Write the word:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher says: "fish" → Write the word:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Teacher says: "stop" → Write the word:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Sound Cluster to the Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a line from each word to the picture:
                    <div style="margin-top: 10px;">
                        <div>• drum ___ &nbsp; [picture space]</div>
                        <div>• flag ___ &nbsp; [picture space]</div>
                        <div>• snake ___ &nbsp; [picture space]</div>
                        <div>• chair ___ &nbsp; [picture space]</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Independent Word Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Look at the picture your teacher shows. Write the word using your sound skills:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Write two more words that start with the same sound cluster:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Write a short sentence using at least two words with sound clusters (like "The black snake is long."):
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Circle the sound clusters in your sentence.
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. Write their names using your sound skills. Then write one sentence about your favorite object.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek2);
    console.log("grade2-literacy-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek2);
    console.log("grade2-literacy-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek2',
        metadata: grade2LiteracyWeek2.metadata,
        days: grade2LiteracyWeek2
    });
    console.log("grade2-literacy-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek2 = grade2LiteracyWeek2;
console.log("grade2-literacy-week2.js loaded and registered successfully");