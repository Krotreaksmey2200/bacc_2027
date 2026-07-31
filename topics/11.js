const TOPIC_11 = {
    id: 11,
    title: "សមីការឌីផេរ៉ងស្យែលលំដាប់ពីរ",
    icon: "⚡",
    iconPath: "icons/11.png",
    tag: "មេរៀនទី១១",
    semester: 2,
    description: "ដោះស្រាយសមីការឌីផេរ៉ងស្យែលលំដាប់ទី២",
    pdfs: [],
    content: `
            <h3>១. និយមន័យ</h3>
            <p>សមីការឌីផេរ៉ងស្យែលលំដាប់ទី២ មានទម្រង់:</p>

            <div class="formula-box">
                $$ay'' + by' + cy = 0$$
            </div>

            <h3>២. សមីការធម្មតា (a=1, b, c ថេរ)</h3>
            <p>សមីការធម្មតា៖ y'' + by' + cy = 0</p>
            <p>សមីការលក្ខណៈ៖ r² + br + c = 0</p>

            <h4>ក. Δ = b² - 4c &gt; 0 (ឬសខុសគ្នា)</h4>
            <div class="formula-box">
                $$y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$$
            </div>

            <h4>ខ. Δ = 0 (ឬសដូចគ្នា)</h4>
            <div class="formula-box">
                $$y = (C_1 + C_2 x)e^{rx}$$
            </div>

            <h4>គ. Δ &lt; 0 (ឬសស្មុគស្មាញ)</h4>
            <div class="formula-box">
                $$y = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$$
            </div>
            <p>ដែល r = α ± βi</p>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>ដោះស្រាយ y'' - 5y' + 6y = 0</p>
                <p>សមីការលក្ខណៈ៖ r² - 5r + 6 = 0 → (r-2)(r-3) = 0</p>
                <p>r₁ = 2, r₂ = 3</p>
                <p><strong>y = C₁e^(2x) + C₂e^(3x)</strong></p>
            </div>
        `
};
