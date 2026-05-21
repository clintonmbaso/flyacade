// Grade 4 Social Studies - Term 1 Week 9 Data
const grade4SocialStudiesWeek9 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 1,
        week: 9,
        title: "Navigation Skills & Human Rights",
        description: "Applying compass points for navigation and recognizing fundamental human rights"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Geography",
        subtopic: "Locating Places Using Compass Points",
        lessonContent: `
            <p>Welcome to our navigation lesson! Today we'll learn how to use compass points to find our way around.</p>
            <p><strong>Key Question:</strong> How can compass points help us find places and navigate our surroundings?</p>
            <p><strong>Introduction:</strong> A compass is a tool that helps us find directions. Knowing how to use compass points helps us read maps, give directions, and navigate in unfamiliar places.</p>
            <p><strong>The 4 Cardinal Points (Main Directions):</strong></p>
            <ol>
                <li><strong>North (N):</strong> The direction to the North Pole</li>
                <li><strong>East (E):</strong> The direction where the sun rises</li>
                <li><strong>South (S):</strong> The direction to the South Pole</li>
                <li><strong>West (W):</strong> The direction where the sun sets</li>
            </ol>
            <p><strong>The 4 Inter-Cardinal Points (In-Between Directions):</strong></p>
            <ol>
                <li><strong>Northeast (NE):</strong> Between North and East</li>
                <li><strong>Southeast (SE):</strong> Between South and East</li>
                <li><strong>Southwest (SW):</strong> Between South and West</li>
                <li><strong>Northwest (NW):</strong> Between North and West</li>
            </ol>
            <p><strong>Memory Trick:</strong> "Never Eat Soggy Waffles" helps us remember North, East, South, West in clockwise order!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sun Rise and Set</div>
                <p>The sun rises in the EAST and sets in the WEST. This is a natural way to find directions without a compass!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Classroom Navigation</div>
                <p>If the teacher's desk is North, the windows are East, and the door is South, then the bookshelf in the corner might be Northeast!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marked-alt"></i> Map Reading</div>
                <p>On most maps, North is at the top, South at the bottom, East on the right, and West on the left.</p>
            </div>
        `,
        taskInstructions: "Participate in classroom navigation games and complete map exercises using all 8 direction points.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Compass Rose</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Label all 8 compass points on the compass rose below:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
                        <div style="text-align: center;">
                            <div>▲</div>
                            <div style="display: flex; justify-content: center; gap: 40px; margin: 5px 0;">
                                <div>◄</div>
                                <div style="width: 60px;">COMPASS</div>
                                <div>►</div>
                            </div>
                            <div>▼</div>
                            <p style="margin-top: 10px; color: #999;">[Draw and label N, NE, E, SE, S, SW, W, NW]</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Classroom Navigation Game</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using our classroom compass directions, answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What direction is the door from your desk? _________</div>
                        <div>b) What direction are the windows? _________</div>
                        <div>c) What is located Northeast of the teacher's desk? _________</div>
                        <div>d) If you walk West from your desk, where do you end up? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Map Exercise</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the simple map below. Use compass points to answer:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; position: relative;">
                        <div style="position: absolute; top: 10px; left: 10px;">🏠 School</div>
                        <div style="position: absolute; top: 10px; right: 10px;">🏪 Shop</div>
                        <div style="position: absolute; bottom: 10px; left: 10px;">🏥 Hospital</div>
                        <div style="position: absolute; bottom: 10px; right: 10px;">🏘️ Homes</div>
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">⛪ Park</div>
                        <p style="position: absolute; bottom: -30px; left: 0; color: #999;">[Map: School (NW), Shop (NE), Hospital (SW), Homes (SE), Park (Center)]</p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 40px;">
                        <div>a) What is located Northwest of the park? _________</div>
                        <div>b) What direction would you travel to go from the hospital to the shop? _________</div>
                        <div>c) What is Southeast of the park? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Give Directions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write directions from your desk to the school library using compass points:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple map of your bedroom or home. Label the compass directions (North, East, South, West) based on where the sun rises.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Civics",
        subtopic: "Introduction to Human Rights",
        lessonContent: `
            <p>Today we'll learn about human rights - the basic rights and freedoms that belong to every person in the world!</p>
            <p><strong>Key Question:</strong> What rights does every person have just because they are human?</p>
            <p><strong>Introduction:</strong> Human rights are like rules that protect everyone. They make sure all people are treated fairly and with respect, no matter where they come from, what they look like, or what they believe.</p>
            <p><strong>Five Core Human Rights We Will Explore:</strong></p>
            <ol>
                <li><strong>Right to Life:</strong> Every person has the right to live and be safe from harm. No one should hurt or kill another person.</li>
                <li><strong>Right to Food:</strong> Every person has the right to have enough nutritious food to eat. No one should go hungry.</li>
                <li><strong>Right to Health:</strong> Every person has the right to medical care and to be as healthy as possible. This includes clean water and medicine when sick.</li>
                <li><strong>Right to Education:</strong> Every child has the right to go to school and learn. Education helps people build better lives.</li>
                <li><strong>Right to Shelter:</strong> Every person has the right to a safe place to live. This includes protection from weather and danger.</li>
            </ol>
            <p><strong>Who Protects Human Rights?</strong> Governments, communities, and individuals all have a role in making sure human rights are respected.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Right to Food in Action</div>
                <p>School lunch programs help make sure every child gets at least one healthy meal each day, protecting their right to food.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader"></i> Right to Education Worldwide</div>
                <p>In many countries, laws require children to attend school because education is seen as a fundamental right.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Everyone's Responsibility</div>
                <p>If you see someone being treated unfairly, speaking up and telling a trusted adult helps protect that person's human rights.</p>
            </div>
        `,
        taskInstructions: "Identify and discuss the core human rights including Right to Life, Food, Health, Education, and Shelter.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Matching Human Rights</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each situation to the human right it protects:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Going to school every day</div>
                                <div>• Visiting a doctor when sick</div>
                                <div>• Living in a house with a roof</div>
                                <div>• Having enough rice and vegetables</div>
                                <div>• Being kept safe from harm</div>
                            </div>
                            <div>
                                <div>→ Right to ________</div>
                                <div>→ Right to ________</div>
                                <div>→ Right to ________</div>
                                <div>→ Right to ________</div>
                                <div>→ Right to ________</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Class Discussion Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer the following questions based on our discussion:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Why is the Right to Education important for children?</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) What might happen if someone does not have access to clean water?</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) How does having a safe home help a child do well in school?</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Rights Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read each scenario. Which human right is being respected or violated?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> Maria's family receives food assistance so no one goes hungry.</div>
                        <div>Right being respected: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>Scenario 2:</strong> A community builds a new well so everyone has clean drinking water.</div>
                        <div>Right being respected: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>Scenario 3:</strong> A child is not allowed to attend school because of their family's situation.</div>
                        <div>Right being violated: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Rights Promise</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one way you can help respect or protect human rights in your school or community:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a poster showing one human right (Right to Life, Food, Health, Education, or Shelter). Include a picture and a short sentence explaining the right.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek9);
    console.log("grade4-socialstudies-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek9);
    console.log("grade4-socialstudies-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek9',
        metadata: grade4SocialStudiesWeek9.metadata,
        days: grade4SocialStudiesWeek9
    });
    console.log("grade4-socialstudies-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek9 = grade4SocialStudiesWeek9;
console.log("grade4-socialstudies-week9.js loaded and registered successfully");