// Grade 4 Literacy - Term 2 Week 3 Data
const grade4LiteracyWeek3 = {
    metadata: {
        grade: 4,
        subject: "Literacy",
        term: 2,
        week: 3,
        title: "Consonant Patterns & Syllables",
        description: "Exploring double consonants in longer words, -tch vs. -ch patterns, and -dge vs. -ge patterns"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics & Spelling",
        subtopic: "Double Consonants in Middle of Longer Words",
        lessonContent: `
            <p>Welcome to our spelling adventure! Today we'll learn a special rule about when to double consonants in two-syllable words.</p>
            <p><strong>Key Question:</strong> Why do some words like "rabbit" have double consonants, but others like "tiger" have only one?</p>
            <p><strong>The Double Consonant Rule:</strong></p>
            <p>In two-syllable words, look at the first syllable to decide if you need a double consonant!</p>
            <ul>
                <li><strong>Open Syllable (ends with a vowel sound):</strong> Use a <strong>single</strong> consonant</li>
                <li><strong>Closed Syllable (ends with a short vowel sound):</strong> Use a <strong>double</strong> consonant</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Single Consonant (Open Syllable)</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Double Consonant (Closed Syllable)</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">ti·ger → single 'g'</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">rab·bit → double 'b'</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">mu·sic → single 's'</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">din·ner → double 'n'</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">o·pen → single 'p'</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">lad·der → double 'd'</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">pa·per → single 'p'</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">hap·py → double 'p'</td>
                </tr>
            </table>
            <p><strong>How to Check:</strong> Say the word slowly. If the first syllable ends with a short vowel sound (like "ă" in rabbit), double the consonant that follows!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tiger"></i> Tiger Rule</div>
                <p>Ti·ger: The first syllable "ti" ends with the long vowel sound "ī" (open syllable). So we use a single 'g'! 🐅</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot"></i> Rabbit Rule</div>
                <p>Rab·bit: The first syllable "rab" ends with the short vowel sound "ă" (closed syllable). So we double the 'b'! 🐇</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ladder"></i> Ladder Rule</div>
                <p>Lad·der: First syllable "lad" ends with short "ă" → double the 'd'!</p>
            </div>
        `,
        taskInstructions: "Practice identifying open and closed syllables, then apply the double consonant rule.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Syllable Division</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Divide these words into syllables using a dot (•):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. rabbit → rab·bit</div>
                        <div>b. dinner → _____</div>
                        <div>c. tiger → _____</div>
                        <div>d. happy → _____</div>
                        <div>e. music → _____</div>
                        <div>f. ladder → _____</div>
                        <div>g. paper → _____</div>
                        <div>h. puppet → _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Spelling</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correctly spelled word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. tiger / tigger</div>
                        <div>b. rabit / rabbit</div>
                        <div>c. diner / dinner</div>
                        <div>d. hapy / happy</div>
                        <div>e. lader / ladder</div>
                        <div>f. super / supper</div>
                        <div>g. mitten / miten</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blank with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. We had a big ___________ (diner/dinner) last night.</div>
                        <div>b. The ___________ (tiger/tigger) has orange stripes.</div>
                        <div>c. She climbed the ___________ (lader/ladder) carefully.</div>
                        <div>d. My little ___________ (pupet/puppet) is very cute.</div>
                        <div>e. I feel ___________ (hapy/happy) when I play outside.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3 sentences using words with double consonants:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 two-syllable words in a book at home. Write each word, divide it into syllables, and circle whether it has a single or double consonant.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonics & Spelling",
        subtopic: "-tch vs. -ch Pattern",
        lessonContent: `
            <p>Today we'll learn an important spelling rule about the endings -tch and -ch!</p>
            <p><strong>Key Question:</strong> When do we use "tch" instead of just "ch" at the end of a word?</p>
            <p><strong>The -tch vs. -ch Rule:</strong></p>
            <ul>
                <li>Use <strong>-tch</strong> after a <strong>single short vowel</strong> at the end of a syllable</li>
                <li>Use <strong>-ch</strong> in all other cases</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Use -tch (after short vowel)</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Use -ch (other cases)</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">ca·tch (short 'ă')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">bea·ch (long 'ē')</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">pi·tch (short 'ĭ')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">cou·ch (digraph 'ou')</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">clu·tch (short 'ŭ')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">rea·ch (long 'ē')</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">ma·tch (short 'ă')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">ea·ch (long 'ē')</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">wi·tch (short 'ĭ')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">san·dwi·ch (two syllables)</td>
                </tr>
            </table>
            <p><strong>Memory Trick:</strong> "When the vowel says its short sound, TCH comes to town!"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baseball-ball"></i> Catch the Ball</div>
                <p>"Catch" has a short 'a' sound (like in "cat"), so we add TCH: ca·tch!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-umbrella-beach"></i> Beach Day</div>
                <p>"Beach" has a long 'e' sound (like "bee"), so we only use CH: bea·ch!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Witch or Which?</div>
                <p>"Witch" has a short 'i' sound → add TCH. "Which" has a different sound pattern!</p>
            </div>
        `,
        taskInstructions: "Practice identifying when to use -tch vs. -ch at the end of words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in -tch or -ch</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete each word with -tch or -ch:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. ca_____</div>
                        <div>b. bea_____</div>
                        <div>c. pi_____</div>
                        <div>d. cou_____</div>
                        <div>e. wi_____</div>
                        <div>f. lun_____</div>
                        <div>g. rea_____</div>
                        <div>h. clu_____</div>
                        <div>i. ea_____</div>
                        <div>j. ma_____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Correct Spelling</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correctly spelled word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. catch / cat ch</div>
                        <div>b. beach / beat ch</div>
                        <div>c. pitch / pich</div>
                        <div>d. couch / coutch</div>
                        <div>e. switch / swich</div>
                        <div>f. lunch / lun ch</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Completion</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with a word from the box:
                    <div style="background-color: #f5f5f5; padding: 10px; margin: 10px 0; text-align: center;">
                        <strong>Word Box:</strong> catch, beach, pitch, couch, witch, lunch, reach, match
                    </div>
                    <div style="margin-left: 20px;">
                        <div>a. Let's go to the ___________ to build sandcastles.</div>
                        <div>b. I can ___________ the ball with one hand!</div>
                        <div>c. The ___________ flew on her broomstick.</div>
                        <div>d. Please sit on the ___________.</div>
                        <div>e. Can you ___________ the book on the top shelf?</div>
                        <div>f. We ate ___________ at noon.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 2 sentences using -tch words and 2 sentences using -ch words:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Make a list of 5 -tch words and 5 -ch words you find around your house or in books. Write each word in a sentence.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonics & Spelling",
        subtopic: "-dge vs. -ge Pattern",
        lessonContent: `
            <p>Today we'll learn the rule for using -dge vs. -ge at the end of words!</p>
            <p><strong>Key Question:</strong> When do we use "dge" instead of just "ge" at the end of a word?</p>
            <p><strong>The -dge vs. -ge Rule:</strong></p>
            <ul>
                <li>Use <strong>-dge</strong> after a <strong>single short vowel</strong> at the end of a syllable</li>
                <li>Use <strong>-ge</strong> in all other cases (after long vowels, consonants, or two vowels)</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Use -dge (after short vowel)</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Use -ge (other cases)</th>
                 </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">ba·dge (short 'ă')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">lar·ge (has 'r' before)</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">bri·dge (short 'ĭ')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">ca·ge (long 'ā')</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">ju·dge (short 'ŭ')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">hu·ge (long 'ū')</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">fu·dge (short 'ŭ')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">sta·ge (long 'ā')</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">e·dge (short 'ĕ')</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">chan·ge (has 'n' before)</td>
                </tr>
            </table>
            <p><strong>Memory Trick:</strong> "Short vowel calls for DGE!"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Badge of Honor</div>
                <p>"Badge" has a short 'a' sound (like in "bat"), so we add DGE: ba·dge!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bridge"></i> Crossing the Bridge</div>
                <p>"Bridge" has a short 'i' sound → bri·dge uses DGE!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gavel"></i> The Judge</div>
                <p>"Judge" has a short 'u' sound → ju·dge uses DGE!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bird"></i> A Large Cage</div>
                <p>"Large" has an 'r' before the /j/ sound, so we use GE. "Cage" has a long 'a' sound, so we use GE!</p>
            </div>
        `,
        taskInstructions: "Practice identifying when to use -dge vs. -ge at the end of words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in -dge or -ge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete each word with -dge or -ge:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. ba_____</div>
                        <div>b. lar_____</div>
                        <div>c. bri_____</div>
                        <div>d. ca_____</div>
                        <div>e. ju_____</div>
                        <div>f. hu_____</div>
                        <div>g. fu_____</div>
                        <div>h. sta_____</div>
                        <div>i. e_____</div>
                        <div>j. chan_____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Correct Spelling</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correctly spelled word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. badge / bage</div>
                        <div>b. large / lardge</div>
                        <div>c. bridge / brige</div>
                        <div>d. cage / cadge</div>
                        <div>e. judge / juge</div>
                        <div>f. huge / hudg e</div>
                        <div>g. fudge / fuge</div>
                        <div>h. stage / stadge</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blank with the correct word from the box:
                    <div style="background-color: #f5f5f5; padding: 10px; margin: 10px 0; text-align: center;">
                        <strong>Word Box:</strong> badge, bridge, judge, fudge, cage, huge, edge, stage
                    </div>
                    <div style="margin-left: 20px;">
                        <div>a. The police officer wore a shiny ___________.</div>
                        <div>b. We walked across the old stone ___________.</div>
                        <div>c. The ___________ decided the winner of the contest.</div>
                        <div>d. I love chocolate ___________ candy!</div>
                        <div>e. The bird flew out of its open ___________.</div>
                        <div>f. An elephant is a ___________ animal.</div>
                        <div>g. Be careful near the ___________ of the cliff!</div>
                        <div>h. The singer walked onto the ___________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 2 sentences using -dge words and 2 sentences using -ge words:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Create a T-chart with two columns: -dge words and -ge words. Find or think of 5 words for each column and write a sentence for one word in each column.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4LiteracyWeek3);
    console.log("grade4-literacy-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4LiteracyWeek3);
    console.log("grade4-literacy-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4LiteracyWeek3',
        metadata: grade4LiteracyWeek3.metadata,
        days: grade4LiteracyWeek3
    });
    console.log("grade4-literacy-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4LiteracyWeek3 = grade4LiteracyWeek3;
console.log("grade4-literacy-week3.js loaded and registered successfully");