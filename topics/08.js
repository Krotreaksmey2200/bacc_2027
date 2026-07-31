const TOPIC_08 = {
    id: 8,
    title: "អាំងតេក្រាលមិនកំណត់",
    icon: "∫",
    iconPath: "icons/08.png",
    tag: "មេរៀនទី៨",
    semester: 1,
    description: "ប្រភេទអាំងតេក្រាល និងរូបមន្ត",
    pdfs: [],
    content: `
            <h3>១. និយមន័យ</h3>
            <p>អាំងតេក្រាលមិនកំណត់ (Indefinite Integral) គឺជាអនុគមន៍ F(x) ដែល F'(x) = f(x)</p>

            <div class="formula-box">
                $$\\int f(x) \\, dx = F(x) + C, \\quad \\text{ដែល } F'(x) = f(x)$$
            </div>

            <h3>២. រូបមន្តសំខាន់ៗ</h3>
            <div class="formula-box">
                $$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$
            </div>
            <div class="formula-box">
                $$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$
            </div>
            <div class="formula-box">
                $$\\int e^x \\, dx = e^x + C$$
            </div>
            <div class="formula-box">
                $$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$$
            </div>
            <div class="formula-box">
                $$\\int \\sin x \\, dx = -\\cos x + C$$
            </div>
            <div class="formula-box">
                $$\\int \\cos x \\, dx = \\sin x + C$$
            </div>

            <h3>៣. ប្រមាណវិធី</h3>
            <ul>
                <li><strong>បូក/ដក:</strong> ∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx</li>
                <li><strong>ផលគុណ:</strong> ∫kf(x)dx = k∫f(x)dx</li>
            </ul>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>∫(3x² + 2x + 1)dx = x³ + x² + x + C</p>
                <p>∫e^(2x)dx = (1/2)e^(2x) + C</p>
            </div>
        `
};
