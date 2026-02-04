// Grade 2 Mathematics - Week 7 Data (Data Analysis and Pictographs)
const grade2MathScienceWeek7 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        week: 7,
        title: "Data Analysis and Pictographs",
        description: "Learning to collect, record, and represent data using tally marks and pictographs"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Collecting Data",
        subtopic: "Learning how to collect and record simple data using tally marks",
        lessonContent: `
            <p>Welcome to our Math lesson! Today we will learn how to collect and record information from our classmates.</p>
            <p><strong>Key Concept:</strong> Data is information we collect to answer questions.</p>
            <p><strong>What is data collection?</strong></p>
            <ul>
                <li>Asking questions to gather information</li>
                <li>Recording answers in an organized way</li>
                <li>Using that information to learn something new</li>
            </ul>
            <p><strong>Tally Marks:</strong> Tally marks help us count large groups quickly. Each mark represents one item.</p>
            <p><strong>How to make tally marks:</strong> First four marks are vertical lines, the fifth mark goes across to make a group of five: 卌</p>
            <p><strong>Today's question:</strong> What is your favorite fruit: Apple, Banana, or Orange?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt" style="color: #e74c3c;"></i> Apple Votes</div>
                <p>If 3 students choose apple: 卌 (5) would be wrong, but ||| (3) is correct!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Tally Chart Example</div>
                <p>Favorite Colors:</p>
                <p>Red: ||| (3)</p>
                <p>Blue: 卌 || (7)</p>
                <p>Green: | (1)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Quick Count Game!</div>
                <p>I'll show groups of tally marks for 3 seconds. How many do you see? First to shout the correct number wins!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice collecting and recording data.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Create a tally chart for your table group's favorite fruit:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Apple: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Banana: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Orange: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw tally marks for these numbers:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>7: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>5: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>12: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Count these tally marks and write the number:
                <div style="margin-left: 20px; margin-top: 10px; font-size: 20px;">
                    <div>卌 卌 || : <span class="answer-space" style="width: 50px;"></span></div>
                    <div>卌 ||| : <span class="answer-space" style="width: 50px;"></span></div>
                    <div>卌 卌 卌 | : <span class="answer-space" style="width: 50px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Survey 5 classmates about their favorite fruit. Record below:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. ________________: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>2. ________________: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>3. ________________: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>4. ________________: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>5. ________________: <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
        `,
        homework: "Ask 3 family members: 'What is your favorite vegetable?' Record their answers using tally marks.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "What is a Pictograph?",
        subtopic: "Understanding that symbols or pictures can represent numbers",
        lessonContent: `
            <p>Today we will learn about a special kind of chart called a pictograph!</p>
            <p><strong>Key Concept:</strong> A pictograph uses pictures or symbols to show data instead of just numbers.</p>
            <p><strong>What is a pictograph?</strong></p>
            <ul>
                <li>A chart that uses pictures to represent numbers</li>
                <li>Makes information easier to understand at a glance</li>
                <li>Each picture stands for a certain number of items</li>
            </ul>
            <p><strong>Parts of a pictograph:</strong></p>
            <ul>
                <li><strong>Title:</strong> Tells what the graph is about</li>
                <li><strong>Categories:</strong> The different groups being compared</li>
                <li><strong>Pictures/Symbols:</strong> Each represents a number</li>
                <li><strong>Key:</strong> Shows what each picture stands for</li>
            </ul>
            <p><strong>Example:</strong> If one smiley face = 1 student, then 5 smiley faces = 5 students!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile" style="color: #f1c40f;"></i> Smiley Face Graph</div>
                <p>Favorite Colors:</p>
                <p>Red: 😊😊😊 (3 students)</p>
                <p>Blue: 😊😊😊😊😊 (5 students)</p>
                <p>Green: 😊 (1 student)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-key"></i> Understanding the Key</div>
                <p>Key: 🍎 = 1 student who likes apples</p>
                <p>So: 🍎🍎🍎 means 3 students like apples!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Picture Match Game!</div>
                <p>I'll show a pictograph for 5 seconds. Can you remember how many pictures were in each row?</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice understanding pictographs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reading Pictographs</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at this pictograph (Key: ★ = 1 book read):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sam: ★★★★</div>
                        <div>Lia: ★★★★★★</div>
                        <div>Max: ★★</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Who read the most books? <span class="answer-space" style="width: 80px;"></span></div>
                        <div>Who read the fewest books? <span class="answer-space" style="width: 80px;"></span></div>
                        <div>How many books did Sam read? <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating Symbols</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw symbols for this data (Key: 🐱 = 1 pet cat):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3 cats: <span class="answer-space" style="width: 120px; height: 30px;"></span></div>
                        <div>5 cats: <span class="answer-space" style="width: 120px; height: 30px;"></span></div>
                        <div>1 cat: <span class="answer-space" style="width: 120px; height: 30px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Building a Class Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using yesterday's fruit data, add pictures to the chart (Key: 🍎 = 1 student):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Apple: <span class="answer-space" style="width: 150px; height: 30px;"></span></div>
                        <div>Banana: <span class="answer-space" style="width: 150px; height: 30px;"></span></div>
                        <div>Orange: <span class="answer-space" style="width: 150px; height: 30px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Different Symbols</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If 🔴 = 2 students, how many students do these represent?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🔴🔴🔴 = <span class="answer-space" style="width: 50px;"></span> students</div>
                        <div>🔴🔴 = <span class="answer-space" style="width: 50px;"></span> students</div>
                        <div>🔴🔴🔴🔴 = <span class="answer-space" style="width: 50px;"></span> students</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a simple pictograph showing how many windows are in each room of your home. Use □ as your symbol.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Creating Our Own Pictograph",
        subtopic: "Representing a data set on a pictograph using symbols",
        lessonContent: `
            <p>Today we will create our very own pictographs from start to finish!</p>
            <p><strong>Key Concept:</strong> A pictograph must have clear symbols and an accurate key.</p>
            <p><strong>Steps to create a pictograph:</strong></p>
            <ol>
                <li>Collect your data (using tally marks)</li>
                <li>Choose a simple symbol or picture</li>
                <li>Decide what each symbol will represent (usually 1 item)</li>
                <li>Draw the correct number of symbols for each category</li>
                <li>Add a title and labels</li>
            </ol>
            <p><strong>Today's data set:</strong> We'll graph colored pencils: Red, Blue, and Green.</p>
            <p><strong>Symbol choice:</strong> Simple shapes work best! Circles (○), squares (□), or stars (★) are good choices.</p>
            <p><strong>Important:</strong> Each symbol should be the same size and evenly spaced. Count carefully!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt" style="color: #3498db;"></i> Pencil Graph</div>
                <p>Colored Pencils in Our Class:</p>
                <p>Red: ○○○○○ (5)</p>
                <p>Blue: ○○○○○○○○ (8)</p>
                <p>Green: ○○○ (3)</p>
                <p>Key: ○ = 1 pencil</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Neat and Tidy</div>
                <p>A good pictograph has:</p>
                <p>• Symbols in straight rows</p>
                <p>• Clear labels for each category</p>
                <p>• A title at the top</p>
                <p>• A key to explain the symbols</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Graph Builder Race!</div>
                <p>I'll give you data. First team to draw a correct pictograph wins!</p>
            </div>
        `,
        taskInstructions: "Create pictographs using the given data sets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Pencils</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a pictograph for these colored pencils (use ○ as your symbol):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Red pencils: 4</div>
                        <div>Blue pencils: 7</div>
                        <div>Green pencils: 2</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 1px dashed #ccc;">
                        <div style="text-align: center; padding-top: 80px;">Draw your pictograph here</div>
                    </div>
                    <div style="margin-top: 10px;">
                        Title: <span class="answer-space" style="width: 200px;"></span>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animal Survey</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Survey your table: Favorite animal (Dog, Cat, Bird). Create a pictograph:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Dog: <span class="answer-space" style="width: 60px;"></span></div>
                        <div>Cat: <span class="answer-space" style="width: 60px;"></span></div>
                        <div>Bird: <span class="answer-space" style="width: 60px;"></span></div>
                    </div>
                    <div style="margin-top: 10px;">
                        Choose your symbol: <span class="answer-space" style="width: 100px;"></span>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shape Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw these pictographs using different symbols:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Using △ for 3 balls: <span class="answer-space" style="width: 120px; height: 30px;"></span></div>
                        <div>Using □ for 6 books: <span class="answer-space" style="width: 120px; height: 30px;"></span></div>
                        <div>Using ☆ for 4 stars: <span class="answer-space" style="width: 120px; height: 30px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Check Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle YES or NO for each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My pictograph has a title ☐ YES ☐ NO</div>
                        <div>My symbols are the same size ☐ YES ☐ NO</div>
                        <div>My key explains the symbols ☐ YES ☐ NO</div>
                        <div>The number of symbols matches the data ☐ YES ☐ NO</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a pictograph showing how many chairs are in 3 different rooms of your home. Include title and key.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Interpreting Data (Reading the Chart)",
        subtopic: "Answering questions based on an existing pictograph",
        lessonContent: `
            <p>Today we will become data detectives! We'll learn how to read pictographs and find information.</p>
            <p><strong>Key Concept:</strong> Pictographs help us see patterns and compare information quickly.</p>
            <p><strong>Questions we can answer from a pictograph:</strong></p>
            <ul>
                <li>Which category has the most?</li>
                <li>Which category has the fewest?</li>
                <li>How many more does one category have than another?</li>
                <li>What is the total number of items?</li>
            </ul>
            <p><strong>Today's pictograph:</strong> "Weather This Week" showing Sunny, Rainy, and Cloudy days.</p>
            <p><strong>Reading tips:</strong></p>
            <ol>
                <li>Look at the title to know what the graph shows</li>
                <li>Check the key to understand what each symbol means</li>
                <li>Count symbols carefully in each row</li>
                <li>Compare the rows to answer questions</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #f39c12;"></i> Weather Graph</div>
                <p>Weather This Week:</p>
                <p>Sunny: ☀️☀️☀️☀️ (4 days)</p>
                <p>Rainy: 🌧️🌧️ (2 days)</p>
                <p>Cloudy: ☁️☁️☁️ (3 days)</p>
                <p>Key: ☀️ = 1 sunny day</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Sample Questions</div>
                <p>From the weather graph:</p>
                <p>Q: Which weather happened most? A: Sunny (4 days)</p>
                <p>Q: How many rainy days? A: 2 days</p>
                <p>Q: Total days recorded? A: 4+2+3 = 9 days</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Graph Detective Game!</div>
                <p>I'll show a pictograph for 10 seconds. Then I'll ask questions. Can you remember the answers?</p>
            </div>
        `,
        taskInstructions: "Answer questions based on the pictographs shown.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weather Graph Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use this pictograph (Key: ☀️ = 1 sunny day):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Week 1: ☀️☀️☀️</div>
                        <div>Week 2: ☀️☀️☀️☀️☀️</div>
                        <div>Week 3: ☀️☀️</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which week had the most sunny days? <span class="answer-space" style="width: 80px;"></span></div>
                        <div>Which week had the fewest sunny days? <span class="answer-space" style="width: 80px;"></span></div>
                        <div>How many sunny days in Week 1? <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Total sunny days in all weeks? <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Book Reading Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Analyze this book reading chart (Key: 📚 = 2 books read):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Maya: 📚📚📚</div>
                        <div>Leo: 📚📚</div>
                        <div>Zara: 📚📚📚📚</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>How many books did Maya read? <span class="answer-space" style="width: 50px;"></span></div>
                        <div>How many books did Leo read? <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Who read the most books? <span class="answer-space" style="width: 80px;"></span></div>
                        <div>How many more books did Zara read than Leo? <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at this pictograph and write 2 questions about it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Favorite Snack:</div>
                        <div>Apple: 🍎🍎🍎🍎</div>
                        <div>Cookie: 🍪🍪🍪🍪🍪🍪</div>
                        <div>Carrot: 🥕🥕🥕</div>
                        <div>Key: Each symbol = 1 vote</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Question 1: <span class="answer-space" style="width: 250px;"></span></div>
                        <div>Question 2: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: True or False</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Based on the snack pictograph above, mark True or False:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Cookies got the most votes ☐ True ☐ False</div>
                        <div>Apples got 3 votes ☐ True ☐ False</div>
                        <div>Carrots got fewer votes than apples ☐ True ☐ False</div>
                        <div>Total votes were 13 ☐ True ☐ False</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a chart or graph in a newspaper or magazine. Write down 3 things you learn from looking at it.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Data Review and Practice",
        subtopic: "Independent practice collecting data and creating pictographs",
        lessonContent: `
            <p>Today is our data celebration day! We'll use all our skills to complete a full data project.</p>
            <p><strong>Key Concept:</strong> Data collection helps us understand our world better.</p>
            <p><strong>The full data process:</strong></p>
            <ol>
                <li>Ask a question</li>
                <li>Collect data (use tally marks)</li>
                <li>Organize the data</li>
                <li>Create a pictograph</li>
                <li>Interpret and share what you learned</li>
            </ol>
            <p><strong>Today's question:</strong> How many shoes in our room have laces vs. no laces?</p>
            <p><strong>Working in pairs:</strong> You and your partner will:</p>
            <ul>
                <li>Count shoes in your area</li>
                <li>Record data using tally marks</li>
                <li>Create a pictograph on paper</li>
                <li>Present your findings to the class</li>
            </ul>
            <p><strong>Remember:</strong> Check your counting! Make sure your symbols match your numbers.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> Shoe Data Example</div>
                <p>Shoes with laces: 卌 卌 || (12)</p>
                <p>Shoes without laces: 卌 ||| (8)</p>
                <p>Key: 👟 = 2 shoes</p>
                <p>Graph would show: Laces: 👟👟👟👟👟👟 (6 symbols = 12 shoes)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Presentation Tips</div>
                <p>When sharing with class:</p>
                <p>1. Show your pictograph clearly</p>
                <p>2. Share your most interesting finding</p>
                <p>3. Explain your counting method</p>
                <p>4. Tell if anything surprised you</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Data Scavenger Hunt!</div>
                <p>Find items in the room that match different categories. First pair to complete all categories wins!</p>
            </div>
        `,
        taskInstructions: "Complete the full data project with your partner.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Data Collection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your partner, count shoes in your assigned area:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Shoes WITH laces: <span class="answer-space" style="width: 100px;"></span> (tally: <span class="answer-space" style="width: 80px;"></span>)</div>
                        <div>Shoes WITHOUT laces: <span class="answer-space" style="width: 100px;"></span> (tally: <span class="answer-space" style="width: 80px;"></span>)</div>
                        <div>Total shoes counted: <span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> On a separate paper, create a pictograph of your shoe data:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Title: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Symbol choice: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Key: <span class="answer-space" style="width: 150px;"></span> = <span class="answer-space" style="width: 50px;"></span> shoe(s)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 1px dashed #ccc;">
                        <div style="text-align: center; padding-top: 90px;">Create your pictograph here or on separate paper</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Analysis Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about your data:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which type of shoe was more common? <span class="answer-space" style="width: 150px;"></span></div>
                        <div>How many more of that type were there? <span class="answer-space" style="width: 80px;"></span></div>
                        <div>What percentage of shoes had laces? <span class="answer-space" style="width: 80px;"></span>%</div>
                        <div>Was your counting method accurate? How do you know? <span class="answer-space" style="width: 250px; height: 40px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare with Another Pair</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Share data with another pair. Record their results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Their shoes with laces: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>Their shoes without laces: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>Were your results similar? ☐ Yes ☐ No</div>
                        <div>Possible reasons for differences: <span class="answer-space" style="width: 250px; height: 40px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Data Detective Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a data detective. Write one thing you learned this week:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned that data collection is important because ________________</div>
                </div>
            </div>
        `,
        homework: "Create a survey question for your family. Collect data and make a pictograph to share on Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek7);
    console.log("mathscience-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek7);
    console.log("mathscience-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek2',
        metadata: grade2MathScienceWeek7.metadata,
        days: grade2MathScienceWeek7
    });
    console.log("mathscience-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek2 = grade2MathScienceWeek2;
console.log("mathscience-week7.js loaded and registered successfully");