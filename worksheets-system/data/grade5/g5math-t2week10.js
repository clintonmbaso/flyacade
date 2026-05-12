// Grade 5 Mathematics - Term 2 Week 10 Data
const grade5MathWeek10 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 2,
        week: 10,
        title: "Symmetry Mastery & Final Project",
        description: "Exploring horizontal and vertical symmetry, alphabet symmetry, logo design, symmetry vs. congruency, and the Geometry Exhibition"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Horizontal vs. Vertical Symmetry",
        lessonContent: `
            <p>Welcome to our symmetry exploration! Today we'll learn how to distinguish between different orientations of symmetry.</p>
            <p><strong>Key Question:</strong> What makes a shape symmetrical, and how can symmetry face different directions?</p>
            <p><strong>Introduction:</strong> A shape has symmetry when you can draw a line through it and both sides are mirror images of each other. This special line is called a <strong>line of symmetry</strong> or <strong>axis of symmetry</strong>.</p>
            <p><strong>Two Main Types of Symmetry Lines:</strong></p>
            <ol>
                <li><strong>Vertical Symmetry (Up-Down):</strong> The line runs straight up and down. The left side mirrors the right side.</li>
                <li><strong>Horizontal Symmetry (Side-to-Side):</strong> The line runs left to right. The top mirrors the bottom.</li>
            </ol>
            <p><strong>Letter Examples:</strong></p>
            <ul>
                <li><strong>Letter "A"</strong> - Has VERTICAL symmetry (left side mirrors right side)</li>
                <li><strong>Letter "E"</strong> - Has HORIZONTAL symmetry (top mirrors bottom)</li>
                <li><strong>Letter "H"</strong> - Has BOTH vertical AND horizontal symmetry!</li>
            </ul>
            <p><strong>Other Examples:</strong></p>
            <ul>
                <li>Vertical: M, T, U, V, W, Y</li>
                <li>Horizontal: B, C, D, K</li>
                <li>Both: H, I, O, X</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-v"></i> Vertical Symmetry in Nature</div>
                <p>A butterfly has vertical symmetry! If you draw a line down the middle of its body, the left wing is a mirror image of the right wing.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Horizontal Symmetry in Nature</div>
                <p>A reflection in a still lake creates horizontal symmetry. The reflection of a mountain in water shows the top mirroring the bottom!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star-of-life"></i> The Magic Letter "H"</div>
                <p>The letter "H" is special because you can fold it vertically OR horizontally, and both sides match perfectly. Try it on paper!</p>
            </div>
        `,
        taskInstructions: "Identify and draw lines of symmetry on letters and shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Letter Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each letter below, draw the line(s) of symmetry:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center;">
                            <div>
                                <div style="font-size: 48px; font-weight: bold; border: 1px solid #ccc; padding: 20px;">A</div>
                                <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                                <span>Vertical? ___ / Horizontal? ___</span>
                            </div>
                            <div>
                                <div style="font-size: 48px; font-weight: bold; border: 1px solid #ccc; padding: 20px;">E</div>
                                <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                                <span>Vertical? ___ / Horizontal? ___</span>
                            </div>
                            <div>
                                <div style="font-size: 48px; font-weight: bold; border: 1px solid #ccc; padding: 20px;">H</div>
                                <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                                <span>Vertical? ___ / Horizontal? ___</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shape Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these shapes into three categories: Vertical Only, Horizontal Only, Both:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Rectangle, Square, Circle, Triangle (isosceles), Triangle (scalene)</div>
                        <div style="margin-top: 10px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr style="background-color: #4A90E2; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Vertical Only</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Horizontal Only</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Both</th>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                    <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                    <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mirror Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the missing half of each shape using the line of symmetry:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Vertical Line</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Horizontal Line</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home with vertical symmetry and 3 objects with horizontal symmetry. Draw or photograph them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Alphabet Symmetry",
        lessonContent: `
            <p>Today we'll become symmetry detectives and categorize all 26 capital letters based on their lines of symmetry!</p>
            <p><strong>Key Question:</strong> Which capital letters have symmetry, and how many lines do they have?</p>
            <p><strong>Rules for Letter Symmetry:</strong></p>
            <ul>
                <li>We look at standard capital (uppercase) block letters</li>
                <li>The line of symmetry must split the letter into two mirror images</li>
                <li>Letters can have 0, 1, or even 2 lines of symmetry!</li>
            </ul>
            <p><strong>Symmetry Categories for Capital Letters:</strong></p>
            <ol>
                <li><strong>Zero Lines of Symmetry:</strong> F, G, J, L, P, Q, R</li>
                <li><strong>Vertical Symmetry Only (left-right):</strong> A, M, T, U, V, W, Y</li>
                <li><strong>Horizontal Symmetry Only (top-bottom):</strong> B, C, D, E, K</li>
                <li><strong>Both Vertical and Horizontal:</strong> H, I, O, X</li>
            </ol>
            <p><strong>Special Cases to Consider:</strong></p>
            <ul>
                <li><strong>N and S:</strong> Have rotational symmetry but NOT reflection symmetry</li>
                <li><strong>Z:</strong> Has rotational symmetry (if turned 180°), not reflection</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grip-lines"></i> The Symmetrical Seven</div>
                <p>How many letters can you fold in half? Try the "Mirror Test" with a small mirror placed on the letter. If it looks the same, you found symmetry!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Why No Symmetry?</div>
                <p>The letter "F" has no symmetry because its top bar sticks out to the right, but the middle bar sticks out to the left - they don't match!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> The Rotational Exception</div>
                <p>Letter "S" doesn't have mirror symmetry, but if you turn it upside down (180°), it looks the same. That's rotational symmetry - different from reflection!</p>
            </div>
        `,
        taskInstructions: "Categorize all 26 capital letters by their lines of symmetry.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Symmetry Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort all 26 capital letters into the correct categories:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Zero Lines</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Vertical Only</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Horizontal Only</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Both</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;">&nbsp;</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;">&nbsp;</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;">&nbsp;</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;">&nbsp;</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Lines</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each letter below, draw ALL lines of symmetry:
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 10px; text-align: center;">
                        <div>
                            <div style="font-size: 48px; font-weight: bold; border: 1px solid #ccc; padding: 20px;">H</div>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div>
                            <div style="font-size: 48px; font-weight: bold; border: 1px solid #ccc; padding: 20px;">O</div>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div>
                            <div style="font-size: 48px; font-weight: bold; border: 1px solid #ccc; padding: 20px;">X</div>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                        <div>
                            <div style="font-size: 48px; font-weight: bold; border: 1px solid #ccc; padding: 20px;">I</div>
                            <div class="drawing-area" style="height: 50px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why do you think letters like F, G, and R have no symmetry?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which letter do you think is the most symmetrical? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write your full name in capital letters. Identify how many letters have symmetry and what kind. Example: 'SAM' - S(0), A(Vertical), M(Vertical)",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Designing Symmetrical Logos",
        lessonContent: `
            <p>Today we'll become graphic designers and create our own symmetrical brand logos!</p>
            <p><strong>Key Question:</strong> Why do so many famous logos use symmetry?</p>
            <p><strong>Why Symmetry in Logos?</strong></p>
            <ul>
                <li>Symmetry creates balance and professionalism</li>
                <li>Symmetrical logos are memorable and easy to recognize</li>
                <li>They look organized and trustworthy</li>
                <li>People naturally find symmetrical designs pleasing</li>
            </ul>
            <p><strong>Famous Symmetrical Logos:</strong></p>
            <ul>
                <li>McDonald's Golden Arches (vertical symmetry)</li>
                <li>Target (vertical and horizontal symmetry!)</li>
                <li>Chanel (interlocking C's - vertical and horizontal)</li>
                <li>Starbucks (vertical symmetry through the mermaid)</li>
                <li>Mercedes-Benz (3-fold rotational symmetry)</li>
            </ul>
            <p><strong>Design Tips:</strong></p>
            <ol>
                <li>Start with a simple shape (circle, square, triangle)</li>
                <li>Draw your line of symmetry first</li>
                <li>Use a ruler and grid paper to make both sides identical</li>
                <li>Test your design by folding it along the symmetry line</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ad"></i> Logo Spotlight: Target</div>
                <p>Target's logo has a red circle with a smaller white circle inside. It has infinite lines of symmetry through the center! Every line through the center creates mirror images.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Logo Spotlight: Mercedes-Benz</div>
                <p>The three-pointed star has rotational symmetry - but also three lines of reflection symmetry! Each point creates a mirror line through the center.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Designer's Trick</div>
                <p>Professional logo designers often build half a design, then mirror it digitally. You can do the same by drawing on one side of your symmetry line, then copying it!</p>
            </div>
        `,
        taskInstructions: "Create a perfectly symmetrical brand logo using a ruler and grid paper.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Logo Design Brief</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose one type of company to design a logo for:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="radio" name="company"> ☕ Coffee Shop</label><br>
                        <label><input type="radio" name="company"> 🏋️ Gym/Fitness</label><br>
                        <label><input type="radio" name="company"> 🌱 Eco-Friendly Products</label><br>
                        <label><input type="radio" name="company"> 🎮 Gaming Studio</label><br>
                        <label><input type="radio" name="company"> 🏨 Hotel Chain</label><br>
                        <label><input type="radio" name="company"> (or create your own idea: _______)</label>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Symmetrical Logo Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> On grid paper, design your symmetrical logo following these guidelines:
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Must have at least ONE clear line of symmetry</li>
                        <li>Use a ruler for straight lines</li>
                        <li>Include your company name or initials somewhere</li>
                        <li>Use color to enhance your design</li>
                    </ul>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2; background: white; background-image: linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px); background-size: 20px 20px;">
                        <p style="text-align: center; color: #999; padding-top: 110px;">[Grid Paper Area - Draw Your Logo Here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Logo Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about your logo:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What type of symmetry does your logo have? (Vertical/Horizontal/Both)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• Why did you choose this design for your company?</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• How did you ensure both sides are identical?</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look for 3 logos on products in your home. For each, identify if it has symmetry and what kind. Draw a small sketch of each.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Symmetry vs. Congruency",
        lessonContent: `
            <p>Today we'll discover the important relationship between symmetry and the word "congruent"!</p>
            <p><strong>Key Question:</strong> What does it mean for two shapes to be congruent, and how does that relate to symmetry?</p>
            <p><strong>What is Congruency?</strong></p>
            <ul>
                <li><strong>Congruent</strong> means two shapes are exactly the same size and shape</li>
                <li>One shape can be rotated, reflected, or translated (slid) to match the other perfectly</li>
                <li>Congruent shapes have equal side lengths and equal angles</li>
            </ul>
            <p><strong>The Connection to Symmetry:</strong></p>
            <ul>
                <li>A symmetrical shape is made of two <strong>congruent halves</strong></li>
                <li>The line of symmetry divides the shape into mirror-image halves</li>
                <li>If you fold a symmetrical shape along its line of symmetry, the two halves match perfectly - they are CONGRUENT!</li>
            </ul>
            <p><strong>Key Differences:</strong></p>
            <ul>
                <li><strong>Symmetry</strong> is about self-similarity within ONE shape</li>
                <li><strong>Congruency</strong> is about the relationship between TWO (or more) shapes</li>
                <li>A shape can be symmetrical AND made of congruent halves</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> The Paper Fold Test</div>
                <p>Take a square piece of paper. Fold it in half vertically. Cut a shape along the fold. When you open it, both sides are congruent mirror images - that's symmetry from congruent halves!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Congruent Everywhere</div>
                <p>Two identical coins are congruent. Two pages of the same book are congruent. Twins wearing identical outfits have congruent clothing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mirror"></i> Not All Halves Are Congruent</div>
                <p>A random blob cut in half won't have congruent halves. Only symmetrical shapes create mirror-image halves that are perfectly congruent.</p>
            </div>
        `,
        taskInstructions: "Identify symmetrical shapes and their congruent halves.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each statement and write True or False:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. All symmetrical shapes are made of two congruent halves. ______</div>
                        <div>B. Two congruent shapes always have symmetry. ______</div>
                        <div>C. A square has four lines of symmetry. ______</div>
                        <div>D. Congruent shapes must be facing the same direction. ______</div>
                        <div>E. A triangle can be congruent to a square. ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Congruent Half</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each shape below, draw the congruent missing half:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Shape 1 (Vertical Line)</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;">
                                <div style="text-align: left; padding: 10px;">\\_____/<br> \\___/<br>  \\_/</div>
                            </div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Shape 2 (Horizontal Line)</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;">
                                <div style="text-align: center; padding: 10px;">___<br>(___)<br> ___</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a symmetrical shape of your choice. Then color the two congruent halves in different colors:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> In your own words, explain the difference between symmetry and congruency:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Cut a shape out of paper, fold it along a line of symmetry, and write a paragraph explaining how the two halves are congruent.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Geometry Exhibition",
        lessonContent: `
            <p>Congratulations! Today we celebrate everything we've learned about angles and symmetry this month with our Geometry Exhibition!</p>
            <p><strong>Key Question:</strong> How can you show what you've learned about angles and symmetry in the real world?</p>
            <p><strong>Month Recap:</strong></p>
            <ul>
                <li><strong>Angles:</strong> Acute, right, obtuse, straight, reflex</li>
                <li><strong>Angle Relationships:</strong> Complementary (90°), Supplementary (180°)</li>
                <li><strong>Types of Symmetry:</strong> Vertical, horizontal, both, rotational</li>
                <li><strong>Symmetry in Letters:</strong> Which capitals have lines of symmetry</li>
                <li><strong>Symmetry vs. Congruency:</strong> Understanding the connection</li>
            </ul>
            <p><strong>Final Project Requirements:</strong></p>
            <ol>
                <li>A calculated <strong>supplementary angle problem</strong> (with answer shown!)</li>
                <li>A <strong>complex shape</strong> with ALL lines of symmetry clearly drawn</li>
                <li>A <strong>real-world photo</strong> labeled with both "Angles" and "Symmetry" observations</li>
            </ol>
            <p><strong>Presentation Tips:</strong></p>
            <ul>
                <li>Make your poster colorful and organized</li>
                <li>Use clear labels and arrows</li>
                <li>Be ready to explain your work to classmates</li>
                <li>Include your name and the date</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-angle-double-right"></i> Supplementary Example</div>
                <p>If Angle A = 115°, what is its supplementary angle?<br>
                Supplementary angles add to 180°, so 180° - 115° = 65°</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Complex Shape Example</div>
                <p>A regular hexagon has 6 lines of symmetry! Draw a hexagon and show all 6 lines through opposite vertices and midpoints of opposite sides.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-camera-retro"></i> Real-World Photo Example</div>
                <p>Take a photo of a window: Label the right angles (90° corners) and identify the vertical and horizontal symmetry lines through the center.</p>
            </div>
        `,
        taskInstructions: "Create a Geometry Exhibition poster with three required components.",
        taskContent: `
            <div class="content-box">
                <p><strong>Final Project: Geometry Exhibition Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">•</span> Your poster must include the following three components:
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Component 1: Supplementary Angle Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">✓</span> Create and solve a supplementary angle problem. Show your work!
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 45px;">[Draw your angle problem here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Component 2: Complex Shape with Symmetry Lines</strong></p>
                <div class="task-item">
                    <span class="task-number">✓</span> Draw a complex shape (pentagon, hexagon, star, or your own design) and draw ALL lines of symmetry
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw your symmetrical shape here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Component 3: Real-World Photo</strong></p>
                <div class="task-item">
                    <span class="task-number">✓</span> Paste or draw a photo of a real-world object. Label all angles and symmetry lines you can find!
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw or describe your photo observation here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Poster Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">Self-Assessment:</span> Check each box when complete:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="checkbox"> ☐ My poster includes a supplementary angle problem with solution</label><br>
                        <label><input type="checkbox"> ☐ My poster has a complex shape with all symmetry lines drawn</label><br>
                        <label><input type="checkbox"> ☐ My poster has a real-world image with angles and symmetry labeled</label><br>
                        <label><input type="checkbox"> ☐ My poster is neat, colorful, and organized</label><br>
                        <label><input type="checkbox"> ☐ I can explain all parts of my poster to a classmate</label>
                    </div>
                </div>
                <div class="task-item" style="margin-top: 15px;">
                    <span class="task-number">Bonus:</span> What was your favorite thing you learned about geometry this month?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Complete your Geometry Exhibition poster and practice presenting it. Bring it to class on Monday for the exhibition gallery walk!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek10);
    console.log("grade5-math-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek10);
    console.log("grade5-math-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek10',
        metadata: grade5MathWeek10.metadata,
        days: grade5MathWeek10
    });
    console.log("grade5-math-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek10 = grade5MathWeek10;
console.log("grade5-math-week10.js loaded and registered successfully");