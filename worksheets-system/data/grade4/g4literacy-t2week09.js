// Grade 4 Literacy - Term 2 Week 9 Data
const grade4LiteracyWeek9 = {
    metadata: {
        grade: 4,
        subject: "Literacy",
        term: 2,
        week: 9,
        title: "Affixes & Base Words – Using Sentence Connectors",
        description: "Exploring changing y to i, prefixes, suffixes, and using sentence connectors but, or, and because"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Affixes & Base Words",
        subtopic: "Changing y to i",
        lessonContent: `
            <p>Welcome to our literacy lesson! Today we'll learn about an important spelling rule: changing y to i when adding endings!</p>
            <p><strong>Key Question:</strong> What happens to words ending in 'y' when we add endings like -ed, -er, or -est?</p>
            <p><strong>The Rule:</strong> When a word ends with a consonant + y, change the y to i before adding -ed, -er, -est, or -es.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li><strong>happy</strong> → happier (change y to i, add -er)</li>
                <li><strong>cry</strong> → cried (change y to i, add -ed)</li>
                <li><strong>carry</strong> → carried (change y to i, add -ed)</li>
                <li><strong>busy</strong> → busier (change y to i, add -er)</li>
            </ul>
            <p><strong>Sentence Connector of the Day: BUT</strong></p>
            <p>The word <strong>but</strong> shows contrast - it connects two ideas that are different or opposite.</p>
            <p><strong>Example:</strong> She was happier yesterday, but today she cried.</p>
            <p><em>This sentence shows a change from feeling happy to feeling sad.</em></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Happy vs. Sad</div>
                <p>I was busier last week, but this week I have more free time.</p>
                <p><em>Two contrasting ideas connected with "but"</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Spelling Tip</div>
                <p>Remember: cry → cried (not cryed!). The y changes to i before adding -ed.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Using "But"</div>
                <p>Think of "but" as a bridge between two opposite ideas. "She studied hard, but she still felt nervous."</p>
            </div>
        `,
        taskInstructions: "Practice changing y to i and use 'but' to connect contrasting sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Changing y to i Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change these words by adding the ending in parentheses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. happy + er = _________</div>
                        <div>b. cry + ed = _________</div>
                        <div>c. carry + ed = _________</div>
                        <div>d. busy + er = _________</div>
                        <div>e. dry + ed = _________</div>
                        <div>f. worry + ed = _________</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Combining with "But"</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Combine each pair of contrasting sentences into ONE sentence using the word "but":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She was happier yesterday. Today she cried.</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">b. He carried the heavy box. He was very tired.</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">c. I am busier in the morning. I have free time in the afternoon.</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">d. The puppy cried all night. He is happy now.</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two original sentences using "but" with a word that changes y to i:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find or write 5 pairs of contrasting ideas. Combine each pair into one sentence using 'but'.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Affixes & Base Words",
        subtopic: "Prefixes (un-, re-, dis-, mis-)",
        lessonContent: `
            <p>Today we'll learn about prefixes - letters added to the beginning of words that change their meaning!</p>
            <p><strong>Key Question:</strong> How can adding a few letters to the beginning of a word completely change its meaning?</p>
            <p><strong>What is a Prefix?</strong> A prefix is a group of letters added to the beginning of a base word to create a new word with a different meaning.</p>
            <p><strong>Prefixes We'll Learn Today:</strong></p>
            <ul>
                <li><strong>un-</strong> = not or opposite of (happy → unhappy = not happy)</li>
                <li><strong>re-</strong> = again (write → rewrite = write again)</li>
                <li><strong>dis-</strong> = not or opposite of (like → dislike = not like)</li>
                <li><strong>mis-</strong> = wrong or badly (spell → misspell = spell wrongly)</li>
            </ul>
            <p><strong>Sentence Connector of the Day: OR</strong></p>
            <p>The word <strong>or</strong> offers a choice between two options. It connects two possible actions or ideas.</p>
            <p><strong>Example:</strong> You can rewrite the word, or I will help you.</p>
            <p><em>This sentence gives a choice: either you do it, or I will help.</em></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ul"></i> Prefix Meanings</div>
                <p>unhappy = un (not) + happy (happy) = not happy<br>
                rewrite = re (again) + write (write) = write again<br>
                dislike = dis (not) + like (like) = not like<br>
                misspell = mis (wrong) + spell (spell) = spell wrongly</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code-branch"></i> Using "Or"</div>
                <p>You can fix the misspelled word, or you can ask for help.<br>
                I can rewrite my sentence, or I can leave it as is.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Trick</div>
                <p>un- sounds like "uh-oh" (something wrong!)<br>
                re- sounds like "repeat" (do it again)<br>
                dis- like "dismiss" (send away/not include)<br>
                mis- like "mistake" (something wrong!)</p>
            </div>
        `,
        taskInstructions: "Learn prefixes and write compound sentences using 'or' to offer choices.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Prefixes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the correct prefix (un-, re-, dis-, or mis-) to each base word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. _____happy = _________</div>
                        <div>b. _____write = _________</div>
                        <div>c. _____like = _________</div>
                        <div>d. _____spell = _________</div>
                        <div>e. _____do = _________ (do again)</div>
                        <div>f. _____obey = _________ (not obey)</div>
                        <div>g. _____place = _________ (place wrongly)</div>
                        <div>h. _____agree = _________ (not agree)</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence using a word from the box and "or":
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <em>Word box: unhappy, rewrite, dislike, misspell</em>
                    </div>
                    <div style="margin-left: 20px; margin-top: 15px;">
                        <div>a. You can _________ the word, _________ use a dictionary.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">b. I feel _________ today, _________ I might go for a walk.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">c. You can _________ your vegetables, _________ you can eat them first.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">d. I might _________ this word, _________ I will check carefully.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Offer a Choice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two original sentences offering a choice. Use "or" and include a prefixed word:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Write 4 sentences using 'or' with each of these words: unhappy, rewrite, dislike, misspell.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Affixes & Base Words",
        subtopic: "Suffixes (-ful, -less, -ly, -ness)",
        lessonContent: `
            <p>Today we'll learn about suffixes - letters added to the end of words that change their meaning!</p>
            <p><strong>Key Question:</strong> How can adding a few letters to the end of a word change its meaning or how it's used?</p>
            <p><strong>What is a Suffix?</strong> A suffix is a group of letters added to the end of a base word to create a new word with a different meaning.</p>
            <p><strong>Suffixes We'll Learn Today:</strong></p>
            <ul>
                <li><strong>-ful</strong> = full of (care + ful = careful = full of care)</li>
                <li><strong>-less</strong> = without (hope + less = hopeless = without hope)</li>
                <li><strong>-ly</strong> = in a certain way (quick + ly = quickly = in a quick way)</li>
                <li><strong>-ness</strong> = state or quality of (sad + ness = sadness = the state of being sad)</li>
            </ul>
            <p><strong>Sentence Connector of the Day: BECAUSE</strong></p>
            <p>The word <strong>because</strong> explains the reason or cause for something. It answers the question "why?"</p>
            <p><strong>Example:</strong> He was hopeless because he lost his map.</p>
            <p><em>The reason he was hopeless is that he lost his map.</em></p>
            <p><strong>Example:</strong> She felt sadness because her friend moved away.</p>
            <p><em>The reason for her sadness is that her friend moved away.</em></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Suffix Meanings</div>
                <p>careful = full of care (paying attention)<br>
                hopeless = without hope (no hope left)<br>
                quickly = in a quick way (fast)<br>
                sadness = the state of being sad</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Using "Because"</div>
                <p>She was careful because the floor was wet.<br>
                He ran quickly because he was late.<br>
                They felt hopeless because the game was almost over.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-link"></i> Connecting Cause & Effect</div>
                <p>"Because" is like a bridge between a feeling/action and its reason. "[Feeling/Action] because [reason]."</p>
            </div>
        `,
        taskInstructions: "Learn suffixes and write 'because' sentences explaining feelings or qualities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Suffixes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the correct suffix (-ful, -less, -ly, or -ness) to each base word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. care + _________ = careful</div>
                        <div>b. hope + _________ = hopeless</div>
                        <div>c. quick + _________ = quickly</div>
                        <div>d. sad + _________ = sadness</div>
                        <div>e. kind + _________ = _________ (state of being kind)</div>
                        <div>f. slow + _________ = _________ (in a slow way)</div>
                        <div>g. help + _________ = _________ (without help)</div>
                        <div>h. color + _________ = _________ (full of color)</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write "Because" Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a sentence explaining the reason for each situation. Use "because" and the given word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Word: <strong>hopeless</strong> - He lost his map.</div>
                        <div>Example: He was hopeless because he lost his map.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">b. Word: <strong>careful</strong> - The floor is slippery.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">c. Word: <strong>sadness</strong> - Her goldfish died.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;">d. Word: <strong>quickly</strong> - The bell was about to ring.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each suffix word below, write a "because" sentence showing cause:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. <strong>kindness</strong> (state of being kind)</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div style="margin-top: 15px;">b. <strong>fearless</strong> (without fear)</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div style="margin-top: 15px;">c. <strong>gently</strong> (in a gentle way)</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in the blank with the correct suffix word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She walked _________ (slow + ly) because her feet hurt.</div>
                        <div>b. He felt _________ (hope + less) because the team was losing.</div>
                        <div>c. Her _________ (kind + ness) made everyone feel welcome.</div>
                        <div>d. Be _________ (care + ful) because the knife is sharp.</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write 4 sentences using 'because' with each of these suffix words: careful, hopeless, quickly, sadness.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4LiteracyWeek9);
    console.log("grade4-literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4LiteracyWeek9);
    console.log("grade4-literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4LiteracyWeek9',
        metadata: grade4LiteracyWeek9.metadata,
        days: grade4LiteracyWeek9
    });
    console.log("grade4-literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4LiteracyWeek9 = grade4LiteracyWeek9;
console.log("grade4-literacy-week9.js loaded and registered successfully");