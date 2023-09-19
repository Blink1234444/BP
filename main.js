var lienzo = new fabric.Canvas('miLienzo')

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var bloque_objeto_imagen= "aa.avif";

function nueva_imagen(get_image)
{
		fabric.Image.fromURL(get_image, function(Img) {
		bloque_objeto_imagen = Img;
		bloque_objeto_imagen.scaleToWidth(block_image_width);
		bloque_objeto_imagen.scaleToHeight(block_image_height);
		bloque_objeto_imagen.set({top:block_y,left:block_x});
		lienzo.add(bloque_objeto_imagen);
		});
}

window.addEventListener("keydown", mi_TeclaPulsada);

function mi_TeclaPulsada(e)
{
teclaPresionada = e.keyCode;
console.log(teclaPresionada);

	if(teclaPresionada == 'J') 
	{
		block_x = 10;
		nueva_imagen('Jichu.jpj');
		
	}
	if(teclaPresionada == 'N')
	{
		block_x = 310;
		nueva_imagen('Yeah.webp');
		
	}
	
	if(teclaPresionada == 'R')
	{
		block_x = 560;
		nueva_imagen('ardilla.jpg');
		
	}
	if(teclaPresionada == 'L')
	{
		block_x = 880;
		nueva_imagen('Lisooni');
		
	}
	if(teclaPresionada == 'B')
	{
		block_x = 1040;
		nueva_imagen('blink.png');
		
	}
	
}





