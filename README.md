# sveltron (svelte + electron)

## svelte 템플릿 다운로드
[degit](https://github.com/Rich-Harris/degit)를 사용해 [svelte/template](https://github.com/sveltejs/template)에서 템플릿 가져오기

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*[Node.js](https://nodejs.org) 설치 필요*

## electron 설치

[electron](https://electronjs.org) 설치

```bash
cd svelte-app
npm install --save-dev electron
```

프로젝트 루트 폴더에 `index.js`를 생성하고 아래와 같이 작성한다.

```js
const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
	const { width, height } = screen.getPrimaryDisplay().workAreaSize;

	window = new BrowserWindow({
		width: width / 1.25,
		height: height / 1.25,
		webPreferences: {
			nodeIntegration: true
		}
	});

	window.loadFile('public/index.html');
};

let window = null;

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());
```
또는 원하는 폴더 (`./src`)에 위와 같이 `index.js`를 생성하고 `package.json`에 다음을 추가한다.

```json
main: "<파일 경로>/index.js"
```

`./public/index.html`의 `link` 태그 및 `script`의 소스의 위치에서 가장 앞의 '/'를 제거한다.

## 개발
`package.json`에서 `"start": "electron ."`를 추가 혹은 변경한다.

다음을 통해 [Rollup](https://rollupjs.org)을 실행한다:

```bash
npm run dev
```

## 배포
추가예정