// Grade 2 Mathematics & Science - Term 1 Week 8 Data
const grade2MathScienceWeek8 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 1,
        week: 8,
        title: "Diseases & Environment",
        description: "Exploring common diseases, prevention, symptoms, and caring for our environment through hands-on activities"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Health & Hygiene",
        subtopic: "Preventing Common Diseases",
        lessonContent: `
            <p>Welcome! Today we'll learn how to stay healthy by preventing common diseases.</p>
            <p><strong>Key Question:</strong> What can we do to stop germs from making us sick?</p>
            <p><strong>What is a Disease?</strong> A disease is when our body doesn't feel well because germs (tiny living things we can't see) get inside us.</p>
            <p><strong>Ways to Prevent Common Diseases:</strong></p>
            <ol>
                <li><strong>Wash your hands</strong> with soap and water before eating and after using the toilet</li>
                <li><strong>Cover your mouth</strong> when you cough or sneeze (use your elbow!)</li>
                <li><strong>Drink clean water</strong> from safe sources or boiled water</li>
                <li><strong>Eat healthy food</strong> like fruits and vegetables to make your body strong</li>
                <li><strong>Get enough sleep</strong> so your body can rest and fight germs</li>
                <li><strong>Keep your surroundings clean</strong> - germs love dirty places!</li>
            </ol>
            <p><strong>Remember:</strong> Most germs are spread through our hands. Washing hands properly can prevent many diseases!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Hand Washing Song</div>
                <p>Sing the ABC song slowly while washing your hands. When you finish the song, your hands are clean enough!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Strong Body Foods</div>
                <p>Oranges have Vitamin C, which helps your body fight germs. Carrots have Vitamin A, which keeps your skin healthy - and your skin is your first defense against germs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> Sleep Power</div>
                <p>When you sleep, your body makes special cells called antibodies that fight germs. That's why doctors say rest is the best medicine!</p>
            </div>
        `,
        taskInstructions: "List prevention methods and complete a hand-washing sequence activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prevention List</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write or draw 3 ways to prevent diseases:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Hand-Washing Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Number the pictures in the correct order (1-4):
                    <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 2px dashed #ccc;"></div>
                            <span>Rinse</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 2px dashed #ccc;"></div>
                            <span>Soap</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 2px dashed #ccc;"></div>
                            <span>Wet hands</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 2px dashed #ccc;"></div>
                            <span>Dry</span>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Order: ___ , ___ , ___ , ___</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Write</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw yourself doing something to stay healthy. Write one sentence about it.
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice washing your hands the right way at home. Ask a family member to watch you and sign your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Health & Hygiene",
        subtopic: "Matching Diseases with Symptoms",
        lessonContent: `
            <p>Today we'll learn to recognize common diseases by their symptoms - the signs that tell us something is wrong with our body.</p>
            <p><strong>Key Question:</strong> How do we know when we are sick?</p>
            <p><strong>Symptoms are clues!</strong> When you feel different than usual, your body is sending you signals.</p>
            <p><strong>Common Diseases and Their Symptoms:</strong></p>
            <ul>
                <li><strong>Common Cold:</strong> Runny nose, sneezing, sore throat, cough, sometimes fever</li>
                <li><strong>Malaria:</strong> High fever, chills (feeling very cold and shaky), headache, sweating</li>
                <li><strong>Stomach Flu (Gastroenteritis):</strong> Stomach pain, diarrhea (watery poop), vomiting (throwing up)</li>
                <li><strong>Chickenpox:</strong> Fever, red itchy spots that turn into blisters all over the body</li>
                <li><strong>Conjunctivitis (Pink Eye):</strong> Red, itchy, watery eyes with discharge</li>
            </ul>
            <p><strong>Important!</strong> If you have any of these symptoms, tell an adult and visit a clinic or doctor. Never guess what disease you have!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Fever Facts</div>
                <p>A fever is when your body temperature goes above normal (37°C or 98.6°F). Your body raises its temperature to help kill germs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Cover That Cough!</div>
                <p>Colds and flu spread when sick people cough or sneeze without covering their mouth. Always cough into your elbow, not your hands!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mosquito"></i> Malaria Alert</div>
                <p>Malaria is spread by mosquito bites. Sleeping under a mosquito net helps prevent this disease!</p>
            </div>
        `,
        taskInstructions: "Match each disease to its symptoms and draw a sick day picture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Disease to Its Symptoms</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match:
                    <div style="margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Common Cold</div>
                                <div>• Malaria</div>
                                <div>• Stomach Flu</div>
                                <div>• Chickenpox</div>
                                <div>• Pink Eye</div>
                            </div>
                            <div>
                                <div>→ Stomach pain, diarrhea, vomiting</div>
                                <div>→ Red itchy spots, fever, blisters</div>
                                <div>→ Runny nose, sneezing, sore throat</div>
                                <div>→ High fever, chills, headache</div>
                                <div>→ Red, itchy, watery eyes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What's Wrong?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each case and write the likely disease:
                    <div style="margin-top: 10px;">
                        <div><strong>Case 1:</strong> Maria has a runny nose, keeps sneezing, and her throat hurts. She has _________.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>Case 2:</strong> John has a high fever and feels very cold and shaky. He has _________.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>Case 3:</strong> Aisha has red, itchy spots all over her body. She has _________.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw a Sick Day</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw what you would do if you felt sick. What symptoms would you have?
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member what they do when they feel sick. Write or draw one thing they said.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Environmental Care",
        subtopic: "Importance of Caring for the Environment",
        lessonContent: `
            <p>Today we'll learn why taking care of our environment is so important for our health and for all living things!</p>
            <p><strong>Key Question:</strong> Why should we care for the world around us?</p>
            <p><strong>What is the Environment?</strong> The environment is everything around us - the air, water, land, plants, animals, and even buildings!</p>
            <p><strong>Why is a Clean Environment Important?</strong></p>
            <ol>
                <li><strong>Prevents Diseases:</strong> Dirty environments have germs that can make us sick</li>
                <li><strong>Clean Water:</strong> We need clean water to drink, cook, and bathe</li>
                <li><strong>Fresh Air:</strong> Trees give us oxygen to breathe</li>
                <li><strong>Healthy Food:</strong> Plants need clean soil and water to grow food</li>
                <li><strong>Safe Homes:</strong> Animals need a clean place to live too</li>
            </ol>
            <p><strong>Think About This:</strong> When we throw trash on the ground, it can end up in rivers and oceans. Fish might eat it and get sick. Then if we eat the fish, we can get sick too!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Trees Are Superheroes</div>
                <p>One large tree can give enough oxygen for 4 people every day! Trees also clean the air by taking in dirty air and giving out clean air.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt"></i> Trash Travels</div>
                <p>A candy wrapper thrown on the ground can travel through drains, into rivers, and all the way to the ocean. It takes hundreds of years to break down!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-water"></i> Water is Life</div>
                <p>Our bodies are about 60% water. We can only live about 3 days without water. That's why keeping water clean is so important!</p>
            </div>
        `,
        taskInstructions: "List reasons to care for the environment and complete a matching activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Why Care for the Environment?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write or draw 2 reasons why a clean environment is important:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Action to the Result</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines to connect:
                    <div style="margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Planting trees</div>
                                <div>• Picking up litter</div>
                                <div>• Keeping water clean</div>
                                <div>• Recycling</div>
                            </div>
                            <div>
                                <div>→ Animals stay healthy</div>
                                <div>→ More oxygen in the air</div>
                                <div>→ Less trash in the environment</div>
                                <div>→ Less germs and disease</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw a Clean vs. Dirty Environment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one picture of a clean environment and one of a dirty environment:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>
                            <strong>Clean Environment</strong>
                            <div class="drawing-area" style="height: 120px; border: 2px solid green;"></div>
                        </div>
                        <div>
                            <strong>Dirty Environment</strong>
                            <div class="drawing-area" style="height: 120px; border: 2px solid red;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look around your home or neighborhood. Draw one thing that is clean and one thing that is dirty.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Environmental Care",
        subtopic: "Hands-On Activities: Planting, Picking Litter, Disposing of Waste",
        lessonContent: `
            <p>Today we'll take action! We'll learn by doing - planting trees, picking up litter, and disposing of waste properly.</p>
            <p><strong>Key Question:</strong> What can WE do to help the environment?</p>
            <p><strong>Three Ways to Help Today:</strong></p>
            <ol>
                <li><strong>Planting Trees:</strong> Trees give us oxygen, provide homes for animals, and keep the air clean</li>
                <li><strong>Picking Up Litter:</strong> Trash on the ground can hurt animals and spread germs</li>
                <li><strong>Disposing of Waste Properly:</strong> Putting trash in bins keeps our community clean</li>
            </ol>
            <p><strong>Waste Sorting (Recycling Basics):</strong></p>
            <ul>
                <li><strong>Plastic bottles, bags, containers → RECYCLE</strong></li>
                <li><strong>Paper, cardboard → RECYCLE</strong></li>
                <li><strong>Food scraps, leaves → COMPOST (turns into soil)</strong></li>
                <li><strong>Glass bottles → RECYCLE or REUSE</strong></li>
            </ul>
            <p><strong>Safety First!</strong> Always wear gloves when picking up litter. Never touch sharp objects or broken glass - tell an adult instead.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Tree Planting Steps</div>
                <p>1. Dig a hole twice as wide as the roots<br>2. Place the tree in the hole<br>3. Cover roots with soil<br>4. Water the tree<br>5. Watch it grow!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> The Three R's</div>
                <p>Reduce - Use less<br>Reuse - Use again<br>Recycle - Turn into something new</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt"></i> Bin Colors</div>
                <p>Green bin = Organic waste (food scraps)<br>Blue bin = Recyclables (paper, plastic, glass)<br>Black bin = General trash</p>
            </div>
        `,
        taskInstructions: "Complete the hands-on activities and record your observations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Activity Log - Tree Planting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the tree you planted. Write one sentence about how you planted it:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Activity Log - Litter Picking</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What did you find while picking up litter? Draw or list 3 items:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How did you feel after cleaning up your area?
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Waste Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sort these items into the correct bins:
                    <div style="margin-top: 10px;">
                        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                            <div>
                                <strong>Recycle Bin</strong>
                                <div class="drawing-area" style="width: 100px; height: 80px; border: 2px solid blue;"></div>
                            </div>
                            <div>
                                <strong>Compost Bin</strong>
                                <div class="drawing-area" style="width: 100px; height: 80px; border: 2px solid green;"></div>
                            </div>
                            <div>
                                <strong>Trash Bin</strong>
                                <div class="drawing-area" style="width: 100px; height: 80px; border: 2px solid black;"></div>
                            </div>
                        </div>
                        <div style="margin-top: 10px;">Items: plastic bottle, banana peel, glass jar, candy wrapper, apple core, newspaper</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Help sort waste at home tonight. Draw one item you recycled and one item you threw away.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Environmental Care",
        subtopic: "Designing Awareness Materials (Flyers, Walks)",
        lessonContent: `
            <p>Today we'll become environmental helpers! We'll create posters and flyers to teach others how to care for our environment.</p>
            <p><strong>Key Question:</strong> How can we teach others to care for the environment?</p>
            <p><strong>Why Awareness Matters:</strong> When more people know how to help, our environment becomes cleaner and healthier for everyone!</p>
            <p><strong>Ways to Spread the Message:</strong></p>
            <ol>
                <li><strong>Flyers/Posters:</strong> Colorful pictures with short messages that teach one thing</li>
                <li><strong>Awareness Walks:</strong> Walking together with signs to show everyone how important the environment is</li>
                <li><strong>School Announcements:</strong> Sharing tips during morning assembly</li>
                <li><strong>Classroom Presentations:</strong> Showing your poster and explaining why it matters</li>
            </ol>
            <p><strong>Good Poster Tips:</strong></p>
            <ul>
                <li>Use bright colors to catch attention</li>
                <li>Write short, easy-to-read words</li>
                <li>Draw clear pictures</li>
                <li>Teach ONE main idea (like "Recycle!" or "Don't Litter!")</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paintbrush"></i> Poster Message Ideas</div>
                <p>"Keep Our School Clean!"<br>"Plant a Tree, Breathe Free"<br>"Sort Your Trash"<br>"Save Water, Save Life"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> Awareness Walk</div>
                <p>Students walk around the school or neighborhood carrying signs. Everyone sees the message and learns about caring for the environment!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Be a Teacher</div>
                <p>When you make a poster, you become a teacher! Your poster can help your family, friends, and even strangers learn to care for the Earth.</p>
            </div>
        `,
        taskInstructions: "Design an environmental awareness poster or flyer and plan an awareness message.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Design Your Poster/Flyer</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a poster that teaches people how to care for the environment. Choose ONE message:
                    <div style="margin: 10px 0; padding: 10px; background: #f0f7f0; border-radius: 8px;">
                        <strong>Choose from:</strong> Don't Litter | Recycle | Plant Trees | Save Water | Keep Our Community Clean
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Poster Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What message did you put on your poster? Why did you choose this message?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Awareness Walk Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If our class did an awareness walk, what would our signs say? Draw one sign idea:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Week Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is one new thing you learned this week about preventing diseases or caring for the environment?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What will you do at home to help the environment?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Show your poster to your family. Ask them to name one way they will help the environment. Bring your poster back on Monday to share with the class!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek8);
    console.log("grade2-mathscience-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek8);
    console.log("grade2-mathscience-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek8',
        metadata: grade2MathScienceWeek8.metadata,
        days: grade2MathScienceWeek8
    });
    console.log("grade2-mathscience-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek8 = grade2MathScienceWeek8;
console.log("grade2-mathscience-week8.js loaded and registered successfully");