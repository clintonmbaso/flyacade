// Grade 6 Mathematics - Term 3 Week 4 Data
const grade6MathWeek4 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 4,
        title: "Edges and Surface Area",
        description: "Calculating total edge length and surface area of cubes and cuboids"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Geometry - 3D Shapes",
        subtopic: "Edges of a Cube",
        lessonContent: `
            <p>Welcome to our exploration of cubes! Today we'll learn about the edges of a cube and how to calculate their total length.</p>
            <p><strong>Key Question:</strong> If you straightened out all the edges of a cube, how long would the line be?</p>
            <p><strong>Introduction:</strong> A cube is a special 3D shape where all sides (faces) are squares of equal size. Think of a dice or a Rubik's cube!</p>
            <p><strong>Properties of a Cube:</strong></p>
            <ul>
                <li><strong>Faces:</strong> 6 square faces (all identical)</li>
                <li><strong>Edges:</strong> 12 edges (all equal in length)</li>
                <li><strong>Vertices:</strong> 8 corners</li>
            </ul>
            <p><strong>Calculating Total Edge Length:</strong></p>
            <p>Since a cube has 12 edges, each of length <strong>s</strong> (side length), the total length of all edges is:</p>
            <p style="text-align: center; font-size: 1.4em; font-weight: bold; color: #4A90E2;">Total Edge Length = 12 × s</p>
            <p><strong>Example:</strong> If a cube has side length 5 cm, total edge length = 12 × 5 = 60 cm</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Real-World Cube</div>
                <p>A standard dice has side length of about 1.6 cm. Total edge length = 12 × 1.6 = 19.2 cm. That's almost the length of a pencil!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Rubik's Cube</div>
                <p>A Rubik's cube often has side length 5.7 cm. Total edge length = 12 × 5.7 = 68.4 cm - longer than your forearm!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Storage Cube</div>
                <p>A storage cube with side 30 cm has total edge length = 12 × 30 = 360 cm = 3.6 meters! That's taller than a door!</p>
            </div>
        `,
        taskInstructions: "Calculate the total edge length of cubes with different side lengths.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the table:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Side Length (s)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Total Edge Length (12 × s)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">4 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">7 m</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">2.5 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">10 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sarah has a cube-shaped gift box with side length 12 cm. She wants to wrap a ribbon around all the edges. How many centimeters of ribbon does she need?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A cube has total edge length of 96 cm. What is the length of one side?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you have 3 meters of wire and want to make the frame of a cube, what is the maximum side length possible?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a cube-shaped object at home (box, dice, container). Measure its side length and calculate the total edge length. Draw and label your cube.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry - 3D Shapes",
        subtopic: "Edges of a Cuboid",
        lessonContent: `
            <p>Today we'll learn about cuboids - like cubes but with different lengths, widths, and heights!</p>
            <p><strong>Key Question:</strong> How do we calculate total edge length when the edges are not all equal?</p>
            <p><strong>What is a Cuboid?</strong></p>
            <p>A cuboid is a 3D shape with 6 rectangular faces. Think of a shoebox, a brick, or a book!</p>
            <p><strong>Properties of a Cuboid:</strong></p>
            <ul>
                <li><strong>Faces:</strong> 6 rectangular faces (opposite faces are identical)</li>
                <li><strong>Edges:</strong> 12 edges</li>
                <li><strong>Vertices:</strong> 8 corners</li>
            </ul>
            <p><strong>Edge Lengths in a Cuboid:</strong></p>
            <ul>
                <li>4 edges of length <strong>l</strong> (length)</li>
                <li>4 edges of length <strong>w</strong> (width)</li>
                <li>4 edges of length <strong>h</strong> (height)</li>
            </ul>
            <p><strong>Calculating Total Edge Length:</strong></p>
            <p style="text-align: center; font-size: 1.4em; font-weight: bold; color: #4A90E2;">Total Edge Length = 4 × (l + w + h)</p>
            <p><strong>Example:</strong> If a cuboid has length = 8 cm, width = 5 cm, height = 3 cm, then total edge length = 4 × (8 + 5 + 3) = 4 × 16 = 64 cm</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Shoebox</div>
                <p>A shoebox might measure: length 30 cm, width 20 cm, height 10 cm. Total edge length = 4 × (30+20+10) = 4 × 60 = 240 cm (2.4 meters)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Textbook</div>
                <p>A math textbook: length 28 cm, width 21 cm, height 2 cm. Total edge length = 4 × (28+21+2) = 4 × 51 = 204 cm.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Shipping Container</div>
                <p>A standard shipping container: length 6 m, width 2.4 m, height 2.6 m. Total edge length = 4 × (6+2.4+2.6) = 4 × 11 = 44 meters!</p>
            </div>
        `,
        taskInstructions: "Calculate the total edge length of cuboids with different dimensions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the table:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Length (l)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Width (w)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Height (h)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Total Edge Length</th>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">10 cm</td><td style="padding: 8px; border: 1px solid #ddd;">6 cm</td><td style="padding: 8px; border: 1px solid #ddd;">4 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">15 cm</td><td style="padding: 8px; border: 1px solid #ddd;">10 cm</td><td style="padding: 8px; border: 1px solid #ddd;">8 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">7 m</td><td style="padding: 8px; border: 1px solid #ddd;">3 m</td><td style="padding: 8px; border: 1px solid #ddd;">2 m</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A fish tank measures length 50 cm, width 30 cm, and height 40 cm. How much plastic edging is needed to go around all the edges?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A box has total edge length of 120 cm. If the length is 12 cm, width is 8 cm, what is the height?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which has a greater total edge length: a cube with side 9 cm, or a cuboid with l=10 cm, w=8 cm, h=6 cm? Show your calculations.
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a cuboid-shaped object at home (cereal box, tissue box, book). Measure its length, width, and height. Calculate total edge length.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry - 3D Shapes",
        subtopic: "Concept of Surface Area",
        lessonContent: `
            <p>Today we'll learn about surface area - the total area of all the outside faces of a 3D shape!</p>
            <p><strong>Key Question:</strong> How much wrapping paper would you need to cover a box completely?</p>
            <p><strong>What is Surface Area?</strong></p>
            <p>Surface area is the total area of all the faces (surfaces) of a 3D object. It's measured in square units (cm², m², etc.).</p>
            <p><strong>Why is Surface Area Important?</strong></p>
            <ul>
                <li>To know how much paint is needed for a wall</li>
                <li>To calculate wrapping paper for a gift</li>
                <li>To determine material needed to build something</li>
                <li>To understand heat loss in buildings</li>
            </ul>
            <p><strong>Thinking About Surface Area:</strong></p>
            <p>Imagine unfolding a box - you get a <strong>net</strong> (a flat shape made of all the faces). The surface area is the sum of the areas of all the faces in the net.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> Gift Wrapping</div>
                <p>When you wrap a gift, you need enough wrapping paper to cover every face of the box. That's the surface area!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-roller"></i> Painting a Room</div>
                <p>To paint a room, you calculate the surface area of the walls. You don't include the floor because you're not painting that!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-solar-panel"></i> Real-World Connection</div>
                <p>Solar panels are installed on roofs. Engineers calculate the surface area of the roof to know how many panels can fit.</p>
            </div>
        `,
        taskInstructions: "Understand the concept of surface area by visualizing nets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Faces</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> How many faces does each shape have?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Cube: _________ faces</div>
                        <div>• Cuboid: _________ faces</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Net Visualization</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a net (unfolded view) of a cube in the space below. Label each face "face 1" to "face 6":
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If each face of your cube net is a square of side 4 cm, what is the area of ONE face?
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Surface Area Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How is surface area different from volume? Use your own words:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name three real-life situations where you would need to calculate surface area:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 different boxes at home. For each, write down: what shape it is (cube or cuboid), how many faces it has, and what you think its surface area would be used for.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry - 3D Shapes",
        subtopic: "Surface Area of a Cube",
        lessonContent: `
            <p>Today we'll learn the formula for finding the surface area of a cube!</p>
            <p><strong>Key Question:</strong> How do we calculate the exact amount of material needed to cover a cube?</p>
            <p><strong>Recall:</strong> A cube has 6 identical square faces.</p>
            <p><strong>Finding Surface Area of a Cube:</strong></p>
            <ol>
                <li>Find the area of ONE face: side × side = s × s = s²</li>
                <li>Multiply by 6 (because there are 6 faces)</li>
            </ol>
            <p style="text-align: center; font-size: 1.4em; font-weight: bold; color: #4A90E2;">Surface Area of a Cube = 6 × s²</p>
            <p><strong>Example 1:</strong> Cube with side length 5 cm<br>
            Surface Area = 6 × 5² = 6 × 25 = 150 cm²</p>
            <p><strong>Example 2:</strong> Cube with side length 2.5 m<br>
            Surface Area = 6 × (2.5)² = 6 × 6.25 = 37.5 m²</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice"></i> Dice Surface Area</div>
                <p>A dice has side length 1.6 cm. Surface Area = 6 × (1.6)² = 6 × 2.56 = 15.36 cm². That's about the size of a postage stamp!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Rubik's Cube</div>
                <p>A Rubik's cube with side 5.7 cm: Surface Area = 6 × 32.49 = 194.94 cm². You'd need a piece of paper about the size of an A5 sheet to cover it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Storage Cube</div>
                <p>A storage cube with side 30 cm: Surface Area = 6 × 900 = 5,400 cm² = 0.54 m². That's about half a square meter of material!</p>
            </div>
        `,
        taskInstructions: "Apply the formula 6 × s² to calculate cube surface areas.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the table:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Side Length (s)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Area of One Face (s²)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Surface Area (6 × s²)</th>
                             </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">3 cm</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">6 m</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">4.5 cm</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">10 cm</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A cube-shaped gift box has side length 15 cm. How many square centimeters of wrapping paper are needed to cover it completely?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A cube has surface area of 216 cm². What is the length of one side?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which cube has a larger surface area: Cube A with side 7 cm, or Cube B with side 9 cm? How much larger?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Measure the side length of a cube-shaped object at home (a box, a container). Calculate its surface area. Write your answer with correct units.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry - 3D Shapes",
        subtopic: "Surface Area of a Cuboid",
        lessonContent: `
            <p>Today we'll learn how to calculate the surface area of a cuboid using its net!</p>
            <p><strong>Key Question:</strong> How much cardboard is needed to make a cereal box?</p>
            <p><strong>Recall:</strong> A cuboid has 6 rectangular faces. Opposite faces are identical.</p>
            <p><strong>The 3 Pairs of Identical Faces:</strong></p>
            <ul>
                <li><strong>Front & Back:</strong> Each has area = length × height (l × h) → 2 faces</li>
                <li><strong>Top & Bottom:</strong> Each has area = length × width (l × w) → 2 faces</li>
                <li><strong>Left & Right:</strong> Each has area = width × height (w × h) → 2 faces</li>
            </ul>
            <p><strong>Surface Area Formula:</strong></p>
            <p style="text-align: center; font-size: 1.3em; font-weight: bold; color: #4A90E2;">Surface Area = 2(l × w) + 2(l × h) + 2(w × h)</p>
            <p><strong>Example:</strong> Cuboid with l = 8 cm, w = 5 cm, h = 3 cm<br>
            SA = 2(8×5) + 2(8×3) + 2(5×3)<br>
            SA = 2(40) + 2(24) + 2(15)<br>
            SA = 80 + 48 + 30 = 158 cm²</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Cereal Box</div>
                <p>A cereal box: l = 25 cm, w = 8 cm, h = 35 cm<br>
                SA = 2(25×8) + 2(25×35) + 2(8×35) = 2(200) + 2(875) + 2(280) = 400 + 1,750 + 560 = 2,710 cm²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mobile-alt"></i> Phone Box</div>
                <p>A phone box: l = 15 cm, w = 8 cm, h = 2 cm<br>
                SA = 2(120) + 2(30) + 2(16) = 240 + 60 + 32 = 332 cm²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Whiteboard</div>
                <p>A whiteboard: l = 120 cm, w = 5 cm, h = 90 cm<br>
                SA = 2(600) + 2(10,800) + 2(450) = 1,200 + 21,600 + 900 = 23,700 cm² = 2.37 m²</p>
            </div>
        `,
        taskInstructions: "Use the net of a cuboid to calculate surface area by summing areas of 3 pairs of rectangles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw the Net</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a net of a cuboid with length 6 cm, width 4 cm, height 3 cm. Label each face with its dimensions:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate Surface Area</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the table and calculate total surface area:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Face Pair</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Dimensions</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Area of One Face</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Total for Both</th>
                             </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Top & Bottom</td><td style="padding: 8px; border: 1px solid #ddd;">l × w = 6 × 4</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Front & Back</td><td style="padding: 8px; border: 1px solid #ddd;">l × h = 6 × 3</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Left & Right</td><td style="padding: 8px; border: 1px solid #ddd;">w × h = 4 × 3</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr style="background-color: #f0f0f0;"><td colspan="3" style="padding: 8px; border: 1px solid #ddd;"><strong>TOTAL SURFACE AREA</strong></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate the surface area of each cuboid:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) l = 10 cm, w = 6 cm, h = 4 cm: _________ cm²</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) l = 12 m, w = 5 m, h = 3 m: _________ m²</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) l = 8 cm, w = 8 cm, h = 8 cm: _________ cm² (What shape is this?)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A rectangular shipping container measures length 6 m, width 2.4 m, height 2.6 m. How many square meters of paint are needed to cover the outside (including all faces)?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Compare the formula for surface area of a cube vs. a cuboid. How are they related?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a cuboid-shaped box at home (cereal box, shoe box, package). Measure its length, width, and height. Calculate its surface area. Draw its net and label dimensions.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek4);
    console.log("grade6-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek4);
    console.log("grade6-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek4',
        metadata: grade6MathWeek4.metadata,
        days: grade6MathWeek4
    });
    console.log("grade6-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek4 = grade6MathWeek4;
console.log("grade6-math-week4.js loaded and registered successfully");