
  const circle = document.getElementById('rotating-circle');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const reverseBtn = document.getElementById('reverseBtn');
        const speedSlider = document.getElementById('speedSlider');
        const speedValue = document.getElementById('speedValue');
        

        let rotation = 0;
        let animationId = null;
        let isAnimating = true;
        let direction = 1; 
        let speed = 5; 
        
        speedValue.textContent = speed;
        
        function animateCircle() {
            rotation += direction * speed;
            circle.style.transform = `rotate(${rotation}deg)`;
            
            if (isAnimating) {
                animationId = requestAnimationFrame(animateCircle);
            }
        }
        
        function startAnimation() {
            if (!isAnimating) {
                isAnimating = true;
                animateCircle();
                startBtn.innerHTML = '<i class="fas fa-play"></i> En cours...';
                startBtn.disabled = true;
                startBtn.style.opacity = '0.7';
            }
        }
        
        function stopAnimation() {
            isAnimating = false;
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            startBtn.innerHTML = '<i class="fas fa-play"></i> Démarrer';
            startBtn.disabled = false;
            startBtn.style.opacity = '1';
        }
        
        function reverseAnimation() {
            direction *= -1;
            reverseBtn.innerHTML = direction === 1 
                ? '<i class="fas fa-retweet"></i> Sens horaire' 
                : '<i class="fas fa-retweet"></i> Sens anti-horaire';
        }
        
        function updateSpeed() {
            speed = parseInt(speedSlider.value);
            speedValue.textContent = speed;
        }
        
        startBtn.addEventListener('click', startAnimation);
        stopBtn.addEventListener('click', stopAnimation);
        reverseBtn.addEventListener('click', reverseAnimation);
        speedSlider.addEventListener('input', updateSpeed);
        
        window.addEventListener('load', () => {
            startAnimation();
        });
        
        document.querySelectorAll('.info-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 10px 20px rgba(0, 180, 216, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });