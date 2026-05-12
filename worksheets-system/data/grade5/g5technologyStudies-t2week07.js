// Grade 5 Technology Studies - Term 2 Week 7 Data
const grade5TechnologyWeek7 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 7,
        title: "Graphic Communication - Polygons",
        description: "Identifying and constructing regular polygons including pentagons, hexagons, heptagons, and octagons"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Graphic Communication",
        subtopic: "Identifying Regular Polygons",
        lessonContent: `
            <p>Welcome to Graphic Communication! Today we'll explore regular polygons - shapes with equal sides and equal angles.</p>
            <p><strong>Key Question:</strong> How can you tell the difference between a pentagon, hexagon, heptagon, and octagon?</p>
            <p><strong>Introduction:</strong> A <strong>regular polygon</strong> is a shape where all sides are the same length and all interior angles are equal. The name of a polygon tells you how many sides it has!</p>
            <p><strong>Polygons We Will Learn Today:</strong></p>
            <ol>
                <li><strong>Pentagon:</strong> 5 sides, 5 angles</li>
                <li><strong>Hexagon:</strong> 6 sides, 6 angles</li>
                <li><strong>Heptagon:</strong> 7 sides, 7 angles</li>
                <li><strong>Octagon:</strong> 8 sides, 8 angles</li>
            </ol>
            <p><strong>How to Identify Polygons:</strong></p>
            <ul>
                <li>Count the number of sides</li>
                <li>Check if all sides appear equal in length</li>
                <li>Look for equal angles (regular) or different angles (irregular)</li>
            </ul>
            <p><strong>Real-World Examples:</strong></p>
            <ul>
                <li>Pentagon: The US Pentagon building, home plate in baseball</li>
                <li>Hexagon: Honeycomb cells, snowflakes, soccer ball patterns</li>
                <li>Heptagon: Some coins (British 20p and 50p coins)</li>
                <li>Octagon: Stop signs, some umbrellas, UFC fighting ring</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Prefixes Tell the Story</div>
                <p>Polygon names come from Greek words: Penta=5, Hexa=6, Hepta=7, Octa=8. Learn the prefix, and you'll know how many sides!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Nature's Hexagons</div>
                <p>Bees build honeycombs using hexagons because this shape stores the most honey using the least wax. Nature is a great engineer!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stop"></i> The Octagon Rule</div>
                <p>Why are stop signs octagons? The 8-sided shape is unique and easy to recognize quickly - even from far away or in bad weather!</p>
            </div>
        `,
        taskInstructions: "Identify, name, and sketch regular polygons based on the number of sides.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Polygon Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Name each polygon based on the number of sides:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 5 sides: _________</div>
                        <div>• 6 sides: _________</div>
                        <div>• 7 sides: _________</div>
                        <div>• 8 sides: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Freehand Sketching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Practice sketching each polygon freehand:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Pentagon (5 sides)</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Hexagon (6 sides)</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Heptagon (7 sides)</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Octagon (8 sides)</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-World Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each real-world object to the correct polygon:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Stop sign _________</div>
                        <div>• Honeycomb cell _________</div>
                        <div>• US Pentagon building _________</div>
                        <div>• British 50p coin _________</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 5px; font-size: 14px; color: #666;">
                        (Options: Pentagon, Hexagon, Heptagon, Octagon)
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the difference between a regular polygon and an irregular polygon?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find and draw 4 objects at home that look like a pentagon, hexagon, heptagon, or octagon. Label each drawing with the correct name.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Graphic Communication",
        subtopic: "Constructing Regular Polygons",
        lessonContent: `
            <p>Today we'll learn how to accurately construct regular polygons using rulers and geometric tools!</p>
            <p><strong>Key Question:</strong> How can we draw a perfect pentagon or hexagon without tracing?</p>
            <p><strong>Introduction:</strong> Graphic Communication requires precision. The <strong>general method</strong> for constructing polygons uses a circle divided into equal parts. This works for any regular polygon!</p>
            <p><strong>Tools You Will Need:</strong></p>
            <ul>
                <li>Pencil (sharp!)</li>
                <li>Ruler</li>
                <li>Compass (for drawing circles)</li>
                <li>Protractor (for measuring angles)</li>
                <li>Eraser</li>
                <li>Clean paper</li>
            </ul>
            <p><strong>The General Method (Steps):</strong></p>
            <ol>
                <li>Draw a circle with your compass (this will be the circumference that touches all vertices)</li>
                <li>Divide 360° by the number of sides to find the central angle</li>
                <li>Mark points around the circle using the central angle measurement</li>
                <li>Connect the points with straight lines using your ruler</li>
                <li>Erase the circle guidelines to reveal your regular polygon</li>
            </ol>
            <p><strong>Quick Reference - Central Angles:</strong></p>
            <ul>
                <li>Pentagon (5 sides): 360° ÷ 5 = 72° between vertices</li>
                <li>Hexagon (6 sides): 360° ÷ 6 = 60° between vertices</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> The Circle Method</div>
                <p>Any regular polygon can be drawn by dividing a circle into equal parts. The circle acts like a "jig" or template to keep all vertices the same distance from the center.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Precision Matters</div>
                <p>In technology and engineering, accurate drawings are essential. A 1mm mistake on paper could become a 1cm mistake in a real product!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Hexagon Shortcut</div>
                <p>For a hexagon, there's an even faster method! The radius of your circle equals the length of each side. Just step the compass around the circle 6 times.</p>
            </div>
        `,
        taskInstructions: "Follow the step-by-step guide to construct a regular pentagon and hexagon accurately.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Constructing a Regular Pentagon (5 sides)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow these steps to draw a regular pentagon:
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f5f5f5; padding: 10px; border-radius: 5px;">
                        <strong>Step 1:</strong> Draw a circle with radius 4cm using your compass.<br>
                        <strong>Step 2:</strong> Mark the center point O.<br>
                        <strong>Step 3:</strong> Calculate: 360° ÷ 5 = 72°.<br>
                        <strong>Step 4:</strong> Using your protractor, mark a point at 0°, then 72°, 144°, 216°, and 288° around the circle.<br>
                        <strong>Step 5:</strong> Connect the points in order using your ruler.<br>
                        <strong>Step 6:</strong> Lightly erase the circle.
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Constructing a Regular Hexagon (6 sides)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Follow these steps to draw a regular hexagon (using the shortcut method):
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f5f5f5; padding: 10px; border-radius: 5px;">
                        <strong>Step 1:</strong> Draw a circle with radius 4cm using your compass.<br>
                        <strong>Step 2:</strong> Keep your compass at the same 4cm setting.<br>
                        <strong>Step 3:</strong> Place the compass point anywhere on the circle and draw an arc across the circle.<br>
                        <strong>Step 4:</strong> Move the compass to that new point and repeat until you have 6 marks.<br>
                        <strong>Step 5:</strong> Connect the 6 marks in order using your ruler.<br>
                        <strong>Step 6:</strong> Lightly erase the circle.
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Check Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Measure each side of your pentagon and hexagon. Are they equal? 
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to keep your compass setting exactly the same throughout the construction?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If you wanted to draw a regular octagon (8 sides), what would be the central angle between each vertex?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Use the general method to construct a regular octagon (8 sides) at home. Central angle = 45°. Bring your drawing to the next class.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyWeek7);
    console.log("grade5-technology-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyWeek7);
    console.log("grade5-technology-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyWeek7',
        metadata: grade5TechnologyWeek7.metadata,
        days: grade5TechnologyWeek7
    });
    console.log("grade5-technology-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyWeek7 = grade5TechnologyWeek7;
console.log("grade5-technology-week7.js loaded and registered successfully");