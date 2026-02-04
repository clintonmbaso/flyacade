// Baby Class Bemba - Week 9 Data (Objects at Home)
const babyBembaWeek8 = {
    metadata: {
        grade: "baby",
        subject: "Zambian Language (Icibemba)",
        week: 8,
        title: "Ifipe fya mu Ng’anda — Objects at Home",
        description: "Learning to name familiar household objects like cooking utensils and furniture"
    },
    
    monday: {
        subject: "Bemba",
        topic: "Ifipe fya mu Ng’anda (Objects at Home)",
        subtopic: "Names of Familiar Objects",
        lessonContent: `
            <p>Shani mwana! Welcome to our Bemba lesson! Today we will learn about things we see and use in our homes.</p>
            <p><strong>Icilendo cimo (Key Concept):</strong> Every home has special things we use every day. Let's learn their Bemba names!</p>
            <p><strong>Ninshi ifipe fya mu ng’anda?</strong></p>
            <ul>
                <li>Ifipe fya mu kishini (Things in the kitchen)</li>
                <li>Ifipe fya mu muputule (Things in the bedroom)</li>
                <li>Ifi fyo twa fwayafwaya (Things we use every day)</li>
                <li>Ifi fyo twa tuma pa kulya, kusendama, no kunyina (Things for eating, sleeping, and sitting)</li>
            </ul>
            <p><strong>Ifipe fya mu kishini (Kitchen Items):</strong></p>
            <ul>
                <li><strong>Inonshi / Supuni</strong> - Spoon</li>
                <li><strong>Imbwela / Mbale</strong> - Plate</li>
                <li><strong>Ipoto</strong> - Pot</li>
            </ul>
            <p><strong>Ifipe fya mu muputule (Bedroom Items):</strong></p>
            <ul>
                <li><strong>Intebe</strong> - Chair</li>
                <li><strong>Ubwalo / Bulo</strong> - Bed</li>
            </ul>
            <p><strong>Ukutila twa landa ifipe (How to name objects):</strong> Point and say clearly, "Ili ni ______________" (This is ______________).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensil-spoon" style="color: #4CAF50;"></i> Inonshi / Supuni</div>
                <p>"Ili ni inonshi" - This is a spoon. We use it to eat!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-concierge-bell" style="color: #FF9800;"></i> Imbwela / Mbale</div>
                <p>"Ili ni imbwela" - This is a plate. We put food on it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed" style="color: #2196F3;"></i> Ubwalo / Bulo</div>
                <p>"Ili ni ubwalo" - This is a bed. We sleep on it!</p>
            </div>
        `,
        taskInstructions: "Cita ifintu ifi uku landa ifipe fya mu ng’anda (Do these activities to practice naming household objects).",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Tonta no Kuwanda (Point and Name):
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p>Teacher shows pictures. Point and say:</p>
                    <div>1. "Ili ni ______________" (This is a ______________)</div>
                    <div>2. "Nalya na ______________" (I eat with a ______________)</div>
                    <div>3. "Nasendama pa ______________" (I sleep on a ______________)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Tola Ifipe (Find the Objects):
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                    <p>Teacher places toy objects around the room. When called, walk to:</p>
                    <div>• "Ya ku Ipotu" (Go to the Pot)</div>
                    <div>• "Ya ku Intebe" (Go to the Chair)</div>
                    <div>• "Ya ku Ubwalo" (Go to the Bed)</div>
                    <div>When you get there, say: "Nafika pa ______________!"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Sonkanya Ifipe (Sort the Items):
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Draw two houses on paper:</div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: space-around;">
                        <div style="text-align: center;">
                            <div style="font-weight: bold;">Kishini</div>
                            <div>(Kitchen)</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-weight: bold;">Mputule</div>
                            <div>(Bedroom)</div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;">Draw items in the correct house: Spoon, Plate, Pot in Kitchen; Chair, Bed in Bedroom.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Landa Ifipe (Naming Game):
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Pass an object. When it's your turn:</div>
                    <div>1. Hold it up</div>
                    <div>2. Say: "Ili ni ______________"</div>
                    <div>3. Class repeats: "Ee, ili ni ______________!"</div>
                    <div>Practice with: ☐ Inonshi ☐ Imbwela ☐ Ipotu ☐ Intebe ☐ Ubwalo</div>
                </div>
            </div>
        `,
        homework: "Landa ifipe isatu fya mu ng’anda yobe ku ba mfyashi bobe (Name three household objects to your parents).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Bemba",
        topic: "Ifipe fya mu Kishini no mu Mputule",
        subtopic: "Grouping Kitchen and Bedroom Objects",
        lessonContent: `
            <p>Shani kabili! Today we will learn to group objects by where they belong in the house.</p>
            <p><strong>Icilendo cimo (Key Concept):</strong> Some things belong in the kitchen, some in the bedroom. Let's learn to sort them!</p>
            <p><strong>Ifipe fya mu kishini (Kitchen Items):</strong></p>
            <ul>
                <li><strong>Inonshi / Supuni</strong> - For eating</li>
                <li><strong>Imbwela / Mbale</strong> - For serving food</li>
                <li><strong>Ipoto</strong> - For cooking</li>
                <li>"Ifi fipe fya mu kishini" (These are kitchen items)</li>
            </ul>
            <p><strong>Ifipe fya mu muputule wa kusendama (Bedroom Items for Sleeping):</strong></p>
            <ul>
                <li><strong>Intebe</strong> - For sitting</li>
                <li><strong>Ubwalo / Bulo</strong> - For sleeping</li>
                <li>"Ifi fipe fya mu muputule" (These are bedroom items)</li>
            </ul>
            <p><strong>Ukutila twa sonkanya (How to group):</strong> Point and say, "Ili fya mu ______________" (This belongs in the ______________).</p>
            <p><strong>Kutumpa ifipe (Remembering objects):</strong> When we know where things belong, we can help at home!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #E91E63;"></i> Ifipe fya mu Kishini</div>
                <p>"Inonshi, imbwela, ne ipotu fya mu kishini" - Spoons, plates, and pots belong in the kitchen.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed" style="color: #3F51B5;"></i> Ifipe fya mu Mputule</div>
                <p>"Intebe ne ubwalo fya mu muputule" - Chairs and beds belong in the bedroom.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home" style="color: #4CAF50;"></i> Ng'anda Yonse (Whole House)</div>
                <p>"Ifipe fimbi fya mu ng'anda: mu sala, mu cibansa, mu cimbusu" - Other things are in the living room, bathroom, outside.</p>
            </div>
        `,
        taskInstructions: "Cita ifintu ifi uku sonkanya no kuwanda ifipe (Do these activities to practice grouping and naming objects).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sonkanya Ifipe (Sort the Objects)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put objects in the correct box:
                    <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                        <div style="text-align: center; padding: 10px; background-color: #FFECB3; border-radius: 5px; width: 45%;">
                            <div style="font-weight: bold;">KISHINI</div>
                            <div>(Kitchen)</div>
                            <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 1px solid #FF9800;"></div>
                            <div style="margin-top: 5px;">Draw: Inonshi, Imbwela, Ipotu</div>
                        </div>
                        <div style="text-align: center; padding: 10px; background-color: #E3F2FD; border-radius: 5px; width: 45%;">
                            <div style="font-weight: bold;">MPUTULE</div>
                            <div>(Bedroom)</div>
                            <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 1px solid #2196F3;"></div>
                            <div style="margin-top: 5px;">Draw: Intebe, Ubwalo</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tonta no Kulanda (Point and Name)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Teacher points, you say where it belongs:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FCE4EC; border-radius: 5px;">
                        <div><strong>Teacher shows spoon:</strong> "Ifi fya shani?" (Where does this belong?)</div>
                        <div><strong>Child answers:</strong> "Fya mu ______________" (It belongs in the ______________)</div>
                        <div style="margin-top: 10px;">Practice with all five objects.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Imisango ya mu Ng'anda (House Game)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Walk to different "rooms" in the classroom:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div>When teacher says: "Ya mu kishini" (Go to the kitchen)</div>
                        <div>• Find kitchen objects there</div>
                        <div>• Say: "Nafuma inonshi, imbwela, ne ipotu" (I see spoon, plate, and pot)</div>
                        <div>When teacher says: "Ya mu muputule" (Go to the bedroom)</div>
                        <div>• Find bedroom objects there</div>
                        <div>• Say: "Nafuma intebe ne ubwalo" (I see chair and bed)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fwaya Ifipe (Find the Object)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Close your eyes. Teacher hides an object. Open eyes and:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Look for it</div>
                        <div>2. When found, say: "Nafumine ______________!" (I found ______________!)</div>
                        <div>3. Say where it belongs: "Fya mu ______________" (It belongs in the ______________)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Landa ifipe fya mu kishini no mu muputule mu ng'anda yobe. Tonta ku mfyashi (Name kitchen and bedroom objects in your home. Point to them for your parents).",
        homeworkDue: "Wednesday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyBembaWeek8);
    console.log("bemba-week8-objects.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyBembaWeek8);
    console.log("bemba-week8-objects.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyBembaWeek8',
        metadata: babyBembaWeek8.metadata,
        days: babyBembaWeek8
    });
    console.log("bemba-week8-objects.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyBembaWeek8 = babyBembaWeek8;
console.log("bemba-week8-objects.js loaded and registered successfully");