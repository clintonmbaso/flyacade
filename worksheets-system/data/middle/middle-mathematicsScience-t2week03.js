// Grade Middle - Term 2 Week 3 Data
// Subject: Mathematics & Science (Integrated)
const gradeMiddleWeek3 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 2,
        week: 3,
        title: "Environmental Care & Size Comparison",
        description: "Exploring the 3 R's (Reduce, Reuse, Recycle) and learning to compare widths using non-standard measurement"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Environmental Care",
        subtopic: "The 3 R's Introduction - Reduce and Reuse",
        lessonContent: `
            <p>Welcome to our week exploring how we can take care of our environment! Today we'll learn about two important ways to help our planet.</p>
            <p><strong>Key Question:</strong> How can we create less waste and make things last longer?</p>
            <p><strong>Introduction:</strong> Every day, we throw things away. But much of what we throw could be used again or not needed at all! The 3 R's help us remember how to protect our environment.</p>
            <p><strong>The First Two R's:</strong></p>
            <ol>
                <li><strong>REDUCE:</strong> Using less stuff so there is less waste
                    <ul>
                        <li>Turn off lights when leaving a room</li>
                        <li>Use both sides of paper</li>
                        <li>Bring a reusable water bottle instead of buying plastic ones</li>
                    </ul>
                </li>
                <li><strong>REUSE:</strong> Using things again instead of throwing them away
                    <ul>
                        <li>Wash and refill glass jars</li>
                        <li>Use cloth bags for shopping</li>
                        <li>Donate old clothes and toys to others who can use them</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Why This Matters:</strong> Less waste means less trash in landfills, cleaner oceans, and a healthier planet for all living things!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt"></i> The Waste Problem</div>
                <p>One person can throw away about 2 kilograms of trash every day! That's like throwing away a full backpack of waste daily.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Reduce in Action</div>
                <p>If every family used one less plastic bag per week, that would save over 1 billion bags from entering landfills each year!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Creative Reuse</div>
                <p>An old glass jar can become a drinking glass, a pencil holder, a flower vase, or a storage container for buttons and coins.</p>
            </div>
        `,
        taskInstructions: "Identify ways to reduce and reuse at home and school, then create a promise list.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reduce and Reuse Brainstorm</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List 3 ways you can REDUCE waste at school:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List 3 ways you can REUSE items at home:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sort the Actions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write each action in the correct column: REDUCE or REUSE
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Using a cloth bag at the store</div>
                        <div>• Turning off the tap while brushing teeth</div>
                        <div>• Giving old books to a younger sibling</div>
                        <div>• Printing on both sides of paper</div>
                        <div>• Washing and refilling a water bottle</div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
                        <div style="border: 2px solid #4A90E2; padding: 10px;">
                            <strong>REDUCE</strong>
                            <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 2px solid #50C878; padding: 10px;">
                            <strong>REUSE</strong>
                            <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Promise to the Planet</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one promise for REDUCE and one promise for REUSE that you will follow this week:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Walk around your home and find 5 items that could be reused instead of thrown away. List them and explain one new use for each.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Environmental Care",
        subtopic: "Recycling Craft - Pencil Holder or Toy",
        lessonContent: `
            <p>Today we'll put REUSE into action by turning clean plastic containers into something useful and fun!</p>
            <p><strong>Key Question:</strong> How can trash become treasure?</p>
            <p><strong>Introduction:</strong> The third R is RECYCLE - but before recycling, we can REUSE! Today we'll use our creativity to give plastic containers a new life.</p>
            <p><strong>What is Recycling?</strong></p>
            <ul>
                <li>Recycling means turning used materials into new products</li>
                <li>Paper, plastic, glass, and metal can all be recycled</li>
                <li>Recycling saves energy and reduces pollution</li>
            </ul>
            <p><strong>Today's Craft Options:</strong></p>
            <ol>
                <li><strong>Pencil Holder:</strong> Using a clean plastic bottle or container, decorated to hold pens and pencils</li>
                <li><strong>Toy:</strong> Using plastic containers to create a car, animal, or other creative toy</li>
            </ol>
            <p><strong>Safety First!</strong> Always ask an adult to help cut plastic containers. Use clean, dry containers only.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Pencil Holder Ideas</div>
                <p>Decorate your container with paper, markers, stickers, or fabric scraps. You can even paint it! Make sure the bottom is flat so it stands up.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Toy Ideas</div>
                <p>A yogurt cup can become a car body with bottle cap wheels! A detergent bottle can become a spaceship or animal.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Recycling Impact</div>
                <p>Recycling just one plastic bottle saves enough energy to power a light bulb for 6 hours!</p>
            </div>
        `,
        taskInstructions: "Create a useful craft from a clean plastic container, then reflect on the process.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plan Your Craft</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What type of container will you use? What will you create?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a sketch of your design:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Craft Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create your pencil holder or toy. Once finished, describe what you made and how you made it:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Instead of throwing your container away, you gave it a new life. Why is this better for the environment?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What other items around your home could be reused in creative ways?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Show your craft to a family member and explain how reusing items helps the environment. Ask them to share one thing they reuse at home.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Comparing Widths - Wide and Narrow",
        lessonContent: `
            <p>Today we'll start learning about measurement by comparing how wide or narrow things are!</p>
            <p><strong>Key Question:</strong> What does it mean for something to be wide or narrow?</p>
            <p><strong>Introduction:</strong> When we look at objects, we can compare them by size. Today we'll focus on WIDTH - how wide or narrow something is from side to side.</p>
            <p><strong>New Vocabulary:</strong></p>
            <ul>
                <li><strong>Width:</strong> The measurement of how wide something is (from left to right)</li>
                <li><strong>Wide:</strong> Having a large width - a big distance from side to side</li>
                <li><strong>Narrow:</strong> Having a small width - a small distance from side to side</li>
            </ul>
            <p><strong>Comparing Words:</strong></p>
            <ul>
                <li>Wider than / more wide than</li>
                <li>Narrower than / less wide than</li>
                <li>The widest / the most wide</li>
                <li>The narrowest / the least wide</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Door Comparison</div>
                <p>A classroom door is WIDE. A closet door is NARROW. The classroom door is wider than the closet door.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Pathway Comparison</div>
                <p>A highway is very wide - many cars can drive side by side. A footpath is narrow - usually only one or two people can walk together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Everyday Objects</div>
                <p>A notebook is wider than a pencil. A desk is wider than a notebook. Which is the widest? The desk!</p>
            </div>
        `,
        taskInstructions: "Identify and compare wide and narrow objects around you.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Wide and Narrow</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom or home. Find and list:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 3 WIDE objects: _________________</div>
                        <div>• 3 NARROW objects: _________________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparison Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete these comparison sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A door is _______ than a window.</div>
                        <div>A pencil is _______ than a book.</div>
                        <div>A hallway is _______ than a closet.</div>
                        <div>A straw is _______ than a cup.</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Order by Width</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Put these objects in order from NARROWEST to WIDEST:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Objects: pencil, desk, notebook, door, crayon</div>
                        <div>Narrowest → ___________________________ → Widest</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a wide object and a narrow object. Label them "wide" and "narrow":
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Walk through your home. Find the widest doorway and the narrowest doorway. Ask a family member to help you measure which is wider using your hand spans.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Measuring Objects - Comparing Widths",
        lessonContent: `
            <p>Today we'll practice measuring and comparing the widths of objects using small pencils as our measuring tool!</p>
            <p><strong>Key Question:</strong> How can we measure how wide something is?</p>
            <p><strong>Introduction:</strong> Yesterday we learned about wide and narrow. Today we'll measure exactly HOW wide things are by laying small pencils across them.</p>
            <p><strong>Measuring Width:</strong></p>
            <ul>
                <li>Width is measured from one side to the other (left to right)</li>
                <li>We can use objects as measuring tools (called non-standard units)</li>
                <li>Today our measuring tool is a small pencil</li>
            </ul>
            <p><strong>How to Measure Width with Pencils:</strong></p>
            <ol>
                <li>Place the object flat on a table</li>
                <li>Lay pencils side by side across the object from left edge to right edge</li>
                <li>Count how many pencils fit across the width</li>
                <li>If a pencil doesn't fit exactly, estimate (about half, about a quarter)</li>
            </ol>
            <p><strong>Remember:</strong> Always measure from the widest part, from edge to edge in a straight line!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Measuring a Book</div>
                <p>A small notebook might be 2 pencils wide. A large textbook might be 4 pencils wide. The textbook is wider because it takes more pencils!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-desktop"></i> Measuring a Desk</div>
                <p>A student desk might be 6 pencils wide. A teacher's desk might be 10 pencils wide. How many pencils wide is YOUR desk?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Estimation First</div>
                <p>Before you measure, make a guess! "I think my math book is about 3 pencils wide." Then measure to see if you were right.</p>
            </div>
        `,
        taskInstructions: "Measure and compare the widths of books, desks, and other classroom objects using small pencils.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Measure Your Belongings</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use small pencils to measure the width of these items. Record your answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• My notebook: ______ pencils wide</div>
                        <div>• My textbook: ______ pencils wide</div>
                        <div>• My desk: ______ pencils wide</div>
                        <div>• My pencil case: ______ pencils wide</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparison Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which is wider - your notebook or your textbook? By how many pencils?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which object you measured was the WIDEST?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which object you measured was the NARROWEST?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Measurements</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Choose one object you measured. Draw it and show how many pencils fit across its width:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Partner Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Trade measurements with a partner. Whose notebook is wider? Whose desk is wider?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home. Measure their width using pencils. Write down each object and how many pencils wide it is. Which is the widest?",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Non-Standard Units - Measuring with Erasers and Bottle Caps",
        lessonContent: `
            <p>Today we'll explore different non-standard units for measuring width - using erasers and bottle caps!</p>
            <p><strong>Key Question:</strong> Can we measure the same object using different tools?</p>
            <p><strong>Introduction:</strong> A measuring tool doesn't have to be a ruler! We can use any small object that is the same size each time. Today we'll use erasers and bottle caps.</p>
            <p><strong>What are Non-Standard Units?</strong></p>
            <ul>
                <li>Non-standard units are objects we use to measure that are not official (like centimeters or inches)</li>
                <li>Examples: pencils, erasers, paper clips, bottle caps, hand spans, footsteps</li>
                <li>Non-standard units help us compare sizes before we learn standard measurement</li>
            </ul>
            <p><strong>Today's Activity:</strong> Measure the width of a folder using:</p>
            <ol>
                <li>Erasers (lined up side by side)</li>
                <li>Bottle caps (lined up side by side)</li>
            </ol>
            <p><strong>Question to Think About:</strong> Will you get the same number with erasers as with bottle caps? Why or why not?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Why Different Numbers?</div>
                <p>If a folder is 10 erasers wide but only 6 bottle caps wide, that's because bottle caps are larger than erasers! The bigger the measuring tool, the fewer you need.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard"></i> Measuring a Folder</div>
                <p>A folder's width is measured from the left edge to the right edge. Place your erasers or bottle caps in a straight line, touching each other, from one edge to the other.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real World Connection</div>
                <p>Before rulers were invented, people used body parts to measure! A "foot" was originally the length of a person's foot. A "hand" was the width of a hand!</p>
            </div>
        `,
        taskInstructions: "Measure a folder's width using two different non-standard units (erasers and bottle caps) and compare your results.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Measure with Erasers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Line up erasers across the width of a folder. How many erasers fit?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture showing your erasers lined up across the folder:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measure with Bottle Caps</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Now line up bottle caps across the same folder. How many bottle caps fit?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture showing your bottle caps lined up across the folder:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Explain</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Did you need more erasers or more bottle caps? Why?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> If you used paper clips instead, would you need more or fewer than erasers? Explain your thinking:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Why is it helpful to use the same measuring tool when comparing two objects?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What did you learn this week about measurement and taking care of the environment?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a small object at home (a comb, a remote control, a phone). Measure its width using two different non-standard units (like paper clips and coins). Write down both measurements and explain why they are different.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleWeek3);
    console.log("grade-middle-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleWeek3);
    console.log("grade-middle-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleWeek3',
        metadata: gradeMiddleWeek3.metadata,
        days: gradeMiddleWeek3
    });
    console.log("grade-middle-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleWeek3 = gradeMiddleWeek3;
console.log("grade-middle-week3.js loaded and registered successfully");