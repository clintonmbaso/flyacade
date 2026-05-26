// Grade Middle - Term 3 Week 4 Data
const gradeMiddleTerm3Week4 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 3,
        week: 4,
        title: "Advanced Geometry & Floating Experiments",
        description: "Exploring 3D shapes, comparing 2D diagrams to 3D objects, sorting by properties, tracing object outlines, and gathering experiment tools"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Introduction to 3D Shapes",
        lessonContent: `
            <p>Welcome to our exploration of three-dimensional shapes! Today we'll use our sense of touch to discover what makes solid objects different from flat drawings.</p>
            <p><strong>Key Question:</strong> What does it mean for a shape to be "three-dimensional"?</p>
            <p><strong>Introduction:</strong> The world around us is made of 3D shapes! Unlike flat drawings on paper, real objects have thickness, depth, and volume. You can feel them, hold them, and look at them from different angles.</p>
            <p><strong>What is a 3D Shape?</strong></p>
            <ul>
                <li>Has <strong>length</strong>, <strong>width</strong>, AND <strong>height</strong> (or depth)</li>
                <li>Takes up space (has volume)</li>
                <li>Can be touched and felt from all sides</li>
                <li>Examples: balls, boxes, cans, cones</li>
            </ul>
            <p><strong>Today's Materials:</strong></p>
            <ul>
                <li><strong>Solid balls (spheres):</strong> Rolling, round, no flat sides</li>
                <li><strong>Wooden cubes:</strong> Six flat square faces, sharp edges and corners</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-futbol"></i> Solid Ball (Sphere)</div>
                <p>A ball is a 3D shape called a sphere. It has no flat faces, no edges, and no corners. It feels completely round and can roll in any direction!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Wooden Cube</div>
                <p>A cube has 6 flat square faces, 12 edges, and 8 corners. It feels solid and does not roll - it slides when pushed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Touch Exploration</div>
                <p>Close your eyes and hold a shape. Can you tell if it's a ball or a cube just by feeling it? Your sense of touch can detect flat faces, corners, and curves!</p>
            </div>
        `,
        taskInstructions: "Touch, feel, and describe solid 3D shapes (balls and wooden cubes).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hands-On Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Hold the solid ball (sphere) in your hands. Describe how it feels:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Hold the wooden cube. Describe how it feels compared to the ball:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Touch Test - Blindfold Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With your eyes closed or blindfolded, feel an object. Can you tell if it's a ball or a cube?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Object 1: I think it is a _________ because _________</div>
                        <div>Object 2: I think it is a _________ because _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw the ball and the cube. Show how they look different:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which shape can roll? Which shape can stack? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find one round 3D object and one box-shaped 3D object at home. Touch them and tell someone in your family how they feel different.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Comparing 2D Diagrams vs. 3D Objects",
        lessonContent: `
            <p>Today we'll discover the difference between flat drawings (2D diagrams) and real solid objects (3D shapes)!</p>
            <p><strong>Key Question:</strong> How is a flat square drawing different from a solid wooden cube?</p>
            <p><strong>Introduction:</strong> A drawing on paper is flat - it has only length and width. But a real object like a wooden cube has thickness - you can pick it up, feel its sides, and look at it from different views.</p>
            <p><strong>2D vs. 3D:</strong></p>
            <ul>
                <li><strong>2D (Two-Dimensional):</strong> Flat shapes like squares, circles, triangles. They have length and width only. You cannot pick them up.</li>
                <li><strong>3D (Three-Dimensional):</strong> Solid objects like cubes, spheres, cylinders. They have length, width, AND height (thickness). You can hold them.</li>
            </ul>
            <p><strong>Comparing a Square Drawing to a Wooden Cube:</strong></p>
            <ul>
                <li>A <strong>square drawing</strong> is flat on paper - one face only</li>
                <li>A <strong>wooden cube</strong> has SIX square faces - front, back, top, bottom, left, right</li>
                <li>The cube has thickness - the square drawing does not</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Flat Square Drawing</div>
                <p>When you draw a square on paper, it has only two dimensions: length and width. It is flat. You cannot feel its back side because it doesn't have one!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Solid Wooden Cube</div>
                <p>A wooden cube is a 3D shape. It has length, width, AND thickness. You can turn it around and see all six square faces. It feels solid and heavy.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Different Views</div>
                <p>Look at a cube from the top - you see one square. Look from the side - you see another square. A flat square drawing looks the same from every angle because it has no depth!</p>
            </div>
        `,
        taskInstructions: "Match flat square drawings to a solid wooden cube and describe the differences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Side-by-Side Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the flat square drawing on paper. Then hold the wooden cube. List three differences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Difference 1: _________________________________</div>
                        <div>Difference 2: _________________________________</div>
                        <div>Difference 3: _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Matching Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at these 2D drawings. Which one matches the wooden cube?
                    <div style="display: flex; gap: 20px; margin-top: 10px; justify-content: center;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc;"></div>
                            <span>Drawing A</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc;"></div>
                            <span>Drawing B</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc;"></div>
                            <span>Drawing C</span>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">The cube matches Drawing _____ because _________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a square (2D) next to a cube (3D). Show how they are different:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Can you pick up a drawing? Why or why not?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How many square faces does a wooden cube have?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Find a box at home (like a cereal box). Compare it to a drawing of a rectangle. Tell someone how they are different.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Geometry & Sorting",
        subtopic: "Sorting Miscellaneous Objects",
        lessonContent: `
            <p>Today we'll become scientists and mathematicians as we sort classroom toys and objects by their properties!</p>
            <p><strong>Key Question:</strong> How can we group objects using size AND color together?</p>
            <p><strong>Introduction:</strong> Sorting means putting objects into groups that share something in common. Scientists sort objects to study them better. Today we'll use two properties at once: size AND color!</p>
            <p><strong>Properties We Can Sort By:</strong></p>
            <ul>
                <li><strong>Size:</strong> Big, medium, small</li>
                <li><strong>Color:</strong> Red, blue, yellow, green, etc.</li>
                <li><strong>Shape:</strong> Round, square, triangle</li>
                <li><strong>Material:</strong> Plastic, wood, fabric, metal</li>
                <li><strong>Texture:</strong> Smooth, rough, soft, hard</li>
            </ul>
            <p><strong>Sorting by Combined Properties:</strong></p>
            <p>Instead of sorting by just ONE property (like all red objects), we can sort by TWO properties together:</p>
            <ul>
                <li>"Big AND red" objects go in one group</li>
                <li>"Small AND blue" objects go in another group</li>
                <li>"Medium AND yellow" objects go in a third group</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group"></i> Toy Sorting Example</div>
                <p>Imagine you have red big blocks, red small blocks, blue big blocks, and blue small blocks. You can sort them into four groups: big red, small red, big blue, small blue!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Why Sort?</div>
                <p>Scientists sort objects to find patterns. A biologist might sort leaves by size AND color to study how trees change with seasons!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th-large"></i> Venn Diagram Thinking</div>
                <p>If you have objects that are big, objects that are red, and objects that are both big AND red - that's sorting by combined properties!</p>
            </div>
        `,
        taskInstructions: "Group classroom toys and objects by combined properties of size and color.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Mats Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the provided classroom toys/objects, sort them into groups by size (big/small) AND color:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Group 1 (Big + Red): _________________________</div>
                        <div>Group 2 (Big + Blue): _________________________</div>
                        <div>Group 3 (Small + Red): _________________________</div>
                        <div>Group 4 (Small + Blue): _________________________</div>
                        <div>Group 5 (Other color + size): ___________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Sorted Groups</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the objects from two of your groups:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Group: ___________</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Group: ___________</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sorting Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Your teacher will give you a mixed pile of objects. How many different groups can you make using size AND color?
                    <div class="answer-space" style="height: 80px;">I made _____ groups. They are: _________________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Is it easier to sort by one property or two properties? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name one other property (besides size and color) that you could use to sort objects:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Sort 10 objects from your room by size (big/small) AND color. Write down how you sorted them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Tracing Object Outlines",
        lessonContent: `
            <p>Today we'll discover how a 3D object can create a 2D shape when we trace its base!</p>
            <p><strong>Key Question:</strong> What shape do you get when you trace the bottom of a plastic cup?</p>
            <p><strong>Introduction:</strong> When you place a 3D object on paper and trace around its base, you create a flat 2D shape. This helps us see the connection between solid objects and flat drawings!</p>
            <p><strong>Steps for Tracing an Object:</strong></p>
            <ol>
                <li>Place the object on a flat piece of paper</li>
                <li>Hold the object steady with one hand</li>
                <li>Use a pencil to trace carefully around the base of the object</li>
                <li>Lift the object to reveal the 2D shape!</li>
            </ol>
            <p><strong>What Shapes Will We Discover?</strong></p>
            <ul>
                <li><strong>Plastic cup base:</strong> Trace to discover a CIRCLE</li>
                <li><strong>Wooden cube base:</strong> Trace to discover a SQUARE</li>
                <li><strong>Can base:</strong> Trace to discover a CIRCLE</li>
                <li><strong>Box base:</strong> Trace to discover a RECTANGLE</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coffee"></i> Cup Tracing</div>
                <p>A plastic cup has a circular base. When you place it on paper and trace around it, you will draw a perfect circle! The 3D cup creates a 2D circle.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Cube Tracing</div>
                <p>A wooden cube has a square base. Tracing around it gives you a square shape. The square drawing matches one face of the cube!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Real-World Connection</div>
                <p>Architects and designers trace objects all the time! When you want to build something that fits perfectly, you trace the shape first.</p>
            </div>
        `,
        taskInstructions: "Place a plastic cup on paper, trace its base, and discover what shape appears.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cup Tracing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Place a plastic cup upside down on your paper. Trace around its base carefully:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Trace your cup here]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What shape did you discover? _________
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare Different Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Trace the base of TWO different objects provided by your teacher:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>
                            <strong>Object 1: ___________</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                            <div>Shape: _________</div>
                        </div>
                        <div>
                            <strong>Object 2: ___________</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                            <div>Shape: _________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Prediction & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Before tracing, predict: What shape will the bottom of a can make?
                    <div class="answer-space" style="height: 40px;">Prediction: _________</div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> After tracing, what shape did you actually get?
                    <div class="answer-space" style="height: 40px;">Actual shape: _________</div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why does a cup make a circle when you trace it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home with different-shaped bases. Trace each one on paper. Bring your tracings to class tomorrow.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Scientific Investigation",
        subtopic: "Gathering Experiment Tools",
        lessonContent: `
            <p>Today we'll become outdoor scientists as we gather natural materials for our floating experiments!</p>
            <p><strong>Key Question:</strong> What natural objects can we collect to test whether they float or sink?</p>
            <p><strong>Introduction:</strong> Scientists collect materials carefully before conducting experiments. Today we will gather four types of objects from outdoors: rocks, leaves, sticks, and dry paper. Next week, we will test whether these objects float or sink in water!</p>
            <p><strong>What We Are Collecting:</strong></p>
            <ul>
                <li><strong>Rocks:</strong> Find small, smooth rocks (size of a coin or smaller)</li>
                <li><strong>Leaves:</strong> Collect dry leaves that have fallen from trees</li>
                <li><strong>Sticks:</strong> Find small, thin sticks (about the length of your finger)</li>
                <li><strong>Dry paper:</strong> Small pieces of dry paper (not wet or damp)</li>
            </ul>
            <p><strong>Safety Rules for Outdoor Collection:</strong></p>
            <ul>
                <li>Stay with your teacher and classmates</li>
                <li>Only pick up objects from the ground (don't pull from plants)</li>
                <li>Wash your hands after collecting</li>
                <li>Don't collect anything sharp or dangerous</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Floating Experiment Preview</div>
                <p>Next week, we will place each object in water to see if it floats (stays on top) or sinks (falls to the bottom). Which objects do you think will float?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard"></i> Scientist Notebook</div>
                <p>Real scientists keep a collection notebook. They write down where they found each object, what it looks like, and why they chose it for their experiment.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Respecting Nature</div>
                <p>When collecting objects from nature, take only what you need and leave the rest for animals and other plants. Never pull leaves off living trees!</p>
            </div>
        `,
        taskInstructions: "Collect rocks, leaves, sticks, and dry paper from outdoors for next week's floating experiments.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Outdoor Collection Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your teacher's guidance, go outside and collect one of each item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ Rock (small, smooth): <span style="color: #999;">[Place in collection bag]</span></div>
                        <div>✓ Leaf (dry, fallen): <span style="color: #999;">[Place in collection bag]</span></div>
                        <div>✓ Stick (small, thin): <span style="color: #999;">[Place in collection bag]</span></div>
                        <div>✓ Dry paper: <span style="color: #999;">[Place in collection bag]</span></div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">Where did you find each item? _________________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Observation & Description</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Describe each item you collected:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Rock:</strong> Color _________ | Size _________ | Texture _________</div>
                        <div><strong>Leaf:</strong> Color _________ | Shape _________ | Is it crunchy? _________</div>
                        <div><strong>Stick:</strong> Length _________ | Thickness _________ | Color _________</div>
                        <div><strong>Dry paper:</strong> Color _________ | Is it soft or stiff? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Prediction for Next Week</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Predict which items will float and which will sink:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I think the rock will: _________ (float/sink) because _________</div>
                        <div>I think the leaf will: _________ (float/sink) because _________</div>
                        <div>I think the stick will: _________ (float/sink) because _________</div>
                        <div>I think the dry paper will: _________ (float/sink) because _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Collection Bag Labeling</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write your name on your collection bag. Draw what you collected:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to collect dry paper instead of wet paper?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What safety rule did you follow during outdoor collection?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find one more natural object at home (a seed, a feather, a nut shell, or a piece of bark). Bring it to class on Monday for our floating experiment.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleTerm3Week4);
    console.log("grade-middle-term3-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleTerm3Week4);
    console.log("grade-middle-term3-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleTerm3Week4',
        metadata: gradeMiddleTerm3Week4.metadata,
        days: gradeMiddleTerm3Week4
    });
    console.log("grade-middle-term3-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleTerm3Week4 = gradeMiddleTerm3Week4;
console.log("grade-middle-term3-week4.js loaded and registered successfully");