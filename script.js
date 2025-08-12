// Typewriter Effect
class Typewriter {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = options.typingSpeed || 150;
        this.deletingSpeed = options.deletingSpeed || 75;
        this.delayBetweenTexts = options.delayBetweenTexts || 2000;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            // Deleting characters
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            // Typing characters
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }

        let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            // Finished typing current text, wait then start deleting
            typeSpeed = this.delayBetweenTexts;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            // Finished deleting, move to next text
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typewriter when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const roles = [
        'DevOps Engineer',
        'SRE',
        'Infrastructure Engineer', 
        'Platform Engineer'
    ];
    
    new Typewriter(typewriterElement, roles, {
        typingSpeed: 100,
        deletingSpeed: 50,
        delayBetweenTexts: 2000
    });

    // Navigation scroll effect
    const nav = document.getElementById('terminal-nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScrollY = window.scrollY;
    });

    // Smooth scroll animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Hero section should be visible immediately
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Download resume function
function downloadResume() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1ceyEhc5TeIQeC6hp3gKakm_sQh4qhv1Y";

    alert('Resume download feature ready - please add your actual resume PDF file to implement this functionality.');
    
    // Example implementation:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/resume.pdf';
    // link.download = 'Aman_Upadhyay_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

// Send message function
function sendMessage() {
    window.location.href = 'mailto:aman.au06@gmail.com?subject=Portfolio Inquiry&body=Hello Aman, I found your portfolio and would like to discuss...';
}

function scheduleCall() {
    window.location.href = 'https://calendly.com/au06/30min';
}

// Terminal cursor blinking effect
function initializeTerminalEffects() {
    // Add glowing effect to ASCII art on hover
    const asciiTitle = document.querySelector('.ascii-title');
    if (asciiTitle) {
        asciiTitle.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px var(--terminal-green), 0 0 40px var(--terminal-green), 0 0 60px var(--terminal-green)';
        });
        
        asciiTitle.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.achievement-card, .experience-card, .skill-card, .mission-card, .about-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize terminal effects when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTerminalEffects);

// Add typing sound effect simulation (visual feedback)
function addTypingFeedback() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        // Add a subtle glow effect during typing
        const observer = new MutationObserver(() => {
            typewriterElement.style.textShadow = '0 0 8px var(--terminal-cyan)';
            setTimeout(() => {
                typewriterElement.style.textShadow = '';
            }, 100);
        });
        
        observer.observe(typewriterElement, { 
            childList: true, 
            characterData: true, 
            subtree: true 
        });
    }
}

// Initialize typing feedback
document.addEventListener('DOMContentLoaded', addTypingFeedback);

// Matrix rain effect for background (subtle)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.05';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const drops = [];
    
    for (let x = 0; x < canvas.width / 20; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = '15px Fira Code';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize matrix rain effect (optional - uncomment to enable)
// document.addEventListener('DOMContentLoaded', createMatrixRain);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        // Add visual focus indicators for keyboard navigation
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Existing scroll handling code can be moved here if needed
}, 16)); // ~60fps