let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

addSubmission(submissions, "Andrew", 40, "test");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((element) => {
    return element.name === name;
  });
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

// const editSubmission = (array, index, score) => {
//    const passing =
// }

const findSubmissionByName = (array, name) => {
  return array.find((element) => {
    return element.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jane"));

const findLowestScore = (arrayOfScores) => {
  if (arrayOfScores.length) {
    return arrayOfScores.reduce((pv, cv) => (cv.score < pv.score ? cv : pv));
  } else {
    return "No scores were provided";
  }
};

console.log(findLowestScore(submissions));

const findAverageScore = (arrayOfAverageScores) => {
  return (
    arrayOfAverageScores.reduce((pv, cv) => {
      return pv + cv.score;
    }, 0) / arrayOfAverageScores.length
  );
};
console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  let scores = array.filter((people) => {
    return people.passed === true;
  });
  return scores;
};
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  let ace = array.filter((people) => {
    return people.score >= 90;
  });
  return ace;
};
console.log(filter90AndAbove(submissions));
