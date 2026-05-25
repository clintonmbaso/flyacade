// Grade Middle English - Term 1 Week 3 Data
const gradeEnglishWeek3 = {
    metadata: {
        grade: "middle",
        subject: "English",
        term: 1,
        week: 3,
        title: "My Family Members",
        description: "Introducing family members, naming parents and siblings, and roleplaying family introductions"
    },
    
    monday: {
        subject: "English",
        topic: "Family Vocabulary",
        subtopic: "Introduction to Family – Stating 'This is my family.'",
        lessonContent: `
            <p>Welcome to our lesson about family! Today we'll learn how to talk about our families in English.</p>
            <p><strong>Key Question:</strong> How do you introduce your family to someone?</p>
            <p><strong>Introduction:</strong> Family is very important. Learning to talk about your family helps you share about yourself and get to know others.</p>
            <p><strong>Key Sentences:</strong></p>
            <ul>
                <li><strong>"This is my family."</strong> - Use this to show a photo or point to your family</li>
                <li><strong>"I have a family."</strong> - A simple statement about your family</li>
                <li><strong>"My family is big/small."</strong> - Describe the size of your family</li>
            </ul>
            <p><strong>Family Vocabulary:</strong></p>
            <ul>
                <li>Family - a group of people related to each other</li>
                <li>Mother/Mom - your female parent</li>
                <li>Father/Dad - your male parent</li>
                <li>Brother - a male sibling</li>
                <li>Sister - a female sibling</li>
                <li>Parents - mother and father together</li>
                <li>Siblings - brothers and sisters together</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Example Sentences</div>
                <p>"Hello! This is my family. I have two brothers and one sister."</p>
                <p>"This is a picture of my family. My mom, my dad, and me."</p>
                <p>"My family is small. It's just me, my mother, and my grandmother."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Conversation Practice</div>
                <p><strong>A:</strong> Do you have a family?</p>
                <p><strong>B:</strong> Yes! This is my family. <em>(shows photo)</em></p>
                <p><strong>A:</strong> Your family looks lovely!</p>
            </div>
        `,
        taskInstructions: "Practice stating 'This is my family' and complete the drawing and writing activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Your Family</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a picture of your family in the space below:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blanks about your family:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. This is _____________ family.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>b. My family has _____________ people.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>c. I have _____________ brothers and _____________ sisters.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Speaking Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Practice saying these sentences out loud. Then write one sentence about your family:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Draw your family on a piece of paper. Write 'This is my family' at the bottom. Bring it to class on Wednesday.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Family Vocabulary",
        subtopic: "Father and Mother – Naming parents ('My father's name is...')",
        lessonContent: `
            <p>Today we'll learn how to talk about our parents - our father and mother!</p>
            <p><strong>Key Question:</strong> How do you tell someone your parents' names?</p>
            <p><strong>Introduction:</strong> Your parents are very special people. Learning to talk about them helps you share about your life.</p>
            <p><strong>Key Sentences:</strong></p>
            <ul>
                <li><strong>"My father's name is ________."</strong> - Tell someone your dad's name</li>
                <li><strong>"My mother's name is ________."</strong> - Tell someone your mom's name</li>
                <li><strong>"This is my father/mother."</strong> - Introducing your parent</li>
                <li><strong>"I love my father and mother."</strong> - Express your feelings</li>
            </ul>
            <p><strong>Different Ways to Say Parents:</strong></p>
            <ul>
                <li>Father = Dad = Daddy = Papa</li>
                <li>Mother = Mom = Mommy = Mama</li>
            </ul>
            <p><strong>Questions You Might Hear:</strong></p>
            <ul>
                <li>"What is your father's name?"</li>
                <li>"What does your mother do?"</li>
                <li>"Do you have a brother or sister?"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-male"></i> About My Father</div>
                <p>"My father's name is David. He is a teacher. I love my father very much."</p>
                <p>"This is my dad. His name is Mr. Johnson."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-female"></i> About My Mother</div>
                <p>"My mother's name is Maria. She is a nurse. My mom is kind and helpful."</p>
                <p>"This is my mother. Her name is Mrs. Smith."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Talking About Both Parents</div>
                <p>"My father's name is John and my mother's name is Lisa. They are both doctors."</p>
            </div>
        `,
        taskInstructions: "Practice naming your parents and complete the writing and drawing activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write About Your Parents</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete these sentences about your parents:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. My father's name is _____________________________________.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>b. My mother's name is ___________________________________.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>c. I call my father _______________________________________. (Dad, Papa, Daddy?)</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>d. I call my mother ______________________________________. (Mom, Mama, Mommy?)</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Parents</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture of your father and mother. Write their names below your drawing:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Answer the Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write complete sentences to answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What is your father's name?</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>b. What is your mother's name?</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>c. Do you love your parents?</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask your parents what their full names are. Practice saying 'My father's name is...' and 'My mother's name is...' three times each.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Family Vocabulary",
        subtopic: "Brothers and Sisters – Naming siblings or identifying as an only child",
        lessonContent: `
            <p>Today we'll learn how to talk about brothers and sisters - also called siblings!</p>
            <p><strong>Key Question:</strong> How do you tell someone about your brothers and sisters?</p>
            <p><strong>Introduction:</strong> Some people have brothers and sisters. Some people are only children. Both are wonderful!</p>
            <p><strong>Key Sentences (If you have siblings):</strong></p>
            <ul>
                <li><strong>"I have one brother."</strong> / <strong>"I have two sisters."</strong></li>
                <li><strong>"My brother's name is ________."</strong></li>
                <li><strong>"My sister's name is ________."</strong></li>
                <li><strong>"This is my brother/sister."</strong></li>
                <li><strong>"I am the oldest/middle/youngest."</strong></li>
            </ul>
            <p><strong>Key Sentences (If you are an only child):</strong></p>
            <ul>
                <li><strong>"I don't have any brothers or sisters."</strong></li>
                <li><strong>"I am an only child."</strong></li>
                <li><strong>"It's just me and my parents."</strong></li>
            </ul>
            <p><strong>Sibling Vocabulary:</strong></p>
            <ul>
                <li>Brother - a male sibling</li>
                <li>Sister - a female sibling</li>
                <li>Sibling - brother or sister</li>
                <li>Only child - a person with no siblings</li>
                <li>Older/Younger brother/sister</li>
                <li>Twin - two siblings born at the same time</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-male"></i> Having Brothers</div>
                <p>"I have two brothers. Their names are Michael and James. I am the youngest."</p>
                <p>"My brother's name is Alex. He is 10 years old."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-female"></i> Having Sisters</div>
                <p>"I have one sister. Her name is Sophia. She is older than me."</p>
                <p>"My sisters' names are Emma and Olivia."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Only Child</div>
                <p>"I don't have any brothers or sisters. I am an only child. I play with my cousins."</p>
                <p>"I have no siblings. It's just me, my mom, and my dad."</p>
            </div>
        `,
        taskInstructions: "Complete the sentences about your siblings and answer the questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tell About Your Siblings</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the sentences that are true for you:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ I have ________ brother(s). Their names are: ________________________</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>☐ I have ________ sister(s). Their names are: ________________________</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>☐ I don't have any brothers or sisters. I am an only child.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>☐ I am the: (circle one) oldest / middle / youngest / only child</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Siblings</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw your brothers and sisters. If you have no siblings, draw yourself with your parents or friends:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Complete Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions in complete sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Do you have any brothers or sisters?</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>b. What is/are your brother's/sister's name(s)?</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>c. Do you like having siblings? OR Do you like being an only child? Why?</div>
                        <div class="answer-space" style="height: 50px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice saying 'I have ___ brother(s) and ___ sister(s)' or 'I am an only child' five times. Write one sentence about your siblings or being an only child.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Family Vocabulary",
        subtopic: "Family Roleplay – Pretending to introduce family members to a friend",
        lessonContent: `
            <p>Today we'll practice everything we learned about family! We'll pretend to introduce our family members to a friend.</p>
            <p><strong>Key Question:</strong> How do you introduce your family to a friend?</p>
            <p><strong>Introduction:</strong> When a friend comes to your home or meets your family, you need to introduce everyone. Today you'll practice being the host!</p>
            <p><strong>Roleplay Sentences:</strong></p>
            <ul>
                <li><strong>"Hello! Welcome to my home!"</strong></li>
                <li><strong>"This is my family."</strong></li>
                <li><strong>"This is my father. His name is ________."</strong></li>
                <li><strong>"This is my mother. Her name is ________."</strong></li>
                <li><strong>"This is my brother/sister. His/Her name is ________."</strong></li>
                <li><strong>"Nice to meet you!"</strong></li>
            </ul>
            <p><strong>What Your Friend Might Say:</strong></p>
            <ul>
                <li>"Nice to meet your family!"</li>
                <li>"Your family is very nice!"</li>
                <li>"Thank you for introducing me!"</li>
            </ul>
            <p><strong>Tips for Introducing Your Family:</strong></p>
            <ul>
                <li>Smile and look at the person you're talking to</li>
                <li>Speak clearly so everyone can hear</li>
                <li>Use full sentences: "This is..." or "His name is..."</li>
                <li>Point to or gesture toward the person you're introducing</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comments"></i> Sample Roleplay Conversation</div>
                <p><strong>Student:</strong> "Hi Sarah! Welcome to my home. This is my family."</p>
                <p><strong>Friend:</strong> "Hello! Nice to meet your family."</p>
                <p><strong>Student:</strong> "This is my father. His name is Mr. Chen."</p>
                <p><strong>Father:</strong> "Nice to meet you, Sarah."</p>
                <p><strong>Student:</strong> "And this is my mother. Her name is Mrs. Chen."</p>
                <p><strong>Mother:</strong> "Welcome!"</p>
                <p><strong>Student:</strong> "This is my little sister, Mei."</p>
                <p><strong>Friend:</strong> "It's nice to meet everyone!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Example Without Siblings</div>
                <p>"Hi! This is my family. This is my father, Mr. Jones. This is my mother, Mrs. Jones. I don't have any brothers or sisters. I am an only child."</p>
            </div>
        `,
        taskInstructions: "Practice the roleplay conversation with a partner and complete the writing activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prepare Your Introduction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write your introduction script. Pretend you are introducing your family to a friend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>You say: "Hello! Welcome! This is my family."</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>Introduce your father: "This is my father. His name is ________."</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>Introduce your mother: "This is my mother. Her name is ________."</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>Introduce your siblings (or say you have none):</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>End with: "Nice to meet you!"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Roleplay with a Partner</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Practice with a partner. One person is the host (you). The other person is the friend visiting.
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #f0f8ff; border-radius: 8px;">
                        <p><strong>Partner 1 (Host):</strong> Introduce your family members.</p>
                        <p><strong>Partner 2 (Friend):</strong> Say "Nice to meet your family!" and ask one question.</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Write what you said during the roleplay:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about today's activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Was it easy or difficult to introduce your family? Why?</div>
                        <div class="answer-space" style="height: 50px; margin: 5px 0;"></div>
                        <div>b. What new English sentence did you learn this week?</div>
                        <div class="answer-space" style="height: 50px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Family Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a small poster about your family. Include drawings or names. Use these sentences:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #fff3e0; border-radius: 8px;">
                        <p>"This is my family."</p>
                        <p>"My father's name is ________."</p>
                        <p>"My mother's name is ________."</p>
                        <p>"I have ________ brothers and ________ sisters." (OR "I am an only child.")</p>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Practice introducing your family to someone at home. Say at least 3 sentences in English. Have a parent sign that you practiced. Bring your family poster to class on Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeEnglishWeek3);
    console.log("grade-english-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeEnglishWeek3);
    console.log("grade-english-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeEnglishWeek3',
        metadata: gradeEnglishWeek3.metadata,
        days: gradeEnglishWeek3
    });
    console.log("grade-english-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeEnglishWeek3 = gradeEnglishWeek3;
console.log("grade-english-week3.js loaded and registered successfully");