function openApp(appName) {
    const appWindow = document.createElement('div');
    appWindow.classList.add('app-window', appName);
    appWindow.innerHTML = `
    <div class="titlebar">
      <div class="title">${appName.charAt(0).toUpperCase() + appName.slice(1)}</div>
      <div class="controls">
        <div class="icon" onclick="minimizeApp(this)"><i class="fas fa-minus"></i></div>
        <div class="icon" onclick="maximizeApp(this)"><i class="fas fa-expand-alt"></i></div>
        <div class="icon" onclick="closeApp(this)"><i class="fas fa-times"></i></div>
      </div>
    </div>
    <div class="content">
      <!-- App content goes here -->
    </div>
  `;
    document.body.appendChild(appWindow);
    appWindow.style.display = 'block';
}

function openWebsite(url) {
    window.open(url, '_blank');
}

function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    startMenu.style.display = startMenu.style.display === 'none' ? 'block' : 'none';
}

function minimizeApp(element) {
    const appWindow = element.closest('.app-window');
    appWindow.style.display = 'none';
}

function maximizeApp(element) {
    const appWindow = element.closest('.app-window');
    if (appWindow.classList.contains('maximized')) {
        appWindow.classList.remove('maximized');
        appWindow.style.width = '';
        appWindow.style.height = '';
    } else {
        appWindow.classList.add('maximized');
        appWindow.style.width = '100%';
        appWindow.style.height = '100%';
    }
}

function closeApp(element) {
    const appWindow = element.closest('.app-window');
    appWindow.remove();
}

// Implement app functionality
function openSpotifyApp() {
    // Add Spotify app functionality here
}

function openFileExplorerApp() {
    // Add File Explorer app functionality here
}

function openNotionApp() {
    // Add Notion app functionality here
}

function openThunderbirdApp() {
    // Add Thunderbird app functionality here
}

// Add event listeners for app icons
document.querySelectorAll('.icon[onclick^="openApp("]').forEach((icon) => {
    icon.addEventListener('click', () => {
        const appName = icon.getAttribute('onclick').split("'")[1];
        window[`open${appName.charAt(0).toUpperCase() + appName.slice(1)}App`]();
    });
});
