const path = require("path");
const { app, BrowserWindow, shell } = require("electron");

let mainWindow = null;

const gotSingleInstanceLock = app.requestSingleInstanceLock();

if (!gotSingleInstanceLock) {
  app.quit();
}

function createWindow() {
  console.log("[main] createWindow called");
  const win = new BrowserWindow({
    width: 1200,
    height: 1280,
    minWidth: 700,
    minHeight: 760,
    backgroundColor: "#F6F2E8",
    autoHideMenuBar: true,
    title: "Crying Apple",
    icon: path.join(__dirname, "..", "build", "icon-512.png"),
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.once("ready-to-show", () => {
    console.log("[main] ready-to-show");
    win.show();
    win.focus();
  });

  win.on("show", () => console.log("[main] window show"));
  win.on("focus", () => console.log("[main] window focus"));
  win.on("closed", () => console.log("[main] window closed"));

  win.webContents.on("did-finish-load", () => {
    console.log("[main] did-finish-load");
  });

  win.webContents.on("did-fail-load", (_event, errorCode, errorDescription) => {
    console.error("Window failed to load:", errorCode, errorDescription);
    win.show();
  });

  win.webContents.on("render-process-gone", (_event, details) => {
    console.error("[main] render-process-gone", details);
  });

  win.webContents.on("unresponsive", () => {
    console.error("[main] webContents unresponsive");
  });

  win.loadFile(path.join(__dirname, "..", "index.html"));

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow = win;
  win.on("closed", () => {
    if (mainWindow === win) {
      mainWindow = null;
    }
  });
}

if (gotSingleInstanceLock) {
  app.on("second-instance", () => {
    if (!mainWindow) {
      createWindow();
      return;
    }

    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }

    mainWindow.show();
    mainWindow.focus();
  });

  app.whenReady().then(() => {
    console.log("[main] app ready");
    if (process.platform === "darwin" && app.dock) {
      app.dock.setIcon(path.join(__dirname, "..", "build", "icon-512.png"));
    }

    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  console.log("[main] activate");
});
