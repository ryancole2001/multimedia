window.onload = function(){
	var paper = new Raphael(0, 0, 900, 600);

	var backGround = paper.rect(0, 0, 900, 600);

	backGround.attr({fill: "blue"});

/* Comment - add your code here*/

	var ball = paper.circle(50,50,35);
	var ball = {
		direction: normal
	}

	function bounce_drop1() {


		ball.animate({cy: 570 , cx: 400} , 'ease-in', bounce_up1);
	}

	function bounce_up1() {

		ball.animate({cy: 50, cx: 750}, 500, 'ease-out', bounce_drop2);
	}