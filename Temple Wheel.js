// Temple wheel order: SF, UF, SD, UD
const INTP_ESFJ = ["Generative", "Glutinous", "Servile", "Hedonistic"];
const ENTP_ISFJ = ["Compassionate", "Envious", "Fanatical", "Malevolence"];
const ENTJ_ISFP = ["Generous", "Greedy", "Complacent", "Subjugative"];
const INTJ_ESFP = ["Modest", "Vainglorious", "Egotistic", "Desecratory"];
const ENFP_ISTJ = ["Forgiving", "Wrathful", "Impartial", "Discriminatory"];
const ESTJ_INFP = ["Initiatory", "Lazy", "Credulous", "Manifesting Ideas/Things"];
const ESTP_INFJ = ["Chaste", "Lustful", "Objectifying", "Worshipping"];
const ISTP_ENFJ = ["Humble", "Prideful", "Obstinate", "Accommodating"];

const Dic = {
    "INTP": INTP_ESFJ,
    "ESFJ": INTP_ESFJ,
    "ENTP": ENTP_ISFJ,
    "ISFJ": ENTP_ISFJ,
    "ENTJ": ENTJ_ISFP,
    "ISFP": ENTJ_ISFP,
    "INTJ": INTJ_ESFP,
    "ESFP": INTJ_ESFP,
    "ENFP": ENFP_ISTJ,
    "ISTJ": ENFP_ISTJ,
    "ESTJ": ESTJ_INFP,
    "INFP": ESTJ_INFP,
    "ESTP": ESTP_INFJ,
    "INFJ": ESTP_INFJ,
    "ISTP": ISTP_ENFJ,
    "ENFJ": ISTP_ENFJ
};

function getValues() {
    const getOctagram = document.getElementById('octagram').value;
    const getType = document.getElementById('mbtiType').value;

    const { focSwitch, devSwitch, developmentNumber, focusNumber, energy, octagramFocus, octagramDevelopment } = calculateValues(getOctagram, getType);
    const particularCaseFocus = `${getOctagram} ${getType} means that they are more ${Dic[getType][focusNumber]} than ${Dic[getType][focusNumber + focSwitch]}.`;
    const particularCaseDevelopment = `In this case, the Cognitive Development (${octagramDevelopment}) means that the ${getType} is inwardly ${Dic[getType][developmentNumber + devSwitch]} but outwardly ${Dic[getType][developmentNumber]}.`;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>${energy}</p><p>${particularCaseFocus}</p><p>${particularCaseDevelopment}</p>`;
}
function calculateValues(getOctagram, getType) {
    let octagramDevelopment, octagramFocus, energy, focusNumber, developmentNumber, devSwitch, focSwitch;

    if (getOctagram === "SD | SF") {
        octagramDevelopment = "SD";
        octagramFocus = "SF";
        energy = `${getOctagram} ${getType}'s joy energy is the ${getType} that is the happiest (on average) of all the ${getType} variants.`;
        focusNumber = 0;
        developmentNumber = 2;
        devSwitch = 1;
        focSwitch = 1;
    } else if (getOctagram === "SD | UF") {
        octagramDevelopment = "SD";
        octagramFocus = "UF";
        energy = `${getOctagram} ${getType}'s decay energy is the ${getType} that has fallen from the joy energy.`;
        focusNumber = 1;
        developmentNumber = 2;
        devSwitch = 1;
        focSwitch = -1;
    } else if (getOctagram === "UD | SF") {
        octagramDevelopment = "UD";
        octagramFocus = "SF";
        energy = `${getOctagram} ${getType}'s hope energy is the ${getType} that is hopeful since it had a difficult childhood but has had a reasonable adulthood.`;
        focusNumber = 0;
        developmentNumber = 3;
        devSwitch = -1;
        focSwitch = 1;
    } else if (getOctagram === "UD | UF") {
        octagramDevelopment = "UD";
        octagramFocus = "UF";
        energy = `${getOctagram} ${getType}'s despair energy is when it's been disabled in its childhood and it's continuing into adulthood.`;
        focusNumber = 1;
        developmentNumber = 3;
        devSwitch = -1;
        focSwitch = -1;
    }

    return { focSwitch, devSwitch, developmentNumber, focusNumber, energy, octagramFocus, octagramDevelopment };
}

document.getElementById('octagram').addEventListener('change', getValues);
document.getElementById('mbtiType').addEventListener('change', getValues);

window.onload = getValues;
