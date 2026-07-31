const TOPIC_07 = {
    id: 7,
    title: "អនុគមន៍លោការីត",
    icon: "📐",
    iconPath: "icons/07.png",
    tag: "មេរៀនទី៧",
    semester: 2,
    description: "អនុគមន៍ ln(x) និង logₐ(x)",
    pdfs: [],
    exercises: [
        {
            id: 1,
            question: "គណនា \\(\\ln(e^3)\\)",
            hint: "ប្រើរូបមន្ត \\(\\ln(a^n) = n \\ln a\\)",
            answer: "\\(\\ln(e^3) = 3 \\cdot \\ln(e) = 3 \\cdot 1 = 3\\)"
        },
        {
            id: 2,
            question: "គណនា \\(\\log_2(8)\\)",
            hint: "បំបែក 8 ជា \\(2^3\\)",
            answer: "\\(\\log_2(8) = \\log_2(2^3) = 3\\)"
        },
        {
            id: 3,
            question: "គណនា \\(\\frac{d}{dx}[\\ln(3x)]\\)",
            hint: "ប្រើរូបមន្ត \\(\\frac{d}{dx}[\\ln(kx)] = \\frac{1}{x}\\)",
            answer: "\\(\\frac{d}{dx}[\\ln(3x)] = \\frac{1}{3x} \\cdot 3 = \\frac{1}{x}\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>អនុគមន៍លោការីត <strong>ln(x)</strong> គឺជាអនុគមន៍ដែលផ្ទុយនឹង eˣ</p>

        <div class="formula-box">
            \\(y = \\ln x \\Leftrightarrow x = e^y, \\quad x > 0\\)
        </div>

        <h3>២. អនុគមន៍ logarithm ទូទៅ</h3>
        <div class="formula-box">
            \\(y = \\log_a x \\Leftrightarrow x = a^y, \\quad a > 0, a \\neq 1, x > 0\\)
        </div>

        <h3>៣. លក្ខណៈ</h3>
        <ul>
            <li>\\(\\ln(1) = 0\\)</li>
            <li>\\(\\ln(e) = 1\\)</li>
            <li>\\(\\text{dom}(f) = (0, +\\infty)\\), \\(\\text{ran}(f) = \\mathbb{R}\\)</li>
            <li>\\(f'(x) = \\frac{1}{x}\\)</li>
            <li>កើនសម្រាប់ \\(x > 0\\)</li>
        </ul>

        <div class="formula-box">
            \\(\\frac{d}{dx} \\ln x = \\frac{1}{x}, \\quad \\int \\frac{1}{x} \\, dx = \\ln|x| + C\\)
        </div>

        <h3>៤. ប្រមាណវិធី</h3>
        <div class="formula-box">
            \\(\\ln(ab) = \\ln a + \\ln b, \\quad \\ln\\frac{a}{b} = \\ln a - \\ln b, \\quad \\ln(a^n) = n \\ln a\\)
        </div>

        <div class="formula-box">
            \\(\\log_a b = \\frac{\\ln b}{\\ln a} = \\frac{\\log_c b}{\\log_c a}\\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>គណនា \\(\\ln(e^3) = 3 \\cdot \\ln(e) = 3 \\cdot 1 = 3\\)</p>
            <p>គណនា \\(\\log_2(8) = \\log_2(2^3) = 3\\)</p>
        </div>
    `
};
