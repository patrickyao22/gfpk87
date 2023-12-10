window.onload = function() {

    const gameArea = document.getElementById('game-area');
    
    const gameWidth = 10;
    
    const gameHeight = 20;
    
    const blockSize = 30;
    
    gameArea.style.width = `${gameWidth * blockSize}px`;
    
    gameArea.style.height = `${gameHeight * blockSize}px`;
    
    function drawBlock(x, y, color) {
    
    const block = document.createElement('div');
    
    block.style.width = `${blockSize}px`;
    
    block.style.height = `${blockSize}px`;
    
    block.style.backgroundColor = color;
    
    block.style.position = 'absolute';
    
    block.style.left = `${x * blockSize}px`;
    
    block.style.top = `${y * blockSize}px`;
    
    gameArea.appendChild(block);
    
    }
    
    function clearBlock(x, y) {
    
    const block = document.elementFromPoint(x * blockSize + 1, y * blockSize + 1);
    
    if (block !== gameArea) {
    
    block.parentNode.removeChild(block);
    
    }
    
    }
    
    const shapes = [
    
    [[1, 1, 1, 1]],
    
    [[1, 1], [1, 1]],
    
    [[1, 1, 0], [0, 1, 1]],
    
    [[0, 1, 1], [1, 1, 0]],
    
    [[1, 1, 1], [0, 1, 0]],
    
    [[1, 1, 1], [1, 0, 0]],
    
    [[1, 1, 1], [0, 0, 1]]
    
    ];
    
    let currentShape = null;
    
    let currentX = 0;
    
    let currentY = 0;
    
    function generateShape() {
    
    const randomIndex = Math.floor(Math.random() * shapes.length);
    
    currentShape = shapes[randomIndex];
    
    currentX = Math.floor((gameWidth - currentShape[0].length) / 2);
    
    currentY = 0;
    
    drawShape();
    
    }
    
    function drawShape() {
    
    for (let y = 0; y < currentShape.length; y++) {
    
    for (let x = 0; x < currentShape[y].length; x++) {
    
    if (currentShape[y][x] === 1) {
    
    drawBlock(currentX + x, currentY + y, 'blue');
    
    }
    
    }
    
    }
    
    }
    
    function clearShape() {
    
    for (let y = 0; y < currentShape.length; y++) {
    
    for (let x = 0; x < currentShape[y].length; x++) {
    
    if (currentShape[y][x] === 1) {
    
    clearBlock(currentX + x, currentY + y);
    
    }
    
    }
    
    }
    
    }
    
    function moveLeft() {
    
    clearShape();
    
    currentX--;
    
    drawShape();
    
    }
    
    function moveRight() {
    
    clearShape();
    
    currentX++;
    
    drawShape();
    
    }
    
    function moveDown() {
    
    clearShape();
    
    currentY++;
    
    drawShape();
    
    }
    
    document.addEventListener('keydown', function(event) {
    
    if (event.key === 'ArrowLeft') {
    
    moveLeft();
    
    } else if (event.key === 'ArrowRight') {
    
    moveRight();
    
    } else if (event.key === 'ArrowDown') {
    
    moveDown();
    
    }
    
    });
    
    function gameLoop() {
    
    clearShape();
    
    currentY++;
    
    drawShape();
    
    setTimeout(gameLoop, 1000);
    
    }
    
    generateShape();
    
    gameLoop();
    
    }