const TOPIC_12 = {
    id: 12,
    title: "អាំងតេក្រាលកំណត់និងបម្រើបម្រាស់",
    icon: "📏",
    iconPath: "icons/12.png",
    tag: "មេរៀនទី១២",
    semester: 2,
    description: "អាំងតេក្រាលកំណត់ និងអនុវត្តន៍ (ផ្ទៃក្រឡា និងប្រវែងសរសៃរ)",
    pdfs: [],
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
};
