// Grade Middle Literacy - Term 1 Week 5 Data
const gradeMiddleLiteracyWeek5 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 1,
        week: 5,
        title: "Size Sequencing & Discrimination",
        description: "Developing observation and comparison skills through size sequencing and identifying differences"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Size Sequencing",
        subtopic: "Sequencing Size (Small to Big)",
        lessonContent: `
            <p>Welcome! Today we'll learn how to look at objects and arrange them from the smallest to the largest.</p>
            <p><strong>Key Question:</strong> How can we tell which object is smallest and which is largest?</p>
            <p><strong>Introduction:</strong> Being able to compare sizes helps us organize things in our world. Today we'll practice putting three objects in order from small to big.</p>
            <p><strong>Words We Use When Comparing Sizes:</strong></p>
            <ul>
                <li><strong>Small/Smaller/Smallest:</strong> When something takes up less space</li>
                <li><strong>Big/Bigger/Biggest:</strong> When something takes up more space</li>
                <li><strong>Medium:</strong> In the middle - not small and not big</li>
            </ul>
            <p><strong>Steps to Sequence from Small to Big:</strong></p>
            <ol>
                <li>Look at all three objects carefully</li>
                <li>Find the one that takes up the least space - that's the SMALLEST</li>
                <li>Find the one that takes up the most space - that's the BIGGEST</li>
                <li>The one left in the middle is the MEDIUM</li>
                <li>Arrange them: Smallest → Medium → Biggest</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cup"></i> Cup Sizes</div>
                <p>Imagine three cups: a tiny espresso cup, a regular coffee cup, and a big soup mug. Small to big would be: espresso cup → coffee cup → soup mug.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Animal Sizes</div>
                <p>A mouse, a cat, and an elephant. Small to big: mouse → cat → elephant.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ball"></i> Ball Sizes</div>
                <p>A marble, a tennis ball, and a basketball. Small to big: marble → tennis ball → basketball.</p>
            </div>
        `,
        taskInstructions: "Practice arranging sets of three objects from smallest to largest.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circle the Smallest</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In each row, circle the smallest object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🐭 Mouse &nbsp;&nbsp; 🐘 Elephant &nbsp;&nbsp; 🐱 Cat</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div style="margin-top: 10px;">🍎 Apple &nbsp;&nbsp; 🍉 Watermelon &nbsp;&nbsp; 🍇 Grape</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div style="margin-top: 10px;">📘 Book &nbsp;&nbsp; 📖 Notebook &nbsp;&nbsp; 📄 Paper</div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Arrange</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw three circles: one small, one medium, and one big. Then write "smallest," "medium," and "biggest" under each:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Number the Order</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Number the objects from 1 (smallest) to 3 (biggest):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Pencil &nbsp;&nbsp; ___ Tree &nbsp;&nbsp; ___ Flower</div>
                        <div style="margin-top: 10px;">___ Button &nbsp;&nbsp; ___ Shirt &nbsp;&nbsp; ___ Thread</div>
                        <div style="margin-top: 10px;">___ Bird &nbsp;&nbsp; ___ Egg &nbsp;&nbsp; ___ Nest</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find three objects in your classroom. Write their names from smallest to biggest:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three toys or objects at home. Ask a family member to help you arrange them from smallest to largest. Draw them in order.",
        homeworkDue: "Wednesday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Discrimination",
        subtopic: "Finding the Odd One Out",
        lessonContent: `
            <p>Today we'll practice looking carefully at groups of objects and finding the one that doesn't belong!</p>
            <p><strong>Key Question:</strong> How can you tell which item is different from the others?</p>
            <p><strong>Introduction:</strong> Sometimes things are grouped together because they are the same in some way. But sometimes one item is different. Finding the "odd one out" helps us pay attention to details and think about what makes things similar or different.</p>
            <p><strong>Ways to Find the Odd One Out:</strong></p>
            <ul>
                <li><strong>Size:</strong> One might be bigger or smaller than the others</li>
                <li><strong>Color:</strong> One might be a different color</li>
                <li><strong>Shape:</strong> One might have a different shape</li>
                <li><strong>Category:</strong> One might be a different type of thing (like a fruit among vegetables)</li>
                <li><strong>Number:</strong> One might have more or fewer parts</li>
            </ul>
            <p><strong>Questions to Ask Yourself:</strong></p>
            <ol>
                <li>What do most of these items have in common?</li>
                <li>How is the last item different?</li>
                <li>Does it look different? Does it belong to a different group?</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Fruit Group</div>
                <p>Apple, Banana, Carrot. Which is the odd one out? Carrot is a vegetable - the others are fruits!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shape Group</div>
                <p>Circle, Square, Triangle, Red Square. Which is different? The red square is different because of its color - the others are likely black or uncolored.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ball"></i> Size Group</div>
                <p>Big ball, medium ball, small ball, big balloon. The balloon is different because it's not a ball - even though it's round!</p>
            </div>
        `,
        taskInstructions: "Identify which item does not belong in each group and explain why.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circle the Odd One Out</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the item that does not belong in each group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🍎 Apple &nbsp;&nbsp; 🍌 Banana &nbsp;&nbsp; 🥕 Carrot &nbsp;&nbsp; 🍇 Grape</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div style="margin-top: 10px;">🔴 Red Circle &nbsp;&nbsp; 🔵 Blue Circle &nbsp;&nbsp; 🟢 Green Circle &nbsp;&nbsp; 🔺 Red Triangle</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div style="margin-top: 10px;">🐕 Dog &nbsp;&nbsp; 🐱 Cat &nbsp;&nbsp; 🐦 Bird &nbsp;&nbsp; 🚗 Car</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div style="margin-top: 10px;">👕 Shirt &nbsp;&nbsp; 👖 Pants &nbsp;&nbsp; 🧦 Sock &nbsp;&nbsp; 🍕 Pizza</div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Odd One Out</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw three squares and one circle. Then circle the odd one out:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw three big stars and one small star. Then circle the odd one out:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Explain Your Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> For each group below, write which item is the odd one out AND why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Group A:</strong> Spoon, Fork, Knife, Pencil</div>
                        <div>Odd one out: _________ &nbsp;&nbsp; Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>Group B:</strong> Sun, Moon, Star, Lamp</div>
                        <div>Odd one out: _________ &nbsp;&nbsp; Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>Group C:</strong> Red Flower, Yellow Flower, Blue Flower, Green Leaf</div>
                        <div>Odd one out: _________ &nbsp;&nbsp; Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own group of four items (draw or write their names). Make sure three are similar and one is different. Then ask a friend to find the odd one out!
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>My odd one out is: _________ &nbsp;&nbsp; Because: _________________________________</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find three groups of items (like toys, fruits, or clothes). In each group, identify the odd one out and tell a family member why it doesn't belong.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleLiteracyWeek5);
    console.log("grade-middle-literacy-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleLiteracyWeek5);
    console.log("grade-middle-literacy-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleLiteracyWeek5',
        metadata: gradeMiddleLiteracyWeek5.metadata,
        days: gradeMiddleLiteracyWeek5
    });
    console.log("grade-middle-literacy-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleLiteracyWeek5 = gradeMiddleLiteracyWeek5;
console.log("grade-middle-literacy-week5.js loaded and registered successfully");