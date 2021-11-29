"use strict";
exports.__esModule = true;
var UserIdAutoIncrement = 1001;
var CourseIdAutoIncrement = 1101;
var UserName = false;
var UserAge = false;
var UserPhoneNumber = false;
var UserDetails = /** @class */ (function () {
    function UserDetails(paramUserName, paramUserAge, paramUserPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.UserAge = paramUserAge;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
    return UserDetails;
}());
var CourseDetails = /** @class */ (function () {
    function CourseDetails(paramcourseID, paramcourseName, paramrequiredDays) {
        CourseIdAutoIncrement++;
        this.courseID = "CI" + CourseIdAutoIncrement.toString();
        this.courseName = paramcourseName;
        this.requiredDays = paramrequiredDays;
    }
    return CourseDetails;
}());
var UserArrayList = new Array();
UserArrayList.push(new UserDetails("Kumaresh", 23, 9550543759));
UserArrayList.push(new UserDetails("Revanth", 22, 9182568953));
var courseArrayList = new Array();
courseArrayList.push(new CourseDetails(1102, "c#", 10));
courseArrayList.push(new CourseDetails(1104, "HTML", 7));
courseArrayList.push(new CourseDetails(1105, "JavaScript", 3));
function newuser() {
    document.getElementById("Maindiv").style.display = "none";
    document.getElementById("Registration").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("courseDetails").style.display = "none";
    document.getElementById("enrollDetails").style.display = "none";
}
function logindetails() {
    if (UserName == true && UserAge == true && UserPhoneNumber == true) {
        document.getElementById("Maindiv").style.display = "block";
    }
    else {
        alert("please complete the form");
    }
    document.getElementById("Maindiv").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("courseDetails").style.display = "none";
    document.getElementById("enrollDetails").style.display = "none";
}
function uservalidate() {
    document.getElementById("Maindiv").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("courseDetails").style.display = "none";
    document.getElementById("enrollDetails").style.display = "none";
    login();
}
function login() {
    document.getElementById("Maindiv").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("courseDetails").style.display = "none";
    document.getElementById("enrollDetails").style.display = "none";
}
function coursedetails() {
    document.getElementById("Maindiv").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("courseDetails").style.display = "block";
    document.getElementById("enrollDetails").style.display = "none";
}
function Enrolldetails() {
    document.getElementById("Maindiv").style.display = "none";
    document.getElementById("Registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("courseDetails").style.display = "none";
    document.getElementById("enrollDetails").style.display = "block";
}
function Enroll() {
    alert("Thank you!!!!");
    Enrolldetails();
}
