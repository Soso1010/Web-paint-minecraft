//obtenha a referência do canvas com fabric.Canvas() e armazene dentro de uma variável chamada canvas:
var canvas = new fabric.Canvas('myCanvas');


//defina a width e height iniciais das imagens dos blocos como 30 e as armazene nas variáveis blockImageWidth e blockImageHeight:
blockImageWidth = 30;
blockImageHeight = 30;

//defina as coordenadas x e y iniciais para o personagem como 10 e as armazene nas variáveis playerX e playerY:
playerX = 10;
playerY = 10;

//Defina uma variável chamada playerObject com o valor vazio (essa variável será utilizada para armazenar o objeto da imagem do personagem):
 var playerObject = "";
 var blockImageObject = "";

//a função playerUpdate adiciona a imagem do personagem (essa função enviará a imagem do jogador no canvas).
function playerUpdate()    //define a função e fornece o nome playerUpdate():
{
    //define uma função chamada fabric.Image.fromURL() de fabric.js para enviar uma imagem ao canvas:
    fabric.Image.fromURL("player.png", function(Img) {
    //O código acima é o padrão para adicionar imagens ao canvas
    //fabric: Esse será o nome da biblioteca que utilizamos
    //Image: Isso diz que enviamos uma imagem
    //fromURL: Esse contém a URL da imagem e a função para enviar imagens
    //“player.png”: Essa é a imagem
    //function(Img): Essa é a função que enviará player.png ao canvas
    //Img: Esse é o objeto da imagem definida por padrão
    playerObject = Img; //essa variável atuará como identificadora da imagem e para manipular a imagem do jogador
    playerObject.scaleToWidth(150); //adiciona a width à imagem do personagem com a variável playerObject
    //playerObject é o objeto da imagem.
    //scanToWidth(150) ajustará a width da imagem (não é obrigatório ser 150, pode ser qualquer número)
	playerObject.scaleToHeight(140); //adiciona a height à imagem do personagem com a variável playerObject
    //playerObject é o objeto da imagem.
    //scanToHeight(140) ajustará a width da imagem (não é obrigatório ser 140, pode ser qualquer número)
	playerObject.set({ //ajusta as coordenadas x e y da imagem
        //playerObject é o objeto da imagem.
        //set ajustaremos as coordenadas x e y da imagem do personagem.
	top:playerY, //top representa a coordenada y.
	left:playerX //left representa a coordenada x.
	});
	canvas.add(playerObject); //adiciona a imagem ao canvas
    //canvas é a variável criada no início, que contém o elemento canvas.
    //add(playerObject): Essa é a função para adicionar os desenhos ao canvas.
    //playerObject É o objeto imagem do personagem.

	});
}

//função newImage (para adicionar as diferentes imagens de acordo com as teclas específicas pressionadas)
function newImage(getImage) //define a função (getImage é a variável que conterá as respectivas imagens dos blocos de acordo com as teclas pressionadas)
{
	fabric.Image.fromURL(getImage, function(Img) { //função de fromURL() fabric.js para enviar imagens ao canvas.
	blockImageObject = Img; //Essa variável atuará como identificadora da imagem e realizar manipulações nas imagens dos blocos

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
    //blockImageObject é o objeto da imagem.
    //scanToWidth(blockImageWidth) ajustará a width da imagem.
    //scanToHeight(blockImageHeight) ajustará a height da imagem.
	blockImageObject.set({ //blockImageObject é o objeto da imagem e set ajustará as coordenadas x e y da imagem do personagem.
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject); //adiciona a imagem ao canvas com a função canvas.add().
    //canvas é a variável criada no início que contém o elemento canvas.
    //add(blockImageObject): Essa é a função para adicionar qualquer coisa ao canvas.
    //blockImageObject é o objeto da nova imagem.

	});

}