var cxt = document.getElementById("border").getContext("2d");
var gb = document.getElementById("gbbody").getContext("2d");

function drawGbBody(){
	gb.fillStyle="#DEDEDE";
	// Upper Left Corner
	gb.beginPath();
	gb.moveTo(40,40);
	gb.arc(40,40,40,Math.PI,3/2*Math.PI,false);
	gb.closePath();
	gb.fill();
	// Upper Right Corner
	gb.beginPath();
	gb.moveTo(750,40);
	gb.arc(750,40,40,3/2*Math.PI,0,false);
	gb.closePath();
	gb.fill();
	// Top border
	gb.fillRect(40,0,710,40);
	gb.fillRect(0,40,790,920);
	//Lines
	gb.beginPath();
	gb.moveTo(62,0);
	gb.lineTo(62,46);
	gb.moveTo(728,0);
	gb.lineTo(728,46);
	gb.closePath();
	gb.lineWidth = 10;
	gb.strokeStyle = "#C9C9C9";
	gb.stroke();	
	gb.moveTo(0,46);
	gb.lineTo(790,46);
	gb.lineWidth = 5;
	gb.stroke();
	//Switch
	gb.fillStyle = "#C9C9C9";
	gb.moveTo(95,23);
	gb.arc(95,23,13,3/2*Math.PI,1/2*Math.PI,true);
	gb.moveTo(225,23);
	gb.arc(225,23,13,3/2*Math.PI,1/2*Math.PI,false);
	gb.fill();
	gb.fillRect(95,10,130,26);
	gb.fillRect(95,0,12,12);
	gb.fillRect(112,0,12,12);
	gb.fillRect(129,0,12,12);
	//Triangles
	gb.fillStyle = "#DEDEDE";
	gb.beginPath();
	gb.moveTo(95,23);
	gb.lineTo(108,16);
	gb.lineTo(108,30);
	gb.lineTo(95,23);
	gb.closePath();
	gb.fill();	
	gb.beginPath();
	gb.moveTo(221,23);
	gb.lineTo(208,16);
	gb.lineTo(208,30);
	gb.lineTo(221,23);
	gb.closePath();
	gb.fill();
	//Switch Label
	gb.font = "bold 18px 'Century Gothic'";
	gb.textBaseline = "middle";
	gb.fillText("OFF � ON", 118, 22);
	
	//GB Body label
	gb.fillStyle="#453E67";
	gb.font = "bold 24px 'Century Gothic'";
	gb.textBaseline = "middle";
	gb.save();
	gb.translate(100,580);
	gb.scale(1.4,1);
	gb.fillText("Loltendo", 0,0);
	gb.restore();
	gb.font = "italic 28px 'Century Gothic'";
	gb.textBaseline = "middle";
	gb.save();
	gb.translate(253,576);
	gb.scale(1.4,1.4);
	gb.fillText("SharpShooter", 0,0);
	gb.restore();
}

function drawLed(on){
	cxt.beginPath();
	if(on)
		cxt.fillStyle="#9F5C5C";
	else
		cxt.fillStyle="#9A5959";
	cxt.arc(40,150,6,Math.PI*2,0,true);
	cxt.closePath();
	cxt.fill();
}

function flash(){
	var on;
	if((Math.floor(Math.random()*11)%2) == 1){
		on = true;
	}else{
		on = false;
	}
	drawLed(on);
}

function drawGbBorder(){
	cxt.fillStyle="#606c7a";
	// Upper Left Corner
	cxt.beginPath();
	cxt.moveTo(20,20);
	cxt.arc(20,20,20,Math.PI,3/2*Math.PI,false);
	cxt.closePath();
	cxt.fill();
	// Top border
	cxt.fillRect(20,0,640,20);
	// Upper Right Corner
	cxt.beginPath();
	cxt.moveTo(660,20);
	cxt.arc(660,20,20,3/2*Math.PI,0,false);
	cxt.closePath();
	cxt.fill();
	// Main rect
	cxt.fillRect(0, 20, 680, 300);
	cxt.fillRect(0, 320, 580, 80);
	// Bottom Left Corner
	cxt.beginPath();
	cxt.moveTo(20,400);
	cxt.arc(20,400,20,Math.PI,Math.PI/2,true);
	cxt.closePath();
	cxt.fill();
	// Bottom Right Corner
	cxt.beginPath();
	cxt.moveTo(580,320);
	cxt.arc(580,320,100,0,Math.PI/2,false);
	cxt.closePath();
	cxt.fill();
	// Bottom border
	cxt.fillRect(20, 400, 560, 20);

	cxt.beginPath();
	cxt.moveTo(35,20);
	cxt.lineTo(215,20);	
	cxt.moveTo(570,20);
	cxt.lineTo(650,20);
	cxt.closePath();
	cxt.strokeStyle = "#B5017E";
	cxt.stroke();	

	cxt.beginPath();
	cxt.moveTo(35,29);
	cxt.lineTo(215,29);
	cxt.moveTo(570,29);
	cxt.lineTo(650,29);
	cxt.closePath();
	cxt.strokeStyle = "#5A3B7E";
	cxt.stroke();

	// Title
	cxt.fillStyle="#A2AABA";
	cxt.font = "14px 'Century Gothic'";
	cxt.textBaseline = "middle";
	cxt.save();
	cxt.translate(227,26);
	cxt.scale(1.4,1.2);
	cxt.fillText("DOT  MATRIX  WITH  STEREO  SOUND", 0, 0);
	cxt.restore();

	//Led - label
	cxt.fillStyle="#A2AABA";
	cxt.font = "12px 'Century Gothic'";
	cxt.textBaseline = "middle";
	cxt.fillText("BATTERY", 23, 170);
	
	setInterval("flash()", 100);
}

drawGbBody();
drawGbBorder();