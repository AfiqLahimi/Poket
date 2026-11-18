POKET — iPhone web app
======================
Files: index.html, app.js, sw.js, manifest.webmanifest, icon-*.png
Upload ALL of them to the same folder on any static host (HTTPS required).

Free hosting (pick one):
- GitHub Pages: new public repo -> Add file -> Upload files -> commit.
  Settings -> Pages -> Source: "Deploy from a branch", branch main, / (root).
  Your app: https://<username>.github.io/<repo>/
- Netlify Drop: https://app.netlify.com/drop  (drag the folder, on a laptop)

Install on iPhone:
1. Open the link in Safari.
2. Share -> Add to Home Screen -> Add.
3. Open Poket from the Home Screen icon (not Safari) from now on.
   The icon and Safari keep separate data.

Move data from the Claude version:
1. Claude version: Settings -> Backup (copies JSON).
2. Paste it into Notes.
3. New app: Settings -> Restore backup -> paste -> Restore (tap twice).

Updating later: upload the new files, and change VERSION in sw.js
(e.g. poket-v7) so phones pick up the update.

Data lives only on your phone. Back up regularly (Settings -> Backup
saves a .json file you can keep in Files/iCloud Drive).
