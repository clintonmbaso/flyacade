// Grade 2 Literacy - Term 1 Week 5 Data
const grade2LiteracyWeek5 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 1,
        week: 5,
        title: "Vowel Alternative Spellings",
        description: "Identifying alternative spellings for vowel sounds: /e/ as 'ea', /u/ as 'o', 'o-e', 'ow', 'oe', and /a/ as 'a', 'a-e', 'ay'"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Vowel Alternative Spellings: /e/ = ea (as in bread)",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn a new way to spell the /e/ sound.</p>
            <p><strong>Key Question:</strong> Can you hear the /e/ sound in the word "bread"?</p>
            <p><strong>Introduction:</strong> The /e/ sound can be spelled in different ways. You already know "e" as in "red" and "leg". Today we will learn that "ea" can also make the /e/ sound!</p>
            <p><strong>Words with /e/ spelled "ea":</strong></p>
            <ul>
                <li><strong>bread</strong> - I eat bread with butter.</li>
                <li><strong>head</strong> - My head hurts.</li>
                <li><strong>read (past tense)</strong> - I read a book yesterday.</li>
                <li><strong>spread</strong> - Please spread the jam.</li>
                <li><strong>sweat</strong> - I sweat when I run.</li>
                <li><strong>weather</strong> - The weather is sunny today.</li>
                <li><strong>heavy</strong> - This box is heavy.</li>
                <li><strong>feather</strong> - The bird has a soft feather.</li>
            </ul>
            <p><strong>Remember:</strong> When you see "ea", it can make the long /e/ sound (like in "eat") OR the short /e/ sound (like in "bread"). You have to look at the word to know which sound to use!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bread-slice"></i> Bread and Head</div>
                <p>Both "bread" and "head" have the "ea" spelling that makes the short /e/ sound. Say them aloud: br-ea-d, h-ea-d.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Weather Words</div>
                <p>"Weather" and "feather" both use "ea" to spell the /e/ sound. Can you think of more weather words with "ea"?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Tricky Alert!</div>
                <p>Be careful! "Read" can be tricky. "I read a book" (past tense) uses the short /e/ sound. "I will read a book" (future) uses the long /e/ sound!</p>
            </div>
        `,
        taskInstructions: "Practice reading, writing, and identifying words where 'ea' makes the /e/ sound.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read and Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each word. Circle the words where "ea" makes the short /e/ sound (like in "bread"):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>bread &nbsp;&nbsp; beach &nbsp;&nbsp; head &nbsp;&nbsp; leaf &nbsp;&nbsp; sweat &nbsp;&nbsp; eat</div>
                        <div>heavy &nbsp;&nbsp; tea &nbsp;&nbsp; feather &nbsp;&nbsp; pea &nbsp;&nbsp; spread &nbsp;&nbsp; weather</div>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct word from the box:
                    <div style="background-color: #f0f8ff; padding: 10px; margin: 10px 0; text-align: center;">
                        <strong>bread &nbsp;&nbsp; head &nbsp;&nbsp; weather &nbsp;&nbsp; heavy &nbsp;&nbsp; spread</strong>
                    </div>
                    <div style="margin-left: 20px;">
                        <div>a. I put my hat on my _________.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b. The _________ today is cold and rainy.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c. Mom bought a loaf of _________.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d. This backpack is too _________.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e. I will _________ butter on my toast.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write each word two times:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>bread: _________ &nbsp;&nbsp; _________</div>
                        <div>head: _________ &nbsp;&nbsp; _________</div>
                        <div>sweat: _________ &nbsp;&nbsp; _________</div>
                        <div>feather: _________ &nbsp;&nbsp; _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence using a word with "ea" that makes the short /e/ sound:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home that have the /e/ sound spelled 'ea'. Write their names and draw a small picture.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Vowel Alternative Spellings: /u/ = o, o-e, ow, oe",
        lessonContent: `
            <p>Welcome back! Today we'll learn four different ways to spell the /u/ sound!</p>
            <p><strong>Key Question:</strong> Can you hear the /u/ sound in "son", "come", "month", and "does"?</p>
            <p><strong>Introduction:</strong> The /u/ sound (like in "up" or "sun") can be spelled in many ways. Let's learn four new spellings: o, o-e, ow, and oe!</p>
            
            <p><strong>Spelling Pattern 1: o = /u/</strong></p>
            <ul>
                <li><strong>son</strong> - My son is five years old.</li>
                <li><strong>month</strong> - A month has 30 or 31 days.</li>
                <li><strong>wonderful</strong> - Today is a wonderful day!</li>
                <li><strong>mother</strong> - I love my mother.</li>
                <li><strong>brother</strong> - My brother likes to play.</li>
            </ul>
            
            <p><strong>Spelling Pattern 2: o-e = /u/</strong></p>
            <ul>
                <li><strong>come</strong> - Please come to my party.</li>
                <li><strong>some</strong> - I have some candy.</li>
                <li><strong>love</strong> - I love my pet dog.</li>
                <li><strong>dove</strong> - A dove is a white bird.</li>
                <li><strong>glove</strong> - Put on your glove.</li>
            </ul>
            
            <p><strong>Spelling Pattern 3: ow = /u/</strong></p>
            <ul>
                <li><strong>month</strong> - (This one again!) The "ow" in month makes the /u/ sound.</li>
            </ul>
            
            <p><strong>Spelling Pattern 4: oe = /u/</strong></p>
            <ul>
                <li><strong>does</strong> - He does his homework every day.</li>
            </ul>
            
            <p><strong>Remember:</strong> The /u/ sound is the short "uh" sound, like the beginning of "up" or "under".</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-family"></i> Family Words</div>
                <p>"Mother", "father", "brother" - all use the letter "o" to spell the /u/ sound! They rhyme with "other".</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Love and Dove</div>
                <p>"Love" and "dove" use the o-e pattern to make the /u/ sound. Notice the silent e at the end!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question"></i> Does vs. Do</div>
                <p>"Does" uses "oe" to make the /u/ sound. But "do" makes the /oo/ sound! They are different.</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using different spellings of the /u/ sound.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct spelling pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="text-align: center; background-color: #f0f8ff; padding: 10px;">
                            <strong>son &nbsp;&nbsp; come &nbsp;&nbsp; does &nbsp;&nbsp; love &nbsp;&nbsp; mother &nbsp;&nbsp; some &nbsp;&nbsp; month &nbsp;&nbsp; brother &nbsp;&nbsp; glove</strong>
                        </div>
                    </div>
                    <div style="margin-top: 15px;">
                        <div><strong>o = /u/</strong> (like "son"): _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div><strong>o-e = /u/</strong> (like "come"): _______________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div><strong>oe = /u/</strong> (like "does"): _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. My _________ helps me with my homework. (mother / summer)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>b. Can you _________ to my house? (come / home)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>c. I _________ my new puppy! (love / live)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>d. My _________ is in third grade. (sister / brother)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>e. She _________ her best in school. (go / does)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>f. I have _________ crayons in my box. (same / some)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Read the Passage</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the story and circle all the words with the /u/ sound:
                    <div style="background-color: #f9f9f9; padding: 15px; margin-top: 10px; border-left: 4px solid #4A90E2;">
                        <p>My brother and I love my mother. She does so much for us. Some days we help her. Come play with us! What a wonderful month we have had.</p>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;">
                        <p><em>List the circled words here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write two sentences. Use one word with "o" for /u/ and one word with "o-e" for /u/:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 words that have the /u/ sound. Use different spellings: o, o-e, and oe.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Vowel Alternative Spellings: /a/ = a, a-e, ay",
        lessonContent: `
            <p>Today is our last phonics lesson for the week! We will learn three ways to spell the long /a/ sound.</p>
            <p><strong>Key Question:</strong> Can you hear the long /a/ sound in "apron", "cake", and "play"?</p>
            <p><strong>Introduction:</strong> The long /a/ sound (like in "ape" or "acorn") can be spelled in three common ways: just the letter a, a with a silent e (a-e), and the letters ay.</p>
            
            <p><strong>Spelling Pattern 1: a = /a/ (at the beginning or middle of a word)</strong></p>
            <ul>
                <li><strong>apron</strong> - Mom wears an apron when she cooks.</li>
                <li><strong>acorn</strong> - The squirrel ate an acorn.</li>
                <li><strong>angel</strong> - The angel had white wings.</li>
                <li><strong>alien</strong> - The alien came from space.</li>
                <li><strong>apron</strong> - I need an apron for art class.</li>
            </ul>
            
            <p><strong>Spelling Pattern 2: a-e = /a/ (magic e makes the a say its name)</strong></p>
            <ul>
                <li><strong>cake</strong> - I love chocolate cake.</li>
                <li><strong>game</strong> - Let's play a game.</li>
                <li><strong>name</strong> - My name is Sam.</li>
                <li><strong>make</strong> - I can make a card.</li>
                <li><strong>take</strong> - Please take a cookie.</li>
                <li><strong>late</strong> - Do not be late!</li>
                <li><strong>came</strong> - My friend came over.</li>
                <li><strong>same</strong> - We have the same backpack.</li>
            </ul>
            
            <p><strong>Spelling Pattern 3: ay = /a/ (at the end of a word or syllable)</strong></p>
            <ul>
                <li><strong>play</strong> - I like to play outside.</li>
                <li><strong>day</strong> - Today is a sunny day.</li>
                <li><strong>say</strong> - What did you say?</li>
                <li><strong>pay</strong> - Dad will pay for dinner.</li>
                <li><strong>may</strong> - May I have a cookie?</li>
                <li><strong>way</strong> - Which way do we go?</li>
                <li><strong>stay</strong> - Please stay with me.</li>
                <li><strong>pray</strong> - I pray every night.</li>
            </ul>
            
            <p><strong>Remember:</strong> All three spellings make the same long /a/ sound. Practice listening for which spelling is used in each word!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-birthday-cake"></i> Cake and Play</div>
                <p>"Cake" uses a-e (magic e), and "play" uses ay. Both have the same long /a/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Acorn and Apron</div>
                <p>"Acorn" and "apron" both start with the letter a making the long /a/ sound. Can you think of other words that start with a saying its name?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Magic E Rule</div>
                <p>When you add a silent e to "mad" you get "made". The e makes the a say its name! That's why we call it magic e.</p>
            </div>
        `,
        taskInstructions: "Practice reading, sorting, and writing words with long /a/ spelled a, a-e, and ay.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct spelling pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="text-align: center; background-color: #f0f8ff; padding: 10px;">
                            <strong>cake &nbsp;&nbsp; play &nbsp;&nbsp; apron &nbsp;&nbsp; name &nbsp;&nbsp; day &nbsp;&nbsp; acorn &nbsp;&nbsp; make &nbsp;&nbsp; say &nbsp;&nbsp; angel &nbsp;&nbsp; way &nbsp;&nbsp; game &nbsp;&nbsp; stay</strong>
                        </div>
                    </div>
                    <div style="margin-top: 15px;">
                        <div><strong>a = /a/</strong> (like "apron"): _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div><strong>a-e = /a/</strong> (like "cake"): ________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div><strong>ay = /a/</strong> (like "play"): _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Missing Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add the missing letters to complete each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. c ___ k e &nbsp;&nbsp;&nbsp; (sweet dessert)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>b. pl ___ ___ &nbsp;&nbsp;&nbsp; (to have fun)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>c. ___ pr o n &nbsp;&nbsp;&nbsp; (worn when cooking)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>d. n ___ m e &nbsp;&nbsp;&nbsp; (what people call you)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>e. d ___ ___ &nbsp;&nbsp;&nbsp; (opposite of night)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>f. s ___ ___ &nbsp;&nbsp;&nbsp; (to speak words)</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Read and Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the sentences. Circle all the words with the long /a/ sound:
                    <div style="background-color: #f9f9f9; padding: 15px; margin-top: 10px; border-left: 4px solid #4A90E2;">
                        <p>Today is a sunny day. I will play with my friend. We will make a cake. My mom says we can stay up late. What a great way to have fun!</p>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;">
                        <p><em>List the circled words here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write three sentences. Use one word with "a" for long /a/, one word with "a-e", and one word with "ay":
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Review Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which spelling pattern would you use for each word? Write a, a-e, or ay:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. tr___n (choo-choo) → _________</div>
                        <div>b. r___n (water from sky) → _________</div>
                        <div>c. gr___t (very good) → _________</div>
                        <div>d. r___dio (listen to music) → _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Make a poster showing three columns: a, a-e, and ay. Find or draw 2 pictures for each column and label them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek5);
    console.log("grade2-literacy-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek5);
    console.log("grade2-literacy-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek5',
        metadata: grade2LiteracyWeek5.metadata,
        days: grade2LiteracyWeek5
    });
    console.log("grade2-literacy-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek5 = grade2LiteracyWeek5;
console.log("grade2-literacy-week5.js loaded and registered successfully");