
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

// adicione um event listener na linha 47 e chame as funções necessárias → window.addEventListener("keydown", myKeyDown):
window.addEventListener("keydown", myKeyDown);
// o evento keydown é acionado sempre que uma tecla é pressionada e chama a função myKyDown
// window representa a tela inteira

//definda a função myKeyDown → myKeyDown(e):
function  myKeyDown(e)
{
//obtenha o o valor da tecla pressionada com e.keyCode e armazene na variável keyPressed:
keyPressed =   e.keyCode;
//imprima o valor de keyPressed no console:
console.log(keyPressed);
// Condição a se testar → e.shiftKey == true e keyPressed == '80':
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p e shift pressionadas juntas");
	// aumente as variáveis (largura e altura) da linha 63 e 64 em 10:
	blockImageWidth = blockImageWidth + 10;
	blockImageHeight = blockImageHeight + 10;
	//Exiba a width da imagem do bloco o elemento html com a id = currentWidth
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	//Exiba a height da imagem do bloco o elemento html com a id = currentHeight
	document.getElementById("currentHeight").innerHTML = blockImageHeight;	
}
//Complete a linha 71 sabendo que keyPressed == 77 significa que a tecla M é pressionada
if(e.shiftKey && keyPressed == '77')
{
	//console a frase → m e shift pressionadas juntas
	console.log("m e shift presssionadas juntas");
	// diminua as variáveis (largura e altura) da linha 76 e 77 em 10:
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	//Exiba a width da imagem do bloco o elemento html com a id = currentWidth
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	//Exiba a height da imagem do bloco o elemento html com a id = currentHeight
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}

	if(keyPressed == '38') //condição que verifica se o valor variável keyPressed é correspondente ao código da tecla pressionada
	{
		up(); //chama a função up
		console.log("cima"); //consola o nome da tecla
	}
    if(keyPressed == '40') //condição que verifica se o valor variável keyPressed é correspondente ao código da tecla pressionada
	{
		down(); //chama a função down
		console.log("baixo"); //consola o nome da tecla
	}
    if(keyPressed == '37') //condição que verifica se o valor variável keyPressed é correspondente ao código da tecla pressionada
	{
		left(); //chama a função left
		console.log("esquerda"); //consola o nome da tecla
	}
    if(keyPressed == '39') //condição que verifica se o valor variável keyPressed é correspondente ao código da tecla pressionada
	{
		right(); //chama a função direita
		console.log("right"); //consola o nome da tecla
	}

	//com base na sintaxe das linhas 84 a 88,configure as teclas down, left e right
	//down = 40 = baixo
	//left = 37 = esquerda
	//right = 39 = direita

	
	if(keyPressed == '87') //verifica se o valor da tecla é igual ao da tecla W, ou seja, 87
	{
		newImage('wall.jpg');  //chama a função newImage e utiliza a imagem correspondente (dentro do parênteses)
		console.log("w"); //consola a letra W
	}

	if(keyPressed == '71')
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
    if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
    if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
    if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}

	// com base na sintaxe das linhas 96 a 100, configure as letras D, U e C
	//D = 68 = dark_green.png
	//U = 85 = unique.png
	//C = 67 = cloud.jpg
	
	
}

function up()
{
	if(playerY >= 0){
		playerY = playerY - blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("quando a tecla direcional cima for pressionada, x = " + playerX + ", y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}


function down()
{
	if(playerY <= 500){
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("quando a tecla direcional baixo for pressionada, x = " + playerX + ", y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >= 0){
		playerX = playerX - blockImageWidth;
		console.log("altura da imagem do bloco = " + blockImageWidth);
		console.log("quando a tecla direcional esquerda for pressionada, x = " + playerX + ", y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <= 850){
		playerX = playerX + blockImageWidth;
		console.log("altura da imagem do bloco = " + blockImageWidth);
		console.log("quando a tecla direcional direita for pressionada, x = " + playerX + ", y = " + playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
