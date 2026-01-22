// Grade 3 Bemba Language - Week 10 Data (Fact and Opinion)
const grade3BembaWeek10 = {
    metadata: {
        grade: 3,
        subject: "Zambian Language (Icibemba)",
        week: 10,
        title: "Icishinka nelyo Ukutontonkanya? — Fact and Opinion",
        description: "Differentiating fact from opinion in given information in Bemba"
    },
    
    wednesday: {
        subject: "Bemba Language",
        topic: "Fact or Opinion? (Icishinka nelyo Ukutontonkanya?)",
        subtopic: "Fact and Opinion",
        lessonContent: `
            <p>Mwashibukeni, baana! Today we will learn the difference between what is always true and what is just one person's feeling.</p>
            <p><strong>Key Concept:</strong> Some things are true for everyone (Icishinka), and some things are just how one person feels (Ukutontonkanya).</p>
            <p><strong>What is a Fact (Icishinka)?</strong></p>
            <ul>
                <li>Something that is always true</li>
                <li>Can be proven</li>
                <li>Everyone agrees</li>
            </ul>
            <p><strong>What is an Opinion (Ukutontonkanya)?</strong></p>
            <ul>
                <li>How one person feels</li>
                <li>Might be different for another person</li>
                <li>Cannot be proven true for everyone</li>
            </ul>
            <p><strong>Example:</strong></p>
            <p>"This is a pencil" (Ici ni pensulo) → FACT (Icishinka)</p>
            <p>"This is the most beautiful pencil in Zambia" → OPINION (Ukutontonkanya)</p>
            <p><strong>Why is this important?</strong> Knowing the difference helps us understand if something is true for everyone or just one person's idea.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle" style="color: #4CAF50;"></i> Fact Example (Icishinka)</div>
                <p>"The sun is hot" (Ubushisha bwa kasuba) → This is a fact. It is always true for everyone.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart" style="color: #f44336;"></i> Opinion Example (Ukutontonkanya)</div>
                <p>"Nshima is the best food" (Nshima ni ifyakulya ifisuma) → This is an opinion. Someone else might think rice is the best.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Stand Up, Sit Down Game!</div>
                <p>When teacher reads a fact, stand up! When teacher reads an opinion, sit down! Listen carefully!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice identifying facts and opinions in Bemba.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Listen to the teacher read each statement. Write "Icishinka" for fact or "Kutontonkanya" for opinion:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) "Imbwa ni nyama" (A dog is an animal) → <span class="answer-space" style="width: 150px;"></span></div>
                    <div>b) "Imbwa ni ifisuma" (Dogs are the best) → <span class="answer-space" style="width: 150px;"></span></div>
                    <div>c) "Amenshi ni abilibili" (Water is wet) → <span class="answer-space" style="width: 150px;"></span></div>
                    <div>d) "Amenshi ni ayasuma" (Water is delicious) → <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw a picture of something that is a FACT (Icishinka):
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">This is a fact because: ________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the statements that are FACTS (Icishinka):
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ "Ulubuto lwa mweshi" (The moon is round)</div>
                    <div>☐ "Ulubuto lwa mweshi lwalusuma" (The moon is beautiful)</div>
                    <div>☐ "Ifyuni fyafuka" (Birds can fly)</div>
                    <div>☐ "Ifyuni fyaba na misa" (Birds are nice)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match the Bemba word to its meaning:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"Icishinka" → ☐ How one person feels</div>
                    <div>"Ukutontonkanya" → ☐ Something always true</div>
                </div>
            </div>
        `,
        homework: "Tell one fact (Icishinka) and one opinion (Ukutontonkanya) about your home in Bemba to your family.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Bemba Language",
        topic: "Sorting Truths (Ukusobola Icishinka)",
        subtopic: "Fact and Opinion",
        lessonContent: `
            <p>Mwashibukeni! Today we will practice listening for facts and opinions in a story.</p>
            <p><strong>Key Concept:</strong> When we listen to stories or news, we must know what is true for everyone and what is just one person's feeling.</p>
            <p><strong>Review:</strong></p>
            <ul>
                <li><strong>Icishinka (Fact):</strong> Can be proven, always true.</li>
                <li><strong>Ukutontonkanya (Opinion):</strong> Personal feeling, not true for everyone.</li>
            </ul>
            <p><strong>Listening Activity:</strong> We will listen to a short paragraph about a lion (Inkalamo).</p>
            <p><strong>Facts in the story:</strong> "Inkalamo ili na makasa anne" (The lion has four legs), "Inkalamo ilya inama" (The lion eats meat).</p>
            <p><strong>Opinions in the story:</strong> "Inkalamo ni iyatinse" (The lion is the scariest animal), "Inkalamo ni iyasuma" (The lion is very pretty).</p>
            <p><strong>Why is 'The lion has four legs' a fact?</strong> Because we can count them and it's always true for every lion!</p>
            <p><strong>Important:</strong> Always listen carefully to know what is a fact and what is just someone's feeling.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lion" style="color: #FF9800;"></i> Fact About Lion (Icishinka)</div>
                <p>"Inkalamo ili na makasa anne" (The lion has four legs) → This is a fact we can prove by looking at a lion.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment" style="color: #673AB7;"></i> Opinion About Lion (Ukutontonkanya)</div>
                <p>"Inkalamo ni iyatinse" (The lion is the scariest) → This is an opinion. Someone else might think snakes are scarier.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Shout It Out Game!</div>
                <p>When teacher reads a sentence, shout "Cishinka!" for facts and "Kutontonkanya!" for opinions!</p>
            </div>
        `,
        taskInstructions: "Listen to the teacher read a paragraph. Identify facts and opinions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Identify</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Teacher will read sentences. Write "F" for Fact (Icishinka) or "O" for Opinion (Ukutontonkanya):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) "Inkalamo ni nyama" (Lion is an animal) → <span class="answer-space" style="width: 80px;"></span></div>
                        <div>b) "Inkalamo ni iyabipa" (Lion is ugly) → <span class="answer-space" style="width: 80px;"></span></div>
                        <div>c) "Inkalamo ilya inama" (Lion eats meat) → <span class="answer-space" style="width: 80px;"></span></div>
                        <div>d) "Inkalamo ni iyasumina" (Lion is the strongest) → <span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw a Fact</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a lion and write one FACT (Icishinka) about it in Bemba:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My fact: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle TRUE if it is a fact, FALSE if it is an opinion:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ "Amata yacelwa ni ayasuma" (Cow's milk is tasty) → TRUE / FALSE</div>
                        <div>☐ "Amata yacelwa ni abilibili" (Cow's milk is liquid) → TRUE / FALSE</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one fact and one opinion about your favorite animal in Bemba:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Fact (Icishinka): <span class="answer-space" style="width: 250px;"></span></div>
                        <div>Opinion (Ukutontonkanya): <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to know the difference between fact and opinion when listening to stories or news?
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Listen to a family member tell a short story. Identify one fact and one opinion they say. Share in class tomorrow.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3BembaWeek10);
    console.log("bemba-week10-fact-opinion.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3BembaWeek10);
    console.log("bemba-week10-fact-opinion.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3BembaWeek10',
        metadata: grade3BembaWeek10.metadata,
        days: grade3BembaWeek10
    });
    console.log("bemba-week10-fact-opinion.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3BembaWeek10 = grade3BembaWeek10;
console.log("bemba-week10-fact-opinion.js loaded and registered successfully");