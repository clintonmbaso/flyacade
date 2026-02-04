// Grade 1 Literacy - Week 9 Data
const grade1LiteracyWeek9 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        week: 9,
        title: "Introducing and Identifying Digraph Sounds",
        description: "Introduction to digraph sounds: /ch/, /sh/, /th/ (voiced & unvoiced), /ng/, /qu/, /er/, and /ar/"
    },
    
    monday: {
        subject: "Literacy",
        topic: "H-Digraphs: /ch/ and /sh/",
        subtopic: "Identifying and sounding out digraph sounds /ch/ and /sh/",
        lessonContent: `
            <p>Welcome to Digraph Week! Digraphs are two letters that stand together to make one new sound.</p>
            <p><strong>What are digraphs?</strong> When 'c' and 'h' stand together, they make the /ch/ sound. When 's' and 'h' stand together, they make the /sh/ sound.</p>
            <p><strong>The /sh/ sound:</strong> This is our "quiet" sound – like we're telling someone "shhh!"</p>
            <ul>
                <li>Put your finger to your lips</li>
                <li>Say "/sh/" like in "ship"</li>
                <li>Other /sh/ words: shop, fish, wish</li>
            </ul>
            <p><strong>The /ch/ sound:</strong> This is our "choo-choo train" sound – like a train moving!</p>
            <ul>
                <li>Move your arms like train wheels</li>
                <li>Say "/ch/" like in "chin"</li>
                <li>Other /ch/ words: chop, chat, much</li>
            </ul>
            <p><strong>Remember:</strong> Two letters, ONE sound!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train" style="color: #FF9800;"></i> /ch/ Sound Words</div>
                <p>"chin" - Starts with /ch/</p>
                <p>"chop" - Starts with /ch/</p>
                <p>"chat" - Starts with /ch/</p>
                <p>Ending with /ch/: much, such, rich</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-mute" style="color: #2196F3;"></i> /sh/ Sound Words</div>
                <p>"ship" - Starts with /sh/</p>
                <p>"shop" - Starts with /sh/</p>
                <p>"fish" - Ends with /sh/</p>
                <p>"wish" - Ends with /sh/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-sparkles"></i> Gesture Game</div>
                <p>For /sh/: Finger to lips – "Shhh!"</p>
                <p>For /ch/: Move arms like train wheels – "Ch-ch-ch!"</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using /ch/ and /sh/ sounds.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Do the gesture for each word: "Shhh" for /sh/ or train arms for /ch/:
                <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🚂</span>
                        </div>
                        <div>chin</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🤫</span>
                        </div>
                        <div>ship</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🚂</span>
                        </div>
                        <div>chop</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; border: 1px solid #ccc; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 24px;">🤫</span>
                        </div>
                        <div>shop</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Circle the correct digraph for each picture:
                <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 20px; flex-wrap: wrap;">
                    <div style="text-align: center;">
                        <div style="font-size: 30px;">🚢</div>
                        <div>sh / ch</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 30px;">🧔</div>
                        <div>sh / ch</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 30px;">🐟</div>
                        <div>sh / ch</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 30px;">🪓</div>
                        <div>sh / ch</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Write 'ch' or 'sh' to complete the words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>___in</div>
                    <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                    <div>___ip</div>
                    <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                    <div>fi___</div>
                    <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                    <div>mu___</div>
                    <div style="height: 30px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw one picture that starts with /ch/ and one that starts with /sh/:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div style="flex: 1;">
                        <div style="text-align: center; font-weight: bold;">/ch/ sound</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                        <div class="answer-space" style="height: 30px; text-align: center;">Word: ________</div>
                    </div>
                    <div style="flex: 1;">
                        <div style="text-align: center; font-weight: bold;">/sh/ sound</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                        <div class="answer-space" style="height: 30px; text-align: center;">Word: ________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three things at home that have the /ch/ or /sh/ sound in their name. Draw pictures of them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Voiced and Unvoiced /th/",
        subtopic: "Distinguishing voiced /th/ (that) from unvoiced /th/ (thin)",
        lessonContent: `
            <p>Today we learn about a special digraph: TH! But there are TWO different /th/ sounds!</p>
            <p><strong>The /th/ digraph:</strong> When 't' and 'h' stand together, they make the /th/ sound.</p>
            <p><strong>Unvoiced /th/:</strong> This is our "quiet" /th/ sound – like in "thin" or "thank."</p>
            <ul>
                <li>No vibration in your throat</li>
                <li>Say "/th/" like a soft whisper</li>
                <li>Words: thin, thank, thick, thumb</li>
            </ul>
            <p><strong>Voiced /th/:</strong> This is our "vibrating" /th/ sound – like in "that" or "them."</p>
            <ul>
                <li>Feel your throat vibrate</li>
                <li>Say "/th/" with voice</li>
                <li>Words: that, them, this, there</li>
            </ul>
            <p><strong>How to tell the difference:</strong> Put your hand on your throat! If it vibrates, it's voiced. If not, it's unvoiced.</p>
            <p><strong>Remember:</strong> Same letters, two different sounds!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-down" style="color: #757575;"></i> Unvoiced /th/ Words</div>
                <p>"thin" - Quiet /th/</p>
                <p>"thank" - Quiet /th/</p>
                <p>"thick" - Quiet /th/</p>
                <p>"thumb" - Quiet /th/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up" style="color: #4CAF50;"></i> Voiced /th/ Words</div>
                <p>"that" - Vibrating /th/</p>
                <p>"them" - Vibrating /th/</p>
                <p>"this" - Vibrating /th/</p>
                <p>"there" - Vibrating /th/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Throat Check</div>
                <p>Put your hand on your throat:</p>
                <p>Voiced = Feel vibration</p>
                <p>Unvoiced = No vibration</p>
            </div>
        `,
        taskInstructions: "Practice identifying voiced and unvoiced /th/ sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Throat Vibration Check</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say each word with your hand on your throat. Check ✓ if you feel vibration:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>that: Vibration? ☐ Yes ☐ No</div>
                        <div>thin: Vibration? ☐ Yes ☐ No</div>
                        <div>them: Vibration? ☐ Yes ☐ No</div>
                        <div>thank: Vibration? ☐ Yes ☐ No</div>
                        <div>this: Vibration? ☐ Yes ☐ No</div>
                        <div>thick: Vibration? ☐ Yes ☐ No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort the words into "Vibrating" (voiced) or "Quiet" (unvoiced):
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <div style="font-weight: bold;">Vibrating /th/</div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div>Words: that, them, this</div>
                        </div>
                        <div>
                            <div style="font-weight: bold;">Quiet /th/</div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div>Words: thin, thank, thick</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Picture Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle if the picture shows a voiced or unvoiced /th/ word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">👍</span>
                            <span>thumb</span>
                            <span style="margin-left: 30px;">☐ Voiced</span>
                            <span style="margin-left: 15px;">☐ Unvoiced</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">👉</span>
                            <span>that</span>
                            <span style="margin-left: 30px;">☐ Voiced</span>
                            <span style="margin-left: 15px;">☐ Unvoiced</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">📏</span>
                            <span>thin</span>
                            <span style="margin-left: 30px;">☐ Voiced</span>
                            <span style="margin-left: 15px;">☐ Unvoiced</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: /th/ Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 'th' to complete these words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___in</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>___at</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>___em</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>___ank</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three things at home with the /th/ sound in their name. Say them and feel your throat for vibration.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Nasal and Labial Digraphs: /ng/ and /qu/",
        subtopic: "Sounding out and identifying /ng/ and /qu/ sounds",
        lessonContent: `
            <p>Today we learn two more digraphs: /ng/ and /qu/!</p>
            <p><strong>The /ng/ digraph:</strong> When 'n' and 'g' stand together, they make our "singing" sound!</p>
            <ul>
                <li>Say "/ng/" like you're singing a song</li>
                <li>This sound often comes at the END of words</li>
                <li>Words: ring, sing, long, king</li>
            </ul>
            <p><strong>The /qu/ digraph:</strong> When 'q' and 'u' stand together, they make our "duck" sound!</p>
            <ul>
                <li>Say "/qu/" like a duck: "quack quack!"</li>
                <li>This sound often comes at the BEGINNING of words</li>
                <li>Words: queen, quick, quit, quiz</li>
            </ul>
            <p><strong>Sound Hunt:</strong> Where is the digraph? Beginning or end?</p>
            <p><strong>Remember:</strong> /ng/ = singing, /qu/ = duck!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music" style="color: #E91E63;"></i> /ng/ Sound Words</div>
                <p>"ring" - Ends with /ng/</p>
                <p>"sing" - Ends with /ng/</p>
                <p>"long" - Ends with /ng/</p>
                <p>"king" - Ends with /ng/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-feather-alt" style="color: #FF9800;"></i> /qu/ Sound Words</div>
                <p>"queen" - Starts with /qu/</p>
                <p>"quick" - Starts with /qu/</p>
                <p>"quit" - Starts with /qu/</p>
                <p>"quiz" - Starts with /qu/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Sound Hunt</div>
                <p>Listen: Where is the digraph?</p>
                <p>Beginning: queen</p>
                <p>End: ring</p>
            </div>
        `,
        taskInstructions: "Practice identifying /ng/ and /qu/ sounds and their position in words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Is the digraph at the beginning or end? Circle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ring: Beginning / End</div>
                        <div>queen: Beginning / End</div>
                        <div>sing: Beginning / End</div>
                        <div>quick: Beginning / End</div>
                        <div>long: Beginning / End</div>
                        <div>quiz: Beginning / End</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Picture Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match each picture to its correct digraph:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">👑</span>
                            <span>queen</span>
                            <span style="margin-left: 30px;">A) ng</span>
                            <span style="margin-left: 15px;">B) qu</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">💍</span>
                            <span>ring</span>
                            <span style="margin-left: 30px;">A) ng</span>
                            <span style="margin-left: 15px;">B) qu</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">🎤</span>
                            <span>sing</span>
                            <span style="margin-left: 30px;">A) ng</span>
                            <span style="margin-left: 15px;">B) qu</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 30px; margin-right: 15px;">🐥</span>
                            <span>duck (quack)</span>
                            <span style="margin-left: 30px;">A) ng</span>
                            <span style="margin-left: 15px;">B) qu</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Digraph Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write each word under the correct digraph:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <div style="font-weight: bold;">/ng/ sound</div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div>Words: ring, sing, long</div>
                        </div>
                        <div>
                            <div style="font-weight: bold;">/qu/ sound</div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div class="answer-space" style="height: 30px; width: 100px;"></div>
                            <div>Words: queen, quick, quit</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 'ng' or 'qu' to complete the words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ri___</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>___een</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>si___</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>___ick</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find one thing at home that has the /ng/ sound (like 'ring') and one that has the /qu/ sound (like 'queen' picture).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "R-Controlled Digraphs: /er/ and /ar/",
        subtopic: "Identifying and sounding out /er/ and /ar/ sounds",
        lessonContent: `
            <p>Today we learn our last two digraphs: /er/ and /ar/! These are called "r-controlled" vowels.</p>
            <p><strong>The /ar/ digraph:</strong> When 'a' and 'r' stand together, they make our "pirate sound"!</p>
            <ul>
                <li>Say "/ar/" like a pirate: "Arrr!"</li>
                <li>Words: farm, car, star, far</li>
                <li>Often in the middle of words</li>
            </ul>
            <p><strong>The /er/ digraph:</strong> When 'e' and 'r' stand together, they make our "mixer sound"!</p>
            <ul>
                <li>Say "/er/" like a mixer: "Errrrr"</li>
                <li>Words: bird, her, fern, verb</li>
                <li>Often in the middle of words</li>
            </ul>
            <p><strong>Sound Practice:</strong> Say the sounds clearly: /ar/ like a pirate, /er/ like a mixer!</p>
            <p><strong>Remember:</strong> When 'r' comes after a vowel, it changes the vowel's sound!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-skull-crossbones" style="color: #795548;"></i> /ar/ Sound Words</div>
                <p>"farm" - Has /ar/ in middle</p>
                <p>"car" - Ends with /ar/</p>
                <p>"star" - Ends with /ar/</p>
                <p>"far" - Ends with /ar/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-blender" style="color: #9C27B0;"></i> /er/ Sound Words</div>
                <p>"bird" - Has /er/ in middle</p>
                <p>"her" - Ends with /er/</p>
                <p>"fern" - Ends with /er/</p>
                <p>"verb" - Starts with /er/</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-treasure-chest"></i> Digraph Treasure</div>
                <p>We've learned 7 digraphs this week!</p>
                <p>ch, sh, th, ng, qu, er, ar</p>
                <p>You're a Digraph Detective!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using /er/ and /ar/ sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the correct digraph sound for each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>farm: er / ar</div>
                        <div>bird: er / ar</div>
                        <div>car: er / ar</div>
                        <div>her: er / ar</div>
                        <div>star: er / ar</div>
                        <div>fern: er / ar</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Picture Match</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from the picture to its digraph:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🚜</div>
                            <div>farm</div>
                            <div style="margin-top: 5px;">
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">er</span>
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">ar</span>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🐦</div>
                            <div>bird</div>
                            <div style="margin-top: 5px;">
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">er</span>
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">ar</span>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🚗</div>
                            <div>car</div>
                            <div style="margin-top: 5px;">
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">er</span>
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">ar</span>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 30px;">🌿</div>
                            <div>fern</div>
                            <div style="margin-top: 5px;">
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">er</span>
                                <span style="padding: 3px 10px; border: 1px solid #ccc; margin: 0 5px;">ar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 'er' or 'ar' to finish each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>f___m</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>b___d</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>c___</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc; margin-bottom: 15px;"></div>
                        <div>h___</div>
                        <div style="height: 30px; border-bottom: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Digraph Master Review</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture for each digraph sound:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
                        <div style="text-align: center;">
                            <div>/ch/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/sh/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/th/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/ng/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/qu/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/er/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>/ar/</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>ME!</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Make a list of all 7 digraphs you learned this week. Draw one picture for each digraph.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek9);
    console.log("literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek9);
    console.log("literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek9',
        metadata: grade1LiteracyWeek9.metadata,
        days: grade1LiteracyWeek9
    });
    console.log("literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek9 = grade1LiteracyWeek9;
console.log("literacy-week9.js loaded and registered successfully");