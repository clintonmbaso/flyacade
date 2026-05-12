// Grade 1 Zambian Language (Icibemba) - Term 2 Week 8 Data
const grade1IcibembaWeek8 = {
    metadata: {
        grade: 1,
        subject: "Zambian Language (Icibemba)",
        term: 2,
        week: 8,
        title: "Nouns - People, Places, and Things",
        description: "Identifying and using common nouns and proper nouns in Icibemba"
    },
    
    wednesday: {
        subject: "Icibemba",
        topic: "Grammar",
        subtopic: "Common Nouns (Sub-topic 1.11.1)",
        lessonContent: `
            <p>Mwaiseni pamo! Welcome to our Icibemba lesson! Today we will learn about common nouns.</p>
            <p><strong>Key Question:</strong> What are common nouns and where can we find them?</p>
            <p><strong>Introduction:</strong> Nouns are naming words. They name <strong>people, places, and things</strong>. Common nouns are general names for any person, place, or thing.</p>
            <p><strong>Examples of Common Nouns in Icibemba:</strong></p>
            <ul>
                <li><strong>People (Abantu):</strong> umwana (child), umulumendo (boy), umusheshi (teacher)</li>
                <li><strong>Places (Imbo):</strong> isukulu (school), ing'anda (house), icikusu (market)</li>
                <li><strong>Things (Ibintu):</strong> icibuuku (book), icipuna (pen), umupando (chair)</li>
                <li><strong>Animals (Inyama):</strong> imbwa (dog), inkoko (chicken), inkalamo (lion)</li>
            </ul>
            <p><strong>Classroom Nouns:</strong> Look around your classroom. What nouns can you see? A desk (umupando), a door (umulyango), a window (windo), a friend (munyina)!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> I Spy in Icibemba!</div>
                <p>"I spy with my little eye... something that is a noun!" When you play "I Spy" in Icibemba, you say "Nalolesha..." and describe the noun.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Classroom Hunt</div>
                <p>Your classroom is full of common nouns! Can you find icibuuku (book), icipuna (pen), ichalki (chalk), and icilope (eraser)?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Animal Nouns</div>
                <p>Animals are also common nouns. Imbwa (dog), naka (cat), inkoko (chicken), imbushi (goat) - these are all common nouns!</p>
            </div>
        `,
        taskInstructions: "Identify common nouns in the classroom and play noun games.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Noun Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom. Draw and label 5 common nouns you see:
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-top: 10px;">
                        <div style="border: 1px dashed #ccc; height: 80px; text-align: center; font-size: 12px;">Noun 1</div>
                        <div style="border: 1px dashed #ccc; height: 80px; text-align: center; font-size: 12px;">Noun 2</div>
                        <div style="border: 1px dashed #ccc; height: 80px; text-align: center; font-size: 12px;">Noun 3</div>
                        <div style="border: 1px dashed #ccc; height: 80px; text-align: center; font-size: 12px;">Noun 4</div>
                        <div style="border: 1px dashed #ccc; height: 80px; text-align: center; font-size: 12px;">Noun 5</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Noun Bingo</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Listen to the teacher call out nouns. Mark them on your Bingo card:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; margin-top: 10px;">
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">imbwa</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">icibuuku</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">isukulu</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">umwana</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">umupando</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">icikusu</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">icipuna</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">ing'anda</div>
                        <div style="border: 1px solid #333; padding: 10px; text-align: center;">umusheshi</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: "I Spy" Game</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Play "I Spy" with a partner. Say "Nalolesha..." and describe a noun in Icibemba. Your partner guesses!
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Example: "Nalolesha icintu icakusambililako" (I spy something for learning) → icibuuku (book)</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw one animal and one thing from your home. Write the Icibemba name:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                            <p style="text-align: center;">Animal: _________</p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                            <p style="text-align: center;">Thing: _________</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 common nouns at home. Draw a picture of each and write the Icibemba name underneath.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Icibemba",
        topic: "Grammar",
        subtopic: "Proper Nouns (Sub-topic 1.11.1)",
        lessonContent: `
            <p>Mwaiseni pamo! Welcome back to Icibemba! Today we will learn about proper nouns.</p>
            <p><strong>Key Question:</strong> What makes a proper noun special?</p>
            <p><strong>Introduction:</strong> Proper nouns are <strong>specific names</strong> of people, places, or days. They always start with a <strong>capital letter</strong>. Common nouns are general, but proper nouns name ONE specific person, place, or thing!</p>
            <p><strong>Common Noun vs. Proper Noun Examples:</strong></p>
            <ul>
                <li><strong>People:</strong> umulumendo (boy) → <strong>John</strong></li>
                <li><strong>People:</strong> umwana (child) → <strong>Bwalya</strong></li>
                <li><strong>People:</strong> umusheshi (teacher) → <strong>Teacher Mutale</strong></li>
                <li><strong>Places:</strong> isukulu (school) → <strong>Chifundo Basic School</strong></li>
                <li><strong>Places:</strong> umushi (village) → <strong>Mansa</strong></li>
                <li><strong>Places:</strong> icikusu (market) → <strong>Lubuto Market</strong></li>
                <li><strong>Days:</strong> ubushiku (day) → <strong>Moscow (Wednesday)</strong>, <strong>Lubuli (Thursday)</strong></li>
            </ul>
            <p><strong>Days of the Week in Icibemba (Proper Nouns):</strong></p>
            <ul>
                <li>Mubende (Monday)</li>
                <li>Cibili (Tuesday)</li>
                <li>Moscow (Wednesday)</li>
                <li>Lubuli (Thursday)</li>
                <li>Mukubili (Friday)</li>
                <li>Muka Kabwe (Saturday)</li>
                <li>Mulungu (Sunday)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user"></i> Your Name is a Proper Noun!</div>
                <p>"Umwana" means child (common noun). But YOUR name - like "Mary" or "Kelvin" - is a proper noun because it names ONE specific person!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Place Names</div>
                <p>"Isukulu" means school (common noun). "Lusaka" is a proper noun - it names one specific city! "Zambia" is also a proper noun.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-day"></i> Capital Letter Rule</div>
                <p>Proper nouns always start with a capital letter. Compare: "umusheshi" (teacher - common) vs. "Teacher Mulenga" (proper).</p>
            </div>
        `,
        taskInstructions: "Sort common nouns and proper nouns, and practice writing proper nouns with capital letters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Common vs. Proper Noun Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Cut and glue or write each noun in the correct column:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 2px solid #4A90E2; border-radius: 10px; padding: 10px;">
                            <h4 style="text-align: center; color: #4A90E2;">Common Nouns</h3>
                            <div class="common-sort-area" style="height: 150px; border: 1px dashed #ccc; margin-top: 10px;"></div>
                        </div>
                        <div style="border: 2px solid #E84A5F; border-radius: 10px; padding: 10px;">
                            <h4 style="text-align: center; color: #E84A5F;">Proper Nouns</h3>
                            <div class="proper-sort-area" style="height: 150px; border: 1px dashed #ccc; margin-top: 10px;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 15px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">umulumendo (boy)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">John</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">isukulu (school)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">Chifundo School</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">imbwa (dog)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">Bwalya</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">Moscow (Wednesday)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">umubishi (day)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">Lubuli (Thursday)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">umushi (village)</span>
                        <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 15px;">Mansa</span>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the Proper Noun</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Change each common noun into a proper noun:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• umulumendo (boy) → ___________ (your friend's name)</div>
                        <div>• umwana (child) → ___________ (your name)</div>
                        <div>• isukulu (school) → ___________ (your school's name)</div>
                        <div>• umushi (village/town) → ___________ (name of a town)</div>
                        <div>• ubushiku (day) → ___________ (today's day)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Capital Letter Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Rewrite each proper noun with a capital letter:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• john → _________</div>
                        <div>• lubuli → _________</div>
                        <div>• zambia → _________</div>
                        <div>• teacher banda → _________</div>
                        <div>• lusaka → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw yourself and your home. Write the proper noun (your name and your home's name/location):
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                            <p style="text-align: center;">Name: _________</p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                            <p style="text-align: center;">Home/School: _________</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 3 common nouns and change each one into a proper noun. Draw a small picture for each. Remember to use capital letters for your proper nouns!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1IcibembaWeek8);
    console.log("grade1-icibemba-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1IcibembaWeek8);
    console.log("grade1-icibemba-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1IcibembaWeek8',
        metadata: grade1IcibembaWeek8.metadata,
        days: grade1IcibembaWeek8
    });
    console.log("grade1-icibemba-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1IcibembaWeek8 = grade1IcibembaWeek8;
console.log("grade1-icibemba-week8.js loaded and registered successfully");