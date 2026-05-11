// Grade 6 Zambian Language (Icibemba) - Term 3 Week 5 Data
const grade6IcibembaWeek5 = {
    metadata: {
        grade: 6,
        subject: "Zambian Language (Icibemba)",
        term: 3,
        week: 5,
        title: "Active and Passive Voice",
        description: "Identifying active and passive forms of verbs and converting active sentences to passive voice in Icibemba"
    },
    
    monday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Verbs",
        subtopic: "Identifying Active and Passive Forms",
        lessonContent: `
            <p>Welcome to our lesson on active and passive voice in Icibemba! Today we'll learn how to identify whether the subject is doing the action or receiving it.</p>
            <p><strong>Key Question:</strong> How can you tell if the subject is doing the action or having the action done to them?</p>
            <p><strong>Introduction:</strong> In Icibemba, verbs change form depending on whether the subject is active (doing something) or passive (having something done to them). Understanding this helps you speak and write more clearly.</p>
            <p><strong>Active Voice (Umwine wa cita):</strong></p>
            <ul>
                <li>The subject performs the action</li>
                <li>Structure: Subject + Verb + Object</li>
                <li><strong>Example:</strong> "Mwana aleipaya ulupwa." (The child is sweeping the floor.)</li>
                <li>The child (subject) is doing the sweeping (action)</li>
            </ul>
            <p><strong>Passive Voice (Umwine wa citilwa):</strong></p>
            <ul>
                <li>The subject receives the action</li>
                <li>Structure: Subject + Passive Verb + Agent (optional)</li>
                <li><strong>Example:</strong> "Ulupwa aleipayilwa ku mwana." (The floor is being swept by the child.)</li>
                <li>The floor (subject) is receiving the sweeping action</li>
            </ul>
            <p><strong>Key Differences in Icibemba:</strong></p>
            <ul>
                <li>Passive verbs often end with <strong>"-ilwa"</strong> or <strong>"-elwa"</strong></li>
                <li>Example: "kupaya" (to sweep) becomes "kupayilwa" (to be swept)</li>
                <li>The word "ku" (by) may indicate the doer in passive sentences</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-check"></i> Active Examples</div>
                <p><strong>Active:</strong> "Bana baleluka amenshi." (The children are drinking water.) - The children are doing the action.</p>
                <p><strong>Active:</strong> "Cishe alesuma ulubende." (Grandfather is roasting meat.) - Grandfather is doing the action.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-clock"></i> Passive Examples</div>
                <p><strong>Passive:</strong> "Amenshi alelukilwa ku bana." (The water is being drunk by the children.) - Water receives the action.</p>
                <p><strong>Passive:</strong> "Ulubende alesumilwa ku cishe." (The meat is being roasted by grandfather.) - Meat receives the action.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Spot the Difference</div>
                <p><strong>Active:</strong> "Mbwa ileluma umunobe." (The dog is biting the thief.)</p>
                <p><strong>Passive:</strong> "Umunobe alelumilwa ku mbwa." (The thief is being bitten by the dog.)</p>
                <p>Notice how the verb changes from "ileluma" to "alelumilwa"!</p>
            </div>
        `,
        taskInstructions: "Sort sentences into active and passive groups based on whether the subject does or receives the action.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort the following sentences into Active and Passive groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 10px;">Sentences:</div>
                        <ul style="margin-bottom: 15px;">
                            <li>"Cilanda calebomwa ku bana." (The ball is being thrown by the children.)</li>
                            <li>"Bana baleponta icilanda." (The children are throwing the ball.)</li>
                            <li>"Ifikolwe fyalya ifitungulu." (The monkeys ate the onions.)</li>
                            <li>"Ifitungulu fyalilwa ku fikolwe." (The onions were eaten by the monkeys.)</li>
                            <li>"Mama alepituka umwana." (Mother is dressing the child.)</li>
                            <li>"Umwana alepitukilwa ku mama." (The child is being dressed by mother.)</li>
                        </ul>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 2px solid #4A90E2; padding: 10px;">
                            <strong style="color: #4A90E2;">ACTIVE VOICE</strong>
                            <div style="height: 200px; margin-top: 10px; border: 1px dashed #ccc; padding: 5px;"></div>
                        </div>
                        <div style="border: 2px solid #E24A4A; padding: 10px;">
                            <strong style="color: #E24A4A;">PASSIVE VOICE</strong>
                            <div style="height: 200px; margin-top: 10px; border: 1px dashed #ccc; padding: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at the passive sentences above. What ending do the passive verbs share?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> In the passive sentences, what word often comes before the doer (agent)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one active sentence in Icibemba:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write one passive sentence in Icibemba:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find or write 5 Icibemba sentences. Label each as Active or Passive. Bring them to class for discussion.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Verbs",
        subtopic: "Converting Active to Passive",
        lessonContent: `
            <p>Today we'll learn how to change sentences from active voice to passive voice in Icibemba!</p>
            <p><strong>Key Question:</strong> How do you change a sentence so the focus shifts from the "doer" to the "receiver" of the action?</p>
            <p><strong>The Conversion Rule:</strong></p>
            <ol>
                <li>Identify the subject (doer), verb, and object (receiver) in the active sentence</li>
                <li>Move the object to the subject position</li>
                <li>Change the verb to passive form (add <strong>-ilwa</strong> or <strong>-elwa</strong>)</li>
                <li>Add the original subject after the verb with "ku" (by)</li>
            </ol>
            <p><strong>Step-by-Step Conversion:</strong></p>
            <ul>
                <li><strong>Active:</strong> "Cishe alatemena icimuti." (Grandfather is cutting the tree.)</li>
                <li>Subject: Cishe (Grandfather) | Verb: alatemena (is cutting) | Object: icimuti (the tree)</li>
                <li><strong>Passive:</strong> "Icimuti calateminilwa ku cishe." (The tree is being cut by grandfather.)</li>
            </ul>
            <p><strong>Passive Verb Formation Rules:</strong></p>
            <ul>
                <li>For verbs ending in <strong>-a</strong>: change to <strong>-ilwa</strong> or <strong>-elwa</strong></li>
                <li>"kupaya" (to sweep) → "kupayilwa" (to be swept)</li>
                <li>"kubomba" (to work/do) → "kubombelwa" (to be done)</li>
                <li>"kulya" (to eat) → "kuliwa" (to be eaten)</li>
                <li>"kumona" (to see) → "kumonwa" (to be seen)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Conversion Examples</div>
                <p><strong>Active:</strong> "Mwana aleisamba." (The child is bathing.)</p>
                <p><strong>Passive:</strong> "Mwana aleisambilwa." (The child is being bathed.)</p>
                <hr>
                <p><strong>Active:</strong> "Bana balelanda Icibemba." (The children are speaking Icibemba.)</p>
                <p><strong>Passive:</strong> "Icibemba calelandilwa ku bana." (Icibemba is being spoken by the children.)</p>
                <hr>
                <p><strong>Active:</strong> "Musuma aletontonkanya icikomo." (The herder is chasing the cow.)</p>
                <p><strong>Passive:</strong> "Icikomo ciletontonkenywa ku musuma." (The cow is being chased by the herder.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> When to Use Passive Voice</div>
                <p>Use passive voice when:</p>
                <ul>
                    <li>The receiver is more important than the doer</li>
                    <li>The doer is unknown or obvious</li>
                    <li>You want to be more formal or indirect</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistake</div>
                <p>Don't forget to change the verb! "Mwana aleisamba" (child bathes himself) is different from "Mwana aleisambilwa" (child is bathed by someone). The passive form changes the meaning!</p>
            </div>
        `,
        taskInstructions: "Practice rewriting sentences from active to passive voice, shifting focus from doer to receiver.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Convert Active to Passive</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change each active sentence to passive voice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <strong>a.</strong> "Kankwamba alepika ubwali." (Kankwamba is cooking nshima.)<br>
                            <strong>Passive:</strong> <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>b.</strong> "Bana balesambilila mu sukulu." (The children are learning at school.)<br>
                            <strong>Passive:</strong> <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>c.</strong> "Mbwa yaluma umulendo." (The dog bit the visitor.)<br>
                            <strong>Passive:</strong> <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>d.</strong> "Cibale alecita umulimo." (Cibale is doing the work.)<br>
                            <strong>Passive:</strong> <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>e.</strong> "Bamaayo balepangula ifisalu." (The women are washing the clothes.)<br>
                            <strong>Passive:</strong> <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Changes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What changed in the verb when you converted to passive? Write the passive verb forms you used:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What word did you add to introduce the original subject (doer)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Rewriting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Rewrite this passage by changing the underlined active sentences to passive:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <p><u>Cishe alesa ifishima.</u> (Grandfather is planting maize.) <u>Bana balamwaza amenshi.</u> (The children are fetching water.) <u>Banakashi balapanga ifilyo.</u> (The women are preparing the garden.)</p>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> When might you choose to use passive voice instead of active voice in Icibemba? Give an example.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences in active voice. Convert each one to passive voice. Underline the verb changes in your passive sentences.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6IcibembaWeek5);
    console.log("grade6-icibemba-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6IcibembaWeek5);
    console.log("grade6-icibemba-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6IcibembaWeek5',
        metadata: grade6IcibembaWeek5.metadata,
        days: grade6IcibembaWeek5
    });
    console.log("grade6-icibemba-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6IcibembaWeek5 = grade6IcibembaWeek5;
console.log("grade6-icibemba-week5.js loaded and registered successfully");