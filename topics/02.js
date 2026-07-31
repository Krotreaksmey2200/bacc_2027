const TOPIC_02 = {
    id: 2,
    title: "លីមីតអនុគមន៍",
    icon: "📈",
    iconPath: "icons/02.png",
    tag: "មេរៀនទី២",
    semester: 1,
    description: "គណនាលីមីតអនុគមន៍ក្នុងច្រើនទម្រង់",
    pdfs: [
        { name: "limit_of_function_update.pdf", path: "pdfs/02_លីមីតអនុគមន៍/lession/limit_of_function_update.pdf", type: "lesson" },
        { name: "limit_2027.pdf", path: "pdfs/02_លីមីតអនុគមន៍/practies/limit_2027.pdf", type: "exercise" }
    ],
    content: `
            <h3>១. និយមន័យ</h3>
            <p>លីមីតអនុគមន៍ f(x) នៅពេល x → a គឺជាតម្លៃដែល f(x) ខិតជិតនៅពេល x ខិតជិត a</p>

            <div class="formula-box">
                $$\\lim_{x \\to a} f(x) = L$$
            </div>

            <h3>២. ក្បួនគណនាលីមីត</h3>
            <ul>
                <li><strong>សមាមាត្រ:</strong> ប្រសិនបើ lim f(x) = A និង lim g(x) = B ≠ 0 នោះ lim f(x)/g(x) = A/B</li>
                <li><strong>ផលគុណ:</strong> lim[f(x)·g(x)] = lim f(x) · lim g(x)</li>
                <li><strong>បូក/ដក:</strong> lim[f(x) ± g(x)] = lim f(x) ± lim g(x)</li>
            </ul>

            <h3>៣. លីមីតអនន្ត</h3>
            <div class="formula-box">
                $$\\lim_{x \\to \\infty} \\frac{a_n x^n + ...}{b_m x^m + ...}$$
            </div>
            <ul>
                <li>ប្រសិនបើ n &lt; m → លីមីត = 0</li>
                <li>ប្រសិនបើ n = m → លីមីត = aₙ/bₘ</li>
                <li>ប្រសិនបើ n &gt; m → លីមីត = ±∞</li>
            </ul>

            <h3>៤. លីមីតពិសេស</h3>
            <div class="formula-box">
                $$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$
            </div>
            <div class="formula-box">
                $$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>គណនា lim(x→2) (x² - 4)/(x - 2)</p>
                <p>= lim(x→2) (x+2)(x-2)/(x-2) = lim(x→2) (x+2) = <strong>4</strong></p>
            </div>
        `
};
