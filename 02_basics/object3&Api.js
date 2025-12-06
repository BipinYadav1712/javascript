// +++++++ De-structuring of Objects +++++++++++++++

const course = {
    courseName : "Javascript",
    courseId : 5,
    whichCouse : "B.Tech",
    price : "999",
    courseInstructor : "hitesh-sirrr",
}
// console.log(course.courseInstructor);

const {courseInstructor:instructor} = course
console.log(instructor);

//+++++++++ API = application programming interface ++++++
//  json   {
//     "coursename":" js in hindi",
//     "price":"free",
//     "name" : "bipin",
//  }