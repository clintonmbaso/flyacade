// Grade 4 Social Studies - Term 2 Week 9 Data
const grade4SocialStudiesWeek9 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 2,
        week: 9,
        title: "Transportation & Communication",
        description: "Exploring appropriate transportation choices and traditional communication methods"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Transportation",
        subtopic: "Choosing Appropriate Transportation",
        lessonContent: `
            <p>Welcome! Today we'll learn how to choose the best way to get from one place to another.</p>
            <p><strong>Key Question:</strong> How do you decide whether to walk, cycle, or take a bus?</p>
            <p><strong>Introduction:</strong> Different situations call for different types of transportation. The best choice depends on distance, cost, time, and impact on the environment.</p>
            <p><strong>Factors to Consider When Choosing Transportation:</strong></p>
            <ol>
                <li><strong>Distance:</strong> How far do you need to travel?</li>
                <li><strong>Cost:</strong> How much money will it take?</li>
                <li><strong>Time:</strong> How quickly do you need to arrive?</li>
                <li><strong>Environmental Impact:</strong> Does it create pollution?</li>
                <li><strong>Safety:</strong> Is the route safe for walking or cycling?</li>
            </ol>
            <p><strong>Comparing Transportation Options:</strong></p>
            <ul>
                <li><strong>Walking:</strong> Best for short distances (under 1 km), free, healthy, no pollution</li>
                <li><strong>Cycling:</strong> Good for medium distances (1-5 km), low cost, healthy, no pollution</li>
                <li><strong>Public Transit (Bus/Train):</strong> Good for longer distances, moderate cost, less pollution than cars</li>
                <li><strong>Car/Taxi:</strong> Convenient for any distance, higher cost, more pollution</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking"></i> Scenario 1: Going to School</div>
                <p>If you live 500 meters from school, walking is best! It's free, healthy, and takes about 5-10 minutes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bus"></i> Scenario 2: Crossing Town</div>
                <p>If you need to travel 10 km across the city, taking a bus is often better than walking (which would take hours) or a taxi (which costs more).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Thinking Green</div>
                <p>Walking and cycling create zero pollution. Taking public transit creates less pollution per person than everyone driving separate cars.</p>
            </div>
        `,
        taskInstructions: "Evaluate transportation scenarios and make logical decisions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Trip to the Best Transport</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match each situation with the best transportation choice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Going to a neighbor's house (50 meters)</div>
                                <div>• Going to a mall 8 km away</div>
                                <div>• Going to a park 2 km away</div>
                                <div>• Going to a hospital 15 km away</div>
                                <div>• Going to a nearby shop (200 meters)</div>
                            </div>
                            <div>
                                <div>→ Walk</div>
                                <div>→ Cycle</div>
                                <div>→ Bus</div>
                                <div>→ Car/Ambulance (if emergency)</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Decision Making Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each scenario and explain your transportation choice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario A:</strong> You need to carry heavy groceries home from a store 400 meters away.</div>
                        <div>Best transport: _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario B:</strong> You are late for school and live 1.5 km away.</div>
                        <div>Best transport: _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario C:</strong> You want to exercise and visit a friend who lives 3 km away.</div>
                        <div>Best transport: _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Environmental Impact</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List the transportation methods from MOST pollution to LEAST pollution:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it better for the environment to take a bus instead of everyone driving separate cars?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Your Daily Travel Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Describe how you will travel to school tomorrow. Is it the best choice? Why or why not?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Observe how family members travel to work or school. Ask them why they chose that method. Write down two observations.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Communication",
        subtopic: "Traditional Communication",
        lessonContent: `
            <p>Today we'll travel back in time to discover how people communicated before smartphones and the internet!</p>
            <p><strong>Key Question:</strong> How did people send messages before cell phones and email?</p>
            <p><strong>Introduction:</strong> Long ago, people used creative and fascinating methods to communicate across distances. Let's explore these traditional communication systems!</p>
            <p><strong>Traditional Communication Methods:</strong></p>
            <ol>
                <li><strong>Messengers (Human Couriers):</strong> People who walked or rode horses to deliver messages by hand</li>
                <li><strong>Talking Drums:</strong> African drumming patterns that could send coded messages over long distances</li>
                <li><strong>Smoke Signals:</strong> Using smoke from fires to send simple messages across valleys</li>
                <li><strong>Written Letters:</strong> Handwritten messages delivered by postal services or messengers</li>
                <li><strong>Telegraph/Telex:</strong> Machines that sent typed messages as electrical signals through wires</li>
                <li><strong>Landline Telephones:</strong> Phones connected by wires that allowed people to speak directly</li>
            </ol>
            <p><strong>How They Worked:</strong></p>
            <ul>
                <li><strong>Messengers</strong> carried written or spoken messages, sometimes traveling for days</li>
                <li><strong>Talking drums</strong> imitated the tone and rhythm of spoken language</li>
                <li><strong>Telegraphs</strong> used Morse code (dots and dashes) to send messages instantly over wires</li>
                <li><strong>Landline phones</strong> converted sound into electrical signals sent through copper wires</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drum"></i> Talking Drums of Africa</div>
                <p>In West Africa, drummers could send messages up to 20 km away! Different rhythms meant different words. "Come home" sounded different from "Enemy approaching."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-envelope"></i> Pony Express</div>
                <p>In the 1860s, messengers on horseback carried mail across America. They changed horses every 20 km and could deliver a letter from Missouri to California in just 10 days!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-phone"></i> Party Lines</div>
                <p>Early landline phones used "party lines" where several families shared one phone line. You could accidentally listen to your neighbor's conversation!</p>
            </div>
        `,
        taskInstructions: "Explore traditional communication methods and compare them to modern systems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Communication Method</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each description to the correct traditional communication method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Uses coded drum beats</div>
                                <div>• Carries messages on foot or horseback</div>
                                <div>• Uses smoke from fires</div>
                                <div>• Types messages sent through wires</div>
                                <div>• Allows live voice conversation</div>
                                <div>• Handwritten on paper and mailed</div>
                            </div>
                            <div>
                                <div>→ Messenger</div>
                                <div>→ Talking Drums</div>
                                <div>→ Smoke Signals</div>
                                <div>→ Letter</div>
                                <div>→ Telex/Telegraph</div>
                                <div>→ Landline Phone</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Advantages and Disadvantages</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the table comparing traditional vs. modern communication:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Method</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Advantage</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Disadvantage</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Messenger</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 60px;"> </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 60px;"> </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Talking Drums</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 60px;"> </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 60px;"> </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Landline Phone</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 60px;"> </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 60px;"> </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How is sending a text message today different from sending a messenger 200 years ago?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think talking drums were effective in Africa but might not work well in a noisy city?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Creative Application</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Imagine you live 200 years ago. You need to send an urgent message to a relative in another village 15 km away. Which method would you choose and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Which traditional communication method would you most want to try? Explain why.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask an older family member or neighbor: 'How did people communicate when you were growing up?' Write down three interesting things you learn.",
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