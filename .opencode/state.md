# Project State: Bacc 2027 Website

## Repository
- GitHub: `https://github.com/Krotreaksmey2200/bacc_2027.git`
- Live: `https://krotreaksmey2200.github.io/bacc_2027/`
- Latest commit: `52095a4`

## Structure
- `index.html` - Main page with topic cards
- `topic.html` - Full-page topic view with 4 tabs
- `topics/01.js` - `topics/18.js` - Individual topic data files
- `js/data.js` - Combines TOPICS array
- `js/main.js` - Main page logic
- `css/style.css` - All styling
- `pdfs/` - PDF storage per topic (lession/, practies/, research/)

## 4 Tabs per Topic
1. 📖 មេរៀន - Lesson content with inline LaTeX
2. ✏️ លំហាត់ - Interactive exercises with show/hide answers
3. 📁 ឯកសារលំហាត់ - Practice PDFs (type: "exercise")
4. 📚 ឯកសារស្រាវជ្រាវ - Research PDFs (research array)

## LaTeX Format
- Inline: `\\(` ... `\\)` (double-escaped for JS strings)
- NOT display mode `$$...$$`
- MathJax config: `inlineMath: [['\\(', '\\)']]`
- MathJax typesets all tabs on load + exercise tab on switch

## Topic Data Structure
```js
const TOPIC_XX = {
    id: Number,
    title: "Khmer title",
    icon: "emoji",
    iconPath: "icons/XX.png",
    tag: "មេរៀនទីX",
    semester: 1|2|3,
    description: "Khmer description",
    pdfs: [{ name, path, type: "lesson"|"exercise" }],
    research: [{ name, path }],
    exercises: [{ id, question, hint, answer }],
    content: `HTML template with inline LaTeX`
};
```

## Key Features
- Dark/Light theme toggle (localStorage)
- Semester tabs: ឆមាសទី១, ឆមាសទី២, ត្រៀមប្រឡងបាក់ឌុប
- Battambang font for Khmer
- Responsive: Desktop/Tablet/Mobile
- PDF preview (iframe) + View (target="_blank") + Download buttons
- Motivation section in Topic 02 (Limits)

## To Add PDFs
1. Place file in `pdfs/XX_មេរៀន/research/` (or lession/practies)
2. Add entry to `topics/XX.js` in appropriate array (pdfs or research)
