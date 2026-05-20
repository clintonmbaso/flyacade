// Grade 1 Mathematics & Science - Term 3 Week 3 Data
const grade1MathScienceWeek3 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 3,
        week: 3,
        title: "Introduction to Addition",
        description: "Understanding addition through concrete objects, symbols, and real-world concepts of putting together and increase"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Adding Single-Digit Numbers (Sum up to 9) with Concrete Objects",
        lessonContent: `
            <p>Welcome to our addition adventure! Today we'll learn how to add numbers by using real objects we can touch and count.</p>
            <p><strong>Key Question:</strong> What happens when we put two groups of objects together?</p>
            <p><strong>Introduction:</strong> Addition means putting things together to find out how many there are in total. Today we'll use concrete objects like blocks, counters, and toys to add numbers up to 9.</p>
            <p><strong>Vocabulary:</strong></p>
            <ul>
                <li><strong>Add:</strong> To put together</li>
                <li><strong>Total:</strong> How many all together</li>
                <li><strong>Concrete objects:</strong> Real things we can touch and count</li>
            </ul>
            <p><strong>Let's Practice:</strong> When we have 3 blocks and 2 more blocks, we can count them all: 1, 2, 3, 4, 5! That's 5 blocks in total.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Apple Example</div>
                <p>Emma has 2 apples. Mom gives her 3 more apples. Emma puts them together and counts: 1, 2, 3, 4, 5 apples! 2 apples + 3 apples = 5 apples total.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Toy Car Example</div>
                <p>Tom has 4 toy cars. His friend gives him 2 more toy cars. How many cars does Tom have now? Count: 1, 2, 3, 4, 5, 6 cars!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Cookie Example</div>
                <p>Maria has 5 cookies in one hand and 3 cookies in the other hand. When she puts them together, she has 8 cookies!</p>
            </div>
        `,
        taskInstructions: "Use concrete objects to solve addition problems and record your answers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hands-On Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use blocks or counters to solve these problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🔷 2 blocks + 3 blocks = _____ blocks</div>
                        <div>🔷 4 counters + 1 counter = _____ counters</div>
                        <div>🔷 5 bears + 2 bears = _____ bears</div>
                        <div>🔷 3 buttons + 4 buttons = _____ buttons</div>
                        <div>🔷 1 marble + 6 marbles = _____ marbles</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Count</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the objects and count the total:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🐶 2 dogs + 1 dog = _____ dogs</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">⭐ 3 stars + 4 stars = _____ stars</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">🍎 4 apples + 2 apples = _____ apples</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Story Problems with Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use real objects from your desk to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Sam has 6 pencils. He finds 2 more. How many pencils? _____</div>
                        <div>• Lily has 3 red blocks and 4 blue blocks. How many blocks total? _____</div>
                        <div>• There are 2 birds on a tree. 5 more birds join them. How many birds now? _____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 9 small objects at home (buttons, coins, or beans). Practice putting different groups together and counting the total. Show a parent how you add!",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Transitioning from Concrete Objects to Abstract Addition Using the '+' Symbol",
        lessonContent: `
            <p>Today we'll learn a special math symbol that helps us write addition without drawing pictures!</p>
            <p><strong>Key Question:</strong> What is the "+" symbol and what does it mean?</p>
            <p><strong>Introduction:</strong> The plus sign (+) is a symbol that means "add" or "put together." Instead of saying "2 blocks and 3 blocks make 5 blocks," we can write "2 + 3 = 5"</p>
            <p><strong>The Addition Sentence:</strong></p>
            <ul>
                <li><strong>+</strong> means "plus" or "add"</li>
                <li><strong>=</strong> means "equals" or "is the same as"</li>
                <li>2 <strong>+</strong> 3 <strong>=</strong> 5 reads as "two plus three equals five"</li>
            </ul>
            <p><strong>Remember:</strong> The numbers on each side of the equal sign must have the same value!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Symbol Connection</div>
                <p>When we see 4 + 1, we think: "4 objects and 1 more object makes 5 objects total." So 4 + 1 = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Frogs in a Pond</div>
                <p>There are 3 frogs on a lily pad. 2 more frogs jump on. We write: 3 + 2 = 5 frogs. The plus sign means we add them together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-candy-cane"></i> Candy Jar</div>
                <p>Jack has 5 candies. Sarah gives him 4 more. We write: 5 + 4 = 9. Can you say it out loud? "Five plus four equals nine!"</p>
            </div>
        `,
        taskInstructions: "Practice writing addition sentences using the '+' and '=' symbols.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Objects to Symbols</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the pictures. Write the addition sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🍎🍎 + 🍎🍎🍎 = _____ + _____ = _____</div>
                        <div style="margin-top: 10px;">🐟🐟🐟 + 🐟🐟 = _____ + _____ = _____</div>
                        <div style="margin-top: 10px;">⚽⚽⚽⚽ + ⚽ = _____ + _____ = _____</div>
                        <div style="margin-top: 10px;">📘📘 + 📘📘📘📘 = _____ + _____ = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Completing Addition Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 2 + 3 = _____</div>
                        <div>• 4 + 1 = _____</div>
                        <div>• 5 + 2 = _____</div>
                        <div>• 3 + 4 = _____</div>
                        <div>• 1 + 6 = _____</div>
                        <div>• 7 + 2 = _____</div>
                        <div>• 3 + 3 = _____</div>
                        <div>• 2 + 5 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Then Write</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw pictures to match these addition sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3 + 4 = 7</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">2 + 6 = 8</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">5 + 2 = 7</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 addition sentences using the '+' and '=' symbols. Draw pictures to match each sentence. Practice reading them aloud to a family member.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Addition as 'Putting Together'",
        lessonContent: `
            <p>Today we'll learn that addition is all about putting groups together to find the whole amount!</p>
            <p><strong>Key Question:</strong> What does it mean to "put together" two groups?</p>
            <p><strong>Introduction:</strong> When we add, we take two or more groups and combine them into one big group. The total is how many there are altogether.</p>
            <p><strong>Parts and Whole:</strong></p>
            <ul>
                <li><strong>Part 1:</strong> The first group</li>
                <li><strong>Part 2:</strong> The second group</li>
                <li><strong>Whole:</strong> All the parts put together</li>
            </ul>
            <p><strong>Key Vocabulary:</strong> "Put together," "in all," "altogether," "total"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-children"></i> Classroom Example</div>
                <p>There are 4 boys playing and 3 girls playing. If you put them together, how many children are playing? 4 children + 3 children = 7 children in all!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Tank</div>
                <p>In a fish tank, there are 5 goldfish and 2 angelfish. When you put both groups together, there are 7 fish altogether.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balloon"></i> Birthday Party</div>
                <p>Lia has 6 red balloons and 3 blue balloons. Putting them together gives her 9 balloons in total for her birthday party!</p>
            </div>
        `,
        taskInstructions: "Practice addition by putting together different groups and finding the total.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Putting Groups Together</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put together the groups and find the total:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🐱🐱 + 🐱🐱🐱 = _____ cats in all</div>
                        <div style="margin-top: 10px;">🐭🐭🐭 + 🐭🐭 = _____ mice altogether</div>
                        <div style="margin-top: 10px;">🦆🦆🦆🦆 + 🦆🦆🦆 = _____ ducks total</div>
                        <div style="margin-top: 10px;">🐰🐰 + 🐰🐰🐰🐰 = _____ rabbits put together</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Story Problems - Putting Together</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each story and write the addition sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Anna has 3 dolls. Her sister has 2 dolls. How many dolls do they have altogether? _____ + _____ = _____</div>
                        <div style="margin-top: 10px;">• There are 6 birds in one tree and 1 bird in another tree. How many birds in all? _____ + _____ = _____</div>
                        <div style="margin-top: 10px;">• Mom baked 4 cookies. Dad baked 5 cookies. How many cookies in total? _____ + _____ = _____</div>
                        <div style="margin-top: 10px;">• Max has 2 baseballs. His friend has 4 baseballs. How many baseballs put together? _____ + _____ = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Show Putting Together</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw two different groups, then draw them put together:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Group 1: _____   Group 2: _____   Put together: _____</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">Group 1: _____   Group 2: _____   Put together: _____</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that come in groups (like forks and spoons in a drawer). Put two groups together and tell a parent how many you have in all.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Addition as 'An Increase'",
        lessonContent: `
            <p>Today we'll learn that addition means something gets bigger or increases!</p>
            <p><strong>Key Question:</strong> What happens to the number when we add more?</p>
            <p><strong>Introduction:</strong> When we add, the starting number increases. It becomes larger than it was before. If you have 3 toys and get 2 more, you now have more toys than before!</p>
            <p><strong>Understanding Increase:</strong></p>
            <ul>
                <li><strong>Increase:</strong> To become greater or larger</li>
                <li>Addition always makes a number <strong>increase</strong> (become bigger)</li>
                <li>Example: 2 increases to 5 when we add 3 (2 + 3 = 5)</li>
            </ul>
            <p><strong>Compare Before and After:</strong> Before addition you have a small number. After addition, you have a larger number!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Growing Collection</div>
                <p>Leo has 4 stickers. His friend gives him 3 more stickers. Leo's stickers increased from 4 to 7! He has more now than before.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Tree Example</div>
                <p>A tree had 2 apples. After more grew, it had 5 apples. The number of apples increased by 3 (2 + 3 = 5).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Piggy Bank</div>
                <p>Sofia had 3 coins in her piggy bank. She added 6 more coins. Her coins increased to 9! 3 + 6 = 9 (9 is greater than 3).</p>
            </div>
        `,
        taskInstructions: "Identify how numbers increase when we add more items.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Before and After - Did it Increase?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle YES if the number increased. Circle NO if it stayed the same:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 2 → 2 + 3 = 5 &nbsp;&nbsp; YES / NO</div>
                        <div>• 4 → 4 + 1 = 5 &nbsp;&nbsp; YES / NO</div>
                        <div>• 3 → 3 + 0 = 3 &nbsp;&nbsp; YES / NO</div>
                        <div>• 5 → 5 + 2 = 7 &nbsp;&nbsp; YES / NO</div>
                        <div>• 1 → 1 + 7 = 8 &nbsp;&nbsp; YES / NO</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: How Much Did It Increase?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write how much the number increased:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 1 increased to 4 (1 + _____ = 4)</div>
                        <div>• 2 increased to 6 (2 + _____ = 6)</div>
                        <div>• 3 increased to 8 (3 + _____ = 8)</div>
                        <div>• 4 increased to 7 (4 + _____ = 7)</div>
                        <div>• 5 increased to 9 (5 + _____ = 9)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Increase Story Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each problem. Write the number before and after:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Ben had 4 toy cars. He got 3 more for his birthday. Ben now has ____ cars. The number of cars increased from ____ to ____.</div>
                        <div style="margin-top: 10px;">• A flower had 2 butterflies. 4 more butterflies came. Now there are ____ butterflies. The number increased from ____ to ____.</div>
                        <div style="margin-top: 10px;">• Mia had 6 crayons. Her mom gave her 2 more. Mia has ____ crayons now. (Did it increase? _____)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw the Increase</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw the starting group, then draw the group after adding more:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Start with 3 ⭐ &nbsp;&nbsp; Add 4 more ⭐ &nbsp;&nbsp; Total: _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">Start with 5 🍎 &nbsp;&nbsp; Add 2 more 🍎 &nbsp;&nbsp; Total: _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find something at home you can count (like books on a shelf or spoons in the kitchen). Count how many you have. Then add more by finding more around the house. Tell a parent: 'My number increased from ____ to ____ when I added ____ more!'",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek3);
    console.log("grade1-mathscience-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek3);
    console.log("grade1-mathscience-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek3',
        metadata: grade1MathScienceWeek3.metadata,
        days: grade1MathScienceWeek3
    });
    console.log("grade1-mathscience-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek3 = grade1MathScienceWeek3;
console.log("grade1-mathscience-week3.js loaded and registered successfully");