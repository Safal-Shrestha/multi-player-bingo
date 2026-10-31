# Bingo: setup (about 10 minutes, free)
1. console.firebase.google.com > Add project (disable Analytics).
2. Build > Firestore Database > Create (production mode). Open the Rules tab, paste `firestore.rules`, set your host email, Publish.
3. Build > Authentication > Get started. Enable **Anonymous** and **Email/Password**. Under Users, add the host email + password.
4. Authentication > Settings > Authorized domains: add `<your-username>.github.io`.
5. Project settings > Your apps > Web (</>) > copy the config into `common.js`.
6. Push this folder to a GitHub repo > Settings > Pages > deploy from main branch.
   Players open `/index.html`, the host opens `/host.html`.
Test locally with `npx serve` (ES modules need http, not file://). Use a separate browser or incognito window for host vs player, since they share one login session per browser.
