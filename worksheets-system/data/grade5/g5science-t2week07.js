// Grade 5 Science - Term 2 Week 7 Data
const grade5ScienceWeek7 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 2,
        week: 7,
        title: "Who Has a Backbone?",
        description: "Exploring vertebrates: the five classes, warm-blooded vs. cold-blooded, and vertebrate life cycles"
    },
    
    monday: {
        subject: "Science",
        topic: "Animal Classification",
        subtopic: "The Five Classes of Vertebrates",
        lessonContent: `
            <p>Welcome to our exploration of vertebrates! Today we'll discover what makes an animal a vertebrate and learn about the five main groups.</p>
            <p><strong>Key Question:</strong> What is that hard "zip" of bones in your neck and back?</p>
            <p><strong>Introduction:</strong> Feel your own neck and back. Can you feel the hard bumps of bone? That's your backbone (also called your spine)! Animals that have a backbone are called <strong>Vertebrates</strong>.</p>
            <p><strong>Definition:</strong> Vertebrates are animals that have a backbone or spinal column.</p>
            <p><strong>The Big 5 Classes of Vertebrates:</strong></p>
            <ol>
                <li><strong>Mammals:</strong> Have fur or hair, feed milk to their babies, breathe with lungs</li>
                <li><strong>Birds:</strong> Have feathers, wings, beaks, lay eggs, breathe with lungs</li>
                <li><strong>Fish:</strong> Have scales, live in water, breathe with gills, lay eggs</li>
                <li><strong>Reptiles:</strong> Have dry scaly skin, lay eggs on land, breathe with lungs</li>
                <li><strong>Amphibians:</strong> Have moist smooth skin, lay eggs in water, can breathe through skin</li>
            </ol>
            <p><strong>Key "Look-For" Traits:</strong></p>
            <ul>
                <li>Fur/Hair → Mammal</li>
                <li>Feathers → Bird</li>
                <li>Scales (dry) → Reptile or Fish</li>
                <li>Moist Skin → Amphibian</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Mammal Example</div>
                <p>Dogs, cats, elephants, whales, and humans are all mammals! We all have fur (or hair) and mother mammals feed milk to their babies.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dove"></i> Bird Example</div>
                <p>Eagles, penguins, ostriches, and parrots are all birds. Even though penguins can't fly, they still have feathers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Example</div>
                <p>Goldfish, sharks, clownfish, and salmon are all fish. They live in water and breathe using gills.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lizard"></i> Reptile Example</div>
                <p>Snakes, lizards, turtles, crocodiles, and tortoises are reptiles. They have dry, scaly skin and lay eggs on land.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Amphibian Example</div>
                <p>Frogs, toads, salamanders, and newts are amphibians. They start life in water and develop lungs as adults!</p>
            </div>
        `,
        taskInstructions: "Divide a page into five boxes. Draw one animal for each group and label it.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Five Boxes Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Divide your page into five boxes. In each box, draw an animal from each vertebrate class and label it with the class name:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                        <div style="border: 2px solid #4A90E2; padding: 10px; text-align: center;">
                            <strong>Mammals</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 2px solid #4A90E2; padding: 10px; text-align: center;">
                            <strong>Birds</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 2px solid #4A90E2; padding: 10px; text-align: center;">
                            <strong>Fish</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 2px solid #4A90E2; padding: 10px; text-align: center;">
                            <strong>Reptiles</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 2px solid #4A90E2; padding: 10px; text-align: center;">
                            <strong>Amphibians</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vertebrate Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each animal below. Circle which class it belongs to:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Penguin → Mammal / Bird / Fish / Reptile / Amphibian</div>
                        <div>• Lizard → Mammal / Bird / Fish / Reptile / Amphibian</div>
                        <div>• Dolphin → Mammal / Bird / Fish / Reptile / Amphibian</div>
                        <div>• Frog → Mammal / Bird / Fish / Reptile / Amphibian</div>
                        <div>• Shark → Mammal / Bird / Fish / Reptile / Amphibian</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What makes a vertebrate different from an invertebrate (an animal without a backbone)?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which vertebrate class do humans belong to? What evidence supports this?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 animals in your home or neighborhood. Write down which vertebrate class each belongs to and why.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Animal Classification",
        subtopic: "Warm-Blooded vs. Cold-Blooded",
        lessonContent: `
            <p>Today we'll learn how vertebrates control their body temperature and how they breathe!</p>
            <p><strong>Key Question:</strong> Why do lizards sunbathe on rocks while dogs just run around to stay warm?</p>
            <p><strong>Warm-Blooded (Endotherms):</strong></p>
            <ul>
                <li>Animals that make their own body heat from inside their bodies</li>
                <li>Their body temperature stays the same even when the environment changes</li>
                <li><strong>Examples:</strong> Mammals and Birds</li>
                <li><strong>How they stay warm:</strong> Shivering, growing thick fur/feathers, sweating to cool down</li>
            </ul>
            <p><strong>Cold-Blooded (Ectotherms):</strong></p>
            <ul>
                <li>Animals that rely on the sun or water to warm up their bodies</li>
                <li>Their body temperature changes with the environment</li>
                <li><strong>Examples:</strong> Fish, Reptiles, and Amphibians</li>
                <li><strong>How they manage temperature:</strong> Basking in the sun (warming up), hiding in shade or water (cooling down)</li>
            </ul>
            <p><strong>How Vertebrates Breathe:</strong></p>
            <ul>
                <li><strong>Gills:</strong> Fish breathe using gills that remove oxygen from water</li>
                <li><strong>Lungs:</strong> Mammals, birds, reptiles, and adult amphibians breathe using lungs</li>
                <li><strong>Skin:</strong> Amphibians can also breathe through their moist skin!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sunbathing Lizard</div>
                <p>A lizard is cold-blooded. In the morning, it lies on a warm rock to absorb heat from the sun. This gives it energy to hunt for food!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Shivering Dog</div>
                <p>A dog is warm-blooded. When it's cold, its body shivers to generate heat. When it's hot, it pants to cool down.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Breathing</div>
                <p>Fish have gills that act like strainers. Water passes over the gills, and oxygen from the water enters the fish's blood.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Frog Skin Breathing</div>
                <p>Frogs can absorb oxygen through their moist skin. That's why they need to stay wet - their skin helps them breathe!</p>
            </div>
        `,
        taskInstructions: "Create a 'Sort Chart' listing local animals and sorting them into Warm-blooded or Cold-blooded.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List 10 local animals and sort them into Warm-blooded or Cold-blooded:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #E74C3C; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Warm-Blooded (Endotherms)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Cold-Blooded (Ectotherms)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    <em>Mammals and Birds go here:</em><br><br>
                                    <div class="answer-space" style="height: 150px;"></div>
                                </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    <em>Fish, Reptiles, and Amphibians go here:</em><br><br>
                                    <div class="answer-space" style="height: 150px;"></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Temperature Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Why do cold-blooded animals need to bask in the sun?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How do warm-blooded animals stay warm in cold weather?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Breathing Match</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match each animal to how it breathes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Goldfish → _________ (Gills / Lungs / Skin)</div>
                        <div>• Frog → _________ (Gills / Lungs / Skin)</div>
                        <div>• Eagle → _________ (Gills / Lungs / Skin)</div>
                        <div>• Snake → _________ (Gills / Lungs / Skin)</div>
                        <div>• Whale → _________ (Gills / Lungs / Skin)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Complete the Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A crocodile is cold-blooded, so in winter it might _________.
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A bird is warm-blooded, so in winter it might _________.
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Watch animals in your neighborhood for 15 minutes. List how many warm-blooded vs. cold-blooded animals you see.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Animal Classification",
        subtopic: "Vertebrate Life Cycles",
        lessonContent: `
            <p>Today we'll explore how different vertebrates are born and how they grow and change throughout their lives!</p>
            <p><strong>Key Question:</strong> How is a baby frog different from a baby bird?</p>
            <p><strong>Eggs vs. Live Birth:</strong></p>
            <ul>
                <li><strong>Live Birth:</strong> Most mammals (except platypus and echidna) give birth to live young. The baby grows inside the mother's body.</li>
                <li><strong>Eggs:</strong> Birds, reptiles, amphibians, and fish lay eggs. The baby grows inside the egg outside the mother's body.</li>
            </ul>
            <p><strong>Metamorphosis - The Amazing Change:</strong></p>
            <ul>
                <li><strong>What is metamorphosis?</strong> A dramatic change in body form during an animal's life cycle</li>
                <li><strong>Amphibians (Frogs):</strong>
                    <ul>
                        <li>Start as eggs in water</li>
                        <li>Hatch into tadpoles (have gills, tail, live in water)</li>
                        <li>Grow legs and lungs</li>
                        <li>Lose tail and become adult frog (breathes air, lives on land)</li>
                    </ul>
                </li>
                <li><strong>Birds:</strong> Hatch from eggs looking like small versions of their parents (no metamorphosis)</li>
                <li><strong>Mammals:</strong> Born looking like tiny versions of their parents</li>
            </ul>
            <p><strong>Comparison:</strong> Fish and reptiles also hatch from eggs looking like small adults - they don't go through metamorphosis like frogs!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Frog Metamorphosis</div>
                <p>A tadpole looks nothing like a frog! It has a tail for swimming and gills for breathing underwater. Over several weeks, it grows legs, develops lungs, and absorbs its tail.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Chicken Life Cycle</div>
                <p>A chicken starts as an egg. After 21 days, a chick hatches. The chick looks like a small fluffy chicken - no dramatic change like a frog!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby-carriage"></i> Human Baby</div>
                <p>Human babies (mammals) are born looking like small humans. They grow bigger over time but don't change their body form dramatically.</p>
            </div>
        `,
        taskInstructions: "Draw the life cycle of a frog or a bird, labeling each stage clearly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Life Cycle Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the life cycle of a frog OR a bird. Label each stage clearly:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Stages of Frog Metamorphosis</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put the frog life cycle stages in order (1-5):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Adult frog with 4 legs, no tail</div>
                        <div>___ Eggs laid in water</div>
                        <div>___ Tadpole with back legs</div>
                        <div>___ Froglet with 4 legs and small tail</div>
                        <div>___ Tadpole with gills and tail</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare Life Cycles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the comparison chart:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Feature</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Frog</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Bird</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Born from eggs or live birth?</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Does it go through metamorphosis?</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Where does it live as a baby?</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">What does the baby look like compared to adult?</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think frog tadpoles live in water but adult frogs can live on land?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name one vertebrate that gives live birth and one that lays eggs.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw the life cycle of a butterfly (insect) and compare it to a frog's life cycle. How are they similar? How are they different?",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek7);
    console.log("grade5-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek7);
    console.log("grade5-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek7',
        metadata: grade5ScienceWeek7.metadata,
        days: grade5ScienceWeek7
    });
    console.log("grade5-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek7 = grade5ScienceWeek7;
console.log("grade5-science-week7.js loaded and registered successfully");