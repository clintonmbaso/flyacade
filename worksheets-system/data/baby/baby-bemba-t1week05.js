// Baby Class Bemba - Week 5 Data (Family Relationships)
const babyBembaWeek5 = {
    metadata: {
        grade: "baby",
        subject: "Zambian Language (Icibemba)",
        week: 5,
        title: "Ifyakupalana mu Lupwa — Family Relationships",
        description: "Learning to identify mother, father, brother, and sister in Bemba"
    },
    
    monday: {
        subject: "Bemba",
        topic: "Ifyakupalana mu Lupwa — Family Relationships",
        subtopic: "Family Relationships",
        specificCompetence: "0.1.1.4.1 Tell relationship with immediate family members",
        learningActivity: "Identifying mother, father, brother, sister.",
        expectedStandard: "Relationships stated correctly in Bemba.",
        lessonContent: `
            <p>Mwaiseni mukwai! Welcome to Bemba class! Today we will learn about our family in Bemba.</p>
            <p><strong>Key Concept:</strong> Every family has special people who love and care for us.</p>
            <p><strong>Review:</strong> Who is "Mayo"? Who is "Tata"?</p>
            <p><strong>New Bemba Words:</strong></p>
            <ul>
                <li><strong>Mayo</strong> - Mother</li>
                <li><strong>Tata</strong> - Father</li>
                <li><strong>Ndume yandi</strong> - My brother (said by a girl)</li>
                <li><strong>Munyinane</strong> - My brother (said by a boy) OR My sister (said by a girl)</li>
                <li><strong>Nkashi yandi</strong> - My sister (said by a boy)</li>
            </ul>
            <p><strong>How to talk about family:</strong></p>
            <p>Point to a picture or person and say: "Uyu ni ba Mayo" (This is Mother) or "Uyu ni ba Tata" (This is Father).</p>
            <p><strong>Why learn family words?</strong> So we can talk about the people we love in our language!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-female" style="color: #E91E63;"></i> Mayo (Mother)</div>
                <p>"Uyu ni ba Mayo." - This means "This is Mother."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-male" style="color: #2196F3;"></i> Tata (Father)</div>
                <p>"Uyu ni ba Tata." - This means "This is Father."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puppet" style="color: #4CAF50;"></i> Puppet Time!</div>
                <p>Let's use puppets to practice! Teacher asks: "Uyu ni ani?" (Who is this?)</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice naming family members in Bemba.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Puppet Role Play:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p>Teacher holds up a puppet and asks: "Uyu ni ani?" (Who is this?)</p>
                    <div>1. Mayo puppet → Children say: "Ni ba Mayo!"</div>
                    <div>2. Tata puppet → Children say: "Ni ba Tata!"</div>
                    <div>3. Point to yourself and say: "Nine mwana!" (I am a child!)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw your family:
                <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
                    <div style="font-size: 18px;">Draw Mayo, Tata, and yourself</div>
                </div>
                <div style="margin-top: 10px;">Label: ☐ Mayo ☐ Tata ☐ Nine</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Family Matching Game:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                    <div>Teacher shows picture → Children say Bemba word</div>
                    <div>Practice: ☐ Picture of woman → "Mayo!"</div>
                    <div>Picture of man → "Tata!"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Sentence Practice:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Say: "Ba [Name] ni ba mayo bandi." (Mrs. [Name] is my mother.)</div>
                    <div>Say: "Ba [Name] ni ba tata bandi." (Mr. [Name] is my father.)</div>
                    <div class="answer-space" style="height: 30px; width: 200px; display: inline-block; margin-left: 10px;">Practice saying: ________________</div>
                </div>
            </div>
        `,
        homework: "Point to your mother and say 'Mayo' three times. Point to your father and say 'Tata' three times.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Bemba",
        topic: "Ifyakupalana mu Lupwa — Family Relationships",
        subtopic: "Brothers and Sisters",
        specificCompetence: "0.1.1.4.1 Tell relationship with immediate family members",
        learningActivity: "Identifying brother and sister in Bemba.",
        expectedStandard: "Relationships stated correctly in Bemba.",
        lessonContent: `
            <p>Bwachibeni! Welcome back! Today we learn about brothers and sisters in Bemba.</p>
            <p><strong>Key Concept:</strong> Brothers and sisters are children who share the same parents.</p>
            <p><strong>Review:</strong> Who is Mayo? Who is Tata?</p>
            <p><strong>New Bemba Words:</strong></p>
            <ul>
                <li><strong>For a girl to say:</strong> "Ndume yandi" = My brother</li>
                <li><strong>For a boy to say:</strong> "Munyinane" = My brother</li>
                <li><strong>For a boy to say:</strong> "Nkashi yandi" = My sister</li>
                <li><strong>For a girl to say:</strong> "Munyinane" = My sister</li>
            </ul>
            <p><strong>Important:</strong> The word changes depending on if you are a boy or girl!</p>
            <p><strong>If no siblings:</strong> You can say "Nshina baninani" (I don't have siblings) or talk about cousins: "Bana ba mayo" (Mother's children).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-male" style="color: #3F51B5;"></i> Boy talking about brother</div>
                <p>If you are a boy: "Uyu ni munyinane." (This is my brother.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-female" style="color: #9C27B0;"></i> Girl talking about brother</div>
                <p>If you are a girl: "Uyu ni ndume yandi." (This is my brother.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-female" style="color: #E91E63;"></i> Boy talking about sister</div>
                <p>If you are a boy: "Uyu ni nkashi yandi." (This is my sister.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #FF9800;"></i> Family Chant!</div>
                <p>Let's chant together: "Mayo, Tata, na fwe bana, tuli lupwa lumo!"</p>
            </div>
        `,
        taskInstructions: "Practice naming brothers and sisters in Bemba.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Boy or Girl Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Stand up if you are a boy/girl and say the correct word:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div><strong>Boys stand and say:</strong> "Munyinane" (my brother) and "Nkashi yandi" (my sister)</div>
                        <div><strong>Girls stand and say:</strong> "Ndume yandi" (my brother) and "Munyinane" (my sister)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Family Puppet Show</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use puppets to show different family members:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FCE4EC; border-radius: 5px;">
                        <div>Teacher: "Uyu ni ani?" (Who is this?)</div>
                        <div>Child points to brother puppet and says: "Ni munyinane/ndume yandi"</div>
                        <div>Child points to sister puppet and says: "Ni nkashi yandi/munyinane"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Finish these sentences in Bemba:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Uyu ni ba <span class="answer-space" style="width: 150px;"></span> (mother).</div>
                        <div>Uyu ni ba <span class="answer-space" style="width: 150px;"></span> (father).</div>
                        <div>Uyu ni <span class="answer-space" style="width: 150px;"></span> (my brother/sister).</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Family Chant Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Let's make a family circle and chant:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFECB3; border-radius: 5px;">
                        <div>"Mayo, Tata, na fwe bana"</div>
                        <div>"Tuli lupwa lumo!"</div>
                        <div>(Mother, Father, and us children, we are one family!)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Draw Your Whole Family</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw everyone in your family:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Try to label: Mayo, Tata, and any brothers/sisters.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Tell someone in your family 'Nine mwana' (I am a child). Try to say the Bemba names for your family members.",
        homeworkDue: "Next Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyBembaWeek5);
    console.log("baby-bemba-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyBembaWeek5);
    console.log("baby-bemba-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyBembaWeek5',
        metadata: babyBembaWeek5.metadata,
        days: babyBembaWeek5
    });
    console.log("baby-bemba-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyBembaWeek5 = babyBembaWeek5;
console.log("baby-bemba-week5.js loaded and registered successfully");