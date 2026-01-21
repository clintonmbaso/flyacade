// Grade 3 English - Week 3 Data (Our Community)
const grade3EnglishWeek3 = {
    metadata: {
        grade: 3,
        subject: "English",
        week: 3,
        title: "Exploring Our Community — Places, People, and Activities",
        description: "Learning about community locations, the people who work/visit there, and the activities that happen"
    },
    
    monday: {
        subject: "English",
        topic: "People in Our Community",
        subtopic: "Identifying people associated with community locations",
        lessonContent: `
            <p>Welcome to our community exploration! Today we will learn about the people we find in different places around our community.</p>
            <p><strong>Key Concept:</strong> Every place in a community has specific people who work or gather there.</p>
            <p><strong>Let's think about our community:</strong></p>
            <ul>
                <li>Where do we go when we are sick?</li>
                <li>Where do we go to learn?</li>
                <li>Where do we go to pray or worship?</li>
            </ul>
            <p><strong>Community Places and People:</strong></p>
            <ul>
                <li><strong>School:</strong> Pupils (students) and teachers</li>
                <li><strong>Hospital:</strong> Doctors, nurses, and patients</li>
                <li><strong>Church/Place of Worship:</strong> Elders, pastors, priests, and members</li>
            </ul>
            <p><strong>Why is this important?</strong> Knowing who we might meet in different places helps us understand our community better!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school" style="color: #4CAF50;"></i> School People</div>
                <p>"In our school, we find teachers who help us learn and pupils who come to study."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hospital" style="color: #f44336;"></i> Hospital People</div>
                <p>"At the hospital, doctors and nurses take care of patients who need treatment."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> "Who Am I?" Game!</div>
                <p>Let's play a guessing game! I'll describe a person, and you guess who they are and where they work.</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice identifying community people.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Play "Who Am I?" Match the description with the correct person:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"I look after people who are sick in a hospital." → ☐ Doctor/Nurse</div>
                    <div>"I come to school every day to learn new things." → ☐ Pupil</div>
                    <div>"I lead prayers at a place of worship." → ☐ Pastor/Priest</div>
                    <div>"I teach children how to read and write." → ☐ Teacher</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw three circles. In each circle, write a community place and list people found there:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div class="drawing-area" style="height: 120px; border-radius: 50%; border: 2px solid #4CAF50;"></div>
                        <div style="margin-top: 5px;">Place: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>People: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div class="drawing-area" style="height: 120px; border-radius: 50%; border: 2px solid #f44336;"></div>
                        <div style="margin-top: 5px;">Place: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>People: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div class="drawing-area" style="height: 120px; border-radius: 50%; border: 2px solid #673AB7;"></div>
                        <div style="margin-top: 5px;">Place: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>People: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Write the names of two people you might find at each place:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>School: <span class="answer-space" style="width: 150px;"></span> and <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Hospital: <span class="answer-space" style="width: 150px;"></span> and <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Church: <span class="answer-space" style="width: 150px;"></span> and <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
        `,
        homework: "Look around your community. Name one place you visit and list two people you might find there.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "What Happens There?",
        subtopic: "Describing activities at community locations",
        lessonContent: `
            <p>Today we will learn about what actually happens at different places in our community!</p>
            <p><strong>Key Concept:</strong> Different community locations have different activities and services.</p>
            <p><strong>Let's review our community places:</strong></p>
            <ul>
                <li>What do you do when you get to the hospital?</li>
                <li>What happens at a place of worship?</li>
                <li>Why do we go to the police station?</li>
                <li>What is the main activity at school?</li>
            </ul>
            <p><strong>Community Activities:</strong></p>
            <ul>
                <li><strong>Hospitals:</strong> Treatment and care</li>
                <li><strong>Places of Worship:</strong> Praying and singing</li>
                <li><strong>Police Station:</strong> Providing security and help</li>
                <li><strong>School:</strong> Teaching and learning</li>
            </ul>
            <p><strong>Sentence Structure:</strong> We use "We go to the [Place] to [Activity]."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat" style="color: #f44336;"></i> Hospital Activity</div>
                <p>"We go to the hospital for treatment and care when we are sick."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-praying" style="color: #673AB7;"></i> Worship Activity</div>
                <p>"We go to the church for praying and singing with our community."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Action Sentence Game!</div>
                <p>Let's create "Action Sentences" together! I'll name a place, and you tell me what we do there.</p>
            </div>
        `,
        taskInstructions: "Practice matching community places with their activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match Activities to Places</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Connect each place with its main activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Hospital → ☐ Teaching and learning</div>
                        <div>Police Station → ☐ Treatment and care</div>
                        <div>School → ☐ Providing security and help</div>
                        <div>Church → ☐ Praying and singing</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write four sentences using "We go to the...":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>We go to the <span class="answer-space" style="width: 100px;"></span> for <span class="answer-space" style="width: 120px;"></span>.</div>
                        <div>We go to the <span class="answer-space" style="width: 100px;"></span> for <span class="answer-space" style="width: 120px;"></span>.</div>
                        <div>We go to the <span class="answer-space" style="width: 100px;"></span> for <span class="answer-space" style="width: 120px;"></span>.</div>
                        <div>We go to the <span class="answer-space" style="width: 100px;"></span> for <span class="answer-space" style="width: 120px;"></span>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Picture Activity Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line from each picture to the correct activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Picture of books and chalkboard → <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Picture of police badge → <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Picture of hospital bed → <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Picture of people singing → <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Your Community Visit</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Think about a place you visited last week. What did you do there?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Place: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Activity: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write two new sentences about community places and activities not mentioned in class today.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "The Police Station and Security",
        subtopic: "Understanding the role of police in community safety",
        lessonContent: `
            <p>Today we will focus on one very important community place: the police station!</p>
            <p><strong>Key Concept:</strong> Police stations help keep our community safe and peaceful.</p>
            <p><strong>Let's think about police officers:</strong></p>
            <ul>
                <li>Have you ever seen a police officer?</li>
                <li>What were they doing? (directing traffic, helping people, etc.)</li>
                <li>Where do police officers work from?</li>
            </ul>
            <p><strong>About Police Stations:</strong></p>
            <ul>
                <li>Police officers work at the station</li>
                <li>They keep the community peaceful</li>
                <li>They provide security (being safe from danger)</li>
                <li>They help people who have problems</li>
            </ul>
            <p><strong>Important Vocabulary:</strong></p>
            <ul>
                <li><strong>Officer:</strong> A police officer</li>
                <li><strong>Report:</strong> To tell the police about a problem</li>
                <li><strong>Help:</strong> What police do for people</li>
                <li><strong>Safety:</strong> Being protected from harm</li>
            </ul>
            <p><strong>Why are police stations important?</strong> They make sure everyone in our community feels safe!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt" style="color: #2196F3;"></i> Police Station Role</div>
                <p>"Police officers at the station provide security and help to our community."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-helping" style="color: #4CAF50;"></i> Helping Example</div>
                <p>"If someone loses their bag, they can go to the police station to report it and get help."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Role-Play Time!</div>
                <p>Let's act out a scenario where someone needs help from a police officer at the station.</p>
            </div>
        `,
        taskInstructions: "Practice using language about police stations and community security.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Role-Play Scenario</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With a partner, act out this scenario:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div><strong>Community Member:</strong> "Excuse me, Officer. I lost my bag."</div>
                        <div><strong>Police Officer:</strong> "Don't worry. I will help you. Let me take a report."</div>
                        <div>Practice the conversation and add two more lines:</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Why Police Stations Are Important</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write two sentences explaining why the police station is important:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 300px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 300px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Safety Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture showing a police officer helping keep the community safe:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My picture shows: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vocabulary Match</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match the word with its meaning:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Security → ☐ A police officer</div>
                        <div>Officer → ☐ Being safe from danger</div>
                        <div>Report → ☐ What police do for people</div>
                        <div>Help → ☐ To tell police about a problem</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Community Safety Tips</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle things police officers do to keep us safe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Direct traffic</div>
                        <div>☐ Help lost children</div>
                        <div>☐ Teach math lessons</div>
                        <div>☐ Stop crimes</div>
                        <div>☐ Bake cakes</div>
                        <div>☐ Patrol the neighborhood</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask a family member what they know about police stations. Write down one thing they tell you.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Putting It All Together",
        subtopic: "Using complete language to describe community places",
        lessonContent: `
            <p>Today is our community celebration day! We'll use everything we learned to become community experts.</p>
            <p><strong>Key Concept:</strong> We can describe any community place by talking about who is there and what happens there.</p>
            <p><strong>Let's review what we learned:</strong></p>
            <ul>
                <li>Different places in our community</li>
                <li>The people who work or visit there</li>
                <li>The activities that happen at each place</li>
                <li>Special focus on police stations and security</li>
            </ul>
            <p><strong>Today's Challenge:</strong> You will be a "Community Tour Guide"!</p>
            <p><strong>As a tour guide, you need to know:</strong></p>
            <ol>
                <li>The name of the place</li>
                <li>Who is found there</li>
                <li>What happens there</li>
            </ol>
            <p><strong>Example:</strong> "This is a school. You can find teachers and pupils here. They do teaching and learning."</p>
            <p>Let's practice together before you create your own community profile!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marked-alt" style="color: #FF9800;"></i> Community Tour Guide</div>
                <p>"Welcome to our hospital! Here you will find doctors, nurses, and patients. People come here for treatment and care."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #4CAF50;"></i> Complete Description</div>
                <p>"This is a police station. Police officers work here to provide security and help. They keep our community safe."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Shout-Out Game!</div>
                <p>When I point to a place name, shout out one group of people and one activity from that place!</p>
            </div>
        `,
        taskInstructions: "Create a complete community profile for one place.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shout-Out Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> When teacher says the place, write one group of people and one activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Hospital → People: <span class="answer-space" style="width: 120px;"></span> Activity: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>School → People: <span class="answer-space" style="width: 120px;"></span> Activity: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Police Station → People: <span class="answer-space" style="width: 120px;"></span> Activity: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Church → People: <span class="answer-space" style="width: 120px;"></span> Activity: <span class="answer-space" style="width: 120px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose Your Community Place</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle one community place you want to describe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ School ☐ Hospital ☐ Police Station ☐ Church ☐ Other: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Community Profile</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the profile for your chosen place:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #FFF3E0; border-radius: 5px;">
                        <div style="font-weight: bold; text-align: center;">My Community Profile</div>
                        <div style="margin-top: 10px;">
                            <div>Place Name: <span class="answer-space" style="width: 200px;"></span></div>
                            <div>Who is found there: <span class="answer-space" style="width: 250px;"></span></div>
                            <div>What happens there: <span class="answer-space" style="width: 250px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Community Place</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your chosen community place with people and activities:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>In my picture, I show: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Present Your Profile</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write three sentences to present your community place to the class:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 300px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 300px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 300px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a community profile for a different place than the one you chose in class. Share it with your family.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek3);
    console.log("english-week3-community.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek3);
    console.log("english-week3-community.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek3',
        metadata: grade3EnglishWeek3.metadata,
        days: grade3EnglishWeek3
    });
    console.log("english-week3-community.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek3 = grade3EnglishWeek3;
console.log("english-week3-community.js loaded and registered successfully");