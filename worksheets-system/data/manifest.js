// data/manifest.js - Updated with term support
// This file lists all available worksheet files without loading them
const WorksheetManifest = {
    files: [
    /*
    // ************* Baby *************
        // Science
        'data/baby/baby-science-t1week02.js',
        'data/baby/baby-science-t1week03.js',
        'data/baby/baby-science-t1week04.js',
        'data/baby/baby-science-t1week05.js',
        'data/baby/baby-science-t1week07.js',
        'data/baby/baby-science-t1week08.js',
        'data/baby/baby-science-t1week09.js',
        'data/baby/baby-science-t1week10.js',
        // Mathematics
        'data/baby/baby-math-t1week02.js',
        'data/baby/baby-math-t1week03.js',
        'data/baby/baby-math-t1week04.js',
        'data/baby/baby-math-t1week05.js',
        'data/baby/baby-math-t1week07.js',
        'data/baby/baby-math-t1week08.js',
        'data/baby/baby-math-t1week09.js',
        'data/baby/baby-math-t1week10.js',
        */
        // english
        'data/baby/baby-english-t1week02.js',
        'data/baby/baby-english-t1week03.js',
        'data/baby/baby-english-t1week04.js',
        'data/baby/baby-english-t1week05.js',
        'data/baby/baby-english-t1week07.js',
        'data/baby/baby-english-t1week08.js',
        'data/baby/baby-english-t1week09.js',
        'data/baby/baby-english-t1week10.js',
        // bemba
        'data/baby/baby-bemba-t1week02.js',
        'data/baby/baby-bemba-t1week03.js',
        'data/baby/baby-bemba-t1week04.js',
        'data/baby/baby-bemba-t1week05.js',
        'data/baby/baby-bemba-t1week07.js',
        'data/baby/baby-bemba-t1week08.js',
        'data/baby/baby-bemba-t1week09.js',
        'data/baby/baby-bemba-t1week10.js',
    
    
    // ************* Middle *************
        // creativeTech
        'data/middle/middle-creativeTech-t1week02.js',
        'data/middle/middle-creativeTech-t1week03.js',
        'data/middle/middle-creativeTech-t1week04.js',
        'data/middle/middle-creativeTech-t1week05.js',
        'data/middle/middle-creativeTech-t1week07.js',
        'data/middle/middle-creativeTech-t1week08.js',
        'data/middle/middle-creativeTech-t1week09.js',
        'data/middle/middle-creativeTech-t1week10.js',
    
        'data/middle/middle-creativeTech-t2week02.js',
        'data/middle/middle-creativeTech-t2week03.js',
        'data/middle/middle-creativeTech-t2week04.js',
        'data/middle/middle-creativeTech-t2week05.js',
        'data/middle/middle-creativeTech-t2week07.js',
        'data/middle/middle-creativeTech-t2week08.js',
        'data/middle/middle-creativeTech-t2week09.js',
        'data/middle/middle-creativeTech-t2week10.js',

        'data/middle/middle-creativeTech-t3week02.js',
        'data/middle/middle-creativeTech-t3week03.js',
        'data/middle/middle-creativeTech-t3week04.js',
        'data/middle/middle-creativeTech-t3week05.js',
        'data/middle/middle-creativeTech-t3week07.js',
        'data/middle/middle-creativeTech-t3week08.js',
        'data/middle/middle-creativeTech-t3week09.js',
        'data/middle/middle-creativeTech-t3week10.js',

        // english
        'data/middle/middle-english-t1week02.js',
        'data/middle/middle-english-t1week03.js',
        'data/middle/middle-english-t1week04.js',
        'data/middle/middle-english-t1week05.js',
        'data/middle/middle-english-t1week07.js',
        'data/middle/middle-english-t1week08.js',
        'data/middle/middle-english-t1week09.js',
        'data/middle/middle-english-t1week10.js',
        // bemba
        'data/middle/middle-bemba-t1week02.js',
        'data/middle/middle-bemba-t1week03.js',
        'data/middle/middle-bemba-t1week04.js',
        'data/middle/middle-bemba-t1week05.js',
        'data/middle/middle-bemba-t1week07.js',
        'data/middle/middle-bemba-t1week08.js',
        'data/middle/middle-bemba-t1week09.js',
        'data/middle/middle-bemba-t1week10.js',
        // Mathematics
        'data/middle/middle-mathematicsScience-t1week02.js',
        'data/middle/middle-mathematicsScience-t1week03.js',
        'data/middle/middle-mathematicsScience-t1week04.js',
        'data/middle/middle-mathematicsScience-t1week05.js',
        'data/middle/middle-mathematicsScience-t1week07.js',
        'data/middle/middle-mathematicsScience-t1week08.js',
        'data/middle/middle-mathematicsScience-t1week09.js',
        'data/middle/middle-mathematicsScience-t1week10.js',
    
    
    // ************* Reception *************
        // mathematicsScience
        'data/reception/reception-mathematicsScience-t1week02.js',
        'data/reception/reception-mathematicsScience-t1week03.js',
        'data/reception/reception-mathematicsScience-t1week04.js',
        'data/reception/reception-mathematicsScience-t1week05.js',
        'data/reception/reception-mathematicsScience-t1week07.js',
        'data/reception/reception-mathematicsScience-t1week08.js',
        'data/reception/reception-mathematicsScience-t1week09.js',
        'data/reception/reception-mathematicsScience-t1week10.js',
    
        'data/reception/reception-mathematicsScience-t2week02.js',
        'data/reception/reception-mathematicsScience-t2week03.js',
        'data/reception/reception-mathematicsScience-t2week04.js',
        'data/reception/reception-mathematicsScience-t2week05.js',
        'data/reception/reception-mathematicsScience-t2week07.js',
        'data/reception/reception-mathematicsScience-t2week08.js',
        'data/reception/reception-mathematicsScience-t2week09.js',
        'data/reception/reception-mathematicsScience-t2week10.js',

        'data/reception/reception-mathematicsScience-t3week02.js',
        'data/reception/reception-mathematicsScience-t3week03.js',
        'data/reception/reception-mathematicsScience-t3week04.js',
        'data/reception/reception-mathematicsScience-t3week05.js',
        'data/reception/reception-mathematicsScience-t3week07.js',
        'data/reception/reception-mathematicsScience-t3week08.js',
        'data/reception/reception-mathematicsScience-t3week09.js',
        'data/reception/reception-mathematicsScience-t3week10.js',

        // English
        'data/reception/reception-english-t1week02.js',
        'data/reception/reception-english-t1week03.js',
        'data/reception/reception-english-t1week04.js',
        'data/reception/reception-english-t1week05.js',
        'data/reception/reception-english-t1week07.js',
        'data/reception/reception-english-t1week08.js',
        'data/reception/reception-english-t1week09.js',
        'data/reception/reception-english-t1week10.js',
        // bemba
        'data/reception/reception-bemba-t1week02.js',
        'data/reception/reception-bemba-t1week03.js',
        'data/reception/reception-bemba-t1week04.js',
        'data/reception/reception-bemba-t1week05.js',
        'data/reception/reception-bemba-t1week07.js',
        'data/reception/reception-bemba-t1week08.js',
        'data/reception/reception-bemba-t1week09.js',
        'data/reception/reception-bemba-t1week10.js',
        // creativeTech
        'data/reception/reception-creativeTech-t1week02.js',
        'data/reception/reception-creativeTech-t1week03.js',
        'data/reception/reception-creativeTech-t1week04.js',
        'data/reception/reception-creativeTech-t1week05.js',
        'data/reception/reception-creativeTech-t1week07.js',
        'data/reception/reception-creativeTech-t1week08.js',
        'data/reception/reception-creativeTech-t1week09.js',
        'data/reception/reception-creativeTech-t1week10.js',
    
        'data/reception/reception-creativeTech-t2week02.js',
        'data/reception/reception-creativeTech-t2week03.js',
        'data/reception/reception-creativeTech-t2week04.js',
        'data/reception/reception-creativeTech-t2week05.js',
        'data/reception/reception-creativeTech-t2week07.js',
        'data/reception/reception-creativeTech-t2week08.js',
        'data/reception/reception-creativeTech-t2week09.js',
        'data/reception/reception-creativeTech-t2week10.js',

        'data/reception/reception-creativeTech-t3week02.js',
        'data/reception/reception-creativeTech-t3week03.js',
        'data/reception/reception-creativeTech-t3week04.js',
        'data/reception/reception-creativeTech-t3week05.js',
        'data/reception/reception-creativeTech-t3week07.js',
        'data/reception/reception-creativeTech-t3week08.js',
        'data/reception/reception-creativeTech-t3week09.js',
        'data/reception/reception-creativeTech-t3week10.js',

    
    // ************* Grade 1 *************
        // mathematicsScience
        'data/grade1/g1mathematicsScience-t1week02.js',
        'data/grade1/g1mathematicsScience-t1week03.js',
        'data/grade1/g1mathematicsScience-t1week04.js',
        'data/grade1/g1mathematicsScience-t1week05.js',
        'data/grade1/g1mathematicsScience-t1week07.js',
        'data/grade1/g1mathematicsScience-t1week08.js',
        'data/grade1/g1mathematicsScience-t1week09.js',
        'data/grade1/g1mathematicsScience-t1week10.js',
    
        'data/grade1/g1mathematicsScience-t2week02.js',
        'data/grade1/g1mathematicsScience-t2week03.js',
        'data/grade1/g1mathematicsScience-t2week04.js',
        'data/grade1/g1mathematicsScience-t2week05.js',
        'data/grade1/g1mathematicsScience-t2week07.js',
        'data/grade1/g1mathematicsScience-t2week08.js',
        'data/grade1/g1mathematicsScience-t2week09.js',
        'data/grade1/g1mathematicsScience-t2week10.js',

        'data/grade1/g1mathematicsScience-t3week02.js',
        'data/grade1/g1mathematicsScience-t3week03.js',
        'data/grade1/g1mathematicsScience-t3week04.js',
        'data/grade1/g1mathematicsScience-t3week05.js',
        'data/grade1/g1mathematicsScience-t3week07.js',
        'data/grade1/g1mathematicsScience-t3week08.js',
        'data/grade1/g1mathematicsScience-t3week09.js',
        'data/grade1/g1mathematicsScience-t3week10.js',

        // Bemba
        'data/grade1/g1bemba-t1week02.js',
        'data/grade1/g1bemba-t1week03.js',
        'data/grade1/g1bemba-t1week04.js',
        'data/grade1/g1bemba-t1week05.js',
        'data/grade1/g1bemba-t1week07.js',
        'data/grade1/g1bemba-t1week08.js',
        'data/grade1/g1bemba-t1week09.js',
        'data/grade1/g1bemba-t1week10.js',
    
        'data/grade1/g1bemba-t2week02.js',
        'data/grade1/g1bemba-t2week03.js',
        'data/grade1/g1bemba-t2week04.js',
        'data/grade1/g1bemba-t2week05.js',
        'data/grade1/g1bemba-t2week07.js',
        'data/grade1/g1bemba-t2week08.js',
        'data/grade1/g1bemba-t2week09.js',
        'data/grade1/g1bemba-t2week10.js',

        'data/grade1/g1bemba-t3week02.js',
        'data/grade1/g1bemba-t3week03.js',
        'data/grade1/g1bemba-t3week04.js',
        'data/grade1/g1bemba-t3week05.js',
        'data/grade1/g1bemba-t3week07.js',
        'data/grade1/g1bemba-t3week08.js',
        'data/grade1/g1bemba-t3week09.js',
        'data/grade1/g1bemba-t3week10.js',

         // English
        'data/grade1/g1english-t1week02.js',
        'data/grade1/g1english-t1week03.js',
        'data/grade1/g1english-t1week04.js',
        'data/grade1/g1english-t1week05.js',
        'data/grade1/g1english-t1week07.js',
        'data/grade1/g1english-t1week08.js',
        'data/grade1/g1english-t1week09.js',
        'data/grade1/g1english-t1week10.js',
    
        'data/grade1/g1english-t2week02.js',
        'data/grade1/g1english-t2week03.js',
        'data/grade1/g1english-t2week04.js',
        'data/grade1/g1english-t2week05.js',
        'data/grade1/g1english-t2week07.js',
        'data/grade1/g1english-t2week08.js',
        'data/grade1/g1english-t2week09.js',
        'data/grade1/g1english-t2week10.js',

        'data/grade1/g1english-t3week02.js',
        'data/grade1/g1english-t3week03.js',
        'data/grade1/g1english-t3week04.js',
        'data/grade1/g1english-t3week05.js',
        'data/grade1/g1english-t3week07.js',
        'data/grade1/g1english-t3week08.js',
        'data/grade1/g1english-t3week09.js',
        'data/grade1/g1english-t3week10.js',
    
        //CTS
        'data/grade1/g1creativeTech-t1week02.js',
        'data/grade1/g1creativeTech-t1week03.js',
        'data/grade1/g1creativeTech-t1week04.js',
        'data/grade1/g1creativeTech-t1week05.js',
        'data/grade1/g1creativeTech-t1week07.js',
        'data/grade1/g1creativeTech-t1week08.js',
        'data/grade1/g1creativeTech-t1week09.js',
        'data/grade1/g1creativeTech-t1week10.js',
        // Literacy
        'data/grade1/g1literacy-t1week02.js',
        'data/grade1/g1literacy-t1week03.js',
        'data/grade1/g1literacy-t1week04.js',
        'data/grade1/g1literacy-t1week05.js',
        'data/grade1/g1literacy-t1week07.js',
        'data/grade1/g1literacy-t1week08.js',
        'data/grade1/g1literacy-t1week09.js',
        'data/grade1/g1literacy-t1week10.js',
    
    
    // ************* Grade 2 *************
        // mathematicsScience
        'data/grade2/g2mathematicsScience-t1week02.js',
        'data/grade2/g2mathematicsScience-t1week03.js',
        'data/grade2/g2mathematicsScience-t1week04.js',
        'data/grade2/g2mathematicsScience-t1week05.js',
        'data/grade2/g2mathematicsScience-t1week07.js',
        'data/grade2/g2mathematicsScience-t1week08.js',
        'data/grade2/g2mathematicsScience-t1week09.js',
        'data/grade2/g2mathematicsScience-t1week10.js',
    
        //CTS
        'data/grade2/g2creativeTech-t1week02.js',
        'data/grade2/g2creativeTech-t1week03.js',
        'data/grade2/g2creativeTech-t1week04.js',
        'data/grade2/g2creativeTech-t1week05.js',
        'data/grade2/g2creativeTech-t1week07.js',
        'data/grade2/g2creativeTech-t1week08.js',
        'data/grade2/g2creativeTech-t1week09.js',
        'data/grade2/g2creativeTech-t1week10.js',
    
        'data/grade2/g2creativeTech-t2week02.js',
        'data/grade2/g2creativeTech-t2week03.js',
        'data/grade2/g2creativeTech-t2week04.js',
        'data/grade2/g2creativeTech-t2week05.js',
        'data/grade2/g2creativeTech-t2week07.js',
        'data/grade2/g2creativeTech-t2week08.js',
        'data/grade2/g2creativeTech-t2week09.js',
        'data/grade2/g2creativeTech-t2week10.js',

        'data/grade2/g2creativeTech-t3week02.js',
        'data/grade2/g2creativeTech-t3week03.js',
        'data/grade2/g2creativeTech-t3week04.js',
        'data/grade2/g2creativeTech-t3week05.js',
        'data/grade2/g2creativeTech-t3week07.js',
        'data/grade2/g2creativeTech-t3week08.js',
        'data/grade2/g2creativeTech-t3week09.js',
        'data/grade2/g2creativeTech-t3week10.js',

        // Bemba
        'data/grade2/g2bemba-t1week02.js',
        'data/grade2/g2bemba-t1week03.js',
        'data/grade2/g2bemba-t1week04.js',
        'data/grade2/g2bemba-t1week05.js',
        'data/grade2/g2bemba-t1week07.js',
        'data/grade2/g2bemba-t1week08.js',
        'data/grade2/g2bemba-t1week09.js',
        'data/grade2/g2bemba-t1week10.js',
    
        'data/grade2/g2bemba-t2week02.js',
        'data/grade2/g2bemba-t2week03.js',
        'data/grade2/g2bemba-t2week04.js',
        'data/grade2/g2bemba-t2week05.js',
        'data/grade2/g2bemba-t2week07.js',
        'data/grade2/g2bemba-t2week08.js',
        'data/grade2/g2bemba-t2week09.js',
        'data/grade2/g2bemba-t2week10.js',

        'data/grade2/g2bemba-t3week02.js',
        'data/grade2/g2bemba-t3week03.js',
        'data/grade2/g2bemba-t3week04.js',
        'data/grade2/g2bemba-t3week05.js',
        'data/grade2/g2bemba-t3week07.js',
        'data/grade2/g2bemba-t3week08.js',
        'data/grade2/g2bemba-t3week09.js',
        'data/grade2/g2bemba-t3week10.js',

        // Literacy
        'data/grade2/g2literacy-t1week02.js',
        'data/grade2/g2literacy-t1week03.js',
        'data/grade2/g2literacy-t1week04.js',
        'data/grade2/g2literacy-t1week05.js',
        'data/grade2/g2literacy-t1week07.js',
        'data/grade2/g2literacy-t1week08.js',
        'data/grade2/g2literacy-t1week09.js',
        'data/grade2/g2literacy-t1week10.js',
         // English
        'data/grade2/g2english-t1week02.js',
        'data/grade2/g2english-t1week03.js',
        'data/grade2/g2english-t1week04.js',
        'data/grade2/g2english-t1week05.js',
        'data/grade2/g2english-t1week07.js',
        'data/grade2/g2english-t1week08.js',
        'data/grade2/g2english-t1week09.js',
        'data/grade2/g2english-t1week10.js',
    
        'data/grade2/g2english-t2week02.js',
        'data/grade2/g2english-t2week03.js',
        'data/grade2/g2english-t2week04.js',
        'data/grade2/g2english-t2week05.js',
        'data/grade2/g2english-t2week07.js',
        'data/grade2/g2english-t2week08.js',
        'data/grade2/g2english-t2week09.js',
        'data/grade2/g2english-t2week10.js',

        'data/grade2/g2english-t3week02.js',
        'data/grade2/g2english-t3week03.js',
        'data/grade2/g2english-t3week04.js',
        'data/grade2/g2english-t3week05.js',
        'data/grade2/g2english-t3week07.js',
        'data/grade2/g2english-t3week08.js',
        'data/grade2/g2english-t3week09.js',
        'data/grade2/g2english-t3week10.js',

    
    // ************* Grade 3 *************
    //MathematicsScience
        'data/grade3/g3mathematicsScience-t1week02.js',
        'data/grade3/g3mathematicsScience-t1week03.js',
        'data/grade3/g3mathematicsScience-t1week04.js',
        'data/grade3/g3mathematicsScience-t1week05.js',
        'data/grade3/g3mathematicsScience-t1week07.js',
        'data/grade3/g3mathematicsScience-t1week08.js',
        'data/grade3/g3mathematicsScience-t1week09.js',
        'data/grade3/g3mathematicsScience-t1week10.js',
    
    
        //CTS
        'data/grade3/g3creativeTech-t1week02.js',
        'data/grade3/g3creativeTech-t1week03.js',
        'data/grade3/g3creativeTech-t1week04.js',
        'data/grade3/g3creativeTech-t1week05.js',
        'data/grade3/g3creativeTech-t1week07.js',
        'data/grade3/g3creativeTech-t1week08.js',
        'data/grade3/g3creativeTech-t1week09.js',
        'data/grade3/g3creativeTech-t1week10.js',
    
        'data/grade3/g3creativeTech-t2week02.js',
        'data/grade3/g3creativeTech-t2week03.js',
        'data/grade3/g3creativeTech-t2week04.js',
        'data/grade3/g3creativeTech-t2week05.js',
        'data/grade3/g3creativeTech-t2week07.js',
        'data/grade3/g3creativeTech-t2week08.js',
        'data/grade3/g3creativeTech-t2week09.js',
        'data/grade3/g3creativeTech-t2week10.js',

        'data/grade3/g3creativeTech-t3week02.js',
        'data/grade3/g3creativeTech-t3week03.js',
        'data/grade3/g3creativeTech-t3week04.js',
        'data/grade3/g3creativeTech-t3week05.js',
        'data/grade3/g3creativeTech-t3week07.js',
        'data/grade3/g3creativeTech-t3week08.js',
        'data/grade3/g3creativeTech-t3week09.js',
        'data/grade3/g3creativeTech-t3week10.js',

        // Bemba    
        'data/grade3/g3bemba-t1week02.js',
        'data/grade3/g3bemba-t1week03.js',
        'data/grade3/g3bemba-t1week04.js',
        'data/grade3/g3bemba-t1week05.js',
        'data/grade3/g3bemba-t1week07.js',
        'data/grade3/g3bemba-t1week08.js',
        'data/grade3/g3bemba-t1week09.js',
        'data/grade3/g3bemba-t1week10.js',
    
        'data/grade3/g3bemba-t2week02.js',
        'data/grade3/g3bemba-t2week03.js',
        'data/grade3/g3bemba-t2week04.js',
        'data/grade3/g3bemba-t2week05.js',
        'data/grade3/g3bemba-t2week07.js',
        'data/grade3/g3bemba-t2week08.js',
        'data/grade3/g3bemba-t2week09.js',
        'data/grade3/g3bemba-t2week10.js',

        'data/grade3/g3bemba-t3week02.js',
        'data/grade3/g3bemba-t3week03.js',
        'data/grade3/g3bemba-t3week04.js',
        'data/grade3/g3bemba-t3week05.js',
        'data/grade3/g3bemba-t3week07.js',
        'data/grade3/g3bemba-t3week08.js',
        'data/grade3/g3bemba-t3week09.js',
        'data/grade3/g3bemba-t3week10.js',

         // Literacy
        'data/grade3/g3literacy-t1week02.js',
        'data/grade3/g3literacy-t1week03.js',
        'data/grade3/g3literacy-t1week04.js',
        'data/grade3/g3literacy-t1week05.js',
        'data/grade3/g3literacy-t1week07.js',
        'data/grade3/g3literacy-t1week08.js',
        'data/grade3/g3literacy-t1week09.js',
        'data/grade3/g3literacy-t1week10.js',
    
    
         // English
        'data/grade3/g3english-t1week02.js',
        'data/grade3/g3english-t1week03.js',
        'data/grade3/g3english-t1week04.js',
        'data/grade3/g3english-t1week05.js',
        'data/grade3/g3english-t1week07.js',
        'data/grade3/g3english-t1week08.js',
        'data/grade3/g3english-t1week09.js',
        'data/grade3/g3english-t1week10.js',
    
        'data/grade3/g3english-t2week02.js',
        'data/grade3/g3english-t2week03.js',
        'data/grade3/g3english-t2week04.js',
        'data/grade3/g3english-t2week05.js',
        'data/grade3/g3english-t2week07.js',
        'data/grade3/g3english-t2week08.js',
        'data/grade3/g3english-t2week09.js',
        'data/grade3/g3english-t2week10.js',

        'data/grade3/g3english-t3week02.js',
        'data/grade3/g3english-t3week03.js',
        'data/grade3/g3english-t3week04.js',
        'data/grade3/g3english-t3week05.js',
        'data/grade3/g3english-t3week07.js',
        'data/grade3/g3english-t3week08.js',
        'data/grade3/g3english-t3week09.js',
        'data/grade3/g3english-t3week10.js',

    
    // ************* Grade 4 *************
        // Mathematics
        'data/grade4/g4math-t1week02.js',
        'data/grade4/g4math-t1week03.js',
        'data/grade4/g4math-t1week04.js',
        'data/grade4/g4math-t1week05.js',
        'data/grade4/g4math-t1week07.js',
        'data/grade4/g4math-t1week08.js',
        'data/grade4/g4math-t1week09.js',
        'data/grade4/g4math-t1week10.js',
    
        'data/grade4/g4math-t2week02.js',
        'data/grade4/g4math-t2week03.js',
        'data/grade4/g4math-t2week04.js',
        'data/grade4/g4math-t2week05.js',
        'data/grade4/g4math-t2week07.js',
        'data/grade4/g4math-t2week08.js',
        'data/grade4/g4math-t2week09.js',
        'data/grade4/g4math-t2week10.js',
    
        'data/grade4/g4math-t3week02.js',
        'data/grade4/g4math-t3week03.js',
        'data/grade4/g4math-t3week04.js',
        'data/grade4/g4math-t3week05.js',
        'data/grade4/g4math-t3week07.js',
        'data/grade4/g4math-t3week08.js',
        'data/grade4/g4math-t3week09.js',
        'data/grade4/g4math-t3week10.js',

         // Science
        'data/grade4/g4science-t1week02.js',
        'data/grade4/g4science-t1week03.js',
        'data/grade4/g4science-t1week04.js',
        'data/grade4/g4science-t1week05.js',
        'data/grade4/g4science-t1week07.js',
        'data/grade4/g4science-t1week08.js',
        'data/grade4/g4science-t1week09.js',
        'data/grade4/g4science-t1week10.js',
    
        'data/grade4/g4science-t2week02.js',
        'data/grade4/g4science-t2week03.js',
        'data/grade4/g4science-t2week04.js',
        'data/grade4/g4science-t2week05.js',
        'data/grade4/g4science-t2week07.js',
        'data/grade4/g4science-t2week08.js',
        'data/grade4/g4science-t2week09.js',
        'data/grade4/g4science-t2week10.js',
    
        'data/grade4/g4science-t3week02.js',
        'data/grade4/g4science-t3week03.js',
        'data/grade4/g4science-t3week04.js',
        'data/grade4/g4science-t3week05.js',
        'data/grade4/g4science-t3week07.js',
        'data/grade4/g4science-t3week08.js',
        'data/grade4/g4science-t3week09.js',
        'data/grade4/g4science-t3week10.js',
    
         // Social Studies
        'data/grade4/g4socialstudies-t1week02.js',
        'data/grade4/g4socialstudies-t1week03.js',
        'data/grade4/g4socialstudies-t1week04.js',
        'data/grade4/g4socialstudies-t1week05.js',
        'data/grade4/g4socialstudies-t1week07.js',
        'data/grade4/g4socialstudies-t1week08.js',
        'data/grade4/g4socialstudies-t1week09.js',
        'data/grade4/g4socialstudies-t1week10.js',
         // Literacy
        'data/grade4/g4literacy-t1week02.js',
        'data/grade4/g4literacy-t1week03.js',
        'data/grade4/g4literacy-t1week04.js',
        'data/grade4/g4literacy-t1week05.js',
        'data/grade4/g4literacy-t1week07.js',
        'data/grade4/g4literacy-t1week08.js',
        'data/grade4/g4literacy-t1week09.js',
        'data/grade4/g4literacy-t1week10.js',
    
        'data/grade4/g4literacy-t2week02.js',
        'data/grade4/g4literacy-t2week03.js',
        'data/grade4/g4literacy-t2week04.js',
        'data/grade4/g4literacy-t2week05.js',
        'data/grade4/g4literacy-t2week07.js',
        'data/grade4/g4literacy-t2week08.js',
        'data/grade4/g4literacy-t2week09.js',
        'data/grade4/g4literacy-t2week10.js',

        'data/grade4/g4literacy-t3week02.js',
        'data/grade4/g4literacy-t3week03.js',
        'data/grade4/g4literacy-t3week04.js',
        'data/grade4/g4literacy-t3week05.js',
        'data/grade4/g4literacy-t3week07.js',
        'data/grade4/g4literacy-t3week08.js',
        'data/grade4/g4literacy-t3week09.js',
        'data/grade4/g4literacy-t3week10.js',

        // English
        'data/grade4/g4english-t1week02.js',
        'data/grade4/g4english-t1week03.js',
        'data/grade4/g4english-t1week04.js',
        'data/grade4/g4english-t1week05.js',
        'data/grade4/g4english-t1week07.js',
        'data/grade4/g4english-t1week08.js',
        'data/grade4/g4english-t1week09.js',
        'data/grade4/g4english-t1week10.js',
    
        'data/grade4/g4english-t2week02.js',
        'data/grade4/g4english-t2week03.js',
        'data/grade4/g4english-t2week04.js',
        'data/grade4/g4english-t2week05.js',
        'data/grade4/g4english-t2week07.js',
        'data/grade4/g4english-t2week08.js',
        'data/grade4/g4english-t2week09.js',
        'data/grade4/g4english-t2week10.js',

        'data/grade4/g4english-t3week02.js',
        'data/grade4/g4english-t3week03.js',
        'data/grade4/g4english-t3week04.js',
        'data/grade4/g4english-t3week05.js',
        'data/grade4/g4english-t3week07.js',
        'data/grade4/g4english-t3week08.js',
        'data/grade4/g4english-t3week09.js',
        'data/grade4/g4english-t3week10.js',

         // Home Economics
        'data/grade4/g4homeEconomics-t1week02.js',
        'data/grade4/g4homeEconomics-t1week03.js',
        'data/grade4/g4homeEconomics-t1week04.js',
        'data/grade4/g4homeEconomics-t1week05.js',
        'data/grade4/g4homeEconomics-t1week07.js',
        'data/grade4/g4homeEconomics-t1week08.js',
        'data/grade4/g4homeEconomics-t1week09.js',
        'data/grade4/g4homeEconomics-t1week10.js',
    
         // Technology Studies
        'data/grade4/g4technologyStudies-t1week02.js',
        'data/grade4/g4technologyStudies-t1week03.js',
        'data/grade4/g4technologyStudies-t1week04.js',
        'data/grade4/g4technologyStudies-t1week05.js',
        'data/grade4/g4technologyStudies-t1week07.js',
        'data/grade4/g4technologyStudies-t1week08.js',
        'data/grade4/g4technologyStudies-t1week09.js',
        'data/grade4/g4technologyStudies-t1week10.js',
    
        'data/grade4/g4technologyStudies-t2week02.js',
        'data/grade4/g4technologyStudies-t2week03.js',
        'data/grade4/g4technologyStudies-t2week04.js',
        'data/grade4/g4technologyStudies-t2week05.js',
        'data/grade4/g4technologyStudies-t2week07.js',
        'data/grade4/g4technologyStudies-t2week08.js',
        'data/grade4/g4technologyStudies-t2week09.js',
        'data/grade4/g4technologyStudies-t2week10.js',
    
        'data/grade4/g4technologyStudies-t3week02.js',
        'data/grade4/g4technologyStudies-t3week03.js',
        'data/grade4/g4technologyStudies-t3week04.js',
        'data/grade4/g4technologyStudies-t3week05.js',
        'data/grade4/g4technologyStudies-t3week07.js',
        'data/grade4/g4technologyStudies-t3week08.js',
        'data/grade4/g4technologyStudies-t3week09.js',
        'data/grade4/g4technologyStudies-t3week10.js',
    
    // ************* Grade 5 *************
        // Mathematics
        'data/grade5/g5math-t1week02.js',
        'data/grade5/g5math-t1week03.js',
        'data/grade5/g5math-t1week04.js',
        'data/grade5/g5math-t1week05.js',
        'data/grade5/g5math-t1week07.js',
        'data/grade5/g5math-t1week08.js',
        'data/grade5/g5math-t1week09.js',
        'data/grade5/g5math-t1week10.js',
    
        'data/grade5/g5math-t2week02.js',
        'data/grade5/g5math-t2week03.js',
        'data/grade5/g5math-t2week04.js',
        'data/grade5/g5math-t2week05.js',
        'data/grade5/g5math-t2week07.js',
        'data/grade5/g5math-t2week08.js',
        'data/grade5/g5math-t2week09.js',
        'data/grade5/g5math-t2week10.js',
    
        'data/grade5/g5math-t3week02.js',
        'data/grade5/g5math-t3week03.js',
        'data/grade5/g5math-t3week04.js',
        'data/grade5/g5math-t3week05.js',
        'data/grade5/g5math-t3week07.js',
        'data/grade5/g5math-t3week08.js',
        'data/grade5/g5math-t3week09.js',
        'data/grade5/g5math-t3week10.js',
    
         // Science
        'data/grade5/g5science-t1week02.js',
        'data/grade5/g5science-t1week03.js',
        'data/grade5/g5science-t1week04.js',
        'data/grade5/g5science-t1week05.js',
        'data/grade5/g5science-t1week07.js',
        'data/grade5/g5science-t1week08.js',
        'data/grade5/g5science-t1week09.js',
        'data/grade5/g5science-t1week10.js',
    
        'data/grade5/g5science-t2week02.js',
        'data/grade5/g5science-t2week03.js',
        'data/grade5/g5science-t2week04.js',
        'data/grade5/g5science-t2week05.js',
        'data/grade5/g5science-t2week07.js',
        'data/grade5/g5science-t2week08.js',
        'data/grade5/g5science-t2week09.js',
        'data/grade5/g5science-t2week10.js',
    
         // Social Studies
        'data/grade5/g5socialstudies-t1week02.js',
        'data/grade5/g5socialstudies-t1week03.js',
        'data/grade5/g5socialstudies-t1week04.js',
        'data/grade5/g5socialstudies-t1week05.js',
        'data/grade5/g5socialstudies-t1week07.js',
        'data/grade5/g5socialstudies-t1week08.js',
        'data/grade5/g5socialstudies-t1week09.js',
        'data/grade5/g5socialstudies-t1week10.js',
    
         // English
        'data/grade5/g5english-t1week02.js',
        'data/grade5/g5english-t1week03.js',
        'data/grade5/g5english-t1week04.js',
        'data/grade5/g5english-t1week05.js',
        'data/grade5/g5english-t1week07.js',
        'data/grade5/g5english-t1week08.js',
        'data/grade5/g5english-t1week09.js',
        'data/grade5/g5english-t1week10.js',
    
        'data/grade5/g5english-t2week02.js',
        'data/grade5/g5english-t2week03.js',
        'data/grade5/g5english-t2week04.js',
        'data/grade5/g5english-t2week05.js',
        'data/grade5/g5english-t2week07.js',
        'data/grade5/g5english-t2week08.js',
        'data/grade5/g5english-t2week09.js',
        'data/grade5/g5english-t2week10.js',

        'data/grade5/g5english-t3week02.js',
        'data/grade5/g5english-t3week03.js',
        'data/grade5/g5english-t3week04.js',
        'data/grade5/g5english-t3week05.js',
        'data/grade5/g5english-t3week07.js',
        'data/grade5/g5english-t3week08.js',
        'data/grade5/g5english-t3week09.js',
        'data/grade5/g5english-t3week10.js',

        // Technology Studies
        'data/grade5/g5technologyStudies-t1week02.js',
        'data/grade5/g5technologyStudies-t1week03.js',
        'data/grade5/g5technologyStudies-t1week04.js',
        'data/grade5/g5technologyStudies-t1week05.js',
        'data/grade5/g5technologyStudies-t1week07.js',
        'data/grade5/g5technologyStudies-t1week08.js',
        'data/grade5/g5technologyStudies-t1week09.js',
        'data/grade5/g5technologyStudies-t1week10.js',
    
        'data/grade5/g5technologyStudies-t2week02.js',
        'data/grade5/g5technologyStudies-t2week03.js',
        'data/grade5/g5technologyStudies-t2week04.js',
        'data/grade5/g5technologyStudies-t2week05.js',
        'data/grade5/g5technologyStudies-t2week07.js',
        'data/grade5/g5technologyStudies-t2week08.js',
        'data/grade5/g5technologyStudies-t2week09.js',
        'data/grade5/g5technologyStudies-t2week10.js',

        'data/grade5/g5technologyStudies-t3week02.js',
        'data/grade5/g5technologyStudies-t3week03.js',
        'data/grade5/g5technologyStudies-t3week04.js',
        'data/grade5/g5technologyStudies-t3week05.js',
        'data/grade5/g5technologyStudies-t3week07.js',
        'data/grade5/g5technologyStudies-t3week08.js',
        'data/grade5/g5technologyStudies-t3week09.js',
        'data/grade5/g5technologyStudies-t3week10.js',

        // Home Economics
        'data/grade5/g5homeEconomics-t1week02.js',
        'data/grade5/g5homeEconomics-t1week03.js',
        'data/grade5/g5homeEconomics-t1week04.js',
        'data/grade5/g5homeEconomics-t1week05.js',
        'data/grade5/g5homeEconomics-t1week07.js',
        'data/grade5/g5homeEconomics-t1week08.js',
        'data/grade5/g5homeEconomics-t1week09.js',
        'data/grade5/g5homeEconomics-t1week10.js',
                                           
        'data/grade5/g5homeEconomics-t2week02.js',
        'data/grade5/g5homeEconomics-t2week03.js',
        'data/grade5/g5homeEconomics-t2week04.js',
        'data/grade5/g5homeEconomics-t2week05.js',
        'data/grade5/g5homeEconomics-t2week07.js',
        'data/grade5/g5homeEconomics-t2week08.js',
        'data/grade5/g5homeEconomics-t2week09.js',
        'data/grade5/g5homeEconomics-t2week10.js',

        'data/grade5/g5homeEconomics-t3week02.js',
        'data/grade5/g5homeEconomics-t3week03.js',
        'data/grade5/g5homeEconomics-t3week04.js',
        'data/grade5/g5homeEconomics-t3week05.js',
        'data/grade5/g5homeEconomics-t3week07.js',
        'data/grade5/g5homeEconomics-t3week08.js',
        'data/grade5/g5homeEconomics-t3week09.js',
        'data/grade5/g5homeEconomics-t3week10.js',

        // Bemba
        'data/grade5/g5bemba-t1week02.js',
        'data/grade5/g5bemba-t1week03.js',
        'data/grade5/g5bemba-t1week04.js',
        'data/grade5/g5bemba-t1week05.js',
        'data/grade5/g5bemba-t1week07.js',
        'data/grade5/g5bemba-t1week08.js',
        'data/grade5/g5bemba-t1week09.js',
        'data/grade5/g5bemba-t1week10.js',
    
        'data/grade5/g5bemba-t2week02.js',
        'data/grade5/g5bemba-t2week03.js',
        'data/grade5/g5bemba-t2week04.js',
        'data/grade5/g5bemba-t2week05.js',
        'data/grade5/g5bemba-t2week07.js',
        'data/grade5/g5bemba-t2week08.js',
        'data/grade5/g5bemba-t2week09.js',
        'data/grade5/g5bemba-t2week10.js',

        'data/grade5/g5bemba-t3week02.js',
        'data/grade5/g5bemba-t3week03.js',
        'data/grade5/g5bemba-t3week04.js',
        'data/grade5/g5bemba-t3week05.js',
        'data/grade5/g5bemba-t3week07.js',
        'data/grade5/g5bemba-t3week08.js',
        'data/grade5/g5bemba-t3week09.js',
        'data/grade5/g5bemba-t3week10.js',

    // ************* Grade 6 *************
        // Mathematics
        'data/grade6/g6math-t1week02.js',
        'data/grade6/g6math-t1week03.js',
        'data/grade6/g6math-t1week04.js',
        'data/grade6/g6math-t1week05.js',
        'data/grade6/g6math-t1week07.js',
        'data/grade6/g6math-t1week08.js',
        'data/grade6/g6math-t1week09.js',
        'data/grade6/g6math-t1week10.js',
    
        'data/grade6/g6math-t2week02.js',
        'data/grade6/g6math-t2week03.js',
        'data/grade6/g6math-t2week04.js',
        'data/grade6/g6math-t2week05.js',
        'data/grade6/g6math-t2week07.js',
        'data/grade6/g6math-t2week08.js',
        'data/grade6/g6math-t2week09.js',
        'data/grade6/g6math-t2week10.js',

        'data/grade6/g6math-t3week02.js',
        'data/grade6/g6math-t3week03.js',
        'data/grade6/g6math-t3week04.js',
        'data/grade6/g6math-t3week05.js',
        'data/grade6/g6math-t3week07.js',
        'data/grade6/g6math-t3week08.js',
        'data/grade6/g6math-t3week09.js',
        'data/grade6/g6math-t3week10.js',

         // Science
        'data/grade6/g6science-t1week02.js',
        'data/grade6/g6science-t1week03.js',
        'data/grade6/g6science-t1week04.js',
        'data/grade6/g6science-t1week05.js',
        'data/grade6/g6science-t1week07.js',
        'data/grade6/g6science-t1week08.js',
        'data/grade6/g6science-t1week09.js',
        'data/grade6/g6science-t1week10.js',
    
        'data/grade6/g6science-t2week02.js',
        'data/grade6/g6science-t2week03.js',
        'data/grade6/g6science-t2week04.js',
        'data/grade6/g6science-t2week05.js',
        'data/grade6/g6science-t2week07.js',
        'data/grade6/g6science-t2week08.js',
        'data/grade6/g6science-t2week09.js',
        'data/grade6/g6science-t2week10.js',
    
        'data/grade6/g6science-t3week02.js',
        'data/grade6/g6science-t3week03.js',
        'data/grade6/g6science-t3week04.js',
        'data/grade6/g6science-t3week05.js',
        'data/grade6/g6science-t3week07.js',
        'data/grade6/g6science-t3week08.js',

         // Social Studies
        'data/grade6/g6socialstudies-t1week02.js',
        'data/grade6/g6socialstudies-t1week03.js',
        'data/grade6/g6socialstudies-t1week04.js',
        'data/grade6/g6socialstudies-t1week05.js',
        'data/grade6/g6socialstudies-t1week07.js',
        'data/grade6/g6socialstudies-t1week08.js',
        'data/grade6/g6socialstudies-t1week09.js',
        'data/grade6/g6socialstudies-t1week10.js',
    
        'data/grade6/g6socialstudies-t2week02.js',
        'data/grade6/g6socialstudies-t2week03.js',
        'data/grade6/g6socialstudies-t2week04.js',
        'data/grade6/g6socialstudies-t2week05.js',
        'data/grade6/g6socialstudies-t2week07.js',
        'data/grade6/g6socialstudies-t2week08.js',
        'data/grade6/g6socialstudies-t2week09.js',
        'data/grade6/g6socialstudies-t2week10.js',

        'data/grade6/g6socialstudies-t3week02.js',
        'data/grade6/g6socialstudies-t3week03.js',
        'data/grade6/g6socialstudies-t3week04.js',
        'data/grade6/g6socialstudies-t3week05.js',
        'data/grade6/g6socialstudies-t3week07.js',
        'data/grade6/g6socialstudies-t3week08.js',
        'data/grade6/g6socialstudies-t3week09.js',
        'data/grade6/g6socialstudies-t3week10.js',

         // English
        'data/grade6/g6english-t1week02.js',
        'data/grade6/g6english-t1week03.js',
        'data/grade6/g6english-t1week04.js',
        'data/grade6/g6english-t1week05.js',
        'data/grade6/g6english-t1week07.js',
        'data/grade6/g6english-t1week08.js',
        'data/grade6/g6english-t1week09.js',
        'data/grade6/g6english-t1week10.js',
    
        'data/grade6/g6english-t2week02.js',
        'data/grade6/g6english-t2week03.js',
        'data/grade6/g6english-t2week04.js',
        'data/grade6/g6english-t2week05.js',
        'data/grade6/g6english-t2week07.js',
        'data/grade6/g6english-t2week08.js',
        'data/grade6/g6english-t2week09.js',
        'data/grade6/g6english-t2week10.js',

        'data/grade6/g6english-t3week02.js',
        'data/grade6/g6english-t3week03.js',
        'data/grade6/g6english-t3week04.js',
        'data/grade6/g6english-t3week05.js',
        'data/grade6/g6english-t3week07.js',
        'data/grade6/g6english-t3week08.js',
        'data/grade6/g6english-t3week09.js',
        'data/grade6/g6english-t3week10.js',

         // Expressive Arts
        'data/grade6/g6expressiveArts-t1week02.js',
        'data/grade6/g6expressiveArts-t1week03.js',
        'data/grade6/g6expressiveArts-t1week04.js',
        'data/grade6/g6expressiveArts-t1week05.js',
        'data/grade6/g6expressiveArts-t1week07.js',
        'data/grade6/g6expressiveArts-t1week08.js',
        'data/grade6/g6expressiveArts-t1week09.js',
        'data/grade6/g6expressiveArts-t1week10.js',
    
        'data/grade6/g6expressiveArts-t2week02.js',
        'data/grade6/g6expressiveArts-t2week03.js',
        'data/grade6/g6expressiveArts-t2week04.js',
        'data/grade6/g6expressiveArts-t2week05.js',
        'data/grade6/g6expressiveArts-t2week07.js',
        'data/grade6/g6expressiveArts-t2week08.js',
        'data/grade6/g6expressiveArts-t2week09.js',
        'data/grade6/g6expressiveArts-t2week10.js',

        'data/grade6/g6expressiveArts-t3week02.js',
        'data/grade6/g6expressiveArts-t3week03.js',
        'data/grade6/g6expressiveArts-t3week04.js',
        'data/grade6/g6expressiveArts-t3week05.js',
        'data/grade6/g6expressiveArts-t3week07.js',
        'data/grade6/g6expressiveArts-t3week08.js',
        'data/grade6/g6expressiveArts-t3week09.js',
        'data/grade6/g6expressiveArts-t3week10.js',

         // Technology Studies
        'data/grade6/g6technologyStudies-t1week02.js',
        'data/grade6/g6technologyStudies-t1week03.js',
        'data/grade6/g6technologyStudies-t1week04.js',
        'data/grade6/g6technologyStudies-t1week05.js',
        'data/grade6/g6technologyStudies-t1week07.js',
        'data/grade6/g6technologyStudies-t1week08.js',
        'data/grade6/g6technologyStudies-t1week09.js',
        'data/grade6/g6technologyStudies-t1week10.js',
    
        'data/grade6/g6technologyStudies-t2week02.js',
        'data/grade6/g6technologyStudies-t2week03.js',
        'data/grade6/g6technologyStudies-t2week04.js',
        'data/grade6/g6technologyStudies-t2week05.js',
        'data/grade6/g6technologyStudies-t2week07.js',
        'data/grade6/g6technologyStudies-t2week08.js',
        'data/grade6/g6technologyStudies-t2week09.js',
        'data/grade6/g6technologyStudies-t2week10.js',

        'data/grade6/g6technologyStudies-t3week02.js',
        'data/grade6/g6technologyStudies-t3week03.js',
        'data/grade6/g6technologyStudies-t3week04.js',
        'data/grade6/g6technologyStudies-t3week05.js',
        'data/grade6/g6technologyStudies-t3week07.js',
        'data/grade6/g6technologyStudies-t3week08.js',
        'data/grade6/g6technologyStudies-t3week09.js',
        'data/grade6/g6technologyStudies-t3week10.js',

         // Home Economics
        'data/grade6/g6homeEconomics-t1week02.js',
        'data/grade6/g6homeEconomics-t1week03.js',
        'data/grade6/g6homeEconomics-t1week04.js',
        'data/grade6/g6homeEconomics-t1week05.js',
        'data/grade6/g6homeEconomics-t1week07.js',
        'data/grade6/g6homeEconomics-t1week08.js',
        'data/grade6/g6homeEconomics-t1week09.js',
        'data/grade6/g6homeEconomics-t1week10.js',
    
        'data/grade6/g6homeEconomics-t2week02.js',
        'data/grade6/g6homeEconomics-t2week03.js',
        'data/grade6/g6homeEconomics-t2week04.js',
        'data/grade6/g6homeEconomics-t2week05.js',
        'data/grade6/g6homeEconomics-t2week07.js',
        'data/grade6/g6homeEconomics-t2week08.js',
        'data/grade6/g6homeEconomics-t2week09.js',
        'data/grade6/g6homeEconomics-t2week10.js',

        'data/grade6/g6homeEconomics-t3week02.js',
        'data/grade6/g6homeEconomics-t3week03.js',
        'data/grade6/g6homeEconomics-t3week04.js',
        'data/grade6/g6homeEconomics-t3week05.js',
        'data/grade6/g6homeEconomics-t3week07.js',
        'data/grade6/g6homeEconomics-t3week08.js',
        'data/grade6/g6homeEconomics-t3week09.js',
        'data/grade6/g6homeEconomics-t3week10.js',

        // Bemba    
        'data/grade6/g6bemba-t1week02.js',
        'data/grade6/g6bemba-t1week03.js',
        'data/grade6/g6bemba-t1week04.js',
        'data/grade6/g6bemba-t1week05.js',
        'data/grade6/g6bemba-t1week07.js',
        'data/grade6/g6bemba-t1week08.js',
        'data/grade6/g6bemba-t1week09.js',
        'data/grade6/g6bemba-t1week10.js',
    
        'data/grade6/g6bemba-t2week02.js',
        'data/grade6/g6bemba-t2week03.js',
        'data/grade6/g6bemba-t2week04.js',
        'data/grade6/g6bemba-t2week05.js',
        'data/grade6/g6bemba-t2week07.js',
        'data/grade6/g6bemba-t2week08.js',
        'data/grade6/g6bemba-t2week09.js',
        'data/grade6/g6bemba-t2week10.js',

        'data/grade6/g6bemba-t3week02.js',
        'data/grade6/g6bemba-t3week03.js',
        'data/grade6/g6bemba-t3week04.js',
        'data/grade6/g6bemba-t3week05.js',
        'data/grade6/g6bemba-t3week07.js',
        'data/grade6/g6bemba-t3week08.js',
        'data/grade6/g6bemba-t3week09.js',
        'data/grade6/g6bemba-t3week10.js',

    // Add Term 2 and Term 3 worksheets here when created
    // Example format:
    // 'data/grade6/g6science-t2week01.js',
    // 'data/grade6/g6science-t3week01.js',
    ],
    
    // Extract grade, subject, term, and week from file path
    parseFileInfo: function(filePath) {
        const info = {
            grade: null,
            subject: null,
            term: null,
            week: null
        };
        
        // Extract grade
        if (filePath.includes('grade1')) info.grade = '1';
        else if (filePath.includes('grade2')) info.grade = '2';
        else if (filePath.includes('grade3')) info.grade = '3';
        else if (filePath.includes('grade4')) info.grade = '4';
        else if (filePath.includes('grade5')) info.grade = '5';
        else if (filePath.includes('grade6')) info.grade = '6';
        else if (filePath.includes('baby')) info.grade = 'baby';
        else if (filePath.includes('middle')) info.grade = 'middle';
        else if (filePath.includes('reception')) info.grade = 'reception';
        
        // Extract subject - FIXED to handle multiple patterns
        if (filePath.includes('mathematicsScience')) info.subject = 'Mathematics & Science';
        else if (filePath.includes('math')) info.subject = 'Mathematics';
        else if (filePath.includes('science')) info.subject = 'Science';
        else if (filePath.includes('english')) info.subject = 'English';
        else if (filePath.includes('literacy')) info.subject = 'Literacy';
        else if (filePath.includes('socialstudies')) info.subject = 'Social Studies';
        else if (filePath.includes('technologyStudies')) info.subject = 'Technology Studies';
        else if (filePath.includes('expressiveArts')) info.subject = 'Expressive Arts';
        else if (filePath.includes('homeEconomics')) info.subject = 'Home Economics';
        else if (filePath.includes('creativeTech')) info.subject = 'Creative and Technology Studies';
        else if (filePath.includes('bemba')) info.subject = 'Zambian Language (Icibemba)';
        
        // Extract term (t1, t2, t3)
        const termMatch = filePath.match(/t(\d)/);
        if (termMatch) info.term = termMatch[1];
        
        // Extract week
        const weekMatch = filePath.match(/week(\d+)/);
        if (weekMatch) info.week = weekMatch[1];
        
        return info;
    },
    
    // Group files for easier loading
    getFilesByFilter: function(filters) {
        return this.files.filter(filePath => {
            const fileInfo = this.parseFileInfo(filePath);
            
            // Filter logic based on file info
            if (filters.grade && filters.grade !== 'all') {
                if (fileInfo.grade !== filters.grade) return false;
            }
            
            if (filters.subject && filters.subject !== 'all') {
                if (fileInfo.subject !== filters.subject) return false;
            }
            
            if (filters.term && filters.term !== 'all') {
                if (fileInfo.term !== filters.term) return false;
            }
            
            if (filters.week && filters.week !== 'all') {
                if (fileInfo.week !== filters.week) return false;
            }
            
            return true;
        });
    },
    
    // Get all available options from manifest
    getAllOptions: function() {
        const options = {
            grades: new Set(),
            subjects: new Set(),
            terms: new Set(),
            weeks: new Set()
        };
        
        this.files.forEach(filePath => {
            const info = this.parseFileInfo(filePath);
            if (info.grade) options.grades.add(info.grade);
            if (info.subject) options.subjects.add(info.subject);
            if (info.term) options.terms.add(info.term);
            if (info.week) options.weeks.add(info.week);
        });
        
        return options;
    }
};

window.WorksheetManifest = WorksheetManifest;