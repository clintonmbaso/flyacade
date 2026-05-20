// Grade 3 Mathematics & Science - Term 1 Week 2
const grade3MathScienceWeek2 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 1,
        week: 2,
        title: "Grouping Things (Sets)",
        description: "Exploring groups of whole numbers, equal vs. not equal groups, equivalent groups, and subsets"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Describing Groups of Whole Numbers",
        lessonContent: `
            <p>Welcome to our exploration of grouping things! Today we'll learn how to describe different groups of whole numbers.</p>
            <p><strong>Key Question:</strong> How can we put numbers into groups that share something in common?</p>
            <p><strong>Introduction:</strong> A <strong>group</strong> (or <strong>set</strong>) is a collection of things that belong together. Just like you have a group of friends or a group of toys, numbers can belong to groups too!</p>
            <p><strong>Types of Number Groups:</strong></p>
            <ol>
                <li><strong>Natural Numbers:</strong> The numbers we use for counting (1, 2, 3, 4, 5, ...)</li>
                <li><strong>Even Numbers:</strong> Numbers that can be divided by 2 (2, 4, 6, 8, 10, ...)</li>
                <li><strong>Odd Numbers:</strong> Numbers that cannot be divided by 2 (1, 3, 5, 7, 9, ...)</li>
            </ol>
            <p><strong>Quick Check:</strong></p>
            <ul>
                <li>Is 6 even or odd? (Even - it can be divided by 2!)</li>
                <li>Is 9 even or odd? (Odd - it leaves 1 left over!)</li>
                <li>What about 0? (Even - it can be divided by 2!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fingerprint"></i> Natural Numbers</div>
                <p>If you count your fingers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — those are natural numbers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> Even Numbers</div>
                <p>Even numbers are like pairs of shoes. 2 shoes (1 pair), 4 shoes (2 pairs), 6 shoes (3 pairs). No shoe left alone!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-friends"></i> Odd Numbers</div>
                <p>Odd numbers are like a group of friends where one person is left out of a pair. 3 friends = 1 pair + 1 alone!</p>
            </div>
        `,
        taskInstructions: "Identify and describe groups of natural, even, and odd numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Natural Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the first 10 natural numbers:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What is the smallest natural number?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Even Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle all the even numbers: 5, 8, 11, 14, 17, 20, 23, 26
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> List five even numbers:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Odd Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle all the odd numbers: 3, 6, 9, 12, 15, 18, 21, 24
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Is 17 even or odd? How do you know?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that come in even numbers (like 2 shoes, 4 chair legs) and 5 things that come in odd numbers (like 3 lamps, 1 front door).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Listing Members & Comparing Groups",
        lessonContent: `
            <p>Today we'll learn how to list the members of a group and compare groups to see if they are equal or not equal!</p>
            <p><strong>Key Question:</strong> How can we tell if two groups are the same size?</p>
            <p><strong>Listing Members of a Group:</strong></p>
            <p>We can list group members using curly brackets { } like this:</p>
            <ul>
                <li>Even numbers less than 10: {2, 4, 6, 8}</li>
                <li>Odd numbers less than 10: {1, 3, 5, 7, 9}</li>
                <li>Days of the week: {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}</li>
            </ul>
            <p><strong>Equal Groups:</strong></p>
            <p>Two groups are <strong>equal</strong> if they have the exact same number of members (the same amount).</p>
            <ul>
                <li>Group A: {1, 2, 3} has 3 members</li>
                <li>Group B: {4, 5, 6} has 3 members</li>
                <li>Group A and Group B are EQUAL because they both have 3 members!</li>
            </ul>
            <p><strong>Not Equal Groups:</strong></p>
            <p>Two groups are <strong>not equal</strong> if they have a different number of members.</p>
            <ul>
                <li>Group C: {1, 2} has 2 members</li>
                <li>Group D: {1, 2, 3} has 3 members</li>
                <li>Group C and Group D are NOT EQUAL!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Listing Members</div>
                <p>The group of colors in a rainbow: {red, orange, yellow, green, blue, indigo, violet} — that's 7 members!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Equal Groups</div>
                <p>Group 1: {apple, banana, orange} has 3 fruits.<br>Group 2: {carrot, broccoli, peas} has 3 vegetables.<br>Both groups have 3 members, so they are EQUAL!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-not-equal"></i> Not Equal Groups</div>
                <p>Group A: {dog, cat} has 2 pets.<br>Group B: {dog, cat, bird} has 3 pets.<br>2 is not the same as 3, so they are NOT EQUAL!</p>
            </div>
        `,
        taskInstructions: "List group members and compare whether groups are equal or not equal.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listing Members</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List all the vowels in the alphabet: { , , , , }
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List all the months that start with "J":
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List the even numbers between 10 and 20:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Equal or Not Equal?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Group A: {1, 2, 3} &nbsp;&nbsp; Group B: {4, 5, 6}<br>
                    Are they equal? ___ Why? ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Group C: {cat, dog} &nbsp;&nbsp; Group D: {cat, dog, fish}<br>
                    Are they equal? ___ Why? ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Group E: {2, 4, 6, 8} &nbsp;&nbsp; Group F: {1, 3, 5, 7}<br>
                    Are they equal? ___ Why? ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Create two groups that are EQUAL. List them:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Create two groups that are NOT EQUAL. List them:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 pairs of groups at home (like left shoes vs. right shoes, forks vs. spoons). Write whether each pair is equal or not equal and explain why.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Equivalent Groups",
        lessonContent: `
            <p>Today we'll learn about <strong>equivalent groups</strong> — groups that have the same number of things, even if the things are different!</p>
            <p><strong>Key Question:</strong> How can groups with different objects still be the same?</p>
            <p><strong>What Does "Equivalent" Mean?</strong></p>
            <p>"Equivalent" means having the same value or the same amount. Two groups are equivalent if they have the same number of members, even if the members are completely different!</p>
            <p><strong>Examples of Equivalent Groups:</strong></p>
            <ul>
                <li>3 apples = 3 oranges (both have 3 pieces of fruit)</li>
                <li>4 red blocks = 4 blue blocks (both have 4 blocks)</li>
                <li>2 cookies = 2 crackers (both have 2 snacks)</li>
            </ul>
            <p><strong>Using Concrete Objects:</strong></p>
            <p>We can use real objects to check if groups are equivalent. Just count the objects in each group and compare the numbers!</p>
            <ul>
                <li>Gather 5 pencils. Gather 5 crayons. Are they equivalent? YES — both have 5!</li>
                <li>Gather 7 buttons. Gather 4 coins. Are they equivalent? NO — 7 is not equal to 4!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Block Tower</div>
                <p>If you build a tower with 6 red blocks and your friend builds a tower with 6 blue blocks, your towers are equivalent because they both have 6 blocks!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Snack Time</div>
                <p>You have 4 grapes. Your friend has 4 crackers. You don't have the same snack, but you have the SAME NUMBER of snack pieces. Your groups are equivalent!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tasks"></i> Counting Challenge</div>
                <p>Can you make a group of toys that is equivalent to a group of 5 books? Yes! Just find 5 toys. 5 toys = 5 books → equivalent groups!</p>
            </div>
        `,
        taskInstructions: "Use concrete objects to identify and create equivalent groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Are These Groups Equivalent?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Group 1: 3 pencils &nbsp;&nbsp; Group 2: 3 erasers<br>
                    Equivalent? ___ Why? ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Group 1: 5 red marbles &nbsp;&nbsp; Group 2: 6 blue marbles<br>
                    Equivalent? ___ Why? ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Group 1: 4 crayons &nbsp;&nbsp; Group 2: 4 markers<br>
                    Equivalent? ___ Why? ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Hands-On Activity with Classroom Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find 7 paper clips. Find 7 buttons. Are these groups equivalent? Draw them:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Find 4 crayons. Can you find another group of 4 different objects to make equivalent groups? What did you find?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Equivalent Groups</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a group of 6 stars. Then draw another group of 6 different shapes that is equivalent to the stars:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Explain what makes two groups equivalent:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find two different groups of objects at home that are equivalent (same number). Draw or list them. Then find two groups that are NOT equivalent.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Subgroups (Subsets)",
        lessonContent: `
            <p>Today we'll learn about <strong>subgroups</strong> — smaller groups that are part of a bigger group!</p>
            <p><strong>Key Question:</strong> What happens when one group is completely inside another group?</p>
            <p><strong>What is a Subgroup (Subset)?</strong></p>
            <p>A <strong>subset</strong> is a group where every member is also a member of a larger group. Think of it as a small group that fits completely inside a big group!</p>
            <p><strong>The Subset Symbol "⊂"</strong></p>
            <p>We use the symbol <strong>⊂</strong> to mean "is a subset of" or "is inside of".</p>
            <ul>
                <li>If Group B is inside Group A, we write: B ⊂ A</li>
                <li>We read this as: "B is a subset of A"</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Group of even numbers ⊂ Group of natural numbers (All evens are natural numbers!)</li>
                <li>{Monday, Tuesday} ⊂ {Days of the week} (Monday and Tuesday are days of the week!)</li>
                <li>{2, 4, 6} ⊂ {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} (All these evens are in the bigger group!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Classroom Subsets</div>
                <p>The group of students in your class is a big group. The group of students who wear glasses is a SUBSET of the class (⊂). Every student with glasses is still a student in the class!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Toy Box Example</div>
                <p>Big group: All toys in your toy box = {doll, car, ball, blocks, puzzle}<br>
                Subgroup: {doll, car} ⊂ toys in toy box (Both doll and car are inside the toy box!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Nature Subsets</div>
                <p>Big group: All animals = {dog, cat, bird, fish, frog}<br>
                Subgroup: {dog, cat} ⊂ animals (Dogs and cats ARE animals!)</p>
            </div>
        `,
        taskInstructions: "Identify subgroups (subsets) using the symbol ⊂.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Is This a Subset?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Big Group: {1, 2, 3, 4, 5} &nbsp;&nbsp; Small Group: {1, 2, 3}<br>
                    Is Small Group a subset of Big Group? ___<br>
                    Write it using ⊂: ___ ⊂ ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Big Group: {cat, dog, bird} &nbsp;&nbsp; Small Group: {cat, fish}<br>
                    Is Small Group a subset of Big Group? ___ Why? ___
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Big Group: {red, blue, green, yellow} &nbsp;&nbsp; Small Group: {red, yellow}<br>
                    Write using ⊂: ___ ⊂ ___
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify Subsets</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Big Group: {2, 4, 6, 8, 10} (even numbers up to 10)<br>
                    Which of these are subsets? Circle YES or NO:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• {2, 4} → YES / NO</div>
                        <div>• {2, 3, 4} → YES / NO</div>
                        <div>• {8, 10} → YES / NO</div>
                        <div>• {1, 2, 3} → YES / NO</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Subsets</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a big group of 8 animals. Then create 2 different subgroups (subsets) of that big group:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Write your subgroups using the ⊂ symbol:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quick Check</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> If all members of Group B are also in Group A, what do we call Group B?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a big circle (big group). Inside it, draw 3 smaller circles (subgroups). Label each group with items (like fruits, animals, or toys). Write the subset statement using ⊂.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Assessment: Practical Grouping Activity",
        lessonContent: `
            <p>Today we'll show everything we've learned about groups, subsets, and equivalent groups!</p>
            <p><strong>Key Question:</strong> Can you apply what you've learned about grouping to real objects?</p>
            <p><strong>What We've Learned This Week:</strong></p>
            <ul>
                <li>Natural numbers, even numbers, and odd numbers</li>
                <li>How to list members of a group using { }</li>
                <li>Equal groups (same number of members)</li>
                <li>Equivalent groups (different objects, same number)</li>
                <li>Subgroups (subsets) using the ⊂ symbol</li>
            </ul>
            <p><strong>Today's Assessment:</strong> You will work with real classroom objects to demonstrate your understanding of grouping. You'll sort, compare, and create groups based on what you've learned!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> What to Remember</div>
                <p>• Equal groups have the SAME COUNT of items.<br>
                • Equivalent groups have the SAME NUMBER, even if items are different.<br>
                • Subsets use ⊂ and mean "all members of the small group are in the big group."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Using Real Objects</div>
                <p>You might use blocks, crayons, erasers, paper clips, buttons, or counters. Count carefully and think about how groups are related!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Show Your Work</div>
                <p>Always write groups using { } and use the ⊂ symbol when showing subsets. Draw pictures to help explain your thinking!</p>
            </div>
        `,
        taskInstructions: "Complete the practical grouping assessment using classroom objects.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Natural, Even, and Odd Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these numbers into the correct groups: 3, 8, 15, 22, 7, 10, 5, 14
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Even numbers: { }</div>
                        <div>Odd numbers: { }</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Hands-On Grouping with Classroom Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using objects provided by your teacher:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Create a group of 5 red objects. List them using { }:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) Create a group that is EQUAL to your group of 5 red objects:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) Create a group that is NOT EQUAL to your group of 5 red objects:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Finding Subsets</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using the objects around you:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Big Group (all the objects on your desk): Write 8 items from this group:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) Small Group (subset): Choose 3 items that are all in your big group:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) Write the subset statement using ⊂:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create and Explain</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create your own example of a big group and two different subsets. Draw them:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write the subset statements using ⊂:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the easiest part of grouping this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What was the most challenging?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "No new homework — review your work from this week. Share with a family member what you learned about groups, subsets, and equivalent groups!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek2);
    console.log("grade3-mathscience-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek2);
    console.log("grade3-mathscience-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek2',
        metadata: grade3MathScienceWeek2.metadata,
        days: grade3MathScienceWeek2
    });
    console.log("grade3-mathscience-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek2 = grade3MathScienceWeek2;
console.log("grade3-mathscience-week2.js loaded and registered successfully");