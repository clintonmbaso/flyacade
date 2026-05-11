// Grade 6 Expressive Arts - Term 3 Week 8 Data
const grade6ExpressiveArtsWeek8 = {
    metadata: {
        grade: 6,
        subject: "Expressive Arts",
        term: 3,
        week: 8,
        title: "Poster Design",
        description: "Planning and producing thematic posters with effective visual communication and slogans"
    },
    
    monday: {
        subject: "Expressive Arts",
        topic: "Visual Arts",
        subtopic: "Thematic Poster Planning (Lesson 27)",
        lessonContent: `
            <p>Welcome to our poster design unit! Today we'll learn how to plan an effective poster that communicates a clear message.</p>
            <p><strong>Key Question:</strong> What makes a poster grab attention and deliver a message effectively?</p>
            <p><strong>Introduction:</strong> Posters are visual tools used to communicate messages, advertise events, raise awareness, or promote causes. A successful poster combines artwork, typography, and layout to capture attention quickly.</p>
            <p><strong>Elements of an Effective Poster:</strong></p>
            <ol>
                <li><strong>Theme/Central Message:</strong> What is the poster about? (e.g., "Planting Trees," "Safety," "Sports Day," "Initiation Ceremony")</li>
                <li><strong>Visual Hierarchy:</strong> The most important elements should be largest and most prominent</li>
                <li><strong>Slogan/Tagline:</strong> A short, memorable phrase that reinforces the message</li>
                <li><strong>Imagery:</strong> Drawings, symbols, or illustrations that support the theme</li>
                <li><strong>Color Scheme:</strong> Colors that evoke the right mood and create contrast</li>
                <li><strong>Layout:</strong> How elements are arranged on the page</li>
            </ol>
            <p><strong>Today's Themes to Explore:</strong></p>
            <ul>
                <li>Planting Trees (environmental awareness)</li>
                <li>Safety (road safety, home safety, community safety)</li>
                <li>Sports Day (school event promotion)</li>
                <li>Initiation Ceremony (cultural celebration)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Slogan Example - Planting Trees</div>
                <p>"Plant a Tree, Grow a Future" or "One Tree, One Breath" or "Green Today, Clean Tomorrow"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Slogan Example - Safety</div>
                <p>"Safety First, Last, and Always" or "Look Left, Look Right, Cross Safe" or "Better Safe Than Sorry"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-futbol"></i> Slogan Example - Sports Day</div>
                <p>"Run, Jump, Play - Sports Day!" or "Teamwork Makes the Dream Work" or "Go for Gold!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drumstick-bite"></i> Slogan Example - Initiation Ceremony</div>
                <p>"Honoring Tradition, Celebrating Growth" or "Step into Adulthood" or "A Journey Begins"</p>
            </div>
        `,
        taskInstructions: "Choose a theme, develop a slogan, and create thumbnail sketches for your poster.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Theme Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose ONE theme for your poster:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="radio" name="theme"> Planting Trees (Environmental Awareness)</label><br>
                        <label><input type="radio" name="theme"> Safety (Road/Home/Community Safety)</label><br>
                        <label><input type="radio" name="theme"> Sports Day (School Event)</label><br>
                        <label><input type="radio" name="theme"> Initiation Ceremony (Cultural Celebration)</label><br>
                        <label><input type="radio" name="theme"> My Own Theme: _________________</label>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><strong>My chosen theme:</strong> _________________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Slogan Development</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Brainstorm THREE possible slogans for your theme:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Slogan 1: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #333;"></span></div>
                        <div>Slogan 2: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #333;"></span></div>
                        <div>Slogan 3: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #333;"></span></div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><strong>My final chosen slogan:</strong> _________________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Thumbnail Sketches (Planning)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create THREE different thumbnail sketch layouts for your poster:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Sketch #1</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Sketch #2</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Sketch #3</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><strong>Which sketch is my favorite and why?</strong> _________________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Color and Materials Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Plan your color scheme and materials:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Main colors I will use: <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #333;"></span></div>
                        <div>• Why these colors?: <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #333;"></span></div>
                        <div>• Materials I need: <span class="answer-space-inline" style="display: inline-block; width: 250px; border-bottom: 1px solid #333;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Planning Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Answer these planning questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) Who is my audience for this poster? _________________________________</p>
                        <p>b) What action do I want viewers to take? _________________________________</p>
                        <p>c) What image/symbol best represents my theme? _________________________________</p>
                    </div>
                </div>
            </div>
        `,
        homework: "Collect 3 different posters from magazines, newspapers, or online. Identify the theme, slogan, and color scheme of each. Bring your favorite to share next class.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Expressive Arts",
        topic: "Visual Arts",
        subtopic: "Final Poster Production (Lesson 28)",
        lessonContent: `
            <p>Today we will bring our poster plans to life! You'll create a full-color final poster based on the planning work from Monday.</p>
            <p><strong>Key Question:</strong> How can I effectively combine images, text, and color to create a powerful poster?</p>
            <p><strong>Poster Production Tips:</strong></p>
            <ul>
                <li><strong>Start with a light pencil sketch:</strong> Plan your layout before adding color</li>
                <li><strong>Make your slogan bold and readable:</strong> Use large letters that can be seen from a distance</li>
                <li><strong>Use contrasting colors:</strong> Dark text on light background (or light on dark) is easiest to read</li>
                <li><strong>Keep it simple:</strong> Too many elements can be confusing. Focus on one main message</li>
                <li><strong>Create a focal point:</strong> One main image should catch the viewer's attention first</li>
                <li><strong>Leave some empty space (white space):</strong> This helps important elements stand out</li>
                <li><strong>Be neat and careful:</strong> Clean lines and careful coloring make a professional poster</li>
            </ul>
            <p><strong>What to Include in Your Final Poster:</strong></p>
            <ol>
                <li>A clear title or slogan (large and bold)</li>
                <li>At least one main illustration or symbol related to your theme</li>
                <li>A full-color design using your chosen color scheme</li>
                <li>Good composition (elements arranged pleasingly)</li>
                <li>Your name and date on the back</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Composition Tip</div>
                <p>Use the "rule of thirds" - imagine your paper divided into 9 equal squares. Place your most important element where the lines intersect for a balanced, pleasing design.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-brush"></i> Lettering Techniques</div>
                <p>For bold titles, try bubble letters, block letters, or outline letters. Use a ruler to keep your letters straight and evenly spaced.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quality Checklist</div>
                <p>A good poster: (1) Can be understood in 3 seconds, (2) Has one clear message, (3) Uses colors that work well together, (4) Is neat and colorful.</p>
            </div>
        `,
        taskInstructions: "Produce a full-color final poster based on your Monday planning sketches.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Final Poster Production</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On a separate sheet of A4 or A3 paper, create your final full-color poster.
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #f0f8ff;">
                        <p><strong>Your poster MUST include:</strong></p>
                        <ul>
                            <li>A clear theme (Planting Trees, Safety, Sports Day, or Initiation Ceremony)</li>
                            <li>A memorable slogan</li>
                            <li>A main illustration related to your theme</li>
                            <li>Full color (use crayons, colored pencils, markers, or paint)</li>
                            <li>Neat and careful execution</li>
                        </ul>
                    </div>
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px solid #4A90E2; background-color: #fafafa; display: flex; align-items: center; justify-content: center;">
                        <p style="color: #999;">→ Create your final poster on a separate sheet of paper ←<br>Use this space for your planning notes</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Poster Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After completing your poster, answer these reflection questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) What theme did you choose for your poster? _________________________________</p>
                        <p>b) What slogan did you use? _________________________________</p>
                        <p>c) What colors did you use and why? _________________________________</p>
                        <div class="answer-space" style="height: 60px;"></div>
                        <p>d) What was the most challenging part of creating your poster? _________________________________</p>
                        <div class="answer-space" style="height: 60px;"></div>
                        <p>e) What are you most proud of in your final poster? _________________________________</p>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Peer Feedback</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Exchange posters with a classmate. Provide constructive feedback:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Classmate's name:</strong> _________________________________</p>
                        <p><strong>Their theme:</strong> _________________________________</p>
                        <p><strong>One thing I like about their poster:</strong> _________________________________</p>
                        <div class="answer-space" style="height: 40px;"></div>
                        <p><strong>One suggestion for improvement:</strong> _________________________________</p>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Check off each item that applies to your poster:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="checkbox"> My poster has a clear theme</label><br>
                        <label><input type="checkbox"> My poster includes a catchy slogan</label><br>
                        <label><input type="checkbox"> My poster has at least one main illustration</label><br>
                        <label><input type="checkbox"> I used full color throughout</label><br>
                        <label><input type="checkbox"> My poster is neat and carefully made</label><br>
                        <label><input type="checkbox"> My text is large and easy to read</label><br>
                        <label><input type="checkbox"> My colors work well together</label><br>
                        <label><input type="checkbox"> I am proud of my finished work</label><br>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: What I Learned</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write one new skill you learned or improved during this poster design unit:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Display your poster at home. Ask a family member what message they understand from it. Write down their response and bring it to next class for discussion.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ExpressiveArtsWeek8);
    console.log("grade6-expressivearts-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ExpressiveArtsWeek8);
    console.log("grade6-expressivearts-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ExpressiveArtsWeek8',
        metadata: grade6ExpressiveArtsWeek8.metadata,
        days: grade6ExpressiveArtsWeek8
    });
    console.log("grade6-expressivearts-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ExpressiveArtsWeek8 = grade6ExpressiveArtsWeek8;
console.log("grade6-expressivearts-week8.js loaded and registered successfully");