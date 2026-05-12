// Grade 4 Mathematics - Term 2 Week 2
const grade4MathsWeek2 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 2,
        week: 2,
        title: "Money (Financial Literacy)",
        description: "Introduction to the Zambian Kwacha, distinguishing wants vs. needs, understanding cost price, and setting selling price with profit"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Introduction to the Zambian Kwacha",
        lessonContent: `
            <p>Welcome to our money unit! Today we'll learn about the Zambian Kwacha (ZMW) - the currency we use every day!</p>
            <p><strong>Key Question:</strong> How can you identify different Zambian banknotes and coins?</p>
            <p><strong>Introduction:</strong> The Zambian Kwacha is our national currency. "Kwacha" means "dawn" in Nyanja, symbolizing a new beginning. Learning about money helps us buy things, save, and make smart choices.</p>
            <p><strong>Zambian Banknotes (Paper Money):</strong></p>
            <ol>
                <li><strong>K2 (Two Kwacha):</strong> Features the Fish Eagle - Zambia's national bird</li>
                <li><strong>K5 (Five Kwacha):</strong> Features the African Elephant</li>
                <li><strong>K10 (Ten Kwacha):</strong> Features the Zambian Bank building</li>
                <li><strong>K20 (Twenty Kwacha):</strong> Features the African Fish Eagle</li>
                <li><strong>K50 (Fifty Kwacha):</strong> Features the Black Lechwe antelope</li>
                <li><strong>K100 (One Hundred Kwacha):</strong> Features the African Buffalo (Big Five)</li>
            </ol>
            <p><strong>Important Note:</strong> The Kwacha is divided into 100 Ngwee. Coins come in denominations of 5, 10, and 50 Ngwee.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Value Match</div>
                <p>One K10 note has the same value as two K5 notes! Because K5 + K5 = K10.</p>
                <p>One K100 note = five K20 notes (K20 x 5 = K100)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bus"></i> Bus Station Roleplay</div>
                <p>If a bus fare costs K15, you could pay with one K10 note and one K5 note, or three K5 notes, or fifteen K1 coins!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-image"></i> Images on Our Money</div>
                <p>Look closely at Zambian notes - you'll see the Fish Eagle, the Freedom Statue in Lusaka, and our beautiful wildlife! These pictures tell the story of Zambia.</p>
            </div>
        `,
        taskInstructions: "Identify Zambian banknotes and practice making correct change through roleplay.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Banknote Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each banknote to its value and feature:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• K2: _________ (which animal or landmark?)</div>
                        <div>• K5: _________</div>
                        <div>• K10: _________</div>
                        <div>• K20: _________</div>
                        <div>• K50: _________</div>
                        <div>• K100: _________</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Value Match Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Show different ways to make the same amount:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>How many K5 notes make K20? _________</div>
                        <div>How many K20 notes make K100? _________</div>
                        <div>K50 can be made with ___ K10 notes and ___ K5 notes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Roleplay - The Bus Station</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Work with a partner. One person is the conductor, the other is a commuter paying for a K15 bus fare. Show two different ways to pay:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If you pay with a K50 note for a K15 fare, how much change should you receive?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a parent or guardian to show you real Zambian banknotes. Draw and label the K20 and K50 notes with their key features.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Wants vs. Needs in the Household",
        lessonContent: `
            <p>Today we'll learn an important money skill - distinguishing between things we NEED and things we WANT!</p>
            <p><strong>Key Question:</strong> How do you decide what to spend money on when you can't afford everything?</p>
            <p><strong>What are NEEDS?</strong></p>
            <ul>
                <li>Things you must have to survive and live healthily</li>
                <li>Examples: Food (mealie meal, vegetables), water, shelter, clothing, medicine, soap for washing</li>
                <li>Without needs, you could become sick or unsafe</li>
            </ul>
            <p><strong>What are WANTS?</strong></p>
            <ul>
                <li>Things that would be nice to have but are not essential for survival</li>
                <li>Examples: Sweets, biscuits, video games, new toys, soda, expensive shoes</li>
                <li>Wants can wait - they are not emergencies</li>
            </ul>
            <p><strong>Money Smart Rule:</strong> Always pay for NEEDS first. If there is money left, then you can buy some WANTS.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Lusaka Family Scenario</div>
                <p>A family in Lusaka has K500 for the week's shopping. They must choose between:</p>
                <ul>
                    <li>Mealie Meal (K250) - NEED (food to eat)</li>
                    <li>Video Game (K350) - WANT (entertainment)</li>
                </ul>
                <p>They cannot afford both. The wise choice is to buy the Mealie Meal - a NEED. They could save the remaining K250 for other needs like vegetables or soap.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-bag"></i> Shopping Bag Challenge</div>
                <p>Which items are NEEDS? Which are WANTS?</p>
                <p><strong>Item List:</strong> Salt (Need), Biscuits (Want), Charcoal (Need), School Shoes (Need), Soda (Want), Soap (Need)</p>
            </div>
        `,
        taskInstructions: "Sort everyday items into Needs and Wants categories and justify your choices.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Shopping Bag Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw two circles in your book labeled "NEEDS" and "WANTS". Sort these items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Salt</div>
                        <div>• Biscuits</div>
                        <div>• Charcoal / Cooking fuel</div>
                        <div>• School Shoes</div>
                        <div>• Soda</div>
                        <div>• Soap</div>
                        <div>• Mealie Meal</div>
                        <div>• New Bicycle</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Budget Decision</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A family has K300 for the day. They need to buy:</div>
                    <div style="margin-left: 40px;">- Vegetables (K80)</div>
                    <div style="margin-left: 40px;">- Kapenta (small fish) (K70)</div>
                    <div style="margin-left: 40px;">- Soap (K40)</div>
                    <div style="margin-left: 40px;">- Charcoal (K90)</div>
                    <div style="margin-left: 40px;">- Sweets for children (K20)</div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Which items are NEEDS? Which are WANTS?</div>
                    <div class="answer-space" style="height: 60px;"></div>
                    <div>b) Can they afford everything? What should they remove?</div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it important to buy NEEDS before WANTS?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "With your family, look at a recent shopping receipt. Identify 3 NEEDS and 3 WANTS that were purchased.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Understanding Cost Price (CP)",
        lessonContent: `
            <p>Today we'll learn about Cost Price - what a trader pays to get goods from a wholesaler or farm!</p>
            <p><strong>Key Question:</strong> Where do shopkeepers get their goods and how much do they pay?</p>
            <p><strong>What is Cost Price (CP)?</strong></p>
            <ul>
                <li>Cost Price is the amount a trader pays to buy goods</li>
                <li>They buy from farmers, factories, or wholesalers</li>
                <li>Wholesale means buying in large quantities at a lower price</li>
                <li>Retail means selling in small quantities to customers like you</li>
            </ul>
            <p><strong>Understanding Cost Price:</strong></p>
            <ul>
                <li>If a trader buys 1 crate of tomatoes for K150, that K150 is the Cost Price for the whole crate</li>
                <li>If the crate contains 10 small heaps of tomatoes, the Cost Price per heap is K150 ÷ 10 = K15 per heap</li>
                <li>Shopkeepers must cover their Cost Price before they can make any profit</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tractor"></i> The Tomato Farm Example</div>
                <p>A trader goes to Soweto Market in Lusaka. She buys a crate of tomatoes from a farmer for K150.</p>
                <p><strong>K150 is the Cost Price (CP) for the crate.</strong></p>
                <p>The crate has 10 heaps of tomatoes. The Cost Price for ONE heap is K150 ÷ 10 = K15.</p>
                <p>So each heap cost the trader K15 to buy from the farmer.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Mathematics Practice</div>
                <p>If a trader buys 20 pencils for K40, what is the Cost Price of one pencil?</p>
                <p>K40 ÷ 20 = K2 per pencil.</p>
                <p>If she buys 5 bars of soap for K50, the Cost Price per bar is K50 ÷ 5 = K10.</p>
            </div>
        `,
        taskInstructions: "Calculate cost prices for various items and roleplay as a customer buying from a supplier.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculating Cost Price</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the Cost Price per item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 10 mangoes cost K30 total. CP per mango = ______</div>
                        <div>b) 4 loaves of bread cost K48 total. CP per loaf = ______</div>
                        <div>c) 12 exercise books cost K60 total. CP per book = ______</div>
                        <div>d) 8 packets of salt cost K24 total. CP per packet = ______</div>
                        <div>e) 5 kg of sugar cost K75 total. CP per kg = ______</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Wholesale vs. Single Item</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A trader buys a box of 24 tomatoes for K120.
                    <div>a) What is the Cost Price for one tomato? ________</div>
                    <div>b) A customer wants to buy just 1 tomato. What price do you think is fair? ________ Why?</div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Roleplay - Meet the Supplier</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> The teacher is a "farmer" selling these items. You are a trader. Record the Cost Price for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Item 1 (Pencil): Farmer sells 10 pencils for K30. CP per pencil = ______</div>
                        <div>Item 2 (Apple): Farmer sells 8 apples for K40. CP per apple = ______</div>
                        <div>Item 3 (Notebook): Farmer sells 5 notebooks for K75. CP per notebook = ______</div>
                    </div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do traders buy items in larger quantities (wholesale)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Visit a small shop or market stall with a parent. Ask the price of one item, and ask how much it costs to buy a whole dozen (12). Write down what you learn.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Setting a Selling Price (SP) & Profit",
        lessonContent: `
            <p>Today we'll learn how traders set their selling prices and make PROFIT to support their families and businesses!</p>
            <p><strong>Key Question:</strong> How does a business make money?</p>
            <p><strong>The Important Formula:</strong></p>
            <div class="formula-box" style="background-color: #E8F5E9; padding: 15px; text-align: center; border-radius: 10px; margin: 15px 0;">
                <strong>Selling Price (SP) = Cost Price (CP) + Markup (Profit)</strong>
            </div>
            <p><strong>Key Terms:</strong></p>
            <ul>
                <li><strong>Cost Price (CP):</strong> What the trader paid to buy the item</li>
                <li><strong>Markup / Profit:</strong> Extra money added to the cost price</li>
                <li><strong>Selling Price (SP):</strong> The price the customer pays</li>
            </ul>
            <p><strong>Why Do Traders Add Profit?</strong></p>
            <ul>
                <li>To pay for transport to market</li>
                <li>To feed their families</li>
                <li>To buy more stock (more goods to sell)</li>
                <li>To save for emergencies</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Step-by-Step Example</div>
                <p>A student buys a pen from a wholesaler for K5. This is the Cost Price (CP).</p>
                <p>To make money for their lunch, they decide to add K2 as profit (markup).</p>
                <p><strong>Selling Price = K5 + K2 = K7</strong></p>
                <p>The student sells the pen for K7. After paying back the K5 cost, they keep K2 profit!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Tuckshop Table</div>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #4A90E2; color: white;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Cost Price (CP)</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Markup</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Selling Price (SP)</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Pencil</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">K3</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">K1</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">K4</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Apple</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">K5</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">K2</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">K7</td>
                    </tr>
                </table>
            </div>
        `,
        taskInstructions: "Calculate selling prices by adding profit to cost price, and complete a tuckshop price table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculating Selling Price</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the Selling Price for each item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) CP = K8, Markup = K3 → SP = ______</div>
                        <div>b) CP = K15, Markup = K5 → SP = ______</div>
                        <div>c) CP = K22, Markup = K8 → SP = ______</div>
                        <div>d) CP = K45, Markup = K15 → SP = ______</div>
                        <div>e) CP = K120, Markup = K30 → SP = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Tuckshop Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the items you "bought" from the teacher on Thursday. Set a fair Selling Price:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cost Price (CP)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">My Markup</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Selling Price (SP)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Pencil</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Apple</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Notebook</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">K___</td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Profit Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If a trader sells an item and makes K10 profit, what could they use that K10 for?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If a trader buys 10 sweets for K20 (CP = K2 each) and sells each sweet for K5, how much profit does they make per sweet?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is profit important for a business to survive?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a mini price list for 5 items you might sell at a school tuckshop. Show CP, Markup, and SP for each item.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathsWeek2);
    console.log("grade4-maths-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathsWeek2);
    console.log("grade4-maths-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathsWeek2',
        metadata: grade4MathsWeek2.metadata,
        days: grade4MathsWeek2
    });
    console.log("grade4-maths-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathsWeek2 = grade4MathsWeek2;
console.log("grade4-maths-week2.js loaded and registered successfully");