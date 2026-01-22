// Grade 2 Bemba - Week 10 Data (Describing Objects)
const grade2BembaWeek10 = {
    metadata: {
        grade: 2,
        subject: "Zambian Language (Icibemba)",
        week: 10,
        title: "Ifipe mu Ng’anda no mu Sukulu - Describing Objects",
        description: "Learning to describe objects by size, texture, color, and location"
    },
    
    wednesday: {
        subject: "Bemba",
        topic: "Ifipe mu Ng’anda no mu Sukulu",
        subtopic: "Describing Objects at Home and School",
        lessonContent: `
            <p>Bashani, nshakulolesha ifipe elyo nitukomona ukucishibisha (describing).</p>
            <p><strong>Icitika:</strong> Ukucishibisha ifipe mu ng'anda no mu sukulu.</p>
            <p><strong>Ifingashinga:</strong> Tulefwaya ukwishiba ukucishibisha ifipe nefyo fili.</p>
            <p><strong>Ifya kwishibisha:</strong></p>
            <ul>
                <li><strong>yakosa</strong> - hard</li>
                <li><strong>yatelela</strong> - smooth</li>
                <li><strong>yabatama</strong> - flat</li>
                <li><strong>ituntula</strong> - green</li>
                <li><strong>ikofu</strong> - brown</li>
                <li><strong>ikipya</strong> - new</li>
                <li><strong>ikale</strong> - old</li>
            </ul>
            <p><strong>Inshita:</strong> 40 minutes</p>
            <p><strong>Amacilapo:</strong> Abasambi balefwaya ukwishiba ne kulemba ifya kwishibisha pali ifipe ifingi.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt" style="color: #4CAF50;"></i> Ifingashinga: Insashi (Pencil)</div>
                <p>"Insashi ili <strong>yakosa</strong> elyo <strong>yatelela</strong>." (The pencil is hard and smooth.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book" style="color: #795548;"></i> Ifingashinga: Icitabo (Book)</div>
                <p>"Icitabo ni <strong>yabatama</strong> elyo ni <strong>ikipya</strong>." (The book is flat and new.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Umutende: Ukufumya Ifipe</div>
                <p>Lolesha mu klasu elyo umone ifipe ishita. Cishibisha ifipe kuli umwenso wobe ulepitisha amashina abili.</p>
            </div>
        `,
        taskInstructions: "Cita ifintu ifili panshi ukwisa ukucishibisha ifipe.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Lemba amashina abili yakucishibisha pali ifipe ifili panshi:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Insashi (pencil): <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Icitabo (book): <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Inkalamo (pen): <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Icipuna (spoon): <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Penda ifipe ishita mu klasu elyo ulembe amashina yakucishibisha:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">Ifipe iyi ni: ________________ (amashina abili)</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Umwenso: Cishibisha ifipe kuli umwenso wobe:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <div><strong>Iwe:</strong> "Lolesha ico nshakwishiba. Ni <span class="answer-space" style="width: 100px;"></span> elyo <span class="answer-space" style="width: 100px;"></span>."</div>
                    <div><strong>Umwenso:</strong> "Ni icintu cimo: ________________"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Lungisha ifya kwishibisha ukulingana nefyo fikwata:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>yakosa → ☐ ifipe ifiletelela</div>
                    <div>yatelela → ☐ ifipe ifikosa</div>
                    <div>yabatama → ☐ ifipe ifituntula</div>
                    <div>ituntula → ☐ ifipe ifipapuka</div>
                </div>
            </div>
        `,
        homework: "Lolesha ifipe ishita mu ng'anda yobe. Lemba amashina abili yakucishibisha pali ifipe isatu.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Bemba",
        topic: "Ifipe fya mu Mpanga",
        subtopic: "Describing Objects in the Environment",
        lessonContent: `
            <p>Bashani, nomba tulefwaya ukwishiba ukucishibisha ifipe ifili mu mpanga (environment).</p>
            <p><strong>Icitika:</strong> Ukucishibisha ifipe ifya mu mpanga.</p>
            <p><strong>Ifingashinga:</strong> Tulefwaya ukwishiba ukucishibisha ifipe ifili panshi nga tulimone.</p>
            <p><strong>Ifya kwishibisha:</strong></p>
            <ul>
                <li><strong>amabwe</strong> - stones</li>
                <li><strong>ifimuti</strong> - trees</li>
                <li><strong>icimuti</strong> - a tree</li>
                <li><strong>ikikula</strong> - big</li>
                <li><strong>ikonono</strong> - small</li>
                <li><strong>ilekela</strong> - tall/high</li>
                <li><strong>ikali</strong> - rough</li>
            </ul>
            <p><strong>Inshita:</strong> 40 minutes</p>
            <p><strong>Amacilapo:</strong> Abasambi balefwaya ukwishiba ukucishibisha ifipe mu mpanga nga baleba umutende.</p>
            <p><strong>Umutende: "Moneni ico mweene!" (I Spy!)</strong></p>
            <p>Umwana umo alacishibisha icintu mu mpanga (nga: "Ni ikikula, ituntula, elyo ni ilekela"), elyo abandi balakwata ico alebomba.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain" style="color: #795548;"></i> Ifingashinga: Amabwe (Stones)</div>
                <p>"Amabwe ni <strong>yakosa</strong>, <strong>ikikula</strong>, elyo <strong>ikali</strong>." (Stones are hard, big, and rough.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Ifingashinga: Icimuti (Tree)</div>
                <p>"Icimuti ni <strong>ilekela</strong>, <strong>ituntula</strong>, elyo ni <strong>ikikula</strong>." (The tree is tall, green, and big.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Umutende: Moneni Ico Mweene!</div>
                <p>Umwana umo alaba mu klasu elyo alacishibisha icintu. Abandi balefwaya ukwishiba ico alimona!</p>
            </div>
        `,
        taskInstructions: "Cita ifintu ifili panshi ukwisa ukucishibisha ifipe ifya mu mpanga.",
        taskContent: `
            <div class="content-box">
                <p><strong>Ifyabo A: Ukwishiba Ifipe</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Lemba "amabwe" nanga "ifimuti" panshi pa ifipapushi:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ifipapushi ca lithi (stone picture): <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Ifipapushi ca muti (tree picture): <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Ifipapushi ca nsenga (grass picture): <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Ifipapushi ca mashi (leaf picture): <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ifyabo B: Umutende wa Moneni Ico Mweene</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Cita umutende na umwenso wobe. Umwe alacishibisha, umwe alakwata:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Nalacishibisha: "Ni <span class="answer-space" style="width: 100px;"></span>, <span class="answer-space" style="width: 100px;"></span>, elyo <span class="answer-space" style="width: 100px;"></span>."</div>
                        <div>Ico nalimona ni: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ifyabo C: Ukupenda Ifipe ifya mu Mpanga</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Penda ifipapushi ishita: icimuti nanga amabwe:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Amabwe</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="margin-top: 5px;">Amashina: <span class="answer-space" style="width: 120px;"></span></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Icimuti</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="margin-top: 5px;">Amashina: <span class="answer-space" style="width: 120px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Ifyabo D: Ukulonga Ifya kwishibisha</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Lungisha ifya kwishibisha ne fya kwikala:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ikikula → ☐ ifipe ifikonono</div>
                        <div>ikonono → ☐ ifipe ifikikula</div>
                        <div>ilekela → ☐ ifipe ififipi</div>
                        <div>ituntula → ☐ ifipe ifikofu</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Lolesha panshi mu mpanga elyo umone ifipe isatu. Cishibisha ifipe lelo ne fya kwishibisha umwishibe.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2BembaWeek10);
    console.log("bemba-week10-descriptions.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2BembaWeek10);
    console.log("bemba-week10-descriptions.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2BembaWeek10',
        metadata: grade2BembaWeek10.metadata,
        days: grade2BembaWeek10
    });
    console.log("bemba-week10-descriptions.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2BembaWeek10 = grade2BembaWeek10;
console.log("bemba-week10-descriptions.js loaded and registered successfully");