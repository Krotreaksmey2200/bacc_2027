const TOPIC_05 = {
    id: 5,
    title: "អនុគមន៍សនិទាន",
    icon: "📊",
    iconPath: "icons/05.png",
    tag: "មេរៀនទី៥",
    semester: 1,
    description: "រូបភាព និងលក្ខណៈអនុគមន៍សនិទាន",
    pdfs: [],
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
};
