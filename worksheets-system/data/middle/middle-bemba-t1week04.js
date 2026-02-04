// Middle Class Bemba - Week 4 Data (Parts of the Body and Objects at Home)
const middleBembaWeek4 = {
    metadata: {
        grade: "middle",
        subject: "Zambian Language (Icibemba)",
        week: 4,
        title: "Ifilundwa fya Mubili na Ifipe fya mu Ng’anda",
        description: "Learning to name body parts and familiar household objects in Bemba"
    },
    
    monday: {
        subject: "Bemba",
        topic: "Ifilundwa fya Mubili",
        subtopic: "Names of Body Parts",
        lessonContent: `
            <p>Bwingi bwakwisa ku Bemba! Lelo tulilongesha ifilundwa fya mubili.</p>
            <p><strong>Ukutekanya:</strong> Ifilundwa fyonse fya mubili fili na amashina yafyo.</p>
            <p><strong>Ici cebo ca kale:</strong> Twimbe iyimbo ya "Mutu, mapeya, amakufi, na makayo" (Head, Shoulders, Knees, and Toes).</p>
            <p><strong>Ifilundwa ifikulu:</strong></p>
            <ul>
                <li><strong>Mutwe</strong> - Head</li>
                <li><strong>Mapeya</strong> - Shoulders</li>
                <li><strong>Menso</strong> - Eyes</li>
                <li><strong>Minwe</strong> - Fingers/Hands</li>
                <li><strong>Molu</strong> - Legs</li>
                <li><strong>Matwi</strong> - Ears</li>
                <li><strong>Amakufi</strong> - Knees</li>
                <li><strong>Makayo</strong> - Toes</li>
            </ul>
            <p><strong>Ukubomfya:</strong> Bonse abana balasumina ne kuyabomba pali ifilundwa fya mubili yabo.</p>
            <p><strong>Bamayo bonse bali bamo:</strong> Fili ne bamayo bamo e lyo abantu bonse bali na ifilundwa ifyo fimo.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user" style="color: #4CAF50;"></i> Ukulanga Ifilundwa</div>
                <p>"Uyu mutwe" - Ilyi ni mutwe.</p>
                <p>"Aya mapeya" - Ifi ni mapeya.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-up" style="color: #FF9800;"></i> Ukutenena Ifilundwa</div>
                <p>Mwalimi: "Lolesha ku mutwe wobe!" Abana: "Mutwe!"</p>
                <p>Mwalimi: "Lolesha ku minwe!" Abana: "Minwe!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music" style="color: #9C27B0;"></i> Iyimbo ya "Mutu, Mapeya"</div>
                <p>Twimbe filya filya: "Mutu, mapeya, amakufi, na makayo..."</p>
            </div>
        `,
        taskInstructions: "Bombeni ifi fibomba fyakupitilisya ukubomfya ifilundwa fya mubili.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Iyimbo na Ukukonkonona:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p>Imbeni iyimbo ya "Mutu, mapeya, amakufi, na makayo":</p>
                    <div>1. Imbeni nga mukonkonona ifilundwa</div>
                    <div>2. Fulumisha amatwi: "Mutwe!" → Konkoneni ku mutwe</div>
                    <div>3. Fulumisha amatwi: "Matwi!" → Konkoneni ku matwi</div>
                    <div>4. Fulumisha amatwi: "Menso!" → Konkoneni ku menso</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Siketi ya "Simoni Atila":
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                    <div><strong>Simoni atila:</strong> "Tenani ku matwi!" → Mukonkonone ku matwi</div>
                    <div><strong>Simoni atila:</strong> "Tenani ku minwe!" → Mukonkonone ku minwe</div>
                    <div><strong>Simoni TATILA:</strong> "Tenani ku milimo!" → Mukatine</div>
                    <div><em>Abena bafita niba ŵakwata ifilundwa ifyabomfya!</em></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Sonsa Ifilundwa:
                <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center;">
                        <div style="font-size: 20px; font-weight: bold;">Mubili</div>
                        <div style="margin-top: 10px;">Sonseni ne kulayisha:</div>
                        <div>Mutwe: ______________</div>
                        <div>Menso: ______________</div>
                        <div>Minwe: ______________</div>
                        <div>Molu: ______________</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Ubushe "Ikateni!":
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Mwalimi alaamba: "Ikateni ku ______________!"</div>
                    <div>Abana balakata ifilundwa ilyo bafumishe:</div>
                    <div>☐ Mutwe ☐ Matwi ☐ Minwe ☐ Molu ☐ Menso</div>
                </div>
            </div>
        `,
        homework: "Lolesheni ku mubili wobe mu ciluli. Ambileni umwana wobe ukuti: 'Uyu ni ______________' (ifilundwa fya mubili).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Bemba",
        topic: "Ifipe fya mu Ng’anda",
        subtopic: "Names of Familiar Objects at Home",
        lessonContent: `
            <p>Lelo tulilongesha ifipe fya mu ng’anda mwa Bemba!</p>
            <p><strong>Ukutekanya:</strong> Ifipe fyonse fya mu ng’anda fili na amashina yafyo.</p>
            <p><strong>Ici cebo ca kale:</strong> Mwalimi alaamba: "Mwaileshe ciani icakulya ico mulile muku mulalelo?"</p>
            <p><strong>Ifipe ifikulu fya mu ng’anda:</strong></p>
            <ul>
                <li><strong>Inonshi / Supuni</strong> - Spoon</li>
                <strong>Imbwela / Mbale</strong> - Plate</li>
                <strong>Ipoto</strong> - Pot</li>
                <strong>Intebe</strong> - Chair</li>
                <strong>Ubwalo / Bulo</strong> - Bed</li>
                <strong>Itafule</strong> - Table</li>
            </ul>
            <p><strong>Ukubomfya:</strong> "Ifi fipe fya mu kishini" (ifi ni ifipe fya mu cipani).</p>
            <p><strong>Ukubomfya:</strong> "Ifi fipe fya mu muputule wa kusendama" (ifi ni ifipe fya mu cipani ca kusendamapo).</p>
            <p><strong>Ukulanga:</strong> Peelani ifipe na kuyaambila amashina yafyo.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensil-spoon" style="color: #795548;"></i> Ifipe fya mu Kishini</div>
                <p>"Uyu monshi" - Ilyi ni supuni.</p>
                <p>"Uyu poto" - Ilyi ni ipoto ya kupekanya.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair" style="color: #3F51B5;"></i> Ifipe fya mu Muputule</div>
                <p>"Uyu intebe" - Ilyi ni intebe ya kukikala.</p>
                <p>"Uyu bwalo" - Ilyi ni bulo lya kusendama.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #FF5722;"></i> Ukusanga Ifipe</div>
                <p>"Enda ku intebe!" → Ya ku intebe.</p>
                <p>"Lolesha ku mbale!" → Lolesha ku mbale.</p>
            </div>
        `,
        taskInstructions: "Bombeni ifi fibomba fyakupitilisya ukubomfya ifipe fya mu ng’anda.",
        taskContent: `
            <div class="content-box">
                <p><strong>Icikalamba: Ukulanga Ifipe</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Mwalimi alalanga ifipe e lyo abana balayamba:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                        <div>Mwalimi: "Uyu ni ______________"</div>
                        <div>Abana: "______________"</div>
                        <div>Ifipe: ☐ Inonshi ☐ Imbwela ☐ Ipot ☐ Intebe ☐ Ubwalo</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipande ca bubili: Ukugawanya Ifipe</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Gawanyani ifipe mu mipango iibilibili:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E1F5FE; border-radius: 5px;">
                        <div><strong>Ifipe fya mu kishini:</strong></div>
                        <div>Inonshi, Imbwela, Ipot</div>
                        <div style="margin-top: 10px;"><strong>Ifipe fya mu muputule:</strong></div>
                        <div>Intebe, Ubwalo, Itafule</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipande ca batatu: "Ya ku ______________"</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Endani ku fipe ilyo mwalimi afumishe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Mwalimi: "Ya ku intebe!" → Enda ku intebe.</div>
                        <div>Mwalimi: "Lolesha ku monshi!" → Lolesha ku supuni.</div>
                        <div>Ifipe ifili mu cipani: ☐ Intebe ☐ Ipot ☐ Ubwalo ☐ Inonshi</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipande ca bane: Ukusonsa Ifipe</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sonseni ifipe ifibili fya mu ng’anda yobe:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Layishani: "Uyu ni ______________"</div>
                        <div>Ne: "Uyu ni ______________"</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Lolesheni mu ng’anda yobe na kusanga ifipe ifibili. Ambileni umwana wobe amashina yafyo mu Bemba.",
        homeworkDue: "Wednesday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleBembaWeek4);
    console.log("bemba-week4-objects.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleBembaWeek4);
    console.log("bemba-week4-objects.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleBembaWeek4',
        metadata: middleBembaWeek4.metadata,
        days: middleBembaWeek4
    });
    console.log("bemba-week4-objects.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleBembaWeek4 = middleBembaWeek4;
console.log("bemba-week4-objects.js loaded and registered successfully");