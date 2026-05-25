// Zambian Language (Icibemba) - Term 3 Week 9 Data
const zambianLanguageWeek9 = {
    metadata: {
        grade: "middle",
        subject: "Zambian Language (Icibemba)",
        term: 3,
        week: 9,
        title: "Copying Patterns, Shapes, & Letters",
        description: "Moving from tracing to independently copying patterns, shapes, and single letters in Icibemba"
    },
    
    monday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Pre-Writing Skills",
        subtopic: "Copying Simple Patterns & Shapes",
        lessonContent: `
            <p>Mwapoleni mukwai! (Greetings everyone!) Today we will practice copying patterns and shapes - an important skill for writing letters in Icibemba!</p>
            <p><strong>Key Question:</strong> How can we look at a shape and draw it on our own paper?</p>
            <p><strong>Introduction:</strong> Copying is different from tracing. When we trace, we follow a dotted line. When we copy, we look at a shape on one page and draw it on another page. This helps our eyes and hands work together!</p>
            <p><strong>Why This Matters:</strong> Before we can write Icibemba letters like <strong>A, B, C, K, M, N</strong>, we need to practice copying basic shapes. Every letter is made of shapes like lines, curves, and circles!</p>
            <p><strong>Shapes We Will Practice:</strong></p>
            <ol>
                <li><strong>Vertical Line (|):</strong> A straight line going up and down (like in the letter <strong>I</strong> or <strong>L</strong>)</li>
                <li><strong>Horizontal Line (—):</strong> A straight line going side to side (like in the letter <strong>T</strong> or <strong>E</strong>)</li>
                <li><strong>Circle (O):</strong> A round shape (like in the letter <strong>O</strong> or <strong>Q</strong>)</li>
                <li><strong>Curve (C):</strong> A curved line (like in the letter <strong>C</strong> or <strong>U</strong>)</li>
                <li><strong>Diagonal Line (/ or \\):</strong> A slanted line (like in the letter <strong>K</strong> or <strong>X</strong>)</li>
            </ol>
            <p><strong>Step-by-Step Copying Process:</strong></p>
            <ul>
                <li>Look carefully at the shape on the left</li>
                <li>Try to remember what it looks like</li>
                <li>Draw the same shape on your paper</li>
                <li>Compare your drawing to the original</li>
                <li>Try again if it doesn't match!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Look, Remember, Draw</div>
                <p>First, LOOK at the shape for 5 seconds. Then, close your eyes and picture it. Finally, open your eyes and DRAW it on your paper.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Teacher Model</div>
                <p>Watch as your teacher draws a shape on the board. Now try to copy the same shape on your own paper without tracing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Pattern Practice</div>
                <p>Patterns are shapes that repeat: | — | — | or O O O O. Copying patterns helps us learn to write the same letter many times!</p>
            </div>
        `,
        taskInstructions: "Copy simple patterns and shapes from a visual model onto plain paper.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Copy Single Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each shape below. On your plain paper, try to copy it exactly:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 15px; text-align: center;">
                        <div>
                            <div style="border: 2px solid #4A90E2; width: 80px; height: 80px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 2px; height: 60px; background: black;"></div>
                            </div>
                            <p><strong>Vertical Line</strong></p>
                        </div>
                        <div>
                            <div style="border: 2px solid #4A90E2; width: 80px; height: 80px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 60px; height: 2px; background: black;"></div>
                            </div>
                            <p><strong>Horizontal Line</strong></p>
                        </div>
                        <div>
                            <div style="border: 2px solid #4A90E2; width: 80px; height: 80px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid black;"></div>
                            </div>
                            <p><strong>Circle</strong></p>
                        </div>
                        <div>
                            <div style="border: 2px solid #4A90E2; width: 80px; height: 80px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 50px; height: 50px; border-bottom-left-radius: 50px; border: 2px solid black; border-top: none; border-right: none;"></div>
                            </div>
                            <p><strong>Curve (C-shape)</strong></p>
                        </div>
                        <div>
                            <div style="border: 2px solid #4A90E2; width: 80px; height: 80px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 60px; height: 2px; background: black; transform: rotate(45deg);"></div>
                            </div>
                            <p><strong>Diagonal Line</strong></p>
                        </div>
                        <div>
                            <div style="border: 2px solid #4A90E2; width: 80px; height: 80px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 50px; height: 50px; border: 2px solid black;"></div>
                            </div>
                            <p><strong>Square</strong></p>
                        </div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 15px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 50px;">[Draw your copies on plain paper]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Copy Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each pattern. On your plain paper, copy the pattern:
                    <div style="margin-top: 15px;">
                        <div style="margin-bottom: 15px;">
                            <strong>Pattern 1:</strong> 
                            <span style="display: inline-block; width: 20px; height: 2px; background: black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 2px; background: black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 2px; height: 20px; background: black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 2px; height: 20px; background: black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 2px; background: black; margin: 0 5px;"></span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Pattern 2:</strong> 
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; border: 2px solid black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; border: 2px solid black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; border: 2px solid black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; border: 2px solid black; margin: 0 5px;"></span>
                        </div>
                        <div>
                            <strong>Pattern 3:</strong> 
                            <span style="display: inline-block; width: 20px; height: 2px; background: black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; border: 2px solid black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 2px; background: black; margin: 0 5px;"></span>
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; border: 2px solid black; margin: 0 5px;"></span>
                        </div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 15px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 40px;">[Draw your pattern copies on plain paper]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection & Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare your drawing to the original shape. Circle your best copy:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which shape was easiest to copy? Which was hardest? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home that have these shapes (circle, square, straight line). Draw each object and the shape you see inside it.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Letter Formation",
        subtopic: "Copying Single Letters",
        lessonContent: `
            <p>Mwapoleni! Today we will practice copying single letters from Icibemba. Now that we can copy shapes, we are ready to copy letters!</p>
            <p><strong>Key Question:</strong> How can we look at a letter and write it on our own paper?</p>
            <p><strong>Introduction:</strong> Copying a letter means looking at a target letter and trying to draw the same letter on your paper. You are not tracing - you are using your eyes to guide your hand!</p>
            <p><strong>Icibemba Alphabet - First Letters to Practice:</strong></p>
            <ul>
                <li><strong>A a</strong> - Starts with a circle curve and a line</li>
                <li><strong>B b</strong> - A straight line with two circles</li>
                <li><strong>C c</strong> - A simple curve (like our C-shape from yesterday!)</li>
                <li><strong>E e</strong> - Lines going in different directions</li>
                <li><strong>I i</strong> - A straight line with a dot</li>
                <li><strong>K k</strong> - A straight line with diagonal lines</li>
                <li><strong>M m</strong> - Curves and lines together</li>
                <li><strong>N n</strong> - A curve with a straight line</li>
                <li><strong>O o</strong> - A perfect circle!</li>
                <li><strong>U u</strong> - A curve that goes down and up</li>
            </ul>
            <p><strong>Copying Tips:</strong></p>
            <ol>
                <li>Look at the target letter for 5 seconds</li>
                <li>Notice where the letter starts (top, bottom, left, right?)</li>
                <li>Trace the letter in the air with your finger</li>
                <li>Draw the letter slowly on your paper</li>
                <li>Compare your letter to the target letter</li>
                <li>Try again to make it better!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fingerprint"></i> Air Writing</div>
                <p>Before you put pencil to paper, use your finger to "write" the letter in the air. This helps your brain remember the movement!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Letters are Shapes</div>
                <p>Remember: letter C is just our curve shape! Letter O is our circle shape! Letter I is a vertical line! You already know how to make these shapes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-up"></i> Start at the Top</div>
                <p>Most Icibemba letters start at the top. For example, to write A, start at the top, go down diagonally, then up diagonally, then draw the line across the middle!</p>
            </div>
        `,
        taskInstructions: "Look at each target letter and copy it onto your writing surface.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Copy Uppercase Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each target letter. On your paper, copy it three times:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">A</div>
                            <p>Copy A</p>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">B</div>
                            <p>Copy B</p>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">C</div>
                            <p>Copy C</p>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">K</div>
                            <p>Copy K</p>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">M</div>
                            <p>Copy M</p>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">N</div>
                            <p>Copy N</p>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Copy Lowercase Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each target lowercase letter. Copy it on your paper:
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">a</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">b</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">c</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">e</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">i</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">k</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">m</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">n</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">o</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; font-weight: bold; border: 2px solid #4A90E2; padding: 20px;">u</div>
                            <div class="answer-space" style="height: 40px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Letter Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the target letter. On your paper, write the same letter:
                    <div style="margin-top: 15px;">
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">K</span>
                        </div>
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">a</span>
                        </div>
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">M</span>
                        </div>
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">u</span>
                        </div>
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">C</span>
                        </div>
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">n</span>
                        </div>
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">B</span>
                        </div>
                        <div style="display: inline-block; width: 60px; text-align: center;">
                            <span style="font-size: 36px;">o</span>
                        </div>
                    </div>
                    <div class="drawing-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at your copied letters. Which one looks most like the target? Which one needs more practice?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What is one thing you will do next time to make your copying better?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice copying the 5 letters you found most difficult today. Write each letter 5 times on plain paper. Show your family and ask them which copy looks best!",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(zambianLanguageWeek9);
    console.log("zambian-language-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(zambianLanguageWeek9);
    console.log("zambian-language-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'zambianLanguageWeek9',
        metadata: zambianLanguageWeek9.metadata,
        days: zambianLanguageWeek9
    });
    console.log("zambian-language-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.zambianLanguageWeek9 = zambianLanguageWeek9;
console.log("zambian-language-week9.js loaded and registered successfully");