// Grade 3 Literacy - Term 3 Week 2 Data
const grade3LiteracyWeek2 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        term: 3,
        week: 2,
        title: "Intensive Reading",
        description: "Reading a variety of texts silently, retelling main ideas, and answering comprehension questions using the 5 Ws + H format"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Intensive Reading",
        subtopic: "Silent Reading & Retelling Main Ideas",
        lessonContent: `
            <p>Welcome to our reading lesson! Today we'll practice reading silently and telling others what we've read.</p>
            <p><strong>Key Question:</strong> How can you remember the most important parts of a story?</p>
            <p><strong>What is Intensive Reading?</strong></p>
            <p>Intensive reading means reading carefully to understand the meaning. Today we will read silently (without making sounds) and then retell the main ideas to a friend.</p>
            <p><strong>Why Read Silently?</strong></p>
            <ul>
                <li>It helps you read faster</li>
                <li>You can focus better on the meaning</li>
                <li>It lets you read anywhere without disturbing others</li>
            </ul>
            <p><strong>How to Retell Main Ideas:</strong></p>
            <ol>
                <li>Think about what happened first, next, and last</li>
                <li>Remember who the story is about</li>
                <li>Think about where and when the story takes place</li>
                <li>Tell the most important parts in your own words</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-open"></i> Sample Text: The Lost Puppy</div>
                <p>Mia found a small brown puppy in the park. The puppy looked lost and scared. Mia looked at the puppy's collar and found a phone number. She called the number, and the owner came to get the puppy. The owner was so happy! Mia felt proud for helping.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> How to Retell This Story</div>
                <p>Main Idea: Mia found a lost puppy, called its owner, and helped them reunite.<br>
                First: Mia found the puppy in the park.<br>
                Next: She called the phone number on the collar.<br>
                Last: The owner came and was very happy.</p>
            </div>
        `,
        taskInstructions: "Read the story silently, then retell the main ideas to a partner.",
        taskContent: `
            <div class="content-box">
                <p><strong>Story 1: The Rainy Day</strong></p>
                <div class="reading-passage" style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p>Sam woke up to the sound of rain on his window. He looked outside and saw big puddles on the ground. Sam felt sad because he wanted to play soccer. Then he had an idea. He put on his raincoat and boots. Sam went outside and jumped in the biggest puddle. Splash! He laughed and laughed. Playing in the rain was fun after all!</p>
                </div>
                <div class="task-item">
                    <span class="task-number">1</span> Read the story silently. Read it two times slowly.
                    <div class="check-box">☐ I read the story silently two times</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Tell a partner what happened in the story. Write the main idea below:
                    <div class="answer-space" style="height: 80px; margin-top: 10px; border: 1px solid #ccc; padding: 8px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Story 2: The Kind Neighbor</strong></p>
                <div class="reading-passage" style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p>Mrs. Chen lived next door to Leo. She was old and could not walk very well. One day, Leo saw that Mrs. Chen's trash can was still full on trash day. Leo took her trash can to the street. When Mrs. Chen saw what Leo did, she gave him a big smile. "Thank you, Leo," she said. "You are a kind boy." Leo felt warm inside. Being kind feels good.</p>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Read silently. Then retell the main ideas to your partner.
                    <div class="check-box">☐ I told my partner what happened in the story</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write what happened first, next, and last:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>First:</strong> <span style="border-bottom: 1px dotted #000; width: 200px; display: inline-block;"> </span></div>
                        <div style="margin-top: 8px;"><strong>Next:</strong> <span style="border-bottom: 1px dotted #000; width: 200px; display: inline-block;"> </span></div>
                        <div style="margin-top: 8px;"><strong>Last:</strong> <span style="border-bottom: 1px dotted #000; width: 200px; display: inline-block;"> </span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Your Turn</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of your favorite part from one of the stories:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Write one sentence telling what the story was about:
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Read a short book or story at home silently. Tell a family member what happened in the story. Ask them to sign your reading log.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Intensive Reading",
        subtopic: "Literal Comprehension - Who, What, Where",
        lessonContent: `
            <p>Welcome back! Today we'll learn how to answer questions about a story using the 5 Ws + H format.</p>
            <p><strong>Key Question:</strong> What questions help us understand a story better?</p>
            <p><strong>The 5 Ws + H Questions:</strong></p>
            <ul>
                <li><strong>Who?</strong> - The people or characters in the story</li>
                <li><strong>What?</strong> - What happened or what the story is about</li>
                <li><strong>Where?</strong> - Where the story takes place (the setting)</li>
                <li><strong>When?</strong> - When the story happens (time of day, season, year)</li>
                <li><strong>Why?</strong> - Why things happen (the reason)</li>
                <li><strong>How?</strong> - How something happens or how a character feels</li>
            </ul>
            <p><strong>Today we focus on: WHO, WHAT, and WHERE</strong></p>
            <p>These are called "literal questions" because the answers are right there in the story. You can find them by looking back at the text!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question & Answer Examples</div>
                <p><strong>Who?</strong> Who found the lost puppy? → <em>Mia found the lost puppy.</em><br>
                <strong>What?</strong> What did Mia do? → <em>Mia called the phone number on the collar.</em><br>
                <strong>Where?</strong> Where did Mia find the puppy? → <em>Mia found the puppy in the park.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Finding Answers</div>
                <p>Literal questions have answers that are written directly in the story. You don't need to guess - just look for the words!</p>
            </div>
        `,
        taskInstructions: "Read the story and answer WHO, WHAT, and WHERE questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Story: The School Garden</strong></p>
                <div class="reading-passage" style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p>Ms. Garcia's class worked in the school garden on Tuesday morning. The students planted tomato seeds in the soil. Maria watered the seeds with a small can. Jamal put sticks next to each plant. "These sticks will help the tomatoes grow tall," he said. Ms. Garcia smiled at her students. "You are doing great work," she said. The garden looked beautiful in the sunlight behind the school building.</p>
                </div>
                
                <div class="task-item">
                    <span class="task-number">1</span> <strong>WHO?</strong> Who worked in the school garden?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> <strong>WHAT?</strong> What did the students plant?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>WHERE?</strong> Where did the story take place?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Story 2: The Lost Key</strong></p>
                <div class="reading-passage" style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p>Carlos could not find his house key. He looked under the mat by the front door. He looked in his backpack. The key was not there. Carlos remembered that he played at the park after school. He ran to the park. There, next to the slide, was his key! Carlos was so happy. He put the key in his pocket and walked home.</p>
                </div>
                
                <div class="task-item">
                    <span class="task-number">4</span> <strong>WHO?</strong> Who lost the key?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> <strong>WHAT?</strong> What did Carlos find at the park?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> <strong>WHERE?</strong> Where did Carlos find his key?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Write one WHO question about "The School Garden" story:
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Write one WHAT question about "The Lost Key" story:
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Write one WHERE question about either story:
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Read a short story at home. Write three questions using Who, What, and Where. Answer each question with one sentence.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Intensive Reading",
        subtopic: "Deeper Comprehension - When, Why, How",
        lessonContent: `
            <p>Welcome to our final reading lesson this week! Today we'll answer deeper questions using WHEN, WHY, and HOW.</p>
            <p><strong>Key Question:</strong> How can we understand stories even better?</p>
            <p><strong>Today we focus on: WHEN, WHY, and HOW</strong></p>
            <p>These questions help us understand more about the story. Sometimes the answers are right there, and sometimes we need to think a little!</p>
            <p><strong>The Last Three Question Words:</strong></p>
            <ul>
                <li><strong>When?</strong> - When did it happen? (morning, night, summer, Tuesday)</li>
                <li><strong>Why?</strong> - Why did it happen? (the reason or cause)</li>
                <li><strong>How?</strong> - How did it happen? (the way something was done or how someone felt)</li>
            </ul>
            <p><strong>All 5 Ws + H Together:</strong></p>
            <p>When you answer all six questions, you understand the whole story!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> WHEN Questions</div>
                <p><strong>When did Sam play in the rain?</strong> → <em>Sam played in the rain after he woke up.</em><br>
                <strong>When did Ms. Garcia's class work in the garden?</strong> → <em>They worked on Tuesday morning.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question"></i> WHY Questions</div>
                <p><strong>Why did Sam feel sad at first?</strong> → <em>Sam felt sad because he wanted to play soccer but it was raining.</em><br>
                <strong>Why did Leo take Mrs. Chen's trash can?</strong> → <em>Leo took it because Mrs. Chen could not walk well and needed help.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> HOW Questions</div>
                <p><strong>How did Mia feel after helping the puppy owner?</strong> → <em>Mia felt proud for helping.</em><br>
                <strong>How did Carlos find his key?</strong> → <em>Carlos remembered he played at the park and ran there to look.</em></p>
            </div>
        `,
        taskInstructions: "Read the story and answer WHEN, WHY, and HOW questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Story: The Birthday Surprise</strong></p>
                <div class="reading-passage" style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p>Elena woke up early on Saturday morning because it was her birthday. She ran downstairs to the kitchen. No one was there. Elena felt sad. Then she heard a noise from the backyard. Elena opened the door slowly. "SURPRISE!" shouted her family and friends. There was a big table with cake and presents. Elena's mom had planned the party secretly. Elena smiled so wide. "This is the best birthday ever!" she said.</p>
                </div>
                
                <div class="task-item">
                    <span class="task-number">1</span> <strong>WHEN?</strong> When did Elena wake up?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> <strong>WHY?</strong> Why did Elena feel sad at first?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>HOW?</strong> How did Elena feel at the end of the story?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Story 2: The Ant and the Grasshopper</strong></p>
                <div class="reading-passage" style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p>All summer long, the grasshopper sang and played while the ant worked hard collecting food. "Why work so hard?" asked the grasshopper. "Come play with me!" But the ant said, "I am storing food for winter." When winter came, the grasshopper had no food and was very hungry. The ant shared his food because he was kind. The grasshopper learned that working hard is important.</p>
                </div>
                
                <div class="task-item">
                    <span class="task-number">4</span> <strong>WHEN?</strong> When did the ant collect food?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> <strong>WHY?</strong> Why did the grasshopper have no food in winter?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> <strong>HOW?</strong> How did the grasshopper feel at the end of the story?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: All 5 Ws + H Review</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Choose one story from today. Write all 5 Ws + H questions and answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Who?</strong> <span style="border-bottom: 1px dotted #000; width: 250px; display: inline-block;"> </span></div>
                        <div style="margin-top: 5px;"><strong>What?</strong> <span style="border-bottom: 1px dotted #000; width: 250px; display: inline-block;"> </span></div>
                        <div style="margin-top: 5px;"><strong>Where?</strong> <span style="border-bottom: 1px dotted #000; width: 250px; display: inline-block;"> </span></div>
                        <div style="margin-top: 5px;"><strong>When?</strong> <span style="border-bottom: 1px dotted #000; width: 250px; display: inline-block;"> </span></div>
                        <div style="margin-top: 5px;"><strong>Why?</strong> <span style="border-bottom: 1px dotted #000; width: 250px; display: inline-block;"> </span></div>
                        <div style="margin-top: 5px;"><strong>How?</strong> <span style="border-bottom: 1px dotted #000; width: 250px; display: inline-block;"> </span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Which question word is your favorite to answer? Why?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Draw a picture showing the main event from "The Birthday Surprise":
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Read a book or story at home. Ask a family member to ask you WHO, WHAT, WHERE, WHEN, WHY, and HOW questions. Write your answers.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek2);
    console.log("grade3-literacy-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek2);
    console.log("grade3-literacy-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3LiteracyWeek2',
        metadata: grade3LiteracyWeek2.metadata,
        days: grade3LiteracyWeek2
    });
    console.log("grade3-literacy-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek2 = grade3LiteracyWeek2;
console.log("grade3-literacy-week2.js loaded and registered successfully");