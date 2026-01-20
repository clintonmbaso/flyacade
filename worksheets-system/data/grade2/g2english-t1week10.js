// Grade 2 English - Week 10 Data (Expressing Opinions)
const grade2EnglishWeek10 = {
    metadata: {
        grade: 2,
        subject: "English",
        week: 10,
        title: "I Like, You Like — Expressing Opinions and Preferences",
        description: "Learning to express likes/dislikes, give reasons with 'because', discuss pictures, and debate choices"
    },
    
    monday: {
        subject: "English",
        topic: "I Like, I Don't Like",
        subtopic: "Using 'I like' and 'I don't like' to express preferences",
        lessonContent: `
            <p>Welcome to our opinion week! Today we will learn how to tell others what activities we enjoy and don't enjoy.</p>
            <p><strong>Key Concept:</strong> We can use "I like" and "I don't like" to share our feelings about different activities.</p>
            <p><strong>Formal Start:</strong> We can begin with "In my opinion..." to make our statement more formal.</p>
            <p><strong>Sentence Structure:</strong> [Subject] + [Preference] + [Activity]</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I like swimming.</li>
                <li>I do not like running.</li>
                <li>My favorite activity is drawing.</li>
                <li>In my opinion, soccer is fun.</li>
            </ul>
            <p><strong>Why share opinions?</strong> Sharing helps friends know what we enjoy doing together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thumbs-up" style="color: #4CAF50;"></i> Like Example</div>
                <p>"I like playing soccer." - This tells others what activity makes you happy.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thumbs-down" style="color: #f44336;"></i> Don't Like Example</div>
                <p>"I do not like running." - It's okay to say when you don't enjoy something.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Thumbs Up/Down Game!</div>
                <p>When teacher shows a picture, give thumbs up if you like it, thumbs down if you don't!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice expressing your preferences.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Look at the five activity pictures below. Circle the ones you LIKE. Cross out (X) the ones you DON'T LIKE:
                <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 15px;">
                    <div style="text-align: center;">
                        <div style="height: 80px; width: 80px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">🏃 Running</div>
                        <div>☐ Like ☐ Don't Like</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; width: 80px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">📖 Reading</div>
                        <div>☐ Like ☐ Don't Like</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; width: 80px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">🎨 Drawing</div>
                        <div>☐ Like ☐ Don't Like</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; width: 80px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">⚽ Soccer</div>
                        <div>☐ Like ☐ Don't Like</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="height: 80px; width: 80px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">💃 Dancing</div>
                        <div>☐ Like ☐ Don't Like</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Write one complete sentence about an activity you LIKE:
                <div class="answer-space" style="height: 40px; margin-top: 10px;">I like ________________ because ________________.</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Practice with a partner. Tell them one activity you like and one you don't like:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <div><strong>You say:</strong> "I like ______________."</div>
                    <div><strong>You say:</strong> "I do not like ______________."</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw yourself doing your favorite activity:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div style="margin-top: 10px;">My favorite activity is: ________________</div>
            </div>
        `,
        homework: "Tell three people at home one thing you like and one thing you don't like. Write down their names and what you told them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Adding the 'Why'",
        subtopic: "Using 'because' to give reasons for opinions",
        lessonContent: `
            <p>Today we will learn how to make our opinions stronger by giving reasons!</p>
            <p><strong>Key Concept:</strong> The word "because" helps us connect our opinion to the reason why we feel that way.</p>
            <p><strong>Why give reasons?</strong> Reasons make our opinions more interesting and help others understand us better.</p>
            <p><strong>Sentence Structure:</strong> [Opinion] + because + [Reason]</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I like cats because they are soft.</li>
                <li>I like the park because it is fun.</li>
                <li>I do not like rain because it makes me wet.</li>
                <li>In my opinion, reading is good because it teaches new words.</li>
            </ul>
            <p><strong>Tip:</strong> Try to use describing words like soft, fun, exciting, sweet, cold, or happy in your reasons!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment" style="color: #2196F3;"></i> Reason Example</div>
                <p>"I like ice cream because it is cold and sweet." - This gives two good reasons!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat" style="color: #795548;"></i> Animal Example</div>
                <p>"I like dogs because they can play fetch." - This tells what the animal can do.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Finish My Sentence Game!</div>
                <p>Teacher starts: "I like pizza because..." Students finish with their own reasons!</p>
            </div>
        `,
        taskInstructions: "Practice giving reasons for your opinions using 'because'.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Opinion with the Reason</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match each opinion with the best reason:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I like swimming → ☐ because it is quiet.</div>
                        <div>I like reading → ☐ because the water is cool.</div>
                        <div>I do not like loud noises → ☐ because they hurt my ears.</div>
                        <div>I like sunny days → ☐ because I can play outside.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Write</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw your favorite food. Then complete the sentence:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I like <span class="answer-space" style="width: 150px;"></span> because <span class="answer-space" style="width: 200px;"></span>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Finish the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete these sentences with your own reasons:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I like weekends because ________________________.</div>
                        <div style="margin-top: 10px;"></div>
                        <div>I do not like homework because ________________________.</div>
                        <div style="margin-top: 10px;"></div>
                        <div>In my opinion, school is fun because ________________________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Partner Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> With a partner, take turns. One says an opinion, the other gives a reason:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>Partner A: "I like summer."</div>
                        <div>Partner B: "Why?"</div>
                        <div>Partner A: "Because ________________."</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask a family member what their favorite animal is and why. Write: [Name] likes ________ because ________.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Picture Discussions",
        subtopic: "Expressing opinions based on visual evidence",
        lessonContent: `
            <p>Today we will learn how to look at pictures and share our opinions about what we see!</p>
            <p><strong>Key Concept:</strong> We can use "I think" to give our opinion about a picture or scene.</p>
            <p><strong>How to discuss pictures:</strong></p>
            <ul>
                <li>Look carefully at all the details</li>
                <li>Point to specific things you see</li>
                <li>Use describing words like exciting, fast, colorful, or happy</li>
                <li>Give reasons for your opinion</li>
            </ul>
            <p><strong>Sentence Starters:</strong></p>
            <ul>
                <li>I think...</li>
                <li>In this picture, I see...</li>
                <li>It looks like...</li>
                <li>I like this picture because...</li>
            </ul>
            <p><strong>Example:</strong> "I think the boy on the swing is having fun because he is smiling."</p>
            <p><strong>Why discuss pictures?</strong> Pictures tell stories without words, and our opinions help understand them!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-image" style="color: #9C27B0;"></i> Picture Opinion</div>
                <p>"I think the birthday cake looks delicious because it has colorful sprinkles." - This describes what you see.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile" style="color: #FF9800;"></i> Emotion Example</div>
                <p>"The girl looks happy because she is laughing." - We can guess feelings from pictures.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Picture Detective Game!</div>
                <p>Look at a big picture and find specific details. "Who can find someone wearing red?"</p>
            </div>
        `,
        taskInstructions: "Look at pictures and share your opinions with reasons.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Picture Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the picture of a playground. Answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which child looks the happiest? ________________</div>
                        <div>Why do you think so? ________________________</div>
                        <div style="margin-top: 10px;"></div>
                        <div>What activity looks the most fun? ________________</div>
                        <div>Why? ________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Small Group Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In your group, look at a picture of a hobby (gardening, painting, etc.). Each person says:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div>"I like this picture because ________________"</div>
                    </div>
                    <div style="margin-top: 10px;">Write your group's best reason here: ________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Own Scene</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of people doing something fun. Then write about it:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>In my picture, I think ________________ is having fun because ________________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Descriptive Words Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the words that could describe a fun picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ exciting ☐ boring ☐ colorful ☐ quiet ☐ happy ☐ slow ☐ fast ☐ bright</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a picture in a book or magazine. Tell someone at home: 'I like this picture because...' Write down what you said.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "The Great Debate",
        subtopic: "Choosing between options and justifying choices",
        lessonContent: `
            <p>Today is debate day! We will choose between two things and explain why we prefer one over the other.</p>
            <p><strong>Key Concept:</strong> When we debate, we compare options and give reasons for our choice.</p>
            <p><strong>Debate Language:</strong></p>
            <ul>
                <li>In my opinion...</li>
                <li>I prefer... because...</li>
                <li>I like... more than... because...</li>
                <li>I think... is better because...</li>
            </ul>
            <p><strong>How to debate nicely:</strong></p>
            <ul>
                <li>Listen to others' opinions</li>
                <li>Give your reasons clearly</li>
                <li>It's okay to disagree politely</li>
                <li>Use "because" to explain</li>
            </ul>
            <p><strong>Example Debate:</strong> TV vs. Books</p>
            <ul>
                <li>TV side: "I like watching TV because there are interesting cartoons."</li>
                <li>Book side: "I prefer books because the stories are exciting and help me imagine."</li>
            </ul>
            <p><strong>Today's activity:</strong> We'll have mini-debates and write our own comparisons!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tv" style="color: #2196F3;"></i> TV Opinion</div>
                <p>"I prefer TV because I can see the characters move and hear their voices."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book" style="color: #795548;"></i> Book Opinion</div>
                <p>"I like books more than TV because I can read at my own speed."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Stand Up Debate!</div>
                <p>Stand on the side of the room for your choice. When called on, give one reason for your choice!</p>
            </div>
        `,
        taskInstructions: "Practice comparing two things and explaining your preference.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Class Debate - Summer vs. Winter</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Which do you prefer? Stand with your group. Write one group reason:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Summer group: We prefer summer because ________________________.</div>
                        <div style="margin-top: 10px;"></div>
                        <div>Winter group: We prefer winter because ________________________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose: Dogs vs. Cats (or another pair). Write two sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I prefer ________ because ________________________.</div>
                        <div style="margin-top: 10px;"></div>
                        <div>I do not like ________ because ________________________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Preference</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the thing you prefer from today's debate:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I drew ________. I prefer it because ________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Opinion Sentence Building</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete these opinion sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>In my opinion, ________ is better than ________ because ________.</div>
                        <div style="margin-top: 10px;"></div>
                        <div>I think ________ is more fun because ________.</div>
                        <div style="margin-top: 10px;"></div>
                        <div>I like ________, but I prefer ________ because ________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Respectful Debate Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself listening to someone else's opinion. Write why listening is important:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Listening is important in a debate because ________________</div>
                </div>
            </div>
        `,
        homework: "Have a friendly debate at home: Pizza vs. Pasta. Write down one reason for each side.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2EnglishWeek10);
    console.log("english-week10-opinions.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2EnglishWeek10);
    console.log("english-week10-opinions.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2EnglishWeek10',
        metadata: grade2EnglishWeek10.metadata,
        days: grade2EnglishWeek10
    });
    console.log("english-week10-opinions.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2EnglishWeek10 = grade2EnglishWeek10;
console.log("english-week10-opinions.js loaded and registered successfully");