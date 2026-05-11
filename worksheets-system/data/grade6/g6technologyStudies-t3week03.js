// Grade 6 Technology Studies - Term 3 Week 3 Data
const grade6TechnologyWeek3 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 3,
        week: 3,
        title: "Evaluating and Refining Design",
        description: "Exploring materials, tools, design evaluation, and finalizing product plans"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Design Process",
        subtopic: "Materials and Tools",
        lessonContent: `
            <p>Welcome to our exploration of the design process! Today we'll learn how to identify the materials and tools needed to build a designed product.</p>
            <p><strong>Key Question:</strong> What materials and tools do I need to turn my design into a real product?</p>
            <p><strong>Introduction:</strong> Every great design needs the right materials and tools to become a reality. Choosing the wrong materials can make a product weak, expensive, or impossible to build.</p>
            <p><strong>Types of Materials:</strong></p>
            <ol>
                <li><strong>Wood:</strong> Strong, durable, good for furniture and structures</li>
                <li><strong>Metal:</strong> Very strong, conducts electricity and heat, good for tools and machines</li>
                <li><strong>Plastic:</strong> Lightweight, waterproof, flexible, good for containers and casings</li>
                <li><strong>Fabric:</strong> Soft, flexible, good for clothing and bags</li>
                <li><strong>Cardboard/Paper:</strong> Lightweight, easy to cut and fold, good for prototypes</li>
                <li><strong>Glass:</strong> Transparent, fragile, good for windows and containers</li>
            </ol>
            <p><strong>Types of Tools:</strong></p>
            <ul>
                <li><strong>Measuring Tools:</strong> Ruler, tape measure, set square</li>
                <li><strong>Cutting Tools:</strong> Scissors, craft knife, saw</li>
                <li><strong>Joining Tools:</strong> Glue gun, hammer and nails, screwdriver, stapler</li>
                <li><strong>Shaping Tools:</strong> Sandpaper, file, pliers</li>
                <li><strong>Marking Tools:</strong> Pencil, marker, chalk</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Building a Birdhouse</div>
                <p>Materials needed: Wood (walls and roof), nails or screws (joining), paint (weather protection). Tools needed: Hammer, saw, ruler, pencil, sandpaper.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-truck"></i> Material Choice Matters</div>
                <p>A bridge made of cardboard would collapse, but a bridge made of steel can hold heavy trucks! Choosing the right material for the job is essential.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Sustainable Choices</div>
                <p>Designers today consider recycled and eco-friendly materials. Cardboard, bamboo, and recycled plastic are great sustainable options.</p>
            </div>
        `,
        taskInstructions: "List materials and tools needed for a designed product, then create a materials shopping list.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Material Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each product below, list the main material(s) it is made from:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A water bottle: _________</div>
                        <div>B. A school desk: _________</div>
                        <div>C. A window: _________</div>
                        <div>D. A t-shirt: _________</div>
                        <div>E. A spoon: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tool Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each task with the correct tool:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Measuring length &nbsp;&nbsp;&nbsp; A. Scissors</div>
                        <div>___ Cutting paper &nbsp;&nbsp;&nbsp; B. Ruler</div>
                        <div>___ Joining wood pieces &nbsp;&nbsp;&nbsp; C. Hammer and nails</div>
                        <div>___ Smoothing rough edges &nbsp;&nbsp;&nbsp; D. Sandpaper</div>
                        <div>___ Marking cutting lines &nbsp;&nbsp;&nbsp; E. Pencil</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Materials Shopping List</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Imagine you are building a pencil holder for your desk. List all the materials and tools you would need:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Materials:</strong></p>
                        <div class="answer-space" style="height: 80px;"></div>
                        <p><strong>Tools:</strong></p>
                        <div class="answer-space" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to list materials and tools BEFORE starting to build?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find 5 different products and write down what material each is made from and why you think that material was chosen.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Design Process",
        subtopic: "Design Evaluation",
        lessonContent: `
            <p>Today we'll learn how to evaluate designs and understand why some designs work better than others!</p>
            <p><strong>Key Question:</strong> Why do some designs work better than others?</p>
            <p><strong>Introduction:</strong> Not all designs are equally successful. Evaluating a design means looking at its strengths and weaknesses to make it better.</p>
            <p><strong>Criteria for Evaluating Designs:</strong></p>
            <ol>
                <li><strong>Function:</strong> Does it do what it's supposed to do?</li>
                <li><strong>Durability:</strong> Will it last or break easily?</li>
                <li><strong>Cost:</strong> Is it affordable to make?</li>
                <li><strong>Safety:</strong> Is it safe to use?</li>
                <li><strong>Aesthetics:</strong> Does it look good?</li>
                <li><strong>Ease of Use:</strong> Is it easy for the user?</li>
                <li><strong>Materials:</strong> Are the materials appropriate?</li>
            </ol>
            <p><strong>Why Some Designs Fail:</strong></p>
            <ul>
                <li>Poor choice of materials (too weak, too heavy, too expensive)</li>
                <li>Bad measurements (parts don't fit together)</li>
                <li>Ignoring user needs (too hard to use, uncomfortable)</li>
                <li>Safety issues (sharp edges, unstable structure)</li>
            </ul>
            <p><strong>Why Some Designs Succeed:</strong></p>
            <ul>
                <li>Clear purpose and good function</li>
                <li>Right materials for the job</li>
                <li>User-friendly design</li>
                <li>Safe and durable construction</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Chair Comparison</div>
                <p>A chair with three legs might wobble (poor design). A chair with four legs is stable and works better. Small changes make big differences!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mobile-alt"></i> Product Evolution</div>
                <p>Early mobile phones were large and heavy. Designers evaluated and improved them - now phones are slim, light, and fit in your pocket!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Speed vs. Safety</div>
                <p>A racing car is designed for speed. A family car is designed for safety and comfort. Different designs work better for different purposes.</p>
            </div>
        `,
        taskInstructions: "Evaluate different designs using success criteria and identify areas for improvement.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Design Evaluation Criteria</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List 5 things you should consider when evaluating a design:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparing Two Designs</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at these two designs for a water bottle carrier:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Design A:</strong> A plastic bag with one thin handle</p>
                        <p><strong>Design B:</strong> A fabric carrier with two wide, padded straps and a zipper</p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which design is more durable? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>Which design is easier to carry? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>Which design would you choose? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Improving a Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A student designed a bookshelf. Problems found: It wobbles, the shelves are too close together, and the wood is rough. List three improvements:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Evaluation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Think about a product you use every day (like a backpack or pencil case). What works well about it? What could be improved?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find an object at home that could be improved. Write down two things that work well and two things you would change to make it better.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Design Process",
        subtopic: "Finalizing the Design",
        lessonContent: `
            <p>Today we'll learn how to finalize a design by adding details and annotations to make the plan complete and ready for building!</p>
            <p><strong>Key Question:</strong> How do I make my design plan clear and complete so someone else could build it?</p>
            <p><strong>Introduction:</strong> A final design includes all the details that turn a rough sketch into a complete building plan. Annotations are notes that explain your choices.</p>
            <p><strong>What to Include in a Final Design:</strong></p>
            <ol>
                <li><strong>Dimensions:</strong> Measurements for every part (length, width, height)</li>
                <li><strong>Materials:</strong> What each part is made from</li>
                <li><strong>Labels:</strong> Names of all parts and features</li>
                <li><strong>Annotations:</strong> Written notes explaining design choices and construction steps</li>
                <li><strong>Colour/Finish:</strong> What colours or surface treatments will be used</li>
                <li><strong>Assembly Instructions:</strong> How parts fit together</li>
            </ol>
            <p><strong>What are Annotations?</strong></p>
            <ul>
                <li>Short notes written on or near a drawing</li>
                <li>Explain WHY you made certain choices</li>
                <li>Point out important details</li>
                <li>Examples: "Handle padded for comfort", "Made from waterproof wood", "Rounded edges for safety"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Annotated Drawing Example</div>
                <p>A final design for a birdhouse might have notes like: "Roof sloped for rain runoff", "Entrance hole 3cm diameter (for small birds)", "Non-toxic paint (safe for birds)".</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Builder's Blueprint</div>
                <p>Architects add detailed dimensions and notes to their drawings so construction workers know exactly what to build and how.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Before and After</div>
                <p>A rough sketch has basic shapes. A final design has measurements, material labels, and notes explaining each feature.</p>
            </div>
        `,
        taskInstructions: "Add final details, dimensions, and annotations to a product plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Annotations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Below is a simple drawing of a pencil holder. Add annotations (labels with notes) to explain:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>- What material each part is made from</div>
                        <div>- Why certain features are designed that way</div>
                        <div>- Any safety or durability features</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Pencil Holder Drawing - Add annotations with arrows]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding Dimensions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add measurements to the pencil holder drawing above. Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>- Height of the holder</div>
                        <div>- Width of the base</div>
                        <div>- Thickness of the walls (if relevant)</div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Finalizing Your Own Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using the design you have been working on this week, create a fully annotated final drawing:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Below your drawing, write a materials list and step-by-step assembly instructions:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Checklist Review</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Before submitting your final design, check off these items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ All parts are labeled</div>
                        <div>□ Dimensions are included</div>
                        <div>□ Materials are specified</div>
                        <div>□ Annotations explain design choices</div>
                        <div>□ Assembly instructions are clear</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Finalize a design for a simple product (e.g., phone stand, bookend, or toy box). Draw it with dimensions, labels, and at least 3 annotations explaining your choices.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek3);
    console.log("grade6-technology-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek3);
    console.log("grade6-technology-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek3',
        metadata: grade6TechnologyWeek3.metadata,
        days: grade6TechnologyWeek3
    });
    console.log("grade6-technology-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek3 = grade6TechnologyWeek3;
console.log("grade6-technology-week3.js loaded and registered successfully");