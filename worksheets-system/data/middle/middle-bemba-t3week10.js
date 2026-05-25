// Zambian Language (Icibemba) - Term 3 Week 10 Data
const zambianLanguageIcibembaWeek10 = {
    metadata: {
        grade: "middle",
        subject: "Zambian Language (Icibemba)",
        term: 3,
        week: 10,
        title: "Color Control & Freehand Drawing",
        description: "Practicing coloring inside defined lines and freehand drawing of simple, recognizable everyday objects"
    },
    
    monday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Visual Arts",
        subtopic: "Colouring Shapes and Drawings",
        lessonContent: `
            <p>Mwaiseni mukwai! (Welcome everyone!) Today we will practice coloring inside defined lines and borders of simple drawings.</p>
            <p><strong>Key Question:</strong> How can we color neatly without going outside the lines?</p>
            <p><strong>Introduction:</strong> Coloring within the lines helps develop fine motor skills, hand-eye coordination, and patience. These skills help us become better artists and also improve our handwriting!</p>
            <p><strong>Tips for Neat Coloring:</strong></p>
            <ol>
                <li><strong>Hold your crayon/pencil properly:</strong> Use a comfortable grip, not too tight</li>
                <li><strong>Color in one direction:</strong> Use up-and-down or side-to-side strokes</li>
                <li><strong>Stay inside the lines:</strong> Slow down when you reach the border</li>
                <li><strong>Use pressure evenly:</strong> Press firmly but not too hard</li>
                <li><strong>Fill all white spaces:</strong> Make sure no paper shows through</li>
            </ol>
            <p><strong>Icibemba Vocabulary for Colors (Amabala):</strong></p>
            <ul>
                <li><strong>Ubusa (Red)</strong> - Like a tomato (itamati)</li>
                <li><strong>Ubulu (Blue)</strong> - Like the sky (iwulu)</li>
                <li><strong>Ubuyeya (Yellow)</strong> - Like the sun (akasuba)</li>
                <li><strong>Ubumyuncu (Green)</strong> - Like grass (insoni)</li>
                <li><strong>Ubukafwa (Orange)</strong> - Like an orange (amalasakala)</li>
                <li><strong>Ubufi (Black)</strong> - Like charcoal (amakara)</li>
                <li><strong>Ububende (Brown)</strong> - Like soil (utaka)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Kwata ne Cikonkomeshi (Pencil Grip)</div>
                <p>Hold your pencil like you are holding a small bird - gentle but firm. This gives you better control when coloring near the edges!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Ulinganya (Patience)</div>
                <p>Coloring slowly and carefully is better than rushing. Think of it like walking on a narrow path - slow and steady keeps you on the track!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Ukukabilila (Practice)</div>
                <p>Even professional artists practice coloring within lines. The more you practice, the better your control becomes!</p>
            </div>
        `,
        taskInstructions: "Practice coloring inside the lines of simple shapes and drawings using appropriate colors.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Coloring Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Color each shape using the correct color named below. Stay inside the lines!
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px; text-align: center;">
                        <div>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #333; background: white; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 60px; height: 60px; border: 2px solid #333; border-radius: 50%;"></div>
                            </div>
                            <p><strong>Ubusa (Red)</strong></p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #333; background: white; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 70px; height: 70px; border: 2px solid #333;"></div>
                            </div>
                            <p><strong>Ubulu (Blue)</strong></p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #333; background: white; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 0; height: 0; border-left: 35px solid transparent; border-right: 35px solid transparent; border-bottom: 70px solid #333;"></div>
                            </div>
                            <p><strong>Ubuyeya (Yellow)</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fruit Coloring Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Color the fruits below using the correct colors. Say the Icibemba color name as you color!
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 15px;">
                        <div>
                            <div class="drawing-area" style="height: 120px; border: 2px solid #333; background: white; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 70px; height: 70px; border: 2px solid #333; border-radius: 50%; position: relative;">
                                    <div style="position: absolute; top: -5px; left: 25px; width: 20px; height: 15px; border: 2px solid #333; border-radius: 50%;"></div>
                                </div>
                            </div>
                            <p><strong>Itamati (Tomato) - Ubusa</strong></p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 120px; border: 2px solid #333; background: white; display: flex; align-items: center; justify-content: center;">
                                <div style="width: 70px; height: 70px; border: 2px solid #333; border-radius: 50%; background: transparent;"></div>
                            </div>
                            <p><strong>Amalasakala (Orange) - Ubukafwa</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Animal Coloring</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Color the animal shapes below. Remember to stay inside the lines!
                    <div class="drawing-area" style="height: 130px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at your coloring. Did you stay inside the lines? Circle one:
                    <div style="margin-top: 10px;">
                        <span style="display: inline-block; margin-right: 20px;">✓ Yes, all the time</span>
                        <span style="display: inline-block; margin-right: 20px;">✓ Most of the time</span>
                        <span style="display: inline-block;">✓ I need more practice</span>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which Icibemba color name is your favorite? _________________
                </div>
            </div>
        `,
        homework: "Find a picture in an old magazine or newspaper. Practice coloring inside its lines using your crayons at home.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Visual Arts",
        subtopic: "Drawing Different Objects",
        lessonContent: `
            <p>Mwaiseni mukwai! (Welcome everyone!) Today we will practice freehand drawing of simple, highly recognizable everyday items.</p>
            <p><strong>Key Question:</strong> How can we draw everyday objects so others can recognize them easily?</p>
            <p><strong>Introduction:</strong> Freehand drawing means drawing without tracing or using rulers. It helps us observe carefully and train our hands to draw what our eyes see. Today we will draw fruits like banana (inkanashi) and orange (amalasakala).</p>
            <p><strong>Steps for Drawing a Banana (Inkanashi):</strong></p>
            <ol>
                <li>Draw a curved line like a smile (this is the top curve)</li>
                <li>Draw another curved line below it, following the same curve (this is the bottom)</li>
                <li>Connect the ends with small curved lines</li>
                <li>Add a small stem at the top</li>
                <li>Add a tiny dark spot at the bottom (the flower remnant)</li>
            </ol>
            <p><strong>Steps for Drawing an Orange (Amalasakala):</strong></p>
            <ol>
                <li>Draw a circle (don't worry if it's not perfect!)</li>
                <li>Add a small curved stem at the top</li>
                <li>Add a small leaf if you like</li>
                <li>Draw small dots on the surface for texture</li>
            </ol>
            <p><strong>Freehand Drawing Tips:</strong></p>
            <ul>
                <li>Draw lightly first, then go over it darker</li>
                <li>Look at the object more than your paper</li>
                <li>Don't worry about perfect shapes - practice makes progress!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-banana"></i> Inkanashi (Banana)</div>
                <p>A banana is curved like a crescent moon. Draw it in two simple curved lines that meet at the ends. Add a small brown stem at the top!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Amalasakala (Orange)</div>
                <p>An orange is round like a ball. Practice drawing circles by moving your whole arm, not just your wrist. Add tiny dots for the orange peel texture!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Ukulolesha (Observation)</div>
                <p>The secret to good drawing is looking closely. Notice the curves, shadows, and details. Your eyes are more important than your pencil!</p>
            </div>
        `,
        taskInstructions: "Practice freehand drawing of simple everyday objects like bananas and oranges.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing a Banana (Inkanashi)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow the steps to draw a banana freehand:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a second banana next to your first one. Try making it slightly different (bigger, smaller, or more curved):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing an Orange (Amalasakala)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw an orange freehand. Remember to add the stem and small dots for texture:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a group of two or three oranges together:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw More Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Choose ONE of these objects to draw freehand:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Mango (Mango)</div>
                        <div>• Fish (Isabi)</div>
                        <div>• Cup (Kikombe)</div>
                        <div>• Tree (Umuti)</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Gallery Walk & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Look at your drawings. What did you draw well? What would you improve next time?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Say these Icibemba words out loud:
                    <div style="margin-top: 10px; font-style: italic;">
                        "Nalemba inkanashi" (I draw a banana)<br>
                        "Nalemba amalasakala" (I draw an orange)
                    </div>
                </div>
            </div>
        `,
        homework: "Practice drawing three different fruits or objects at home. Show your family and ask them to guess what you drew. Bring your best drawing to share with the class.",
        homeworkDue: "Wednesday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(zambianLanguageIcibembaWeek10);
    console.log("zambian-language-icibemba-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(zambianLanguageIcibembaWeek10);
    console.log("zambian-language-icibemba-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'zambianLanguageIcibembaWeek10',
        metadata: zambianLanguageIcibembaWeek10.metadata,
        days: zambianLanguageIcibembaWeek10
    });
    console.log("zambian-language-icibemba-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.zambianLanguageIcibembaWeek10 = zambianLanguageIcibembaWeek10;
console.log("zambian-language-icibemba-week10.js loaded and registered successfully");