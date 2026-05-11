// Grade 6 Science - Term 2 Week 9 Data
const grade6ScienceWeek9 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 2,
        week: 9,
        title: "Agro-processing and Entrepreneurship",
        description: "Exploring how raw farm produce is transformed into finished, branded products ready for sale"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Agro-processing",
        subtopic: "What is Agro-processing? (The Concept)",
        lessonContent: `
            <p>Welcome to our exploration of agro-processing! Today we'll discover how raw farm products are transformed into the foods we use every day.</p>
            <p><strong>Key Question:</strong> Which is easier to cook and lasts longer - a raw ear of maize or a bag of maize flour?</p>
            <p><strong>Introduction:</strong> <strong>Agro-processing</strong> is the turning of primary agricultural products into other usable items. It reduces waste and increases the value of the crop. Instead of selling raw crops, farmers can process them into products that last longer, are easier to transport, and sell for higher prices!</p>
            <p><strong>Why Do We Process Food?</strong></p>
            <ol>
                <li><strong>Long-term storage:</strong> Processed foods don't spoil as quickly</li>
                <li><strong>Easier transport:</strong> Processed products take up less space and are lighter</li>
                <li><strong>Higher price (Value Addition):</strong> Processed goods sell for more money than raw crops</li>
                <li><strong>Convenience:</strong> Processed foods are often ready-to-use or easier to prepare</li>
                <li><strong>Less waste:</strong> Processing can use parts of crops that might otherwise be thrown away</li>
            </ol>
            <p><strong>Common Agro-processing Examples:</strong></p>
            <ul>
                <li>Groundnuts → Peanut Butter</li>
                <li>Sunflowers → Cooking Oil</li>
                <li>Cassava → Starch/Flour</li>
                <li>Tomatoes → Jam or Sauce</li>
                <li>Maize → Maize Flour (Mealie-meal)</li>
                <li>Mangoes → Dried Mango Slices or Juice</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Value Addition Example</div>
                <p>Raw groundnuts might sell for $1 per kilogram. But processed into peanut butter, that same kilogram could sell for $3-$4! That's the power of agro-processing.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Shelf Life Comparison</div>
                <p>A fresh tomato lasts about 5-7 days. But tomato sauce (properly processed) can last for months or even years without refrigeration!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-truck"></i> Transport Benefits</div>
                <p>Transporting fresh cassava is heavy and bulky. But cassava flour is lighter, takes less space, and doesn't bruise or rot during the journey.</p>
            </div>
        `,
        taskInstructions: "Match raw crops to processed products and identify reasons for food processing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Transformation Map</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each raw crop to its processed product by drawing lines:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <div><strong>Raw Crop:</strong></div>
                            <div>• Groundnuts</div>
                            <div>• Sunflowers</div>
                            <div>• Cassava</div>
                            <div>• Tomatoes</div>
                            <div>• Maize</div>
                            <div>• Mangoes</div>
                        </div>
                        <div>
                            <div><strong>Processed Product:</strong></div>
                            <div>• Cooking Oil</div>
                            <div>• Peanut Butter</div>
                            <div>• Starch/Flour</div>
                            <div>• Dried Slices/Juice</div>
                            <div>• Jam or Sauce</div>
                            <div>• Maize Flour (Mealie-meal)</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Reasons for Processing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three reasons why we process food:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> For each reason, give a specific example:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Local Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Name three agro-processed products that your family buys regularly:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What raw crop was each one made from?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look in your kitchen and find three agro-processed products. Write down the product name and what raw crop it came from.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Agro-processing",
        subtopic: "From Field to Jar (The Processing Lab)",
        lessonContent: `
            <p>Today we'll become food processors! We'll learn how to transform a raw crop into a finished product - safely and hygienically.</p>
            <p><strong>Key Question:</strong> How do we turn raw groundnuts into peanut butter (or fresh mangoes into dried fruit)?</p>
            <p><strong>Food Safety First!</strong> When making food to sell, cleanliness is critical. Always:</p>
            <ul>
                <li>Wash hands thoroughly before handling food</li>
                <li>Clean all equipment and work surfaces</li>
                <li>Use clean, safe ingredients</li>
                <li>Cover hair and avoid touching food with bare hands when possible</li>
            </ul>
            <p><strong>Processing Method 1: Making Peanut Butter</strong></p>
            <ol>
                <li><strong>Sort and clean:</strong> Remove any bad groundnuts, stones, or debris</li>
                <li><strong>Roast:</strong> Roast groundnuts in a pan until golden brown (brings out flavor)</li>
                <li><strong>Cool:</strong> Let them cool completely</li>
                <li><strong>Grind:</strong> Grind roasted groundnuts in a grinder or with a mortar and pestle</li>
                <li><strong>Observe:</strong> Notice how texture changes from solid nuts to smooth paste</li>
            </ol>
            <p><strong>Processing Method 2: Making Dried Fruit (Mango/Tomato)</strong></p>
            <ol>
                <li><strong>Wash:</strong> Clean the fresh fruit thoroughly</li>
                <li><strong>Slice:</strong> Cut into thin, even slices</li>
                <li><strong>Arrange:</strong> Place slices on a clean drying rack or tray</li>
                <li><strong>Dry:</strong> Leave in direct sun for 1-3 days (cover with net to keep insects away)</li>
                <li><strong>Observe:</strong> Notice changes in texture, color, smell, and taste</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Hygiene Matters</div>
                <p>A famous saying in food business: "People buy with their eyes first." If your product looks dirty or is made in an unclean space, customers won't buy it - even if it tastes good!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microscope"></i> Chemical Changes</div>
                <p>When you roast groundnuts, a chemical change happens! The heat creates new flavor compounds that make the peanut butter taste delicious. Raw groundnuts don't taste nearly as good!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Removing Water</div>
                <p>Drying fruit removes water. Without water, bacteria and mold can't grow easily. That's why dried mangoes can last for months without a refrigerator!</p>
            </div>
        `,
        taskInstructions: "Process a crop and write a Recipe Card documenting the steps.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Processing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow your teacher's instructions to process a crop (peanut butter or dried fruit):
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Record your observations during processing:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Recipe Card</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a "Recipe Card" detailing the steps you followed:
                    <div style="margin-left: 20px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;">
                        <p><strong>Product Name:</strong> _________________________</p>
                        <p><strong>Ingredients:</strong> _________________________</p>
                        <p><strong>Equipment:</strong> _________________________</p>
                        <p><strong>Step-by-Step Instructions:</strong></p>
                        <div class="answer-space" style="height: 120px;"></div>
                        <p><strong>Time needed:</strong> _________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Observations</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Describe how the texture changed during processing:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Describe how the smell and taste changed:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why was it important to clean everything before starting?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member who cooks or processes food about their safety rules. Write down three important hygiene rules they follow.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Agro-processing",
        subtopic: "The Art of Packaging (Protection and Appeal)",
        lessonContent: `
            <p>Today we'll discover why packaging is so important and how to choose the right materials for our products!</p>
            <p><strong>Key Question:</strong> Why don't we just carry peanut butter in our hands or dried fruit in a paper bag?</p>
            <p><strong>The Three Key Functions of Packaging:</strong></p>
            <ol>
                <li><strong>Protection:</strong> Keeps the product clean, dry, and safe from dirt, insects, and damage</li>
                <li><strong>Portability:</strong> Makes it easy to carry, store, and transport</li>
                <li><strong>Preservation:</strong> Helps food stay fresh longer by protecting from air, moisture, and light</li>
            </ol>
            <p><strong>Packaging Materials and Their Uses:</strong></p>
            <ul>
                <li><strong>Glass Jars:</strong> Best for wet products like jam, sauce, or peanut butter. Airtight and reusable. (Heavy and breakable)</li>
                <li><strong>Plastic Containers:</strong> Good for many foods. Lightweight and unbreakable. (Can be less environmentally friendly)</li>
                <li><strong>Paper Bags:</strong> Good for dry products like flour or grains. Cheap and biodegradable. (Not waterproof)</li>
                <li><strong>Plastic Wrap/Bags:</strong> Good for dried fruit or snacks. Keeps moisture out. (Not reusable)</li>
                <li><strong>Cardboard Boxes:</strong> Good for shipping multiple products. Strong and stackable.</li>
            </ul>
            <p><strong>Packaging Also Sells!</strong> Attractive, clean packaging makes customers want to buy your product. A label tells them:</p>
            <ul>
                <li>What the product is</li>
                <li>Who made it (your brand name)</li>
                <li>Ingredients</li>
                <li>Date made (freshness)</li>
                <li>Price</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Moisture is the Enemy</div>
                <p>Dried fruit left in an open bag will absorb moisture from the air and become moldy. A sealed plastic bag or glass jar keeps it dry and fresh!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Choose Wisely</div>
                <p>Peanut butter in a glass jar might cost more, but customers can reuse the jar. Paper bags are cheaper but only protect dry goods like flour.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> First Impression</div>
                <p>Studies show that customers decide whether to buy a product within 3 seconds - mostly based on the packaging! Clean, colorful labels sell more products.</p>
            </div>
        `,
        taskInstructions: "Choose appropriate packaging for your product and test its durability.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Package Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For your processed product from Lesson 2, choose the best packaging material:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>My product:</strong> _________________________</div>
                        <div><strong>I will package it in:</strong> _________________________</div>
                        <div><strong>Why this is the best choice:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Durability Test</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Perform a durability test with your teacher:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Drop your packaged product from waist height</div>
                        <div>• Drop an unpackaged sample of the same product</div>
                        <div>• Compare the results</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>What happened to each sample?</em></p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why is the packaged product better protected?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Package Design</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design a label for your package. Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Product name</div>
                        <div>• Your brand name</div>
                        <div>• A simple drawing or logo</div>
                        <div>• List of ingredients</div>
                        <div>• Price</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
        `,
        homework: "Find three different food packages at home. For each, write what material it's made from and why you think the company chose that material.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Science",
        topic: "Agro-processing",
        subtopic: "Branding and Marketing (The Young Entrepreneur)",
        lessonContent: `
            <p>Today we'll become entrepreneurs! We'll learn how to create a brand and sell our agro-processed products.</p>
            <p><strong>Key Question:</strong> If two jars of peanut butter look the same, why do you choose one over the other?</p>
            <p><strong>What is Branding?</strong> Branding is how customers recognize and remember your product. It's what makes your product special and different from others.</p>
            <p><strong>The Three Key Elements of Branding:</strong></p>
            <ol>
                <li><strong>Product Name:</strong> A catchy, memorable name that tells customers what your product is. Examples: "Sunny Spread" (peanut butter), "Mango Magic" (dried mangoes)</li>
                <li><strong>Logo:</strong> A simple drawing or symbol that represents your brand. Good logos are easy to recognize and remember.</li>
                <li><strong>Label Information:</strong> Product name, ingredients, your brand name, price, and any special claims ("All Natural," "No Sugar Added")</li>
            </ol>
            <p><strong>How to Sell Your Product (Marketing):</strong></p>
            <ul>
                <li><strong>Elevator Pitch:</strong> A 30-second speech that makes someone want to buy your product</li>
                <li><strong>Know Your Customer:</strong> Who would buy your product? (Families? Athletes? Kids?)</li>
                <li><strong>Tell Your Story:</strong> Why did you make this product? What makes it special?</li>
                <li><strong>Price It Right:</strong> Cover your costs plus make a fair profit</li>
            </ul>
            <p><strong>Simple Business Math:</strong></p>
            <ul>
                <li><strong>Cost of Production =</strong> Raw materials + Labor + Packaging</li>
                <li><strong>Selling Price =</strong> Cost of Production + Profit</li>
                <li><strong>Profit =</strong> Money left after covering all costs</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Sample Sales Pitch</div>
                <p>"Hi! I'm selling Sunny Spread - the smoothest peanut butter made from locally grown groundnuts. It has no added sugar, and it's perfect for sandwiches or baking. Only $2 for this jar. Want to try a sample?"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Profit Example</div>
                <p>Cost to make one jar of peanut butter: $1.50 (groundnuts: $0.80, jar: $0.40, labor: $0.30). Selling price: $3.00. Profit per jar: $1.50!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Where to Sell</div>
                <p>Young entrepreneurs can sell at school fairs, farmers markets, to neighbors and family, or through social media. Start small and grow!</p>
            </div>
        `,
        taskInstructions: "Create a brand, design a label, and present a sales pitch for your product.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Create Your Brand</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in your brand information:
                    <div style="margin-left: 20px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;">
                        <p><strong>Product Name:</strong> _________________________</p>
                        <p><strong>Brand Name:</strong> _________________________</p>
                        <p><strong>Logo Description:</strong> _________________________</p>
                        <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                        <p><strong>Slogan (short, memorable phrase):</strong> _________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Final Product Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create your final label (to attach to your packaged product):
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sales Pitch (30 Seconds)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write your 30-second sales pitch below. Practice presenting it to the class:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Product Costing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Calculate the cost and selling price for your product:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Cost of raw materials: $_________</div>
                        <div>Cost of packaging: $_________</div>
                        <div>Cost of labor (your time): $_________</div>
                        <div><strong>Total cost per product: $_________</strong></div>
                        <div>Your desired profit: $_________</div>
                        <div><strong>Selling price: $_________</strong></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Final Product Display</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Present your finished, packaged, and branded product to the class:
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Teacher feedback and notes:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most challenging part of creating your agro-processed product?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> If you could start a small business selling your product, would you? Why or why not?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page summary of your agro-processed product including: product name, processing steps, packaging choice, brand name, and sales pitch.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek9);
    console.log("grade6-science-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek9);
    console.log("grade6-science-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek9',
        metadata: grade6ScienceWeek9.metadata,
        days: grade6ScienceWeek9
    });
    console.log("grade6-science-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek9 = grade6ScienceWeek9;
console.log("grade6-science-week9.js loaded and registered successfully");