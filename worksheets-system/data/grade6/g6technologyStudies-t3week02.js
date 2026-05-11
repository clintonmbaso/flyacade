// Grade 6 Technology Studies - Term 3 Week 2 Data
const grade6TechnologyWeek2 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 3,
        week: 2,
        title: "Product Design and Problem Solving",
        description: "Identifying community needs, brainstorming solutions, and developing product designs"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Product Design",
        subtopic: "Identifying Needs - Finding Problems in Our Community",
        lessonContent: `
            <p>Welcome to Product Design! Today we'll learn how to look at our local community to find problems that need physical solutions.</p>
            <p><strong>Key Question:</strong> What problems in my community could be solved with a new or improved product?</p>
            <p><strong>Introduction:</strong> Every great invention starts with a need or a problem. Designers and engineers observe their surroundings, talk to people, and identify challenges that could be solved with a physical product.</p>
            <p><strong>The Design Process - Step 1: Identifying Needs</strong></p>
            <ol>
                <li><strong>Observe:</strong> Look carefully at your community</li>
                <li><strong>Listen:</strong> Pay attention to complaints or frustrations</li>
                <li><strong>Question:</strong> Ask "How might we make this better?"</li>
                <li><strong>Record:</strong> Write down problems you notice</li>
            </ol>
            <p><strong>Types of Needs to Look For:</strong></p>
            <ul>
                <li><strong>Convenience:</strong> Tasks that are difficult or time-consuming</li>
                <li><strong>Safety:</strong> Situations that could be dangerous</li>
                <li><strong>Organization:</strong> Things that are messy or hard to manage</li>
                <li><strong>Accessibility:</strong> Products that are hard for some people to use</li>
                <li><strong>Durability:</strong> Items that break too easily</li>
            </ul>
            <p><strong>Examples of Community Problems:</strong></p>
            <ul>
                <li>Students struggling to carry heavy books to school</li>
                <li>Market vendors needing better ways to display goods</li>
                <li>Elderly people having difficulty opening containers</li>
                <li>Lost items at school with no easy way to return them</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas-lightbulb"></i> Real-World Example</div>
                <p>Someone noticed that people struggled to carry multiple grocery bags. The solution? The reusable shopping bag with reinforced handles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas-users"></i> Community Observation</div>
                <p>A student noticed that younger siblings lost their water bottles at school. She designed a water bottle with a sticker label holder and a班级tracking system.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas-search"></i> Need Finding Tips</div>
                <p>Ask family members: "What frustrates you most during your daily routine?" Their answers often reveal great design opportunities!</p>
            </div>
        `,
        taskInstructions: "Observe your community, identify a problem, and complete a need analysis worksheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Community Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Observe your school, home, or local community. List 5 problems you notice that could be solved with a physical product:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Problem 1: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Problem 2: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Problem 3: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Problem 4: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Problem 5: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Need Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose the BEST problem from your list and complete this analysis:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Problem identified:</strong> <span class="answer-space-inline" style="display: inline-block; width: 60%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div><strong>Who is affected by this problem?</strong> <span class="answer-space-inline" style="display: inline-block; width: 60%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div><strong>When does this problem happen?</strong> <span class="answer-space-inline" style="display: inline-block; width: 60%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div><strong>Why does this problem exist currently?</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div><strong>What existing products try to solve this?</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Design Brief</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a design brief (a short statement describing what you will design):
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5; font-style: italic;">
                        "I will design a product that helps [who] to [do what] so that [why]."
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Success Criteria</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> List 3 things your product MUST do to solve the problem:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview one family member or neighbor about a problem they face daily. Write down their problem in your notebook and bring it to class tomorrow.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Product Design",
        subtopic: "Brainstorming - Generating Three Solution Ideas",
        lessonContent: `
            <p>Now that we've identified a problem, it's time to generate ideas! Today we'll brainstorm and sketch three different solutions.</p>
            <p><strong>Key Question:</strong> How many different ways can I solve this problem?</p>
            <p><strong>What is Brainstorming?</strong></p>
            <ul>
                <li>A creative technique for generating many ideas</li>
                <li>No idea is "wrong" during brainstorming</li>
                <li>Quantity matters more than quality at this stage</li>
                <li>Wild and unusual ideas can lead to great solutions!</li>
            </ul>
            <p><strong>Brainstorming Rules:</strong></p>
            <ol>
                <li><strong>Defer judgment:</strong> Don't criticize ideas yet</li>
                <li><strong>Go for quantity:</strong> Try to generate many ideas</li>
                <li><strong>Encourage wild ideas:</strong> Crazy ideas can spark better ones</li>
                <li><strong>Build on others' ideas:</strong> "Yes, and..." instead of "No, but..."</li>
                <li><strong>Stay focused:</strong> Keep the problem in mind</li>
            </ol>
            <p><strong>Three Categories to Explore:</strong></p>
            <ul>
                <li><strong>Idea 1 - Simple/Quick Fix:</strong> What is the easiest possible solution?</li>
                <li><strong>Idea 2 - Creative/Unusual:</strong> What is a fun or surprising approach?</li>
                <li><strong>Idea 3 - Advanced/Tech-Enhanced:</strong> What if you could use technology or special materials?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas-pencil-ruler"></i> Sketching Tips</div>
                <p>Your sketches don't need to be perfect! Use simple shapes, label parts, and add notes explaining how the product works.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas-comments"></i> "Yes, And..."</div>
                <p>Instead of saying "That won't work," try saying "Yes, and we could also..." This keeps creativity flowing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas-chart-line"></i> Quantity Leads to Quality</div>
                <p>The more ideas you generate, the more likely you are to find a brilliant one. Aim for at least 10 ideas before choosing your top 3!</p>
            </div>
        `,
        taskInstructions: "Brainstorm ideas and sketch three different product solutions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Brainstorming Web</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a brainstorming web. Write your problem in the center, then add at least 8 possible solution ideas around it:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Idea 1 - Simple/Quick Fix Solution</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sketch your first solution (simple and easy to make):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <div style="margin-top: 10px;">
                        <label>Materials needed:</label>
                        <div class="answer-space" style="height: 40px;"></div>
                        <label>How it works (2-3 sentences):</label>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Idea 2 - Creative/Unusual Solution</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sketch your second solution (creative, fun, or unique):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <div style="margin-top: 10px;">
                        <label>What makes this idea creative?</label>
                        <div class="answer-space" style="height: 40px;"></div>
                        <label>How it solves the problem:</label>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Idea 3 - Advanced/Tech-Enhanced Solution</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sketch your third solution (using technology or special materials):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <div style="margin-top: 10px;">
                        <label>Technology or special materials needed:</label>
                        <div class="answer-space" style="height: 40px;"></div>
                        <label>Why this might work better than other ideas:</label>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Idea Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle the idea you think is BEST. Explain why you chose this one:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask two family members which of your three ideas they like best and why. Write down their feedback.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Product Design",
        subtopic: "Developing Products - Refining Your Best Design",
        lessonContent: `
            <p>Today we'll take our best idea and develop it into a detailed, refined design ready for prototyping!</p>
            <p><strong>Key Question:</strong> How can I improve my best idea and make it more detailed?</p>
            <p><strong>What is Design Development?</strong></p>
            <ul>
                <li>Taking your best idea and making it better</li>
                <li>Adding details about materials, size, and how parts connect</li>
                <li>Considering problems your original idea might have</li>
                <li>Creating an improved, "final" version</li>
            </ul>
            <p><strong>Questions to Ask When Refining:</strong></p>
            <ol>
                <li>Is this product the right size? (Too big? Too small?)</li>
                <li>What materials will work best? (Strong? Light? Cheap? Available?)</li>
                <li>How will parts stay together? (Glue? Screws? Folding? Velcro?)</li>
                <li>Is it safe to use?</li>
                <li>Can someone easily figure out how to use it?</li>
                <li>What could go wrong? How can I prevent that?</li>
            </ol>
            <p><strong>Parts of a Detailed Design Drawing:</strong></p>
            <ul>
                <li><strong>Labels:</strong> Name each part of your product</li>
                <li><strong>Dimensions:</strong> Show approximate sizes (cm or inches)</li>
                <li><strong>Materials List:</strong> What each part is made from</li>
                <li><strong>Assembly Notes:</strong> How parts connect</li>
                <li><strong>Improved Features:</strong> Changes from your original idea</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas-ruler"></i> Adding Dimensions</div>
                <p>A good design drawing includes measurements. Instead of just drawing a box, write "15 cm wide" or "size of a pencil case."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas-clipboard-list"></i> Materials Matter</div>
                <p>Be specific! Instead of "plastic," write "recycled plastic bottle" or "clear plastic sheet." Instead of "wood," write "cardboard" or "balsa wood."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas-sync-alt"></i> Improvement Example</div>
                <p>Your original idea: A book holder. Your improved design: An angled book holder with a page clip and a storage pocket for a pencil. Small additions make big differences!</p>
            </div>
        `,
        taskInstructions: "Refine your best idea into a detailed design with labels, dimensions, and materials.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Improvement Brainstorm</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List 5 ways to improve your chosen idea:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Improvement 1: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Improvement 2: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Improvement 3: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Improvement 4: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                        <div>Improvement 5: <span class="answer-space-inline" style="display: inline-block; width: 70%; border-bottom: 1px dotted #ccc;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Detailed Design Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a detailed, labeled drawing of your improved product:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <div style="margin-top: 10px; font-style: italic; font-size: 12px;">Remember to label: each part, materials, dimensions, and how parts connect</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Materials and Tools List</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List all materials and tools needed to build your product:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>Materials:</strong>
                            <div class="answer-space" style="height: 120px;"></div>
                        </div>
                        <div>
                            <strong>Tools:</strong>
                            <div class="answer-space" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Step-by-Step Building Instructions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write clear steps someone would follow to build your product:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Final Evaluation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Rate your final design and explain:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Will it solve the original problem? (Circle): Yes / Mostly / Partially / No</div>
                        <div>Is it easy to use? (Circle): Very easy / Easy / Somewhat hard / Hard</div>
                        <div>What is the best feature of your design?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>If you could make one more improvement, what would it be?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw your final design on a clean sheet of paper with all labels. Bring it to class next week to begin building!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek2);
    console.log("grade6-technology-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek2);
    console.log("grade6-technology-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek2',
        metadata: grade6TechnologyWeek2.metadata,
        days: grade6TechnologyWeek2
    });
    console.log("grade6-technology-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek2 = grade6TechnologyWeek2;
console.log("grade6-technology-week2.js loaded and registered successfully");