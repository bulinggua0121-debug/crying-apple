const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

async function main() {
  const root = path.join(__dirname, "..");
  const buildDir = path.join(root, "build");
  const sourcePng = path.join(root, "logo111.png");
  const iconsetDir = path.join(buildDir, "icon.iconset");
  const icoPath = path.join(buildDir, "icon.ico");
  const icnsPath = path.join(buildDir, "icon.icns");

  if (!fs.existsSync(sourcePng)) {
    throw new Error("logo111.png not found. Put your app logo in the project root.");
  }

  fs.rmSync(iconsetDir, { recursive: true, force: true });
  fs.mkdirSync(iconsetDir, { recursive: true });

  const sizes = [
    { name: "icon_16x16.png", size: 16 },
    { name: "icon_16x16@2x.png", size: 32 },
    { name: "icon_32x32.png", size: 32 },
    { name: "icon_32x32@2x.png", size: 64 },
    { name: "icon_128x128.png", size: 128 },
    { name: "icon_128x128@2x.png", size: 256 },
    { name: "icon_256x256.png", size: 256 },
    { name: "icon_256x256@2x.png", size: 512 },
    { name: "icon_512x512.png", size: 512 },
    { name: "icon_512x512@2x.png", size: 1024 }
  ];

  for (const item of sizes) {
    const out = path.join(iconsetDir, item.name);
    execFileSync("sips", ["-z", String(item.size), String(item.size), sourcePng, "--out", out], {
      stdio: "ignore"
    });
  }

  try {
    execFileSync("iconutil", ["-c", "icns", iconsetDir, "-o", icnsPath], {
      stdio: "ignore"
    });
  } catch (err) {
    console.warn("Skipping icns generation for now:", err.message);
  }

  const pngToIco = (await import("png-to-ico")).default;
  const ico = await pngToIco([
    path.join(buildDir, "icon-128.png"),
    path.join(buildDir, "icon-256.png"),
    path.join(buildDir, "icon-512.png")
  ]);
  fs.writeFileSync(icoPath, ico);

  console.log("Generated icons:", path.relative(root, icnsPath), path.relative(root, icoPath));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
