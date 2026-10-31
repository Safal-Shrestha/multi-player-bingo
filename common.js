import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import * as fs from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import * as au from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 1) PASTE YOUR FIREBASE WEB CONFIG HERE (Project settings > Your apps > Web)
const cfg = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT.firebaseapp.com", projectId: "YOUR_PROJECT", appId: "YOUR_APP_ID" };

const app = initializeApp(cfg);
export const db = fs.getFirestore(app), auth = au.getAuth(app);
export {fs, au};
export const letter = n => "BINGO"[Math.ceil(n / 15) - 1];
// A board is valid if it is 5x5, centre is free (0), and each column uses its own 15-number range.
export const validBoard = b => Array.isArray(b) && b.length == 25 && b[12] === 0 &&
  b.every((n, i) => i == 12 || (Number.isInteger(n) && n >= i % 5 * 15 + 1 && n <= i % 5 * 15 + 15)) && new Set(b).size == 25;
export const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
