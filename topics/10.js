const TOPIC_10 = {
    id: 10,
    title: "សមីការឌីផេរ៉ងស្យែលលំដាប់មួយ",
    icon: "🔀",
    iconPath: "icons/10.png",
    tag: "មេរៀនទី១០",
    semester: 2,
    description: "ដោះស្រាយសមីការឌីផេរ៉ងស្យែលលំដាប់ទី១",
    pdfs: [],
    exercises: [
        {
            id: 1,
            question: "ដោះស្រាយ \(y' = xy\)",
            hint: "បំបែកអថេរ",
            answer: "\(\\frac{dy}{y} = x \\, dx \\Rightarrow \\int \\frac{dy}{y} = \\int x \\, dx \\Rightarrow \\ln|y| = \\frac{x^2}{2} + C \\Rightarrow y = Ae^{x^2/2}\)"
        },
        {
            id: 2,
            question: "ដោះស្រាយ \(y' + y = e^x\)",
            hint: "ប្រើវិធីគុណវិធី \(\\mu(x) = e^{\\int 1 \\, dx} = e^x\)",
            answer: "\(y = \\frac{1}{e^x} \\int e^x \\cdot e^x \\, dx = \\frac{1}{e^x} \\cdot \\frac{e^{2x}}{2} + C = \\frac{e^x}{2} + Ce^{-x}\)"
        },
        {
            id: 3,
            question: "ដោះស្រាយ \(y' = y^2\)",
            hint: "បំបែកអថេរ",
            answer: "\(\\frac{dy}{y^2} = dx \\Rightarrow -\\frac{1}{y} = x + C \\Rightarrow y = -\\frac{1}{x + C}\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>សមីការឌីផេរ៉ងស្យែលលំដាប់ទី១ មានទម្រង់៖</p>

        <div class="formula-box">
            \(y' + P(x)y = Q(x)\)
        </div>

        <h3>២. វិធីដោះស្រាយ</h3>
        <h4>ក. សមីការអាចបំបែកបាន (Separable)</h4>
        <p>ប្រសិនបើ \(y' = f(x) \\cdot g(y)\) នោះ៖</p>
        <div class="formula-box">
            \(\\frac{dy}{g(y)} = f(x) \\, dx \\Rightarrow \\int \\frac{dy}{g(y)} = \\int f(x) \\, dx\)
        </div>

        <h4>ខ. វិធីគុណវិធី (Integrating Factor)</h4>
        <p>គុណវិធី៖ \(\\mu(x) = e^{\\int P(x) \\, dx}\)</p>
        <div class="formula-box">
            \(y = \\frac{1}{\\mu(x)} \\int \\mu(x) Q(x) \\, dx\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>ដោះស្រាយ \(y' = xy\)</p>
            <p>\(\\frac{dy}{y} = x \\, dx\)</p>
            <p>\(\\int \\frac{dy}{y} = \\int x \\, dx \\Rightarrow \\ln|y| = \\frac{x^2}{2} + C\)</p>
            <p><strong>\(y = Ae^{x^2/2}\)</strong> ដែល \(A = e^C\)</p>
        </div>
    `
};
