const TOPIC_03 = {
    id: 3,
    title: "ភាពជាប់អនុគមន៍",
    icon: "🔗",
    iconPath: "icons/03.png",
    tag: "មេរៀនទី៣",
    semester: 1,
    description: "ស្គាល់ និងពិនិត្យភាពជាប់អនុគមន៍",
    pdfs: [],
    research: [],
    exercises: [
        {
            id: 1,
            question: "ពិនិត្យភាពជាប់នៃ \\(f(x) = \\frac{x^2 - 1}{x - 1}\\) នៅ \\(x = 1\\)",
            hint: "ពិនិត្យមើលថាតើ f(1) មានតម្លៃទេ និង lim(x→1) f(x) មានតម្លៃទេ",
            answer: "\\(\\lim_{x \\to 1} \\frac{(x+1)(x-1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2\\) ប៉ុន្តែ \\(f(1)\\) គ្មាន → មិនជាប់ (removable)"
        },
        {
            id: 2,
            question: "ពិនិត្យភាពជាប់នៃ \\(f(x) = \\begin{cases} x+1 & x < 2 \\\\ 3 & x = 2 \\\\ x^2-1 & x > 2 \\end{cases}\\) នៅ \\(x = 2\\)",
            hint: "ពិនិត្យលីមីតឆ្វេង និងស្ដាំ",
            answer: "\\(\\lim_{x \\to 2^-} f(x) = 3\\), \\(\\lim_{x \\to 2^+} f(x) = 3\\), \\(f(2) = 3\\) → ជាប់"
        },
        {
            id: 3,
            question: "រកចំណុចដែល \\(f(x) = \\frac{1}{x}\\) មិនជាប់",
            hint: "ពិនិត្យមើលនៅ \\(x = 0\\)",
            answer: "នៅ \\(x = 0\\), \\(f(0)\\) គ្មាន → មិនជាប់ (infinite)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>អនុគមន៍ f(x) ជាប់នៅចំណុច a ប្រសិនបើ៖</p>
        <ol>
            <li>\\(f(a)\\) មានតម្លៃ</li>
            <li>\\(\\lim_{x \\to a} f(x)\\) មានតម្លៃ</li>
            <li>\\(\\lim_{x \\to a} f(x) = f(a)\\)</li>
        </ol>

        <div class="formula-box">
            \\(\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)\\)
        </div>

        <h3>២. ប្រភេទភាពមិនជាប់</h3>
        <ul>
            <li><strong>រលាយ (Removable):</strong> លីមីតមានតែ \\(f(a)\\) គ្មាន</li>
            <li><strong>លោត (Jump):</strong> លីមីតឆ្វេង ≠ លីមីតស្ដាំ</li>
            <li><strong>អនន្ត (Infinite):</strong> លីមីត = \\(\\pm \\infty\\)</li>
        </ul>

        <h3>៣. លក្ខណៈភាពជាប់</h3>
        <p>ប្រសិនបើ f និង g ជាប់នៅ a នោះ៖</p>
        <ul>
            <li>\\(f + g\\), \\(f - g\\), \\(f \\cdot g\\) ក៏ជាប់នៅ a ដែរ</li>
            <li>\\(\\frac{f}{g}\\) ជាប់នៅ a ប្រសិនបើ \\(g(a) \\neq 0\\)</li>
            <li>\\(f \\circ g\\) (សមាសអនុគមន៍) ក៏ជាប់នៅ a ដែរ</li>
        </ul>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>ពិនិត្យភាពជាប់ \\(f(x) = \\frac{x^2-1}{x-1}\\) នៅ \\(x = 1\\)</p>
            <p>\\(\\lim_{x \\to 1} \\frac{(x+1)(x-1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2\\) ប៉ុន្តែ \\(f(1)\\) គ្មាន → មិនជាប់ (removable)</p>
        </div>
    `
};
