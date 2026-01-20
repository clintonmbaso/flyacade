// Grade 5 Technology Studies - Week 10 Data
const grade5TechnologyStudiesWeek10 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        week: 10,
        title: "Multimedia Presentations: Animations and Media",
        description: "Adding entrance/emphasis animations and integrating audio/video elements into presentations"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Objects in Motion (Animations)",
        subtopic: "Adding entrance and emphasis effects to specific elements on a slide",
        lessonContent: `
            <p>Welcome to our exploration of animations in presentations. Today we will learn how to make specific objects move on your slides to create more engaging presentations.</p>
            <p><strong>Key Concept:</strong> Animations are different from transitions. Transitions affect the entire slide, while animations affect specific objects like text boxes, images, or shapes.</p>
            <p><strong>Types of Animations:</strong></p>
            <ul>
                <li><strong>Entrance Effects:</strong> How objects appear on the slide (Appear, Fly In, Fade)</li>
                <li><strong>Emphasis Effects:</strong> How objects draw attention after appearing (Grow/Shrink, Spin, Pulse)</li>
                <li><strong>Exit Effects:</strong> How objects leave the slide (Disappear, Fly Out, Fade)</li>
            </ul>
            <p><strong>Animation Pane:</strong> This is where you control the order and timing of your animations. Objects appear in the order they will animate on your slide.</p>
            <p><strong>Sequencing Animations:</strong> You can set animations to happen one after another (On Click), together (With Previous), or automatically after the previous (After Previous).</p>
            <p><strong>Why animations matter:</strong> Well-used animations can make your presentation more professional and help guide your audience's attention to important points.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer" style="color: #4A90E2;"></i> Transition vs. Animation</div>
                <p>A transition is like changing TV channels (whole screen changes). An animation is like a character moving within a TV show (specific element moves).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-down"></i> Sequencing Example</div>
                <p>In a title slide: 1) Title appears, 2) Subtitle fades in, 3) Image flies in from the side, 4) Your name appears at the bottom.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Good Practice</div>
                <p>Use animations purposefully! Too many animations can distract your audience. Choose 1-2 animation styles and use them consistently.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice adding and sequencing animations.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> What is the difference between a transition and an animation?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> List three different "Entrance" effects you could use for a title:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Activity: The Pop-Up Fact Sheet</strong>
                <p>Create a slide about your favorite animal. Include:</p>
                <ul>
                    <li>The animal's name (set to "Appear" first)</li>
                    <li>An image of the animal (set to "Fly In" from the left side)</li>
                    <li>Three facts about the animal (set to appear one by one after the image)</li>
                </ul>
                <div class="answer-space" style="height: 100px;">
                    <p style="color: #666; font-style: italic;">Draw a simple sketch of your slide layout showing where each element will be:</p>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> What does the Animation Pane show you, and why is it important?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Practice creating a slide with at least three different objects (text and images) that animate in a specific sequence. Write down the order you set them to appear.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Sight and Sound (Audio & Video)",
        subtopic: "Integrating video clips and sound bites to enhance the message",
        lessonContent: `
            <p>Today we will learn how to add multimedia elements - video and audio - to make your presentations more engaging and informative.</p>
            <p><strong>Key Concept:</strong> Multimedia elements can make complex ideas easier to understand and keep your audience interested in your presentation.</p>
            <p><strong>Adding Video:</strong></p>
            <ul>
                <li>You can insert video files from your computer or online sources</li>
                <li>Videos should be short and relevant to your topic</li>
                <li>You can resize and reposition videos on your slide</li>
            </ul>
            <p><strong>Adding Audio:</strong></p>
            <ul>
                <li>Background music can set the mood for your presentation</li>
                <li>Sound effects can emphasize important points</li>
                <li>Voice recordings can add personal explanations</li>
            </ul>
            <p><strong>Playback Options:</strong></p>
            <ul>
                <li><strong>On Click:</strong> Media plays when you click on it</li>
                <li><strong>Automatically:</strong> Media plays as soon as the slide appears</li>
                <li><strong>In Click Sequence:</strong> Media plays as part of your animation sequence</li>
            </ul>
            <p><strong>Best Practices:</strong> Always test your media before presenting! Make sure volume levels are appropriate and videos play smoothly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-video" style="color: #FF6B6B;"></i> Video Example</div>
                <p>In a presentation about space, you could include a 10-second clip of a rocket launch instead of just showing a picture of a rocket.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Audio Example</div>
                <p>In a presentation about musical instruments, you could include short sound clips of each instrument being played so your audience can hear the difference.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cogs"></i> Technical Tip</div>
                <p>When using online videos, make sure you have an internet connection during your presentation, or download the video file to your computer first.</p>
            </div>
        `,
        taskInstructions: "Practice adding multimedia elements and setting their playback options.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Media Options</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What are two different ways you can set a video to play in your presentation?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> When might you want to use "Play Automatically" versus "On Click" for a sound effect?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Activity: The Mini-Documentary</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Finalize your animal presentation by adding multimedia:
                    <ul>
                        <li>Add a 10-second video clip about your animal (or a similar animal if you can't find your exact one)</li>
                        <li>Add one sound effect that matches your animal (like a roar, chirp, or growl)</li>
                        <li>Set your video to play automatically when the slide appears</li>
                        <li>Set your sound effect to play when you click on it</li>
                    </ul>
                    <div class="answer-space" style="height: 100px;">
                        <p style="color: #666; font-style: italic;">Describe where you found your video and sound effect, and why you chose them:</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Presentation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Practice presenting your completed slide to a partner. Check that:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• All animations happen in the correct order</div>
                        <div>• The video plays automatically</div>
                        <div>• The sound effect plays when clicked</div>
                        <div>• The presentation flows smoothly from start to finish</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <p><strong>Partner Feedback:</strong> What worked well? What could be improved?</p>
                        <div class="answer-space" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How do video and audio elements make a presentation better than just using text and images?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find one example of a good presentation online (like a TED Talk or educational video) and identify at least two multimedia elements they used effectively. Write down what you found.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyStudiesWeek10);
    console.log("technologystudies-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyStudiesWeek10);
    console.log("technologystudies-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyStudiesWeek10',
        metadata: grade5TechnologyStudiesWeek10.metadata,
        days: grade5TechnologyStudiesWeek10
    });
    console.log("technologystudies-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyStudiesWeek10 = grade5TechnologyStudiesWeek10;
console.log("technologystudies-week10.js loaded and registered successfully");