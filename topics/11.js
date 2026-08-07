const TOPIC_11 = {
    id: 11,
    title: "សមីការឌីផេរ៉ងស្យែលលំដាប់ពីរ",
    icon: "⚡",
    iconPath: "icons/11.png",
    tag: "មេរៀនទី១១",
    semester: 2,
    description: "ដោះស្រាយសមីការឌីផេរ៉ងស្យែលលំដាប់ទី២",
    pdfs: [],
    research: [],
    exercises: [
        {
            id: 1,
            question: "ដោះស្រាយ \\(\\displaystyle y'' - 5y' + 6y = 0\\)",
            hint: "សរសេរសមីការលក្ខណៈ",
            answer: "\\(\\displaystyle r^2 - 5r + 6 = 0 \\Rightarrow (r-2)(r-3) = 0 \\Rightarrow r_1 = 2, r_2 = 3\\)<br>\\(\\displaystyle y = C_1e^{2x} + C_2e^{3x}\\)"
        },
        {
            id: 2,
            question: "ដោះស្រាយ \\(\\displaystyle y'' - 4y' + 4y = 0\\)",
            hint: "ពិនិត្យមើល Δ",
            answer: "\\(\\displaystyle r^2 - 4r + 4 = 0 \\Rightarrow (r-2)^2 = 0 \\Rightarrow r = 2\\) (ឬសដូចគ្នា)<br>\\(\\displaystyle y = (C_1 + C_2x)e^{2x}\\)"
        },
        {
            id: 3,
            question: "ដោះស្រាយ \\(\\displaystyle y'' + y = 0\\)",
            hint: "សមីការលក្ខណៈមានឬសស្មុគស្មាញ",
            answer: "\\(\\displaystyle r^2 + 1 = 0 \\Rightarrow r = \\pm i\\)<br>\\(\\displaystyle y = C_1 \\cos x + C_2 \\sin x\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>សមីការឌីផេរ៉ងស្យែលលំដាប់ទី២ មានទម្រង់៖</p>

        <div class="formula-box">
            \\(\\displaystyle ay'' + by' + cy = 0\\)
        </div>

        <h3>២. សមីការធម្មតា (a=1, b, c ថេរ)</h3>
        <p>សមីការធម្មតា៖ \\(\\displaystyle y'' + by' + cy = 0\\)</p>
        <p>សមីការលក្ខណៈ៖ \\(\\displaystyle r^2 + br + c = 0\\)</p>

        <h4>ក. Δ = b² - 4c > 0 (ឬសខុសគ្នា)</h4>
        <div class="formula-box">
            \\(\\displaystyle y = C_1 e^{r_1 x} + C_2 e^{r_2 x}\\)
        </div>

        <h4>ខ. Δ = 0 (ឬសដូចគ្នា)</h4>
        <div class="formula-box">
            \\(\\displaystyle y = (C_1 + C_2 x)e^{rx}\\)
        </div>

        <h4>គ. Δ < 0 (ឬសស្មុគស្មាញ)</h4>
        <div class="formula-box">
            \\(\\displaystyle y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)\\)
        </div>
        <p>ដែល \\(\\displaystyle r = \\alpha \\pm \\beta i\\)</p>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>ដោះស្រាយ \\(\\displaystyle y'' - 5y' + 6y = 0\\)</p>
            <p>សមីការលក្ខណៈ៖ \\(\\displaystyle r^2 - 5r + 6 = 0 \\Rightarrow (r-2)(r-3) = 0\\)</p>
            <p>\\(\\displaystyle r_1 = 2\\), \\(\\displaystyle r_2 = 3\\)</p>
            <p><strong>\\(\\displaystyle y = C_1e^{2x} + C_2e^{3x}\\)</strong></p>
        </div>
    `
};
