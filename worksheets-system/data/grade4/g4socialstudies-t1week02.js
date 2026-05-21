// Grade 4 Social Studies - Term 1 Week 2 Data
const grade4SocialStudiesWeek2 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 1,
        week: 2,
        title: "Family Structures & Relationships",
        description: "Understanding family members, relationships, and different types of family structures"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "The Family",
        subtopic: "Members of the Family & Relationships",
        lessonContent: `
            <p>Welcome to our exploration of families! Today we'll learn about the different people who make up a family and how they are related to one another.</p>
            <p><strong>Key Question:</strong> Who is in your family, and how are you related to them?</p>
            <p><strong>Introduction:</strong> A family is a group of people who are related to each other by blood, marriage, or adoption. Families care for, support, and love one another.</p>
            <p><strong>Immediate Family Members:</strong></p>
            <ul>
                <li><strong>Father/Mother:</strong> Your parents who gave birth to you or adopted you</li>
                <li><strong>Brother:</strong> A male sibling (shares at least one parent with you)</li>
                <li><strong>Sister:</strong> A female sibling (shares at least one parent with you)</li>
            </ul>
            <p><strong>Extended Family Members:</strong></p>
            <ul>
                <li><strong>Grandparents:</strong> Your parents' parents (grandfather, grandmother)</li>
                <li><strong>Uncle:</strong> Your parent's brother or your aunt's husband</li>
                <li><strong>Aunt:</strong> Your parent's sister or your uncle's wife</li>
                <li><strong>Cousin:</strong> The child of your aunt or uncle</li>
            </ul>
            <p><strong>Family Relationships:</strong> Understanding how family members are connected helps us appreciate our family history and heritage.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> The Family Tree</div>
                <p>A family tree is like a map of your family! It shows how each person is connected. Grandparents are at the top, parents in the middle, and children at the bottom.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Family Bonds</div>
                <p>Your cousins are your first friends in many families! Even though they don't live in your house, they are still part of your extended family.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Who Is Family?</div>
                <p>Family isn't just about blood relations. Some families include step-parents, step-siblings, and adopted children who are loved just as much!</p>
            </div>
        `,
        taskInstructions: "List family members and create a basic family tree.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Family Members</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List your immediate family members:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List your extended family members (grandparents, aunts, uncles, cousins):
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Family Tree Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a basic family tree showing at least 3 generations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="font-size: 12px; color: #666;">Example layout: Grandparents (top) → Parents (middle) → Children/You (bottom)</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Relationship Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Answer these relationship questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Your mother's brother is your ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Your aunt's daughter is your ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Your father's father is your ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• Your sibling who is male is your ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to know your family members and how you are related to them?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a parent or guardian to help you add more names to your family tree. Find out the names of your great-grandparents if possible.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "The Family",
        subtopic: "Types of Families",
        lessonContent: `
            <p>Today we'll learn about the different ways families can be structured. Every family is unique and special!</p>
            <p><strong>Key Question:</strong> What are the different types of family structures?</p>
            <p><strong>Introduction:</strong> Families come in many shapes and sizes. No two families are exactly the same, and all families can be loving and supportive.</p>
            <p><strong>Types of Family Structures:</strong></p>
            <ol>
                <li><strong>Nuclear Family:</strong> Two parents (mother and father) and their children living together in one home</li>
                <li><strong>Extended Family:</strong> A family that includes grandparents, aunts, uncles, and cousins living together or nearby</li>
                <li><strong>Single-Parent Family:</strong> One parent raising one or more children (could be mother or father)</li>
                <li><strong>Child-Headed Family:</strong> A family where older children care for younger siblings without parents present</li>
                <li><strong>Guardian-Headed Family:</strong> Children are raised by guardians (not their biological parents), such as grandparents, other relatives, or foster parents</li>
            </ol>
            <p><strong>Important to Remember:</strong> The structure of a family doesn't determine how much love exists within it. Every family type can be happy and healthy.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Nuclear Family Example</div>
                <p>Maria lives with her mom, dad, and younger brother. They eat dinner together every night and help each other with homework. This is a nuclear family.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-house-user"></i> Extended Family Example</div>
                <p>James lives with his parents, his baby sister, his grandmother, and his two cousins. His aunt and uncle live next door. This is an extended family.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-helping"></i> Guardian-Headed Family Example</div>
                <p>After Sarah's parents moved away for work, her aunt and uncle became her guardians. They take care of her and send her to school. This is a guardian-headed family.</p>
            </div>
        `,
        taskInstructions: "Identify and describe different types of family structures.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Family Types</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each description and write which type of family it describes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Description 1:</strong> "Both parents live with their two children in a small apartment."</div>
                        <div>Family Type: ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Description 2:</strong> "Grandparents, parents, and three generations live under one roof."</div>
                        <div>Family Type: ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Description 3:</strong> "A mother raises her son alone after her husband passed away."</div>
                        <div>Family Type: ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Description 4:</strong> "An older sister cooks, cleans, and takes her younger brother to school because their parents are no longer around."</div>
                        <div>Family Type: ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Description 5:</strong> "A grandmother takes care of her grandchildren after their parents moved to another country for work."</div>
                        <div>Family Type: ___________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How is a nuclear family different from an extended family?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What is the difference between a single-parent family and a guardian-headed family?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Family Type</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of your family. Then write which type of family you have:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to respect different types of families?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member about your own family structure. What type of family do you have? Share one thing you learned about your family history.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek2);
    console.log("grade4-socialstudies-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek2);
    console.log("grade4-socialstudies-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek2',
        metadata: grade4SocialStudiesWeek2.metadata,
        days: grade4SocialStudiesWeek2
    });
    console.log("grade4-socialstudies-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek2 = grade4SocialStudiesWeek2;
console.log("grade4-socialstudies-week2.js loaded and registered successfully");