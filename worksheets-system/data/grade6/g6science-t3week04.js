// Grade 6 Science - Term 3 Week 4 Data
const grade6ScienceWeek4 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 3,
        week: 4,
        title: "The Universe and Our Solar System",
        description: "Understanding the Milky Way galaxy, solar system components, light sources, celestial movements, and eclipses"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Astronomy",
        subtopic: "Our Place in the Galaxy",
        lessonContent: `
            <p>Welcome to our journey through the cosmos! Today we'll discover where we live in the vast universe.</p>
            <p><strong>Key Question:</strong> Where are we in the universe?</p>
            <p><strong>Introduction:</strong> Let's think about our "Address in Space"! Just like you have a home address (house number, street, city, country), our planet has an address in the universe.</p>
            <p><strong>Our Cosmic Address:</strong></p>
            <ol>
                <li>House → Street → City → Country</li>
                <li><strong>Earth</strong> (our planet)</li>
                <li><strong>Solar System</strong> (Sun, planets, comets, asteroids)</li>
                <li><strong>Milky Way Galaxy</strong> (billions of stars, gas, and dust)</li>
                <li><strong>The Universe</strong> (everything that exists!)</li>
            </ol>
            <p><strong>The Milky Way Galaxy:</strong></p>
            <ul>
                <li>A massive collection of billions of stars, gas, and dust held together by gravity</li>
                <li>Shaped like a giant spiral with arms swirling outward</li>
                <li>Our solar system sits in one of the spiral arms called the Orion Arm</li>
                <li>It takes 250 million years for our solar system to complete one orbit around the galaxy!</li>
            </ul>
            <p><strong>Our Solar System Components:</strong></p>
            <ul>
                <li><strong>The Sun:</strong> Our star at the center</li>
                <li><strong>8 Planets:</strong> Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune</li>
                <li><strong>Dwarf Planets:</strong> Pluto, Ceres, Eris, Makemake, Haumea</li>
                <li><strong>Comets:</strong> Icy bodies that orbit the Sun with long tails</li>
                <li><strong>Asteroids:</strong> Rocky objects mostly in the asteroid belt between Mars and Jupiter</li>
                <li><strong>Meteoroids:</strong> Small rock fragments in space</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Your Cosmic Address</div>
                <p>Your full cosmic address is: Planet Earth, Solar System, Orion Arm, Milky Way Galaxy, Local Group, Virgo Supercluster, Universe. Pretty amazing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Star Numbers</div>
                <p>There are between 100-400 BILLION stars in the Milky Way galaxy. That's more stars than grains of sand on many beaches!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Galaxy Size</div>
                <p>The Milky Way is about 100,000 light-years across. A light-year is the distance light travels in one year - about 9.5 trillion kilometers!</p>
            </div>
        `,
        taskInstructions: "Create a star map and identify solar system components.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: My Cosmic Address</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write your complete cosmic address starting from your house:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Star Pattern Maps (Constellations)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Observe the star patterns provided. Create a simple map showing where our solar system sits in the Milky Way:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 75px;">[Draw the Milky Way galaxy and label our solar system's location]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Solar System Components</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three things found in our solar system other than planets:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Define a galaxy in your own words:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "On a clear night, look up at the stars. Draw what you see and try to identify any patterns. Ask a family member to look with you!",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Astronomy",
        subtopic: "Light and Movement in the Solar System",
        lessonContent: `
            <p>Today we'll explore how the Sun lights up our solar system and how the Earth and Moon move through space!</p>
            <p><strong>Key Question:</strong> Why can we see the Moon if it doesn't have batteries or a plug?</p>
            <p><strong>The Sun - Our Light Source:</strong></p>
            <ul>
                <li>The Sun is the ONLY source of light in our solar system</li>
                <li>It produces light and heat through nuclear fusion (atoms smashing together!)</li>
                <li>Planets and moons do NOT make their own light - they only REFLECT the Sun's light</li>
                <li>That's why the Moon glows at night - it's reflecting sunlight back to Earth!</li>
            </ul>
            <p><strong>Two Types of Movement in Space:</strong></p>
            <ol>
                <li><strong>Rotation:</strong> Spinning on an axis (like a basketball spinning on a finger)
                    <ul>
                        <li>Earth rotates once every 24 hours → creates DAY and NIGHT</li>
                        <li>The Moon rotates once every 27.3 days</li>
                    </ul>
                </li>
                <li><strong>Revolution:</strong> Moving in a path (orbit) around another object
                    <ul>
                        <li>Earth revolves around the Sun once every 365.25 days → creates a YEAR</li>
                        <li>The Moon revolves around Earth once every 27.3 days → creates a MONTH</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Compare Earth and Moon Movements:</strong></p>
            <ul>
                <li><strong>Earth:</strong> Rotates (day/night) + Revolves around Sun (year)</li>
                <li><strong>Moon:</strong> Rotates slowly + Revolves around Earth (month)</li>
                <li>The Moon shows the same face to Earth because it rotates at the same speed it revolves!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Moon Reflection</div>
                <p>The Moon doesn't make its own light - it's like a giant mirror in space! It reflects about 12% of the sunlight that hits it.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Rotation vs. Revolution</div>
                <p>Think of an ice skater: spinning in place is rotation (day/night). Moving in a circle around the rink is revolution (year).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Leap Year</div>
                <p>Earth takes exactly 365.2422 days to orbit the Sun. Every 4 years, we add February 29th (Leap Day) to catch up!</p>
            </div>
        `,
        taskInstructions: "Create a Venn diagram comparing Earth and Moon movements, then act out the movements.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Venn Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a Venn diagram comparing the movement of the Earth and the Moon:
                    <div style="margin-top: 10px;">
                        <div style="display: flex; justify-content: space-between; gap: 20px;">
                            <div style="flex: 1; border: 2px solid #4A90E2; border-radius: 10px; padding: 10px; text-align: center;">
                                <strong>Earth Only</strong>
                                <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                            </div>
                            <div style="flex: 1; border: 2px solid #50E3C2; border-radius: 10px; padding: 10px; text-align: center;">
                                <strong>Both</strong>
                                <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                            </div>
                            <div style="flex: 1; border: 2px solid #F5A623; border-radius: 10px; padding: 10px; text-align: center;">
                                <strong>Moon Only</strong>
                                <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Human Orrery Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> With your group, act out the movements of the Sun, Earth, and Moon:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Student 1 (Sun): Hold a flashlight and stay still</div>
                        <div>• Student 2 (Earth): Spin (rotate) while walking in a circle around the Sun</div>
                        <div>• Student 3 (Moon): Walk in a circle around the Earth</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> After the activity, describe what you learned about rotation and revolution:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comprehension Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is the Sun the only source of light in our solar system?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How long does it take Earth to revolve around the Sun? What does this create?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Observe the Moon tonight. Draw its shape and position in the sky. Ask a family member: 'Why do you think the Moon seems to change shape?'",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Astronomy",
        subtopic: "The Dance of Shadows (Solar and Lunar Eclipses)",
        lessonContent: `
            <p>Today we'll discover how the alignment of the Earth, Moon, and Sun creates amazing eclipses!</p>
            <p><strong>Key Question:</strong> What is an eclipse, and why don't we have one every month?</p>
            <p><strong>What is an Eclipse?</strong></p>
            <ul>
                <li>An eclipse is simply a GIANT shadow in space</li>
                <li>It happens when the Sun, Earth, and Moon line up perfectly (called syzygy!)</li>
                <li>We don't have eclipses every month because the Moon's orbit is tilted about 5 degrees</li>
            </ul>
            <p><strong>Solar Eclipse (Sun disappears!):</strong></p>
            <ul>
                <li>The Moon passes BETWEEN the Sun and Earth</li>
                <li>The Moon blocks the Sun's light from reaching Earth</li>
                <li>Order: Sun → Moon → Earth</li>
                <li>Only happens during a NEW MOON</li>
                <li>Lasts only a few minutes</li>
                <li><strong>NEVER look directly at a solar eclipse without special glasses!</strong></li>
            </ul>
            <p><strong>Lunar Eclipse (Moon turns red!):</strong></p>
            <ul>
                <li>The Earth passes BETWEEN the Sun and Moon</li>
                <li>Earth casts its shadow on the Moon</li>
                <li>Order: Sun → Earth → Moon</li>
                <li>Only happens during a FULL MOON</li>
                <li>Can last several hours</li>
                <li>Safe to look at with naked eyes</li>
                <li>The Moon often looks reddish because Earth's atmosphere bends red light onto it</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Solar Eclipse Safety</div>
                <p>During a solar eclipse, the Sun's rays are still dangerous. Special eclipse glasses are needed - regular sunglasses are NOT safe!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Blood Moon</div>
                <p>During a lunar eclipse, the Moon often looks reddish-orange. This is sometimes called a "Blood Moon" because of the dramatic color!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Rare Events</div>
                <p>Solar eclipses happen about 2-4 times per year somewhere on Earth, but a specific location might only see one every 375 years!</p>
            </div>
        `,
        taskInstructions: "Demonstrate eclipses using shadow theater and draw alignment diagrams.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Eclipse Diagrams</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the alignment for a SOLAR eclipse (label Sun, Moon, Earth):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the alignment for a LUNAR eclipse (label Sun, Earth, Moon):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shadow Theater Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In a darkened area with your group, use:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Lamp/Flashlight = Sun</div>
                        <div>• Large ball = Earth</div>
                        <div>• Small ball = Moon</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Demonstrate both types of eclipses. Describe what you observed:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete the comparison table:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Feature</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Solar Eclipse</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Lunar Eclipse</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">What blocks the light?</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Moon phase needed</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Safe to look at?</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask a family member if they've ever seen an eclipse. Share what you learned about the difference between solar and lunar eclipses.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Science",
        topic: "Astronomy",
        subtopic: "Modeling the Universe",
        lessonContent: `
            <p>Today we'll bring everything together by building models that show the relationship between the Earth, Moon, and Sun!</p>
            <p><strong>Key Question:</strong> How can we show someone else how the galaxy and solar system work?</p>
            <p><strong>What Makes a Good Model?</strong></p>
            <ul>
                <li><strong>Relative Sizes:</strong> Shows how big objects are compared to each other</li>
                <li><strong>Relative Distances:</strong> Shows how far apart objects are</li>
                <li><strong>Movement:</strong> Demonstrates rotation and revolution</li>
                <li><strong>Light Source:</strong> Identifies the Sun as the light source</li>
                <li><strong>Eclipse Demonstration:</strong> Can show how shadows create eclipses</li>
            </ul>
            <p><strong>Scale Model Sizes (Example):</strong></p>
            <ul>
                <li><strong>Sun:</strong> Watermelon or large beach ball</li>
                <li><strong>Earth:</strong> Cherry or marble</li>
                <li><strong>Moon:</strong> Peppercorn or small bead</li>
                <li><strong>Distance (Sun to Earth):</strong> About 25 meters apart at this scale!</li>
            </ul>
            <p><strong>What Your Model Should Show:</strong></p>
            <ol>
                <li>The Sun as the light source</li>
                <li>Earth rotating (creating day/night)</li>
                <li>Earth revolving around the Sun (creating years)</li>
                <li>Moon revolving around Earth (creating months)</li>
                <li>How alignments create solar and lunar eclipses</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-watermelon"></i> Fruit Solar System</div>
                <p>You can use a watermelon (Sun), a cherry (Earth), and a peppercorn (Moon). At this scale, the Sun would be 25 meters from Earth!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Makerspace Materials</div>
                <p>Use clay, paper mâché, wire hangers, cardboard, and paint. Get creative while staying scientifically accurate!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Group Presentation</div>
                <p>Each group will present their model to the class, explaining the source of light and demonstrating how a day, month, and eclipse occur.</p>
            </div>
        `,
        taskInstructions: "Build a working model of the Earth-Moon-Sun system using provided materials.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Model Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before building, plan your model. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What materials will you use for the Sun? _________</div>
                        <div>What materials will you use for the Earth? _________</div>
                        <div>What materials will you use for the Moon? _________</div>
                        <div>How will you show rotation? _________</div>
                        <div>How will you show revolution? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build Your Model</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using provided materials (clay, wires, cardboard, paint, or recycled materials), build your Earth-Moon-Sun model:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 85px;">[Place or sketch your completed model here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Demonstration and Presentation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With your group, demonstrate your model to the class. Be ready to explain:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Where does light come from in your model?</div>
                        <div>• How does Earth's rotation create day and night?</div>
                        <div>• How does Earth's revolution create a year?</div>
                        <div>• How does the Moon's revolution create a month?</div>
                        <div>• How would you show a solar eclipse?</div>
                        <div>• How would you show a lunar eclipse?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Peer Review and Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> After watching other groups present, write one thing you learned from another group's model:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would you improve about your model if you built it again?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is modeling important for understanding space?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Share your model with a family member at home. Explain to them how the Earth rotates, revolves, and how eclipses happen. Ask them one question about space!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek4);
    console.log("grade6-science-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek4);
    console.log("grade6-science-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek4',
        metadata: grade6ScienceWeek4.metadata,
        days: grade6ScienceWeek4
    });
    console.log("grade6-science-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek4 = grade6ScienceWeek4;
console.log("grade6-science-week4.js loaded and registered successfully");