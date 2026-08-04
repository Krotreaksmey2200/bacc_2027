const TOPIC_17 = {
    id: 17,
    title: "លំហាត់សង្ខេបឆមាសទី២",
    icon: "📝",
    iconPath: "icons/17.png",
    tag: "ត្រៀមប្រឡង",
    semester: 3,
    description: "លំហាត់សង្ខេបសម្រាប់ត្រៀមប្រឡងឆមាសទី២",
    pdfs: [],
    research: [],
    exercises: [
        {
            id: 1,
            question: "គណនា \\(\\int (3x^2 + 2x + 1) \\, dx\\)",
            hint: "ប្រើរូបមន្ត \\(\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C\\)",
            answer: "\\(\\int (3x^2 + 2x + 1) \\, dx = x^3 + x^2 + x + C\\)"
        },
        {
            id: 2,
            question: "គណនា \\(\\int_0^1 2x \\, dx\\)",
            hint: "ប្រើអាំងតេក្រាលកំណត់",
            answer: "\\(\\int_0^1 2x \\, dx = \\left[x^2\\right]_0^1 = 1 - 0 = 1\\)"
        },
        {
            id: 3,
            question: "ដោះស្រាយ \\(y' = 2xy\\)",
            hint: "បំបែកអថេរ",
            answer: "\\(\\frac{dy}{y} = 2x \\, dx \\Rightarrow \\ln|y| = x^2 + C\\)<br>\\(y = Ae^{x^2}\\)"
        },
        {
            id: 4,
            question: "រកប្រវែង AB ដែល A(1,2) និង B(4,6)",
            hint: "ប្រើរូបមន្ត \\(d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}\\)",
            answer: "\\(d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\)"
        },
        {
            id: 5,
            question: "រកកំពូលនៃ \\(y = -2x^2 + 8x - 3\\)",
            hint: "ប្រើ \\(x = -\\frac{b}{2a}\\)",
            answer: "\\(x = -\\frac{8}{2(-2)} = 2\\)<br>\\(y = -8 + 16 - 3 = 5\\)<br>កំពូល: \\((2, 5)\\)"
        }
    ],
    content: `
        <h3>📝 លំហាត់សង្ខេបឆមាសទី២</h3>
        <p>ផ្ទុកលំហាត់សង្ខេបសម្រាប់ត្រៀមប្រឡងឆមាសទី២</p>
        <ul>
            <li>អាំងតេក្រាលមិនកំណត់ (Indefinite Integrals)</li>
            <li>អាំងតេក្រាលកំណត់ (Definite Integrals)</li>
            <li>សមីការឌីផេរ៉ងស្យែល (Differential Equations)</li>
            <li>ធរណីមាត្រវិភាគក្នុងលំហ (3D Geometry)</li>
            <li>ប៉ារ៉ាបូល (Parabola)</li>
            <li>អេលីប (Ellipse)</li>
            <li>អ៊ីពែប៉ូល (Hyperbola)</li>
        </ul>
    `
};
