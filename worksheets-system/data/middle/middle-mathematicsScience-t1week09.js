// Middle School Mathematics & Science - Term 1 Week 9 Data
const middleMathScienceWeek9 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 1,
        week: 9,
        title: "Operations & Recognizing Money",
        description: "Combining groups, concrete addition and subtraction, and introduction to coins up to K5 value"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Operations",
        subtopic: "Combining Groups to 5 – Putting a group of 2 concrete objects and 1 object together",
        lessonContent: `
            <p>Welcome to our math lesson! Today we'll learn how to combine groups of objects to make a total of 5.</p>
            <p><strong>Key Question:</strong> How many objects do you have when you put 2 objects together with 1 object?</p>
            <p><strong>Introduction:</strong> Combining groups means putting things together to find out how many you have in total. Today we'll practice combining groups of 2 and 1 to make 3, then work our way up to 5!</p>
            <p><strong>Key Concepts:</strong></p>
            <ol>
                <li><strong>Grouping:</strong> Putting objects together</li>
                <li><strong>Total:</strong> The final number when you combine groups</li>
                <li><strong>Counting:</strong> Saying numbers in order to find how many</li>
            </ol>
            <p><strong>Example:</strong> If you have 2 blocks and add 1 more block, you now have 3 blocks total!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Fruit Bowl</div>
                <p>You have 2 apples in a bowl. You add 1 orange. Now you have 3 pieces of fruit total!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Block Tower</div>
                <p>You build a tower with 2 red blocks. Your friend adds 1 blue block. Your tower now has 3 blocks.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Finger Counting</div>
                <p>Hold up 2 fingers on one hand. Add 1 finger from the other hand. Count: 1, 2, 3. You have 3 fingers up!</p>
            </div>
        `,
        taskInstructions: "Use concrete objects to combine groups and count the total.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Combining 2 and 1</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Take 2 blocks. Add 1 more block. How many do you have?
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Total: _____ blocks</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Combining Groups to Make 5</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the table by combining groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">First Group</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Second Group</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">2 objects</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">1 object</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">3 objects</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">2 objects</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">4 objects</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">1 object</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">2 objects</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">3 objects</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Combine</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw 2 circles and 1 triangle. How many shapes total?
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Total: _____ shapes</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw 3 squares and 2 stars. How many shapes total?
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Total: _____ shapes</div>
                </div>
            </div>
        `,
        homework: "Find 5 small objects at home (buttons, beans, or coins). Practice combining different groups (2+1, 3+2, 4+1) and tell a family member how many you have.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Operations",
        subtopic: "Concrete Addition – Grouping items up to a total sum of 5",
        lessonContent: `
            <p>Welcome back! Today we'll practice addition using real objects. Addition means putting groups together to find the total!</p>
            <p><strong>Key Question:</strong> How do we add two groups of objects together?</p>
            <p><strong>Introduction:</strong> Addition is like joining two teams. When you put them together, you count everyone to find the total. Today we'll add numbers that make 5 or less.</p>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Addition:</strong> Putting groups together</li>
                <li><strong>Plus (+):</strong> The symbol that means "add"</li>
                <li><strong>Equals (=):</strong> The symbol that means "is the same as"</li>
                <li><strong>Sum/Total:</strong> The answer after adding</li>
            </ul>
            <p><strong>Number Pairs to 5:</strong></p>
            <ul>
                <li>0 + 5 = 5</li>
                <li>1 + 4 = 5</li>
                <li>2 + 3 = 5</li>
                <li>3 + 2 = 5</li>
                <li>4 + 1 = 5</li>
                <li>5 + 0 = 5</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Pencil Case</div>
                <p>You have 2 pencils. Your friend gives you 3 more pencils. Now you have 5 pencils total! 2 + 3 = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Egg Hunt</div>
                <p>You find 1 egg under a bush. You find 4 eggs near the tree. How many eggs did you find? 1 + 4 = 5 eggs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Toy Cars</div>
                <p>You have 3 toy cars. Your sister has 2 toy cars. If you put them together, you have 5 toy cars. 3 + 2 = 5</p>
            </div>
        `,
        taskInstructions: "Use concrete objects to solve addition problems with sums up to 5.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding with Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use blocks or counters to solve these addition problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2 + 1 = _____</div>
                        <div>b) 3 + 2 = _____</div>
                        <div>c) 1 + 3 = _____</div>
                        <div>d) 4 + 1 = _____</div>
                        <div>e) 2 + 2 = _____</div>
                        <div>f) 0 + 5 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Add</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the objects and write the addition sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Draw 3 stars and 2 hearts. How many in total?</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>_____ + _____ = _____</div>
                        
                        <div style="margin-top: 15px;"><strong>b)</strong> Draw 4 circles and 1 square.</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>_____ + _____ = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these word problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Maria has 2 red balloons. Juan has 2 blue balloons. How many balloons do they have together?</div>
                        <div>_____ + _____ = _____ balloons</div>
                        
                        <div style="margin-top: 15px;"><strong>b)</strong> There are 4 birds on a fence. 1 more bird joins them. How many birds are on the fence now?</div>
                        <div>_____ + _____ = _____ birds</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 small objects. Practice showing different addition facts to 5 (1+4, 2+3, 3+2, 4+1). Draw pictures to show your work.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Operations",
        subtopic: "Concrete Subtraction – Taking 1 item away from a pile of 4 items to check what remains",
        lessonContent: `
            <p>Today we'll learn about subtraction! Subtraction means taking away objects from a group.</p>
            <p><strong>Key Question:</strong> If you have 4 items and you take 1 away, how many are left?</p>
            <p><strong>Introduction:</strong> Subtraction is the opposite of addition. Instead of putting groups together, we take some away and see what remains. Today we'll practice taking 1 away from groups of up to 4.</p>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Subtraction:</strong> Taking away objects from a group</li>
                <li><strong>Minus (−):</strong> The symbol that means "take away"</li>
                <li><strong>Remain/Difference:</strong> What is left after subtracting</li>
            </ul>
            <p><strong>Subtraction Facts with 1:</strong></p>
            <ul>
                <li>1 − 1 = 0</li>
                <li>2 − 1 = 1</li>
                <li>3 − 1 = 2</li>
                <li>4 − 1 = 3</li>
                <li>5 − 1 = 4</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Cookie Time</div>
                <p>You have 4 cookies. You eat 1 cookie. How many cookies are left? 4 − 1 = 3 cookies!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Tank</div>
                <p>There are 3 fish in the tank. 1 fish swims away behind a rock. How many fish can you see? 3 − 1 = 2 fish.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Classroom Chairs</div>
                <p>There are 5 chairs in a row. The teacher moves 1 chair to another table. How many chairs remain? 5 − 1 = 4 chairs.</p>
            </div>
        `,
        taskInstructions: "Use concrete objects to subtract by taking 1 away from piles of up to 4 items.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Take Away 1</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use blocks or counters. Start with the first number, then take 1 away. Write what remains:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Start with 4 blocks. Take 1 away. _____ remain.</div>
                        <div>b) Start with 3 blocks. Take 1 away. _____ remain.</div>
                        <div>c) Start with 2 blocks. Take 1 away. _____ remain.</div>
                        <div>d) Start with 5 blocks. Take 1 away. _____ remain.</div>
                        <div>e) Start with 1 block. Take 1 away. _____ remain.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Subtract</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the starting group, cross out 1, then write how many remain:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Draw 4 apples. Cross out 1. How many left?</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>4 − 1 = _____</div>
                        
                        <div style="margin-top: 15px;"><strong>b)</strong> Draw 3 balls. Cross out 1. How many left?</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>3 − 1 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these subtraction stories:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Ana has 4 stickers. She gives 1 sticker to her friend. How many stickers does Ana have left?</div>
                        <div>_____ − _____ = _____ stickers</div>
                        
                        <div style="margin-top: 15px;"><strong>b)</strong> There are 5 cupcakes on a plate. Mom takes 1 cupcake. How many cupcakes are left on the plate?</div>
                        <div>_____ − _____ = _____ cupcakes</div>
                        
                        <div style="margin-top: 15px;"><strong>c)</strong> Leo has 2 toy cars. He loses 1 car under the couch. How many cars does Leo still have?</div>
                        <div>_____ − _____ = _____ cars</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 4 small objects (beans, coins, or buttons). Practice taking 1 away and counting what remains. Do this 5 times and write your answers.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Operations",
        subtopic: "Subtraction Practice – Working with concrete blocks to subtract items up to the difference of 4",
        lessonContent: `
            <p>Today we'll practice more subtraction! We'll take away different amounts, not just 1, from groups up to 4.</p>
            <p><strong>Key Question:</strong> How many remain when you take away 2 from 4? What about taking away 3 from 4?</p>
            <p><strong>Introduction:</strong> Now that we know how to take away 1, we'll practice taking away different numbers. Subtraction helps us find out what is left when we give some away, eat some, or lose some!</p>
            <p><strong>Subtraction Facts (Differences up to 4):</strong></p>
            <ul>
                <li>4 − 1 = 3</li>
                <li>4 − 2 = 2</li>
                <li>4 − 3 = 1</li>
                <li>4 − 4 = 0</li>
                <li>3 − 1 = 2</li>
                <li>3 − 2 = 1</li>
                <li>3 − 3 = 0</li>
                <li>5 − 2 = 3</li>
                <li>5 − 3 = 2</li>
                <li>5 − 4 = 1</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> Birthday Balloons</div>
                <p>You have 4 balloons. 2 balloons float away. How many balloons do you have left? 4 − 2 = 2 balloons!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Party</div>
                <p>There are 5 slices of pizza. Your family eats 3 slices. How many slices are left? 5 − 3 = 2 slices.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Library Books</div>
                <p>You check out 4 books from the library. You return 2 books. How many books do you still have? 4 − 2 = 2 books.</p>
            </div>
        `,
        taskInstructions: "Use concrete blocks to practice subtraction with differences up to 4.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Subtraction Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use blocks to solve these subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4 − 1 = _____</div>
                        <div>b) 4 − 2 = _____</div>
                        <div>c) 4 − 3 = _____</div>
                        <div>d) 3 − 1 = _____</div>
                        <div>e) 3 − 2 = _____</div>
                        <div>f) 5 − 2 = _____</div>
                        <div>g) 5 − 3 = _____</div>
                        <div>h) 5 − 4 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Subtract</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the starting group, cross out the number to subtract, then write the answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Draw 4 stars. Cross out 2. How many left?</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>4 − 2 = _____</div>
                        
                        <div style="margin-top: 15px;"><strong>b)</strong> Draw 5 circles. Cross out 3. How many left?</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>5 − 3 = _____</div>
                        
                        <div style="margin-top: 15px;"><strong>c)</strong> Draw 3 squares. Cross out 1. How many left?</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>3 − 1 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these subtraction word problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a)</strong> Rosa has 5 crayons. She gives 2 crayons to her little brother. How many crayons does Rosa have left?</div>
                        <div>_____ − _____ = _____ crayons</div>
                        
                        <div style="margin-top: 15px;"><strong>b)</strong> There are 4 cookies on a plate. Dad eats 3 cookies. How many cookies are left?</div>
                        <div>_____ − _____ = _____ cookies</div>
                        
                        <div style="margin-top: 15px;"><strong>c)</strong> Miguel has 3 toy dinosaurs. He loses 2 dinosaurs on the playground. How many dinosaurs does Miguel still have?</div>
                        <div>_____ − _____ = _____ dinosaurs</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice subtraction facts with a family member. Use 5 small objects and practice taking away 1, 2, 3, and 4 objects.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Money Recognition",
        subtopic: "Introduction to Coins – Looking at and touching local coins up to the value of K5",
        lessonContent: `
            <p>Today we'll learn about money! We'll look at and touch real coins and learn their values.</p>
            <p><strong>Key Question:</strong> What do different coins look like, and how much are they worth?</p>
            <p><strong>Introduction:</strong> Money helps us buy things we need and want. Coins are a type of money made of metal. Today we'll explore local coins worth up to K5 (Kina 5).</p>
            <p><strong>Coin Values (Local Currency):</strong></p>
            <ul>
                <li><strong>Small coins:</strong> Lower value (like toea coins - 5t, 10t, 20t, 50t)</li>
                <li><strong>Larger coins:</strong> Higher value (K1, K2 coins)</li>
                <li><strong>K5:</strong> May be a coin or note depending on your country</li>
            </ul>
            <p><strong>What to Notice About Coins:</strong></p>
            <ul>
                <li><strong>Size:</strong> Bigger or smaller?</li>
                <li><strong>Color:</strong> Gold, silver, or copper?</li>
                <li><strong>Shape:</strong> Round or have edges?</li>
                <li><strong>Numbers:</strong> The number shows the value</li>
                <li><strong>Pictures:</strong> What images are on the coin?</li>
            </ul>
            <p><strong>Coin Combinations to Make K5:</strong></p>
            <ul>
                <li>5 × K1 coins = K5</li>
                <li>2 × K2 coins + 1 × K1 coin = K5</li>
                <li>1 × K2 coin + 3 × K1 coins = K5</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Coin Detective</div>
                <p>Look closely at a K1 coin. What color is it? What picture is on it? Does it have writing around the edge?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Buying at the Store</div>
                <p>If a pencil costs K2 and you have K5, you can buy the pencil and still have K3 left over!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Saving Coins</div>
                <p>If you save K1 each week, after 5 weeks you will have K5 saved up in your piggy bank!</p>
            </div>
        `,
        taskInstructions: "Observe and identify local coins up to K5 value, then practice counting coin combinations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Coin Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each coin (or picture of coins). Describe what you see:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Coin</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Color</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Picture/Design</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Value</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Coin 1</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Coin 2</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Coin 3</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Coin Values and Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count the value of these coin groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2 × K1 coins = K_____</div>
                        <div>b) 3 × K1 coins = K_____</div>
                        <div>c) 1 × K2 coin + 2 × K1 coins = K_____</div>
                        <div>d) 2 × K2 coins + 1 × K1 coin = K_____</div>
                        <div>e) 5 × K1 coins = K_____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Own Coins</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a coin design of your own. Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A number to show its value</div>
                        <div>• A picture or symbol</div>
                        <div>• The color you would use</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Shopping Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you have K5, which items can you buy?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Pencil: K1 _____ (yes/no)</div>
                        <div>• Eraser: K2 _____ (yes/no)</div>
                        <div>• Notebook: K3 _____ (yes/no)</div>
                        <div>• Crayons: K4 _____ (yes/no)</div>
                        <div>• Pencil case: K5 _____ (yes/no)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> If you buy a K2 eraser with your K5, how much money will you have left?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member to show you different coins at home. Draw 3 different coins and write their values. Practice counting coins up to K5.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleMathScienceWeek9);
    console.log("middle-math-science-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleMathScienceWeek9);
    console.log("middle-math-science-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleMathScienceWeek9',
        metadata: middleMathScienceWeek9.metadata,
        days: middleMathScienceWeek9
    });
    console.log("middle-math-science-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleMathScienceWeek9 = middleMathScienceWeek9;
console.log("middle-math-science-week9.js loaded and registered successfully");