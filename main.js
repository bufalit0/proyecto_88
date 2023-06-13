
// Crea la variable de canvas 
canvas = new fabric.Canvas("myCanvas")

//Establece las posiciónes para la pelota y el agujero.
var ball_y = 0;
var ball_x = 0;

var hole_y = 400;
var hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_objects = Img;
		
		hole_objects.scaleToWidth(150);
		hole_objects.scaleToHeight(140);
		hole_objects.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_objects);
		});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_objects = Img;
		 
		 ball_objects.scaleToWidth(50);
		 ball_objects.scaleToHeight(50);
		 ball_objects.set({
			 top:ball_y,
			 left:ball_x
		 });
		 canvas.add(ball_objects);});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/
	if((ball_x==hole_x)&&(ball_y==hole_y)){ canvas.remove(ball_obj); console.log("¡Lo lograste!"); document.getElementById("hd3").innerHTML="¡Lo lograste!"; document.getElementById("myCanvas").style.borderColor="red"; }

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
			ball_y = ball_y - block_image_height;
	
			canvas.remove(ball_objects);
		   new_image();
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
	
			canvas.remove(ball_objects);
		   new_image();
		}
	 }
	

	function left()
	{
		if(ball_x >5)
		{	
			ball_x = ball_x - block_image_height;	
			canvas.remove(ball_objects);
			   new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			{	
				ball_x = ball_x + block_image_height;	
				canvas.remove(ball_objects);
				   new_image();
				
			}
		}
	}
	
}

