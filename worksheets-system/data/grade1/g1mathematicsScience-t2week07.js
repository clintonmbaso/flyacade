// Grade 1 Mathematics & Science - Term 2 Week 7 Data
const grade1MathScienceWeek7 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 2,
        week: 7,
        title: "Manipulating Shapes",
        description: "Recognizing, sorting, creating, and manipulating shapes using concrete objects and local materials"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Recognizing Shapes Using Concrete Objects",
        lessonContent: `
            <p>Welcome to our shape exploration! Today we'll learn to recognize different shapes using objects we can touch and see.</p>
            <p><strong>Key Question:</strong> What shapes can you find in the world around you?</p>
            <p><strong>Introduction:</strong> Shapes are everywhere! A clock is a circle. A book is a rectangle. A slice of pizza looks like a triangle. Learning to recognize shapes helps us understand our world.</p>
            <p><strong>Basic Shapes to Learn:</strong></p>
            <ol>
                <li><strong>Circle:</strong> A round shape with no corners or straight lines (like a ball or plate)</li>
                <li><strong>Square:</strong> A shape with 4 equal sides and 4 corners (like a napkin or cracker)</li>
                <li><strong>Triangle:</strong> A shape with 3 sides and 3 corners (like a roof or nacho chip)</li>
                <li><strong>Rectangle:</strong> A shape with 4 sides (2 long, 2 short) and 4 corners (like a door or phone)</li>
            </ol>
            <p><strong>How to Recognize Shapes:</strong></p>
            <ul>
                <li>Count the sides (edges) of the shape</li>
                <li>Count the corners (vertices) where sides meet</li>
                <li>Look at the length of each side (are they all the same or different?)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Circle Hunt</div>
                <p>Look at a clock, a coin, or a button. These are all circles! A circle rolls and has no straight edges.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Rectangle Hunt</div>
                <p>Your math book, a door, and a tablet screen are all rectangles. They have 4 sides - two long and two short.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Shape Detective</div>
                <p>Be a shape detective! Walk around your classroom or home. How many circles, squares, triangles, and rectangles can you spot?</p>
            </div>
        `,
        taskInstructions: "Use concrete objects to identify and match basic shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Hunt - Find and Draw</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom or home. Find one object for each shape and draw it:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Circle</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Square</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Triangle</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Rectangle</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Touch and Feel Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Your teacher will give you a bag with different shape objects. Reach in without looking and feel each object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What shape did you feel first? _________</div>
                        <div>• How did you know? _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">• What shape was the hardest to identify? _________</div>
                        <div>• Why? _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shape Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line from each shape to its name:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <div>⬤</div>
                            <div>■</div>
                            <div>▲</div>
                            <div>▭</div>
                        </div>
                        <div>
                            <div>Triangle</div>
                            <div>Square</div>
                            <div>Circle</div>
                            <div>Rectangle</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home that are circles, squares, triangles, or rectangles. Draw them in your notebook and label each shape.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Sorting Shapes According to Different Properties",
        lessonContent: `
            <p>Today we'll learn how to sort shapes by their properties - like size, color, number of sides, and more!</p>
            <p><strong>Key Question:</strong> How can we group shapes that are the same or different?</p>
            <p><strong>Introduction:</strong> Sorting means putting things into groups that share something in common. We can sort shapes by different properties (special features).</p>
            <p><strong>Ways to Sort Shapes:</strong></p>
            <ol>
                <li><strong>By Color:</strong> Put all red shapes together, all blue shapes together, etc.</li>
                <li><strong>By Size:</strong> Put all big shapes together and all small shapes together</li>
                <li><strong>By Number of Sides:</strong> 
                    <ul>
                        <li>0 sides → Circles</li>
                        <li>3 sides → Triangles</li>
                        <li>4 sides → Squares and Rectangles</li>
                    </ul>
                </li>
                <li><strong>By Type:</strong> All circles together, all squares together, etc.</li>
                <li><strong>By Corners:</strong> Shapes with 0 corners, 3 corners, or 4 corners</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Sort:</strong> To put things into groups that are alike</li>
                <li><strong>Property:</strong> A special feature of an object (like color, size, shape)</li>
                <li><strong>Group:</strong> A set of things that share the same property</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Sorting by Color</div>
                <p>If you have red circles, blue circles, and yellow squares, you could put all red shapes in one group - even if they are different shapes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt"></i> Sorting by Size</div>
                <p>Big circle + big square + big triangle all go in the "big shapes" group. Little versions go in the "small shapes" group.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Sorting by Sides</div>
                <p>All shapes with 3 sides (triangles) go together. All shapes with 4 sides (squares and rectangles) go together. Circles have 0 sides - they have their own group!</p>
            </div>
        `,
        taskInstructions: "Sort shape cutouts using different properties and explain your reasoning.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting by Color</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will give you shape cutouts in different colors. Sort them by color:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Red shapes: _________</div>
                        <div>• Blue shapes: _________</div>
                        <div>• Yellow shapes: _________</div>
                        <div>• Green shapes: _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting by Number of Sides</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now sort the same shapes by how many sides they have:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Shapes with 0 sides (circles): _________</div>
                        <div>• Shapes with 3 sides (triangles): _________</div>
                        <div>• Shapes with 4 sides (squares/rectangles): _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which group has the most shapes? _________
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sorting by Size</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sort the shapes by size (big vs. small):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Big shapes: _________</div>
                        <div>• Small shapes: _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Sorting Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Now YOU decide a new way to sort the shapes. How will you sort them?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Sort the shapes your way. Explain why you put them in these groups:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "At home, find 10 small objects (toys, coins, buttons). Sort them in 3 different ways. Draw or write how you sorted them each time.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Creating and Manipulating Shapes Using Various Local Materials",
        lessonContent: `
            <p>Today we'll become shape builders! We'll use local materials to create and move shapes with our hands.</p>
            <p><strong>Key Question:</strong> How can we make shapes using things we find around us?</p>
            <p><strong>Introduction:</strong> You don't need fancy toys to make shapes! You can use sticks, stones, string, paper, leaves, and many other things to create circles, squares, triangles, and rectangles.</p>
            <p><strong>Local Materials We Can Use:</strong></p>
            <ul>
                <li><strong>Sticks or twigs:</strong> Great for making straight lines and corners</li>
                <li><strong>String or rope:</strong> Perfect for making circles and curves</li>
                <li><strong>Stones or pebbles:</strong> Can be arranged to form any shape</li>
                <li><strong>Leaves:</strong> Can be arranged or cut into shapes</li>
                <li><strong>Paper or cardboard:</strong> Can be folded, cut, or drawn on</li>
                <li><strong>Clay or mud:</strong> Can be molded into any shape</li>
            </ul>
            <p><strong>How to Make Different Shapes:</strong></p>
            <ol>
                <li><strong>Triangle:</strong> Use 3 sticks for the 3 sides, or arrange 3 stones at the corners</li>
                <li><strong>Square:</strong> Use 4 sticks of equal length for the 4 equal sides</li>
                <li><strong>Rectangle:</strong> Use 4 sticks (2 long, 2 short) for the 4 sides</li>
                <li><strong>Circle:</strong> Use string tied in a loop, or arrange stones in a round pattern</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stick-note"></i> Stick Shapes</div>
                <p>Collect 3 sticks of the same length. Arrange them to make a triangle! For a square, you need 4 sticks of the same length.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> String Circle</div>
                <p>Tie a piece of string into a loop. Place it on the ground and arrange it into a perfect circle shape. You can move it and change its size!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Body Shapes</div>
                <p>Did you know you can make shapes with your body? Lie on the ground with friends to form a giant triangle or square with your bodies!</p>
            </div>
        `,
        taskInstructions: "Use local materials (sticks, stones, string, paper) to build and manipulate shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Stick Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Collect 10 small sticks from outside. Use them to create these shapes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Make a triangle with 3 sticks. Draw what you made:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• Make a square with 4 sticks. Draw what you made:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• Make a rectangle with 4 sticks (2 long, 2 short). Draw what you made:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Stone Arrangement</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Collect small stones or pebbles. Arrange them to form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A circle: _________ stones used</div>
                        <div>• A triangle: _________ stones used</div>
                        <div>• A square: _________ stones used</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: String Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using a piece of string or rope, create a circle on your desk or the floor:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Now try to change your string circle into an oval (a squashed circle):
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Shape Manipulation Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which material was easiest to make shapes with? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Which shape was hardest to make? Why do you think that is?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 different materials at home (like toothpicks, buttons, or pasta). Use each material to make one shape. Bring your creations or drawings to class.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Making Regular and Irregular Shapes Using Clay or Sticks",
        lessonContent: `
            <p>Today we'll learn the difference between regular and irregular shapes, and create both types using clay and sticks!</p>
            <p><strong>Key Question:</strong> What makes a shape regular or irregular?</p>
            <p><strong>Introduction:</strong> Some shapes are very neat and perfect - we call these "regular" shapes. Other shapes are more free and uneven - these are "irregular" shapes. Both are important and fun to make!</p>
            <p><strong>Regular Shapes (Neat and Equal):</strong></p>
            <ul>
                <li>All sides are the same length</li>
                <li>All corners are the same</li>
                <li>Examples: Square (4 equal sides), Equilateral Triangle (3 equal sides), Circle (always round and even)</li>
            </ul>
            <p><strong>Irregular Shapes (Free and Uneven):</strong></p>
            <ul>
                <li>Sides can be different lengths</li>
                <li>Corners can be different sizes</li>
                <li>Examples: Rectangle (if it's not a square), any shape with sides that don't match, blob shapes, cloud shapes</li>
            </ul>
            <p><strong>How to Make Shapes with Clay:</strong></p>
            <ol>
                <li>Roll clay into a ball for a circle (then flatten for a pancake circle!)</li>
                <li>Use sticks to press straight lines into clay to make squares and triangles</li>
                <li>Shape clay with your hands to make irregular shapes like puddles or clouds</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Regular Examples</div>
                <p>A chess board has regular squares - all exactly the same size and shape. A stop sign is a regular octagon (8 equal sides). A die shows perfect squares!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud"></i> Irregular Examples</div>
                <p>A puddle of water on the ground has an irregular shape. A cloud in the sky, a leaf, or a rock - these are all irregular shapes because their sides aren't equal.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-lizard"></i> Clay Creations</div>
                <p>Clay is perfect for making shapes because you can squish it, roll it, cut it, and mold it. Press sticks into clay to make straight edges for regular shapes.</p>
            </div>
        `,
        taskInstructions: "Create regular and irregular shapes using clay and sticks, then identify and compare them.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Clay Regular Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using clay or play dough, create these regular shapes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A circle (roll into a ball, then flatten)</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• A square (use sticks to make straight edges)</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• A triangle (use sticks to make 3 straight edges)</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Clay Irregular Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now use clay to create irregular shapes (no rules, just your imagination!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A cloud shape</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• A puddle shape</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• A shape you invent (give it a name!)</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>My shape's name: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Stick and Clay Together</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use sticks and clay together to make a shape. Press the sticks into the clay to create the outline:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Is your stick-and-clay shape regular or irregular? How can you tell?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Regular vs. Irregular - Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw one regular shape and one irregular shape:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Regular Shape</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Irregular Shape</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What is different about your two shapes?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Shape Gallery Walk</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Walk around and look at your classmates' shapes. Which one is your favorite? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "At home, use clay, dough, or even wet sand to make 2 regular shapes and 2 irregular shapes. Show them to someone in your family and explain the difference.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek7);
    console.log("grade1-mathscience-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek7);
    console.log("grade1-mathscience-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek7',
        metadata: grade1MathScienceWeek7.metadata,
        days: grade1MathScienceWeek7
    });
    console.log("grade1-mathscience-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek7 = grade1MathScienceWeek7;
console.log("grade1-mathscience-week7.js loaded and registered successfully");