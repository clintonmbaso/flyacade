// Grade 1 Mathematics & Science - Term 2 Week 5 Data
const grade1MathsScienceWeek5 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 2,
        week: 5,
        title: "Energy and Shapes",
        description: "Identifying energy sources, their daily uses, and exploring plane shapes in the environment"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Energy",
        subtopic: "Identifying Sources of Energy",
        lessonContent: `
            <p>Welcome, young scientists! Today we'll learn about different things that give us ENERGY!</p>
            <p><strong>Key Question:</strong> Where does energy come from?</p>
            <p><strong>What is Energy?</strong> Energy is what makes things move, work, or change. We need energy to run, play, and even to think!</p>
            <p><strong>Sources of Energy:</strong></p>
            <ol>
                <li><strong>Sun:</strong> The sun gives us light and heat. It helps plants grow and makes our planet warm.</li>
                <li><strong>Wind:</strong> Moving air that can spin windmills and fly kites.</li>
                <li><strong>Water:</strong> Flowing rivers and waterfalls can make electricity.</li>
                <li><strong>Fossil Fuels:</strong> Coal, oil, and natural gas that come from deep underground.</li>
            </ol>
            <p><strong>Fun Fact:</strong> The sun is a giant ball of hot gas that is 93 million miles away from Earth, but it still keeps us warm!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> The Sun</div>
                <p>The sun gives us light during the day. Without the sun, everything would be dark and cold!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind"></i> The Wind</div>
                <p>When you fly a kite, you are using WIND energy! Wind also helps sailboats move across the water.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Water Energy</div>
                <p>Waterfalls have lots of energy. Big dams use falling water to make electricity for our homes.</p>
            </div>
        `,
        taskInstructions: "Circle the energy sources and draw one example.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circle the Energy Sources</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each picture. Circle YES if it is an energy source. Circle NO if it is not.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☀️ Sun → YES / NO</div>
                        <div>📚 Book → YES / NO</div>
                        <div>💨 Wind → YES / NO</div>
                        <div>💧 Water → YES / NO</div>
                        <div>🪨 Rock → YES / NO</div>
                        <div>🛢️ Oil (Fossil Fuel) → YES / NO</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw an Energy Source</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one thing that gives us energy:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What did you draw? How does it give us energy?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Draw one thing that uses energy (like a light bulb, fan, or stove).",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Energy",
        subtopic: "Relating Energy Sources to Their Daily Uses",
        lessonContent: `
            <p>Today we'll learn how the energy sources we talked about are used every single day!</p>
            <p><strong>Key Question:</strong> How do we use different types of energy in our daily lives?</p>
            <p><strong>Energy Sources and Their Uses:</strong></p>
            <ol>
                <li><strong>Sun Energy:</strong> 
                    <ul>
                        <li>Helps plants grow (for food)</li>
                        <li>Gives us light during the day</li>
                        <li>Warms our planet</li>
                        <li>Solar panels turn sun energy into electricity</li>
                    </ul>
                </li>
                <li><strong>Wind Energy:</strong>
                    <ul>
                        <li>Flying kites</li>
                        <li>Sailboats moving on water</li>
                        <li>Wind turbines making electricity</li>
                    </ul>
                </li>
                <li><strong>Water Energy:</strong>
                    <ul>
                        <li>Hydropower dams make electricity</li>
                        <li>Water wheels grind grain</li>
                        <li>Flowing water moves things</li>
                    </ul>
                </li>
                <li><strong>Fossil Fuels:</strong>
                    <ul>
                        <li>Gasoline makes cars move</li>
                        <li>Natural gas heats our homes and cooks food</li>
                        <li>Coal helps make electricity</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Cars Need Energy</div>
                <p>Most cars use gasoline (a fossil fuel) to move. The gasoline makes the engine work so the wheels can spin!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Lights at Home</div>
                <p>The lights in your home use electricity. That electricity might come from the sun (solar panels), water (dams), or burning coal.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Sun Helps Plants Grow</div>
                <p>Plants need sunlight to make their own food. This is called photosynthesis. Without the sun, we wouldn't have fruits or vegetables!</p>
            </div>
        `,
        taskInstructions: "Match each energy source to its use and draw a picture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Matching Energy Sources to Uses</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match each energy source to what it does:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>🌞 Sun</div>
                                <div>💨 Wind</div>
                                <div>💧 Water</div>
                                <div>⛽ Fossil Fuels</div>
                            </div>
                            <div>
                                <div>→ Makes cars move</div>
                                <div>→ Helps plants grow</div>
                                <div>→ Flies a kite</div>
                                <div>→ Turns turbines at a dam</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Daily Energy Use</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw something you use every day that needs energy:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What energy source makes it work?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Finish this sentence: "I use ___________ energy when I ___________."
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult: What energy source does your family use to cook food? Draw what you learned.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Shapes",
        subtopic: "Exploring Different Plane Shapes in the Environment",
        lessonContent: `
            <p>Today we become shape detectives! We'll learn to find and identify plane shapes all around us.</p>
            <p><strong>Key Question:</strong> What shapes can you find in your classroom and home?</p>
            <p><strong>What are Plane Shapes?</strong> Plane shapes are flat shapes. They have length and width, but no thickness.</p>
            <p><strong>Shapes to Learn:</strong></p>
            <ol>
                <li><strong>Circle:</strong> A round shape with no corners. Like a ball or a coin.</li>
                <li><strong>Square:</strong> A shape with 4 equal sides and 4 corners. Like a cracker or a window pane.</li>
                <li><strong>Triangle:</strong> A shape with 3 sides and 3 corners. Like a slice of pizza or a roof.</li>
            </ol>
            <p><strong>Shape Detective Challenge:</strong> Look around your classroom. Can you find a circle? A square? A triangle?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> Circles Everywhere!</div>
                <p>Clocks, plates, wheels, buttons, and coins are all circles. How many circles can you see right now?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Squares Around Us</div>
                <p>Window panes, checkerboards, picture frames, and some crackers are squares. All four sides are the same length!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-play"></i> Triangles Are Tricky</div>
                <p>Triangle shapes include pizza slices, roof tops, tents, and musical triangles. They have 3 sides and 3 corners.</p>
            </div>
        `,
        taskInstructions: "Identify and color shapes in a picture, then draw your own shape scene.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the picture below. Color all the circles RED, squares BLUE, and triangles GREEN.
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 70px;">[Shape Hunt Picture: House with square window, round sun, triangular roof, round wheels on a car, square door, triangular sign]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shape Detective in the Classroom</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find and draw 3 different shapes in your classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle: <span style="border-bottom: 1px dotted #000; width: 150px; display: inline-block;"></span></div>
                        <div>Square: <span style="border-bottom: 1px dotted #000; width: 150px; display: inline-block;"></span></div>
                        <div>Triangle: <span style="border-bottom: 1px dotted #000; width: 150px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw a Shape Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture using at least one circle, one square, and one triangle:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Label each shape in your drawing:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Go on a shape hunt at home. Find one circle, one square, and one triangle. Draw or write what you found.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Shapes",
        subtopic: "Tracing the Outline of Objects Using Bottle Tops or Cut-Outs",
        lessonContent: `
            <p>Today we'll have fun tracing shapes! We'll use real objects to make shape outlines.</p>
            <p><strong>Key Question:</strong> How can we make a shape by tracing around an object?</p>
            <p><strong>What is Tracing?</strong> Tracing means going around the edge of an object with a pencil or crayon to make its shape on paper.</p>
            <p><strong>Objects We Can Trace:</strong></p>
            <ul>
                <li>Bottle tops make CIRCLES!</li>
                <li>Square blocks or sticky notes make SQUARES!</li>
                <li>Triangle-shaped cut-outs make TRIANGLES!</li>
            </ul>
            <p><strong>How to Trace:</strong></p>
            <ol>
                <li>Place your object on a piece of paper</li>
                <li>Hold the object still with one hand</li>
                <li>Use a pencil or crayon to draw around the edge</li>
                <li>Lift the object and see your shape!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wine-bottle"></i> Bottle Top Circles</div>
                <p>A plastic bottle top makes a perfect circle when you trace it! Try different sizes of bottle tops to make big and small circles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Block Shapes</div>
                <p>Square blocks or rectangular boxes make square and rectangle shapes. Even a sticky note is a square!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Triangle Tracing</div>
                <p>You can use a triangle-shaped cut-out from cardboard, or even a slice of toast cut diagonally to trace a triangle!</p>
            </div>
        `,
        taskInstructions: "Trace objects to create shape pictures and identify the shapes you made.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Trace a Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use a bottle top or round object. Trace it 3 times to make 3 circles:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Trace a Square</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use a square block, sticky note, or square cut-out. Trace it to make a square:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Trace a Triangle</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use a triangle cut-out. Trace it to make a triangle:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create a Tracing Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use different objects to trace and create a picture (like a house, a robot, or a sun):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What shapes did you use in your picture?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Which object was easiest to trace? Why?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 different objects at home. Trace them on a piece of paper. Show your family the shapes you made!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathsScienceWeek5);
    console.log("grade1-maths-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathsScienceWeek5);
    console.log("grade1-maths-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathsScienceWeek5',
        metadata: grade1MathsScienceWeek5.metadata,
        days: grade1MathsScienceWeek5
    });
    console.log("grade1-maths-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathsScienceWeek5 = grade1MathsScienceWeek5;
console.log("grade1-maths-science-week5.js loaded and registered successfully");