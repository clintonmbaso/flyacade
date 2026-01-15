// Grade 4 Science - Week 10 Data
const grade4ScienceWeek10 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 1,
        week: 10,
        title: "Revision: The Human Body & Health",
        description: "Review of body systems, nutrition, and disease prevention"
    },
    
    monday: {
        subject: "Science",
        topic: "The Human Body Systems",
        subtopic: "Core Systems for Breathing and Circulation",
        lessonContent: `
            <p>Welcome to our revision week! Today we will review the amazing systems that keep us alive: the respiratory system for breathing and the circulatory system for blood flow.</p>
            <p><strong>Key Review Points:</strong></p>
            <ul>
                <li>The respiratory system brings oxygen into the body and removes carbon dioxide</li>
                <li>The circulatory system transports oxygen and nutrients to all body cells</li>
                <li>These systems work together to keep every cell in your body alive and functioning</li>
                <li>Common diseases can affect these systems, making it important to understand how they work</li>
            </ul>
            <p><strong>The Air Pathway:</strong> Nose → Trachea → Bronchi → Lungs → Blood</p>
            <p><strong>The Blood Pathway:</strong> Heart → Arteries → Body Cells → Veins → Heart</p>
            <p><strong>Why Exercise Matters:</strong> When you exercise, your muscles need more oxygen, so your heart beats faster and you breathe more deeply to deliver more oxygen to your cells.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-route"></i> The Travel Path Challenge</div>
                <p>Think of air as a traveler entering through your nose. It travels down the trachea highway, takes the bronchi exits to reach the lung cities, where oxygen gets picked up by blood taxis!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat"></i> Pulse Rate Connection</div>
                <p>Your pulse is your heart beating! Each beat pushes blood through your arteries. When you exercise, your pulse increases because your muscles need more oxygen-rich blood.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> System Protection</div>
                <p>Diseases like Asthma affect breathing, while Heart Failure affects blood pumping. Understanding these systems helps us prevent and manage these conditions.</p>
            </div>
        `,
        taskInstructions: "Complete these review activities to solidify your understanding of breathing and circulation systems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Travel Path Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace the path of air through the respiratory system:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Air enters through the ______ → travels down the ______ → splits into ______ → reaches the ______ where oxygen enters the blood.</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Trace the path of blood through the circulatory system:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Blood leaves the ______ through arteries → delivers oxygen to ______ → returns through ______ → back to the ______.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Diagram Blitz</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Collaborative drawing: With your group, draw and label:
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>The human heart (show 4 chambers)</li>
                        <li>The respiratory system (nose to lungs)</li>
                        <li>Connect them with arrows showing oxygen exchange</li>
                    </ul>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Pulse Rate Lab</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Measure your resting pulse for 30 seconds. Multiply by 2 for beats per minute:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Do 30 seconds of jumping jacks. Measure your pulse again:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why does your heart beat faster during exercise?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: System Maintenance</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Match each disease to the system it affects:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Asthma ___ a. Circulatory System</div>
                        <div>Heart Failure ___ b. Respiratory System</div>
                        <div>Influenza ___ c. Respiratory System</div>
                        <div>Coronary Heart Disease ___ d. Circulatory System</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice drawing the combined respiratory and circulatory systems. Show how they work together.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Fueling the Body",
        subtopic: "Nutrition and Healthy Diet Design",
        lessonContent: `
            <p>Today we review how food fuels our bodies! We'll learn about food classification, nutrients, and how to design healthy meals.</p>
            <p><strong>Six Nutritive Food Groups:</strong></p>
            <ol>
                <li><strong>Cereals/Tubers:</strong> Rice, bread, potatoes, yam (main source of energy)</li>
                <li><strong>Animal Products:</strong> Meat, fish, eggs (build and repair body tissues)</li>
                <li><strong>Pulses/Seeds:</strong> Beans, lentils, nuts (protein and fiber)</li>
                <li><strong>Dairy:</strong> Milk, cheese, yogurt (strong bones and teeth)</li>
                <li><strong>Vegetables:</strong> Spinach, carrots, broccoli (vitamins and minerals)</li>
                <li><strong>Fruits:</strong> Oranges, bananas, apples (vitamins and natural sugars)</li>
            </ol>
            <p><strong>Key Nutrients and Their Functions:</strong></p>
            <ul>
                <li><strong>Proteins:</strong> Build and repair body tissues</li>
                <li><strong>Carbohydrates:</strong> Provide energy</li>
                <li><strong>Fats:</strong> Store energy and protect organs</li>
                <li><strong>Vitamins & Minerals:</strong> Keep body systems working properly</li>
                <li><strong>Water:</strong> Essential for all body functions</li>
            </ul>
            <p><strong>Healthy Eating Principle:</strong> Eat a variety of foods in appropriate quantities!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-basket"></i> The Grocery Sort</div>
                <p>Think of your local market: Plantains (cereal/tuber), fresh fish (animal product), groundnuts (pulse/seed), spinach (vegetable), mango (fruit). A balanced diet includes items from all groups!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Nutrient Matching</div>
                <p>Rice = carbohydrates (energy), Beans = proteins (building blocks), Avocado = fats (energy storage), Orange = vitamin C (immune system), Spinach = iron (blood health).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Dietary Consultant</div>
                <p>For an active student: breakfast (porridge + egg), lunch (rice + fish + vegetables), dinner (yam + beans + fruit). Small portions but variety throughout the day!</p>
            </div>
        `,
        taskInstructions: "Complete these nutrition review activities to reinforce healthy eating knowledge.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Grocery Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Categorize these foods into the six nutritive groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Maize, Chicken, Cowpeas, Milk, Cabbage, Pineapple, Yam, Eggs, Groundnuts, Carrots</div>
                    </div>
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Nutrient Matching Race</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match food groups to their primary nutrients (first to finish gets bonus!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Cereals/Tubers ___ a. Proteins</div>
                        <div>Animal Products ___ b. Carbohydrates</div>
                        <div>Pulses/Seeds ___ c. Vitamins & Minerals</div>
                        <div>Vegetables/Fruits ___ d. Proteins & Fiber</div>
                        <div>Dairy ___ e. Calcium</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Dietary Consultant</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Design a balanced meal plan for a student athlete (breakfast, lunch, dinner):
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What principle of apportionment (eating variety in smaller quantities) would you recommend?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: BMI and Lifestyle</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> List three ways to maintain a healthy lifestyle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Adequate ______ intake (8 glasses daily)</div>
                        <div>2. Regular ______ exercise (30 minutes daily)</div>
                        <div>3. Monitoring ______ through height and weight checks</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is BMI (Body Mass Index) a useful health indicator?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Record everything you eat tomorrow. Categorize each item into the six food groups.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Community Health",
        subtopic: "Disease Prevention and Hygiene",
        lessonContent: `
            <p>Today we review how diseases spread and how to prevent them! Protecting community health starts with individual actions.</p>
            <p><strong>How Diseases Spread:</strong></p>
            <ul>
                <li><strong>Airborne:</strong> Through coughs, sneezes (Influenza, Tuberculosis)</li>
                <li><strong>Waterborne:</strong> Through contaminated water (Cholera, Typhoid)</li>
                <li><strong>Foodborne:</strong> Through spoiled or unclean food (Food poisoning)</li>
                <li><strong>Contact:</strong> Through direct touch (Ringworm, Scabies)</li>
            </ul>
            <p><strong>Causative Agents:</strong></p>
            <ol>
                <li><strong>Bacteria:</strong> Single-celled organisms (Tuberculosis, Cholera)</li>
                <li><strong>Viruses:</strong> Tiny infectious particles (Influenza, COVID-19)</li>
                <li><strong>Fungi:</strong> Plant-like organisms (Ringworm, Athlete's foot)</li>
                <li><strong>Parasites:</strong> Organisms living on/inside hosts (Malaria, Tapeworm)</li>
            </ol>
            <p><strong>Prevention is Better Than Cure!</strong> Simple habits like handwashing, safe food handling, and clean water practices can stop disease spread.</p>
            <p><strong>Environmental Health:</strong> Reducing smoke and planting trees improves air quality and prevents airborne illnesses.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Transmission Detective</div>
                <p>Influenza: airborne (spreads through air), Cholera: waterborne (contaminated water), Food poisoning: foodborne (spoiled food), Malaria: vector-borne (mosquito bite).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microscope"></i> The Agent Gallery</div>
                <p>Bacteria look like tiny rods or spheres, viruses are even smaller, fungi have thread-like structures, parasites can be worms or single-celled organisms.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Environmental Action</div>
                <p>Planting trees improves air quality by producing oxygen and filtering pollutants. Less smoke means cleaner air and fewer respiratory problems!</p>
            </div>
        `,
        taskInstructions: "Complete these activities to demonstrate your disease prevention knowledge and skills.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Transmission Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify how these diseases spread:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tuberculosis: ______ (air/water/food)</div>
                        <div>Cholera: ______ (air/water/food)</div>
                        <div>Food poisoning: ______ (air/water/food)</div>
                        <div>Common cold: ______ (air/water/food)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Agent Gallery</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Quick-fire identification: Match disease to causative agent:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ringworm ___ a. Bacteria</div>
                        <div>Malaria ___ b. Virus</div>
                        <div>Influenza ___ c. Fungus</div>
                        <div>Tuberculosis ___ d. Parasite</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Prevention Role-play</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Demonstrate (describe or draw) correct hand-washing technique:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Show safe food storage practices for:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Raw meat: ______</div>
                        <div>• Leftovers: ______</div>
                        <div>• Fruits/vegetables: ______</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> When should you wear a mask? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Environmental Action</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> How does "reducing smoke" help prevent airborne illnesses?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> How does "planting trees" improve community health?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Create a simple poster slogan for disease prevention:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice proper hand-washing with your family. Teach them the steps you learned.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek10);
    console.log("grade4-science-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek10);
    console.log("grade4-science-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek10',
        metadata: grade4ScienceWeek10.metadata,
        days: grade4ScienceWeek10
    });
    console.log("grade4-science-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek10 = grade4ScienceWeek10;
console.log("grade4-science-week10.js loaded and registered successfully");