// Grade 3 Creative and Technology Studies - Term 3 Week 10 Data
const grade3CreativeTechWeek10 = {
    metadata: {
        grade: 3,
        subject: "Creative and Technology Studies",
        term: 3,
        week: 10,
        title: "Modeling, Construction, and Poster Design",
        description: "Modeling familiar objects with clay and papier-mâché, then designing letters for public awareness posters"
    },
    
    thursday: {
        subject: "Creative and Technology Studies",
        topic: "Modeling and Construction",
        subtopic: "Modeling Familiar Objects with Clay and Papier-Mâché",
        lessonContent: `
            <p>Welcome to our modeling lesson! Today we'll learn how to create three-dimensional models of familiar objects using clay and papier-mâché.</p>
            <p><strong>Key Question:</strong> How can we turn a lump of clay or paper into a recognizable object?</p>
            <p><strong>Introduction:</strong> Modeling is a fun way to create 3D objects. Artists and crafters use materials like clay and papier-mâché to make bowls, cups, pots, fruits, and many other things!</p>
            <p><strong>What is Clay?</strong></p>
            <ul>
                <li>Clay is soft, squishy earth material that hardens when dried or baked</li>
                <li>You can roll, pinch, coil, and shape it into anything you imagine</li>
                <li>Once your clay object is dry, you can paint it with beautiful colors</li>
            </ul>
            <p><strong>What is Papier-Mâché?</strong></p>
            <ul>
                <li>Papier-mâché means "chewed paper" in French</li>
                <li>It uses strips of newspaper mixed with glue or paste</li>
                <li>You layer the paper strips over a mold or balloon</li>
                <li>When dry, it becomes hard and can be painted or varnished</li>
            </ul>
            <p><strong>Objects We Can Model:</strong></p>
            <ol>
                <li><strong>Cups and Bowls:</strong> Use pinch pot or coil method with clay</li>
                <li><strong>Pots:</strong> Build up the walls using rolled clay coils</li>
                <li><strong>Fruits (apples, oranges, bananas):</strong> Roll clay into ball shapes and add details</li>
                <li><strong>Simple animals or people:</strong> Combine different shapes</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Pinch Pot Method</div>
                <p>Start with a ball of clay. Push your thumb into the middle. Pinch the sides between your thumb and fingers while turning. Soon you have a bowl or cup!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coil"></i> Coil Method</div>
                <p>Roll clay into long snake-like coils. Stack and smooth the coils on top of each other to build a pot's walls. This is how ancient people made pots!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-newspaper"></i> Papier-Mâché Bowl</div>
                <p>Turn a balloon upside down. Cover it with newspaper strips dipped in paste. After 3-4 layers and drying, pop the balloon. Now you have a bowl shape to paint!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Modeling an Apple</div>
                <p>Roll red clay into a ball. Gently pinch a small dent at the top. Add a tiny brown stem and a green leaf. Paint or varnish when dry for a shiny finish!</p>
            </div>
        `,
        taskInstructions: "Create a modeled object using clay or papier-mâché, then finish it with paint or varnish.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose Your Object</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose ONE object to model from this list:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="radio" name="object"> Cup</label><br>
                        <label><input type="radio" name="object"> Bowl</label><br>
                        <label><input type="radio" name="object"> Pot</label><br>
                        <label><input type="radio" name="object"> Fruit (apple, orange, banana, or mango)</label><br>
                        <label><input type="radio" name="object"> Other: _________</label>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Model</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using clay OR papier-mâché, create your object:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <p><strong>Clay Steps:</strong></p>
                        <ul>
                            <li>Knead the clay to make it soft</li>
                            <li>Shape using pinch pot, coil, or rolling method</li>
                            <li>Smooth the surface with a little water</li>
                            <li>Let dry completely (may need to wait for next class)</li>
                        </ul>
                        <p><strong>Papier-Mâché Steps:</strong></p>
                        <ul>
                            <li>Mix flour and water to make paste</li>
                            <li>Tear newspaper into strips</li>
                            <li>Dip strips in paste and layer over a mold (balloon, ball, or crumpled paper)</li>
                            <li>Apply 3-4 layers, letting each layer dry slightly</li>
                            <li>Let dry completely overnight</li>
                        </ul>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw a sketch of your planned model here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Finishing Your Model</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Once your model is dry, finish it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Paint your model with bright colors</div>
                        <div>• Let the paint dry completely</div>
                        <div>• Apply varnish for a shiny, protective finish (optional)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most challenging part of modeling your object?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would you do differently next time?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find an object at home (a cup, bowl, or fruit). Look at its shape carefully. Draw it from three different angles (top, side, front).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Creative and Technology Studies",
        topic: "Poster Design",
        subtopic: "Designing Capital and Small Letters for Public Awareness Posters",
        lessonContent: `
            <p>Welcome to our poster design lesson! Today we'll learn how to design beautiful capital and small letters to create posters that teach people important things.</p>
            <p><strong>Key Question:</strong> How can letters and words help make our community safer and better?</p>
            <p><strong>Introduction:</strong> Posters are a powerful way to share messages. When you combine eye-catching letters with important information, you can teach people about human rights, road safety, and protecting our environment!</p>
            <p><strong>Capital Letters (Uppercase):</strong></p>
            <ul>
                <li>Also called "big letters": A, B, C, D ... Z</li>
                <li>Use capital letters for:</li>
                <ul>
                    <li>Starting a sentence</li>
                    <li>The first letter of a name (Zambia, John)</li>
                    <li>Important words in a title or heading</li>
                    <li>SHOUTING or EMPHASIS on a poster</li>
                </ul>
            </ul>
            <p><strong>Small Letters (Lowercase):</strong></p>
            <ul>
                <li>Also called "little letters": a, b, c, d ... z</li>
                <li>Use small letters for most other writing</li>
                <li>They are easier to read in long sentences</li>
            </ul>
            <p><strong>Designing Letters for Posters:</strong></p>
            <ul>
                <li><strong>Bubble Letters:</strong> Round and puffy looking, great for fun posters</li>
                <li><strong>Block Letters:</strong> Straight and strong, good for important safety messages</li>
                <li><strong>Shadow Letters:</strong> Letters with a shadow behind them, they pop off the page</li>
                <li><strong>Rainbow Letters:</strong> Each letter is a different bright color</li>
            </ul>
            <p><strong>Poster Themes We Will Explore:</strong></p>
            <ol>
                <li><strong>Human Rights:</strong> "Every Child Has the Right to Learn" or "All People Are Equal"</li>
                <li><strong>Road Safety:</strong> "Stop, Look, Listen Before Crossing" or "Wear Your Helmet"</li>
                <li><strong>Environmental Protection:</strong> "Keep Our Rivers Clean" or "Plant a Tree Today"</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Human Rights Example</div>
                <p style="font-size: 24px; font-weight: bold; color: #2E7D32;">EVERY CHILD MATTERS</p>
                <p>This poster uses capital letters for emphasis. Add drawings of children of different backgrounds holding hands.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-traffic-light"></i> Road Safety Example</div>
                <p style="font-size: 24px; font-weight: bold; color: #C62828;">LOOK BOTH WAYS</p>
                <p>Use big block letters in red (for danger/stop) with a picture of a zebra crossing.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Environmental Example</div>
                <p style="font-size: 22px; font-weight: bold; color: #1565C0;">Reduce, Reuse, Recycle</p>
                <p>Use green and blue bubble letters with pictures of a clean earth, trees, and recycling bins.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-brush"></i> Letter Design Tip</div>
                <p>Always sketch your letters lightly in pencil first. Then trace with marker or crayon. Use a ruler for straight lines on block letters!</p>
            </div>
        `,
        taskInstructions: "Design capital and small letters to create a public awareness poster on human rights, road safety, or environmental protection.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose Your Theme and Message</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose ONE theme for your poster:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="radio" name="theme"> Human Rights</label><br>
                        <label><input type="radio" name="theme"> Road Safety</label><br>
                        <label><input type="radio" name="theme"> Environmental Protection</label>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write your poster message (keep it short - 3 to 6 words works best):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practice Your Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Practice writing your message in two different letter styles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Style 1 (choose one):</strong> Bubble / Block / Shadow</p>
                        <div class="drawing-area" style="height: 80px; border: 2px dashed #ccc;"></div>
                        <p><strong>Style 2 (choose one):</strong> Bubble / Block / Shadow</p>
                        <div class="drawing-area" style="height: 80px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Design Your Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create your full poster on the space below. Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <ul>
                            <li>A bold title using capital letters (your message)</li>
                            <li>At least ONE sentence using small letters (explaining the message)</li>
                            <li>A drawing or picture that matches your theme</li>
                            <li>Bright, eye-catching colors</li>
                        </ul>
                    </div>
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 130px;">[Draw your poster here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Letter Rules Review</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Rewrite this sentence using correct capital and small letters:<br>
                    <em>"on monday, we will plant trees to help the environment"</em>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why are capital letters useful on posters?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sharing Your Message</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Who do you want to see your poster, and what do you want them to learn or do?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look for posters in your community (at school, on walls, at shops). Write down one poster message you saw and describe the letters (big/small, colors, style).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3CreativeTechWeek10);
    console.log("grade3-creative-tech-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3CreativeTechWeek10);
    console.log("grade3-creative-tech-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3CreativeTechWeek10',
        metadata: grade3CreativeTechWeek10.metadata,
        days: grade3CreativeTechWeek10
    });
    console.log("grade3-creative-tech-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3CreativeTechWeek10 = grade3CreativeTechWeek10;
console.log("grade3-creative-tech-week10.js loaded and registered successfully");