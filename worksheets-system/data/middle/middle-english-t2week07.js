// Grade Middle English - Term 2 Week 7 Data
const gradeMiddleEnglishWeek7 = {
    metadata: {
        grade: "middle",
        subject: "English",
        term: 2,
        week: 7,
        title: "Retelling Stories & Picture Interpretation",
        description: "Practicing chronology, story retelling, picture interpretation, and creating tales from visual cues"
    },
    
    monday: {
        subject: "English",
        topic: "Reading Comprehension",
        subtopic: "Chronology – First, Next, Last",
        lessonContent: `
            <p>Welcome! Today we'll learn how to identify what happens first, next, and last in a story.</p>
            <p><strong>Key Question:</strong> How can we tell the order of events in a story?</p>
            <p><strong>Introduction:</strong> Every story has a beginning, middle, and end. Understanding the order of events helps us understand and retell stories correctly.</p>
            <p><strong>Signal Words for Chronology:</strong></p>
            <ul>
                <li><strong>First / Once upon a time / In the beginning:</strong> Tells us the story is starting</li>
                <li><strong>Next / Then / After that / Later:</strong> Shows what happens next</li>
                <li><strong>Finally / In the end / Last / Eventually:</strong> Signals the conclusion</li>
            </ul>
            <p><strong>Let's Practice with "The Tortoise and the Hare":</strong></p>
            <ol>
                <li><strong>First:</strong> The hare bragged that he was the fastest animal. The tortoise challenged him to a race.</li>
                <li><strong>Next:</strong> The hare ran far ahead and decided to take a nap under a tree.</li>
                <li><strong>Then:</strong> The tortoise kept walking slowly but steadily.</li>
                <li><strong>Finally:</strong> The tortoise passed the sleeping hare and won the race!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Daily Routine Example</div>
                <p>First, I wake up. Next, I eat breakfast. Then, I brush my teeth. Finally, I go to school.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Story Clues</div>
                <p>Words like "meanwhile" tell us two things are happening at the same time. Words like "suddenly" tell us something unexpected happens!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tasks"></i> Why Order Matters</div>
                <p>If you put on your shoes before your socks, that wouldn't make sense! Stories are the same - events need to be in the right order.</p>
            </div>
        `,
        taskInstructions: "Identify chronological order in a familiar story.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read "The Lion and the Mouse"</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read this short story:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #4A90E2;">
                        <p>A lion was sleeping when a tiny mouse ran across his nose. The lion woke up and caught the mouse. The mouse begged, "Please let me go! One day I will help you!" The lion laughed but let the mouse go. Later, the lion got trapped in a hunter's net. The mouse heard the lion roar and chewed through the ropes. The lion was free!</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Put Events in Order</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Number the events from 1 to 5 in the correct order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ The mouse chewed through the ropes and freed the lion.</div>
                        <div>___ The lion woke up and caught the mouse.</div>
                        <div>___ The mouse ran across the lion's nose.</div>
                        <div>___ The lion laughed and let the mouse go.</div>
                        <div>___ The lion got trapped in a hunter's net.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw three pictures showing First, Next, and Last from the story:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">First<br><div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div></div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">Next<br><div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div></div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">Last<br><div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Your Turn</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write about something you did today using First, Next, Then, and Finally:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Tell a family member about your day using sequence words (first, next, then, finally). Ask them to listen for the correct order.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Speaking & Storytelling",
        subtopic: "Story Retelling in Your Own Words",
        lessonContent: `
            <p>Today we'll practice retelling stories using our own words!</p>
            <p><strong>Key Question:</strong> How can we retell a story without memorizing every single word?</p>
            <p><strong>Introduction:</strong> Retelling a story means sharing the main events in order, but you don't need to remember every detail. The most important parts are the characters, setting, problem, and solution.</p>
            <p><strong>Steps to Retell a Story:</strong></p>
            <ol>
                <li><strong>Remember the characters:</strong> Who is in the story?</li>
                <li><strong>Remember the setting:</strong> Where and when does it happen?</li>
                <li><strong>Remember the beginning:</strong> What happens first?</li>
                <li><strong>Remember the middle:</strong> What problem happens?</li>
                <li><strong>Remember the end:</strong> How is the problem solved?</li>
            </ol>
            <p><strong>Retelling Sentence Starters:</strong></p>
            <ul>
                <li>"This story is about..."</li>
                <li>"First, ..."</li>
                <li>"Then, something happened..."</li>
                <li>"The problem was..."</li>
                <li>"In the end, ..."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Example Retelling</div>
                <p><strong>Original:</strong> "Goldilocks entered the bears' cottage. She saw three bowls of porridge. The first was too hot, the second too cold, and the third just right."</p>
                <p><strong>Retold:</strong> "This story is about a girl named Goldilocks. First, she went into a house that belonged to three bears. She found three bowls of porridge. One was too hot, one was too cold, and one was just right."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Keep the Main Idea</div>
                <p>You don't need to say "the porridge was made with oats and honey" unless that matters to the story. Focus on what moves the story forward!</p>
            </div>
        `,
        taskInstructions: "Practice retelling a story in your own words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen to "The Boy Who Cried Wolf"</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will read this story. Listen carefully:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #50E3C2;">
                        <p>A young shepherd boy was bored watching the village sheep. He decided to play a trick. He ran to the village shouting, "Wolf! Wolf! Help!" The villagers came running, but there was no wolf. The boy laughed. The next day, he did it again. The villagers came again, but again there was no wolf. Then one day, a real wolf appeared. The boy shouted, "Wolf! Wolf! Please help!" But this time, no one believed him. The wolf ate many sheep.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Answer These Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer to help you prepare for retelling:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Who is the main character? <span style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;">Where does the story happen? <span style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;">What does the boy do at first? <span style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;">What is the problem? <span style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;">How does the story end? <span style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Retell the Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the story in your own words. Use complete sentences:
                    <div class="answer-space" style="height: 200px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Partner Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Tell your partner your retelling. Listen to their retelling. What was the same? What was different?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Retell your favorite fairy tale to a family member. Ask them to tell you what parts they remember best.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Visual Literacy",
        subtopic: "Picture Interpretation – Describing What You See",
        lessonContent: `
            <p>Today we'll learn how to look at a picture and describe what is happening!</p>
            <p><strong>Key Question:</strong> How can a picture tell a story without words?</p>
            <p><strong>Introduction:</strong> Pictures are like frozen moments in time. We can use our observation skills to figure out what's happening, who the people (or animals) are, where they are, and how they might be feeling.</p>
            <p><strong>Steps for Picture Interpretation:</strong></p>
            <ol>
                <li><strong>Look at the whole picture:</strong> What is the first thing you notice?</li>
                <li><strong>Look at the details:</strong> What do you see in the background? Foreground?</li>
                <li><strong>Look at the characters:</strong> Who or what is in the picture? How are they feeling?</li>
                <li><strong>Look at the setting:</strong> Where does this scene take place? What time of day?</li>
                <li><strong>Make inferences:</strong> What happened right before? What might happen next?</li>
            </ol>
            <p><strong>Questions to Ask When Looking at a Picture:</strong></p>
            <ul>
                <li>"I see..." (What is visible?)</li>
                <li>"I think..." (What do you infer?)</li>
                <li>"I wonder..." (What questions do you have?)</li>
                <li>"The characters feel..." (What emotions do you see?)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Observation Example</div>
                <p><strong>Picture:</strong> A boy with an umbrella walking on a wet street with puddles.</p>
                <p><strong>Interpretation:</strong> "I see a boy holding an umbrella. There are puddles on the ground. I think it was raining, but now the rain has stopped. The boy might be walking home from school. I wonder if he is happy or tired."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Clues in Details</div>
                <p>A character's body language tells us how they feel! Crossed arms might mean angry or cold. A big smile means happy. Looking down might mean sad or shy.</p>
            </div>
        `,
        taskInstructions: "Observe a large illustration and describe what is happening.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Look at the Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will show a large illustration. Look carefully for 2 minutes.
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #999;">[Teacher displays a large illustration here]</span>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Describe What You See</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write down everything you see in the picture:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Where does this scene take place? What time of day is it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Make Inferences</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What do you think is happening in this picture? Use evidence from what you see:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How do the characters feel? How can you tell?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What do you think happened just before this moment? What might happen next?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Share Your Interpretation</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Share your answers with a partner. How are your interpretations similar or different?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a picture in a magazine, book, or online. Write 5 sentences describing what you see and what you think is happening.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Creative Writing",
        subtopic: "Creating Tales from Pictures",
        lessonContent: `
            <p>Today we'll become storytellers by creating our own tales based only on pictures!</p>
            <p><strong>Key Question:</strong> How can one picture inspire an entire story?</p>
            <p><strong>Introduction:</strong> Every picture has a story hidden inside it. Today, you'll look at pictures and imagine the story behind them. You'll create characters, a setting, a problem, and a solution - all from visual clues.</p>
            <p><strong>How to Create a Story from a Picture:</strong></p>
            <ol>
                <li><strong>Observe carefully:</strong> What do you see? Who is in the picture?</li>
                <li><strong>Imagine the beginning:</strong> What happened right before this moment?</li>
                <li><strong>Describe the current moment:</strong> What is happening now?</li>
                <li><strong>Imagine the ending:</strong> What will happen next? How will the story end?</li>
            </ol>
            <p><strong>Parts of a Tiny Story:</strong></p>
            <ul>
                <li><strong>Characters:</strong> Who is in your story? Give them names if there are people or animals.</li>
                <li><strong>Setting:</strong> Where and when does your story take place?</li>
                <li><strong>Problem:</strong> What challenge do the characters face?</li>
                <li><strong>Solution:</strong> How is the problem solved?</li>
                <li><strong>Ending:</strong> How does the story wrap up?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-image"></i> Picture Prompt Example</div>
                <p><strong>Picture:</strong> A kitten stuck in a tree with a girl looking up.</p>
                <p><strong>Tiny Story:</strong> "Lily was playing in her backyard when she heard a sad meow. She looked up and saw a tiny orange kitten stuck on a high branch. The kitten was shaking with fear. Lily ran to get her dad, who brought a ladder. Together, they rescued the kitten. Lily named her new friend Maple, and they became best friends forever."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Story Starters</div>
                <p>Not sure how to start? Try: "Once upon a time...", "One sunny morning...", "In a small town...", or "Have you ever wondered what happens when..."</p>
            </div>
        `,
        taskInstructions: "Create a tiny story based on a picture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose Your Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will show several pictures. Choose ONE that inspires you.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #999;">[Teacher displays picture options here]</span>
                    </div>
                    <div style="margin-top: 10px;">My chosen picture shows: <span style="display: inline-block; width: 300px; border-bottom: 1px solid #000;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Plan Your Story</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer these questions to plan your story:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Who is in your story? (Give them names!) <span style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;">Where does your story happen? <span style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;">What is the problem? <span style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;">How is the problem solved? <span style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Tiny Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short story (5-8 sentences) based on your picture:
                    <div class="answer-space" style="height: 200px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Illustrate Your Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture to go with your story:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Share Your Tale</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Read your story to a partner or the class. Listen to their feedback!
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a picture from a magazine or newspaper. Write a 5-sentence story about what is happening in the picture. Bring it to share on Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleEnglishWeek7);
    console.log("gradeMiddleEnglish-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleEnglishWeek7);
    console.log("gradeMiddleEnglish-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleEnglishWeek7',
        metadata: gradeMiddleEnglishWeek7.metadata,
        days: gradeMiddleEnglishWeek7
    });
    console.log("gradeMiddleEnglish-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleEnglishWeek7 = gradeMiddleEnglishWeek7;
console.log("gradeMiddleEnglish-week7.js loaded and registered successfully");