const TOPIC_15 = {
    id: 15,
    title: "អ៊ីពែប៉ូល",
    icon: "📡",
    iconPath: "icons/15.png",
    tag: "មេរៀនទី១៥",
    semester: 2,
    description: "សមីការ និងលក្ខណៈអ៊ីពែប៉ូល",
    pdfs: [],
    exercises: [
        {
            id: 1,
            question: "រក c, e និងអ័ក្សអាស៊ីមតូតនៃ \\(\\frac{x^2}{9} - \\frac{y^2}{16} = 1\\)",
            hint: "ប្រើ \\(c^2 = a^2 + b^2\\) និង \\(e = \\frac{c}{a}\\)",
            answer: "\\(a^2 = 9\\), \\(b^2 = 16\\) → \\(c^2 = 9 + 16 = 25\\) → \\(c = 5\\)<br>\\(e = \\frac{5}{3} \\approx 1.67\\)<br>អ័ក្សអាស៊ីមតូត: \\(y = \\pm \\frac{4}{3}x\\)"
        },
        {
            id: 2,
            question: "រកកំពូលនៃ \\(\\frac{y^2}{25} - \\frac{x^2}{9} = 1\\)",
            hint: "ពិនិត្យមើលទម្រង់",
            answer: "ទម្រង់ \\(\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1\\) → អ័ក្សកំពូល<br>កំពូល: \\((0, \\pm 5)\\)"
        },
        {
            id: 3,
            question: "សរសេរសមីការអ៊ីពែប៉ូលដែលមានកំពូល \\((\\pm 4, 0)\\) និង \\(b = 3\\)",
            hint: "រក c ពី \\(c^2 = a^2 + b^2\\)",
            answer: "\\(a = 4\\), \\(b = 3\\) → \\(c^2 = 16 + 9 = 25\\)<br>\\(\\frac{x^2}{16} - \\frac{y^2}{9} = 1\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>អ៊ីពែប៉ូល (Hyperbola) គឺជាកំណាត់ដែលមានផលដកប្រវែងពីចំណុចពីរ (foci) ថេរ</p>

        <h3>២. សមីការ</h3>
        <h4>ក. អ័ក្សស្ដាំ</h4>
        <div class="formula-box">
            \\(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\)
        </div>

        <h4>ខ. អ័ក្សកំពូល</h4>
        <div class="formula-box">
            \\(\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1\\)
        </div>

        <h3>៣. លក្ខណៈ</h3>
        <ul>
            <li><strong>កំពូល:</strong> \\((\\pm a, 0)\\) ឬ \\((0, \\pm a)\\)</li>
            <li><strong>ផ្ចិត:</strong> \\((\\pm c, 0)\\) ដែល \\(c^2 = a^2 + b^2\\)</li>
            <li><strong>អ័ក្សឆ្លង:</strong> \\(2a\\) និង \\(2b\\)</li>
            <li><strong>ឧស្សាហកម្ម:</strong> \\(e = \\frac{c}{a}\\) (\\(e > 1\\))</li>
            <li><strong>អ័ក្សអាស៊ីមតូត:</strong> \\(y = \\pm \\frac{b}{a}x\\)</li>
        </ul>

        <div class="formula-box">
            \\(c^2 = a^2 + b^2, \\quad e = \\frac{c}{a} > 1\\)
        </div>

        <h3>៤. សមីការអ័ក្សអាស៊ីមតូត</h3>
        <div class="formula-box">
            \\(y = \\pm \\frac{b}{a}x \\quad \\text{ឬ} \\quad y = \\pm \\frac{a}{b}x\\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>រក c, e និងអ័ក្សអាស៊ីមតូតនៃ \\(\\frac{x^2}{9} - \\frac{y^2}{16} = 1\\)</p>
            <p>\\(a^2 = 9\\), \\(b^2 = 16\\) → \\(c^2 = 9 + 16 = 25\\) → \\(c = 5\\)</p>
            <p>\\(e = \\frac{5}{3} \\approx 1.67\\)</p>
            <p>អ័ក្សអាស៊ីមតូត: \\(y = \\pm \\frac{4}{3}x\\)</p>
        </div>
    `
};
