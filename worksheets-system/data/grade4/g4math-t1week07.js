// Grade 4 Math - Week 7 Data
const grade4MathWeek7 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 1,
        week: 7,
        title: "Understanding and Comparing Fractions",
        description: "Equivalent fractions, ordering, improper fractions, and mixed numbers"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Understanding and Comparing Fractions",
        subtopic: "The Magic of Equivalent Fractions",
        lessonContent: `
            <p>Welcome to our exploration of fractions! This week we will learn how fractions can look different but still have the same value.</p>
            <p><strong>What are Equivalent Fractions?</strong></p>
            <ul>
                <li>Fractions that look different but have the same value</li>
                <li>They represent the same amount of a whole</li>
                <li>Example: 1/2 is the same as 2/4 and 4/8</li>
            </ul>
            <p><strong>Why Do Equivalent Fractions Matter?</strong></p>
            <ul>
                <li>They help us compare fractions easily</li>
                <li>They make adding and subtracting fractions possible</li>
                <li>They help us simplify fractions</li>
                <li>They appear in everyday situations like cooking and measuring</li>
            </ul>
            <p><strong>Finding Equivalent Fractions:</strong></p>
            <ol>
                <li>Multiply both the numerator (top) and denominator (bottom) by the same number</li>
                <li>Divide both the numerator and denominator by the same number</li>
                <li>Use visual models like fraction bars or circles</li>
                <li>Remember: Whatever you do to the top, you must do to the bottom!</li>
            </ol>
            <p><strong>Visualizing Equivalent Fractions:</strong> We can use paper folding, fraction strips, or drawings to see that different fractions can represent the same amount.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #4A90E2;"></i> Equivalent Fractions Example</div>
                <p>1/2 = 2/4 = 4/8. If you fold a paper in half, then fold it in half again, you'll see that 1/2 is the same size as 2/4!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Pizza Model</div>
                <p>Imagine a pizza cut into 4 slices. If you eat 2 slices, you've eaten 2/4. But that's exactly the same as eating 1/2 of the pizza!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Finding Equivalents</div>
                <p>To find fractions equivalent to 1/3, multiply top and bottom by the same number: 1×2/3×2 = 2/6, 1×3/3×3 = 3/9, 1×4/3×4 = 4/12</p>
            </div>
        `,
        taskInstructions: "Practice identifying and creating equivalent fractions by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Shade the diagrams to show equivalent fractions:
                <div style="margin-left: 20px; margin-top: 10px; display: flex; flex-wrap: wrap; gap: 20px;">
                    <div>
                        <div>a. Show 1/2 and 2/4 are equivalent:</div>
                        <div style="display: flex; gap: 10px; margin-top: 5px;">
                            <div style="width: 80px; height: 80px; border: 2px solid #000; position: relative;">
                                <div style="position: absolute; top: 5px; left: 5px; font-size: 0.8em;">1/2</div>
                            </div>
                            <div style="width: 80px; height: 80px; border: 2px solid #000; position: relative;">
                                <div style="position: absolute; top: 5px; left: 5px; font-size: 0.8em;">2/4</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>b. Show 2/3 and 4/6 are equivalent:</div>
                        <div style="display: flex; gap: 10px; margin-top: 5px;">
                            <div style="width: 80px; height: 80px; border: 2px solid #000; position: relative;">
                                <div style="position: absolute; top: 5px; left: 5px; font-size: 0.8em;">2/3</div>
                            </div>
                            <div style="width: 80px; height: 80px; border: 2px solid #000; position: relative;">
                                <div style="position: absolute; top: 5px; left: 5px; font-size: 0.8em;">4/6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Write two equivalent fractions for each:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 1/2 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div> = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>b. 3/4 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div> = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>c. 2/5 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div> = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw three different shapes representing the same fraction (e.g., 1/3, 2/6, 3/9):
                <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc; display: flex; justify-content: space-around; align-items: center; padding: 10px;">
                    <div style="text-align: center;">Shape 1<br><small>Label:</small></div>
                    <div style="text-align: center;">Shape 2<br><small>Label:</small></div>
                    <div style="text-align: center;">Shape 3<br><small>Label:</small></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Explain in your own words what equivalent fractions are:
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find 3 real-life examples of equivalent fractions (like in recipes, measurements, or sharing food). Draw or describe each.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Understanding and Comparing Fractions",
        subtopic: "Ordering Fractions (Ascending and Descending)",
        lessonContent: `
            <p>Today we will learn how to arrange fractions in order from smallest to largest and largest to smallest.</p>
            <p><strong>What Does "Ordering Fractions" Mean?</strong></p>
            <ul>
                <li>Ascending order: From smallest to largest</li>
                <li>Descending order: From largest to smallest</li>
                <li>This helps us compare quantities and make decisions</li>
            </ul>
            <p><strong>Strategies for Ordering Fractions:</strong></p>
            <p><strong>1. Same Denominator (Easy Case):</strong></p>
            <ul>
                <li>If denominators are the same, compare numerators</li>
                <li>Example: 1/10, 4/10, 7/10, 9/10 → 1/10 is smallest, 9/10 is largest</li>
            </ul>
            <p><strong>2. Same Numerator (Unit Fractions):</strong></p>
            <ul>
                <li>If numerators are the same (usually 1), compare denominators</li>
                <li>Smaller denominator = larger fraction</li>
                <li>Example: 1/2 > 1/3 > 1/4 > 1/8</li>
            </ul>
            <p><strong>3. Using Visual Models:</strong></p>
            <ul>
                <li>Draw fraction bars or circles</li>
                <li>Use a number line (proportion line)</li>
                <li>Shade different fractions to compare sizes</li>
            </ul>
            <p><strong>4. Finding Common Denominators:</strong></p>
            <ul>
                <li>Convert fractions to have the same denominator</li>
                <li>Then compare numerators</li>
            </ul>
            <p><strong>The Fraction Number Line:</strong> This is a powerful tool! Place fractions on a line from 0 to 1 to see which are closer to 0 (smaller) or 1 (larger).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-up" style="color: #4A90E2;"></i> Same Denominator Example</div>
                <p>Order: 3/8, 1/8, 5/8, 7/8. Ascending: 1/8, 3/8, 5/8, 7/8. We just look at the numerators since denominators are the same.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Number Line Example</div>
                <p>On a number line from 0 to 1: 1/4 comes before 1/2, and 3/4 comes after 1/2. So: 1/4 < 1/2 < 3/4.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Comparison</div>
                <p>If you have 3/8 of a pizza and your friend has 5/8, who has more? Since denominators are the same, 5/8 > 3/8.</p>
            </div>
        `,
        taskInstructions: "Practice ordering fractions by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Same Denominator Ordering</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Arrange the following in ascending order (smallest to largest):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4/10, 1/10, 9/10, 7/10</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Answer: <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 3/6, 5/6, 1/6, 4/6</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Answer: <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Unit Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Arrange these unit fractions in descending order (largest to smallest):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1/2, 1/8, 1/4, 1/5, 1/10</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Answer: <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Using a Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Place these fractions on the number line below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1/2, 1/4, 3/4, 1/8</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc; position: relative;">
                            <div style="position: absolute; left: 0; bottom: 5px;">0</div>
                            <div style="position: absolute; right: 0; bottom: 5px;">1</div>
                            <div style="position: absolute; left: 50%; transform: translateX(-50%); bottom: 5px;">1/2</div>
                        </div>
                        <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Mark each fraction on the line with its label)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which is larger? Circle your answer and explain why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3/5 or 3/8? <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. 2/3 or 3/4? <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Put these in order from smallest to largest: 1/3, 2/5, 1/2, 3/10
                    <div style="margin-left: 20px; margin-top: 5px;">Answer: <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
        `,
        homework: "Find 5 fractions in a recipe or measurement at home. Write them in order from smallest to largest.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Understanding and Comparing Fractions",
        subtopic: "Introduction to Improper Fractions",
        lessonContent: `
            <p>Today we will learn about special fractions where the numerator is larger than the denominator.</p>
            <p><strong>What Are Improper Fractions?</strong></p>
            <ul>
                <li>Fractions where the numerator (top number) is greater than or equal to the denominator (bottom number)</li>
                <li>They represent amounts greater than or equal to 1 whole</li>
                <li>Examples: 5/4, 7/3, 10/5, 3/2</li>
            </ul>
            <p><strong>Why Are They Called "Improper"?</strong></p>
            <ul>
                <li>It doesn't mean they're wrong or bad!</li>
                <li>It just means they don't follow the "usual" pattern of being less than 1 whole</li>
                <li>They're perfectly valid fractions that represent real amounts</li>
            </ul>
            <p><strong>Understanding Improper Fractions with Pizza:</strong></p>
            <ul>
                <li>If one pizza has 4 slices (denominator = 4)</li>
                <li>And you have 5 slices (numerator = 5)</li>
                <li>You have 5/4 of a pizza</li>
                <li>That's 1 whole pizza plus 1 extra slice!</li>
            </ul>
            <p><strong>Visualizing Improper Fractions:</strong></p>
            <ol>
                <li>Draw circles (or other shapes) to represent wholes</li>
                <li>Divide each circle into the number of parts shown by the denominator</li>
                <li>Shade the number of parts shown by the numerator</li>
                <li>Count how many whole circles are completely shaded</li>
                <li>Count any extra shaded parts in the last circle</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>7/4 = 1 whole circle + 3/4 of another</li>
                <li>5/3 = 1 whole circle + 2/3 of another</li>
                <li>8/8 = 1 whole circle (all parts shaded)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice" style="color: #4A90E2;"></i> Pizza Example</div>
                <p>5/4 of a pizza means: 1 whole pizza (4/4) plus 1 extra slice (1/4). So you have more than 1 pizza!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Visual Model</div>
                <p>To show 7/3: Draw 3 circles, divide each into 3 parts. Shade all 3 parts of first circle (3/3 = 1 whole), all 3 parts of second circle (another whole), and 1 part of third circle (1/3). Total: 2 wholes and 1/3.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Special Cases</div>
                <p>5/5 = 1 whole, 8/8 = 1 whole, 12/12 = 1 whole. When numerator equals denominator, it's exactly 1 whole!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and representing improper fractions by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Improper Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify which of these are improper fractions. Circle "Yes" or "No":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3/4: <span style="margin-left: 10px;">Yes</span> <span style="margin-left: 20px;">No</span></div>
                        <div>b. 7/2: <span style="margin-left: 10px;">Yes</span> <span style="margin-left: 20px;">No</span></div>
                        <div>c. 5/5: <span style="margin-left: 10px;">Yes</span> <span style="margin-left: 20px;">No</span></div>
                        <div>d. 1/8: <span style="margin-left: 10px;">Yes</span> <span style="margin-left: 20px;">No</span></div>
                        <div>e. 10/3: <span style="margin-left: 10px;">Yes</span> <span style="margin-left: 20px;">No</span></div>
                        <div>f. 6/7: <span style="margin-left: 10px;">Yes</span> <span style="margin-left: 20px;">No</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Improper Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw circles to represent each improper fraction:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 5/4 (pizza with 4 slices per pizza)</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>b. 7/3 (cakes with 3 pieces per cake)</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: From Words to Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the improper fraction for each situation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. You have 7 slices of pizza. Each pizza has 6 slices.</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Fraction: <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. There are 9 cookies on a plate. Cookies usually come in packs of 8.</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Fraction: <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. You drank 5 glasses of water. The pitcher holds 4 glasses.</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Fraction: <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Explain why 5/5 is considered an improper fraction even though it equals 1:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own real-life example of an improper fraction:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of improper fractions in real life (like in recipes, measurements, or sharing). Write the fraction and draw it.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Understanding and Comparing Fractions",
        subtopic: "Understanding Mixed Numbers",
        lessonContent: `
            <p>Today we will learn about mixed numbers - a special way to write fractions that are greater than 1.</p>
            <p><strong>What Are Mixed Numbers?</strong></p>
            <ul>
                <li>A combination of a whole number and a proper fraction</li>
                <li>Examples: 1 1/2, 2 1/3, 3 3/4, 5 2/5</li>
                <li>They represent amounts greater than 1 whole</li>
            </ul>
            <p><strong>Mixed Numbers vs. Improper Fractions:</strong></p>
            <ul>
                <li>They represent the same amounts, just written differently</li>
                <li>Mixed number: 1 1/4 (one and one-quarter)</li>
                <li>Improper fraction: 5/4 (five-quarters)</li>
                <li>They're like two different ways to say the same thing!</li>
            </ul>
            <p><strong>Converting Improper Fractions to Mixed Numbers:</strong></p>
            <ol>
                <li>Divide the numerator by the denominator</li>
                <li>The quotient (answer) becomes the whole number</li>
                <li>The remainder becomes the numerator of the fraction</li>
                <li>The denominator stays the same</li>
            </ol>
            <p><strong>Example:</strong> 7/4 = 7 ÷ 4 = 1 remainder 3 = 1 3/4</p>
            <p><strong>Converting Mixed Numbers to Improper Fractions:</strong></p>
            <ol>
                <li>Multiply the whole number by the denominator</li>
                <li>Add the numerator to that product</li>
                <li>Write that sum over the original denominator</li>
            </ol>
            <p><strong>Example:</strong> 2 1/3 = (2×3 + 1)/3 = 7/3</p>
            <p><strong>Visualizing Mixed Numbers:</strong></p>
            <ul>
                <li>Draw complete circles for the whole number part</li>
                <li>Draw a partial circle for the fraction part</li>
                <li>Shade accordingly to show the total amount</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #4A90E2;"></i> Conversion Example</div>
                <p>5/4 = 1 1/4. Think: How many whole pizzas (4/4 each) can we make from 5 slices? 1 whole pizza (4 slices) with 1 slice left over.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Drawing Mixed Numbers</div>
                <p>To show 2 1/4: Draw 2 whole circles, then draw a third circle divided into 4 parts and shade 1 part.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Quick Conversion</div>
                <p>3 2/5 = (3×5 + 2)/5 = 17/5. Check: 17 ÷ 5 = 3 remainder 2, which is 3 2/5!</p>
            </div>
        `,
        taskInstructions: "Practice working with mixed numbers by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing Mixed Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a diagram representing the mixed number 2 1/4:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Draw circles or rectangles to show 2 whole and 1/4 of another)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Converting to Mixed Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert these improper fractions to mixed numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 7/4 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 11/3 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 9/2 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 15/4 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Converting to Improper Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Convert these mixed numbers to improper fractions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 1 1/2 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 2 1/3 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 3 3/4 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 4 2/5 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve each problem. Write your answer as a mixed number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Sarah has 9 slices of pizza. Each pizza has 4 slices. How many whole pizzas does she have, and how many extra slices?</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Answer: <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> pizzas</div>
                        <div>b. A recipe calls for 11 cups of flour. Each bag contains 3 cups. How many full bags are needed, and how much extra?</div>
                        <div style="margin-left: 20px; margin-top: 5px;">Answer: <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> bags</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Creating Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a real-world situation that would be represented by the mixed number 3 1/2:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 2 examples of mixed numbers in cooking, measuring, or shopping. Write them as both mixed numbers and improper fractions.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek7);
    console.log("grade4-math-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek7);
    console.log("grade4-math-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek7',
        metadata: grade4MathWeek7.metadata,
        days: grade4MathWeek7
    });
    console.log("grade4-math-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek7 = grade4MathWeek7;
console.log("grade4-math-week7.js loaded and registered successfully");