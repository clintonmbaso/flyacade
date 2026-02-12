// Grade 6 Bemba - Week 5 Data (Cardinal Numbers and Numerical Operations)
const grade6BembaWeek5 = {
metadata: {
grade: 6,
subject: "Zambian Language (Icibemba)",
week: 5,
title: "Ukupenda no Kubala — Cardinal Numbers and Operations",
description: "Learning to count up to 1000 in Bemba and perform simple mathematical operations"
},

    
monday: {
    subject: "Bemba",
    topic: "Cardinal Numbers (Imibala ya Penda)",
    subtopic: "Counting from 1 to 1000",
    lessonContent: `
        <p>Mwapoleni mukwai! Today we will learn to count in Bemba up to 1000.</p>
        <p><strong>Key Concept:</strong> Ukupenda mu ciBemba ukufika pa 1000. Counting in Bemba up to 1000.</p>
        
        <p><strong>Bemba Numbers Review (1–100):</strong></p>
        <ul>
            <li><strong>1–10:</strong> -mo, -bili, -tatu, -ne, -sano, -mutanda, -cine lubali, -cine konse, -pabula, -ikumi</li>
            <li><strong>11–19:</strong> Ikumi na -mo, Ikumi na -bili, etc.</li>
            <li><strong>20:</strong> Amakumi yabili</li>
            <li><strong>30:</strong> Amakumi yatatu</li>
            <li><strong>40:</strong> Amakumi yane</li>
            <li><strong>50:</strong> Amakumi yasano</li>
            <li><strong>60:</strong> Amakumi mutanda</li>
            <li><strong>70:</strong> Amakumi cine lubali</li>
            <li><strong>80:</strong> Amakumi cine konse</li>
            <li><strong>90:</strong> Amakumi pabula</li>
            <li><strong>100:</strong> Umwanda</li>
        </ul>
        
        <p><strong>Counting Hundreds and Thousands:</strong></p>
        <ul>
            <li><strong>100:</strong> Umwanda umo</li>
            <li><strong>200:</strong> Amawanda yabili</li>
            <li><strong>300:</strong> Amawanda yatatu</li>
            <li><strong>400:</strong> Amawanda yane</li>
            <li><strong>500:</strong> Amawanda yasano</li>
            <li><strong>600:</strong> Amawanda mutanda</li>
            <li><strong>700:</strong> Amawanda cine lubali</li>
            <li><strong>800:</strong> Amawanda cine konse</li>
            <li><strong>900:</strong> Amawanda pabula</li>
            <li><strong>1000:</strong> Ikana limo</li>
        </ul>
        
        <p><strong>Examples of larger numbers:</strong></p>
        <ul>
            <li>245: Amawanda yabili, amakumi yane na -sano</li>
            <li>518: Amawanda yasano, ikumi limo na -cine konse</li>
            <li>1000: Ikana limo</li>
        </ul>
        
        <p><strong>Pronunciation Tip:</strong> When saying hundreds, we say "Amawanda" followed by the number. For thousands, we say "Ikana" followed by the number.</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-calculator" style="color: #2196F3;"></i> Counting Practice</div>
            <p><strong>Let's count together:</strong></p>
            <p>100: Umwanda umo<br>200: Amawanda yabili<br>300: Amawanda yatatu<br>400: Amawanda yane<br>500: Amawanda yasano<br>1000: Ikana limo</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-ear-listen"></i> Number Dictation Game</div>
            <p>Teacher says: "Amawanda yabili, amakumi yane na -tatu" (243)<br>Learners write: 243</p>
            <p>Teacher says: "Ikana limo, amawanda yasano" (1500)<br>Learners write: 1500</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-users"></i> Group Counting</div>
            <p>In groups of four, practice counting by hundreds: 100, 200, 300 ... up to 1000!</p>
        </div>
    `,
    taskInstructions: "Complete the following activities to practice counting in Bemba up to 1000.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> Write the Bemba names for these numbers:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>100 → <span class="answer-space" style="width: 120px;"></span></div>
                <div>300 → <span class="answer-space" style="width: 120px;"></span></div>
                <div>600 → <span class="answer-space" style="width: 120px;"></span></div>
                <div>900 → <span class="answer-space" style="width: 120px;"></span></div>
                <div>1000 → <span class="answer-space" style="width: 120px;"></span></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">2</span> Number Dictation: Listen to your teacher and write the digits:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>a) <span class="answer-space" style="width: 80px;"></span> (Amawanda yane, amakumi yasano na -bili)</div>
                <div>b) <span class="answer-space" style="width: 80px;"></span> (Amawanda yasano, amakumi yatatu na -mo)</div>
                <div>c) <span class="answer-space" style="width: 80px;"></span> (Ikana limo, amawanda yabili)</div>
                <div>d) <span class="answer-space" style="width: 80px;"></span> (Amawanda pabula, amakumi cine konse na -sano)</div>
                <div>e) <span class="answer-space" style="width: 80px;"></span> (Amawanda mutanda, amakumi yane na -tatu)</div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">3</span> Write these numbers in Bemba words:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>127 → <span class="answer-space" style="width: 180px;"></span></div>
                <div>345 → <span class="answer-space" style="width: 180px;"></span></div>
                <div>562 → <span class="answer-space" style="width: 180px;"></span></div>
                <div>789 → <span class="answer-space" style="width: 180px;"></span></div>
                <div>1000 → <span class="answer-space" style="width: 180px;"></span></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">4</span> Count by hundreds. Fill in the missing numbers in Bemba:
            <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                <div>Umwanda umo, <span class="answer-space" style="width: 120px;"></span>, Amawanda yatatu, <span class="answer-space" style="width: 120px;"></span>, Amawanda yasano, <span class="answer-space" style="width: 120px;"></span>, Amawanda cine lubali, <span class="answer-space" style="width: 120px;"></span>, Amawanda pabula, <span class="answer-space" style="width: 120px;"></span></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">5</span> Match the Bemba number to its digit:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div style="display: flex; flex-wrap: wrap;">
                    <div style="width: 50%;">Amawanda yabili, amakumi yane na -tatu → <span class="answer-space" style="width: 50px;"></span></div>
                    <div style="width: 50%;">Amawanda yasano, amakumi yasano → <span class="answer-space" style="width: 50px;"></span></div>
                    <div style="width: 50%;">Ikana limo, amawanda yane → <span class="answer-space" style="width: 50px;"></span></div>
                    <div style="width: 50%;">Amawanda cine konse, amakumi yane na -bili → <span class="answer-space" style="width: 50px;"></span></div>
                    <div style="width: 50%;">Amawanda mutanda, ikumi limo na -sano → <span class="answer-space" style="width: 50px;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "Write the Bemba words for these numbers: 250, 473, 618, 834, 1000. Practice counting by hundreds at home with a family member.",
    homeworkDue: "Wednesday"
},

wednesday: {
    subject: "Bemba",
    topic: "Numerical Operations (Imibala ya Mibala)",
    subtopic: "Addition and Subtraction in Bemba",
    lessonContent: `
        <p>Mwapoleni! Today we will learn how to perform addition and subtraction in Bemba.</p>
        
        <p><strong>Key Vocabulary:</strong></p>
        <ul>
            <li><strong>Ukusansha</strong> — Addition (to add together)</li>
            <li><strong>Ukufufula</strong> — Subtraction (to take away)</li>
            <li><strong>Pali</strong> — Plus/And</li>
            <li><strong>Kufumyamo</strong> — Minus/Take away</li>
            <li><strong>Kulingana na</strong> — Equals</li>
            <li><strong>Ishibalo</strong> — Mathematics</li>
            <li><strong>Ibala</strong> — Number</li>
        </ul>
        
        <p><strong>Example Sentences:</strong></p>
        <ul>
            <li>Amawanda yabili <strong>pali</strong> amawanda yatatu <strong>kulingana na</strong> amawanda yasano. (200 + 300 = 500)</li>
            <li>Amawanda yane <strong>kufumyamo</strong> umwanda umo <strong>kulingana na</strong> amawanda yatatu. (400 - 100 = 300)</li>
            <li>Ikana limo <strong>pali</strong> amawanda yabili <strong>kulingana na</strong> ikana limo, amawanda yabili. (1000 + 200 = 1200)</li>
        </ul>
        
        <p><strong>Explaining Numerical Data:</strong> We can use Bemba to describe real-world numbers.</p>
        <p><em>Example:</em> "Isukulu lyesu lili na bashikulu umwanda umo na amakumi yasano." (Our school has 150 students.)</p>
        <p><em>Example:</em> "Mu sitolo muli amawanda yabili ya makele, kufumyamo amawanda yasano, kusala amawanda cine konse." (The shop had 200 eggs, take away 50, remaining 150.)</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-plus-circle" style="color: #4CAF50;"></i> Addition in Bemba (Ukusansha)</div>
            <p>150 + 230 = 380</p>
            <p><strong>Bemba:</strong> Amawanda umo, amakumi yasano <strong>pali</strong> amawanda yabili, amakumi yatatu <strong>kulingana na</strong> amawanda yatatu, amakumi cine konse.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-minus-circle" style="color: #F44336;"></i> Subtraction in Bemba (Ukufufula)</div>
            <p>500 - 200 = 300</p>
            <p><strong>Bemba:</strong> Amawanda yasano <strong>kufumyamo</strong> amawanda yabili <strong>kulingana na</strong> amawanda yatatu.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-chart-bar"></i> Explaining Data</div>
            <p>"Mu kalasi mwaba abana amawanda yabili, amakumi yane na -bili. Abalumendo ni amawanda umo, amakumi yasano na -mo, abanakashi ni amawanda umo, amakumi pabula na -mo."</p>
            <p>(In class there are 242 children. Boys are 151, girls are 91.)</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> Math Relay Race!</div>
            <p>In teams, solve the Bemba math problem and run to write the answer on the board!</p>
        </div>
    `,
    taskInstructions: "Practice addition and subtraction in Bemba, and explain numerical data.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Addition Practice (Ukusansha)</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Write the answer in Bemba words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Amawanda yabili pali amawanda yane = <span class="answer-space" style="width: 180px;"></span></div>
                    <div>Amawanda yasano pali amawanda yatatu = <span class="answer-space" style="width: 180px;"></span></div>
                    <div>Ikana limo pali amawanda yabili = <span class="answer-space" style="width: 180px;"></span></div>
                    <div>Amawanda cine konse pali amawanda mutanda = <span class="answer-space" style="width: 180px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Subtraction Practice (Ukufufula)</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Write the answer in Bemba words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Amawanda yane kufumyamo umwanda umo = <span class="answer-space" style="width: 180px;"></span></div>
                    <div>Amawanda pabula kufumyamo amawanda yasano = <span class="answer-space" style="width: 180px;"></span></div>
                    <div>Ikana limo kufumyamo amawanda yabili = <span class="answer-space" style="width: 180px;"></span></div>
                    <div>Amawanda cine lubali kufumyamo amawanda yatatu = <span class="answer-space" style="width: 180px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Solve and Write in Digits</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Read the Bemba problem and write the answer in digits:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                    <div>a) Amawanda yatatu pali amawanda yane = <span class="answer-space" style="width: 60px;"></span></div>
                    <div>b) Amawanda yasano kufumyamo amawanda yabili = <span class="answer-space" style="width: 60px;"></span></div>
                    <div>c) Ikana limo pali amawanda cine lubali = <span class="answer-space" style="width: 60px;"></span></div>
                    <div>d) Amawanda pabula kufumyamo amawanda mutanda = <span class="answer-space" style="width: 60px;"></span></div>
                    <div>e) Amawanda yabili, amakumi yane na -tatu pali amawanda umo, amakumi yasano na -bili = <span class="answer-space" style="width: 60px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Explain Numerical Data</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Write a sentence in Bemba to describe this data:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Example:</strong> Kalasi ya Grade 6: Abana 85</div>
                    <div><strong>Your sentence:</strong> <span class="answer-space" style="width: 300px; display: inline-block;"></span></div>
                </div>
                <div style="margin-left: 20px; margin-top: 15px;">
                    <div><strong>Sukulu: Abasambi 124, Abasambi banakashi 68, Abasambi balumendo 56</strong></div>
                    <div><strong>Your sentence:</strong> <span class="answer-space" style="width: 300px; display: inline-block;"></span></div>
                </div>
                <div style="margin-left: 20px; margin-top: 15px;">
                    <div><strong>Sitolo: Ifyabiye 350, Ifyacitika 275</strong></div>
                    <div><strong>Your sentence:</strong> <span class="answer-space" style="width: 300px; display: inline-block;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part E: Create Your Own Problem</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Write one addition and one subtraction problem in Bemba, then solve:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Ukusansha:</strong> <span class="answer-space" style="width: 250px;"></span> = <span class="answer-space" style="width: 60px;"></span></div>
                    <div style="margin-top: 10px;"><strong>Ukufufula:</strong> <span class="answer-space" style="width: 250px;"></span> = <span class="answer-space" style="width: 60px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part F: Class Survey</strong></p>
            <div class="task-item">
                <span class="task-number">6</span> Count the number of boys and girls in your class. Write the total in Bemba:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Abalumendo: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Abanakashi: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Bonse pamo: <span class="answer-space" style="width: 180px;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "Ask 10 people in your community (family, neighbors) how many chickens, goats, or cows they have. Write the total in Bemba and create one addition and one subtraction problem using your data.",
    homeworkDue: "Monday, Week 6"
}
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6BembaWeek5);
console.log("bemba-week5-cardinal-numbers.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6BembaWeek5);
console.log("bemba-week5-cardinal-numbers.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6BembaWeek5',
metadata: grade6BembaWeek5.metadata,
days: grade6BembaWeek5
});
console.log("bemba-week5-cardinal-numbers.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6BembaWeek5 = grade6BembaWeek5;
console.log("bemba-week5-cardinal-numbers.js loaded and registered successfully");