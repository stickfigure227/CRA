// Arrays and Constants
let ageCRA = 0;
const ageInputCRA = document.getElementById('ageInputCRA');
const divCRA1 = document.getElementById('divCRA1');
const loadingBarDivCRA = document.getElementById('loadingBarDivCRA');
const loadingBarCRA = document.getElementById('loadingBarCRA');
const divCRAAll = document.getElementById('divCRAAll');
const longAnswerArray = [10, 11, 12, 13, 14, 15];
const divCRAs = [
  'divCRA2', 'divCRA3', 'divCRA4', 'divCRA5', // Medical History
  'divCRA6', 'divCRA7',                       // Dental History
  'divCRA8', 'divCRA9', 'divCRA10',           // Social History
  'divCRA11', 'divCRA12', 'divCRA13',         // Behaviour
  'divCRA14',                                 // Oral Hygiene
  'divCRA15', 'divCRA16', 'divCRA17'          // IntraOral Examination
];
const divCRACategory = [
  'Medical History', 'Medical History', 'Medical History', 'Medical History', 
  'Dental History', 'Dental History', 
  'Social History', 'Social History', 'Social History', 
  'Behaviour', 'Behaviour', 'Behaviour', 
  'Oral Hygiene & Protective Factors', 
  'Intraoral Examination', 'Intraoral Examination', 'Intraoral Examination'
];
const divCRAQuestionsCondition = [
  '', '>=6', '>=6', '>=6',
  '', '',
  '', '<6', '',
  '', '', '>=6',
  '',
  '', '>=6', ''
];
const divCRAQuestionMore6 = [
  '', '', '', '', 
  '', '', 
  7, '', 7, 
  '', '', '', 
  '', 
  '', '', ''
];
const divCRAQuestionLess6 = [
  3, '', '', '', 
  1, '', 
  '', '', '', 
  '', 11, '', 
  11, 
  14, '', 14
];
// Prefix must end with a blank space ' '
const divCRAQuestionsPrefixThirdPerson = [
  '','','','',
  '','',
  '','',['Parents / caregiver ', 'Patient '],
  '','','',
  '',
  '','',''
];
const divCRAQuestionsPrefixThirdPersonCondition = [
  '','','','',
  '','',
  '','',['<6', '>=6'],
  '','','',
  '',
  '','',''
];
const divCRAQuestionsThirdPerson = [
  'Does the patient have Special Healthcare Needs?', 'Is the patient taking any medications that cause hyposalivation?', 'Does the patient have any eating disorders?', 'Is the patient undergoing any chemotherapy or radiotherapy?',
  'Does the patient have a dental home?', 'Is the patient wearing any intraoral appliances?',
  'Is the patient a recent immigrant?', 'Does the Mother / Primary caregiver / Siblings have any dental caries?', 'have life time poverty or low health knowledge.',
  'Patient has frequent exposure (>3 times a day) of "in-between meal sugar-containing snacks or beverages"', 'Patient uses milk bottle or non spill cup for drinks containing natural or added sugar during: ', 'Abuses: ',
  'Fluoride exposure: ',
  'Non carious findings: ', 'Restoration findings: ', 'Caries-related findings '
];
const divCRAQuestionsFirstPerson = [
  'Do you have Special Healthcare Needs?', 'Are you taking any medications that cause dry mouth?', 'Do you have any eating disorders?', 'Are you undergoing any chemotherapy or radiotherapy?',
  'Do you have a dental home?', 'Are you wearing any intraoral appliances?',
  'Are you a recent immigrant?', 'Does your Mother / Primary caregiver / Siblings have any dental caries?', 'have life time poverty or low health knowledge.',
  'You have frequent exposure (>3 times a day) of “in-between meal sugar-containing snacks or beverages”', 'You use milk bottle or non spill cup for drinks containing natural or added sugar during: ', 'Abuses: ',
  'Fluoride exposure: ',
  'Non carious findings: ', 'Restoration findings: ', 'Caries-related findings '
];
const divCRAQuestionsHints = [
  'exp: Down syndrome, etc.', '', '', '',
  'dental home: frequent dental visit to a particular dental clinic', 'exp: retainers, night guard, fixed orthodontics',
  '','','',
  '','','',
  '',
  '','',''
];
const divCRAQuestionsPrefixFirstPerson = [
  '','','','',
  '','',
  '','',['Your parents / caregiver ', 'You '],
  '','','',
  '',
  '','',''
];
const divCRAQuestionsPrefixFirstPersonCondition = [
  '','','','',
  '','',
  '','',['<6', '>=6'],
  '','','',
  '',
  '','',''
];
const divCRAQuestionsSuffix = [
  '','','','',
  '','',
  '','','',
  '','','',
  '',
  '','',['within last 24 months: ', 'within last 36 months: ']
];
const divCRAQuestionsSuffixCondition = [
  '','','','',
  '','',
  '','','',
  '','','',
  '',
  '','',['<6', '>=6']
];
const divCRAAnswers = [
  ['Yes', 'No'], ['Yes', 'No'], ['Yes', 'No'], ['Chemotherapy', 'Radiotherapy', 'Both', 'None'],
  ['Yes', 'Symptomatic-driven dental visit'], ['Yes', 'No'], 
  ['Yes', 'No'], ['Active caries', 'Previous caries (<6 months ago)', 'Previous caries (6-24 months ago)', 'No caries'], ['Yes', 'No'], 
  ['Yes', 'No'], ['In-between meals', 'While sleeping'], ['Drug abuse', 'Alcoholic', 'Smoker'],
  ['Fluoridated water', 'Fluoridated toothpaste', 'Fluoride supplements', '0.5% fluoride gel toothpaste', 'Professional topical fluoride'],
  ['Hyposalivation', 'Xerostomia', 'Visible plaque', 'Dental enamel defect', 'Unusual tooth morphology', 'Dental crowding', 'Exposed root surface'], ['Defective restoration', 'Interproximal restoration', 'Overhangs', 'Open margins', 'Open contacts with food impaction'], ['Incipient caries', 'Caries', 'Restoration', 'Extraction', 'PUFA']
];
const divCRAAnswerHints = [
  '', '', '', '',
  '', '',
  '','','',
  '','',['exp: meth mouth', '', ''],
  '',
  ['','Dry mouth','Grade C or E','Hypomineralisation or Hypoplasia','','',''],'',['new / previous','new / previous','new / recent','new / recent','exposed pulp, ulceration, fistula, abscess']
];
let divCRAAnswersState = [
  [0, 0], [0, 0], [0, 0], [0, 0, 0, 0],
  [0, 0], [0, 0], 
  [0, 0], [0, 0, 0, 0], [0, 0], 
  [0, 0], [0, 0], [0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]
];
const divCRAAnswersRisk = [
  ['M', 'L'], ['M', 'L'], ['M', 'L'], ['H', 'H', 'H', 'L'],
  ['L', 'M'], ['M', 'L'], 
  ['M', 'L'], ['H', 'H', 'M', 'L'], ['H', 'L'], 
  ['H', 'L'], ['H', 'H'], ['M', 'M', 'M'],
  ['L', 'L', 'L', 'L', 'L'],
  ['H', 'H', 'H', 'H', 'M', 'M', 'M'], ['M', 'M', 'M', 'M', 'M'], ['H', 'H', 'H', 'H', 'H']
];
const divCRAAnswersIds = [
  ['divCRAAns0w0', 'divCRAAns0w1'], ['divCRAAns1w0', 'divCRAAns1w1'], ['divCRAAns2w0', 'divCRAAns2w1'], ['divCRAAns3w0', 'divCRAAns3w1', 'divCRAAns3w2', 'divCRAAns3w3'],
  ['divCRAAns4w0', 'divCRAAns4w1'], ['divCRAAns5w0', 'divCRAAns5w1'],
  ['divCRAAns6w0', 'divCRAAns6w1'], ['divCRAAns7w0', 'divCRAAns7w1', 'divCRAAns7w2', 'divCRAAns7w3'], ['divCRAAns8w0', 'divCRAAns8w1'], 
  ['divCRAAns9w0', 'divCRAAns9w1'], ['divCRAAns10w0', 'divCRAAns10w1'], ['divCRAAns11w0', 'divCRAAns11w1', 'divCRAAns11w2'], 
  ['divCRAAns12w0', 'divCRAAns12w1', 'divCRAAns12w2', 'divCRAAns12w3', 'divCRAAns12w4'],
  ['divCRAAns13w0', 'divCRAAns13w1', 'divCRAAns13w2', 'divCRAAns13w3', 'divCRAAns13w4', 'divCRAAns13w5', 'divCRAAns13w6'], ['divCRAAns14w0', 'divCRAAns14w1', 'divCRAAns14w2', 'divCRAAns14w3', 'divCRAAns14w4'], ['divCRAAns15w0', 'divCRAAns15w1', 'divCRAAns15w2', 'divCRAAns15w3', 'divCRAAns15w4']
];
const divCRAAnsNextIds = [
  '','','','',
  '','',
  '','','',
  '','divCRAAnsNext10','divCRAAnsNext11',
  'divCRAAnsNext12',
  'divCRAAnsNext13','divCRAAnsNext14','divCRAAnsNext15'
];
const divCRAAnsNextText = [
  '','','','',
  '','',
  '','','',
  '','Not using','None',
  'No fluoride exposure',
  'No abnormalities','No abnormal restoration findings','No caries'
];
let divCRAAnsNextTextState = [
  0,0,0,0,
  0,0,
  0,0,0,
  0,0,0,
  0,
  0,0,0
];
const divCRAAnsNextTextRisk = [
  '','','','',
  '','',
  '','','',
  '','L','L',
  'M',
  'L','L','L'
];
const specificManagementSuggestion = [
  ['', ''], ['Discuss with physician for medication change (prevent dry mouth)', ''], ['', ''], ['Drink water and gurgle frequently', 'Drink water and gurgle frequently', 'Drink water and gurgle frequently', 0],
  ['', ''], ["Clean and soak appliance in water or cleaning solution daily AND don't wear dentures overnight", ''], 
  ['', ''], ['Do not share anything contaminated with saliva', 'Do not share anything contaminated with saliva', 'Do not share anything contaminated with saliva', ''], ['Learn about basic dental diseases and how to prevent them', ''], 
  ['Avoid frequent snacking and keep it during meal-times only', ''], ['Stop milk bottle or non spill cup use', 'Stop milk bottle or non spill cup use'], ['Smoking cessation', '', ''],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, '', 0, 0, 0]
];
const specificManagementSuggestionCont = [
  '','','','',
  '','',
  '','','',
  '','','',
  'Start fluoride use',
  'L','L','L'
];

// Actions
function managementCRA(input) {
  let a = ''; 
  let b = ''; 
  let c = '';
  let d = '';
  let f = '';
  let g = '';
  if (input === 'L') {
    b = 'every 12 months';
    c = 'every 24 months';
    d = '';
    f = '';
    g = toothpasteAmount();
  }
  if (input === 'M') {
    b = 'every 6 months';
    c = 'every 12 months';
    d = '<li>Topical fluoride every 6 months</li>';
    f = 'or take fluoride supplements';
    g = toothpasteAmount();
  }
  if (input === 'H') {
    b = 'every 3 months';
    c = 'every 6 months';
    d = '<li>Topical fluoride every 3 months</li>';
    f = 'or take fluoride supplements';
    if (ageCRA < 6) {
      g = toothpasteAmount();
    } else {
      g = '0.5% fluoride gel or paste';
    }
  }
  let e = '';
  if (divCRAAnswersState[15][2] === 1) {
    e = '<li>Restore carious teeth / place Silver Diamine Fluoride</li>'
  }
  function toothpasteAmount() {
    if (ageCRA < 3) {
      return 'smear size fluoridated toothpaste';
    } else if (ageCRA < 6) {
      return 'pea size fluoridated toothpaste';
    } else {
      return 'pea / whole size fluoridated toothpaste';
    }
  }
  let h = '';
  const hArray = [divCRAAnswersState[1][0], divCRAAnswersState[3][0], divCRAAnswersState[3][1], divCRAAnswersState[3][2], divCRAAnswersState[13][0], divCRAAnswersState[13][1]];
  if (hArray.includes(1)) {
    h = `
    <p>Dry mouth prevention</p>
    <ul>
    `;
    
    if (divCRAAnswersState[1][0] === 1) {
      if (divCRAAnswersState[3][0] === 1 || divCRAAnswersState[3][1] === 1 || divCRAAnswersState[3][2] === 1 || divCRAAnswersState[13][0] === 1 || divCRAAnswersState[13][1] === 1) {
        h += `
          <li>Request physician for medication change</li>
          <li>Gurgle and drink water frequently (and after taking medications)</li>
        </ul>
        `;
      } else {
        h += `
          <li>Request physician for medication change</li>
          <li>Gurgle and drink water after taking medication</li>
        </ul>
        `;
      }
    } else {
      h += `
        <li>Gurgle and drink water frequently</li>
      </ul>
      `;
    }
  }
  let z = '';
  if (divCRAAnswersState[5][0] === 1) {
    z = `
    <p>Intraoral appliance</p>
    <ul>
      <li>Clean and soak appliance in water or cleaning solution everyday</li>
      <li>DON'T wear appliance overnight</li>
    </ul>
    `;
  }
  let y = '';
  const yArray = [divCRAAnswersState[7][0], divCRAAnswersState[7][1], divCRAAnswersState[7][2], divCRAAnswersState[9][0], divCRAAnswersState[10][0], divCRAAnswersState[10][1]];
  if (yArray.includes(1)) {
    y = `
    <p>Diet modification</p>
    <ul>
    `;
    const y7 = [divCRAAnswersState[7][0], divCRAAnswersState[7][1], divCRAAnswersState[7][2]];
    const y9 = [divCRAAnswersState[9][0]];
    const y10 = [divCRAAnswersState[10][0], divCRAAnswersState[10][1]];
    y = y7.includes(1) ? y += `
        <li>Parents do not share anything contaminated with saliva</li>
      ` : y;
    y = y9.includes(1) ? y += `
        <li>Avoid frequent snacking and keep it during meal-times only</li>
      ` : y;
    y = y10.includes(1) ? y += `
        <li>Stop milk bottle or non spill cup use</li>
      ` : y;
    y += `<ul>`;
  }
  let w = '';
  let s = '';
  let t = '';
  let u = '';
  s = divCRAAnswersState[11][0] === 1 ? '<li>Substance abuse counseling</li>' : s;
  t = divCRAAnswersState[11][1] === 1 ? '<li>Alcohol use counseling</li>' : w;
  u = divCRAAnswersState[11][2] === 1 ? '<li>Smoking cessation counseling</li>' : w;
  w = `
  ${s}
  ${t}
  ${u}
  `;
  let v = '';
  const vArray = [divCRAAnswersState[14][0],divCRAAnswersState[14][2],divCRAAnswersState[14][3],divCRAAnswersState[14][4]];
  if (vArray.includes(1)) {
    v = `
    <li>Redo / Polish defective restoration</li>
    `;
  }

  a = `
    <div id="managementCRA" class="div5CRA">
      <label>Management</label>
      <div>
        <label>Maintenance</label>
        <ul>
          <li>Dental check-up ${b}</li>
          ${d}
          <li>Posterior Bitewing Radiograph ${c}</li>
        </ul>
      </div>
      <div>
        <label>Treatment</label>
        <ul>
          <li>Resin-based sealants / Glass ionomer sealants / Preventive resin restoration (if needed)</li>
          ${e}
          ${v}
          ${w}
        </ul>
      </div>
      <div>
        <label>Take home message:</label>
        <p>Fluoride exposure</p>
        <ul>
          <li>Drink optimal fluoridated water ${f}</li>
          <li>2x daily brushing with ${g}</li>
        </ul>
        ${h}
        ${z}
        ${y}
      </div>
      <button onclick="window.location.reload()"><p>Key in again</p></button>
    </div>
  `;
  divCRAAll.textContent = '';
  divCRAAll.innerHTML = a;
}
function enterAgeInputCRA() {
  if (isNaN(ageInputCRA.value) || ageInputCRA.value.trim() === '') {
    ageInputCRA.classList.add('jiggle');
    ageInputCRA.addEventListener('animationend', () => {
      ageInputCRA.classList.remove('jiggle');
    })
  } else {
    divCRA1.style.display = 'none';
    loadingBarDivCRA.style.display = 'flex';
    ageCRA = parseFloat(ageInputCRA.value);
    divCRAAll.style.display = 'flex';
    updateProgressPercentCRA(0);
  }
  generateDivCRA(0);
}
function divCRAAnswersState0Or1(i,j) {
  if (divCRAAnswersState[i][j] === 1) {
    divCRAAnswersState[i][j] = 0;
  } else {
    if (longAnswerArray.includes(i)) {
      divCRAAnswersState[i][j] = 1;
    } else {
      for (let k = 0; k < divCRAAnswersState[i].length; k++) {
        divCRAAnswersState[i][k] = 0;
      }
      divCRAAnswersState[i][j] = 1;
    }
  }
  generateDivCRA(i);
  colorTheCRAAnswerButtons();
}
function nextCRAQuestion(index) {
  if (index === 15) {
    updateProgressPercentCRA(100);
    let a = '';
    a = `
      <div id="${divCRAs[index]}" class="div4CRA">
        <label>Patient is:</label>
        ${riskLevel()}
        <button onclick="window.location.reload()"><p>Key in again</p></button>
      </div>
    `;
    divCRAAll.innerHTML = a;
  } else {
    function nextCRAQ(i) {
      setTimeout(generateDivCRA(i + 1), 10000);
      colorTheCRAAnswerButtons();
      updateProgressPercentCRA((i + 1) * 100 / 16);
    }
    if (divCRAQuestionsCondition[index + 1] === '') {
      nextCRAQ(index);
    } else if (divCRAQuestionsCondition[index + 1] === '>=6') {
      if (ageCRA >= 6) {
        nextCRAQ(index);
      } else {
        nextCRAQ(divCRAQuestionLess6[index]);
      }
    } else if (divCRAQuestionsCondition[index + 1] === '<6') {
      if (ageCRA < 6) {
        nextCRAQ(index);
      } else {
        nextCRAQ(divCRAQuestionMore6[index]);
      }
    }
  }
}
function backCRAQuestion(index) {
  function backCRAQ(i) {
    setTimeout(generateDivCRA(i - 1), 10000);
    colorTheCRAAnswerButtons();
  }
  if (divCRAQuestionsCondition[index - 1] === '') {
    backCRAQ(index);
  } else if (divCRAQuestionsCondition[index - 1] === '>=6') {
    if (ageCRA >= 6) {
      backCRAQ(index);
    } else {
      backCRAQ(divCRAQuestionLess6[index]);
    }
  } else if (divCRAQuestionsCondition[index - 1] === '<6') {
    if (ageCRA < 6) {
      backCRAQ(index);
    } else {
      backCRAQ(divCRAQuestionMore6[index]);
    }
  }
}
function updateDivCRAAnsNextTextState(index) {
  divCRAAnsNextTextState[index] = divCRAAnsNextTextState[index] === 0 ? 1 : 0;
  colorTheCRAAnswerButtons();
}




// Follow-up actions
function updateProgressPercentCRA(i) {
  loadingBarCRA.textContent = `${i}%`;
  loadingBarCRA.style.background = `linear-gradient(
    to right, 
    #738b72 ${(i)}%,  /* 30% width green */
    #404040 ${(i)}%   /* The rest black */
  )`;
}
function colorTheCRAAnswerButtons() {
  for (let i = 0; i < divCRAAnswersIds.length; i++) {
    for (let j = 0; j < divCRAAnswersIds[i].length; j++) {
      if (divCRAAnswersState[i][j] === 1) {
        if (document.getElementById(divCRAAnswersIds[i][j])) {
          document.getElementById(divCRAAnswersIds[i][j]).style.backgroundColor = '#465545';
          document.getElementById(divCRAAnswersIds[i][j]).style.color = 'white';
        }
      } else {
        if (document.getElementById(divCRAAnswersIds[i][j])) {
          document.getElementById(divCRAAnswersIds[i][j]).style.backgroundColor = '#E4E4E4';
          document.getElementById(divCRAAnswersIds[i][j]).style.color = 'black';
        }
      }
    }
  }
  for (let i = 0; i < divCRAAnsNextTextState.length; i++) {
    if (document.getElementById(divCRAAnsNextIds[i])){
      document.getElementById(divCRAAnsNextIds[i]).style.backgroundColor = '#E4E4E4';
      document.getElementById(divCRAAnsNextIds[i]).style.color = 'black';
      if (divCRAAnsNextTextState[i] === 1) {
        document.getElementById(divCRAAnsNextIds[i]).style.backgroundColor = '#465545';
        document.getElementById(divCRAAnsNextIds[i]).style.color = 'white';
      }
    }
  }
}
function noOrNextButton(index) {
  let f = '';
  if (longAnswerArray.includes(index) && !divCRAAnswersState[index].includes(1)) {
    f = `<button id="divCRAAnsNext${index}" onclick="nextCRAQuestion(${index}), updateDivCRAAnsNextTextState(${index})" class="nextButtons"><p>${divCRAAnsNextText[index]}</p></button>`;
  } else if (longAnswerArray.includes(index) && divCRAAnswersState[index].includes(1)) {
    divCRAAnsNextTextState[index] = 0;
    f = `<button id="divCRAAnsNext${index}" onclick="nextCRAQuestion(${index})" class="nextButtons"><p style="color: #465545;">Next</p></button>`;
  }
  return f;
}
function generateDivCRA(index) {
  let a = '';
  let b = '';
  let c = '';
  divCRAAll.textContent = '';
  if (ageCRA < 6) {
     b = divCRAQuestionsPrefixThirdPerson[index] === '' ? '' : divCRAQuestionsPrefixThirdPerson[index][0];
     c = divCRAQuestionsSuffix[index] === '' ? '' : divCRAQuestionsSuffix[index][0];
  } else if (ageCRA >= 6) {
     b = divCRAQuestionsPrefixThirdPerson[index] === '' ? '' : divCRAQuestionsPrefixThirdPerson[index][1];
     c = divCRAQuestionsSuffix[index] === '' ? '' : divCRAQuestionsSuffix[index][1];
  }
  let d = '';
  for (let i = 0; i < divCRAAnswers[index].length; i++) {
    let h = longAnswerArray.includes(index) ? `divCRAAnswersState0Or1(${index},${i})` : `divCRAAnswersState0Or1(${index},${i}), nextCRAQuestion(${index})`;
    const e = divCRAAnswerHints[index] === '' ? '' : `<br><span>${divCRAAnswerHints[index][i]}</span>`;
    d += `
      <button id="divCRAAns${index}w${i}" onclick="${h}"><p>${divCRAAnswers[index][i]}${e}</p></button>
    `;
  };
  let f = noOrNextButton(index);
  let g = index === 0 ? '' : `<button onclick="backCRAQuestion(${index})"><p>Back</p></button>`;
  a = `      
    <div id="${divCRAs[index]}" class="div2CRA">
      <label>${b}${divCRAQuestionsThirdPerson[index]}${c}</label>
      <h3>${divCRAQuestionsHints[index]}</h3>
      <div class="div3CRA">
        ${d}${f}
      </div>
      ${g}
    </div>
  `;
  divCRAAll.innerHTML = a;
}
function riskLevel() {
  let a = '';
  for (let i = 0; i < divCRAAnswersState.length; i++) {
    if (divCRAAnsNextTextState[i] === 1) {
      a += divCRAAnsNextTextRisk[i];
    }
    for (let j = 0; j < divCRAAnswersState[i].length; j++) {
      if (divCRAAnswersState[i][j] === 1) {
        a += divCRAAnswersRisk[i][j];
      }
    }
  }
  if (a.includes('H')) {
    return `
    <label style="color: #FE615A;">High Caries Risk</label>
    <button style="background-color: #FE615A;" onclick="managementCRA('H')"><p>Click For Management</p></button>
    `;
  } else if (!a.includes('H') && a.includes('M')) {
    return `<label style="color: #F58800">Moderate Caries Risk</label>    
    <button style="background-color: #F58800;"onclick="managementCRA('M')"><p>Click For Management</p></button>
    `;
  } else {
    return `<label style="color: #465545">Low Caries Risk</label>
    <button style="background-color: #465545;" onclick="managementCRA('L')"><p>Click For Management</p></button>
    `;
  }
}
