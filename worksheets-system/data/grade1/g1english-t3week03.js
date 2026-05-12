// Grade 1 English - Term 3 Week 3 Data
const grade1EnglishWeek3 = {
    metadata: {
        grade: 1,
        subject: "English",
        term: 3,
        week: 3,
        title: "Stories (Listening and Analysing)",
        description: "Listening to folk tales, sequencing events, identifying characters, and understanding story messages"
    },
    
    monday: {
        subject: "English",
        topic: "Stories",
        subtopic: "Listening to a Folk Tale",
        lessonContent: `
            <p>Welcome to story time! Today we will listen to a special folk tale or fable. A folk tale is a story that has been told for many, many years.</p>
            <p><strong>Key Question:</strong> Can you listen quietly and remember the main character and where the story happens?</p>
            <p><strong>Introduction:</strong> Today we will read "The Tortoise and the Hare." This is a famous fable about a slow tortoise and a fast hare who have a race!</p>
            <p><strong>Listening Rules:</strong></p>
            <ul>
                <li>Sit quietly and listen with your ears</li>
                <li>Look at the pictures while the teacher reads</li>
                <li>Think about who the story is about</li>
                <li>Think about where the story takes place</li>
            </ul>
            <p><strong>Story Vocabulary:</strong></p>
            <ul>
                <li><strong>Tortoise:</strong> A slow animal with a hard shell</li>
                <li><strong>Hare:</strong> A fast animal that looks like a big rabbit</li>
                <li><strong>Race:</strong> A contest to see who is fastest</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Listening Ears On!</div>
                <p>When we listen to a story, we use our ears to hear the words and our brains to make pictures in our heads!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Think About This</div>
                <p>As you listen, ask yourself: Who is this story about? Where are they?</p>
            </div>
        `,
        taskInstructions: "Listen to the story, then identify the main character and setting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: After the Story - Circle Your Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Who was the main character in the story?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="character"> A fast rabbit
                            </label>
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="character"> A slow tortoise
                            </label>
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="character"> A flying bird
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Where Did the Story Happen?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the setting (where the story took place):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="setting"> In a house
                            </label>
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="setting"> At the beach
                            </label>
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="setting"> In a forest/meadow
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Main Character</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of the main character from the story:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Tell a family member about the story you heard today. Tell them who the story was about and where it happened.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Stories",
        subtopic: "Sequencing Events",
        lessonContent: `
            <p>Today we will learn about what happened FIRST, NEXT, and LAST in our story!</p>
            <p><strong>Key Question:</strong> What happened at the beginning, middle, and end of the story?</p>
            <p><strong>Review:</strong> Remember "The Tortoise and the Hare"? Let's think about what happened in order.</p>
            <p><strong>Sequence Words:</strong></p>
            <ul>
                <li><strong>First:</strong> What happened at the beginning</li>
                <li><strong>Next / Then:</strong> What happened in the middle</li>
                <li><strong>Last / Finally:</strong> What happened at the end</li>
            </ul>
            <p><strong>Story Recap - The Tortoise and the Hare:</strong></p>
            <ul>
                <li>First: The hare made fun of the tortoise for being slow</li>
                <li>Next: They decided to have a race</li>
                <li>Then: The hare ran fast but stopped to take a nap</li>
                <li>Last: The tortoise kept walking slowly and won the race!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> First, Next, Last</div>
                <p>Think of a sandwich: First you get bread. Next you add cheese. Last you put the other bread on top!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-film"></i> Stories Have a Road</div>
                <p>Stories are like a road. You start at the beginning (first), drive through the middle (next), and arrive at the end (last)!</p>
            </div>
        `,
        taskInstructions: "Use pictures to show what happened first, next, and last in the story.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw the Story in Order</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw what happened FIRST in the story:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw what happened NEXT in the story:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw what happened LAST in the story:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Happened at the End?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Talk with your group and answer: What happened at the end of the story?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of something you did today. Show FIRST, NEXT, and LAST. (Example: First I woke up. Next I ate breakfast. Last I went to school.)",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Stories",
        subtopic: "Character and Important Events",
        lessonContent: `
            <p>Today we will read a new story and learn about the characters and the big problem!</p>
            <p><strong>Key Questions:</strong> Who was the hero? What was the big problem in the story?</p>
            <p><strong>New Story - "The Lion and the Mouse":</strong></p>
            <p>This is a story about a big lion and a tiny mouse. The lion catches the mouse but lets him go. Later, the mouse helps the lion when he is stuck in a net!</p>
            <p><strong>Words to Know:</strong></p>
            <ul>
                <li><strong>Hero:</strong> The person or animal who does something brave or good</li>
                <li><strong>Problem:</strong> Something hard that the character needs to fix</li>
                <li><strong>Character:</strong> A person or animal in the story</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Who is the Hero?</div>
                <p>In "The Lion and the Mouse," both characters can be heroes! The lion was kind to let the mouse go. The mouse was brave to help the lion.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> What is the Problem?</div>
                <p>The big problem was that the lion was trapped in a net and couldn't get out!</p>
            </div>
        `,
        taskInstructions: "Listen to the new story, then answer questions about characters and the problem.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Answer Oral Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Who was the hero of the story?
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What was the big problem in the story?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How did the mouse help the lion?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Favorite Part</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite part of "The Lion and the Mouse":
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Tell the teacher about your drawing. What is happening in your picture?
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Tell a family member about 'The Lion and the Mouse.' Tell them who the hero was and what the problem was.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Stories",
        subtopic: "The Message of the Story",
        lessonContent: `
            <p>Today we will learn about the lesson or moral of a story!</p>
            <p><strong>Key Question:</strong> What did the character learn?</p>
            <p><strong>What is a Moral?</strong></p>
            <p>A moral is a lesson that the story teaches us. It tells us how to be a good person.</p>
            <p><strong>The Moral of "The Lion and the Mouse":</strong></p>
            <p>Even a small friend can be a big help! Kindness is always important, no matter how big or small you are.</p>
            <p><strong>What the Characters Learned:</strong></p>
            <ul>
                <li>The lion learned that small creatures can help too</li>
                <li>The mouse learned that being brave is important</li>
                <li>We learn that we should be kind to everyone</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Kindness is Important</div>
                <p>The lion was kind when he let the mouse go. The mouse was kind when he helped the lion. Kindness makes the world better!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Small Acts Matter</div>
                <p>You don't have to be big or strong to help someone. Even a small act of kindness can make a big difference!</p>
            </div>
        `,
        taskInstructions: "Show thumbs up or thumbs down to character choices and identify the story's lesson.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Thumbs Up or Thumbs Down?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to each choice the teacher reads. Give a thumbs up <i class="fas fa-thumbs-up"></i> if it was a good choice. Give a thumbs down <i class="fas fa-thumbs-down"></i> if it was a bad choice.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The lion let the mouse go. → <span style="margin-left: 10px;">👍 or 👎?</span></div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div style="margin-top: 10px;">The hare took a nap during the race. → <span style="margin-left: 10px;">👍 or 👎?</span></div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div style="margin-top: 10px;">The mouse helped the lion get out of the net. → <span style="margin-left: 10px;">👍 or 👎?</span></div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Did We Learn?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What is the lesson (moral) of "The Lion and the Mouse"? Circle your answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="moral"> The fastest animal always wins
                            </label>
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="moral"> Kindness is important and small friends can be big helpers
                            </label>
                            <label style="display: flex; align-items: center; gap: 5px;">
                                <input type="radio" name="moral"> Lions are always scary
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Lesson</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture showing how you can be kind to someone today:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What did the lion learn in the story?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Tell a family member one thing you learned from our stories this week. How can you be kind like the mouse?",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1EnglishWeek3);
    console.log("grade1-english-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1EnglishWeek3);
    console.log("grade1-english-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1EnglishWeek3',
        metadata: grade1EnglishWeek3.metadata,
        days: grade1EnglishWeek3
    });
    console.log("grade1-english-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1EnglishWeek3 = grade1EnglishWeek3;
console.log("grade1-english-week3.js loaded and registered successfully");