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


var isAct=false;
var index=0;
var topX_logo = document.querySelectorAll(".topX_logo");

var bottoms_over = document.querySelector(".bottoms_over");
var flag2=true;

mouseWheel(document,function(e,isDown){
	console.log(index)
	var bdwidth=document.documentElement.clientWidth;
	
		if(isAct){return}
		isAct=true;
		setTimeout(function(){
			isAct=false;
		},1000)
		if(isDown){
			index++;
			if(index==4){
				bottoms_over.style.display = "block";
				bottoms_over.className = "bottoms_over ani_bottomshow";
			}
			
			index=index>$(".top").length-1?$(".top").length-1:index;
			
		}else{
				if(index==4&flag2==true){
					bottoms_over.className = "bottoms_over ani_bottomshow2";
					flag2=false;
					console.log(index)
					return;
				}
				index--;
				index=index<0?0:index;
				flag2=true;
		}
		var weizhi=-index*100+"%";
		if(index==4){
			weizhi = -350+"%";
		}
		
		$(".wrap").css("top",weizhi);
	
})

document.onkeydown=function(e){
	var bdwidth=document.documentElement.clientWidth;
	console.log(bdwidth)
	if(bdwidth>100){
		var e=e||window.event;
		if(isAct){return}
		isAct=true;
		setTimeout(function(){
			isAct=false;
		},1000)
		switch(e.keyCode){
			case 38:
				index--;
				index=index<0?0:index;			
				break;
			case 40:
				index++;
				index=index>$(".top").length-1?$(".top").length-1:index;
				break;
			default:
				break;
		}
		var weizhi=-index*100+"%";
		$(".wrap").css("top",weizhi);
	}
}
function mouseWheel(obj,fn){
	var isDown=true;
	var isFireFox=navigator.userAgent.search("Firefox")==-1?false:true;
	if(isFireFox){
		obj.addEventListener("DOMMouseScroll",wheel,false);
	}else{
		obj.onmousewheel=wheel;
	}
	function wheel(e){
		e=e||window.event;
		if(isFireFox){
			isDown=e.detail>0?true:false;
		}else{
			isDown=e.wheelDelta>0?false:true;
		}
		fn.call(obj,e,isDown);
	}
}
