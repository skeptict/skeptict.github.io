// Theme definitions
const themes = [
    { id: 'default', name: '🎨 Current Design' },
    { id: '01', name: 'Clean Minimal' },
    { id: '02', name: 'Dark Elegant' },
    { id: '03', name: 'Newspaper' },
    { id: '04', name: 'Card-Based' },
    { id: '05', name: 'Sidebar Layout' },
    { id: '06', name: 'Terminal/Hacker' },
    { id: '07', name: 'Pastel Soft' },
    { id: '08', name: 'Bold Colorful' },
    { id: '09', name: 'Brutalist' },
    { id: '10', name: 'Neumorphic' },
    { id: '11', name: 'Split Screen' },
    { id: '12', name: 'Magazine Style' },
    { id: '13', name: 'Gradient Heavy' },
    { id: '14', name: 'Monochrome' },
    { id: '15', name: 'Retro 90s' },
    { id: '16', name: 'Art Deco' },
    { id: '17', name: 'Earth Tones' },
    { id: '18', name: 'Neon Cyberpunk' },
    { id: '19', name: 'Japanese Minimal' },
    { id: '20', name: 'Swiss Design' },
    { id: '21', name: 'Memphis Style' },
    { id: '22', name: 'Vaporwave' },
    { id: '23', name: 'Material Design' },
    { id: '24', name: 'Glass Enhanced' },
    { id: '25', name: 'Book/Reading' }
];

// Current theme
let currentTheme = 'default';

// Get saved theme from localStorage
function getSavedTheme() {
    return localStorage.getItem('skeptict-theme') || 'default';
}

// Save theme to localStorage
function saveTheme(themeId) {
    localStorage.setItem('skeptict-theme', themeId);
}

// Load and apply a theme
function loadTheme(themeId) {
    // Fade out
    document.body.style.transition = 'opacity 0.2s';
    document.body.style.opacity = '0';

    setTimeout(() => {
        // Update stylesheet
        const themeLink = document.getElementById('theme-stylesheet');
        const filename = themeId === 'default' ? 'default.css' : `${themeId}-${getThemeFilename(themeId)}.css`;
        themeLink.href = `/css/themes/${filename}`;

        // Update current theme
        currentTheme = themeId;
        saveTheme(themeId);

        // Update active state in menu
        updateMenuActiveState();

        // Fade back in
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    }, 200);
}

// Get theme filename from theme ID
function getThemeFilename(themeId) {
    const themeNames = {
        '01': 'clean-minimal',
        '02': 'dark-elegant',
        '03': 'newspaper',
        '04': 'card-based',
        '05': 'sidebar-layout',
        '06': 'terminal-hacker',
        '07': 'pastel-soft',
        '08': 'bold-colorful',
        '09': 'brutalist',
        '10': 'neumorphic',
        '11': 'split-screen',
        '12': 'magazine-style',
        '13': 'gradient-heavy',
        '14': 'monochrome',
        '15': 'retro-90s',
        '16': 'art-deco',
        '17': 'earth-tones',
        '18': 'neon-cyberpunk',
        '19': 'japanese-minimal',
        '20': 'swiss-design',
        '21': 'memphis-style',
        '22': 'vaporwave',
        '23': 'material-design',
        '24': 'glass-enhanced',
        '25': 'book-reading'
    };
    return themeNames[themeId] || 'default';
}

// Toggle theme menu visibility
function toggleMenu() {
    const menu = document.getElementById('styleSwitcherMenu');
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
}

// Close menu when clicking outside
function handleClickOutside(event) {
    const menu = document.getElementById('styleSwitcherMenu');
    const button = document.getElementById('styleSwitcherBtn');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
    }
}

// Update active state in menu
function updateMenuActiveState() {
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => {
        if (option.dataset.themeId === currentTheme) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Build theme menu
function buildThemeMenu() {
    const menu = document.getElementById('styleSwitcherMenu');

    themes.forEach(theme => {
        const option = document.createElement('div');
        option.className = 'theme-option';
        option.dataset.themeId = theme.id;
        option.textContent = theme.name;

        option.onclick = () => {
            loadTheme(theme.id);
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        };

        if (theme.id === currentTheme) {
            option.classList.add('active');
        }

        menu.appendChild(option);
    });
}

// Initialize style switcher
function initStyleSwitcher() {
    // Load saved theme
    currentTheme = getSavedTheme();
    loadTheme(currentTheme);

    // Build menu
    buildThemeMenu();

    // Add button click handler
    const button = document.getElementById('styleSwitcherBtn');
    button.onclick = toggleMenu;

    // Add click outside handler
    document.addEventListener('click', handleClickOutside);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStyleSwitcher);
} else {
    initStyleSwitcher();
}
