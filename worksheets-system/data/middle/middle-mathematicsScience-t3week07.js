// Grade Middle - Term 3 Week 7 Data
const gradeMiddleWeek7 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 3,
        week: 7,
        title: "Light & Shadows",
        description: "Exploring light sources, shadow formation, light blocking, and shadow length changes"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Introduction to Light – Identifying Light Sources",
        lessonContent: `
            <p>Welcome to our exploration of light and shadows! Today we'll discover what light is and where it comes from.</p>
            <p><strong>Key Question:</strong> What is light, and where does it come from?</p>
            <p><strong>Introduction:</strong> Light is a form of energy that allows us to see the world around us. Without light, everything would be dark and we couldn't see anything!</p>
            <p><strong>Main Sources of Light:</strong></p>
            <ol>
                <li><strong>The Sun:</strong> Our most important natural light source. It provides light and heat for life on Earth.</li>
                <li><strong>Flashlights:</strong> A portable, battery-powered light source we can control.</li>
                <li><strong>Other Light Sources:</strong> Lamps, light bulbs, candles, fireflies, and stars.</li>
            </ol>
            <p><strong>Types of Light Sources:</strong></p>
            <ul>
                <li><strong>Natural Light Sources:</strong> Sun, stars, fireflies, lightning</li>
                <li><strong>Artificial Light Sources:</strong> Flashlights, light bulbs, candles, lamps, screens</li>
            </ul>
            <p><strong>Key Fact:</strong> Light travels in straight lines. This is why shadows form when something blocks the light!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> The Sun</div>
                <p>The sun is 150 million kilometers away from Earth, but its light reaches us in just 8 minutes! It's our main source of natural light.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Artificial Light</div>
                <p>Thomas Edison invented the first practical light bulb in 1879. Before that, people used candles and oil lamps for light at night.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt"></i> Light Travels Fast</div>
                <p>Light travels at about 300,000 kilometers per second! That's fast enough to go around the Earth 7 times in one second.</p>
            </div>
        `,
        taskInstructions: "Identify and categorize light sources, then draw them.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Light Source Categories</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a T-chart sorting these items into Natural or Artificial light sources:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Items to sort:</strong> Sun, Flashlight, Candle, Firefly, Light bulb, Stars, Lamp, Lightning</p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Natural Light Sources</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Artificial Light Sources</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Light Sources</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label one natural light source and one artificial light source:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What would life be like without the sun?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name three things that produce their own light (not just reflect it):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home at night. List 5 different sources of light you see. Which are natural and which are artificial?",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Making Simple Shadows",
        lessonContent: `
            <p>Today we'll discover how shadows are made and create our own shadow puppets!</p>
            <p><strong>Key Question:</strong> How are shadows formed?</p>
            <p><strong>Introduction:</strong> A shadow is a dark area where light has been blocked. When light shines on an object, the object blocks the light and creates a shadow behind it.</p>
            <p><strong>What You Need to Make a Shadow:</strong></p>
            <ol>
                <li><strong>A Light Source:</strong> Sun, flashlight, lamp, or candle</li>
                <li><strong>An Object:</strong> Your hand, a toy, or any solid thing</li>
                <li><strong>A Surface:</strong> Wall, ground, or screen to show the shadow</li>
            </ol>
            <p><strong>How Shadows Work:</strong></p>
            <ul>
                <li>Light travels in straight lines (light rays)</li>
                <li>When an object blocks the light, the light cannot pass through</li>
                <li>The dark area behind the object is the shadow</li>
                <li>The shape of the shadow matches the shape of the object blocking the light</li>
            </ul>
            <p><strong>Key Fact:</strong> Transparent objects (like glass) let light pass through and make very faint or no shadows. Opaque objects (like your hand) block light completely and make dark shadows.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Hand Shadows</div>
                <p>By moving your hands into different shapes, you can create shadow animals like birds, dogs, and rabbits on the wall!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Your Shadow</div>
                <p>On a sunny day, your shadow follows you everywhere! It's made because your body blocks sunlight from reaching the ground.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> No Shadow?</div>
                <p>On a cloudy day, shadows look lighter and blurry because clouds scatter the sunlight, creating multiple light directions.</p>
            </div>
        `,
        taskInstructions: "Use a torch in a dimmed area to create hand shadows on the wall.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shadow Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In a dimmed corner of the classroom, use a torch/flashlight to create hand shadows on the wall. Draw three different hand shadow shapes you can make:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span style="font-size: 12px;">Shadow 1</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span style="font-size: 12px;">Shadow 2</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span style="font-size: 12px;">Shadow 3</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Observation Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What happened to the shadow when you moved your hand closer to the light source?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What happened when you moved your hand farther away from the light source?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you need a dimmed or dark room to see shadows clearly?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shadow Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture showing a light source, an object, and its shadow:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "With a flashlight at home, make three different hand shadows on your bedroom wall. Ask a family member to guess what each shadow is!",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Blocking Light – Opaque vs. Transparent",
        lessonContent: `
            <p>Today we'll test different materials to see which ones block light completely and which ones let light pass through!</p>
            <p><strong>Key Question:</strong> Why do some objects make dark shadows while others make faint or no shadows?</p>
            <p><strong>Three Types of Materials Based on Light:</strong></p>
            <ol>
                <li><strong>Opaque:</strong> Blocks all light. Creates dark, clear shadows. (Examples: book, wood, your hand, metal)</li>
                <li><strong>Transparent:</strong> Lets all light pass through. Creates no shadow. (Examples: clear glass, clear plastic, clean water)</li>
                <li><strong>Translucent:</strong> Lets some light pass through. Creates faint, blurry shadows. (Examples: wax paper, frosted glass, thin cloth)</li>
            </ol>
            <p><strong>How to Test Materials:</strong></p>
            <ul>
                <li>Shine a flashlight at each object</li>
                <li>Look at the shadow (or light) on the other side</li>
                <li>If you see a dark shape = opaque</li>
                <li>If you can see light clearly through = transparent</li>
                <li>If light comes through but is blurry = translucent</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Opaque Object</div>
                <p>A book blocks all light. Hold a flashlight behind a book and you'll see a dark shadow on the wall. You cannot see the light through the book.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-window-maximize"></i> Transparent Object</div>
                <p>Clear plastic wrap lets almost all light through. It creates almost no shadow because light passes right through it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath"></i> Translucent Object</div>
                <p>A frosted shower door lets some light through but you can't see clearly through it. It creates a soft, blurry shadow.</p>
            </div>
        `,
        taskInstructions: "Test different classroom objects to see which block light completely vs. let light through.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Light Blocking Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Test each object with a flashlight. Record your observations:
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Does light pass through?</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Opaque, Transparent, or Translucent?</th>
                        </tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Book</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Clear plastic</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Wax paper</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Your hand</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Pencil case</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Water in a cup</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort the objects you tested into three groups:
                    <div style="margin-top: 10px;">
                        <div><strong>Opaque (Block all light):</strong> <span class="answer-space" style="display: inline-block; width: 200px;"></span></div>
                        <div><strong>Transparent (Let all light through):</strong> <span class="answer-space" style="display: inline-block; width: 200px;"></span></div>
                        <div><strong>Translucent (Let some light through):</strong> <span class="answer-space" style="display: inline-block; width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing and Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw what happens when light hits an opaque object vs. a transparent object:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span>Opaque Object (like a book)</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span>Transparent Object (like clear plastic)</span>
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do opaque objects make darker shadows than translucent objects?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 opaque, 3 transparent, and 3 translucent items at home. List them in categories.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Outdoor Shadow Walk – Observing Moving Shadows",
        lessonContent: `
            <p>Today we'll go outside on a sunny day to observe our own shadows and how they move with us!</p>
            <p><strong>Key Question:</strong> Why does your shadow follow you everywhere?</p>
            <p><strong>Introduction:</strong> On a sunny day, your body blocks sunlight from reaching the ground. The dark shape on the ground is your shadow. As you move, your shadow moves with you!</p>
            <p><strong>What We'll Observe:</strong></p>
            <ul>
                <li>Your shadow always stays connected to your feet</li>
                <li>When you raise your arm, your shadow's arm raises too</li>
                <li>Your shadow changes direction based on where the sun is</li>
                <li>Your shadow is longest in the morning and evening, shortest at noon</li>
            </ul>
            <p><strong>Safety Reminders:</strong></p>
            <ul>
                <li>Never look directly at the sun – it can damage your eyes!</li>
                <li>Stay with your class and teacher during the outdoor walk</li>
                <li>Be aware of your surroundings</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Moving Shadow</div>
                <p>When you run, your shadow runs too! Your shadow is always connected to you because your body is blocking the sunlight.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Shadow Copycat</div>
                <p>Your shadow copies every move you make. Wave your hand – your shadow waves back! Jump up – your shadow jumps too!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Clouds and Shadows</div>
                <p>When a cloud covers the sun, your shadow disappears! The cloud is blocking the sunlight, so no shadow is cast on the ground.</p>
            </div>
        `,
        taskInstructions: "Go outside on a sunny day to observe your shadow and how it moves with your body.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Outdoor Shadow Observations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Go outside with your class. Find your shadow on the ground. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Where is the sun in the sky? (In front of you, behind you, or to the side?)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• Which direction does your shadow point?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• Raise your right hand. Which hand does your shadow raise?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shadow Movement Activities</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Try these movements and observe what happens to your shadow:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Walk slowly forward → What does your shadow do?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• Jump up and down → What does your shadow do?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• Turn around in a circle → What does your shadow do?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing and Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of yourself outside with your shadow:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happened to your shadow when you stood under a tree or in the shade of a building?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why does your shadow disappear on cloudy days?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "On a sunny day, go outside with a family member. Stand next to each other and compare your shadows. Are they the same length? Why or why not?",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Shadow Lengths – Measuring Shadows Throughout the Day",
        lessonContent: `
            <p>Today we'll discover how shadows change length throughout the day and why midday shadows are the shortest!</p>
            <p><strong>Key Question:</strong> Why are shadows longer in the morning and evening but shortest at midday?</p>
            <p><strong>How Shadow Length Changes:</strong></p>
            <ul>
                <li><strong>Morning (Sunrise):</strong> Sun is low in the east. Shadows are long and point west.</li>
                <li><strong>Midday (Noon):</strong> Sun is high in the sky. Shadows are very short or almost disappear. They point north/south depending on your location.</li>
                <li><strong>Afternoon/Evening (Sunset):</strong> Sun is low in the west. Shadows are long again and point east.</li>
            </ul>
            <p><strong>Why Does This Happen?</strong></p>
            <ul>
                <li>The sun appears to move across the sky (actually Earth is rotating)</li>
                <li>When the sun is low, light hits objects from the side – making long shadows</li>
                <li>When the sun is high, light hits objects from above – making short shadows</li>
            </ul>
            <p><strong>Activity:</strong> We'll measure the shadow of a stick (or a person) at different times of the day!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Measuring Shadows</div>
                <p>At 8:00 AM, a 1-meter stick might cast a 3-meter shadow! At 12:00 PM, the same stick might cast only a 0.3-meter shadow.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Sundials</div>
                <p>Ancient people used shadow lengths to tell time! A sundial uses a stick (gnomon) and marks on the ground to show the hour based on shadow position.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain-sun"></i> Your Shadow at Noon</div>
                <p>At midday, your shadow is so short it might look like you're standing on a small dark puddle!</p>
            </div>
        `,
        taskInstructions: "Measure how long or short an object's shadow looks at different times of the day.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shadow Measurement Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Measure the shadow of a stick (or your own shadow) at three different times today:
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">Time of Day</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Shadow Length (cm or steps)</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Description</th>
                         </tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Morning (before 10:00 AM)</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Midday (12:00 - 1:00 PM)</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        <tr><td style="padding: 8px; border: 1px solid #ddd;">Afternoon (after 2:00 PM)</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                     </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Graph and Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use your measurements to draw a simple bar graph showing shadow length at different times:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> At what time was the shadow longest? Shortest?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Explanation and Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw two pictures showing the sun position and shadow length:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                            <span>Morning (Sun low, long shadow)</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                            <span>Midday (Sun high, short shadow)</span>
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why are shadows shorter when the sun is higher in the sky?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Week Review</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most interesting thing you learned about light and shadows this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "On a sunny day, measure your shadow at 9:00 AM, 12:00 PM, and 3:00 PM. Record the lengths and share with the class on Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleWeek7);
    console.log("gradeMiddle-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleWeek7);
    console.log("gradeMiddle-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleWeek7',
        metadata: gradeMiddleWeek7.metadata,
        days: gradeMiddleWeek7
    });
    console.log("gradeMiddle-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleWeek7 = gradeMiddleWeek7;
console.log("gradeMiddle-week7.js loaded and registered successfully");