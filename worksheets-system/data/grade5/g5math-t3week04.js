// Grade 5 Mathematics - Term 3 Week 4 Data
const grade5MathWeek4 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 4,
        title: "Perimeter & Introduction to Area",
        description: "Measuring boundaries, calculating perimeter of triangles, parallelograms, and trapeziums, plus introduction to area of parallelograms and rhombuses"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Measuring Boundaries - Perimeter of Triangles and Parallelograms",
        lessonContent: `
            <p>Welcome to our exploration of perimeter! Today we'll learn how to measure the distance around shapes.</p>
            <p><strong>Key Question:</strong> How do we find the total distance around a shape?</p>
            <p><strong>What is Perimeter?</strong></p>
            <p>The <strong>perimeter</strong> is the total distance around the outside of a shape. Think of it like walking around the edge of a playground - the distance you walk is the perimeter.</p>
            <p><strong>How to Calculate Perimeter:</strong></p>
            <ul>
                <li>Add up the lengths of <strong>all sides</strong> of the shape</li>
                <li>Perimeter = side + side + side + ... (all sides added together)</li>
                <li>We measure perimeter in units like: cm, m, mm, km</li>
            </ul>
            <p><strong>Perimeter of a Triangle:</strong></p>
            <p>A triangle has 3 sides. To find its perimeter, add all three side lengths.</p>
            <p><strong>Formula:</strong> Perimeter of triangle = side a + side b + side c</p>
            <p><strong>Perimeter of a Parallelogram:</strong></p>
            <p>A parallelogram has 4 sides with opposite sides equal in length.</p>
            <p><strong>Formula:</strong> Perimeter of parallelogram = 2 × (length + width)<br>
            or Perimeter = side a + side b + side a + side b</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-play"></i> Example 1: Triangle Perimeter</div>
                <p>A triangle has sides of 5 cm, 7 cm, and 9 cm.<br>
                <strong>Perimeter = 5 cm + 7 cm + 9 cm = 21 cm</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Example 2: Parallelogram Perimeter</div>
                <p>A parallelogram has a length of 8 cm and a width of 3 cm.<br>
                <strong>Perimeter = 2 × (8 cm + 3 cm) = 2 × 11 cm = 22 cm</strong><br>
                Or: 8 cm + 3 cm + 8 cm + 3 cm = 22 cm</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Real World Connection</div>
                <p>Farmers use perimeter to calculate how much fencing they need around a field. Gardeners measure perimeter to plan borders.</p>
            </div>
        `,
        taskInstructions: "Calculate the perimeter of various triangles and parallelograms by adding all sides.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Triangle Perimeter Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the perimeter of each triangle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Side lengths: 4 cm, 6 cm, 8 cm</div>
                        <div>Perimeter = _________ cm</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 10px;">b) Side lengths: 12 m, 15 m, 9 m</div>
                        <div>Perimeter = _________ m</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 10px;">c) Side lengths: 7 cm, 7 cm, 10 cm (isosceles triangle)</div>
                        <div>Perimeter = _________ cm</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Parallelogram Perimeter Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the perimeter of each parallelogram:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Length = 10 cm, Width = 4 cm</div>
                        <div>Perimeter = _________ cm</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 10px;">b) Length = 15 m, Width = 7 m</div>
                        <div>Perimeter = _________ m</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 10px;">c) Sides: 9 cm and 6 cm (opposite sides equal)</div>
                        <div>Perimeter = _________ cm</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Mr. Lee wants to put a fence around his triangular garden. The sides measure 25 m, 30 m, and 18 m. How many meters of fencing does he need?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A rectangular (parallelogram) swimming pool has a length of 25 m and a width of 10 m. What is the perimeter of the pool?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Calculate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a triangle with sides 6 cm, 8 cm, and 10 cm. Label the sides and calculate the perimeter.
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home that are shaped like triangles or parallelograms. Measure their sides and calculate their perimeters.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "The Trapezium Rim - Practical Measurement",
        lessonContent: `
            <p>Today we'll get hands-on! We'll measure real objects around our classroom and calculate their perimeters.</p>
            <p><strong>Key Question:</strong> How can we measure the perimeter of objects in the real world?</p>
            <p><strong>What is a Trapezium (Trapezoid)?</strong></p>
            <p>A <strong>trapezium</strong> (also called a trapezoid) is a four-sided shape with <strong>one pair of parallel sides</strong>. The other two sides are not parallel.</p>
            <p><strong>Perimeter of a Trapezium:</strong></p>
            <p>Just like any shape, the perimeter of a trapezium is the sum of all four sides.</p>
            <p><strong>Formula:</strong> Perimeter = side a + side b + side c + side d</p>
            <p><strong>Practical Measurement:</strong></p>
            <p>Today we'll use rulers and measuring tapes to find the perimeter of:</p>
            <ul>
                <li>School desks (rectangles/parallelograms)</li>
                <li>Floor tiles (squares or rectangles)</li>
                <li>Table tops</li>
                <li>Books or notebooks</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Example: Trapezium Perimeter</div>
                <p>A trapezium has sides measuring 5 cm, 7 cm, 4 cm, and 6 cm.<br>
                <strong>Perimeter = 5 + 7 + 4 + 6 = 22 cm</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Desk Measurement</div>
                <p>A student desk measures: length = 60 cm, width = 40 cm.<br>
                <strong>Perimeter = 2 × (60 + 40) = 2 × 100 = 200 cm</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Measurement Tips</div>
                <p>Always measure to the nearest centimeter. For irregular shapes, measure each side carefully and add them up!</p>
            </div>
        `,
        taskInstructions: "Measure and calculate the perimeter of real objects in the classroom.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Desk Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Measure your desk:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Length = _________ cm</div>
                        <div>Width = _________ cm</div>
                        <div>Perimeter = _________ cm</div>
                        <div>Show your working:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Floor Tile Perimeter</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose one floor tile in the classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Shape of tile: _________</div>
                        <div>Side 1 = _________ cm</div>
                        <div>Side 2 = _________ cm</div>
                        <div>Side 3 (if applicable) = _________ cm</div>
                        <div>Side 4 (if applicable) = _________ cm</div>
                        <div>Perimeter = _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Trapezium Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find or draw a trapezium shape. Measure all four sides:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">
                        <div>Side a = _________ cm</div>
                        <div>Side b = _________ cm</div>
                        <div>Side c = _________ cm</div>
                        <div>Side d = _________ cm</div>
                        <div>Perimeter = _________ cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which object had the largest perimeter? Which had the smallest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to measure things accurately?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Choose one room in your house. Measure the perimeter of three different furniture items and record your findings.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "The Area Concept - From Parallelogram to Rectangle",
        lessonContent: `
            <p>Today we're moving from perimeter (the outside) to <strong>area</strong> (the inside)!</p>
            <p><strong>Key Question:</strong> How much space does a shape cover?</p>
            <p><strong>What is Area?</strong></p>
            <p><strong>Area</strong> is the amount of space <strong>inside</strong> a shape. While perimeter measures the distance around, area measures the surface covered.</p>
            <p><strong>Units of Area:</strong></p>
            <p>We measure area in square units: cm², m², mm², km².</p>
            <p><strong>Deriving the Formula for a Parallelogram:</strong></p>
            <p>Here's the magic trick! We can find the area of a parallelogram by <strong>cutting and moving</strong> a piece to make it into a rectangle.</p>
            <p><strong>Step-by-Step:</strong></p>
            <ol>
                <li>Cut a right triangle off one end of the parallelogram</li>
                <li>Slide that triangle to the other side</li>
                <li>The shape becomes a rectangle!</li>
                <li>The rectangle has the same area as the original parallelogram</li>
                <li>Area of rectangle = length × width</li>
                <li>So Area of parallelogram = base × height</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> The Cut-and-Move Trick</div>
                <p>Imagine a parallelogram that is tilted. If you cut off the slanted part and move it to the other side, you get a perfect rectangle!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grid"></i> Counting Squares</div>
                <p>If you draw a shape on grid paper, you can count the squares inside to find its area. This is how we discover formulas!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Why Area Matters</div>
                <p>Area helps us: buy the right amount of paint for a wall, carpet for a floor, or grass seed for a lawn.</p>
            </div>
        `,
        taskInstructions: "Use the cut-and-move method to transform a parallelogram into a rectangle and derive the area formula.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cut and Move Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On grid paper (or in the space below), draw a parallelogram:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw a parallelogram here]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a dashed line showing where you would cut to create a right triangle:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Show your cut line]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the rectangle formed after moving the triangle:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw the rectangle shape]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Understanding the Formula</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The area of a rectangle = _________ × _________</div>
                        <div>The area of a parallelogram = _________ × _________</div>
                        <div>(Note: The height must be perpendicular to the base)</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why does cutting and moving a triangle from a parallelogram create a rectangle with the same area?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Use grid paper to draw a parallelogram. Cut it out, cut off a triangle, and rearrange it into a rectangle. Glue it into your notebook.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Formula: Area of Parallelogram",
        lessonContent: `
            <p>Today we'll practice using the area formula for parallelograms!</p>
            <p><strong>Key Question:</strong> How do we calculate the area of any parallelogram?</p>
            <p><strong>The Area Formula for a Parallelogram:</strong></p>
            <p><strong>Area = Base × Height</strong></p>
            <p>Where:</p>
            <ul>
                <li><strong>Base (b)</strong> = the length of one side (usually the bottom)</li>
                <li><strong>Height (h)</strong> = the perpendicular distance between the base and the opposite side (straight up, not slanted)</li>
            </ul>
            <p><strong>Important:</strong> The height is NOT the slanted side length. It must be measured at a right angle (90°) to the base.</p>
            <p><strong>Units:</strong> Area is measured in square units (cm², m², etc.)</p>
            <p><strong>Steps to Find Area of a Parallelogram:</strong></p>
            <ol>
                <li>Identify the base (choose one side)</li>
                <li>Measure or find the perpendicular height</li>
                <li>Multiply: base × height</li>
                <li>Write your answer with square units</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Example 1</div>
                <p>A parallelogram has a base of 8 cm and a height of 5 cm.<br>
                <strong>Area = 8 cm × 5 cm = 40 cm²</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Example 2</div>
                <p>A parallelogram has a base of 12 m and a height of 7 m.<br>
                <strong>Area = 12 m × 7 m = 84 m²</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Example 3 (Finding Height)</div>
                <p>A parallelogram has an area of 50 cm² and a base of 10 cm.<br>
                <strong>Height = Area ÷ Base = 50 ÷ 10 = 5 cm</strong></p>
            </div>
        `,
        taskInstructions: "Practice calculating the area of parallelograms using Area = Base × Height.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Direct Calculation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the area of each parallelogram:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Base = 7 cm, Height = 4 cm</div>
                        <div>Area = _________ cm²</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">b) Base = 15 m, Height = 8 m</div>
                        <div>Area = _________ m²</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">c) Base = 9 mm, Height = 6 mm</div>
                        <div>Area = _________ mm²</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding Missing Measurements</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the missing measurement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Area = 48 cm², Base = 8 cm, Height = _________ cm</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">b) Area = 72 m², Height = 6 m, Base = _________ m</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">c) Base = 12 cm, Height = 5 cm, Area = _________ cm²</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A parallelogram-shaped garden has a base of 20 m and a height of 15 m. What is its area?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A parallelogram-shaped parking lot has an area of 240 m². If its base is 20 m, what is its height?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Calculate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a parallelogram with a base of 10 cm and a height of 4 cm. Label the base and height. Calculate the area.
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find the area of 3 parallelogram-shaped objects at home (picture frames, tiles, tables). Measure the base and height and calculate.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Rhombus Perimeter",
        lessonContent: `
            <p>Today we'll explore a special type of parallelogram: the <strong>rhombus</strong>!</p>
            <p><strong>Key Question:</strong> Why can we calculate a rhombus perimeter by multiplying one side by 4?</p>
            <p><strong>What is a Rhombus?</strong></p>
            <p>A <strong>rhombus</strong> is a special parallelogram where <strong>all four sides are equal in length</strong>. It looks like a slanted square (a diamond shape).</p>
            <p><strong>Properties of a Rhombus:</strong></p>
            <ul>
                <li>All 4 sides are equal</li>
                <li>Opposite sides are parallel</li>
                <li>Opposite angles are equal</li>
            </ul>
            <p><strong>Perimeter of a Rhombus:</strong></p>
            <p>Since all four sides are equal, we can multiply one side by 4.</p>
            <p><strong>Formula:</strong> Perimeter = 4 × side</p>
            <p>Or: Perimeter = side + side + side + side</p>
            <p><strong>Comparison with Other Shapes:</strong></p>
            <ul>
                <li><strong>Square:</strong> All sides equal → Perimeter = 4 × side (same as rhombus!)</li>
                <li><strong>Rectangle:</strong> Opposite sides equal → Perimeter = 2 × (length + width)</li>
                <li><strong>Triangle:</strong> All sides can be different → Perimeter = side a + side b + side c</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gem"></i> Example 1: Rhombus Perimeter</div>
                <p>A rhombus has a side length of 7 cm.<br>
                <strong>Perimeter = 4 × 7 cm = 28 cm</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gem"></i> Example 2: Finding Side Length</div>
                <p>A rhombus has a perimeter of 36 cm.<br>
                <strong>Side length = 36 cm ÷ 4 = 9 cm</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gem"></i> Rhombus vs. Square</div>
                <p>A square is actually a special type of rhombus (with 90° angles)! Both have 4 equal sides, so both use the same perimeter formula.</p>
            </div>
        `,
        taskInstructions: "Calculate rhombus perimeters and compare with other shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Rhombus Perimeter Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the perimeter of each rhombus:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Side = 5 cm → Perimeter = _________ cm</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">b) Side = 12 m → Perimeter = _________ m</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">c) Side = 8.5 cm → Perimeter = _________ cm</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding the Side Length</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the side length of each rhombus:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Perimeter = 40 cm → Side = _________ cm</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">b) Perimeter = 28 m → Side = _________ m</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        
                        <div style="margin-top: 10px;">c) Perimeter = 64 mm → Side = _________ mm</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shape Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Shape</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Side Length(s)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Perimeter Formula</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Square</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">side = 6 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Rectangle</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">length = 8 cm, width = 3 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Rhombus</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">side = 5 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Triangle</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">sides: 4 cm, 5 cm, 6 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A rhombus-shaped window has a perimeter of 240 cm. What is the length of each side?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A rhombus-shaped garden has sides of 15 m each. How many meters of fencing are needed to enclose it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why can we multiply one side by 4 to find the perimeter of a rhombus, but not for a rectangle?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw 3 different rhombuses with different side lengths. Calculate the perimeter for each. Then, find or draw one rectangle with the same perimeter as one of your rhombuses.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek4);
    console.log("grade5-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek4);
    console.log("grade5-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek4',
        metadata: grade5MathWeek4.metadata,
        days: grade5MathWeek4
    });
    console.log("grade5-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek4 = grade5MathWeek4;
console.log("grade5-math-week4.js loaded and registered successfully");