 // Console log confirmation to make sure everything loads correctly
        document.addEventListener("DOMContentLoaded", () => {
            console.log("hopefully this works site successfully loaded!");
            
            // Example script functionality: Dynamic hover log
            const cards = document.querySelectorAll('.game-card');
            cards.forEach((card, index) => {
                card.addEventListener('mouseenter', () => {
                    console.log(`Hovering over Game Card ${index + 1}`);
                });
            });
        });
