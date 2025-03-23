function calculateAge(){
    let day=document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (day===""||month===""||year===""){
        document.getElementById("result").innerText="There is an unfilled value please fill those and continue";
        return;
    }
    let dob=new Date(year,month-1,day);
    let today=new Date();

    let age=today.getFullYear() - dob.getFullYear();
    let monthDifference = today.getMonth() - dob.getMonth();
    let Daydiff = today.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && Daydiff < 0)){
        age--
    }
    document.getElementById("result").innerText = `You are ${age} years old`;
}
