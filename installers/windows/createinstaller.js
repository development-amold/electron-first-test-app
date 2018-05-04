const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'electron-first-test-app-win32-ia32/'),
    authors: 'Amol Dumbre',
    owners: 'Amol Dumbre',
    title: "My first electron app",
    description: "My First Electron application",
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'electron-first-test-app.exe',
    setupExe: 'ElectronFirstTestAppInstaller.exe',
    setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'monitor-test-icon.ico')
  })
}