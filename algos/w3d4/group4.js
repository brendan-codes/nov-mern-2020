/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

// function webMD(ailments, meds) {
//     for(var i = 0; i<meds.length; i++){

//     }
// }

function webMD(ailments, meds) {
    let arr = []
    for(var i = 0; i<meds.length; i++){
        let med = meds[i].treatableSymptoms
        // console.log(meds[i].treatableSymptoms)
        for(var j = 0; j < med.length;j++){
            if(med.includes(ailments)){
                // if(med[j] == ailments)== this one is the same as includes jus to let you guys know
            arr.push(meds[i].name)
            break
        }
            // arr.push(meds[j].treatableSymptoms[j])

    }
    }
    return arr
}

console.log(webMD("inflammation",medications))
/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/