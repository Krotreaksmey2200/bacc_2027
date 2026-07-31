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
        <p>កុំផ្លិច (Complex Number) គឺជាលេខដែលមានរូបភាព <strong>z = a + bi</strong> ដែល៖</p>
        <ul>
            <li><strong>a</strong> គឺជាផ្នែកពិត (Real part) → Re(z) = a</li>
            <li><strong>b</strong> គឺជាផ្នែកអាចន្លាស់ (Imaginary part) → Im(z) = b</li>
            <li><strong>i</strong> គឺជាលេខអាចន្លាស់ (Imaginary unit) ដែល $$i^2 = -1$$</li>
        </ul>

        <div class="formula-box">$$z = a + bi, \\quad i = \\sqrt{-1}, \\quad i^2 = -1$$</div>

        <div class="note-box">
            <h4>💡 ហេតុអ្វីបានជា $$i^2 = -1$$?</h4>
            <p>នៅក្នុងលេខពិត យើងមិនអាចរកឃើញ x ដែល $$x^2 = -1$$ បានទេ។ ប៉ុន្តែកុំផ្លិចអនុញ្ញាតឱ្យយើងបង្កើតលេខថ្មីដែលមានលក្ខណៈនេះ។</p>
        </div>

        <h3>២. ទម្រង់នៃកុំផ្លិច</h3>
        <p>កុំផ្លិចអាចសរសេរបានក្នុងទម្រង់ជាច្រើន៖</p>
        <ul>
            <li><strong>ទម្រង់ទូទៅ:</strong> $$z = a + bi$$</li>
            <li><strong>ទម្រង់ទស្សនៈ:</strong> $$z = r(\\cos \\theta + i \\sin \\theta) = r \\cdot e^{i\\theta}$$</li>
            <li><strong>ទម្រង់អថេរ:</strong> $$z = r \\angle \\theta$$</li>
        </ul>

        <div class="formula-box">
            $$r = |z| = \\sqrt{a^2 + b^2}, \\quad \\theta = \\arg(z) = \\arctan\\left(\\frac{b}{a}\\right)$$
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖ ប្លង់កុំផ្លិច</h4>
            <p>សម្រាប់ $$z = 3 + 4i$$ ៖</p>
            <p>$$r = |z| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$</p>
            <p>$$\\theta = \\arg(z) = \\arctan\\left(\\frac{4}{3}\\right) \\approx 53.13^\\circ$$</p>
            <p>ដូច្នេះ $$z = 5(\\cos 53.13^\\circ + i \\sin 53.13^\\circ)$$</p>
        </div>

        <h3>៣. ប្រមាណវិធីនៃកុំផ្លិច</h3>
        
        <h4>ក. បូក និងដក</h4>
        <p>បូក/ដកកុំផ្លិច២ ដោយបូក/ដកផ្នែកពិត និងផ្នែកអាចន្លាស់ដាច់ដោយឡែក៖</p>
        <div class="formula-box">
            $$(a + bi) + (c + di) = (a + c) + (b + d)i$$
        </div>

        <h4>ខ. គុណ</h4>
        <p>គុណដោយប្រើក្បួន FOIL ដូចគ្នានឹងវិធីគុណ polynomial ៖</p>
        <div class="formula-box">
            $$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$
        </div>

        <h4>គ. ចែក</h4>
        <p>ចែកដោយប្រើ conjugate របស់អាគុដម (denominator) ៖</p>
        <div class="formula-box">
            $$\\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{c^2 + d^2}$$
        </div>

        <h4>ឃ. Conjugate</h4>
        <p>Conjugate របស់ $$z = a + bi$$ គឺ $$\\bar{z} = a - bi$$</p>
        <div class="formula-box">
            $$\\overline{a + bi} = a - bi$$
        </div>

        <h3>៤. លក្ខណៈសំខាន់ៗ</h3>
        <ul>
            <li><strong>Modulus:</strong> $$|z| = \\sqrt{a^2 + b^2}$$</li>
            <li><strong>Conjugate:</strong> $$z \\cdot \\bar{z} = |z|^2 = a^2 + b^2$$</li>
            <li><strong>ផ្នែកពិត:</strong> $$z + \\bar{z} = 2a$$</li>
            <li><strong>ផ្នែកអាចន្លាស់:</strong> $$z - \\bar{z} = 2bi$$</li>
        </ul>

        <h3>៥. ឧទាហរណ៍ដោះស្រាយ</h3>
        
        <div class="example-box">
            <h4>ឧទាហរណ៍ ១៖ គណនាបូក និងគុណ</h4>
            <p>គណនា $$z_1 = 3 + 2i$$ និង $$z_2 = 1 - 4i$$</p>
            <p><strong>បូក៖</strong></p>
            <p>$$z_1 + z_2 = (3+1) + (2-4)i = 4 - 2i$$</p>
            <p><strong>គុណ៖</strong></p>
            <p>$$z_1 \\cdot z_2 = (3 \\cdot 1 - 2 \\cdot (-4)) + (3 \\cdot (-4) + 2 \\cdot 1)i$$</p>
            <p>$$= (3 + 8) + (-12 + 2)i = 11 - 10i$$</p>
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍ ២៖ គណនាចែក</h4>
            <p>គណនា $$\\frac{2 + 3i}{1 - i}$$</p>
            <p>$$= \\frac{(2 + 3i)(1 + i)}{(1 - i)(1 + i)}$$</p>
            <p>$$= \\frac{2 + 2i + 3i + 3i^2}{1^2 + 1^2}$$</p>
            <p>$$= \\frac{2 + 5i - 3}{2}$$</p>
            <p>$$= \\frac{-1 + 5i}{2} = -0.5 + 2.5i$$</p>
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍ ៣៖ រក Modulus</h4>
            <p>រក $$|z|$$ សម្រាប់ $$z = 5 - 12i$$</p>
            <p>$$|z| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$</p>
        </div>

        <div class="note-box">
            <h4>📝 ចំណាំសំខាន់៖</h4>
            <ul>
                <li>$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1$$ (វដ្ត ៤)</li>
                <li>$$z \\cdot \\bar{z} = |z|^2$$ (ឧបភ័គ្គសម្មតិកម្មសំខាន់)</li>
                <li>$$z + \\bar{z} = 2\\text{Re}(z)$$ (ផ្នែកពិត)</li>
                <li>$$z - \\bar{z} = 2i\\text{Im}(z)$$ (ផ្នែកអាចន្លាស់)</li>
                <li>$$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$</li>
                <li>$$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$</li>
            </ul>
        </div>
    `
};
