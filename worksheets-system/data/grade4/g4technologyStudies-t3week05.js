// Grade 4 Technology Studies - Term 3 Week 5 Data
const grade4TechnologyWeek5 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 3,
        week: 5,
        title: "Circles & Digital Design",
        description: "Identifying parts of a circle, drawing with a compass, and exploring basic graphic software"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Geometric Construction",
        subtopic: "Parts of a Circle",
        lessonContent: `
            <p>Welcome to our exploration of circles! Today we'll learn about the different parts of a circle and how to draw them accurately using a compass.</p>
            <p><strong>Key Question:</strong> What are the main parts of a circle, and how can we draw circles with specific measurements?</p>
            <p><strong>Introduction:</strong> A circle is a shape where every point on the edge is the same distance from the center. Circles are everywhere - from wheels and clocks to pizza and coins!</p>
            <p><strong>Main Parts of a Circle:</strong></p>
            <ol>
                <li><strong>Radius (r):</strong> The distance from the center of the circle to any point on the edge</li>
                <li><strong>Diameter (d):</strong> The distance across the circle through the center (2 × radius)</li>
                <li><strong>Circumference:</strong> The distance all the way around the circle (the perimeter)</li>
                <li><strong>Center Point:</strong> The middle point of the circle, equidistant from all edges</li>
            </ol>
            <p><strong>Important Formulas:</strong></p>
            <ul>
                <li>Diameter = 2 × Radius (d = 2r)</li>
                <li>Radius = Diameter ÷ 2 (r = d ÷ 2)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> Real-World Circles</div>
                <p>A pizza has a radius (from center to crust) and a diameter (all the way across). A bicycle wheel's circumference is how far it travels in one full spin!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Measuring Practice</div>
                <p>If a circle has a radius of 4 cm, its diameter is 8 cm (because 4 × 2 = 8). If a circle has a diameter of 10 cm, its radius is 5 cm (because 10 ÷ 2 = 5).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compass"></i> Compass Tips</div>
                <p>When using a compass, keep the pencil sharp and hold the top steady. Don't press too hard - let the compass do the work!</p>
            </div>
        `,
        taskInstructions: "Practice using a compass to draw circles with specific radii. Label the center point and diameter.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circle Drawing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a compass, draw a circle with a radius of 4 cm:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">Label: Center point (●) and Diameter (line across)</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Different Sized Circles</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw circles with the following radii:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Radius = 2 cm</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>• Radius = 3 cm</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>• Radius = 5 cm</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Labeling Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each circle you drew, label:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The center point (with a dot)</div>
                        <div>• The radius (draw and label one line from center to edge)</div>
                        <div>• The diameter (draw and label a line across through the center)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quality Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Check your circles for:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Smooth, single lines (no "double lines")</div>
                        <div>• No slipping of the compass</div>
                        <div>• Accurate measurements</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Self-assessment: How did your circles turn out?</em></p>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 circular objects at home. Measure their diameters and calculate their radii. Record your findings.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Digital Design",
        subtopic: "Intro to Graphic Software",
        lessonContent: `
            <p>Today we'll explore how the shapes we draw by hand (circles, triangles, squares) can be created on a computer using graphic software!</p>
            <p><strong>Key Question:</strong> What software can we use to create digital drawings and designs?</p>
            <p><strong>Introduction:</strong> Graphic software allows us to create images, logos, and designs using digital tools. The shapes we've been learning to draw by hand can be made quickly and precisely on a computer!</p>
            <p><strong>Types of Graphic Software:</strong></p>
            <ul>
                <li><strong>Microsoft Paint:</strong> Basic drawing software that comes free with Windows</li>
                <li><strong>CorelDRAW:</strong> Professional software for creating logos and vector graphics</li>
                <li><strong>Adobe Photoshop:</strong> Advanced software for photo editing and digital art</li>
                <li><strong>Canva:</strong> Free online tool for creating designs</li>
                <li><strong>Google Drawings:</strong> Free drawing tool in Google Drive</li>
            </ul>
            <p><strong>Basic Digital Drawing Tools:</strong></p>
            <ol>
                <li><strong>Shape Tools:</strong> Draw perfect circles, squares, triangles, and rectangles</li>
                <li><strong>Pencil/Brush Tool:</strong> Draw freehand lines</li>
                <li><strong>Fill Tool (Bucket):</strong> Fill shapes with color</li>
                <li><strong>Text Tool:</strong> Add words to your design</li>
                <li><strong>Eraser:</strong> Remove mistakes</li>
                <li><strong>Color Palette:</strong> Choose different colors</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-laptop"></i> Hand vs. Computer</div>
                <p>Drawing a perfect circle by hand takes practice and a compass. On a computer, you just click and drag - the software makes it perfect instantly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Logo Design</div>
                <p>Famous logos like the Nike swoosh, Apple logo, and McDonald's golden arches were all created using graphic software!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-undo-alt"></i> Digital Advantage</div>
                <p>On a computer, you can undo mistakes with one click (Ctrl+Z). Try doing that with a pencil and paper!</p>
            </div>
        `,
        taskInstructions: "Identify graphic software and use basic drawing tools to create a simple logo or sticker design.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Software Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the software to its description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Microsoft Paint ___ a. Professional vector graphics</div>
                        <div>• CorelDRAW ___ b. Free online design tool</div>
                        <div>• Adobe Photoshop ___ c. Basic drawing on Windows</div>
                        <div>• Canva ___ d. Advanced photo editing</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Digital Tools Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three tools you would use to create a circle in graphic software:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What tool would you use to fill a shape with red color?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Design Challenge - Logo or Sticker</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use graphic software (Paint, Google Drawings, or Canva) to create a simple logo or sticker design:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Your design MUST include:</strong></div>
                        <div>• At least 3 different shapes (circle, square, triangle, or rectangle)</div>
                        <div>• At least 2 different colors</div>
                        <div>• A clear purpose (e.g., a brand logo, a sticker for your notebook, a club emblem)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Paste or sketch your digital design here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Design Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was your design? What shapes and colors did you use?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> How is drawing on a computer different from drawing on paper?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple logo design on paper using at least 3 shapes. Bring it to class to recreate digitally tomorrow.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechnologyWeek5);
    console.log("grade4-technology-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechnologyWeek5);
    console.log("grade4-technology-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechnologyWeek5',
        metadata: grade4TechnologyWeek5.metadata,
        days: grade4TechnologyWeek5
    });
    console.log("grade4-technology-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechnologyWeek5 = grade4TechnologyWeek5;
console.log("grade4-technology-week5.js loaded and registered successfully");