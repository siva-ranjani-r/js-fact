/*var show=document.createElement("button");
document.body.appendChild(show);
show.innerHTML="span";
show.onclick=function()
{
	var span=document.createElement("span");
	document.body.appendChild(span);
	var btn=document.createElement("button");
	span.appendChild(btn);
	btn.innerHTML="button";
}*/
var flex=document.createElement("div");
document.body.appendChild(flex);
flex.setAttribute("style","background-color:teal");
var input=document.createElement("input");
flex.appendChild(input);
input.setAttribute("id","num");
input.style.border="2px solid black";
input.style.backgroundColor="lightgreen";
input.setAttribute("placeholder","enter number :");


var check_element=document.createElement("button");
flex.appendChild(check_element);
check_element.innerHTML="check";
check_element.setAttribute("type","button");
check_element.style.backgroundColor="pink";
check_element.style.border="2px solid black";
check_element.style.margin="50px";


var clear=document.createElement("button")
flex.appendChild(clear);
clear.setAttribute("id","reset");
clear.innerHTML="clear";
clear.style.border="2px solid black";

check_element.onclick=function()
{
var show=document.createElement("p");
document.body.appendChild(show);
show.setAttribute("style","background-color:yellow");
show.setAttribute("id","siva");
var number=document.getElementById("num").value;

			var fact=1;
			for(i=1;i<=number;i++)
			{
				fact=fact*i;
	
			}
			document.getElementById("siva").innerHTML=fact;
			
			
}
clear.onclick=function()
{
	document.getElementById("num").value=" ";

}
