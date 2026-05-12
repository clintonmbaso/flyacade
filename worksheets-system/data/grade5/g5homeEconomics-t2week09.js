// Grade 5 Home Economics - Term 2 Week 9 Data
const grade5HomeEconomicsWeek9 = {
    metadata: {
        grade: 5,
        subject: "Home Economics",
        term: 2,
        week: 9,
        title: "Cosmetology and Hair Care",
        description: "Exploring hair care products, tools, and safe hair styling practices"
    },
    
    tuesday: {
        subject: "Home Economics",
        topic: "Cosmetology",
        subtopic: "Hair Products and Tools (Lesson 13)",
        lessonContent: `
            <p>Welcome to our exploration of hair care! Today we'll learn about the different products and tools used to keep hair healthy and beautiful.</p>
            <p><strong>Key Question:</strong> How do we choose the right products and tools for different hair types and needs?</p>
            <p><strong>Introduction:</strong> Hair care is an important part of personal grooming and hygiene. Using the right products and tools helps keep hair clean, healthy, and well-maintained.</p>
            <p><strong>Types of Hair Products:</strong></p>
            <ol>
                <li><strong>Shampoos:</strong> Clean the hair and scalp by removing dirt, oil, and product buildup
                    <ul>
                        <li>Regular shampoo - for normal hair</li>
                        <li>Moisturizing shampoo - for dry hair</li>
                        <li>Clarifying shampoo - removes heavy buildup</li>
                        <li>Anti-dandruff shampoo - for itchy, flaky scalp</li>
                    </ul>
                </li>
                <li><strong>Conditioners:</strong> Add moisture, reduce frizz, and make hair softer
                    <ul>
                        <li>Rinse-out conditioner - used after shampoo</li>
                        <li>Leave-in conditioner - stays in hair for extra moisture</li>
                        <li>Deep conditioner - intensive treatment for damaged hair</li>
                    </ul>
                </li>
                <li><strong>Hair Oils:</strong> Nourish the scalp and add shine
                    <ul>
                        <li>Coconut oil - moisturizes and protects</li>
                        <li>Argan oil - adds shine and reduces frizz</li>
                        <li>Jojoba oil - similar to natural scalp oils</li>
                        <li>Castor oil - promotes hair growth</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Hair Care Tools:</strong></p>
            <ul>
                <li><strong>Combs:</strong> Wide-tooth for detangling, fine-tooth for styling</li>
                <li><strong>Brushes:</strong> Paddle brush for straight hair, round brush for curling, boar bristle for shine</li>
                <li><strong>Scissors:</strong> For trimming split ends and cutting hair</li>
                <li><strong>Hair Clips/Sections:</strong> Hold hair in place while styling</li>
                <li><strong>Hair Dryer:</strong> Dries hair quickly (use with heat protection)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Know Your Hair Type</div>
                <p>Oily hair needs frequent shampooing with a gentle cleanser. Dry hair benefits from moisturizing shampoo and conditioner. Curly hair loves leave-in conditioners and oils!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Comb vs. Brush</div>
                <p>Use a wide-tooth comb on wet hair to prevent breakage. Use a brush on dry hair for smoothing and styling. Never brush very wet hair - it stretches and breaks more easily!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Natural Oils</div>
                <p>Your scalp produces natural oils called sebum. Too much shampoo can strip these oils, causing dryness. That's why some people wash their hair every other day instead of daily.</p>
            </div>
        `,
        taskInstructions: "Categorize hair products and identify tools for specific hair needs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Product Categorization</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these products into the correct categories (Shampoo, Conditioner, Oil):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Coconut oil: _________</div>
                        <div>• Anti-dandruff shampoo: _________</div>
                        <div>• Leave-in conditioner: _________</div>
                        <div>• Argan oil: _________</div>
                        <div>• Moisturizing shampoo: _________</div>
                        <div>• Deep conditioner: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match Product to Hair Need</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines to match each hair need with the right product:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Dry, frizzy hair</div>
                                <div>• Oily, greasy hair</div>
                                <div>• Dandruff / itchy scalp</div>
                                <div>• Damaged, brittle hair</div>
                                <div>• Adding shine</div>
                            </div>
                            <div>
                                <div>→ Anti-dandruff shampoo</div>
                                <div>→ Clarifying shampoo</div>
                                <div>→ Deep conditioner</div>
                                <div>→ Hair oil</div>
                                <div>→ Moisturizing shampoo</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Tool Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Name the tool described:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Best for detangling wet hair: _________</div>
                        <div>B. Used for trimming split ends: _________</div>
                        <div>C. Holds sections of hair while styling: _________</div>
                        <div>D. Smooths and styles dry hair: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Your Hair Care Routine</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Describe your current hair care routine. Which products and tools do you use?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> If you had very dry, curly hair, which two products would you choose and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at the hair products in your home. List three shampoos, conditioners, or oils and write what hair type each is made for.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Home Economics",
        topic: "Cosmetology",
        subtopic: "Safe Hair Styling (Lesson 14)",
        lessonContent: `
            <p>Today we'll learn how to safely handle hair tools and practice creative hair grooming!</p>
            <p><strong>Key Question:</strong> How can we style hair safely and creatively?</p>
            <p><strong>Introduction:</strong> Using hair tools safely prevents injuries and damage to hair. With practice and care, you can create neat, beautiful styles while keeping everyone safe.</p>
            <p><strong>Safe Handling of Hair Tools:</strong></p>
            <ul>
                <li><strong>Scissors Safety:</strong>
                    <ul>
                        <li>Always point scissors away from yourself and others</li>
                        <li>Never run with scissors</li>
                        <li>Pass scissors handle-first when giving to someone</li>
                        <li>Keep scissors closed when not in use</li>
                        <li>Use only hair scissors (not paper scissors) on hair</li>
                    </ul>
                </li>
                <li><strong>Comb and Brush Safety:</strong>
                    <ul>
                        <li>Start from the ends and work up to prevent pulling</li>
                        <li>Be gentle on the scalp - don't scratch or poke</li>
                        <li>Clean combs and brushes regularly to prevent bacteria</li>
                        <li>Don't share combs/brushes to avoid spreading lice or germs</li>
                    </ul>
                </li>
                <li><strong>Heat Tool Safety (for older students):</strong>
                    <ul>
                        <li>Always use heat protectant spray</li>
                        <li>Keep dryers/movers away from water</li>
                        <li>Don't leave hot tools on fabric or near flammables</li>
                        <li>Unplug when finished</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Basic Hair Styling Techniques:</strong></p>
            <ul>
                <li><strong>Brushing/Smoothing:</strong> Use gentle strokes from roots to ends</li>
                <li><strong>Sectioning:</strong> Use clips to divide hair into manageable parts</li>
                <li><strong>Ponytail:</strong> Gather hair and secure with soft elastic</li>
                <li><strong>Braiding:</strong> Divide into three sections and cross alternately</li>
                <li><strong>Neat Finishing:</strong> Check for flyaways and smooth with a brush</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Scissors Safety Rules</div>
                <p>Professional hairstylists always keep their scissors closed and in a protective case when not in use. They never walk with scissors open!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Detangling with Care</div>
                <p>Start brushing from the bottom of the hair and work upward. This prevents painful pulling and reduces hair breakage. For tight tangles, hold the hair above the tangle while brushing below.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Creative Styling</div>
                <p>You can create many different looks with just a comb, brush, and hair ties! Try a high ponytail for sports, a low bun for formal events, or braids for a casual look.</p>
            </div>
        `,
        taskInstructions: "Demonstrate safe tool handling and practice hair styling on a peer or mannequin.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Safety Rules Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List 5 safety rules for using hair scissors and combs:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Safe vs. Unsafe Practices</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Mark each statement as Safe (S) or Unsafe (U):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Running with scissors in your hand</div>
                        <div>___ Passing scissors handle-first to a friend</div>
                        <div>___ Brushing hair from the ends upward</div>
                        <div>___ Sharing a comb without cleaning it</div>
                        <div>___ Pointing scissors away from your body</div>
                        <div>___ Leaving a hair dryer plugged in on the counter</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Hair Styling Demonstration</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With a partner or mannequin, practice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Gentle detangling using a wide-tooth comb</div>
                        <div>• Smooth brushing from roots to ends</div>
                        <div>• Creating a neat ponytail or simple braid</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Describe what you did and how your partner/mannequin's hair looked afterward:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Creative Styling Design</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw and describe a hairstyle you would create for a special occasion (party, school picture day, performance):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to use safe practices when handling hair tools?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What hairstyle would you like to learn how to do? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Practice styling your own hair or a family member's hair safely. Write two sentences about what you did and one new thing you learned.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5HomeEconomicsWeek9);
    console.log("grade5-homeeconomics-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5HomeEconomicsWeek9);
    console.log("grade5-homeeconomics-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5HomeEconomicsWeek9',
        metadata: grade5HomeEconomicsWeek9.metadata,
        days: grade5HomeEconomicsWeek9
    });
    console.log("grade5-homeeconomics-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5HomeEconomicsWeek9 = grade5HomeEconomicsWeek9;
console.log("grade5-homeeconomics-week9.js loaded and registered successfully");