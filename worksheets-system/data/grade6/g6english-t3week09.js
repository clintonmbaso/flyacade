// Grade 6 English - Term 3 Week 9 Data
const grade6EnglishWeek9 = {
    metadata: {
        grade: 6,
        subject: "English",
        term: 3,
        week: 9,
        title: "Passive Voice",
        description: "Emphasizing the receiver of the action through correct application of passive voice in context"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Introduction to Passive Voice: Focusing on the Receiver",
        lessonContent: `
            <p>Welcome to our exploration of passive voice! Today we'll learn how to shift focus from the doer to the receiver of an action.</p>
            <p><strong>Key Question:</strong> How can we write a sentence that emphasizes WHAT received the action instead of WHO did it?</p>
            <p><strong>Introduction:</strong> In most sentences, we focus on the subject (the doer). But sometimes, the receiver is more important. That's when we use passive voice!</p>
            <p><strong>Active vs. Passive Voice:</strong></p>
            <ul>
                <li><strong>Active Voice:</strong> The subject performs the action. <em>"The chef cooked the meal."</em> (Focus on chef)</li>
                <li><strong>Passive Voice:</strong> The subject receives the action. <em>"The meal was cooked by the chef."</em> (Focus on meal)</li>
            </ul>
            <p><strong>Passive Voice Formula:</strong></p>
            <div class="formula-box" style="background: #e8f4f8; padding: 15px; border-radius: 10px; text-align: center;">
                <strong>[Receiver] + [form of "to be"] + [past participle] + (by + doer)</strong>
            </div>
            <p><strong>When to Use Passive Voice:</strong></p>
            <ul>
                <li>When the receiver is more important than the doer</li>
                <li>When the doer is unknown or obvious</li>
                <li>In formal or scientific writing</li>
                <li>In news reporting</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gavel"></i> Crime Report Example</div>
                <p><strong>Active:</strong> "Someone stole the painting." (Focus on unknown thief)<br>
                <strong>Passive:</strong> "The painting was stolen." (Focus on the painting - more newsworthy!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Scientific Writing</div>
                <p><strong>Active:</strong> "We added 5ml of acid to the solution."<br>
                <strong>Passive:</strong> "5ml of acid was added to the solution." (More objective)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Emphasizing Achievement</div>
                <p><strong>Active:</strong> "The judges awarded first place to Maria."<br>
                <strong>Passive:</strong> "Maria was awarded first place." (Focus on Maria's achievement)</p>
            </div>
        `,
        taskInstructions: "Identify passive voice sentences and rewrite active sentences in passive voice.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Passive Voice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle whether each sentence is Active or Passive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The homework was completed by the student. → Active / Passive</div>
                        <div>b) The dog chased the cat. → Active / Passive</div>
                        <div>c) A new library will be built next year. → Active / Passive</div>
                        <div>d) My grandmother bakes delicious cookies. → Active / Passive</div>
                        <div>e) The window was broken during the storm. → Active / Passive</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Changing Active to Passive</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rewrite each active sentence in passive voice (focus on the receiver):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The teacher graded the tests.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) Someone left the door open.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) The company will launch a new product.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Focus on the Receiver</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each scenario, write a passive sentence that emphasizes the receiver:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A famous painting was damaged (you don't know who did it).</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) A student won a spelling bee (focus on the achievement).</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why might a writer choose passive voice instead of active voice?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three sentences in a newspaper or online article that use passive voice. Write them down and explain why the writer might have chosen passive voice.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "The 'by' Agent: When and How to Use It",
        lessonContent: `
            <p>Today we'll learn about the "by" agent in passive voice - when to include it and when to leave it out!</p>
            <p><strong>Key Question:</strong> When do we need to say WHO did the action in a passive sentence?</p>
            <p><strong>The 'by' Agent Explained:</strong></p>
            <p>In passive voice, the person or thing performing the action is called the <strong>agent</strong>. We introduce the agent with the word <strong>"by"</strong>.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li><em>"The cake was baked <u>by my grandmother</u>."</em> (Agent included)</li>
                <li><em>"The cake was baked."</em> (Agent omitted - we don't care who baked it)</li>
            </ul>
            <p><strong>When to INCLUDE the Agent (by + doer):</strong></p>
            <ul>
                <li>When the doer is important or surprising</li>
                <li>When the doer is specific and adds meaning</li>
                <li>Example: <em>"The Mona Lisa was painted by Leonardo da Vinci."</em></li>
            </ul>
            <p><strong>When to OMIT the Agent:</strong></p>
            <ul>
                <li>When the doer is unknown (<em>"My phone was stolen."</em> - don't know who)</li>
                <li>When the doer is obvious (<em>"The criminal was arrested."</em> - by police, obviously)</li>
                <li>When the doer is unimportant (<em>"The road is being repaired."</em> - who's repairing doesn't matter)</li>
                <li>In general statements (<em>"English is spoken in many countries."</em>)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Unknown Agent</div>
                <p><strong>"The window was broken last night."</strong> (We don't include "by someone" because it's unnecessary and unknown)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-check"></i> Important Agent</div>
                <p><strong>"The theory of relativity was developed by Albert Einstein."</strong> (Einstein is important to mention!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> Obvious Agent</div>
                <p><strong>"The suspect was questioned."</strong> (We know it was the police - no need to say "by the police")</p>
            </div>
        `,
        taskInstructions: "Decide when to include or omit the 'by' agent in passive voice sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Include or Omit?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Decide whether to include the agent (by + doer) or omit it. Write the complete sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The book was written (by J.K. Rowling). → </div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) The mail is delivered (by the postal worker). → </div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) The cookies were eaten (by someone). → </div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>d) The phone was invented (by Alexander Graham Bell). → </div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding the Agent</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add an appropriate agent (by + doer) to each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The Declaration of Independence was written ____________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) This delicious soup was prepared ____________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) The school was built ____________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Rewriting with or without 'by'</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Rewrite each active sentence in passive voice. Decide whether to include the agent:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Someone cleaned the classroom yesterday.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) My dad fixed the broken chair.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) The chef prepares fresh bread every morning.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Justify Your Choice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> For one sentence above, explain why you included or omitted the agent:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 passive sentences. In 3 sentences, omit the 'by' agent. In 2 sentences, include it. Explain your choices.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Transformation: Changing Active Sentences to Passive",
        lessonContent: `
            <p>Today we'll master the skill of transforming active sentences into passive voice step by step!</p>
            <p><strong>Key Question:</strong> How do we change any active sentence into passive voice correctly?</p>
            <p><strong>The Transformation Process (3 Steps):</strong></p>
            <ol>
                <li><strong>Identify:</strong> Find the subject (doer), verb, and object (receiver)</li>
                <li><strong>Move:</strong> Make the object the new subject (receiver first)</li>
                <li><strong>Change:</strong> Use the correct form of "to be" + past participle of the verb</li>
            </ol>
            <p><strong>Step-by-Step Example:</strong></p>
            <div class="transformation-box" style="background: #f0f7e8; padding: 15px; border-radius: 10px;">
                <p><strong>Active:</strong> The boy <u>threw</u> the ball.</p>
                <p><strong>Step 1:</strong> Subject = boy, Verb = threw, Object = ball</p>
                <p><strong>Step 2:</strong> Move "ball" to the front → Ball ...</p>
                <p><strong>Step 3:</strong> "was thrown" (past tense of "to be" + past participle of "throw")</p>
                <p><strong>Passive:</strong> The ball <u>was thrown</u> (by the boy).</p>
            </div>
            <p><strong>Verb Tense Changes (Active → Passive):</strong></p>
            <ul>
                <li>Present Simple: <em>writes → is written</em></li>
                <li>Past Simple: <em>wrote → was written</em></li>
                <li>Future Simple: <em>will write → will be written</em></li>
                <li>Present Continuous: <em>is writing → is being written</em></li>
                <li>Present Perfect: <em>has written → has been written</em></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Present Tense</div>
                <p><strong>Active:</strong> The chef <u>cooks</u> dinner every night.<br>
                <strong>Passive:</strong> Dinner <u>is cooked</u> by the chef every night.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Past Tense</div>
                <p><strong>Active:</strong> The team <u>won</u> the championship.<br>
                <strong>Passive:</strong> The championship <u>was won</u> by the team.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Future Tense</div>
                <p><strong>Active:</strong> The principal <u>will announce</u> the results tomorrow.<br>
                <strong>Passive:</strong> The results <u>will be announced</u> by the principal tomorrow.</p>
            </div>
        `,
        taskInstructions: "Transform active sentences into passive voice following the step-by-step process.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Step-by-Step Transformation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each sentence, identify the doer, action, and receiver, then rewrite in passive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The storm damaged many houses.</div>
                        <div>Doer: _________ | Action: _________ | Receiver: _________</div>
                        <div>Passive: <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">b) The students will present their projects on Friday.</div>
                        <div>Doer: _________ | Action: _________ | Receiver: _________</div>
                        <div>Passive: <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Transform These Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Change each active sentence to passive voice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The gardener waters the plants every morning.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) A famous architect designed this building.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) Someone has eaten all the cookies!</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>d) The teacher is explaining the lesson.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Tense Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Identify the tense of each active sentence, then write the passive form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Active Sentence</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tense</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Passive</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">She bakes bread</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">They built the bridge</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">We will finish the project</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 active sentences about your day. Then rewrite them in passive voice. Circle the verb in each passive sentence.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "News Reporting: Rewriting Active Headlines into Passive Voice",
        lessonContent: `
            <p>Today we'll apply passive voice to news reporting - where passive voice is commonly used for headlines and news stories!</p>
            <p><strong>Key Question:</strong> Why do news headlines often use passive voice?</p>
            <p><strong>Why News Uses Passive Voice:</strong></p>
            <ul>
                <li><strong>Focus on what happened</strong> - not who did it</li>
                <li><strong>When the doer is unknown</strong> (still under investigation)</li>
                <li><strong>To sound more formal and objective</strong></li>
                <li><strong>To emphasize the victim or affected party</strong></li>
            </ul>
            <p><strong>Common Passive Headlines:</strong></p>
            <ul>
                <li><strong>Active:</strong> "Police arrested three suspects"</li>
                <li><strong>Passive Headline:</strong> "Three suspects arrested"</li>
                <li><em>(The "by police" is omitted because it's obvious)</em></li>
            </ul>
            <ul>
                <li><strong>Active:</strong> "Storm damaged dozens of homes"</li>
                <li><strong>Passive Headline:</strong> "Dozens of homes damaged by storm"</li>
                <li><em>(Focus on the homes, not the storm)</em></li>
            </ul>
            <p><strong>Headline Style Note:</strong> In headlines, "to be" verbs are often omitted for brevity!</p>
            <ul>
                <li>Full passive: "The man <u>was</u> hospitalized."</li>
                <li>Headline: "Man hospitalized" (clearer and shorter)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-newspaper"></i> Breaking News</div>
                <p><strong>Active:</strong> "Unknown thieves stole valuable painting from museum."<br>
                <strong>Passive (News):</strong> "Valuable painting stolen from museum." (Focus on the painting, doer unknown)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Weather Report</div>
                <p><strong>Active:</strong> "Heavy rains flooded several streets last night."<br>
                <strong>Passive (News):</strong> "Several streets flooded by heavy rains."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Sports Headline</div>
                <p><strong>Active:</strong> "The Eagles defeated the Lions in overtime."<br>
                <strong>Passive (News):</strong> "Lions defeated by Eagles in overtime thriller."</p>
            </div>
        `,
        taskInstructions: "Rewrite active news headlines into passive voice for a news report.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Headline Transformation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rewrite each active headline as a passive news headline (omit "to be" where appropriate):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) <strong>Active:</strong> "City Council approved new park budget"</div>
                        <div><strong>Passive Headline:</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">b) <strong>Active:</strong> "Unknown vandals damaged school playground"</div>
                        <div><strong>Passive Headline:</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">c) <strong>Active:</strong> "Scientists discovered new species in rainforest"</div>
                        <div><strong>Passive Headline:</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Full News Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rewrite these active news sentences using complete passive voice (keep "to be"):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The mayor will open the new community center on Saturday.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>b) Heavy snowfall has delayed all flights at the airport.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>c) Local volunteers cleaned the beach after the oil spill.</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own News Headlines</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each scenario, write a passive news headline:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A record was broken at the Olympics (by a swimmer).</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) A new law was passed (by the government) to protect endangered animals.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c) A lost cat was found (by firefighters) after three days.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Justify</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think news writers often use passive voice in headlines?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find two news headlines online or in a newspaper. Rewrite each one twice: once in active voice and once in passive voice.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Compare/Contrast: When to Use Active vs Passive Voice",
        lessonContent: `
            <p>Today we'll compare active and passive voice to understand when to use each for maximum impact!</p>
            <p><strong>Key Question:</strong> How do we decide whether to use active or passive voice in our writing?</p>
            <p><strong>Active Voice - Use When:</strong></p>
            <ul>
                <li>✓ You want strong, direct, dynamic writing</li>
                <li>✓ The doer of the action is important</li>
                <li>✓ You want to be clear about who is responsible</li>
                <li>✓ Writing stories, instructions, or persuasive pieces</li>
                <li><em>Example:</em> "The lifeguard saved the drowning child." (Clear who acted)</li>
            </ul>
            <p><strong>Passive Voice - Use When:</strong></p>
            <ul>
                <li>✓ The receiver is more important than the doer</li>
                <li>✓ The doer is unknown, obvious, or unimportant</li>
                <li>✓ Writing scientific reports, formal documents, or news</li>
                <li>✓ You want to sound objective or avoid blame</li>
                <li><em>Example:</em> "The drowning child was saved." (Focus on the child)</li>
            </ul>
            <p><strong>Compare the Impact:</strong></p>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Active Voice</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Passive Voice</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Direct, energetic, clear</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Indirect, formal, sometimes vague</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Focuses on the DOER</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Focuses on the RECEIVER</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Better for storytelling</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Better for reporting facts</td>
                </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Choosing Active for Impact</div>
                <p><strong>Weak passive:</strong> "Mistakes were made." (Who made them? Avoids responsibility)<br>
                <strong>Better active:</strong> "I made a mistake." (Takes responsibility, more honest)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Choosing Passive for Science</div>
                <p><strong>Active:</strong> "We mixed the chemicals and observed a reaction."<br>
                <strong>Better passive for lab report:</strong> "The chemicals were mixed and a reaction was observed." (More objective)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Choosing Passive to Focus on Victim</div>
                <p><strong>Active:</strong> "A driver hit the pedestrian." (Focus on driver)<br>
                <strong>Better passive for news:</strong> "The pedestrian was hit by a driver." (Focus on victim)</p>
            </div>
        `,
        taskInstructions: "Compare active and passive voice and choose the best option for each writing situation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose the Better Option</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each situation, choose Active or Passive and explain why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A police report describing who committed a crime → Active / Passive</div>
                        <div>Why? <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">b) A scientific paper describing an experiment → Active / Passive</div>
                        <div>Why? <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">c) An exciting action scene in a novel → Active / Passive</div>
                        <div>Why? <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Rewrite for Better Impact</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rewrite each sentence using the MORE EFFECTIVE voice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) (Passive) The ball was thrown by the quarterback for a touchdown.</div>
                        <div><strong>Better:</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">b) (Active) Someone left the lights on all night.</div>
                        <div><strong>Better (if doer unknown):</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">c) (Passive) The test results will be given by the teacher tomorrow.</div>
                        <div><strong>Better:</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Voice and Explain the Choice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each sentence, identify the voice and explain why the writer might have chosen it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) "New safety measures have been implemented at all schools."</div>
                        <div>Voice: _________ | Why? <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div style="margin-top: 15px;">b) "Our team won the championship!"</div>
                        <div>Voice: _________ | Why? <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Two Versions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the same idea in BOTH active and passive voice. Then explain which is better and why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Idea: A student won the science fair.</div>
                        <div><strong>Active:</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div><strong>Passive:</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 40px; margin-top: 5px;"></span></div>
                        <div><strong>Which is better and why?</strong> <span class="answer-space" style="display: inline-block; width: 100%; height: 50px; margin-top: 5px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Weekly Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What is the most important thing you learned about passive voice this week? When will you use it in your own writing?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph (5-7 sentences) about a school event. Use active voice for 3 sentences and passive voice for 2-3 sentences. Underline the verbs in passive voice.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6EnglishWeek9);
    console.log("grade6-english-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6EnglishWeek9);
    console.log("grade6-english-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6EnglishWeek9',
        metadata: grade6EnglishWeek9.metadata,
        days: grade6EnglishWeek9
    });
    console.log("grade6-english-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek9 = grade6EnglishWeek9;
console.log("grade6-english-week9.js loaded and registered successfully");