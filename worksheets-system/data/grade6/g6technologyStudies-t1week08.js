// Grade 6 Technology Studies - Week 8 Data
const grade6TechnologyStudiesWeek8 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        week: 8,
        title: "Collaborative Editing & Version Control",
        description: "Learning to communicate via comments, explore version history, and restore previous document versions"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Communication via Comments",
        subtopic: "Using the 'Comment' feature to give feedback",
        lessonContent: `
            <p>Welcome to our study of collaborative document editing. Today we will learn how to communicate with team members without changing the main text.</p>
            <p><strong>Key Concept:</strong> The "Comment" feature allows you to give feedback, ask questions, or make suggestions directly on a document without editing the actual content. This helps keep the original text intact while still sharing ideas.</p>
            <p><strong>Why Use Comments?</strong></p>
            <ul>
                <li>To suggest improvements without altering someone's work</li>
                <li>To ask clarifying questions about specific parts</li>
                <li>To point out errors like spelling or grammar mistakes</li>
                <li>To have conversations about changes before making them</li>
            </ul>
            <p><strong>How to Leave a Comment:</strong></p>
            <ol>
                <li>Highlight the text you want to comment on</li>
                <li>Right-click and select "Comment" or use the comment icon in the toolbar</li>
                <li>Type your feedback or question in the comment box</li>
                <li>Click "Comment" to post it</li>
            </ol>
            <p><strong>Resolving Comments:</strong> Once a suggestion has been addressed, you can "Resolve" the comment to clean up the document. This doesn't delete the comment but archives it so you can focus on active feedback.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots" style="color: #4A90E2;"></i> Helpful Comment Example</div>
                <p>"Maybe add a picture here to make this section more engaging?" - This suggests an improvement without changing the text.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spell-check"></i> Correction Comment Example</div>
                <p>"Check your spelling in paragraph 2 - 'recieve' should be 'receive'" - This points out an error for the author to fix.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question Comment Example</div>
                <p>"Can you explain what you mean by 'digital collaboration' here?" - This asks for clarification without rewriting.</p>
            </div>
        `,
        taskInstructions: "Open your document from last week and practice giving constructive feedback using comments.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Open your collaborative document from last week's lesson:
                <div class="answer-space" style="height: 30px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Leave at least two helpful comments on your teammates' work:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>A. One suggestion for improvement:</div>
                    <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                    <div>B. One correction or question:</div>
                    <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How is using comments different from directly editing someone's work?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Practice resolving a comment. Describe what happens when you click "Resolve":
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Review the comments on your own document and make at least one improvement based on the feedback received.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Version History Exploration",
        subtopic: "Understanding 'Digital Time Travel' through document history",
        lessonContent: `
            <p>Today we will explore one of the most powerful features of collaborative editing: Version History. Think of it as "digital time travel" for your documents!</p>
            <p><strong>What is Version History?</strong> Version History saves a copy of your document every time changes are made. It creates a timeline showing the evolution of your work.</p>
            <p><strong>Why is Version History Important?</strong></p>
            <ul>
                <li><strong>Safety Net:</strong> If someone accidentally deletes important content, you can restore it</li>
                <li><strong>Collaboration Tracking:</strong> You can see exactly who contributed what</li>
                <li><strong>Progress Review:</strong> Watch how your document improved over time</li>
                <li><strong>Accountability:</strong> Each collaborator's changes are recorded with their name</li>
            </ul>
            <p><strong>How to Access Version History:</strong></p>
            <ol>
                <li>Click "File" in the menu bar</li>
                <li>Select "Version history" then "See version history"</li>
                <li>A panel will open showing all saved versions with timestamps</li>
            </ol>
            <p><strong>Color-Coded Collaboration:</strong> Each collaborator is assigned a different color in the version history. This visual system lets you see exactly who wrote or edited each part of the document.</p>
            <p><strong>Reading the Timeline:</strong> Earlier versions appear at the bottom, with the most recent at the top. You can click any version to view what the document looked like at that time.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-history" style="color: #8B4513;"></i> Version History Example</div>
                <p>A group project shows 15 versions over 3 days. Version 5 has Sarah's introduction, version 8 has Jamal's research, and version 12 has Maria's conclusion added.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-friends"></i> Color-Coding Example</div>
                <p>In your group project: Sarah's edits appear in blue, Jamal's in green, and Maria's in purple. You can instantly see who contributed each section.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-undo"></i> Recovery Example</div>
                <p>If someone accidentally deletes three paragraphs, you can go back to the version from 10 minutes earlier and restore those paragraphs.</p>
            </div>
        `,
        taskInstructions: "Explore the Version History of your collaborative document and analyze the editing timeline.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Version History Navigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open your document and access the Version History panel:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> How many versions does your document have?
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Color Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Identify which color represents each team member:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Team Member 1 (You): <div class="answer-space" style="display: inline-block; width: 100px; height: 20px; vertical-align: middle; margin: 0 10px;"></div></div>
                        <div>Team Member 2: <div class="answer-space" style="display: inline-block; width: 100px; height: 20px; vertical-align: middle; margin: 0 10px;"></div></div>
                        <div>Team Member 3: <div class="answer-space" style="display: inline-block; width: 100px; height: 20px; vertical-align: middle; margin: 0 10px;"></div></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the benefit of color-coding in version history?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Timeline Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Click on the oldest version of your document. Describe one difference from the current version:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Find when the most editing happened. What time and day was it?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create a simple timeline diagram showing three key versions of your document and what changed between them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Revision Tracking and Restoring",
        subtopic: "Restoring previous versions and understanding version control benefits",
        lessonContent: `
            <p>Today we'll practice the most important skill in version control: restoring previous versions. This is your "undo button" for major mistakes!</p>
            <p><strong>The Scenario: "The Great Eraser"</strong> Imagine someone accidentally (or purposely!) deletes an important paragraph. Without version history, this work would be lost forever.</p>
            <p><strong>How Restoration Works:</strong></p>
            <ol>
                <li>Open Version History from the File menu</li>
                <li>Browse through the timeline of saved versions</li>
                <li>Click on a version from before the mistake happened</li>
                <li>Click "Restore this version" to make it the current document</li>
            </ol>
            <p><strong>What Happens When You Restore?</strong> The document returns to exactly how it looked at that moment in time. Any changes made after that version are removed, but they remain in the history if you need them later.</p>
            <p><strong>Version Control vs. Multiple Files:</strong></p>
            <ul>
                <li><strong>Old Method:</strong> Saving multiple files like "Project_Final", "Project_Final_v2", "Project_REALLY_Final"</li>
                <li><strong>Problems:</strong> Confusion about which is latest, wasted storage space, difficulty tracking changes</li>
                <li><strong>Version Control Solution:</strong> One file with automatic history tracking, easy restoration, and clear change records</li>
            </ul>
            <p><strong>Best Practices:</strong></p>
            <ul>
                <li>Check version history regularly during collaborative projects</li>
                <li>Add descriptive comments when making major changes</li>
                <li>Know that version history has your back when mistakes happen</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-life-ring" style="color: #FF6B6B;"></i> Restoration Example</div>
                <p>A student accidentally selects all text and presses delete. Instead of panicking, they restore the version from 5 minutes earlier and recover everything.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-file-export"></i> File Naming Problem</div>
                <p>Before version control: Essay_v1.doc, Essay_v2_final.doc, Essay_v3_revised_final.doc, Essay_REALLY_FINAL.doc - Which one is actually final?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-save"></i> Automatic Saving Benefit</div>
                <p>Version history automatically saves every few minutes and after major changes. You never have to remember to "Save As" with a new name.</p>
            </div>
        `,
        taskInstructions: "Practice restoring a previous version and understand why version control is better than multiple files.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Restoration Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> "The Great Eraser" Activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Delete one paragraph from your document</div>
                        <div>B. Open Version History</div>
                        <div>C. Find and restore the version from before you deleted it</div>
                        <div style="margin-top: 10px;">Describe what happened:</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Version Control Benefits</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three advantages of version history over saving multiple files:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why is automatic saving in version history better than manual "Save As"?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Imagine you're working on a group project for Science class. How could version history help your team?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create a simple flowchart showing the steps to restore a deleted section:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 60px;">Draw your flowchart with at least 4 steps</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Review</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Short Quiz - Answer True or False:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Version history can only be accessed by the document owner ___</div>
                        <div>B. Restoring a version permanently deletes newer versions ___</div>
                        <div>C. Each collaborator gets their own color in version history ___</div>
                        <div>D. You need to manually save versions for them to appear ___</div>
                        <div>E. Comments disappear when you restore a previous version ___</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a real project (current or past) where version history would have helped. Write a paragraph explaining how.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyStudiesWeek8);
    console.log("technology-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyStudiesWeek8);
    console.log("technology-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyStudiesWeek8',
        metadata: grade6TechnologyStudiesWeek8.metadata,
        days: grade6TechnologyStudiesWeek8
    });
    console.log("technology-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyStudiesWeek8 = grade6TechnologyStudiesWeek8;
console.log("technology-week8.js loaded and registered successfully");