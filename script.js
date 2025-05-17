document.getElementById('randomFruitBtn').addEventListener('click', () => {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(t => t.style.outline = 'none'); // убираем выделение с других
    const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
    randomTile.scrollIntoView({ behavior: 'smooth', block: 'center' });
    randomTile.style.outline = '3px solid #00ffcc';
  });
  