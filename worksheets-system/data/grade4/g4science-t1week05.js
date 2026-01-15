// Grade 4 Science - Week 5 Data
const grade4ScienceWeek5 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 1,
        week: 5,
        title: "Heart Health and Pulse Science",
        description: "Understanding pulse measurement, circulatory health, and heart disease prevention"
    },
    
    monday: {
        subject: "Science",
        topic: "Measuring the Beat",
        subtopic: "Calculating pulse rate and understanding heart rate changes",
        lessonContent: `
            <p>Today we will become scientists who measure heartbeats! We'll learn how to find and measure our pulse to understand how our heart responds to different activities.</p>
            <p><strong>What is Pulse Rate?</strong> Your pulse rate tells you how many times your heart beats per minute. It's like a speedometer for your heart!</p>
            <p><strong>How to Calculate Pulse Rate:</strong></p>
            <ol>
                <li>Find your pulse at your wrist or neck</li>
                <li>Count beats for 15 seconds</li>
                <li>Multiply by 4 to get beats per minute (BPM)</li>
            </ol>
            <p><strong>Why Measure Pulse?</strong> Your heart rate changes when you move, rest, feel emotions, or get sick. Doctors use it to check if your heart is working properly.</p>
            <p><strong>Today's Experiment:</strong> We'll measure our Resting Pulse (sitting quietly) and our Active Pulse (after jumping jacks) to see how exercise affects our heart!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat"></i> Finding Your Pulse</div>
                <p>For wrist pulse: Place two fingers on the thumb side of your wrist. For neck pulse: Place two fingers gently beside your windpipe. Don't press too hard!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Math Connection</div>
                <p>If you count 20 beats in 15 seconds: 20 × 4 = 80 beats per minute. That's how we use multiplication to calculate heart rate!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Exercise Effect</div>
                <p>When you exercise, your muscles scream, "We need more oxygen!" Your heart beats faster to deliver oxygen-rich blood to your working muscles.</p>
            </div>
        `,
        taskInstructions: "Practice finding your pulse, measure your heart rate at rest and after exercise, and calculate beats per minute.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pulse Finding Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find your pulse in two different places. Circle where you found it:
                    <div style="margin-top: 10px;">
                        <input type="checkbox"> Wrist &nbsp;&nbsp;&nbsp;
                        <input type="checkbox"> Neck &nbsp;&nbsp;&nbsp;
                        <input type="checkbox"> Temple
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Describe what the pulse feels like:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Resting Pulse Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sit quietly for 1 minute, then measure:
                    <table style="width: 100%; margin-top: 10px;">
                        <tr>
                            <td>Number of beats in 15 seconds:</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                        <tr>
                            <td>Multiply by 4 = Resting BPM:</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Active Pulse Measurement</strong></p>
                <p>Do 30 seconds of jumping jacks, then measure immediately:</p>
                <div class="task-item">
                    <span class="task-number">4</span> After exercise measurement:
                    <table style="width: 100%; margin-top: 10px;">
                        <tr>
                            <td>Number of beats in 15 seconds:</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                        <tr>
                            <td>Multiply by 4 = Active BPM:</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Analysis and Math</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How much did your heart rate increase? (Active BPM minus Resting BPM):
                    <div class="answer-space" style="height: 40px; width: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why does exercise make your heart beat faster?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Measure your resting pulse rate three times today: morning, afternoon, and evening. Record if it changes and think about why.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Why Circulation Matters & What Goes Wrong",
        subtopic: "Understanding circulatory system problems and heart diseases",
        lessonContent: `
            <p>Today we'll explore what happens when our circulatory system doesn't work properly. A healthy system is vital for our entire body!</p>
            <p><strong>The Importance of Circulation:</strong> Your circulatory system delivers oxygen and nutrients to every cell in your body and removes waste. If it stops working, cells can't survive.</p>
            <p><strong>Common Heart Problems:</strong></p>
            <ul>
                <li><strong>Coronary Heart Disease:</strong> Blood vessels get clogged with fatty deposits</li>
                <li><strong>Heart Failure:</strong> The heart becomes too weak to pump effectively</li>
                <li><strong>High Blood Pressure:</strong> The heart works harder than it should</li>
            </ul>
            <p><strong>"Clogged Pipe" Demonstration:</strong> We'll use straws and clay to show how blocked arteries make the heart work harder. Just like blowing through a partially blocked straw requires more effort, a heart with clogged arteries must work harder to pump blood!</p>
            <p><strong>Why It Matters:</strong> Heart disease is a leading health problem worldwide. Understanding it helps us make healthier choices.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Clogged Arteries</div>
                <p>Imagine your blood vessels as water pipes. Fatty deposits (like cholesterol) can stick to the pipe walls, narrowing the space for blood to flow through.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart-broken"></i> Heart Failure</div>
                <p>When the heart muscle weakens, it's like a tired pump that can't push water effectively. The body doesn't get enough oxygen and nutrients.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stethoscope"></i> Doctor's Warning</div>
                <p>Doctors check for heart disease by listening to heart sounds, measuring blood pressure, and sometimes using special tests like EKGs.</p>
            </div>
        `,
        taskInstructions: "Complete the 'Clogged Pipe' experiment and answer questions about heart diseases and their effects.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: "Clogged Pipe" Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> <strong>Experiment:</strong> Blow through a clear straw. Now add a small piece of clay inside and blow again.
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Which was easier?</li>
                        <li>Which required more effort?</li>
                    </ul>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> How is this similar to what happens in coronary heart disease?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Understanding Heart Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What is coronary heart disease?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happens during heart failure?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is high blood pressure dangerous for the heart?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Effects on the Body</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> List three problems that can happen if the circulatory system doesn't work properly:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a before-and-after picture of a healthy artery vs. a clogged artery:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Prevention Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> What are two things people can do to prevent heart disease?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Talk to a family member about heart health. Ask if anyone in your family has had heart problems and what they do to keep their heart healthy.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Keeping Our Hearts Happy",
        subtopic: "Causes of heart disease and prevention through healthy habits",
        lessonContent: `
            <p>Today we'll learn how to keep our hearts healthy and strong! Prevention is the best medicine for heart disease.</p>
            <p><strong>What Causes Heart Disease?</strong></p>
            <ul>
                <li><strong>Unhealthy Diet:</strong> Too much fatty, salty, or sugary foods</li>
                <li><strong>Lack of Exercise:</strong> Sitting too much and not being active</li>
                <li><strong>Tobacco Use:</strong> Smoking damages blood vessels</li>
                <li><strong>Too Much Alcohol:</strong> Can raise blood pressure and damage the heart</li>
                <li><strong>Stress:</strong> Constant stress can harm your heart over time</li>
            </ul>
            <p><strong>Healthy Heart Habits:</strong></p>
            <ol>
                <li>Eat fruits, vegetables, and whole grains</li>
                <li>Exercise for at least 60 minutes daily</li>
                <li>Avoid tobacco and limit unhealthy foods</li>
                <li>Manage stress through play, rest, and hobbies</li>
                <li>Get regular checkups with a doctor</li>
            </ol>
            <p><strong>"Healthy vs. Unhealthy" Sorting Game:</strong> We'll sort pictures and descriptions into two categories to learn what helps or hurts our hearts.</p>
            <p><strong>Heart-Healthy Pledge:</strong> Today, everyone will commit to one new heart-healthy habit!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Heart-Healthy Foods</div>
                <p>Foods like oats, berries, nuts, and fish contain nutrients that help keep arteries clear and the heart strong. They're like "heart medicine" from nature!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smoking-ban"></i> Tobacco Danger</div>
                <p>Smoking makes blood vessels narrower and harder. It's like putting your arteries through a tiny, dangerous squeeze!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> Exercise Benefits</div>
                <p>When you exercise regularly, your heart muscle becomes stronger—just like your arm muscles get stronger when you lift weights!</p>
            </div>
        `,
        taskInstructions: "Play the sorting game, analyze heart disease causes, and commit to a heart-healthy habit.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: "Healthy vs. Unhealthy" Sorting Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> <strong>Game Results:</strong> Sort these into the correct column:
                    <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                        <tr>
                            <th style="width: 50%; border: 1px solid #ccc; padding: 8px;">HEART-HEALTHY</th>
                            <th style="width: 50%; border: 1px solid #ccc; padding: 8px;">HEART-HARMFUL</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px; height: 200px; vertical-align: top;">
                                <!-- Students will write/draw here -->
                            </td>
                            <td style="border: 1px solid #ccc; padding: 8px; height: 200px; vertical-align: top;">
                                <!-- Students will write/draw here -->
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Causes of Heart Disease</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three main causes of heart disease:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How does an unhealthy diet contribute to heart problems?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why is tobacco especially dangerous for the heart?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Prevention Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a "Heart-Healthy Day" schedule:
                    <table style="width: 100%; margin-top: 10px;">
                        <tr>
                            <th>Time</th>
                            <th>Heart-Healthy Activity</th>
                        </tr>
                        <tr>
                            <td>Morning</td>
                            <td><span class="answer-space" style="width: 100%;"></span></td>
                        </tr>
                        <tr>
                            <td>Afternoon</td>
                            <td><span class="answer-space" style="width: 100%;"></span></td>
                        </tr>
                        <tr>
                            <td>Evening</td>
                            <td><span class="answer-space" style="width: 100%;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Heart-Healthy Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> My Heart-Healthy Commitment:
                    <div style="margin-top: 10px; padding: 15px; border: 2px solid #4CAF50; border-radius: 8px; background-color: #f9f9f9;">
                        <p>I, <span class="answer-space" style="width: 150px;"></span>, pledge to:</p>
                        <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                        <p style="margin-top: 10px;">I will start this habit on: <span class="answer-space" style="width: 100px;"></span></p>
                        <p>Signature: <span class="answer-space" style="width: 200px; border-bottom: 1px solid #000;"></span></p>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice your heart-healthy pledge for one week. Keep a simple log of when you do your healthy habit and how it makes you feel.",
        homeworkDue: "Next Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek5);
    console.log("grade4-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek5);
    console.log("grade4-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek5',
        metadata: grade4ScienceWeek5.metadata,
        days: grade4ScienceWeek5
    });
    console.log("grade4-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek5 = grade4ScienceWeek5;
console.log("grade4-science-week5.js loaded and registered successfully");