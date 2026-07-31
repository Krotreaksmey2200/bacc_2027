const TOPIC_14 = {
    id: 14,
    title: "អេលីប",
    icon: "⭕",
    iconPath: "icons/14.png",
    tag: "មេរៀនទី១៤",
    semester: 2,
    description: "សមីការ និងលក្ខណៈអេលីប",
    pdfs: [],
    exercises: [
        {
            id: 1,
            question: "រក c និង e នៃ \(\\frac{x^2}{25} + \\frac{y^2}{9} = 1\)",
            hint: "ប្រើ \(c^2 = a^2 - b^2\) និង \(e = \\frac{c}{a}\)",
            answer: "\(a^2 = 25\), \(b^2 = 9\) → \(c^2 = 25 - 9 = 16\) → \(c = 4\)<br>\(e = \\frac{4}{5} = 0.8\)"
        },
        {
            id: 2,
            question: "រកកំពូលនៃ \(\\frac{x^2}{16} + \\frac{y^2}{25} = 1\)",
            hint: "ពិនិត្យមើលថាតើ a > b ឬ b > a",
            answer: "\(a^2 = 16\), \(b^2 = 25\) → \(b > a\) → អ័ក្សកំពូល<br>កំពូល: \((0, \\pm 5)\)"
        },
        {
            id: 3,
            question: "សរសេរសមីការអេលីបដែលមានកំពូល \((\\pm 5, 0)\) និង \(c = 3\)",
            hint: "រក b ពី \(c^2 = a^2 - b^2\)",
            answer: "\(a = 5\), \(c = 3\) → \(b^2 = 25 - 9 = 16\)<br>\(\\frac{x^2}{25} + \\frac{y^2}{16} = 1\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>អេលីប (Ellipse) គឺជាកំណាត់ដែលមានផលបូកប្រវែងពីចំណុចពីរ (foci) ថេរ</p>

        <h3>២. សមីការ</h3>
        <h4>ក. អ័ក្សស្ដាំ (\(a > b\))</h4>
        <div class="formula-box">
            \(\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\)
        </div>

        <h4>ខ. អ័ក្សកំពូល (\(b > a\))</h4>
        <div class="formula-box">
            \(\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\)
        </div>

        <h3>៣. លក្ខណៈ</h3>
        <ul>
            <li><strong>កំពូល:</strong> \((\\pm a, 0)\) ឬ \((0, \\pm b)\)</li>
            <li><strong>ផ្ចិត:</strong> \((\\pm c, 0)\) ដែល \(c^2 = a^2 - b^2\)</li>
            <li><strong>អ័ក្សឆ្លង:</strong> \(2a\) និង \(2b\)</li>
            <li><strong>ឧស្សាហកម្ម:</strong> \(e = \\frac{c}{a}\) (\(0 < e < 1\))</li>
        </ul>

        <div class="formula-box">
            \(c^2 = a^2 - b^2, \\quad e = \\frac{c}{a}\)
        </div>

        <h3>៤. ទំនាក់ទំនង</h3>
        <ul>
            <li>រង្វាល់ (circle): \(a = b\), \(e = 0\)</li>
            <li>អេលីប: \(0 < e < 1\)</li>
            <li>ប៉ារ៉ាបូល: \(e = 1\)</li>
            <li>អ៊ីពែប៉ូល: \(e > 1\)</li>
        </ul>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>រក c និង e នៃ \(\\frac{x^2}{25} + \\frac{y^2}{9} = 1\)</p>
            <p>\(a^2 = 25\), \(b^2 = 9\) → \(c^2 = 25 - 9 = 16\) → \(c = 4\)</p>
            <p>\(e = \\frac{4}{5} = 0.8\)</p>
        </div>
    `
};
