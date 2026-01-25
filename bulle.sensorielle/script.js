/**
 * 🫧 Bulle Sensorielle - Application JavaScript Principale
 * 
 * Une application web thérapeutique conçue avec tendresse pour créer un sanctuaire
 * numérique apaisant destiné aux enfants ayant des sensibilités sensorielles.
 * 
 * Cette application offre un environnement sécurisant et personnalisable avec :
 * - Mixeur de sons apaisants (bruits blancs, nature, mélodies douces)
 * - Visuels thérapeutiques interactifs (respiration guidée, couleurs flottantes)
 * - Minuteur de pause sensorielle avec visualisation progressive
 * - Système de profils sensoriels personnalisés
 * - Interface adaptative jour/nuit
 * 
 * @fileoverview Application web progressive pour enfants avec TSA, TDAH et sensibilités sensorielles
 * @version 2.7.3
 * @author Geoffroy Streit <geoffroy.streit@gmail.com>
 * @created 2024
 * @license MIT
 * 
 * @description Développée avec passion et bienveillance pour offrir un espace de calme
 *              et de régulation émotionnelle accessible à tous les enfants.
 * 
 * Technologies utilisées :
 * - JavaScript ES6+ (Vanilla)
 * - Tone.js pour la synthèse audio avancée
 * - Canvas API pour les animations visuelles fluides
 * - LocalStorage pour la persistance des profils
 * - CSS3 avec variables personnalisées pour l'accessibilité
 * 
 * @requires Tone.js
 * @requires Modern browser with ES6+ support
 * @requires Canvas API support
 * @requires Web Audio API support
 */

/**
 * 🌟 Classe principale de l'application Bulle Sensorielle
 * 
 * Cette classe orchestre avec délicatesse tous les aspects de l'expérience sensorielle :
 * la gestion audio thérapeutique, les animations visuelles apaisantes, la persistance
 * des préférences utilisateur, et l'interface adaptative.
 * 
 * @class BulleSensorielle
 * @description Cœur de l'application, conçue pour offrir une expérience utilisateur
 *              fluide et accessible aux enfants avec sensibilités sensorielles
 */
class BulleSensorielle {
    /**
     * 🎭 Constructeur de la classe BulleSensorielle
     * 
     * Initialise avec tendresse tous les composants nécessaires pour créer
     * un environnement numérique sécurisant et personnalisable.
     * 
     * @constructor
     * @description Configure l'état initial de l'application avec des valeurs
     *              par défaut optimisées pour l'accessibilité et le confort
     */
    constructor() {
        // 🏠 Navigation et état de l'interface
        this.currentSection = 'home';
        
        // 🎵 Gestion audio thérapeutique
        this.sounds = new Map();              // Collection des objets audio Tone.js
        this.activeSounds = new Set();        // Sons actuellement en lecture
        this.soundStates = new Map();         // États individuels de chaque son
        this.pausedSounds = new Set();        // Sons mis en pause par l'utilisateur
        this.audioInitialized = false;       // État d'initialisation du contexte audio
        
        // ✨ Système visuel apaisant
        this.currentVisual = 'breathing';     // Visual actuel (respiration par défaut)
        this.visualsPaused = false;          // État de pause des animations
        
        // ⏸️ Contrôle global de l'application
        this.globalPaused = false;           // Pause générale de tous les éléments
        this.lastClickedIcon = null;         // Dernier élément interagi pour feedback
        
        // 💾 Système de profils sensoriels personnalisés
        this.lastClickedSound = null;        // Dernier son sélectionné
        this.lastClickedVisual = null;       // Dernier visuel sélectionné
        this.lastClickedTimerDuration = null; // Dernière durée de minuteur
        
        // ⏰ Minuteur de pause sensorielle
        this.timer = {
            duration: 0,                     // Durée totale en secondes
            remaining: 0,                    // Temps restant
            interval: null,                  // Référence de l'intervalle
            isRunning: false                 // État de fonctionnement
        };
        
        // 🎨 Personnalisation et persistance
        this.profiles = JSON.parse(localStorage.getItem('sensoryProfiles') || '[]');
        this.theme = localStorage.getItem('theme') || 'light';
        
        // 🚀 Lancement de l'initialisation
        this.init();
    }

    /**
     * 🌅 Initialisation complète de l'application
     * 
     * Cette méthode orchestre avec délicatesse le démarrage de tous les composants
     * de l'application pour créer une expérience utilisateur harmonieuse et accessible.
     * 
     * @async
     * @method init
     * @description Séquence d'initialisation optimisée pour garantir une expérience
     *              fluide dès le premier contact avec l'application
     * 
     * @returns {Promise<void>} Promesse résolue une fois l'initialisation terminée
     * 
     * @example
     * // L'initialisation est automatiquement appelée dans le constructeur
     * const app = new BulleSensorielle(); // init() est exécutée automatiquement
     */
    async init() {
        this.setupTheme();           // 🎨 Configuration du thème visuel
        this.setupEventListeners();  // 👂 Mise en place des interactions
        this.setupAudio();           // 🎵 Initialisation du système audio
        this.setupVisuals();         // ✨ Configuration des animations visuelles
        this.setupInfoBubble();      // ℹ️ Préparation de la bulle d'information
        this.loadProfiles();         // 💾 Chargement des profils sauvegardés
        this.showMascotMessage('Bienvenue dans ta bulle sensorielle !', 3000); // 🌙 Message d'accueil
    }

    /**
     * 🎨 Configuration du système de thèmes
     * 
     * Gère avec tendresse l'alternance entre les modes jour et nuit pour
     * s'adapter aux besoins sensoriels et aux préférences de chaque enfant.
     * 
     * @method setupTheme
     * @description Applique le thème sauvegardé et configure les transitions douces
     *              entre les modes clair et sombre pour le confort visuel
     */
    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const section = e.currentTarget.dataset.section;
                this.navigateToSection(section);
            });
        });

        // Quick actions
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const action = e.currentTarget.dataset.action;
                this.navigateToSection(action);
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleTheme();
            });
        }

        // Enhanced sound controls with better event handling and audio context initialization
        document.querySelectorAll('.sound-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                const soundId = btn.getAttribute('data-sound');
                console.log(`Sound button clicked: ${soundId}`);
                
                // Track last clicked sound for profile saving
                this.lastClickedSound = soundId;
                
                await this.toggleSound(soundId);
            });
        });
        
        // Add visual playing indicator
        this.addPlayingIndicators();

        // Volume controls
        document.querySelectorAll('.volume-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const soundId = e.target.dataset.sound;
                const volume = e.target.value;
                this.setVolume(soundId, volume);
                e.target.nextElementSibling.textContent = `${volume}%`;
            });
        });

        // Visual controls
        document.querySelectorAll('.visual-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const visual = e.currentTarget.dataset.visual;
                
                // Handle fullscreen button separately
                if (btn.id === 'fullscreenBtn') {
                    this.toggleFullscreen();
                    return;
                }
                
                // Track last clicked visual for profile saving
                this.lastClickedVisual = visual;
                
                this.setVisual(visual);
            });
        });
        
        // Handle fullscreen change events
        document.addEventListener('fullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('webkitfullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('mozfullscreenchange', () => this.handleFullscreenChange());
        document.addEventListener('MSFullscreenChange', () => this.handleFullscreenChange());

        // Timer controls
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const minutes = parseInt(e.currentTarget.dataset.time);
                
                // Track last clicked timer duration for profile saving
                this.lastClickedTimerDuration = minutes;
                
                this.setTimerDuration(minutes);
            });
        });

        document.getElementById('customMinutes').addEventListener('change', (e) => {
            const minutes = parseInt(e.target.value);
            
            // Track last clicked timer duration for profile saving
            this.lastClickedTimerDuration = minutes;
            
            this.setTimerDuration(minutes);
        });

        document.getElementById('startTimer').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.startTimer();
        });

        document.getElementById('pauseTimer').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.pauseTimer();
        });

        document.getElementById('stopTimer').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.stopTimer();
        });

        // Global pause/play button
        document.getElementById('globalPauseBtn').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleGlobalPlayPause();
        });

        // App symbol button
        document.getElementById('appSymbolBtn').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.resetAppIcon();
        });

        // Initialize app icon based on theme
        this.updateAppIcon();

        // Profile management
        document.getElementById('saveProfile').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.showSaveModal();
        });

        document.getElementById('cancelSave').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.hideSaveModal();
        });

        document.getElementById('confirmSave').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.saveCurrentProfile();
        });

        // Modal background click
        document.getElementById('saveModal').addEventListener('click', (e) => {
            if (e.target.id === 'saveModal') {
                this.hideSaveModal();
            }
        });
    }

    /**
     * Setup audio system using Tone.js
     * Note: Audio context will be initialized on first user interaction
     */
    async setupAudio() {
        // Create sound generators (without starting audio context)
        this.createNoiseGenerators();
        this.createNatureSounds();
        this.createMelodies();
    }

    /**
     * Initialize audio context on first user interaction
     * This is required for Chrome's autoplay policy compliance
     */
    async initializeAudioContext() {
        if (!this.audioInitialized) {
            try {
                await Tone.start();
                this.audioInitialized = true;
                console.log('Audio context initialized successfully');
                return true;
            } catch (error) {
                console.error('Failed to initialize audio context:', error);
                return false;
            }
        }
        return true;
    }

    /**
     * Create noise generators (white, pink, brown noise)
     */
    createNoiseGenerators() {
        // White Noise
        const whiteNoise = new Tone.Noise('white').toDestination();
        whiteNoise.volume.value = -20;
        this.sounds.set('white-noise', whiteNoise);

        // Pink Noise
        const pinkNoise = new Tone.Noise('pink').toDestination();
        pinkNoise.volume.value = -20;
        this.sounds.set('pink-noise', pinkNoise);

        // Brown Noise
        const brownNoise = new Tone.Noise('brown').toDestination();
        brownNoise.volume.value = -20;
        this.sounds.set('brown-noise', brownNoise);
    }

    /**
     * Create nature sounds using Tone.js synthesizers and audio files
     */
    createNatureSounds() {
        // Campagne sound (audio file)
        const campagnePlayer = new Tone.Player({
            url: './sons/campagne.mp3',
            loop: true,
            autostart: false
        }).toDestination();
        campagnePlayer.volume.value = -20;
        this.sounds.set('campagne', campagnePlayer);

        // Forest sound (audio file)
        const forestPlayer = new Tone.Player({
            url: './sons/forest.mp3',
            loop: true,
            autostart: false
        }).toDestination();
        forestPlayer.volume.value = -20;
        this.sounds.set('forest', forestPlayer);

        // Ocean sound (audio file)
        const oceanPlayer = new Tone.Player({
            url: './sons/ocean.mp3',
            loop: true,
            autostart: false
        }).toDestination();
        oceanPlayer.volume.value = -20;
        this.sounds.set('ocean', oceanPlayer);

        // Rain sound (audio file)
        const rainPlayer = new Tone.Player({
            url: './sons/rain.mp3',
            loop: true,
            autostart: false
        }).toDestination();
        rainPlayer.volume.value = -20;
        this.sounds.set('rain', rainPlayer);

        // Chat sound (audio file)
        const chatPlayer = new Tone.Player({
            url: './sons/chat.mp3',
            loop: true,
            autostart: false
        }).toDestination();
        chatPlayer.volume.value = -20;
        this.sounds.set('chat', chatPlayer);

        // Feu sound (audio file)
        const feuPlayer = new Tone.Player({
            url: './sons/feu.mp3',
            loop: true,
            autostart: false
        }).toDestination();
        feuPlayer.volume.value = -20;
        this.sounds.set('feu', feuPlayer);

        // Underwater sound (audio file)
        const underwaterPlayer = new Tone.Player({
            url: './sons/underwater.mp3',
            loop: true,
            autostart: false
        }).toDestination();
        underwaterPlayer.volume.value = -20;
        this.sounds.set('underwater', underwaterPlayer);

        // Bubble sound for UI feedback (non-looping)
        const bubblePlayer = new Tone.Player({
            url: './sons/bubble.mp3',
            loop: false,
            autostart: false
        }).toDestination();
        bubblePlayer.volume.value = -10;
        this.sounds.set('bubble', bubblePlayer);
    }

    /**
     * Create melodic synthesizers
     */
    createMelodies() {
        // Soft piano
        const piano = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'sine' },
            envelope: { attack: 0.5, decay: 0.3, sustain: 0.8, release: 2 }
        }).toDestination();
        piano.volume.value = -15;
        this.sounds.set('piano', piano);

        // Lo-fi synth
        const lofi = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.8, decay: 0.5, sustain: 0.6, release: 3 }
        }).toDestination();
        lofi.volume.value = -18;
        this.sounds.set('lofi', lofi);

        // Berceuse melody
        const berceuse = new Tone.Player("sons/berceuse.mp3").toDestination();
        berceuse.loop = true;
        berceuse.volume.value = -10;
        this.sounds.set('berceuse', berceuse);

        // Ballade melody
        const ballade = new Tone.Player("sons/ballade.mp3").toDestination();
        ballade.loop = true;
        ballade.volume.value = -10;
        this.sounds.set('ballade', ballade);

        // Start gentle melodies
        this.startMelodyPatterns();
    }

    /**
     * Start gentle melody patterns
     */
    startMelodyPatterns() {
        // Piano melody pattern
        const pianoPattern = new Tone.Pattern((time, note) => {
            if (this.activeSounds.has('piano')) {
                this.sounds.get('piano').triggerAttackRelease(note, '2n', time);
            }
        }, ['C4', 'E4', 'G4', 'C5', 'G4', 'E4'], 'up');
        pianoPattern.interval = '2n';
        pianoPattern.start(0);

        // Lo-fi melody pattern
        const lofiPattern = new Tone.Pattern((time, note) => {
            if (this.activeSounds.has('lofi')) {
                this.sounds.get('lofi').triggerAttackRelease(note, '4n', time);
            }
        }, ['A3', 'C4', 'E4', 'A4', 'E4', 'C4'], 'upDown');
        lofiPattern.interval = '4n';
        lofiPattern.start(0);

        // Start Tone.js transport
        Tone.Transport.bpm.value = 60;
        Tone.Transport.start();
    }

    /**
     * Setup visual animations
     */
    setupVisuals() {
        this.canvas = document.getElementById('visualCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.startVisualAnimation();
    }

    /**
     * Resize canvas to fit container responsively
     */
    resizeCanvas() {
        if (!this.canvas || !this.ctx) return;
        
        const container = this.canvas.parentElement;
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        
        // Get device pixel ratio for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        
        // Calculate optimal dimensions based on container with proper padding
        const containerWidth = Math.max(rect.width - 40, 200); // Ensure minimum width
        const containerHeight = Math.max(rect.height - 40, 150); // Ensure minimum height
        
        // Maintain aspect ratio while fitting container
        let canvasWidth, canvasHeight;
        
        // Determine optimal aspect ratio based on screen size
        const isMobile = window.innerWidth <= 480;
        const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;
        
        if (isMobile) {
            // Mobile: Use 16:9 aspect ratio for better immersion
            const aspectRatio = 16 / 9;
            if (containerWidth / containerHeight > aspectRatio) {
                canvasHeight = containerHeight;
                canvasWidth = containerHeight * aspectRatio;
            } else {
                canvasWidth = containerWidth;
                canvasHeight = containerWidth / aspectRatio;
            }
        } else if (isTablet) {
            // Tablet: Use 16:10 aspect ratio
            const aspectRatio = 16 / 10;
            if (containerWidth / containerHeight > aspectRatio) {
                canvasHeight = containerHeight;
                canvasWidth = containerHeight * aspectRatio;
            } else {
                canvasWidth = containerWidth;
                canvasHeight = containerWidth / aspectRatio;
            }
        } else {
            // Desktop: Use 4:3 aspect ratio for classic feel
            const aspectRatio = 4 / 3;
            if (containerWidth / containerHeight > aspectRatio) {
                canvasHeight = Math.min(containerHeight, 600);
                canvasWidth = canvasHeight * aspectRatio;
            } else {
                canvasWidth = Math.min(containerWidth, 800);
                canvasHeight = canvasWidth / aspectRatio;
            }
        }
        
        // Ensure minimum dimensions
        canvasWidth = Math.max(canvasWidth, 200);
        canvasHeight = Math.max(canvasHeight, 150);
        
        // Set canvas display size
        this.canvas.style.width = canvasWidth + 'px';
        this.canvas.style.height = canvasHeight + 'px';
        
        // Set canvas internal resolution for crisp rendering
        this.canvas.width = canvasWidth * dpr;
        this.canvas.height = canvasHeight * dpr;
        
        // Reset and scale context to match device pixel ratio
        this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
        this.ctx.scale(dpr, dpr);
        
        // Store dimensions for animations
        this.canvasDisplayWidth = canvasWidth;
        this.canvasDisplayHeight = canvasHeight;
        
        console.log(`Canvas resized: ${canvasWidth}x${canvasHeight} (display), ${this.canvas.width}x${this.canvas.height} (internal)`);
    }

    /**
     * Start visual animation loop
     */
    startVisualAnimation() {
        const animate = () => {
            // Only render if visuals are not paused
            if (!this.visualsPaused) {
                this.renderCurrentVisual();
            }
            requestAnimationFrame(animate);
        };
        animate();
    }

    /**
     * Render the current visual
     */
    renderCurrentVisual() {
        // Don't render if visuals are paused or canvas is not ready
        if (this.visualsPaused || !this.canvas || !this.ctx) {
            return;
        }
        
        // Use display dimensions for clearing, fallback to canvas dimensions
        const width = this.canvasDisplayWidth || (this.canvas.width / (window.devicePixelRatio || 1));
        const height = this.canvasDisplayHeight || (this.canvas.height / (window.devicePixelRatio || 1));
        
        // Clear the entire canvas
        this.ctx.clearRect(0, 0, width, height);

        switch (this.currentVisual) {
            case 'breathing':
                this.renderBreathingCircle();
                break;
            case 'colors':
                this.renderFloatingColors();
                break;
            case 'stars':
                this.renderStarRain();
                break;
            case 'mandala':
                this.renderRotatingMandala();
                break;
            default:
                // Render breathing circle as default
                this.renderBreathingCircle();
                break;
        }
    }

    /**
     * Enhanced breathing guidance circle with better synchronization
     */
    renderBreathingCircle() {
        const width = this.canvasDisplayWidth || this.canvas.width;
        const height = this.canvasDisplayHeight || this.canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const time = Date.now() * 0.001;
        
        // Improved breathing cycle: 4 seconds inhale, 4 seconds exhale
        const breathingPeriod = 8; // Total cycle duration in seconds
        const cyclePosition = (time % breathingPeriod) / breathingPeriod;
        
        let breathCycle, phase, instruction;
        if (cyclePosition < 0.5) {
            // Inhale phase (0 to 0.5)
            breathCycle = cyclePosition * 2; // 0 to 1
            phase = 'inhale';
            instruction = 'Inspire lentement...';
        } else {
            // Exhale phase (0.5 to 1)
            breathCycle = 1 - ((cyclePosition - 0.5) * 2); // 1 to 0
            phase = 'exhale';
            instruction = 'Expire doucement...';
        }
        
        // Smooth easing for more natural breathing
        const easedCycle = 0.5 - 0.5 * Math.cos(breathCycle * Math.PI);
        const radius = 60 + easedCycle * 120;
        
        // Multi-layer gradient for depth
        const outerGradient = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius + 40);
        outerGradient.addColorStop(0, 'rgba(191, 219, 254, 0.1)');
        outerGradient.addColorStop(0.7, 'rgba(233, 213, 255, 0.05)');
        outerGradient.addColorStop(1, 'rgba(187, 247, 208, 0.02)');
        
        // Outer breathing aura
        this.ctx.fillStyle = outerGradient;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius + 40, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Main breathing circle
        const mainGradient = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        if (phase === 'inhale') {
            mainGradient.addColorStop(0, 'rgba(187, 247, 208, 0.9)');
            mainGradient.addColorStop(0.6, 'rgba(191, 219, 254, 0.6)');
            mainGradient.addColorStop(1, 'rgba(233, 213, 255, 0.2)');
        } else {
            mainGradient.addColorStop(0, 'rgba(233, 213, 255, 0.9)');
            mainGradient.addColorStop(0.6, 'rgba(191, 219, 254, 0.6)');
            mainGradient.addColorStop(1, 'rgba(187, 247, 208, 0.2)');
        }
        
        this.ctx.fillStyle = mainGradient;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Inner core with pulsing effect
        const coreRadius = 20 + easedCycle * 15;
        const coreGradient = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius);
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
        
        this.ctx.fillStyle = coreGradient;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Enhanced breathing text with timing
        this.ctx.fillStyle = phase === 'inhale' ? '#065f46' : '#7c2d12';
        this.ctx.font = 'bold 28px Nunito';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(instruction, centerX, centerY - 10);
        
        // Breathing timer indicator
        const timeLeft = phase === 'inhale' ? (4 - (cyclePosition * 8)) : ((cyclePosition - 0.5) * 8);
        this.ctx.font = '18px Nunito';
        this.ctx.fillStyle = '#64748b';
        this.ctx.fillText(`${Math.ceil(timeLeft)}s`, centerX, centerY + 25);
    }

    /**
     * Render floating colors
     */
    renderFloatingColors() {
        const width = this.canvasDisplayWidth || this.canvas.width;
        const height = this.canvasDisplayHeight || this.canvas.height;
        const time = Date.now() * 0.0005;

        for (let i = 0; i < 5; i++) {
            const x = (Math.sin(time + i) * 0.3 + 0.5) * width;
            const y = (Math.cos(time * 0.7 + i * 2) * 0.3 + 0.5) * height;
            const radius = 80 + Math.sin(time * 2 + i) * 30;

            const colors = [
                'rgba(191, 219, 254, 0.6)',
                'rgba(233, 213, 255, 0.6)',
                'rgba(187, 247, 208, 0.6)',
                'rgba(254, 215, 170, 0.6)',
                'rgba(252, 231, 243, 0.6)'
            ];

            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, colors[i]);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    /**
     * Enhanced star rain with beautiful gentle falling stars
     */
    renderStarRain() {
        const width = this.canvasDisplayWidth || this.canvas.width;
        const height = this.canvasDisplayHeight || this.canvas.height;
        const time = Date.now() * 0.001;

        // Create beautiful gradient night sky background
        const skyGradient = this.ctx.createLinearGradient(0, 0, 0, height);
        skyGradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
        skyGradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.8)');
        skyGradient.addColorStop(1, 'rgba(51, 65, 85, 0.6)');
        this.ctx.fillStyle = skyGradient;
        this.ctx.fillRect(0, 0, width, height);

        // Initialize stars array if not exists
        if (!this.stars) {
            this.stars = [];
            for (let i = 0; i < 80; i++) {
                this.stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height - height,
                    size: 1 + Math.random() * 3,
                    speed: 0.5 + Math.random() * 1.5,
                    twinkle: Math.random() * Math.PI * 2,
                    color: Math.random() > 0.7 ? 'golden' : 'white'
                });
            }
        }

        // Update and render stars
        this.stars.forEach((star, index) => {
            // Update position
            star.y += star.speed;
            star.x += Math.sin(time * 0.5 + index * 0.1) * 0.2; // Gentle horizontal drift
            
            // Reset star when it goes off screen
            if (star.y > height + 50) {
                star.y = -50;
                star.x = Math.random() * width;
            }
            
            // Twinkling effect
            star.twinkle += 0.02;
            const twinkleIntensity = 0.3 + 0.7 * (Math.sin(star.twinkle) * 0.5 + 0.5);
            
            // Star colors
            let starColor;
            if (star.color === 'golden') {
                starColor = `rgba(255, 215, 0, ${twinkleIntensity})`;
            } else {
                starColor = `rgba(255, 255, 255, ${twinkleIntensity})`;
            }
            
            // Draw star with glow effect
            const glowSize = star.size * 3;
            const glowGradient = this.ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowSize);
            glowGradient.addColorStop(0, starColor);
            glowGradient.addColorStop(0.3, star.color === 'golden' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)');
            glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            // Draw glow
            this.ctx.fillStyle = glowGradient;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw star core
            this.ctx.fillStyle = starColor;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw star sparkle (cross shape)
            if (twinkleIntensity > 0.7) {
                this.ctx.strokeStyle = starColor;
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                // Vertical line
                this.ctx.moveTo(star.x, star.y - star.size * 2);
                this.ctx.lineTo(star.x, star.y + star.size * 2);
                // Horizontal line
                this.ctx.moveTo(star.x - star.size * 2, star.y);
                this.ctx.lineTo(star.x + star.size * 2, star.y);
                this.ctx.stroke();
            }
        });
        
        // Add shooting stars occasionally
        if (Math.random() < 0.003) {
            this.createShootingStar(width, height, time);
        }
        
        // Render shooting stars
        if (this.shootingStars) {
            this.shootingStars = this.shootingStars.filter(shootingStar => {
                shootingStar.x += shootingStar.vx;
                shootingStar.y += shootingStar.vy;
                shootingStar.life -= 0.02;
                
                if (shootingStar.life > 0) {
                    // Draw shooting star trail
                    const trailGradient = this.ctx.createLinearGradient(
                        shootingStar.x, shootingStar.y,
                        shootingStar.x - shootingStar.vx * 10, shootingStar.y - shootingStar.vy * 10
                    );
                    trailGradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.life})`);
                    trailGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    
                    this.ctx.strokeStyle = trailGradient;
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(shootingStar.x, shootingStar.y);
                    this.ctx.lineTo(shootingStar.x - shootingStar.vx * 10, shootingStar.y - shootingStar.vy * 10);
                    this.ctx.stroke();
                    
                    return true;
                }
                return false;
            });
        }
    }
    
    /**
     * Create a shooting star effect
     */
    createShootingStar(width, height, time) {
        if (!this.shootingStars) {
            this.shootingStars = [];
        }
        
        this.shootingStars.push({
            x: Math.random() * width,
            y: Math.random() * height * 0.3,
            vx: 2 + Math.random() * 3,
            vy: 1 + Math.random() * 2,
            life: 1.0
        });
    }

    /**
     * Enhanced rotating mandala with hypnotizing patterns
     */
    renderRotatingMandala() {
        const width = this.canvasDisplayWidth || this.canvas.width;
        const height = this.canvasDisplayHeight || this.canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const time = Date.now() * 0.001;
        const baseRadius = Math.min(width, height) * 0.35;

        // Create deep cosmic background with gradient
        const bgGradient = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height));
        bgGradient.addColorStop(0, 'rgba(10, 5, 30, 0.95)');
        bgGradient.addColorStop(0.5, 'rgba(20, 10, 50, 0.8)');
        bgGradient.addColorStop(1, 'rgba(5, 0, 20, 0.9)');
        this.ctx.fillStyle = bgGradient;
        this.ctx.fillRect(0, 0, width, height);

        // Save context for transformations
        this.ctx.save();
        this.ctx.translate(centerX, centerY);

        // Multiple rotating layers for depth
        const layers = [
            { petals: 8, speed: 0.3, size: 1.0, hueOffset: 0 },
            { petals: 12, speed: -0.2, size: 0.8, hueOffset: 60 },
            { petals: 16, speed: 0.15, size: 0.6, hueOffset: 120 },
            { petals: 24, speed: -0.1, size: 0.4, hueOffset: 180 }
        ];

        layers.forEach((layer, layerIndex) => {
            this.ctx.save();
            this.ctx.rotate(time * layer.speed);

            // Draw geometric petals
            for (let i = 0; i < layer.petals; i++) {
                const angle = (i / layer.petals) * Math.PI * 2;
                const petalRadius = baseRadius * layer.size;
                const pulseEffect = 0.8 + 0.2 * Math.sin(time * 3 + i * 0.5 + layerIndex);
                const currentRadius = petalRadius * pulseEffect;
                
                this.ctx.save();
                this.ctx.rotate(angle);
                
                // Create complex petal shape
                const hue = (time * 20 + layer.hueOffset + i * (360 / layer.petals)) % 360;
                const saturation = 70 + 20 * Math.sin(time * 2 + i);
                const lightness = 50 + 20 * Math.sin(time * 1.5 + i * 0.3);
                
                // Outer glow
                const glowGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius);
                glowGradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`);
                glowGradient.addColorStop(0.7, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`);
                glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                
                this.ctx.fillStyle = glowGradient;
                this.ctx.beginPath();
                this.ctx.ellipse(currentRadius * 0.3, 0, currentRadius * 0.4, currentRadius * 0.15, 0, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Inner bright core
                const coreGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius * 0.2);
                coreGradient.addColorStop(0, `hsla(${hue}, 90%, 80%, 0.9)`);
                coreGradient.addColorStop(1, `hsla(${hue}, 70%, 60%, 0.4)`);
                
                this.ctx.fillStyle = coreGradient;
                this.ctx.beginPath();
                this.ctx.ellipse(currentRadius * 0.3, 0, currentRadius * 0.2, currentRadius * 0.08, 0, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Geometric details
                if (layerIndex < 2) {
                    this.ctx.strokeStyle = `hsla(${hue}, 80%, 70%, 0.6)`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(0, 0);
                    this.ctx.lineTo(currentRadius * 0.6, 0);
                    this.ctx.stroke();
                    
                    // Small decorative circles
                    for (let j = 1; j <= 3; j++) {
                        const circleRadius = currentRadius * 0.15 * j;
                        const circleSize = 2 + Math.sin(time * 4 + i + j) * 1;
                        this.ctx.fillStyle = `hsla(${hue + j * 30}, 80%, 70%, 0.7)`;
                        this.ctx.beginPath();
                        this.ctx.arc(circleRadius, 0, circleSize, 0, Math.PI * 2);
                        this.ctx.fill();
                    }
                }
                
                this.ctx.restore();
            }
            
            this.ctx.restore();
        });

        // Central sacred geometry
        this.ctx.save();
        this.ctx.rotate(time * 0.1);
        
        // Draw central flower of life pattern
        const centerRadius = baseRadius * 0.15;
        const centerHue = (time * 40) % 360;
        
        // Central circle
        const centralGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, centerRadius);
        centralGradient.addColorStop(0, `hsla(${centerHue}, 90%, 80%, 0.9)`);
        centralGradient.addColorStop(0.5, `hsla(${centerHue}, 70%, 60%, 0.6)`);
        centralGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        this.ctx.fillStyle = centralGradient;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, centerRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Surrounding circles in flower of life pattern
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const x = Math.cos(angle) * centerRadius * 0.8;
            const y = Math.sin(angle) * centerRadius * 0.8;
            const pulse = 0.7 + 0.3 * Math.sin(time * 4 + i);
            
            this.ctx.fillStyle = `hsla(${centerHue + i * 60}, 80%, 70%, ${0.6 * pulse})`;
            this.ctx.beginPath();
            this.ctx.arc(x, y, centerRadius * 0.4 * pulse, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        this.ctx.restore();
        
        // Outer ring with sacred symbols
        this.ctx.save();
        this.ctx.rotate(-time * 0.05);
        
        const outerRingRadius = baseRadius * 1.2;
        for (let i = 0; i < 36; i++) {
            const angle = (i / 36) * Math.PI * 2;
            const x = Math.cos(angle) * outerRingRadius;
            const y = Math.sin(angle) * outerRingRadius;
            const size = 1 + Math.sin(time * 3 + i * 0.2) * 0.5;
            const hue = (time * 15 + i * 10) % 360;
            
            this.ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.4)`;
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        this.ctx.restore();
        this.ctx.restore();
    }

    /**
     * Navigate to a specific section
     */
    navigateToSection(sectionId) {
        // Update navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

        // Update sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        this.currentSection = sectionId;

        // Special handling for visuals section to ensure proper canvas initialization
        if (sectionId === 'visuals') {
            // Wait for the section to be visible, then initialize canvas properly
            setTimeout(() => {
                this.initializeVisualsSection();
            }, 100);
        }

        // Show relevant mascot messages
        this.showSectionMessage(sectionId);
    }

    /**
     * Initialize visuals section when it becomes active
     * This ensures the breathing visual displays correctly on first view
     */
    initializeVisualsSection() {
        if (!this.canvas || !this.ctx) {
            console.warn('Canvas not ready for visuals section initialization');
            return;
        }
        
        // Force canvas resize to ensure proper dimensions
        this.resizeCanvas();
        
        // Ensure visuals are not paused
        this.visualsPaused = false;
        
        // Force set the current visual to ensure it's properly initialized
        const currentVisual = this.currentVisual || 'breathing';
        this.setVisual(currentVisual);
        
        console.log('Visuals section initialized successfully');
    }

    /**
     * Show mascot message for specific sections
     */
    showSectionMessage(sectionId) {
        const messages = {
            home: 'Bienvenue dans ton espace de calme !',
            mixer: 'Choisis les sons qui t\'apaisent',
            visuals: 'Regarde ces jolis visuels relaxants',
            timer: 'Prends une pause bien méritée',
            profiles: 'Sauvegarde tes combinaisons préférées',
            tips: 'Voici des conseils pour ton bien-être'
        };

        this.showMascotMessage(messages[sectionId] || 'Explore ton sanctuaire !', 2000);
    }

    /**
     * Show mascot message
     */
    showMascotMessage(message, duration = 3000) {
        const mascotMessage = document.getElementById('mascotMessage');
        mascotMessage.textContent = message;
        mascotMessage.style.opacity = '1';
        mascotMessage.style.transform = 'translateX(0)';

        setTimeout(() => {
            mascotMessage.style.opacity = '0';
            mascotMessage.style.transform = 'translateX(20px)';
        }, duration);
    }

    /**
     * Toggle theme between light and dark
     */
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
        
        // Update app icon if no custom icon is set
        this.updateAppIcon();
        
        this.showMascotMessage(`Mode ${this.theme === 'dark' ? 'nuit' : 'jour'} activé !`, 2000);
    }

    /**
     * Toggle sound on/off with enhanced state management
     * Initializes audio context on first interaction for Chrome compatibility
     */
    async toggleSound(soundId) {
        console.log(`Toggling sound: ${soundId}`);
        
        // Initialize audio context on first user interaction
        const audioReady = await this.initializeAudioContext();
        if (!audioReady) {
            console.error('Failed to initialize audio context');
            return;
        }
        
        const soundBtn = document.querySelector(`button[data-sound="${soundId}"]`);
        const soundControl = document.querySelector(`.sound-control[data-sound="${soundId}"]`);
        const sound = this.sounds.get(soundId);

        if (!sound || !soundBtn) {
            console.error(`Sound or button not found for: ${soundId}`);
            return;
        }

        // Check if this sound is currently active
        const isCurrentlyActive = this.activeSounds.has(soundId);
        
        if (isCurrentlyActive) {
            // Stop the current sound
            this.deactivateSound(soundId);
        } else {
            // Stop all sounds first, then start the new one
            this.deactivateAllSounds();
            this.activateSound(soundId);
        }
    }

    /**
     * Solution 2: Dedicated activation/deactivation functions
     * Activate a single sound with visual feedback
     */
    activateSound(soundId) {
        console.log(`Activating sound: ${soundId}`);
        const soundBtn = document.querySelector(`button[data-sound="${soundId}"]`);
        const soundControl = document.querySelector(`.sound-control[data-sound="${soundId}"]`);
        
        if (!soundBtn || !soundControl) return;
        
        // Start the sound
        this.startSound(soundId);
        
        // Add visual feedback
        soundBtn.classList.add('active');
        soundControl.classList.add('playing');
        
        // Update state
        this.activeSounds.add(soundId);
        
        // Update global pause/play button to show pause mode when sound starts
        this.updateGlobalPauseButtonState(false); // false = not paused, show pause icon
        
        // Track last clicked icon for app symbol
        const iconElement = soundBtn.querySelector('.sound-icon');
        if (iconElement) {
            this.setLastClickedIcon(iconElement.textContent);
        }
        
        console.log(`Sound ${soundId} activated. Active sounds:`, Array.from(this.activeSounds));
    }

    /**
     * Deactivate a single sound
     */
    deactivateSound(soundId) {
        console.log(`Deactivating sound: ${soundId}`);
        const soundBtn = document.querySelector(`button[data-sound="${soundId}"]`);
        const soundControl = document.querySelector(`.sound-control[data-sound="${soundId}"]`);
        
        if (!soundBtn || !soundControl) return;
        
        // Stop the sound
        this.stopSound(soundId);
        
        // Remove visual feedback
        soundBtn.classList.remove('active');
        soundControl.classList.remove('playing');
        
        // Hide playing indicator
        const indicator = soundControl.querySelector('.playing-indicator');
        if (indicator) {
            indicator.style.display = 'none';
        }
        
        // Update state
        this.activeSounds.delete(soundId);
        
        // Update global pause/play button based on remaining active sounds
        if (this.activeSounds.size === 0) {
            // No more active sounds, show play mode
            this.updateGlobalPauseButtonState(true); // true = paused/stopped, show play icon
        }
        
        console.log(`Sound ${soundId} deactivated. Active sounds:`, Array.from(this.activeSounds));
    }

    /**
     * Deactivate all currently playing sounds
     */
    deactivateAllSounds() {
        console.log('Deactivating all sounds');
        
        // Create a copy of active sounds to avoid modification during iteration
        const soundsToStop = Array.from(this.activeSounds);
        
        soundsToStop.forEach(soundId => {
            this.deactivateSound(soundId);
        });
        
        // Ensure global pause button shows play mode when all sounds are stopped
        this.updateGlobalPauseButtonState(true);
        
        // Ensure all visual states are cleared
        document.querySelectorAll('.sound-btn.active').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelectorAll('.sound-control.playing').forEach(control => {
            control.classList.remove('playing');
        });
        
        // Hide all playing indicators
        document.querySelectorAll('.playing-indicator').forEach(indicator => {
            indicator.style.display = 'none';
        });
        
        // Clear the set
        this.activeSounds.clear();
        
        console.log('All sounds deactivated');
    }

    /**
     * Legacy function for compatibility
     */
    stopAllSounds() {
        this.deactivateAllSounds();
    }

    /**
     * Stop all visual animations
     */
    stopAllVisuals() {
        // Stop visual animation by setting a flag
        this.visualsPaused = true;
        
        // Clear canvas if it exists
        if (this.canvas && this.ctx) {
            const width = this.canvasDisplayWidth || (this.canvas.width / (window.devicePixelRatio || 1));
            const height = this.canvasDisplayHeight || (this.canvas.height / (window.devicePixelRatio || 1));
            this.ctx.clearRect(0, 0, width, height);
        }
        
        // Reset visual controls
        document.querySelectorAll('.visual-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        console.log('All visuals stopped');
    }

    /**
     * Toggle fullscreen mode for visual display
     */
    toggleFullscreen() {
        const visualDisplay = document.querySelector('.visual-display');
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        
        if (!document.fullscreenElement && !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && !document.msFullscreenElement) {
            // Enter fullscreen
            if (visualDisplay.requestFullscreen) {
                visualDisplay.requestFullscreen();
            } else if (visualDisplay.webkitRequestFullscreen) {
                visualDisplay.webkitRequestFullscreen();
            } else if (visualDisplay.mozRequestFullScreen) {
                visualDisplay.mozRequestFullScreen();
            } else if (visualDisplay.msRequestFullscreen) {
                visualDisplay.msRequestFullscreen();
            }
            
            visualDisplay.classList.add('fullscreen');
            if (fullscreenBtn) {
                fullscreenBtn.innerHTML = '<span class="visual-icon">⛶</span><span>Quitter</span>';
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        
        // Resize canvas after fullscreen change
        setTimeout(() => this.resizeCanvas(), 100);
    }

    /**
     * Handle fullscreen change events
     */
    handleFullscreenChange() {
        const visualDisplay = document.querySelector('.visual-display');
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        
        if (!document.fullscreenElement && !document.webkitFullscreenElement && 
            !document.mozFullScreenElement && !document.msFullscreenElement) {
            // Exited fullscreen
            visualDisplay.classList.remove('fullscreen');
            if (fullscreenBtn) {
                fullscreenBtn.innerHTML = '<span class="visual-icon">⛶</span><span>Plein écran</span>';
            }
        }
        
        // Resize canvas after fullscreen change
        setTimeout(() => this.resizeCanvas(), 100);
    }

    /**
     * Enhanced toggle global pause/play with improved state management
     */
    toggleGlobalPlayPause() {
        this.globalPaused = !this.globalPaused;
        
        const pauseBtn = document.getElementById('globalPauseBtn');
        const pauseIcon = pauseBtn.querySelector('.pause-icon');
        
        if (this.globalPaused) {
            // Pause all sounds with enhanced methods
            this.pauseAllSounds();
            // Pause visuals
            this.visualsPaused = true;
            
            pauseIcon.textContent = '▶️';
            pauseBtn.setAttribute('title', 'Reprendre la lecture');
            this.showMascotMessage('⏸️ Pause globale - Sons et visuels en pause', 2000);
            console.log('Global pause activated with enhanced methods');
        } else {
            // Resume all sounds with enhanced methods
            this.resumeAllSounds();
            // Resume visuals
            this.visualsPaused = false;
            
            pauseIcon.textContent = '⏸️';
            pauseBtn.setAttribute('title', 'Mettre en pause');
            this.showMascotMessage('▶️ Lecture reprise - Sons relancés', 2000);
            console.log('Global play resumed with enhanced methods');
        }
        
        // Add visual feedback animation
        if (pauseBtn) {
            pauseBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                pauseBtn.style.transform = 'scale(1)';
            }, 150);
        }
        
        // Update last clicked icon for app symbol
        this.setLastClickedIcon(this.globalPaused ? '▶️' : '⏸️');
    }

    /**
     * SOLUTION 1: Enhanced pause/resume with proper state tracking
     * Pause all currently playing sounds with unified handling
     */
    pauseAllSounds() {
        this.activeSounds.forEach(soundId => {
            this.pauseSound(soundId);
        });
    }

    /**
     * Resume all paused sounds with unified handling
     */
    resumeAllSounds() {
        this.activeSounds.forEach(soundId => {
            this.resumeSound(soundId);
        });
    }

    /**
     * SOLUTION 2: Individual sound pause with type detection
     */
    pauseSound(soundId) {
        const sound = this.sounds.get(soundId);
        if (!sound) return false;

        try {
            // Handle Tone.js Player objects
            if (sound.state && sound.state === 'started') {
                sound.stop();
                this.soundStates.set(soundId, 'paused');
                this.pausedSounds.add(soundId);
                console.log(`Tone.js sound ${soundId} paused`);
                return true;
            }
            // Handle Tone.js Noise generators
            else if (sound.state !== undefined) {
                sound.stop();
                this.soundStates.set(soundId, 'paused');
                this.pausedSounds.add(soundId);
                console.log(`Tone.js noise ${soundId} paused`);
                return true;
            }
            // Handle HTML5 Audio objects
            else if (sound.pause && !sound.paused) {
                sound.pause();
                this.soundStates.set(soundId, 'paused');
                this.pausedSounds.add(soundId);
                console.log(`HTML5 audio ${soundId} paused`);
                return true;
            }
        } catch (error) {
            console.error(`Error pausing sound ${soundId}:`, error);
        }
        return false;
    }

    /**
     * SOLUTION 3: Individual sound resume with type detection
     */
    resumeSound(soundId) {
        const sound = this.sounds.get(soundId);
        if (!sound || !this.pausedSounds.has(soundId)) return false;

        try {
            // Handle Tone.js Player objects
            if (sound.start && this.soundStates.get(soundId) === 'paused') {
                sound.start();
                this.soundStates.set(soundId, 'playing');
                this.pausedSounds.delete(soundId);
                console.log(`Tone.js sound ${soundId} resumed`);
                return true;
            }
            // Handle HTML5 Audio objects
            else if (sound.play && sound.paused) {
                sound.play().catch(console.error);
                this.soundStates.set(soundId, 'playing');
                this.pausedSounds.delete(soundId);
                console.log(`HTML5 audio ${soundId} resumed`);
                return true;
            }
        } catch (error) {
            console.error(`Error resuming sound ${soundId}:`, error);
        }
        return false;
    }

    /**
     * SOLUTION 4: Smart sound state detection
     */
    isSoundPlaying(soundId) {
        const sound = this.sounds.get(soundId);
        if (!sound) return false;

        // Check Tone.js objects
        if (sound.state !== undefined) {
            return sound.state === 'started';
        }
        // Check HTML5 Audio objects
        else if (sound.paused !== undefined) {
            return !sound.paused && sound.currentTime > 0;
        }
        return false;
    }

    /**
     * Comprehensive debugging method for sound states
     */
    debugSoundStates() {
        console.log('=== SOUND STATE DEBUG ===');
        console.log('Active sounds:', Array.from(this.activeSounds));
        console.log('Paused sounds:', Array.from(this.pausedSounds));
        console.log('Global paused:', this.globalPaused);
        
        this.sounds.forEach((sound, soundId) => {
            const isActive = this.activeSounds.has(soundId);
            const isPaused = this.pausedSounds.has(soundId);
            const state = this.soundStates.get(soundId) || 'unknown';
            const actuallyPlaying = this.isSoundPlaying(soundId);
            
            console.log(`Sound ${soundId}:`, {
                active: isActive,
                paused: isPaused,
                trackedState: state,
                actuallyPlaying: actuallyPlaying,
                soundType: sound.state !== undefined ? 'Tone.js' : 'HTML5'
            });
        });
        console.log('========================');
    }

    /**
     * Force reset all sound states (emergency fix)
     */
    resetAllSoundStates() {
        console.log('Resetting all sound states...');
        this.soundStates.clear();
        this.pausedSounds.clear();
        this.activeSounds.clear();
        this.globalPaused = false;
        
        // Update UI
        const pauseBtn = document.getElementById('globalPauseBtn');
        if (pauseBtn) {
            const pauseIcon = pauseBtn.querySelector('.pause-icon');
            if (pauseIcon) {
                pauseIcon.textContent = '⏸️';
            }
        }
        
        this.showMascotMessage('🔄 États des sons réinitialisés', 2000);
    }

    /**
     * Update global pause/play button state based on sound activity
     */
    updateGlobalPauseButtonState(shouldShowPlay) {
        const pauseBtn = document.getElementById('globalPauseBtn');
        if (!pauseBtn) return;
        
        const pauseIcon = pauseBtn.querySelector('.pause-icon');
        if (!pauseIcon) return;
        
        if (shouldShowPlay) {
            // Show play icon (▶️) when no sounds are playing or all are paused
            pauseIcon.textContent = '▶️';
            pauseBtn.setAttribute('title', 'Reprendre la lecture');
            this.globalPaused = true;
        } else {
            // Show pause icon (⏸️) when sounds are playing
            pauseIcon.textContent = '⏸️';
            pauseBtn.setAttribute('title', 'Mettre en pause');
            this.globalPaused = false;
        }
        
        // Update last clicked icon for app symbol
        this.setLastClickedIcon(pauseIcon.textContent);
        
        console.log(`Global pause button updated: ${shouldShowPlay ? 'Play mode' : 'Pause mode'}`);
    }

    /**
     * Update app icon based on current theme
     */
    updateAppIcon() {
        const appIcon = document.getElementById('appIcon');
        if (this.lastClickedIcon) {
            appIcon.textContent = this.lastClickedIcon;
        } else {
            // Show day/night icon based on current theme
            const isDark = document.body.classList.contains('dark-theme');
            appIcon.textContent = isDark ? '🌙' : '☀️';
        }
    }

    /**
     * Reset app icon to theme-based default
     */
    resetAppIcon() {
        this.lastClickedIcon = null;
        this.updateAppIcon();
        this.showMascotMessage('Icône réinitialisée', 1500);
    }

    /**
     * Set last clicked icon
     */
    setLastClickedIcon(icon) {
        this.lastClickedIcon = icon;
        this.updateAppIcon();
    }

    /**
     * Add visual playing indicators to sound controls
     */
    addPlayingIndicators() {
        document.querySelectorAll('.sound-control').forEach(control => {
            const soundId = control.getAttribute('data-sound');
            if (!control.querySelector('.playing-indicator')) {
                const indicator = document.createElement('div');
                indicator.className = 'playing-indicator';
                indicator.innerHTML = '♪ En cours de lecture';
                indicator.style.cssText = `
                    display: none;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(34, 197, 94, 0.9);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    z-index: 10;
                `;
                control.style.position = 'relative';
                control.appendChild(indicator);
            }
        });
    }

    /**
     * Enhanced start sound function with better error handling and state tracking
     */
    startSound(soundId) {
        const sound = this.sounds.get(soundId);
        if (!sound) {
            console.error(`Sound not found: ${soundId}`);
            return false;
        }

        try {
            if (sound.start) {
                sound.start();
                // Track state for Tone.js objects
                this.soundStates.set(soundId, 'playing');
                this.pausedSounds.delete(soundId);
            } else if (sound.play) {
                // Handle HTML5 Audio objects
                sound.play().catch(console.error);
                this.soundStates.set(soundId, 'playing');
                this.pausedSounds.delete(soundId);
            } else if (sound.noise && sound.lfo) {
                // For complex synthesized sounds (legacy)
                sound.noise.start();
                sound.lfo.start();
                this.soundStates.set(soundId, 'playing');
                this.pausedSounds.delete(soundId);
            }
            
            // Show playing indicator
            const control = document.querySelector(`.sound-control[data-sound="${soundId}"]`);
            const indicator = control?.querySelector('.playing-indicator');
            if (indicator) {
                indicator.style.display = 'block';
            }
            
            // Start icon animation
            this.startIconAnimation(soundId);
            
            console.log(`Sound ${soundId} started successfully with state tracking`);
            return true;
        } catch (error) {
            console.error(`Error starting sound ${soundId}:`, error);
            return false;
        }
    }

    /**
     * Enhanced stop sound function with indicator management and state tracking
     */
    stopSound(soundId) {
        const sound = this.sounds.get(soundId);
        if (!sound) {
            console.error(`Sound not found: ${soundId}`);
            return false;
        }

        try {
            if (sound.stop) {
                sound.stop();
                // Track state for Tone.js objects
                this.soundStates.set(soundId, 'stopped');
                this.pausedSounds.delete(soundId);
            } else if (sound.pause) {
                // Handle HTML5 Audio objects
                sound.pause();
                sound.currentTime = 0;
                this.soundStates.set(soundId, 'stopped');
                this.pausedSounds.delete(soundId);
            } else if (sound.noise && sound.lfo) {
                // For complex synthesized sounds (legacy)
                sound.noise.stop();
                sound.lfo.stop();
                this.soundStates.set(soundId, 'stopped');
                this.pausedSounds.delete(soundId);
            }
            
            // Hide playing indicator
            const control = document.querySelector(`.sound-control[data-sound="${soundId}"]`);
            const indicator = control?.querySelector('.playing-indicator');
            if (indicator) {
                indicator.style.display = 'none';
            }
            
            // Stop icon animation
            this.stopIconAnimation(soundId);
            
            console.log(`Sound ${soundId} stopped successfully with state tracking`);
            return true;
        } catch (error) {
            console.error(`Error stopping sound ${soundId}:`, error);
            return false;
        }
    }

    /**
     * Start icon animation for a specific sound
     * Adds visual feedback when sound is playing
     */
    startIconAnimation(soundId) {
        const soundControl = document.querySelector(`.sound-control[data-sound="${soundId}"]`);
        if (soundControl) {
            // Add playing class to trigger CSS animations
            soundControl.classList.add('playing');
            console.log(`Animation started for sound: ${soundId}`);
        }
    }

    /**
     * Stop icon animation for a specific sound
     * Removes visual feedback when sound stops
     */
    stopIconAnimation(soundId) {
        const soundControl = document.querySelector(`.sound-control[data-sound="${soundId}"]`);
        if (soundControl) {
            // Remove playing class to stop CSS animations
            soundControl.classList.remove('playing');
            console.log(`Animation stopped for sound: ${soundId}`);
        }
    }

    /**
     * Play bubble sound for UI feedback
     */
    async playBubbleSound() {
        try {
            // Ensure audio context is initialized
            await this.initializeAudioContext();
            
            const bubbleSound = this.sounds.get('bubble');
            if (bubbleSound) {
                // Stop the sound if it's already playing
                if (bubbleSound.state === 'started') {
                    bubbleSound.stop();
                }
                // Start the bubble sound
                bubbleSound.start();
                console.log('Bubble sound played');
            } else {
                console.warn('Bubble sound not found');
            }
        } catch (error) {
            console.error('Error playing bubble sound:', error);
        }
    }

    /**
     * Set volume for a specific sound
     */
    setVolume(soundId, volume) {
        const sound = this.sounds.get(soundId);
        if (!sound) return;

        const dbValue = -40 + (volume / 100) * 40; // Convert 0-100 to -40db to 0db
        
        if (sound.volume) {
            sound.volume.value = dbValue;
        } else if (sound.noise) {
            sound.noise.volume.value = dbValue;
        }
    }

    /**
     * Set current visual
     */
    setVisual(visualId) {
        // Remove active class from all visual buttons
        document.querySelectorAll('.visual-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-visual="${visualId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            
            // Track last clicked icon for app symbol
            const iconElement = activeBtn.querySelector('.visual-icon');
            if (iconElement) {
                this.setLastClickedIcon(iconElement.textContent);
            }
            
            // Set the current visual and ensure visuals are not paused
            this.currentVisual = visualId;
            this.visualsPaused = false;
            
            // Force a canvas resize to ensure proper display
            this.resizeCanvas();
            
            this.showMascotMessage(`Visuel ${visualId} activé !`, 1500);
            console.log(`Visual changed to: ${visualId}`);
        } else {
            console.warn(`Visual button not found for: ${visualId}`);
            this.showMascotMessage(`Visuel ${visualId} introuvable`, 1500);
        }
    }

    /**
     * Set timer duration
     */
    setTimerDuration(minutes) {
        this.timer.duration = minutes * 60;
        this.timer.remaining = this.timer.duration;
        this.updateTimerDisplay();
        
        document.getElementById('customMinutes').value = minutes;
    }

    /**
     * Start timer
     */
    startTimer() {
        if (this.timer.remaining <= 0) {
            const minutes = parseInt(document.getElementById('customMinutes').value) || 5;
            this.setTimerDuration(minutes);
        }

        this.timer.isRunning = true;
        this.timer.interval = setInterval(() => {
            this.timer.remaining--;
            this.updateTimerDisplay();
            this.updateTimerCircle();

            if (this.timer.remaining <= 0) {
                this.timerComplete();
                return; // Exit the interval callback
            }
        }, 1000);

        document.getElementById('startTimer').disabled = true;
        document.getElementById('pauseTimer').disabled = false;
        document.getElementById('stopTimer').disabled = false;
        
        this.showMascotMessage('Minuteur démarré ! Profite de ta pause.', 2000);
    }

    /**
     * Pause timer
     */
    pauseTimer() {
        this.timer.isRunning = false;
        clearInterval(this.timer.interval);

        document.getElementById('startTimer').disabled = false;
        document.getElementById('pauseTimer').disabled = true;
        
        this.showMascotMessage('Minuteur en pause.', 1500);
    }

    /**
     * Stop timer
     */
    stopTimer() {
        this.timer.isRunning = false;
        clearInterval(this.timer.interval);
        this.timer.remaining = this.timer.duration;
        this.updateTimerDisplay();
        this.updateTimerCircle();

        document.getElementById('startTimer').disabled = false;
        document.getElementById('pauseTimer').disabled = true;
        document.getElementById('stopTimer').disabled = true;
        
        this.showMascotMessage('Minuteur arrêté.', 1500);
    }

    /**
     * Timer completion
     */
    timerComplete() {
        this.timer.isRunning = false;
        clearInterval(this.timer.interval);
        
        // Stop all sounds and visuals when timer completes
        this.stopAllSounds();
        this.stopAllVisuals();
        
        // Play gentle completion sound
        const completionTone = new Tone.Synth({
            oscillator: { type: 'sine' },
            envelope: { attack: 0.5, decay: 1, sustain: 0, release: 2 }
        }).toDestination();
        completionTone.triggerAttackRelease('C5', '2n');

        // Visual notification
        const timerCircle = document.getElementById('timerCircle');
        timerCircle.style.animation = 'breathe 1s ease-in-out 3';
        
        setTimeout(() => {
            timerCircle.style.animation = '';
        }, 3000);

        document.getElementById('startTimer').disabled = false;
        document.getElementById('pauseTimer').disabled = true;
        document.getElementById('stopTimer').disabled = true;
        
        this.showMascotMessage('Temps écoulé ! Bravo pour ta pause !', 4000);
    }

    /**
     * Update timer display
     */
    updateTimerDisplay() {
        // Prevent negative time display
        const timeRemaining = Math.max(0, this.timer.remaining);
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerTime').textContent = display;
    }

    /**
     * Update timer circle progress
     */
    updateTimerCircle() {
        const progress = (this.timer.duration - this.timer.remaining) / this.timer.duration;
        const degrees = progress * 360;
        const circle = document.getElementById('timerCircle');
        circle.style.background = `conic-gradient(var(--accent-blue) ${degrees}deg, var(--bg-accent) ${degrees}deg)`;
    }

    /**
     * Show save profile modal
     */
    showSaveModal() {
        document.getElementById('saveModal').classList.add('active');
        document.getElementById('profileName').focus();
    }

    /**
     * Hide save profile modal
     */
    hideSaveModal() {
        document.getElementById('saveModal').classList.remove('active');
        document.getElementById('profileName').value = '';
    }

    /**
     * Save current profile - only saves last clicked elements from each section
     */
    saveCurrentProfile() {
        const name = document.getElementById('profileName').value.trim();
        if (!name) {
            this.showMascotMessage('Donne un nom à ta bulle !', 2000);
            return;
        }

        const profile = {
            id: Date.now(),
            name: name,
            sound: this.lastClickedSound || null,
            soundVolume: null,
            visual: this.lastClickedVisual || null,
            timerDuration: this.lastClickedTimerDuration || null,
            created: new Date().toLocaleDateString()
        };

        // Save volume only for the last clicked sound
        if (this.lastClickedSound) {
            const slider = document.querySelector(`.volume-slider[data-sound="${this.lastClickedSound}"]`);
            if (slider) {
                profile.soundVolume = parseInt(slider.value);
            }
        }

        this.profiles.push(profile);
        localStorage.setItem('sensoryProfiles', JSON.stringify(this.profiles));
        
        // Play bubble sound for feedback
        this.playBubbleSound();
        
        this.hideSaveModal();
        this.loadProfiles();
        
        // Create summary message
        let savedElements = [];
        if (profile.sound) savedElements.push(`Son: ${profile.sound}`);
        if (profile.visual) savedElements.push(`Visuel: ${profile.visual}`);
        if (profile.timerDuration) savedElements.push(`Minuteur: ${profile.timerDuration}min`);
        
        const summary = savedElements.length > 0 ? savedElements.join(', ') : 'Aucun élément';
        this.showMascotMessage(`🎵 Bulle "${name}" sauvegardée !\n✨ Éléments: ${summary}`, 4000);
    }

    /**
     * Load and display saved profiles
     */
    loadProfiles() {
        const profilesList = document.getElementById('profilesList');
        const profilesGrid = document.getElementById('profilesGrid');
        
        profilesList.innerHTML = '';
        profilesGrid.innerHTML = '';

        if (this.profiles.length === 0) {
            profilesList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Aucune bulle sauvegardée pour le moment.</p>';
            profilesGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Aucune bulle sauvegardée</p>';
            return;
        }

        this.profiles.forEach(profile => {
            // Solution 1: Create separate cards for each container to avoid DOM conflicts
            const homeCard = this.createProfileCard(profile, 'home');
            const profilesCard = this.createProfileCard(profile, 'profiles');
            
            profilesGrid.appendChild(homeCard);
            profilesList.appendChild(profilesCard);
        });
    }

    /**
     * Create profile card element
     * @param {Object} profile - The profile data
     * @param {string} location - Location where card will be displayed ('home' or 'profiles')
     */
    createProfileCard(profile, location = 'profiles') {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.setAttribute('data-profile-id', profile.id);
        card.setAttribute('data-location', location);
        
        // Handle both old and new profile formats for backward compatibility
        const soundInfo = profile.sound ? `${profile.sound}` : (profile.sounds && profile.sounds.length > 0 ? profile.sounds.join(', ') : 'Aucun');
        const visualInfo = profile.visual || 'Aucun';
        const timerInfo = profile.timerDuration ? `${profile.timerDuration} min` : 'Aucun';
        
        card.innerHTML = `
            <div class="profile-name">${profile.name}</div>
            <div class="profile-details">
                <p><strong>Son:</strong> ${soundInfo}</p>
                <p><strong>Visuel:</strong> ${visualInfo}</p>
                <p><strong>Minuteur:</strong> ${timerInfo}</p>
                <p><strong>Créé le:</strong> ${profile.created}</p>
            </div>
            <div class="profile-actions-buttons">
                <button type="button" class="profile-btn load" data-id="${profile.id}">Charger</button>
                <button type="button" class="profile-btn delete" data-id="${profile.id}">Supprimer</button>
            </div>
        `;

        // Add event listeners
        card.querySelector('.load').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Visual feedback for loading
            const loadBtn = e.target;
            const originalText = loadBtn.textContent;
            loadBtn.textContent = 'Chargement...';
            loadBtn.disabled = true;
            loadBtn.classList.add('loading');
            
            // Load the profile with proper error handling
            try {
                this.loadProfile(profile.id);
                
                // Reset button after successful load
                setTimeout(() => {
                    if (loadBtn && loadBtn.parentNode) {
                        loadBtn.textContent = originalText;
                        loadBtn.disabled = false;
                        loadBtn.classList.remove('loading');
                    }
                }, 1500);
            } catch (error) {
                console.error('Error loading profile:', error);
                // Reset button immediately on error
                loadBtn.textContent = originalText;
                loadBtn.disabled = false;
                loadBtn.classList.remove('loading');
                this.showMascotMessage('Erreur lors du chargement de la bulle', 2000);
            }
        });

        card.querySelector('.delete').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Visual feedback for deletion
            const deleteBtn = e.target;
            const originalText = deleteBtn.textContent;
            deleteBtn.textContent = 'Suppression...';
            deleteBtn.disabled = true;
            deleteBtn.classList.add('deleting');
            
            // Small delay to show feedback before confirmation
            setTimeout(() => {
                this.deleteProfile(profile.id);
                // Button will be removed with the card, no need to reset
            }, 300);
        });

        return card;
    }

    /**
     * Load a saved profile - handles new selective loading behavior
     */
    loadProfile(profileId) {
        const profile = this.profiles.find(p => p.id === profileId);
        if (!profile) {
            console.error(`Profile not found: ${profileId}`);
            this.showMascotMessage('Erreur: Bulle introuvable', 2000);
            return;
        }

        console.log(`Loading profile: ${profile.name}`, profile);

        // Play bubble sound for feedback
        this.playBubbleSound();

        // Stop all current sounds and timer first
        this.activeSounds.forEach(soundId => {
            this.stopSound(soundId);
            const soundBtn = document.querySelector(`[data-sound="${soundId}"]`);
            if (soundBtn) {
                soundBtn.classList.remove('active');
            }
        });
        this.activeSounds.clear();
        
        // Stop current timer if running
        if (this.timer.isRunning) {
            this.stopTimer();
        }
        
        // Clear all visual states from sound buttons
        document.querySelectorAll('.sound-btn.active').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.sound-control.playing').forEach(control => {
            control.classList.remove('playing');
        });
        document.querySelectorAll('.playing-indicator').forEach(indicator => {
            indicator.style.display = 'none';
        });

        // Navigate to visuals section first if visual is saved
        if (profile.visual) {
            console.log(`Navigating to visuals section for visual: ${profile.visual}`);
            this.navigateToSection('visuals');
        }

        // Increased delay to ensure section is loaded before applying changes
        setTimeout(() => {
            let loadedElements = [];
            
            // Load sound if saved (backward compatibility with old format)
            const soundToLoad = profile.sound || (profile.sounds && profile.sounds[0]);
            if (soundToLoad) {
                console.log(`Loading sound: ${soundToLoad}`);
                try {
                    this.activeSounds.add(soundToLoad);
                    this.startSound(soundToLoad);
                    const soundBtn = document.querySelector(`[data-sound="${soundToLoad}"]`);
                    if (soundBtn) {
                        soundBtn.classList.add('active');
                        loadedElements.push(`Son: ${soundToLoad}`);
                        console.log(`Sound button activated for: ${soundToLoad}`);
                    } else {
                        console.warn(`Sound button not found for: ${soundToLoad}`);
                        loadedElements.push(`Son: ${soundToLoad} (bouton introuvable)`);
                    }
                } catch (error) {
                    console.error(`Error starting sound ${soundToLoad}:`, error);
                }
                
                // Load volume (backward compatibility)
                const volume = profile.soundVolume || (profile.volumes && profile.volumes[soundToLoad]);
                if (volume) {
                    const slider = document.querySelector(`.volume-slider[data-sound="${soundToLoad}"]`);
                    if (slider) {
                        slider.value = volume;
                        const valueDisplay = slider.nextElementSibling;
                        if (valueDisplay) {
                            valueDisplay.textContent = `${volume}%`;
                        }
                        this.setVolume(soundToLoad, volume);
                        console.log(`Volume set for ${soundToLoad}: ${volume}%`);
                    }
                }
            }

            // Load visual if saved
            if (profile.visual) {
                try {
                    this.setVisual(profile.visual);
                    loadedElements.push(`Visuel: ${profile.visual}`);
                    console.log(`Visual set: ${profile.visual}`);
                } catch (error) {
                    console.error(`Error setting visual ${profile.visual}:`, error);
                    loadedElements.push(`Visuel: ${profile.visual} (erreur)`);
                }
            }

            // Load and start timer if saved
            if (profile.timerDuration) {
                try {
                    this.setTimerDuration(profile.timerDuration);
                    // Auto-start the timer
                    this.startTimer();
                    loadedElements.push(`Minuteur: ${profile.timerDuration}min (démarré)`);
                    console.log(`Timer duration set and started: ${profile.timerDuration} minutes`);
                } catch (error) {
                    console.error(`Error setting timer ${profile.timerDuration}:`, error);
                    loadedElements.push(`Minuteur: ${profile.timerDuration}min (erreur)`);
                }
            }

            // Update global pause button state
            this.updateGlobalPauseButtonState(false);

            const summary = loadedElements.length > 0 ? loadedElements.join(', ') : 'Aucun élément';
            this.showMascotMessage(`🎵 Bulle "${profile.name}" chargée !\n✨ ${summary}`, 4000);
        }, 100);
    }

    /**
     * Delete a saved profile - Solution 2: Enhanced deletion with DOM cleanup
     */
    deleteProfile(profileId) {
        const profile = this.profiles.find(p => p.id === profileId);
        if (!profile) {
            console.error(`Profile not found for deletion: ${profileId}`);
            return;
        }

        if (confirm(`Supprimer la bulle "${profile.name}" ?`)) {
            console.log(`Deleting profile: ${profile.name} (${profileId})`);
            
            // Solution 2: Remove DOM elements immediately before data update
            this.removeProfileFromDOM(profileId);
            
            // Remove from profiles array
            this.profiles = this.profiles.filter(p => p.id !== profileId);
            
            // Update localStorage
            localStorage.setItem('sensoryProfiles', JSON.stringify(this.profiles));
            
            // Solution 3: Selective reload only if DOM removal failed
            const remainingCards = document.querySelectorAll(`[data-profile-id="${profileId}"]`);
            if (remainingCards.length > 0) {
                console.warn('Some profile cards still exist, forcing full reload');
                this.loadProfiles();
            }
            
            // Show confirmation message
            this.showMascotMessage(`Bulle "${profile.name}" supprimée.`, 2000);
            
            console.log(`Profile deleted successfully. Remaining profiles:`, this.profiles.length);
        } else {
            console.log('Profile deletion cancelled by user');
        }
    }

    /**
     * Remove profile cards from DOM - Solution 2 helper method
     */
    removeProfileFromDOM(profileId) {
        const profileCards = document.querySelectorAll(`[data-profile-id="${profileId}"]`);
        console.log(`Removing ${profileCards.length} profile cards from DOM`);
        
        profileCards.forEach((card, index) => {
            const location = card.getAttribute('data-location');
            console.log(`Removing card ${index + 1} from ${location}`);
            card.remove();
        });
        
        // Update empty state if no profiles remain
        this.updateEmptyState();
    }

    /**
     * Update empty state for profile containers - Solution 3 helper
     */
    updateEmptyState() {
        const profilesList = document.getElementById('profilesList');
        const profilesGrid = document.getElementById('profilesGrid');
        
        if (this.profiles.length === 0) {
             profilesList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Aucune bulle sauvegardée pour le moment.</p>';
             profilesGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Aucune bulle sauvegardée</p>';
         }
     }

     /**
      * Setup info bubble functionality
      */
     setupInfoBubble() {
         const infoBubble = document.getElementById('infoBubble');
         const infoModal = document.getElementById('infoModal');
         const infoModalClose = document.getElementById('infoModalClose');

         // Open modal
         infoBubble.addEventListener('click', () => {
             infoModal.classList.add('show');
             this.createFloatingBubbles();
             this.showMascotMessage('Découvre tout sur ton sanctuaire numérique !', 2000);
         });

         // Close modal
         const closeModal = () => {
             infoModal.classList.remove('show');
         };

         infoModalClose.addEventListener('click', closeModal);
         
         // Close on backdrop click
         infoModal.addEventListener('click', (e) => {
             if (e.target === infoModal) {
                 closeModal();
             }
         });

         // Close on Escape key
         document.addEventListener('keydown', (e) => {
             if (e.key === 'Escape' && infoModal.classList.contains('show')) {
                 closeModal();
             }
         });
     }

     /**
      * Create floating bubbles animation in the modal
      */
     createFloatingBubbles() {
         const bubblesContainer = document.querySelector('.floating-bubbles');
         
         // Clear existing bubbles
         bubblesContainer.innerHTML = '';
         
         // Create multiple animated bubbles
         for (let i = 0; i < 8; i++) {
             const bubble = document.createElement('div');
             bubble.className = 'animated-bubble';
             
             // Random size and position
             const size = Math.random() * 40 + 20;
             bubble.style.width = size + 'px';
             bubble.style.height = size + 'px';
             bubble.style.left = Math.random() * 90 + '%';
             bubble.style.top = Math.random() * 90 + '%';
             bubble.style.animationDelay = Math.random() * 6 + 's';
             bubble.style.animationDuration = (Math.random() * 4 + 4) + 's';
             
             bubblesContainer.appendChild(bubble);
         }
     }
 }

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BulleSensorielle();
});