// Grade 3 English - Term 2 Week 4 Data
const grade3EnglishWeek4 = {
    metadata: {
        grade: 3,
        subject: "English",
        term: 2,
        week: 4,
        title: "Sentence Construction",
        description: "Building sentences from simple subject-verb structures to more complex patterns with objects"
    },
    
    monday: {
        subject: "English",
        topic: "Sentence Construction",
        subtopic: "Subject + Verb (The Shortest Sentence)",
        lessonContent: `
            <p>Welcome to our sentence construction week! Today we'll learn about the shortest possible sentence.</p>
            <p><strong>Key Question:</strong> What is the smallest sentence you can make?</p>
            <p><strong>Introduction:</strong> Every sentence needs two things: a <strong>subject</strong> (who or what the sentence is about) and a <strong>verb</strong> (the action). That's it! These are called S-V sentences.</p>
            <p><strong>The Two Parts of a Sentence:</strong></p>
            <ol>
                <li><strong>Subject (Who?):</strong> The person, animal, or thing doing the action</li>
                <li><strong>Verb (Action?):</strong> What the subject is doing</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Patrick slept.</li>
                <li>Sara ran.</li>
                <li>The dog barked.</li>
                <li>Birds fly.</li>
                <li>Mom cooked.</li>
            </ul>
            <p><strong>Remember:</strong> Every sentence starts with a capital letter and ends with a period (.), question mark (?), or exclamation point (!).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Find the Subject</div>
                <p>In "Patrick slept," who slept? Patrick! That's your subject.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Find the Verb</div>
                <p>In "Sara ran," what did Sara do? She ran! That's your verb (action).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Animal Actions</div>
                <p>"The dog barked" - subject: The dog, verb: barked. Even animals can be subjects!</p>
            </div>
        `,
        taskInstructions: "Create five sentences using a subject and a verb.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify Subject and Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the subject and underline the verb in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The cat meowed.</div>
                        <div>b. Maria laughed.</div>
                        <div>c. Rain fell.</div>
                        <div>d. The baby cried.</div>
                        <div>e. Dad worked.</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own S-V Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write five sentences using a name or noun (subject) and an action (verb):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sentence 1: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Sentence 2: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Sentence 3: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Sentence 4: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Sentence 5: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Pick your favorite sentence from Part B and draw a picture of it:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Write 5 S-V sentences about things you see (e.g., 'The clock ticked,' 'My brother played').",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Sentence Construction",
        subtopic: "Subject + Verb + Object (S-V-O)",
        lessonContent: `
            <p>Today we'll make our sentences more interesting by adding an <strong>object</strong>!</p>
            <p><strong>Key Question:</strong> What receives the action in a sentence?</p>
            <p><strong>Introduction:</strong> Sometimes a sentence needs to tell us <strong>what</strong> received the action. That's called the <strong>object</strong>. These are called S-V-O sentences.</p>
            <p><strong>The Three Parts of an S-V-O Sentence:</strong></p>
            <ol>
                <li><strong>Subject:</strong> Who does the action?</li>
                <li><strong>Verb:</strong> What is the action?</li>
                <li><strong>Object:</strong> Who or what receives the action?</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Lufasi ate mangoes. (Subject: Lufasi, Verb: ate, Object: mangoes)</li>
                <li>Sara kicked the ball. (Subject: Sara, Verb: kicked, Object: the ball)</li>
                <li>The dog chased the cat. (Subject: The dog, Verb: chased, Object: the cat)</li>
                <li>Mom read a book. (Subject: Mom, Verb: read, Object: a book)</li>
            </ul>
            <p><strong>How to Find the Object:</strong> Ask "What?" or "Whom?" after the verb.</p>
            <p>"Lufasi ate ______?" (Answer: mangoes → object!)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> The Object Question</div>
                <p>In "Sara kicked the ball," ask "Sara kicked what?" The ball! That's your object.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> From S-V to S-V-O</div>
                <p>Monday: "Lufasi ate." (S-V)<br>Today: "Lufasi ate mangoes." (S-V-O) Now we know WHAT he ate!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> More Examples</div>
                <p>"The boy caught a fish." - Subject: The boy, Verb: caught, Object: a fish.</p>
            </div>
        `,
        taskInstructions: "Expand Monday's sentences by adding an object.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Object</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the subject, underline the verb, and box the object in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The girl ate an apple.</div>
                        <div>b. Dad fixed the car.</div>
                        <div>c. The teacher read a story.</div>
                        <div>d. My friend drew a picture.</div>
                        <div>e. The bird built a nest.</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Expand Your S-V Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at your five sentences from Monday. Add an object to each one:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Monday Sentence 1: _________________</div>
                        <div>New S-V-O Sentence: _________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Monday Sentence 2: _________________</div>
                        <div>New S-V-O Sentence: _________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Monday Sentence 3: _________________</div>
                        <div>New S-V-O Sentence: _________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Monday Sentence 4: _________________</div>
                        <div>New S-V-O Sentence: _________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Monday Sentence 5: _________________</div>
                        <div>New S-V-O Sentence: _________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write New S-V-O Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write three new S-V-O sentences of your own:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>2. _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>3. _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 S-V-O sentences about your favorite meal. Tell who ate, what action, and what food was eaten.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Sentence Construction",
        subtopic: "Indirect Objects (The 'For Whom' Sentence)",
        lessonContent: `
            <p>Today we'll learn how to tell WHO received something in a sentence!</p>
            <p><strong>Key Question:</strong> How do we show that someone did something FOR someone else?</p>
            <p><strong>Introduction:</strong> Sometimes we want to show that an action was done FOR someone. We add an <strong>indirect object</strong> (the receiver). These sentences have: Subject + Verb + Direct Object + Indirect Object.</p>
            <p><strong>The Four Parts of This Sentence:</strong></p>
            <ol>
                <li><strong>Subject:</strong> Who does the action? (The giver)</li>
                <li><strong>Verb:</strong> What action? (Usually giving, buying, making, sending)</li>
                <li><strong>Direct Object:</strong> What is given? (The item)</li>
                <li><strong>Indirect Object:</strong> Who receives it? (The receiver - often with "for" or "to")</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Mutwale bought a cake <strong>for his mother</strong>. (Subject: Mutwale, Verb: bought, Direct Object: a cake, Indirect Object: his mother)</li>
                <li>I made a card <strong>for my friend</strong>.</li>
                <li>Dad read a story <strong>to me</strong>.</li>
                <li>She gave a gift <strong>to her teacher</strong>.</li>
            </ul>
            <p><strong>Remember:</strong> The indirect object answers "For whom?" or "To whom?"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> Find the Receiver</div>
                <p>In "Mutwale bought a cake for his mother," ask "For whom did Mutwale buy the cake?" His mother! That's the indirect object.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Kind Actions</div>
                <p>"I made a card for my friend" - Subject: I, Verb: made, Direct Object: a card, Indirect Object: my friend (someone gets something nice!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Reading Aloud</div>
                <p>"Dad read a story to me" - Who got the story? Me! That's the indirect object.</p>
            </div>
        `,
        taskInstructions: "Write sentences showing someone doing something for someone else.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Parts</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Label the subject (S), verb (V), direct object (DO), and indirect object (IO):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Mom made lunch for our family.</div>
                        <div>b. The boy wrote a letter to his grandma.</div>
                        <div>c. Sara brought cookies for her class.</div>
                        <div>d. Dad fixed the bike for his son.</div>
                        <div>e. The student gave flowers to her teacher.</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write three sentences showing someone doing something FOR someone else:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sentence 1 (using "for"): _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Sentence 2 (using "for"): _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Sentence 3 (using "to"): _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose one sentence from Part B. Draw the scene and label the giver, the item, and the receiver:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Write 3 sentences about kind things family members have done for you. Use 'for' or 'to' to show who received the kindness.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Sentence Construction",
        subtopic: "Sentence Building Workshop",
        lessonContent: `
            <p>Today we'll practice everything we've learned about sentences!</p>
            <p><strong>Key Question:</strong> How can we put words in the right order to make a correct sentence?</p>
            <p><strong>Introduction:</strong> A sentence is like a puzzle. Words need to be in the right order, and every sentence needs a capital letter at the beginning and punctuation at the end.</p>
            <p><strong>Rules to Remember:</strong></p>
            <ul>
                <li>Every sentence starts with a <strong>capital letter</strong></li>
                <li>Every sentence ends with <strong>punctuation</strong> (. ! ?)</li>
                <li>A sentence needs a <strong>subject</strong> (who/what)</li>
                <li>A sentence needs a <strong>verb</strong> (action)</li>
                <li>You can add an <strong>object</strong> (what receives the action)</li>
                <li>You can add an <strong>indirect object</strong> (who receives the object)</li>
            </ul>
            <p><strong>Types of Sentences We Learned:</strong></p>
            <ol>
                <li><strong>S-V:</strong> Patrick slept.</li>
                <li><strong>S-V-O:</strong> Lufasi ate mangoes.</li>
                <li><strong>S-V-DO-IO:</strong> Mutwale bought a cake for his mother.</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Sentence Scramble</div>
                <p>Scrambled: "ran Sara"<br>Correct: "Sara ran." (Capital S, period at the end!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Check Your Sentence</div>
                <p>Does it start with a capital letter? Does it have a subject and verb? Does it end with punctuation? If yes, you have a complete sentence!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-graduation-cap"></i> You're a Sentence Builder!</div>
                <p>This week you learned how to build three different types of sentences. Great work, writers!</p>
            </div>
        `,
        taskInstructions: "Arrange scrambled words into correct sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sentence Scramble (S-V Sentences)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Unscramble these words to make correct S-V sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. slept / the baby → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>b. jumped / the frog → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>c. sang / Maria → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>d. rained / it → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Scramble (S-V-O Sentences)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Unscramble these words to make correct S-V-O sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. apples / ate / the boy → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>b. the ball / kicked / Sara → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>c. a song / sang / the teacher → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>d. his homework / did / John → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Add Punctuation & Capitalization</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fix these sentences by adding capital letters and correct punctuation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. the dog barked → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>b. sara ate an orange → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>c. mutwale bought a cake for his mother → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>d. is that your book → _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence for each type we learned:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>S-V: _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>S-V-O: _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>S-V-DO-IO (with for or to): _________________________________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 sentences in a book at home. Identify if they are S-V, S-V-O, or have an indirect object. Write them down and label the parts.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek4);
    console.log("grade3-english-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek4);
    console.log("grade3-english-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek4',
        metadata: grade3EnglishWeek4.metadata,
        days: grade3EnglishWeek4
    });
    console.log("grade3-english-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek4 = grade3EnglishWeek4;
console.log("grade3-english-week4.js loaded and registered successfully");