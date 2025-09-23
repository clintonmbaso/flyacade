registerWorkbook({
    id: 'g7MathPastPapers',
    title: 'Mathematics - All Past Papers',
    description: 'Revision Questions',
    subject: 'Mathematics',
    grade: 7,
    term: 3,
    pages: [
        {
            id: 'page1',
            title: 'Multiple Choice',
            questionLimit: 50,
            exercises: [
                {
                    id: 'section1',
                    title: 'Mathematics Past Papers',
                    questions: [
                            
// 2014
/*
    {
        "type": "multiple-choice",
        "text": "1 Find the perimeter of the shape below.",
        "options": ["20cm", "24cm", "25cm", "26cm"],
        "correctAnswer": 1,
        "explanation": "Adding all sides: 5+1+1+3+1+5+2+2+? = Need full calculation from diagram",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "Add 4 189 to 5 811.",
        "options": ["1 622", "1 778", "10 000", "10 990"],
        "correctAnswer": 2,
        "explanation": "4,189 + 5,811 = 10,000",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "43.102 + 2.784 + 4.110 = ...",
        "options": ["94.996", "49.996", "49.699", "9.996"],
        "correctAnswer": 1,
        "explanation": "43.102 + 2.784 = 45.886; 45.886 + 4.110 = 49.996",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "60.215 litres × 3 = ...",
        "options": ["183.645 litres", "183.635 litres", "180.645 litres", "180.635 litres"],
        "correctAnswer": 0,
        "explanation": "60.215 × 3 = 180.645",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "5 The graph below shows the number of bags of rice produced by a farmer in five years. How many bags were produced in 2008?",
        "options": ["60", "50", "30", "25"],
        "correctAnswer": 1,
        "explanation": "Based on the graph, 2008 shows 50 bags",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "Which symbol should be put in the box to make the statement below true? 243 □ 234",
        "options": ["⊂", "=", "<", ">"],
        "correctAnswer": 3,
        "explanation": "243 is greater than 234",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "The number line below shows ●●●",
        "options": ["-2 + (+7) = +5.", "+2 - (+7) = +5.", "-2 + (-7) = +5.", "+2 + (+7) = +5."],
        "correctAnswer": 0,
        "explanation": "Starting at -2 and moving +7 units lands at +5",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "3/8 × 1/2 = ...",
        "options": ["3/4", "2/5", "1/3", "3/16"],
        "correctAnswer": 3,
        "explanation": "3/8 × 1/2 = 3/16",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "There are two boxes of oranges. One of the boxes contains 144 oranges while the other contains 156 oranges. How many oranges are packed in the boxes altogether?",
        "options": ["312", "300", "288", "150"],
        "correctAnswer": 0,
        "explanation": "144 + 156 = 312",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Convert 0.25 to a percentage.",
        "options": ["25%", "20%", "5%", "4%"],
        "correctAnswer": 0,
        "explanation": "0.25 × 100 = 25%",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The smallest four digit number that can be formed using the digits 4, 1, 3 and 2 is ...",
        "options": ["4 321.", "3 421.", "2 143.", "1 234."],
        "correctAnswer": 3,
        "explanation": "Arranging digits in ascending order: 1,234",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If x + 12 = 35, then x is ...",
        "options": ["47.", "23.", "-13.", "-47."],
        "correctAnswer": 1,
        "explanation": "x = 35 - 12 = 23",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Set A = {dress, shoes, bag, hat} and Set B = {bag, coat, shirt, dress}. List the intersection of set A and set B.",
        "options": ["{dress, bag}", "{coat, dress}", "{shoes, bag}", "{shirt, coat}"],
        "correctAnswer": 0,
        "explanation": "Intersection contains elements common to both sets: dress and bag",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If a car travels at an average speed of 80 kilometres per hour for 3 hours without stopping, what distance would be covered?",
        "options": ["300km", "250km", "240km", "120km"],
        "correctAnswer": 2,
        "explanation": "Distance = Speed × Time = 80 × 3 = 240km",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the sum of 4 249 and 867 113?",
        "options": ["861 362", "862 864", "871 352", "871 362"],
        "correctAnswer": 3,
        "explanation": "4,249 + 867,113 = 871,362",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "In words, 169 729 can be written as ••••",
        "options": ["one hundred sixty-nine seven hundred twenty-nine.", "one hundred sixty-nine million seven hundred twenty-nine.", "one hundred sixteen thousand nine hundred seventy two nine.", "one hundred sixty-nine thousand seven hundred twenty-nine."],
        "correctAnswer": 3,
        "explanation": "169,729 is one hundred sixty-nine thousand seven hundred twenty-nine",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Set A = {2, 4, 6, 8} and set B = {1, 2, 3, 4}. List the union of set A and set B.",
        "options": ["{1, 2, 3, 4, 6, 8}", "{1, 2, 3, 4}", "{1, 2, 4, 6, 8}", "{2, 4, 6, 8}"],
        "correctAnswer": 0,
        "explanation": "Union contains all elements from both sets without duplication",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Multiply 284 by 128.",
        "options": ["35 252", "35 352", "36 252", "36 352"],
        "correctAnswer": 3,
        "explanation": "284 × 128 = 36,352",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "1 000 000 – 328 746 =",
        "options": ["670 254", "671 154", "671 254", "672 254"],
        "correctAnswer": 2,
        "explanation": "1,000,000 - 328,746 = 671,254",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "K5 002.00 – K1 342.00 =",
        "options": ["K4 660.00", "K4 360.00", "K3 660.00", "K3 360.00"],
        "correctAnswer": 2,
        "explanation": "5,002 - 1,342 = 3,660",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Subtract 213.78 from 376.34.",
        "options": ["162.65", "162.56", "126.65", "126.56"],
        "correctAnswer": 1,
        "explanation": "376.34 - 213.78 = 162.56",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "22 Look at the square below. The lines of symmetry are ...",
        "options": ["A, B, C and D.", "A, B, D and E.", "A, B, E and F.", "A, B, C and E."],
        "correctAnswer": 0,
        "explanation": "A square has 4 lines of symmetry",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "23 Look at the Venn diagram below. Set A equals ●●●",
        "options": ["{a, b, c, d}.", "{a, b, d}.", "{b, d}.", "{a, c}."],
        "correctAnswer": 1,
        "explanation": "Set A contains elements in circle A only",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "What would be the cost of 15 litres of petrol, if 1 litre costs K10.00?",
        "options": ["K25.00", "K105.00", "K150.00", "K250.00"],
        "correctAnswer": 2,
        "explanation": "15 × 10 = 150",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "20.5°C - 11.3°C = ...",
        "options": ["9.2°C", "9.8°C", "19.2°C", "31.8°C"],
        "correctAnswer": 0,
        "explanation": "20.5 - 11.3 = 9.2",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The average mass of 6 girls is 40kg. The total mass of the girls is ...",
        "options": ["260kg.", "250kg.", "240kg.", "204kg."],
        "correctAnswer": 2,
        "explanation": "Total mass = Average × Number = 40 × 6 = 240kg",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "K150 240.00 + K82 205.00 + K13 250.00 =",
        "options": ["K254 695.00", "K254 596.00", "K245 956.00", "K245 695.00"],
        "correctAnswer": 3,
        "explanation": "150,240 + 82,205 = 232,445; 232,445 + 13,250 = 245,695",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Write the Roman numeral LXIV in Hindu-Arabic numerals.",
        "options": ["64", "66", "114", "514"],
        "correctAnswer": 0,
        "explanation": "LXIV = 50 + 10 + 4 = 64",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "In its lowest terms, the ratio 7 : 21 : 42 can be written as...",
        "options": ["1 : 3 : 6.", "3 : 1 : 6.", "1 : 2 : 5.", "2 : 1 : 5."],
        "correctAnswer": 0,
        "explanation": "Divide all terms by 7: 7÷7=1, 21÷7=3, 42÷7=6",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Joshua bought 18 pens. He gave x of them to her sister and remained with 11. Find the value of x.",
        "options": ["6", "7", "28", "29"],
        "correctAnswer": 1,
        "explanation": "18 - x = 11, so x = 7",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Mulenga got 40 marks out of 50 in a Mathematics test. Convert these marks to a percentage.",
        "options": ["40%", "50%", "80%", "100%"],
        "correctAnswer": 2,
        "explanation": "(40/50) × 100 = 80%",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Find the sum of 352.79km, 400km and 39.5km.",
        "options": ["792.29km", "360.74km", "79.229km", "36.074km"],
        "correctAnswer": 0,
        "explanation": "352.79 + 400 = 752.79; 752.79 + 39.5 = 792.29",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "33 Look at the Venn diagram below. How many members are in set B?",
        "options": ["1", "2", "3", "6"],
        "correctAnswer": 2,
        "explanation": "Set B contains 3 elements",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "A lady bought a radio at K600.00 and sold it at a price of K750.00 later on. How much profit did she make?",
        "options": ["K100.00", "K150.00", "K250.00", "K1 350.00"],
        "correctAnswer": 1,
        "explanation": "Profit = Selling Price - Cost Price = 750 - 600 = 150",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "35 The graph below shows temperatures recorded at a place in one week. On which day was the lowest temperature recorded?",
        "options": ["Friday", "Sunday", "Tuesday", "Saturday"],
        "correctAnswer": 0,
        "explanation": "Friday shows the lowest point on the graph",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "35 900 ÷ 50 =",
        "options": ["718", "35 085", "35 805", "35 850"],
        "correctAnswer": 0,
        "explanation": "35,900 ÷ 50 = 718",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "150 books were shared among John, Luke and Grace in the ratio 1 : 2 : 3 respectively. How many books did Luke receive?",
        "options": ["75", "50", "25", "15"],
        "correctAnswer": 1,
        "explanation": "Total parts = 1+2+3=6; Luke's share = (2/6)×150 = 50",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "38 The cuboid below has ••••",
        "options": ["8 vertices and 6 faces.", "8 vertices and 8 faces.", "6 vertices and 8 faces.", "6 vertices and 6 faces."],
        "correctAnswer": 0,
        "explanation": "A cuboid has 8 vertices and 6 faces",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "Convert 8/25 to a decimal fraction.",
        "options": ["32.0", "3.2", "3.125", "0.32"],
        "correctAnswer": 3,
        "explanation": "8 ÷ 25 = 0.32",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Write 500 metres to 1 kilometre as a ratio in its lowest terms.",
        "options": ["1 : 2", "1 : 4", "1 : 20", "1 : 40"],
        "correctAnswer": 0,
        "explanation": "500m : 1000m = 1 : 2",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Convert 8 500 grams to kilograms.",
        "options": ["85 kilograms", "8.5 kilograms", "0.85 kilograms", "0.085 kilograms"],
        "correctAnswer": 1,
        "explanation": "8,500 ÷ 1,000 = 8.5",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "214 × 42 = ...",
        "options": ["8 988", "8 986", "8 888", "1 382"],
        "correctAnswer": 0,
        "explanation": "214 × 42 = 8,988",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of the following statements is true?",
        "options": ["-1 < -3", "-1 < -4", "-2 > -5", "-3 > 0"],
        "correctAnswer": 2,
        "explanation": "-2 is greater than -5 on the number line",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "An angle which is less than 90° is called ...",
        "options": ["an acute angle.", "an obtuse angle.", "a right angle.", "a straight angle."],
        "correctAnswer": 0,
        "explanation": "Acute angles measure less than 90°",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "3/2 + 1/9",
        "options": ["4/27", "4/4", "3/10", "3/3"],
        "correctAnswer": 1,
        "explanation": "3/2 = 27/18, 1/9 = 2/18; 27/18 + 2/18 = 29/18 = 1 11/18",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "A school has 1 575 pupils. If there are 45 pupils in every class, how many classes are there in the school?",
        "options": ["105", "35", "15", "5"],
        "correctAnswer": 1,
        "explanation": "1,575 ÷ 45 = 35",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Calculate the average mass of three girls with masses of 50kg, 35kg and 29kg.",
        "options": ["29kg", "35kg", "38kg", "50kg"],
        "correctAnswer": 2,
        "explanation": "(50 + 35 + 29) ÷ 3 = 114 ÷ 3 = 38kg",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "1/2 of K15 550.00 is ...",
        "options": ["K7 575.00", "K7 755.00", "K7 757.00", "K7 775.00"],
        "correctAnswer": 3,
        "explanation": "15,550 ÷ 2 = 7,775",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "49 156 eight in base ten is ...",
        "options": ["146.", "110.", "98.", "56."],
        "correctAnswer": 1,
        "explanation": "156₈ = 1×64 + 5×8 + 6×1 = 64 + 40 + 6 = 110",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The difference between 5 072 and 30 125 is ...",
        "options": ["250 0053.", "35 197.", "25 053.", "2 593."],
        "correctAnswer": 2,
        "explanation": "30,125 - 5,072 = 25,053",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "A cuboid has a volume of 240cm³. If the length of the cuboid is 10cm and the width is 6cm, find the height.",
        "options": ["2cm", "4cm", "6cm", "8cm"],
        "correctAnswer": 1,
        "explanation": "Volume = l × w × h; 240 = 10 × 6 × h; h = 240 ÷ 60 = 4cm",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "52 How many lines of symmetry does the shape below have?",
        "options": ["0", "1", "2", "4"],
        "correctAnswer": 1,
        "explanation": "The shape appears to have 1 line of symmetry",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "2.413 × 2.1 = ...",
        "options": ["4.0673", "5.0673", "40.673", "50.673"],
        "correctAnswer": 1,
        "explanation": "2.413 × 2.1 = 5.0673",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Joyce and Jane bought 20 100 pockets of cement altogether. If Jane got 9 001 pockets of cement, how many pockets of cement did Joyce get?",
        "options": ["29 101", "11 199", "11 099", "11 009"],
        "correctAnswer": 2,
        "explanation": "20,100 - 9,001 = 11,099",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "A wholesaler delivered 204 crates of bottles of soft drinks to a shop. If one crate had 24 bottles of soft drinks, how many bottles of soft drinks were delivered?",
        "options": ["228", "756", "1 224", "4 896"],
        "correctAnswer": 3,
        "explanation": "204 × 24 = 4,896",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "In a class of 45 pupils, 24 are boys. Express the number of boys in base five.",
        "options": ["10₅", "14₅", "40₅", "44₅"],
        "correctAnswer": 3,
        "explanation": "24 in base 5: 24 ÷ 5 = 4 remainder 4, so 44₅",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Find the area of a rectangle measuring 25cm by 12cm.",
        "options": ["300cm²", "250cm²", "240cm²", "37cm²"],
        "correctAnswer": 0,
        "explanation": "Area = length × width = 25 × 12 = 300cm²",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Mwale has K80.00 and buys 4 loaves of bread at K4.00 each, 2 packets of sugar at K12.00 each and fish for K35.00. What is Mwale's change?",
        "options": ["K320.00", "K127.00", "K29.00", "K5.00"],
        "correctAnswer": 3,
        "explanation": "Bread: 4×4=16; Sugar: 2×12=24; Total: 16+24+35=75; Change: 80-75=5",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Mrs Chanda spent K20.00 out of K200.00. What fraction of the money did she spend?",
        "options": ["1/5", "1/10", "1/100", "2/25"],
        "correctAnswer": 1,
        "explanation": "20/200 = 1/10",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "60 22% of 2 000 is ...",
        "options": ["44 000.", "4 400.", "440.", "40."],
        "correctAnswer": 2,
        "explanation": "22% of 2,000 = 0.22 × 2,000 = 440",
        "shuffleOptions": true
    },
                    
// 2015
    {
        "type": "multiple-choice",
        "text": "30 157 + 11 028 = ______",
        "options": ["41 258", "41 185", "40 185", "39 185"],
        "correctAnswer": 1,
        "explanation": "30,157 + 11,028 = 41,185",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Find the sum of K469.32 and K321.03.",
        "options": ["K790.35", "K780.35", "K148.39", "K148.29"],
        "correctAnswer": 0,
        "explanation": "469.32 + 321.03 = 790.35",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "3    The diagram below shows a plan of a house.\n\nFind the perimeter of the plan.",
        "options": ["60m", "56m", "46m", "41m"],
        "correctAnswer": 1,
        "explanation": "Perimeter = 15 + 8 + 5 + 5 + 5 + 8 + 5 + 5 = 56m",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "896,457 - 473 681 = ______",
        "options": ["423 876", "423 776", "422 876", "422 776"],
        "correctAnswer": 1,
        "explanation": "896,457 - 473,681 = 422,776",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Find the sum of 718 624 and 137 392.",
        "options": ["855 016", "855 916", "856 016", "856 916"],
        "correctAnswer": 2,
        "explanation": "718,624 + 137,392 = 856,016",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Express 3/4 as a decimal.",
        "options": ["0.00075", "0.0075", "0.075", "0.75"],
        "correctAnswer": 3,
        "explanation": "3 ÷ 4 = 0.75",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "85kg + 6kg + 27kg = ...",
        "options": ["172kg", "162kg", "118kg", "108kg"],
        "correctAnswer": 2,
        "explanation": "85 + 6 + 27 = 118kg",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The smallest number that can be written using the digits 0, 1, 2, 3 and 4 is ...",
        "options": ["10 234.", "10 243.", "10 324.", "10 432."],
        "correctAnswer": 0,
        "explanation": "Smallest 5-digit number using given digits: 10,234",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Town A received 435 540 bags of fertilizer and town B received 187 225 bags of fertilizer. How many bags of fertilizer did the two towns receive altogether?",
        "options": ["622 765", "612 765", "522 765", "512 765"],
        "correctAnswer": 0,
        "explanation": "435,540 + 187,225 = 622,765",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the place value of 2 in the number 623 409?",
        "options": ["Ten thousands", "Thousands", "Hundreds", "Tens"],
        "correctAnswer": 1,
        "explanation": "2 is in the thousands place (20,000)",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The symbol > means ...",
        "options": ["is greater than.", "is less than.", "is equal to.", "is greater than or equal to."],
        "correctAnswer": 0,
        "explanation": "> means 'greater than'",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "1000.87 – 213.16 =",
        "options": ["783.71", "787.71", "793.71", "797.71"],
        "correctAnswer": 1,
        "explanation": "1000.87 - 213.16 = 787.71",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "13 The graph below shows the amount of milk supplied to a hotel in five days. How many litres of milk were supplied on Monday and Tuesday altogether?",
        "options": ["100 litres", "150 litres", "200 litres", "300 litres"],
        "correctAnswer": 2,
        "explanation": "Monday + Tuesday = 100 + 100 = 200 litres",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "14 Look at the diagram below.\n\nHow many members are in the intersection set?",
        "options": ["8", "5", "3", "2"],
        "correctAnswer": 3,
        "explanation": "Intersection contains elements common to both sets P and Q",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "1.475 + 2.28 =",
        "options": ["1.693", "1.703", "3.655", "3.755"],
        "correctAnswer": 3,
        "explanation": "1.475 + 2.28 = 3.755",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The average age of three boys is 10. If the first boy is 5 years and the second boy is 10 years old, find the age of the third boy.",
        "options": ["30 years", "25 years", "15 years", "10 years"],
        "correctAnswer": 2,
        "explanation": "Total age = 10 × 3 = 30; Third boy = 30 - 5 - 10 = 15 years",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "3,425 × 1 2",
        "options": ["41 100", "41 000", "14 100", "11 400"],
        "correctAnswer": 0,
        "explanation": "3,425 × 12 = 41,100",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The difference between 6 051 and 2 193 is ...",
        "options": ["3 858.", "3 868.", "3 958.", "3 968."],
        "correctAnswer": 0,
        "explanation": "6,051 - 2,193 = 3,858",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If 45 + y = 52, then y equals ...",
        "options": ["97.", "17.", "13.", "7."],
        "correctAnswer": 3,
        "explanation": "y = 52 - 45 = 7",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Find the total cost of 2 packets of sugar at K8.00 per packet.",
        "options": ["K16.00", "K10.00", "K6.00", "K4.00"],
        "correctAnswer": 0,
        "explanation": "2 × 8 = K16.00",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Write 20% as a decimal.",
        "options": ["0.02", "0.2", "20.0", "200.0"],
        "correctAnswer": 1,
        "explanation": "20% = 20/100 = 0.2",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Martha got 30/40 in a Mathematics test. Express this mark as a percentage.",
        "options": ["75%", "50%", "25%", "20%"],
        "correctAnswer": 0,
        "explanation": "30/40 = 0.75 = 75%",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Multiply 50.45 by 25.",
        "options": ["1 262.18", "1 261.25", "50.70", "50.20"],
        "correctAnswer": 1,
        "explanation": "50.45 × 25 = 1,261.25",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "K2.50 + K204.50 + K45.00 =",
        "options": ["K241.00", "K242.00", "K251.00", "K252.00"],
        "correctAnswer": 3,
        "explanation": "2.50 + 204.50 = 207.00; 207.00 + 45.00 = 252.00",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "A boy drew 15.3 litres of water in the first trip and another 17.8 litres of water in the second trip from a well. How many litres of water altogether did the boy draw?",
        "options": ["22.1 litres", "23.1 litres", "32.1 litres", "33.1 litres"],
        "correctAnswer": 3,
        "explanation": "15.3 + 17.8 = 33.1 litres",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Write nine hundred nineteen in Roman numerals.",
        "options": ["CMXIX", "MCXIX", "MCXXI", "CMXXI"],
        "correctAnswer": 0,
        "explanation": "919 = CMXIX (900 + 19)",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Add 46.345, 133.02 and 1.113.",
        "options": ["170.478", "179.478", "180.478", "200.478"],
        "correctAnswer": 2,
        "explanation": "46.345 + 133.02 = 179.365; 179.365 + 1.113 = 180.478",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "John takes 6 hours to cover a distance of 240km from his home to town. What is his average speed?",
        "options": ["34km/h", "40km/h", "234km/h", "246km/h"],
        "correctAnswer": 1,
        "explanation": "Speed = Distance ÷ Time = 240 ÷ 6 = 40km/h",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "When a is added to 13, the answer is 30. What is the value of a?",
        "options": ["33", "30", "17", "13"],
        "correctAnswer": 2,
        "explanation": "a + 13 = 30, so a = 30 - 13 = 17",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "110.42 metres – 20.28 metres =",
        "options": ["190.14 metres", "130.70 metres", "90.24 metres", "90.14 metres"],
        "correctAnswer": 3,
        "explanation": "110.42 - 20.28 = 90.14 metres",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "31 In the diagram below, the horizontal line is ...",
        "options": ["AB.", "CD.", "GH.", "EF."],
        "correctAnswer": 2,
        "explanation": "GH appears to be the horizontal line",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "32 In the Venn diagram below, the number of elements in set P is ...",
        "options": ["8.", "5.", "4.", "3."],
        "correctAnswer": 2,
        "explanation": "Set P contains 4 elements",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "33 The number line below shows ...",
        "options": ["-4 + (-6) + (+3) = +1.", "+4 + (-6) + (+3) = +1.", "+4 + (-6) + (-3) = +1.", "-4 + (+6) + (-3) = +1."],
        "correctAnswer": 1,
        "explanation": "Starting at +4, moving -6 lands at -2, then +3 lands at +1",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "34 The diagram below shows how children travelled to school on one day.\n\nIf \\( \\mathbf{J} \\) represents two children, how many children used a bus to travel to school?",
        "options": ["12", "8", "6", "4"],
        "correctAnswer": 0,
        "explanation": "Bus has 6 J symbols, each representing 2 children: 6 × 2 = 12",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "35 The union set of set \\( \\mathbf{J} \\) and set \\( \\mathbf{K} \\) is ...",
        "options": ["{1, 3, 7, 8}.", "{1, 2, 3, 4, 5, 6, 7, 8, 9}.", "{1, 2, 3, 4, 5, 6, 7, 8, 10}.", "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}."],
        "correctAnswer": 3,
        "explanation": "Union contains all elements from both sets J and K",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "7 1/2 - 3 1/3 = ...",
        "options": ["4 5/6", "4 1/6", "10 1/6", "10 5/6"],
        "correctAnswer": 0,
        "explanation": "7 1/2 = 15/2 = 45/6; 3 1/3 = 10/3 = 20/6; 45/6 - 20/6 = 25/6 = 4 1/6",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "340 textbooks were shared equally among 10 schools. How many textbooks did each school receive?",
        "options": ["3 400", "350", "330", "34"],
        "correctAnswer": 3,
        "explanation": "340 ÷ 10 = 34",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "6 boxes of wool cost K180.00. How much will 4 boxes of the same type of wool cost?",
        "options": ["K30.00", "K45.00", "K120.00", "K270.00"],
        "correctAnswer": 2,
        "explanation": "Cost per box = 180 ÷ 6 = K30; 4 boxes = 4 × 30 = K120",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Mary took 10 small stones every day and left them at school. How many stones did she take to school in 30 days?",
        "options": ["20", "30", "40", "300"],
        "correctAnswer": 3,
        "explanation": "10 × 30 = 300 stones",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "40 The dotted lines in the shape below are called ...",
        "options": ["horizontal lines.", "parallel lines.", "symmetry lines.", "vertical lines."],
        "correctAnswer": 2,
        "explanation": "Dotted lines dividing the shape equally are lines of symmetry",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "174.69kg ÷ 9 =",
        "options": ["19.67kg", "19.41kg", "18.31kg", "10.67kg"],
        "correctAnswer": 1,
        "explanation": "174.69 ÷ 9 = 19.41kg",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "The ratio of men, women and children in a village of 120 people is 3 to 2 to 1, respectively. How many children are in the village?",
        "options": ["20", "40", "60", "80"],
        "correctAnswer": 0,
        "explanation": "Total parts = 3+2+1=6; Children = 1/6 × 120 = 20",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "A bicycle was bought at K350.00 and later sold at K450.50. What was the profit?",
        "options": ["K100.00", "K100.50", "K800.00", "K800.50"],
        "correctAnswer": 1,
        "explanation": "Profit = 450.50 - 350.00 = K100.50",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "If the average of 4 numbers is 125, find the sum of the numbers.",
        "options": ["500", "490", "129", "121"],
        "correctAnswer": 0,
        "explanation": "Sum = Average × Count = 125 × 4 = 500",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of the symbols below is used for intersection of sets?",
        "options": ["⊂", "∉", "∩", "∪"],
        "correctAnswer": 2,
        "explanation": "∩ represents intersection",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "A group of boys had 23 guavas altogether. They ate \\( y \\) guavas and remained with 18. How many guavas did they eat?",
        "options": ["41", "25", "15", "5"],
        "correctAnswer": 3,
        "explanation": "23 - y = 18, so y = 23 - 18 = 5",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Express the ratio 120kg to 85kg in its simplest form.",
        "options": ["17 to 24", "1 to 35", "24 to 17", "35 to 1"],
        "correctAnswer": 2,
        "explanation": "120:85 = 24:17 (divide both by 5)",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which symbol can be put in the box to make the sentence below true?\n- 120 [ ] 1",
        "options": [">", "<", "≥", "="],
        "correctAnswer": 1,
        "explanation": "-120 is less than 1",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "1,376 ÷ 32 =",
        "options": ["43", "403", "1 344", "1 408"],
        "correctAnswer": 0,
        "explanation": "1,376 ÷ 32 = 43",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "756eight - 127eight = ...",
        "options": ["625eight", "626eight", "627eight", "637eight"],
        "correctAnswer": 2,
        "explanation": "756₈ - 127₈ = 627₈",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "51 The diagram shown below has ...",
        "options": ["6 edges.", "6 faces.", "6 corners.", "6 vertices."],
        "correctAnswer": 3,
        "explanation": "The 3D shape appears to have 6 vertices",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "A man bought a packet of sugar at K11.00, a loaf of bread at K4.50 and a packet of milk at K3.75. How much did he spend altogether?",
        "options": ["K8.35", "K9.25", "K18.25", "K19.25"],
        "correctAnswer": 3,
        "explanation": "11.00 + 4.50 = 15.50; 15.50 + 3.75 = 19.25",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "53 Find the volume of a rectangular prism measuring 6cm long, 4cm wide and 2cm high.",
        "options": ["48cm\\(^3\\)", "36cm\\(^3\\)", "32cm\\(^3\\)", "24cm\\(^3\\)"],
        "correctAnswer": 0,
        "explanation": "Volume = 6 × 4 × 2 = 48cm³",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "4/5 written as a percentage is ...",
        "options": ["10%.", "20%.", "40%.", "80%."],
        "correctAnswer": 3,
        "explanation": "4/5 = 0.8 = 80%",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "A class library has 19 books. Write this number in base 5.",
        "options": ["19five", "24five", "34five", "43five"],
        "correctAnswer": 2,
        "explanation": "19 in base 5: 19 ÷ 5 = 3 remainder 4, so 34₅",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "2/5 + 1/3 = ...",
        "options": ["2/15", "3/8", "1/2", "11/15"],
        "correctAnswer": 3,
        "explanation": "2/5 = 6/15; 1/3 = 5/15; 6/15 + 5/15 = 11/15",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "8 men can do a piece of work in 12 days. How long will it take 12 men to do the same work?",
        "options": ["20", "18", "8", "4"],
        "correctAnswer": 2,
        "explanation": "Total work = 8 × 12 = 96 man-days; Time = 96 ÷ 12 = 8 days",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Find the area of a rectangular piece of land which is 100m long and 49m wide.",
        "options": ["49m²", "149m²", "490m²", "4900m²"],
        "correctAnswer": 3,
        "explanation": "Area = 100 × 49 = 4,900m²",
        "shuffleOptions": true
    },
    /*
    {
        "type": "multiple-choice",
        "text": "59 The angle shown below is called ...",
        "options": ["an acute angle.", "a right angle.", "an obtuse angle.", "a straight angle."],
        "correctAnswer": 1,
        "explanation": "The angle appears to be 90°, a right angle",
        "shuffleOptions": true
    },
    */
    {
        "type": "multiple-choice",
        "text": "Mr Mwamba spent K10.00 out of K50.00. What fraction of the money did he remain with?",
        "options": ["1/5", "4/5", "2/5", "7/10"],
        "correctAnswer": 1,
        "explanation": "Remaining = 50 - 10 = K40; Fraction = 40/50 = 4/5",
        "shuffleOptions": true
    },                    
                    
                    
                            
                    ]
                },
                {
                    id: 'section2',
                    title: 'Topic2',
                    questions: [
                            
                    
                            
                    ]
                },            
            
            
            ]
        },
    
    
    
    
    ]
});