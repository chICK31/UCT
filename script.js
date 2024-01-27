const mbtiTypes = {
    ISTJ: ["ISTJ", "Si-Hero", "Te-Parent", "Fi-Child", "Ne-Inferior", "Se-Nemesis", "Ti-Critic", "Fe-Trickster", "Ni-Demon", "Delta Quadra", "Soul Temple"],
    ISFJ: ["ISFJ", "Si-Hero", "Fe-Parent", "Ti-Child", "Ne-Inferior", "Se-Nemesis", "Fi-Critic", "Te-Trickster", "Ni-Demon", "Alpha Quadra", "Heart Temple"],
    INFJ: ["INFJ", "Ni-Hero", "Fe-Parent", "Ti-Child", "Se-Inferior", "Ne-Nemesis", "Fi-Critic", "Te-Trickster", "Si-Demon", "Beta Quadra", "Soul Temple"],
    INTJ: ["INTJ", "Ni-Hero", "Te-Parent", "Fi-Child", "Se-Inferior", "Ne-Nemesis", "Ti-Critic", "Fe-Trickster", "Si-Demon", "Gamma Quadra", "Heart Temple"],
    ISTP: ["ISTP", "Ti-Hero", "Se-Parent", "Ni-Child", "Fe-Inferior", "Te-Nemesis", "Si-Critic", "Ne-Trickster", "Fi-Demon", "Beta Quadra", "Mind Temple"],
    ISFP: ["ISFP", "Fi-Hero", "Se-Parent", "Ni-Child", "Te-Inferior", "Fe-Nemesis", "Si-Critic", "Ne-Trickster", "Ti-Demon", "Gamma Quadra", "Body Temple"],
    INFP: ["INFP", "Fi-Hero", "Ne-Parent", "Si-Child", "Te-Inferior", "Fe-Nemesis", "Ni-Critic", "Se-Trickster", "Ti-Demon", "Delta Quadra", "Mind Temple"],
    INTP: ["INTP", "Ti-Hero", "Ne-Parent", "Si-Child", "Fe-Inferior", "Te-Nemesis", "Ni-Critic", "Se-Trickster", "Fi-Demon", "Alpha Quadra", "Body Temple"],
    ESTP: ["ESTP", "Se-Hero", "Ti-Parent", "Fe-Child", "Ni-Inferior", "Si-Nemesis", "Te-Critic", "Fi-Trickster", "Ne-Demon", "Beta Quadra", "Soul Temple"],
    ESFP: ["ESFP", "Se-Hero", "Fi-Parent", "Te-Child", "Ni-Inferior", "Si-Nemesis", "Fe-Critic", "Ti-Trickster", "Ne-Demon", "Gamma Quadra", "Heart Temple"],
    ENFP: ["ENFP", "Ne-Hero", "Fi-Parent", "Te-Child", "Si-Inferior", "Ni-Nemesis", "Fe-Critic", "Ti-Trickster", "Se-Demon", "Delta Quadra", "Soul Temple"],
    ENTP: ["ENTP", "Ne-Hero", "Ti-Parent", "Fe-Child", "Si-Inferior", "Ni-Nemesis", "Te-Critic", "Fi-Trickster", "Se-Demon", "Alpha Quadra", "Heart Temple"],
    ESTJ: ["ESTJ", "Te-Hero", "Si-Parent", "Ne-Child", "Fi-Inferior", "Ti-Nemesis", "Se-Critic", "Ni-Trickster", "Fe-Demon", "Delta Quadra", "Mind Temple"],
    ESFJ: ["ESFJ", "Fe-Hero", "Si-Parent", "Ne-Child", "Ti-Inferior", "Fi-Nemesis", "Se-Critic", "Ni-Trickster", "Te-Demon", "Alpha Quadra", "Body Temple"],
    ENFJ: ["ENFJ", "Fe-Hero", "Ni-Parent", "Se-Child", "Ti-Inferior", "Fi-Nemesis", "Ne-Critic", "Si-Trickster", "Te-Demon", "Beta Quadra", "Mind Temple"],
    ENTJ: ["ENTJ", "Te-Hero", "Ni-Parent", "Se-Child", "Fi-Inferior", "Ti-Nemesis", "Ne-Critic", "Si-Trickster", "Fe-Demon", "Gamma Quadra", "Body Temple"]
};
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Check if results is not undefined
    if (!results) {
        resultsDiv.innerHTML = '<p>Error: No results to display.</p>';
        return;
    }

    // Iterate through results and create HTML content
    for (let oct in results) {
        for (let result of results[oct]) {
            const resultParagraph = document.createElement('p');
            resultParagraph.innerText = `${oct}: ${result[0]} contains ${result[1]}`;
            resultsDiv.appendChild(resultParagraph);
        }
    }
}
function processForm() {
    // Get values from form
    const gender = document.getElementById('gender').value;
    const octagram = document.getElementById('octagram').value;
    const mbtiType = document.getElementById('mbtiType').value; // Use mbtiType instead of mbtiTypeKey
    const sortingPreference = document.getElementById('sortingPreference').value;

    // Call your getType function
    const results = getType(gender, octagram, mbtiType, sortingPreference);
    if (Object.keys(results).length === 0) {
        console.error("No results to display");
    } else {
        displayResults(results);
    }
}
    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Iterate through results and create HTML content
    for (let category in results) {
        const categoryResults = results[category];
        if (categoryResults.length > 0) {
            const categoryDiv = document.createElement('div');
            const categoryHeader = document.createElement('h2');
            categoryHeader.innerText = category;
            categoryDiv.appendChild(categoryHeader);

            categoryResults.forEach(result => {
                const resultParagraph = document.createElement('p');
                resultParagraph.innerText = `${result[0]} contains ${result[1]}`;
                categoryDiv.appendChild(resultParagraph);
            });
            resultsDiv.appendChild(categoryDiv);
        }
    }
    displayResults(results);


function findMbtiType(type, typesObj) {
    return typesObj[type] || null;
}

// Main function to get the type and perform operations
function getType(gender, octagram, mbtiTypeKey, sortingPreference) {
    const mbtiTypeArray = mbtiTypes[mbtiTypeKey]; // Use a different variable name here
    if (!mbtiTypeArray) {
        console.error("Error: MBTI type not found.");
        return;
    }
    const mbti_lists = Object.values(mbtiTypes); // Create mbti_lists from the values of mbtiTypes
    let OctagramSlots1, OctagramSlots2, universalCompatibilityFunction;

    // Mapping octagram to slots
    const octagramMappings = {
        "SD | SF": [3, 4],
        "SD | UF": [5, 6],
        "UD | SF": [1, 2],
        "UD | UF": [7, 8]
    };

    if (octagram in octagramMappings) {
        [OctagramSlots1, OctagramSlots2] = octagramMappings[octagram];
    } else {
        console.error("Error: Invalid octagram input.");
        return;
    }

    // Determine universal compatibility function based on gender and type
    const charCheck = gender === "Male" ? "i" : "e";
    if (mbtiTypeArray[OctagramSlots1][1] === charCheck) {
        universalCompatibilityFunction = OctagramSlots1;
    } else if (mbtiTypeArray[OctagramSlots2][1] === charCheck) {
        universalCompatibilityFunction = OctagramSlots2;
    }

    // Create a copy of mbtiTypeArray for modification
    let modifiedType = [...mbtiTypeArray];
    let newStart = "";

    // Modify the type based on gender
    if (mbtiTypeArray[OctagramSlots1][1] === charCheck) {
        modifiedType[OctagramSlots1] = `${modifiedType[OctagramSlots1][0]}${gender === "Male" ? "e" : "i"}${modifiedType[OctagramSlots1].substring(2)}`;
        newStart = modifiedType[OctagramSlots1].substring(0, 2);
    } else if (mbtiTypeArray[OctagramSlots2][1] === charCheck) {
        modifiedType[OctagramSlots2] = `${modifiedType[OctagramSlots2][0]}${gender === "Male" ? "e" : "i"}${modifiedType[OctagramSlots2].substring(2)}`;
        newStart = modifiedType[OctagramSlots2].substring(0, 2);
    }

    let primaryFunctionGender = gender === "Male" ? "Feminine Primary Function" : "Masculine Primary Function";

    // Print the first part of the result
    console.log(`${gender}, ${octagram}, ${mbtiTypeArray[0]} with ${mbtiTypeArray[universalCompatibilityFunction]} is universally compatible with: ${newStart}, ${primaryFunctionGender}`);


    // Assuming mbti_lists is an array of MBTI types


    // Search in mbti_lists for new_start
    let results = {"SD | SF": [], "SD | UF": [], "UD | SF": [], "UD | UF": []};
    if (newStart) {
        for (let lst of mbti_lists) {
            for (let i = 0; i < lst.length; i++) {
                let element = lst[i];
                if (element.startsWith(newStart)) {
                    let finalOctagram = "";
                    if ([3, 4].includes(i)) {
                        finalOctagram = "SD | SF";
                    } else if ([5, 6].includes(i)) {
                        finalOctagram = "SD | UF";
                    } else if ([1, 2].includes(i)) {
                        finalOctagram = "UD | SF";
                    } else if ([7, 8].includes(i)) {
                        finalOctagram = "UD | UF";
                    }

                    if (finalOctagram) {
                        results[finalOctagram].push([lst[0], element]);
                        break;
                    }
                }
            }
        }
    }

    return results;

    for (let oct in results) {
        for (let result of results[oct]) {
            console.log(oct, result[0], "contains", result[1]);
        }
        
    }
}
