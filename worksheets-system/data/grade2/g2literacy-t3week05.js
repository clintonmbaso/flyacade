// Grade 2 Literacy - Term 3 Week 5 Data
const grade2LiteracyWeek5 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 3,
        week: 5,
        title: "Logical Ordering & Sentence Structure",
        description: "Building narrative skills through picture sequencing, word ordering, and paragraph organization"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Logical Ordering",
        subtopic: "Rearranging Scrambled Sequential Picture Strips",
        lessonContent: `
            <p>Welcome to our literacy lesson! Today we'll learn how to put pictures in the right order to tell a story.</p>
            <p><strong>Key Question:</strong> How do we know what happens first, next, and last in a story?</p>
            <p><strong>Introduction:</strong> Stories have a beginning, middle, and end. When we look at pictures, we can figure out the correct order by thinking about what makes sense.</p>
            <p><strong>Clues to Help You Order Pictures:</strong></p>
            <ol>
                <li><strong>Look for a starting point</strong> - What happens first?</li>
                <li><strong>Look for changes</strong> - How do things change from one picture to the next?</li>
                <li><strong>Look for the ending</strong> - What happens last?</li>
                <li><strong>Think about time words</strong> - first, next, then, last</li>
            </ol>
            <p><strong>Example:</strong></p>
            <ul>
                <li>Picture A: An empty bowl</li>
                <li>Picture B: Pouring cereal into the bowl</li>
                <li>Picture C: Adding milk</li>
                <li>Picture D: Eating the cereal</li>
            </ul>
            <p><strong>Correct order:</strong> A → B → C → D (Empty bowl, add cereal, add milk, eat!)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Growing a Flower</div>
                <p>Order: Seed → Sprout → Small plant → Flower. You can't have a flower before the seed is planted!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath"></i> Getting Ready for Bed</div>
                <p>Order: Take a bath → Put on pajamas → Brush teeth → Read a story → Sleep</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Drawing a Picture</div>
                <p>Order: Get paper → Get crayons → Draw → Color → Show your picture</p>
            </div>
        `,
        taskInstructions: "Look at the picture strips. Number them in the correct order (1, 2, 3, 4).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Morning Routine</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Number these pictures in the correct order:
                    <div style="display: flex; justify-content: space-between; margin: 15px 0; flex-wrap: wrap;">
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Wake up</em></p>
                        </div>
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Eat breakfast</em></p>
                        </div>
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Brush teeth</em></p>
                        </div>
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Get dressed</em></p>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;">Order: ___ , ___ , ___ , ___</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Making a Sandwich</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Number these pictures in the correct order:
                    <div style="display: flex; justify-content: space-between; margin: 15px 0; flex-wrap: wrap;">
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Eat the sandwich</em></p>
                        </div>
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Put bread together</em></p>
                        </div>
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Add filling (cheese/meat)</em></p>
                        </div>
                        <div style="text-align: center; width: 22%; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
                            <div class="drawing-area" style="height: 80px; background: #f0f8ff;"></div>
                            <p><em>Get two slices of bread</em></p>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;">Order: ___ , ___ , ___ , ___</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Own 3-Picture Story</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a story with a beginning, middle, and end:
                    <div style="display: flex; justify-content: space-between; margin: 15px 0;">
                        <div style="text-align: center; width: 30%;">
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                            <p><strong>First</strong></p>
                        </div>
                        <div style="text-align: center; width: 30%;">
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                            <p><strong>Next</strong></p>
                        </div>
                        <div style="text-align: center; width: 30%;">
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                            <p><strong>Last</strong></p>
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence about your story:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw 4 pictures showing how you get ready for school in the morning. Ask a family member to check if they are in the right order.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Syntax Organization",
        subtopic: "Rearranging Jumbled Words to Construct Sentences",
        lessonContent: `
            <p>Today we'll learn how to put jumbled words in the right order to make complete sentences!</p>
            <p><strong>Key Question:</strong> How do we know which word comes first in a sentence?</p>
            <p><strong>Introduction:</strong> Words need to be in the correct order to make sense. A good sentence usually starts with a capital letter and ends with a period (.), question mark (?), or exclamation point (!).</p>
            <p><strong>Rules for Building Sentences:</strong></p>
            <ol>
                <li><strong>Find the subject</strong> - Who or what is the sentence about? (Examples: boy, cat, Mom, The dog)</li>
                <li><strong>Find the action word (verb)</strong> - What is happening? (Examples: runs, jumps, eats, is sleeping)</li>
                <li><strong>Look for other clues</strong> - Where? When? How?</li>
                <li><strong>Say it out loud</strong> - Does it sound right?</li>
            </ol>
            <p><strong>Example:</strong></p>
            <p>Jumbled words: <strong>boy the eating is</strong></p>
            <p>Step 1: Who? → boy</p>
            <p>Step 2: What is he doing? → is eating</p>
            <p>Step 3: Put it together: <strong>The boy is eating.</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Pet Sentence</div>
                <p>Jumbled: <em>dog runs fast The</em></p>
                <p>Correct: <strong>The dog runs fast.</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Weather Sentence</div>
                <p>Jumbled: <em>sunny is It today</em></p>
                <p>Correct: <strong>It is sunny today.</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Food Sentence</div>
                <p>Jumbled: <em>apples I like red</em></p>
                <p>Correct: <strong>I like red apples.</strong></p>
            </div>
        `,
        taskInstructions: "Rearrange the jumbled words to make correct sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Unscramble the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> <strong>cat the sleeping is</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> <strong>to school going am I</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>Mom dinner cooking is</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> <strong>ball the throwing is boy</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> <strong>flowers water the please</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Add the Correct Punctuation</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> <strong>What time is it</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> <strong>I love my new book</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> <strong>Watch out for the car</strong>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Write 3 words on the lines, then trade with a partner to unscramble:
                    <div style="display: flex; gap: 10px; margin: 10px 0;">
                        <div class="drawing-area" style="width: 80px; height: 40px;"></div>
                        <div class="drawing-area" style="width: 80px; height: 40px;"></div>
                        <div class="drawing-area" style="width: 80px; height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a sentence in a book. Write each word on a separate piece of paper, mix them up, then put them back in the correct order.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Structural Text Organization",
        subtopic: "Arranging Scrambled Sentences into a Paragraph",
        lessonContent: `
            <p>Today we'll learn how to put sentences in the right order to make a paragraph that makes sense!</p>
            <p><strong>Key Question:</strong> How do we know which sentence comes first, next, and last in a paragraph?</p>
            <p><strong>Introduction:</strong> A paragraph is a group of sentences that tell about one idea. The sentences need to be in an order that makes sense - just like putting puzzle pieces together!</p>
            <p><strong>How to Order Sentences in a Paragraph:</strong></p>
            <ol>
                <li><strong>Look for the topic sentence</strong> - This sentence introduces what the paragraph is about. It often comes first.</li>
                <li><strong>Look for time order words</strong> - Words like "first," "next," "then," "after that," "finally" give you clues.</li>
                <li><strong>Look for connecting words</strong> - Words like "but," "so," "because," "also" connect ideas.</li>
                <li><strong>Look for the ending sentence</strong> - This sentence wraps up the paragraph. It might start with "finally" or "in the end."</li>
            </ol>
            <p><strong>Example:</strong></p>
            <p>Scrambled sentences:</p>
            <ul>
                <li>A. Finally, we ate the delicious cookies.</li>
                <li>B. First, we mixed flour, sugar, and eggs.</li>
                <li>C. We baked the cookies in the oven.</li>
                <li>D. Next, we added chocolate chips.</li>
            </ul>
            <p><strong>Correct order:</strong> B → D → C → A</p>
            <p>(First mix ingredients, next add chips, then bake, finally eat!)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Morning Paragraph</div>
                <p><strong>Order:</strong> First, I wake up. → Then, I eat breakfast. → After that, I brush my teeth. → Finally, I go to school.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Reading a Book</div>
                <p><strong>Order:</strong> I went to the library. → I picked a book about dinosaurs. → I sat down and read it. → The book was very interesting!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-birthday-cake"></i> Birthday Party</div>
                <p><strong>Order:</strong> We decorated with balloons. → My friends arrived. → We played games. → Then we ate cake. → Everyone had a great time!</p>
            </div>
        `,
        taskInstructions: "Rearrange the scrambled sentences into a logical paragraph order.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Planting a Seed Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put these sentences in the correct order (1-4):
                    <div style="margin: 15px 0; padding: 10px; background: #f5f5f5; border-radius: 8px;">
                        <div>___ Finally, a small sprout appeared above the soil.</div>
                        <div>___ First, I dug a small hole in the dirt.</div>
                        <div>___ Then, I covered the seed with soil and watered it.</div>
                        <div>___ Next, I placed a seed inside the hole.</div>
                    </div>
                    <div class="answer-space" style="height: 30px;">Order: ___ , ___ , ___ , ___</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Going to the Park Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put these sentences in the correct order (1-5):
                    <div style="margin: 15px 0; padding: 10px; background: #f5f5f5; border-radius: 8px;">
                        <div>___ After that, we went on the swings.</div>
                        <div>___ First, my mom packed water and snacks.</div>
                        <div>___ Finally, we walked home tired but happy.</div>
                        <div>___ Then, we walked to the park.</div>
                        <div>___ Next, I played on the slide.</div>
                    </div>
                    <div class="answer-space" style="height: 30px;">Order: ___ , ___ , ___ , ___ , ___</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Pet Story Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Put these sentences in the correct order (1-4):
                    <div style="margin: 15px 0; padding: 10px; background: #f5f5f5; border-radius: 8px;">
                        <div>___ I named him Max.</div>
                        <div>___ Last week, my family got a new puppy.</div>
                        <div>___ He is my best friend.</div>
                        <div>___ First, we went to the animal shelter to pick him.</div>
                    </div>
                    <div class="answer-space" style="height: 30px;">Order: ___ , ___ , ___ , ___</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3-4 sentences about something you did this week. Use time order words (first, next, then, finally):
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Partner Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write 4 sentences about a topic (like "making a pizza" or "getting ready for bed"). Mix them up for a partner to put in order:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph (4-5 sentences) about how you celebrate a holiday or birthday. Make sure your sentences are in the right order. Read it to a family member.",
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