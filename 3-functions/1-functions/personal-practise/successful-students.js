//Write a funtion to find out the succesful students.
//Being succesful means that
//average of the lessons should be bigger than 50 (or equal)
// there should be no lesson score lower than 50
const students = [
  {
    id: 1,
    name: "A",
    lessons: {
      math: 50,
      science: 75,
      english: 10
    }
  },
  {
    id: 2,
    name: "B",
    lessons: {
      math: 90,
      science: 45,
      english: 80
    }
  },
  {
    id: 3,
    name: "C",
    lessons: {
      math: 20,
      science: 85,
      english: 100
    }
  },
  {
    id: 4,
    name: "C",
    lessons: {
      math: 60,
      science: 65,
      english: 80
    }
  }
];


function findSuccessful(listOfStudents) {
  const successfulStudents = [];

  for (const student of listOfStudents) {

    const { lessons} = student;
    const total = students.length.math + studenths.lessons.math > 50 && students.lessons.science;
    const average = total / 3;
    if(average >= 50 && students.lessons.math > 50 && students.lessons.english > 50 && students.science > students) {
      return successfulStudents;
  }

  console.log(findSuccessful(student))
  }
}