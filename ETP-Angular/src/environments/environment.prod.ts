export const environment = {
  production: true,
  serviceURL: 'http://homieution-node.azurewebsites.net/'
};

export const teacher_ENV = {
  registerAsTeacher: 'teacher/addTeacher',
  searchTeacher: 'teacher/searchTeacher',
  rateATeacher: 'teacher/rateTeacher',
  viewTeacher: 'teacher/viewTeacher',
}

export const student_ENV = {
  registerAsStudent: 'student/addStudent',
}

export const parent_ENV = {
  registerAsParent: 'parent/addParent',
}