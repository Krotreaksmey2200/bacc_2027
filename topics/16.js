const TOPIC_16 = {
    id: 16,
    title: "លំហាត់សង្ខេបឆមាសទី១",
    icon: "📝",
    iconPath: "icons/16.png",
    tag: "ត្រៀមប្រឡង",
    semester: 3,
    description: "លំហាត់សង្ខេបសម្រាប់ត្រៀមប្រឡងឆមាសទី១",
    pdfs: [],
    exercises: [
        {
            id: 1,
            question: "គណនា \((3 + 2i)(1 - i)\)",
            hint: "ប្រើការគុណកុំផ្លិច",
            answer: "\((3 + 2i)(1 - i) = 3 - 3i + 2i - 2i^2 = 3 - i + 2 = 5 - i\)"
        },
        {
            id: 2,
            question: "គណនា \(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\)",
            hint: "បំបែកទម្រង់",
            answer: "\(\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2\)<br>\(\\lim_{x \\to 2} (x + 2) = 4\)"
        },
        {
            id: 3,
            question: "រកចំណុចបរមាលីករបស់ \(f(x) = x^3 - 3x^2 + 1\)",
            hint: "ដាក់ \(f'(x) = 0\)",
            answer: "\(f'(x) = 3x^2 - 6x = 3x(x - 2) = 0\)<br>\(x = 0\) ឬ \(x = 2\)<br>\(f(0) = 1\) (បរមា), \(f(2) = -3\) (បរមា)"
        },
        {
            id: 4,
            question: "គណនា \(e^{\\ln 5}\)",
            hint: "ប្រើលក្ខណៈ \(e^{\\ln x} = x\)",
            answer: "\(e^{\\ln 5} = 5\)"
        },
        {
            id: 5,
            question: "គណនា \(\\ln e^3\)",
            hint: "ប្រើលក្ខណៈ \(\\ln e^x = x\)",
            answer: "\(\\ln e^3 = 3\)"
        }
    ],
    content: `
        <h3>📝 លំហាត់សង្ខេបឆមាសទី១</h3>
        <p>ផ្ទុកលំហាត់សង្ខេបសម្រាប់ត្រៀមប្រឡងឆមាសទី១</p>
        <ul>
            <li>កុំផ្លិច (Complex Numbers)</li>
            <li>លីមីតអនុគមន៍ (Limits)</li>
            <li>ភាពជាប់អនុគមន៍ (Continuity)</li>
            <li>ចំណោទបរមា (Extrema)</li>
            <li>អនុគមន៍សនិទាន (Exponential)</li>
            <li>អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល (eˣ)</li>
            <li>អនុគមន៍លោការីត (Logarithmic)</li>
        </ul>
    `
};
