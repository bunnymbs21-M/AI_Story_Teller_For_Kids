# 🚀 Antigravity Tales — AI Storyteller for Kids

> **Magical AI-generated stories for children aged 5–10, with text-to-speech narration.**

![Antigravity Tales](https://img.shields.io/badge/Powered%20by-Gemini%20AI-blueviolet?style=for-the-badge&logo=google)
![Built with](https://img.shields.io/badge/Built%20with-React%20%2B%20Tailwind-61DAFB?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

| Feature | Description |
|---|---|
| 📖 **AI Story Generation** | Powered by Google Gemini Flash — creates short, magical stories in seconds |
| 🌟 **Moral Lesson** | Every story ends with a highlighted moral lesson |
| 🔊 **Read Aloud / Narration** | Built-in Text-to-Speech using the Web Speech API — reads stories in a friendly voice |
| 🎨 **Bubbly UI** | Glassmorphism cards, animated pastel gradients, floating emoji stars |
| 💡 **Example Prompts** | Quick-start chip buttons so kids can jump right in |
| 📱 **Fully Responsive** | Works on desktop, tablet, and mobile |
| ⚡ **Zero Setup** | Single HTML file — no npm install, no build step, just open in a browser |

---

## 🖥️ Demo

Open `index.html` directly in your browser, or serve it locally:

```bash
npx serve .
```

Then navigate to `http://localhost:3000`.

---

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/antigravity-tales.git
cd antigravity-tales
```

### 2. Add your Gemini API Key

Open `index.html` and find this line near the top of the `<script>` block:

```js
const API_KEY = "YOUR_GEMINI_API_KEY_HERE";
```

Replace it with your key from [Google AI Studio](https://aistudio.google.com/apikey).

> **Free Tier:** The app uses `gemini-flash-latest` which is available on the free tier.  
> Image generation requires a paid Gemini plan.

### 3. Open it!

Just double-click `index.html` in your file explorer — **no server required**.

Or use a quick local server:

```bash
npx serve .
# → http://localhost:3000
```

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | **React 18** via CDN (no build step!) |
| JSX Transpiler | **Babel Standalone** via CDN |
| Styling | **Tailwind CSS** via CDN |
| Fonts | **Fredoka One + Nunito** (Google Fonts) |
| AI Model | **Google Gemini Flash** (REST API) |
| Narration | **Web Speech API** (built into the browser) |

---

## 📁 Project Structure

```
STORY_TELLER/
├── index.html          # ← The entire app lives here!
├── README.md           # This file
└── package.json        # Optional: only used for local dev tools
```

---

## 🎨 How It Works

```
User types a prompt
        │
        ▼
Gemini Flash API ──► Generates a magical story (<200 words)
        │                with a 🌟 Moral lesson at the end
        │
        ▼
  Story displayed
  in a glassmorphism card
        │
        ▼
  🔊 "Read Aloud" button
  → Web Speech API narrates the story aloud
```

---

## ⚠️ API Key Notes

- Get a free API key at [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
- The app uses `gemini-flash-latest` which works within the **free tier quota**
- Do **not** commit your real API key to a public GitHub repo — consider using environment variables if you deploy this server-side

---

## 🧠 System Prompt

The AI is instructed to act as a child-friendly storyteller:

```
You are a friendly, whimsical storyteller for children aged 5–10.
Your stories are magical, joyful, and easy to understand.
Always keep stories under 200 words.
Use simple, vivid language with fun sounds and descriptions.
End EVERY story with a clear moral lesson starting with: "🌟 Moral: "
```

---

## 🙏 Credits

- Built with 💜 by **Bhanu** · Powered by **Google Gemini AI**
- UI inspired by modern glassmorphism design trends
- Fonts by [Google Fonts](https://fonts.google.com)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).
