//objetos

//Funcion anonima
(function(){
    self.Board = function(width, height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
    }

    self.Board.prototype = {
        //Retorna pelotas y barras del juego
        get elements(){
            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }

})();

//Funcion anonima para dibujar tablero
(function(){
    self.BoardView = function(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d"); //Objeto por el cual podemos dibujar en canvas
    }
})();

self.addEventListener("load", main);

//Ejecuta todos los elementos
function main(){
    var board = new Board(800, 400);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);
}