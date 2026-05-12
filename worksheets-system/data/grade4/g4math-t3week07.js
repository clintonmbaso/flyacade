// Grade 4 Mathematics - Term 3 Week 7 Data
const grade4MathematicsWeek7 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 7,
        title: "Exploring Area",
        description: "Moving from counting individual squares to using formulas to find the space inside shapes"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Deriving the Square Formula",
        lessonContent: `
            <p>Welcome! Today we'll discover how to find the area of a square using a simple shortcut instead of counting every single square!</p>
            <p><strong>Key Question:</strong> Is there a faster way to find the area of a square than counting each small square one by one?</p>
            <p><strong>Introduction:</strong> Area is the amount of space inside a shape. When we draw shapes on grid paper, we can count the squares. But mathematicians found a shortcut!</p>
            <p><strong>The Discovery Steps:</strong></p>
            <ol>
                <li>Draw a square that is 4 units wide and 4 units tall on grid paper</li>
                <li>Count every single small square inside - you will find 16 squares</li>
                <li>Notice that there are 4 rows with 4 squares in each row</li>
                <li>Instead of counting 1, 2, 3... we can simply multiply: 4 × 4 = 16</li>
                <li><strong>The Formula:</strong> Area of a Square = s × s (where s is the length of one side)</li>
            </ol>
            <p><strong>Remember:</strong> Since we are multiplying two lengths, the answer must always be in "square" units!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Counting vs. Multiplying</div>
                <p>A square with 5 cm sides has 5 rows of 5 squares. Instead of counting 25 squares one by one, we multiply 5 × 5 = 25 cm².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Why It Works</div>
                <p>Imagine a square made of tiny tiles. The side length tells you how many tiles are in each row. Multiplying rows × columns gives the total tiles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Real-Life Square</div>
                <p>A square rug that is 3 m on each side covers 3 × 3 = 9 m² of floor space.</p>
            </div>
        `,
        taskInstructions: "Use grid paper to discover the square area formula through drawing and counting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing and Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On grid paper (where each small square is 1 cm × 1 cm), draw these squares and count the squares inside:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A square that is 3 cm wide and 3 cm tall</div>
                        <div>• A square that is 5 cm wide and 5 cm tall</div>
                        <div>• A square that is 6 cm wide and 6 cm tall</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing values:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Side Length (s)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Number of Rows</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Number in Each Row</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Area (s × s)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">2 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___ cm²</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">4 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___ cm²</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">7 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">7</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">7</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___ cm²</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">10 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">10</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">10</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___ cm²</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Apply the Formula</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the formula Area = s × s to find the area of these squares:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A square with side length 8 cm: Area = ___ cm²</div>
                        <div>B. A square with side length 12 cm: Area = ___ cm²</div>
                        <div>C. A square with side length 9 m: Area = ___ m²</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is multiplying faster than counting every single square?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a square with 7 cm sides on grid paper. Count the squares to verify that 7 × 7 gives the correct area. Write your findings.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Deriving the Rectangle Formula",
        lessonContent: `
            <p>Yesterday we learned about squares. Today we'll discover the formula for finding the area of a rectangle!</p>
            <p><strong>Key Question:</strong> How is finding the area of a rectangle similar to finding the area of a square?</p>
            <p><strong>Introduction:</strong> A rectangle is like a square that has been stretched. It still has rows and columns, but the length and width are different.</p>
            <p><strong>The Discovery Steps:</strong></p>
            <ol>
                <li>Draw a rectangle that is 6 units long and 3 units wide on grid paper</li>
                <li>Count every single small square inside - you will find 18 squares</li>
                <li>Notice that there are 3 rows with 6 squares in each row</li>
                <li>3 rows × 6 squares per row = 18 total squares</li>
                <li><strong>The Formula:</strong> Area of a Rectangle = length × width (l × w)</li>
            </ol>
            <p><strong>Important Terms:</strong></p>
            <ul>
                <li><strong>Length (l):</strong> The longer side of the rectangle</li>
                <li><strong>Width (w):</strong> The shorter side of the rectangle</li>
                <li><strong>Area:</strong> Always written in square units (cm², m², etc.)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Door Area</div>
                <p>A door is a rectangle! If a door is 2 m tall and 1 m wide, its area is 2 × 1 = 2 m².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Table Top</div>
                <p>A rectangular table that is 150 cm long and 90 cm wide has an area of 150 × 90 = 13,500 cm².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Rectangle Connection</div>
                <p>A square is actually a special type of rectangle where length = width. That's why both formulas work!</p>
            </div>
        `,
        taskInstructions: "Use grid paper to discover the rectangle area formula through drawing and counting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing and Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On grid paper (where each small square is 1 cm × 1 cm), draw these rectangles and count the squares inside:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A rectangle that is 6 cm long and 2 cm wide</div>
                        <div>• A rectangle that is 5 cm long and 4 cm wide</div>
                        <div>• A rectangle that is 8 cm long and 3 cm wide</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing values using the rectangle formula (Area = l × w):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Length (l)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Width (w)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Rows (w)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Squares per Row (l)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Area (l × w)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">4 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">3 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">3</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___ cm²</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">7 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">7</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___ cm²</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">9 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">5 cm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">5</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">9</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___ cm²</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Label and Calculate</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each rectangle drawn below, label the length and width, then calculate the area:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Rectangle A:</strong> length = 10 cm, width = 4 cm</div>
                        <div>Area = ___ × ___ = ___ cm²</div>
                        <div style="margin-top: 10px;"><strong>Rectangle B:</strong> length = 12 cm, width = 6 cm</div>
                        <div>Area = ___ × ___ = ___ cm²</div>
                        <div style="margin-top: 10px;"><strong>Rectangle C:</strong> length = 15 cm, width = 8 cm</div>
                        <div>Area = ___ × ___ = ___ cm²</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How is the area formula for a rectangle similar to the formula for a square? How is it different?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 rectangular objects at home (book, phone, picture frame). Measure the length and width, then calculate the area of each.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Practical Calculation",
        lessonContent: `
            <p>Today we become math detectives! We'll use rulers to measure real objects and calculate their areas.</p>
            <p><strong>Key Question:</strong> How can we use area formulas to find the space taken up by objects around us?</p>
            <p><strong>Introduction:</strong> Now that we know the formulas, let's apply them to real-world objects. Grab your ruler - we're going on a classroom scavenger hunt!</p>
            <p><strong>Measuring Guidelines:</strong></p>
            <ul>
                <li>Always measure in the same unit (centimeters work well)</li>
                <li>Round to the nearest whole number if needed</li>
                <li>Remember: length × width = area</li>
                <li>The answer must include square units (cm²)</li>
            </ul>
            <p><strong>Step-by-Step Process:</strong></p>
            <ol>
                <li>Choose an object with a flat rectangular surface</li>
                <li>Measure the length (the longer side) in centimeters</li>
                <li>Measure the width (the shorter side) in centimeters</li>
                <li>Multiply length × width = area in cm²</li>
                <li>Write your answer with the correct units</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Mathematics Textbook</div>
                <p>Length = 25 cm, Width = 20 cm<br>
                Calculation: 25 × 20 = 500 cm²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mobile-alt"></i> Smartphone Screen</div>
                <p>Length = 14 cm, Width = 7 cm<br>
                Calculation: 14 × 7 = 98 cm²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> Remember the Units!</div>
                <p>When we multiply cm × cm, we get cm². That little "²" means "squared" - we're measuring flat space, not just a line!</p>
            </div>
        `,
        taskInstructions: "Measure real classroom objects using a ruler and calculate their areas.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Measure each object and calculate its area. Use centimeters (cm).
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Length (cm)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Width (cm)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Area (cm²)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Mathematics Textbook</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Your Desktop</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">A Sheet of Paper</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Your Notebook</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">One Chosen Object</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_______</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Which is Biggest?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which object you measured has the largest area? Which has the smallest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Estimation Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Before measuring, estimate the area of your desktop. Was your estimate close?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Units Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do we write cm² instead of just cm when we give our answer?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Measure the length and width of your bed or a table at home. Calculate the area in cm² or m². Record your measurements and answer.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Area Word Problems",
        lessonContent: `
            <p>Today we'll use our area skills to solve real-life problems. Get ready to think like a mathematician!</p>
            <p><strong>Key Question:</strong> How can area calculations help us solve everyday problems?</p>
            <p><strong>Introduction:</strong> From buying carpet to planting gardens, knowing how to calculate area helps us make smart decisions in real life.</p>
            <p><strong>Problem-Solving Strategy:</strong></p>
            <ol>
                <li>Read the problem carefully</li>
                <li>Identify the shape (square or rectangle)</li>
                <li>Find the length and width (remember: squares have equal sides)</li>
                <li>Choose the correct formula (square: s × s, rectangle: l × w)</li>
                <li>Multiply and write your answer with square units</li>
                <li>Check if your answer makes sense</li>
            </ol>
            <p><strong>Remember:</strong> Always include the units in your answer (cm², m², etc.)!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-couch"></i> The Carpet Problem</div>
                <p><strong>Problem:</strong> A small reading corner is 4 m long and 3 m wide. How much carpet do we need to cover the floor?<br>
                <strong>Solution:</strong> 4 m × 3 m = 12 m²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> The Garden Bed</div>
                <p><strong>Problem:</strong> A farmer has a square vegetable patch. One side is 5 m long. What is the total area for planting?<br>
                <strong>Solution:</strong> Since it's a square, all sides are 5 m. 5 m × 5 m = 25 m²</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-bucket"></i> The Art Canvas</div>
                <p><strong>Problem:</strong> An artist has a canvas that is 10 cm tall and 8 cm wide. How much space does she have to paint?<br>
                <strong>Solution:</strong> 10 cm × 8 cm = 80 cm²</p>
            </div>
        `,
        taskInstructions: "Solve real-world area word problems and explain your thinking.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each problem. Show your work and write the answer with correct units.
                    
                    <div style="margin-left: 20px; margin-top: 15px;">
                        <p><strong>Problem 1 - The Carpet:</strong> A classroom reading corner is 5 m long and 4 m wide. How many square meters of carpet are needed to cover the floor?</p>
                        <div>Work: _________________________________</div>
                        <div>Answer: _________</div>
                        
                        <p style="margin-top: 15px;"><strong>Problem 2 - The Garden:</strong> Maria has a square flower garden with sides of 6 m. What is the area of her garden?</p>
                        <div>Work: _________________________________</div>
                        <div>Answer: _________</div>
                        
                        <p style="margin-top: 15px;"><strong>Problem 3 - The Photo Frame:</strong> A rectangular photo measures 12 cm by 15 cm. What is the area of the photo?</p>
                        <div>Work: _________________________________</div>
                        <div>Answer: _________</div>
                        
                        <p style="margin-top: 15px;"><strong>Problem 4 - The Soccer Field:</strong> A small soccer practice field is 30 m long and 20 m wide. What is its area?</p>
                        <div>Work: _________________________________</div>
                        <div>Answer: _________</div>
                        
                        <p style="margin-top: 15px;"><strong>Problem 5 - The Sticky Note:</strong> A square sticky note has sides of 7 cm. What is its area?</p>
                        <div>Work: _________________________________</div>
                        <div>Answer: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Which Formula?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each problem below, write whether you would use the square formula or rectangle formula:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A chessboard with sides of 40 cm: _________</div>
                        <div>B. A basketball court that is 28 m long and 15 m wide: _________</div>
                        <div>C. A napkin that is 25 cm × 25 cm: _________</div>
                        <div>D. A tablet screen that is 20 cm long and 15 cm wide: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write your own area word problem about a real object. Then solve it!
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>My Problem:</strong></div>
                        <div class="answer-space" style="height: 80px;"></div>
                        <div style="margin-top: 10px;"><strong>Solution:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> When might you need to calculate area in your daily life outside of school?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find or create 2 area word problems from your home (e.g., tiling a floor, covering a table, planting a garden). Write each problem and solve it.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathematicsWeek7);
    console.log("grade4-mathematics-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathematicsWeek7);
    console.log("grade4-mathematics-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathematicsWeek7',
        metadata: grade4MathematicsWeek7.metadata,
        days: grade4MathematicsWeek7
    });
    console.log("grade4-mathematics-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathematicsWeek7 = grade4MathematicsWeek7;
console.log("grade4-mathematics-week7.js loaded and registered successfully");