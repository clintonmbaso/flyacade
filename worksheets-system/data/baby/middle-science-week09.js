// Baby Class Science - Week 9 Data (Body Senses Recap)
const middleScienceWeek9 = {
    metadata: {
        grade: "middle",
        subject: "Science",
        week: 9,
        title: "Body Senses Recap",
        description: "Review of the five senses: Sight, Hearing, Touch, Smell, and Taste"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Senses Recap - Sight & Hearing",
        subtopic: "Our Amazing Eyes and Ears",
        lessonContent: `
            <p>Welcome to science class! This week we are reviewing our amazing body senses. Today we focus on <strong>Sight</strong> and <strong>Hearing</strong>!</p>
            <p><strong>Key Concept:</strong> Our eyes help us see colors, shapes, and people. Our ears help us hear sounds, music, and voices!</p>
            <div class="content-box">
                <p><strong>All About Sight:</strong></p>
                <p>👁️ <strong>Our Eyes:</strong> They capture light and send pictures to our brain.</p>
                <p>🌈 <strong>What we see:</strong> Colors, shapes, people, animals, everything around us!</p>
                <p><strong>Fun Fact:</strong> We blink about 15-20 times every minute to keep our eyes clean!</p>
            </div>
            <div class="content-box">
                <p><strong>All About Hearing:</strong></p>
                <p>👂 <strong>Our Ears:</strong> They catch sound waves and send messages to our brain.</p>
                <p>🎵 <strong>What we hear:</strong> Music, voices, animal sounds, rain, laughter!</p>
                <p><strong>Fun Fact:</strong> Our ears help us keep balance too!</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Eye Spy Game</div>
                <p>Look around the room and spy something:</p>
                <p>"I spy with my little eye something... RED!"</p>
                <p>Can you find it? Our eyes help us search!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Sound Hunt</div>
                <p>Close your eyes and listen carefully:</p>
                <p>What sounds do you hear?</p>
                <ul>
                    <li>Teacher talking 🔊</li>
                    <li>Children laughing 😊</li>
                    <li>Chair moving 🪑</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Eye Craft</div>
                <p>Let's make an eye collage!</p>
                <p>Materials: colored paper, glue, googly eyes</p>
                <p>Create your own special eye to remind us how we see!</p>
            </div>
        `,
        taskInstructions: "Practice identifying things we see and hear. Draw and describe!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw one thing you can SEE in the classroom:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Circle the body part we use for HEARING:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>👁️ Eye</div>
                    <div>👂 Ear</div>
                    <div>👃 Nose</div>
                    <div>✋ Hand</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Name two things you can HEAR right now:
                <ol>
                    <li>_________________</li>
                    <li>_________________</li>
                </ol>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match the senses:
                <div style="margin-top: 10px;">
                    <div>👁️ = <span class="answer-space" style="width: 100px;"></span> (seeing)</div>
                    <div>👂 = <span class="answer-space" style="width: 100px;"></span> (hearing)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Color the eye and ear:
                <div style="display: flex; gap: 30px; margin-top: 10px;">
                    <div>👁️ <div class="drawing-area" style="height: 40px; width: 40px;"></div></div>
                    <div>👂 <div class="drawing-area" style="height: 40px; width: 40px;"></div></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Senses Review Test</strong></p>
                <p><strong>Part A: Sight and Hearing Review</strong></p>
                <ol>
                    <li>Which body part do we use for seeing?
                        <div style="margin-left: 20px;">
                            <input type="radio" name="q1"> 👃 Nose<br>
                            <input type="radio" name="q1"> 👁️ Eye<br>
                            <input type="radio" name="q1"> 👂 Ear<br>
                            <input type="radio" name="q1"> 👅 Tongue
                        </div>
                    </li>
                    <li>Which body part do we use for hearing?
                        <div style="margin-left: 20px;">
                            <input type="radio" name="q2"> 👁️ Eye<br>
                            <input type="radio" name="q2"> 👃 Nose<br>
                            <input type="radio" name="q2"> 👂 Ear<br>
                            <input type="radio" name="q2"> ✋ Hand
                        </div>
                    </li>
                    <li>Draw TWO things you saw on your way home today:
                        <div class="drawing-area" style="height: 80px; margin: 10px 0;"></div>
                    </li>
                    <li>List TWO sounds you heard at home:
                        <ol>
                            <li>_________________</li>
                            <li>_________________</li>
                        </ol>
                    </li>
                    <li>Practical Activity: Play "I Spy" with your family. Write what you found:
                        <p>I spied something: _________________ (color)</p>
                        <p>It was: _________________ (object)</p>
                    </li>
                </ol>
                <p><strong>Total: /10 marks</strong></p>
                <p><em>Parent's Signature: _________________ Date: _________________</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Senses Recap - Touch, Smell & Taste",
        subtopic: "Feeling, Smelling, and Tasting",
        lessonContent: `
            <p>Excellent work learning about sight and hearing! Today we review three more senses: <strong>Touch, Smell, and Taste</strong>!</p>
            <p><strong>Key Concept:</strong> Our skin feels textures, our nose smells scents, and our tongue tastes flavors!</p>
            <div class="content-box">
                <p><strong>All About Touch:</strong></p>
                <p>✋ <strong>Our Skin:</strong> It has special receptors that feel things.</p>
                <p>🎨 <strong>What we feel:</strong> Soft, rough, smooth, hot, cold, wet, dry!</p>
                <p><strong>Fun Fact:</strong> Our fingertips are the most sensitive parts for touch!</p>
            </div>
            <div class="content-box">
                <p><strong>All About Smell & Taste:</strong></p>
                <p>👃 <strong>Our Nose:</strong> It smells scents and helps us taste better!</p>
                <p>👅 <strong>Our Tongue:</strong> It tastes sweet, sour, salty, bitter, and umami!</p>
                <p><strong>Fun Fact:</strong> Our nose and tongue work together to help us enjoy food!</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Texture Exploration</div>
                <p>Let's feel different textures:</p>
                <p>• Cotton ball: <em>"Soft and fluffy!"</em> 🧵</p>
                <p>• Sandpaper: <em>"Rough and bumpy!"</em> 📜</p>
                <p>• Plastic spoon: <em>"Smooth and hard!"</em> 🥄</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Smell & Taste Stations</div>
                <p>Let's explore scents and tastes:</p>
                <p>• Lemon slice: <em>"Smells citrusy, tastes sour!"</em> 🍋</p>
                <p>• Cinnamon stick: <em>"Smells spicy, tastes warm!"</em> 🌿</p>
                <p>• Chocolate chip: <em>"Smells sweet, tastes delicious!"</em> 🍫</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Finger Painting</div>
                <p>Let's feel the paint!</p>
                <p>How does it feel on your fingers?</p>
                <p><em>"Cold, wet, smooth, squishy!"</em> 🎨</p>
                <p>Our skin tells our brain all about textures!</p>
            </div>
        `,
        taskInstructions: "Practice identifying textures, scents, and tastes. Use descriptive words!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw something that feels SOFT:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Match the body parts to senses:
                <div style="margin-top: 10px;">
                    <div>👃 Nose = <span class="answer-space" style="width: 100px;"></span> (smelling)</div>
                    <div>👅 Tongue = <span class="answer-space" style="width: 100px;"></span> (tasting)</div>
                    <div>✋ Skin = <span class="answer-space" style="width: 100px;"></span> (touching)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the things that taste SWEET:
                <div style="display: flex; gap: 15px; margin-top: 10px; flex-wrap: wrap;">
                    <div>🍋 Lemon</div>
                    <div>🍭 Lollipop</div>
                    <div>🍎 Apple</div>
                    <div>🧂 Salt</div>
                    <div>🍰 Cake</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Describe how these feel:
                <ol>
                    <li>Pillow: _________________ (soft/hard)</li>
                    <li>Ice cube: _________________ (hot/cold)</li>
                    <li>Rock: _________________ (smooth/rough)</li>
                </ol>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Color the nose and tongue:
                <div style="display: flex; gap: 30px; margin-top: 10px;">
                    <div>👃 <div class="drawing-area" style="height: 40px; width: 40px;"></div></div>
                    <div>👅 <div class="drawing-area" style="height: 40px; width: 40px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Finger painting time! How does the paint feel?
                <div class="drawing-area" style="height: 80px;"></div>
                <p>Write one word: _________________</p>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Friday Homework: Senses Review Test</strong></p>
                <p><strong>Part B: Touch, Smell, and Taste Review</strong></p>
                <ol>
                    <li>Which body part do we use for tasting?
                        <div style="margin-left: 20px;">
                            <input type="radio" name="q1"> 👃 Nose<br>
                            <input type="radio" name="q1"> 👁️ Eye<br>
                            <input type="radio" name="q1"> 👂 Ear<br>
                            <input type="radio" name="q1"> 👅 Tongue
                        </div>
                    </li>
                    <li>Which body part do we use for smelling?
                        <div style="margin-left: 20px;">
                            <input type="radio" name="q2"> 👁️ Eye<br>
                            <input type="radio" name="q2"> 👃 Nose<br>
                            <input type="radio" name="q2"> 👂 Ear<br>
                            <input type="radio" name="q2"> ✋ Hand
                        </div>
                    </li>
                    <li>Match the texture words:
                        <div style="margin-left: 20px;">
                            <div>Pillow = <span class="answer-space" style="width: 80px;"></span> (soft/hard)</div>
                            <div>Stone = <span class="answer-space" style="width: 80px;"></span> (smooth/rough)</div>
                            <div>Ice = <span class="answer-space" style="width: 80px;"></span> (hot/cold)</div>
                        </div>
                    </li>
                    <li>Name one thing that smells GOOD and one that tastes SWEET:
                        <p>Smells good: _________________</p>
                        <p>Tastes sweet: _________________</p>
                    </li>
                    <li>Practical Activity: Texture Hunt at Home
                        <p>Find and describe 3 different textures:</p>
                        <ol>
                            <li>_________________ feels _________________</li>
                            <li>_________________ feels _________________</li>
                            <li>_________________ feels _________________</li>
                        </ol>
                    </li>
                </ol>
                <p><strong>Bonus Question:</strong> Name all FIVE senses:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. _________________ (👁️)</p>
                    <p>2. _________________ (👂)</p>
                    <p>3. _________________ (👃)</p>
                    <p>4. _________________ (👅)</p>
                    <p>5. _________________ (✋)</p>
                </div>
                <p><strong>Total: /12 marks</strong></p>
                <p><em>Parent's Signature: _________________ Date: _________________</em></p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyScienceWeek9);
    console.log("babyScienceWeek9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyScienceWeek9);
    console.log("babyScienceWeek9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyScienceWeek9',
        metadata: babyScienceWeek9.metadata,
        days: babyScienceWeek9
    });
    console.log("babyScienceWeek9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyScienceWeek9 = babyScienceWeek9;
console.log("babyScienceWeek9.js loaded and registered successfully");