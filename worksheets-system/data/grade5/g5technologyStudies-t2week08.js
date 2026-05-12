// Grade 5 Technology Studies - Term 2 Week 8 Data
const grade5TechnologyWeek8 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 8,
        title: "Irregular Polygons and Design",
        description: "Analyzing irregular polygons, comparing them to regular polygons, and applying polygon shapes to product design"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Geometric Design",
        subtopic: "Characteristics of Irregular Polygons",
        lessonContent: `
            <p>Welcome to our exploration of polygons! Today we'll learn about irregular polygons and how they differ from regular polygons.</p>
            <p><strong>Key Question:</strong> What makes a polygon "irregular"?</p>
            <p><strong>Introduction:</strong> A polygon is a flat shape with straight sides. Polygons can be classified as regular or irregular based on their sides and angles.</p>
            <p><strong>Regular Polygons:</strong></p>
            <ul>
                <li>All sides are EQUAL in length</li>
                <li>All angles are EQUAL in measure</li>
                <li>Examples: Equilateral triangle, Square, Regular pentagon, Regular hexagon</li>
            </ul>
            <p><strong>Irregular Polygons:</strong></p>
            <ul>
                <li>Sides are NOT all equal in length</li>
                <li>Angles are NOT all equal in measure</li>
                <li>Examples: Rectangle (not a square), Scalene triangle, Irregular pentagon, Irregular hexagon</li>
            </ul>
            <p><strong>Key Fact:</strong> A rectangle is irregular because its sides are not all equal (opposite sides are equal, but adjacent sides are different lengths). However, all its angles are 90 degrees!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Regular vs. Irregular</div>
                <p>A square is regular (4 equal sides, 4 equal angles). A rectangle is irregular (adjacent sides have different lengths).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Side Lengths Matter</div>
                <p>If a triangle has sides of 3cm, 4cm, and 5cm — all different — it's an irregular triangle (specifically a scalene triangle).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Real-World Example</div>
                <p>Stop signs are regular octagons (8 equal sides). Many house roofs are irregular pentagons or trapezoids!</p>
            </div>
        `,
        taskInstructions: "Identify, compare, and construct irregular polygons given specific measurements.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Regular or Irregular?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify whether each polygon is regular or irregular:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A triangle with sides 5cm, 5cm, 5cm → _________</div>
                        <div>B. A quadrilateral with sides 6cm, 4cm, 6cm, 4cm → _________</div>
                        <div>C. A pentagon with all sides 7cm → _________</div>
                        <div>D. A hexagon with sides 2cm, 3cm, 2cm, 3cm, 2cm, 3cm → _________</div>
                        <div>E. A triangle with angles 50°, 60°, 70° → _________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the Venn diagram comparing regular and irregular polygons:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; justify-content: center; margin: 20px 0;">
                            <div style="border: 2px solid #333; border-radius: 50%; width: 200px; height: 200px; display: inline-block; position: relative; background: #f9f9f9;">
                                <span style="position: absolute; top: -25px; left: 60px;">Regular</span>
                                <span style="position: absolute; bottom: -25px; right: 60px;">Irregular</span>
                                <div style="position: absolute; top: 80px; left: 20px; font-size: 12px;">Both:</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Construct an Irregular Polygon</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using a ruler and protractor, construct an irregular quadrilateral with these specifications:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>• Side AB = 6cm</div>
                        <div>• Side BC = 4cm</div>
                        <div>• Side CD = 5cm</div>
                        <div>• Side DA = 3cm</div>
                        <div>• Angle at B = 90°</div>
                        <div>• Angle at C = 120°</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Is your quadrilateral regular or irregular? How do you know?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 irregular polygons in your home (e.g., book cover, window, table). Sketch each one and explain why it is irregular.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Geometric Design",
        subtopic: "Polygons in Product Development",
        lessonContent: `
            <p>Today we'll apply our knowledge of polygons to design real products! Designers use regular and irregular polygons to create everything from logos to floor tiles.</p>
            <p><strong>Key Question:</strong> How can regular and irregular polygons be used to design products?</p>
            <p><strong>Why Polygons in Design?</strong></p>
            <ul>
                <li><strong>Appearance:</strong> Polygons create interesting visual patterns and shapes</li>
                <li><strong>Function:</strong> Some shapes fit together better (tessellation)</li>
                <li><strong>Branding:</strong> Logos often use polygons for clean, memorable designs</li>
                <li><strong>Strength:</strong> Triangular shapes add structural strength</li>
            </ul>
            <p><strong>Examples of Polygon Use in Products:</strong></p>
            <ol>
                <li><strong>Floor Tiles:</strong> Squares (regular), rectangles (irregular), hexagons (regular), and custom irregular shapes</li>
                <li><strong>Logos:</strong> Many company logos combine triangles, rectangles, and irregular polygons</li>
                <li><strong>Furniture:</strong> Tabletops, shelves, and cabinets use polygon shapes</li>
                <li><strong>Packaging:</strong> Boxes, containers, and wrappers use polygon nets</li>
                <li><strong>Buildings:</strong> Modern architecture uses irregular polygons for unique designs</li>
            </ol>
            <p><strong>Design Challenge Rules:</strong></p>
            <ul>
                <li>Your product must use AT LEAST 3 different polygons</li>
                <li>You must include BOTH regular and irregular polygons</li>
                <li>Your design should have a clear purpose</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Tessellation Tile Design</div>
                <p>Islamic geometric art uses regular polygons (hexagons, squares, triangles) that fit together perfectly to create stunning tile patterns.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-adjust"></i> Logo Design</div>
                <p>The Olympic logo uses 5 overlapping circles, but many tech logos (like Google Drive's triangle) use polygons for a modern look.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-couch"></i> Furniture Design</div>
                <p>A modern coffee table might have a hexagonal top (regular) supported by irregular trapezoidal legs.</p>
            </div>
        `,
        taskInstructions: "Design a product using a mix of regular and irregular polygons.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Brainstorm Your Product</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose one product to design (floor tile pattern, logo, furniture piece, or packaging):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My product will be: <span style="border-bottom: 1px solid #000; width: 200px; display: inline-block;"></span></div>
                        <div>Purpose of this product: <div class="answer-space" style="height: 50px; margin-top: 5px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Polygon Inventory</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List the polygons you plan to use in your design:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Regular Polygons</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Irregular Polygons</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your product design below. Label each polygon as "R" (regular) or "I" (irregular):
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2; background: #fafafa;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> List the polygons you used and where they appear in your design:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Design Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Explain why you chose these specific polygons for your product:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> How does your design use regular polygons differently from irregular polygons?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a product at home that uses polygons in its design (cereal box, phone case, rug, etc.). Sketch it and identify all the polygons you see.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyWeek8);
    console.log("grade5-technology-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyWeek8);
    console.log("grade5-technology-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyWeek8',
        metadata: grade5TechnologyWeek8.metadata,
        days: grade5TechnologyWeek8
    });
    console.log("grade5-technology-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyWeek8 = grade5TechnologyWeek8;
console.log("grade5-technology-week8.js loaded and registered successfully");