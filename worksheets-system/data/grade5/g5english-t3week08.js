// Grade 5 English - Term 3 Week 7 Data
const grade5EnglishWeek8 = {
    metadata: {
        grade: 5,
        subject: "English",
        term: 3,
        week: 8,
        title: "Direct vs. Indirect Speech",
        description: "Mastering the conversion between direct and indirect speech, including tense shifts and reporting events"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Converting Direct to Indirect Speech",
        lessonContent: `
            <p>Welcome to our lesson on reported speech! Today we'll learn how to change direct quotes into indirect speech.</p>
            <p><strong>Key Question:</strong> How do we tell someone what another person said without using their exact words?</p>
            <p><strong>What is Direct Speech?</strong></p>
            <p>Direct speech uses the <strong>exact words</strong> of the speaker, enclosed in quotation marks (" ").</p>
            <div class="example-box" style="background: #e8f4f8; padding: 10px;">
                <p><strong>Example:</strong> John said, <strong>"I am happy."</strong></p>
            </div>
            
            <p><strong>What is Indirect Speech?</strong></p>
            <p>Indirect speech (also called reported speech) <strong>reports</strong> what someone said without using their exact words. No quotation marks are used.</p>
            <div class="example-box" style="background: #e8f4f8; padding: 10px;">
                <p><strong>Example:</strong> John said that he was happy.</p>
            </div>
            
            <p><strong>Key Changes When Converting Direct to Indirect:</strong></p>
            <ol>
                <li><strong>Remove quotation marks</strong> - the exact words are no longer shown</li>
                <li><strong>Add the word "that"</strong> (optional but common) - John said <u>that</u> he was happy</li>
                <li><strong>Change the pronoun</strong> - "I" becomes "he" or "she"; "we" becomes "they"</li>
                <li><strong>Change the tense</strong> - present tense often becomes past tense</li>
            </ol>
            
            <p><strong>Tense Shift Rules (Present to Past):</strong></p>
            <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                <ul>
                    <li>"I <u>am</u> tired" → She said that she <u>was</u> tired</li>
                    <li>"I <u>am going</u> to school" → He said that he <u>was going</u> to school</li>
                    <li>"I <u>eat</u> breakfast" → She said that she <u>ate</u> breakfast</li>
                    <li>"I <u>have</u> a dog" → He said that he <u>had</u> a dog</li>
                    <li>"I <u>will</u> come" → She said that she <u>would</u> come</li>
                </ul>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Conversion Examples</div>
                <p><strong>Direct:</strong> "I like pizza," said Maria.</p>
                <p><strong>Indirect:</strong> Maria said that she liked pizza.</p>
                <hr>
                <p><strong>Direct:</strong> "We are playing football," the boys said.</p>
                <p><strong>Indirect:</strong> The boys said that they were playing football.</p>
                <hr>
                <p><strong>Direct:</strong> "I will finish my homework," Tom promised.</p>
                <p><strong>Indirect:</strong> Tom promised that he would finish his homework.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Remember!</div>
                <p>When the reporting verb (said, told, asked) is in the past tense, the verb in the indirect speech usually moves one step back in time.</p>
            </div>
        `,
        taskInstructions: "Change five past-tense direct quotes into indirect speech.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Convert These Direct Speech Sentences to Indirect Speech</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Direct: "I am going to the park," said Sarah.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Direct: "We won the match!" shouted the captain.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Direct: "I will help you with your project," David told his sister.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Direct: "I have finished my chores," Ben said.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Direct: "We are studying for the test," the students told the teacher.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Changes</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Look at your answer for #1. What pronoun changed? What tense changed?
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Why did "will" change to "would" in indirect speech?
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Write one direct speech sentence, then convert it to indirect speech:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find three examples of direct speech in a book or story you are reading. Rewrite them as indirect speech.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Converting Indirect to Direct Speech",
        lessonContent: `
            <p>Today we'll learn how to reverse the process - changing indirect speech back into direct speech!</p>
            <p><strong>Key Question:</strong> If someone reports what another person said, how can we figure out the original exact words?</p>
            
            <p><strong>Converting Indirect to Direct Speech - Reverse Steps:</strong></p>
            <ol>
                <li><strong>Remove the word "that"</strong> (if it was used)</li>
                <li><strong>Add quotation marks (" ")</strong> around the spoken words</li>
                <li><strong>Change the pronoun back</strong> - "he/she" becomes "I"; "they" becomes "we"</li>
                <li><strong>Change the tense back</strong> - past tense often becomes present tense</li>
                <li><strong>Add appropriate punctuation</strong> (comma before the quote, capital letter at start of quote)</li>
            </ol>
            
            <p><strong>Tense Shift Rules (Past back to Present):</strong></p>
            <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                <ul>
                    <li>She said that she <u>was</u> tired → "I <u>am</u> tired," she said.</li>
                    <li>He said that he <u>was going</u> to school → "I <u>am going</u> to school," he said.</li>
                    <li>She said that she <u>ate</u> breakfast → "I <u>eat</u> breakfast," she said.</li>
                    <li>He said that he <u>had</u> a dog → "I <u>have</u> a dog," he said.</li>
                    <li>She said that she <u>would</u> come → "I <u>will</u> come," she said.</li>
                </ul>
            </div>
            
            <p><strong>Punctuation Rules for Direct Speech:</strong></p>
            <ul>
                <li>Place a comma before the opening quotation mark: <strong>Maria said, "</strong>I like pizza."</li>
                <li>The first word inside quotation marks starts with a <strong>capital letter</strong></li>
                <li>Place the closing punctuation (<strong>. ! ?</strong>) inside the quotation marks</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-undo-alt"></i> Reverse Conversion Examples</div>
                <p><strong>Indirect:</strong> Maria said that she liked pizza.</p>
                <p><strong>Direct:</strong> Maria said, "I like pizza."</p>
                <hr>
                <p><strong>Indirect:</strong> The boys said that they were playing football.</p>
                <p><strong>Direct:</strong> The boys said, "We are playing football."</p>
                <hr>
                <p><strong>Indirect:</strong> Tom promised that he would finish his homework.</p>
                <p><strong>Direct:</strong> Tom promised, "I will finish my homework."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Check Your Work</div>
                <p>After converting to direct speech, read the words inside the quotation marks. Do they sound like something a person would actually say?</p>
            </div>
        `,
        taskInstructions: "Change indirect speech sentences back into direct speech.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Convert These Indirect Speech Sentences to Direct Speech</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Indirect: She said that she was thirsty.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Indirect: The teacher said that the students had done a great job.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Indirect: James told his mom that he would clean his room later.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Indirect: The children said that they were excited about the field trip.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Indirect: Ana explained that she had forgotten her homework at home.
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Punctuation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Rewrite this sentence with correct direct speech punctuation: 
                    <div style="margin-top: 5px;">the coach said we need to practice harder</div>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What is wrong with this direct speech sentence? Fix it:
                    <div style="margin-top: 5px;">"I love reading books" said Emily.</div>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Write one indirect speech sentence, then convert it to direct speech:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Listen to a conversation between family members. Write down one thing someone said in indirect speech, then convert it to direct speech.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Writing",
        subtopic: "Reporting a News Event",
        lessonContent: `
            <p>Today we'll use both direct and indirect speech to write a news report about a school football match!</p>
            <p><strong>Key Question:</strong> How do reporters use both types of speech to make news stories interesting and accurate?</p>
            
            <p><strong>Why Use Both Types of Speech in News Reporting?</strong></p>
            <ul>
                <li><strong>Direct speech</strong> adds excitement and authenticity - it lets readers "hear" exactly what people said</li>
                <li><strong>Indirect speech</strong> helps summarize longer conversations and keeps the report flowing</li>
                <li>Good reporters <strong>mix both</strong> to create engaging, informative articles</li>
            </ul>
            
            <p><strong>News Report Structure:</strong></p>
            <ol>
                <li><strong>Headline:</strong> Grabs attention and summarizes the main event</li>
                <li><strong>Lead paragraph (introduction):</strong> Answers who, what, when, where, why</li>
                <li><strong>Body paragraphs:</strong> Details, quotes, descriptions</li>
                <li><strong>Closing paragraph:</strong> Conclusion or future implications</li>
            </ol>
            
            <p><strong>Using Quotes in a News Report:</strong></p>
            <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                <p><strong>Direct quote example:</strong> "We played our hearts out today," said team captain Alex.</p>
                <p><strong>Indirect quote example:</strong> The coach said that he was proud of the team's effort.</p>
                <p><strong>Mixed example:</strong> After the match, forward Maria stated that the win felt amazing. "I couldn't believe when that final goal went in," she added.</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-newspaper"></i> News Report Example</div>
                <p><strong>Headline:</strong> Eagles Soar to Victory in Thrilling Final!</p>
                <p><strong>Lead:</strong> The Riverside Eagles defeated the Westside Wolves 3-2 in yesterday's championship match at Memorial Stadium.</p>
                <p><strong>Body:</strong> "I'm so proud of this team," said captain Alex Chen. "Everyone gave 100 percent." Coach Williams said that the victory was the result of months of hard work. "These boys never gave up," the coach added.</p>
                <p><strong>Closing:</strong> The Eagles will advance to the regional tournament next month.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Interview Tips</div>
                <p>When writing a news report, imagine you are interviewing players, coaches, and fans. What would they say? Write their exact words as direct quotes!</p>
            </div>
        `,
        taskInstructions: "Write a 'News Report' about a school football match using both direct and indirect speech.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plan Your News Report</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose details for your football match:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Team names: _________ vs. _________</div>
                        <div>• Final score: _________</div>
                        <div>• Location/field name: _________</div>
                        <div>• Star player name: _________</div>
                        <div>• Coach name: _________</div>
                        <div>• Fan or spectator comment: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your News Report</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a complete news report about the football match. Include:
                    <ul style="margin-left: 40px; margin-top: 5px;">
                        <li>A catchy headline</li>
                        <li>A lead paragraph (who, what, when, where, why)</li>
                        <li>At least <strong>two direct quotes</strong> from different people</li>
                        <li>At least <strong>one indirect speech sentence</strong></li>
                        <li>A closing paragraph</li>
                    </ul>
                    <div class="answer-space" style="height: 300px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify Your Speech Types</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Below your report, write down one direct quote and one indirect sentence from your report:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important for a news report to include both direct and indirect speech?
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Watch a short news clip on TV or online. Write down one direct quote and one piece of indirect speech you hear from the reporter or an interview.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5EnglishWeek8);
    console.log("grade5-english-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5EnglishWeek8);
    console.log("grade5-english-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5EnglishWeek8',
        metadata: grade5EnglishWeek8.metadata,
        days: grade5EnglishWeek8
    });
    console.log("grade5-english-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5EnglishWeek8 = grade5EnglishWeek8;
console.log("grade5-english-week8.js loaded and registered successfully");