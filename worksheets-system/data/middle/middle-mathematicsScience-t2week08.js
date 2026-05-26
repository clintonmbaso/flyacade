// Grade Middle - Mathematics & Science - Term 2 Week 8
const gradeMiddleWeek8 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 2,
        week: 8,
        title: "Days of the Week & Sky Components",
        description: "Learning the weekly cycle, daytime and nighttime characteristics, and identifying objects in the sky"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Time and Cycles",
        subtopic: "Weekly Cycle (Part 1) - Monday, Tuesday, Wednesday",
        lessonContent: `
            <p>Welcome! This week we will learn about the days of the week and the objects we see in the sky!</p>
            <p><strong>Key Question:</strong> What are the names of the first three days of the week?</p>
            <p><strong>Introduction:</strong> A week has 7 days. Today we will learn the names of the first three days and practice counting them in order.</p>
            <p><strong>The First Three Days of the Week:</strong></p>
            <ol>
                <li><strong>Monday:</strong> The first day of the school week</li>
                <li><strong>Tuesday:</strong> The second day of the school week</li>
                <li><strong>Wednesday:</strong> The middle of the school week</li>
            </ol>
            <p><strong>Fun Facts:</strong></p>
            <ul>
                <li>Monday is named after the Moon</li>
                <li>Tuesday is named after Tyr, a Norse god of war</li>
                <li>Wednesday is named after Odin (also called Woden), a Norse god</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Counting Days</div>
                <p>We can count: Monday (1), Tuesday (2), Wednesday (3). After Wednesday comes Thursday!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Monday = Moon Day</div>
                <p>Monday is named after the Moon. The Moon is something we see in the night sky!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> School Days</div>
                <p>Monday, Tuesday, and Wednesday are school days. What do you do on these days?</p>
            </div>
        `,
        taskInstructions: "Recite, write, and count the days Monday, Tuesday, and Wednesday.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Recite and Repeat</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say the days out loud three times:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>Monday → Tuesday → Wednesday</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each day name three times:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Monday: ___________ ___________ ___________</div>
                        <div>Tuesday: ___________ ___________ ___________</div>
                        <div>Wednesday: ___________ ___________ ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Counting Order</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing day:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Monday → _________ → Wednesday</div>
                        <div>b) _________ → Tuesday → Wednesday</div>
                        <div>c) Monday → Tuesday → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw something you do on Monday, Tuesday, or Wednesday:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member: 'What is your favorite day among Monday, Tuesday, and Wednesday?' Write down their answer.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Time and Cycles",
        subtopic: "Weekly Cycle (Part 2) - Thursday, Friday, Saturday, Sunday",
        lessonContent: `
            <p>Today we will learn the remaining four days of the week: Thursday, Friday, Saturday, and Sunday!</p>
            <p><strong>Key Question:</strong> What are the names of the last four days of the week?</p>
            <p><strong>The Last Four Days of the Week:</strong></p>
            <ol>
                <li><strong>Thursday:</strong> The fifth day of the week</li>
                <li><strong>Friday:</strong> The sixth day of the week (last school day!)</li>
                <li><strong>Saturday:</strong> The seventh day of the week (weekend!)</li>
                <li><strong>Sunday:</strong> The first day of the week (or last day, depending on your calendar)</li>
            </ol>
            <p><strong>Fun Facts:</strong></p>
            <ul>
                <li>Thursday is named after Thor, the Norse god of thunder</li>
                <li>Friday is named after Frigg, a Norse goddess</li>
                <li>Saturday is named after Saturn, a Roman god</li>
                <li>Sunday is named after the Sun</li>
            </ul>
            <p><strong>All 7 Days in Order:</strong></p>
            <div style="background: #e8f4f8; padding: 10px; text-align: center; border-radius: 8px;">
                Monday → Tuesday → Wednesday → Thursday → Friday → Saturday → Sunday
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thunderstorm"></i> Thursday = Thor's Day</div>
                <p>Thor was the god of thunder! When you hear thunder, think of Thursday.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sunday = Sun Day</div>
                <p>Sunday is named after the Sun. The Sun gives us light and heat during the day!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Weekend Days</div>
                <p>Saturday and Sunday are the weekend. Many people rest, play, and spend time with family on these days.</p>
            </div>
        `,
        taskInstructions: "Learn and sequence all seven days of the week.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Week</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in all 7 days in order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Monday</div>
                        <div>2. _________</div>
                        <div>3. _________</div>
                        <div>4. _________</div>
                        <div>5. _________</div>
                        <div>6. _________</div>
                        <div>7. _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the new days (Thursday, Friday, Saturday, Sunday) two times each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Thursday: ___________ ___________</div>
                        <div>Friday: ___________ ___________</div>
                        <div>Saturday: ___________ ___________</div>
                        <div>Sunday: ___________ ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Which Day Comes Next?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the next day:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Monday → Tuesday → Wednesday → _________</div>
                        <div>b) Thursday → _________ → Saturday</div>
                        <div>c) Friday → _________ → Sunday</div>
                        <div>d) Saturday → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Days Song</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sing or say the days of the week song. Draw a picture of your favorite day:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Write down what you do on Saturday and Sunday. Share with the class tomorrow!",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Earth and Sky",
        subtopic: "Daytime Characteristics",
        lessonContent: `
            <p>Today we will look outside and learn about daytime! What makes the day different from the night?</p>
            <p><strong>Key Question:</strong> What do we see, feel, and notice during the daytime?</p>
            <p><strong>Daytime Characteristics:</strong></p>
            <ul>
                <li><strong>Light:</strong> The Sun gives us bright light during the day</li>
                <li><strong>Heat:</strong> The Sun warms the Earth - that's why daytime feels warmer</li>
                <li><strong>Blue Sky:</strong> The sky looks blue because of how sunlight scatters in the air</li>
                <li><strong>Sun Visibility:</strong> We can see the Sun in the sky (but NEVER look directly at it!)</li>
                <li><strong>Clouds:</strong> Sometimes we see white or gray clouds in the daytime sky</li>
            </ul>
            <p><strong>Why is the sky blue?</strong></p>
            <p>Sunlight spreads out (scatters) when it hits the air. Blue light scatters the most, so we see a blue sky!</p>
            <p><strong>Safety Tip:</strong> Never look directly at the Sun. It can hurt your eyes!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> The Sun is a Star</div>
                <p>The Sun is actually a star! It's the closest star to Earth. During the day, the Sun's light is so bright that we cannot see other stars.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> Heat from the Sun</div>
                <p>Have you noticed that the ground feels warm on a sunny day? That's the Sun's heat! The Sun warms the air, ground, and water.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Daytime Colors</div>
                <p>During the day, the sky can be blue, light blue, or even gray on cloudy days. At sunrise and sunset, the sky turns orange and pink!</p>
            </div>
        `,
        taskInstructions: "Look outside, observe daytime characteristics, and complete the activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Look Outside!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look out the window. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What color is the sky today? _________</div>
                        <div>Can you see the Sun? _________</div>
                        <div>Do you see any clouds? _________</div>
                        <div>How does the temperature feel? (warm/cool/hot) _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Daytime</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture of what you see outside during the daytime:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Daytime Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Check all the things you notice during the day:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Bright light from the Sun</div>
                        <div>☐ Warmth on my skin</div>
                        <div>☐ Blue sky</div>
                        <div>☐ Clouds (white or gray)</div>
                        <div>☐ Birds flying</div>
                        <div>☐ Shadows on the ground</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Complete the Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Finish this sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"During the daytime, I see _________________ and I feel _________________."</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Look at the sky at different times tomorrow morning and afternoon. Does the sky color change? Draw what you see.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Earth and Sky",
        subtopic: "Nighttime Characteristics",
        lessonContent: `
            <p>Today we will learn about nighttime! What happens when the Sun goes down?</p>
            <p><strong>Key Question:</strong> What do we see and notice during the nighttime?</p>
            <p><strong>Nighttime Characteristics:</strong></p>
            <ul>
                <li><strong>Darkness:</strong> The sky becomes dark because the Sun is on the other side of Earth</li>
                <li><strong>Moon:</strong> We can see the Moon (sometimes during the day too!)</li>
                <li><strong>Stars:</strong> Tiny points of light in the night sky - they are actually giant balls of gas like our Sun!</li>
                <li><strong>Cooler Temperature:</strong> Nights are usually cooler than days because there is no sunlight</li>
                <li><strong>Artificial Lights:</strong> We use lamps, flashlights, and street lights to see</li>
            </ul>
            <p><strong>About the Moon:</strong></p>
            <p>The Moon does not make its own light. It reflects light from the Sun! The Moon changes shape throughout the month. These different shapes are called "phases."</p>
            <p><strong>About Stars:</strong></p>
            <p>Stars are always in the sky, even during the day. We just cannot see them because the Sun's light is too bright!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Moon Shapes</div>
                <p>The Moon can look like a banana (crescent), a half-circle, or a full circle. These are called moon phases!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Counting Stars</div>
                <p>On a clear night away from city lights, you can see thousands of stars! But even with a small telescope, you can see millions more.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> Nighttime Activities</div>
                <p>At night, most people sleep. Some animals (like owls and bats) are awake at night - they are called nocturnal animals.</p>
            </div>
        `,
        taskInstructions: "Describe nighttime, draw the night sky, and identify the Moon and stars.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Day vs. Night</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> How is nighttime different from daytime?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Daytime has: _________</div>
                        <div>Nighttime has: _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Night Sky</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the night sky. Include the Moon and some stars:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Nighttime Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Check all the things you see or feel at night:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Dark sky</div>
                        <div>☐ Moon (sometimes)</div>
                        <div>☐ Stars (if clear)</div>
                        <div>☐ Cooler air</div>
                        <div>☐ Street lights or house lights</div>
                        <div>☐ Shadows in moonlight</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Describe Darkness</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use three words to describe what darkness looks like:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________</div>
                        <div>2. _________</div>
                        <div>3. _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> When do we see the Moon? (circle one)
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Only at night / Sometimes during the day too / Only in the morning</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look at the sky tonight with a family member. Draw the Moon exactly as you see it (shape and location).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Earth and Sky",
        subtopic: "Identifying Sky Objects - Sun, Moon, Stars",
        lessonContent: `
            <p>Today we will learn to identify and name the objects we see in the sky!</p>
            <p><strong>Key Question:</strong> What can we see in the sky during the day and at night?</p>
            <p><strong>Sky Objects We Can See:</strong></p>
            <ol>
                <li><strong>The Sun:</strong> A giant star that gives us light and heat. We see it during the DAY.</li>
                <li><strong>The Moon:</strong> Earth's natural satellite. It reflects the Sun's light. We see it at NIGHT and sometimes during the DAY.</li>
                <li><strong>Stars:</strong> Giant balls of hot gas that produce their own light. We see them at NIGHT (and the Sun is a star we see during the day!)</li>
                <li><strong>Clouds:</strong> Groups of tiny water droplets floating in the air. We see them during the DAY (and sometimes at night if there is moonlight).</li>
            </ol>
            <p><strong>Remember:</strong></p>
            <ul>
                <li>The Sun is a STAR - just the closest one to Earth!</li>
                <li>The Moon does NOT make its own light - it reflects sunlight.</li>
                <li>Stars are always in the sky - we just can't see them during the day because the Sun is too bright.</li>
            </ul>
            <p><strong>Safety Reminder:</strong> NEVER look directly at the Sun. It can permanently damage your eyes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sun = Day Star</div>
                <p>The Sun is so bright because it is very close to Earth (about 150 million kilometers away!). Other stars are much, much farther away, so they look like tiny dots.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Moon Watching</div>
                <p>Have you ever seen the Moon during the day? It happens sometimes! The Moon orbits Earth, so sometimes it's on the same side of Earth as the Sun.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star-of-life"></i> Star Patterns</div>
                <p>People long ago connected stars to make pictures called constellations. The Big Dipper is a famous group of seven stars that looks like a ladle!</p>
            </div>
        `,
        taskInstructions: "Identify and draw sky objects: Sun, Moon, and stars.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Day Sky Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw what you see in the sky during the DAY. Don't forget the Sun!
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Night Sky Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw what you see in the sky at NIGHT. Include the Moon and stars:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Sky Object</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What am I?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) "I give you light and heat during the day. Never look directly at me!" → _________</div>
                        <div>b) "I am Earth's neighbor. I reflect the Sun's light. I change shape!" → _________</div>
                        <div>c) "I am tiny dots of light in the night sky. I am actually giant balls of gas!" → _________</div>
                        <div>d) "The Sun is one of us, but I'm much farther away!" → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a line to match the object to when we see it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>Sun →</div>
                            <div>Daytime / Nighttime</div>
                            <div>Moon →</div>
                            <div>Daytime / Nighttime / Both</div>
                            <div>Stars →</div>
                            <div>Daytime / Nighttime</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which sky object is your favorite? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw and label the Sun, Moon, and one star:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw one picture of the daytime sky and one picture of the nighttime sky. Label the Sun, Moon, and stars (if you see them). Share with the class on Monday!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleWeek8);
    console.log("grade-middle-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleWeek8);
    console.log("grade-middle-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleWeek8',
        metadata: gradeMiddleWeek8.metadata,
        days: gradeMiddleWeek8
    });
    console.log("grade-middle-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleWeek8 = gradeMiddleWeek8;
console.log("grade-middle-week8.js loaded and registered successfully");