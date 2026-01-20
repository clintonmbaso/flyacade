// Grade 5 Technology Studies - Week 3 Data
const grade5TechnologyStudiesWeek3 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        week: 3,
        title: "Introduction to Woodworking Joints & Soft Joints and Seams",
        description: "Understanding different types of joints in woodworking and soft material joining techniques"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Introduction to Woodworking Joints",
        subtopic: "Identification and Anatomy",
        lessonContent: `
            <p>Welcome to our study of woodworking joints. Today we will explore how different wooden parts fit together like a puzzle to create strong structures.</p>
            <p><strong>Key Concept:</strong> Woodworking joints are special connections between pieces of wood that provide strength and stability without relying only on glue or nails.</p>
            <p><strong>The Puzzle Analogy:</strong> Just like puzzle pieces interlock, woodworking joints connect wooden parts in specific ways. Look at a wooden chair or table - the parts fit together perfectly!</p>
            <p><strong>Common Woodworking Joints:</strong></p>
            <ul>
                <li><strong>Mortise and Tenon:</strong> A rectangular projection (tenon) fits into a hole (mortise)</li>
                <li><strong>Halving Joint:</strong> Two pieces are cut halfway through and fitted together</li>
                <li><strong>Dovetail Joint:</strong> Interlocking fan-shaped pieces that resist pulling apart</li>
                <li><strong>Rebate Joint:</strong> A groove cut along the edge of a piece to receive another piece</li>
            </ul>
            <p><strong>Why Use Special Joints?</strong> Joints provide more strength than glue or nails alone, allow for wood movement, and create beautiful connections that can last for generations.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece" style="color: #8B4513;"></i> Mortise and Tenon Example</div>
                <p>This joint is commonly used in chair and table construction. The tenon (tongue) fits tightly into the mortise (hole) creating a strong right-angle connection.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th" style="color: #A0522D;"></i> Dovetail Example</div>
                <p>Dovetail joints are often seen in drawer construction. The fan-shaped pieces interlock so tightly that they don't need glue to stay together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group"></i> Halving Joint Example</div>
                <p>Used in frame construction, halving joints are created by cutting half the thickness from each piece so they fit together flush at the intersection.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to understand woodworking joints better.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Examine wooden items in the classroom or think about furniture at home. Identify where you might find these joints:
                <div class="answer-space" style="height: 100px;">
                    <p>Mortise and tenon: ___________________</p>
                    <p>Dovetail: ___________________</p>
                    <p>Halving joint: ___________________</p>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Why are special joints better than using only glue or nails?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Sketch the basic shape of a mortise and tenon joint:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Label the mortise (hole) and tenon (tongue)</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Sketch the basic shape of a dovetail joint:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Show the interlocking fan shapes</p>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Reflection: Which joint looks the strongest to you and why?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find three wooden items at home and try to identify what type of joints they use. Draw or describe them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Soft Joints and Seams",
        subtopic: "Joining non-wood materials and identifying seams",
        lessonContent: `
            <p>Today we will learn about joining materials that aren't wood - like metal, fabric, and plastic. These materials need different connecting methods called seams.</p>
            <p><strong>Key Concept:</strong> Seams are joints used for thin or flexible materials like sheet metal, fabric, or plastic. They're different from wood joints because the materials behave differently.</p>
            <p><strong>Metal vs. Wood:</strong> Look at a metal can or a piece of cloth. We can't use a dovetail joint here - the materials are too thin! Instead, we use seams that fold, crimp, or stitch materials together.</p>
            <p><strong>Types of Seams:</strong></p>
            <ul>
                <li><strong>Flat Seams:</strong> Two edges joined flat against each other (common in sewing)</li>
                <li><strong>Folded Seams:</strong> Edges folded over and joined (like on metal cans)</li>
                <li><strong>Lap Seams:</strong> One piece overlaps another and is fastened</li>
                <li><strong>Butt Seams:</strong> Edges meet directly and are welded or soldered</li>
            </ul>
            <p><strong>Safety First!</strong> Different materials need different safety precautions. Metal edges can be sharp, fabrics might need special needles, and plastics can melt if heated too much.</p>
            <p><strong>Why Seams Work:</strong> Seams distribute stress along a line rather than at points, making them ideal for thin, flexible materials that would split if we tried to use wood-style joints.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt" style="color: #4A90E2;"></i> Fabric Seam Example</div>
                <p>Look at your clothing! The stitches along the sides are flat seams that join fabric pieces. Different stitches create different seam strengths.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Metal Can Seam Example</div>
                <p>Examine a soda can. The sides are joined with a folded seam that's crimped tightly. The top has a different seam that allows it to open.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Cardboard Seam Example</div>
                <p>Cardboard boxes use folded seams with glue or tape. The flaps interlock or fold over to create a strong container from thin material.</p>
            </div>
        `,
        taskInstructions: "Identify different types of seams and understand safety considerations for different materials.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Seam Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Examine your clothing. Find and describe three different seams:
                    <div class="answer-space" style="height: 100px;">
                        <p>1. ___________________</p>
                        <p>2. ___________________</p>
                        <p>3. ___________________</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Look at a metal container (like a food can). Describe how the seams are different from fabric seams:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Safety Considerations</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three safety precautions needed when working with different materials:
                    <div class="answer-space" style="height: 100px;">
                        <p>Metal: ___________________</p>
                        <p>Fabric: ___________________</p>
                        <p>Plastic: ___________________</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to use thimbles when sewing? What other protective gear might be needed?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Design and Application</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw two different types of seams:
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1;">
                            <p><strong>Flat Seam (for fabric):</strong></p>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                        <div style="flex: 1;">
                            <p><strong>Folded Seam (for metal):</strong></p>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is a seam the best "joint" for thin materials like fabric or sheet metal?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Create a table comparing wood joints and seams:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 60px;">Draw a two-column table with headings: "Wood Joints" and "Seams"</p>
                    </div>
                </div>
            </div>
        `,
        homework: "Find five different items at home made from different materials (wood, metal, fabric, plastic, cardboard). Describe how they're joined together.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyStudiesWeek3);
    console.log("technology-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyStudiesWeek3);
    console.log("technology-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyStudiesWeek3',
        metadata: grade5TechnologyStudiesWeek3.metadata,
        days: grade5TechnologyStudiesWeek3
    });
    console.log("technology-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyStudiesWeek3 = grade5TechnologyStudiesWeek3;
console.log("technology-week3.js loaded and registered successfully");