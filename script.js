const scienceFacts = [
    "Water is the only substance that is found naturally on Earth in all three physical states: solid, liquid, and gas.",
    "The human brain contains about 86 billion neurons.",
    "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
    "A group of flamingos is called a 'flamboyance'.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "The speed of light is approximately 299,792 kilometers per second.",
    "Jellyfish are 95% water and have been around for over 500 million years.",
    "Venus is the hottest planet in our solar system, with surface temperatures around 467°C (872°F).",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "Octopuses have three hearts and blue blood."
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    updateCard();
    
    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % scienceFacts.length;
        updateCard();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + scienceFacts.length) % scienceFacts.length;
        updateCard();
    });
});

function updateCard() {
    const factElement = document.querySelector('.card-back p');
    factElement.textContent = scienceFacts[currentIndex];
}
