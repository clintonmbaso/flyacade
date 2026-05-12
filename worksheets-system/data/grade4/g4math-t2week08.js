// Grade 4 Mathematics - Term 2 Week 8 Data
const grade4MathWeek8 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 2,
        week: 8,
        title: "Polygons: Quadrilaterals, Pentagons & Hexagons",
        description: "Exploring four-sided shapes, constructing polygons, and understanding tessellation"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Quadrilateral Family",
        lessonContent: `
            <p>Welcome to the Quadrilateral Family! Today we'll learn how to tell different four-sided shapes apart based on their "DNA" - parallel lines and side lengths.</p>
            <p><strong>Key Question:</strong> Not all four-sided shapes are squares. How can we tell them apart?</p>
            <p><strong>Introduction:</strong> A quadrilateral is any shape with 4 sides. But there are many different types! We can identify them by looking at:</p>
            <ul>
                <li>How many pairs of parallel sides they have</li>
                <li>Whether sides are equal in length</li>
                <li>Whether angles are right angles (90°)</li>
            </ul>
            <p><strong>The Quadrilateral Family Members:</strong></p>
            <ol>
                <li><strong>Square:</strong> 4 equal sides, 4 right angles, 2 pairs of parallel sides</li>
                <li><strong>Rectangle:</strong> Opposite sides equal, 4 right angles, 2 pairs of parallel sides</li>
                <li><strong>Parallelogram:</strong> Opposite sides equal and parallel, opposite angles equal (NOT necessarily right angles - it can "lean over")</li>
                <li><strong>Trapezium (Trapezoid):</strong> Only ONE pair of parallel sides</li>
                <li><strong>Rhombus:</strong> 4 equal sides, 2 pairs of parallel sides (like a pushed-over square)</li>
                <li><strong>Kite:</strong> 2 pairs of adjacent equal sides, NO parallel sides</li>
            </ol>
            <p><strong>Key Testing Tools:</strong></p>
            <ul>
                <li><strong>The Parallel Test:</strong> Use two pencils to check if lines stay the same distance apart</li>
                <li><strong>The "Mirror" Test:</strong> Fold the shape to check if sides match perfectly</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> The Parallel Test</div>
                <p>Take a trapezium. Use two pencils to follow the top and bottom lines - they stay the same distance apart (1 pair of parallel sides). Now follow the sides - they will eventually crash into each other (not parallel)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star-of-life"></i> The Mirror Test</div>
                <p>Take a kite and fold it vertically down the middle. The sides match perfectly! Now fold it horizontally - they don't match. That's how you know it's a kite!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment"></i> Clue Card Example</div>
                <p>"I have 2 pairs of parallel sides, but I am leaning over." What shape am I? <strong>Answer: A Parallelogram!</strong></p>
            </div>
        `,
        taskInstructions: "Use clue cards to sort and identify different quadrilaterals.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Quadrilateral Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each clue to the correct quadrilateral:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 15px;"><strong>Clue 1:</strong> "I have 4 equal sides and 4 right angles." → <span style="border-bottom: 1px dotted #000; width: 100px; display: inline-block;"></span></div>
                        <div style="margin-bottom: 15px;"><strong>Clue 2:</strong> "I have only ONE pair of parallel sides." → <span style="border-bottom: 1px dotted #000; width: 100px; display: inline-block;"></span></div>
                        <div style="margin-bottom: 15px;"><strong>Clue 3:</strong> "My opposite sides are parallel and equal, but I lean over like a slanted rectangle." → <span style="border-bottom: 1px dotted #000; width: 100px; display: inline-block;"></span></div>
                        <div style="margin-bottom: 15px;"><strong>Clue 4:</strong> "I have 2 pairs of adjacent equal sides, like a diamond with a long and short pair." → <span style="border-bottom: 1px dotted #000; width: 100px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Parallel Test Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using two pencils, test each shape below. How many pairs of parallel sides does each have?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Square: _______ pair(s)</div>
                        <div>• Rectangle: _______ pair(s)</div>
                        <div>• Trapezium: _______ pair(s)</div>
                        <div>• Parallelogram: _______ pair(s)</div>
                        <div>• Kite: _______ pair(s)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw and label each quadrilateral in the correct section of this table:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Shape Name</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Draw It</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Number of Parallel Pairs</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Square</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="drawing-area" style="height: 50px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Trapezium</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="drawing-area" style="height: 50px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Kite</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="drawing-area" style="height: 50px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Parallelogram</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="drawing-area" style="height: 50px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the difference between a square and a rhombus?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 different quadrilateral shapes in your home (e.g., book cover, phone screen, picture frame). Draw each one and name the quadrilateral type.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Building 4-Sided Shapes - Kite Construction",
        lessonContent: `
            <p>Today we'll become shape engineers! We'll use a ruler and learn how to construct a perfect kite shape step by step.</p>
            <p><strong>Key Question:</strong> How can we move from a sketch to a precise shape construction?</p>
            <p><strong>The Secret of a Kite:</strong> A kite is made of two different-sized isosceles triangles joined together at the base!</p>
            <p><strong>Construction Steps - The Kite Factory:</strong></p>
            <ol>
                <li>Draw a vertical line (the "spine") that is <strong>10 cm</strong> long</li>
                <li>Mark a point at <strong>3 cm</strong> from the top of the spine</li>
                <li>Draw a horizontal line (the "crossbar") through that point</li>
                <li>Measure <strong>3 cm to the left</strong> and <strong>3 cm to the right</strong> from the spine along the crossbar</li>
                <li>Connect the four end points to complete your kite</li>
            </ol>
            <p><strong>What to Check:</strong> Once your kite is complete, measure the internal angles. The left and right angles should be equal!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-factory"></i> The Kite Factory</div>
                <p>Imagine you're working in a kite factory. Each kite must be exactly the same. That's why we use precise measurements - 10 cm spine, 3 cm from top, 3 cm each side on the crossbar.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-angle-right"></i> Angle Check</div>
                <p>After constructing your kite, use a protractor to measure the left angle and the right angle. They should be equal! If they're not, check your measurements.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Symmetry Secret</div>
                <p>A kite is symmetrical along its vertical axis (the spine). That's why the left and right sides are mirror images of each other!</p>
            </div>
        `,
        taskInstructions: "Construct a precise kite using a ruler, then measure its internal angles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Kite Construction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow the "Kite Factory" steps to construct your kite on cardstock:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 100px;">[Draw your kite here following the 5 steps]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measurement Check</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use a ruler to verify your measurements:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Length of vertical spine: _______ cm (should be 10 cm)</div>
                        <div>• Distance from top to crossbar: _______ cm (should be 3 cm)</div>
                        <div>• Left crossbar length: _______ cm (should be 3 cm)</div>
                        <div>• Right crossbar length: _______ cm (should be 3 cm)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Angle Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use a protractor to measure the internal angles of your kite:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Top angle: _______ °</div>
                        <div>• Left angle: _______ °</div>
                        <div>• Right angle: _______ °</div>
                        <div>• Bottom angle: _______ °</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Are the left and right angles equal? Why do you think that is?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Decoration</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Decorate your kite! Add a tail, patterns, or colors to make it your own.
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Using the same method, construct a different kite with a 12 cm spine and a crossbar 4 cm from the top, extending 4 cm each side.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Pentagons & Hexagons - Tessellation",
        lessonContent: `
            <p>Today we'll explore shapes with 5 and 6 sides and discover how they can fit together with no gaps!</p>
            <p><strong>Key Question:</strong> Why do bees use hexagons in their hives?</p>
            <p><strong>New Shape Vocabulary:</strong></p>
            <ul>
                <li><strong>Pentagon:</strong> A shape with 5 sides and 5 angles (like home plate in baseball!)</li>
                <li><strong>Hexagon:</strong> A shape with 6 sides and 6 angles (like a nut in a hardware store)</li>
                <li><strong>Tessellation:</strong> When shapes fit together perfectly with NO gaps or overlaps</li>
            </ul>
            <p><strong>The Beehive Logic:</strong></p>
            <ul>
                <li>Bees use hexagons because they tessellate perfectly - no wasted space!</li>
                <li>Try fitting circles together - there are always gaps</li>
                <li>Try fitting regular hexagons together - they "lock" perfectly side by side</li>
            </ul>
            <p><strong>Regular vs. Irregular:</strong></p>
            <ul>
                <li><strong>Regular Pentagon/Hexagon:</strong> All sides equal, all angles equal</li>
                <li><strong>Irregular Pentagon/Hexagon:</strong> Sides and angles can be different</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baseball-ball"></i> Pentagon in Real Life</div>
                <p>Home plate in baseball is a pentagon! It has 5 sides - that's why it's shaped differently from the rest of the diamond.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Hexagon in Real Life</div>
                <p>Hardware store nuts are hexagons. The 6-sided shape makes it easy to grip with a wrench from many different angles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> The Gap Test</div>
                <p>Try to fit circles together tightly. You'll always see diamond-shaped gaps between them. Now try hexagons - they fit perfectly with NO gaps. That's tessellation!</p>
            </div>
        `,
        taskInstructions: "Create a beehive patch by tracing and fitting hexagons together.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pentagon & Hexagon Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> How many sides and angles does each shape have?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Pentagon: _______ sides, _______ angles</div>
                        <div>• Hexagon: _______ sides, _______ angles</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a pentagon and a hexagon:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>Pentagon</strong>
                            <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div>
                            <strong>Hexagon</strong>
                            <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Beehive Build - Tessellation Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using the hexagon template provided, trace your first hexagon in the center.
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Trace your hexagons here to create a beehive patch]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Now trace 6 more hexagons around your center hexagon. Each new hexagon should share one full side with an existing hexagon.
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">Number of hexagons in your patch: _______</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Tessellation Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Can you find any gaps between your hexagons? Why do you think bees choose hexagons for their hives?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Name two shapes that DO tessellate and two shapes that DO NOT:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tessellate: _______ and _______</div>
                        <div>Do NOT tessellate: _______ and _______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of pentagons or hexagons in your home or neighborhood. Draw each one and label what it is (e.g., 'Stop sign - octagon' or 'Honeycomb pattern - hexagon').",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Polygon Construction - Engineering Challenge",
        lessonContent: `
            <p>Today we'll become geometry engineers! We'll apply all our tool skills (ruler, protractor, set square) to solve real-world construction problems.</p>
            <p><strong>Key Question:</strong> How do real-world objects use different polygons?</p>
            <p><strong>Real-World Polygon Uses:</strong></p>
            <ul>
                <li><strong>Trapezium (Trap-Door):</strong> Why use a trapezium for a door? It's wider at the bottom for better stability!</li>
                <li><strong>Rhombus (The Diamond):</strong> A rhombus is just a "pushed over" square where all sides stay equal</li>
                <li><strong>Rectangle:</strong> Most doors and windows are rectangles because they stack and fit together easily</li>
            </ul>
            <p><strong>Tools We'll Use Today:</strong></p>
            <ul>
                <li><strong>Ruler:</strong> For measuring exact side lengths</li>
                <li><strong>Protractor:</strong> For measuring and drawing angles</li>
                <li><strong>Set Square:</strong> For checking right angles (90°) and perpendicular lines</li>
            </ul>
            <p><strong>Final Quality Check:</strong> Use a set square to ensure the vertical lines of your castle walls are perfectly perpendicular (at a right angle) to the floor.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-archway"></i> The Trap-Door (Trapezium)</div>
                <p>A trapezium-shaped door is wider at the bottom. This makes it more stable and harder to tip over than a rectangle door of the same height!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gem"></i> The Diamond (Rhombus)</div>
                <p>A rhombus has 4 equal sides, just like a square. But its angles are NOT 90° - usually 60° and 120°, making it look like a pushed-over square or a diamond!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> The Set Square Test</div>
                <p>To check if two lines are perpendicular (form a perfect 90° corner), place your set square in the corner. If both edges line up with your lines perfectly, you've got a right angle!</p>
            </div>
        `,
        taskInstructions: "Complete the Paper Castle Project by constructing a trapezium door and rhombus windows.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Architect's Order - The Paper Castle Project</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> <strong>Draw a Trapezium Door:</strong>
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <p>Specifications:</p>
                        <ul>
                            <li>Base (bottom): <strong>6 cm</strong></li>
                            <li>Top: <strong>4 cm</strong></li>
                            <li>Height: <strong>5 cm</strong></li>
                        </ul>
                        <p><em>Remember: A trapezium has only ONE pair of parallel sides (the top and bottom should be parallel!)</em></p>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 70px;">[Draw your trapezium door here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <div class="task-item">
                    <span class="task-number">2</span> <strong>Draw Two Rhombus Windows:</strong>
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <p>Specifications:</p>
                        <ul>
                            <li>All sides: <strong>3 cm</strong></li>
                            <li>Angles: <strong>60° and 120°</strong> (NOT right angles!)</li>
                        </ul>
                        <p><em>Remember: A rhombus has 4 equal sides but NO right angles. Opposite angles are equal.</em></p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>Window 1</strong>
                            <div class="drawing-area" style="height: 150px; border: 2px solid #4A90E2;"></div>
                        </div>
                        <div>
                            <strong>Window 2</strong>
                            <div class="drawing-area" style="height: 150px; border: 2px solid #4A90E2;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Quality Control Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use your set square to check the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Are the top and bottom of your trapezium door parallel? _______ (Yes/No)</div>
                        <div>• Are all 4 sides of both rhombus windows exactly 3 cm? _______ (Yes/No)</div>
                        <div>• Are the angles of your rhombus windows 60° and 120°? _______ (Yes/No)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Castle Assembly</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a castle wall around your door and windows. Use your set square to make sure the castle walls are perfectly vertical (perpendicular to the floor):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 55px;">[Assemble your complete castle here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Engineering Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why might an architect choose a trapezium shape for a door instead of a rectangle?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most challenging part of constructing these shapes? How did you solve any problems?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a 'Shape Museum' at home. Draw 5 different polygons you find (quadrilaterals, pentagons, hexagons). For each shape, write: name, number of sides, number of angles, and one real-world place you found it.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek8);
    console.log("grade4-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek8);
    console.log("grade4-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek8',
        metadata: grade4MathWeek8.metadata,
        days: grade4MathWeek8
    });
    console.log("grade4-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek8 = grade4MathWeek8;
console.log("grade4-math-week2.js loaded and registered successfully");