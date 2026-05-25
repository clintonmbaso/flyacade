// Grade Middle Literacy - Term 1 Week 4 Data
const gradeMiddleLiteracyWeek4 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 1,
        week: 4,
        title: "Attributes: Matching & Length",
        description: "Exploring sorting by length and matching adult animals to their babies"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Attributes",
        subtopic: "Sorting by Length - Short vs. Long",
        lessonContent: `
            <p>Welcome! Today we'll learn how to compare items by their length and sort them into groups.</p>
            <p><strong>Key Question:</strong> How can we tell if something is short or long?</p>
            <p><strong>Introduction:</strong> Length is how long something is from one end to the other. We can compare objects by looking at their length and decide which are short and which are long.</p>
            <p><strong>Words to Know:</strong></p>
            <ul>
                <li><strong>Length:</strong> The measurement of something from end to end</li>
                <li><strong>Short:</strong> Small in length</li>
                <li><strong>Long:</strong> Large in length</li>
                <li><strong>Compare:</strong> To look at how things are different or the same</li>
                <li><strong>Sort:</strong> To put things into groups</li>
            </ul>
            <p><strong>Comparing Lengths:</strong></p>
            <ol>
                <li>Look at two objects side by side</li>
                <li>Find where each object starts and ends</li>
                <li>Decide which reaches farther - that one is longer</li>
                <li>The one that does not reach as far is shorter</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Classroom Examples</div>
                <p>A crayon is short. A ruler is long. Which one would you use to draw a big picture?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Real Life</div>
                <p>A bicycle is shorter than a bus. A bus is longer than a bicycle. Can you think of something longer than a bus?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Using Your Body</div>
                <p>Your finger is short. Your arm is long. Your whole body is even longer!</p>
            </div>
        `,
        taskInstructions: "Compare, sort, and draw items by length.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Compare These Items</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the longer item in each pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Pencil  or  Marker   → Circle: Pencil / Marker</div>
                        <div>b. Paperclip  or  Ruler   → Circle: Paperclip / Ruler</div>
                        <div>c. Your shoe  or  Your desk   → Circle: Shoe / Desk</div>
                        <div>d. Ant  or  Elephant   → Circle: Ant / Elephant</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sort by Length</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw each item in the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Items to sort: crayon, jump rope, toothpick, snake, pencil, bus</p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Short Items</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Long Items</th>
                             </tr>
                             <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                             </tr>
                          </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one short thing and one long thing from your classroom:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Short Object</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Long Object</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Share Your Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How did you decide what was short and what was long?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that are short and 5 things that are long. Draw or list them. Show a family member your sorting!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Attributes",
        subtopic: "Matching Association (Parents & Babies)",
        lessonContent: `
            <p>Today we'll learn how to match adult animals to their babies!</p>
            <p><strong>Key Question:</strong> Which baby animal goes with which parent?</p>
            <p><strong>Introduction:</strong> Just like humans have moms and dads, animals have parents too! Baby animals often look different from their parents and have special names.</p>
            <p><strong>Parent and Baby Animal Pairs:</strong></p>
            <ul>
                <li><strong>Dog</strong> → <strong>Puppy</strong></li>
                <li><strong>Cat</strong> → <strong>Kitten</strong></li>
                <li><strong>Cow</strong> → <strong>Calf</strong></li>
                <li><strong>Horse</strong> → <strong>Foal</strong></li>
                <li><strong>Sheep</strong> → <strong>Lamb</strong></li>
                <li><strong>Chicken</strong> → <strong>Chick</strong></li>
                <li><strong>Duck</strong> → <strong>Duckling</strong></li>
                <li><strong>Frog</strong> → <strong>Tadpole</strong></li>
                <li><strong>Butterfly</strong> → <strong>Caterpillar</strong></li>
                <li><strong>Bird</strong> → <strong>Nestling / Fledgling</strong></li>
            </ul>
            <p><strong>Why This Matters:</strong> Understanding how babies grow and change helps us take care of animals and appreciate nature!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Dog Family</div>
                <p>A mother dog is called a dam. A father dog is called a sire. Their baby is called a puppy!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat"></i> Cat Family</div>
                <p>A group of kittens is called a litter. Mother cats are very good at hiding their kittens to keep them safe!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Amazing Change</div>
                <p>A tadpole looks nothing like a frog! It grows legs and loses its tail as it becomes an adult frog. This is called metamorphosis!</p>
            </div>
        `,
        taskInstructions: "Match parent animals to their babies using drawing, writing, and discussion.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw a Line to Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each parent to its baby:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <div><strong>Parent</strong></div>
                            <div>• Dog</div>
                            <div>• Cat</div>
                            <div>• Cow</div>
                            <div>• Horse</div>
                            <div>• Sheep</div>
                            <div>• Chicken</div>
                            <div>• Duck</div>
                            <div>• Frog</div>
                        </div>
                        <div>
                            <div><strong>Baby</strong></div>
                            <div>• Calf</div>
                            <div>• Kitten</div>
                            <div>• Puppy</div>
                            <div>• Lamb</div>
                            <div>• Foal</div>
                            <div>• Tadpole</div>
                            <div>• Chick</div>
                            <div>• Duckling</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose one animal pair. Draw the parent AND the baby:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Parent Animal</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div style="margin-top: 5px;">Name: _________</div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Baby Animal</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div style="margin-top: 5px;">Name: _________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A baby dog is called a _______________.</div>
                        <div>b. A baby cat is called a _______________.</div>
                        <div>c. A baby cow is called a _______________.</div>
                        <div>d. A baby sheep is called a _______________.</div>
                        <div>e. A baby chicken is called a _______________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Share and Discuss</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which animal pair is your favorite? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Can you think of another animal parent and baby name? Write them here:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member about their favorite animal. Draw that animal and its baby. Share your drawing with the class!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleLiteracyWeek4);
    console.log("grade-middle-literacy-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleLiteracyWeek4);
    console.log("grade-middle-literacy-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleLiteracyWeek4',
        metadata: gradeMiddleLiteracyWeek4.metadata,
        days: gradeMiddleLiteracyWeek4
    });
    console.log("grade-middle-literacy-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleLiteracyWeek4 = gradeMiddleLiteracyWeek4;
console.log("grade-middle-literacy-week4.js loaded and registered successfully");