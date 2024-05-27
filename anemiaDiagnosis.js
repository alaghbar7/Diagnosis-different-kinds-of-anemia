// Function to determine the type of anemia based on blood test results
function diagnoseAnemia(bloodTest) {
    const { hemoglobin, hematocrit, mcv, mch, rdw, iron, ferritin, b12, folate } = bloodTest;

    // Define criteria for different types of anemia
    const criteria = {
        ironDeficiencyAnemia: (hemoglobin < 13 && iron < 60 && ferritin < 20),
        perniciousAnemia: (hemoglobin < 13 && b12 < 200),
        folateDeficiencyAnemia: (hemoglobin < 13 && folate < 3.5),
        anemiaOfChronicDisease: (hemoglobin < 13 && iron < 60 && ferritin >= 100),
        thalassemia: (hemoglobin < 13 && mcv < 80 && rdw < 14),
        microcyticAnemia: (hemoglobin < 13 && mcv < 80),
        normocyticAnemia: (hemoglobin < 13 && mcv >= 80 && mcv <= 100),
        macrocyticAnemia: (hemoglobin < 13 && mcv > 100)
    };

    // Evaluate criteria and diagnose
    if (criteria.ironDeficiencyAnemia) {
        return 'Iron Deficiency Anemia';
    } else if (criteria.perniciousAnemia) {
        return 'Pernicious Anemia (Vitamin B12 Deficiency)';
    } else if (criteria.folateDeficiencyAnemia) {
        return 'Folate Deficiency Anemia';
    } else if (criteria.anemiaOfChronicDisease) {
        return 'Anemia of Chronic Disease';
    } else if (criteria.thalassemia) {
        return 'Thalassemia';
    } else if (criteria.microcyticAnemia) {
        return 'Microcytic Anemia';
    } else if (criteria.normocyticAnemia) {
        return 'Normocytic Anemia';
    } else if (criteria.macrocyticAnemia) {
        return 'Macrocytic Anemia';
    } else {
        return 'Anemia type not determined. Further tests required.';
    }
}

// Example blood test results
const bloodTest = {
    hemoglobin: 11.0,  // in g/dL
    hematocrit: 33,    // in %
    mcv: 75,           // mean corpuscular volume in fL
    mch: 25,           // mean corpuscular hemoglobin in pg
    rdw: 15,           // red cell distribution width in %
    iron: 30,          // serum iron in µg/dL
    ferritin: 10,      // serum ferritin in ng/mL
    b12: 300,          // vitamin B12 in pg/mL
    folate: 4.0        // serum folate in ng/mL
};

// Diagnose anemia based on the given blood test results
const diagnosis = diagnoseAnemia(bloodTest);
console.log(`Diagnosis: ${diagnosis}`);

/*
// Example blood test results indicating microcytic anemia
const bloodTest = {
    hemoglobin: 10.5,  // in g/dL, below the normal range
    hematocrit: 30,    // in %, below the normal range
    mcv: 70,           // mean corpuscular volume in fL, indicating microcytosis
    mch: 23,           // mean corpuscular hemoglobin in pg, may also be low
    rdw: 18,           // red cell distribution width in %, may be elevated in microcytic anemia
    iron: 40,          // serum iron in µg/dL, may be low
    ferritin: 15,      // serum ferritin in ng/mL, may be low
    b12: 350,          // vitamin B12 in pg/mL, within normal range
    folate: 5.0        // serum folate in ng/mL, within normal range
};

// Diagnose anemia based on the given blood test results
const diagnosis = diagnoseAnemia(bloodTest);
console.log(`Diagnosis: ${diagnosis}`);
*/

/*
// Example blood test results indicating normocytic anemia
const bloodTest = {
    hemoglobin: 11.5,  // in g/dL, below the normal range
    hematocrit: 35,    // in %, below the normal range
    mcv: 85,           // mean corpuscular volume in fL, within the normal range (80-100 fL)
    mch: 28,           // mean corpuscular hemoglobin in pg, within the normal range
    rdw: 13,           // red cell distribution width in %, within the normal range
    iron: 50,          // serum iron in µg/dL, may be low
    ferritin: 100,     // serum ferritin in ng/mL, normal or slightly low
    b12: 400,          // vitamin B12 in pg/mL, within normal range
    folate: 6.0        // serum folate in ng/mL, within normal range
};

// Diagnose anemia based on the given blood test results
const diagnosis = diagnoseAnemia(bloodTest);
console.log(`Diagnosis: ${diagnosis}`);
*/

/*
// Example blood test results indicating macrocytic anemia
const bloodTest = {
    hemoglobin: 9.0,   // in g/dL, below the normal range
    hematocrit: 28,    // in %, below the normal range
    mcv: 110,          // mean corpuscular volume in fL, indicating macrocytosis
    mch: 35,           // mean corpuscular hemoglobin in pg, may be elevated
    rdw: 14,           // red cell distribution width in %, within normal range
    iron: 80,          // serum iron in µg/dL, within normal range
    ferritin: 200,     // serum ferritin in ng/mL, within normal range
    b12: 150,          // vitamin B12 in pg/mL, low
    folate: 7.0        // serum folate in ng/mL, within normal range
};

// Diagnose anemia based on the given blood test results
const diagnosis = diagnoseAnemia(bloodTest);
console.log(`Diagnosis: ${diagnosis}`);
*/





