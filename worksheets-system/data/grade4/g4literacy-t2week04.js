// Grade 4 Literacy - Term 2 Week 4 Data
const grade4LiteracyWeek4 = {
    metadata: {
        grade: 4,
        subject: "Literacy",
        term: 2,
        week: 4,
        title: "Common Affixes & Base Words",
        description: "Exploring how to change y to i, and using prefixes (un-, re-, dis-, mis-) and suffixes (-ful, -less, -ly, -ness)"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Spelling & Word Study",
        subtopic: "Changing y to i",
        lessonContent: `
            <p>Welcome to our word study lesson! Today we'll learn an important spelling rule: what to do when a word ends with y and we want to add a suffix.</p>
            <p><strong>Key Question:</strong> What happens to the letter y when we add a suffix to a word?</p>
            <p><strong>The Rule:</strong> When a word ends with a consonant + y, change the y to i before adding a suffix (except for -ing).</p>
            <p><strong>Let's See It in Action:</strong></p>
            <ul>
                <li>happy → happier (change y to i, add -er)</li>
                <li>cry → cried (change y to i, add -ed)</li>
                <li>try → tries (change y to i, add -es)</li>
                <li>busy → busily (change y to i, add -ly)</li>
            </ul>
            <p><strong>The Exception:</strong> When adding -ing, keep the y!</p>
            <ul>
                <li>cry → crying (keep the y)</li>
                <li>try → trying (keep the y)</li>
                <li>fly → flying (keep the y)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Happy Changes</div>
                <p>Happy + ness = happiness (y changes to i)<br>Happy + ly = happily (y changes to i)<br>Happy + er = happier (y changes to i)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tear"></i> Cry Changes</div>
                <p>Cry + ed = cried (y changes to i)<br>Cry + es = cries (y changes to i)<br>Cry + ing = crying (y stays!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Trick</div>
                <p>Remember: "When adding a suffix, change y to i — unless you see -ing coming by!"</p>
            </div>
        `,
        taskInstructions: "Practice changing y to i when adding suffixes to base words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Change the y to i</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change each word by adding the suffix in parentheses. Remember to change y to i when needed:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. happy + ness = _________</div>
                        <div>b. cry + ed = _________</div>
                        <div>c. try + es = _________</div>
                        <div>d. busy + ly = _________</div>
                        <div>e. pretty + er = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The -ing Exception</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add -ing to these words (remember to keep the y!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. cry + ing = _________</div>
                        <div>b. fly + ing = _________</div>
                        <div>c. spy + ing = _________</div>
                        <div>d. try + ing = _________</div>
                        <div>e. hurry + ing = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blank with the correct form of the word in parentheses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She was the ___________ (happy) girl in the room.</div>
                        <div>b. The baby ___________ (cry) all night long.</div>
                        <div>c. He ___________ (try) his best on every test.</div>
                        <div>d. The birds were ___________ (fly) south for winter.</div>
                        <div>e. She ___________ (hurry) to catch the bus.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write two sentences using words that follow the "change y to i" rule:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write one sentence using a word with -ing (where the y stays):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 words in a book that end with y. Write what they would look like if you added -ed, -er, or -ness to each one.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Word Study",
        subtopic: "Prefixes: un-, re-, dis-, mis-",
        lessonContent: `
            <p>Today we'll learn about prefixes! A prefix is a word part added to the beginning of a base word that changes its meaning.</p>
            <p><strong>Key Rule:</strong> When you add a prefix, the spelling of the base word never changes!</p>
            <p><strong>Four Important Prefixes:</strong></p>
            <ol>
                <li><strong>un-</strong> (means "not" or "opposite of")</li>
                <li><strong>re-</strong> (means "again" or "back")</li>
                <li><strong>dis-</strong> (means "not" or "opposite of")</li>
                <li><strong>mis-</strong> (means "wrong" or "badly")</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>un + happy = unhappy (not happy)</li>
                <li>re + write = rewrite (write again)</li>
                <li>dis + like = dislike (not like)</li>
                <li>mis + spell = misspell (spell wrongly - the double s stays!)</li>
                <li>un + kind = unkind (not kind)</li>
                <li>re + play = replay (play again)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> The "Not" Prefixes</div>
                <p>Both un- and dis- can mean "not" or "opposite of":<br>
                un + fair = unfair (not fair)<br>
                dis + obey = disobey (not obey)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-redo-alt"></i> The "Again" Prefix</div>
                <p>re- means "again":<br>
                re + read = reread (read again)<br>
                re + build = rebuild (build again)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> The "Wrong" Prefix</div>
                <p>mis- means "wrong" or "badly":<br>
                mis + place = misplace (place wrongly/lose)<br>
                mis + behave = misbehave (behave badly)</p>
            </div>
        `,
        taskInstructions: "Practice adding prefixes to base words and understanding their meanings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Add the Prefix</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the correct prefix (un-, re-, dis-, or mis-) to each base word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. ___ + happy = _________</div>
                        <div>b. ___ + write = _________</div>
                        <div>c. ___ + like = _________</div>
                        <div>d. ___ + spell = _________</div>
                        <div>e. ___ + build = _________</div>
                        <div>f. ___ + behave = _________</div>
                        <div>g. ___ + fair = _________</div>
                        <div>h. ___ + read = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Meaning Match</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each word to its meaning:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>___ unhappy</div>
                                <div>___ rewrite</div>
                                <div>___ dislike</div>
                                <div>___ misspell</div>
                                <div>___ replay</div>
                                <div>___ misbehave</div>
                            </div>
                            <div>
                                <div>A. spell wrongly</div>
                                <div>B. not happy</div>
                                <div>C. not like</div>
                                <div>D. play again</div>
                                <div>E. write again</div>
                                <div>F. behave badly</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create New Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose a prefix and base word to create a word that fits each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I need to ___________ (write again) my spelling test.</div>
                        <div>b. It is ___________ (not kind) to tease others.</div>
                        <div>c. Please don't ___________ (behave badly) in class.</div>
                        <div>d. I ___________ (not agree) with your opinion.</div>
                        <div>e. Did you ___________ (place wrongly) your homework?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence using a word with un- and one sentence using a word with re-:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write one sentence using a word with dis- and one sentence using a word with mis-:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 words in a book or magazine that have prefixes (un-, re-, dis-, mis-). Write each word and what it means.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Word Study",
        subtopic: "Suffixes: -ful, -less, -ly, -ness",
        lessonContent: `
            <p>Today we'll learn about suffixes! A suffix is a word part added to the end of a base word that changes its meaning.</p>
            <p><strong>Key Rules:</strong></p>
            <ul>
                <li>Add suffixes directly to base words</li>
                <li>If the base ends in y, change y to i (unless adding -ing)</li>
                <li>If the base ends in e, keep the e</li>
            </ul>
            <p><strong>Four Important Suffixes:</strong></p>
            <ol>
                <li><strong>-ful</strong> (means "full of")</li>
                <li><strong>-less</strong> (means "without")</li>
                <li><strong>-ly</strong> (means "in a certain way"; turns adjectives into adverbs)</li>
                <li><strong>-ness</strong> (means "state or quality of"; turns adjectives into nouns)</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>care + ful = careful (full of care)</li>
                <li>hope + less = hopeless (without hope)</li>
                <li>quick + ly = quickly (in a quick way)</li>
                <li>sad + ness = sadness (state of being sad)</li>
                <li>color + ful = colorful (full of color)</li>
                <li>help + less = helpless (without help)</li>
            </ul>
            <p><strong>Special Cases to Remember:</strong></p>
            <ul>
                <li>happy + ness = happiness (change y to i)</li>
                <li>lazy + ly = lazily (change y to i)</li>
                <li>like + ly = likely (keep the e)</li>
                <li>nice + ness = niceness (keep the e)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> -ful: Full of Something</div>
                <p>joy + ful = joyful (full of joy)<br>
                wonder + ful = wonderful (full of wonder)<br>
                thank + ful = thankful (full of thanks)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ban"></i> -less: Without Something</div>
                <p>end + less = endless (without end)<br>
                fear + less = fearless (without fear)<br>
                home + less = homeless (without a home)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> -ly: How Something Is Done</div>
                <p>slow + ly = slowly (in a slow way)<br>
                quiet + ly = quietly (in a quiet way)<br>
                happy + ly = happily (change y to i!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> -ness: A State or Quality</div>
                <p>kind + ness = kindness (state of being kind)<br>
                dark + ness = darkness (state of being dark)<br>
                sad + ness = sadness (state of being sad)</p>
            </div>
        `,
        taskInstructions: "Practice adding suffixes to base words and using them in sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Add the Suffix</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the correct suffix (-ful, -less, -ly, or -ness) to each base word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. care + _________ = careful</div>
                        <div>b. hope + _________ = hopeless</div>
                        <div>c. quick + _________ = quickly</div>
                        <div>d. sad + _________ = sadness</div>
                        <div>e. color + _________ = colorful</div>
                        <div>f. help + _________ = helpless</div>
                        <div>g. slow + _________ = slowly</div>
                        <div>h. kind + _________ = kindness</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Suffix</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each word by adding -ful or -less:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A child without parents is home______.</div>
                        <div>b. A painting full of color is color______.</div>
                        <div>c. A person without fear is fear______.</div>
                        <div>d. A gift full of thought is thought______.</div>
                        <div>e. A night without end is end______.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Change Adjectives to Adverbs (-ly)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Change each adjective to an adverb by adding -ly (remember to change y to i when needed):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. slow → _________</div>
                        <div>b. happy → _________</div>
                        <div>c. quiet → _________</div>
                        <div>d. lazy → _________</div>
                        <div>e. careful → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Nouns with -ness</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Add -ness to each adjective to make a noun:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. kind → _________</div>
                        <div>b. happy → _________ (remember the y rule!)</div>
                        <div>c. sad → _________</div>
                        <div>d. dark → _________</div>
                        <div>e. weak → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write one sentence using a word with -ful and one sentence using a word with -less:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Write one sentence using a word with -ly and one sentence using a word with -ness:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences. Each sentence must use a different word ending with -ful, -less, -ly, or -ness.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4LiteracyWeek4);
    console.log("grade4-literacy-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4LiteracyWeek4);
    console.log("grade4-literacy-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4LiteracyWeek4',
        metadata: grade4LiteracyWeek4.metadata,
        days: grade4LiteracyWeek4
    });
    console.log("grade4-literacy-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4LiteracyWeek4 = grade4LiteracyWeek4;
console.log("grade4-literacy-week4.js loaded and registered successfully");