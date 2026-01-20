// Grade 5 Technology Studies - Week 4 Data
const grade5TechnologyWeek4 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        week: 4,
        title: "Joining Skills and Maintenance",
        description: "Practical joining techniques and repair/maintenance of joined items"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Hands-on Joining Skills",
        subtopic: "Practical application of joining materials",
        lessonContent: `
            <p>Welcome to our hands-on technology lesson. Today we will move from learning about joints to actually creating one.</p>
            <p><strong>Learning Objectives:</strong></p>
            <ol>
                <li>Demonstrate how to join materials using basic joint techniques.</li>
                <li>Practice safe tool handling during the joining process.</li>
            </ol>
            <p><strong>Introduction:</strong> Today, students will move from identifying joints to attempting to create a simple joint (like a halving joint) using soft wood or cardboard. This is where theory meets practice!</p>
            <p><strong>Key Concepts:</strong></p>
            <ul>
                <li><strong>Halving Joint:</strong> A simple joint where half the thickness of each material is removed so they fit together flush.</li>
                <li><strong>Rebate Joint:</strong> A joint where one piece has a recess cut into it to receive another piece.</li>
                <li><strong>Tool Safety:</strong> Proper handling and awareness are essential when working with cutting tools.</li>
            </ul>
            <p><strong>Materials You'll Need:</strong> Soft wood or thick cardboard, safety rulers, pencils, safe cutting tools (under supervision), sandpaper, and wood glue.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hammer" style="color: #8B4513;"></i> Halving Joint Example</div>
                <p>A halving joint is like two puzzle pieces that fit together. Each piece has half its thickness removed so they lock together creating a flat surface.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Measurement Precision</div>
                <p>For joints to fit properly, accurate measurement is crucial. "Measure twice, cut once" is the golden rule of joinery.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat"></i> Safety First</div>
                <p>Always cut away from your body, keep fingers away from cutting lines, and wear eye protection when necessary.</p>
            </div>
        `,
        taskInstructions: "Complete the following practical activities to develop your joining skills. Remember to follow all safety guidelines.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Preparation and Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a diagram of a halving joint. Label the parts that will be removed and how they will fit together:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List three safety rules you must follow when using cutting tools:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practical Application</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Under supervision, create a simple halving joint using soft wood or cardboard. Describe your process:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Take a photo or draw your completed joint. Note what went well and what was challenging:
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1;">
                            <p><strong>Your Joint:</strong></p>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                        <div style="flex: 1;">
                            <p><strong>Reflection:</strong></p>
                            <div class="answer-space" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Peer Review and Standards</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Exchange your joint with a partner. Review their work. Did the parts fit together snugly? Check these standards:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><input type="checkbox"> Materials are cut accurately</div>
                        <div><input type="checkbox"> Joint fits together without gaps</div>
                        <div><input type="checkbox"> Surfaces are smooth and even</div>
                        <div><input type="checkbox"> Safety procedures were followed</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">Partner feedback:</div>
                </div>
            </div>
        `,
        homework: "Find three different joints in items around your home (furniture, toys, etc.). Sketch them and label what type of joint each is.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Repair and Maintenance of Joined Items",
        subtopic: "Fixing broken items and long-term care",
        lessonContent: `
            <p>Today we shift from making joints to fixing them. Learning to repair and maintain items is an essential technology skill that reduces waste and saves resources.</p>
            <p><strong>Learning Objectives:</strong></p>
            <ol>
                <li>Learn how to repair items where the joints have failed.</li>
                <li>Understand how to maintain joined items to prevent them from breaking.</li>
            </ol>
            <p><strong>Introduction:</strong> The "Wobbly Chair" Problem: What happens when a joint gets old or the glue dries out? Discuss the importance of repair over replacement. Repairing extends the life of products and is better for the environment.</p>
            <p><strong>Common Joint Failures:</strong></p>
            <ul>
                <li><strong>Loose Joints:</strong> Caused by drying glue, wood shrinkage, or wear and tear.</li>
                <li><strong>Broken Joints:</strong> Result from excessive force, impact, or material fatigue.</li>
                <li><strong>Corroded/Rusted Joints:</strong> Metal joints can corrode, especially in damp conditions.</li>
            </ul>
            <p><strong>Repair Techniques:</strong> Tightening screws/bolts, reapplying adhesive, adding reinforcement brackets, or replacing damaged parts.</p>
            <p><strong>Preventive Maintenance:</strong> Keeping joints clean, dry, and periodically checking for looseness can prevent failures.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-couch" style="color: #DAA520;"></i> The Wobbly Chair</div>
                <p>A chair leg becomes loose because the glue has dried out. Instead of throwing it away, you can remove the old glue, apply fresh adhesive, and clamp it until dry.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Repair vs. Replacement</div>
                <p>Fixing a broken toy joint with wood glue might take 30 minutes and cost very little. Buying a new toy creates waste and uses more resources.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Preventive Care</div>
                <p>Wiping moisture off metal joints, keeping wooden furniture out of direct sunlight, and tightening screws periodically can prevent many joint failures.</p>
            </div>
        `,
        taskInstructions: "Analyze repair scenarios and practice maintenance planning. Think like an engineer who fixes rather than replaces.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Diagnosis and Repair Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have a wooden picture frame where the corner joint has come apart. Describe your step-by-step repair plan:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A metal bracket holding a shelf to the wall is rusty and loose. What tools and materials would you need to fix it safely?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practical Repair Lab</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Under supervision, practice repairing a simple joined item (like re-gluing a broken cardboard joint or tightening a loose connection). Document the process:
                    <div style="margin-top: 10px;">
                        <div><strong>Before repair:</strong> Describe the problem</div>
                        <div class="answer-space" style="height: 40px; margin-bottom: 10px;"></div>
                        <div><strong>Repair steps:</strong> List what you did</div>
                        <div class="answer-space" style="height: 60px; margin-bottom: 10px;"></div>
                        <div><strong>After repair:</strong> Did it work? Test it.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Maintenance Routines</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a "Maintenance Checklist" for a wooden desk with multiple joints. Include at least 5 maintenance tasks to prevent joint failure:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How does keeping joints dry and clean prevent rot or rust? Explain in your own words:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection and Standards</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Final Reflection: How does knowing how to make a joint help you fix one?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Standard Check: Was your repair successful? Evaluate against these criteria:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><input type="checkbox"> Item functions as intended</div>
                        <div><input type="checkbox"> Joint is secure and stable</div>
                        <div><input type="checkbox"> Repair is neat and appropriate</div>
                        <div><input type="checkbox"> Safety was maintained throughout</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find one item in your home that has a loose or damaged joint (with permission). Write a brief report describing the joint, the problem, and how you would repair it.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyWeek4);
    console.log("technology-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyWeek4);
    console.log("technology-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyWeek4',
        metadata: grade5TechnologyWeek4.metadata,
        days: grade5TechnologyWeek4
    });
    console.log("technology-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyWeek4 = grade5TechnologyWeek4;
console.log("technology-week4.js loaded and registered successfully");