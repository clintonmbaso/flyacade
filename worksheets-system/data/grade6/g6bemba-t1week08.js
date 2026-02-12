// Grade 6 Zambian Language Bemba - Week 8 Data (Activities, Clothing & Cardinal Points)
const grade6BembaWeek8 = {
metadata: {
grade: 6,
subject: "Zambian Language (Icibemba)",
week: 8,
title: "Imilimo ya pa Nshita ne Fitungu fya Calo — Seasonal Activities & Cardinal Points",
description: "Learning to discuss seasonal activities, clothing, and cardinal directions in Bemba"
},

monday: {
    subject: "Bemba",
    topic: "Vocabulary (Calendar)",
    subtopic: "Imilimo ya pa Nshita — Seasonal Activities and Clothing",
    duration: "40 Minutes",
    learningObjectives: [
        "Discuss human activities associated with each season in Bemba",
        "Identify types of clothing worn during different seasons",
        "Use verbs related to seasonal work correctly"
    ],
    lessonContent: `
        <p>Mwapoleni mukwai! Today we will learn about activities and clothing for different seasons in Bemba.</p>
        
        <p><strong>Key Concept:</strong> Mainshinsa, Impepo, na Akasanya — Three main seasons and what people do during each.</p>
        
        <p><strong>Bemba Seasons & Activities:</strong></p>
        <ul>
            <li><strong>Mainshinsa</strong> (Rainy Season): Ukubyala (planting), ukulimuna (weeding), ukufyala imboga (planting vegetables). Clothing: Amajeketi ya mfula (raincoats), amatabi (gumboots), amalobelo (umbrellas).</li>
            <li><strong>Impepo</strong> (Cold Season): Ukukota umulilo (warming by the fire), ukupota (fetching firewood), ukufunda (studying by the fire). Clothing: Amasweta (sweaters), amajeketi (jackets), imitiba (scarves).</li>
            <li><strong>Akasanya</strong> (Hot Season): Ukusepa (harvesting), ukunowa (swimming), ukupula (winnowing), ukusansamuka (relaxing). Clothing: Ifyakufwala ifipepuka (light clothes), amasandali (sandals), icipumi (hat/cap).</li>
        </ul>
        
        <p><strong>Useful Verbs:</strong> Ukubyala (to plant), Ukusepa (to harvest), Ukunowa (to swim), Ukukota (to warm oneself), Ukupota (to fetch firewood), Ukulimuna (to weed).</p>
        
        <div class="cultural-note" style="background-color: #E3F2FD; padding: 10px; border-radius: 8px; margin-top: 15px;">
            <p><em><i class="fas fa-lightbulb"></i> Did you know?</em> In traditional Bemba culture, ukusepa (harvest) is a time of celebration. Communities gather to help each other in the fields, and the harvest is shared among families.</p>
        </div>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-cloud-rain" style="color: #2196F3;"></i> Mainshinsa (Rainy Season)</div>
            <p><strong>Sentence:</strong> Mu Mainshinsa, twalyaale ifilimwa no kufwala amajeketi ya mfula.</p>
            <p><strong>Translation:</strong> In the rainy season, we plant crops and wear raincoats.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-snowflake" style="color: #4FC3F7;"></i> Impepo (Cold Season)</div>
            <p><strong>Sentence:</strong> Mu Impepo, twakota umulilo no kufwala amasweta.</p>
            <p><strong>Translation:</strong> In the cold season, we warm by the fire and wear sweaters.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-sun" style="color: #FF9800;"></i> Akasanya (Hot Season)</div>
            <p><strong>Sentence:</strong> Mu Akasanya, twasepa ifilimwa no kunowa mu menshi.</p>
            <p><strong>Translation:</strong> In the hot season, we harvest crops and swim in the water.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-users"></i> Group Discussion</div>
            <p>Why do we wear different clothes during Impepo compared to Akasanya? Discuss in your groups and share with the class.</p>
        </div>
    `,
    taskInstructions: "Complete the following activities to practice vocabulary for seasons, activities, and clothing.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> Match each season with its correct Bemba name and activity:
            <div style="margin-left: 20px; margin-top: 10px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 5px;">Rainy Season</td>
                        <td style="padding: 5px;">→ <span class="answer-space" style="width: 100px;"></span></td>
                        <td style="padding: 5px;">Activity: <span class="answer-space" style="width: 100px;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 5px;">Cold Season</td>
                        <td style="padding: 5px;">→ <span class="answer-space" style="width: 100px;"></span></td>
                        <td style="padding: 5px;">Activity: <span class="answer-space" style="width: 100px;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 5px;">Hot Season</td>
                        <td style="padding: 5px;">→ <span class="answer-space" style="width: 100px;"></span></td>
                        <td style="padding: 5px;">Activity: <span class="answer-space" style="width: 100px;"></span></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">2</span> Circle the correct clothing item for each season:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div><strong>Mainshinsa:</strong> ☐ Amasweta ☐ Amajeketi ya mfula ☐ Amasandali</div>
                <div><strong>Impepo:</strong> ☐ Amajeketi ya mfula ☐ Imitiba ☐ Ifyakufwala ifipepuka</div>
                <div><strong>Akasanya:</strong> ☐ Amatabi ☐ Amajeketi ☐ Amasandali</div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">3</span> Complete the sentences with the correct Bemba verb:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>a) Mu Mainshinsa, twa___________ ifilimwa. (plant)</div>
                <div>b) Mu Impepo, twa___________ umulilo. (warm by fire)</div>
                <div>c) Mu Akasanya, twa___________ ifilimwa. (harvest)</div>
                <div>d) Mu Akasanya, twa___________ mu menshi. (swim)</div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">4</span> Write three sentences in Bemba describing what you do during one of the seasons:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>Season chosen: <span class="answer-space" style="width: 150px;"></span></div>
                <div style="margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 200px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 200px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 200px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">5</span> Draw and label one clothing item for each season:
            <div style="display: flex; margin-top: 10px;">
                <div style="flex: 1; padding: 10px; text-align: center;">
                    <div><strong>Mainshinsa:</strong></div>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <div>Name: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
                <div style="flex: 1; padding: 10px; text-align: center;">
                    <div><strong>Impepo:</strong></div>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <div>Name: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
                <div style="flex: 1; padding: 10px; text-align: center;">
                    <div><strong>Akasanya:</strong></div>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <div>Name: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "Ask your family members: What activities do they do during Mainshinsa? Write five Bemba sentences about their answers.",
    homeworkDue: "Wednesday"
},

wednesday: {
    subject: "Bemba",
    topic: "Vocabulary (Directions)",
    subtopic: "Ifitungu fya Calo — Cardinal Points",
    duration: "40 Minutes",
    learningObjectives: [
        "Identify the four cardinal points in Bemba",
        "Show the direction of each cardinal point",
        "Respond to directional commands in Bemba"
    ],
    lessonContent: `
        <p>Mwapoleni! Today we will learn how to identify and show the four cardinal directions in Bemba.</p>
        
        <p><strong>Key Concept:</strong> Ifitungu fya Calo — The four main directions that help us navigate.</p>
        
        <p><strong>Cardinal Points in Bemba:</strong></p>
        <ul>
            <li><strong>Kutulwa kwa kasuba</strong> (East) — Where the sun rises. <em>Ukufuma kwa kasuba</em></li>
            <li><strong>Kuwila kwa kasuba</strong> (West) — Where the sun sets. <em>Ubushiku bwakwila</em></li>
            <li><strong>Kuntunga na ku kulyo</strong> (North) — Often called "the right-hand side when facing east"</li>
            <li><strong>Kumbatoto</strong> (South) — The opposite of north</li>
        </ul>
        
        <p><strong>How to remember:</strong></p>
        <ul>
            <li>Face the rising sun → That is <strong>Kutulwa kwa kasuba</strong> (East)</li>
            <li>Behind you is <strong>Kuwila kwa kasuba</strong> (West)</li>
            <li>Your right hand points to <strong>Kuntunga na ku kulyo</strong> (North)</li>
            <li>Your left hand points to <strong>Kumbatoto</strong> (South)</li>
        </ul>
        
        <div class="practical-note" style="background-color: #FFF9C4; padding: 10px; border-radius: 8px; margin-top: 15px;">
            <p><strong><i class="fas fa-compass"></i> Practical Tip:</strong> If you face the sunrise, the sun's path moves across the sky from your front (East) to your back (West).</p>
        </div>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-sun" style="color: #FFC107;"></i> Using the Sun</div>
            <p><strong>Teacher:</strong> "Kabili kasuba kalatulwa kwi?" (Where does the sun rise?)</p>
            <p><strong>Learner:</strong> "Kasuba kalatulwa ku Kutulwa kwa kasuba!" (The sun rises in the East!)</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-compass" style="color: #4CAF50;"></i> Direction Practice</div>
            <p><strong>Sentence:</strong> Lunda ali mu Kuntunga na ku kulyo. Cilundu cimo cali mu Kumbatoto.</p>
            <p><strong>Translation:</strong> Lunda is in the North. Another hill was in the South.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> "Simon Says" — Bemba Style!</div>
            <p><strong>"Bashibusa balefwaya" (Simon says):</strong></p>
            <ul style="margin-top: 5px;">
                <li>"Loleka ku Kutulwa kwa kasuba!" (Face East!)</li>
                <li>"Loleka ku Kumbatoto!" (Face South!)</li>
                <li>"Loleka ku Kuwila kwa kasuba!" (Face West!)</li>
                <li>"Loleka ku Kuntunga na ku kulyo!" (Face North!)</li>
            </ul>
        </div>
    `,
    taskInstructions: "Practice identifying and using the four cardinal points in Bemba.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Direction Identification</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Match the Bemba cardinal point to its English meaning:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Kutulwa kwa kasuba → <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Kuwila kwa kasuba → <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Kuntunga na ku kulyo → <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Kumbatoto → <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Fill in the Blanks</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Complete the sentences:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Kasuba kalatulwa ku _____________.</div>
                    <div>b) Kasuba kalakwila ku _____________.</div>
                    <div>c) Nganda ya sukulu ili ku _____________. (North)</div>
                    <div>d) Ulubuto luli ku _____________. (South)</div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Drawing Cardinal Points</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Draw a compass rose and label the four cardinal points in Bemba:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div class="drawing-area" style="height: 150px; width: 150px; margin: 0 auto;"></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Direction Game</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Work with a partner. Take turns giving directions in Bemba. Write three commands you practiced:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 200px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 200px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 200px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part E: Real World Application</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Look outside your classroom or home. Answer these questions in Bemba:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Where does the sun rise? <span class="answer-space" style="width: 150px;"></span></div>
                    <div>b) Which direction is your school's main entrance? <span class="answer-space" style="width: 150px;"></span></div>
                    <div>c) If you face East, what direction is behind you? <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part F: Writing Practice</strong></p>
            <div class="task-item">
                <span class="task-number">6</span> Write two sentences in Bemba describing where important places are located using cardinal points:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 250px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 250px;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "At home, stand outside and identify the four cardinal directions using the sun as a guide. Write down four Bemba sentences: one describing something located in each direction.",
    homeworkDue: "Next Monday"
}
    
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6BembaWeek8);
console.log("g6bemba-t1week08.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6BembaWeek8);
console.log("g6bemba-t1week08.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6BembaWeek8',
metadata: grade6BembaWeek8.metadata,
days: grade6BembaWeek8
});
console.log("g6bemba-t1week08.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6BembaWeek8 = grade6BembaWeek8;
console.log("g6bemba-t1week08.js loaded and registered successfully");