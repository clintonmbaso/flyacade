// Grade 6 Technology Studies - Week 9 Data
const grade6TechnologyStudiesWeek9 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        week: 9,
        title: "Presentation Animation Techniques",
        description: "Mastering custom animations, transitions, and motion paths in presentation software"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "The Art of Timing (Custom Animations)",
        subtopic: "Entrance, emphasis, and exit animations",
        lessonContent: `
            <p>Welcome to our exploration of presentation animations. Today we'll learn how to use animations purposefully to highlight information, not just for decoration.</p>
            <p><strong>Key Concept:</strong> Custom animations help control when and how objects appear, emphasize, or disappear on a slide. Good animations guide the audience's attention.</p>
            <p><strong>Why Use Animations?</strong></p>
            <ul>
                <li>Reveal information gradually to avoid overwhelming the audience</li>
                <li>Emphasize key points or data</li>
                <li>Create visual interest while maintaining professionalism</li>
                <li>Control the flow of information during a presentation</li>
            </ul>
            <p><strong>Using the Animation Pane:</strong></p>
            <ul>
                <li>The Animation Pane shows all animations on your slide in sequence</li>
                <li>You can reorder animations by dragging them up or down</li>
                <li>Preview animations to check timing and flow</li>
            </ul>
            <p><strong>Animation Triggers:</strong></p>
            <ul>
                <li><strong>On Click:</strong> Animation plays when you click the mouse (gives you full control)</li>
                <li><strong>With Previous:</strong> Animation plays at the same time as the previous animation</li>
                <li><strong>After Previous:</strong> Animation plays automatically after the previous one finishes</li>
            </ul>
            <p><strong>Setting Durations:</strong> Control how fast or slow animations play to match your speaking pace.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer" style="color: #4A90E2;"></i> On Click Example</div>
                <p>When presenting statistics, use "On Click" to reveal each number as you discuss it, keeping the audience focused on your current point.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Sequence Example</div>
                <p>In a process explanation, use "After Previous" to show steps appearing one after another automatically, simulating progression.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Duration Example</div>
                <p>A "Fade" animation lasting 0.5 seconds feels snappy, while a 2-second fade creates a more dramatic, thoughtful reveal.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice custom animation timing and sequencing.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> List the three animation triggers and explain when you would use each:
                <div class="answer-space" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> What is the main purpose of using animations in presentations? (Hint: It's not just decoration)
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create a simple slide with three facts about your favorite hobby. Apply different entrance animations to each fact:
                <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Sketch your slide layout and label each fact with its animation type</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Set your three facts to appear one by one only when clicked. What trigger setting did you use?
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Create a 3-slide presentation with at least two custom animations per slide. Test the timing by presenting it to a family member.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Smooth Transitions",
        subtopic: "Creating professional flow between slides",
        lessonContent: `
            <p>Today we will learn how to use slide transitions to create seamless movement between ideas in your presentation.</p>
            <p><strong>What Are Transitions?</strong> Transitions are effects that occur when moving from one slide to another. They help connect ideas and maintain visual flow.</p>
            <p><strong>Transition vs. Animation:</strong></p>
            <ul>
                <li><strong>Transitions:</strong> Happen BETWEEN slides</li>
                <li><strong>Animations:</strong> Happen ON a slide</li>
            </ul>
            <p><strong>Selecting Appropriate Transitions:</strong></p>
            <ol>
                <li><strong>Fade:</strong> Simple, professional, works for almost any content</li>
                <li><strong>Morph:</strong> Advanced transition that smoothly transforms similar elements between slides</li>
                <li><strong>Push/Wipe:</strong> Good for showing progression or movement in a direction</li>
                <li><strong>Cut:</strong> Instant change - use for dramatic shifts in topic</li>
            </ol>
            <p><strong>Transition Settings:</strong></p>
            <ul>
                <li><strong>Speed:</strong> Fast (0.5s), Medium (1s), Slow (2s) - choose based on presentation pace</li>
                <li><strong>Sound:</strong> Generally avoid unless absolutely necessary for effect</li>
                <li><strong>Apply to All:</strong> Sets the same transition for every slide (creates consistency)</li>
                <li><strong>Individual Settings:</strong> Lets you customize each slide's transition</li>
            </ul>
            <p><strong>Best Practices:</strong> Transitions should enhance content, not distract. Match transition style to your presentation's tone and content mood.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #FF6B6B;"></i> Fade Transition Example</div>
                <p>Use a simple fade between slides in a business presentation. It's clean, professional, and doesn't distract from your message.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Morph Transition Example</div>
                <p>When showing a diagram that grows between slides, use Morph to smoothly animate the change rather than just showing a new image.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-forward"></i> Push Transition Example</div>
                <p>Use a Push transition to the right when moving through chronological content, as if "turning pages" through time.</p>
            </div>
        `,
        taskInstructions: "Practice selecting and applying appropriate transitions that match content mood without causing distraction.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Transitions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What is the difference between a transition and an animation?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> When would you use "Apply to All" vs. setting individual slide transitions?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating a Themed Presentation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a 4-slide presentation about an animal. For each slide, choose a different transition that matches the content mood:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Slide 1: Introduction (animal name, photo) - Use: _______</div>
                        <div>Slide 2: Habitat - Use: _______</div>
                        <div>Slide 3: Diet - Use: _______</div>
                        <div>Slide 4: Fun facts - Use: _______</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Explain why you chose each transition for that specific slide:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Speed and Professionalism</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What transition speed is most appropriate for a school presentation? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a storyboard showing your 4 slides with transition notes:
                    <div style="display: flex; gap: 15px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="flex: 1; min-width: 120px;">
                            <p><strong>Slide 1:</strong></p>
                            <div class="drawing-area" style="height: 100px;"></div>
                        </div>
                        <div style="flex: 1; min-width: 120px;">
                            <p><strong>Slide 2:</strong></p>
                            <div class="drawing-area" style="height: 100px;"></div>
                        </div>
                        <div style="flex: 1; min-width: 120px;">
                            <p><strong>Slide 3:</strong></p>
                            <div class="drawing-area" style="height: 100px;"></div>
                        </div>
                        <div style="flex: 1; min-width: 120px;">
                            <p><strong>Slide 4:</strong></p>
                            <div class="drawing-area" style="height: 100px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three different presentations online (or examples in software). Analyze their transitions - are they effective or distracting? Write a brief review.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Mapping the Movement (Motion Paths)",
        subtopic: "Moving objects along specific paths",
        lessonContent: `
            <p>Today we will explore motion paths - animations that move objects along a specific route on your slide. This adds dynamic movement to your presentations.</p>
            <p><strong>What Are Motion Paths?</strong> Motion paths allow you to move objects in straight lines, curves, loops, or custom shapes across the slide.</p>
            <p><strong>Types of Motion Paths:</strong></p>
            <ul>
                <li><strong>Lines/Curves:</strong> Straight or curved paths from point A to point B</li>
                <li><strong>Shapes:</strong> Circles, squares, triangles that objects follow</li>
                <li><strong>Loops:</strong> Objects move in circular or repeating patterns</li>
                <li><strong>Custom Paths:</strong> You draw the exact path you want the object to follow</li>
            </ul>
            <p><strong>Drawing and Editing Paths:</strong></p>
            <ol>
                <li>Select an object and choose "Motion Paths" from the animation menu</li>
                <li>Choose a preset path or select "Custom Path" to draw your own</li>
                <li>Click and drag to create the path - click to create points, double-click to finish</li>
                <li>Edit path points by right-clicking on the path and selecting "Edit Points"</li>
            </ol>
            <p><strong>Controlling Movement:</strong></p>
            <ul>
                <li><strong>Speed:</strong> Set duration to control how fast the object moves along the path</li>
                <li><strong>Direction:</strong> Reverse path direction if needed</li>
                <li><strong>Timing:</strong> Coordinate with other animations using triggers</li>
                <li><strong>Smooth Start/End:</strong> Creates more natural acceleration and deceleration</li>
            </ul>
            <p><strong>Practical Applications:</strong> Use motion paths to show processes, demonstrate concepts, or add engaging visual elements to complex explanations.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car" style="color: #8B4513;"></i> Car Movement Example</div>
                <p>Animate a car icon along a curved road path to demonstrate traffic flow or travel routes in a geography presentation.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe-americas"></i> Orbit Example</div>
                <p>Create a solar system diagram with planets following circular paths around the sun to illustrate orbits.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-route"></i> Process Flow Example</div>
                <p>Show a product moving through factory stations using motion paths to visualize manufacturing steps.</p>
            </div>
        `,
        taskInstructions: "Practice creating and controlling motion paths to move objects with precision and purpose.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Motion Paths</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What are three types of motion paths you can use in presentations?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> How do you create a custom motion path (basic steps)?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Great Race Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create "The Great Race" slide with two character icons and a finish line:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 60px;">Sketch your race slide layout with start positions and finish line</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Apply motion paths so both characters race to the finish at different speeds. What settings did you adjust to make one faster?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Path Precision</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What happens if a motion path doesn't end where you want it to? How do you fix it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Create a simple diagram showing a delivery truck's route from warehouse to house using motion paths:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Include warehouse, roads, house, and the path the truck will follow</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Practical Application</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Brainstorm two different school projects where motion paths would be useful:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create a presentation with at least three different motion paths. One must be a custom-drawn path. Be prepared to demonstrate next class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyStudiesWeek9);
    console.log("technologystudies-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyStudiesWeek9);
    console.log("technologystudies-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyStudiesWeek9',
        metadata: grade6TechnologyStudiesWeek9.metadata,
        days: grade6TechnologyStudiesWeek9
    });
    console.log("technologystudies-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyStudiesWeek9 = grade6TechnologyStudiesWeek9;
console.log("technologystudies-week9.js loaded and registered successfully");