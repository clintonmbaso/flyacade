// Grade 3 Mathematics & Science - Term 3 Week 10 Data
const grade3MathsScienceWeek10 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 3,
        week: 10,
        title: "Fractions & Final Assessment",
        description: "Understanding fractions as equal parts of a whole, naming proper fractions, drawing shaded fractions, and adding/subtracting fractions with common denominators"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Fractions",
        subtopic: "Equal and Unequal Parts",
        lessonContent: `
            <p>Welcome to our week on fractions! Today we'll learn about dividing whole objects into parts.</p>
            <p><strong>Key Question:</strong> What does it mean to divide something into equal parts?</p>
            <p><strong>Introduction:</strong> A fraction is a way to show a part of a whole. Before we can understand fractions, we need to know how to divide things into equal parts.</p>
            <p><strong>Equal Parts vs. Unequal Parts:</strong></p>
            <ul>
                <li><strong>Equal Parts:</strong> When a whole object is cut into pieces that are the SAME size and shape</li>
                <li><strong>Unequal Parts:</strong> When a whole object is cut into pieces that are DIFFERENT sizes</li>
            </ul>
            <p><strong>Examples of Equal Parts:</strong></p>
            <ol>
                <li>A pizza cut into 4 equal slices</li>
                <li>A chocolate bar broken into 2 equal halves</li>
                <li>A sandwich cut diagonally into 2 equal triangles</li>
            </ol>
            <p><strong>Examples of Unequal Parts:</strong></p>
            <ol>
                <li>A cookie broken into big and small crumbs</li>
                <li>A piece of paper torn unevenly</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Time!</div>
                <p>If you share a pizza with 3 friends, you need to cut it into 4 EQUAL slices. That way everyone gets the same amount. That's fair!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Sharing a Cookie</div>
                <p>If you break a cookie and give your friend a tiny piece while you keep the big piece, those are UNEQUAL parts. That's not fair sharing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-folder-open"></i> Paper Folding</div>
                <p>When you fold a paper in half and both sides match exactly, you've made 2 EQUAL parts. If you fold it unevenly, you get UNEQUAL parts.</p>
            </div>
        `,
        taskInstructions: "Identify and create equal and unequal parts of whole objects.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Equal or Unequal?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each picture. Write "Equal" or "Unequal":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A square cut into 4 small squares of the same size: _________</div>
                        <div>B. A circle cut into one big piece and two tiny pieces: _________</div>
                        <div>C. A rectangle cut into 2 identical triangles: _________</div>
                        <div>D. A chocolate bar broken into 12 equal rectangles: _________</div>
                        <div>E. An orange sliced into wedges of different sizes: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Equal Parts</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines to divide each shape into EQUAL parts:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; border: 2px solid #333; margin: 0 auto;"></div>
                            <span>Divide into 2 equal parts</span>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; border: 2px solid #333; margin: 0 auto;"></div>
                            <span>Divide into 4 equal parts</span>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 80px; height: 80px; border: 2px solid #333; margin: 0 auto; border-radius: 50%;"></div>
                            <span>Divide circle into 2 equal parts</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Your Turn to Create</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a rectangle and divide it into 3 UNEQUAL parts:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a square and divide it into 4 EQUAL parts:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home. Draw each one divided into equal parts. Then draw each one divided into unequal parts.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Fractions",
        subtopic: "Meaning of Fractions Using Models",
        lessonContent: `
            <p>Today we'll learn what fractions mean using different types of models!</p>
            <p><strong>Key Question:</strong> What does a fraction tell us?</p>
            <p><strong>What is a Fraction?</strong></p>
            <p>A fraction represents a part of a whole. The whole can be:</p>
            <ul>
                <li>One object (like a pizza or chocolate bar)</li>
                <li>A group of objects (like a set of 6 apples)</li>
                <li>A length or distance (like a measuring tape)</li>
            </ul>
            <p><strong>Three Types of Fraction Models:</strong></p>
            <ol>
                <li><strong>Area Model:</strong> A shape divided into equal parts (like a pizza or square)</li>
                <li><strong>Set Model:</strong> A group of objects where some are selected (like 3 out of 5 balloons)</li>
                <li><strong>Linear Model:</strong> A number line or length (like a ruler measuring 1/2 meter)</li>
            </ol>
            <p><strong>Reading a Fraction:</strong></p>
            <ul>
                <li>The bottom number (denominator) tells how many equal parts the whole is divided into</li>
                <li>The top number (numerator) tells how many parts you have</li>
                <li>Example: 3/4 means the whole is divided into 4 equal parts, and you have 3 of them</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Area Model Example</div>
                <p>A pizza cut into 8 equal slices. If you eat 3 slices, you ate 3/8 (three-eighths) of the pizza. The pizza is the "area" model!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Set Model Example</div>
                <p>You have a basket of 6 apples. If 2 are red and 4 are green, then 2/6 (two-sixths) of the apples are red. The basket of apples is the "set" model!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Linear Model Example</div>
                <p>A ribbon that is 1 meter long. If you cut it into 4 equal pieces, each piece is 1/4 meter. The ribbon is the "linear" model!</p>
            </div>
        `,
        taskInstructions: "Identify and create fractions using area, set, and linear models.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Model Type</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What type of fraction model is shown? (Area, Set, or Linear):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A chocolate bar broken into squares: _________</div>
                        <div>B. 4 out of 10 marbles are blue: _________</div>
                        <div>C. A number line marked from 0 to 1: _________</div>
                        <div>D. A circle cut into 6 equal slices: _________</div>
                        <div>E. 3 out of 8 students wearing glasses: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Area Model Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and shade each fraction using an AREA model:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <span>1/2</span>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>1/4</span>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>3/4</span>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>2/3</span>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Set Model Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a set of objects to show each fraction:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 2/5 of the stars are yellow: 
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div>B. 3/6 of the circles are shaded: 
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Linear Model Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a number line from 0 to 1. Mark and label 1/2 and 1/4:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find or draw 3 different fraction models: one area, one set, and one linear. Label the fraction shown.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Fractions",
        subtopic: "Naming Parts of Fractions & Proper Fractions",
        lessonContent: `
            <p>Today we'll learn the names of the parts of a fraction and identify proper fractions!</p>
            <p><strong>Key Question:</strong> What are the parts of a fraction called?</p>
            <p><strong>Parts of a Fraction:</strong></p>
            <ul>
                <li><strong>Numerator:</strong> The top number - it tells how many parts we have</li>
                <li><strong>Fraction Bar:</strong> The line between the numbers - it means "out of" or "divided by"</li>
                <li><strong>Denominator:</strong> The bottom number - it tells how many equal parts the whole is divided into</li>
            </ul>
            <p><strong>Proper Fractions:</strong></p>
            <ul>
                <li>A proper fraction has a numerator SMALLER than the denominator</li>
                <li>Proper fractions are ALWAYS less than 1 whole</li>
                <li>Examples: 1/2, 2/3, 3/4, 5/8</li>
            </ul>
            <p><strong>Remember the Rhyme:</strong></p>
            <p>"Numerator on top, denominator down low,<br>
            The fraction bar means 'out of' - now you know!"</p>
            <p><strong>Check if Proper:</strong></p>
            <ul>
                <li>3/4 → 3 is smaller than 4 → PROPER ✓</li>
                <li>2/2 → 2 is NOT smaller than 2 → NOT proper (equal to 1 whole)</li>
                <li>5/3 → 5 is NOT smaller than 3 → NOT proper (greater than 1)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Label the Parts</div>
                <p>In the fraction 3/4:<br>
                <strong>3</strong> is the NUMERATOR (parts you have)<br>
                <strong>4</strong> is the DENOMINATOR (total equal parts)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Proper or Not?</div>
                <p>7/8 is proper because 7 < 8 (you have 7 out of 8 parts - less than a whole)<br>
                8/8 is NOT proper because you have ALL parts (one whole)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-memory"></i> Memory Trick</div>
                <p>"Denominator" sounds like "down" - it's the number DOWN below. "Numerator" sounds like "up" - it's the number UP on top!</p>
            </div>
        `,
        taskInstructions: "Label fraction parts and identify proper fractions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Parts of a Fraction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For the fraction 5/6, label the numerator, denominator, and fraction bar:
                    <div style="text-align: center; margin: 20px 0;">
                        <span style="font-size: 48px;">___</span>
                        <span style="font-size: 48px;">—</span>
                        <span style="font-size: 48px;">___</span>
                    </div>
                    <div style="margin-left: 20px;">
                        <div>Numerator is: _________</div>
                        <div>Denominator is: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the Fraction</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a fraction for each description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 2 out of 5 equal parts: _________</div>
                        <div>B. 7 out of 10 equal parts: _________</div>
                        <div>C. 1 out of 3 equal parts: _________</div>
                        <div>D. 4 out of 8 equal parts: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify Proper Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the proper fractions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>½   ³/₃   ⁴/₆   ⁷/₅   ²/₈   ⁹/₁₀   ⁶/₄   ³/₈</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why is 4/4 NOT a proper fraction?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write three proper fractions of your own:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a picture to show one of your proper fractions:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 proper fractions. For each one, draw a picture to show what it looks like.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Fractions",
        subtopic: "Drawing and Shading Proper Fractions",
        lessonContent: `
            <p>Today we'll practice drawing and shading proper fractions!</p>
            <p><strong>Key Question:</strong> How do we show a fraction by shading?</p>
            <p><strong>Rules for Drawing and Shading Fractions:</strong></p>
            <ol>
                <li>Start with a whole shape (circle, square, rectangle)</li>
                <li>Divide the shape into EQUAL parts (denominator tells how many)</li>
                <li>Shade the number of parts shown by the numerator</li>
                <li>Leave the remaining parts unshaded</li>
            </ol>
            <p><strong>Common Shapes for Fractions:</strong></p>
            <ul>
                <li><strong>Rectangles:</strong> Easy to divide into halves, thirds, fourths, sixths, eighths</li>
                <li><strong>Circles:</strong> Great for showing halves, thirds, fourths, sixths</li>
                <li><strong>Squares:</strong> Perfect for fourths, ninths, sixteenths</li>
            </ul>
            <p><strong>Tips for Dividing Shapes:</strong></p>
            <ul>
                <li>For halves: Draw one line through the middle</li>
                <li>For thirds: Draw two lines evenly spaced</li>
                <li>For fourths: Draw two lines (horizontal and vertical) or three evenly spaced lines</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-bucket"></i> Shading 2/3</div>
                <p>Draw a rectangle. Divide it into 3 equal parts (draw two lines). Shade 2 of the 3 parts. You've shown 2/3!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Shading 3/4</div>
                <p>Draw a circle. Divide it into 4 equal parts (like a pizza with 4 slices). Shade 3 of the 4 slices. That's 3/4!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Shading 5/8</div>
                <p>Draw a rectangle. Divide it into 8 equal parts (draw one line down the middle, then divide each half into 4 parts). Shade 5 of the 8 parts.</p>
            </div>
        `,
        taskInstructions: "Draw and shade proper fractions using various shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shade the Given Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Shade each shape to show the fraction:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <span>1/2</span>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #333; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>1/3</span>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #333; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>2/4</span>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #333; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>3/6</span>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #333; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>4/5</span>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #333; margin-top: 5px;"></div>
                        </div>
                        <div style="text-align: center;">
                            <span>5/8</span>
                            <div class="drawing-area" style="height: 80px; border: 1px solid #333; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the Fraction from the Shaded Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each description, draw and write the fraction:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A circle divided into 4 equal parts with 1 part shaded: 
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                            Fraction: _________
                        </div>
                        <div>B. A rectangle divided into 3 equal parts with 2 parts shaded: 
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                            Fraction: _________
                        </div>
                        <div>C. A square divided into 9 equal parts with 4 parts shaded: 
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                            Fraction: _________
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge - Equivalent Shading</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Shade 1/2 of a rectangle in TWO different ways:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div class="drawing-area" style="height: 80px; border: 1px solid #333;"></div>
                        <div class="drawing-area" style="height: 80px; border: 1px solid #333;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw 5 different shapes. Shade a different proper fraction in each one. Write the fraction under each drawing.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Fractions & Final Assessment",
        subtopic: "Adding/Subtracting Proper Fractions & Final Term 3 Exam",
        lessonContent: `
            <p>Today we'll learn to add and subtract proper fractions with the same denominator, then complete our Final Term 3 Exam!</p>
            <p><strong>Key Question:</strong> How do we add and subtract fractions that have the same bottom number?</p>
            <p><strong>Adding Fractions (Common Denominator):</strong></p>
            <ul>
                <li>When denominators are the SAME, we add ONLY the numerators</li>
                <li>The denominator stays the SAME</li>
                <li>Example: 1/4 + 2/4 = (1+2)/4 = 3/4</li>
            </ul>
            <p><strong>Subtracting Fractions (Common Denominator):</strong></p>
            <ul>
                <li>When denominators are the SAME, we subtract ONLY the numerators</li>
                <li>The denominator stays the SAME</li>
                <li>Example: 3/4 - 1/4 = (3-1)/4 = 2/4 (which simplifies to 1/2)</li>
            </ul>
            <p><strong>Remember:</strong> You can ONLY add or subtract fractions when the denominators are the SAME!</p>
            <p><strong>Final Exam:</strong> After our lesson, we will complete the Term 3 Final Exam covering all topics from this term.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Adding Fractions</div>
                <p>You ate 1/8 of a pizza and your friend ate 3/8 of the pizza. Together you ate 1/8 + 3/8 = 4/8 (or 1/2) of the pizza!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus-circle"></i> Subtracting Fractions</div>
                <p>You had 5/6 of a chocolate bar. You gave 2/6 to your sister. You have 5/6 - 2/6 = 3/6 (or 1/2) left!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Why Same Denominator?</div>
                <p>Think of the denominator as the "type" of piece. You can only add same-sized pieces! You can't add apple slices to orange slices directly.</p>
            </div>
        `,
        taskInstructions: "Practice adding and subtracting fractions, then complete the Final Term 3 Exam.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the following fractions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 1/5 + 2/5 = _________</div>
                        <div>B. 2/7 + 4/7 = _________</div>
                        <div>C. 1/3 + 1/3 = _________</div>
                        <div>D. 3/8 + 2/8 = _________</div>
                        <div>E. 4/10 + 3/10 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Subtracting Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Subtract the following fractions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 3/4 - 1/4 = _________</div>
                        <div>B. 5/6 - 2/6 = _________</div>
                        <div>C. 7/9 - 4/9 = _________</div>
                        <div>D. 4/5 - 2/5 = _________</div>
                        <div>E. 6/8 - 3/8 = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve the following problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Maria ate 2/6 of a cake. Juan ate 3/6 of the same cake. How much cake did they eat in total? 
                            <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                        <div>B. A jug had 7/8 liter of juice. The children drank 4/8 liter. How much juice is left? 
                            <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                        <div>C. Tom walked 2/5 km to school and another 2/5 km to the library. How far did he walk in total? 
                            <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Solve</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture to show 2/8 + 3/8. Write the answer:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box" style="background-color: #fff3cd; border-color: #ffc107;">
                <p><strong>📝 FINAL TERM 3 EXAM</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete the Final Term 3 Exam paper provided by your teacher.
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                    <p><em>Topics covered: Fractions (equal/unequal parts, area/set/linear models, numerator/denominator, proper fractions, shading, addition/subtraction), plus all Term 3 Mathematics & Science topics.</em></p>
                </div>
            </div>
        `,
        homework: "Review all your Term 3 work. Practice adding and subtracting fractions with the same denominator. Get plenty of rest for next term!",
        homeworkDue: "First day of Term 4"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek10);
    console.log("grade3-maths-science-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek10);
    console.log("grade3-maths-science-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek10',
        metadata: grade3MathsScienceWeek10.metadata,
        days: grade3MathsScienceWeek10
    });
    console.log("grade3-maths-science-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek10 = grade3MathsScienceWeek10;
console.log("grade3-maths-science-week10.js loaded and registered successfully");