// Grade 2 Mathematics & Science - Term 1 Week 7 Data
const grade2MathScienceWeek7 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 1,
        week: 7,
        title: "Data Analysis (Pictographs) & Common Diseases",
        description: "Collecting, presenting, and interpreting data using pictographs; exploring common diseases in the community and their causes"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Collecting and Recording Data",
        lessonContent: `
            <p>Welcome to our week on data analysis! Today we'll learn how to collect and record information.</p>
            <p><strong>Key Question:</strong> How can we find out what our classmates like?</p>
            <p><strong>Introduction:</strong> Data is information we collect to answer questions. We can collect data by asking people, counting things, or observing!</p>
            <p><strong>Ways to Collect Data:</strong></p>
            <ol>
                <li><strong>Asking questions:</strong> "What is your favorite fruit?"</li>
                <li><strong>Counting:</strong> How many red cars pass by?</li>
                <li><strong>Observing:</strong> What color shirts are people wearing?</li>
            </ol>
            <p><strong>Recording Data:</strong> When we collect data, we need to write it down so we don't forget. We can use tally marks, lists, or checkboxes.</p>
            <p><strong>Tally Marks:</strong> A quick way to count! Each mark means 1. After 4 marks, the 5th mark goes across: |||| = 5</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Class Survey Example</div>
                <p>Ms. Johnson asked her class: "What is your favorite animal?"<br>
                Dog: 7 students<br>
                Cat: 4 students<br>
                Rabbit: 3 students<br>
                Fish: 2 students</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-square"></i> Tally Mark Practice</div>
                <p>If 5 students like apples, we write: ||||<br>
                If 3 students like bananas, we write: |||<br>
                If 8 students like oranges, we write: |||| |||</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Counting at Home</div>
                <p>You can collect data anywhere! Count how many windows in your house, or how many family members wear glasses.</p>
            </div>
        `,
        taskInstructions: "Conduct a class survey and record data using tally marks.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Class Survey Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Ask your classmates: "What is your favorite fruit?" Record answers using tally marks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Apple: _____________ (tally marks)</div>
                        <div>Banana: _____________ (tally marks)</div>
                        <div>Orange: _____________ (tally marks)</div>
                        <div>Grapes: _____________ (tally marks)</div>
                        <div>Watermelon: _____________ (tally marks)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Counting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count the number of each shape and write the tally marks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>△ △ △ △ △ (5 triangles) = _____</div>
                        <div>□ □ □ (3 squares) = _____</div>
                        <div>○ ○ ○ ○ ○ ○ ○ (7 circles) = _____</div>
                        <div>☆ ☆ ☆ ☆ (4 stars) = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Data Collection at Home</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Ask 5 family members: "What is your favorite color?" Record their answers:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Ask 10 people (family or neighbors) what their favorite pet is. Record answers using tally marks.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Presenting Data Sets on a Pictograph",
        lessonContent: `
            <p>Today we'll learn how to show our data using pictures! This is called a pictograph.</p>
            <p><strong>Key Question:</strong> How can we show numbers using pictures?</p>
            <p><strong>What is a Pictograph?</strong> A pictograph uses pictures or symbols to show data. Each picture stands for a certain number of items.</p>
            <p><strong>Parts of a Pictograph:</strong></p>
            <ol>
                <li><strong>Title:</strong> Tells what the pictograph is about</li>
                <li><strong>Labels:</strong> Tell what each row or column means</li>
                <li><strong>Pictures/Symbols:</strong> Show the data</li>
                <li><strong>Key:</strong> Tells what each picture represents (example: 🍎 = 2 apples)</li>
            </ol>
            <p><strong>How to Make a Pictograph:</strong></p>
            <ol>
                <li>Choose a title for your pictograph</li>
                <li>Decide what symbol you will use</li>
                <li>Draw the correct number of symbols for each category</li>
                <li>Add a key so people understand your symbols</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Favorite Fruit Pictograph</div>
                <p><strong>Title: Our Favorite Fruits</strong><br>
                <strong>Key:</strong> 🍎 = 1 student<br>
                Apple: 🍎 🍎 🍎 🍎 (4 students)<br>
                Banana: 🍌 🍌 🍌 (3 students)<br>
                Orange: 🍊 🍊 🍊 🍊 🍊 (5 students)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Weather Pictograph</div>
                <p><strong>Title: Weather This Week</strong><br>
                <strong>Key:</strong> ☀️ = 1 sunny day<br>
                Sunny: ☀️ ☀️ ☀️ ☀️ (4 days)<br>
                Rainy: ☔ ☔ (2 days)<br>
                Cloudy: ☁️ (1 day)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Car Color Pictograph</div>
                <p><strong>Key:</strong> 🚗 = 2 cars<br>
                Red: 🚗 🚗 (4 cars)<br>
                Blue: 🚗 🚗 🚗 (6 cars)<br>
                White: 🚗 (2 cars)</p>
            </div>
        `,
        taskInstructions: "Create a pictograph using data from your class survey.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Create Your Own Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use your favorite fruit data from Monday. Create a pictograph below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Title:</strong> _____________________________</p>
                        <p><strong>Key:</strong> 🍎 = _______ student(s)</p>
                        <div style="border: 1px solid #ccc; padding: 15px; margin-top: 10px;">
                            <p><strong>Apple:</strong> ____________________</p>
                            <p><strong>Banana:</strong> ____________________</p>
                            <p><strong>Orange:</strong> ____________________</p>
                            <p><strong>Grapes:</strong> ____________________</p>
                            <p><strong>Watermelon:</strong> ____________________</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> The pictograph shows favorite pets. Each 🐶 = 2 pets. Complete the chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Dogs: 🐶 🐶 🐶 = _____ pets</p>
                        <p>Cats: 🐱 🐱 = _____ pets</p>
                        <p>Fish: 🐟 🐟 🐟 🐟 = _____ pets</p>
                        <p>Birds: 🐦 = _____ pets</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Own Symbols</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a pictograph showing how many books you read this week (use any symbol you like, with a key):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Create a pictograph showing the eye colors of 10 family members or friends. Use an eye symbol 👁️ in your key.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Data Analysis",
        subtopic: "Interpreting Data from a Pictograph",
        lessonContent: `
            <p>Today we'll learn how to read pictographs and answer questions about the data!</p>
            <p><strong>Key Question:</strong> What can a pictograph tell us?</p>
            <p><strong>Interpreting Data:</strong> When we look at a pictograph, we can learn many things. We can find which item has the most, which has the least, and compare different items.</p>
            <p><strong>Questions We Can Answer:</strong></p>
            <ol>
                <li>How many people chose each option?</li>
                <li>Which option was the most popular?</li>
                <li>Which option was the least popular?</li>
                <li>How many more people chose one thing over another?</li>
                <li>How many people answered in total?</li>
            </ol>
            <p><strong>Remember:</strong> Always check the KEY first! It tells you what each picture means.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ice-cream"></i> Favorite Ice Cream Pictograph</div>
                <p><strong>Key:</strong> 🍦 = 2 students<br>
                Chocolate: 🍦 🍦 🍦 (6 students)<br>
                Vanilla: 🍦 🍦 (4 students)<br>
                Strawberry: 🍦 (2 students)<br>
                <strong>Questions:</strong> Most popular? Chocolate! Total students? 12!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-futbol"></i> Sports Pictograph</div>
                <p><strong>Key:</strong> ⚽ = 1 student<br>
                Soccer: ⚽ ⚽ ⚽ ⚽ ⚽ (5)<br>
                Basketball: 🏀 🏀 🏀 (3)<br>
                Tennis: 🎾 🎾 (2)<br>
                <strong>Compare:</strong> 2 more students like soccer than tennis!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Find the Total</div>
                <p>To find the total number of students surveyed, add all the picture values together. Don't forget to multiply if each picture counts for more than 1!</p>
            </div>
        `,
        taskInstructions: "Answer questions about given pictographs and interpret the data.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read the Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at this pictograph about favorite subjects. <strong>Key:</strong> ⭐ = 2 students
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f5f5f5; padding: 15px;">
                        <p>Math: ⭐ ⭐ ⭐</p>
                        <p>Reading: ⭐ ⭐ ⭐ ⭐</p>
                        <p>Science: ⭐ ⭐</p>
                        <p>Art: ⭐</p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How many students like Math? _____</div>
                        <div>b. How many students like Reading? _____</div>
                        <div>c. Which subject is the most popular? _____</div>
                        <div>d. Which subject is the least popular? _____</div>
                        <div>e. How many more students like Reading than Science? _____</div>
                        <div>f. How many students were surveyed in total? _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Transportation Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> The pictograph shows how students get to school. <strong>Key:</strong> 🚌 = 3 students
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f5f5f5; padding: 15px;">
                        <p>Bus: 🚌 🚌 🚌</p>
                        <p>Car: 🚗 🚗</p>
                        <p>Walk: 🚶 🚶 🚶 🚶</p>
                        <p>Bike: 🚲</p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How many students take the bus? _____</div>
                        <div>b. How many students walk to school? _____</div>
                        <div>c. How many more students walk than ride a bike? _____</div>
                        <div>d. Which way do most students get to school? _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the pictograph you made on Tuesday. Write two questions for a friend to answer:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a pictograph in a book, magazine, or online (with help from an adult). Write three things you learned from it.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Health Science",
        subtopic: "Exploring Common Diseases in the Community",
        lessonContent: `
            <p>Today we'll learn about common diseases that people in our community sometimes get, and how we can stay healthy!</p>
            <p><strong>Key Question:</strong> What are some common diseases, and how do we know if someone has them?</p>
            <p><strong>Introduction:</strong> A disease is when our body doesn't work the way it should. Some diseases spread from person to person. These are called infectious diseases.</p>
            <p><strong>Common Diseases:</strong></p>
            <ol>
                <li><strong>Malaria:</strong> A disease spread by mosquito bites. Causes fever, chills, and feeling very tired.</li>
                <li><strong>TB (Tuberculosis):</strong> A lung disease that spreads through coughing and sneezing. Causes coughing, fever, and weight loss.</li>
                <li><strong>Common Cold:</strong> A virus that causes sneezing, runny nose, and sore throat. It spreads through the air and by touching things.</li>
                <li><strong>Flu (Influenza):</strong> Similar to a cold but worse. Causes high fever, body aches, and feeling very weak.</li>
                <li><strong>Stomach Flu (Gastroenteritis):</strong> Causes vomiting and diarrhea. Spreads through contaminated food or water.</li>
            </ol>
            <p><strong>How to Stay Healthy:</strong> Wash hands, get vaccines, eat healthy food, and sleep well!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mosquito"></i> Malaria Facts</div>
                <p>Malaria is spread by female Anopheles mosquitoes. Sleeping under a mosquito net helps prevent malaria!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tissue"></i> Colds Are Common</div>
                <p>Most children get 6-8 colds every year! Washing your hands well can help prevent spreading colds to others.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Community Care</div>
                <p>When someone is sick, we can help by giving them space to rest, bringing them water, and reminding them to see a doctor if needed.</p>
            </div>
        `,
        taskInstructions: "Identify common diseases by their symptoms and learn how to stay healthy.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Disease to the Symptom</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw lines to match each disease with its symptoms:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Malaria</div>
                                <div>• Common Cold</div>
                                <div>• TB (Tuberculosis)</div>
                                <div>• Flu (Influenza)</div>
                            </div>
                            <div>
                                <div>→ Cough that lasts long, fever, weight loss</div>
                                <div>→ Fever, chills, headache (from mosquito bite)</div>
                                <div>→ High fever, body aches, very tired</div>
                                <div>→ Sneezing, runny nose, sore throat</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: How Do We Get These Diseases?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Malaria is spread by _______________.</div>
                        <div>b. Colds and flu spread through _______________ and _______________.</div>
                        <div>c. TB spreads when someone _______________ or _______________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Disease Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture showing one way to prevent a disease (example: using a mosquito net, washing hands, covering your mouth when coughing):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence explaining your drawing:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult at home: Have you or someone in our family ever had malaria or TB? What happened and how was it treated?",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Health Science",
        subtopic: "Identifying Causes of Common Diseases",
        lessonContent: `
            <p>Today we'll learn what causes common diseases and how we can prevent them!</p>
            <p><strong>Key Question:</strong> What makes people get sick, and how can we stop it?</p>
            <p><strong>What Causes Diseases?</strong> Most common diseases are caused by tiny germs called <strong>germs</strong>. There are different types of germs:</p>
            <ul>
                <li><strong>Viruses:</strong> Cause colds, flu, and COVID-19. They need a living host to survive.</li>
                <li><strong>Bacteria:</strong> Some bacteria cause diseases like TB and strep throat.</li>
                <li><strong>Parasites:</strong> Tiny organisms that live on or inside other creatures. The malaria parasite is spread by mosquitoes.</li>
            </ul>
            <p><strong>How Do Germs Spread?</strong></p>
            <ol>
                <li><strong>Through the air:</strong> When someone coughs or sneezes</li>
                <li><strong>Through touch:</strong> Touching things that have germs on them</li>
                <li><strong>Through animals/insects:</strong> Mosquitoes spread malaria</li>
                <li><strong>Through food and water:</strong> Eating contaminated food or drinking dirty water</li>
            </ol>
            <p><strong>How to Prevent Diseases:</strong> Wash hands, cover coughs, get vaccines, use mosquito nets, drink clean water, eat healthy food.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-water"></i> Hand Washing Works!</div>
                <p>Washing your hands with soap for 20 seconds (sing "Happy Birthday" twice) kills almost all germs on your hands!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Clean Water Matters</div>
                <p>Drinking clean, boiled, or treated water prevents stomach diseases like diarrhea and cholera.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> Mosquito Nets Save Lives</div>
                <p>Sleeping under a mosquito net can reduce the chance of getting malaria by more than 50%!</p>
            </div>
        `,
        taskInstructions: "Identify causes of diseases and create a prevention poster.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: What Causes the Disease?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the cause of each disease:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Malaria is caused by: _______________ (spread by _______________)</div>
                        <div>b. Common cold is caused by: _______________</div>
                        <div>c. TB (Tuberculosis) is caused by: _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: How Does It Spread?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each disease with how it spreads:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Malaria</div>
                                <div>• Cold/Flu</div>
                                <div>• Stomach diseases</div>
                            </div>
                            <div>
                                <div>→ Contaminated food/water</div>
                                <div>→ Mosquito bites</div>
                                <div>→ Coughing, sneezing, touching</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Disease Prevention Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a "How to Stay Healthy" poster showing 3 ways to prevent diseases:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is one new thing you learned this week about staying healthy?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What will you do differently to prevent getting sick?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Teach your family one thing you learned about preventing diseases. Draw a picture of you teaching them, or write about what you taught.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek7);
    console.log("grade2-math-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek7);
    console.log("grade2-math-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek7',
        metadata: grade2MathScienceWeek7.metadata,
        days: grade2MathScienceWeek7
    });
    console.log("grade2-math-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek7 = grade2MathScienceWeek7;
console.log("grade2-math-science-week7.js loaded and registered successfully");