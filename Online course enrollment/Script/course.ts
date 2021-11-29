 export{}
 let UserIdAutoIncrement=1001;
 let CourseIdAutoIncrement=1101;
 let UserName=false;
 let UserAge=false;
 let UserPhoneNumber=false;
class UserDetails {
    UserId: string;
    UserName: string;
    UserAge: number;
    UserPhoneNumber: number;
    constructor(paramUserName: string, paramUserAge: number, paramUserPhoneNumber: number) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.UserAge = paramUserAge;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
}
class CourseDetails{
    courseID:string;
    courseName:string;
    requiredDays:number;
    userId:number;
    constructor(paramcourseID: number, paramcourseName: string, paramrequiredDays: number) { 
        CourseIdAutoIncrement++;
        this.courseID="CI"+CourseIdAutoIncrement.toString(); 
        this.courseName= paramcourseName;
        this.requiredDays= paramrequiredDays;
    } 
}
    
let UserArrayList: Array<UserDetails> = new Array<UserDetails>();

UserArrayList.push(new UserDetails("Kumaresh", 23, 9550543759));
UserArrayList.push(new UserDetails("Revanth", 22, 9182568953));

let courseArrayList: Array<CourseDetails> = new Array<CourseDetails>();
courseArrayList.push(new CourseDetails(1102,"c#",10));
courseArrayList.push(new CourseDetails(1104,"HTML",7));
courseArrayList.push(new CourseDetails(1105,"JavaScript",3));

function newuser(){
    (document.getElementById("Maindiv") as HTMLDivElement).style.display = "none";
    (document.getElementById("Registration") as HTMLDivElement).style.display = "block";
    (document.getElementById("login") as HTMLDivElement).style.display = "none";
    (document.getElementById("menu") as HTMLDivElement).style.display = "none";
    (document.getElementById("courseDetails") as HTMLDivElement).style.display = "none";
    (document.getElementById("enrollDetails") as HTMLDivElement).style.display="none"

}
function logindetails(){

    if(UserName==true&&UserAge==true&&UserPhoneNumber==true){
        (document.getElementById("Maindiv") as HTMLDivElement).style.display="block";
    }else{
        alert("please complete the form")
    }
    (document.getElementById("Maindiv") as HTMLDivElement).style.display = "none";
    (document.getElementById("Registration") as HTMLDivElement).style.display = "none";
    (document.getElementById("login") as HTMLDivElement).style.display = "block";
    (document.getElementById("menu") as HTMLDivElement).style.display = "none";
    (document.getElementById("courseDetails") as HTMLDivElement).style.display = "none";
    (document.getElementById("enrollDetails") as HTMLDivElement).style.display="none"
    
}
function uservalidate(){
    (document.getElementById("Maindiv") as HTMLDivElement).style.display = "none";
    (document.getElementById("Registration") as HTMLDivElement).style.display = "none";
    (document.getElementById("login") as HTMLDivElement).style.display = "none";
    (document.getElementById("menu") as HTMLDivElement).style.display = "block";
    (document.getElementById("courseDetails") as HTMLDivElement).style.display = "none";
    (document.getElementById("enrollDetails") as HTMLDivElement).style.display="none"
    login();

}
function login(){
    (document.getElementById("Maindiv") as HTMLDivElement).style.display = "none";
    (document.getElementById("Registration") as HTMLDivElement).style.display = "none";
    (document.getElementById("login") as HTMLDivElement).style.display = "none";
    (document.getElementById("menu") as HTMLDivElement).style.display = "block";
    (document.getElementById("courseDetails") as HTMLDivElement).style.display = "none";
    (document.getElementById("enrollDetails") as HTMLDivElement).style.display="none"
    

}
function coursedetails(){
    (document.getElementById("Maindiv") as HTMLDivElement).style.display = "none";
    (document.getElementById("Registration") as HTMLDivElement).style.display = "none";
    (document.getElementById("login") as HTMLDivElement).style.display = "none";
    (document.getElementById("menu") as HTMLDivElement).style.display = "none";
    (document.getElementById("courseDetails") as HTMLDivElement).style.display = "block";
    (document.getElementById("enrollDetails") as HTMLDivElement).style.display="none"


}
function Enrolldetails(){
    (document.getElementById("Maindiv") as HTMLDivElement).style.display = "none";
    (document.getElementById("Registration") as HTMLDivElement).style.display = "none";
    (document.getElementById("login") as HTMLDivElement).style.display = "none";
    (document.getElementById("menu") as HTMLDivElement).style.display = "none";
    (document.getElementById("courseDetails") as HTMLDivElement).style.display = "none";
    (document.getElementById("enrollDetails") as HTMLDivElement).style.display="block";
}
function Enroll(){
    alert("Thank you!!!!")
    Enrolldetails();
}