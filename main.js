var NamesOfPeople = [];

function submit()
{
    var GuestName = document.getElementById("name1").value;
NamesOfPeople.push(GuestName);
console.log(GuestName);
console.log(NamesOfPeople);
var lenghtOfName = NamesOfPeople.lenght;
console.log (lenghtOfName);
document.getElementById("displayName").innerHTML = NamesOfPeople.toString();
}
function sorting(){
    NamesOfPeople.sort();
    var i = NamesOfPeople.join("<br>");
    console.log(NamesOfPeople);
    document.getElementById("sorted").innerHTML = i.toString();
}

function show()
{
    var i = NamesOfPeople.join("<br>");
    console.log(NamesOfPeople);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sortButton").style.display = "block" 
}

function searching()
{
    var s = document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<NamesOfPeople.length;j++)
    {
        if (s==NamesOfPeople[j])
        {
            found=found+1;
        }
    }

    document.getElementById("p2").innerHTML = "Nome encontrado "+found+" vez(es)";
    console.log("Nome encontrado "+found+" vez(es)");


}

