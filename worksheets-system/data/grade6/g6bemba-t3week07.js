// Grade 6 Zambian Language (Icibemba) - Term 3 Week 7
const grade6IcibembaWeek7 = {
    metadata: {
        grade: 6,
        subject: "Zambian Language (Icibemba)",
        term: 3,
        week: 7,
        weekNumber: 13,
        title: "Passive to Active and Figures of Speech",
        description: "Converting passive sentences to active voice and identifying personification in texts"
    },
    
    monday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Verbs",
        subtopic: "Converting Passive to Active Voice",
        lessonNumber: 25,
        lessonContent: `
            <p>Mwaiseni mukwai! Welcome to our lesson on changing sentences from passive form back to active voice in Icibemba.</p>
            <p><strong>Key Question:</strong> How can we make our sentences more direct and powerful by changing from passive to active voice?</p>
            <p><strong>Introduction:</strong> In Icibemba, just like in English, we can express actions in two ways: active voice and passive voice. Active voice is more direct, clear, and energetic. Today we'll learn how to transform passive sentences into active ones.</p>
            
            <p><strong>What is Active Voice?</strong></p>
            <ul>
                <li>The subject <strong>performs</strong> the action</li>
                <li>Structure: Subject + Verb + Object</li>
                <li>Example: <em>Mwana alyá isabi.</em> (The child ate the fish.)</li>
            </ul>
            
            <p><strong>What is Passive Voice?</strong></p>
            <ul>
                <li>The subject <strong>receives</strong> the action</li>
                <li>Structure: Object + Verb + "by" + Subject</li>
                <li>Example: <em>Isabi lya kuli mwana.</em> (The fish was eaten by the child.)</li>
            </ul>
            
            <p><strong>How to Change Passive to Active in Icibemba:</strong></p>
            <ol>
                <li>Identify the <strong>doer</strong> of the action (comes after "kuli" - by)</li>
                <li>Move the doer to the <strong>beginning</strong> of the sentence</li>
                <li>Change the verb form appropriately</li>
                <li>The receiver of the action moves to the <strong>end</strong></li>
            </ol>
            
            <p><strong>Examples of Passive to Active Conversion:</strong></p>
            <div class="grammar-table">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #4A90E2; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Passive Voice (Formal)</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Active Voice (Direct)</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Umuchini wali kupya na Bwalya.</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Bwalya alipya umuchini.</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Icitabo calembwa na mulishani.</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Mmulishani alemba icitabo.</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Ulupwa lwashimbwa na bamaayo.</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Bamaayo bashimba ulupwa.</td>
                    </tr>
                </table>
            </div>
            
            <p><strong>Remember:</strong> Active voice makes your Icibemba writing stronger, clearer, and more engaging. Use passive voice only when the doer is unknown or unimportant!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Transformation Practice</div>
                <p><strong>Passive:</strong> <em>Umulimo wacitwa na Banji.</em> (The work was done by Banji.)<br>
                <strong>Active:</strong> <em>Banji acita umulimo.</em> (Banji does the work.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Writing Tip</div>
                <p>Official letters and formal writing in Icibemba often use passive voice, but good speakers change to active for everyday conversation and storytelling!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Quick Trick</div>
                <p>Ask yourself: "Who is doing the action?" Put that person/thing first in your sentence, and your Icibemba will be active!</p>
            </div>
        `,
        taskInstructions: "Rewrite passive sentences into active voice and identify the doer of each action.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Convert Passive to Active</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change each passive sentence to active voice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a.</strong> Icakulya caliwa na ba mayo. (The food was eaten by mother.)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b.</strong> Iŋanda yalembwa na bakulu. (The house was built by the elders.)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>c.</strong> Amenshi yatapulwa na ba Kasonde. (The water was fetched by Kasonde.)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>d.</strong> Umulandu wakambilwa na shiwe. (The story was told by his/her father.)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>e.</strong> Cipatili calengwa na cine. (The pot was made by the grandmother.)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Doer</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each passive sentence below, circle the doer (the one performing the action):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a.</strong> Umwana ali kuŋwa na <u>ba nyina</u>.</div>
                        <div><strong>b.</strong> Ubulayo bwalayangwa na <u>bakulu ba muŋ'anda</u>.</div>
                        <div><strong>c.</strong> Icipuna wapimbwa na <u>ba Kalaba</u>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Rewrite the Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> The following paragraph is written in passive voice. Rewrite it using active voice to make it more direct and clear:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <em>Umulimo wacitwa na bana ba masukulu. Icitabo calembwa na mulaili. Indobwa yalayangwa na bakulu. Amalaya yasambilishiwako na ba nyina.</em>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3 sentences in passive voice, then rewrite them in active voice:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 passive sentences in your Icibemba reading book or notes. Rewrite each one in active voice in your exercise book.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Figures of Speech",
        subtopic: "Personification",
        lessonNumber: 26,
        lessonContent: `
            <p>Mwaiseni mukwai! Today we will explore personification - a beautiful figure of speech that brings language to life!</p>
            <p><strong>Key Question:</strong> How do writers give human qualities to non-human things, and what does it mean?</p>
            <p><strong>Introduction:</strong> Personification is when we give human characteristics, emotions, or actions to animals, objects, or ideas. It makes our language more vivid and helps readers connect emotionally with what we describe.</p>
            
            <p><strong>What is Personification?</strong></p>
            <ul>
                <li>Giving <strong>human qualities</strong> to non-human things</li>
                <li>Examples: "The wind whispered," "The sun smiled," "The trees danced"</li>
                <li>In Icibemba: <em>Upepo ulila</em> (The wind is crying/singing)</li>
            </ul>
            
            <p><strong>Common Personification Examples in Icibemba:</strong></p>
            <div class="examples-table">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #4A90E2; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Icibemba Example</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">English Translation</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Human Quality Given</th>
                     </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Ubushiku bulela</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">The day is crying (rainy day)</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Crying/sadness</td>
                    </tr>
                    <tr>
                        td style="padding: 10px; border: 1px solid #ddd;">Umulilo ulalimba</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">The fire is dancing</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Dancing</td>
                    40
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Imiti ileimba</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">The trees are singing</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Singing</td>
                    40
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Akasuba kaleimfwilwa</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">The sun is feeling tired</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Tiredness (setting sun)</td>
                    40
                </table>
            </div>
            
            <p><strong>Why Use Personification?</strong></p>
            <ul>
                <li>Makes writing more <strong>interesting and vivid</strong></li>
                <li>Helps readers <strong>visualize</strong> and <strong>connect emotionally</strong></li>
                <li>Creates <strong>mood and atmosphere</strong> in stories and poems</li>
                <li>Makes <strong>abstract ideas</strong> easier to understand</li>
            </ul>
            
            <p><strong>How to Identify Personification:</strong></p>
            <ol>
                <li>Look for a <strong>non-human thing</strong> (animal, object, nature, idea)</li>
                <li>Look for an <strong>action or quality that only humans do</strong> (think, feel, talk, dance, cry, laugh)</li>
                <li>Ask: "Is this thing really doing this human action?" If no, it's personification!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Nature Speaks</div>
                <p>"Imiti yalitemenwe ukumona akasuba." (The trees were happy to see the sun.)<br>
                <em>Trees cannot feel happiness - this is personification that makes the scene joyful!</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Rivers Have Feelings</div>
                <p>"Kafue alilila inganda shakwe." (The Kafue River is crying for its homes/fish.)<br>
                <em>The river is given the human emotion of sadness to show environmental loss.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Talks</div>
                <p>"Inshita yalituusha." (Time passed us / Time left us.)<br>
                <em>Time cannot physically leave us - personification shows how quickly time goes by.</em></p>
            </div>
        `,
        taskInstructions: "Identify personification in texts, explain the meaning, and create your own examples.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify Personification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each sentence and identify what is being personified and what human quality it is given:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a.</strong> "Upepo ulalila mu nshi." (The wind is crying in the night.)</div>
                        <div>Thing personified: _________ Human quality: _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b.</strong> "Akasuba kaleimfwilwa no kuya pa nshi." (The sun felt tired and went to rest.)</div>
                        <div>Thing personified: _________ Human quality: _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>c.</strong> "Imilimo yalishimikila pa bulendo bwakwe." (The stars were whispering about their journey.)</div>
                        <div>Thing personified: _________ Human quality: _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Explain the Meaning</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each personification example, explain what the author is trying to communicate:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a.</strong> "Umulilo wakwatilila mu citengi no kuseka." (The fire danced in the fireplace and laughed.)</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b.</strong> "Umusefu ulalila pamo na bana." (The grinding stone is crying together with the children.)</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find Personification in a Poem/Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the short poem below. Find and underline 3 examples of personification:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5; font-style: italic;">
                        <p><em>Akasuba kalemfwa ubushiku bwense,<br>
                        Umulilo ulelalimba mu mpoto,<br>
                        Imilimo yalelila mu mulu,<br>
                        Umupundu wa Lwangwa ulelila amenshi yakwe ya kawama.<br>
                        Inshita yalituusha mwikalamba,<br>
                        Natemwa icilamba cali fye niwe.</em></p>
                        <p><small>(The sun felt the whole day, the fire danced in the north, the stars cried in the sky, the floodplain of Lwangwa cried for its good water, time passed us by, I love the floodplain only you.)</small></p>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Personification</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 4 original personification sentences in Icibemba. Choose from: the moon, a river, a tree, the rain, or a cooking pot:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Illustrate Personification</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Choose one of your personification sentences. Draw a picture showing what it describes:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of personification in an Icibemba story, song, or proverb. Write each example and explain in 1-2 sentences what the author means.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6IcibembaWeek7);
    console.log("grade6-icibemba-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6IcibembaWeek7);
    console.log("grade6-icibemba-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6IcibembaWeek7',
        metadata: grade6IcibembaWeek7.metadata,
        days: grade6IcibembaWeek7
    });
    console.log("grade6-icibemba-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6IcibembaWeek7 = grade6IcibembaWeek7;
console.log("grade6-icibemba-week7.js loaded and registered successfully");