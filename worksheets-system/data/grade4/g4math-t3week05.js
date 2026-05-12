// Grade 4 Mathematics - Term 3 Week 5 Data
const grade4MathematicsWeek5 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 5,
        title: "Exploring Area",
        description: "Moving from measuring 'how long' something is to 'how much space' a flat surface covers using hands-on measuring, standard units, and estimation"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Intro to Area",
        lessonContent: `
            <p>Welcome to our exploration of area! Today we'll discover what area means and how to measure it using non-standard units.</p>
            <p><strong>Key Question:</strong> How much space does the surface of your desk cover?</p>
            <p><strong>Introduction:</strong> Area is the amount of surface covered by an object. Think of it this way: if perimeter is like a fence around a garden, then area is the grass growing inside the fence!</p>
            <p><strong>Key Concept:</strong> To measure area, we need to fill the space without leaving gaps.</p>
            <p><strong>Real-World Connection:</strong> We use area when buying carpet for a room, painting a wall, or covering a table with a tablecloth.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fence"></i> Fence vs. Grass</div>
                <p>The fence around your yard is the PERIMETER (the distance around). The grass growing inside is the AREA (the space inside).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Tiling a Floor</div>
                <p>When you tile a floor, you need to cover every bit of space. The number of tiles you use equals the area of the floor!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Handprint Area</div>
                <p>Trace your hand on paper. The space inside that tracing is the area of your hand. How many small squares would it take to fill it?</p>
            </div>
        `,
        taskInstructions: "Cover your desk surface with tiles and count how many you use.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Desk Cover Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the sticky notes or square paper tiles provided, cover the entire surface of your desk.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Rules:</strong></div>
                        <ul>
                            <li>Tiles must touch edge-to-edge</li>
                            <li>No gaps between tiles</li>
                            <li>No overlapping tiles</li>
                        </ul>
                    </div>
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>How many tiles did you use? _____ tiles</em></p>
                        <p><em>Describe how you arranged your tiles:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare Results</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Ask two classmates how many tiles they used:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why might different students have different numbers of tiles?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace your hand on this space. Then, draw small squares inside (edge-to-edge, no gaps) to estimate its area:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> About how many squares fit inside your hand tracing?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Find a small book or magazine at home. Cover it with small square sticky notes (or draw squares) and count how many it takes. Bring your answer to class.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Squared Grid",
        lessonContent: `
            <p>Today we'll learn how to calculate area by counting unit squares on a grid!</p>
            <p><strong>Key Question:</strong> How can a grid help us find the area of any shape?</p>
            <p><strong>Introduction:</strong> A grid makes counting area easy because it provides the "tiles" for us. Each small square on the grid is one unit of area.</p>
            <p><strong>How to Count Area on a Grid:</strong></p>
            <ol>
                <li>Count every FULL square inside the shape</li>
                <li>For HALF squares: two halves make 1 whole square</li>
                <li>Add them all together to find total area</li>
            </ol>
            <p><strong>Rectangle Rule:</strong> For rectangles, you can multiply length × width instead of counting every square!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th-large"></i> Rectangle Shortcut</div>
                <p>A rectangle that is 5 squares wide and 3 squares tall has an area of 5 × 3 = 15 square units. Much faster than counting!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Half Square Challenge</div>
                <p>If a triangle covers half of a square, count it as ½. Two half-squares = 1 whole square.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Grid Art</div>
                <p>When you draw a robot on grid paper, the area of your robot is how many grid squares it covers!</p>
            </div>
        `,
        taskInstructions: "Draw a robot on grid paper and calculate its area by counting squares.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Grid Robot Art</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the 1cm grid paper provided, draw a simple "Robot" using only straight lines that follow the grid:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate the Area</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count every full square inside your robot's outline:
                    <div class="answer-space" style="height: 40px;">Full squares: _____</div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Count any half-squares and combine them:
                    <div class="answer-space" style="height: 40px;">Half-squares: _____ (this equals _____ whole squares)</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Total area of your robot = _____ square units
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Rectangle Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> On your grid paper, draw a rectangle that is 5 squares wide and 4 squares tall.
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Find the area using multiplication (length × width):
                    <div class="answer-space" style="height: 40px;">Area = _____ × _____ = _____ square units</div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a different rectangle with an area of 12 square units:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "On grid paper (or draw your own grid), draw two different shapes that each have an area of 10 square units. Label the area of each shape.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Standard Units",
        lessonContent: `
            <p>Today we'll learn about the standard units used to measure area: square millimeters, square centimeters, and square meters!</p>
            <p><strong>Key Question:</strong> Which "square size" should we use to measure different objects?</p>
            <p><strong>Introduction:</strong> We use different "square sizes" depending on what we are measuring. Just like we use centimeters (not kilometers) to measure a pencil, we choose the right area unit for the job.</p>
            <p><strong>The Three Standard Area Units:</strong></p>
            <ol>
                <li><strong>Square Millimeter (mm²):</strong> Tiny! About the size of a pencil tip. Used for small objects like a fingernail or a stamp.</li>
                <li><strong>Square Centimeter (cm²):</strong> About the size of a sugar cube face. Used for a book cover or a phone screen.</li>
                <li><strong>Square Meter (m²):</strong> A large square made by four meter sticks. Used for a room, a playground, or a garden.</li>
            </ol>
            <p><strong>Symbols to Remember:</strong></p>
            <ul>
                <li>mm² = square millimeters</li>
                <li>cm² = square centimeters</li>
                <li>m² = square meters</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stamp"></i> Choose the Right Unit</div>
                <p>Postage stamp → mm² (very small!)<br>
                Notebook cover → cm² (medium)<br>
                Classroom floor → m² (large!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice"></i> Visualizing 1cm²</div>
                <p>The face of a standard sugar cube is about 1cm × 1cm. That's 1 square centimeter (1cm²)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-vector-square"></i> The Meter Square</div>
                <p>If you tape four meter sticks together in a square, the space inside is 1 square meter (1m²). That's how much carpet you need to cover a spot on the floor!</p>
            </div>
        `,
        taskInstructions: "Match objects to the best area unit and draw 1cm².",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Unit Match-Up</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose the best unit (mm², cm², or m²) for each object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A postage stamp: _________</div>
                        <div>• A classroom whiteboard: _________</div>
                        <div>• A fingernail: _________</div>
                        <div>• A math textbook cover: _________</div>
                        <div>• A basketball court: _________</div>
                        <div>• A phone screen: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw 1cm²</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using a ruler, draw a perfect 1cm × 1cm square in the space below. Label it "1cm²":
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Visualizing 1m²</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With your teacher's help, use masking tape to mark out a 1m × 1m square on the classroom floor.
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>How many students can stand inside the 1m² square? _____ students</em></p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Estimate how many 1m² squares would cover your classroom floor:
                    <div class="answer-space" style="height: 40px;">About _____ square meters</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If you were buying new carpet for your bedroom, which unit would you use? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three objects at home: one best measured in mm², one in cm², and one in m². List each object and the unit you would use.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Estimating Area",
        lessonContent: `
            <p>Today we'll learn how to estimate area - making smart guesses before we measure!</p>
            <p><strong>Key Question:</strong> How can we guess the area of a large space without counting every single tile?</p>
            <p><strong>Introduction:</strong> Estimation helps us predict how much material (like paint, carpet, or tiles) we need before we buy it. It saves time and money!</p>
            <p><strong>The Row and Column Strategy:</strong></p>
            <ol>
                <li>Count how many tiles are in ONE row (the width)</li>
                <li>Count how many tiles are in ONE column (the length)</li>
                <li>Multiply: width × length = total tiles (area)</li>
            </ol>
            <p><strong>Why This Works:</strong> Instead of counting every single tile one by one, we can count groups and multiply - much faster!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> The Row & Column Trick</div>
                <p>If a floor has 10 tiles in a row and 8 tiles in a column, then 10 × 8 = 80 tiles total. No need to count all 80!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-roller"></i> Buying Paint</div>
                <p>Before buying paint, you estimate the wall area. If one can covers 10m², you can figure out how many cans to buy without wasting money.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> Real-Life Estimation</div>
                <p>When you lay out a picnic blanket, you're estimating if the blanket's area is big enough to cover the grass!</p>
            </div>
        `,
        taskInstructions: "Estimate the area of the classroom floor using the row and column method, then verify your answer.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Make Your Estimate</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the floor tiles in your classroom. Write down your "educated guess" for how many tiles cover the entire floor:
                    <div class="answer-space" style="height: 40px;">My estimate: _____ tiles</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What clues did you use to make your guess?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Row and Column Strategy</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Count the number of tiles in ONE row (across the classroom):
                    <div class="answer-space" style="height: 40px;">Tiles in one row: _____</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Count the number of tiles in ONE column (from front to back):
                    <div class="answer-space" style="height: 40px;">Tiles in one column: _____</div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Multiply to find the total: row × column = _____ × _____ = _____ tiles
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Verify the Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> As a class, count the actual number of tiles (or use the multiplication method on the full floor plan):
                    <div class="answer-space" style="height: 40px;">Actual total: _____ tiles</div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> How close was your original estimate? Was it higher or lower?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Why is it easier to count rows and columns than to count every single tile one by one?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Give one real-life example of when someone might need to estimate area:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Choose a rectangular room in your house. Estimate its floor area in square meters by walking heel-to-toe to count 'steps' for length and width. Write your estimate and how you got it.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathematicsWeek5);
    console.log("grade4-mathematics-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathematicsWeek5);
    console.log("grade4-mathematics-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathematicsWeek5',
        metadata: grade4MathematicsWeek5.metadata,
        days: grade4MathematicsWeek5
    });
    console.log("grade4-mathematics-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathematicsWeek5 = grade4MathematicsWeek5;
console.log("grade4-mathematics-week5.js loaded and registered successfully");