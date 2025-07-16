registerWorkbook({
    id: 'g7t1bMath',
    title: 'Mathematics',
    description: 'Mid Term',
    subject: 'Mathematics',
    grade: 7,
    term: 1,
    pages: [
        {
            id: 'page1',
            title: 'Multiple Choice',
            questionLimit: 20,
            exercises: [
                {
                    id: 'section1',
                    title: 'Ratios and Proportions',
                    questions: [
                    /*
    {
        "type": "multiple-choice",
        "text": "If 3 pens cost $6, how much will 5 pens cost if they are in direct proportion?",
        "options": ["$10", "$12", "$8", "$15"],
        "correctAnswer": 0,
        "explanation": "Since cost is directly proportional to the number of pens, 1 pen costs $2, so 5 pens cost $10.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of the following represents indirect proportion?",
        "options": ["More workers, less time to complete a job", "More books, higher cost", "More distance, more time at constant speed", "More food, more cost"],
        "correctAnswer": 0,
        "explanation": "Indirect proportion means as one quantity increases, the other decreases.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 6 workers can build a wall in 10 days, how many days will 15 workers take to build the same wall?",
        "options": ["4 days", "6 days", "10 days", "25 days"],
        "correctAnswer": 0,
        "explanation": "More workers means less time (indirect proportion). 6 × 10 = 15 × x → x = 4.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which graph represents a direct proportion?",
        "options": ["A straight line passing through the origin", "A curved line", "A horizontal line", "A vertical line"],
        "correctAnswer": 0,
        "explanation": "Direct proportion graphs are straight lines starting at the origin (0,0).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If y is directly proportional to x and y = 12 when x = 4, what is y when x = 7?",
        "options": ["21", "16", "14", "24"],
        "correctAnswer": 0,
        "explanation": "y = kx → 12 = k × 4 → k = 3. So, y = 3 × 7 = 21.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 8 men can dig a pit in 6 days, how many men are needed to dig it in 3 days?",
        "options": ["16", "12", "4", "24"],
        "correctAnswer": 0,
        "explanation": "More men means fewer days (indirect proportion). 8 × 6 = x × 3 → x = 16.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of the following is NOT an example of direct proportion?",
        "options": ["Speed and time taken for a fixed distance", "Cost and number of items", "Distance and time at constant speed", "Weight and price of fruits"],
        "correctAnswer": 0,
        "explanation": "Speed and time are inversely proportional for a fixed distance.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 5 kg of rice costs $20, how much will 12 kg cost?",
        "options": ["$48", "$40", "$24", "$60"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 kg costs $4 → 12 kg costs $48.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What happens to the time taken if the number of workers increases in indirect proportion?",
        "options": ["Decreases", "Increases", "Remains the same", "Doubles"],
        "correctAnswer": 0,
        "explanation": "Indirect proportion means as one quantity increases, the other decreases.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 4 pipes fill a tank in 30 minutes, how long will 6 pipes take?",
        "options": ["20 minutes", "45 minutes", "15 minutes", "10 minutes"],
        "correctAnswer": 0,
        "explanation": "More pipes mean less time (indirect proportion). 4 × 30 = 6 × x → x = 20.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which equation represents indirect proportion?",
        "options": ["xy = k", "y = kx", "y = x + k", "y = k/x"],
        "correctAnswer": 0,
        "explanation": "Indirect proportion is represented by xy = constant (k).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 10 workers build a house in 20 days, how many workers are needed to build it in 5 days?",
        "options": ["40", "25", "15", "50"],
        "correctAnswer": 0,
        "explanation": "Fewer days require more workers (indirect proportion). 10 × 20 = x × 5 → x = 40.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the constant of proportionality if y = 15 when x = 5 in direct proportion?",
        "options": ["3", "5", "10", "20"],
        "correctAnswer": 0,
        "explanation": "y = kx → 15 = k × 5 → k = 3.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 3 buses carry 120 passengers, how many passengers can 5 buses carry?",
        "options": ["200", "150", "180", "240"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 bus carries 40 → 5 buses carry 200.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If speed is doubled for a fixed distance, what happens to the time taken?",
        "options": ["Halves", "Doubles", "Remains same", "Triples"],
        "correctAnswer": 0,
        "explanation": "Speed and time are inversely proportional for a fixed distance.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 12 workers finish a job in 8 days, how many days will 16 workers take?",
        "options": ["6", "10", "12", "4"],
        "correctAnswer": 0,
        "explanation": "More workers means fewer days (indirect proportion). 12 × 8 = 16 × x → x = 6.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of the following is an example of indirect proportion?",
        "options": ["More painters, less time to paint a wall", "More apples, higher cost", "More hours worked, more pay", "More distance, more petrol used"],
        "correctAnswer": 0,
        "explanation": "Indirect proportion means as one quantity increases, the other decreases.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 2 kg of sugar costs $8, how much will 7 kg cost?",
        "options": ["$28", "$14", "$24", "$32"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 kg costs $4 → 7 kg costs $28.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 5 machines make 100 toys in 10 hours, how many machines are needed to make 200 toys in 5 hours?",
        "options": ["20", "10", "15", "25"],
        "correctAnswer": 0,
        "explanation": "More toys and less time require more machines. (5 × 10)/100 = (x × 5)/200 → x = 20.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What type of proportion is shown by the equation y = 5x?",
        "options": ["Direct", "Indirect", "Linear", "Quadratic"],
        "correctAnswer": 0,
        "explanation": "y = kx represents direct proportion.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 8 men can build a wall in 12 days, how many days will 6 men take?",
        "options": ["16", "9", "14", "18"],
        "correctAnswer": 0,
        "explanation": "Fewer men means more days (indirect proportion). 8 × 12 = 6 × x → x = 16.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 4 notebooks cost $12, how much will 9 notebooks cost?",
        "options": ["$27", "$18", "$24", "$36"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 notebook costs $3 → 9 notebooks cost $27.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which graph represents indirect proportion?",
        "options": ["A hyperbola", "A straight line", "A parabola", "A circle"],
        "correctAnswer": 0,
        "explanation": "Indirect proportion graphs are hyperbolas (xy = constant).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 10 workers take 15 days to complete a project, how many workers are needed to finish it in 6 days?",
        "options": ["25", "20", "30", "18"],
        "correctAnswer": 0,
        "explanation": "Fewer days require more workers (indirect proportion). 10 × 15 = x × 6 → x = 25.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If y is inversely proportional to x and y = 6 when x = 4, what is y when x = 3?",
        "options": ["8", "6", "4.5", "12"],
        "correctAnswer": 0,
        "explanation": "xy = k → 4 × 6 = 3 × y → y = 8.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 5 cars carry 25 people, how many people can 8 cars carry?",
        "options": ["40", "30", "35", "45"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 car carries 5 → 8 cars carry 40.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 3 pumps empty a tank in 8 hours, how long will 4 pumps take?",
        "options": ["6 hours", "4 hours", "10 hours", "12 hours"],
        "correctAnswer": 0,
        "explanation": "More pumps mean less time (indirect proportion). 3 × 8 = 4 × x → x = 6.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the constant of proportionality if xy = 24 for indirect proportion?",
        "options": ["24", "12", "6", "48"],
        "correctAnswer": 0,
        "explanation": "For indirect proportion, xy = k → k = 24.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 6 workers take 10 days to build a wall, how many days will 4 workers take?",
        "options": ["15", "12", "8", "20"],
        "correctAnswer": 0,
        "explanation": "Fewer workers mean more days (indirect proportion). 6 × 10 = 4 × x → x = 15.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 2 pens cost $6, how much will 5 pens cost?",
        "options": ["$15", "$12", "$10", "$18"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 pen costs $3 → 5 pens cost $15.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 12 men finish a job in 5 days, how many men are needed to finish it in 3 days?",
        "options": ["20", "15", "18", "24"],
        "correctAnswer": 0,
        "explanation": "Fewer days require more men (indirect proportion). 12 × 5 = x × 3 → x = 20.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which equation represents direct proportion?",
        "options": ["y = 7x", "y = 7/x", "xy = 7", "y = x - 7"],
        "correctAnswer": 0,
        "explanation": "Direct proportion is represented by y = kx.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 10 books cost $50, how much will 16 books cost?",
        "options": ["$80", "$60", "$70", "$90"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 book costs $5 → 16 books cost $80.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 4 machines produce 80 items in 5 hours, how many machines are needed to produce 120 items in 2 hours?",
        "options": ["15", "10", "12", "8"],
        "correctAnswer": 0,
        "explanation": "More items and less time require more machines. (4 × 5)/80 = (x × 2)/120 → x = 15.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If y is directly proportional to x and y = 20 when x = 5, what is y when x = 8?",
        "options": ["32", "25", "40", "16"],
        "correctAnswer": 0,
        "explanation": "y = kx → 20 = k × 5 → k = 4. So, y = 4 × 8 = 32.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 6 workers take 12 days to complete a task, how many workers are needed to finish it in 4 days?",
        "options": ["18", "9", "12", "24"],
        "correctAnswer": 0,
        "explanation": "Fewer days require more workers (indirect proportion). 6 × 12 = x × 4 → x = 18.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 5 kg of flour costs $15, how much will 9 kg cost?",
        "options": ["$27", "$20", "$25", "$30"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 kg costs $3 → 9 kg costs $27.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 8 pipes fill a tank in 6 hours, how long will 12 pipes take?",
        "options": ["4 hours", "9 hours", "3 hours", "8 hours"],
        "correctAnswer": 0,
        "explanation": "More pipes mean less time (indirect proportion). 8 × 6 = 12 × x → x = 4.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the constant of proportionality if y = 30 when x = 6 in direct proportion?",
        "options": ["5", "6", "10", "15"],
        "correctAnswer": 0,
        "explanation": "y = kx → 30 = k × 6 → k = 5.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 3 buses transport 90 passengers, how many passengers can 7 buses transport?",
        "options": ["210", "150", "180", "240"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 bus carries 30 → 7 buses carry 210.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 10 workers build a house in 30 days, how many workers are needed to build it in 15 days?",
        "options": ["20", "15", "25", "30"],
        "correctAnswer": 0,
        "explanation": "Fewer days require more workers (indirect proportion). 10 × 30 = x × 15 → x = 20.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 4 shirts cost $36, how much will 10 shirts cost?",
        "options": ["$90", "$72", "$60", "$108"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 shirt costs $9 → 10 shirts cost $90.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 5 machines produce 100 items in 10 hours, how many machines are needed to produce 150 items in 5 hours?",
        "options": ["15", "10", "20", "12"],
        "correctAnswer": 0,
        "explanation": "More items and less time require more machines. (5 × 10)/100 = (x × 5)/150 → x = 15.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If y is inversely proportional to x and y = 8 when x = 6, what is y when x = 4?",
        "options": ["12", "8", "6", "16"],
        "correctAnswer": 0,
        "explanation": "xy = k → 6 × 8 = 4 × y → y = 12.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 6 workers take 9 days to complete a job, how many days will 9 workers take?",
        "options": ["6", "12", "8", "10"],
        "correctAnswer": 0,
        "explanation": "More workers mean fewer days (indirect proportion). 6 × 9 = 9 × x → x = 6.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 2 kg of apples cost $10, how much will 5 kg cost?",
        "options": ["$25", "$15", "$20", "$30"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 kg costs $5 → 5 kg costs $25.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 12 men finish a job in 8 days, how many men are needed to finish it in 6 days?",
        "options": ["16", "12", "18", "20"],
        "correctAnswer": 0,
        "explanation": "Fewer days require more men (indirect proportion). 12 × 8 = x × 6 → x = 16.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 3 pencils cost $9, how much will 7 pencils cost?",
        "options": ["$21", "$18", "$14", "$27"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 pencil costs $3 → 7 pencils cost $21.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 5 workers take 12 days to build a wall, how many days will 3 workers take?",
        "options": ["20", "15", "18", "24"],
        "correctAnswer": 0,
        "explanation": "Fewer workers mean more days (indirect proportion). 5 × 12 = 3 × x → x = 20.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the constant of proportionality if xy = 36 for indirect proportion?",
        "options": ["36", "18", "12", "6"],
        "correctAnswer": 0,
        "explanation": "For indirect proportion, xy = k → k = 36.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 4 cars carry 20 people, how many people can 10 cars carry?",
        "options": ["50", "40", "30", "60"],
        "correctAnswer": 0,
        "explanation": "Direct proportion: 1 car carries 5 → 10 cars carry 50.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 8 pumps empty a tank in 6 hours, how long will 12 pumps take?",
        "options": ["4 hours", "3 hours", "8 hours", "9 hours"],
        "correctAnswer": 0,
        "explanation": "More pumps mean less time (indirect proportion). 8 × 6 = 12 × x → x = 4.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If y is directly proportional to x and y = 24 when x = 8, what is y when x = 5?",
        "options": ["15", "12", "20", "18"],
        "correctAnswer": 0,
        "explanation": "y = kx → 24 = k × 8 → k = 3. So, y = 3 × 5 = 15.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 10 workers take 6 days to complete a task, how many workers are needed to finish it in 4 days?",
        "options": ["15", "12", "18", "20"],
        "correctAnswer": 0,
        "explanation": "Fewer days require more workers (indirect proportion). 10 × 6 = x × 4 → x = 15.",
        "shuffleOptions": true
    },
                    
*/
                    
    {
        "type": "multiple-choice",
        "text": "What is the primary purpose of currency conversion?",
        "options": ["To exchange one currency for another", "To print new money", "To increase inflation", "To reduce taxes"],
        "correctAnswer": 0,
        "explanation": "Currency conversion allows exchanging one currency for another based on exchange rates.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 USD = 150 Naira, how much is 5 USD in Naira?",
        "options": ["750 Naira", "300 Naira", "150 Naira", "500 Naira"],
        "correctAnswer": 0,
        "explanation": "Multiply 5 USD by the exchange rate (150 Naira/USD) to get 750 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT involved in buying/selling foreign currency?",
        "options": ["Printing new banknotes", "Exchange rate", "Local currency", "Foreign currency"],
        "correctAnswer": 0,
        "explanation": "Buying/selling currency involves exchange rates and currencies, not printing money.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If an item costs 20 Euros and 1 Euro = 200 Naira, what is the cost in Naira?",
        "options": ["4000 Naira", "2000 Naira", "1000 Naira", "5000 Naira"],
        "correctAnswer": 0,
        "explanation": "Multiply 20 Euros by 200 Naira/Euro to get 4000 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What does 'appreciation of currency' mean?",
        "options": ["Increase in currency value", "Decrease in currency value", "Printing more money", "Losing money"],
        "correctAnswer": 0,
        "explanation": "Appreciation means the currency gains value compared to others.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a key trait needed in currency exchange?",
        "options": ["Honesty", "Aggressiveness", "Ignorance", "Carelessness"],
        "correctAnswer": 0,
        "explanation": "Honesty ensures fair transactions in currency exchange.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 GBP = 500 Naira, how many GBP is 2500 Naira?",
        "options": ["5 GBP", "10 GBP", "2.5 GBP", "25 GBP"],
        "correctAnswer": 0,
        "explanation": "Divide 2500 Naira by 500 Naira/GBP to get 5 GBP.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the first step in converting currency?",
        "options": ["Check the exchange rate", "Print money", "Ignore the rate", "Guess the value"],
        "correctAnswer": 0,
        "explanation": "Exchange rates determine how much one currency is worth in another.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If a trader buys 1 USD for 150 Naira and sells it for 160 Naira, what is the profit per USD?",
        "options": ["10 Naira", "150 Naira", "160 Naira", "0 Naira"],
        "correctAnswer": 0,
        "explanation": "Profit = Selling price (160) - Buying price (150) = 10 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a foreign currency?",
        "options": ["US Dollar (USD)", "Naira", "Cowrie shells", "Gold dust"],
        "correctAnswer": 0,
        "explanation": "USD is a foreign currency compared to Naira (Nigeria).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What happens if the exchange rate increases?",
        "options": ["Foreign goods become more expensive", "Foreign goods become cheaper", "No effect", "Local currency loses all value"],
        "correctAnswer": 0,
        "explanation": "A higher exchange rate means more local currency is needed to buy foreign goods.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1000 Naira = 5 Euros, how much is 1 Euro in Naira?",
        "options": ["200 Naira", "100 Naira", "500 Naira", "50 Naira"],
        "correctAnswer": 0,
        "explanation": "Divide 1000 Naira by 5 Euros to get 200 Naira/Euro.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why is assertiveness important in currency exchange?",
        "options": ["To negotiate fair rates", "To avoid transactions", "To hide money", "To cheat others"],
        "correctAnswer": 0,
        "explanation": "Assertiveness helps in negotiating better exchange rates confidently.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the selling price if a trader adds a 10% profit to a buying price of 100 Naira/USD?",
        "options": ["110 Naira", "100 Naira", "90 Naira", "10 Naira"],
        "correctAnswer": 0,
        "explanation": "10% of 100 Naira is 10, so selling price = 100 + 10 = 110 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which institution often regulates currency exchange?",
        "options": ["Central Bank", "Supermarket", "School", "Hospital"],
        "correctAnswer": 0,
        "explanation": "Central Banks oversee currency exchange policies.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 USD = 150 Naira and 1 Euro = 200 Naira, which is stronger?",
        "options": ["Euro", "USD", "Both are equal", "Cannot compare"],
        "correctAnswer": 0,
        "explanation": "1 Euro buys more Naira (200) than 1 USD (150), so Euro is stronger.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the cost of a 50 Euro item if 1 Euro = 220 Naira?",
        "options": ["11,000 Naira", "5,000 Naira", "2,200 Naira", "10,000 Naira"],
        "correctAnswer": 0,
        "explanation": "50 × 220 = 11,000 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the term for converting local currency to foreign currency?",
        "options": ["Currency exchange", "Money printing", "Donation", "Saving"],
        "correctAnswer": 0,
        "explanation": "Currency exchange involves converting between local and foreign money.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If a phone costs 300 USD and 1 USD = 160 Naira, what is the cost in Naira?",
        "options": ["48,000 Naira", "30,000 Naira", "16,000 Naira", "3,000 Naira"],
        "correctAnswer": 0,
        "explanation": "300 × 160 = 48,000 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a risk in currency exchange?",
        "options": ["Exchange rate fluctuations", "Fixed prices", "Free money", "No risks"],
        "correctAnswer": 0,
        "explanation": "Rates can change, affecting the value of exchanged money.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is 10,000 Naira in USD if 1 USD = 200 Naira?",
        "options": ["50 USD", "100 USD", "200 USD", "20 USD"],
        "correctAnswer": 0,
        "explanation": "10,000 ÷ 200 = 50 USD.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why do businesses need currency conversion?",
        "options": ["To trade internationally", "To avoid money", "To print receipts", "To close banks"],
        "correctAnswer": 0,
        "explanation": "International trade requires exchanging currencies.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If a trader buys euros at 250 Naira and sells at 260 Naira, what is the percentage profit?",
        "options": ["4%", "10%", "25%", "50%"],
        "correctAnswer": 0,
        "explanation": "Profit = 10 Naira. (10/250) × 100 = 4%.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which factor affects exchange rates?",
        "options": ["Economic stability", "Weather", "School holidays", "Traffic"],
        "correctAnswer": 0,
        "explanation": "Strong economies tend to have stronger currencies.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is 5,000 Naira in GBP if 1 GBP = 500 Naira?",
        "options": ["10 GBP", "5 GBP", "50 GBP", "100 GBP"],
        "correctAnswer": 0,
        "explanation": "5,000 ÷ 500 = 10 GBP.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main benefit of honest currency exchange?",
        "options": ["Trust in transactions", "More fraud", "Higher taxes", "Confusion"],
        "correctAnswer": 0,
        "explanation": "Honesty builds trust between buyers and sellers.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 CAD = 120 Naira, how much is 15 CAD in Naira?",
        "options": ["1,800 Naira", "1,200 Naira", "2,400 Naira", "800 Naira"],
        "correctAnswer": 0,
        "explanation": "15 × 120 = 1,800 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is depreciation of currency?",
        "options": ["Decrease in value", "Increase in value", "No change", "Free money"],
        "correctAnswer": 0,
        "explanation": "Depreciation means the currency loses value compared to others.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 USD = 150 Naira today and 155 Naira tomorrow, what happened?",
        "options": ["Naira depreciated", "Naira appreciated", "USD disappeared", "No change"],
        "correctAnswer": 0,
        "explanation": "More Naira is needed to buy 1 USD, so Naira lost value.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which is NOT a currency?",
        "options": ["Kilogram", "Dollar", "Euro", "Yen"],
        "correctAnswer": 0,
        "explanation": "Kilogram is a unit of weight, not currency.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "How much is 30,000 Naira in USD if 1 USD = 150 Naira?",
        "options": ["200 USD", "300 USD", "150 USD", "100 USD"],
        "correctAnswer": 0,
        "explanation": "30,000 ÷ 150 = 200 USD.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a common use of foreign currency?",
        "options": ["International travel", "Paying local taxes", "Buying groceries locally", "Building houses"],
        "correctAnswer": 0,
        "explanation": "Foreign currency is used for cross-border transactions like travel.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 Yen = 1.5 Naira, how much is 100 Yen in Naira?",
        "options": ["150 Naira", "100 Naira", "50 Naira", "15 Naira"],
        "correctAnswer": 0,
        "explanation": "100 × 1.5 = 150 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the role of a bureau de change?",
        "options": ["Currency exchange", "Selling food", "Repairing phones", "Teaching math"],
        "correctAnswer": 0,
        "explanation": "Bureaus de change specialize in currency conversion.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 GBP = 600 Naira, how much is 3,000 Naira in GBP?",
        "options": ["5 GBP", "10 GBP", "6 GBP", "50 GBP"],
        "correctAnswer": 0,
        "explanation": "3,000 ÷ 600 = 5 GBP.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why might exchange rates change daily?",
        "options": ["Market demand", "Fixed by law", "No reason", "Only on weekends"],
        "correctAnswer": 0,
        "explanation": "Rates fluctuate based on supply/demand in the global market.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is 2,500 Naira in Euros if 1 Euro = 250 Naira?",
        "options": ["10 Euros", "25 Euros", "100 Euros", "5 Euros"],
        "correctAnswer": 0,
        "explanation": "2,500 ÷ 250 = 10 Euros.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which skill is vital for currency traders?",
        "options": ["Numeracy", "Singing", "Dancing", "Sleeping"],
        "correctAnswer": 0,
        "explanation": "Numeracy helps calculate exchange rates accurately.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 USD = 160 Naira today and 170 Naira tomorrow, what should a trader do?",
        "options": ["Buy USD today", "Wait indefinitely", "Burn money", "Ignore rates"],
        "correctAnswer": 0,
        "explanation": "Buying before the USD becomes more expensive saves money.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the profit if you buy 10 USD at 150 Naira/USD and sell at 160 Naira/USD?",
        "options": ["100 Naira", "150 Naira", "160 Naira", "0 Naira"],
        "correctAnswer": 0,
        "explanation": "Profit per USD = 10 Naira. Total = 10 × 10 = 100 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which is true about currency appreciation?",
        "options": ["Imports become cheaper", "Exports become expensive", "No effect", "Currency vanishes"],
        "correctAnswer": 0,
        "explanation": "A stronger currency buys more foreign goods, reducing import costs.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 AUD = 90 Naira, how much is 500 AUD in Naira?",
        "options": ["45,000 Naira", "9,000 Naira", "90,000 Naira", "5,000 Naira"],
        "correctAnswer": 0,
        "explanation": "500 × 90 = 45,000 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a disadvantage of frequent rate changes?",
        "options": ["Unpredictable costs", "Free money", "Stable economy", "No trading"],
        "correctAnswer": 0,
        "explanation": "Businesses face uncertainty in planning due to fluctuating rates.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "How much is 1,200 Naira in USD if 1 USD = 120 Naira?",
        "options": ["10 USD", "12 USD", "100 USD", "1 USD"],
        "correctAnswer": 0,
        "explanation": "1,200 ÷ 120 = 10 USD.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the buying price if a trader sells 1 USD for 5% profit over 160 Naira?",
        "options": ["160 Naira", "168 Naira", "152 Naira", "200 Naira"],
        "correctAnswer": 0,
        "explanation": "Buying price is the base cost before profit (160 Naira).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which is NOT a foreign currency in Nigeria?",
        "options": ["Naira", "US Dollar", "Euro", "Yen"],
        "correctAnswer": 0,
        "explanation": "Naira is Nigeria's local currency.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 SGD = 300 Naira, how much is 7 SGD in Naira?",
        "options": ["2,100 Naira", "300 Naira", "700 Naira", "3,000 Naira"],
        "correctAnswer": 0,
        "explanation": "7 × 300 = 2,100 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the selling price for 1 GBP bought at 500 Naira with a 2% profit?",
        "options": ["510 Naira", "500 Naira", "520 Naira", "550 Naira"],
        "correctAnswer": 0,
        "explanation": "2% of 500 = 10 Naira. Selling price = 500 + 10 = 510 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which action helps avoid losses in currency exchange?",
        "options": ["Monitoring rates", "Ignoring rates", "Guessing", "Avoiding money"],
        "correctAnswer": 0,
        "explanation": "Tracking rate trends helps make informed decisions.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 CNY = 30 Naira, how much is 50 CNY in Naira?",
        "options": ["1,500 Naira", "500 Naira", "300 Naira", "150 Naira"],
        "correctAnswer": 0,
        "explanation": "50 × 30 = 1,500 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the term for the difference between buying and selling rates?",
        "options": ["Spread", "Profit", "Loss", "Interest"],
        "correctAnswer": 0,
        "explanation": "The spread is the gap between buy/sell prices set by traders.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 1 EUR = 220 Naira and 1 USD = 150 Naira, which is weaker?",
        "options": ["USD", "EUR", "Both are equal", "Cannot determine"],
        "correctAnswer": 0,
        "explanation": "1 USD buys fewer Naira (150) than 1 EUR (220), so USD is weaker here.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is 7,000 Naira in JPY if 1 JPY = 0.5 Naira?",
        "options": ["14,000 JPY", "7,000 JPY", "3,500 JPY", "500 JPY"],
        "correctAnswer": 0,
        "explanation": "7,000 ÷ 0.5 = 14,000 JPY.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why do tourists exchange currency?",
        "options": ["To use local money", "To avoid spending", "To save forever", "To print money"],
        "correctAnswer": 0,
        "explanation": "Tourists need local currency for transactions in the visited country.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is 25 USD in Naira if 1 USD = 170 Naira?",
        "options": ["4,250 Naira", "2,500 Naira", "1,700 Naira", "425 Naira"],
        "correctAnswer": 0,
        "explanation": "25 × 170 = 4,250 Naira.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which trait prevents fraud in currency exchange?",
        "options": ["Integrity", "Dishonesty", "Laziness", "Ignorance"],
        "correctAnswer": 0,
        "explanation": "Integrity ensures fair and transparent transactions.",
        "shuffleOptions": true
    },
                            
                    ]
                },
            
            ]
        },
    
    
    
    
    ]
});