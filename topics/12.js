const TOPIC_12 = {
    id: 12,
    title: "អាំងតេក្រាលកំណត់និងបម្រើបម្រាស់",
    icon: "📏",
    iconPath: "icons/12.png",
    tag: "មេរៀនទី១២",
    semester: 2,
    description: "អាំងតេក្រាលកំណត់ និងអនុវត្តន៍ (ផ្ទៃក្រឡា និងប្រវែងសរសៃរ)",
    pdfs: [],
    research: [],
    exercises: [
        {
            id: 1,
            question: "គណនា \\(\\int_0^2 (x^2 + 1) \\, dx\\)",
            hint: "ប្រើរូបមន្ត \\(\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C\\)",
            answer: "\\(\\int_0^2 (x^2 + 1) \\, dx = \\left[\\frac{x^3}{3} + x\\right]_0^2 = \\left(\\frac{8}{3} + 2\\right) - 0 = \\frac{14}{3}\\)"
        },
        {
            id: 2,
            question: "គណនាផ្ទៃក្រឡារវាង \\(y = x^2\\) និងអ័ក្ស x ពី 0 ដល់ 1",
            hint: "ប្រើ \\(S = \\int_a^b |f(x)| \\, dx\\)",
            answer: "\\(S = \\int_0^1 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}\\)"
        },
        {
            id: 3,
            question: "បង្ហាញថា \\(\\int_a^a f(x) \\, dx = 0\\)",
            hint: "ប្រើសម្មតិកម្ម Fundamental Theorem",
            answer: "\\(\\int_a^a f(x) \\, dx = F(a) - F(a) = 0\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>អាំងតេក្រាលកំណត់ (Definite Integral) គឺជាតម្លៃដែលគណនាពី a ដល់ b</p>

        <div class="formula-box">
            \\(\\int_a^b f(x) \\, dx = F(b) - F(a)\\)
        </div>

        <h3>២. លក្ខណៈ</h3>
        <ul>
            <li>\\(\\int_a^a f(x) \\, dx = 0\\)</li>
            <li>\\(\\int_a^b f(x) \\, dx = -\\int_b^a f(x) \\, dx\\)</li>
            <li>\\(\\int_a^b f(x) \\, dx = \\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx\\)</li>
        </ul>

        <h3>៣. សម្មតិកម្ម Fundamental Theorem</h3>
        <div class="formula-box">
            \\(\\text{ប្រសិនបើ } F(x) = \\int_a^x f(t) \\, dt \\text{ នោះ } F'(x) = f(x)\\)
        </div>

        <h3>៤. អនុវត្តន៍</h3>
        <h4>ក. ផ្ទៃក្រឡា</h4>
        <p>ផ្ទៃក្រឡារវាង f(x) និងអ័ក្ស x ពី a ដល់ b៖</p>
        <div class="formula-box">
            \\(S = \\int_a^b |f(x)| \\, dx\\)
        </div>

        <h4>ខ. ប្រវែងសរសៃរ</h4>
        <div class="formula-box">
            \\(L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx\\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>គណនា \\(\\int_0^2 (x^2 + 1) \\, dx\\)</p>
            <p>\\(= \\left[\\frac{x^3}{3} + x\\right]_0^2 = \\left(\\frac{8}{3} + 2\\right) - 0 = \\frac{14}{3}\\)</p>
        </div>
    `
};
