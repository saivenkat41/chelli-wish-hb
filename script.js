document.addEventListener('DOMContentLoaded', function() {
    // Create confetti
    function createConfetti() {
        const colors = ['#ff6b6b', '#ffb8b8', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(confetti);
        }
    }
    
    // Surprise button
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surprise = document.getElementById('surprise');
    
    surpriseBtn.addEventListener('click', function() {
        surprise.classList.toggle('hidden');
        if (!surprise.classList.contains('hidden')) {
            surprise.classList.add('show');
            createConfetti();
            // Change photo to a more festive one
            document.getElementById('birthdayPhoto').src = "./harshini.jpg";
        }
    });
    
    // Music control
    const musicControl = document.getElementById('musicControl');
    const birthdayMusic = document.getElementById('birthdayMusic');
    let musicPlaying = false;
    
    musicControl.addEventListener('click', function() {
        if (musicPlaying) {
            birthdayMusic.pause();
            musicControl.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            birthdayMusic.play();
            musicControl.innerHTML = '<i class="fas fa-pause"></i>';
        }
        musicPlaying = !musicPlaying;
    });
    
    // Animate wish cards on load
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Change cursor to party emoji when over cake
    const cakes = document.querySelectorAll('.cake');
    cakes.forEach(cake => {
        cake.addEventListener('mouseover', () => {
            document.body.style.cursor = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><text x=\"0\" y=\"20\" font-size=\"20\">🎉</text></svg>'), auto";
        });
        cake.addEventListener('mouseout', () => {
            document.body.style.cursor = 'default';
        });
    });
});