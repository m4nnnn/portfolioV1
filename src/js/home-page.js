document.addEventListener('DOMContentLoaded', () => {

    const minecraftBlock = document.getElementById('minecraftBlock');
    const textures = ['grass-texture', 'cobblestone-texture', 'mangrove-texture', 'ice-texture', 'jacko-texture'];
    let currentTextureIndex = 0;
    
    const clickSound = new Audio('sounds/grass2.wav');

    minecraftBlock.classList.add(textures[currentTextureIndex]);
    
    minecraftBlock.style.transform = 'scale(1)'; 

    
    minecraftBlock.addEventListener('click', () => {

        clickSound.currentTime = 0;
        clickSound.play().catch(error => {
            console.warn("Erreur de lecture audio : ", error);
        });

        minecraftBlock.classList.add('is-mined');
        
        setTimeout(() => {
            minecraftBlock.classList.remove('is-mined');
        }, 100); 

        minecraftBlock.classList.remove(textures[currentTextureIndex]);

        currentTextureIndex = (currentTextureIndex + 1) % textures.length;

        minecraftBlock.classList.add(textures[currentTextureIndex]);
    });

}); 