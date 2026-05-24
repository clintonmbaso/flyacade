// Grade 2 Literacy - Term 2 Week 9 Data
const grade2LiteracyWeek9 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 2,
        week: 9,
        title: "Descriptive Writing & Sentence Transcribing",
        description: "Drawing pictures from descriptive phrases, copying sentences with proper punctuation, and maintaining formatting integrity"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Descriptive Writing",
        subtopic: "Drawing Pictures from Descriptive Phrases",
        lessonContent: `
            <p>Welcome to our literacy lesson! Today we'll learn how words can create pictures in our minds—and on paper!</p>
            <p><strong>Key Question:</strong> How can words help us imagine what something looks like?</p>
            <p><strong>Introduction:</strong> When someone describes something using words, we can picture it in our imagination. Today, we will read short phrases and draw exactly what they describe!</p>
            <p><strong>What Are Descriptive Words?</strong></p>
            <ul>
                <li><strong>Adjectives</strong> are describing words that tell us more about a noun (person, place, or thing).</li>
                <li>Examples: happy, big, small, red, fluffy, fast, slow, wet, dry</li>
            </ul>
            <p><strong>Examples of Descriptive Phrases:</strong></p>
            <ul>
                <li>"a happy dog" - What does a happy dog look like? A wagging tail? A big smile?</li>
                <li>"a big fish" - How big is it? Is it bigger than a person? Does it have large fins?</li>
                <li>"a red flower" - What shape are the petals? Is the stem green?</li>
            </ul>
            <p><strong>Remember:</strong> Read the words carefully and draw exactly what they say. Use your imagination, but stay true to the description!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Example 1: "a happy dog"</div>
                <p>A happy dog might have: a wagging tail, a tongue hanging out, big bright eyes, and perky ears. Is your dog smiling? Draw what makes a dog look happy!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Example 2: "a big fish"</div>
                <p>A big fish could be as large as a boat! Draw huge fins, a wide mouth, and maybe some fish scales. How big is YOUR big fish?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paintbrush"></i> Example 3: "a tiny mouse"</div>
                <p>A tiny mouse might have small round ears, a long thin tail, little whiskers, and be no bigger than your thumb!</p>
            </div>
        `,
        taskInstructions: "Read each phrase carefully and draw a picture that matches the description.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw the Phrase</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a picture of <strong>"a happy dog"</strong>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture of <strong>"a big fish"</strong>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Phrases to Draw</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of <strong>"a red flower"</strong>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of <strong>"a fluffy cat"</strong>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write your own descriptive phrase (two words: an adjective + a noun), then draw it:
                    <div>My phrase: _________________________________</div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find three objects at home. Write one descriptive phrase for each object (adjective + noun), then draw a picture of each one.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Sentence Transcribing",
        subtopic: "Capitalization, Spacing, and Punctuation",
        lessonContent: `
            <p>Today we will practice copying sentences correctly! When we write, we must follow three important rules.</p>
            <p><strong>Key Question:</strong> What three things must every sentence have?</p>
            <p><strong>The Three Rules of Writing:</strong></p>
            <ol>
                <li><strong>Capitalization:</strong> Every sentence starts with a capital letter (A, B, C... not a, b, c).</li>
                <li><strong>Spacing:</strong> Leave a finger space between each word so writing is easy to read.</li>
                <li><strong>Punctuation:</strong> Every sentence ends with a punctuation mark:
                    <ul>
                        <li><strong>Full stop (.)</strong> - for telling sentences</li>
                        <li><strong>Question mark (?)</strong> - for asking sentences</li>
                        <li><strong>Exclamation mark (!)</strong> - for excited or loud sentences</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Let's Check Each Rule:</strong></p>
            <ul>
                <li>✓ "The cat is sleeping." - Capital T, spaces between words, full stop at the end</li>
                <li>✓ "Where is my book?" - Capital W, spaces, question mark at the end</li>
                <li>✓ "What a big dog!" - Capital W, spaces, exclamation mark at the end</li>
            </ul>
            <p><strong>Common Mistakes to Avoid:</strong></p>
            <ul>
                <li>✗ "the dog ran." (missing capital letter)</li>
                <li>✗ "Thedogran." (missing spaces)</li>
                <li>✗ "The cat is sleeping" (missing punctuation)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Correct Sentence</div>
                <p><strong>"My name is Anna."</strong><br>
                ✓ Capital M<br>
                ✓ Spaces between each word<br>
                ✓ Full stop at the end</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question Sentence</div>
                <p><strong>"Do you like pizza?"</strong><br>
                ✓ Capital D<br>
                ✓ Spaces between each word<br>
                ✓ Question mark at the end</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Finger Space Trick</div>
                <p>Place one finger on your paper after writing a word. That space is how much room to leave before writing the next word!</p>
            </div>
        `,
        taskInstructions: "Copy each sentence carefully, paying attention to capitals, spaces, and punctuation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Copy the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Copy this sentence: <strong>The sun is shining.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Copy this sentence: <strong>My dog likes to run.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Copy this sentence: <strong>What is your name?</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Sentences to Copy</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Copy this sentence: <strong>I love to read books.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Copy this sentence: <strong>Can you help me please?</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Copy this sentence: <strong>Watch out for the ball!</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fix the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Rewrite this sentence correctly: <strong>the cat is black</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Rewrite this sentence correctly: <strong>whereismyhat</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Write 3 sentences about your day. Remember to use a capital letter at the start, spaces between words, and a punctuation mark at the end.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Sentence Transcribing",
        subtopic: "Complex Sentences with Commas and Formatting",
        lessonContent: `
            <p>Today we will practice copying longer, more complex sentences! We need to pay attention to commas, spacing, and keeping our writing neat.</p>
            <p><strong>Key Question:</strong> How do we copy long sentences without making mistakes?</p>
            <p><strong>What Makes a Sentence Complex?</strong></p>
            <ul>
                <li>Longer than simple sentences (more than 6-8 words)</li>
                <li>May contain <strong>commas (,)</strong> to separate items in a list</li>
                <li>May have two parts joined by words like "and" or "but"</li>
            </ul>
            <p><strong>What is a Comma (,)?</strong></p>
            <ul>
                <li>A comma is a punctuation mark that shows a short pause in a sentence</li>
                <li>Use commas to separate items in a list: "I like apples, bananas, and grapes."</li>
                <li>Use commas to separate parts of a sentence: "After school, I go home."</li>
            </ul>
            <p><strong>Tips for Copying Long Sentences:</strong></p>
            <ol>
                <li>Read the whole sentence first</li>
                <li>Look at each word carefully</li>
                <li>Copy one word at a time</li>
                <li>Check your commas and punctuation</li>
                <li>Keep your letters on the line (spatial alignment)</li>
            </ol>
            <p><strong>Spatial Alignment Means:</strong></p>
            <ul>
                <li>All letters sit on the line (not floating above or below)</li>
                <li>Tall letters (b, d, f, h, k, l, t) reach up</li>
                <li>Short letters (a, c, e, i, m, n, o, r, s, u, v, w, x, z) stay in the middle</li>
                <li>Falling letters (g, j, p, q, y) hang down below the line</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> Using Commas in a List</div>
                <p><strong>"For breakfast, I ate eggs, toast, and an apple."</strong><br>
                ✓ Comma after "breakfast"<br>
                ✓ Commas between "eggs", "toast", and "apple"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Spatial Alignment</div>
                <p>Look at your letters:<br>
                Tall: b d f h k l t (touch the top line)<br>
                Short: a c e i m n o r s u v w x z (sit in the middle)<br>
                Falling: g j p q y (drop below the line)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Read Before You Write</div>
                <p>Always read the entire sentence first. Then look back at each word as you copy. This helps you avoid missing words or punctuation!</p>
            </div>
        `,
        taskInstructions: "Copy each complex sentence carefully, paying attention to commas, spacing, and keeping letters on the line.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Copy Complex Sentences with Commas</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Copy this sentence: <strong>I like red, blue, and green colors.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Copy this sentence: <strong>For my snack, I want a banana, an orange, or some grapes.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Copy this sentence: <strong>After school, I will do my homework, play outside, and eat dinner.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Copy Longer Complex Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Copy this sentence: <strong>My best friend Sam has a dog, a cat, and two fish at his house.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Copy this sentence: <strong>When it rains, I like to wear my yellow boots, splash in puddles, and listen to thunder.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Copy this sentence: <strong>Before bed, I brush my teeth, wash my face, read a story, and say goodnight.</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Question Sentences - Copy Carefully</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Copy this sentence: <strong>Can you please pass me the pencil, the eraser, and the ruler?</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Copy this sentence: <strong>What is your favorite food to eat on a cold, rainy day?</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Exclamation Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Copy this sentence: <strong>Wow, look at that giant, colorful, beautiful rainbow!</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Copy this sentence: <strong>Help, I dropped my pencil, my book, and my lunch box on the floor!</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 10px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Check your work. Put a check (✓) for each rule you followed:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ All sentences start with a capital letter</div>
                        <div>___ There is a finger space between each word</div>
                        <div>___ Every sentence ends with the correct punctuation (. ? !)</div>
                        <div>___ Commas are in the right places</div>
                        <div>___ My letters sit on the line (spatial alignment)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 3 complex sentences about your weekend plans. Each sentence should have at least 8 words and use a comma somewhere. Remember capitals, spacing, and punctuation!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek9);
    console.log("grade2-literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek9);
    console.log("grade2-literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek9',
        metadata: grade2LiteracyWeek9.metadata,
        days: grade2LiteracyWeek9
    });
    console.log("grade2-literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek9 = grade2LiteracyWeek9;
console.log("grade2-literacy-week9.js loaded and registered successfully");