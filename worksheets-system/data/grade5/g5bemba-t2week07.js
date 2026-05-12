// Grade 5 Zambian Language (Icibemba) - Term 2 Week 7 Data
const grade5ZambianWeek7 = {
    metadata: {
        grade: 5,
        subject: "Zambian Language (Icibemba)",
        term: 2,
        week: 7,
        title: "Concord & Interrogatives",
        description: "Mastering subject-verb concord (noun class agreement) and interrogative forms (questioning)"
    },
    
    wednesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Grammar",
        subtopic: "Subject-Verb Concord (Part 2) - Noun Class Agreement",
        lessonContent: `
            <p>Mwaiseni mukwai! Welcome to our Icibemba grammar lesson. Today we will master complex subject-verb agreement through noun class concord.</p>
            <p><strong>Key Question:</strong> How does the verb prefix change to match different noun classes?</p>
            <p><strong>Introduction:</strong> In Icibemba, the verb must agree with the subject noun. The prefix of the verb changes depending on which noun class the subject belongs to. This is called <strong>concord</strong> or <strong>agreement</strong>.</p>
            <p><strong>Main Noun Classes in Icibemba:</strong></p>
            <ol>
                <li><strong>Class 1 (Mu- / Mw-):</strong> Persons (singular) - e.g., umuntu (person)</li>
                <li><strong>Class 2 (Ba-):</strong> Persons (plural) - e.g., abantu (people)</li>
                <li><strong>Class 3 (Mu-):</strong> Trees, plants, natural objects - e.g., umuti (tree)</li>
                <li><strong>Class 4 (Mi-):</strong> Plural of Class 3 - e.g., imiti (trees)</li>
                <li><strong>Class 5 (Li- / I-):</strong> Various nouns, often fruits - e.g., icunga (orange)</li>
                <li><strong>Class 6 (Ya- / A-):</strong> Plural of Class 5 - e.g., macunga (oranges)</li>
                <li><strong>Class 7 (Ci- / C-):</strong> Things, objects, languages - e.g., icikope (cup)</li>
                <li><strong>Class 8 (Fi- / Fy-):</strong> Plural of Class 7 - e.g., ifikope (cups)</li>
                <li><strong>Class 9 (I- / N-):</strong> Animals, things - e.g., inyama (meat/animal)</li>
                <li><strong>Class 10 (Shi- / Ishi-):</strong> Plural of Class 9 - e.g., ishinyama (animals)</li>
            </ol>
            <p><strong>Verb Prefixes for Each Noun Class (Present Tense - "to go" - ukuya):</strong></p>
            <ul>
                <li>Class 1 (Mu-): Umuntu <strong>a</strong>ya (The person goes)</li>
                <li>Class 2 (Ba-): Abantu <strong>ba</strong>ya (The people go)</li>
                <li>Class 3 (Mu-): Umuti <strong>u</strong>ya (The tree goes/grows)</li>
                <li>Class 4 (Mi-): Imiti <strong>i</strong>ya (The trees go/grow)</li>
                <li>Class 5 (Li-): Icunga <strong>li</strong>ya (The orange goes)</li>
                <li>Class 6 (Ya-): Macunga <strong>ya</strong>ya (The oranges go)</li>
                <li>Class 7 (Ci-): Icikope <strong>ci</strong>ya (The cup goes)</li>
                <li>Class 8 (Fi-): Ifikope <strong>fi</strong>ya (The cups go)</li>
                <li>Class 9 (I-): Inyama <strong>i</strong>ya (The meat goes)</li>
                <li>Class 10 (Shi-): Ishinyama <strong>shi</strong>ya (The animals go)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-handshake"></i> Class 1 & 2 Example (People)</div>
                <p><strong>Umwana alya ubwali.</strong> (The child eats nshima.)<br>
                <strong>Abana balya ubwali.</strong> (The children eat nshima.)<br>
                <em>Notice: alya → balya (prefix changes from a- to ba-)</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Class 3 & 4 Example (Trees)</div>
                <p><strong>Umuti uyakula.</strong> (The tree will grow.)<br>
                <strong>Imiti iyakula.</strong> (The trees will grow.)<br>
                <em>Notice: uyakula → iyakula (prefix changes from u- to i-)</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coffee"></i> Class 7 & 8 Example (Objects)</div>
                <p><strong>Icikope cipwa.</strong> (The cup is broken.)<br>
                <strong>Ifikope fipwa.</strong> (The cups are broken.)<br>
                <em>Notice: cipwa → fipwa (prefix changes from ci- to fi-)</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paw"></i> Class 9 & 10 Example (Animals)</div>
                <p><strong>Inyama ilela.</strong> (The animal cries.)<br>
                <strong>Ishinyama shilela.</strong> (The animals cry.)<br>
                <em>Notice: ilela → shilela (prefix changes from i- to shi-)</em></p>
            </div>
        `,
        taskInstructions: "Complete the noun class agreement exercises and create your own sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Noun Class Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify the noun class for each word and write the correct verb prefix:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Umulandu (story) - Class ___ → Verb prefix: ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Akalamba (small village) - Class ___ → Verb prefix: ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Ubutaka (land/soil) - Class ___ → Verb prefix: ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Amenshi (water) - Class ___ → Verb prefix: ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the correct verb prefix (concord) for each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Umuntu ___ ya ku mushi. (to go)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Ifitwe ___ la mu cikuta. (to run - ukubutuka)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Amacunga ___ lunga. (to be sweet - ukuwisha)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Ishinyama ___ lela mu mpanga. (to cry - ukulila)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Imikoko ___ la pa nse. (to fall - ukupwa)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one sentence for each noun class pair using the correct concord:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Class 1 (Mu-): <span class="bemba-text">_________________</span></div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>Class 2 (Ba-): <span class="bemba-text">_________________</span></div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>Class 7 (Ci-): <span class="bemba-text">_________________</span></div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>Class 8 (Fi-): <span class="bemba-text">_________________</span></div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Section</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Translate these sentences into Icibemba, paying attention to noun agreement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"The big tree is growing."</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>"The beautiful cups are broken."</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>"The children are eating nshima."</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "List 10 objects in your home. Write each noun in Icibemba, identify its noun class, and write a short sentence using the correct verb concord.",
        homeworkDue: "Next Wednesday"
    },
    
    thursday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Grammar",
        subtopic: "Interrogative Forms (Questioning)",
        lessonContent: `
            <p>Mwaiseni! Today we will learn how to ask questions in Icibemba using interrogatives.</p>
            <p><strong>Key Question:</strong> How do we change a statement into a question in Icibemba?</p>
            <p><strong>Introduction:</strong> Interrogatives are question words. They help us ask for specific information. In Icibemba, we can change a statement into a question by using question words or by changing the tone of our voice.</p>
            <p><strong>Main Interrogatives in Icibemba:</strong></p>
            <ol>
                <li><strong>Nani?</strong> - Who? (asking about a person)</li>
                <li><strong>Nshi?</strong> - What? (asking about a thing)</li>
                <li><strong>Ilyashi? / Mulandu nshi?</strong> - Why? (asking for a reason)</li>
                <li><strong>Kuli?</strong> - Where? (asking about a place/location)</li>
                <li><strong>Shani?</strong> - How? (asking about manner or condition)</li>
                <li><strong>Ningati? / Ikulangapo nshi?</strong> - When? (asking about time)</li>
                <li><strong>Nga nshi?</strong> - Which? (asking for a choice)</li>
            </ol>
            <p><strong>How to Form Questions in Icibemba:</strong></p>
            <ul>
                <li><strong>Method 1:</strong> Add the question word at the beginning or end of the sentence</li>
                <li><strong>Method 2:</strong> Use rising intonation (voice goes up at the end)</li>
                <li><strong>Method 3:</strong> Add the question particle "-e" to the verb</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Who? - Nani?</div>
                <p><strong>Statement:</strong> Bwalya aile ku sukulu. (Bwalya went to school.)<br>
                <strong>Question:</strong> <span class="bemba-highlight">Nani</span> aile ku sukulu? (Who went to school?)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> What? - Nshi?</div>
                <p><strong>Statement:</strong> Mwalya ubwali. (You ate nshima.)<br>
                <strong>Question:</strong> Mwalya <span class="bemba-highlight">nshi</span>? (What did you eat?)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Where? - Kuli?</div>
                <p><strong>Statement:</strong> Umwana alela. (The child is crying.)<br>
                <strong>Question:</strong> Umwana alela <span class="bemba-highlight">kuli</span>? (Where is the child crying?)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Why? - Ilyashi?</div>
                <p><strong>Statement:</strong> Twamfwile ukwisa. (We delayed to come.)<br>
                <strong>Question:</strong> <span class="bemba-highlight">Ilyashi</span> twamfwile ukwisa? (Why did we delay to come?)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> How? - Shani?</div>
                <p><strong>Statement:</strong> Mwabombesha. (You worked hard.)<br>
                <strong>Question:</strong> Mwabombesha <span class="bemba-highlight">shani</span>? (How did you work hard?)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> When? - Ningati?</div>
                <p><strong>Statement:</strong> Tukesha. (We will come.)<br>
                <strong>Question:</strong> Tukesha <span class="bemba-highlight">ningati</span>? (When will we come?)</p>
            </div>
        `,
        taskInstructions: "Practice changing declarative statements into questions using appropriate interrogative markers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Interrogative</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What question word would you use to ask for the following information?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Asking about a person's name: _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>• Asking about the reason for crying: _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>• Asking about the location of a book: _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>• Asking about someone's health: _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>• Asking about the time of arrival: _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>• Asking about the type of food eaten: _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Turn Statements into Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Change each statement into a question using the correct interrogative:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Statement: "Bwalya ali ku ng'anda." (Bwalya is at home.)<br>
                        Question (asking where): _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div>Statement: "Natotola icikope." (I broke the cup.)<br>
                        Question (asking what): _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div>Statement: "Tukesha mailo." (We will come tomorrow.)<br>
                        Question (asking when): _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div>Statement: "Mulebomba pa sukulu." (You work at school.)<br>
                        Question (asking where): _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Interrogative Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a question in Icibemba using each interrogative word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Nani? (Who): <span class="bemba-text">_________________________________</span></div>
                        <div class="answer-space" style="height: 35px;"></div>
                        <div>Nshi? (What): <span class="bemba-text">_________________________________</span></div>
                        <div class="answer-space" style="height: 35px;"></div>
                        <div>Kuli? (Where): <span class="bemba-text">_________________________________</span></div>
                        <div class="answer-space" style="height: 35px;"></div>
                        <div>Ilyashi? (Why): <span class="bemba-text">_________________________________</span></div>
                        <div class="answer-space" style="height: 35px;"></div>
                        <div>Shani? (How): <span class="bemba-text">_________________________________</span></div>
                        <div class="answer-space" style="height: 35px;"></div>
                        <div>Ningati? (When): <span class="bemba-text">_________________________________</span></div>
                        <div class="answer-space" style="height: 35px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Dialogue Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete this dialogue by writing questions for each answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>
                            <p><strong>You:</strong> <span class="bemba-text">_________________</span> (ask who)</p>
                            <p><strong>Friend:</strong> Bwalya eo aile ku cibuku.</p>
                        </div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>
                            <p><strong>You:</strong> <span class="bemba-text">_________________</span> (ask why)</p>
                            <p><strong>Friend:</strong> Aile ukulanda icitabo.</p>
                        </div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>
                            <p><strong>You:</strong> <span class="bemba-text">_________________</span> (ask when)</p>
                            <p><strong>Friend:</strong> Aile inshita ya 9:00.</p>
                        </div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to know how to ask questions properly in Icibemba?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 statements about your day. Then rewrite each statement as a question using a different interrogative word (nani, nshi, kuli, ilyashi, shani, ningati).",
        homeworkDue: "Next Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ZambianWeek7);
    console.log("grade5-zambian-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ZambianWeek7);
    console.log("grade5-zambian-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ZambianWeek7',
        metadata: grade5ZambianWeek7.metadata,
        days: grade5ZambianWeek7
    });
    console.log("grade5-zambian-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ZambianWeek7 = grade5ZambianWeek7;
console.log("grade5-zambian-week7.js loaded and registered successfully");