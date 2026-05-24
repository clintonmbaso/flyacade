// Grade 2 Literacy - Term 3 Week 10 Data
const grade2LiteracyWeek10 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 3,
        week: 10,
        title: "Dictation Application & Comprehensive Year Review",
        description: "Applying dictation skills, reinforcing sound patterns and sight words, and final assessment of cursive writing and spacing"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Dictation Application",
        subtopic: "Hearing and Writing Complete Sentences",
        lessonContent: `
            <p>Welcome to our dictation lesson! Today we'll practice listening carefully and writing down complete sentences.</p>
            <p><strong>Key Question:</strong> Can you listen, remember, and write a whole sentence correctly?</p>
            <p><strong>Introduction:</strong> Dictation is when someone says a sentence and you write it down. This helps train your ears and hands to work together!</p>
            <p><strong>Dictation Tips:</strong></p>
            <ul>
                <li>Listen carefully to each word</li>
                <li>Remember the whole sentence before you start writing</li>
                <li>Say the sentence quietly to yourself as you write</li>
                <li>Check your spelling and punctuation when you're done</li>
            </ul>
            <p><strong>What to Remember:</strong></p>
            <ul>
                <li>Sentences start with a capital letter</li>
                <li>Sentences end with a period (.), question mark (?), or exclamation point (!)</li>
                <li>Leave a finger space between each word</li>
                <li>Write neatly so you can read your work</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Listen Carefully</div>
                <p>When I say: "The girl is sitting on the floor." You should write exactly those words with a capital T at the beginning and a period at the end.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Finger Spaces</div>
                <p>Remember to put your finger between each word to leave the right amount of space. "The↓girl↓is↓sitting↓on↓the↓floor."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Memory Power</div>
                <p>If the sentence has 7 words, try to remember all 7 before you pick up your pencil. Practice makes your memory stronger!</p>
            </div>
        `,
        taskInstructions: "Listen to each sentence the teacher reads, then write it correctly in your notebook.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sentence Dictation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen carefully to each sentence. Write it correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Sentence 1:</strong> "The girl is sitting on the floor."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Sentence 2:</strong> "My dog likes to run in the park."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Sentence 3:</strong> "We will go to school tomorrow."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Sentence 4:</strong> "The cat slept on the warm blanket."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Sentence 5:</strong> "I can see three red apples on the tree."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Check your work. Did you remember to:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ Start each sentence with a capital letter?</div>
                        <div>□ End each sentence with a period?</div>
                        <div>□ Put finger spaces between words?</div>
                        <div>□ Spell all words correctly?</div>
                        <div>□ Write neatly on the line?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Listen to these longer sentences and write them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Sentence 6:</strong> "The little boy found a big shell at the beach."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Sentence 7:</strong> "My mom and dad took us to the zoo last Saturday."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which sentence was the hardest to remember? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member to read 3 sentences to you. Write them in your notebook and bring them to class tomorrow.",
        homeworkDue: "Tuesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Comprehensive Year Review",
        subtopic: "Sound Patterns, Sight Words, and Syntax Formulation",
        lessonContent: `
            <p>Today we'll review everything we've learned this year! Let's practice sound patterns, sight words, and building sentences.</p>
            <p><strong>Key Question:</strong> What sound patterns and sight words do you remember from this year?</p>
            <p><strong>Sound Patterns Review:</strong></p>
            <ul>
                <li><strong>Long vowels:</strong> a_e (cake), e_e (these), i_e (bike), o_e (home), u_e (cute)</li>
                <li><strong>Vowel teams:</strong> ai (rain), ay (play), ea (beach), ee (feet), oa (boat)</li>
                <li><strong>Digraphs:</strong> sh (ship), ch (chair), th (thumb), wh (whale), ck (duck)</li>
                <li><strong>Bossy R:</strong> ar (car), er (her), ir (bird), or (corn), ur (turtle)</li>
            </ul>
            <p><strong>Common Sight Words to Know:</strong></p>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin: 10px 0;">
                <span>the, and, said, for</span>
                <span>was, are, his, her</span>
                <span>they, have, from, with</span>
                <span>there, what, when, where</span>
            </div>
            <p><strong>Syntax Formulation (Building Sentences):</strong></p>
            <ul>
                <li>A sentence needs a subject (who or what)</li>
                <li>A sentence needs a verb (action or being)</li>
                <li>A sentence needs to make complete sense</li>
                <li>Example: "The dog (subject) runs (verb) fast."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Sound Pattern Magic</div>
                <p>When you know "ai" says "A", you can read rain, train, mail, and pail! One pattern helps you read many words.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sight Word Stars</div>
                <p>Sight words are words you should recognize instantly - like the stars you can find in the sky without searching!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Sentence Building</div>
                <p>Putting words together is like building with blocks. Start with a subject, add an action, and you have a sentence!</p>
            </div>
        `,
        taskInstructions: "Complete the sound pattern sorting, sight word recognition, and sentence building activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Pattern Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct sound pattern columns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                            <div style="background: #e3f2fd; padding: 5px 10px; border-radius: 5px;">rain</div>
                            <div style="background: #e3f2fd; padding: 5px 10px; border-radius: 5px;">boat</div>
                            <div style="background: #e3f2fd; padding: 5px 10px; border-radius: 5px;">feet</div>
                            <div style="background: #e3f2fd; padding: 5px 10px; border-radius: 5px;">play</div>
                            <div style="background: #e3f2fd; padding: 5px 10px; border-radius: 5px;">beach</div>
                            <div style="background: #e3f2fd; padding: 5px 10px; border-radius: 5px;">coat</div>
                        </div>
                        <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">ai</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">ay</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">ea</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">ee</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">oa</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sight Word Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use each sight word in a complete sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>there:</strong> <span class="answer-space" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                        <div style="margin-top: 10px;"><strong>what:</strong> <span class="answer-space" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                        <div style="margin-top: 10px;"><strong>where:</strong> <span class="answer-space" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                        <div style="margin-top: 10px;"><strong>when:</strong> <span class="answer-space" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Building</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Unscramble these words to make complete sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. dog / The / barked / loudly</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                        
                        <div style="margin-top: 10px;">b. to / wants / She / play / outside</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                        
                        <div style="margin-top: 10px;">c. is / The / sky / blue / today</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3 sentences about what you learned in Grade 2 this year:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 words with vowel teams in a book at home. Write them down and circle the vowel team in each word.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Comprehensive Year Review",
        subtopic: "Final Assessment: Cursive Tails, Spacing, and Dictation Accuracy",
        lessonContent: `
            <p>Today is our final assessment! You'll show everything you've learned about cursive writing, spacing, and dictation.</p>
            <p><strong>Key Question:</strong> Can you demonstrate your best cursive writing and dictation skills?</p>
            <p><strong>Cursive Letter Tails Review:</strong></p>
            <ul>
                <li>Some letters have loops above: b, d, f, h, k, l, t</li>
                <li>Some letters have loops below: g, j, p, q, y, z</li>
                <li>Some letters have curves: c, e, m, n, o, r, s, u, v, w, x</li>
                <li>Remember to connect your letters smoothly!</li>
            </ul>
            <p><strong>Spacing Rules:</strong></p>
            <ul>
                <li>Letters within a word: close together (no space)</li>
                <li>Between words: one finger space</li>
                <li>Between sentences: two finger spaces or one space after the period</li>
                <li>Lines of writing: leave the same height as your lowercase letters</li>
            </ul>
            <p><strong>Dictation Accuracy Checklist:</strong></p>
            <ul>
                <li>✓ Did you hear every word correctly?</li>
                <li>✓ Did you write every letter correctly?</li>
                <li>✓ Did you use correct punctuation?</li>
                <li>✓ Did you leave proper spaces?</li>
                <li>✓ Does your writing sit on the line?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Cursive Tails</div>
                <p>The letter 'g' has a tail that loops below the line. The letter 'b' has a loop that goes above. Practice makes perfect loops!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Space Invaders</div>
                <p>Watch out for "space invaders" - words that are too close together or too far apart. Your finger is the perfect measuring tool!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Double Check</div>
                <p>Before you say "I'm done," read your work out loud. Does every sentence make sense? Does every word look right?</p>
            </div>
        `,
        taskInstructions: "Complete the final assessment showing your best cursive writing, proper spacing, and dictation accuracy.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cursive Letter Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these letters and words in cursive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Lowercase letters with loops above: b, d, f, h, k, l, t</div>
                        <div class="cursive-line" style="height: 40px; border-bottom: 2px dotted #ccc; margin: 5px 0;"></div>
                        
                        <div style="margin-top: 10px;">Lowercase letters with loops below: g, j, p, q, y, z</div>
                        <div class="cursive-line" style="height: 40px; border-bottom: 2px dotted #ccc; margin: 5px 0;"></div>
                        
                        <div style="margin-top: 10px;">Write the word: "The brown dog jumps high"</div>
                        <div class="cursive-line" style="height: 40px; border-bottom: 2px dotted #ccc; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Spacing Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Copy this sentence with correct spacing between words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Original:</strong> "My sister has a new red bicycle."</div>
                        <div><strong>Your copy:</strong> <span class="answer-space" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                        <div style="margin-top: 10px;"><strong>Check:</strong> Did you leave a finger space between each word? □ Yes □ No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Final Dictation Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Listen carefully as your teacher reads each sentence. Write them in cursive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Sentence 1:</strong></div>
                        <div class="cursive-line" style="height: 40px; border-bottom: 2px dotted #ccc; margin: 5px 0;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Sentence 2:</strong></div>
                        <div class="cursive-line" style="height: 40px; border-bottom: 2px dotted #ccc; margin: 5px 0;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Sentence 3:</strong></div>
                        <div class="cursive-line" style="height: 40px; border-bottom: 2px dotted #ccc; margin: 5px 0;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Sentence 4 (Challenge):</strong></div>
                        <div class="cursive-line" style="height: 40px; border-bottom: 2px dotted #ccc; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Rate your own work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My cursive letters are: ○ Neat and clear ○ Mostly good ○ Need more practice</div>
                        <div style="margin-top: 5px;">My spacing between words is: ○ Just right ○ Sometimes too big/small ○ Need more practice</div>
                        <div style="margin-top: 5px;">My dictation accuracy is: ○ All correct ○ A few mistakes ○ Many mistakes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Celebration!</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write one thing you are proud of learning in Grade 2 Literacy:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Congratulations on completing Grade 2 Literacy! Show your family your cursive writing and read them a story from your favorite book.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek10);
    console.log("grade2-literacy-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek10);
    console.log("grade2-literacy-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek10',
        metadata: grade2LiteracyWeek10.metadata,
        days: grade2LiteracyWeek10
    });
    console.log("grade2-literacy-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek10 = grade2LiteracyWeek10;
console.log("grade2-literacy-week10.js loaded and registered successfully");