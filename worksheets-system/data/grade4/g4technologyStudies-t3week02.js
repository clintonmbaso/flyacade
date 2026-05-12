// Grade 4 Technology Studies - Term 3 Week 2 Data
const grade4TechWeek2 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 3,
        week: 2,
        title: "Foundations of Graphic Communication",
        description: "Learning lettering, numbers, and types of lines used in technical construction and design"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Graphic Communication",
        subtopic: "Lettering & Numbers",
        lessonContent: `
            <p>Welcome to Graphic Communication! Today we'll learn how to print letters and numbers accurately for technical drawings and designs.</p>
            <p><strong>Key Question:</strong> Why is clear writing important in design and construction?</p>
            <p><strong>Introduction:</strong> In technology and design, clear lettering is essential. Engineers, architects, and designers use consistent, legible writing on blueprints, signs, and technical drawings. If letters are messy or unclear, mistakes can happen!</p>
            <p><strong>Why Clear Lettering Matters:</strong></p>
            <ul>
                <li><strong>Blueprints:</strong> Construction workers need to read measurements and notes clearly</li>
                <li><strong>Signs:</strong> People need to understand information quickly and correctly</li>
                <li><strong>Maps:</strong> Labels must be easy to read for navigation</li>
                <li><strong>Product Labels:</strong> Instructions and warnings must be understood by everyone</li>
            </ul>
            <p><strong>Guidelines for Block Lettering:</strong></p>
            <ol>
                <li>Draw light horizontal guidelines (top line and bottom line)</li>
                <li>All letters must touch both the top and bottom lines</li>
                <li>Letters should be consistent in height</li>
                <li>Use a block style (straight lines, no curves or fancy writing)</li>
                <li>Space letters evenly</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Blueprint Example</div>
                <p>Architects use very clear, neat lettering on building plans. If a measurement says "10 m" but looks like "10 cm," the wrong materials might be ordered!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Signage Importance</div>
                <p>Road signs need clear, bold lettering so drivers can read them quickly from a distance. That's why highway signs use simple block letters.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Guidelines Help</div>
                <p>Using guidelines keeps your letters neat and even. Think of them like a fence that keeps your letters standing in a straight line!</p>
            </div>
        `,
        taskInstructions: "Practice drawing construction lines and printing block letters and numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing Guidelines</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw two light horizontal guidelines (top and bottom lines) about 2 cm apart:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practice the Alphabet (Block Style)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Print the uppercase alphabet (A-Z) using your guidelines. Each letter must touch both the top and bottom lines:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practice Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Print numbers 0-9 in block style. Keep them the same height as your letters:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Check your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ All letters touch the top guideline</div>
                        <div>□ All letters touch the bottom guideline</div>
                        <div>□ Letters are similar in height</div>
                        <div>□ Numbers are the same height as letters</div>
                        <div>□ Lettering is neat and legible</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write your full name in block lettering between guidelines:
                    <div class="drawing-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Practice writing the alphabet (A-Z) and numbers (0-9) three times between guidelines on a separate sheet of paper.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Graphic Communication",
        subtopic: "Types of Lines",
        lessonContent: `
            <p>Today we'll learn about different types of lines used in technical construction drawings!</p>
            <p><strong>Key Question:</strong> Why do technical drawings use different types of lines?</p>
            <p><strong>Introduction:</strong> In technical drawing, different lines have different "meanings." Just like words have specific definitions, lines tell the person reading the drawing specific information about the design.</p>
            <p><strong>The Three Main Types of Lines:</strong></p>
            <ol>
                <li><strong>Outline (Object Line):</strong>
                    <ul>
                        <li>Appearance: Thick, solid line</li>
                        <li>Meaning: Shows the visible edges and outlines of an object</li>
                        <li>Example: The outside shape of a box or building</li>
                    </ul>
                </li>
                <li><strong>Hidden Line:</strong>
                    <ul>
                        <li>Appearance: Dashed line (short dashes)</li>
                        <li>Meaning: Shows edges that are hidden from view</li>
                        <li>Example: A drawer inside a desk that you can't see from the outside</li>
                    </ul>
                </li>
                <li><strong>Center Line:</strong>
                    <ul>
                        <li>Appearance: Long-short-long dashed line (alternating long and short dashes)</li>
                        <li>Meaning: Shows the center of circles, holes, or symmetrical objects</li>
                        <li>Example: The middle line of a wheel or the center of a pipe</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Drawing Instruments:</strong> Always use a ruler for straight lines in technical drawings. Practice freehand after mastering ruler-drawn lines.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Outline Example</div>
                <p>When drawing a house from the outside, you use thick solid lines for the walls, roof, windows, and door. These are the parts everyone can see.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drawer"></i> Hidden Line Example</div>
                <p>If you draw a closed drawer, you use dashed lines to show where the drawer is inside the furniture. The dashed lines represent things you can't actually see.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> Center Line Example</div>
                <p>For a round clock, a center line helps show exactly where the middle is. It tells the builder where to put the clock mechanism.</p>
            </div>
        `,
        taskInstructions: "Practice drawing three types of lines using a ruler and freehand.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Line Practice with Ruler</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a ruler, draw each type of line in the spaces below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Outline (thick solid line):</strong></div>
                        <div class="drawing-area" style="height: 30px; margin-top: 5px; margin-bottom: 15px; border: 2px dashed #ccc;"></div>
                        <div><strong>Hidden Line (dashed line):</strong></div>
                        <div class="drawing-area" style="height: 30px; margin-top: 5px; margin-bottom: 15px; border: 2px dashed #ccc;"></div>
                        <div><strong>Center Line (long-short-long):</strong></div>
                        <div class="drawing-area" style="height: 30px; margin-top: 5px; margin-bottom: 15px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Freehand Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now practice drawing the same three line types without a ruler (freehand):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Outline (freehand):</strong></div>
                        <div class="drawing-area" style="height: 30px; margin-top: 5px; margin-bottom: 15px; border: 2px dashed #ccc;"></div>
                        <div><strong>Hidden Line (freehand):</strong></div>
                        <div class="drawing-area" style="height: 30px; margin-top: 5px; margin-bottom: 15px; border: 2px dashed #ccc;"></div>
                        <div><strong>Center Line (freehand):</strong></div>
                        <div class="drawing-area" style="height: 30px; margin-top: 5px; margin-bottom: 15px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Line Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at each line example below. Write the name of the line type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>_________________ <span style="margin-left: 20px;">━━━━━━━━━━</span></div>
                        <div>_________________ <span style="margin-left: 20px;">- - - - - - - -</span></div>
                        <div>_________________ <span style="margin-left: 20px;">━━┅━━┅━━┅━━</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing a Simple Shape</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a simple box below. Use outlines for the visible edges. Add a dashed line inside to show a hidden shelf:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a circle with center lines crossing at its middle:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple object from your home (like a cabinet, desk, or toy). Use outlines for visible edges and hidden lines for parts you cannot see.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Graphic Communication",
        subtopic: "Line Application & Design",
        lessonContent: `
            <p>Today we'll apply our knowledge of lines to create simple technical drawings!</p>
            <p><strong>Key Question:</strong> How do different lines work together in one drawing?</p>
            <p><strong>Review of Line Types:</strong></p>
            <ul>
                <li><strong>Outline (Thick Solid):</strong> Shows visible edges</li>
                <li><strong>Hidden Line (Dashed):</strong> Shows invisible edges</li>
                <li><strong>Center Line (Long-Short-Long):</strong> Shows center points</li>
            </ul>
            <p><strong>How Lines Work Together:</strong></p>
            <p>In a complete technical drawing, all three line types can appear together. Each line type gives different information to the person reading the drawing.</p>
            <p><strong>Example - Drawing a Coffee Mug:</strong></p>
            <ul>
                <li>Outline: Shows the outside shape of the mug and handle</li>
                <li>Hidden Line: Shows where the handle attaches on the back side</li>
                <li>Center Line: Shows the center of the mug opening</li>
            </ul>
            <p><strong>Drawing Checklist:</strong></p>
            <ol>
                <li>Use a ruler for straight lines (when possible)</li>
                <li>Keep lines distinct and different from each other</li>
                <li>Outlines should be thickest</li>
                <li>Hidden lines use even dashes</li>
                <li>Center lines use long-short-long pattern</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mug-hot"></i> Coffee Mug Drawing</div>
                <p>A mug drawing uses thick outlines for the visible cup and handle. Dashed lines show the back of the handle. A center line shows the middle of the cup's opening.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Cabinet Drawing</div>
                <p>When drawing a cabinet, outlines show the visible frame. Dashed lines show where shelves are inside. Center lines show the middle of door handles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Real Engineering</div>
                <p>Engineers use these same line types to draw cars, bridges, airplanes, and buildings. Every line has a specific meaning that professionals understand worldwide!</p>
            </div>
        `,
        taskInstructions: "Combine all three line types to create complete technical drawings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw a Coffee Mug</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a coffee mug using all three line types:
                    <div style="margin-left: 20px; margin-top: 5px; font-size: 14px; color: #666;">
                        • Thick outline for the visible mug body<br>
                        • Thick outline for the visible part of the handle<br>
                        • Hidden (dashed) line for the back part of the handle<br>
                        • Center line through the middle of the mug opening
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw a Book on a Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a book lying on a table. Use outlines for visible edges and hidden lines to show where pages are tucked inside the cover:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Line Types</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the description below. Write which line type should be used:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The front edge of a table: _________</div>
                        <div>B. The center of a circular clock face: _________</div>
                        <div>C. A drawer that is closed (inside the desk): _________</div>
                        <div>D. The visible outline of a door: _________</div>
                        <div>E. The middle line of a pipe: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quality Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Review your drawings. Are your line types clearly different? Which line type was hardest to draw?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple piece of furniture at home (like a chair or bookshelf). Use outlines for visible parts and hidden lines for parts you cannot see.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Technology Studies",
        topic: "Graphic Communication",
        subtopic: "Review & Creative Application",
        lessonContent: `
            <p>Today we'll review everything we've learned about graphic communication and apply our skills to a creative project!</p>
            <p><strong>Week 3 Review:</strong></p>
            <ol>
                <li><strong>Lettering & Numbers:</strong> Using guidelines to create consistent, legible block lettering</li>
                <li><strong>Types of Lines:</strong> Outline (thick solid), Hidden (dashed), Center (long-short-long)</li>
                <li><strong>Line Application:</strong> Combining different line types in a single drawing</li>
            </ol>
            <p><strong>Key Takeaways:</strong></p>
            <ul>
                <li>Clear communication is essential in technology and design</li>
                <li>Guidelines help keep lettering neat and consistent</li>
                <li>Different lines have different meanings in technical drawings</li>
                <li>Using a ruler creates precise, professional-looking drawings</li>
                <li>Freehand practice helps develop drawing skill</li>
            </ul>
            <p><strong>Why This Matters:</strong></p>
            <p>Graphic communication is used in architecture, engineering, product design, map-making, signage, and many other fields. These basic skills are the foundation for all technical drawing!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Career Connection</div>
                <p>Architects, engineers, graphic designers, and carpenters all use these drawing skills every day. Learning these basics now prepares you for many future careers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Practice Makes Progress</div>
                <p>Even professionals practice their line work and lettering regularly. The more you practice, the more natural it becomes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Universal Language</div>
                <p>Technical drawings are understood worldwide, even if people speak different languages. The symbols and line types are the same everywhere!</p>
            </div>
        `,
        taskInstructions: "Complete review activities and create a design project combining lettering and line types.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Lettering Review</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw guidelines and print the following words in neat block letters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• DESIGN</div>
                        <div>• TECHNOLOGY</div>
                        <div>• DRAWING</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Line Type Review</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label each line type below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Outline (Thick Solid): ________________________________</div>
                        <div>Hidden Line (Dashed): ________________________________</div>
                        <div>Center Line (Long-Short-Long): ________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Creative Project - Design a Sign</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Design a classroom sign with a border. Your sign must include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A border made of at least two different line types</div>
                        <div>• A title in neat block lettering using guidelines</div>
                        <div>• A simple drawing of an object using outlines and hidden lines</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most challenging part of learning graphic communication this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Where else might you use these drawing and lettering skills in the future?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a simple poster showing what you learned about graphic communication. Include examples of block lettering and all three line types.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechWeek2);
    console.log("grade4-tech-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechWeek2);
    console.log("grade4-tech-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechWeek2',
        metadata: grade4TechWeek2.metadata,
        days: grade4TechWeek2
    });
    console.log("grade4-tech-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechWeek2 = grade4TechWeek2;
console.log("grade4-tech-week2.js loaded and registered successfully");