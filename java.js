<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inteface De Test</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="javascript.js" defer></script>

</head>


<body>

    <header>
        <div class="logo">
            <i class="fas fa-circle-notch"></i>
            <h1>Test</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#"><i class="fas fa-home"></i> Accueil</a></li>
                <li><a href="#"><i class="fas fa-play-circle"></i> Test</a></li>
                <li><a href="#"><i class="fas fa-cogs"></i> Paramètres</a></li>
                <li><a href="#"><i class="fas fa-info-circle"></i> À propos</a></li>
            </ul>
        </nav>
    </header>
    <main class="container">
        <div class="title-section">
            <h2>TEST</h2>
        </div>
        
        <div class="animation-container">
            <div class="circle-wrapper">
                <div id="rotating-circle"></div>
                <div class="circle-center">
                    <i class="fas fa-sync-alt"></i>
                </div>
            </div>
            
            <div class="controls">
                <button id="startBtn">
                    <i class="fas fa-play"></i> Démarrer
                </button>
                <button id="stopBtn">
                    <i class="fas fa-stop"></i> Arrêter
                </button>
                <button id="reverseBtn">
                    <i class="fas fa-retweet"></i> Inverser
                </button>
            </div>
            
            <div class="speed-control">
                <label for="speedSlider">Vitesse de rotation :</label>
                <input type="range" id="speedSlider" min="1" max="20" value="5">
                <span id="speedValue" class="speed-value">5</span>
            </div>
        </div>
        
       
    </main>

    <footer>
        <div class="footer-content">
            <div class="social-links">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-codepen"></i></a>
                <a href="#"><i class="fab fa-js-square"></i></a>
                <a href="#"><i class="fab fa-html5"></i></a>
                <a href="#"><i class="fab fa-css3-alt"></i></a>
            </div>
            <div class="copyright">
                <p>&copy; 2023 Interface avec Cercle Tournant. Tous droits réservés.</p>
            </div>
        </div>
    </footer>


</body>
</html>