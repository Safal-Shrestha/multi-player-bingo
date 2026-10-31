import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import * as fs from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import * as au from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 1) PASTE YOUR FIREBASE WEB CONFIG HERE (Project settings > Your apps > Web)
const cfg = { apiKey: "AIzaSyDy_i9Of4Ioq0TeXagQT4eZGf63SdX5yWU",
  authDomain: "multi-player-bingo-39f75.firebaseapp.com",
  projectId: "multi-player-bingo-39f75",
  storageBucket: "multi-player-bingo-39f75.firebasestorage.app",
  messagingSenderId: "575867729239",
  appId: "1:575867729239:web:e5edf0c9097c7a4844ba12"};

const app = initializeApp(cfg);
export const db = fs.getFirestore(app), auth = au.getAuth(app);
export {fs, au};
export const letter = n => "BINGO"[Math.ceil(n / 15) - 1];
// A board is valid if it is 5x5, centre is free (0), and each column uses its own 15-number range.
export const validBoard = b => Array.isArray(b) && b.length == 25 && b[12] === 0 &&
  b.every((n, i) => i == 12 || (Number.isInteger(n) && n >= i % 5 * 15 + 1 && n <= i % 5 * 15 + 15)) && new Set(b).size == 25;
export const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
