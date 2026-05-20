// Grade 2 Mathematics & Science - Term 2 Week 9 Data
const grade2ScienceWeek9 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 2,
        week: 9,
        title: "Sources of Light",
        description: "Exploring natural and artificial sources of light, comparing them, and investigating shadows"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Light Energy",
        subtopic: "Natural Sources of Light",
        lessonContent: `
            <p>Welcome to our week about LIGHT! Today we'll discover natural sources of light that exist all around us.</p>
            <p><strong>Key Question:</strong> What are natural sources of light, and where do they come from?</p>
            <p><strong>Introduction:</strong> Light helps us see the world around us. Some light comes from nature - these are called <strong>natural light sources</strong>. They are not made by people!</p>
            <p><strong>Natural Sources of Light:</strong></p>
            <ol>
                <li><strong>The Sun:</strong> Our biggest and most important natural light source! The sun gives us light during the day.</li>
                <li><strong>The Moon:</strong> The moon shines at night, but did you know? The moon doesn't make its own light - it reflects light from the sun!</li>
                <li><strong>Stars:</strong> Stars are giant balls of hot gas that make their own light. The sun is actually a star!</li>
                <li><strong>Fireflies (Lightning Bugs):</strong> These tiny insects can make their own light glow from their bodies!</li>
                <li><strong>Volcanoes:</strong> When volcanoes erupt, hot lava glows red and gives off light.</li>
            </ol>
            <p><strong>Fun Fact:</strong> Without the sun, there would be no life on Earth. Plants need sunlight to grow, and animals (including us!) need plants for food.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> The Mighty Sun</div>
                <p>The sun is so bright that you should NEVER look directly at it! It can hurt your eyes. Always wear sunglasses or look away.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> The Moon Mystery</div>
                <p>The moon is like a giant mirror in the sky! It doesn't make its own light - it just bounces the sun's light toward Earth.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Twinkle, Twinkle</div>
                <p>Stars look tiny because they are very, very far away. Some stars are actually much bigger than our sun!</p>
            </div>
        `,
        taskInstructions: "Draw and label natural light sources, then complete a sorting activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Natural Light Sources</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and color the sun, the moon, and a star in the boxes below:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; text-align: center; padding: 5px;">
                            <strong>Sun</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center; padding: 5px;">
                            <strong>Moon</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center; padding: 5px;">
                            <strong>Star</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Natural Light Sources</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle all the natural sources of light:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                            <div>🌞 Sun</div>
                            <div>🕯️ Candle</div>
                            <div>⭐ Star</div>
                            <div>🌙 Moon</div>
                            <div>💡 Light bulb</div>
                            <div>🔥 Fire</div>
                            <div>🐞 Firefly</div>
                            <div>🔦 Flashlight</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Answer the Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What is the biggest natural light source for Earth?
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Does the moon make its own light? Explain.
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Look at the sky tonight. Can you see the moon or any stars? Draw what you see and share with the class tomorrow!",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Light Energy",
        subtopic: "Artificial Sources of Light",
        lessonContent: `
            <p>Today we'll learn about artificial light sources - light that is made by people!</p>
            <p><strong>Key Question:</strong> What are artificial sources of light, and how do we use them?</p>
            <p><strong>Introduction:</strong> Artificial light comes from things that people make. Before electric lights were invented, people used candles, oil lamps, and fire for light at night.</p>
            <p><strong>Artificial Sources of Light:</strong></p>
            <ol>
                <li><strong>Fire:</strong> One of the oldest artificial light sources. Campfires give heat and light.</li>
                <li><strong>Candle:</strong> A wax stick with a wick that burns to create a flame.</li>
                <li><strong>Torch (Flashlight):</strong> A portable light that uses batteries to shine a beam of light.</li>
                <li><strong>Lamp:</strong> A light that sits on a desk or table to help us read or work.</li>
                <li><strong>Light Bulb:</strong> An electric light that turns on with a switch. Found in homes, schools, and streets!</li>
                <li><strong>Street Light:</strong> Tall lights that light up roads and sidewalks at night.</li>
                <li><strong>Car Headlights:</strong> Lights on the front of cars that help drivers see at night.</li>
                <li><strong>Traffic Lights:</strong> Red, yellow, and green lights that help control traffic.</li>
            </ol>
            <p><strong>Safety First:</strong> Never touch a light bulb when it's on - it gets very hot! And always ask an adult before using candles or fire.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire"></i> Fire Safety</div>
                <p>Fire gives us light and heat, but it can be dangerous. Always have an adult nearby when using candles or matches!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Bright Ideas</div>
                <p>The first electric light bulb was invented by Thomas Edison in 1879. Before that, people used candles and oil lamps!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Lights Everywhere</div>
                <p>How many lights can you count in your home? Ceiling lights, lamps, refrigerator light, TV screen, phone screen - all are artificial light sources!</p>
            </div>
        `,
        taskInstructions: "Identify and draw artificial light sources you use every day.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Artificial Light Sources</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a candle, a flashlight (torch), and a light bulb:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; text-align: center; padding: 5px;">
                            <strong>Candle</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center; padding: 5px;">
                            <strong>Flashlight/Torch</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center; padding: 5px;">
                            <strong>Light Bulb</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Home Light Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List 5 artificial light sources you have in your home:
                    <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Check Your Understanding</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What do we call light that is made by people?
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name one safety rule when using artificial light sources:
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Count how many artificial light sources are in your bedroom. Write the number and list three of them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Light Energy",
        subtopic: "Comparing Natural and Artificial Light Sources",
        lessonContent: `
            <p>Today we'll compare natural light sources with artificial light sources. How are they the same? How are they different?</p>
            <p><strong>Key Question:</strong> What is the same and what is different about natural and artificial light?</p>
            <p><strong>Review - Two Types of Light Sources:</strong></p>
            <ul>
                <li><strong>Natural Light Sources:</strong> Light that comes from nature (sun, stars, fireflies)</li>
                <li><strong>Artificial Light Sources:</strong> Light that is made by people (bulbs, candles, flashlights)</li>
            </ul>
            <p><strong>Compare (How are they the same?):</strong></p>
            <ul>
                <li>Both help us see in the dark</li>
                <li>Both can be bright or dim</li>
                <li>Both travel in straight lines</li>
                <li>Both can create shadows</li>
            </ul>
            <p><strong>Contrast (How are they different?):</strong></p>
            <ul>
                <li><strong>Natural light</strong> comes from nature; <strong>artificial light</strong> is made by people</li>
                <li><strong>Natural light</strong> (sun) is free; <strong>artificial light</strong> costs money for electricity or batteries</li>
                <li><strong>Natural light</strong> is always available during the day; <strong>artificial light</strong> can be turned on anytime</li>
                <li><strong>Natural light</strong> can't be turned off; <strong>artificial light</strong> has an on/off switch</li>
                <li><strong>The sun</strong> is the brightest natural light; <strong>artificial lights</strong> are usually not as bright as the sun</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Let's Compare!</div>
                <p>Think of natural light like a gift from nature - it's always there during the day. Artificial light is like a tool we invented - we can control when it's on or off.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Day and Night</div>
                <p>During the day, we use natural light from the sun. At night, we need artificial light to see - like lamps, flashlights, and street lights!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Saving Energy</div>
                <p>Using natural light during the day saves electricity! Opening curtains instead of turning on lights is good for the Earth and saves money.</p>
            </div>
        `,
        taskInstructions: "Complete a Venn diagram comparing natural and artificial light sources.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Venn Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the Venn diagram to compare natural and artificial light sources:
                    <div style="margin-top: 10px; text-align: center;">
                        <div style="display: flex; justify-content: center; gap: 5px;">
                            <div style="border: 2px solid #4CAF50; border-radius: 50%; width: 180px; height: 180px; position: relative; background: #e8f5e9;">
                                <div style="position: absolute; top: -25px; left: 60px;"><strong>Natural Light</strong></div>
                                <div style="position: absolute; top: 70px; left: 15px; font-size: 12px;">Sun</div>
                                <div style="position: absolute; top: 100px; left: 15px; font-size: 12px;">Stars</div>
                                <div style="position: absolute; top: 130px; left: 15px; font-size: 12px;">Fireflies</div>
                            </div>
                            <div style="border: 2px solid #FF9800; border-radius: 50%; width: 180px; height: 180px; position: relative; background: #fff3e0;">
                                <div style="position: absolute; top: -25px; left: 55px;"><strong>Artificial Light</strong></div>
                                <div style="position: absolute; top: 70px; left: 110px; font-size: 12px;">Bulb</div>
                                <div style="position: absolute; top: 100px; left: 110px; font-size: 12px;">Candle</div>
                                <div style="position: absolute; top: 130px; left: 110px; font-size: 12px;">Flashlight</div>
                            </div>
                        </div>
                        <div style="border: 2px solid #9C27B0; border-radius: 0; width: 80px; margin: 0 auto; margin-top: -50px; background: #f3e5f5; padding: 20px;">
                            <strong>Both</strong><br>
                            <span style="font-size: 12px;">Help us see</span><br>
                            <span style="font-size: 12px;">Make shadows</span><br>
                            <span style="font-size: 12px;">Travel in lines</span>
                            <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write "N" for natural or "A" for artificial next to each light source:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Sun</div>
                        <div>___ Light bulb</div>
                        <div>___ Firefly</div>
                        <div>___ Candle</div>
                        <div>___ Stars</div>
                        <div>___ Flashlight</div>
                        <div>___ Moon</div>
                        <div>___ Street light</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it good to use natural light during the day instead of turning on electric lights?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of your home during the day (using natural light) and at night (using artificial light). Label the light sources.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Light Energy",
        subtopic: "Light and Shadow Play",
        lessonContent: `
            <p>Today is all about FUN with light! We'll explore how light creates shadows and play with our own shadow puppets.</p>
            <p><strong>Key Question:</strong> How do shadows form, and can we change their size and shape?</p>
            <p><strong>What is a Shadow?</strong></p>
            <p>A shadow is a dark area where light cannot reach because something is blocking it. Light travels in straight lines - when an object blocks the light, a shadow appears behind it!</p>
            <p><strong>Shadow Facts:</strong></p>
            <ul>
                <li>You need TWO things to make a shadow: a light source and an object</li>
                <li>Shadows are longer when the light is low (morning or afternoon)</li>
                <li>Shadows are shorter when the light is high (noon time)</li>
                <li>You can make shadow shapes with your hands - called shadow puppets!</li>
                <li>The closer an object is to the light, the bigger its shadow</li>
                <li>The farther an object is from the light, the smaller its shadow</li>
            </ul>
            <p><strong>Let's Play!</strong></p>
            <p>Today you will use flashlights or a lamp to create shadows. You'll learn how to make shadow puppets and see how moving the light changes the shadow!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Shadow Puppets</div>
                <p>You can make a bird with your hands! Cross your thumbs and wiggle your fingers like wings. Shine a light on your hands against a wall to see the shadow bird fly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Sun and Shadows</div>
                <p>Have you noticed your shadow is very long in the morning and evening, but short at lunchtime? That's because the sun's position in the sky changes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Big or Small?</div>
                <p>Hold your hand close to a flashlight - big shadow! Hold your hand far away - small shadow! Try it yourself!</p>
            </div>
        `,
        taskInstructions: "Conduct shadow experiments and create shadow puppet animals.",
        taskContent: `
            <div class="content-box">
                <p><strong>Activity A: Shadow Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With a partner and a flashlight, test these ideas:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Hold a toy or your hand close to the flashlight. What happens to the shadow? _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>• Hold the same object far from the flashlight. What happens? _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>• Move the flashlight to the side of the object. Where does the shadow go? _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Activity B: Shadow Puppet Animals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use your hands to make shadow puppets. Draw the shadow shape you made:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What animal did you make? How did you move your hands?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Activity C: Shadow Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> On a sunny day (or using a flashlight), trace your friend's shadow on paper:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Trace your shadow here or draw what you observed]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Shadow Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What two things do you need to make a shadow?
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> When is your shadow the longest - morning, noon, or evening?
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "With a parent's help, use a flashlight at home to make three different shadow animals. Practice and be ready to show the class tomorrow!",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Light Energy",
        subtopic: "Assessment - Topic 2.4",
        lessonContent: `
            <p>Today we will review everything we learned about light sources this week, then complete our assessment!</p>
            <p><strong>Week 9 Review:</strong></p>
            <ul>
                <li><strong>Monday:</strong> Natural sources of light (sun, moon, stars, fireflies)</li>
                <li><strong>Tuesday:</strong> Artificial sources of light (fire, candle, torch, lamp, bulb)</li>
                <li><strong>Wednesday:</strong> Comparing natural vs. artificial light</li>
                <li><strong>Thursday:</strong> Shadows - how they form and how to change them</li>
            </ul>
            <p><strong>Key Things to Remember:</strong></p>
            <ol>
                <li>Natural light comes from nature; artificial light is made by people</li>
                <li>The sun is Earth's main natural light source</li>
                <li>The moon reflects light from the sun - it doesn't make its own light</li>
                <li>A shadow forms when an object blocks light</li>
                <li>Moving the light or the object changes the shadow's size and shape</li>
            </ol>
            <p><strong>Assessment Time!</strong></p>
            <p>Complete the questions below to show what you learned about light this week. Take your time and do your best!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Study Tip</div>
                <p>Think about the lights you see every day. Are they natural or artificial? Can you make shadows with them?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> You've Got This!</div>
                <p>Remember: If you're not sure about an answer, think about what we learned in class. Take a deep breath and try your best!</p>
            </div>
        `,
        taskInstructions: "Complete the assessment to demonstrate understanding of light sources and shadows.",
        taskContent: `
            <div class="content-box">
                <p><strong>Assessment: Topic 2.4 - Sources of Light</strong></p>
                <p><em>Name: _________________________ Date: _________________</em></p>
            </div>
            
            <div class="content-box">
                <p><strong>Section A: Multiple Choice (Circle the correct answer)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Which of these is a NATURAL source of light?
                    <div style="margin-left: 20px;">A. Light bulb &nbsp;&nbsp; B. Candle &nbsp;&nbsp; C. Sun &nbsp;&nbsp; D. Flashlight</div>
                    <div class="answer-space" style="height: 20px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Which of these is an ARTIFICIAL source of light?
                    <div style="margin-left: 20px;">A. Stars &nbsp;&nbsp; B. Moon &nbsp;&nbsp; C. Firefly &nbsp;&nbsp; D. Lamp</div>
                    <div class="answer-space" style="height: 20px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What do you need to make a shadow?
                    <div style="margin-left: 20px;">A. Water and a cup &nbsp;&nbsp; B. Light and an object &nbsp;&nbsp; C. Paper and pencil &nbsp;&nbsp; D. Sound and a wall</div>
                    <div class="answer-space" style="height: 20px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> The moon gets its light from:
                    <div style="margin-left: 20px;">A. The Earth &nbsp;&nbsp; B. It makes its own light &nbsp;&nbsp; C. The sun &nbsp;&nbsp; D. Street lights</div>
                    <div class="answer-space" style="height: 20px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section B: True or False</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write T for True or F for False:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ The sun is an artificial light source.</div>
                        <div>___ A candle makes its own light.</div>
                        <div>___ Shadows are bigger when an object is closer to the light.</div>
                        <div>___ Fireflies are natural light sources.</div>
                        <div>___ You can turn off the sun.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section C: Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write each light source in the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><em>Words to sort: sun, light bulb, star, candle, firefly, flashlight, moon, lamp</em></p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                            <div style="border: 1px solid #4CAF50; padding: 10px;">
                                <strong>Natural Light Sources</strong>
                                <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                            </div>
                            <div style="border: 1px solid #FF9800; padding: 10px;">
                                <strong>Artificial Light Sources</strong>
                                <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section D: Short Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Explain why the moon is called a "natural light source" even though it doesn't make its own light.
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Name two ways you can change the size of a shadow.
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section E: Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Draw a picture showing a light source, an object, and its shadow. Label each part.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Bonus (Optional):</strong> What is your favorite source of light and why?</p>
                <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
            </div>
        `,
        homework: "No homework this weekend! Enjoy observing the natural and artificial light around you. Next week: More about light and how it helps us see!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2ScienceWeek9);
    console.log("grade2-science-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2ScienceWeek9);
    console.log("grade2-science-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2ScienceWeek9',
        metadata: grade2ScienceWeek9.metadata,
        days: grade2ScienceWeek9
    });
    console.log("grade2-science-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2ScienceWeek9 = grade2ScienceWeek9;
console.log("grade2-science-week9.js loaded and registered successfully");