// Grade 6 Math - Week 2 Data
const grade6MathWeek2 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 1,
        week: 2,
        title: "Introduction to Sets and Subsets",
        description: "Understanding the concept of subsets, empty sets, and discovering patterns in set theory through hands-on activities"
    },
    
    monday: {
        subject: "Math",
        topic: "Introduction to Sets and Subsets",
        subtopic: "Understanding the Concept of Subsets",
        lessonContent: `
            <p>Welcome to our exploration of sets and subsets! This week we will learn about how groups can contain smaller groups within them.</p>
            <p><strong>Key Concept:</strong> A subset is a part of a larger group where every item in the smaller group also belongs to the larger one.</p>
            <p><strong>Real-World Examples:</strong></p>
            <ul>
                <li>If our whole class is a "set," then students wearing glasses form a "subset"</li>
                <li>If a fruit basket contains apples, bananas, and oranges, just the apples are a subset</li>
                <li>All the red cars in a parking lot are a subset of all the cars</li>
            </ul>
            <p><strong>What Makes a Subset?</strong></p>
            <ul>
                <li>Every member of the subset must be in the original set</li>
                <li>The subset can be smaller than the original set</li>
                <li>A subset can even be empty (we'll learn more about this tomorrow)</li>
                <li>The original set itself is also considered a subset</li>
            </ul>
            <p><strong>Notation:</strong> We use the symbol ⊆ to show that one set is a subset of another. For example, if Set A = {1, 2, 3} and Set B = {1, 2}, we write B ⊆ A.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Classroom Example</div>
                <p>Our class has 25 students. The group of students born in summer is a subset. The group of students who love math is another subset.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-basket"></i> Shopping Basket</div>
                <p>If your shopping basket contains milk, bread, eggs, and cheese, then just the dairy items (milk and cheese) form a subset.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Remember This!</div>
                <p>A subset is like a "mini-version" of the original set. It can't contain anything that wasn't in the original!</p>
            </div>
        `,
        taskInstructions: "Practice identifying subsets by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> If Set A = {dog, cat, bird, fish}, which of these are subsets of A?
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) {dog, cat}</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b) {lion, tiger}</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c) {bird}</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>d) {fish, dog, cat}</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Create 3 different subsets from your pencil case items. List the original set and your subsets:
                <div class="answer-space" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> In a sports team of 11 players, name 3 possible subsets:
                <div class="answer-space" style="height: 90px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> True or False: The set {5, 10, 15} is a subset of {1, 5, 10, 15, 20}. Explain:
                <div class="answer-space" style="height: 50px;"></div>
            </div>
        `,
        homework: "Find 3 examples of subsets in your home. Describe the original set and the subset.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Introduction to Sets and Subsets",
        subtopic: "The Mystery of the Empty Set",
        lessonContent: `
            <p>Today we explore a special type of subset: the empty set! This might seem strange at first, but it's a very important mathematical concept.</p>
            <p><strong>What is an Empty Set?</strong></p>
            <ul>
                <li>An empty set contains NO elements</li>
                <li>It's represented by {} or Ø</li>
                <li>It's like an empty box or bag</li>
                <li>It has zero members</li>
            </ul>
            <p><strong>Brainstorming Activity:</strong> Imagine you have a bag of marbles. If you take NONE of them out, what do you have? An empty selection! This empty selection is mathematically valid.</p>
            <p><strong>Key Discovery:</strong> The empty set is a subset of EVERY set!</p>
            <p><strong>Why is this true?</strong> Remember our definition: A subset contains only elements from the original set. Since the empty set has NO elements, it can't possibly contain anything that isn't in the original set. Therefore, it always qualifies!</p>
            <p><strong>Analogy:</strong> Think of it this way - if I ask you to bring me some apples from a basket, and you bring me none, you haven't broken any rules. You just brought zero apples.</p>
            <p><strong>Mathematical Notation:</strong> {} ⊆ Any Set</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Empty Box Analogy</div>
                <p>An empty box can be placed inside any container. Similarly, an empty set can be a "part" of any larger set.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Listing Subsets</div>
                <p>When listing all subsets of {red, blue}, we always start with: 1. {} (empty), 2. {red}, 3. {blue}, 4. {red, blue}</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Common Question</div>
                <p>"How can nothing be something?" Think of zero - it represents nothing, but it's still an important number!</p>
            </div>
        `,
        taskInstructions: "Practice working with empty sets by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Empty Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Why is the empty set considered a subset of every set? Explain in your own words:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List ALL subsets of the set {circle, square}:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Applications</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Give 2 real-life examples of empty sets:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Pizza Shop Scenario: A customer orders a plain cheese pizza (no toppings). How does this relate to the empty set concept?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False with Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> {} ⊆ {apple, banana, orange}
                    <div style="margin-left: 20px; margin-top: 5px;">Your answer and explanation:</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> { } has 1 element
                    <div style="margin-left: 20px; margin-top: 5px;">Your answer and explanation:</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 situations in daily life where 'nothing' or 'zero' is an important concept.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Introduction to Sets and Subsets",
        subtopic: "Finding Subsets (Sets of 2 and 3)",
        lessonContent: `
            <p>Today we'll learn how to find ALL possible subsets of small sets. This is like discovering all the different ways we can group items!</p>
            <p><strong>Hands-on Activity:</strong> Let's work with a set of 3 items: Pencil, Eraser, and Ruler.</p>
            <p><strong>Step-by-Step Method:</strong></p>
            <ol>
                <li><strong>Start with the empty set:</strong> {}</li>
                <li><strong>List all subsets with 1 item:</strong>
                    <ul>
                        <li>{Pencil}</li>
                        <li>{Eraser}</li>
                        <li>{Ruler}</li>
                    </ul>
                </li>
                <li><strong>List all subsets with 2 items:</strong>
                    <ul>
                        <li>{Pencil, Eraser}</li>
                        <li>{Pencil, Ruler}</li>
                        <li>{Eraser, Ruler}</li>
                    </ul>
                </li>
                <li><strong>Don't forget the original set itself:</strong> {Pencil, Eraser, Ruler}</li>
            </ol>
            <p><strong>Total Count:</strong> For a 3-item set, we have 8 subsets total.</p>
            <p><strong>Systematic Approach:</strong> To make sure you don't miss any subsets, follow this pattern:</p>
            <ul>
                <li>Start with smallest (empty)</li>
                <li>Move to single items</li>
                <li>Then pairs</li>
                <li>Finally the whole set</li>
            </ul>
            <p><strong>Check Your Work:</strong> Count your subsets! For n items, there should be 2^n subsets (we'll explore this pattern tomorrow).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group"></i> Set of 2 Items</div>
                <p>For Set = {A, B}: Subsets are: 1. {}, 2. {A}, 3. {B}, 4. {A, B} (4 total)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th-large"></i> Set of 3 Items</div>
                <p>For Set = {Red, Green, Blue}: There are 8 subsets. Can you list them all?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-check"></i> Organization Tip</div>
                <p>Use a table or list to organize your subsets by size. This helps prevent missing any!</p>
            </div>
        `,
        taskInstructions: "Practice finding all subsets by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding All Subsets</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find ALL subsets of the set {apple, banana}:
                    <div class="answer-space" style="height: 100px;"></div>
                    <div>Total number of subsets: __________</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Find ALL subsets of the set {1, 2, 3}:
                    <div class="answer-space" style="height: 150px;"></div>
                    <div>Total number of subsets: __________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Hands-On Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using 3 different coins (penny, nickel, dime), physically create all possible subsets. Draw or describe what you did:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Maria has a set of 3 stickers: star, heart, and smiley face. She wants to give some (or none) to her friend. How many different combinations can she give?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Check your work: Did you remember to include the empty set and the full set? Yes/No
                    <div style="margin-left: 20px; margin-top: 5px;">If no, which ones did you forget?</div>
                    <div style="margin-left: 20px; height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Choose any 3 items in your room. List ALL possible subsets you could make with them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Introduction to Sets and Subsets",
        subtopic: "Discovering the Pattern (The Power of 2)",
        lessonContent: `
            <p>Today we'll discover a fascinating mathematical pattern! Let's look at how the number of subsets grows as we add more elements to a set.</p>
            <p><strong>Review from Previous Days:</strong></p>
            <ul>
                <li>Set with 0 elements (empty set): 1 subset (just itself)</li>
                <li>Set with 1 element: 2 subsets</li>
                <li>Set with 2 elements: 4 subsets</li>
                <li>Set with 3 elements: 8 subsets</li>
            </ul>
            <p><strong>Do you see the pattern?</strong> Each time we add one element, the number of subsets DOUBLES!</p>
            <p><strong>The Pattern:</strong> Number of subsets = 2<sup>n</sup> where n = number of elements</p>
            <table class="pattern-table" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr>
                    <th style="border: 1px solid #ccc; padding: 8px;">Number of Elements (n)</th>
                    <th style="border: 1px solid #ccc; padding: 8px;">Number of Subsets (2<sup>n</sup>)</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 8px;">0</td>
                    <td style="border: 1px solid #ccc; padding: 8px;">1</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 8px;">1</td>
                    <td style="border: 1px solid #ccc; padding: 8px;">2</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 8px;">2</td>
                    <td style="border: 1px solid #ccc; padding: 8px;">4</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 8px;">3</td>
                    <td style="border: 1px solid #ccc; padding: 8px;">8</td>
                </tr>
            </table>
            <p><strong>Why does this happen?</strong> Each element has 2 choices: be IN the subset or NOT be in the subset. With multiple elements, we multiply the choices.</p>
            <p><strong>Example:</strong> For 3 elements, we have 2 × 2 × 2 = 8 possibilities.</p>
            <p><strong>Challenge:</strong> Can you predict how many subsets a set with 4 elements has? How about 5?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> The Doubling Pattern</div>
                <p>1 → 2 → 4 → 8 → 16 → 32 → 64... Each number is double the previous one!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Quick Calculation</div>
                <p>2<sup>4</sup> = 2 × 2 × 2 × 2 = 16. So a 4-element set has 16 subsets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Realization</div>
                <p>This is why it's called "power of 2" - we're raising 2 to the power of the number of elements!</p>
            </div>
        `,
        taskInstructions: "Practice using the power of 2 pattern to calculate numbers of subsets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Completing the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing numbers in the pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Elements: 0 → 1 → 2 → 3 → 4 → 5 → 6</div>
                        <div>Subsets: 1 → 2 → 4 → 8 → _____ → _____ → _____</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Using the Formula</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Calculate how many subsets each set has:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Set with 4 elements: 2<sup>4</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b) Set with 5 elements: __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c) Set with 6 elements: __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A pizza shop has 5 different toppings available. How many different pizza combinations can customers create? (Remember: plain cheese counts!)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If a set has 64 subsets, how many elements does it have? (Hint: What power of 2 gives 64?)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Explaining the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> In your own words, explain why the number of subsets doubles each time we add an element:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find 2 real-life situations where the 'doubling pattern' occurs (other than subsets).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Introduction to Sets and Subsets",
        subtopic: "Applying Subsets to Real Life",
        lessonContent: `
            <p>Today we'll apply everything we've learned about subsets to solve real-world problems! Math becomes most exciting when we see how it applies to everyday situations.</p>
            <p><strong>Real-World Scenario 1: Pizza Toppings</strong></p>
            <p>A pizza shop has 4 toppings available: Pepperoni, Mushrooms, Onions, and Peppers. How many different pizza combinations can customers create?</p>
            <p><strong>Think about it:</strong> Each topping is like an element in a set. Customers can choose to include or not include each topping. This is exactly our subset problem!</p>
            <p><strong>Solution:</strong> With 4 toppings, we have 2<sup>4</sup> = 16 possible combinations (including plain cheese pizza!).</p>
            
            <p><strong>Real-World Scenario 2: Sports Teams</strong></p>
            <p>A coach has 5 players on the bench and needs to choose some to send onto the field. How many different combinations of players can be chosen?</p>
            <p><strong>Think about it:</strong> Each player is an element. The coach can choose any subset of players (including sending none, or sending all).</p>
            <p><strong>Solution:</strong> With 5 players, we have 2<sup>5</sup> = 32 possible combinations.</p>
            
            <p><strong>Real-World Scenario 3: Menu Combinations</strong></p>
            <p>A restaurant offers 3 side dishes with meals. How many different side dish combinations can customers order?</p>
            <p><strong>Pattern Recognition:</strong> Notice how many different problems follow the same mathematical pattern!</p>
            
            <p><strong>Assessment Challenge:</strong> Can you calculate the number of combinations for sets with up to 6 elements using the doubling method?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Math</div>
                <p>4 toppings = 16 combinations. That's why pizza menus can offer so many options without actually listing them all!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-basketball-ball"></i> Sports Strategy</div>
                <p>A coach with 6 players has 64 different lineup combinations. That's a lot of strategic options!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Restaurant Menu</div>
                <p>With just 5 appetizers, a restaurant technically offers 32 different starter combinations to customers.</p>
            </div>
        `,
        taskInstructions: "Apply your subset knowledge to solve these real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pizza Shop Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Pizza Palace offers these toppings: Pepperoni, Sausage, Peppers, Onions, Olives.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How many different pizza combinations are possible?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b) If they add Pineapple as a 6th topping, how many combinations then?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c) Explain why plain cheese pizza represents the empty set:</div>
                        <div style="margin-left: 20px; height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sports Team Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A basketball coach has 7 players on the bench. The game allows 5 players on court at once.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How many different groups of 5 players could the coach choose?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b) Actually, the coach can choose ANY number of players (0-7). How many total combinations exist?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ice Cream Sundae Bar</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> An ice cream shop has 8 different toppings for sundaes.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Calculate how many different sundae combinations are possible:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b) If they reduce to 6 toppings, how does this change the number?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete this table using the doubling pattern:
                    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                        <tr>
                            <th style="border: 1px solid #ccc; padding: 8px;">Elements</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Subsets</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">2<sup>n</sup></th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">3</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">8</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">2<sup>3</sup></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">4</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">5</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">6</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Creative Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own real-world subset problem (like the pizza or sports examples):
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find a menu or advertisement that shows combinations. Calculate how many total combinations are possible using subset math.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek2);
    console.log("grade6-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek2);
    console.log("grade6-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek2',
        metadata: grade6MathWeek2.metadata,
        days: grade6MathWeek2
    });
    console.log("grade6-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek2 = grade6MathWeek2;
console.log("grade6-math-week2.js loaded and registered successfully");