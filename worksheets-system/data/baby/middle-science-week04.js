// Baby Class Science - Week 4 Data (Body Parts Focus)
const middleScienceWeek4 = {
    metadata: {
        grade: "middle",
        subject: "Science",
        week: 4,
        title: "My Wonderful Body",
        description: "Learning about body parts through songs, movement, and review activities"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Body Parts Song Fun",
        subtopic: "Learning Through Music and Movement",
        lessonContent: `
            <p>Welcome to science class! Today we will learn about our amazing bodies through fun songs and dances!</p>
            <p><strong>Key Concept:</strong> Our bodies have many different parts, each with its own name and purpose. Learning through music helps us remember them better!</p>
            <p>Get ready to move, sing, and point to your body parts as we learn together!</p>
            <div class="content-box">
                <p><strong>Today's Song: "Head, Shoulders, Knees, and Toes"</strong></p>
                <p>Lyrics:</p>
                <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p><em>Head, shoulders, knees, and toes, knees and toes</em></p>
                    <p><em>Head, shoulders, knees, and toes, knees and toes</em></p>
                    <p><em>Eyes and ears and mouth and nose</em></p>
                    <p><em>Head, shoulders, knees, and toes, knees and toes!</em></p>
                </div>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Point and Name</div>
                <p>Touch your <strong>head</strong> - This is where your brain is!</p>
                <p>Touch your <strong>shoulders</strong> - They help your arms move!</p>
                <p>Touch your <strong>knees</strong> - They help you bend your legs!</p>
                <p>Touch your <strong>toes</strong> - They help you balance!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Body Part Actions</div>
                <p>What can we do with each body part?</p>
                <ul>
                    <li>Eyes 👀 - See and look</li>
                    <li>Ears 👂 - Hear sounds</li>
                    <li>Mouth 👄 - Talk and eat</li>
                    <li>Nose 👃 - Smell and breathe</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Body Part Fun Facts</div>
                <p>Did you know?</p>
                <ul>
                    <li>You have 2 eyes but only 1 nose!</li>
                    <li>Your fingers have special prints - no one else has the same!</li>
                    <li>Your hair keeps your head warm!</li>
                </ul>
            </div>
        `,
        taskInstructions: "Practice the body parts song and movements. Point to each body part as you sing!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Sing "Head, Shoulders, Knees, and Toes" 3 times with actions:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Point to these body parts on yourself:
                <div style="margin-top: 10px;">
                    <div>Head: <span class="answer-space" style="width: 100px;"></span> (✓ when done)</div>
                    <div>Shoulders: <span class="answer-space" style="width: 100px;"></span> (✓ when done)</div>
                    <div>Knees: <span class="answer-space" style="width: 100px;"></span> (✓ when done)</div>
                    <div>Toes: <span class="answer-space" style="width: 100px;"></span> (✓ when done)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Match the body part to what it does:
                <div style="margin-top: 10px;">
                    <div>Eyes = <span class="answer-space" style="width: 150px;"></span> (see/look)</div>
                    <div>Ears = <span class="answer-space" style="width: 150px;"></span> (hear/listen)</div>
                    <div>Mouth = <span class="answer-space" style="width: 150px;"></span> (talk/eat)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a happy face with all the face parts:
                <div class="drawing-area"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Body Parts Review Test</strong></p>
                <p><strong>Part 1: Body Part Identification</strong></p>
                <p>Circle the correct body part for each picture:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <div style="display: flex; align-items: center; margin: 5px 0;">
                        <div>👃 = (Head / Nose / Ear)</div>
                    </div>
                    <div style="display: flex; align-items: center; margin: 5px 0;">
                        <div>👂 = (Nose / Ear / Eye)</div>
                    </div>
                    <div style="display: flex; align-items: center; margin: 5px 0;">
                        <div>👀 = (Mouth / Eyes / Nose)</div>
                    </div>
                    <div style="display: flex; align-items: center; margin: 5px 0;">
                        <div>👄 = (Ear / Mouth / Eye)</div>
                    </div>
                </div>
                
                <p><strong>Part 2: Song Practice</strong></p>
                <p>Sing "Head, Shoulders, Knees, and Toes" with your family:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Number of times sung: <span class="answer-space" style="width: 100px;"></span></p>
                    <p>Who sang with you? <span class="answer-space" style="width: 150px;"></span></p>
                    <p>Did you do all the actions? <span class="answer-space" style="width: 100px;"></span> (Yes/No)</p>
                </div>
                
                <p><strong>Part 3: Drawing Challenge</strong></p>
                <p>Draw yourself and label 3 body parts:</p>
                <div class="drawing-area" style="height: 120px;"></div>
                <p>Label: 1. ________ 2. ________ 3. ________</p>
                
                <p><em>Parent Note: Please help your child complete this review and return it tomorrow.</em></p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Body Parts Review and Q&A",
        subtopic: "Reinforcing What We Know",
        lessonContent: `
            <p>Great job yesterday with the body parts song! Today we'll review everything we've learned about our bodies.</p>
            <p><strong>Key Concept:</strong> Each body part has a special job. Knowing our body parts helps us understand how amazing our bodies are!</p>
            <p>Get ready for some fun questions and answers about your wonderful body!</p>
            <div class="content-box">
                <p><strong>Today's Review Topics:</strong></p>
                <ul>
                    <li>Naming all body parts from our song</li>
                    <li>What each body part does</li>
                    <li>Why each body part is important</li>
                    <li>How we use our body parts every day</li>
                </ul>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Body Part Functions</div>
                <p><strong>Question:</strong> What do we use our hands for?</p>
                <p><strong>Answer:</strong> We use our hands for:
                <ul>
                    <li>Holding things ✋</li>
                    <li>Clapping 👏</li>
                    <li>Drawing ✍️</li>
                    <li>Eating with fingers 🍎</li>
                </ul></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Body Part Pairs</div>
                <p>Some body parts come in pairs:</p>
                <ul>
                    <li>Eyes 👀 (2 eyes)</li>
                    <li>Ears 👂👂 (2 ears)</li>
                    <li>Hands 🤲 (2 hands)</li>
                    <li>Feet 🦶🦶 (2 feet)</li>
                </ul>
                <p>Why do we have two? It helps us see, hear, and do things better!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Body Care</div>
                <p>How do we take care of our body parts?</p>
                <ul>
                    <li>Wash our hands 🧼</li>
                    <li>Brush our teeth 🪥</li>
                    <li>Cover our mouth when we cough 🤧</li>
                    <li>Rest when we're tired 🛌</li>
                </ul>
            </div>
        `,
        taskInstructions: "Answer the questions about body parts. Think about what you've learned!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Quick Quiz: Circle the correct answer
                <div style="margin-top: 10px;">
                    <div>We use our eyes to: (hear / see / smell)</div>
                    <div>We use our ears to: (see / hear / taste)</div>
                    <div>We use our nose to: (smell / hear / see)</div>
                    <div>We use our mouth to: (talk / see / hear)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Name these body parts:
                <div style="margin-top: 10px; display: flex; gap: 20px;">
                    <div>👃 = <span class="answer-space" style="width: 80px;"></span></div>
                    <div>👂 = <span class="answer-space" style="width: 80px;"></span></div>
                    <div>👀 = <span class="answer-space" style="width: 80px;"></span></div>
                    <div>👄 = <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw lines to match body parts with their jobs:
                <div style="margin-top: 10px;">
                    <div>Hands → <span class="answer-space" style="width: 150px;"></span> (holding things)</div>
                    <div>Feet → <span class="answer-space" style="width: 150px;"></span> (walking/running)</div>
                    <div>Head → <span class="answer-space" style="width: 150px;"></span> (thinking/seeing)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> How many of each do you have?
                <div style="margin-top: 10px;">
                    <div>Noses: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Eyes: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Hands: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Feet: <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Body Parts Final Review Test</strong></p>
                
                <p><strong>Section A: Multiple Choice (Circle the correct answer)</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. Which body part do we use for smelling?<br>
                       a) Eyes b) Ears c) Nose d) Mouth</p>
                    
                    <p>2. How many noses do you have?<br>
                       a) One b) Two c) Three d) Four</p>
                    
                    <p>3. Which body part comes in a pair?<br>
                       a) Head b) Nose c) Eyes d) Mouth</p>
                    
                    <p>4. What do we use our ears for?<br>
                       a) Seeing b) Hearing c) Eating d) Running</p>
                </div>
                
                <p><strong>Section B: Matching</strong></p>
                <p>Draw a line to match the body part with its picture:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                        <span>Ear</span>
                        <span>👃</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                        <span>Eye</span>
                        <span>👂</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                        <span>Nose</span>
                        <span>👀</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                        <span>Mouth</span>
                        <span>👄</span>
                    </div>
                </div>
                
                <p><strong>Section C: Practical Activity</strong></p>
                <p>With a family member, play "Simon Says" with body parts:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Example: "Simon says touch your nose!"</p>
                    <p>How many body parts did you touch correctly? <span class="answer-space" style="width: 100px;"></span></p>
                    <p>Who played with you? <span class="answer-space" style="width: 150px;"></span></p>
                </div>
                
                <p><strong>Section D: Creative Drawing</strong></p>
                <p>Draw a picture of your favorite body part and explain why you like it:</p>
                <div class="drawing-area" style="height: 100px;"></div>
                <p>I like my ________ because: <span class="answer-space" style="width: 200px;"></span></p>
                
                <p><strong>Parent/Guardian Signature:</strong> _________________________</p>
                <p><em>Date Completed: _______________</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyScienceWeek4);
    console.log("babyScienceWeek4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyScienceWeek4);
    console.log("babyScienceWeek4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyScienceWeek4',
        metadata: babyScienceWeek4.metadata,
        days: babyScienceWeek4
    });
    console.log("babyScienceWeek4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyScienceWeek4 = babyScienceWeek4;
console.log("babyScienceWeek4.js loaded and registered successfully");