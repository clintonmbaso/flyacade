// Grade 6 Technology Studies - Term 2 Week 10 Data
const grade6TechnologyWeek10 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 10,
        title: "Advanced 3D Modeling",
        description: "Exploring textures, animation, and rendering in 3D modeling"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Advanced 3D Modeling",
        subtopic: "Applying Textures",
        lessonContent: `
            <p>Welcome to the world of 3D textures! Today we'll learn how to add colors, patterns, and surface details to make our 3D models look realistic and interesting.</p>
            <p><strong>Key Question:</strong> How can we make a plain 3D object look like wood, metal, or fabric?</p>
            <p><strong>Introduction:</strong> <strong>Textures</strong> are digital images or patterns that wrap around 3D objects to give them color, detail, and surface qualities. Without textures, all 3D models would look like plain gray shapes!</p>
            <p><strong>Types of Textures:</strong></p>
            <ol>
                <li><strong>Color Textures (Diffuse Maps):</strong> Add basic colors and patterns to an object's surface</li>
                <li><strong>Bump Maps:</strong> Create the illusion of bumps, ridges, and grooves without changing the actual shape</li>
                <li><strong>Reflection Maps (Specular Maps):</strong> Control how shiny or reflective a surface appears</li>
                <li><strong>Transparency Maps:</strong> Make parts of an object see-through (like glass or windows)</li>
            </ol>
            <p><strong>Common Texture Applications:</strong></p>
            <ul>
                <li>Wood grain for furniture models</li>
                <li>Brick patterns for building walls</li>
                <li>Metal scratches for old machinery</li>
                <li>Fabric weave for clothing or upholstery</li>
                <li>Grass and dirt for ground surfaces</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Plain vs. Textured</div>
                <p>A plain white cube is boring. Add a wood texture, and it becomes a wooden block. Add a brick texture, and it becomes a miniature building!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> UV Mapping</div>
                <p>UV Mapping is like unwrapping a 3D gift box and laying it flat. Texture artists paint on the flat version, then wrap it back onto the 3D shape.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Procedural Textures</div>
                <p>Some textures are created by computer formulas (procedural), not photographs. These can generate infinite variations of clouds, marble, or noise patterns.</p>
            </div>
        `,
        taskInstructions: "Apply different textures to 3D objects and adjust surface properties.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Texture Matching Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each object to the best texture type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A rusty metal gate → _________</div>
                        <div>• A glass window → _________</div>
                        <div>• A leather sofa → _________</div>
                        <div>• A grassy hill → _________</div>
                        <div>• A polished mirror → _________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Design Your Texture</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sketch a texture pattern for each object:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>A wooden treasure chest:</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div>
                            <strong>A shiny robot armor plate:</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Digital Texture Application</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In your 3D software, apply at least three different textures to a simple shape (cube or sphere). Describe the results:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Texture Vocabulary</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Define these texture terms in your own words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Diffuse Map: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>Bump Map: ___________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>UV Mapping: __________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 everyday objects with interesting textures (wood grain, fabric weave, brick pattern). Take photos or sketch them and describe how you would recreate these textures in 3D software.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Advanced 3D Modeling",
        subtopic: "3D Animation",
        lessonContent: `
            <p>Today we'll bring our 3D models to life through animation! Learn how to make objects move through digital space.</p>
            <p><strong>Key Question:</strong> How do animators make 3D characters walk, run, and jump?</p>
            <p><strong>Introduction:</strong> <strong>3D Animation</strong> is the process of creating movement by changing an object's position, rotation, or scale over time. Each position is called a <strong>keyframe</strong>, and the computer creates the in-between frames automatically.</p>
            <p><strong>Basic Animation Concepts:</strong></p>
            <ol>
                <li><strong>Keyframes:</strong> Markers that define starting and ending points of movement</li>
                <li><strong>Timeline:</strong> The workspace where animators arrange keyframes over time</li>
                <li><strong>Interpolation (Tweening):</strong> The computer's calculation of frames between keyframes</li>
                <li><strong>Easing:</strong> Making movement start slow, speed up, or slow down naturally</li>
            </ol>
            <p><strong>Types of 3D Animation:</strong></p>
            <ul>
                <li><strong>Translation Animation:</strong> Moving an object from one position to another (X, Y, Z axes)</li>
                <li><strong>Rotation Animation:</strong> Spinning or turning an object around its center</li>
                <li><strong>Scale Animation:</strong> Making an object grow larger or shrink smaller</li>
                <li><strong>Path Animation:</strong> Moving an object along a curved or straight line</li>
                <li><strong>Camera Animation:</strong> Moving the viewer's perspective through the scene</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-film"></i> The Bouncing Ball</div>
                <p>A bouncing ball is the classic first animation. Keyframe 1: ball at top. Keyframe 2: ball at ground (squashed). Keyframe 3: ball back at top. The computer fills in the frames between!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Easing Explained</div>
                <p>Without easing, a car would start instantly and stop suddenly (robotic). With easing, it accelerates smoothly and decelerates naturally - just like real life!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-video"></i> 12 Principles of Animation</div>
                <p>Professional animators follow 12 principles including "squash and stretch" (deforming objects during motion) and "anticipation" (a small backward move before a forward action).</p>
            </div>
        `,
        taskInstructions: "Create keyframe animations using translation, rotation, and scale.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Keyframe Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For a bouncing ball animation, plan your keyframes in the timeline below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Frame 1 (Start): Ball at top, round shape</div>
                        <div>Frame ____: Ball hitting ground, squashed shape</div>
                        <div>Frame ____: Ball at top again, round shape</div>
                        <div>Frame ____: Ball hitting ground again, squashed shape</div>
                    </div>
                    <div class="timeline-area" style="height: 60px; margin-top: 10px; background: #f0f0f0; position: relative;">
                        <div style="position: absolute; left: 0%; top: 0; width: 2px; height: 100%; background: black;"></div>
                        <div style="position: absolute; left: 25%; top: 0; width: 2px; height: 100%; background: black;"></div>
                        <div style="position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background: black;"></div>
                        <div style="position: absolute; left: 75%; top: 0; width: 2px; height: 100%; background: black;"></div>
                        <div style="position: absolute; left: 100%; top: 0; width: 2px; height: 100%; background: black;"></div>
                        <p style="text-align: center; line-height: 60px;">Timeline (Frame numbers: 0 → 10 → 20 → 30 → 40)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animation Storyboard</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a 4-frame storyboard for a simple animation (ball bouncing, car driving, or character waving):
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Frame 1</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Frame 2</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Frame 3</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Frame 4</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Animation Types Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Identify which type of animation is described:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A car driving from left to right: _________</div>
                        <div>B. A wheel spinning around: _________</div>
                        <div>C. A balloon inflating and getting bigger: _________</div>
                        <div>D. The camera zooming in on a character's face: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Animation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Using 3D software (or scratch animation), create a simple 3-frame animation. Describe your process:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Plan a short 3D animation story (5-10 seconds). Write a brief script and sketch 3 key moments from your animation.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Advanced 3D Modeling",
        subtopic: "Rendering",
        lessonContent: `
            <p>Today we'll explore rendering - the final step that transforms your 3D model into a realistic, finished image!</p>
            <p><strong>Key Question:</strong> How do 3D artists turn basic models into photorealistic images?</p>
            <p><strong>Introduction:</strong> <strong>Rendering</strong> is the process of generating a 2D image or animation from a 3D scene. The computer calculates lighting, shadows, reflections, textures, and camera angles to create the final result.</p>
            <p><strong>The Rendering Process:</strong></p>
            <ol>
                <li><strong>Scene Setup:</strong> Position models, lights, and camera</li>
                <li><strong>Lighting Calculation:</strong> Computer traces how light bounces off surfaces</li>
                <li><strong>Shadow Generation:</strong> Calculating where objects block light</li>
                <li><strong>Texture Application:</strong> Applying colors and surface details</li>
                <li><strong>Final Output:</strong> Generating the finished image or video frame</li>
            </ol>
            <p><strong>Types of Rendering:</strong></p>
            <ul>
                <li><strong>Real-Time Rendering:</strong> Used in video games (fast, less detailed - 30-60 frames per second)</li>
                <li><strong>Offline Rendering:</strong> Used in movies (slower, highly detailed - minutes or hours per frame)</li>
                <li><strong>Ray Tracing:</strong> Advanced technique that simulates realistic light paths and reflections</li>
            </ul>
            <p><strong>Rendering Settings Affecting Quality:</strong></p>
            <ul>
                <li><strong>Resolution:</strong> Image size (1080p, 4K, etc.)</li>
                <li><strong>Samples/Pixel:</strong> Higher samples = smoother, less "noisy" images</li>
                <li><strong>Light Bounces:</strong> Number of times light reflects before reaching camera</li>
                <li><strong>Shadows:</strong> Soft vs. hard shadows for realism</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Investment</div>
                <p>A single frame from Pixar's "Toy Story 4" took up to 120 hours to render! With 24 frames per second, a 90-minute movie required millions of computer hours.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microchip"></i> Cloud Rendering</div>
                <p>Big animation studios use "render farms" - thousands of computers working together. Today, artists can also rent cloud computing power instead of buying expensive hardware.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Lighting Makes It Real</div>
                <p>A cube with no lighting looks flat and gray. Add a light source, shadows, and reflections - the same cube suddenly looks like it exists in a real space!</p>
            </div>
        `,
        taskInstructions: "Adjust render settings and compare results for quality and time.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Render Settings Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, select the BEST render settings:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A mobile video game needing 60 frames per second: Fast/Low Quality OR Slow/High Quality?</div>
                        <div>Answer: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 10px;">B. A movie poster needing print-quality detail: Fast/Low Quality OR Slow/High Quality?</div>
                        <div>Answer: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        
                        <div style="margin-top: 10px;">C. A quick preview to check animation timing: Fast/Low Quality OR Slow/High Quality?</div>
                        <div>Answer: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Lighting Your Scene</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw how shadows change based on light position:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>Light from the LEFT:</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div>
                            <strong>Light from ABOVE:</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ray Tracing Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Explain why ray tracing creates more realistic images than older rendering methods:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Render Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you rendered a 10-second animation at 24 frames per second, and each frame takes 5 minutes to render, how many TOTAL minutes would the render take?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What rendering term describes the grainy appearance caused by too few samples per pixel?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What is the difference between real-time and offline rendering? Give an example of when each would be used.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Research one animated movie and find out what software and render times were used. Write a short paragraph about how rendering technology made that movie possible.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek10);
    console.log("grade6-technology-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek10);
    console.log("grade6-technology-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek10',
        metadata: grade6TechnologyWeek10.metadata,
        days: grade6TechnologyWeek10
    });
    console.log("grade6-technology-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek10 = grade6TechnologyWeek10;
console.log("grade6-technology-week10.js loaded and registered successfully");