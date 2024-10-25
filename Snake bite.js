function identifyBite() {
    const biteShape = document.getElementById('biteshape').value;
    const swelling = document.getElementById('swelling').value;
    const symptoms = Array.from(document.getElementById('symptoms').selectedOptions).map(option => option.value);

    let shortSummary = '';
    let detailedExplanation = '';
    let toxinType = '';

    // Analyzing the bite shape for summary and detailed explanation
    if (biteShape === 'TwoPuncture') {
      shortSummary += 'Venomous snake likely. ';
      detailedExplanation += 'Two puncture marks suggest a venomous snake. ';
    } else if (biteShape === 'MultipleSmallBites') {
      shortSummary += 'Possibly non-venomous. ';
      detailedExplanation += 'Multiple small bites may indicate a non-venomous or rear-fanged snake. ';
    } else if (biteShape === 'NoBite') {
      shortSummary += 'Dry or non-envenomating bite. ';
      detailedExplanation += 'No visible bite could mean a dry bite or non-envenomating species. ';
    } else {
      detailedExplanation += 'Bite shape not provided. ';
    }

    // Analyzing the swelling for summary and detailed explanation
    if (swelling === 'severeswelling') {
      shortSummary += 'Severe swelling noted. ';
      detailedExplanation += 'Severe swelling indicates a strong reaction, likely from hemotoxic or cytotoxic venom. ';
    } else if (swelling === 'mildswelling') {
      shortSummary += 'Mild swelling noted. ';
      detailedExplanation += 'Mild swelling suggests a weaker venom or non-venomous snake. ';
    } else if (swelling === 'littleswelling') {
      shortSummary += 'Minimal swelling. ';
      detailedExplanation += 'Little to no swelling may mean a dry bite or mild venom. ';
    }

    // Analyzing symptoms for summary and detailed explanation
    if (symptoms.includes('breathing')) {
      shortSummary += 'Neurotoxic symptoms present. ';
      detailedExplanation += 'Difficulty breathing is a sign of neurotoxic venom, which affects the nervous system. ';
      toxinType = 'Neurotoxic venom suspected. ';
    } 
    if (symptoms.includes('necrosis')) {
      shortSummary += 'Tissue damage detected. ';
      detailedExplanation += 'Blackening of skin suggests tissue damage from hemotoxic or cytotoxic venom. ';
      toxinType += 'Hemotoxic or cytotoxic venom suspected. ';
    } 
    if (symptoms.includes('nausea') || symptoms.includes('dizziness')) {
      shortSummary += 'Systemic symptoms observed. ';
      detailedExplanation += 'Nausea, vomiting, or dizziness could be early signs of venom absorption. ';
    } 
    if (symptoms.includes('bleeding')) {
      shortSummary += 'Bleeding indicates hemotoxic venom. ';
      detailedExplanation += 'Non-stop bleeding suggests hemotoxic venom disrupting blood clotting. ';
      toxinType += 'Hemotoxic venom suspected. ';
    } 
    if (symptoms.includes('pain')) {
      detailedExplanation += 'Constant pain indicates venom causing tissue or nerve damage. ';
    } else if (symptoms.includes('smallpain')) {
      detailedExplanation += 'Pain only around the bite may suggest localized venom effect or minor envenomation. ';
    }

    // Default case if no significant input
    if (shortSummary === '') {
      shortSummary = 'Insufficient information to identify the bite. ';
      detailedExplanation = 'Please provide more details to improve the diagnosis. ';
      toxinType = 'Toxin type not identified.';
    }

    // Final summary + detailed explanation output
    document.getElementById('biteType').innerText = `Summary: ${shortSummary} \n\nDetailed Analysis: ${detailedExplanation} \n\nToxin Type: ${toxinType}`;

    // Show the result section
    document.querySelector('.result').style.display = 'block';
  }


