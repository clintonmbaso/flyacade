// Grade 5 Technology Studies - Term 2 Week 10 Data
const grade5TechWeek10 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 10,
        title: "Digital Image Editing",
        description: "Exploring digital image editing tools and creating illustrations"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Digital Image Editing",
        subtopic: "Introduction to Image Editing Tools",
        lessonContent: `
            <p>Welcome to the world of digital image editing! Today we'll explore the tools that artists and designers use to create and modify images on computers.</p>
            <p><strong>Key Question:</strong> What can we do with digital image editing software?</p>
            <p><strong>Introduction:</strong> Digital image editing programs like Paint, Photoshop, and CorelDRAW allow us to open, modify, and create images on our computers. These tools are used by graphic designers, photographers, and artists everywhere!</p>
            <p><strong>Common Image Editing Programs:</strong></p>
            <ul>
                <li><strong>Microsoft Paint:</strong> A basic program included with Windows, great for beginners</li>
                <li><strong>Adobe Photoshop:</strong> Professional software with advanced editing features</li>
                <li><strong>CorelDRAW:</strong> Popular for vector graphics and illustration design</li>
                <li><strong>GIMP:</strong> A free, open-source alternative to Photoshop</li>
                <li><strong>Canva:</strong> Web-based design tool with easy-to-use features</li>
            </ul>
            <p><strong>Exploring the Toolbar:</strong></p>
            <ol>
                <li><strong>Brushes:</strong> Draw freehand lines and shapes in different sizes and colors</li>
                <li><strong>Shapes:</strong> Add pre-made shapes like rectangles, circles, and triangles</li>
                <li><strong>Select Tools:</strong> Choose specific areas of an image to copy, move, or edit</li>
                <li><strong>Fill Tool (Bucket):</strong> Fill an area with color</li>
                <li><strong>Eraser:</strong> Remove parts of an image</li>
                <li><strong>Text Tool:</strong> Add words to your image</li>
                <li><strong>Color Picker:</strong> Select colors to use in your drawing</li>
            </ol>
            <p><strong>Opening an Image File:</strong></p>
            <ul>
                <li>Click File → Open</li>
                <li>Navigate to your image location</li>
                <li>Select the image file (JPG, PNG, BMP, etc.)</li>
                <li>Click Open to load the image into the program</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paintbrush"></i> Toolbar Detective</div>
                <p>Look at your program's toolbar. Hover your mouse over each button - a small label will appear telling you what that tool does!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-folder-open"></i> Opening an Image</div>
                <p>Find a picture on your computer (like a photo or downloaded image). Practice opening it in your image editing program using File > Open.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer"></i> Select and Explore</div>
                <p>Try the selection tool! Click and drag around part of your image. You can move that part, copy it, or change its color.</p>
            </div>
        `,
        taskInstructions: "Open an image editing program, explore the toolbar, and practice opening a static image file.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Toolbar Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open your image editing program (Paint, Photoshop, or CorelDRAW). Identify and list 5 tools you see in the toolbar:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> For each tool you listed, describe what you think it does:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Opening an Image</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find a static image file on your computer (a photo or picture). Follow these steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• File → Open</div>
                        <div>• Locate and select your image</div>
                        <div>• Click Open</div>
                    </div>
                    <div>What image did you open? Describe it briefly:</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Try the Tools</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Experiment with these tools on your image:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ Brush tool - draw a simple shape</div>
                        <div>✓ Eraser tool - erase part of what you drew</div>
                        <div>✓ Shape tool - add a rectangle or circle</div>
                        <div>✓ Fill tool - fill your shape with a different color</div>
                    </div>
                    <div>What happened when you tried each tool?</div>
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which tool do you think will be most useful for creating digital art? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a digital image at home (a family photo or downloaded picture). Practice opening it in Paint and try using 3 different tools. Write down what you discovered.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Digital Image Editing",
        subtopic: "Editing and Creating Illustrations",
        lessonContent: `
            <p>Today we'll build on our tool exploration by editing images and creating our own original digital illustrations!</p>
            <p><strong>Key Question:</strong> How can we change existing images and create new ones from scratch?</p>
            <p><strong>Basic Image Edits:</strong></p>
            <ol>
                <li><strong>Cropping:</strong> Cutting out unwanted parts of an image
                    <ul>
                        <li>Select the crop tool or selection tool</li>
                        <li>Drag to choose the area you want to keep</li>
                        <li>Confirm the crop (often under Edit or Image menu)</li>
                    </ul>
                </li>
                <li><strong>Color Changes:</strong> Modifying the colors in an image
                    <ul>
                        <li>Use fill tool to change color of selected areas</li>
                        <li>Use brush tool to paint over parts</li>
                        <li>Some programs have color adjustment settings (brightness, contrast, hue)</li>
                    </ul>
                </li>
                <li><strong>Resizing:</strong> Making an image larger or smaller
                    <ul>
                        <li>Image → Resize or Image → Scale</li>
                        <li>Enter new dimensions or percentage</li>
                        <li>Maintain aspect ratio to avoid distortion</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Creating Digital Illustrations:</strong></p>
            <ul>
                <li>Start with a blank canvas (File → New)</li>
                <li>Use shape tools as building blocks for your drawing</li>
                <li>Combine circles, rectangles, and triangles to create objects</li>
                <li>Add details with the brush and line tools</li>
                <li>Use fill tool to add color to different areas</li>
            </ul>
            <p><strong>Tips for Digital Illustration:</strong></p>
            <ul>
                <li>Use layers (if available) to work on different parts separately</li>
                <li>Start with simple shapes before adding details</li>
                <li>Use the undo button (Ctrl+Z) whenever you make a mistake</li>
                <li>Save your work often! (File → Save or Ctrl+S)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-crop-alt"></i> Cropping Example</div>
                <p>You took a photo of your friend, but there's too much empty space around them. Use the crop tool to cut away the extra space and focus on your friend!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Color Change Example</div>
                <p>Your drawing of a tree has a green trunk. Select the trunk area and use the fill tool to change it to brown!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shape Illustration</div>
                <p>Draw a house using shapes! A square for the base, a triangle for the roof, small rectangles for the door and windows. Add a circle for the sun!</p>
            </div>
        `,
        taskInstructions: "Perform basic edits on an image, then create your own original digital illustration using shapes and tools.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Image Edits</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open a static image file. Perform these edits:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Crop:</strong> Choose a section of the image and crop out the rest</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div><strong>Color Change:</strong> Select an area and change its color</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div><strong>Add Something:</strong> Use a brush or shape to add something new to the image</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Original Digital Illustration</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a new blank canvas (File → New). Draw an original illustration using the tools you explored. Your illustration must include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ At least 3 different shapes (circle, square, triangle, rectangle, etc.)</div>
                        <div>✓ At least 3 different colors</div>
                        <div>✓ Use of the brush or line tool for details</div>
                        <div>✓ A title or label (using text tool, if available)</div>
                    </div>
                    <div>Describe what you created:</div>
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Placeholder for student's digital illustration]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Steps to Create Your Illustration</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the steps you followed to create your illustration:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare and Reflect</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How is editing an existing image different from creating a new illustration from scratch?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What was your favorite tool to use today? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Saving Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Save both your edited image and your original illustration:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• File → Save As</div>
                        <div>• Name your files clearly</div>
                        <div>• Choose a format (PNG or JPG)</div>
                        <div>• Save to your folder</div>
                    </div>
                    <div>What filenames did you use?</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Create another digital illustration at home (or on a school computer if available). Draw a scene from your favorite story or a picture of your family. Bring the file to share with the class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechWeek10);
    console.log("grade5-tech-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechWeek10);
    console.log("grade5-tech-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechWeek10',
        metadata: grade5TechWeek10.metadata,
        days: grade5TechWeek10
    });
    console.log("grade5-tech-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechWeek10 = grade5TechWeek10;
console.log("grade5-tech-week10.js loaded and registered successfully");