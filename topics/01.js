const TOPIC_01 = {
    id: 1,
    title: "កុំផ្លិច",
    icon: "🔢",
    iconPath: "icons/01.png",
    tag: "មេរៀនទី១",
    semester: 1,
    description: "ស្គាល់ និងប្រើប្រាស់កុំផ្លិច រូបមន្ត និងអនុវត្តន៍",
    pdfs: [
        { name: "complex number.pdf", path: "pdfs/01_កុំផ្លិច/lession/complex number.pdf", type: "lesson" },
        { name: "លំហាត់ចំនួនកុំផ្លិច ២០២៧.pdf", path: "pdfs/01_កុំផ្លិច/practies/លំហាត់ចំនួនកុំផ្លិច ២០២៧.pdf", type: "exercise" }
    ],
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
};
