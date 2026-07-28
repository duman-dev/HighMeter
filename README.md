# 🍺 BAC Tracker & Sobriety Calculator

[👉 **Click here for HighMeter (Live App)**](https://duman-dev.github.io/HighMeter/)

A lightweight, high-performance Progressive Web App (PWA) designed to estimate Blood Alcohol Content (BAC) and calculate time to sobriety using the **Widmark Formula**. 

Its core mission is to encourage responsible drinking and keep driver and pedestrian traffic safe.

---

## ✨ Key Highlights

*   **Native-Like & Offline First:** Installable on iOS (Safari) and Android (Chrome) as a home screen app. Works 100% offline and takes less than **1 MB** of storage.
*   **Widmark Formula Logic:** Adjusts calculation based on biological sex (differs due to body water distribution ratios: 0.68 for males, 0.55 for females) and accounts for hourly metabolism (~0.015% per hour).
*   **Zero Dependencies:** Built purely with Vanilla HTML, CSS, and JavaScript.

---

## 🧮 Logic Breakdown

1. **Pure Alcohol (Grams):** Volume (ml) * (ABV / 100) * 0.8 (density)
2. **Gender Distribution (r):** Male = 0.68, Female = 0.55
3. **BAC Calculation:** BAC = (Alcohol (g) / (r * Weight (g))) * 100 - (0.015 * Hours)

---

## 🤝 Contributing

Have ideas, bug fixes, or new features to suggest? Feel free to **fork** the repository and open a **Pull Request**! Any contribution to make this project better is warmly welcome.

---

## 🔄 Future Updates

This project is actively maintained. Features like custom drink presets, drink history logging, and enhanced visual tracking will be added in upcoming updates.

---

## ⚠️ Disclaimer

This tool provides rough estimates for awareness and educational purposes only. Metabolism rates vary per person. Never drive under the influence of alcohol.

---

Made with ❤️ by [Ruzgar Duman](https://github.com/duman-dev)
