const TOPIC_18 = {
    id: 18,
    title: "លំហាត់អនុវត្តន៍បាក់ឌុប",
    icon: "🎯",
    iconPath: "icons/18.png",
    tag: "ត្រៀមប្រឡង",
    semester: 3,
    description: "លំហាត់អនុវត្តន៍ពិតប្រាកដសម្រាប់ប្រឡងបាក់ឌុប",
    pdfs: [],
    research: [],
    exercises: [
        {
            id: 1,
            question: "គណនា \\(\\displaystyle \\int_0^{\\pi} \\sin x \\, dx\\)",
            hint: "ប្រើ \\(\\displaystyle \\int \\sin x \\, dx = -\\cos x + C\\)",
            answer: "\\(\\displaystyle \\int_0^{\\pi} \\sin x \\, dx = \\left[-\\cos x\\right]_0^{\\pi} = -(-1) - (-1) = 2\\)"
        },
        {
            id: 2,
            question: "ដោះស្រាយ \\(\\displaystyle y'' + 4y = 0\\)",
            hint: "សមីការលក្ខណៈមានឬសស្មុគស្មាញ",
            answer: "\\(\\displaystyle r^2 + 4 = 0 \\Rightarrow r = \\pm 2i\\)<br>\\(\\displaystyle y = C_1 \\cos 2x + C_2 \\sin 2x\\)"
        },
        {
            id: 3,
            question: "រកផ្ទៃក្រឡារវាង \\(\\displaystyle y = x^2\\) និង \\(\\displaystyle y = x\\)",
            hint: "រកចំណុចប្រសព្វ រួចអាំងតេក្រាល",
            answer: "\\(\\displaystyle x^2 = x \\Rightarrow x = 0, 1\\)<br>\\(\\displaystyle S = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}\\)"
        },
        {
            id: 4,
            question: "គណនា \\(\\displaystyle \\frac{d}{dx}(x^2 e^x)\\)",
            hint: "ប្រើរូបមន្តគុណវិធី",
            answer: "\\(\\displaystyle \\frac{d}{dx}(x^2 e^x) = 2x \\cdot e^x + x^2 \\cdot e^x = e^x(2x + x^2)\\)"
        },
        {
            id: 5,
            question: "បង្ហាញថា \\(\\displaystyle \\int_1^e \\frac{1}{x} \\, dx = 1\\)",
            hint: "ប្រើ \\(\\displaystyle \\int \\frac{1}{x} \\, dx = \\ln|x| + C\\)",
            answer: "\\(\\displaystyle \\int_1^e \\frac{1}{x} \\, dx = \\left[\\ln|x|\\right]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1\\)"
        }
    ],
    content: `
        <h3>🎯 លំហាត់អនុវត្តន៍បាក់ឌុប</h3>
        <p>លំហាត់អនុវត្តន៍ពិតប្រាកដដែលធ្លាប់ចេញក្នុងការប្រឡងបាក់ឌុប</p>
        <div class="note-box">
            <h4>💡 គន្លឹះសម្រាប់ប្រឡង៖</h4>
            <ul>
                <li>អានសំណួរឱ្យបានយល់ច្បាស់</li>
                <li>សរសេររូបមន្តឱ្យបានពេញ</li>
                <li>គណនាដោយប្រុងប្រយ័ត្ន</li>
                <li>ពិនិត្យលទ្ធផលម្ដងទៀត</li>
            </ul>
        </div>
    `
};
