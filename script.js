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
  //practiceAverage
  let practicePart = document.createElement("div");
  factorsDiv.appendChild(practicePart);
  let practiceT = document.createElement("h3");
  practicePart.appendChild(practiceT);
  practiceT.classList.add("practiceC");
  practiceT.innerHTML = "Practice: "
  let practiceCheck = document.createElement("input");
  practicePart.appendChild(practiceCheck);
  practiceCheck.classList.add("practiceC");
  practiceCheck.type = "checkbox";
  let avBox;
  practiceCheck.addEventListener("change", function() {
    if (this.checked) {
      //open more
      //how many days on average do you practice per week?
      avBox = document.createElement("div");
      practicePart.appendChild(avBox);
      avBox.classList.add("averP")
      avBox.innerHTML = "How many days per week on average do you practice?: ";
      let averageInput = document.createElement("input");
      avBox.appendChild(averageInput);
      averageInput.type="number";
      //avgSubmitButton
      avgSubButton = document.createElement("button")
    } else {
      practicePart.removeChild(avBox);
    }
  })

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
    //dates In Order
    let endB;
    if (scoresArray.length > 1 && datesArray.length > 1) {
      endB = await scoresByDates(scoresArray, datesArray);
    } else {
      endB = "Please enter at least two scores!";
    }
    scoreText.innerHTML = endB;
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
