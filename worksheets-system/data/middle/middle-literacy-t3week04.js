// Grade Middle - Literacy - Term 3 Week 4 Data
const gradeMiddleLiteracyWeek4 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 3,
        week: 4,
        title: "Creative Expression through Colouring",
        description: "Building fine motor skills and visual familiarity through coloring objects and alphabet letters"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Fine Motor Skills",
        subtopic: "Colouring Objects",
        lessonContent: `
            <p>Welcome to our creative colouring lesson! Today we'll practice keeping our colours inside the lines while exploring everyday objects.</p>
            <p><strong>Key Question:</strong> Why is it important to stay inside the lines when we colour?</p>
            <p><strong>Introduction:</strong> Colouring helps us develop fine motor skills - the small muscle movements in our hands and fingers that help us write, draw, and do many daily tasks. When we practice staying inside the borders, we're training our hands to be more precise and controlled.</p>
            <p><strong>Tips for Staying Inside the Lines:</strong></p>
            <ol>
                <li><strong>Take your time:</strong> Slow, careful movements work better than fast ones</li>
                <li><strong>Hold your crayon/pencil correctly:</strong> Use a tripod grip (thumb, index, and middle finger)</li>
                <li><strong>Colour in one direction:</strong> Use back-and-forth or circular motions consistently</li>
                <li><strong>Start at the edge:</strong> Begin colouring at the border and work inward</li>
                <li><strong>Use the right pressure:</strong> Firm enough to see colour, gentle enough to stay controlled</li>
            </ol>
            <p><strong>Why This Matters:</strong> The same skills we use to colour inside the lines help us write letters neatly, cut with scissors, and even button our clothes!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Hand Strength</div>
                <p>Colouring strengthens the small muscles in your hands. Strong hand muscles make writing easier and less tiring!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Eye-Hand Coordination</div>
                <p>When you colour, your eyes and hands work together as a team. Your eyes see the line, and your hand follows. This teamwork is important for reading and writing too.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Classroom Connection</div>
                <p>Teachers can see your hard work when you stay inside the lines. It shows you took your time and did your best!</p>
            </div>
        `,
        taskInstructions: "Practice colouring large, simple outlines of everyday objects while staying inside the borders.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Warm-Up - Tracing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before you colour, trace the outline of each shape with your finger:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; display: flex; justify-content: space-around; align-items: center;">
                            <div style="text-align: center;">
                                <div style="width: 60px; height: 60px; border: 2px solid #333; border-radius: 50%; margin: 0 auto;"></div>
                                <span>Circle (Ball)</span>
                            </div>
                            <div style="text-align: center;">
                                <div style="width: 60px; height: 60px; border: 2px solid #333; margin: 0 auto;"></div>
                                <span>Square (Box)</span>
                            </div>
                            <div style="text-align: center;">
                                <div style="width: 70px; height: 50px; border: 2px solid #333; border-radius: 5px; margin: 0 auto;"></div>
                                <span>Rectangle (Book)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Colour the Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Colour each object carefully. Try to stay inside the black lines:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 15px;">
                        <div style="border: 1px solid #ddd; padding: 10px; text-align: center;">
                            <strong>Apple</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #333; margin-top: 5px; border-radius: 50%;"></div>
                        </div>
                        <div style="border: 1px solid #ddd; padding: 10px; text-align: center;">
                            <strong>Balloon</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #333; margin-top: 5px; border-radius: 50%;"></div>
                        </div>
                        <div style="border: 1px solid #ddd; padding: 10px; text-align: center;">
                            <strong>Fish</strong>
                            <div class="drawing-area" style="height: 80px; border: 2px solid #333; margin-top: 5px; border-radius: 50% 30% 50% 30%;"></div>
                        </div>
                        <div style="border: 1px solid #ddd; padding: 10px; text-align: center;">
                            <strong>House</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #333; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at your colouring. Colour the stars to show how well you stayed inside the lines:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>★ ☆ ☆ ☆ ☆ (Needs practice)    ★ ★ ☆ ☆ ☆ (Getting better)    ★ ★ ★ ☆ ☆ (Good)    ★ ★ ★ ★ ☆ (Very good)    ★ ★ ★ ★ ★ (Excellent!)</div>
                        <div style="margin-top: 10px;">My rating: _________ stars</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What was the easiest object to colour? What was the hardest?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a coloring page at home or draw a simple object (like a cup or a ball). Colour it carefully, staying inside the lines. Show it to someone in your family!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Letter Recognition",
        subtopic: "Colouring Alphabet Letters",
        lessonContent: `
            <p>Today we'll combine art with literacy! We'll colour large alphabet letters to help us remember their shapes.</p>
            <p><strong>Key Question:</strong> How can colouring letters help us learn to read and write?</p>
            <p><strong>Introduction:</strong> Every letter has a special shape. When we colour letters, we look closely at their curves, lines, and circles. This helps our brains remember what each letter looks like. Soon, you'll be able to recognize letters faster when you see them in books!</p>
            <p><strong>Letters We'll Colour Today:</strong></p>
            <ul>
                <li><strong>A</strong> - Has two slanted lines and a crossbar</li>
                <li><strong>B</strong> - Has a straight line and two bumps</li>
                <li><strong>C</strong> - Looks like a half-circle or a smile</li>
                <li><strong>D</strong> - Has a straight line and one big bump</li>
                <li><strong>E</strong> - Has a straight line and three arms</li>
            </ul>
            <p><strong>Colouring Tips for Letters:</strong></p>
            <ol>
                <li>Notice the shape of each letter before you start</li>
                <li>Use different colours for different parts of the letter</li>
                <li>Say the letter's name and sound as you colour it</li>
                <li>Try to colour the whole letter, not just the middle</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-brush"></i> Creative Colouring</div>
                <p>You don't have to use just one colour! Try making stripes, polka dots, or patterns inside your letters. This makes learning more fun and memorable.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Sing While You Colour</div>
                <p>Sing the alphabet song while you colour. Each time you finish a letter, say its sound out loud: "A says ah and ay!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Letter Hunt</div>
                <p>After you colour a letter, look around your classroom or home for things that start with that letter. B is for book, C is for crayon, D is for door!</p>
            </div>
        `,
        taskInstructions: "Colour large-print alphabet letters creatively to build visual familiarity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Colour the Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Colour each large letter. Use any colours you like. Be creative!
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">A</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">B</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">C</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">D</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">E</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Letters to Colour</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Continue with the next set of letters:
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">F</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">G</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">H</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">I</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                        <div>
                            <div style="font-size: 80px; font-weight: bold; border: 2px solid #333; padding: 10px; font-family: Arial;">J</div>
                            <input type="text" placeholder="Draw or describe your design" style="width: 100%; margin-top: 5px; padding: 5px;">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Letter Hunt Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each letter you coloured, find an object that starts with that letter:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A is for: _________</div>
                        <div>B is for: _________</div>
                        <div>C is for: _________</div>
                        <div>D is for: _________</div>
                        <div>E is for: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Favourite Letter</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which letter was the most fun to colour? Why?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of something that starts with your favourite letter:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Colour the letters of your first name. Use a different colour for each letter. Show your family and practice saying each letter's name and sound.",
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