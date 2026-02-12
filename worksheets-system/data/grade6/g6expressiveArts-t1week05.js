// Grade 6 Expressive Arts - Week 5 Data
const grade6ExpressiveArtsWeek5 = {
metadata: {
grade: 6,
subject: "Expressive Arts",
week: 5,
title: "The Science of the Color Wheel",
description: "Learning to design, label, and paint an accurate 12-part color wheel"
},

monday: {
    subject: "Expressive Arts",
    topic: "The Science of the Color Wheel",
    subtopic: "Designing the 12-Part Color Wheel",
    lessonContent: `
        <p>Welcome to our exploration of color theory! Today, we'll learn how artists use the color wheel as an essential tool for creating beautiful and harmonious artwork.</p>
        <p><strong>Key Concept:</strong> The color wheel shows the relationships between colors. Understanding these relationships helps artists choose colors that work well together.</p>
        <p><strong>The Three Color Families:</strong></p>
        <ul>
            <li><strong>Primary Colors:</strong> Red, Yellow, Blue — These colors cannot be made by mixing other colors. All other colors come from them!</li>
            <li><strong>Secondary Colors:</strong> Orange, Green, Violet — Created by mixing two primary colors (Red+Yellow=Orange, Yellow+Blue=Green, Blue+Red=Violet)</li>
            <li><strong>Tertiary Colors:</strong> Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Violet, Red-Violet — Created by mixing a primary color with its neighboring secondary color</li>
        </ul>
        <p><strong>Why 12 Parts?</strong> A complete color wheel has 12 equal segments, like a clock or a sliced pizza. This arrangement shows the smooth transition from one color to the next around the circle.</p>
        <p><strong>Precision Matters:</strong> For a color wheel to be "designed correctly," every segment must be the same size and colors must be placed in the correct order. Today we focus on the design and layout. Tomorrow we add color!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-palette" style="color: #E67E22;"></i> Color Wheel Structure</div>
            <p>Think of the color wheel like a clock: 12:00 = Yellow, 2:00 = Yellow-Orange, 4:00 = Orange, 6:00 = Red-Violet, etc. Each color has its special position!</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-ruler" style="color: #4A90E2;"></i> Measuring Tips</div>
            <p>To divide your circle into 12 equal parts: First draw a light line through the center (like cutting a pizza in half). Then keep dividing each section in half until you have 12 equal "slices."</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-sort-amount-up"></i> Color Order</div>
            <p>Primary colors should be spaced evenly around the wheel. Place Red, Yellow, and Blue so they're equally distant from each other. Secondary colors go between them. Tertiary colors fill the remaining spaces.</p>
        </div>
    `,
    taskInstructions: "Follow these steps to create an accurately designed 12-part color wheel on paper.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> Prepare your paper. Using a compass or round object, draw a large circle (approximately 15-20cm diameter). Then draw a smaller circle in the center.
            <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; display: flex; justify-content: center; align-items: center;">
                <div style="width: 120px; height: 120px; border-radius: 50%; border: 2px solid #333; position: relative;">
                    <div style="width: 30px; height: 30px; border-radius: 50%; border: 1px solid #999; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
                </div>
                <p style="margin-left: 20px;">Draw your circle here →</p>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">2</span> Divide your circle into 12 EQUAL segments. Use a ruler to draw light lines through the center.
            <div style="margin-top: 15px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
                <strong>Step-by-step:</strong>
                <ol style="margin-top: 5px;">
                    <li>Draw one line straight through the center (12 o'clock to 6 o'clock)</li>
                    <li>Draw another line through the center perpendicular to the first (3 o'clock to 9 o'clock)</li>
                    <li>You now have 4 quarters. Divide each quarter into 3 equal slices</li>
                    <li>You should have 12 equal "pie pieces"</li>
                </ol>
            </div>
            <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
        </div>
        
        <div class="task-item">
            <span class="task-number">3</span> Label each segment with the correct color name. Follow this order CLOCKWISE starting at the top:
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
                <div style="background-color: #FFEECC; padding: 10px; border-radius: 5px;">
                    <strong>Position 1 (12:00):</strong> Yellow
                </div>
                <div style="background-color: #FFDDBB; padding: 10px; border-radius: 5px;">
                    <strong>Position 2:</strong> Yellow-Orange
                </div>
                <div style="background-color: #FFCCAA; padding: 10px; border-radius: 5px;">
                    <strong>Position 3:</strong> Orange
                </div>
                <div style="background-color: #FFBB99; padding: 10px; border-radius: 5px;">
                    <strong>Position 4:</strong> Red-Orange
                </div>
                <div style="background-color: #FFAAAA; padding: 10px; border-radius: 5px;">
                    <strong>Position 5:</strong> Red
                </div>
                <div style="background-color: #EEAAFF; padding: 10px; border-radius: 5px;">
                    <strong>Position 6:</strong> Red-Violet
                </div>
                <div style="background-color: #DDAAFF; padding: 10px; border-radius: 5px;">
                    <strong>Position 7:</strong> Violet
                </div>
                <div style="background-color: #CCAAFF; padding: 10px; border-radius: 5px;">
                    <strong>Position 8:</strong> Blue-Violet
                </div>
                <div style="background-color: #AAAAFF; padding: 10px; border-radius: 5px;">
                    <strong>Position 9:</strong> Blue
                </div>
                <div style="background-color: #AACCFF; padding: 10px; border-radius: 5px;">
                    <strong>Position 10:</strong> Blue-Green
                </div>
                <div style="background-color: #AAEEFF; padding: 10px; border-radius: 5px;">
                    <strong>Position 11:</strong> Green
                </div>
                <div style="background-color: #AAFFAA; padding: 10px; border-radius: 5px;">
                    <strong>Position 12:</strong> Yellow-Green
                </div>
            </div>
            <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2; background-color: #f8fbff;">
                <p style="text-align: center; color: #4A90E2; padding-top: 80px;">Sketch your labeled color wheel here. Write color names in each segment.</p>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">4</span> Check your work! Verify that:
            <ul style="margin-left: 40px; margin-top: 10px;">
                <li>✓ You have 12 equal-sized segments</li>
                <li>✓ Primary colors (Red, Yellow, Blue) are equally spaced</li>
                <li>✓ Secondary colors are between the primaries</li>
                <li>✓ Tertiary colors are correctly named with hyphenated names</li>
            </ul>
            <div class="answer-space" style="height: 60px;"></div>
        </div>
    `,
    homework: "Practice drawing a 12-part color wheel on plain paper. Bring it to class tomorrow with all segments labeled correctly.",
    homeworkDue: "Thursday"
},

thursday: {
    subject: "Expressive Arts",
    topic: "Completing the Spectrum",
    subtopic: "Designing and Painting the Color Wheel",
    lessonContent: `
        <p>Today we bring our color wheels to life! Yesterday we designed the structure; today we add color with precision and careful mixing.</p>
        <p><strong>Key Concept:</strong> Precision in applying color—staying inside the lines and mixing accurate hues—is what transforms a good color wheel into a professional one.</p>
        <p><strong>Mixing Primary Colors:</strong></p>
        <ul>
            <li><strong>Red + Yellow = Orange</strong> (add yellow slowly to red)</li>
            <li><strong>Yellow + Blue = Green</strong> (add blue slowly to yellow)</li>
            <li><strong>Blue + Red = Violet</strong> (add red slowly to blue)</li>
        </ul>
        <p><strong>Mixing Tertiary Colors:</strong></p>
        <ul>
            <li>Mix a primary with its neighboring secondary</li>
            <li>Example: Red + Orange = Red-Orange (use more red than orange)</li>
            <li>Example: Blue + Green = Blue-Green (use more blue than green)</li>
        </ul>
        <p><strong>Technique Tips:</strong></p>
        <ol>
            <li>Always apply the three primary colors FIRST</li>
            <li>Mix small amounts—you can always make more!</li>
            <li>Test your mixed color on scrap paper before applying</li>
            <li>Work neatly and stay inside the lines</li>
            <li>Let each color dry slightly before adding the next</li>
        </ol>
        <p><strong>Connection to Imaginative Composition:</strong> Understanding the color wheel helps artists choose harmonious color schemes. Complementary colors (opposite on the wheel) create vibrant contrast. Analogous colors (neighbors) create peaceful harmony. This knowledge helps you make intentional artistic choices!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-fill-drip" style="color: #E67E22;"></i> Mixing Demonstration</div>
            <p>To make Orange: Start with yellow, add tiny amounts of red until you reach the perfect orange. To make Green: Start with yellow, add tiny amounts of blue. To make Violet: Start with blue, add tiny amounts of red.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-paint-brush" style="color: #4A90E2;"></i> Precision Painting</div>
            <p>Use a fine brush for edges. Keep your brush perpendicular to the paper. Don't overload your brush with paint—a little goes a long way!</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-magic" style="color: #9B59B6;"></i> Color Harmony in Art</div>
            <p>Vincent van Gogh used complementary colors (blue-orange, yellow-violet) to make his paintings vibrant and energetic. Now YOU can make those same artistic choices!</p>
        </div>
    `,
    taskInstructions: "Complete these activities to practice color mixing and apply color accurately to your 12-part color wheel.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Color Mixing Practice</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Before painting your wheel, practice mixing these colors. Use paints or colored pencils to create each shade:
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">
                    <div>
                        <strong>Orange</strong> (Red + Yellow)
                        <div class="color-swatch" style="width: 100%; height: 40px; background-color: #FFA500; border: 1px solid #ccc; margin-top: 5px;"></div>
                    </div>
                    <div>
                        <strong>Green</strong> (Yellow + Blue)
                        <div class="color-swatch" style="width: 100%; height: 40px; background-color: #008000; border: 1px solid #ccc; margin-top: 5px;"></div>
                    </div>
                    <div>
                        <strong>Violet</strong> (Blue + Red)
                        <div class="color-swatch" style="width: 100%; height: 40px; background-color: #8F00FF; border: 1px solid #ccc; margin-top: 5px;"></div>
                    </div>
                    <div>
                        <strong>Red-Orange</strong> (Red + Orange)
                        <div class="color-swatch" style="width: 100%; height: 40px; background-color: #FF4500; border: 1px solid #ccc; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="answer-space" style="height: 60px;">Write which mixture was easiest/hardest and why:</div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Paint Your Color Wheel</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Apply color to your 12-part color wheel in this order:
                <ol style="margin-left: 40px; margin-top: 10px; margin-bottom: 15px;">
                    <li><span style="background-color: #FF0000; color: white; padding: 2px 8px;">RED</span> — Apply to all red segments first (Red, Red-Orange, Red-Violet)</li>
                    <li><span style="background-color: #FFFF00; padding: 2px 8px;">YELLOW</span> — Apply to all yellow segments (Yellow, Yellow-Orange, Yellow-Green)</li>
                    <li><span style="background-color: #0000FF; color: white; padding: 2px 8px;">BLUE</span> — Apply to all blue segments (Blue, Blue-Green, Blue-Violet)</li>
                    <li>Mix and apply SECONDARY colors (Orange, Green, Violet)</li>
                    <li>Mix and apply TERTIARY colors last</li>
                </ol>
                <div class="drawing-area" style="height: 200px; margin-top: 15px; border: 2px solid #FF6B6B; background-color: #fffafa;">
                    <p style="text-align: center; color: #FF6B6B; padding-top: 80px;">Create your finished color wheel here. Aim for smooth, even color inside each segment.</p>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Color Relationships</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Answer these questions about your color wheel:
                <div style="margin-left: 20px; margin-top: 15px;">
                    <div>a. Which colors are directly opposite Red? _______________</div>
                    <div style="margin-top: 10px;">b. Which colors are directly opposite Blue? _______________</div>
                    <div style="margin-top: 10px;">c. Name three colors that are ANALOGOUS (neighbors) with Green: _______________, _______________, _______________</div>
                    <div style="margin-top: 10px;">d. Why would an artist choose complementary colors for a painting? ___________________________________</div>
                </div>
                <div class="answer-space" style="height: 80px; margin-top: 15px;"></div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Artist's Reflection</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Complete this reflection about your color wheel project:
                <div style="margin-top: 15px;">
                    <div>The most challenging part of creating my color wheel was...</div>
                    <div class="answer-space" style="height: 60px; margin: 10px 0;"></div>
                    <div style="margin-top: 15px;">I was successful at...</div>
                    <div class="answer-space" style="height: 60px; margin: 10px 0;"></div>
                    <div style="margin-top: 15px;">Understanding the color wheel will help me with Imaginative Composition because...</div>
                    <div class="answer-space" style="height: 80px; margin: 10px 0;"></div>
                </div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">5</span> <strong>Challenge:</strong> On a separate paper, create a small sketch of an object (flower, fish, or fruit) and color it using an ANALOGOUS color scheme (3-4 neighboring colors).
            <div style="margin-top: 10px; font-style: italic; color: #666;">Example: A fish colored in blues, blue-greens, and greens.</div>
        </div>
    `,
    homework: "Complete your 12-part color wheel if not finished in class. Bring your completed color wheel and your analogous color sketch to our next lesson.",
    homeworkDue: "Monday"
}
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6ExpressiveArtsWeek5);
console.log("expressivearts-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6ExpressiveArtsWeek5);
console.log("expressiveArts-week5.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6ExpressiveArtsWeek5',
metadata: grade6ExpressiveArtsWeek5.metadata,
days: grade6ExpressiveArtsWeek5
});
console.log("expressiveArts-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ExpressiveArtsWeek5 = grade6ExpressiveArtsWeek5;
console.log("expressiveArts-week5.js loaded and registered successfully");