var canvas = document.getElementById("canvastriangle");
var ctx = canvas.getContext("2d");

	
	
    
		ctx.beginPath();
		ctx.moveTo(250, 50);
		ctx.lineTo(450, 350);
		ctx.lineTo(50, 350);
		
		ctx.fillStyle = "#7AA35F";
		ctx.fill();

		ctx.font = "30px bree serif";

		ctx.fillText("HTML",212,45);
		ctx.fillText("CSS",450,350);
		ctx.fillText("JS",18,350);

