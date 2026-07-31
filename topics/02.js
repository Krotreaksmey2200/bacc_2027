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
    exercises: [
        {
            id: 1,
            question: "គណនា \\(\\lim_{x \\to 3} (x^2 - 9)/(x - 3)\\)",
            hint: "បំបែកកន្សោមភាគដោយប្រើ \\((x^2 - 9) = (x+3)(x-3)\\)",
            answer: "\\(\\lim_{x \\to 3} \\frac{(x+3)(x-3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6\\)"
        },
        {
            id: 2,
            question: "គណនា \\(\\lim_{x \\to 0} \\frac{\\sin 5x}{x}\\)",
            hint: "ប្រើរូបមន្ត \\(\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1\\)",
            answer: "\\(\\lim_{x \\to 0} \\frac{\\sin 5x}{x} = \\lim_{x \\to 0} \\frac{5 \\cdot \\sin 5x}{5x} = 5 \\cdot 1 = 5\\)"
        },
        {
            id: 3,
            question: "គណនា \\(\\lim_{x \\to \\infty} \\frac{3x^2 + 2x}{5x^2 - 1}\\)",
            hint: "ចែកគ្រប់ពាក្យដោយ \\(x^2\\)",
            answer: "\\(\\lim_{x \\to \\infty} \\frac{3 + \\frac{2}{x}}{5 - \\frac{1}{x^2}} = \\frac{3}{5}\\)"
        },
        {
            id: 4,
            question: "គណនា \\(\\lim_{x \\to 0} \\frac{e^x - 1}{x}\\)",
            hint: "ប្រើរូបមន្តពិសេស",
            answer: "\\(\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1\\)"
        },
        {
            id: 5,
            question: "គណនា \\(\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}\\)",
            hint: "ប្រើរូបមន្ត \\(1 - \\cos x = 2\\sin^2(x/2)\\)",
            answer: "\\(\\lim_{x \\to 0} \\frac{2\\sin^2(x/2)}{x^2} = \\lim_{x \\to 0} \\frac{\\sin^2(x/2)}{2(x/2)^2} = \\frac{1}{2}\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>លីមីតអនុគមន៍ f(x) នៅពេល x → a គឺជាតម្លៃដែល f(x) ខិតជិតនៅពេល x ខិតជិត a</p>

        <div class="formula-box">
            \\(\\lim_{x \\to a} f(x) = L\\)
        </div>

        <h3>២. ក្បួនគណនាលីមីត</h3>
        <ul>
            <li><strong>សមាមាត្រ:</strong> ប្រសិនបើ \\(\\lim f(x) = A\\) និង \\(\\lim g(x) = B \\neq 0\\) នោះ \\(\\lim \\frac{f(x)}{g(x)} = \\frac{A}{B}\\)</li>
            <li><strong>ផលគុណ:</strong> \\(\\lim[f(x) \\cdot g(x)] = \\lim f(x) \\cdot \\lim g(x)\\)</li>
            <li><strong>បូក/ដក:</strong> \\(\\lim[f(x) \\pm g(x)] = \\lim f(x) \\pm \\lim g(x)\\)</li>
        </ul>

        <h3>៣. លីមីតអនន្ត</h3>
        <div class="formula-box">
            \\(\\lim_{x \\to \\infty} \\frac{a_n x^n + \\cdots}{b_m x^m + \\cdots}\\)
        </div>
        <ul>
            <li>ប្រសិនបើ \\(n < m\\) → លីមីត = 0</li>
            <li>ប្រសិនបើ \\(n = m\\) → លីមីត = \\(\\frac{a_n}{b_m}\\)</li>
            <li>ប្រសិនបើ \\(n > m\\) → លីមីត = \\(\\pm \\infty\\)</li>
        </ul>

        <h3>៤. លីមីតពិសេស</h3>
        <div class="formula-box">
            \\(\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0\\)
        </div>
        <div class="formula-box">
            \\(\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1\\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>គណនា \\(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\\)</p>
            <p>\\(= \\lim_{x \\to 2} \\frac{(x+2)(x-2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4\\)</p>
        </div>
    `
};
