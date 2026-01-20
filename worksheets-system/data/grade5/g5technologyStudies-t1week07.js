// Grade 5 Technology Studies - Week 7 Data
const grade5TechnologyStudiesWeek7 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        week: 7,
        title: "Text Basics and Document Formatting",
        description: "Learning word processing skills: font formatting, alignment, and lists"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "The Art of the Sentence (Text Basics)",
        subtopic: "Introduction to word processing and basic font formatting",
        lessonContent: `
            <p>Welcome to our introduction to word processing! Today we will learn how to create and format text to make our documents look professional and meaningful.</p>
            <p><strong>Key Concept:</strong> Word processing software helps us create, edit, and format text documents. Formatting makes our writing clearer and more engaging.</p>
            <p><strong>Opening a New Document:</strong></p>
            <ul>
                <li>Launch your word processing program (like Microsoft Word or Google Docs)</li>
                <li>Click "File" then "New" to create a blank document</li>
                <li>Save your document with a meaningful name</li>
            </ul>
            <p><strong>Basic Font Formatting:</strong></p>
            <ul>
                <li><strong>Font Style:</strong> Changes the look of letters (like Arial, Times New Roman, Calibri)</li>
                <li><strong>Font Size:</strong> Makes text larger or smaller (measured in points)</li>
                <li><strong>Font Color:</strong> Changes the color of your text</li>
                <li><strong>Text Emphasis:</strong> Use <strong>Bold</strong>, <em>Italic</em>, and <u>Underline</u> to highlight important words</li>
            </ul>
            <p><strong>Why Formatting Matters:</strong> Good formatting makes documents easier to read and helps communicate your message more effectively.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #4A90E2;"></i> Font Style Example</div>
                <p>Different font styles create different feelings: <span style="font-family: 'Times New Roman'">Times New Roman looks formal</span> while <span style="font-family: 'Comic Sans MS'">Comic Sans looks playful</span>.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bold"></i> Text Emphasis Example</div>
                <p>Use <strong>Bold</strong> for important titles, <em>Italic</em> for emphasis or foreign words, and <u>Underline</u> for links or special terms.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Color Meaning Example</div>
                <p>Choosing colors that match meaning: <span style="color: blue;">blue</span> for water, <span style="color: red;">red</span> for important warnings, <span style="color: green;">green</span> for nature topics.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice basic text formatting skills.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> List three different font styles you can use in word processing:
                <div class="answer-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> What is the difference between Bold, Italic, and Underline? When would you use each?
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Activity: The Personality Paragraph</strong><br>
                Write five facts about yourself. Format each fact differently to match its meaning:
                <div class="answer-space" style="height: 200px;">
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">
                    Example: "I am <span style="font-size: 16pt;">tall</span>" (large font for tall)<br>
                    "I love the <span style="color: blue;">ocean</span>" (blue color for ocean)<br>
                    "I'm <strong>brave</strong>" (bold for brave)<br>
                    "My name is <em>special</em>" (italic for special)<br>
                    "I <u>remember</u> everything" (underline for remember)
                    </p>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is it important to save your document with a meaningful name?
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Create a short paragraph about your favorite animal. Use at least three different formatting styles (font size, color, bold, italic, or underline) to emphasize different parts.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Organizing Information (Paragraphs & Alignment)",
        subtopic: "Using alignment tools and creating lists to make documents readable",
        lessonContent: `
            <p>Today we will learn how to organize information in our documents to make them professional and easy to read. Good organization helps readers understand your message quickly.</p>
            <p><strong>Key Concept:</strong> Document structure is just as important as the words themselves. Alignment and lists help organize information clearly.</p>
            <p><strong>Text Alignment:</strong></p>
            <ul>
                <li><strong>Left Alignment:</strong> Text lines up on the left side (standard for most documents)</li>
                <li><strong>Center Alignment:</strong> Text is centered (good for titles and headings)</li>
                <li><strong>Right Alignment:</strong> Text lines up on the right side (often used for dates or prices)</li>
                <li><strong>Justified Alignment:</strong> Text spreads evenly between margins (creates clean edges on both sides)</li>
            </ul>
            <p><strong>Creating Lists:</strong></p>
            <ul>
                <li><strong>Bulleted Lists:</strong> Use for items that don't need to be in a specific order</li>
                <li><strong>Numbered Lists:</strong> Use for steps or items that must be in sequence</li>
            </ul>
            <p><strong>Handling Mistakes:</strong></p>
            <ul>
                <li><strong>Undo (Ctrl+Z):</strong> Reverses your last action</li>
                <li><strong>Redo (Ctrl+Y):</strong> Reapplies an action you undid</li>
                <li>These tools let you experiment without worry!</li>
            </ul>
            <p><strong>Professional Documents:</strong> Different documents need different structures. Menus, reports, and letters each have their own formatting rules.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-align-left" style="color: #FF6B6B;"></i> Alignment Example</div>
                <p>Left alignment for paragraphs, center alignment for titles, right alignment for page numbers, and justified alignment for formal reports.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> List Example</div>
                <p>Use bullet points for grocery lists (order doesn't matter) and numbered lists for recipes (steps must be in order).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-undo"></i> Undo/Redo Example</div>
                <p>If you accidentally delete text, press Undo to get it back. If you change your mind, press Redo to delete it again!</p>
            </div>
        `,
        taskInstructions: "Practice organizing information using alignment tools and lists to create professional-looking documents.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Alignment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each alignment type with its best use:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Title of a document ___</div>
                        <div>B. Main paragraph text ___</div>
                        <div>C. Date in a letter ___</div>
                        <div>D. Newspaper column ___</div>
                        <div style="margin-top: 10px;">
                            <em>Alignment Types: 1. Left 2. Center 3. Right 4. Justified</em>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating Lists</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> When should you use a bulleted list versus a numbered list? Give one example of each:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Activity: The Restaurant Menu</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Design a simple menu for an imaginary cafe. Include the following elements:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A centered title for your cafe</div>
                        <div>• At least 5 food items in a bulleted list</div>
                        <div>• Prices right-aligned next to each item</div>
                        <div>• Use at least two different font styles or colors</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #666; padding-top: 100px;">Design your cafe menu here. Make it look professional!</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Recovery</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What keyboard shortcuts would you use for these situations?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. You accidentally deleted a paragraph ___</div>
                        <div>B. You undid something but changed your mind ___</div>
                        <div>C. You want to save your document quickly ___</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a numbered list of steps for making your favorite sandwich. Use different alignments for the title, ingredients list, and instructions.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyStudiesWeek7);
    console.log("technology-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyStudiesWeek7);
    console.log("technology-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyStudiesWeek7',
        metadata: grade5TechnologyStudiesWeek7.metadata,
        days: grade5TechnologyStudiesWeek7
    });
    console.log("technology-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyStudiesWeek7 = grade5TechnologyStudiesWeek7;
console.log("technology-week7.js loaded and registered successfully");