// Grade 5 Mathematics - Term 3 Week 5 Data
const grade5MathematicsWeek5 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 5,
        title: "Advanced Area",
        description: "Exploring area of triangles, trapeziums, and composite shapes"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Area Measurement",
        subtopic: "The Triangle Secret (Deriving Area Formula)",
        lessonContent: `
            <p>Welcome to our exploration of triangles! Today we'll discover the secret relationship between triangles and rectangles.</p>
            <p><strong>Key Question:</strong> Why is a triangle's area exactly half of a rectangle's area?</p>
            <p><strong>Introduction:</strong> You already know that the area of a rectangle is length × width (or base × height). But what about a triangle? Today we'll discover the formula together!</p>
            <p><strong>The Big Discovery:</strong></p>
            <ol>
                <li>Take any rectangle with base (b) and height (h)</li>
                <li>Draw a diagonal line from one corner to the opposite corner</li>
                <li>This cuts the rectangle into TWO identical triangles</li>
                <li>Therefore, each triangle has HALF the area of the rectangle</li>
            </ol>
            <p><strong>The Triangle Area Formula:</strong></p>
            <div style="background-color: #FFF3E0; padding: 15px; border-radius: 8px; text-align: center; margin: 15px 0;">
                <strong>Area of a Triangle = ½ × base × height</strong><br>
                or <strong>A = ½ × b × h</strong>
            </div>
            <p><strong>Important Notes:</strong></p>
            <ul>
                <li>The "height" must be perpendicular (at a right angle) to the base</li>
                <li>Any side can be the base - just measure the height straight up from that side</li>
                <li>This works for ALL triangles: right-angled, acute, and obtuse!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> The Folding Proof</div>
                <p>Cut a rectangle out of paper. Fold it along the diagonal. You'll see the two triangles match perfectly! Each is exactly half of the rectangle.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Triangle</div>
                <p>Imagine a rectangular pizza cut diagonally. If the whole pizza has area 48 square inches, each triangular slice has area 24 square inches!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Try It Yourself</div>
                <p>Rectangle: base = 10 cm, height = 6 cm → Area = 60 cm²<br>Triangle with same base and height: ½ × 10 × 6 = 30 cm² (exactly half!)</p>
            </div>
        `,
        taskInstructions: "Discover and practice the triangle area formula through hands-on activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Rectangle-to-Triangle Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a rectangle with base = 8 cm and height = 5 cm:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Calculate the area of your rectangle:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a diagonal line from one corner to the opposite corner. What shape do you get? 
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the area of ONE triangle? Explain how you know:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find the area of each triangle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) base = 12 cm, height = 7 cm → Area = ______</div>
                        <div>b) base = 9 m, height = 4 m → Area = ______</div>
                        <div>c) base = 15 mm, height = 10 mm → Area = ______</div>
                        <div>d) base = 20 cm, height = 8 cm → Area = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A triangular garden has a base of 14 meters and a height of 6 meters. What is its area?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A pennant flag is triangular with base 25 cm and height 30 cm. How much fabric is needed?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 triangular objects at home (e.g., a slice of bread, a roof shape, a ramp). Estimate or measure the base and height, then calculate the area of each.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Area Measurement",
        subtopic: "Triangle Practical (Right-Angled Triangles)",
        lessonContent: `
            <p>Today we'll put our new formula into practice by measuring and calculating the area of real right-angled triangles!</p>
            <p><strong>Key Question:</strong> How can we measure the base and height of a right-angled triangle in real life?</p>
            <p><strong>Review - Right-Angled Triangles:</strong></p>
            <ul>
                <li>A right-angled triangle has one 90-degree angle (a square corner)</li>
                <li>The two sides that form the right angle are called the "legs"</li>
                <li>In a right-angled triangle, the legs can be used as base AND height!</li>
            </ul>
            <p><strong>Measuring Tips:</strong></p>
            <ul>
                <li>Use a ruler or measuring tape for straight sides</li>
                <li>Make sure your measurements are in the same unit (cm, m, mm)</li>
                <li>If the triangle is on paper, trace it first</li>
                <li>For real objects, measure along the edges where possible</li>
            </ul>
            <div style="background-color: #E8F5E9; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>Remember:</strong> Area = ½ × base × height<br>
                For right-angled triangles, the two shorter sides are the base and height!
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Real-World Example</div>
                <p>A right-angled triangular shelf has legs of 40 cm and 30 cm. Area = ½ × 40 × 30 = ½ × 1200 = 600 cm².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flag-checkered"></i> Race Track Corner</div>
                <p>A triangular corner piece of a race track has sides of 5 m and 12 m (right angle between them). Area = ½ × 5 × 12 = 30 m².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Classroom Practice</div>
                <p>Your math textbook has a right-angled triangle diagram. If the base is 8 cm and height is 6 cm, area = 24 cm².</p>
            </div>
        `,
        taskInstructions: "Measure, calculate, and compare areas of different right-angled triangles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Measuring Right-Angled Triangles</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each right-angled triangle below, measure the base and height, then calculate the area:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Triangle A:</strong> (Right angle with legs measuring ___ cm and ___ cm)</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc; text-align: center; padding-top: 35px;">[Right-angled triangle diagram]</div>
                        <div>Base = ____ cm &nbsp;&nbsp; Height = ____ cm &nbsp;&nbsp; Area = ____ cm²</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 20px;">
                        <div><strong>Triangle B:</strong> (Right angle with legs measuring ___ cm and ___ cm)</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px dashed #ccc; text-align: center; padding-top: 45px;">[Different right-angled triangle diagram]</div>
                        <div>Base = ____ cm &nbsp;&nbsp; Height = ____ cm &nbsp;&nbsp; Area = ____ cm²</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real Object Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find a right-angled triangle shape in your classroom or draw one using a ruler and set square. Measure its base and height and calculate the area:
                    <div class="answer-space" style="height: 80px;"></div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which triangle (A or B) had a larger area? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If you doubled the height of Triangle A, how would the area change?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A right-angled triangle has an area of 50 cm². If the height is 10 cm, what is the base?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three right-angled triangle objects at home. Measure their legs, calculate the area of each, and record your findings in a table.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Area Measurement",
        subtopic: "The Trapezium Challenge",
        lessonContent: `
            <p>Today we'll take on a new challenge: finding the area of a trapezium!</p>
            <p><strong>Key Question:</strong> How can we find the area of a shape with two parallel sides of different lengths?</p>
            <p><strong>What is a Trapezium?</strong></p>
            <ul>
                <li>A quadrilateral (4-sided shape) with ONE pair of parallel sides</li>
                <li>The parallel sides are called the "bases" (usually labeled a and b)</li>
                <li>The distance between the parallel sides is the "height"</li>
            </ul>
            <div style="background-color: #E3F2FD; padding: 15px; border-radius: 8px; text-align: center; margin: 15px 0;">
                <strong>Area of a Trapezium = ½ × (a + b) × h</strong><br>
                where a and b are the lengths of the parallel sides, and h is the perpendicular height
            </div>
            <p><strong>Why Does This Formula Work?</strong></p>
            <ul>
                <li>A trapezium can be split into a rectangle and two triangles</li>
                <li>It can also be seen as the "average" of the two bases multiplied by the height</li>
                <li>Think: (a + b) ÷ 2 gives the average width, then multiply by height!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Step-by-Step Example 1</div>
                <p>Trapezium: parallel sides a = 8 cm, b = 12 cm, height = 5 cm<br>
                Step 1: a + b = 8 + 12 = 20 cm<br>
                Step 2: ½ × 20 = 10 cm (average width)<br>
                Step 3: 10 × 5 = 50 cm²<br>
                Answer: Area = 50 cm²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Real-World Trapezium</div>
                <p>A swimming pool has parallel sides of 10 m and 6 m, with a width (height) of 4 m. Area = ½ × (10+6) × 4 = ½ × 16 × 4 = 32 m².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Bridge Support</div>
                <p>A trapezoidal bridge support has parallel sides 3 m and 5 m, height 2 m. Area = ½ × (3+5) × 2 = ½ × 8 × 2 = 8 m².</p>
            </div>
        `,
        taskInstructions: "Learn and practice the trapezium area formula with real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the area of each trapezium:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) a = 6 cm, b = 10 cm, h = 4 cm → Area = ______</div>
                        <div>b) a = 5 m, b = 9 m, h = 3 m → Area = ______</div>
                        <div>c) a = 12 mm, b = 8 mm, h = 7 mm → Area = ______</div>
                        <div>d) a = 15 cm, b = 25 cm, h = 10 cm → Area = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Calculate</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a trapezium with a = 7 cm, b = 11 cm, h = 5 cm:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate the area of your trapezium and show your working:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A garden bed is shaped like a trapezium. The parallel sides are 8 m and 12 m. The distance between them is 5 m. What is the area of the garden bed?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A trapezoidal window has parallel sides of 60 cm and 90 cm, and a height of 50 cm. How much glass is needed?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Find the Missing Side</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A trapezium has area 48 cm², height 6 cm, and one parallel side is 7 cm. Find the length of the other parallel side.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look for trapezium-shaped objects at home (a table edge, a flower bed, a handbag). Measure the two parallel sides and the height, then calculate the area.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Area Measurement",
        subtopic: "Composite Shapes (Part 1) - Breaking Complex Shapes",
        lessonContent: `
            <p>Today we'll learn how to find the area of complex shapes by breaking them into simpler parts!</p>
            <p><strong>Key Question:</strong> How can we find the area of a shape that isn't a simple rectangle, triangle, or trapezium?</p>
            <p><strong>The Strategy: Break It Down!</strong></p>
            <ol>
                <li>Look at the complex shape carefully</li>
                <li>Divide it into rectangles, triangles, and trapeziums (shapes you know)</li>
                <li>Calculate the area of each simple shape separately</li>
                <li>ADD all the areas together to find the total area</li>
            </ol>
            <p><strong>Important Tips:</strong></p>
            <ul>
                <li>Draw dotted lines to show how you divided the shape</li>
                <li>Label all measurements clearly</li>
                <li>Sometimes you need to find missing measurements by looking at the whole shape</li>
                <li>Check that you didn't miss any part or count anything twice</li>
            </ul>
            <div style="background-color: #FCE4EC; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>Remember:</strong> Total Area = Sum of all parts!<br>
                If your shape looks like a combination of shapes, treat it that way.
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> The L-Shape Method</div>
                <p>An L-shaped figure can be split into two rectangles. Find the area of each rectangle, then add them together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-house-damage"></i> House Shape</div>
                <p>A house shape (square/rectangle + triangle on top): Find rectangle area + triangle area = total area.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Step-by-Step Composite</div>
                <p>Shape: rectangle (8×5=40) + triangle (½×4×3=6) = total area 46 cm².</p>
            </div>
        `,
        taskInstructions: "Break down composite shapes into rectangles and triangles, then calculate total area.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each composite shape. Draw dotted lines to show how you would split it:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc; text-align: center; padding-top: 45px;">[L-Shape]</div>
                            <p style="text-align: center; font-size: 12px;">Shape 1</p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc; text-align: center; padding-top: 45px;">[T-Shape]</div>
                            <p style="text-align: center; font-size: 12px;">Shape 2</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate Composite Areas</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the total area. Show how you split the shape and calculate each part:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; text-align: center; padding-top: 60px;">[Rectangle with triangle on top: base 10 cm, height rectangle 4 cm, triangle height 3 cm]</div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Find the total area of this shape:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; text-align: center; padding-top: 60px;">[Two rectangles joined: one 6×4, one 3×2]</div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find Missing Measurements</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> For this composite shape, find the missing side length before calculating total area:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; text-align: center; padding-top: 60px;">[L-shape with some measurements given and one missing]</div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a composite shape made of at least two rectangles. Measure all sides, then calculate the total area. Bring your drawing to class tomorrow.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Area Measurement",
        subtopic: "Composite Shapes (Part 2) - The Floor Plan Project",
        lessonContent: `
            <p>Today we'll apply everything we've learned this week to a real-world project: finding the area of an L-shaped room!</p>
            <p><strong>Key Question:</strong> How can architects and builders find the total floor area of rooms with irregular shapes?</p>
            <p><strong>The L-Shaped Room Challenge:</strong></p>
            <ul>
                <li>An L-shaped room can be thought of as two rectangles joined together</li>
                <li>We need to find both rectangle areas and add them</li>
                <li>Sometimes you need to find missing measurements by using the given dimensions</li>
            </ul>
            <p><strong>Problem-Solving Steps for Floor Plans:</strong></p>
            <ol>
                <li>Draw or look at the floor plan carefully</li>
                <li>Find a way to split the L-shape into two rectangles (or more)</li>
                <li>Identify or calculate all needed measurements (length and width of each rectangle)</li>
                <li>Calculate area of each rectangle using length × width</li>
                <li>Add areas together to find total floor area</li>
            </ol>
            <p><strong>Real-World Connection:</strong></p>
            <ul>
                <li>Builders use this to calculate how much flooring (tiles, carpet, wood) is needed</li>
                <li>Painters use this to figure out how much paint to buy for walls (with other formulas!)</li>
                <li>Interior designers use area to plan furniture placement</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> L-Shaped Kitchen</div>
                <p>An L-shaped kitchen has widths: one rectangle 4 m × 3 m = 12 m², other rectangle 2 m × 3 m = 6 m². Total area = 18 m².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Missing Measurement</div>
                <p>If the total length on one side is 10 m, and one part is 6 m, the missing part must be 4 m.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tile"></i> Flooring Cost</div>
                <p>If total area is 20 m² and carpet costs $15 per m², total cost = 20 × $15 = $300.</p>
            </div>
        `,
        taskInstructions: "Complete 'The Floor Plan Project' - find the total area of an L-shaped room and answer related questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Floor Plan Project</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Below is the floor plan of an L-shaped room. All measurements are in meters:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2; text-align: center; padding-top: 80px;">
                        [L-shaped floor plan diagram showing: whole length = 12 m, whole width = 8 m, the L cut-out = 5 m wide by 4 m deep]
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> How will you split this L-shaped room into two rectangles? Draw dotted lines on the diagram:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Label the dimensions of each rectangle and calculate the area of each:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the total floor area of the room?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If tiles cost $12 per square meter, how much will it cost to tile the entire floor?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A roll of carpet covers 15 m². How many rolls are needed to cover this room?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Extension Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Design your own L-shaped room with different measurements. Draw it below and calculate the total area:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> What was the most challenging part of finding the area of composite shapes this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> How can these area skills help you in real life?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw the floor plan of a room in your house (or a combination of two rooms). Measure the dimensions (in meters or feet) and calculate the total area. Write a paragraph explaining how you split the shape to find the area.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathematicsWeek5);
    console.log("grade5-mathematics-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathematicsWeek5);
    console.log("grade5-mathematics-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathematicsWeek5',
        metadata: grade5MathematicsWeek5.metadata,
        days: grade5MathematicsWeek5
    });
    console.log("grade5-mathematics-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathematicsWeek5 = grade5MathematicsWeek5;
console.log("grade5-mathematics-week5.js loaded and registered successfully");