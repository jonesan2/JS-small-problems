let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function getLetter(num) {
  if (num >= 93 && num <= 100) {
    return 'A';
  } else if (num >= 85 && num <= 92) {
    return 'B';
  } else if (num >= 77 && num <= 84) {
    return 'C';
  } else if (num >= 69 && num <= 76) {
    return 'D';
  } else if (num >= 60 && num <= 68) {
    return 'E';
  } else if (num >= 0 && num <= 59) {
    return 'F';
  } else {
    return 'Invalid Score';
  } 
}

function findAvg(arr) {
  return findSum(arr) / arr.length;
}

function findSum(arr) {
  return arr.reduce((acc, elem) => acc + elem);
}

function calculateGrade(scores) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;
  let examAvg = findAvg(scores.exams);
  let exerciseTot = findSum(scores.exercises);

  return examAvg * EXAM_WEIGHT + exerciseTot * EXERCISE_WEIGHT;
}

function compileGrades(scores) {
  let grades = [];

  Object.keys(scores).forEach(student => {
    let studScores = scores[student].scores;

    grades.push(calculateGrade(studScores).toFixed(0));
  });

  return grades;
}

function compileExams(scores) {
  let exams = [];

  Object.keys(scores).forEach(student => {
    scores[student].scores.exams.forEach((elem, idx) => {
      exams[idx] = exams[idx] || [];
      exams[idx].push(elem);
    });
  });

  return exams;
}

function calculateExamData(exams) {
  let examData = [];

  exams.forEach((exam, idx) => {
    examData[idx] = examData[idx] || {};
    examData[idx].average = Number(findAvg(exam).toFixed(1));
    examData[idx].minimum = exam.reduce((acc, elem) => elem < acc ? elem : acc);
    examData[idx].maximum = exam.reduce((acc, elem) => elem > acc ? elem : acc);
  });

  return examData;
}

function generateClassRecordSummary(scores) {
  let grades = compileGrades(scores);
  let studentGrades = grades.map(grd => grd + '(' + getLetter(grd) + ')');

  let exams = compileExams(scores);
  let examData = calculateExamData(exams);
   
  return { studentGrades: studentGrades, exams: examData };
}

res = generateClassRecordSummary(studentScores);
console.log(res);

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/
