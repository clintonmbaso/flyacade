// Grade 2 Mathematics and Science - Week 9 Data (Prevention and Matching Symptoms)
const grade2MathScienceWeek9 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        week: 9,
        title: "Prevention and Matching Symptoms — Keeping Our Community Healthy",
        description: "Learning disease prevention methods, hygiene practices, and matching diseases with symptoms"
    },
    
    monday: {
        subject: "Science",
        topic: "Preventing Malaria and Bilharzia",
        subtopic: "Understanding insect and water-based disease prevention",
        lessonContent: `
            <p>Welcome to Science class! This week we will learn how to keep ourselves and our families healthy by preventing diseases.</p>
            <p><strong>Key Concept:</strong> Some diseases come from insects like mosquitoes, and some come from dirty water.</p>
            <p><strong>What is Malaria?</strong></p>
            <ul>
                <li>Malaria is a sickness that comes from mosquito bites</li>
                <li>Mosquitoes that carry malaria often bite at night</li>
                <li>Symptoms include fever, chills, and feeling very tired</li>
            </ul>
            <p><strong>How to prevent Malaria:</strong></p>
            <ul>
                <li>Sleep under a treated mosquito net every night</li>
                <li>Wear long sleeves and pants in the evening</li>
                <li>Keep doors and windows closed or screened</li>
            </ul>
            <p><strong>What is Bilharzia?</strong></p>
            <ul>
                <li>Bilharzia comes from tiny worms in stagnant water</li>
                <li>People get it when they swim or play in infected water</li>
                <li>Symptoms include stomach ache and blood in urine</li>
            </ul>
            <p><strong>How to prevent Bilharzia:</strong> Stay away from dirty pond water and only swim in clean, flowing water.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mosquito" style="color: #8B4513;"></i> Mosquito Net Example</div>
                <p>"I sleep under a mosquito net every night" - This protects me from malaria-carrying mosquitoes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water" style="color: #1E90FF;"></i> Clean Water Example</div>
                <p>"I only swim in clean water at the swimming pool" - This protects me from Bilharzia.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Net Protection Game!</div>
                <p>Let's pretend to be mosquitoes trying to "bite" through a pretend net. The net keeps us safe!</p>
            </div>
        `,
        taskInstructions: "Complete activities to practice malaria and bilharzia prevention.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the pictures that show good prevention methods:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Picture of a mosquito net</div>
                    <div>☐ Picture of swimming in a dirty pond</div>
                    <div>☐ Picture of wearing short sleeves at night</div>
                    <div>☐ Picture of clean swimming pool</div>
                    <div>☐ Picture of long sleeve pajamas</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw yourself using a mosquito net or wearing protective clothing:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">This protects me from: ________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create your "Protection Rule":
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <div><strong>My Protection Rule:</strong></div>
                    <div class="answer-space" style="height: 60px; width: 100%; margin-top: 10px;">"Always ________________ and never ________________"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match the prevention method with the disease:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Sleep under mosquito net → ☐ Bilharzia</div>
                    <div>Avoid dirty pond water → ☐ Malaria</div>
                    <div>Wear long sleeves → ☐ Both</div>
                </div>
            </div>
        `,
        homework: "Tell your family about mosquito nets and clean water. Draw a picture of your family following one prevention rule.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Handwashing and Hygiene",
        subtopic: "Proper handwashing to prevent Diarrhea and Cholera",
        lessonContent: `
            <p>Today we will learn how proper handwashing can keep us from getting sick!</p>
            <p><strong>Key Concept:</strong> Germs on our hands can make us sick with diarrhea and cholera if they get into our mouth.</p>
            <p><strong>What are Diarrhea and Cholera?</strong></p>
            <ul>
                <li>Both are illnesses that cause stomach problems</li>
                <li>They come from germs in dirty water or food</li>
                <li>Handwashing helps stop these germs from spreading</li>
            </ul>
            <p><strong>The Six Steps of Handwashing:</strong></p>
            <ol>
                <li><strong>Wet</strong> your hands with clean water</li>
                <li><strong>Soap</strong> your hands all over</li>
                <li><strong>Scrub</strong> your hands for 20 seconds (front, back, between fingers)</li>
                <li><strong>Rinse</strong> with clean water</li>
                <li><strong>Dry</strong> with a clean towel</li>
                <li><strong>Turn off</strong> the tap with the towel</li>
            </ol>
            <p><strong>When to wash hands:</strong></p>
            <ul>
                <li>After using the toilet</li>
                <li>Before eating or touching food</li>
                <li>After playing outside</li>
                <li>After touching animals</li>
                <li>When hands look dirty</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-wash" style="color: #4CAF50;"></i> Handwashing Example</div>
                <p>"I wash my hands before lunch every day" - This removes germs that could make me sick.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-soap" style="color: #00BCD4;"></i> Soap and Water</div>
                <p>"Soap helps lift germs off our hands so water can wash them away" - Soap is our germ-fighting friend!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Handwashing Song Game!</div>
                <p>Let's sing the "Happy Birthday" song twice while scrubbing our hands. This makes sure we wash long enough!</p>
            </div>
        `,
        taskInstructions: "Practice the six steps of handwashing and identify when to wash hands.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Handwashing Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Number the handwashing steps in order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>____ Scrub between fingers</div>
                        <div>____ Wet hands with water</div>
                        <div>____ Dry with clean towel</div>
                        <div>____ Apply soap</div>
                        <div>____ Rinse with water</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: When to Wash</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle when you should wash your hands:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Before eating an apple</div>
                        <div>☐ After playing with toys</div>
                        <div>☐ After using the toilet</div>
                        <div>☐ Before going to sleep</div>
                        <div>☐ After touching a pet</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw yourself washing hands at one important time:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I am washing hands: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Germ Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match the activity with the germs it might spread:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Not washing after toilet → ☐ Diarrhea germs</div>
                        <div>Eating with dirty hands → ☐ Cholera germs</div>
                        <div>Drinking dirty water → ☐ Both</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice the six handwashing steps at home. Teach them to one family member.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Respiratory Etiquette",
        subtopic: "Preventing spread of Colds, Coughs, and COVID",
        lessonContent: `
            <p>Today we learn how to stop germs from spreading when we cough or sneeze!</p>
            <p><strong>Key Concept:</strong> Germs can travel through the air when we cough or sneeze without covering.</p>
            <p><strong>Why is this important?</strong> Colds, coughs, and COVID can spread to others through these germs.</p>
            <p><strong>The Dracula Sneeze (Cough into elbow):</strong></p>
            <ul>
                <li>When you feel a cough or sneeze coming, turn your head</li>
                <li>Cough or sneeze into your elbow, not your hands</li>
                <li>This traps germs in your clothing instead of spreading them</li>
            </ul>
            <p><strong>Using tissues:</strong></p>
            <ul>
                <li>Use a tissue when you have a runny nose</li>
                <li>Throw the tissue away immediately after use</li>
                <li>Wash your hands after using a tissue</li>
            </ul>
            <p><strong>Masks in crowded places:</strong></p>
            <ul>
                <li>Masks help stop germs from spreading to others</li>
                <li>Wear masks when you're in crowded places or when sick</li>
                <li>Masks protect you and protect others</li>
            </ul>
            <p><strong>Protecting our community:</strong> When we use respiratory etiquette, we help keep everyone healthy!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-head-side-cough" style="color: #795548;"></i> Dracula Sneeze</div>
                <p>"I cough into my elbow like Dracula hiding in his cape" - This keeps germs from spreading to friends.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mask" style="color: #3F51B5;"></i> Mask Example</div>
                <p>"I wear a mask on the bus to protect myself and others" - Masks are like shields against germs.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Tissue Toss Game!</div>
                <p>Let's practice proper tissue use by tossing used tissues into a trash can target!</p>
            </div>
        `,
        taskInstructions: "Practice respiratory etiquette and understand when to use masks.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Dracula Pose</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw yourself doing the "Dracula Sneeze":
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>When I cough into my elbow, I protect: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tissue Rules</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Number the tissue steps in order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>____ Wash your hands</div>
                        <div>____ Blow your nose</div>
                        <div>____ Throw tissue in trash</div>
                        <div>____ Take a clean tissue</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: When to Wear a Mask</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle when you should wear a mask:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ At home with family</div>
                        <div>☐ On a crowded bus</div>
                        <div>☐ When you have a cold</div>
                        <div>☐ Playing alone outside</div>
                        <div>☐ At the doctor's office</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Community Protection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the sentence:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0;">
                        <div>When I use respiratory etiquette, I help keep my <span class="answer-space" style="width: 100px;"></span> healthy.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice the Dracula Sneeze at home. Teach it to one family member.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Matching Diseases with Symptoms",
        subtopic: "Linking diseases to their common signs",
        lessonContent: `
            <p>Today we will use matching skills to connect diseases with their symptoms!</p>
            <p><strong>Key Concept:</strong> Different diseases have different symptoms. Knowing them helps us understand when we might be sick.</p>
            <p><strong>What are symptoms?</strong> Symptoms are signs that show our body is fighting an illness.</p>
            <p><strong>Common Diseases and Symptoms:</strong></p>
            <ul>
                <li><strong>Cold:</strong> Runny nose, sneezing, mild cough</li>
                <li><strong>Malaria:</strong> Fever, chills, headache, tiredness</li>
                <li><strong>Diarrhea:</strong> Stomach ache, frequent watery stools</li>
                <li><strong>Cough/COVID:</strong> Dry cough, difficulty breathing, fever</li>
                <li><strong>Bilharzia:</strong> Stomach pain, blood in urine</li>
            </ul>
            <p><strong>Why matching is important:</strong> When we know which symptoms match which disease, we can:</p>
            <ul>
                <li>Tell adults how we feel</li>
                <li>Get the right treatment</li>
                <li>Know when to rest and recover</li>
            </ul>
            <p><strong>Mathematics connection:</strong> Today we're practicing matching – an important math skill!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half" style="color: #f44336;"></i> Fever Match</div>
                <p>"Fever and chills" matches with "Malaria" - These are common malaria symptoms.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint" style="color: #9C27B0;"></i> Runny Nose Match</div>
                <p>"Runny nose and sneezing" matches with "Cold" - These tell us we might have a cold.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Matching Memory Game!</div>
                <p>Let's play a memory game with disease cards and symptom cards. Find the matches!</p>
            </div>
        `,
        taskInstructions: "Match diseases with their correct symptoms using lines.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw the Lines</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each disease to its symptom:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; justify-content: space-between;">
                        <div style="width: 45%;">
                            <div><strong>Diseases</strong></div>
                            <div>Cold</div>
                            <div>Malaria</div>
                            <div>Diarrhea</div>
                            <div>Cough/COVID</div>
                            <div>Bilharzia</div>
                        </div>
                        <div style="width: 45%;">
                            <div><strong>Symptoms</strong></div>
                            <div>Fever and chills</div>
                            <div>Runny nose</div>
                            <div>Stomach ache</div>
                            <div>Dry cough</div>
                            <div>Blood in urine</div>
                        </div>
                    </div>
                    <div style="height: 150px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Symptom Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write which disease has these symptoms:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Frequent watery stools: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Runny nose and sneezing: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Fever, headache, tiredness: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Picture Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match the picture with the disease:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Picture of thermometer → ☐ Diarrhea</div>
                        <div>Picture of tissue → ☐ Malaria</div>
                        <div>Picture of stomach → ☐ Cold</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: When to Tell an Adult</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle symptoms that mean you should tell an adult:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Mild runny nose</div>
                        <div>☐ High fever</div>
                        <div>☐ Blood in urine</div>
                        <div>☐ Difficulty breathing</div>
                        <div>☐ Little stomach ache</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create your own matching game with 3 diseases and 3 symptoms. Draw pictures for each.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Community Health Heroes",
        subtopic: "Summarizing all prevention methods learned",
        lessonContent: `
            <p>Today we celebrate becoming Health Heroes! We'll review everything we learned this week.</p>
            <p><strong>Key Concept:</strong> Each of us can be a Health Hero by practicing good habits that keep our community safe.</p>
            <p><strong>What we learned this week:</strong></p>
            <ol>
                <li><strong>Monday:</strong> Prevent malaria with nets and bilharzia by avoiding dirty water</li>
                <li><strong>Tuesday:</strong> Wash hands properly to prevent diarrhea and cholera</li>
                <li><strong>Wednesday:</strong> Use respiratory etiquette to prevent colds, coughs, and COVID</li>
                <li><strong>Thursday:</strong> Match diseases with their symptoms</li>
            </ol>
            <p><strong>Why we are Health Heroes:</strong></p>
            <ul>
                <li>We protect ourselves from getting sick</li>
                <li>We protect our families by sharing what we learned</li>
                <li>We protect our community by stopping germs from spreading</li>
            </ul>
            <p><strong>Our Health Hero Pledge:</strong> "I promise to practice healthy habits and teach others to do the same!"</p>
            <p><strong>Today's celebration:</strong> We'll create Health Hero badges and share our favorite healthy habit!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt" style="color: #FF9800;"></i> Health Hero Example</div>
                <p>"I am a Health Hero because I wash my hands before eating" - This simple habit fights germs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #4CAF50;"></i> Community Protection</div>
                <p>"When I cover my cough, I protect my classmates" - Health Heroes protect others too!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Health Hero Parade!</div>
                <p>Let's march around the classroom showing our Health Hero drawings and saying our pledge!</p>
            </div>
        `,
        taskInstructions: "Create your Health Hero identity and celebrate what you've learned.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: My Health Hero Badge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Design a Health Hero badge for yourself:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My Health Hero name: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Healthy Habit</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw yourself doing your favorite healthy habit:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This habit prevents: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Teaching Others</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Who will you teach about health? What will you teach them?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I will teach: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>I will teach them to: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Health Hero Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace and sign the Health Hero Pledge:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #E8F5E9; border: 2px solid #4CAF50; border-radius: 10px; font-size: 18px;">
                        <div style="text-align: center; font-weight: bold;">Health Hero Pledge</div>
                        <div style="margin-top: 10px; text-align: center;">
                            "I promise to practice healthy habits<br>
                            and teach others to do the same.<br>
                            I am a Community Health Hero!"
                        </div>
                        <div style="margin-top: 15px; border-top: 1px solid #ccc; padding-top: 10px;">
                            Signed: <span class="answer-space" style="width: 200px; border-bottom: 1px solid #000;"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Week Review</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle all the healthy habits you practiced this week:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Washed hands properly</div>
                        <div>☐ Coughed into elbow</div>
                        <div>☐ Avoided dirty water</div>
                        <div>☐ Used mosquito net (or talked about it)</div>
                        <div>☐ Matched symptoms with diseases</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach one health lesson to your family. Have them sign your Health Hero Pledge.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek9);
    console.log("mathscience-week9-prevention.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek9);
    console.log("mathscience-week9-prevention.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek9',
        metadata: grade2MathScienceWeek9.metadata,
        days: grade2MathScienceWeek9
    });
    console.log("mathscience-week9-prevention.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek9 = grade2MathScienceWeek9;
console.log("mathscience-week9-prevention.js loaded and registered successfully");