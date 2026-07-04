// Pn4 Landing + Privacy Policy — Cloudflare Worker

const INDEX = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pn4 — Pterodactyl Panel Client</title>
    <meta name="description" content="Pn4 is a mobile client for managing Pterodactyl game servers. Connect to any Pterodactyl panel and control your servers from your phone.">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#3B82F6">
    <link rel="canonical" href="https://pn4.xd.in.th/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Pn4 — Pterodactyl Panel Client">
    <meta property="og:description" content="Manage your Pterodactyl game servers from your phone. Real-time console, file manager, addon installer, and more.">
    <meta property="og:url" content="https://pn4.xd.in.th/">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif; background: #0F1419; color: #F8FAFC; line-height: 1.6; -webkit-font-smoothing: antialiased; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 14px 40px; background: rgba(15,20,25,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center; }
        nav .logo { font-size: 22px; font-weight: 700; color: #fff; text-decoration: none; display: flex; align-items: center; gap: 10px; }
        nav .logo span { color: #3B82F6; }
        nav .nav-links { display: flex; gap: 24px; }
        nav .nav-links a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; transition: color .2s; }
        nav .nav-links a:hover { color: #fff; }
        .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 120px 40px 80px; text-align: center; background: radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%); }
        .hero h1 { font-size: 48px; font-weight: 800; line-height: 1.2; margin-bottom: 16px; }
        .hero h1 span { color: #3B82F6; }
        .hero p { font-size: 18px; color: rgba(255,255,255,0.5); max-width: 560px; margin: 0 auto 32px; }
        .hero .btn { display: inline-block; padding: 14px 36px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 16px; transition: transform .2s; background: #3B82F6; color: #fff; }
        .hero .btn:hover { transform: translateY(-2px); }
        .features { padding: 80px 40px; max-width: 1100px; margin: 0 auto; }
        .features h2 { text-align: center; font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .features h2 span { color: #3B82F6; }
        .features > p { text-align: center; color: rgba(255,255,255,0.5); margin-bottom: 48px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px; transition: transform .2s, border-color .2s; }
        .card:hover { transform: translateY(-4px); border-color: rgba(59,130,246,0.3); }
        .card .icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 16px; }
        .card h3 { font-size: 17px; font-weight: 600; margin-bottom: 6px; }
        .card p { color: rgba(255,255,255,0.5); font-size: 14px; }
        footer { padding: 32px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); }
        footer .links { margin-bottom: 10px; display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; }
        footer .links a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 13px; }
        footer .links a:hover { color: #fff; }
        footer .copyright { color: rgba(255,255,255,0.25); font-size: 12px; }
        @media (max-width: 768px) { nav { padding: 12px 20px; } .hero { padding: 100px 20px 40px; } .hero h1 { font-size: 32px; } .features { padding: 60px 20px; } }
    </style>
</head>
<body>
<nav><a href="/" class="logo">Pn<span>4</span></a><div class="nav-links"><a href="#features">Features</a><a href="/privacy-policy">Privacy</a></div></nav>
<section class="hero">
    <div>
        <h1>Manage Your Game Servers<br><span>From Your Phone</span></h1>
        <p>Pn4 connects to any Pterodactyl Panel via API. Monitor resources in real-time, manage files, install Minecraft Bedrock addons, and control your servers — all from your mobile device.</p>
        <a href="#features" class="btn">View Features</a>
    </div>
</section>
<section class="features" id="features">
    <h2>Core <span>Features</span></h2>
    <p>Everything you need to manage a Pterodactyl server</p>
    <div class="grid">
        <div class="card"><div class="icon" style="background:rgba(34,197,94,0.15);color:#22c55e">▶</div><h3>Power Control</h3><p>Start, stop, restart, and kill your servers instantly with live status updates.</p></div>
        <div class="card"><div class="icon" style="background:rgba(59,130,246,0.15);color:#3B82F6">⏚</div><h3>Live Dashboard</h3><p>Real-time CPU, RAM, disk, and network monitoring via WebSocket.</p></div>
        <div class="card"><div class="icon" style="background:rgba(139,92,246,0.15);color:#8B5CF6">📁</div><h3>File Manager</h3><p>Upload, download, edit, rename, and delete files. Create folders, compress, decompress — full CRUD.</p></div>
        <div class="card"><div class="icon" style="background:rgba(245,158,11,0.15);color:#f59e0b">📦</div><h3>Minecraft Bedrock Addons</h3><p>Install .mcaddon, .mcpack, and .zip behavior/resource packs directly to your Bedrock server.</p></div>
        <div class="card"><div class="icon" style="background:rgba(16,185,129,0.15);color:#10B981">💬</div><h3>Web Console</h3><p>Send commands and view server logs in real-time with ANSI color support.</p></div>
        <div class="card"><div class="icon" style="background:rgba(239,68,68,0.15);color:#ef4444">💾</div><h3>Backups &amp; Databases</h3><p>Create, restore, and manage server backups. View and rotate databases.</p></div>
        <div class="card"><div class="icon" style="background:rgba(59,130,246,0.15);color:#3B82F6">🔑</div><h3>Multi-Panel Support</h3><p>Connect multiple Pterodactyl panels. Switch between them seamlessly.</p></div>
        <div class="card"><div class="icon" style="background:rgba(139,92,246,0.15);color:#8B5CF6">🔧</div><h3>Startup Config</h3><p>Edit startup variables, change Docker images, and configure server settings.</p></div>
    </div>
</section>
<footer>
    <div class="links"><a href="/privacy-policy">Privacy Policy</a><a href="mailto:minevps@hotmail.com">Contact</a></div>
    <p class="copyright">&copy; 2025 Pn4. All rights reserved.</p>
</footer>
</body>
</html>`;

const PRIVACY = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy — Pn4</title>
    <meta name="description" content="Privacy Policy for Pn4 — the Pterodactyl Panel mobile client.">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#3B82F6">
    <link rel="canonical" href="https://pn4.xd.in.th/privacy-policy">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Privacy Policy — Pn4">
    <meta property="og:description" content="Learn how Pn4 handles your data and protects your privacy.">
    <meta property="og:url" content="https://pn4.xd.in.th/privacy-policy">
    <style>
        :root { --text: #e2e2ea; --bg: #0F1419; --surface: #1A2026; --border: #2A323C; --accent: #3B82F6; --accent-light: rgba(59,130,246,0.12); --muted: #94A3B8; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif; max-width: 820px; margin: 0 auto; padding: 0 20px 60px; line-height: 1.85; color: var(--text); background: var(--bg); -webkit-font-smoothing: antialiased; }
        .page-header { padding: 40px 0 20px; border-bottom: 2px solid var(--accent); margin-bottom: 32px; }
        .page-header h1 { font-size: 28px; color: var(--accent); font-weight: 800; }
        .page-header .updated { color: var(--muted); font-size: 14px; font-style: italic; margin-top: 6px; }
        .page-header .back-link { display: inline-block; margin-bottom: 12px; font-size: 13px; color: var(--accent); text-decoration: none; font-weight: 500; }
        .page-header .back-link:hover { text-decoration: underline; }
        h2 { color: var(--accent); font-size: 20px; font-weight: 700; margin: 36px 0 10px; }
        h3 { color: #60A5FA; font-size: 16px; font-weight: 600; margin: 20px 0 6px; }
        p { margin-bottom: 10px; }
        ul, ol { padding-left: 24px; margin-bottom: 12px; }
        li { margin-bottom: 6px; }
        .data-table { width: 100%; border-collapse: collapse; margin: 12px 0 20px; font-size: 14px; }
        .data-table th, .data-table td { padding: 10px 14px; border: 1px solid var(--border); text-align: left; vertical-align: top; }
        .data-table th { background: var(--accent-light); color: var(--accent); font-weight: 600; font-size: 13px; white-space: nowrap; }
        .data-table td { background: var(--surface); }
        .data-table td:first-child { font-weight: 500; white-space: nowrap; }
        .contact-box { background: var(--accent-light); border: 1px solid rgba(59,130,246,0.2); border-radius: 10px; padding: 20px 24px; margin-top: 20px; }
        .contact-box p { margin-bottom: 4px; }
        .contact-box strong { color: var(--accent); }
        .page-footer { margin-top: 48px; padding-top: 20px; border-top: 1px solid var(--border); text-align: center; }
        .page-footer a { color: var(--accent); text-decoration: none; font-size: 13px; margin: 0 12px; font-weight: 500; }
        .page-footer a:hover { text-decoration: underline; }
        .page-footer .copyright { color: var(--muted); font-size: 12px; margin-top: 10px; }
        @media (max-width: 600px) { body { font-size: 15px; } .page-header h1 { font-size: 24px; } h2 { font-size: 18px; } .data-table { font-size: 12px; } }
    </style>
</head>
<body>
<div class="page-header">
    <a href="/" class="back-link">&larr; Back to home</a>
    <h1>Privacy Policy</h1>
    <p class="updated">Effective: July 4, 2026 &ensp;|&ensp; Version 1.0</p>
</div>
<p>Pn4 (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a mobile client for managing game servers through Pterodactyl Panel. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>
<p>By using Pn4, you agree to the practices described in this policy. If you do not agree, please discontinue use of the app.</p>
<h2>1. Information We Collect</h2>
<h3>1.1 Information You Provide</h3>
<ul>
    <li><strong>Panel Connection Details:</strong> Pterodactyl Panel URL and API Key — stored <strong>only on your device</strong> and used solely to communicate with your Pterodactyl servers.</li>
    <li><strong>Server Data:</strong> Server names, identifiers, and configurations are fetched from your Pterodactyl Panel and cached locally for display purposes.</li>
</ul>
<h3>1.2 Information Stored Locally</h3>
<ul>
    <li><strong>Authentication Tokens:</strong> API keys are stored in secure device storage (Keychain on iOS, EncryptedSharedPreferences on Android).</li>
    <li><strong>App Preferences:</strong> Language preference and panel list stored in SharedPreferences.</li>
    <li><strong>Addon Icons:</strong> Cached locally in the app's documents directory for faster loading.</li>
</ul>
<h3>1.3 Third-Party Services</h3>
<table class="data-table">
    <thead><tr><th>Service</th><th>Data Collected</th><th>Purpose</th><th>Policy</th></tr></thead>
    <tbody>
        <tr>
            <td>Google AdMob</td>
            <td>Advertising ID (AAID), device model, OS version, coarse location (if enabled), ad interaction data</td>
            <td>Display banner and interstitial advertisements</td>
            <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a></td>
        </tr>
    </tbody>
</table>
<p><strong>What we do NOT collect:</strong> We do not collect precise location (GPS), contacts, health data, biometric data, media files, credit card information, or any data from your Pterodactyl servers beyond what is necessary to display in the app. We do not operate a backend server — all communication is directly between your device and your Pterodactyl Panel.</p>
<h2>2. How We Use Your Information</h2>
<ol>
    <li><strong>Provide core app functionality</strong> — Connect to your Pterodactyl Panel, manage servers, files, databases, backups, and console access.</li>
    <li><strong>Display advertisements</strong> — Google AdMob displays banner and interstitial ads to support the app's development.</li>
    <li><strong>Improve user experience</strong> — Cache data locally for faster load times and offline access.</li>
</ol>
<h2>3. Data Storage &amp; Security</h2>
<h3>3.1 Storage Duration</h3>
<ul>
    <li><strong>Panel credentials &amp; API keys:</strong> Stored locally until you remove the panel, log out, or uninstall the app.</li>
    <li><strong>Cached server data &amp; icons:</strong> Stored locally, refreshed on each app launch, cleared on app uninstall.</li>
</ul>
<h3>3.2 Security Measures</h3>
<ul>
    <li><strong>Encryption in transit:</strong> All communication between the app and your Pterodactyl Panel uses HTTPS/TLS.</li>
    <li><strong>Secure local storage:</strong> API keys stored in platform-secure storage (Keychain / EncryptedSharedPreferences).</li>
    <li><strong>No backend:</strong> Since Pn4 connects directly to your panel without a proxy server, your data never passes through our infrastructure.</li>
</ul>
<h2>4. Data Sharing</h2>
<p>We <strong>do not sell</strong> your personal data. Data is shared with third parties only in these cases:</p>
<ul>
    <li><strong>Google AdMob:</strong> Receives Advertising ID and device info for ad delivery.</li>
    <li><strong>Your Pterodactyl Panel:</strong> API keys and commands are sent directly to the panel URL you configure.</li>
    <li><strong>Legal requirements:</strong> If required by applicable law, court order, or governmental regulation.</li>
</ul>
<h2>5. Your Rights</h2>
<ul>
    <li><strong>Access:</strong> All your data is on your device — view panel connections in Settings.</li>
    <li><strong>Deletion:</strong> Remove a panel or uninstall the app to delete all locally stored data.</li>
    <li><strong>Opt-out of ads:</strong> <em>Settings → Google → Ads</em> (Android) or <em>Settings → Privacy → Apple Advertising</em> (iOS).</li>
    <li><strong>Contact:</strong> For privacy requests, email minevps@hotmail.com.</li>
</ul>
<h2>6. Advertising &amp; Your Choices</h2>
<p>Pn4 uses Google AdMob for banner ads (bottom of server list) and interstitial ads (when entering server detail, max once every 5 minutes). AdMob may use your device's Advertising ID for ad personalization.</p>
<p><strong>Control ads:</strong></p>
<ul>
    <li><strong>Android:</strong> Settings → Google → Ads → Delete Advertising ID, or opt out of personalization.</li>
    <li><strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking → disable; Settings → Apple Advertising → disable Personalized Ads.</li>
</ul>
<h2>7. Children's Privacy</h2>
<p>Pn4 is a server management utility. It is not directed at children under 13. We do not knowingly collect personal information from children. If you believe your child has provided data, contact us at minevps@hotmail.com.</p>
<h2>8. GDPR &amp; PDPA Compliance</h2>
<p>For EU/EEA/UK (GDPR) and Thailand (PDPA) users: We process data under legitimate interest (app functionality) and consent (advertising). You have rights to access, rectify, delete, and port your data. Contact minevps@hotmail.com — response within 30 days.</p>
<h2>9. Changes to This Policy</h2>
<p>We may update this policy. Material changes will be notified in-app or on this page. Continued use after changes means acceptance.</p>
<h2>10. Contact Us</h2>
<div class="contact-box">
    <p>Questions about this Privacy Policy or wish to exercise your data rights?</p>
    <p style="margin-top:12px;"><strong>&#x1F4E7; Email:</strong> minevps@hotmail.com</p>
    <p><strong>&#x1F310; Website:</strong> <a href="https://pn4.xd.in.th">https://pn4.xd.in.th</a></p>
    <p><strong>&#x23F1; Response time:</strong> Within 7 business days</p>
    <p style="margin-top:8px; font-size:13px; color: var(--muted);">Data access/deletion/portability requests completed within 30 days as required by law.</p>
</div>
<div class="page-footer">
    <a href="/">Home</a>
    <a href="mailto:minevps@hotmail.com">Contact</a>
    <p class="copyright">&copy; 2025 Pn4. All rights reserved.</p>
</div>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Routing
    if (path === '/privacy-policy' || path === '/privacy-policy.html') {
      return new Response(PRIVACY, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    // Home page (also catch /index.html)
    if (path === '/' || path === '/index.html') {
      return new Response(INDEX, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    // API: version check
    if (path === '/api/version') {
      return new Response(JSON.stringify({
        version: '1.0.0',
        buildNumber: 1,
        forceUpdate: false,
        storeUrl: 'https://play.google.com/store/apps/details?id=com.xdstudio.pn4',
      }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    // 404
    return new Response('Not Found', { status: 404 });
  },
};
