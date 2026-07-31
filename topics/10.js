const TOPIC_10 = {
    id: 10,
    title: "សមីការឌីផេរ៉ងស្យែលលំដាប់មួយ",
    icon: "🔀",
    iconPath: "icons/10.png",
    tag: "មេរៀនទី១០",
    semester: 2,
    description: "ដោះស្រាយសមីការឌីផេរ៉ងស្យែលលំដាប់ទី១",
    pdfs: [],
    content: `
            <h3>១. និយមន័យ</h3>
            <p>សមីការឌីផេរ៉ងស្យែលលំដាប់ទី១ មានទម្រង់:</p>

            <div class="formula-box">
                $$y' + P(x)y = Q(x)$$
            </div>

            <h3>២. វិធីដោះស្រាយ</h3>
            <h4>ក. សមីការអាចបំបែកបាន (Separable)</h4>
            <p>ប្រសិនបើ y' = f(x)·g(y) នោះ:</p>
            <div class="formula-box">
                $$\\frac{dy}{g(y)} = f(x) \\, dx \\Rightarrow \\int \\frac{dy}{g(y)} = \\int f(x) \\, dx$$
            </div>

            <h4>ខ. វិធីគុណវិធី (Integrating Factor)</h4>
            <p>គុណវិធី៖ μ(x) = e<sup>∫P(x)dx</sup></p>
            <div class="formula-box">
                $$y = \\frac{1}{\\mu(x)} \\int \\mu(x) Q(x) \\, dx$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>ដោះស្រាយ y' = xy</p>
                <p>dy/y = x dx</p>
                <p>∫dy/y = ∫x dx → ln|y| = x²/2 + C</p>
                <p><strong>y = Ae^(x²/2)</strong> ដែល A = eᶜ</p>
            </div>
        `
};
