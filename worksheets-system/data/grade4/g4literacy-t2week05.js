// Grade 4 Literacy - Term 2 Week 5 Data
const grade4LiteracyWeek5 = {
    metadata: {
        grade: 4,
        subject: "Literacy",
        term: 2,
        week: 5,
        title: "Advanced & Tricky Patterns",
        description: "Exploring -tion/-sion endings, plural rules, and homophones"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Spelling Patterns",
        subtopic: "Words ending in -tion / -sion",
        lessonContent: `
            <p>Welcome! Today we'll learn about two very common word endings: -tion and -sion. These endings turn action words into nouns!</p>
            <p><strong>Key Question:</strong> How do you know whether to use -tion or -sion?</p>
            <p><strong>Introduction:</strong> When we add -tion or -sion to a base word, we create a new word that means "the act of" doing something. For example, "act" becomes "action" (the act of doing something).</p>
            <p><strong>The -tion Rule:</strong></p>
            <ul>
                <li>Use <strong>-tion</strong> when the base word ends in <strong>t, te, or has a sound change</strong></li>
                <li>invent → invention</li>
                <li>act → action</li>
                <li>complete → completion</li>
                <li>protect → protection</li>
            </ul>
            <p><strong>The -sion Rule:</strong></p>
            <ul>
                <li>Use <strong>-sion</strong> when the base word ends in <strong>d, de, se, or s</strong></li>
                <li>expand → expansion</li>
                <li>decide → decision</li>
                <li>confuse → confusion</li>
                <li>admit → admission</li>
            </ul>
            <p><strong>Remember:</strong> Both endings sound like "shun" at the end of the word!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Sound Change Alert</div>
                <p>Some base words change their sound when we add -tion. For example, "describe" becomes "description" (the 'b' changes to 'p' sound).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Trick</div>
                <p>Think: "T for t-endings, S for d/se/s-endings!" -tion goes with t, -sion goes with d or s sounds.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> Common Words</div>
                <p>You already know many -tion words: attention, question, direction, vacation! Watch for the base word hiding inside.</p>
            </div>
        `,
        taskInstructions: "Practice identifying and spelling -tion and -sion words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add -tion or -sion to each base word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Base Word</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Add -tion or -sion</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">New Word</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">act</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">decide</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">expand</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">invent</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">confuse</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct -tion or -sion word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The teacher gave clear ______________ (instruct) for the test.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>B. The family made a ______________ (decide) to go on vacation.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>C. The ______________ (celebrate) lasted all night.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>D. There was great ______________ (confuse) about the game rules.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sort the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these words into the correct column: action, decision, invention, expansion, attention, confusion
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Words ending in -tion</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Words ending in -sion</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write two sentences: one using a -tion word and one using a -sion word.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find five -tion or -sion words in a book or magazine. Write each word and the sentence it appears in.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Spelling Patterns",
        subtopic: "Plurals: s, es, ies, irregular",
        lessonContent: `
            <p>Today we'll master plural rules! Plurals show us when there is more than one of something.</p>
            <p><strong>Key Question:</strong> How do you change a word from one to many?</p>
            <p><strong>Rule 1: Just add -s</strong> (for most words)</p>
            <ul>
                <li>cat → cats</li>
                <li>dog → dogs</li>
                <li>book → books</li>
                <li>teacher → teachers</li>
            </ul>
            <p><strong>Rule 2: Add -es</strong> (for words ending in ch, sh, s, x, z)</p>
            <ul>
                <li>box → boxes</li>
                <li>wish → wishes</li>
                <li>bus → buses</li>
                <li>lunch → lunches</li>
            </ul>
            <p><strong>Rule 3: Change y to i and add -es</strong> (for words ending in consonant + y)</p>
            <ul>
                <li>baby → babies</li>
                <li>lady → ladies</li>
                <li>candy → candies</li>
                <li>fly → flies</li>
            </ul>
            <p><strong>Exception:</strong> If the word ends in vowel + y, just add -s (boy → boys, toy → toys)</p>
            <p><strong>Rule 4: Irregular Plurals</strong> (must memorize!)</p>
            <ul>
                <li>child → children</li>
                <li>mouse → mice</li>
                <li>foot → feet</li>
                <li>tooth → teeth</li>
                <li>person → people</li>
                <li>goose → geese</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat"></i> Simple -s Rule</div>
                <p>Most nouns just add -s. Think of all the words you already know! "One cat, two cats. One teacher, ten teachers."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> The -es Rule</div>
                <p>Words ending with hissing sounds (ch, sh, s, x, z) need -es to make the plural easier to say. Say "bus-es" vs "buss" - see the difference?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby-carriage"></i> Y to IES</div>
                <p>Watch out for the y! In "baby," the y changes to i before adding -es. But "toy" keeps the y because there's a vowel before it (o).</p>
            </div>
        `,
        taskInstructions: "Practice applying all plural rules including irregular forms.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Add -s or -es</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the plural form of each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>box → ___________</div>
                        <div>wish → ___________</div>
                        <div>cat → ___________</div>
                        <div>lunch → ___________</div>
                        <div>bus → ___________</div>
                        <div>dog → ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Change Y to I and Add -ES</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the plural form of each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>baby → ___________</div>
                        <div>candy → ___________</div>
                        <div>fly → ___________</div>
                        <div>lady → ___________</div>
                        <div>party → ___________</div>
                        <div>story → ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Irregular Plurals</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the plural form of these irregular words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>child → ___________</div>
                        <div>mouse → ___________</div>
                        <div>foot → ___________</div>
                        <div>tooth → ___________</div>
                        <div>person → ___________</div>
                        <div>goose → ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete each sentence with the correct plural form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Three ___________ (child) played in the park.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. I ate two ___________ (sandwich) for lunch.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. The ___________ (baby) were sleeping quietly.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. We saw five ___________ (mouse) in the field.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>E. She bought new ___________ (shoe) at the store.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sort by Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Sort these words by which plural rule they follow: boxes, babies, feet, cats, lunches, children, candies, mice, wishes, teeth
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Add -s: ___________</div>
                        <div>Add -es: ___________</div>
                        <div>Y → ies: ___________</div>
                        <div>Irregular: ___________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look around your house and write down 10 objects. Write the plural form for each one.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Spelling & Meaning",
        subtopic: "Homophones",
        lessonContent: `
            <p>Today we'll explore homophones - words that sound the same but have different spellings and meanings!</p>
            <p><strong>Key Question:</strong> How can two words sound identical but mean completely different things?</p>
            <p><strong>Introduction:</strong> Homophones are tricky because you can't hear the difference - you have to know which spelling matches which meaning from the sentence.</p>
            <p><strong>Common Homophone Pairs:</strong></p>
            
            <p><strong>1. their / there / they're</strong></p>
            <ul>
                <li><strong>their</strong> = belongs to them ("Their house is blue.")</li>
                <li><strong>there</strong> = a place ("The book is over there.")</li>
                <li><strong>they're</strong> = they are ("They're coming to dinner.")</li>
            </ul>
            
            <p><strong>2. to / too / two</strong></p>
            <ul>
                <li><strong>to</strong> = toward or for ("I'm going to school.")</li>
                <li><strong>too</strong> = also or very ("I want to go too!" or "It's too hot.")</li>
                <li><strong>two</strong> = the number 2 ("I have two brothers.")</li>
            </ul>
            
            <p><strong>3. your / you're</strong></p>
            <ul>
                <li><strong>your</strong> = belongs to you ("Is this your pencil?")</li>
                <li><strong>you're</strong> = you are ("You're my best friend.")</li>
            </ul>
            
            <p><strong>4. its / it's</strong></p>
            <ul>
                <li><strong>its</strong> = belongs to it ("The dog wagged its tail.")</li>
                <li><strong>it's</strong> = it is or it has ("It's a beautiful day.")</li>
            </ul>
            
            <p><strong>5. peace / piece</strong></p>
            <ul>
                <li><strong>peace</strong> = calm, quiet, no war ("We want world peace.")</li>
                <li><strong>piece</strong> = a part of something ("May I have a piece of cake?")</li>
            </ul>
            
            <p><strong>6. hear / here</strong></p>
            <ul>
                <li><strong>hear</strong> = to listen or perceive sound ("I hear music.")</li>
                <li><strong>here</strong> = this place ("Please come here.")</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Memory Tricks</div>
                <p>"There" has "here" in it (t-here) - both are places! "Their" has "heir" which means someone who inherits something.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Your vs You're</div>
                <p>If you can replace the word with "you are," use you're. If not, use your. "You're (you are) going to love your new book!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Hear vs Here</div>
                <p>"Hear" has "ear" in it - you hear with your ear! "Here" has "here" - it's about location.</p>
            </div>
        `,
        taskInstructions: "Practice choosing the correct homophone for each sentence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Their / There / They're</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the blank with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. ___________ going to the movies after school.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. The children put away ___________ toys.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. Put the cups over ___________ on the table.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. ___________ are only three cookies left.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: To / Too / Two</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. I want ___________ go ___________ the park.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. She ate ___________ many cookies.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. I have ___________ sisters and one brother.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. Can I come ___________?</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Your / You're & Its / It's</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blank:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. ___________ going to love ___________ new puppy.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. The cat licked ___________ paw.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. ___________ raining outside, so bring ___________ umbrella.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. The tree lost ___________ leaves in autumn.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Peace/Piece & Hear/Here</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in the blank:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Please come ___________ so you can ___________ the announcement.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. May I have a ___________ of pizza?</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. The world needs more ___________.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>D. I can't ___________ you from over ___________.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Mixed Review</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Choose the correct homophone for each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. (Their / There / They're) ___________ going to be late if (their / there / they're) ___________ car doesn't start.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>B. (Your / You're) ___________ the first person to finish (your / you're) ___________ test.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>C. (Its / It's) ___________ important for a dog to have (its / it's) ___________ own bed.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Write Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write one sentence for each homophone pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>peace / piece: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>hear / here: _________________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a short story (5-7 sentences) using at least 5 different homophones correctly. Circle each homophone you use.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4LiteracyWeek5);
    console.log("grade4-literacy-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4LiteracyWeek5);
    console.log("grade4-literacy-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4LiteracyWeek5',
        metadata: grade4LiteracyWeek5.metadata,
        days: grade4LiteracyWeek5
    });
    console.log("grade4-literacy-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4LiteracyWeek5 = grade4LiteracyWeek5;
console.log("grade4-literacy-week5.js loaded and registered successfully");