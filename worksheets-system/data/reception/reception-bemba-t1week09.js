// Reception Class Bemba - Week 9 Data (Wild Animals of Zambia)
const receptionBembaWeek9 = {
    metadata: {
        grade: "reception",
        subject: "Zambian Language (Icibemba)",
        week: 9,
        title: "Ifyamwana Fya Mu Mpanga — Wild Animals of Zambia",
        description: "Learning to name common wild animals in Bemba through stories, chants, and movement"
    },
    
    monday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Ifyamwana Fya Mu Mpanga",
        subtopic: "Kings of the Wild",
        specificCompetence: "Name common wild animals.",
        learningActivity: "Naming common wild animals.",
        introduction: "Tell a short story about the 'Bush' (Impanga) and who lives there.",
        lessonContent: `
            <p>Mwapoleni bana! Welcome to our Bemba class! Today we will learn about wild animals that live in the bush (Impanga).</p>
            <p><strong>Ingomba Yalishibikwa:</strong> Impanga ili na ifyamwana ifingi. Lelo twaishiba ifibili.</p>
            <p><strong>Inkalamo (Lion) - Umwine wa Mpanga</strong></p>
            <ul>
                <li>Inkalamo nkalamo (Lion is strong)</li>
                <li>Ili na mushili wa mukungu (Has a loud roar)</li>
                <li>Umwine wa mpanga (King of the bush)</li>
            </ul>
            <p><strong>Insofu (Elephant) - Umukalamba</strong></p>
            <ul>
                <li>Insofu nkulu (Elephant is big)</li>
                <li>Ili na mumpoto (Has a trunk)</li>
                <li>Ilyafya amenshi (Drinks water)</li>
            </ul>
            <p><strong>Icitendelo:</strong> Tuleimba ulwimbo lwa "Ukwaba Inkalamo" (Lion hunt chant).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lion" style="color: #FF9800;"></i> Inkalamo (Lion)</div>
                <p>Inkalamo nkalamo! Ili na mushili wa mukungu. "ROAR!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-elephant" style="color: #795548;"></i> Insofu (Elephant)</div>
                <p>Insofu nkulu! Ilefwaya amenshi. Ili na mumpoto.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Ulwimbo lwa Kwaba Inkalamo</div>
                <p>Tuleimba na kucita amacitiko: "Tuleya ku mpanga, tuleya ku mpanga! Kwaba inkalamo!"</p>
            </div>
        `,
        lessonSteps: `
            <ol>
                <li>Introduce the Lion (Inkalamo) and the Elephant (Insofu).</li>
                <li>Teach the children a "Lion hunt" chant in Bemba, using big movements.</li>
                <li>Show silhouettes of the animals and ask children to name them.</li>
            </ol>
        `,
        taskInstructions: "Pewani na kulemba ifyamwana.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Lekeni palya cilya mwamona:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div class="animal-silhouette" style="height: 80px; background-color: #f5f5f5; border-radius: 5px; margin-bottom: 5px;"></div>
                        <div>Iyi ni: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div class="animal-silhouette" style="height: 80px; background-color: #f5f5f5; border-radius: 5px; margin-bottom: 5px;"></div>
                        <div>Iyi ni: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Cita amacitiko ya ulwimbo:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF8E1; border-radius: 5px;">
                    <div style="font-weight: bold;">"Tuleya ku mpanga!"</div>
                    <div>Cita amacitiko ya kuya: <span class="answer-space" style="width: 150px;"></span></div>
                </div>
                <div style="margin-top: 10px; padding: 10px; background-color: #FFEBEE; border-radius: 5px;">
                    <div style="font-weight: bold;">"Kwaba inkalamo!"</div>
                    <div>Cita inkalamo: <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Pewani ifyamwana ifibili:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">Inkalamo</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">Insofu</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
        `,
        expectedStandard: "Common wild animals named correctly.",
        homework: "Lelangani kuli bataata nangu bamayo amashina ya Inkalamo na Insofu.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Ifyamwana Fya Mu Mpanga",
        subtopic: "Tall and Small Wild Friends",
        specificCompetence: "Name common wild animals.",
        learningActivity: "Naming common wild animals.",
        introduction: "Review the names of the Lion and Elephant.",
        lessonContent: `
            <p>Baiseni bana! Lelo tulefunda ifyamwana fimbi fya mu mpanga.</p>
            <p><strong>Kutandila:</strong> Twatandila na kuyobela Inkalamo na Insofu.</p>
            <p><strong>Inyimbili (Giraffe) - Itali</strong></p>
            <ul>
                <li>Inyimbili itali (The giraffe is tall)</li>
                <li>Ili na mutwe wapalwaluba (Has a long neck)</li>
                <li>Ilya amabula (Eats leaves)</li>
            </ul>
            <p><strong>Kolwe (Monkey) - Ikonkele</strong></p>
            <ul>
                <li>Kolwe ikanono (The monkey is small)</li>
                <li>Ili na mukono (Has a tail)</li>
                <li>Ilecita amacitiko (Likes to jump)</li>
            </ul>
            <p><strong>Icitendelo:</strong> Tulecita umutendelo wa "Inyimbili na Kolwe".</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-giraffe" style="color: #FFC107;"></i> Inyimbili (Giraffe)</div>
                <p>Inyimbili itali! Ilefwaya amabula ku miti. "Nalitala!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-monkey" style="color: #8D6E63;"></i> Kolwe (Monkey)</div>
                <p>Kolwe ikanono! Ilecita amacitiko na kuya ku miti. "Nalikonkele!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Umutendelo wa Fyamwana</div>
                <p>Cita nga Inyimbili nangu Kolwe mpaka mwalimu abula lishina!</p>
            </div>
        `,
        lessonSteps: `
            <ol>
                <li>Introduce the Giraffe (Inyimbili) and the Monkey (Kolwe).</li>
                <li>Practice describing them simply: "Inyimbili itali" (The giraffe is tall).</li>
                <li>Play a game where children act like a monkey or a giraffe until the teacher calls out the Bemba name.</li>
            </ol>
        `,
        taskInstructions: "Citeni na kulemba ifyamwana.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Ukulemba Amashina</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Yankeni imyabo:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ifyamwana fitatu fya mu mpanga: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Inyimbili ni: <span class="answer-space" style="width: 150px;"></span> (tall/short)</div>
                        <div>Kolwe ni: <span class="answer-space" style="width: 150px;"></span> (big/small)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Ukulinga Fyamwana</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Cita nga:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Inyimbili: <span class="answer-space" style="width: 150px;"></span> (tall walking)</div>
                        <div>Kolwe: <span class="answer-space" style="width: 150px;"></span> (jumping)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Umutendelo wa Mapinda</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Mumapinda, cita ifyamwana:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; background-color: #FFF3E0;">
                            <div style="text-align: center; font-weight: bold;">Mapinda A</div>
                            <div style="text-align: center;">Citeni nga Inyimbili</div>
                            <div style="text-align: center; font-size: 0.9em;">(tall, eating leaves)</div>
                        </div>
                        <div style="flex: 1; padding: 10px; background-color: #E8F5E9;">
                            <div style="text-align: center; font-weight: bold;">Mapinda B</div>
                            <div style="text-align: center;">Citeni nga Kolwe</div>
                            <div style="text-align: center; font-size: 0.9em;">(small, jumping)</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Ukupenda</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Pewani ifyamwana:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Inyimbili</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Kolwe</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        expectedStandard: "Common wild animals named correctly.",
        homework: "Lelangani kuli ba ndalama amashina ya Inyimbili na Kolwe. Baini abena balecita nga fyena.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(receptionBembaWeek9);
    console.log("reception-bemba-week9-wildanimals.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(receptionBembaWeek9);
    console.log("reception-bemba-week9-wildanimals.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'receptionBembaWeek9',
        metadata: receptionBembaWeek9.metadata,
        days: receptionBembaWeek9
    });
    console.log("reception-bemba-week9-wildanimals.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.receptionBembaWeek9 = receptionBembaWeek9;
console.log("reception-bemba-week9-wildanimals.js loaded and registered successfully");