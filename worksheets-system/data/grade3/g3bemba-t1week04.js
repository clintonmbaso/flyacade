// Grade 3 Bemba - Week 4 Data (Antonyms)
const grade3BembaWeek4 = {
    metadata: {
        grade: 3,
        subject: "Zambian Language (Icibemba)",
        week: 4,
        title: "Amashiwi Ayapana mu Kupusanako — Learning Antonyms",
        description: "Learning about words with opposite meanings (antonyms) in Bemba"
    },
    
    wednesday: {
        subject: "Bemba",
        topic: "Introduction to Antonyms (Amashiwi Ayapana mu Kupusanako)",
        subtopic: "3.33.1 Antonyms",
        lessonContent: `
            <p>Mwalishani baana! Welcome to our Bemba lesson! Today we will learn about amashiwi ayapana mu kupusanako (words that are opposite).</p>
            <p><strong>Icisumu:</strong> Antonyms are words with opposite meanings.</p>
            <p><strong>Ifishobo fya kumfumya:</strong> Ishiwi ilipusene ne linankwe mu Bemba.</p>
            <p><strong>Ifya kufwaya:</strong> By the end of the lesson, you should be able to:</p>
            <ul>
                <li>Define an antonym (ishiwi ilipusene ne linankwe) in Bemba</li>
                <li>Identify antonyms for common adjectives and nouns</li>
            </ul>
            <p><strong>Ifyacikonko:</strong> Let's look at examples:</p>
            <ul>
                <li><strong>Ukusuma</strong> (Good) vs <strong>Ukubipa</strong> (Bad)</li>
                <li><strong>Ukutali</strong> (Far) vs <strong>Ukwipi</strong> (Near)</li>
                <li><strong>Icilamba</strong> (Hot) vs <strong>Ubushishi</strong> (Cold)</li>
            </ul>
            <p><strong>Ukutontonkanya:</strong> Remember, antonyms help us describe things better and make our language richer!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #9C27B0;"></i> Ifyacikonko Fyamashiwi Ayapana</div>
                <p><strong>Ukusuma</strong> ↔ <strong>Ukubipa</strong> (Good ↔ Bad)</p>
                <p><strong>Ukutali</strong> ↔ <strong>Ukwipi</strong> (Far ↔ Near)</p>
                <div style="margin-top: 8px; font-style: italic;">These words mean the opposite of each other.</div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list" style="color: #2196F3;"></i> Amashiwi Ayandi</div>
                <p><strong>Inono</strong> (Small) ↔ <strong>Ikulu</strong> (Big)</p>
                <p><strong>Ubwema</strong> (Light) ↔ <strong>Umushinsi</strong> (Dark)</p>
                <p><strong>Ukutasha</strong> (To cry) ↔ <strong>Ukuseka</strong> (To laugh)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Ifilimwendo!</div>
                <p>Let's play "Amashiwi Ayapana" matching game! We will match word cards with their opposites.</p>
            </div>
        `,
        taskInstructions: "Fwaya amashiwi ayapana mu kupusanako (Find the opposite words).",
        taskContent: `
            <div class="content-box">
                <p><strong>Ingomba A: Ifya kumfumya</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write what an antonym is in Bemba:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Ishiwi ilipusene ne linankwe mu Bemba ni ________________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ingomba B: Fwaya ishiwi ilipusene</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the opposite word for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Ukusuma</strong> → ☐ Ukubipa ☐ Ukusefya ☐ Ukutasha</div>
                        <div><strong>Ukwipi</strong> → ☐ Ukusuma ☐ Ukutali ☐ Inono</div>
                        <div><strong>Ikulu</strong> → ☐ Ubushishi ☐ Inono ☐ Ubwema</div>
                        <div><strong>Ukuseka</strong> → ☐ Ukutasha ☐ Ukutali ☐ Ukwipi</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ingomba C: Match Amashiwi Ayapana</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line to match each word with its opposite:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; justify-content: space-between; max-width: 400px;">
                            <div>Ukusuma</div>
                            <div>↔</div>
                            <div>Ukubipa</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; max-width: 400px;">
                            <div>Ukutali</div>
                            <div>↔</div>
                            <div class="answer-space" style="width: 100px;"></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; max-width: 400px;">
                            <div class="answer-space" style="width: 100px;"></div>
                            <div>↔</div>
                            <div>Inono</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; max-width: 400px;">
                            <div>Ubwema</div>
                            <div>↔</div>
                            <div class="answer-space" style="width: 100px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ingomba D: Fula Amashiwi</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the opposite of each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ukubipa → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Ukwipi → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Ubushishi → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Ukutasha → <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Fwaya amashiwi atatu ayapana mu lupasu (Find three pairs of antonyms at home). Write them down.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Bemba",
        topic: "Antonyms in Sentences and Games",
        subtopic: "3.33.1 Antonyms",
        lessonContent: `
            <p>Mwalishani baana! Today we will use antonyms in sentences and play games with them!</p>
            <p><strong>Ifya kufwaya:</strong> By the end of the lesson, you should be able to:</p>
            <ul>
                <li>Replace a word in a sentence with its antonym to change the sentence's meaning</li>
                <li>Participate correctly in an antonym relay race</li>
            </ul>
            <p><strong>Ifilimwendo:</strong> We will play three fun games today!</p>
            <p><strong>1. Sentence Transformation:</strong> Change a sentence by using an opposite word.</p>
            <p>Example: <strong>"Ing'anda ikulu"</strong> (The house is big) becomes <strong>"Ing'anda inono"</strong> (The house is small).</p>
            <p><strong>2. Antonym Relay Race:</strong> Teams will run to write opposites on the board.</p>
            <p><strong>3. Antonym Bingo:</strong> Listen for word pairs and mark them on your card.</p>
            <p><strong>Ukutontonkanya:</strong> Using antonyms makes our sentences more interesting and helps us express different ideas!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt" style="color: #4CAF50;"></i> Sentence Transformation</div>
                <p><strong>Original:</strong> "Icilamba cafula" (The water is hot)</p>
                <p><strong>With antonym:</strong> "Ubushishi bwafula" (The water is cold)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running" style="color: #FF9800;"></i> Relay Race Words</div>
                <p>Teacher says: <strong>"Ukusuma"</strong></p>
                <p>You write: <strong>"Ukubipa"</strong></p>
                <div style="margin-top: 8px; font-style: italic;">Be quick and accurate!</div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th-large" style="color: #9C27B0;"></i> Antonym Bingo</div>
                <p>Your bingo card has words like: Ukusuma, Ukutali, Ikulu...</p>
                <p>When you hear the opposite word, mark it on your card!</p>
            </div>
        `,
        taskInstructions: "Shintya amashiwi mu nsoselo na ukwabomba mu filimwendo (Change words in sentences and participate in games).",
        taskContent: `
            <div class="content-box">
                <p><strong>Ingomba A: Shintya Amashiwi mu Nsoselo</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rewrite each sentence using an antonym for the underlined word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) <u>Ing'anda ikulu</u>. (The house is big.)</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0 15px 20px;"></div>
                        
                        <div>b) <u>Umusuma uletasha</u>. (The child is crying.)</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0 15px 20px;"></div>
                        
                        <div>c) <u>Icilamba cafula</u>. (The water is hot.)</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0 15px 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ingomba B: Design Your Bingo Card</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a 3×3 bingo card with words. We will play in class:
                    <div style="margin-left: 20px; margin-top: 10px; text-align: center;">
                        <table border="1" style="margin: 0 auto; border-collapse: collapse;">
                            <tr>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                            </tr>
                            <tr>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                                <td style="width: 80px; height: 60px; text-align: center;">FREE</td>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                            </tr>
                            <tr>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                                <td style="width: 80px; height: 60px; text-align: center;"><span class="answer-space" style="width: 70px;"></span></td>
                            </tr>
                        </table>
                        <p style="font-size: 12px; margin-top: 5px;">Use words like: Ukusuma, Ukubipa, Ukutali, Ukwipi, Ikulu, Inono, etc.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ingomba C: Relay Race Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Practice for the race. Write the opposite for each word quickly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ukusuma → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Ukwipi → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Inono → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Ubwema → <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ingomba D: Create New Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write two sentences using antonyms:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 250px; height: 30px;"></span></div>
                        <div style="margin-top: 10px;"></div>
                        <div>2. <span class="answer-space" style="width: 250px; height: 30px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ingomba E: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw two pictures showing antonyms (e.g., big house vs small house):
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;"><span class="answer-space" style="width: 120px;"></span></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;"><span class="answer-space" style="width: 120px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Shintya amashiwi atatu mu nsoselo sha mu buku yobe (Replace three words in sentences from your book with their antonyms).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3BembaWeek4);
    console.log("bemba-week4-antonyms.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3BembaWeek4);
    console.log("bemba-week4-antonyms.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3BembaWeek4',
        metadata: grade3BembaWeek4.metadata,
        days: grade3BembaWeek4
    });
    console.log("bemba-week4-antonyms.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3BembaWeek4 = grade3BembaWeek4;
console.log("bemba-week4-antonyms.js loaded and registered successfully");