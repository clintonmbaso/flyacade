// Grade 4 Mathematics - Term 2 Week 9 Data
const grade4MathWeek9 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 2,
        week: 9,
        title: "The Circle Chronicles",
        description: "Mastering precision with compass tools: circle anatomy, radius, diameter, and geometric relationships"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Compass Basics",
        lessonContent: `
            <p>Welcome to Geometry! Today we'll learn how to use a compass - a special tool for drawing perfect circles!</p>
            <p><strong>Key Question:</strong> How can we draw a perfect circle without tracing around something round?</p>
            <p><strong>Introduction:</strong> A compass is like a "ballet dancer"! It has one sharp toe (the needle) that stays still, while the other leg (the pencil) spins in a perfect pirouette to create a circle.</p>
            <p><strong>The Three Rules of Compass Technique:</strong></p>
            <ol>
                <li><strong>The Grip:</strong> Hold the compass only by the top handle (the "knob") - never by the legs!</li>
                <li><strong>The Lean:</strong> Lean the compass slightly in the direction you are turning</li>
                <li><strong>The Anchor:</strong> Push the needle firmly into the paper so it doesn't "skate" away</li>
            </ol>
            <p><strong>Remember:</strong> The needle always stays in ONE spot. The pencil moves around it!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice-d6"></i> The Spin</div>
                <p>Turn the compass smoothly, like you're turning a doorknob. Don't press too hard - let the pencil glide!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> No "Skating"</div>
                <p>If your needle moves, your circle will have a flat spot or a wobbly line. This is called "skating" - keep the needle anchored!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> The Wrist Trick</div>
                <p>Turn the compass using your wrist, not your whole arm. This gives you better control and smoother circles!</p>
            </div>
        `,
        taskInstructions: "Practice drawing circles of different sizes using a compass, creating a page of 'bubble art'.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bubble Art Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill this page with "bubbles" (circles) using your compass:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ Draw at least <strong>10 circles</strong> of different sizes</div>
                        <div>✓ Each circle must close perfectly (start meets end)</div>
                        <div>✓ No "slipping" lines or wobbly edges</div>
                    </div>
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How many circles did you draw? _______
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the best circle you drew. What made it successful?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Technique Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the hardest part about using the compass?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to push the needle firmly into the paper?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice drawing 5 circles at home using your compass. Try to make them as perfect as possible! Ask a family member to watch and check your technique.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Center, Radius, and Diameter",
        lessonContent: `
            <p>Today we'll learn the names of the important parts inside every circle!</p>
            <p><strong>Key Question:</strong> What are the different parts of a circle called?</p>
            <p><strong>Three Important Circle Words:</strong></p>
            <ol>
                <li><strong>Center:</strong> The "heart" of the circle where the compass needle sat. It's a single point exactly in the middle.</li>
                <li><strong>Radius:</strong> A straight line from the center to the edge (the "crust").</li>
                <li><strong>Diameter:</strong> A straight line that goes from edge to edge, passing through the center.</li>
            </ol>
            <p><strong>Fun Fact:</strong> The word "radius" comes from Latin meaning "ray" or "spoke" - like the spokes of a bicycle wheel!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> The Pizza Slice</div>
                <p>Think of a pizza! The <strong>center</strong> is the middle point. A <strong>radius</strong> is like one cut from the center to the crust. The <strong>diameter</strong> is a full cut all the way across the pizza through the center!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> Bicycle Spokes</div>
                <p>On a bicycle wheel, the metal spokes are like <strong>radii</strong> - they all start at the center hub and go out to the rim!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Clock Face</div>
                <p>On a clock, the hands point from the center to the numbers. The distance from 12 to 6 passing through the center is the <strong>diameter</strong>!</p>
            </div>
        `,
        taskInstructions: "Draw a large circle, mark its center, and draw/label the radius and diameter.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Pizza Slice Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw one large circle using your compass:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> On your circle, complete these tasks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Mark the <strong>Center</strong> with a bold dot</div>
                        <div>• Draw one <strong style="color: red;">Radius</strong> (color it RED)</div>
                        <div>• Draw one <strong style="color: blue;">Diameter</strong> (color it BLUE)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Labeling Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at this circle diagram and label the parts:
                    <div style="text-align: center; margin-top: 10px;">
                        <div style="width: 200px; height: 200px; border: 2px solid #333; border-radius: 50%; margin: 0 auto; position: relative;">
                            <div style="position: absolute; top: 50%; left: 50%; width: 4px; height: 4px; background: red; border-radius: 50%; transform: translate(-50%, -50%);"></div>
                            <div style="position: absolute; top: 50%; left: 50%; width: 100px; height: 2px; background: red; transform: translate(0%, -50%);"></div>
                            <div style="position: absolute; top: 50%; left: 0%; width: 200px; height: 2px; background: blue; transform: translate(0%, -50%);"></div>
                        </div>
                        <div style="margin-top: 10px;">
                            <div>Red line: _________</div>
                            <div>Blue line: _________</div>
                            <div>Red dot: _________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Vocabulary Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In your own words, explain the difference between a radius and a diameter:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 circular objects at home (plate, coin, jar lid). Trace them and mark the center, radius, and diameter on each tracing.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Circle Math (Practical)",
        lessonContent: `
            <p>Today we'll discover the secret relationship between the radius and diameter!</p>
            <p><strong>Key Question:</strong> How are the radius and diameter related?</p>
            <p><strong>The Golden Rule of Circles:</strong></p>
            <div style="text-align: center; font-size: 24px; font-weight: bold; margin: 15px 0;">
                Diameter = 2 × Radius
            </div>
            <p>This means the diameter is always exactly <strong>twice as long</strong> as the radius!</p>
            <p><strong>Why does this make sense?</strong></p>
            <ul>
                <li>The radius goes from center to edge (halfway across)</li>
                <li>The diameter goes from edge to edge (all the way across)</li>
                <li>So the diameter is two radii put together!</li>
            </ul>
            <p><strong>If you know one, you can find the other:</strong></p>
            <ul>
                <li>Radius × 2 = Diameter</li>
                <li>Diameter ÷ 2 = Radius</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> The Measurement Challenge</div>
                <p>Set your compass to exactly 5cm (radius). Draw the circle. Draw the diameter. Measure it - it will be exactly 10cm! That's proof of the rule!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Real-Life Example</div>
                <p>If a pizza has a radius of 6 inches, what's the diameter? 6 × 2 = 12 inches across! That's a large pizza!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Finding the Radius</div>
                <p>If a circular fountain has a diameter of 8 meters, the radius is 8 ÷ 2 = 4 meters from the center to the edge.</p>
            </div>
        `,
        taskInstructions: "Complete the measurement challenge and practice table to prove the radius-diameter relationship.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Measurement Challenge (Proof)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow these steps to prove the rule:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: Set your compass to exactly <strong>5 cm</strong></div>
                        <div>Step 2: Draw the circle</div>
                        <div>Step 3: Draw a line through the center from edge to edge (the Diameter)</div>
                        <div>Step 4: <strong>Measure</strong> the diameter with your ruler</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">What did you measure? The diameter = _______ cm</div>
                    <div>Does 2 × 5 cm = _______ ? Yes / No (circle one)</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Table Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete this table. Remember: Diameter = 2 × Radius
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Radius</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Diameter</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">3 cm</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">10 cm</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">8 cm</td>
                             </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">7 cm</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">______</td>
                             </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">24 cm</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Maria draws a circle with a radius of 6 cm. What is the diameter?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A circular garden has a diameter of 14 meters. What is the radius?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Draw 3 circles of different sizes. Measure and record the radius and diameter of each circle. Show that Diameter = 2 × Radius for all three.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Geometry Mastery Recap",
        lessonContent: `
            <p>Today we'll put everything together! You'll become a graphic designer and create a school logo using circles, lines, and polygons!</p>
            <p><strong>Key Question:</strong> How can we combine circles with other shapes to create designs?</p>
            <p><strong>What We've Learned This Week:</strong></p>
            <ol>
                <li>How to draw perfect circles using a <strong>compass</strong></li>
                <li>The parts of a circle: <strong>Center, Radius, Diameter</strong></li>
                <li>The relationship: <strong>Diameter = 2 × Radius</strong></li>
                <li>How to <strong>measure and prove</strong> circle measurements</li>
            </ol>
            <p><strong>New Term - Parallel Lines:</strong></p>
            <ul>
                <li><strong>Parallel lines</strong> are lines that never meet or cross</li>
                <li>They stay the same distance apart forever (like railroad tracks or ladder rungs)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Hexagon Review</div>
                <p>A hexagon is a shape with 6 straight sides and 6 vertices (corners). "Hex" means six - like a hexagon or a hex nut!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grip-lines"></i> Parallel Lines</div>
                <p>The two rails of a train track are parallel - they never touch! The lines on notebook paper are also parallel.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Graphic Designer Challenge</div>
                <p>Real logo designers use geometry all the time! The Olympic rings are circles. Many car logos combine circles with other shapes.</p>
            </div>
        `,
        taskInstructions: "Create a 'School Spirit' logo using geometric shapes: a perfect circle, two parallel lines, and a hexagon.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: School Logo Design Project</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You are a graphic designer! Create a new "School Spirit" logo following these <strong>strict criteria</strong>:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>✓ <strong>The Base:</strong> One perfect circle drawn with a compass</div>
                        <div>✓ <strong>The Detail:</strong> Two parallel lines (ladder or road) crossing through the circle</div>
                        <div>✓ <strong>The Icon:</strong> One Hexagon (6-sided shape) anywhere inside or touching the circle</div>
                    </div>
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Logo Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Check your logo against these requirements:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ Circle is clean and closes perfectly</div>
                        <div>□ Two parallel lines (they never touch)</div>
                        <div>□ One hexagon with 6 sides and 6 vertices</div>
                        <div>□ Design is creative and looks like a logo</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Project Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Explain your logo design. What does it represent? Why did you place the hexagon where you did?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most challenging part of creating your logo?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Weekly Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was your favorite activity this week and why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a second logo design at home using at least: 2 circles, 3 parallel lines, and 1 hexagon. Bring it to share with the class on Monday!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek9);
    console.log("grade4-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek9);
    console.log("grade4-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek9',
        metadata: grade4MathWeek9.metadata,
        days: grade4MathWeek9
    });
    console.log("grade4-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek9 = grade4MathWeek9;
console.log("grade4-math-week2.js loaded and registered successfully");