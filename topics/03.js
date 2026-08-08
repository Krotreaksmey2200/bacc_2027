const TOPIC_03 = {
    id: 3,
    title: "ភាពជាប់អនុគមន៍",
    icon: "🔗",
    iconPath: "icons/03.png",
    tag: "មេរៀនទី៣",
    semester: 1,
    description: "ស្គាល់ និងពិនិត្យភាពជាប់អនុគមន៍",
    pdfs: [],
    research: [
        { name: "continuity.pdf", path: "pdfs/03_continuity/research/continuity.pdf" }
    ],
    exercises: [
        {
            id: 1,
            question: "ពិនិត្យភាពជាប់នៃ \\(\\displaystyle f(x) = \\frac{x^2 - 1}{x - 1}\\) នៅ \\(\\displaystyle x = 1\\)",
            hint: "ពិនិត្យមើលថាតើ f(1) មានតម្លៃទេ និង lim(x→1) f(x) មានតម្លៃទេ",
            answer: "\\(\\displaystyle \\lim\\limits_{x \\to 1} \\frac{(x+1)(x-1)}{x-1} = \\lim\\limits_{x \\to 1} (x+1) = 2\\) ប៉ុន្តែ \\(\\displaystyle f(1)\\) គ្មាន → មិនជាប់ (removable)"
        },
        {
            id: 2,
            question: "ពិនិត្យភាពជាប់នៃ \\(\\displaystyle f(x) = \\begin{cases} x+1 & x < 2 \\\\ 3 & x = 2 \\\\ x^2-1 & x > 2 \\end{cases}\\) នៅ \\(\\displaystyle x = 2\\)",
            hint: "ពិនិត្យលីមីតឆ្វេង និងស្ដាំ",
            answer: "\\(\\displaystyle \\lim\\limits_{x \\to 2^-} f(x) = 3\\), \\(\\displaystyle \\lim\\limits_{x \\to 2^+} f(x) = 3\\), \\(\\displaystyle f(2) = 3\\) → ជាប់"
        },
        {
            id: 3,
            question: "រកចំណុចដែល \\(\\displaystyle f(x) = \\frac{1}{x}\\) មិនជាប់",
            hint: "ពិនិត្យមើលនៅ \\(\\displaystyle x = 0\\)",
            answer: "នៅ \\(\\displaystyle x = 0\\), \\(\\displaystyle f(0)\\) គ្មាន → មិនជាប់ (infinite)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>អនុគមន៍ f(x) ជាប់នៅចំណុច a ប្រសិនបើ៖</p>
        <ol>
            <li>\\(\\displaystyle f(a)\\) មានតម្លៃ</li>
            <li>\\(\\displaystyle \\lim\\limits_{x \\to a} f(x)\\) មានតម្លៃ</li>
            <li>\\(\\displaystyle \\lim\\limits_{x \\to a} f(x) = f(a)\\)</li>
        </ol>

        <div class="formula-box">
            \\(\\displaystyle \\lim\\limits_{x \\to a^-} f(x) = \\lim\\limits_{x \\to a^+} f(x) = f(a)\\)
        </div>

        <h3>២. ប្រភេទភាពមិនជាប់</h3>
        <ul>
            <li><strong>រលាយ (Removable):</strong> លីមីតមានតែ \\(\\displaystyle f(a)\\) គ្មាន</li>
            <li><strong>លោត (Jump):</strong> លីមីតឆ្វេង ≠ លីមីតស្ដាំ</li>
            <li><strong>អនន្ត (Infinite):</strong> លីមីត = \\(\\displaystyle \\pm \\infty\\)</li>
        </ul>

        <h3>៣. លក្ខណៈភាពជាប់</h3>
        <p>ប្រសិនបើ f និង g ជាប់នៅ a នោះ៖</p>
        <ul>
            <li>\\(\\displaystyle f + g\\), \\(\\displaystyle f - g\\), \\(\\displaystyle f \\cdot g\\) ក៏ជាប់នៅ a ដែរ</li>
            <li>\\(\\displaystyle \\frac{f}{g}\\) ជាប់នៅ a ប្រសិនបើ \\(\\displaystyle g(a) \\neq 0\\)</li>
            <li>\\(\\displaystyle f \\circ g\\) (សមាសអនុគមន៍) ក៏ជាប់នៅ a ដែរ</li>
        </ul>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>ពិនិត្យភាពជាប់ \\(\\displaystyle f(x) = \\frac{x^2-1}{x-1}\\) នៅ \\(\\displaystyle x = 1\\)</p>
            <p>\\(\\displaystyle \\lim\\limits_{x \\to 1} \\frac{(x+1)(x-1)}{x-1} = \\lim\\limits_{x \\to 1} (x+1) = 2\\) ប៉ុន្តែ \\(\\displaystyle f(1)\\) គ្មាន → មិនជាប់ (removable)</p>
        </div>
    `
};
