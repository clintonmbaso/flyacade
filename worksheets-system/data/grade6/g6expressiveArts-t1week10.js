// Grade 6 Expressive Arts - Week 10 Data
const grade6ExpressiveArtsWeek10 = {
metadata: {
grade: 6,
subject: "Expressive Arts",
week: 10,
title: "Building Physical Fitness & Tumbling",
description: "Developing strength, agility, and foundational gymnastics skills through controlled movement and proper form"
},

monday: {
    subject: "Expressive Arts",
    topic: "Fitness: Strength and Agility Series",
    subtopic: "Form Over Speed",
    lessonContent: `
        <p>Welcome to our fitness series! Today we'll focus on building strength and agility through controlled movements. Remember: proper form matters more than how fast or how many repetitions you can do.</p>
        <p><strong>Key Concept:</strong> Doing five pushups correctly is better than ten done poorly. Good form prevents injury and builds stronger muscles.</p>
        <p><strong>Why Form Matters:</strong></p>
        <ul>
            <li>Prevents muscle strain and joint injuries</li>
            <li>Targets the right muscle groups effectively</li>
            <li>Builds healthy movement habits for life</li>
            <li>Improves performance in sports and daily activities</li>
        </ul>
        <p><strong>Four Key Movements:</strong></p>
        <ul>
            <li><strong>Pushups (Upper Body):</strong> Keep back flat, lower chest toward floor, elbows at 45° angle</li>
            <li><strong>Situps (Core):</strong> Feet flat, hands across chest or behind ears (no pulling neck), curl up slowly</li>
            <li><strong>Squats (Lower Body):</strong> Weight in heels, back straight, knees behind toes, lower like sitting in a chair</li>
            <li><strong>Ladder Runs (Cardio/Agility):</strong> Quick light feet, pump arms, stay on balls of feet, control your steps</li>
        </ul>
        <p><strong>Common Mistakes to Avoid:</strong></p>
        <ul>
            <li>Arching or sagging back during pushups</li>
            <li>Yanking on neck during situps</li>
            <li>Letting knees cave inward during squats</li>
            <li>Crossing feet or looking down during ladder drills</li>
        </ul>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-dumbbell" style="color: #4A90E2;"></i> Pushup Form Check</div>
            <p>Instead of dropping your belly and looking up, keep your body in a straight line from head to heels. Imagine a board resting on your back!</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-heartbeat"></i> Squat Form Check</div>
            <p>Pretend you're sitting back onto a chair that's just behind you. Keep your chest up and weight in your heels—can you wiggle your toes?</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-shoe-prints"></i> Ladder Run Form Check</div>
            <p>Stay light and quick! Imagine you're running on hot sand or tapping on a drum with your feet. Eyes forward, not down.</p>
        </div>
    `,
    taskInstructions: "Practice identifying proper form and track your personal fitness progress through these activities.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> Look at the "Form Fixer" scenarios. Identify the mistake and explain how to correct it:
            <div style="margin-top: 15px;">
                <div class="scenario-box" style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #FF6B6B;">
                    <strong>Scenario A:</strong> Jamal is doing pushups with his back sagging toward the floor and his head looking up at the ceiling.
                </div>
                <div class="answer-space" style="height: 60px; margin-bottom: 15px;"></div>
                
                <div class="scenario-box" style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #FF6B6B;">
                    <strong>Scenario B:</strong> Priya is doing situps by hooking her feet under a heavy table and pulling hard on the back of her neck.
                </div>
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">2</span> Match each exercise with the muscle group it strengthens:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>A. Pushups ___</div>
                <div>B. Situps ___</div>
                <div>C. Squats ___</div>
                <div>D. Ladder runs ___</div>
                <div style="margin-top: 10px;">
                    <em>Muscle Groups: 1. Legs 2. Heart/Lungs 3. Arms/Chest 4. Stomach</em>
                </div>
            </div>
            <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
        </div>
        
        <div class="task-item">
            <span class="task-number">3</span> Fitness Circuit Tracker: Perform each exercise for 40 seconds, rest 20 seconds, repeat twice. Record your counts below:
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
                    <strong>🔵 Round 1</strong>
                    <div>Pushups: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                    <div>Situps: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                    <div>Squats: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                    <div>Ladder runs: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                </div>
                <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
                    <strong>🔵 Round 2</strong>
                    <div>Pushups: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                    <div>Situps: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                    <div>Squats: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                    <div>Ladder runs: <span style="border-bottom: 1px dashed #999; display: inline-block; width: 80px;"> </span></div>
                </div>
            </div>
            <p style="margin-top: 15px; font-style: italic;">Did your second round improve? What helped you maintain good form?</p>
            <div class="answer-space" style="height: 60px;"></div>
        </div>
        
        <div class="task-item">
            <span class="task-number">4</span> How does building strength and agility help you in daily life? Give three examples:
            <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
        </div>
        
        <div class="task-item">
            <span class="task-number">5</span> Design a 3-exercise "Mini Circuit" for a classmate. Include one upper body, one core, and one lower body exercise:
            <div style="display: flex; gap: 15px; margin-top: 10px; flex-wrap: wrap;">
                <div style="padding: 15px; border: 2px dashed #4A90E2; border-radius: 8px; flex: 1;">
                    <p style="text-align: center;"><strong>Upper Body</strong></p>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div style="padding: 15px; border: 2px dashed #4A90E2; border-radius: 8px; flex: 1;">
                    <p style="text-align: center;"><strong>Core</strong></p>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div style="padding: 15px; border: 2px dashed #4A90E2; border-radius: 8px; flex: 1;">
                    <p style="text-align: center;"><strong>Lower Body</strong></p>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        </div>
    `,
    homework: "Practice 10 pushups and 15 squats with proper form at home. Ask a family member to check your form and sign your notebook.",
    homeworkDue: "Thursday"
},

thursday: {
    subject: "Expressive Arts",
    topic: "Gymnastics: Tumbling Activities",
    subtopic: "Safe Takeoffs, Landings, and Supports",
    lessonContent: `
        <p>Today we begin our journey into gymnastics! Tumbling means controlled floor movements that build strength, balance, and body awareness. Safety is our number one priority.</p>
        <p><strong>Key Concept:</strong> Every gymnastic movement begins with a safe takeoff and ends with a controlled landing. Master these foundations first.</p>
        <p><strong>The Motorcycle Landing:</strong></p>
        <ul>
            <li>Knees bend deeply to absorb impact (like motorcycle shock absorbers)</li>
            <li>Arms extend forward for balance (like handlebars)</li>
            <li>Feet shoulder-width apart for stability</li>
            <li>Eyes forward, chest up</li>
            <li>Land quietly—soft landings mean controlled landings</li>
        </ul>
        <p><strong>Static Supports (Building Core Strength):</strong></p>
        <ul>
            <li><strong>Hand Belly Support (Plank):</strong> Body in straight line, weight on hands and toes, core tight, hold steady</li>
            <li><strong>Headstand Prep (Tripod):</strong> Form triangle with hands and top of head on mat, hips lifted, weight evenly distributed—do not kick up yet</li>
        </ul>
        <p><strong>Basic Tumbling Skills:</strong></p>
        <ul>
            <li><strong>Forward Roll:</strong> Start in squat, hands flat, tuck chin to chest (look at belly button!), push with feet, roll along curved spine—not flat back</li>
            <li><strong>Log Roll:</strong> Arms overhead or at sides, body straight, roll sideways across mat</li>
        </ul>
        <p><strong>Two-Footed Takeoff:</strong> Push off evenly from both feet, swing arms forward and up for height, land in motorcycle position</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-motorcycle" style="color: #FF6B6B;"></i> Motorcycle Landing</div>
            <p>Imagine you're riding a dirt bike over a jump. When you land, your knees and hips bend deeply to cushion the landing. Your arms reach forward to keep you balanced.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-user-shield"></i> Chin Tuck for Forward Roll</div>
            <p>Place a small beanbag or soft object between your chin and chest. Try to keep it there through your entire forward roll. This protects your neck!</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-cube"></i> Tripod Headstand Prep</div>
            <p>Your head and two hands form a triangle on the mat. Walk your feet toward your elbows, lift one foot at a time to practice balance—no kicking up until your teacher says so!</p>
        </div>
    `,
    taskInstructions: "Practice foundational tumbling skills and demonstrate understanding of safe techniques through these activities.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Landing Practice</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Draw and label the "Motorcycle Landing" position. Include at least 4 body position labels:
                <div class="drawing-area" style="height: 200px; margin-top: 15px; border: 2px solid #4A90E2; background-color: #f8fbff;">
                    <p style="text-align: center; color: #4A90E2; padding-top: 80px;">Draw your landing position here. Show knee bend, arm position, and foot placement.</p>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Tumbling Skills Check</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Number these forward roll steps in the correct order (1-5):
                <div style="margin-left: 20px; margin-top: 15px;">
                    <div>___ Tuck your chin to your chest</div>
                    <div>___ Push off with your feet</div>
                    <div>___ Stand up to finish</div>
                    <div>___ Roll forward along your curved back</div>
                    <div>___ Place hands flat on the mat, shoulder-width apart</div>
                </div>
                <div class="answer-space" style="height: 30px; margin-top: 10px;"></div>
            </div>
            
            <div class="task-item">
                <span class="task-number">3</span> Why is core strength important for gymnastics? Give two reasons:
                <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Safety First</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Identify the safety rule being broken in each scenario:
                <div style="margin-top: 15px;">
                    <div class="scenario-box" style="background-color: #fff9e6; padding: 15px; margin: 10px 0; border-left: 4px solid #FFB74D;">
                        <strong>Scenario A:</strong> Keisha attempts a forward roll with her chin lifted, looking at the ceiling.
                    </div>
                    <div class="answer-space" style="height: 50px;"></div>
                    
                    <div class="scenario-box" style="background-color: #fff9e6; padding: 15px; margin: 10px 0; border-left: 4px solid #FFB74D;">
                        <strong>Scenario B:</strong> Marcus tries to kick up into a headstand without first practicing the tripod position.
                    </div>
                    <div class="answer-space" style="height: 50px;"></div>
                    
                    <div class="scenario-box" style="background-color: #fff9e6; padding: 15px; margin: 10px 0; border-left: 4px solid #FFB74D;">
                        <strong>Scenario C:</strong> Two students roll toward each other on the same mat from opposite ends.
                    </div>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Show and Tell</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Which tumbling skill do you feel most confident about today? Describe how you perform it safely:
                <div style="display: flex; gap: 15px; margin: 15px 0; flex-wrap: wrap;">
                    <div style="padding: 10px 20px; background-color: #e3f2fd; border-radius: 30px;">⬤ Motorcycle Landing</div>
                    <div style="padding: 10px 20px; background-color: #e3f2fd; border-radius: 30px;">⬤ Plank/Hold</div>
                    <div style="padding: 10px 20px; background-color: #e3f2fd; border-radius: 30px;">⬤ Tripod Prep</div>
                    <div style="padding: 10px 20px; background-color: #e3f2fd; border-radius: 30px;">⬤ Forward Roll</div>
                    <div style="padding: 10px 20px; background-color: #e3f2fd; border-radius: 30px;">⬤ Log Roll</div>
                    <div style="padding: 10px 20px; background-color: #e3f2fd; border-radius: 30px;">⬤ Two-Foot Takeoff</div>
                </div>
                <div class="answer-space" style="height: 100px;"></div>
            </div>
        </div>
        
        <div class="content-box">
            <div class="task-item">
                <span class="task-number">6</span> Draw a simple "Gymnastics Safety Poster" showing one important rule we learned today:
                <div class="drawing-area" style="height: 180px; margin-top: 15px; border: 2px dashed #FF6B6B;">
                    <p style="text-align: center; color: #666; padding-top: 70px;">Include a picture and a safety caption.</p>
                </div>
            </div>
        </div>
    `,
    homework: "Practice the Motorcycle Landing at home. Find a safe soft surface (carpet, mat, grass) and perform 5 controlled landings from a small jump. Have a family member observe and sign your notebook.",
    homeworkDue: "Monday"
}
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6ExpressiveArtsWeek10);
console.log("expressiveArts-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6ExpressiveArtsWeek10);
console.log("expressiveArts-week10.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6ExpressiveArtsWeek10',
metadata: grade6ExpressiveArtsWeek10.metadata,
days: grade6ExpressiveArtsWeek10
});
console.log("expressiveArts-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ExpressiveArtsWeek10 = grade6ExpressiveArtsWeek10;
console.log("expressiveArts-week10.js loaded and registered successfully");