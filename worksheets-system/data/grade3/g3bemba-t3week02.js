// Grade 3 Zambian Language (Icibemba) - Term 3 Week 2 Data
const grade3IcibembaWeek2 = {
    metadata: {
        grade: 3,
        subject: "Zambian Language (Icibemba)",
        term: 3,
        week: 2,
        title: "Ukukwasha no Kuteba (Predicting and Inferring)",
        description: "Developing prediction and inference skills using pictures and text in Icibemba"
    },
    
    wednesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Ukubelengako no Kupususha (Reading Comprehension)",
        subtopic: "Sub-topic 3.35.5 - Ukukwasha (Making Predictions)",
        lessonContent: `
            <p>Mwaiseni tatuli! Leelo tuli mu kukwasha ifyo fikala mu nkashi. (Welcome everyone! Today we will predict what happens next in a story.)</p>
            <p><strong>Ipo Muli Bonse (Key Question):</strong> Bushe twakwasha shani ifyo fikala mu nkashi? (How can we predict what happens next?)</p>
            <p><strong>Introduction:</strong> Ukukwasha kukwata ukuti twalanga ifikwatu mu fikope no mu mabala yamo ukuyoeba ifyo fikala mu nkashi. (Predicting means using clues in pictures and words to guess what will happen next in a story.)</p>
            <p><strong>Ifikwatu Fyakukwasha (Clues to Help Us Predict):</strong></p>
            <ol>
                <li><strong>Ifikope (Pictures):</strong> Seba ifikope mwinamo. Bushe ifingachitika? (Look at the pictures. What might happen?)</li>
                <li><strong>Amabala ayakwamba (First words):</strong> Ico cayamba cikafwa ukumona ico calanda. (How the story starts helps us know what follows.)</li>
                <li><strong>Ifyo balinjila (Character feelings):</strong> Bushe abaantu bashimapepo cabula? Bushe bayangukile? (Are the characters scared? Are they happy?)</li>
                <li><strong>Ico cali pali kabiji neco kikalanda (What happened before and what comes next):</strong> Ifintu fimo fikalanda fyalo. (Some things always follow others.)</li>
            </ol>
            <p><strong>Imitontonkanyo Yatukwete Ukukwasha (Our Prediction Process):</strong></p>
            <ul>
                <li><strong>Step 1:</strong> Langa ifikope ne mabala (Look at the pictures and words)</li>
                <li><strong>Step 2:</strong> Iba ngo: "Bushe icikalanda nci?" (Ask: "What will happen next?")</li>
                <li><strong>Step 3:</strong> Kwashe ico wendekele (Make your prediction)</li>
                <li><strong>Step 4:</strong> Belenga ukumona ngauli uwakwasha (Read to see if your prediction was correct)</li>
            </ol>
            <p><strong>Amakasho Kelimvwa (Example Questions When Predicting):</strong>
            <br>• "Nga mwalanga ifikope, bushe icikachitika nci?" (When you look at the picture, what will happen?)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Icitendekelo Kimo (Example Prediction)</div>
                <p><strong>Icitendekelo ca nkashi (Story beginning):</strong> "Kwalimvua inshita ya mpela. Akaboko kali mu lupako..." (It was raining heavily. A little boy was in the forest...)</p>
                <p><strong>Elyo kwasha (Your prediction):</strong> "Akaboka kesanga ifipya pantu kwalimvua." (The boy will get wet because it is raining.)</p>
                <p>Ukukwasha kwabula ubwabwa kuli uyu muntu ukumona ico ekala. (This prediction helps us think about what might happen to the character.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-image"></i> Inkundu ya fikope (Picture Clues)</div>
                <p>Nga mwalanga akashimi ka balelwa ku sukulu kabiji mwamona nkoko ya lubilo - bushe ebakulaya nshi? (If you see a picture of children running fast toward a school, what might they be going to do?)</p>
                <p><strong>Kwasha (Prediction):</strong> "Balaya ku myaka iyo bapususha!" (They are going to play games!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Kukonkela pa Kuteba kwa Muntu (Following the Story)</div>
                <p>Bamo ukukwasha kwalama. Nga mwabelenga, mukwete ukulangulula nga ukukwasha kwenu kwali bwacho. (Making predictions is fun! As you read, you can check if your prediction was correct.)</p>
            </div>
        `,
        taskInstructions: "Look at the pictures, make predictions, and confirm them as we read the story.",
        taskContent: `
            <div class="content-box">
                <p><strong>Icipingo A: Ukulangulula Ifikope (Part A: Looking at Pictures)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Mwaana mukwasha kukwasha. Mwaipeelwe akashimi ke fikope. (You will be given a story with pictures.)
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc; text-align: center; padding-top: 35px;">
                            [Akashimi ka fikope / Story with pictures]
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Belengafye icipandwa ca kutendekela. (Read the first part only.)
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Ukukwasha kwenu: Bushe icikalanda nci? (Your prediction: What will happen next?) 
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipingo B: Ukukwasha pa Mubelesho (Part B: Practice Predictions)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Bambilanshi ukukwasha kukonkelepo. Mwaipeelwe amano yabula ukukwasha. (Make predictions for each situation below:)
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Situation 1:</strong> "Umwana ali mu nju. Alebomba ubwali. Alamona mwina nzoka." (A child is in the kitchen. She is cooking. She sees a snake.)</div>
                        <div>Kwasha (Prediction): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Situation 2:</strong> "Batata beya ku ng'anda na lubilo. Balesansamuka." (Father comes home quickly. He is very happy.)</div>
                        <div>Kwasha (Prediction): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Situation 3:</strong> "Abaana bali ku lupili. Balebomba lupili lwa musebo. Balaba imvula ikwisa." (The children are on the road. They are building a sand road. They see rain coming.)</div>
                        <div>Kwasha (Prediction): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipingo C: Ukukonkanya Ukukwasha (Part C: Confirming Predictions)</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Mwabelenge akashimi konse. (Now read the full story.)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Bushe ukukwasha kwenu kuli bwacho? (Were your predictions correct?)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Nga akukwasha kwenu kali kabiji kabiji, mwayisambizhe nshi? (If your prediction was different, what did you learn from the story?)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Pelelwa ukubelenga akashimi aka fumu mu cibemba kwisa. Kwashishe icikalanda mu nkashi ilyo mwabelenga (Pakuti mwalanga ifikope ne mabala).",
        homeworkDue: "Saturday"
    },
    
    thursday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Ukubelengako no Kupususha (Reading Comprehension)",
        subtopic: "Sub-topic 3.35.5 - Amipusho ya Kuteba (Inferential Questions)",
        lessonContent: `
            <p>Mwaiseni! Leelo tuli mu kuteba ukubelesha amano yetu ukuukuka ifyo balebomba. (Welcome! Today we will make inferences by reading between the lines.)</p>
            <p><strong>Ipo Muli Bonse (Key Question):</strong> Bushe twamona ifyo caamba pantu ya mabala? (How can we understand what the text doesn't say directly?)</p>
            <p><strong>Introduction:</strong> Ukuteba kukwata ukumfwa pa kuteba. Ici cipususho cakosa pa kusanga ifyaciswa mu mabala. (Making inferences means understanding deeper meaning. This means thinking and discovering what the text doesn't say directly.)</p>
            <p><strong>Ifipususho fya kuteba (Inferential Questions):</strong></p>
            <ul>
                <li><strong>Ico caambilwa pa nshi? (What is being talked about?)</strong></li>
                <li><strong>Ico mbapusushe (What they want to say):</strong> Lelo pamo ukukwata ukuteba pa nshila ya misango. (Sometimes the message is hidden in clues.)</li>
                <li><strong>Ico cali pa nshi (What happened before):</strong> Twakwete ukumona umuchinshi wa bantu pamo ne nsambu. (We need to see the character's feelings in the situation.)</li>
                <li><strong>Ifyo balinjila (Character's feelings):</strong> Bushe abantu bashimapepo cabula? Bushe bayangukile? (Are the people happy or sad?)</li>
            </ul>
            <p><strong>Imitontonkanyo Yatukwete Ukuteba (Our Inferencing Process):</strong></p>
            <ul>
                <li><strong>Step 1:</strong> Belenga akashimi ne fyonse fyalembwa (Read the story and all the words)</li>
                <li><strong>Step 2:</strong> Iba ngo: "Bushe ici calumbunuka nshi?" (Ask: "What does this mean?")</li>
                <li><strong>Step 3:</strong> Seba pa mibele yabantu ne fikope (Look at the characters and the pictures)</li>
                <li><strong>Step 4:</strong> Landa ico ulebona no kuteba (Say what you infer and explain why)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Icipususho ca Kuteba (Inferential Question Example)</div>
                <p><strong>Ico calembwa (What is written):</strong> "Kapwepwe alye umuto. Aye uyo mu bana pamo, ewa muntu taaba." (Kapwepwe ate quickly. She was the first among the children, and no one was there.)</p>
                <p><strong>Amipusho (Question):</strong> Bushe Kapwepwe alinonge nshi? (What might Kapwepwe be feeling?)</p>
                <p><strong>Kwasha (Answer - Inference):</strong> "Ali no musango pantu taaba uwa kukeba muntu." (She might be sad or lonely since no one was there.)</p>
                <p><strong>Ico mwapususha mu mabala (What you used from the text):</strong> "ewa muntu taaba" means no one was there.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Amapalo Nga Mukwate (Handling Emotions)</div>
                <p><strong>Ico calembwa (What is written):</strong> "Bana bena Malama baleseka. Balesansamuka pantu ba data babo babwelele." (Malama's children are laughing. They are happy because their father is back.)</p>
                <p><strong>Amipusho (Question):</strong> Bushe ba data babo bafumine nshi? (Where was their father?)</p>
                <p><strong>Kwasha (Answer - Inference):</strong> "Alifumine ku mulimo pamo ku bulendo pantu balesansamuka ukumumona." (He was away at work or on a journey because they are happy to see him.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Umuchinshi wa Muntu (Character's Feelings)</div>
                <p><strong>Ico calembwa (What is written):</strong> "Chanda alilila, ikofya yandi yalibela." (Chanda is crying, his hat is lost.)</p>
                <p><strong>Amipusho (Question):</strong> Bushe Chanda alimvwa shani? (How does Chanda feel?)</p>
                <p><strong>Kwasha (Answer - Inference):</strong> "Alimvwa bukali pantu ikebe yandi yalibela." (He feels sad because his favorite hat is lost.)</p>
            </div>
        `,
        taskInstructions: "Read the passage, answer inferential questions, and use text evidence to justify your answers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Icipingo A: Ukubelenga Akashimi (Part A: Read the Story)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Belengai akashimi aka afumu mu cibemba. (Read the story in Icibemba.)
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <p><strong>Akashimi ka "Bana ba musebo" (Story of "The Road Children")</strong></p>
                        <p>Bana ba Mulenga bali ku musebo. Baleamba peulu ya musebo. Mulenga uyu muntu mulunda. Bana bamo bali basha musango. Balesekela na bulanda. Pano bamo balesekela na bansansa.</p>
                        <p>(Mulenga's children are on the road. They are playing by the road. Mulenga is a kind person. Some children are sad. Some laugh with trouble. But others laugh with joy.)</p>
                        <p>Kanshi bamo bali basha musango. Ico bali basha musango pantu bali na nzala. Baleseba ulupapi na fimpu. Ba Mulenga bamona bana basha musango. Ba Mulenga balebafwako. Balebapa ulupapi na fimpu.</p>
                        <p>(But some are sad. They are sad because they are hungry. They are looking for food. Mulenga sees the sad children. Mulenga helps them. He gives them food.)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipingo B: Amipusho ya Kuteba (Part B: Inferential Questions)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Mwapusushe amipusho iyi na kuteba ukubelesha ifya mu nkashi. (Answer these questions by inferring from the story.)
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Q1:</strong> Bushe ico bana bamo bali basha musango, nshi icabapususha? (Some children are sad - what might be causing their sadness?)</div>
                        <div>Kwasha (Answer): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>Ico mwapususha mu mabala (Text evidence): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Q2:</strong> Bushe ba Mulenga bali bantu ba kitala nshi? (What type of person is Mulenga?)</div>
                        <div>Kwasha (Answer): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>Ico mwapususha mu mabala (Text evidence): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Q3:</strong> Bushe kimye kya mwaka nshi muli uyu musebo? (What time of year might it be in this road?)</div>
                        <div>Kwasha (Answer): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>Ico mwapususha mu mabala (Text evidence): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Q4:</strong> Bushe ba Mulenga bali bantu ba musango nshi mu nsambu ya bantu? (What kind of community person is Mulenga?)</div>
                        <div>Kwasha (Answer): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div>Ico mwapususha mu mabala (Text evidence): _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipingo C: Ukutumbijisha Ukuteba (Part C: Practice More Inferences)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Bambilanshi ukuteba mu mibele ya bantu. (Practice inferring from people's actions.)
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Situation A:</strong> "Mwana wakwashanya ayafwa bana banshi." (A helpful child helps many children.)</div>
                        <div>Bushe uyu mwana ali na muchima nshi? (What kind of heart does this child have?)</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Situation B:</strong> "Mwine ng'anda alikwata pa bulendo namukota." (The house owner closes the door and locks it.)</div>
                        <div>Bushe mwine ng'anda alinonge nshi? (What might the house owner be feeling?)</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Situation C:</strong> "Umwana alilila na kukanka kwiya." (The child cries and refuses to eat.)</div>
                        <div>Bushe umwana ali nshila nshi? (What might be wrong with the child?)</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Icipingo D: Ukulangulula (Part D: Reflection)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Nshi icakosa pa kuteba peulu ya mabala? (What is challenging about inferring beyond the words?)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Nshi mwasambilile leelo pa kuteba? (What did you learn today about making inferences?)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Nga mwaya ku ng'anda, belengani akashimi mu cibemba. Mwapusheko amipusho ibili ya kuteba mwisamba. Lembani ukwasuka ne fyo mwamona mu mabala.",
        homeworkDue: "Saturday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3IcibembaWeek2);
    console.log("grade3-icibemba-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3IcibembaWeek2);
    console.log("grade3-icibemba-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3IcibembaWeek2',
        metadata: grade3IcibembaWeek2.metadata,
        days: grade3IcibembaWeek2
    });
    console.log("grade3-icibemba-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3IcibembaWeek2 = grade3IcibembaWeek2;
console.log("grade3-icibemba-week2.js loaded and registered successfully");