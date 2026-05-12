// Grade 5 English - Term 3 Week 5 Data
const grade5EnglishWeek5 = {
    metadata: {
        grade: 5,
        subject: "English",
        term: 3,
        week: 5,
        title: "Direct Speech",
        description: "Understanding when to use direct quotes, punctuating direct speech correctly, and writing dialogues"
    },
    
    monday: {
        subject: "English",
        topic: "Direct Speech",
        subtopic: "Introduction to Direct Speech",
        lessonContent: `
            <p>Welcome to our lesson on direct speech! Today we'll learn how to use direct quotes in our writing.</p>
            <p><strong>Key Question:</strong> What is direct speech and when do we use it?</p>
            <p><strong>Introduction:</strong> Direct speech is when we write down exactly what someone says. We use quotation marks (also called speech marks) to show the exact words that come out of a person's mouth.</p>
            <p><strong>When do we use direct speech?</strong></p>
            <ul>
                <li>In stories when characters talk to each other</li>
                <li>When writing interviews</li>
                <li>To make our writing more interesting and lively</li>
                <li>To show exactly what someone said</li>
            </ul>
            <p><strong>Examples of Direct Speech:</strong></p>
            <ul>
                <li>"I love ice cream," said Sarah.</li>
                <li>Mom said, "Please clean your room."</li>
                <li>"Watch out!" shouted Tom.</li>
            </ul>
            <p><strong>Remember:</strong> Direct speech uses the speaker's exact words!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Comic Strip Connection</div>
                <p>Comic strips use direct speech in speech bubbles. Each bubble contains the exact words the character says!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Direct vs. Indirect</div>
                <p><strong>Direct:</strong> "I am tired," said John.<br>
                <strong>Indirect:</strong> John said that he was tired.<br>
                See the difference? Direct speech uses the EXACT words!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Showing Emotion</div>
                <p>Direct speech helps show how someone feels. "I won the race!" shows excitement, while "I lost my key" shows sadness.</p>
            </div>
        `,
        taskInstructions: "Identify the speaker in various comic strips and practice identifying direct speech.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comic Strip Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the comic strip below. Write who is speaking each line:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #f5f5f5; border-radius: 10px;">
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <div style="border: 1px solid #ccc; padding: 10px; background: white; width: 150px;">
                                <div style="height: 80px; background: #e0e0e0; margin-bottom: 5px; display: flex; align-items: center; justify-content: center;">[Picture of boy]</div>
                                <div style="background: #fff; border: 2px solid #333; border-radius: 20px; padding: 8px; margin-top: 5px;">"I love pizza!"</div>
                                <div style="margin-top: 5px;">Speaker: _________</div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px; background: white; width: 150px;">
                                <div style="height: 80px; background: #e0e0e0; margin-bottom: 5px; display: flex; align-items: center; justify-content: center;">[Picture of girl]</div>
                                <div style="background: #fff; border: 2px solid #333; border-radius: 20px; padding: 8px; margin-top: 5px;">"Me too! It's my favorite."</div>
                                <div style="margin-top: 5px;">Speaker: _________</div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px; background: white; width: 150px;">
                                <div style="height: 80px; background: #e0e0e0; margin-bottom: 5px; display: flex; align-items: center; justify-content: center;">[Picture of teacher]</div>
                                <div style="background: #fff; border: 2px solid #333; border-radius: 20px; padding: 8px; margin-top: 5px;">"Please finish your homework."</div>
                                <div style="margin-top: 5px;">Speaker: _________</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Is It Direct Speech?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put a check (✓) next to the sentences that are direct speech:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ She said that she was tired.</div>
                        <div>___ "I am tired," she said.</div>
                        <div>___ "Let's go to the park!" exclaimed James.</div>
                        <div>___ James suggested going to the park.</div>
                        <div>___ "What time is it?" asked Lisa.</div>
                        <div>___ Lisa asked what time it was.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Speaker</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read each sentence and identify who is speaking:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. "Don't forget to brush your teeth," said Mom. Speaker: _________</div>
                        <div>B. "I scored a goal!" shouted David. Speaker: _________</div>
                        <div>C. "The test is on Friday," announced the teacher. Speaker: _________</div>
                        <div>D. "Would you like some juice?" asked Grandma. Speaker: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Your Turn</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence of direct speech that a superhero might say:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of direct speech in a comic strip or storybook. Write them down and identify who is speaking each time.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Direct Speech",
        subtopic: "Punctuating Direct Speech",
        lessonContent: `
            <p>Today we'll learn how to use punctuation marks correctly when writing direct speech!</p>
            <p><strong>Key Question:</strong> Where do speech marks, commas, and capital letters go in direct speech?</p>
            <p><strong>The Rules of Direct Speech Punctuation:</strong></p>
            <ol>
                <li><strong>Speech marks (" "):</strong> Go around the exact words someone says</li>
                <li><strong>Capital letter:</strong> The first word inside the speech marks starts with a capital letter</li>
                <li><strong>Comma (,):</strong> Separates the speech from the speaker (before the closing speech mark)</li>
                <li><strong>End punctuation:</strong> Put the full stop, question mark, or exclamation mark INSIDE the speech marks</li>
            </ol>
            <p><strong>Let's Look at Examples:</strong></p>
            <ul>
                <li>Monde said, "I am happy."</li>
                <li>"I am happy," said Monde.</li>
                <li>"Are you happy?" asked Monde.</li>
                <li>"I am so happy!" shouted Monde.</li>
            </ul>
            <p><strong>Important Rules to Remember:</strong></p>
            <ul>
                <li>Always close your speech marks after the character finishes speaking</li>
                <li>Put a comma before the closing speech mark if the speaker is mentioned after</li>
                <li>Put a comma after the speaker (e.g., Monde said,) before opening speech marks</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-quote-left"></i> Speech Mark Sandwich</div>
                <p>Think of speech marks like the bread in a sandwich - everything the character says goes between them!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Monde Said Pattern</div>
                <p><strong>Pattern 1:</strong> Speaker + said + , + " + Capital letter + speech + . + "<br>
                Example: Monde said, "I am happy."</p>
                <p><strong>Pattern 2:</strong> " + Capital letter + speech + , + " + said + speaker<br>
                Example: "I am happy," said Monde.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Question Marks & Exclamations</div>
                <p>With questions and exclamations, you don't need a comma:<br>
                "Where are you going?" asked Mom.<br>
                "Watch out!" yelled Dad.</p>
            </div>
        `,
        taskInstructions: "Practice writing direct speech with correct punctuation including speech marks, commas, and capital letters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Add the Punctuation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add speech marks, commas, and capital letters to these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. i love reading books said Thabo</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. let's go swimming suggested Lisa</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. what time is dinner asked John</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d. be careful shouted the lifeguard</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Rewrite the Sentences Correctly</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rewrite these sentences with the correct punctuation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Monde said I am happy</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. I love chocolate said Sarah</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. can you help me asked Peter</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d. what a beautiful day exclaimed Mom</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Speaker First or Last?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write each sentence twice - once with the speaker first and once with the speaker last:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I am tired</div>
                        <div style="margin-left: 20px;">Speaker first: _________________________________</div>
                        <div style="margin-left: 20px;">Speaker last: _________________________________</div>
                        <div style="margin-top: 10px;">b. Let's play outside</div>
                        <div style="margin-left: 20px;">Speaker first: _________________________________</div>
                        <div style="margin-left: 20px;">Speaker last: _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fix the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Each sentence below has ONE mistake. Find it and write the corrected sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. "I love pizza" said Tom.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. "Let's go," said Mary</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. John said, i am ready.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences of direct speech about your day. Use speech marks, commas, and capital letters correctly in each one.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Direct Speech",
        subtopic: "Direct Speech Practice",
        lessonContent: `
            <p>Today we'll put everything together and write a complete dialogue between two characters!</p>
            <p><strong>Key Question:</strong> How do we write a conversation using direct speech?</p>
            <p><strong>What is a Dialogue?</strong></p>
            <p>A dialogue is a conversation between two or more people. When we write dialogue, we use direct speech to show exactly what each person says.</p>
            <p><strong>Rules for Writing Dialogue:</strong></p>
            <ul>
                <li>Start a new paragraph each time a new person speaks</li>
                <li>Use speech marks around the exact words</li>
                <li>Use punctuation inside the speech marks</li>
                <li>Use words like said, asked, shouted, whispered to show how someone speaks</li>
            </ul>
            <p><strong>Example Dialogue between Teacher and Student:</strong></p>
            <div style="background: #f0f8ff; padding: 15px; border-radius: 10px; margin: 10px 0;">
                <p>"Good morning, class," said Ms. Smith.<br>
                "Good morning, Ms. Smith," replied the students.<br>
                "Did you finish your homework?" asked the teacher.<br>
                "Yes, I did," answered John. "It was a bit difficult, but I tried my best."<br>
                "That's wonderful to hear, John," said Ms. Smith with a smile.</p>
            </div>
            <p><strong>Different Ways to Say "Said":</strong></p>
            <ul>
                <li>asked (for questions)</li>
                <li>shouted (for loud or excited speech)</li>
                <li>whispered (for quiet speech)</li>
                <li>replied (for answering)</li>
                <li>exclaimed (for sudden or strong emotion)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> Dialogue in Stories</div>
                <p>Good dialogue shows what characters are like. A shy character might speak quietly, while an excited character might shout!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> New Speaker = New Line</div>
                <p>Every time a different person speaks, start a new line. This helps readers follow who is talking!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile-wink"></i> Showing Character</div>
                <p>"I don't know..." whispered Tim (shy, uncertain)<br>
                "I know the answer!" shouted Lisa (confident, excited)</p>
            </div>
        `,
        taskInstructions: "Create a conversation between a teacher and a student using full punctuation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Dialogue</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this conversation between a teacher and a student by adding the missing speech:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <p><strong>Teacher:</strong> "_________________________________"</p>
                        <p><strong>Student:</strong> "I'm sorry I'm late. The bus didn't come on time."</p>
                        <p><strong>Teacher:</strong> "_________________________________"</p>
                        <p><strong>Student:</strong> "Yes, I'll make sure to leave earlier tomorrow."</p>
                        <p><strong>Teacher:</strong> "_________________________________"</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Dialogue</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a dialogue between a teacher and a student about homework. Use at least 6 exchanges (each person speaks at least 3 times):
                    <div class="dialogue-area" style="height: 300px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px; overflow-y: auto;">
                        <p style="color: #999; text-align: center;">Write your dialogue here. Remember to:</p>
                        <p style="color: #999; text-align: center;">• Start a new line for each speaker</p>
                        <p style="color: #999; text-align: center;">• Use speech marks</p>
                        <p style="color: #999; text-align: center;">• Use correct punctuation</p>
                        <p style="color: #999; text-align: center;">• Try different "said" words (asked, replied, explained)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Punctuation Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the dialogue below. Add all missing punctuation (speech marks, commas, capital letters, end marks):
                    <div style="margin-left: 20px; margin-top: 10px; background: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <p>have you finished your math asked the teacher</p>
                        <p>almost the student replied i just have one more problem</p>
                        <p>let me see the teacher said walking over</p>
                        <p>i think i found my mistake exclaimed the student thank you</p>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Character Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a short dialogue (4-6 lines) between two characters of your choice. They could be:
                    <div style="margin-left: 20px;">
                        <div>• A doctor and a patient</div>
                        <div>• A parent and a child</div>
                        <div>• Two friends planning a weekend activity</div>
                        <div>• A shopkeeper and a customer</div>
                    </div>
                    <div class="dialogue-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write a dialogue between you and a family member about your favorite meal. Use correct punctuation and include at least 8 exchanges.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5EnglishWeek5);
    console.log("grade5-english-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5EnglishWeek5);
    console.log("grade5-english-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5EnglishWeek5',
        metadata: grade5EnglishWeek5.metadata,
        days: grade5EnglishWeek5
    });
    console.log("grade5-english-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5EnglishWeek5 = grade5EnglishWeek5;
console.log("grade5-english-week5.js loaded and registered successfully");