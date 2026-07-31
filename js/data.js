const TOPICS = [
    {
        id: 1,
        title: "កុំផ្លិច",
        icon: "🔢",
        tag: "មុខទី១",
        description: "ស្គាល់ និងប្រើប្រាស់កុំផ្លិច រូបមន្ត និងអនុវត្តន៍",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>កុំផ្លិច (Complex Number) គឺជាលេខដែលមានរូបភាព <strong>z = a + bi</strong> ដែល a និង b ជាលេខពិត និង i ជាលេខអាចន្លាស់ដែល i² = -1</p>
            <ul>
                <li><strong>a</strong> គឺជាផ្នែកពិត (Real part) → Re(z) = a</li>
                <li><strong>b</strong> គឺជាផ្នែកអាចន្លាស់ (Imaginary part) → Im(z) = b</li>
            </ul>

            <div class="formula-box">$$z = a + bi, \\quad i = \\sqrt{-1}, \\quad i^2 = -1$$</div>

            <h3>២. ទម្រង់នៃកុំផ្លិច</h3>
            <ul>
                <li><strong>ទម្រង់ទូទៅ:</strong> z = a + bi</li>
                <li><strong>ទម្រង់ទស្សនៈ:</strong> z = r(cos θ + i sin θ) = r·e<sup>iθ</sup></li>
                <li><strong>ទម្រង់អថេរ:</strong> z = r·∠θ</li>
            </ul>

            <div class="formula-box">
                $$r = |z| = \\sqrt{a^2 + b^2}, \\quad \\theta = \\arg(z) = \\arctan\\left(\\frac{b}{a}\\right)$$
            </div>

            <h3>៣. ប្រមាណវិធីនៃកុំផ្លិច</h3>
            <h4>ក. បូក និងដក</h4>
            <div class="formula-box">
                $$(a + bi) + (c + di) = (a + c) + (b + d)i$$
            </div>
            <h4>ខ. គុណ</h4>
            <div class="formula-box">
                $$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$
            </div>
            <h4>គ. ចែក</h4>
            <div class="formula-box">
                $$\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{c^2 + d^2}$$
            </div>

            <h3>៤. សមីការទាក់ទងនឹងកុំផ្លិច</h3>
            <p>ដោះស្រាយសមីការដែលមាន x² + 1 = 0 បាន x = ±i</p>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>គណនា z₁ = 3 + 2i និង z₂ = 1 - 4i</p>
                <p>z₁ + z₂ = (3+1) + (2-4)i = <strong>4 - 2i</strong></p>
                <p>z₁ · z₂ = (3·1 - 2·(-4)) + (3·(-4) + 2·1)i = (3+8) + (-12+2)i = <strong>11 - 10i</strong></p>
            </div>

            <div class="note-box">
                <h4>ចំណាំសំខាន់៖</h4>
                <ul>
                    <li>z · z̄ = |z|² = a² + b² (conjugate)</li>
                    <li>z + z̄ = 2a (ផ្នែកពិត)</li>
                    <li>z - z̄ = 2bi (ផ្នែកអាចន្លាស់)</li>
                </ul>
            </div>
        `
    },
    {
        id: 2,
        title: "លីមីតអនុគមន៍",
        icon: "📈",
        tag: "មុខទី២",
        description: "គណនាលីមីតអនុគមន៍ក្នុងច្រើនទម្រង់",
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
    },
    {
        id: 3,
        title: "ភាពជាប់អនុគមន៍",
        icon: "🔗",
        tag: "មុខទី៣",
        description: "ស្គាល់ និងពិនិត្យភាពជាប់អនុគមន៍",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>អនុគមន៍ f(x) ជាប់នៅចំណុច a ប្រសិនបើ:</p>
            <ol>
                <li>f(a) មានតម្លៃ</li>
                <li>lim(x→a) f(x) មានតម្លៃ</li>
                <li>lim(x→a) f(x) = f(a)</li>
            </ol>

            <div class="formula-box">
                $$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$$
            </div>

            <h3>២. ប្រភេទភាពមិនជាប់</h3>
            <ul>
                <li><strong>រលាយ (Removable):</strong> លីមីតមានតែ f(a) គ្មាន</li>
                <li><strong>លោត (Jump):</strong> លីមីតឆ្វេង ≠ លីមីតស្ដាំ</li>
                <li><strong>អនន្ត (Infinite):</strong> លីមីត = ±∞</li>
            </ul>

            <h3>៣. លក្ខណៈភាពជាប់</h3>
            <p>ប្រសិនបើ f និង g ជាប់នៅ a នោះ:</p>
            <ul>
                <li>f + g, f - g, f·g ក៏ជាប់នៅ a ដែរ</li>
                <li>f/g ជាប់នៅ a ប្រសិនបើ g(a) ≠ 0</li>
                <li>f ∘ g (សមាសអនុគមន៍) ក៏ជាប់នៅ a ដែរ</li>
            </ul>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>ពិនិត្យភាពជាប់ f(x) = (x²-1)/(x-1) នៅ x = 1</p>
                <p>lim(x→1) (x²-1)/(x-1) = lim(x→1)(x+1) = 2 ប៉ុន្តែ f(1) គ្មាន → មិនជាប់ (removable)</p>
            </div>
        `
    },
    {
        id: 4,
        title: "ចំណោទបរមា",
        icon: "⛰️",
        tag: "មុខទី៤",
        description: "រកបរមា អតិបរមា និងតម្លៃអតិបរមា/បរមា",
        content: `
            <h3>១. និយមន័យ</h3>
            <ul>
                <li><strong>បរមា (Minimum):</strong> f(c) ≤ f(x) សម្រាប់ x ទាំងអស់</li>
                <li><strong>អតិបរមា (Maximum):</strong> f(c) ≥ f(x) សម្រាប់ x ទាំងអស់</li>
            </ul>

            <h3>២. វិធីស្វែងរក</h3>
            <h4>ក. វិធីដេរីវ៉ាន់</h4>
            <ol>
                <li>រក f'(x)</li>
                <li>ដាក់ f'(x) = 0 ដើម្បីរកចំណុចវិសោធនកម្ម</li>
                <li>ប្រើ f''(x) ដើម្បីពិនិត្យ:
                    <ul>
                        <li>f''(c) > 0 → បរមា</li>
                        <li>f''(c) &lt; 0 → អតិបរមា</li>
                    </ul>
                </li>
            </ol>

            <h4>ខ. តារាងសញ្ញា</h4>
            <p>ពិនិត្យសញ្ញា f'(x) នៅជុំវិញចំណុចវិសោធនកម្ម</p>

            <div class="formula-box">
                $$f'(c) = 0, \\quad f''(c) > 0 \\Rightarrow \\text{បរមា}, \\quad f''(c) < 0 \\Rightarrow \\text{អតិបរមា}$$
            </div>

            <h3>៣. លំហាត់អនុវត្តន៍</h3>
            <p>រកបរមា/អតិបរមា f(x) = x³ - 3x + 2</p>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>f'(x) = 3x² - 3 = 3(x² - 1) = 3(x-1)(x+1)</p>
                <p>f'(x) = 0 → x = 1 ឬ x = -1</p>
                <p>f''(x) = 6x</p>
                <p>f''(1) = 6 > 0 → <strong>បរមា</strong> f(1) = 0</p>
                <p>f''(-1) = -6 &lt; 0 → <strong>អតិបរមា</strong> f(-1) = 4</p>
            </div>

            <div class="note-box">
                <h4>ចំណាំសំខាន់៖</h4>
                <p>ចំណុចវិសោធនកម្មអាចជាចំណុចដែល f'(x) = 0 ឬ f'(x) គ្មាន។</p>
            </div>
        `
    },
    {
        id: 5,
        title: "អនុគមន៍សនិទាន",
        icon: "📊",
        tag: "មុខទី៥",
        description: "រូបភាព និងលក្ខណៈអនុគមន៍សនិទាន",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>អនុគមន៍សនិទាន (Exponential Function) មានទម្រង់ <strong>f(x) = aˣ</strong> ដែល a &gt; 0 និង a ≠ 1</p>

            <div class="formula-box">
                $$f(x) = a^x, \\quad a > 0, a \\neq 1$$
            </div>

            <h3>២. លក្ខណៈ</h3>
            <ul>
                <li>តម្លៃអថេរ: f(0) = 1</li>
                <li>dom(f) = ℝ, ran(f) = (0, +∞)</li>
                <li>ប្រសិនបើ a &gt; 1 → កើន</li>
                <li>ប្រសិនបើ 0 &lt; a &lt; 1 → ថយ</li>
                <li>សមីការ asymptote: y = 0</li>
            </ul>

            <h3>៣. ប្រមាណវិធី</h3>
            <div class="formula-box">
                $$a^x \\cdot a^y = a^{x+y}, \\quad \\frac{a^x}{a^y} = a^{x-y}, \\quad (a^x)^n = a^{nx}$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>គណនា 2³ · 2⁴ = 2^(3+4) = 2⁷ = 128</p>
                <p>គណនា 5⁶ / 5² = 5^(6-2) = 5⁴ = 625</p>
            </div>

            <div class="note-box">
                <h4>អនុគមន៍សនិទានពិសេស៖</h4>
                <p><strong>eˣ</strong> ដែល e ≈ 2.71828 (អនុគមន៍ធម្មជាតិ)</p>
            </div>
        `
    },
    {
        id: 6,
        title: "អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល",
        icon: "📉",
        tag: "មុខទី៦",
        description: "អនុគមន៍ eˣ និងអនុវត្តន៍របស់វា",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល <strong>f(x) = eˣ</strong> គឺជាអនុគមន៍សនិទានដែលមានមូលដ្ឋាន e</p>

            <div class="formula-box">
                $$f(x) = e^x, \\quad e \\approx 2.71828$$
            </div>

            <h3>២. លក្ខណៈ</h3>
            <ul>
                <li>f(0) = 1</li>
                <li>f'(x) = eˣ (ដេរីវ៉ាន់ស្មើនឹងខ្លួនឯង!)</li>
                <li>f(x) &gt; 0 សម្រាប់ x ទាំងអស់</li>
                <li>f(x) កើនសម្រាប់ x ទាំងអស់</li>
                <li>dom(f) = ℝ, ran(f) = (0, +∞)</li>
            </ul>

            <div class="formula-box">
                $$\\frac{d}{dx} e^x = e^x, \\quad \\int e^x \\, dx = e^x + C$$
            </div>

            <h3>៣. ប្រមាណវិធី</h3>
            <div class="formula-box">
                $$e^x \\cdot e^y = e^{x+y}, \\quad \\frac{e^x}{e^y} = e^{x-y}, \\quad (e^x)^n = e^{nx}$$
            </div>

            <h3>៤. អនុវត្តន៍</h3>
            <ul>
                <li>ការលូតលាស់ (Population growth)</li>
                <li>ការប្រមូលផ្ដុំប្រាក់ការ (Compound interest)</li>
                <li>ការថយចុះ (Radioactive decay)</li>
            </ul>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>គណនា lim(x→0) (eˣ - 1)/x = 1</p>
                <p>គណនា d/dx[e^(3x)] = 3e^(3x)</p>
            </div>
        `
    },
    {
        id: 7,
        title: "អនុគមន៍លោការីត",
        icon: "📐",
        tag: "មុខទី៧",
        description: "អនុគមន៍ ln(x) និង logₐ(x)",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>អនុគមន៍លោការីត <strong>ln(x)</strong> គឺជាអនុគមន៍ដែលផ្ទុយនឹង eˣ</p>

            <div class="formula-box">
                $$y = \\ln x \\Leftrightarrow x = e^y, \\quad x > 0$$
            </div>

            <h3>២. អនុគមន៍ logarithm ទូទៅ</h3>
            <div class="formula-box">
                $$y = \\log_a x \\Leftrightarrow x = a^y, \\quad a > 0, a \\neq 1, x > 0$$
            </div>

            <h3>៣. លក្ខណៈ</h3>
            <ul>
                <li>ln(1) = 0</li>
                <li>ln(e) = 1</li>
                <li>dom(f) = (0, +∞), ran(f) = ℝ</li>
                <li>f'(x) = 1/x</li>
                <li>កើនសម្រាប់ x &gt; 0</li>
            </ul>

            <div class="formula-box">
                $$\\frac{d}{dx} \\ln x = \\frac{1}{x}, \\quad \\int \\frac{1}{x} \\, dx = \\ln|x| + C$$
            </div>

            <h3>៤. ប្រមាណវិធី</h3>
            <div class="formula-box">
                $$\\ln(ab) = \\ln a + \\ln b, \\quad \\ln\\frac{a}{b} = \\ln a - \\ln b, \\quad \\ln(a^n) = n \\ln a$$
            </div>

            <div class="formula-box">
                $$\\log_a b = \\frac{\\ln b}{\\ln a} = \\frac{\\log_c b}{\\log_c a}$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>គណនា ln(e³) = 3·ln(e) = 3·1 = 3</p>
                <p>គណនា log₂(8) = log₂(2³) = 3</p>
            </div>
        `
    },
    {
        id: 8,
        title: "អាំងតេក្រាលមិនកំណត់",
        icon: "∫",
        tag: "មុខទី៨",
        description: "ប្រភេទអាំងតេក្រាល និងរូបមន្ត",
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
    },
    {
        id: 9,
        title: "អាំងតេក្រាលកំណត់និងបម្រើបម្រាស់",
        icon: "📏",
        tag: "មុខទី៩",
        description: "អាំងតេក្រាលកំណត់ និងអនុវត្តន៍ (ផ្ទៃក្រឡា និងប្រវែងសរសៃរ)",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>អាំងតេក្រាលកំណត់ (Definite Integral) គឺជាតម្លៃដែលគណនាពី a ដល់ b</p>

            <div class="formula-box">
                $$\\int_a^b f(x) \\, dx = F(b) - F(a)$$
            </div>

            <h3>២. លក្ខណៈ</h3>
            <ul>
                <li>∫ₐᵃ f(x)dx = 0</li>
                <li>∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx</li>
                <li>∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫ᵇᶜ f(x)dx</li>
            </ul>

            <h3>៣. សម្មតិកម្ម Fundamental Theorem</h3>
            <div class="formula-box">
                $$\\text{ប្រសិនបើ } F(x) = \\int_a^x f(t) \\, dt \\text{ នោះ } F'(x) = f(x)$$
            </div>

            <h3>៤. អនុវត្តន៍</h3>
            <h4>ក. ផ្ទៃក្រឡា</h4>
            <p>ផ្ទៃក្រឡារវាង f(x) និងអ័ក្ស x ពី a ដល់ b:</p>
            <div class="formula-box">
                $$S = \\int_a^b |f(x)| \\, dx$$
            </div>

            <h4>ខ. ប្រវែងសរសៃរ</h4>
            <div class="formula-box">
                $$L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>គណនា ∫₀² (x² + 1)dx</p>
                <p>= [x³/3 + x]₀² = (8/3 + 2) - 0 = <strong>14/3</strong></p>
            </div>
        `
    },
    {
        id: 10,
        title: "សមីការឌីផេរ៉ងស្យែលលំដាប់មួយ",
        icon: "🔀",
        tag: "មុខទី១០",
        description: "ដោះស្រាយសមីការឌីផេរ៉ងស្យែលលំដាប់ទី១",
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
    },
    {
        id: 11,
        title: "សមីការឌីផេរ៉ងស្យែលលំដាប់ពីរ",
        icon: "⚡",
        tag: "មុខទី១១",
        description: "ដោះស្រាយសមីការឌីផេរ៉ងស្យែលលំដាប់ទី២",
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
    },
    {
        id: 12,
        title: "ធរណីមាត្រវិភាគក្នុងលំហ",
        icon: "🌐",
        tag: "មុខទី១២",
        description: "ចំណុច សរសៃរ រង្វាល់ និងប្លង់ក្នុងលំហ",
        content: `
            <h3>១. ចំណុចក្នុងលំហ ℝ³</h3>
            <p>ចំណុច M(x, y, z) មានកូអរដោនេ 3 វិមាត្រ</p>

            <div class="formula-box">
                $$M(x, y, z) \\in \\mathbb{R}^3$$
            </div>

            <h3>២. រវាងចំណុចពីរ</h3>
            <div class="formula-box">
                $$d(A,B) = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$
            </div>

            <h3>៣. សមីការសរសៃរ</h3>
            <p>សរសៃរ AB កាត់ចំណុច M ដែល M = (1-t)A + tB</p>

            <h4>ទម្រង់រង្វាល់ (Symmetric)</h4>
            <div class="formula-box">
                $$\\frac{x-x_1}{a} = \\frac{y-y_1}{b} = \\frac{z-z_1}{c}$$
            </div>

            <h4>ទម្រង់ប៉ារ៉ាម៉ែត្រ</h4>
            <div class="formula-box">
                $$x = x_1 + at, \\quad y = y_1 + bt, \\quad z = z_1 + ct$$
            </div>

            <h3>៤. សមីការប្លង់</h3>
            <div class="formula-box">
                $$ax + by + cz + d = 0$$
            </div>

            <h3>៥. សមីការរង្វាល់</h3>
            <div class="formula-box">
                $$(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>រកប្រវែង AB ដែល A(1,2,3) និង B(4,6,8)</p>
                <p>d = √((4-1)² + (6-2)² + (8-3)²) = √(9+16+25) = √50 = <strong>5√2</strong></p>
            </div>
        `
    },
    {
        id: 13,
        title: "ប៉ារ៉ាបូល",
        icon: "🔭",
        tag: "មុខទី១៣",
        description: "សមីការ និងលក្ខណៈប៉ារ៉ាបូល",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>ប៉ារ៉ាបូល (Parabola) គឺជាកំណាត់ស៊ីជម្រៅនៃចំណុច និងបន្ទាត់មួយ (directrix)</p>

            <h3>២. សមីការ</h3>
            <h4>ក. អ័ក្សស្ដាំ/ឆ្វេង (y² = 2px)</h4>
            <div class="formula-box">
                $$y^2 = 2px, \\quad \\text{កំពូល (0,0), ផ្ចិត (p/2, 0)}$$
            </div>

            <h4>ខ. អ័ក្សកំពូល/បាត (x² = 2py)</h4>
            <div class="formula-box">
                $$x^2 = 2py, \\quad \\text{កំពូល (0,0), ផ្ចិត (0, p/2)}$$
            </div>

            <h3>៣. លក្ខណៈ</h3>
            <ul>
                <li>សមីការទូទៅ: y² - 2px = 0 (អ័ក្សស្ដាំ)</li>
                <li>ផ្ចិត: F(p/2, 0)</li>
                <li>បន្ទាត់កំណត់ (directrix): x = -p/2</li>
                <li>រង្វាល់准线: x = -p/2</li>
                <li>កែវ (latus rectum): p</li>
            </ul>

            <h3>៤. សមីការទូទៅ</h3>
            <div class="formula-box">
                $$y = ax^2 + bx + c, \\quad \\text{កំពូល: } \\left(-\\frac{b}{2a}, c - \\frac{b^2}{4a}\\right)$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>រកកំពូល y = x² - 4x + 3</p>
                <p>x = -(-4)/(2·1) = 2</p>
                <p>y = 4 - 8 + 3 = -1</p>
                <p>កំពូល = <strong>(2, -1)</strong></p>
            </div>
        `
    },
    {
        id: 14,
        title: "អេលីប",
        icon: "⭕",
        tag: "មុខទី១៤",
        description: "សមីការ និងលក្ខណៈអេលីប",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>អេលីប (Ellipse) គឺជាកំណាត់ដែលមានផលបូកប្រវែងពីចំណុចពីរ (foci) ថេរ</p>

            <h3>២. សមីការ</h3>
            <h4>ក. អ័ក្សស្ដាំ (a &gt; b)</h4>
            <div class="formula-box">
                $$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$
            </div>

            <h4>ខ. អ័ក្សកំពូល (b &gt; a)</h4>
            <div class="formula-box">
                $$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$
            </div>

            <h3>៣. លក្ខណៈ</h3>
            <ul>
                <li><strong>កំពូល:</strong> (±a, 0) ឬ (0, ±b)</li>
                <li><strong>ផ្ចិត:</strong> (±c, 0) ដែល c² = a² - b²</li>
                <li><strong>អ័ក្សឆ្លង:</strong> 2a និង 2b</li>
                <li><strong>ឧស្សាហកម្ម:</strong> e = c/a (0 &lt; e &lt; 1)</li>
            </ul>

            <div class="formula-box">
                $$c^2 = a^2 - b^2, \\quad e = \\frac{c}{a}$$
            </div>

            <h3>៤. ទំនាក់ទំនង</h3>
            <ul>
                <li>រង្វាល់ (circle): a = b, e = 0</li>
                <li>អេលីប: 0 &lt; e &lt; 1</li>
                <li>ប៉ារ៉ាបូល: e = 1</li>
                <li>អ៊ីពែប៉ូល: e &gt; 1</li>
            </ul>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>រក c និង e នៃ x²/25 + y²/9 = 1</p>
                <p>a² = 25, b² = 9 → c² = 25 - 9 = 16 → c = 4</p>
                <p>e = 4/5 = <strong>0.8</strong></p>
            </div>
        `
    },
    {
        id: 15,
        title: "អ៊ីពែប៉ូល",
        icon: "📡",
        tag: "មុខទី១៥",
        description: "សមីការ និងលក្ខណៈអ៊ីពែប៉ូល",
        content: `
            <h3>១. និយមន័យ</h3>
            <p>អ៊ីពែប៉ូល (Hyperbola) គឺជាកំណាត់ដែលមានផលដកប្រវែងពីចំណុចពីរ (foci) ថេរ</p>

            <h3>២. សមីការ</h3>
            <h4>ក. អ័ក្សស្ដាំ</h4>
            <div class="formula-box">
                $$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$$
            </div>

            <h4>ខ. អ័ក្សកំពូល</h4>
            <div class="formula-box">
                $$\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$$
            </div>

            <h3>៣. លក្ខណៈ</h3>
            <ul>
                <li><strong>កំពូល:</strong> (±a, 0) ឬ (0, ±a)</li>
                <li><strong>ផ្ចិត:</strong> (±c, 0) ដែល c² = a² + b²</li>
                <li><strong>អ័ក្សឆ្លង:</strong> 2a និង 2b</li>
                <li><strong>ឧស្សាហកម្ម:</strong> e = c/a (e &gt; 1)</li>
                <li><strong>អ័ក្សអាស៊ីមតូត:</strong> y = ±(b/a)x</li>
            </ul>

            <div class="formula-box">
                $$c^2 = a^2 + b^2, \\quad e = \\frac{c}{a} > 1$$
            </div>

            <h3>៤. សមីការអ័ក្សអាស៊ីមតូត</h3>
            <div class="formula-box">
                $$y = \\pm \\frac{b}{a}x \\quad \\text{ឬ} \\quad y = \\pm \\frac{a}{b}x$$
            </div>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>រក c, e និងអ័ក្សអាស៊ីមតូតនៃ x²/9 - y²/16 = 1</p>
                <p>a² = 9, b² = 16 → c² = 9 + 16 = 25 → c = 5</p>
                <p>e = 5/3 ≈ 1.67</p>
                <p>អ័ក្សអាស៊ីមតូត: y = ±(4/3)x</p>
            </div>
        `
    }
];

const EXERCISES = [
    { id: 1, topicId: 1, title: "គណនាកុំផ្លិច", difficulty: "easy", problem: "គណនា (3 + 2i) + (1 - 4i)" },
    { id: 2, topicId: 1, title: "គុណកុំផ្លិច", difficulty: "medium", problem: "គណនា (2 + 3i)(1 - i)" },
    { id: 3, topicId: 1, title: "Conjugate", difficulty: "easy", problem: "រក z̄ ប្រសិនបើ z = 5 - 3i" },
    { id: 4, topicId: 1, title: "Modulus", difficulty: "medium", problem: "គណនា |3 + 4i|" },
    { id: 5, topicId: 2, title: "លីមីតសាមញ្ញ", difficulty: "easy", problem: "lim(x→3) (x² - 9)/(x - 3)" },
    { id: 6, topicId: 2, title: "លីមីតអនន្ត", difficulty: "medium", problem: "lim(x→∞) (3x² + 1)/(2x² - 5)" },
    { id: 7, topicId: 2, title: "លីមីត Trig", difficulty: "hard", problem: "lim(x→0) sin(3x)/x" },
    { id: 8, topicId: 3, title: "ភាពជាប់", difficulty: "easy", problem: "ពិនិត្យភាពជាប់ f(x) = (x²-1)/(x-1) នៅ x=1" },
    { id: 9, topicId: 3, title: "ភាពជាប់ Piecewise", difficulty: "medium", problem: "ពិនិត្យភាពជាប់ f(x) = {x² ប្រសិនបើ x≤1, 2x ប្រសិនបើ x&gt;1}" },
    { id: 10, topicId: 4, title: "រកបរមា", difficulty: "easy", problem: "រកបរមា f(x) = x² - 4x + 5" },
    { id: 11, topicId: 4, title: "រកអតិបរមា", difficulty: "medium", problem: "រកអតិបរមា f(x) = -x² + 6x - 5" },
    { id: 12, topicId: 4, title: "លំហាត់អនុវត្តន៍", difficulty: "hard", problem: "រកបរមា/អតិបរមា f(x) = x³ - 3x + 2" },
    { id: 13, topicId: 5, title: "អនុគមន៍សនិទាន", difficulty: "easy", problem: "គណនា 2⁴ · 2³" },
    { id: 14, topicId: 5, title: "អនុគមន៍សនិទាន", difficulty: "medium", problem: "ដោះស្រាយ 3ˣ = 81" },
    { id: 15, topicId: 6, title: "eˣ", difficulty: "easy", problem: "គណនា e⁰ + e¹ + e²" },
    { id: 16, topicId: 6, title: "ដេរីវ៉ាន់ eˣ", difficulty: "medium", problem: "រក d/dx[e^(2x+1)]" },
    { id: 17, topicId: 7, title: "ln(x)", difficulty: "easy", problem: "គណនា ln(e⁵)" },
    { id: 18, topicId: 7, title: "Log", difficulty: "medium", problem: "គណនា log₂(32) + log₃(27)" },
    { id: 19, topicId: 8, title: "អាំងតេក្រាល", difficulty: "easy", problem: "គណនា ∫(2x + 3)dx" },
    { id: 20, topicId: 8, title: "អាំងតេក្រាល Trig", difficulty: "medium", problem: "គណនា ∫sin(x)cos(x)dx" },
    { id: 21, topicId: 8, title: "អាំងតេក្រាលស្មុគស្មាញ", difficulty: "hard", problem: "គណនា ∫x²eˣdx" },
    { id: 22, topicId: 9, title: "អាំងតេក្រាលកំណត់", difficulty: "easy", problem: "គណនា ∫₀¹ x²dx" },
    { id: 23, topicId: 9, title: "ផ្ទៃក្រឡា", difficulty: "medium", problem: "រកផ្ទៃក្រឡារវាង y=x² និង y=x" },
    { id: 24, topicId: 9, title: "ប្រវែងសរសៃរ", difficulty: "hard", problem: "រកប្រវែងសរសៃរ y=x²/2 ពី x=0 ដល់ x=1" },
    { id: 25, topicId: 10, title: "Differential ទី១", difficulty: "easy", problem: "ដោះស្រាយ y' = 2x" },
    { id: 26, topicId: 10, title: "Separable", difficulty: "medium", problem: "ដោះស្រាយ y' = y/x" },
    { id: 27, topicId: 10, title: "Linear", difficulty: "hard", problem: "ដោះស្រាយ y' + y = eˣ" },
    { id: 28, topicId: 11, title: "DE ទី២", difficulty: "easy", problem: "ដោះស្រាយ y'' - 4y = 0" },
    { id: 29, topicId: 11, title: "DE ទី២", difficulty: "medium", problem: "ដោះស្រាយ y'' - 3y' + 2y = 0" },
    { id: 30, topicId: 11, title: "DE ទី២ ឬសស្មុគស្មាញ", difficulty: "hard", problem: "ដោះស្រាយ y'' + 4y = 0" },
    { id: 31, topicId: 12, title: "ចម្ងាយ", difficulty: "easy", problem: "រកចម្ងាយ A(1,2,3) និង B(4,6,8)" },
    { id: 32, topicId: 12, title: "សរសៃរ", difficulty: "medium", problem: "រកសមីការសរសៃរ AB ដែល A(1,0,2) B(3,4,6)" },
    { id: 33, topicId: 12, title: "ប្លង់", difficulty: "medium", problem: "រកចម្ងាយពី (1,2,3) ទៅប្លង់ 2x + y - z = 4" },
    { id: 34, topicId: 13, title: "កំពូលប៉ារ៉ាបូល", difficulty: "easy", problem: "រកកំពូល y = x² - 6x + 8" },
    { id: 35, topicId: 13, title: "ផ្ចិតប៉ារ៉ាបូល", difficulty: "medium", problem: "រកផ្ចិត y² = 8x" },
    { id: 36, topicId: 14, title: "ឧស្សាហកម្មអេលីប", difficulty: "easy", problem: "រក e នៃ x²/16 + y²/9 = 1" },
    { id: 37, topicId: 14, title: "c នៃអេលីប", difficulty: "medium", problem: "រក c នៃ x²/25 + y²/16 = 1" },
    { id: 38, topicId: 15, title: "ឧស្សាហកម្មអ៊ីពែប៉ូល", difficulty: "easy", problem: "រក e នៃ x²/4 - y²/9 = 1" },
    { id: 39, topicId: 15, title: "អ័ក្សអាស៊ីមតូត", difficulty: "medium", problem: "រកអ័ក្សអាស៊ីមតូត x²/9 - y²/16 = 1" },
    { id: 40, topicId: 15, title: "សមីកាអ៊ីពែប៉ូល", difficulty: "hard", problem: "រកសមីកាអ៊ីពែប៉ូលដែលមានផ្ចិត (±5,0) និង e = 5/3" }
];
