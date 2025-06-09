let fButton = document.querySelectorAll(".fButton");
let interactP = document.getElementById("interactP");


for (let i = 0; i < fButton.length; i++) {
  fButton[i].addEventListener("click", goSep);
}

function goSep() {
  interactP.innerHTML = "";
  let textA = "";
  if (this.getAttribute("id") == "9H") {
    textA = "9-Hole";
  } else {
    textA = "18-Hole";
  }
  //hi
  let prevScores = document.createElement("h2");
  interactP.appendChild(prevScores);
  prevScores.innerHTML = "Enter your previous " + textA + " scores:"
  let scoresDiv = document.createElement("div");
  interactP.appendChild(scoresDiv);
  scoresDiv.classList.add("kd");
  addOne(scoresDiv);
  addOne(scoresDiv);
  //factors
  let factorsDiv = document.createElement("div");
  interactP.appendChild(factorsDiv);
  factorsDiv.classList.add("kd");
  factorsDiv.classList.add("facT");
  //Practice Tracking Section
  let practiceSection = document.createElement("div");
  factorsDiv.appendChild(practiceSection);
  practiceSection.classList.add("practice-section");
  
  let practiceTitle = document.createElement("h3");
  practiceSection.appendChild(practiceTitle);
  practiceTitle.innerHTML = "Practice Tracking";
  practiceTitle.classList.add("section-title");
  
  // Practice checkbox to show/hide practice fields
  let practiceToggle = document.createElement("div");
  practiceSection.appendChild(practiceToggle);
  practiceToggle.classList.add("practice-toggle");
  
  let practiceCheck = document.createElement("input");
  practiceToggle.appendChild(practiceCheck);
  practiceCheck.type = "checkbox";
  practiceCheck.id = "practice-checkbox";
  
  let practiceLabel = document.createElement("label");
  practiceToggle.appendChild(practiceLabel);
  practiceLabel.setAttribute("for", "practice-checkbox");
  practiceLabel.innerHTML = "I practiced before this round";
  
  // Practice details container (initially hidden)
  let practiceDetails = document.createElement("div");
  practiceSection.appendChild(practiceDetails);
  practiceDetails.classList.add("practice-details");
  practiceDetails.style.display = "none";
  
  // Practice frequency
  let frequencyDiv = document.createElement("div");
  practiceDetails.appendChild(frequencyDiv);
  frequencyDiv.classList.add("practice-field");
  
  let frequencyLabel = document.createElement("label");
  frequencyDiv.appendChild(frequencyLabel);
  frequencyLabel.innerHTML = "Practice days per week:";
  
  let frequencyInput = document.createElement("input");
  frequencyDiv.appendChild(frequencyInput);
  frequencyInput.type = "number";
  frequencyInput.min = "0";
  frequencyInput.max = "7";
  frequencyInput.classList.add("number-input");
  
  // Practice areas (checkboxes)
  let practiceAreasDiv = document.createElement("div");
  practiceDetails.appendChild(practiceAreasDiv);
  practiceAreasDiv.classList.add("practice-field");
  
  let areasLabel = document.createElement("h4");
  practiceAreasDiv.appendChild(areasLabel);
  areasLabel.innerHTML = "What did you practice?";
  areasLabel.classList.add("field-subtitle");
  
  let practiceAreas = [
    { id: "short-game", label: "Short Game (Chipping, Pitching)" },
    { id: "long-game", label: "Long Game (Driver, Woods)" },
    { id: "iron-game", label: "Iron Game (Mid/Short Irons)" },
    { id: "putting", label: "Putting" },
    { id: "range", label: "Driving Range" },
    { id: "course-management", label: "Course Management" },
    { id: "bunker-play", label: "Bunker/Sand Play" }
  ];
  
  let areasContainer = document.createElement("div");
  practiceAreasDiv.appendChild(areasContainer);
  areasContainer.classList.add("checkbox-grid");
  
  practiceAreas.forEach(area => {
    let areaDiv = document.createElement("div");
    areasContainer.appendChild(areaDiv);
    areaDiv.classList.add("checkbox-item");
    
    let areaCheck = document.createElement("input");
    areaDiv.appendChild(areaCheck);
    areaCheck.type = "checkbox";
    areaCheck.id = area.id;
    areaCheck.classList.add("practice-area-check");
    
    let areaLabel = document.createElement("label");
    areaDiv.appendChild(areaLabel);
    areaLabel.setAttribute("for", area.id);
    areaLabel.innerHTML = area.label;
  });
  
  // Improvements section
  let improvementsDiv = document.createElement("div");
  practiceDetails.appendChild(improvementsDiv);
  improvementsDiv.classList.add("practice-field");
  
  let improvementsLabel = document.createElement("h4");
  improvementsDiv.appendChild(improvementsLabel);
  improvementsLabel.innerHTML = "What did you improve on?";
  improvementsLabel.classList.add("field-subtitle");
  
  let improvements = [
    { id: "accuracy", label: "Accuracy" },
    { id: "distance", label: "Distance" },
    { id: "consistency", label: "Consistency" },
    { id: "tempo", label: "Tempo/Rhythm" },
    { id: "mental-game", label: "Mental Game" },
    { id: "course-strategy", label: "Course Strategy" },
    { id: "club-selection", label: "Club Selection" }
  ];
  
  let improvementsContainer = document.createElement("div");
  improvementsDiv.appendChild(improvementsContainer);
  improvementsContainer.classList.add("checkbox-grid");
  
  improvements.forEach(improvement => {
    let improvementDiv = document.createElement("div");
    improvementsContainer.appendChild(improvementDiv);
    improvementDiv.classList.add("checkbox-item");
    
    let improvementCheck = document.createElement("input");
    improvementDiv.appendChild(improvementCheck);
    improvementCheck.type = "checkbox";
    improvementCheck.id = improvement.id;
    improvementCheck.classList.add("improvement-check");
    
    let improvementLabel = document.createElement("label");
    improvementDiv.appendChild(improvementLabel);
    improvementLabel.setAttribute("for", improvement.id);
    improvementLabel.innerHTML = improvement.label;
  });
  
  // Practice duration
  let durationDiv = document.createElement("div");
  practiceDetails.appendChild(durationDiv);
  durationDiv.classList.add("practice-field");
  
  let durationLabel = document.createElement("label");
  durationDiv.appendChild(durationLabel);
  durationLabel.innerHTML = "Practice session duration (minutes):";
  
  let durationInput = document.createElement("input");
  durationDiv.appendChild(durationInput);
  durationInput.type = "number";
  durationInput.min = "0";
  durationInput.max = "300";
  durationInput.classList.add("number-input");
  
  // Practice notes
  let notesDiv = document.createElement("div");
  practiceDetails.appendChild(notesDiv);
  notesDiv.classList.add("practice-field");
  
  let notesLabel = document.createElement("label");
  notesDiv.appendChild(notesLabel);
  notesLabel.innerHTML = "Additional practice notes:";
  
  let notesTextarea = document.createElement("textarea");
  notesDiv.appendChild(notesTextarea);
  notesTextarea.classList.add("practice-notes");
  notesTextarea.placeholder = "Any specific drills, techniques, or observations from your practice session...";
  notesTextarea.rows = "3";
  
  // Toggle practice details visibility
  practiceCheck.addEventListener("change", function() {
    if (this.checked) {
      practiceDetails.style.display = "block";
      practiceDetails.classList.add("show");
      factorsDiv.style.display = 'block';
      factorsDiv.style.marginLeft = '0';
      // To prevent cutoff during transition
      practiceDetails.style.overflow = 'visible';
    } else {
      practiceDetails.style.overflow = 'hidden';
      practiceDetails.style.display = "none";
      practiceDetails.classList.remove("show");
      factorsDiv.style.display = 'inline-block';
      factorsDiv.style.marginLeft = '20%';
    }
  });

  //addingMoreScores
  let addB = document.createElement("button");
  interactP.appendChild(addB);
  addB.innerHTML = "Add Another Score"
  addB.style.display = "block";
  let textBottom = document.createElement("h3");
  interactP.appendChild(textBottom);
  textBottom.style.display = 'inline-block';
  textBottom.innerHTML = "The more scores you add, the more accurate the prediction of your next score will be.<br>--10 or more scores would be optimal.";
  let quB = document.createElement("p");
  interactP.appendChild(quB);
  quB.classList.add("quesT")
  quB.innerHTML = "?";
  quB.addEventListener("mousein", function() {
    //https://en.wikipedia.org/wiki/One_in_ten_rule
    //linear regression part for wikipedia
  });

  addB.addEventListener("click", function() {
    addOne(scoresDiv);
  })
  let submitButton = document.createElement("button");
  interactP.appendChild(submitButton);
  submitButton.innerHTML = "Submit and Find Out!";
  let endDiv = document.createElement("div");
  interactP.appendChild(endDiv);
  endDiv.style.display = "none";
  let endRe = document.createElement("h3");
  endDiv.appendChild(endRe);
  endRe.classList.add("endStuff");
  endRe.innerHTML = "Your next " + textA + " score will be: ";
  let scoreText = document.createElement("h3");
  endDiv.appendChild(scoreText);
  scoreText.classList.add("endStuff");
  scoreText.classList.add("pScore");
  scoreText.innerHTML = "Not calculated Yet...";
  let imGo = document.createElement("h3");
  endDiv.appendChild(imGo);
  imGo.innerHTML = "Now, go beat that score!";
  submitButton.addEventListener("click", async function() {
    let scoresArray = [];
    let datesArray = [];
    let scoreSQ = document.querySelectorAll(".scoreS");
    let datesSQ = document.querySelectorAll(".dateP");
    console.log(datesSQ);
    for (let i = 0; i < scoreSQ.length; i++) {
      if (isNaN(parseInt(scoreSQ[i].value)) == false) {
        console.log(scoreSQ[i].value);
        scoresArray.push(scoreSQ[i].value);
        let dateValue;
        if (datesSQ[i].value == "") {
          let today = new Date();
          let dd = String(today.getDate()).padStart(2, '0');
          let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! :)
          let yyyy = today.getFullYear();

          today = yyyy + '-' + mm + '-' + dd;
          dateValue = today;
        } else {
          dateValue = datesSQ[i].value;
        }
        console.log(dateValue);
        datesArray.push(dateValue);
      }
      
    }
    
    // Collect practice data
    let practiceData = collectPracticeData();
    
    //dates In Order
    let endB;
    if (scoresArray.length > 1 && datesArray.length > 1) {
      endB = await scoresByDates(scoresArray, datesArray);
    } else {
      endB = "Please enter at least two scores!";
    }
    scoreText.innerHTML = endB;
    
    // Display practice summary if practice data was collected
    if (practiceData.practiced) {
      displayPracticeSummary(endDiv, practiceData);
    }
    
    endDiv.style.display = "block";
    //https://www.educba.com/regression-line-formula/


   
  });
}

function scoresByDates(array1, array2) {
  //put scores with their own dates first
  // let scoresWithDates = {};
  // for (let i = 0; i < array1.length; i++) {
    
  //   scoresWithDates[array2[i]] = array1[i];
  // }
  //dividing dates by day, month, year to get organized
  let datesByDiv = {};
  hiK: for (let i = 0; i < array2.length; i++) {
    if (datesByDiv[array2[i]]) {
      console.log("hi");
      let nextS = 0;
      let keysD = Object.keys(datesByDiv[array2[i]]);
      console.log(keysD);
      hiT: for (let j = 0; j < keysD.length; j++) {
        if (keysD[j].substring(0, 5) == "score" && j == keysD.length - 1) {
          let curS = parseInt(keysD[j].substring(5), 10);
          console.log(curS);
          nextS = curS+1;//
          break hiT;
        }
      }
      datesByDiv[array2[i]]["score" + nextS] = parseInt(array1[i], 10);
      // datesByDiv[array2[i]]["comb"] = "" + datesByDiv[array2[i]]["year"] + datesByDiv[array2[i]]["month"] + datesByDiv[array2[i]]["day"];
    } else {
      let yearPart = array2[i].substring(0,4);
      let monthPart = array2[i].substring(5,7);
      let dayPart = array2[i].substring(8);
      datesByDiv[array2[i]] = {};
      datesByDiv[array2[i]]["year"] = parseInt(yearPart, 10);
      datesByDiv[array2[i]]["month"] = parseInt(monthPart,10);
      datesByDiv[array2[i]]["day"] = parseInt(dayPart,10);
      datesByDiv[array2[i]]["comb"] = "" + yearPart + monthPart + dayPart;
      datesByDiv[array2[i]]["score1"] = parseInt(array1[i], 10);
    }
  }
  //dates In order now 
  let greatYear = Infinity;
  let allDatesArray = [];
  let allDatesArray2 = [];
  let allDatesArray3 = [];
  for (let dateK in datesByDiv) {
    allDatesArray.push(datesByDiv[dateK]);
  }
  for (let dateK in datesByDiv) {
    allDatesArray2.push(datesByDiv[dateK]);
  }
  console.log(allDatesArray);
  let bn = allDatesArray;
  let datesInOrder = minOrder(allDatesArray2, bn, [], []);
  console.log(datesInOrder);

  //now it is time for linear correlation
  //x = 1, 2, 3, etc for dates
  //y = the scores inputted
  //linear regression process now...
  //y = a+bx 
  //X*Y and X^2
  let nScores = 0;
  //E (adding) varaibles
  let XSum = 0;
  let YSum = 0;
  let XYSum = 0;
  let X2Sum = 0;
  //go through the dates that are IN ORDER now
  debugger;
  for (let i = 0; i < datesInOrder.length; i++) {
    //X*Y
    let keysA = Object.keys(datesInOrder[i]);
    for (let j = 0; j < keysA.length; j++) {
      if (keysA[j].substring(0, 5) == "score") {
        nScores++;
        datesInOrder[i]["XY" + keysA[j]] = (nScores)*datesInOrder[i][keysA[j]];
        //X^2
        datesInOrder[i]["X2" + keysA[j]] = Math.pow((nScores), 2);
        //add all X*Y values and X^2s values individually
        // XSum += (i+1);
        XSum += nScores;
        YSum += datesInOrder[i][keysA[j]];
        XYSum += datesInOrder[i]["XY" + keysA[j]];
        X2Sum += datesInOrder[i]["X2" + keysA[j]];
      }
    }
  }
  console.log(nScores, XSum, YSum, XYSum, X2Sum);
  //calculate b part of a+bx;
  //b = [n * (∑XY) – (∑X) * (∑Y)] / [n * (∑X2) – (∑X)^2]
  let n = nScores;
  let b = ((n*XYSum) - (XSum*YSum)) / ((n*X2Sum) - Math.pow(XSum, 2));
  console.log(b);
  //cal culate a part of a+bx;
  //a = [(∑Y) * (∑X2) – (∑X) * (∑XY)] / [n * (∑X2) – (∑X)2]
  let a = ((YSum * X2Sum) - (XSum * XYSum)) / ((n*X2Sum) - Math.pow(XSum, 2));
  console.log(a);
  //calculate next score possible (n+1)
  let nextScore = a + (b*(n+1));
  console.log(nextScore);
  //it works!
  return Math.round(nextScore);
}

function minOrder(oriArray, array, toReturn, inArray) {
  let combS = Infinity;
  let partOf = [];
  let toIn = [];
  for (let i = 0; i < array.length; i++) {
    if (!inArray.includes(i)) {
      let thisComb = parseInt(array[i]["comb"], 10);
      if (thisComb < combS) {
        combS = thisComb;
        partOf = [];
        partOf.push(array[i]);
        toIn = [];
        toIn.push(i);
        for (let j = i+1; j < array.length; j++) {
          let thisComb2 = parseInt(array[j]["comb"], 10);
          if (thisComb2 == thisComb) {
            partOf.push(array[j]);
            toIn.push(j);
          }
        }
      }
    }
  }
  for (let i = 0; i < toIn.length; i++) {
    inArray.push(toIn[i]);
  }
  for (let i = 0; i < partOf.length; i++) {
    toReturn.push(partOf[i]);
  }
  if (toReturn.length == oriArray.length) {
    return toReturn;
  } else {
    return minOrder(oriArray, array, toReturn, inArray);
  }
}

// Function to collect practice data from the form
function collectPracticeData() {
  let practiceCheckbox = document.getElementById("practice-checkbox");
  
  if (!practiceCheckbox || !practiceCheckbox.checked) {
    return { practiced: false };
  }
  
  let practiceData = {
    practiced: true,
    frequency: 0,
    duration: 0,
    practiceAreas: [],
    improvements: [],
    notes: ""
  };
  
  // Get frequency
  let frequencyInput = document.querySelector(".practice-details .number-input");
  if (frequencyInput && frequencyInput.value) {
    practiceData.frequency = parseInt(frequencyInput.value);
  }
  
  // Get duration
  let durationInputs = document.querySelectorAll(".practice-details .number-input");
  if (durationInputs.length > 1 && durationInputs[1].value) {
    practiceData.duration = parseInt(durationInputs[1].value);
  }
  
  // Get practice areas
  let practiceAreaChecks = document.querySelectorAll(".practice-area-check:checked");
  practiceAreaChecks.forEach(check => {
    let label = document.querySelector(`label[for="${check.id}"]`);
    if (label) {
      practiceData.practiceAreas.push(label.innerHTML);
    }
  });
  
  // Get improvements
  let improvementChecks = document.querySelectorAll(".improvement-check:checked");
  improvementChecks.forEach(check => {
    let label = document.querySelector(`label[for="${check.id}"]`);
    if (label) {
      practiceData.improvements.push(label.innerHTML);
    }
  });
  
  // Get notes
  let notesTextarea = document.querySelector(".practice-notes");
  if (notesTextarea && notesTextarea.value) {
    practiceData.notes = notesTextarea.value;
  }
  
  return practiceData;
}

// Function to display practice summary
function displayPracticeSummary(parentDiv, practiceData) {
  let summaryDiv = document.createElement("div");
  parentDiv.appendChild(summaryDiv);
  summaryDiv.classList.add("practice-summary");
  
  let summaryTitle = document.createElement("h3");
  summaryDiv.appendChild(summaryTitle);
  summaryTitle.innerHTML = "Practice Summary";
  summaryTitle.classList.add("summary-title");
  
  if (practiceData.frequency > 0) {
    let frequencyP = document.createElement("p");
    summaryDiv.appendChild(frequencyP);
    frequencyP.innerHTML = `<strong>Practice Frequency:</strong> ${practiceData.frequency} days per week`;
    frequencyP.classList.add("summary-item");
  }
  
  if (practiceData.duration > 0) {
    let durationP = document.createElement("p");
    summaryDiv.appendChild(durationP);
    durationP.innerHTML = `<strong>Session Duration:</strong> ${practiceData.duration} minutes`;
    durationP.classList.add("summary-item");
  }
  
  if (practiceData.practiceAreas.length > 0) {
    let areasP = document.createElement("p");
    summaryDiv.appendChild(areasP);
    areasP.innerHTML = `<strong>Practice Areas:</strong> ${practiceData.practiceAreas.join(", ")}`;
    areasP.classList.add("summary-item");
  }
  
  if (practiceData.improvements.length > 0) {
    let improvementsP = document.createElement("p");
    summaryDiv.appendChild(improvementsP);
    improvementsP.innerHTML = `<strong>Improvements Focused On:</strong> ${practiceData.improvements.join(", ")}`;
    improvementsP.classList.add("summary-item");
  }
  
  if (practiceData.notes) {
    let notesP = document.createElement("p");
    summaryDiv.appendChild(notesP);
    notesP.innerHTML = `<strong>Notes:</strong> ${practiceData.notes}`;
    notesP.classList.add("summary-item");
  }
}

//add another box for putting in a score
function addOne(appender) {
  let firstIn = document.createElement("h3");
  appender.appendChild(firstIn);
  let scoreI = document.createElement("input");
  firstIn.appendChild(scoreI);
  scoreI.classList.add("scoreS");
  scoreI.type = "number";
  scoreI.min = "9";
  let datePlayed = document.createElement("input");
  firstIn.appendChild(datePlayed);
  datePlayed.classList.add("dateP");
  datePlayed.type = "date";
  let deleteButton = document.createElement("button");
  firstIn.appendChild(deleteButton);
  deleteButton.style.display = "inline-block";
  deleteButton.innerHTML = "Remove";
  deleteButton.addEventListener("click", function() {
    appender.removeChild(firstIn);
  });
  }
