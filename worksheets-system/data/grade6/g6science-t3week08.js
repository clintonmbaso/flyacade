// Grade 6 Science - Term 3 Week 8 Data
const grade6ScienceWeek8 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 3,
        week: 8,
        title: "Principles of Magnetism",
        description: "Exploring magnetic forces, poles, Earth's magnetism, and real-world applications"
    },
    
    monday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "The Invisible Force (Intro to Magnets)",
        lessonContent: `
            <p>Welcome to our exploration of magnetism! Today we'll discover the invisible force that can attract and repel objects without touching them.</p>
            <p><strong>Key Question:</strong> How can a magnet move a paperclip without touching it?</p>
            <p><strong>Introduction:</strong> Magnets produce an invisible force called a magnetic field. This force can pull (attract) certain materials or push them away (repel) without any physical contact.</p>
            <p><strong>Types of Magnets:</strong></p>
            <ol>
                <li><strong>Bar Magnet:</strong> Rectangular shape with north and south poles at opposite ends</li>
                <li><strong>Horseshoe Magnet:</strong> U-shaped magnet that is very strong</li>
                <li><strong>Ring Magnet:</strong> Donut-shaped magnet often used in experiments</li>
                <li><strong>Button Magnet:</strong> Small, round, flat magnets (also called disc magnets)</li>
            </ol>
            <p><strong>Magnetic vs. Non-Magnetic Materials:</strong></p>
            <ul>
                <li><strong>Magnetic (Attracted to magnets):</strong> Iron, steel, nickel, cobalt</li>
                <li><strong>Non-Magnetic (Not attracted):</strong> Plastic, wood, copper, aluminum, glass, paper, fabric</li>
            </ul>
            <p><strong>Key Fact:</strong> Not all metals are magnetic! Copper and aluminum are metals but magnets won't stick to them.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Magic Wand Trick</div>
                <p>Hide a strong magnet inside a "magic wand" (a hollow tube). Move a paperclip on a table without touching it. The magnetic force passes through the table!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Magnetic Scavenger Hunt</div>
                <p>Walk around your classroom with a magnet. You'll discover that scissors, paperclips, and some desk legs are magnetic, while windows, pencils, and plastic chairs are not.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby-carriage"></i> Baby Proofing</div>
                <p>Baby cabinet locks often use magnets. A special magnetic "key" unlocks the cabinet, keeping little hands safe from dangerous items!</p>
            </div>
        `,
        taskInstructions: "Conduct a magnetic scavenger hunt and classify materials as magnetic or non-magnetic.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Magnetic Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use a magnet to test at least 10 items in your classroom. Record your results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item Tested</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Material</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Magnetic? (Yes/No)</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">1. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">2. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">3. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">4. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">5. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Types of Magnets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label the four types of magnets (bar, horseshoe, ring, button):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Conclusion Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three types of magnets:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> List three materials that are attracted to magnets:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think copper wire isn't attracted to a magnet, but a steel paperclip is?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 magnetic and 5 non-magnetic objects at home. List them and bring your list to class.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "North Meets South (Poles and Laws)",
        lessonContent: `
            <p>Today we'll discover that every magnet has two special ends called poles, and we'll learn the rules of how magnets interact!</p>
            <p><strong>Key Question:</strong> Why do some magnets push apart while others snap together?</p>
            <p><strong>Magnetic Poles:</strong></p>
            <ul>
                <li>Every magnet has a <strong>North Pole (N)</strong> and a <strong>South Pole (S)</strong></li>
                <li>These poles are where the magnetic force is strongest</li>
                <li>Even if you cut a magnet in half, each piece becomes a new magnet with its own N and S poles!</li>
            </ul>
            <p><strong>The Laws of Magnetism:</strong></p>
            <ol>
                <li><strong>Like Poles Repel:</strong> North-North or South-South push away from each other</li>
                <li><strong>Unlike Poles Attract:</strong> North-South pull toward each other</li>
            </ol>
            <p><strong>Memory Trick:</strong> Think of it like friends and enemies. "Opposites attract" (they want to be together). "Same poles repel" (they want to stay apart).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-up"></i> Floating Magnet</div>
                <p>Stack ring magnets on a pencil with like poles facing each other. The top magnet will "float" in the air above the bottom one because like poles repel!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> The Fighting Magnets</div>
                <p>Try to push two north poles together. You'll feel a pushing force fighting back - that's repulsion! Turn one magnet around and they'll snap together - that's attraction.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Cutting a Magnet</div>
                <p>If you cut a bar magnet in half, you don't get a separate north and south piece. Instead, you get TWO complete magnets, each with its own north and south pole!</p>
            </div>
        `,
        taskInstructions: "Demonstrate attraction and repulsion using magnets and draw the laws of magnetism.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Floating Magnet Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Stack 3-4 ring magnets on a pencil with like poles facing each other. Draw what happens:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What caused the magnets to "float" instead of touching?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing the Laws of Magnetism</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw two bar magnets showing ATTRACTION (unlike poles facing each other). Use arrows to show the direction of force:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw two bar magnets showing REPULSION (like poles facing each other). Use arrows to show the direction of force:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Pole Prediction</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If the north pole of one magnet is near the south pole of another magnet, will they attract or repel?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> If you have two south poles facing each other, what will happen?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Complete the rule: "Opposites _______, likes _______."
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Find two magnets at home (refrigerator magnets work!). Test what happens when you try to push their same-colored sides together. Write your observations.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "Finding Your Way (Magnets and the Earth)",
        lessonContent: `
            <p>Today we'll discover how magnets help us navigate the world and how Earth itself is a giant magnet!</p>
            <p><strong>Key Question:</strong> How did explorers find their way across oceans before GPS?</p>
            <p><strong>Earth: A Giant Magnet</strong></p>
            <ul>
                <li>Earth acts like a gigantic bar magnet</li>
                <li>It has a magnetic North Pole and a magnetic South Pole</li>
                <li>The Earth's outer core (made of liquid iron) creates this magnetic field</li>
            </ul>
            <p><strong>How a Compass Works:</strong></p>
            <ul>
                <li>A compass contains a small, lightweight magnet that can spin freely</li>
                <li>The magnet always aligns itself with Earth's magnetic field</li>
                <li>The north-seeking pole of the compass points toward Earth's magnetic North Pole</li>
                <li><strong>Important:</strong> The compass's "north" pole is actually attracted to Earth's magnetic SOUTH pole (remember: opposites attract!)</li>
            </ul>
            <p><strong>Why This Matters:</strong> Before GPS and satellites, explorers like Christopher Columbus and Zheng He used compasses to navigate across unknown oceans.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compass"></i> DIY Compass</div>
                <p>Rub a sewing needle with a bar magnet about 50 times (always in the same direction). Float it on a cork in water. The needle will turn and point North!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe-americas"></i> Earth's Magnetic Shield</div>
                <p>Earth's magnetic field protects us from harmful solar radiation. It deflects charged particles from the Sun, creating the beautiful Northern Lights (Aurora Borealis)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dove"></i> Animal Navigation</div>
                <p>Birds, sea turtles, and even some bacteria use Earth's magnetic field to navigate during migration. They have tiny magnetic particles in their bodies!</p>
            </div>
        `,
        taskInstructions: "Build a working compass and explain how Earth's magnetism makes it work.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: DIY Compass Construction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow these steps to make your own compass. Record your observations:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Materials:</strong> Sewing needle, bar magnet, small cork, bowl of water<br><br>
                        <strong>Steps:</strong>
                        <ol>
                            <li>Rub the needle with the bar magnet 50 times in the same direction</li>
                            <li>Push the needle through a small piece of cork</li>
                            <li>Float the cork gently in a bowl of water</li>
                            <li>Watch which direction the needle points</li>
                        </ol>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">Which direction did your compass needle point? ________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compass Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label a compass, showing the North, South, East, and West directions:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comprehension Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why does a compass needle always point north?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If the north pole of a compass needle points toward Earth's geographic North Pole, what must be true about Earth's magnetic pole at the North?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name two animals that use Earth's magnetic field to navigate:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Use your homemade compass (or a phone compass app) to find which direction your bedroom window faces. Write down your finding.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "Magnets in the Modern World",
        lessonContent: `
            <p>Today we'll explore the amazing ways magnets are used in everyday technology, from your home to high-speed trains!</p>
            <p><strong>Key Question:</strong> Where are magnets hidden in your house?</p>
            <p><strong>Everyday Magnet Uses:</strong></p>
            <ul>
                <li><strong>Refrigerator doors:</strong> Magnetic seals keep cold air inside</li>
                <li><strong>Speakers and headphones:</strong> Magnets vibrate to create sound</li>
                <li><strong>Computers and phones:</strong> Magnets store data on hard drives</li>
                <li><strong>Credit cards:</strong> Magnetic strips store your account information</li>
                <li><strong>Microwave ovens:</strong> Magnets help generate the waves that cook food</li>
            </ul>
            <p><strong>Advanced Technology:</strong></p>
            <ol>
                <li><strong>Maglev Trains:</strong> "Magnetic Levitation" trains float above tracks using powerful magnets. No friction means they can travel over 600 km/h (370 mph)!</li>
                <li><strong>Electric Motors:</strong> Magnets inside fans, washing machines, and electric cars make the spinning motion happen</li>
                <li><strong>MRI Machines:</strong> Hospitals use giant electromagnets to see inside the human body without surgery</li>
                <li><strong>Scrap Yard Cranes:</strong> Huge electromagnets lift and sort tons of metal for recycling</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> Maglev Trains</div>
                <p>Japan's Maglev train holds the world speed record at 603 km/h (374 mph)! Because the train floats on magnetic fields, there's no friction with the tracks.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> How Speakers Work</div>
                <p>A speaker has a magnet and a coil of wire. When electricity flows through the coil, it pushes against the magnet, moving a cone back and forth to create sound waves.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Scrap Yard Crane</div>
                <p>An electromagnet can be turned on and off. When turned on, it lifts tons of steel cars. When turned off, the metal drops. Perfect for recycling!</p>
            </div>
        `,
        taskInstructions: "Identify everyday devices that use magnets and explain how they work.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Scrap Yard Crane Simulation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a magnet on a string, try to pick up paperclips (representing scrap metal). Write about how this simulates a real scrap yard crane:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Magnet Uses Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the chart below with three devices that use magnets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Device</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">What the Magnet Does</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">1. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">2. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">3. _________</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Maglev Train Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Explain why Maglev trains are so fast using what you learned about magnetic poles:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What do you think would be different in our world if magnets didn't exist?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which magnetic technology (Maglev trains, MRI machines, speakers) do you find most interesting and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find 5 devices that use magnets. List them and explain what the magnet does in each one.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "Magnetism Review & Application",
        lessonContent: `
            <p>Today we'll review everything we've learned about magnetism and apply our knowledge to new situations!</p>
            <p><strong>Week 8 Review:</strong></p>
            <ol>
                <li><strong>Magnetic Materials:</strong> Iron, steel, nickel, cobalt (not all metals!)</li>
                <li><strong>Types of Magnets:</strong> Bar, horseshoe, ring, button</li>
                <li><strong>Magnetic Poles:</strong> Every magnet has North and South poles</li>
                <li><strong>Laws of Magnetism:</strong> Opposites attract; like poles repel</li>
                <li><strong>Earth as a Magnet:</strong> Earth's magnetic field makes compasses work</li>
                <li><strong>Applications:</strong> Speakers, Maglev trains, MRI machines, scrap yard cranes</li>
            </ol>
            <p><strong>Key Takeaways:</strong></p>
            <ul>
                <li>Magnetic force is invisible but powerful</li>
                <li>Magnets work through some materials (paper, plastic, wood) but not others</li>
                <li>The Earth is a giant magnet that protects and guides us</li>
                <li>Magnetism is essential to modern technology</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Connect the Concepts</div>
                <p>Maglev trains use the law of "like poles repel" to float. Compasses use "opposites attract" to point north. Same science, different applications!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microchip"></i> Future of Magnets</div>
                <p>Scientists are developing new magnetic materials that could make computers faster, medical imaging clearer, and trains even quicker!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Protecting Data</div>
                <p>Strong magnets can erase credit cards and damage hard drives. That's why you should never put a strong magnet near your phone or computer!</p>
            </div>
        `,
        taskInstructions: "Complete review activities including a concept map, real-world scenarios, and a self-assessment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Concept Map</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a concept map showing what you learned about magnetism this week. Include: types of magnets, magnetic materials, poles, laws, Earth's magnetism, and applications:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A hiker lost their compass. How could they determine which direction is north using a magnet and a bowl of water?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why do refrigerator magnets eventually fall off if they get too hot or are hit hard?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A scrapyard needs to separate steel cans from aluminum cans. How can magnetism help?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Mark each statement as True (T) or False (F):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ All metals are magnetic</div>
                        <div>___ Like poles attract each other</div>
                        <div>___ Earth has a magnetic field</div>
                        <div>___ A compass works because of Earth's magnetism</div>
                        <div>___ Magnets can work through paper</div>
                        <div>___ Cutting a magnet destroys its magnetism</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most interesting thing you learned about magnetism this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> How will you use what you learned about magnets in your daily life?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page poster about magnetism including: types of magnets, the law of attraction/repulsion, how a compass works, and three real-world uses of magnets.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek8);
    console.log("grade6-science-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek8);
    console.log("grade6-science-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek8',
        metadata: grade6ScienceWeek8.metadata,
        days: grade6ScienceWeek8
    });
    console.log("grade6-science-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek8 = grade6ScienceWeek8;
console.log("grade6-science-week8.js loaded and registered successfully");