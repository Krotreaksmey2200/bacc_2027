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
    research: [
        { name: "ចំនួនកុំផ្លិច ថ្មី (លឹម ផល្គុន).pdf", path: "pdfs/01_កុំផ្លិច/research/ចំនួនកុំផ្លិច ថ្មី (លឹម ផល្គុន).pdf" }
    ],
    exercises: [
        {
            id: 1,
            question: "រក Re(z) និង Im(z) សម្រាប់ \\(\\displaystyle z = 5 - 3i\\)",
            hint: "Re(z) គឺផ្នែកពិត និង Im(z) គឺផ្នែកនិមិត្ត",
            answer: "\\(\\displaystyle \\text{Re}(z) = 5\\) និង \\(\\displaystyle \\text{Im}(z) = -3\\)"
        },
        {
            id: 2,
            question: "គណនា \\(\\displaystyle z_1 + z_2\\) សម្រាប់ \\(\\displaystyle z_1 = 3 + 2i\\) និង \\(\\displaystyle z_2 = 1 - 4i\\)",
            hint: "បូកផ្នែកពិតជាមួយផ្នែកពិត និងផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត",
            answer: "\\(\\displaystyle z_1 + z_2 = (3+1) + (2-4)i = 4 - 2i\\)"
        },
        {
            id: 3,
            question: "គណនា \\(\\displaystyle z_1 \\cdot z_2\\) សម្រាប់ \\(\\displaystyle z_1 = 2 + i\\) និង \\(\\displaystyle z_2 = 3 - 2i\\)",
            hint: "ប្រើក្បួន : \\(\\displaystyle (a+bi)(c+di) = (ac-bd) + (ad+bc)i\\)",
            answer: "\\(\\displaystyle z_1 \\cdot z_2 = (2 \\cdot 3 - 1 \\cdot (-2)) + (2 \\cdot (-2) + 1 \\cdot 3)i = (6+2) + (-4+3)i = 8 - i\\)"
        },
        {
            id: 4,
            question: "គណនា \\(\\displaystyle \\frac{4 + 2i}{1 + i}\\)",
            hint: "គុណលេខក្បាល និងលេខក្រោមដោយ conjugate របស់អាគុដម",
            answer: "\\(\\displaystyle \\frac{4 + 2i}{1 + i} = \\frac{(4+2i)(1-i)}{(1+i)(1-i)} = \\frac{4-4i+2i-2i^2}{1+1} = \\frac{4-2i+2}{2} = \\frac{6-2i}{2} = 3 - i\\)"
        },
        {
            id: 5,
            question: "រក \\(\\displaystyle |z|\\) សម្រាប់ \\(\\displaystyle z = 6 - 8i\\)",
            hint: "ប្រើរូបមន្ត \\(\\displaystyle |z| = \\sqrt{a^2 + b^2}\\)",
            answer: "\\(\\displaystyle |z| = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\)"
        },
        {
            id: 6,
            question: "រក \\(\\displaystyle \\bar{z}\\) (conjugate) សម្រាប់ \\(\\displaystyle z = -2 + 5i\\)",
            hint: "Conjugate របស់ \\(\\displaystyle z = a + bi\\) គឺ \\(\\displaystyle \\bar{z} = a - bi\\)",
            answer: "\\(\\displaystyle \\bar{z} = -2 - 5i\\)"
        },
        {
            id: 7,
            question: "បង្ហាញថា \\(\\displaystyle i^{100} = 1\\)",
            hint: "រកវដ្តរបស់ i: \\(\\displaystyle i^1=i, i^2=-1, i^3=-i, i^4=1\\)",
            answer: "\\(\\displaystyle i^{100} = (i^4)^{25} = 1^{25} = 1\\)"
        },
        {
            id: 8,
            question: "គណនា \\(\\displaystyle (3 + 4i) + (2 - i) - (1 + 2i)\\)",
            hint: "បូក/ដកផ្នែកពិត និងផ្នែកនិមិត្តដាច់ដោយឡែក",
            answer: "\\(\\displaystyle (3+2-1) + (4-1-2)i = 4 + i\\)"
        },
        {
            id: 9,
            question: "រក \\(\\displaystyle z\\) ប្រសិនបើ \\(\\displaystyle z \\cdot (2 + i) = 5 + 5i\\)",
            hint: "ចែក \\(\\displaystyle z = \\frac{5+5i}{2+i}\\)",
            answer: "\\(\\displaystyle z = \\frac{(5+5i)(2-i)}{(2+i)(2-i)} = \\frac{10-5i+10i-5i^2}{4+1} = \\frac{10+5i+5}{5} = \\frac{15+5i}{5} = 3 + i\\)"
        },
        {
            id: 10,
            question: "បង្ហាញថា \\(\\displaystyle z \\cdot \\bar{z} = |z|^2\\) សម្រាប់ \\(\\displaystyle z = a + bi\\)",
            hint: "គុណ \\(\\displaystyle z\\) ជាមួយ \\(\\displaystyle \\bar{z}\\) ដោយប្រើក្បួន FOIL",
            answer: "\\(\\displaystyle z \\cdot \\bar{z} = (a+bi)(a-bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2 = |z|^2\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>កុំផ្លិច (Complex Number) គឺជាចំនួនដែលមានទម្រង់ <strong>z = a + bi</strong> ដែល៖</p>
        <ul>
            <li><strong>a</strong> គឺជាផ្នែកពិត (Real part) → Re(z) = a</li>
            <li><strong>b</strong> គឺជាផ្នែកនិមិត្ត (Imaginary part) → Im(z) = b</li>
            <li><strong>i</strong> គឺជាលេខនិមិត្ត (Imaginary unit) ដែល \\(\\displaystyle i^2 = -1\\)</li>
        </ul>

        <div class="formula-box">\\(\\displaystyle z = a + bi, \\quad i = \\sqrt{-1}, \\quad i^2 = -1\\)</div>

        <div class="note-box">
            <h4>💡 ហេតុអ្វីបានជា \\(\\displaystyle i^2 = -1\\)?</h4>
            <p>នៅក្នុងចំនួនពិត យើងមិនអាចរកឃើញ x ដែល \\(\\displaystyle x^2 = -1\\) បានទេ។ ប៉ុន្តែកុំផ្លិចអនុញ្ញាតឱ្យយើងបង្កើតលេខថ្មីដែលមានលក្ខណៈនេះ។</p>
        </div>

        <h3>២. ទម្រង់នៃកុំផ្លិច</h3>
        <p>កុំផ្លិចអាចសរសេរបានក្នុងទម្រង់ជាច្រើន៖</p>
        <ul>
            <li><strong>ទម្រង់ពិជគណិត:</strong> \\(\\displaystyle z = a + bi\\)</li>
            <li><strong>ទម្រង់ត្រីកោណមាត្រ:</strong> \\(\\displaystyle z = r(\\cos \\theta + i \\sin \\theta) = r \\cdot e^{i\\theta}\\)</li>
            <li><strong>ទម្រង់អ៊ិចស្ប៉ូណង់ស្យែល:</strong> \\(\\displaystyle z = r \\angle \\theta\\)</li>
        </ul>

        <div class="formula-box">
            \\(\\displaystyle r = |z| = \\sqrt{a^2 + b^2}, \\quad \\theta = \\arg(z) = \\arctan\\left(\\frac{b}{a}\\right)\\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖ សរសេរចំនួនកុំផ្លិចក្នុងទម្រង់ត្រីកោណមាត្រ</h4>
            <p>សម្រាប់ \\(\\displaystyle z = 3 + 4i\\) ៖</p>
            <p>\\(\\displaystyle r = |z| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\)</p>
            <p>\\(\\displaystyle \\theta = \\arg(z) = \\arctan\\left(\\frac{4}{3}\\right) \\approx 53.13^\\circ\\)</p>
            <p>ដូច្នេះ \\(\\displaystyle z = 5(\\cos 53.13^\\circ + i \\sin 53.13^\\circ)\\)</p>
        </div>

        <h3>៣. ប្រមាណវិធីនៃកុំផ្លិច</h3>
        
        <h4>ក. បូក និងដក</h4>
        <p>ដើម្បីបូក ឬ ដកចំនួនកុំផ្លិច យើងត្រូវបូកឬដកផ្នែកពិត និងផ្នែកនិមិត្តជាមួយជាមួយផ្នែកនិមិត្ត</p>
        <div class="formula-box">
            \\(\\displaystyle (a + bi) + (c + di) = (a + c) + (b + d)i\\)
        </div>

        <h4>ខ. ប្រមាណវិធីគុណ</h4>
        <div class="formula-box">
            \\(\\displaystyle (a + bi)(c + di) = (ac - bd) + (ad + bc)i\\)
        </div>

        <h4>គ. ចែក</h4>
        <p>ចែកដត្រូវគុណនិងចំនួនកុំផ្លិចឆ្លាស់ភាគបែង</p>
        <div class="formula-box">
            \\(\\displaystyle \\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{c^2 + d^2}\\)
        </div>

        <h4>ឃ. ចំនួនកុំផ្លិចឆ្លាស់ </h4>
        <p>ចំនួនកុំផ្លិចឆ្លាស់ របស់ \\(\\displaystyle z = a + bi\\) គឺ \\(\\displaystyle \\bar{z} = a - bi\\)</p>
        <div class="formula-box">
            \\(\\displaystyle \\overline{a + bi} = a - bi\\)
        </div>

        <h3>៤. លក្ខណៈសំខាន់ៗ</h3>
        <ul>
            <li><strong> ម៉ូឌុល (Modulus):</strong> \\(\\displaystyle |z| = \\sqrt{a^2 + b^2}\\)</li>
            <li><strong>ចំនួនកុំផ្លិចឆ្លាស់:</strong> \\(\\displaystyle z \\cdot \\bar{z} = |z|^2 = a^2 + b^2\\)</li>
            <li><strong>ផ្នែកពិត:</strong> \\(\\displaystyle z + \\bar{z} = 2a\\)</li>
            <li><strong>ផ្នែកនិមិត្ត:</strong> \\(\\displaystyle z - \\bar{z} = 2bi\\)</li>
            <li><strong>z ជាចំនួនពិតសុទ្ធលុះត្រាតែ:</strong> \\(\\displaystyle z \\bar{z} = |z|^2\\)</li>
            <li><strong>z ជាចំនួននិមិត្តលុះត្រាតែ:</strong> \\(\\displaystyle z \\bar{z} = -|z|^2\\)</li>
        </ul>

        <h3>៥. ឧទាហរណ៍ដោះស្រាយ</h3>
        
        <div class="example-box">
            <h4>ឧទាហរណ៍ ១៖ គណនាបូក និងគុណ</h4>
            <p>គណនា \\(\\displaystyle z_1 = 3 + 2i\\) និង \\(\\displaystyle z_2 = 1 - 4i\\)</p>
            <p><strong>បូក៖</strong></p>
            <p>\\(\\displaystyle z_1 + z_2 = (3+1) + (2-4)i = 4 - 2i\\)</p>
            <p><strong>គុណ៖</strong></p>
            <p>\\(\\displaystyle z_1 \\cdot z_2 = (3 \\cdot 1 - 2 \\cdot (-4)) + (3 \\cdot (-4) + 2 \\cdot 1)i\\)</p>
            <p>\\(\\displaystyle = (3 + 8) + (-12 + 2)i = 11 - 10i\\)</p>
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍ ២៖ គណនាចែក</h4>
            <p>គណនា \\(\\displaystyle \\frac{2 + 3i}{1 - i}\\)</p>
            <p>\\(\\displaystyle = \\frac{(2 + 3i)(1 + i)}{(1 - i)(1 + i)}\\)</p>
            <p>\\(\\displaystyle = \\frac{2 + 2i + 3i + 3i^2}{1^2 + 1^2}\\)</p>
            <p>\\(\\displaystyle = \\frac{2 + 5i - 3}{2}\\)</p>
            <p>\\(\\displaystyle = \\frac{-1 + 5i}{2} = -0.5 + 2.5i\\)</p>
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍ ៣៖ រក ម៉ូឌុល</h4>
            <p>រក \\(\\displaystyle |z|\\) សម្រាប់ \\(\\displaystyle z = 5 - 12i\\)</p>
            <p>\\(\\displaystyle |z| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\)</p>
        </div>

        <div class="note-box">
            <h4>ចំណាំសំខាន់៖</h4>
            <ul>
                <li>\\(\\displaystyle i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1\\) (វដ្ត ៤)</li>
                <li>\\(\\displaystyle z \\cdot \\bar{z} = |z|^2\\) (ឧបភ័គ្គសម្មតិកម្មសំខាន់)</li>
                <li>\\(\\displaystyle z + \\bar{z} = 2\\text{Re}(z)\\) (ផ្នែកពិត)</li>
                <li>\\(\\displaystyle z - \\bar{z} = 2i\\text{Im}(z)\\) (ផ្នែកអាចន្លាស់)</li>
                <li>\\(\\displaystyle |z_1 \\cdot z_2| = |z_1| \\cdot |z_2|\\)</li>
                <li>\\(\\displaystyle \\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}\\)</li>
            </ul>
        </div>
    `
};
