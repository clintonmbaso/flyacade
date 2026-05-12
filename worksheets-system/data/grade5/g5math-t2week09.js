// Grade 5 Mathematics - Term 2 Week 9 Data
const grade5MathematicsWeek9 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 2,
        week: 9,
        title: "The World of Symmetry",
        description: "Exploring line symmetry through paper folding, nature, plane shapes, and real-world objects"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Mirror Test (Line of Symmetry)",
        lessonContent: `
            <p>Welcome to our exploration of symmetry! Today we'll discover what makes a shape symmetrical using a simple paper folding test.</p>
            <p><strong>Key Question:</strong> How can we tell if a shape is symmetrical?</p>
            <p><strong>Introduction:</strong> A shape has symmetry if you can fold it in half and both sides match perfectly. The fold line is called the <strong>Line of Symmetry</strong> (or mirror line).</p>
            <p><strong>The Mirror Test:</strong></p>
            <ol>
                <li>Fold a piece of paper in half</li>
                <li>Cut out a shape along the fold</li>
                <li>Unfold the paper</li>
                <li>The fold line is your line of symmetry!</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Symmetry:</strong> When one half is the mirror image of the other half</li>
                <li><strong>Line of Symmetry:</strong> The imaginary line where you fold a shape so both halves match</li>
                <li><strong>Mirror Image:</strong> A reflection that looks identical but reversed</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> The Butterfly Test</div>
                <p>If you draw a line down the middle of a butterfly's body, the left wing is a mirror image of the right wing. That's symmetry!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Heart Shape</div>
                <p>A heart shape has one line of symmetry - right down the middle. Fold a heart in half vertically, and both sides match perfectly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> The Mirror Trick</div>
                <p>Place a small mirror along the line of symmetry of a shape. The reflection will complete the shape perfectly!</p>
            </div>
        `,
        taskInstructions: "Create symmetrical shapes by folding, cutting, and identifying lines of symmetry.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fold and Cut Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fold a piece of paper in half. Cut a shape along the fold, then unfold. Draw what you see:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Where is the line of symmetry in your cut-out shape?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mirror Test Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each shape below, draw the line(s) of symmetry:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 10px; text-align: center;">
                        <div>
                            <div style="height: 80px; border: 1px solid #ccc; margin-bottom: 5px;">[Square]</div>
                            <span>Square</span>
                        </div>
                        <div>
                            <div style="height: 80px; border: 1px solid #ccc; margin-bottom: 5px;">[Rectangle]</div>
                            <span>Rectangle</span>
                        </div>
                        <div>
                            <div style="height: 80px; border: 1px solid #ccc; margin-bottom: 5px;">[Triangle]</div>
                            <span>Triangle</span>
                        </div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What happens when a shape does NOT have a line of symmetry?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home that have a line of symmetry. Draw them and show the line of symmetry on each drawing.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Symmetry in Nature",
        lessonContent: `
            <p>Today we'll discover how symmetry appears all around us in nature!</p>
            <p><strong>Key Question:</strong> Where can we find symmetry in the natural world?</p>
            <p><strong>Symmetry in Nature:</strong> Nature is full of beautiful symmetry. From butterflies to leaves to human faces, symmetry is everywhere!</p>
            <p><strong>Examples of Symmetry in Nature:</strong></p>
            <ul>
                <li><strong>Butterflies:</strong> Left and right wings are mirror images</li>
                <li><strong>Leaves:</strong> Many leaves have a central vein that acts as a line of symmetry</li>
                <li><strong>Human Faces:</strong> Our faces are mostly symmetrical (though not perfectly!)</li>
                <li><strong>Flowers:</strong> Many flowers have multiple lines of symmetry</li>
                <li><strong>Starfish:</strong> Have 5 lines of symmetry (radial symmetry)</li>
            </ul>
            <p><strong>Two Types of Symmetry:</strong></p>
            <ul>
                <li><strong>Line Symmetry (Bilateral):</strong> One line divides the shape into two mirror halves (like a butterfly)</li>
                <li><strong>Rotational Symmetry:</strong> A shape looks the same when rotated (like a starfish or snowflake)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Butterfly Wings</div>
                <p>A monarch butterfly's left wing is almost an exact mirror copy of its right wing. The line down its body is the line of symmetry!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Leaf Patterns</div>
                <p>Look at a leaf from a mango tree. The main vein running down the center divides the leaf into two matching halves.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snowflake"></i> Snowflake Magic</div>
                <p>A snowflake has 6 lines of symmetry! Each arm is an exact copy of the others, arranged around a center point.</p>
            </div>
        `,
        taskInstructions: "Identify and draw lines of symmetry on photos of natural objects.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing Lines of Symmetry</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each natural object below, draw the line(s) of symmetry:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 10px;">
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">🦋 Butterfly</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">🍃 Leaf</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">😊 Face (front view)</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">⭐ Starfish</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Nature Scavenger Hunt (in your mind)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List 3 other things in nature that have symmetry:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a symmetrical insect or flower. Show the line of symmetry:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Go outside and find a leaf. Trace it on paper and draw its line of symmetry. Bring your drawing to class.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Symmetry in Plane Shapes",
        lessonContent: `
            <p>Today we'll discover how many lines of symmetry different geometric shapes have!</p>
            <p><strong>Key Question:</strong> How many lines of symmetry does a square have? A rectangle? A circle?</p>
            <p><strong>Lines of Symmetry in Common Shapes:</strong></p>
            <ul>
                <li><strong>Square:</strong> 4 lines of symmetry</li>
                <li><strong>Rectangle:</strong> 2 lines of symmetry</li>
                <li><strong>Circle:</strong> Infinite lines of symmetry!</li>
                <li><strong>Equilateral Triangle:</strong> 3 lines of symmetry</li>
                <li><strong>Isosceles Triangle:</strong> 1 line of symmetry</li>
                <li><strong>Scalene Triangle:</strong> 0 lines of symmetry</li>
            </ul>
            <p><strong>The Big Discovery:</strong></p>
            <ul>
                <li>A square has 4 lines of symmetry (vertical, horizontal, and both diagonals)</li>
                <li>A rectangle only has 2 lines of symmetry (vertical and horizontal - NOT the diagonals!)</li>
                <li>A circle has INFINITE lines of symmetry because you can fold it through the center at any angle</li>
            </ul>
            <p><strong>Why the difference?</strong> A square has equal sides, so diagonal folds work. A rectangle has different side lengths, so diagonal folds don't create matching halves.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Square vs. Rectangle</div>
                <p>A square: fold it vertically, horizontally, or diagonally - both corners match! A rectangle: only vertical and horizontal folds work. Try diagonal - the halves won't match!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> The Infinite Circle</div>
                <p>A circle is perfectly round. You can fold it through its center at ANY angle, and both halves will match perfectly. That's why it has infinite lines of symmetry!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Triangle Tales</div>
                <p>An equilateral triangle (all sides equal) has 3 lines of symmetry. An isosceles triangle (2 equal sides) has 1. A scalene triangle (no equal sides) has 0!</p>
            </div>
        `,
        taskInstructions: "Identify and count lines of symmetry in various plane shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: How Many Lines?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each shape, write the number of lines of symmetry:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Square: _____ lines</div>
                        <div>• Rectangle: _____ lines</div>
                        <div>• Circle: _____ lines</div>
                        <div>• Equilateral Triangle: _____ lines</div>
                        <div>• Isosceles Triangle: _____ lines</div>
                        <div>• Regular Pentagon: _____ lines</div>
                        <div>• Regular Hexagon: _____ lines</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Lines</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw ALL lines of symmetry on each shape:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 10px;">
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px;">[Square]</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px;">[Rectangle]</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px;">[Equilateral Triangle]</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div>
                            <div style="height: 100px; border: 1px solid #ccc; margin-bottom: 5px;">[Circle]</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle True or False:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A rectangle has 4 lines of symmetry → True / False</div>
                        <div>B. A circle has infinite lines of symmetry → True / False</div>
                        <div>C. A square's diagonal is a line of symmetry → True / False</div>
                        <div>D. A scalene triangle has 1 line of symmetry → True / False</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Bonus Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why doesn't a rectangle have diagonal lines of symmetry? Explain:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a square, rectangle, circle, and triangle. Draw and count all lines of symmetry for each shape.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Half-Shape Challenge",
        lessonContent: `
            <p>Today we'll become symmetry detectives by completing half shapes to make them perfectly symmetrical!</p>
            <p><strong>Key Question:</strong> How can we draw the missing half of a symmetrical shape?</p>
            <p><strong>The Half-Shape Challenge:</strong> When you have half of a shape on one side of a line of symmetry, the other half is its mirror image. Every point on one side has a matching point on the other side - the same distance from the line!</p>
            <p><strong>Steps to Complete a Symmetrical Shape:</strong></p>
            <ol>
                <li>Look at the line of symmetry (the mirror line)</li>
                <li>For each point on the given half, measure its distance from the line</li>
                <li>Plot the matching point the exact same distance on the opposite side</li>
                <li>Connect the points to complete the shape</li>
            </ol>
            <p><strong>Tip:</strong> Using grid paper makes this easier! Count the squares from the line to help you draw the mirror image accurately.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grid"></i> Grid Method</div>
                <p>Draw a dot 3 squares away from the line on the left. The mirror dot goes 3 squares away on the right. Every point has a mirror twin!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Complete the Heart</div>
                <p>If you see the right half of a heart, imagine folding the paper. The left half should be an exact reflection - same curves, same angles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Step by Step</div>
                <p>Start with the points closest to the mirror line, then work outward. Connect the dots gradually, like connecting stars in a constellation!</p>
            </div>
        `,
        taskInstructions: "Complete half-shapes on a grid to make them symmetrical.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Shape on Grid Paper</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On the grid below, draw the mirror image to complete each symmetrical shape:
                    <div style="margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center; background: #f9f9f9;">
                            <strong>Grid 1: Half Butterfly</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px; text-align: center; background: #f9f9f9;">
                            <strong>Grid 2: Half Heart</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px; text-align: center; background: #f9f9f9;">
                            <strong>Grid 3: Half Letter</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw half of a shape on the left side of the line. Trade with a partner and complete each other's shapes:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Point Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If point A is 4 squares to the left of the mirror line, where should its mirror point A' be located?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happens to points that are exactly ON the mirror line?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a line down the middle of a blank page. On one side, draw half of a face, butterfly, or tree. Complete the other half as a mirror image.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Symmetry Scavenger Hunt",
        lessonContent: `
            <p>Today we'll become symmetry detectives and find symmetrical objects all around us!</p>
            <p><strong>Key Question:</strong> How many symmetrical objects can you find in your environment?</p>
            <p><strong>Symmetry Around Us:</strong> Symmetry isn't just in math class - it's everywhere! Buildings, furniture, vehicles, logos, and even our bodies have symmetry.</p>
            <p><strong>Where to Look:</strong></p>
            <ul>
                <li><strong>Classroom:</strong> Windows, desks, whiteboards, doors, clocks</li>
                <li><strong>School Building:</strong> Doors, windows, tiles, posters, signs</li>
                <li><strong>Playground:</strong> Swings, seesaws, soccer goals</li>
                <li><strong>Nature:</strong> Leaves, flowers, insects</li>
                <li><strong>Everyday Objects:</strong> Plates, cups, books, phones, shoes</li>
            </ul>
            <p><strong>What We Learned This Week:</strong></p>
            <ul>
                <li>Monday: The mirror test and paper folding</li>
                <li>Tuesday: Symmetry in nature (butterflies, leaves, faces)</li>
                <li>Wednesday: Lines of symmetry in squares, rectangles, and circles</li>
                <li>Thursday: Completing half-shapes to create symmetry</li>
                <li>Friday: Finding symmetry in the real world!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Architecture Symmetry</div>
                <p>Many famous buildings use symmetry, like the Taj Mahal, the White House, and the Capitol Building. Symmetry makes buildings look balanced and beautiful!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Vehicle Symmetry</div>
                <p>Cars, bicycles, and airplanes are designed with symmetry so they move straight and balance properly. Imagine a car with one side longer than the other!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mobile-alt"></i> Tech Symmetry</div>
                <p>Your phone, tablet, and computer screen are all symmetrical rectangles. Even the app icons are often perfectly symmetrical!</p>
            </div>
        `,
        taskInstructions: "Find, document, and present symmetrical objects around the school.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Symmetry Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find 5 objects around your environment (classroom, school, or home) that have at least one line of symmetry. For each object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Draw the object</div>
                        <div>• Draw its line(s) of symmetry</div>
                        <div>• Write how many lines of symmetry it has</div>
                    </div>
                    <div style="margin-top: 15px;">
                        <div><strong>Object 1:</strong> ______________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        <div>Lines of symmetry: _____</div>
                        
                        <div style="margin-top: 15px;"><strong>Object 2:</strong> ______________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        <div>Lines of symmetry: _____</div>
                        
                        <div style="margin-top: 15px;"><strong>Object 3:</strong> ______________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        <div>Lines of symmetry: _____</div>
                        
                        <div style="margin-top: 15px;"><strong>Object 4:</strong> ______________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        <div>Lines of symmetry: _____</div>
                        
                        <div style="margin-top: 15px;"><strong>Object 5:</strong> ______________</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        <div>Lines of symmetry: _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Symmetry Gallery</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose your favorite symmetrical object from above. Draw it carefully and explain why symmetry is important for that object:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Week Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What was the most interesting thing you learned about symmetry this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Where is the most surprising place you found symmetry?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a 'Symmetry Collage' by cutting out or drawing 10 symmetrical objects from magazines, newspapers, or your own drawings. Label the line of symmetry on each.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathematicsWeek9);
    console.log("grade5-mathematics-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathematicsWeek9);
    console.log("grade5-mathematics-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathematicsWeek9',
        metadata: grade5MathematicsWeek9.metadata,
        days: grade5MathematicsWeek9
    });
    console.log("grade5-mathematics-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathematicsWeek9 = grade5MathematicsWeek9;
console.log("grade5-mathematics-week9.js loaded and registered successfully");