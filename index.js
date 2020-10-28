function alertFunction()
{
    alert("This is an alert box");
}

function calculate()
{
    let x = document.getElementById("txt1").value;
    let y = document.getElementById("txt2").value;
    //Used Number because they are actually strings not numbers.
    let z = Number(x) + Number(y);
    document.getElementById("demo").innerHTML = z;
}

function showDate()
{
    let x = document.getElementById("myDate").value;
    document.getElementById("demo").innerHTML = x;
}

function anotherDate()
{
    var date = new Date();
    document.getElementById("test").innerHTML = date;

}