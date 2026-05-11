// Grade 6 Technology Studies - Term 3 Week 7
const grade6TechnologyWeek7 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 3,
        week: 7,
        title: "Building Structures",
        description: "Understanding floor plans, the square method for site layout, and properties of building materials"
    },
    
    monday: {
        subject: "Technology Studies",
        topic: "Building Structures",
        subtopic: "Introduction to Floor Plans",
        lessonContent: `
            <p>Welcome to our exploration of building structures! Today we'll learn how architects and builders plan buildings before construction begins.</p>
            <p><strong>Key Question:</strong> How do builders know exactly where to put walls, doors, and windows?</p>
            <p><strong>Introduction:</strong> A <strong>Floor Plan</strong> is a scaled drawing that shows a building from above. It's like a map of a room or building that shows the layout of walls, doors, windows, and other features.</p>
            <p><strong>Why Floor Plans Matter:</strong></p>
            <ul>
                <li>They help builders visualize the final structure</li>
                <li>They show where everything goes before construction starts</li>
                <li>They help calculate how many materials are needed</li>
                <li>They allow changes to be made on paper instead of after building</li>
            </ul>
            <p><strong>Common Floor Plan Symbols:</strong></p>
            <ul>
                <li><strong>Walls:</strong> Thick parallel lines</li>
                <li><strong>Doors:</strong> Arc showing the door swing</li>
                <li><strong>Windows:</strong> Thin rectangles in walls</li>
                <li><strong>Dimensions:</strong> Numbers showing lengths and widths</li>
            </ul>
            <p><strong>Small Structure Examples:</strong></p>
            <ul>
                <li>Dog kennel - A simple rectangular shelter for a pet</li>
                <li>Poultry run - An enclosed area for chickens with a shelter area</li>
                <li>Shed - Storage structure for tools and equipment</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Kennel Floor Plan</div>
                <p>A basic dog kennel might be 1.5m wide by 2m long. The floor plan would show an entrance, maybe a divider between sleeping and eating areas, and dimensions for cutting materials.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chicken"></i> Poultry Run Layout</div>
                <p>A chicken coop floor plan might include a sleeping area (2m x 2m), a nesting box area, and an outdoor run (2m x 4m) connected by a small door.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Scale Drawing</div>
                <p>Floor plans use scale, like "1cm on paper = 0.5m in real life." This allows large buildings to fit on small paper while keeping everything proportional.</p>
            </div>
        `,
        taskInstructions: "Draw a simple floor plan for a small structure like a kennel or poultry run.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Floor Plans</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List three things a floor plan shows about a building:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing a Kennel Floor Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a simple floor plan for a dog kennel with these features:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Dimensions: 1.5m wide x 2m long</div>
                        <div>• Entrance door (show swing arc)</div>
                        <div>• Sleeping area (label it)</div>
                        <div>• Feeding area (label it)</div>
                        <div>• Thick lines for walls</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Poultry Run Floor Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a floor plan for a poultry run with:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Indoor shelter: 2m x 2m (include nesting boxes)</div>
                        <div>• Outdoor run: 2m x 4m attached to shelter</div>
                        <div>• Door between indoor and outdoor areas</div>
                        <div>• Main entrance for humans</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to draw a floor plan before starting construction?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a floor plan of one room in your house. Include walls, doors, windows, and major furniture. Label all parts.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Building Structures",
        subtopic: "The Square Method (3-4-5 Method)",
        lessonContent: `
            <p>Today we'll learn how builders make sure building corners are perfectly square (90-degree angles)!</p>
            <p><strong>Key Question:</strong> How do builders make sure a foundation has perfect right-angle corners?</p>
            <p><strong>Introduction:</strong> The <strong>Square Method</strong> (also called the 3-4-5 method or Pythagorean Theorem in action) is a simple way to create a perfect right angle on a building site using only measuring tape and string.</p>
            <p><strong>The 3-4-5 Rule Explained:</strong></p>
            <ul>
                <li>If you measure 3 units along one line, 4 units along the perpendicular line, the diagonal distance between those points will be exactly 5 units</li>
                <li>This creates a perfect 90-degree (right) angle at the corner</li>
                <li>The units can be feet, meters, or any consistent measurement</li>
            </ul>
            <p><strong>Step-by-Step Site Layout:</strong></p>
            <ol>
                <li>Drive a peg at the starting corner (Point A)</li>
                <li>Measure along one wall direction and mark Point B (3m from A)</li>
                <li>Measure along the perpendicular direction and mark Point C (4m from A)</li>
                <li>Measure the diagonal distance from Point B to Point C - it should be 5m</li>
                <li>If it's not exactly 5m, adjust Point C until diagonal = 5m</li>
                <li>Once diagonal is 5m, you have a perfect square corner!</li>
            </ol>
            <p><strong>Why This Works (Pythagorean Theorem):</strong> In any right triangle, a² + b² = c². Here, 3² + 4² = 9 + 16 = 25, and √25 = 5!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Real Site Example</div>
                <p>A builder wants to lay out a rectangular chicken coop that's 3m x 4m. Using 3-4-5 at each corner ensures every corner is exactly 90 degrees, so the building won't be a "parallelogram" (leaning shape)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Larger Scale</div>
                <p>For larger buildings, multiply the ratio: 6-8-10, 9-12-15, or 30-40-50 works just as well! The diagonal must be the largest number.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> On-Site Tools</div>
                <p>Builders use string lines, measuring tape, stakes, and a line level to mark out foundations using the 3-4-5 method.</p>
            </div>
        `,
        taskInstructions: "Practice the 3-4-5 square method through calculation and drawing exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding the 3-4-5 Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing diagonal lengths:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 3m and 4m = diagonal _____ m</div>
                        <div>• 6m and 8m = diagonal _____ m</div>
                        <div>• 9m and 12m = diagonal _____ m</div>
                        <div>• 1.5m and 2m = diagonal _____ m</div>
                        <div>• 30m and 40m = diagonal _____ m</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing a Square Corner</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using a ruler, draw a right angle using the 3-4-5 method (scale: 1cm = 1m):
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">Show: Point A (corner), 3cm along one line, 4cm along perpendicular line, 5cm diagonal</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Site Layout Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A builder is laying out a rectangular poultry run that measures 6m x 8m. Using the 3-4-5 method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What diagonal measurement will verify the first corner is square?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">b) Explain how the builder would check the opposite corner:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Why It Matters</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What problems could happen if a building's corners are not perfectly square?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Measure a room in your house. Check if the corners are square by measuring diagonals from opposite corners. Record your measurements and findings.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Building Structures",
        subtopic: "Building Materials - Bricks, Mortar, and Timber",
        lessonContent: `
            <p>Today we'll explore the properties of common building materials: bricks, mortar, and timber!</p>
            <p><strong>Key Question:</strong> What makes bricks, mortar, and timber good choices for building?</p>
            <p><strong>Introduction:</strong> Every building material has specific properties that make it suitable (or unsuitable) for different jobs. Understanding these properties helps builders choose the right material.</p>
            
            <p><strong>Bricks - Properties and Uses:</strong></p>
            <ul>
                <li><strong>Strength:</strong> Excellent compressive strength (can hold heavy loads)</li>
                <li><strong>Durability:</strong> Very long-lasting, weather-resistant</li>
                <li><strong>Fire Resistance:</strong> Bricks do not burn</li>
                <li><strong>Thermal Mass:</strong> Absorbs heat during day, releases slowly at night</li>
                <li><strong>Limitation:</strong> Heavy, requires skilled labor, poor insulation (needs cavity walls)</li>
                <li><strong>Common Uses:</strong> Walls, foundations, chimneys, paving</li>
            </ul>
            
            <p><strong>Mortar - Properties and Uses:</strong></p>
            <ul>
                <li><strong>Binder:</strong> Holds bricks or blocks together like glue</li>
                <li><strong>Composition:</strong> Sand, cement, and water (sometimes lime)</li>
                <li><strong>Workability:</strong> Soft when wet, hardens over time</li>
                <li><strong>Flexibility:</strong> Slightly flexible to accommodate small movements</li>
                <li><strong>Limitation:</strong> Low tensile strength (can crack if pulled apart)</li>
                <li><strong>Common Uses:</strong> Bedding for bricks, pointing between bricks</li>
            </ul>
            
            <p><strong>Timber (Wood) - Properties and Uses:</strong></p>
            <ul>
                <li><strong>Strength-to-Weight:</strong> Strong but lightweight</li>
                <li><strong>Workability:</strong> Easy to cut, shape, and join</li>
                <li><strong>Renewable:</strong> Can be grown and harvested sustainably</li>
                <li><strong>Insulation:</strong> Natural insulator (keeps heat in/cold out)</li>
                <li><strong>Limitation:</strong> Can rot, burn, be attacked by termites, warps with moisture</li>
                <li><strong>Common Uses:</strong> Roof trusses, floor joists, door frames, furniture</li>
            </ul>
            
            <p><strong>Material Comparison Table:</strong></p>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Property</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Brick</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Mortar</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Timber</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Strength</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Very high (compression)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Medium</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">High</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Weight</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Heavy</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Medium</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Light</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Fire Resistance</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Excellent</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Good</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Poor - burns</td>
                </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> House Construction</div>
                <p>A typical house uses timber for the roof frame (light, easy to work with), bricks for outer walls (strong, weather-resistant), and mortar to hold the bricks together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fill-drip"></i> Mortar Chemistry</div>
                <p>Mortar hardens through a chemical reaction called hydration - the cement reacts with water to form crystals that lock sand particles together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Treated Timber</div>
                <p>Timber used outdoors (for fences or decks) is pressure-treated with chemicals that prevent rot and termite damage. It can last 20+ years!</p>
            </div>
        `,
        taskInstructions: "Compare building materials and identify appropriate uses for bricks, mortar, and timber.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Material Properties Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this properties table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Material</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Two Strengths</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Two Limitations</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Brick</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Mortar</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Timber</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Matching Materials to Jobs</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which material (brick, mortar, or timber) would be best for each job? Explain why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Building an outdoor fireplace: _________ because _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">b) Making a garden bench: _________ because _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">c) Holding bricks together: _________ because _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">d) Building a flood-resistant wall: _________ because _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Material Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare brick and timber. Which is better for a house in a tropical area? Which is better in a cold area?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Design Your Structure</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> You will build a small storage shed (3m x 2m). Choose materials for different parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Walls: _________ because _________________</div>
                        <div>• Roof: _________ because _________________</div>
                        <div>• Floor: _________ because _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to understand material properties before starting a building project?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find three items made of brick, three made of timber, and identify where mortar is used. Record your findings in a list.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek7);
    console.log("grade6-technology-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek7);
    console.log("grade6-technology-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek7',
        metadata: grade6TechnologyWeek7.metadata,
        days: grade6TechnologyWeek7
    });
    console.log("grade6-technology-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek7 = grade6TechnologyWeek7;
console.log("grade6-technology-week7.js loaded and registered successfully");