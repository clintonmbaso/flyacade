// Middle Grade Literacy - Term 1 Week 3 Data
const middleGradeLiteracyWeek3 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 1,
        week: 3,
        title: "Attribute Identification & Basic Sorting",
        description: "Identifying attributes of objects and sorting by color, size, and shape to build foundational classification skills"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Attribute Identification",
        subtopic: "Sorting by Color",
        lessonContent: `
            <p>Welcome! Today we'll learn how to identify and sort objects by their color. Sorting helps us organize information and see patterns in the world around us.</p>
            <p><strong>Key Question:</strong> How can we group objects that look the same color?</p>
            <p><strong>Introduction:</strong> Colors are everywhere! Being able to identify and sort by color is an important literacy skill that helps with reading, writing, and organizing information.</p>
            <p><strong>Basic Colors We Will Use:</strong></p>
            <ul>
                <li><strong style="color: #ff0000;">Red</strong> - apples, fire trucks, stop signs</li>
                <li><strong style="color: #0000ff;">Blue</strong> - sky, ocean, blueberries</li>
                <li><strong style="color: #008000;">Green</strong> - grass, leaves, limes</li>
                <li><strong style="color: #ffa500;">Orange</strong> - pumpkins, oranges, tigers</li>
                <li><strong style="color: #ffff00;">Yellow</strong> - sun, bananas, lemons</li>
            </ul>
            <p><strong>Sorting Rules:</strong></p>
            <ol>
                <li>Look carefully at each object</li>
                <li>Decide which color matches best</li>
                <li>Place the object with others of the same color</li>
                <li>Check your work - does everything in each group belong there?</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Classroom Counters</div>
                <p>If you have 10 counting bears - 3 red, 4 blue, 2 green, and 1 yellow - you can sort them into four separate color groups. Count how many in each group!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Color Hunt</div>
                <p>Look around your classroom. Find three objects that are red, three that are blue, and three that are green. Write them down!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Why Sort?</div>
                <p>Scientists, librarians, and even grocery store workers sort things by color every day. It helps us find what we're looking for faster!</p>
            </div>
        `,
        taskInstructions: "Identify colors of classroom objects and sort counters into color groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Color Identification Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Walk around your classroom. Find and write one object for each color:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Red object: _________________</div>
                        <div>• Blue object: _________________</div>
                        <div>• Green object: _________________</div>
                        <div>• Yellow object: _________________</div>
                        <div>• Orange object: _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Counters by Color</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using your set of colored counters, sort them into groups by color:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Red group: _____ counters</div>
                        <div>Blue group: _____ counters</div>
                        <div>Green group: _____ counters</div>
                        <div>Yellow group: _____ counters</div>
                        <div>Orange group: _____ counters</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Color the Groups</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In the box below, draw and color each color group you made:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which color group had the most objects? Which had the least?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How does sorting by color help us organize things at home or school?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home of the same color. Write their names and draw them.",
        homeworkDue: "Wednesday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Attribute Identification",
        subtopic: "Sorting by Size and Shape",
        lessonContent: `
            <p>Today we'll learn how to sort objects by their size and shape. These are important attributes that help us describe and organize the world!</p>
            <p><strong>Key Question:</strong> How can we group things by how big they are or what shape they have?</p>
            <p><strong>Introduction:</strong> Size and shape are everywhere! A button can be round or square. A ball can be big or small. Learning to sort by size and shape helps build observation and categorization skills.</p>
            <p><strong>Sorting by Size:</strong></p>
            <ul>
                <li><strong>Big/Large:</strong> basketball, school bus, elephant</li>
                <li><strong>Small/Little:</strong> marble, pencil, ant</li>
                <li><strong>Medium:</strong> apple, book, shoe</li>
            </ul>
            <p><strong>Sorting by Shape:</strong></p>
            <ul>
                <li><strong>Round/Circle:</strong> ball, clock, coin, plate</li>
                <li><strong>Square:</strong> window, cracker, sticky note, dice</li>
                <li><strong>Rectangle:</strong> door, book, phone, dollar bill</li>
                <li><strong>Triangle:</strong> slice of pizza, yield sign, tent</li>
            </ul>
            <p><strong>Sorting Steps:</strong></p>
            <ol>
                <li>Look at the object - is it big or small?</li>
                <li>Look at the shape - what does it look like?</li>
                <li>Compare with other objects</li>
                <li>Place in the correct group</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ball"></i> Size Comparison</div>
                <p>A marble is small. A basketball is big. A tennis ball is medium. You can sort all three by size even though they are all round!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shape Sort</div>
                <p>A coin, a button, and a wheel are all round/circle shapes. A book, a phone, and a sticky note are all rectangles. Same shape, different sizes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sitemap"></i> Multiple Attributes</div>
                <p>Some objects can be sorted in more than one way! A small square cracker could go in "small" group OR "square" group. Which way would you choose?</p>
            </div>
        `,
        taskInstructions: "Sort classroom objects by size and shape, then complete the sorting activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Size Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom. Find and list objects for each size:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Big object: _________________</div>
                        <div>• Medium object: _________________</div>
                        <div>• Small object: _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shape Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find objects or use shape tiles. Sort them by shape:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Round/Circle group: _________________</div>
                        <div>Square group: _________________</div>
                        <div>Rectangle group: _________________</div>
                        <div>Triangle group: _________________</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw 3 round objects and 3 square objects in the boxes below:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Round Objects</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Square Objects</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge - Sort by Size AND Shape</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at these items: big round ball, small round marble, big square book, small square eraser. How many groups can you make?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What is the difference between sorting by size and sorting by shape? Which is easier for you?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "At home, find 3 round objects and 3 square objects. Draw them. Then circle which are big and which are small.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleGradeLiteracyWeek3);
    console.log("middle-grade-literacy-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleGradeLiteracyWeek3);
    console.log("middle-grade-literacy-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleGradeLiteracyWeek3',
        metadata: middleGradeLiteracyWeek3.metadata,
        days: middleGradeLiteracyWeek3
    });
    console.log("middle-grade-literacy-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleGradeLiteracyWeek3 = middleGradeLiteracyWeek3;
console.log("middle-grade-literacy-week3.js loaded and registered successfully");