// Grade 5 Science - Term 1 Week 2 Data
const grade5ScienceWeek2 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 1,
        week: 2,
        title: "The Skeletal System",
        description: "Exploring the human skeletal system: structural components, axial skeleton (skull & vertebral column), and appendicular skeleton (ribcage, girdles & limbs)"
    },
    
    monday: {
        subject: "Science",
        topic: "Human Biology",
        subtopic: "Introduction to the Human Skeletal System",
        lessonContent: `
            <p>Welcome to our exploration of the human skeletal system! Today we'll discover the amazing framework that supports our bodies.</p>
            <p><strong>Key Question:</strong> What would we look like without our bones?</p>
            <p><strong>Introduction:</strong> The skeletal system is the internal framework of the human body. An adult has 206 bones! Without bones, we would be like jellyfish - unable to stand, walk, or protect our vital organs.</p>
            <p><strong>Main Functions of the Skeletal System:</strong></p>
            <ol>
                <li><strong>Support:</strong> Bones provide a hard framework that holds our body upright</li>
                <li><strong>Protection:</strong> Bones surround and protect vital organs (skull protects brain, ribcage protects heart and lungs)</li>
                <li><strong>Movement:</strong> Muscles attach to bones to help us move</li>
                <li><strong>Blood Cell Production:</strong> Bones produce red and white blood cells</li>
                <li><strong>Mineral Storage:</strong> Bones store calcium and other minerals</li>
            </ol>
            <p><strong>Main Parts of the Skeleton:</strong></p>
            <ul>
                <li><strong>Skull:</strong> Protects the brain</li>
                <li><strong>Vertebral Column (Spine):</strong> Supports the body and protects the spinal cord</li>
                <li><strong>Ribcage:</strong> Protects the heart and lungs</li>
                <li><strong>Upper Limbs:</strong> Arms, shoulders, and hands</li>
                <li><strong>Lower Limbs:</strong> Legs, pelvis, and feet</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> The Body's Framework</div>
                <p>Think of bones as the steel beams inside a building. Without these beams, the building would collapse. Your skeleton works the same way!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-helmet-battle"></i> Built-in Protection</div>
                <p>Your skull is like a natural helmet. It's one of the strongest parts of your body because it protects your brain - your body's control center!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dumbbell"></i> Movable Joints</div>
                <p>Your skeleton isn't one solid piece! It has movable joints that allow you to bend, twist, wave, and run. Without joints, you'd be as stiff as a statue.</p>
            </div>
        `,
        taskInstructions: "Draw and label an overview of the full skeleton, then complete the function matching activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Full Skeleton Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label the main parts of the human skeleton:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Skull</div>
                        <div>• Vertebral Column (Spine)</div>
                        <div>• Ribcage</div>
                        <div>• Arm bones</div>
                        <div>• Leg bones</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Function Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each bone/part to its main job:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Skull ___    a. Protects the heart and lungs</div>
                        <div>2. Ribcage ___   b. Protects the brain</div>
                        <div>3. Spine ___    c. Helps us move and supports weight</div>
                        <div>4. Leg bones ___  d. Protects the spinal cord and supports the body</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why do you think babies have more bones than adults (about 300) that fuse together as they grow?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What would happen if we didn't have a skeleton?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member to help you count how many bones you can feel in your own body (skull, ribs, spine, arms, legs). Write down what you discover.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Human Biology",
        subtopic: "The Upper Axial Skeleton: Skull & Vertebral Column",
        lessonContent: `
            <p>Today we'll take a closer look at two very important parts of your skeleton - your skull and your spine!</p>
            <p><strong>Key Question:</strong> Why is your skull shaped the way it is? Why does your spine have curves?</p>
            <p><strong>The Skull (Cranium):</strong></p>
            <ul>
                <li>Made up of 22 bones that are fused together in adults</li>
                <li>The cranium (upper part) protects the brain</li>
                <li>The facial bones form our face and hold our eyes, nose, and mouth</li>
                <li>The only movable bone in the skull is the mandible (lower jaw bone)</li>
            </ul>
            <p><strong>The Vertebral Column (Spine/Backbone):</strong></p>
            <ul>
                <li>Made up of 33 small bones called vertebrae (24 are movable)</li>
                <li>The vertebrae are stacked on top of each other like building blocks</li>
                <li>Between each vertebra are soft discs that act as shock absorbers</li>
                <li>The spine has four natural curves that help with balance and flexibility</li>
                <li>It protects the spinal cord (the superhighway of nerves from your brain)</li>
            </ul>
            <p><strong>Spine Sections (from top to bottom):</strong></p>
            <ol>
                <li><strong>Cervical Spine:</strong> Neck region (7 vertebrae)</li>
                <li><strong>Thoracic Spine:</strong> Upper/mid back (12 vertebrae, each connects to a rib)</li>
                <li><strong>Lumbar Spine:</strong> Lower back (5 vertebrae - the largest and strongest)</li>
                <li><strong>Sacrum:</strong> 5 fused vertebrae at the base of the spine</li>
                <li><strong>Coccyx:</strong> 4 fused vertebrae (the tailbone)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-motorcycle"></i> The Helmet Comparison</div>
                <p>Your skull is like a natural motorcycle helmet! It's hard, curved, and designed to protect your most important organ - your brain.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spring"></i> Built-in Springs</div>
                <p>The discs between your vertebrae act like tiny springs or cushions. When you jump or run, they absorb the shock so your spine doesn't get damaged!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> The Movable Jaw</div>
                <p>Your lower jaw (mandible) is the only bone in your skull that moves. It allows you to talk, chew, and yawn. Try wiggling your jaw right now!</p>
            </div>
        `,
        taskInstructions: "Draw and label the skull and vertebral column, then answer detailed questions about their structure.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Skull - Structure Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label the main parts of the skull:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Cranium (brain case)</div>
                        <div>• Eye sockets</div>
                        <div>• Nasal bone</div>
                        <div>• Upper jaw (maxilla)</div>
                        <div>• Lower jaw (mandible)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Vertebral Column - Structure Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label the sections of the spine:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Cervical (neck - 7 vertebrae)</div>
                        <div>• Thoracic (upper back - 12 vertebrae)</div>
                        <div>• Lumbar (lower back - 5 vertebrae)</div>
                        <div>• Sacrum (5 fused vertebrae)</div>
                        <div>• Coccyx (tailbone - 4 fused vertebrae)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Detailed Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which part of the skull is movable? What does it allow us to do?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why does the spine have curves instead of being perfectly straight?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would happen if you didn't have discs between your vertebrae?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Gently feel the back of your neck and down your spine. Can you feel the bumps of your vertebrae? Draw a picture showing where you felt them.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Human Biology",
        subtopic: "Thoracic and Appendicular Skeleton",
        lessonContent: `
            <p>Today we'll complete our study of the skeleton by exploring the ribcage, shoulder bones, pelvic girdle, and our amazing limbs!</p>
            <p><strong>Key Question:</strong> How do your arms and legs attach to your main skeleton?</p>
            <p><strong>The Thoracic Skeleton (Ribcage):</strong></p>
            <ul>
                <li><strong>Sternum (Breastbone):</strong> The flat bone in the center of your chest</li>
                <li><strong>Ribs:</strong> 12 pairs of curved bones that attach to the spine in the back</li>
                <li><strong>True ribs (7 pairs):</strong> Attach directly to the sternum</li>
                <li><strong>False ribs (3 pairs):</strong> Attach indirectly to the sternum</li>
                <li><strong>Floating ribs (2 pairs):</strong> Only attach to the spine in the back (no front attachment)</li>
                <li>The ribcage protects the heart and lungs</li>
            </ul>
            <p><strong>The Appendicular Skeleton (Our Limbs and Girdles):</strong></p>
            <ul>
                <li><strong>Clavicle (Collarbone):</strong> Connects the sternum to the shoulder blade</li>
                <li><strong>Scapula (Shoulder Blade):</strong> Large triangular bone on the back of the shoulder</li>
                <li><strong>Humerus:</strong> Upper arm bone (connects shoulder to elbow)</li>
                <li><strong>Radius & Ulna:</strong> Lower arm bones (forearm)</li>
                <li><strong>Pelvic Girdle (Hip Bones):</strong> Strong structure that supports the body and protects lower organs</li>
                <li><strong>Femur:</strong> Thigh bone (the longest and strongest bone in the body)</li>
                <li><strong>Tibia & Fibula:</strong> Lower leg bones (shin and calf)</li>
                <li><strong>Patella (Kneecap):</strong> Protects the knee joint</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> The Ribcage Shield</div>
                <p>Your ribcage is like a bony shield! It protects your heart and lungs while still allowing your chest to expand when you breathe.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> The Collarbone Connection</div>
                <p>Your clavicle (collarbone) acts like a strut, keeping your shoulder away from your chest so your arm can move freely. It's one of the most commonly broken bones because it's relatively thin and gets a lot of force during falls.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight-hanging"></i> The Strongest Bone</div>
                <p>Your femur (thigh bone) is the longest and strongest bone in your body. It can support up to 30 times your body weight! That's why it's so hard to break.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby-carriage"></i> The Pelvic Girdle</div>
                <p>The pelvic girdle is like a strong bowl that holds and protects your lower abdominal organs. It's also where your leg bones attach, allowing you to stand and walk upright.</p>
            </div>
        `,
        taskInstructions: "Draw and label the ribcage, collarbone, shoulder blades, pelvic girdle, and limb bones.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Ribcage and Shoulder Bones Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Sternum (breastbone)</div>
                        <div>• Ribs (12 pairs)</div>
                        <div>• Clavicle (collarbone)</div>
                        <div>• Scapula (shoulder blade)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Pelvic Girdle and Limbs Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Pelvic girdle (hip bones)</div>
                        <div>• Femur (thigh bone)</div>
                        <div>• Patella (kneecap)</div>
                        <div>• Tibia (shin bone)</div>
                        <div>• Fibula (calf bone)</div>
                        <div>• Humerus (upper arm bone)</div>
                        <div>• Radius & Ulna (forearm bones)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Bone Identification & Function</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each bone to its location and function:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Clavicle ___    1. Upper arm bone</div>
                        <div>b. Scapula ___     2. Thigh bone (longest bone)</div>
                        <div>c. Humerus ___     3. Collarbone</div>
                        <div>d. Femur ___       4. Kneecap</div>
                        <div>e. Patella ___     5. Shoulder blade</div>
                        <div>f. Tibia ___       6. Shin bone</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think the ribs are curved rather than straight?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is the femur the longest and strongest bone in the human body?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Name two differences between your arm bones and your leg bones.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a complete one-page study guide about the skeletal system including: 5 functions of the skeleton, labeled drawing of the skull and spine, labeled drawing of the ribcage and limbs, and 5 interesting bone facts.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek2);
    console.log("grade5-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek2);
    console.log("grade5-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek2',
        metadata: grade5ScienceWeek2.metadata,
        days: grade5ScienceWeek2
    });
    console.log("grade5-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek2 = grade5ScienceWeek2;
console.log("grade5-science-week2.js loaded and registered successfully");