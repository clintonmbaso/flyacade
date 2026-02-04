// Middle Class Bemba - Week 2 Data (Personal and Social Identity)
const middleBembaWeek2 = {
    metadata: {
        grade: "middle",
        subject: "Zambian Language (Icibemba)",
        week: 2,
        title: "Personal and Social Identity — Ishina Lyandi na Cibusa Wandandi",
        description: "Learning to state own name and identify a friend's name in Bemba"
    },
    
    monday: {
        subject: "Bemba",
        topic: "Ishina Lyandi (Own Name)",
        subtopic: "Clearly stating and responding to one's own name in Bemba",
        lessonContent: `
            <p>Mwashibukeni abaana! Welcome to our Bemba lesson! Today we will learn about something very special about each of us – our names!</p>
            <p><strong>Key Concept (Iyi citaayalo):</strong> Umuuntu alila na ishina lyakwe lyakupela. Ishina lyobe lyafula! (Everyone has their own special name. Your name is important!)</p>
            <p><strong>What is a name? (Ishina ni caani?)</strong></p>
            <ul>
                <li>Ilyo icabo abantu bakukuta (The word people call you)</li>
                <li>Cintu cacitumpa ukuti ni we ani (How we know who is who)</li>
                <li>Cintu cacitumpa ukuti nga muli umo (What makes you unique)</li>
                <li>Cintu abashikulu na ifibusa bacitumpa ukuti ni wewe (How teachers and friends know you)</li>
            </ul>
            <p><strong>How to say your name (Ukwishiba ukutila ishina lyobe):</strong> Imina uletampa pantanshi uwishile ne cing'a, "Ishina lyandi ni [Ishina Lyobe]!"</p>
            <p><strong>How to respond when called (Ukwishiba ukupusuka pantu uunfwile ishina lyobe):</strong> Pantu uunfwile ishina lyobe, uleponsha ukuti "Epo ndi!" nomba ukwiminina ukwasa ukuboko.</p>
            <p><strong>Why are names important? (Cinshi ifishina fyafula?)</strong> Ifishina natuposha ukumanyana, ukupanga ifibusa, nomba ukumfwilisha ukuti nga muli umo!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user" style="color: #4CAF50;"></i> Ukwelekesha Iwe Mwine (Introducing Yourself)</div>
                <p>"Ishina lyandi ni Amina." - Eyo ni katila tukasoselela abantu ukuti nifwe ani.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Ukupusuka Pantu Uunfwile Ishina Lyobe (Roll Call Response)</div>
                <p>Bashikulu: "Amina?" Amina: "Epo ndi!" - Eyo ni katila tukapusuka pantu tuunfwile ifishina fyetu.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Ulwimbo lwa "Mwashibukeni"! (Hello Song!)</div>
                <p>Twaletambe ulwimbo lwetu lwa "Mwashibukeni"! Pantu ilyo cilefika icashika, wewe wishile ishina lyobe nga ulicemfya!</p>
            </div>
        `,
        taskInstructions: "Elimeni ifilambilamo ififintu fyonse ukuletamba ukwishiba ukutila ifishina nomba ukupusuka pantu uunfwile ishina lyobe.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Ulwamfya wa Bola (Ball Toss Game):
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p>Ikaleni mu mpanda. Pantu bola ilefika kuli iwe:</p>
                    <div>1. Ikwata bola</div>
                    <div>2. Imina uletampa pantanshi</div>
                    <div>3. Wishile: "Ishina lyandi ni ______________"</div>
                    <div>4. Icilasa cileponsha: "Mwashibukeni ______________!"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Ulukalulo lwa Ishina Lyobe (Draw your name badge):
                <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
                    <div style="font-size: 24px; font-weight: bold;">Ishina Lyandi: ______________</div>
                </div>
                <div style="margin-top: 10px;">Ikonkeni ulukalulo lwa ishina lyobe nga muli amalangishi yamunyoko!</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Ukulemba ifishina (Roll call practice):
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                    <div><strong>Bashikulu:</strong> "David?"</div>
                    <div class="answer-space" style="height: 30px; width: 200px; display: inline-block; margin-left: 10px;">Umwana aleponsha: ________________</div>
                    <div><em>Kumbukilani ukwiminina ukwasa ukuboko pantu mwapusuka!</em></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Ulwamfya wa Ifishina (Name matching game):
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Pantu bashikulu baleebele ishina lyobe, iminini uwaminine!</div>
                    <div>Ukulemba: ☐ David ☐ Amina ☐ Samuel ☐ Fatima</div>
                </div>
            </div>
        `,
        homework: "Lembelela ukwishiba 'Ishina lyandi ni...' kuli balumendo batatu aba mu lukaya. Baambile ukuti na bo babeele ifishina fyabo.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Bemba",
        topic: "Ishina lya Cibusa Wandandi (Friend's Name)",
        subtopic: "Identifying and naming a friend's name in Bemba",
        lessonContent: `
            <p>Lelo tulilaba ukwishiba ukumanya no kukumbula ifishina fya fibusa fyetu!</p>
            <p><strong>Key Concept (Iyi citaayalo):</strong> Ifibusa ni abantu abafula ifyo twalaba na bo nokutamba na bo. Ukumanya ifishina fyabo kukwonesha ukuti twabafula.</p>
            <p><strong>What is a friend? (Cibusa ni caani?)</strong></p>
            <ul>
                <li>Umuuntu ifyo twatamba na we (Someone we play with)</li>
                <li>Umuuntu ifyo twasangana na we (Someone we share with)</li>
                <li>Umuuntu uwaleikala pafupi na ifwe (Someone who sits near us)</li>
                <li>Umuuntu uwatwalabila (Someone we can talk to)</li>
            </ul>
            <p><strong>How to ask for a name (Ukwishiba ukupusha ishina):</strong> Lolela cibusa cobe uwishile ne, "Ishina lyobe ni we ani?" nga muli umusebo!</p>
            <p><strong>How to tell about a friend (Ukwishiba ukusoselela pantu cibusa):</strong> Wishile "Cibusa wandi ni [Ishina]."</p>
            <p><strong>Remembering names (Ukukumbula ifishina):</strong> Pantu twalaba ifishina fya fibusa fyetu, twaleta ukupanga ifibusa ifingi nomba ukutamba pamo nga twasangana!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-friends" style="color: #2196F3;"></i> Ukupusha Cibusa (Asking a Friend)</div>
                <p>"Ishina lyobe ni we ani?" "Ishina lyandi ni David." - Eyo ni katila twalaba ifishina fyacilamuntu.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train" style="color: #FF9800;"></i> Ing'anda ya Fibusa (Friendship Train)</div>
                <p>"Cibusa wandi ni Amina!" - Eyo ni katila twalelekesha ifibusa fyetu kuli bandi.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Ulwamfya wa Ing'anda ya Fibusa! (Friendship Train Game!)</div>
                <p>Twaingile ing'anda! Umwana uwaleba mu mpoto apusha, "Ishina lyobe ni we ani?" na wishile, "Cibusa wandi ni..." kuli cibusa cilicilwa icileingila!</p>
            </div>
        `,
        taskInstructions: "Elimeni ifilambilamo ififintu fyonse ukuletamba ukumanya no kukutila ifishina fya fibusa.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Ing'anda ya Fibusa (The Friendship Train)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Twaletambe ulwamfya wa Ing'anda ya Fibusa:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div>1. Umwana umo aleba nga engine</div>
                        <div>2. Alendamukila kuli cibusa no kupusha: "Ishina lyobe ni we ani?"</div>
                        <div>3. Cibusa cileponsha: "Ishina lyandi ni ______"</div>
                        <div>4. Engine wishile: "Cibusa wandi ni ______"</div>
                        <div>5. Cibusa cipya cileingila mu ng'anda!</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Ukwelekesha Icibusa (Partner Introductions)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Ingileni na umwana uwaleikala pafupi na iwe. Lembelela ukwelekesha icibusa cobe:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FCE4EC; border-radius: 5px;">
                        <div><strong>Kuli Bashikulu:</strong> "Aca ni cibusa candi. Cibusa wandi ni ______________."</div>
                        <div style="margin-top: 10px;">Lukaluleni icikalamo cacili iwe na cibusa cobe pamo:</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ulwamfya wa Ukukumbula Ifishina (Name Memory Game)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Songelani kuli cibusa cakwesha pantu bashikulu baleebele ishina lyacobe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Bashikulu baleebele: "David" → Songela kuli David uwishile: "Cibusa wandi ni David!"</div>
                        <div>Bashikulu baleebele: "Amina" → Songela kuli Amina uwishile: "Cibusa wandi ni Amina!"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Impanda ya Fibusa (Friendship Circle)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Ikaleni mu mpanda. Sendekelani kuli umwana uwaleikala pafupi na iwe uwishile:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"Mwashibukeni! Ishina lyandi ni ______________."</div>
                        <div>"Ishina lyobe ni we ani?"</div>
                        <div>"Cibusa wandi ni ______________."</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Pusha umwana umo aba mu lukaya, 'Ishina lyobe ni we ani?' Lembelela ukwishiba, 'Cibusa wandi ni...' (na bo balumendo aba mu lukaya linga muli fibusa!)",
        homeworkDue: "Wednesday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleBembaWeek2);
    console.log("bemba-week2-objects.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleBembaWeek2);
    console.log("bemba-week2-objects.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleBembaWeek2',
        metadata: middleBembaWeek2.metadata,
        days: middleBembaWeek2
    });
    console.log("bemba-week2-objects.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleBembaWeek2 = middleBembaWeek2;
console.log("bemba-week2-objects.js loaded and registered successfully");