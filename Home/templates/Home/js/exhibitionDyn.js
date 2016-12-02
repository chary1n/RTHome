var comeIn_1 = document.querySelector(".comeIn_1");
var moreMenu_1 = document.getElementById("moreMenu_1");
var comeIn_2 = document.querySelector(".comeIn_2");
var moreMenu_2 = document.getElementById("moreMenu_2");
var comeIn_3 = document.querySelector(".comeIn_3");
var moreMenu_3 = document.getElementById("moreMenu_3");
comeIn_1.onmouseenter = function(){
	moreMenu_1.style.display = "block";
	moreMenu_2.style.display = "none";
	moreMenu_3.style.display = "none";
}
moreMenu_1.onmouseleave = function(){
	moreMenu_1.style.display = "none";
}
comeIn_2.onmouseenter = function(){
	moreMenu_2.style.display = "block";
	moreMenu_1.style.display = "none";
	moreMenu_3.style.display = "none";
}
moreMenu_2.onmouseleave = function(){
	moreMenu_2.style.display = "none";
}
comeIn_3.onmouseenter = function(){
	moreMenu_3.style.display = "block";
	moreMenu_1.style.display = "none";
	moreMenu_2.style.display = "none";
}
moreMenu_3.onmouseleave = function(){
	moreMenu_3.style.display = "none";
}

var xialanavi = document.querySelector("#xialanavi");
var xialaxx = document.querySelector("#xialaxx");
var xiala = document.querySelector("#xiala");
var lis2 = document.querySelectorAll(".lis2");
var flag = false;
xiala.onclick = function(){
	if(flag==false){
		xialanavi.style.display = "block";
		flag=true;
	}else{
		xialanavi.style.display = "none";
		flag = false;
	}
}
for(var i=0;i<lis2.length;i++){
	(function(j){
		lis2[j].onclick = function(){
			console.log(j);
			for(var k=0;k<4;k++){
				lis2[k].style.backgroundColor = "black";
			}
			lis2[j].style.backgroundColor = "#770e12";
		}
		
	})(i)
}