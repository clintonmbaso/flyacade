// Grade 4 Literacy - Term 2 Week 7 Data
const grade4LiteracyWeek7 = {
    metadata: {
        grade: 4,
        subject: "Literacy",
        term: 2,
        week: 7,
        title: "Short & Long Vowel Patterns – Building Basic Sentences",
        description: "Exploring doubling consonants, silent e with vowel suffixes, vowel teams, and building simple to complex sentences"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics & Spelling",
        subtopic: "Doubling Consonants (1-1-1 Rule)",
        lessonContent: `
            <p>Welcome to our week on vowel patterns and sentence building! Today we'll learn the 1-1-1 doubling rule for verbs.</p>
            <p><strong>Key Question:</strong> When do we double the consonant before adding -ing?</p>
            <p><strong>Introduction:</strong> The 1-1-1 Rule helps us know when to double the last consonant in a word before adding a vowel suffix like -ing or -ed.</p>
            <p><strong>The 1-1-1 Rule:</strong> Double the final consonant when ALL three are true:</p>
            <ol>
                <li><strong>1</strong> syllable in the word</li>
                <li><strong>1</strong> vowel before the final consonant</li>
                <li><strong>1</strong> consonant at the end</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>run → running (1 syllable, 1 vowel 'u', 1 consonant 'n')</li>
                <li>hop → hopping (1 syllable, 1 vowel 'o', 1 consonant 'p')</li>
                <li>big → bigger (1 syllable, 1 vowel 'i', 1 consonant 'g')</li>
                <li>sit → sitting (1 syllable, 1 vowel 'i', 1 consonant 't')</li>
            </ul>
            <p><strong>Sentence Goal:</strong> Write simple sentences with a subject + action verb.</p>
            <p><strong>Sentence Frame:</strong> The ___ is ____ing.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Example Sentence</div>
                <p>The dog is running.</p>
                <p><em>Subject: The dog &nbsp;|&nbsp; Action verb: is running</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Another Example</div>
                <p>The frog is hopping.</p>
                <p><em>Subject: The frog &nbsp;|&nbsp; Action verb: is hopping</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> The 1-1-1 Check</div>
                <p>Let's check "run": 1 syllable ✓ | 1 vowel 'u' ✓ | 1 consonant 'n' ✓ → Double the n! → running</p>
            </div>
        `,
        taskInstructions: "Apply the 1-1-1 rule to double consonants and write present-tense sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Apply the 1-1-1 Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add -ing to each base verb. Double the consonant if needed:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>run → _________</div>
                        <div>hop → _________</div>
                        <div>sit → _________</div>
                        <div>clap → _________</div>
                        <div>swim → _________</div>
                        <div>stop → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentence Frame</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the sentence frame <strong>"The ___ is ____ing."</strong> to write sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: The <u>dog</u> is <u>running</u>.</div>
                        <div style="margin-top: 10px;">a. The _________ is hopping.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b. The _________ is sitting.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c. The _________ is clapping.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d. The _________ is swimming.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e. The _________ is stopping.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 3 original sentences using the 1-1-1 rule. Use a different doubled verb in each sentence:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 action words at home (like run, hop, jump). Write each word in a sentence using the -ing form. Remember the 1-1-1 rule!",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonics & Spelling",
        subtopic: "Silent e + Vowel Suffix (Drop-e Rule)",
        lessonContent: `
            <p>Today we'll learn the drop-e rule! When adding a vowel suffix to a word that ends with silent e, we drop the e.</p>
            <p><strong>Key Question:</strong> What happens to the silent e when we add -ing?</p>
            <p><strong>The Drop-E Rule:</strong> When a word ends with a silent e, DROP the e before adding a vowel suffix (-ing, -ed, -er, -est).</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>make → making (drop the e, add -ing)</li>
                <li>hope → hoping (drop the e, add -ing)</li>
                <li>shine → shining (drop the e, add -ing)</li>
                <li>bake → baking (drop the e, add -ing)</li>
                <li>ride → riding (drop the e, add -ing)</li>
            </ul>
            <p><strong>Remember:</strong> We only drop the e for vowel suffixes (a, e, i, o, u). For consonant suffixes like -ment, we keep the e (move → movement).</p>
            <p><strong>Sentence Goal:</strong> Combine two short ideas using "and."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cake-candles"></i> Model Sentence 1</div>
                <p>She is making a cake, and he is hoping for a bite.</p>
                <p><em>(making from make + hoping from hope)</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Model Sentence 2</div>
                <p>The sun is shining, and we are riding our bikes.</p>
                <p><em>(shining from shine + riding from ride)</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Drop-E Reminder</div>
                <p>make + ing = making (the e disappears!)<br>
                hope + ing = hoping (goodbye e!)<br>
                shine + ing = shining (e is gone!)</p>
            </div>
        `,
        taskInstructions: "Apply the drop-e rule and join sentences using 'and.'",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Apply the Drop-E Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Drop the silent e and add -ing to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>make → _________</div>
                        <div>hope → _________</div>
                        <div>shine → _________</div>
                        <div>bake → _________</div>
                        <div>ride → _________</div>
                        <div>smile → _________</div>
                        <div>write → _________</div>
                        <div>dance → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Join Two Sentences with "and"</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Combine each pair of sentences using the word "and". Use a drop-e word in each combined sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: She is making a cake. He is hoping for a bite.</div>
                        <div style="margin-left: 20px; font-style: italic;">→ She is making a cake, and he is hoping for a bite.</div>
                        <div style="margin-top: 10px;">a. She is baking cookies. He is riding his bike.</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>b. The sun is shining. We are dancing outside.</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>c. Mom is making dinner. Dad is writing a letter.</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 2 sentences that use "and" to connect two ideas. Each sentence must include a drop-e word (-ing form):
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences using the drop-e rule. Underline the drop-e word in each sentence. Bonus: Use 'and' to make one sentence longer!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonics & Spelling",
        subtopic: "Vowel Teams (ai/ay, ee/ea, oa/ow)",
        lessonContent: `
            <p>Today we'll explore vowel teams! When two vowels work together to make one sound, we call them a vowel team or vowel digraph.</p>
            <p><strong>Key Question:</strong> How do vowel teams like ai, ay, ee, ea, oa, and ow help us read and spell?</p>
            <p><strong>Vowel Teams We'll Learn:</strong></p>
            <ul>
                <li><strong>ai/ay</strong> → say the long 'a' sound (rain, play, day, mail)</li>
                <li><strong>ee/ea</strong> → say the long 'e' sound (bee, tree, eat, sea, leaf)</li>
                <li><strong>oa/ow</strong> → say the long 'o' sound (boat, coat, grow, snow, row)</li>
            </ul>
            <p><strong>Remember the saying:</strong> "When two vowels go walking, the first one does the talking!" (The first vowel says its long sound, the second is silent.)</p>
            <p><strong>Sentence Goal:</strong> Write sentences with a "when" clause at the beginning.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Model Sentence</div>
                <p>When the rain stops, we will play outside.</p>
                <p><em>(rain has vowel team 'ai')</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Another Example</div>
                <p>When we see a bee, we will run to the tree.</p>
                <p><em>(bee has 'ee', tree has 'ee')</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sailboat"></i> More Examples</div>
                <p>When the boat sails away, we will wave goodbye.<br>
                When the snow falls, we will build a fort.<br>
                When we eat our meal, we will read a book.</p>
            </div>
        `,
        taskInstructions: "Match vowel-team words to clause starters and write 'when' sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Vowel Team</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the vowel team in each word. Write whether it's ai/ay, ee/ea, or oa/ow:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>rain → _________ (vowel team: ____)</div>
                        <div>play → _________ (vowel team: ____)</div>
                        <div>bee → _________ (vowel team: ____)</div>
                        <div>eat → _________ (vowel team: ____)</div>
                        <div>boat → _________ (vowel team: ____)</div>
                        <div>snow → _________ (vowel team: ____)</div>
                        <div>leaf → _________ (vowel team: ____)</div>
                        <div>grow → _________ (vowel team: ____)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Half-Match</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match the beginning of each sentence (clause starter) with the correct ending. Then write the complete sentence:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <strong>Beginning (When clause)</strong><br>
                            When the rain stops,<br>
                            When we see a bee,<br>
                            When the boat is ready,<br>
                            When the snow melts,<br>
                        </div>
                        <div>
                            <strong>Ending</strong><br>
                            we will stay away from it.<br>
                            we will sail across the lake.<br>
                            we will go play outside.<br>
                            spring will begin to grow.<br>
                        </div>
                    </div>
                    <div style="margin-top: 15px;">
                        <div>Complete sentence 1: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Complete sentence 2: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Complete sentence 3: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Complete sentence 4: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own "When" Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 2 original sentences that begin with "When". Use at least one vowel-team word (ai/ay, ee/ea, oa/ow) in each sentence:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vowel Team Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 2-3 sentences about a rainy day or a sunny day at the beach. Use at least 3 different vowel-team words:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences that begin with 'When'. Use a different vowel team word (ai/ay, ee/ea, oa/ow) in each sentence. Underline the vowel-team words.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4LiteracyWeek7);
    console.log("grade4-literacy-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4LiteracyWeek7);
    console.log("grade4-literacy-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4LiteracyWeek7',
        metadata: grade4LiteracyWeek7.metadata,
        days: grade4LiteracyWeek7
    });
    console.log("grade4-literacy-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4LiteracyWeek7 = grade4LiteracyWeek7;
console.log("grade4-literacy-week7.js loaded and registered successfully");