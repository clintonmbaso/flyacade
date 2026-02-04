// Baby Class English - Week 3 Data (My Family)
const babyClassEnglishWeek3 = {
    metadata: {
        grade: "baby",
        subject: "English",
        week: 3,
        title: "My Family - Learning About Parents and Siblings",
        description: "Learning to name mother, father, brothers, and sisters"
    },
    
    monday: {
        subject: "English",
        topic: "My Family - Part 1 (Parents)",
        subtopic: "Naming mother and father",
        lessonContent: `
            <p>Welcome to our family lesson! Today we will learn about the special people who live in our houses.</p>
            <p><strong>Key Concept:</strong> Every family has parents who take care of us.</p>
            <p><strong>Who lives in our houses?</strong></p>
            <ul>
                <li>Mommy (Mother)</li>
                <li>Daddy (Father)</li>
                <li>Sometimes grandparents</li>
                <li>Sometimes brothers and sisters</li>
            </ul>
            <p><strong>Family Tree:</strong> Let's look at our family tree on the board! It shows how family members are connected.</p>
            <p><strong>Why we learn parents' names:</strong> Knowing our parents' names helps us talk about our family with others!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-female" style="color: #E91E63;"></i> Mother Example</div>
                <p>"My mother's name is Sarah." - We can say this when talking about our mommy.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-male" style="color: #2196F3;"></i> Father Example</div>
                <p>"My father's name is John." - We can say this when talking about our daddy.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Family Tree</div>
                <p>Look at the family tree! It shows parents at the top, with children below.</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice naming your parents.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the people who might live in your house:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Mommy</div>
                    <div>☐ Daddy</div>
                    <div>☐ A lion</div>
                    <div>☐ A dinosaur</div>
                    <div>☐ A brother</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Role Play: "Going Home"
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                    <p>Use the toy phone! Pretend to call home.</p>
                    <div>Teacher asks: "Who is answering? Is it Mommy or Daddy?"</div>
                    <div class="answer-space" style="height: 30px; width: 200px; margin-top: 5px;">It is: ________________</div>
                    <div style="margin-top: 10px;">Teacher asks: "What is their name?"</div>
                    <div class="answer-space" style="height: 30px; width: 250px; margin-top: 5px;">My answer: ________________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Practice the sentence:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"My father's name is <span class="answer-space" style="width: 150px;"></span>"</div>
                    <div style="margin-top: 10px;">"My mother's name is <span class="answer-space" style="width: 150px;"></span>"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw your parents:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>My Mother</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div class="answer-space" style="height: 25px; margin-top: 5px;">Name: ______</div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>My Father</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div class="answer-space" style="height: 25px; margin-top: 5px;">Name: ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask your parents what their names are. Practice saying: 'My mother's name is ______' and 'My father's name is ______'.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "My Family - Part 2 (Siblings)",
        subtopic: "Naming brothers and sisters",
        lessonContent: `
            <p>Today we will learn about brothers and sisters in our family!</p>
            <p><strong>Key Concept:</strong> Brothers and sisters are children in the same family.</p>
            <p><strong>Review:</strong> Yesterday we learned about parents. Who remembers what we call our mother and father?</p>
            <p><strong>What are brothers and sisters?</strong></p>
            <ul>
                <li><strong>Brother:</strong> A boy child in your family</li>
                <li><strong>Sister:</strong> A girl child in your family</li>
                <li>Some children have both brothers and sisters</li>
                <li>Some children have no brothers or sisters (only child)</li>
            </ul>
            <p><strong>Special note:</strong> If you don't have a brother or sister, you can talk about a cousin, a pet, or a favorite doll!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-male" style="color: #2196F3;"></i> Brother Example</div>
                <p>"I have a brother. His name is David." - We say this when we have a brother.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-female" style="color: #E91E63;"></i> Sister Example</div>
                <p>"I have a sister. Her name is Emma." - We say this when we have a sister.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart" style="color: #F44336;"></i> Only Child Example</div>
                <p>"I have a pet cat. Her name is Whiskers." - We can talk about pets too!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice naming your siblings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Show and Tell</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Take turns describing a sibling (or pet/doll):
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div>"I have a <span class="answer-space" style="width: 100px;"></span>. (brother/sister/pet)"</div>
                        <div style="margin-top: 5px;">"His/Her name is <span class="answer-space" style="width: 150px;"></span>"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Brother or Sister?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle if it's a brother or sister:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ A boy child → Brother / Sister</div>
                        <div>☐ A girl child → Brother / Sister</div>
                        <div>☐ Someone who shares parents with you → Brother / Sister</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing My Siblings</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your brother(s) and/or sister(s):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I have <span class="answer-space" style="width: 50px;"></span> brother(s) and <span class="answer-space" style="width: 50px;"></span> sister(s).</div>
                        <div style="margin-top: 5px;">Their names are: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Group Circle Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a circle for each family member. Whisper their names to the teacher:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw circles for:</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="margin-right: 20px;">○ Mother</div>
                            <div style="margin-right: 20px;">○ Father</div>
                            <div style="margin-right: 20px;">○ Brother(s)</div>
                            <div>○ Sister(s)</div>
                        </div>
                        <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Count how many brothers and sisters you have. Tell someone at home: 'I have __ brothers and __ sisters.'",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Family Names Practice",
        subtopic: "Practicing saying family members' names",
        lessonContent: `
            <p>Today we will practice all the family names we've learned!</p>
            <p><strong>Key Concept:</strong> Every family member has a special name.</p>
            <p><strong>Review:</strong> Let's remember who we've learned about:</p>
            <ul>
                <li>Mother (Mommy)</li>
                <li>Father (Daddy)</li>
                <li>Brother</li>
                <li>Sister</li>
            </ul>
            <p><strong>Complete sentences:</strong> We can say complete sentences about our family.</p>
            <p><strong>Example:</strong> "My mother's name is Anna. My father's name is Ben. I have one brother named Sam."</p>
            <p><strong>Family song:</strong> We'll sing a special song about family today!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #FF9800;"></i> Complete Family Example</div>
                <p>"My family has 4 people: Mommy Sara, Daddy Tom, brother Tim, and me!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music" style="color: #9C27B0;"></i> Family Song</div>
                <p>We'll sing "Finger Family" but use our real family names!</p>
                <p>"Daddy finger, daddy finger, where are you? Here I am, here I am, my name is [Dad's name]"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Name Game</div>
                <p>When the teacher points to you, say one family member's name!</p>
            </div>
        `,
        taskInstructions: "Practice saying your family members' names in different ways.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sing Along</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sing "Finger Family" with your family names:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>Daddy finger, daddy finger, where are you?</div>
                        <div>Here I am, here I am, my name is <span class="answer-space" style="width: 120px;"></span></div>
                        <div style="margin-top: 10px;">Mommy finger, mommy finger, where are you?</div>
                        <div>Here I am, here I am, my name is <span class="answer-space" style="width: 120px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Family Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match the family member with what we call them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Mother → ☐ Daddy</div>
                        <div>Father → ☐ Mommy</div>
                        <div>Brother → ☐ Sister</div>
                        <div>Sister → ☐ Brother</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Family Book Page</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your whole family on one page:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This is my family. We have <span class="answer-space" style="width: 50px;"></span> people.</div>
                        <div style="margin-top: 5px;">Their names are: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Whisper Game</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Whisper a family member's name to your partner. They guess who it is:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Partner 1 whispers: "__________" (a family name)</div>
                        <div>Partner 2 guesses: ☐ Mother ☐ Father ☐ Brother ☐ Sister</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Family Sentence Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete the sentences about your family:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"My mother is named <span class="answer-space" style="width: 150px;"></span>"</div>
                        <div style="margin-top: 5px;">"My father is named <span class="answer-space" style="width: 150px;"></span>"</div>
                        <div style="margin-top: 5px;">"I have <span class="answer-space" style="width: 50px;"></span> brothers."</div>
                        <div style="margin-top: 5px;">"I have <span class="answer-space" style="width: 50px;"></span> sisters."</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Sing the Finger Family song to someone at home using your family's real names.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Family Celebration Day",
        subtopic: "Showing what we know about our families",
        lessonContent: `
            <p>Today is our family celebration day! We'll show everything we've learned about our families.</p>
            <p><strong>Key Concept:</strong> Every family is special and unique.</p>
            <p><strong>What we've learned this week:</strong></p>
            <ul>
                <li>How to name our parents</li>
                <li>How to name our brothers and sisters</li>
                <li>How to talk about our family</li>
                <li>Family songs and games</li>
            </ul>
            <p><strong>Family is important:</strong> Our family loves us and takes care of us.</p>
            <p><strong>Today's activities:</strong> We'll play family games, draw our families, and share with our friends!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star" style="color: #FFC107;"></i> Family Star</div>
                <p>"I am a family star! I know all my family members' names!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-house-user"></i> My House</div>
                <p>"In my house live: Mommy Lisa, Daddy Mark, sister Mia, and me!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Family Parade</div>
                <p>We'll march around the room saying our family members' names!</p>
            </div>
        `,
        taskInstructions: "Show what you know about your family through games and activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Family Role Play</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Act out a family scene with friends:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div>Choose roles: ☐ Mother ☐ Father ☐ Brother ☐ Sister</div>
                        <div style="margin-top: 10px;">Say your "family name": "I am [name], the [mother/father/etc.]"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Family Picture Frame</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw your family in a picture frame:
                    <div style="border: 3px solid #795548; padding: 10px; margin-top: 10px;">
                        <div class="drawing-area" style="height: 150px;"></div>
                        <div style="text-align: center; margin-top: 5px;">My Family</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <div>Write family names below:</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Telephone Game Review</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the toy phone again. This time, tell about your WHOLE family:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"Hello! In my family, we have..."</div>
                        <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Family Song Performance</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Perform the Finger Family song with your real names:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Record your performance:</div>
                        <div style="padding: 10px; background-color: #FCE4EC; border-radius: 5px; margin-top: 5px;">
                            <div>🎤 "Daddy finger, daddy finger, where are you?"</div>
                            <div>🎤 "Here I am, here I am, my name is ______"</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Family Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a family expert. Write one thing you learned:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I learned that my family ________________</div>
                </div>
            </div>
        `,
        homework: "Tell someone outside your family about your family members. Say: 'My mother is named ____. My father is named ____.'",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyClassEnglishWeek3);
    console.log("babyclass-english-week3-family.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyClassEnglishWeek3);
    console.log("babyclass-english-week3-family.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyClassEnglishWeek3',
        metadata: babyClassEnglishWeek3.metadata,
        days: babyClassEnglishWeek3
    });
    console.log("babyclass-english-week3-family.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyClassEnglishWeek3 = babyClassEnglishWeek3;
console.log("babyclass-english-week3-family.js loaded and registered successfully");