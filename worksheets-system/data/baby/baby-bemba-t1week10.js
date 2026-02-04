// Baby Class Bemba - Week 10 Data (Animals at Home)
const babyBembaWeek10 = {
    metadata: {
        grade: "baby",
        subject: "Zambian Language (Icibemba)",
        week: 10,
        title: "Inama sha pa Ng’anda – Animals at Home",
        description: "Learning to name common domestic animals in Bemba"
    },
    
    monday: {
        subject: "Bemba",
        topic: "Inama sha pa Ng’anda (Animals at Home)",
        subtopic: "0.1.1.7 Names of Animals – Common domestic animals",
        lessonContent: `
            <p>Shani mwana! Welcome to Bemba class! Today we will learn about animals that live with us or near our homes.</p>
            <p><strong>Key Concept:</strong> Animals that live with people are called domestic animals (Inama sha pa ng’anda).</p>
            <p><strong>Introduction:</strong></p>
            <div style="padding: 10px; background-color: #FFF3E0; border-radius: 5px; margin: 10px 0;">
                <p><i class="fas fa-volume-up" style="color: #FF9800;"></i> Let's make an animal sound: <strong>"Kokoliliko!"</strong></p>
                <p>What animal makes this sound? Yes, it's <strong>Inkoko</strong> (Chicken)!</p>
            </div>
            <p><strong>Vocabulary - New Bemba Words:</strong></p>
            <ul>
                <li><strong>Imbwili / Paka</strong> – Cat</li>
                <li><strong>Imbwa</strong> – Dog</li>
                <li><strong>Impululu / Inkoko</strong> – Chicken</li>
                <li><strong>Imfwele / Imbebe</strong> – Goat</li>
            </ul>
            <p><strong>Animal Sounds:</strong> Each animal has its own voice!</p>
            <ul>
                <li><strong>Imbwa</strong> itila... <strong>Boof! Boof!</strong> (Dog says... Woof! Woof!)</li>
                <li><strong>Imbwili</strong> itila... <strong>Myaoo!</strong> (Cat says... Meow!)</li>
                <li><strong>Inkoko</strong> itila... <strong>Kokoliliko!</strong> (Chicken says... Cock-a-doodle-doo!)</li>
                <li><strong>Imfwele</strong> itila... <strong>Mbee! Mbee!</strong> (Goat says... Baa! Baa!)</li>
            </ul>
            <p><strong>Where do they live?</strong> Some animals live inside the house (like a cat), some live outside (like a goat).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat" style="color: #9C27B0;"></i> Imbwili / Paka (Cat)</div>
                <p>"Iyi ni imbwili." – This is a cat.</p>
                <p>Sound: "Myaoo!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog" style="color: #795548;"></i> Imbwa (Dog)</div>
                <p>"Iyi ni imbwa." – This is a dog.</p>
                <p>Sound: "Boof! Boof!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-kiwi-bird" style="color: #F44336;"></i> Inkoko (Chicken)</div>
                <p>"Iyi ni inkoko." – This is a chicken.</p>
                <p>Sound: "Kokoliliko!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-horse-head" style="color: #4CAF50;"></i> Imfwele (Goat)</div>
                <p>"Iyi ni imfwele." – This is a goat.</p>
                <p>Sound: "Mbee! Mbee!"</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice naming domestic animals in Bemba.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Animal Sound Game:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p>When teacher makes an animal sound, shout the Bemba name!</p>
                    <div>Teacher: "Boof! Boof!" → Children: "<strong>Imbwa!</strong>"</div>
                    <div>Teacher: "Myaoo!" → Children: "<strong>Imbwili!</strong>"</div>
                    <div>Teacher: "Kokoliliko!" → Children: "<strong>Inkoko!</strong>"</div>
                    <div>Teacher: "Mbee! Mbee!" → Children: "<strong>Imfwele!</strong>"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw and Label:
                <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center;">
                        <div style="font-size: 18px;">Draw an animal from home</div>
                        <div style="font-size: 16px; font-weight: bold; margin-top: 5px;">Bemba name: ______________</div>
                    </div>
                </div>
                <div style="margin-top: 10px;">Choose: ☐ Imbwili ☐ Imbwa ☐ Inkoko ☐ Imfwele</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Point and Name:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                    <p>Teacher shows a picture. Point and say the Bemba name:</p>
                    <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 50px; width: 50px; border: 1px solid #000; margin: 0 auto;"></div>
                            <div>Imbwa</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 50px; width: 50px; border: 1px solid #000; margin: 0 auto;"></div>
                            <div>Imbwili</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 50px; width: 50px; border: 1px solid #000; margin: 0 auto;"></div>
                            <div>Inkoko</div>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="height: 50px; width: 50px; border: 1px solid #000; margin: 0 auto;"></div>
                            <div>Imfwele</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Point to an animal at home (or a picture) and say its Bemba name to a family member.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Bemba",
        topic: "Inama sha pa Ng’anda – Sorting and Singing",
        subtopic: "0.1.1.7.1 Naming and classifying domestic animals",
        lessonContent: `
            <p>Mwaiseni bana! Today we will practice more with our animal friends and sing a fun song!</p>
            <p><strong>Review Vocabulary:</strong></p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0;">
                <div style="padding: 8px; background-color: #E1F5FE; border-radius: 5px;"><strong>Imbwili</strong> – Cat</div>
                <div style="padding: 8px; background-color: #F1F8E9; border-radius: 5px;"><strong>Imbwa</strong> – Dog</div>
                <div style="padding: 8px; background-color: #FFF3E0; border-radius: 5px;"><strong>Inkoko</strong> – Chicken</div>
                <div style="padding: 8px; background-color: #FCE4EC; border-radius: 5px;"><strong>Imfwele</strong> – Goat</div>
            </div>
            <p><strong>Sorting Animals:</strong> Where do they live?</p>
            <ul>
                <li><strong>Inside the house (Mu ng'anda):</strong> Imbwili (cat) – sometimes sleeps inside!</li>
                <li><strong>Outside the house (Panse ya ng'anda):</strong> Imbwa (dog), Inkoko (chicken), Imfwele (goat)</li>
            </ul>
            <p><strong>Song Time!</strong> Let's sing a Bemba version of "Old MacDonald Had a Farm":</p>
            <div style="padding: 15px; background-color: #FFF9C4; border-radius: 5px; margin: 10px 0;">
                <p><strong>"Ba MacDonald bakwete i-famu!"</strong></p>
                <p>Ba MacDonald bakwete i-famu, E-I-E-I-O!<br>
                Nomba pali imbwa, E-I-E-I-O!<br>
                Kuno boof-boof, kulya boof-boof,<br>
                Kuno boof, kulya boof, kunonse boof-boof!<br>
                Ba MacDonald bakwete i-famu, E-I-E-I-O!</p>
            </div>
            <p><strong>Conclusion:</strong> Animals are our friends. We take care of them and they give us food, company, and help.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home" style="color: #8BC34A;"></i> Animals Inside</div>
                <p>"Imbwili iisa mu ng'anda." – The cat comes inside the house.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #795548;"></i> Animals Outside</div>
                <p>"Imfweele ishala panse." – The goat stays outside.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music" style="color: #9C27B0;"></i> Bemba Animal Song</div>
                <p>Sing with actions! When we say "imbwa," bark like a dog. When we say "inkoko," flap wings!</p>
            </div>
        `,
        taskInstructions: "Complete the sorting, drawing, and singing activities about domestic animals.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw or place animals in the correct area:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 15px; background-color: #E3F2FD; border-radius: 5px; margin-right: 10px;">
                            <div style="font-weight: bold; text-align: center;">Mu ng'anda<br>(Inside house)</div>
                            <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 1px dashed #2196F3;"></div>
                            <div style="margin-top: 10px; font-size: 14px;">Example: Imbwili</div>
                        </div>
                        <div style="flex: 1; padding: 15px; background-color: #C8E6C9; border-radius: 5px;">
                            <div style="font-weight: bold; text-align: center;">Panse<br>(Outside)</div>
                            <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 1px dashed #4CAF50;"></div>
                            <div style="margin-top: 10px; font-size: 14px;">Examples: Imbwa, Inkoko, Imfwele</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animal Song with Actions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sing "Ba MacDonald bakwete i-famu" and do the actions:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFECB3; border-radius: 5px;">
                        <div><strong>Verse 1 – Imbwa:</strong> Bark and pat your legs – "Boof! Boof!"</div>
                        <div><strong>Verse 2 – Inkoko:</strong> Flap arms and say – "Kokoliliko!"</div>
                        <div><strong>Verse 3 – Imfwele:</strong> Jump lightly and say – "Mbee! Mbee!"</div>
                        <div><strong>Verse 4 – Imbwili:</strong> Stretch like a cat and say – "Myaoo!"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Match the Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line from the animal to its sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; align-items: center; margin-bottom: 5px;">
                            <div style="width: 80px;">Imbwa</div>
                            <div style="flex: 1; border-bottom: 1px dotted #000; margin: 0 10px;"></div>
                            <div>Myaoo!</div>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 5px;">
                            <div style="width: 80px;">Imbwili</div>
                            <div style="flex: 1; border-bottom: 1px dotted #000; margin: 0 10px;"></div>
                            <div>Boof! Boof!</div>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 5px;">
                            <div style="width: 80px;">Inkoko</div>
                            <div style="flex: 1; border-bottom: 1px dotted #000; margin: 0 10px;"></div>
                            <div>Mbee! Mbee!</div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 80px;">Imfwele</div>
                            <div style="flex: 1; border-bottom: 1px dotted #000; margin: 0 10px;"></div>
                            <div>Kokoliliko!</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Favorite Animal</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite domestic animal:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Write: "Iyi ni <span class="answer-space" style="width: 120px;"></span>." (This is a ______.)</div>
                        <div>Practice saying: "Ndefwaya <strong>[animal name]</strong>." (I like ______.)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach one family member the Bemba names for two animals: Imbwa (dog) and Inkoko (chicken).",
        homeworkDue: "Wednesday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyBembaWeek10);
    console.log("bemba-week10-animals.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyBembaWeek10);
    console.log("bemba-week10-animals.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyBembaWeek10',
        metadata: babyBembaWeek10.metadata,
        days: babyBembaWeek10
    });
    console.log("bemba-week10-animals.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyBembaWeek10 = babyBembaWeek10;
console.log("bemba-week10-animals.js loaded and registered successfully");