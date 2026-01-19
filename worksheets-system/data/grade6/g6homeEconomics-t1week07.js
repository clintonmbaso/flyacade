// Grade 6 Home Economics - Week 7 Data
const grade6HomeEconomicsWeek7 = {
    metadata: {
        grade: 6,
        subject: "Home Economics",
        week: 7,
        title: "Nutrition for Different Needs",
        description: "Understanding how activity levels, age, and health conditions affect nutritional requirements"
    },
    
    monday: {
        subject: "Home Economics",
        topic: "Planning for Activity Levels",
        subtopic: "How physical exertion and age change nutritional requirements",
        lessonContent: `
            <p>Welcome to our study of nutrition for different needs. Today we will explore how physical activity and age affect what our bodies require to stay healthy and strong.</p>
            <p><strong>Key Concept:</strong> Different lifestyles and life stages require different types of nutrition. What works for one person may not work for another.</p>
            <p><strong>The Manual Worker:</strong></p>
            <ul>
                <li>Requires high-energy (kilojoule) foods for sustained physical labor</li>
                <li>Needs complex carbohydrates for long-lasting energy</li>
                <li>Examples: Construction workers, farmers, factory workers</li>
                <li>Food focus: Whole grains, potatoes, pasta, rice with protein sources</li>
            </ul>
            <p><strong>The Sedentary Worker:</strong></p>
            <ul>
                <li>Works sitting down most of the day (office jobs)</li>
                <li>Needs nutrient-dense foods rather than high-calorie foods</li>
                <li>Must balance energy intake to prevent weight-related issues</li>
                <li>Food focus: Vegetables, lean proteins, fruits, whole grains in moderation</li>
            </ul>
            <p><strong>The Growing Adolescent:</strong></p>
            <ul>
                <li>Increased need for Calcium for bone growth during puberty</li>
                <li>Higher Protein requirements for muscle development</li>
                <li>Balanced nutrition supports growth spurts and brain development</li>
                <li>Food focus: Dairy products, eggs, lean meats, beans, leafy greens</li>
            </ul>
            <p><strong>Why this matters:</strong> Eating according to your activity level and life stage helps maintain energy, support growth, and prevent health problems.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat" style="color: #FF8C00;"></i> Manual Worker Example</div>
                <p>A construction worker needs about 3,500-4,000 kilojoules more per day than an office worker due to physical labor. Their meals should include complex carbs like whole wheat bread and brown rice.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-laptop"></i> Sedentary Worker Example</div>
                <p>An office clerk might only need 8,000-9,000 kilojoules per day. Choosing nutrient-dense foods like salads with chicken, vegetables, and fruits prevents weight gain while providing necessary nutrients.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Growing Teen Example</div>
                <p>A 13-year-old needs about 1,300 mg of calcium daily (equivalent to 4 glasses of milk) for bone growth and 45-60 grams of protein for muscle development.</p>
            </div>
        `,
        taskInstructions: "Compare nutritional needs and create appropriate meal plans for different activity levels.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> List three high-energy foods suitable for a manual worker and explain why they're helpful:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> What does "nutrient-dense" mean and why is it important for sedentary workers?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Compare two daily menus—one for a construction worker and one for an office clerk:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div style="flex: 1;">
                        <p><strong>Construction Worker:</strong></p>
                        <div class="answer-space" style="height: 120px;"></div>
                    </div>
                    <div style="flex: 1;">
                        <p><strong>Office Clerk:</strong></p>
                        <div class="answer-space" style="height: 120px;"></div>
                    </div>
                </div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Include breakfast, lunch, dinner and two snacks for each</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why do adolescents need more calcium and protein than adults?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Record your own food intake for one day. Note which foods would be good for manual workers, sedentary workers, or adolescents.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Home Economics",
        topic: "Special Diets and Recovery",
        subtopic: "Planning meals for specific health challenges",
        lessonContent: `
            <p>Today we will learn how to plan meals for people with special health needs. Proper nutrition can help with recovery from illness and management of chronic conditions.</p>
            <p><strong>Recovery Meals (Invalids/Convalescents):</strong> When people are recovering from illness or surgery, they need special nutrition.</p>
            <ul>
                <li>Foods should be easy to digest but nutrient-rich</li>
                <li>Small, frequent meals are often better than large ones</li>
                <li>Examples: Clear soups, poached eggs, soft cooked vegetables, smoothies</li>
                <li>Avoid: Greasy, spicy, or hard-to-digest foods</li>
            </ul>
            <p><strong>Chronic Conditions - Diabetic Patients:</strong></p>
            <ul>
                <li>Focus on low-sugar, high-fiber foods</li>
                <li>Consistent meal timing to maintain blood sugar levels</li>
                <li>Complex carbohydrates instead of simple sugars</li>
                <li>Examples: Whole grains, vegetables, lean proteins, healthy fats</li>
            </ul>
            <p><strong>Chronic Conditions - HIV/AIDS Patients:</strong></p>
            <ul>
                <li>High-protein intake to maintain muscle mass</li>
                <li>High-vitamin foods to support the immune system</li>
                <li>Small, frequent meals if appetite is poor</li>
                <li>Examples: Eggs, fish, poultry, beans, colorful fruits and vegetables</li>
            </ul>
            <p><strong>Maternal & Infant Care:</strong></p>
            <ul>
                <li>Pregnant mothers need extra iron and folic acid</li>
                <li>Baby meals require soft textures and appropriate nutrients</li>
                <li>Breastfeeding mothers need additional calories and fluids</li>
                <li>Examples: Leafy greens, lean red meat, citrus fruits, fortified cereals</li>
            </ul>
            <p><strong>Importance:</strong> Special diets help people recover faster, manage health conditions, and maintain quality of life.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat" style="color: #FF6B6B;"></i> Recovery Meal Example</div>
                <p>A person recovering from surgery might have chicken broth with soft vegetables, followed by mashed banana and yogurt. These are easy to digest but provide protein and vitamins.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Diabetic Meal Example</div>
                <p>A diabetic-friendly lunch could be grilled chicken salad with mixed greens, tomatoes, cucumbers, and olive oil dressing, with a small serving of brown rice on the side.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby"></i> Maternal Nutrition Example</div>
                <p>A pregnant woman needs about 27 mg of iron daily (compared to 18 mg normally). Good sources include spinach, lentils, and lean beef.</p>
            </div>
        `,
        taskInstructions: "Plan appropriate meals for different health conditions and special needs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Special Diets</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Why are recovery meals often "light" and easy to digest? Give two reasons:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List three foods that would be good for a diabetic patient and explain why:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Group Activity - Patient Profiles</strong></p>
                <p>In groups, you will be assigned a "Patient Profile." Select three ideal food items for that person's lunch and explain your choices.</p>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>Patient Profile A:</strong> A construction worker recovering from the flu (needs easy digestion but energy for manual work)
                    <div class="answer-space" style="height: 80px; margin-left: 20px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> <strong>Patient Profile B:</strong> An office worker with diabetes (needs blood sugar control)
                    <div class="answer-space" style="height: 80px; margin-left: 20px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> <strong>Patient Profile C:</strong> A teenager with HIV/AIDS (needs immune support and protein)
                    <div class="answer-space" style="height: 80px; margin-left: 20px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Meal Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Plan a day's meals for a pregnant woman (include breakfast, lunch, dinner, and two snacks):
                    <div class="answer-space" style="height: 150px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Make sure to include iron-rich and folic acid-rich foods</p>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Suggest three soft foods suitable for a baby starting solid foods:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Interview a family member about any special dietary needs in your household. Write down what adjustments are made to meals.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6HomeEconomicsWeek7);
    console.log("homeeconomics-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6HomeEconomicsWeek7);
    console.log("homeeconomics-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6HomeEconomicsWeek7',
        metadata: grade6HomeEconomicsWeek7.metadata,
        days: grade6HomeEconomicsWeek7
    });
    console.log("homeeconomics-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6HomeEconomicsWeek7 = grade6HomeEconomicsWeek7;
console.log("homeeconomics-week7.js loaded and registered successfully");