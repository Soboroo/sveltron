const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
	const { width, height } = screen.getPrimaryDisplay().workAreaSize;

	window = new BrowserWindow({
		width: width / 1.25,
		height: height / 1.25,
		webPreferences: {
			nodeIntegration: true
		},
		icon: 'assets/icons/png/favicon.png'
	});

	window.loadFile('public/index.html');
};

let window = null;

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());