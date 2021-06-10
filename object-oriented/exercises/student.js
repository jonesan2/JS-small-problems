"use strict";

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse(course) {
      course.grade = 'In progress';
      this.courses.push(course); 
    },

    listCourses() {
      this.courses.forEach(elem => console.log(elem));
    }, 

    addNote(code, note) {
      courseIndex = this.courses.findIndex(elem => elem.code === code);
      if (courseIndex === -1) {
        alert('course not found');
      } else if (this.courses[courseIndex].note) {
        this.courses[courseIndex].note += '; ' + note;
      } else {
        this.courses[courseIndex].note = note;
      }
    },

    updateNote(code, note) {
      courseIndex = this.courses.findIndex(elem => elem.code === code);
      if (courseIndex === -1) {
        alert('course not found');
      } else {
        this.courses[courseIndex].note = note;
      }
    },

    viewNotes() {
      this.courses.forEach(elem => {
        if(elem.note) {
          console.log(`Course Name: ${elem.name}`);
          console.log(`Course Code: ${elem.code}`);
          console.log(`Course Notes: ${elem.note}`);
          console.log('');
        }
      });
    },
  };
}

const school = (function() {
  const years = ['1st', '2nd', '3rd', '4th', '5th'];
  const students = [];
  return {
    addStudent(name, year) {
      if (!years.includes(year)) {
        console.log('Invalid year');
      } else {
        let stud = createStudent(name, year);
        students.push(stud);
        return stud;
      }
    },

    enrollStudent(stud, course) {
      stud.addCourse(course);
    },

    addGrade(stud, code, grade) {
      stud.courses.forEach(course => {
        if (course.code === code) {
          course.grade = grade;
        }
      });
    },
  
    getReportCard(stud) {
      stud.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      });
    },

    courseReport(courseName) {
      let total = 0;
      let size = 0;
      let studentLogs = '';
      students.forEach(stud => {
        let courseIndex = stud.courses.findIndex(course => course.name === courseName);
        if (courseIndex !== -1) {
          let grade = stud.courses[courseIndex].grade;
          if (grade !== 'In progress') {
            studentLogs += `${stud.name}: ${grade}\n`;
            total += grade;
            size += 1;
          }
        }
      });

      if (size > 0) {
        console.log(`=${courseName} Grades=`);
        console.log(studentLogs);
        console.log('---');
        console.log(`Course Average: ${total / size}`);
      } else {
        console.log('undefined');
      }
    },
  };
})();

let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.addCourse({ name: 'Physics', code: 202 });
bar.addCourse({ name: 'Math', code: 101 });
qux.addCourse({ name: 'Math', code: 101 });
qux.addCourse({ name: 'Advanced Math', code: 102 });

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

console.log(foo, bar, qux);
school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

// foo = createStudent('Foo', '1st');
// foo.info();
// foo.listCourses();
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();