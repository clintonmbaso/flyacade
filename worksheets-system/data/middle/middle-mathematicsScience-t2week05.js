// Middle Grades - Term 2 Week 5 Data: Functions & Care of Body Parts
const middleGradeWeek5 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 2,
        week: 5,
        title: "Functions & Care of Body Parts",
        description: "Exploring how body parts help us see, eat, walk, and maintain personal hygiene"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Human Body",
        subtopic: "Eyes for Seeing",
        lessonContent: `
            <p>Welcome! Today we'll explore one of our most amazing senses - sight! We'll learn how our eyes help us see the world around us.</p>
            <p><strong>Key Question:</strong> How do our eyes help us understand and navigate our world?</p>
            <p><strong>Introduction:</strong> Our eyes are like amazing cameras. They capture light and send signals to our brain, which creates the images we see. Without our eyes, we would need to rely entirely on our other senses.</p>
            <p><strong>What Our Eyes Do:</strong></p>
            <ol>
                <li><strong>Detect Light:</strong> Eyes sense light and darkness</li>
                <li><strong>See Colors:</strong> Special cells in our eyes detect different colors</li>
                <li><strong>Judge Distance:</strong> Two eyes work together to tell how far away things are</li>
                <li><strong>Track Movement:</strong> Eyes can follow moving objects</li>
                <li><strong>Protect Us:</strong> Eyes help us see danger and stay safe</li>
            </ol>
            <p><strong>Fun Fact:</strong> Your eyes are about the same size from birth to adulthood! Unlike your hands and feet, your eyes don't grow much bigger as you get older.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Light & Sight</div>
                <p>Without light, we cannot see! In complete darkness, your eyes cannot detect any light waves, so everything looks black.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Blink Fact</div>
                <p>The average person blinks about 15-20 times per minute. That's over 1,200 times per hour! Blinking keeps our eyes moist and clean.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-universal-access"></i> Other Senses</div>
                <p>When we close our eyes, our other senses (hearing, touch, smell) become stronger. Try it - close your eyes and notice what you can hear!</p>
            </div>
        `,
        taskInstructions: "Complete interactive exercises exploring sight and try activities with eyes closed.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Eyes Open Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom or home. List 5 things you can see right now:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What colors do you notice most? Why do you think colors are important?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Eyes Closed Experience</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Close your eyes for 30 seconds (your teacher will time this). Then answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What sounds did you hear? _________</div>
                        <div>• How did it feel to have your eyes closed? _________</div>
                        <div>• What was different from when your eyes were open? _________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Guessing Game</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> With a partner, close your eyes and have them place an object in your hand. Try to guess what it is using only touch:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Was it easier or harder to identify objects without your eyes? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why are our eyes important? What would be different if we couldn't see?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "With a family member, close your eyes and try to identify 5 objects by touch alone. Write down what you learned about how sight helps us.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Human Body",
        subtopic: "Hands for Eating & Writing",
        lessonContent: `
            <p>Today we'll explore our amazing hands and discover all the important things they help us do every day!</p>
            <p><strong>Key Question:</strong> How do our hands help us eat, write, and interact with our world?</p>
            <p><strong>Introduction:</strong> Our hands are incredible tools! With 27 bones and a complex system of muscles and tendons, each hand can grip, pinch, hold, and manipulate objects with amazing precision.</p>
            <p><strong>What Our Hands Do:</strong></p>
            <ol>
                <li><strong>Hold Food:</strong> Our fingers grip utensils and hold food while we eat</li>
                <li><strong>Pick Up Objects:</strong> Thumb and fingers work together to grasp pencils, toys, and tools</li>
                <li><strong>Feel Texture:</strong> Fingertips have many nerve endings that sense temperature and texture</li>
                <li><strong>Express Ourselves:</strong> We use hands to wave, point, and gesture</li>
                <li><strong>Create:</strong> Writing, drawing, building, and making things all require our hands</li>
            </ol>
            <p><strong>The Amazing Thumb:</strong> Humans have opposable thumbs - meaning our thumbs can touch each of our other fingers. This is what allows us to grip things so well!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Eating Tools</div>
                <p>Your fingers work like tools when you eat. You can pinch (holding a chip), scoop (using a spoon), or wrap your hand around a cup to drink.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Pencil Grip</div>
                <p>Holding a pencil correctly uses three fingers: thumb, index, and middle finger. This is called a "tripod grip" and gives you the most control for writing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Finger Facts</div>
                <p>Your fingers don't have muscles! The muscles that move your fingers are actually in your palm and forearm, connected by tendons.</p>
            </div>
        `,
        taskInstructions: "Discuss and practice how we use fingers to hold food and pick up pencils.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hand Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at your hand. Count your fingers (including thumb!):
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Wiggle each finger. Which finger is hardest to move by itself?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Eating with Our Hands</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Name 3 foods you eat using only your fingers (no utensils):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name 3 foods where you use a spoon, fork, or chopsticks:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How do your fingers help you hold these utensils?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Pencil Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Pick up a pencil. Which fingers are you using to hold it?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Practice writing your name. Then try holding the pencil with different fingers. Is it harder or easier?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> What would be difficult to do if you couldn't use your hands?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice holding a pencil correctly for 5 minutes while drawing a picture. Ask a family member to watch your hand position.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Human Body",
        subtopic: "Legs for Walking",
        lessonContent: `
            <p>Today we'll discover how our amazing legs help us walk, run, hop, and move through our world!</p>
            <p><strong>Key Question:</strong> How do our legs work together to help us move safely?</p>
            <p><strong>Introduction:</strong> Your legs are the strongest limbs in your body! They support your entire weight and work together to help you stand, walk, run, jump, and balance.</p>
            <p><strong>What Our Legs Do:</strong></p>
            <ol>
                <li><strong>Walking:</strong> Alternating leg movements move your body forward</li>
                <li><strong>Running:</strong> Faster leg movements with both feet leaving the ground</li>
                <li><strong>Hopping:</strong> Using one leg to push off and land</li>
                <li><strong>Jumping:</strong> Using both legs to push off the ground</li>
                <li><strong>Balancing:</strong> Leg muscles constantly adjust to keep you upright</li>
            </ol>
            <p><strong>Safety First:</strong> Always pay attention to where you're going when walking, running, or hopping. Look for obstacles and watch your footing!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking"></i> Walking Pattern</div>
                <p>When you walk, your arms swing opposite to your legs. When your right leg moves forward, your left arm swings forward. This helps you balance!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> Steps Per Day</div>
                <p>The average person takes about 5,000 to 7,000 steps per day. That's about 3-4 miles! Your legs work hard every single day.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Strongest Bones</div>
                <p>The femur (thigh bone) is the longest and strongest bone in your body. It's designed to support all your weight during walking and running.</p>
            </div>
        `,
        taskInstructions: "Participate in physical activities focused on walking, hopping, and running safely.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Discussion - Before Moving</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What body parts help you walk? Name them:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Why is it important to look where you're going when you move?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Physical Activity - Walking Circuit</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Walk around the classroom or designated area. Pay attention to:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• How your feet touch the ground</div>
                        <div>• How your arms swing</div>
                        <div>• How you avoid obstacles</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Physical Activity - Hopping & Running</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Practice hopping on one foot for 5 seconds, then switch to the other foot:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which foot was easier to hop on? Why do you think that is?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Practice running in place for 10 seconds. How is running different from walking?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> List 3 safety rules for walking, running, or hopping in school:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Why is it important to move safely around others?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice walking heel-to-toe in a straight line at home. Count how many steps you can take without stepping off the line.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Personal Hygiene",
        subtopic: "Handwashing - Step by Step",
        lessonContent: `
            <p>Today we'll learn the proper way to wash our hands - one of the most important habits to stay healthy!</p>
            <p><strong>Key Question:</strong> Why is washing our hands so important, and how do we do it correctly?</p>
            <p><strong>Introduction:</strong> Our hands touch many things throughout the day - door handles, tables, toys, food, and more. Germs (tiny living things that can make us sick) can get on our hands and then enter our bodies when we touch our mouth, nose, or eyes.</p>
            <p><strong>When to Wash Your Hands:</strong></p>
            <ul>
                <li>Before eating or touching food</li>
                <li>After using the bathroom</li>
                <li>After coughing, sneezing, or blowing your nose</li>
                <li>After playing outside or with pets</li>
                <li>Before and after caring for someone who is sick</li>
            </ul>
            <p><strong>The 5 Steps of Proper Handwashing:</strong></p>
            <ol>
                <li><strong>Wet:</strong> Wet your hands with clean, running water</li>
                <li><strong>Soap:</strong> Apply soap and lather well</li>
                <li><strong>Scrub:</strong> Scrub all surfaces - palms, backs, between fingers, under nails - for at least 20 seconds</li>
                <li><strong>Rinse:</strong> Rinse hands well under clean, running water</li>
                <li><strong>Dry:</strong> Dry hands using a clean towel or air dry</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microbe"></i> Germs Are Tiny!</div>
                <p>Germs are so small you cannot see them without a microscope. That's why hands that look clean can still have germs that make you sick!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half"></i> 20 Seconds</div>
                <p>Sing "Happy Birthday" twice while scrubbing your hands. That takes about 20 seconds - the right amount of time to remove most germs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Help Others</div>
                <p>When you wash your hands, you're not just protecting yourself - you're protecting your family and friends from getting your germs too!</p>
            </div>
        `,
        taskInstructions: "Practice handwashing step by step with clean water and soap.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Before Washing - Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List 5 times during the day when you should wash your hands:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Why do you think washing with soap is better than just using water?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Step-by-Step Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Follow along with your teacher and practice each step:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ Step 1: Wet hands with clean water</div>
                        <div>□ Step 2: Apply soap and lather</div>
                        <div>□ Step 3: Scrub for 20 seconds (sing "Happy Birthday")</div>
                        <div>□ Step 4: Rinse hands well</div>
                        <div>□ Step 5: Dry with clean towel</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: After Washing - Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How did your hands feel different after washing them?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What part of handwashing was easiest? What part was hardest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create a Handwashing Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw the 5 steps of proper handwashing in order:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Teach a family member the 5 steps of proper handwashing. Watch them wash their hands and help them if they miss a step.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Personal Hygiene",
        subtopic: "Teeth & Bathing - Daily Care",
        lessonContent: `
            <p>Today we'll learn why brushing our teeth and bathing every day keeps us healthy and feeling fresh!</p>
            <p><strong>Key Question:</strong> Why do we need to brush our teeth and wash our skin every single day?</p>
            <p><strong>Why We Brush Our Teeth:</strong></p>
            <ul>
                <li><strong>Remove Plaque:</strong> Sticky film of bacteria that forms on teeth</li>
                <li><strong>Prevent Cavities:</strong> Holes in teeth caused by bacteria eating sugar</li>
                <li><strong>Fresh Breath:</strong> Removes food particles that cause bad smells</li>
                <li><strong>Healthy Gums:</strong> Prevents gums from becoming red, swollen, or bleeding</li>
            </ul>
            <p><strong>How to Brush Correctly:</strong></p>
            <ol>
                <li>Use a soft-bristled toothbrush with fluoride toothpaste</li>
                <li>Brush for 2 minutes, twice per day (morning and night)</li>
                <li>Brush all surfaces: front, back, and chewing surfaces</li>
                <li>Don't forget to brush your tongue!</li>
            </ol>
            <p><strong>Why We Bathe/Shower Daily:</strong></p>
            <ul>
                <li><strong>Remove Dirt and Sweat:</strong> Washes away the day's grime</li>
                <li><strong>Remove Dead Skin Cells:</strong> Your skin sheds millions of cells every day</li>
                <li><strong>Prevent Body Odor:</strong> Bacteria on skin create smells when they break down sweat</li>
                <li><strong>Feel Fresh:</strong> Clean skin feels and smells better</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tooth"></i> Toothbrush Time</div>
                <p>You should brush your teeth for 2 minutes, twice a day. That's 4 minutes of brushing daily - about 24 hours of brushing over a whole year!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath"></i> Skin Facts</div>
                <p>Your skin is the largest organ in your body! It covers about 2 square meters (22 square feet) and weighs about 4-5 kilograms (9-11 pounds).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Healthy Smile</div>
                <p>Taking care of your baby teeth is important too! They hold space for your adult teeth and help you chew and speak properly.</p>
            </div>
        `,
        taskInstructions: "Discuss why we brush our teeth and wash our skin daily, then create a hygiene routine chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Teeth Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> How many times a day should you brush your teeth? When?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What happens if you don't brush your teeth regularly?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why is sugar bad for your teeth?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Bathing Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to bathe or shower every day?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What body parts need extra attention when bathing?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Daily Hygiene Routine Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a chart showing your daily hygiene routine:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Time of Day</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Hygiene Activity</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Morning</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">After meals</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Evening/Night</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Hygiene Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Write a "Hygiene Pledge" - 3 promises you will make to keep your body clean and healthy:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Draw a picture showing someone practicing good hygiene (brushing teeth or bathing):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Create a weekly hygiene checklist for yourself. Include: brushing teeth (2x daily), bathing daily, washing hands before meals, and any other healthy habits.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleGradeWeek5);
    console.log("middle-grade-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleGradeWeek5);
    console.log("middle-grade-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleGradeWeek5',
        metadata: middleGradeWeek5.metadata,
        days: middleGradeWeek5
    });
    console.log("middle-grade-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleGradeWeek5 = middleGradeWeek5;
console.log("middle-grade-week5.js loaded and registered successfully");