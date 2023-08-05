let app;
    let sprite;

    // Function to resize the canvas and update the sprite scale
    function resizeCanvas() {
      const containerWidth = document.getElementById('pixi-container').offsetWidth;
      const containerHeight = document.getElementById('pixi-container').offsetHeight;

      app.renderer.resize(containerWidth, containerHeight);
      sprite.x = 0;
    }

    // Event listener for window resize
    window.addEventListener('resize', resizeCanvas);

    // Initialize the PIXI application and the sprite
    function initializePIXI() {
      const containerWidth = document.getElementById('pixi-container').offsetWidth;
      const containerHeight = document.getElementById('pixi-container').offsetHeight;

      app = new PIXI.Application({ width: containerWidth, height: containerHeight });
      document.getElementById('pixi-container').appendChild(app.view);

      sprite = PIXI.Sprite.from('https://api.dicebear.com/6.x/adventurer/svg?seed=Coco');
      app.stage.addChild(sprite);

      sprite.x = 0;

      resizeCanvas();

      // Add a ticker callback to move the sprite from left to right
      app.ticker.add((delta) => {
        sprite.x += 2; // You can adjust this value to control the speed of movement

        if (sprite.x >= containerWidth) {
          sprite.x = 0;
        }
      });
    }

    initializePIXI();