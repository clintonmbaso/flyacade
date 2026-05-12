// Grade 5 Technology Studies - Term 2 Week 9 Data
const grade5TechnologyWeek9 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 9,
        title: "Pictorial Drawing and Rendering",
        description: "Exploring isometric and oblique views, and applying rendering techniques to show textures"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Pictorial Drawing",
        subtopic: "Isometric and Oblique Views",
        lessonContent: `
            <p>Welcome to the world of pictorial drawing! Today we'll learn how to make flat drawings look like they have depth and dimension.</p>
            <p><strong>Key Question:</strong> How can we show a 3D object on a flat piece of paper?</p>
            <p><strong>Introduction:</strong> Pictorial drawings show objects as they appear in three dimensions (height, width, and depth). Two common types are isometric and oblique drawings.</p>
            <p><strong>Isometric Drawing:</strong></p>
            <ul>
                <li>All three axes (height, width, depth) are shown at 120-degree angles</li>
                <li>Lines are drawn at 30 degrees from the horizontal</li>
                <li>All measurements are drawn to scale (not shortened)</li>
                <li>Gives a realistic, balanced 3D appearance</li>
            </ul>
            <p><strong>Oblique Drawing:</strong></p>
            <ul>
                <li>The front face is drawn flat (true shape and size)</li>
                <li>Depth lines go back at a 45-degree angle</li>
                <li>Depth measurements are usually half scale</li>
                <li>Easier to draw than isometric, but can look distorted</li>
            </ul>
            <p><strong>Key Differences:</strong></p>
            <ol>
                <li><strong>Angles:</strong> Isometric uses 30° angles; Oblique uses 45° for depth</li>
                <li><strong>Front face:</strong> Oblique shows true shape; Isometric shows all faces at an angle</li>
                <li><strong>Difficulty:</strong> Oblique is easier for beginners; Isometric looks more realistic</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Isometric Box Example</div>
                <p>Imagine looking at a box from the corner. All three sides are visible, and the edges meet at 120-degree angles. This is isometric projection!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Oblique Box Example</div>
                <p>Imagine looking at a building from the front. The front is flat like a photograph, and the side goes back at an angle. This is oblique drawing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Quick Memory Trick</div>
                <p><strong>Iso</strong>metric = <strong>Iso</strong> (same) meaning all angles are equal. <strong>Oblique</strong> = the front is <strong>O</strong>blique (straight) and depth goes back!</p>
            </div>
        `,
        taskInstructions: "Identify and differentiate between isometric and oblique drawings, then practice drawing a basic isometric box.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Spot the Difference</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the two drawings shown by your teacher. Which one is isometric and which is oblique? How can you tell?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Isometric Box Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Follow along as we draw an isometric box step by step:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: Draw a light vertical line (height)</div>
                        <div>Step 2: Draw two lines at 30° from the bottom (width and depth)</div>
                        <div>Step 3: Complete the base by drawing parallel lines</div>
                        <div>Step 4: Draw vertical lines for the back corners</div>
                        <div>Step 5: Complete the top face with 30° lines</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the Venn diagram comparing isometric and oblique drawings:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>Isometric Only</strong>
                                <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>Both</strong>
                                <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>Oblique Only</strong>
                                <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which type of drawing do you think would be better for showing furniture designs? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a box-shaped object at home (like a cereal box or tissue box). Draw it using BOTH isometric and oblique styles. Bring both drawings to class.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Pictorial Drawing",
        subtopic: "Rendering Materials",
        lessonContent: `
            <p>Today we'll bring our 3D drawings to life by adding rendering techniques that show different materials and textures!</p>
            <p><strong>Key Question:</strong> How can pencil shading make wood look like wood and metal look like metal?</p>
            <p><strong>Introduction:</strong> Rendering is the process of adding shading, patterns, and textures to a drawing to make materials look realistic. It helps people understand what an object is made of.</p>
            <p><strong>Rendering Techniques for Different Materials:</strong></p>
            <ul>
                <li><strong>Wood:</strong> Draw wavy parallel lines (grain lines) along the surface. Add knots for extra realism.</li>
                <li><strong>Glass:</strong> Use light shading with sharp white highlights. Draw reflections and show what's behind it.</li>
                <li><strong>Metal:</strong> Use high contrast shading - very dark next to very light (shiny reflections). Add straight highlight lines.</li>
                <li><strong>Concrete/Rough Stone:</strong> Use stippling (dots) or rough scribble marks. Keep shading even and flat.</li>
            </ul>
            <p><strong>Basic Shading Tips:</strong></p>
            <ol>
                <li>Decide where light is coming from (light source)</li>
                <li>The side facing the light is brightest</li>
                <li>The opposite side is darkest (shadow)</li>
                <li>Use blending to make smooth transitions</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Wood Texture</div>
                <p>Wood grain flows like wavy rivers. Draw gentle curves that follow the shape of your object. Add small dark ovals for knots where branches used to grow.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Glass Effect</div>
                <p>Glass isn't just "clear" - it has reflections! Leave bright white streaks and shade the edges darker. If you draw a window, show what's inside through the glass.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cog"></i> Shiny Metal</div>
                <p>Metal has sudden changes from light to dark. Draw a dark band next to a white band - this creates the "shiny chrome" effect. Curved metal needs curved highlights!</p>
            </div>
        `,
        taskInstructions: "Apply rendering techniques to show different materials including wood, glass, metal, and concrete.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Texture Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In each box below, practice the rendering technique shown:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Wood</strong>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Glass</strong>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Metal</strong>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Concrete/Rough Stone</strong>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Render Your Isometric Box</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Take your isometric box from yesterday. Choose a material (wood, glass, metal, or concrete) and render it:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <div style="margin-top: 10px;">
                        <label>I chose to render my box as: <input type="text" style="margin-left: 10px; padding: 5px;" placeholder="Wood / Glass / Metal / Concrete"></label>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Material Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each object to the best rendering technique:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A wooden chair: _________</div>
                        <div>A chrome faucet: _________</div>
                        <div>A glass window: _________</div>
                        <div>A concrete wall: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Light Source Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a simple sphere (circle). Shade it to show light coming from the top-left corner. Label where the light source is:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which material was most challenging to render? Which was easiest? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple 3D object (like a cup, phone, or toy). Render it to look like TWO different materials (for example, one side wood, one side metal).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyWeek9);
    console.log("grade5-technology-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyWeek9);
    console.log("grade5-technology-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyWeek9',
        metadata: grade5TechnologyWeek9.metadata,
        days: grade5TechnologyWeek9
    });
    console.log("grade5-technology-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyWeek9 = grade5TechnologyWeek9;
console.log("grade5-technology-week9.js loaded and registered successfully");