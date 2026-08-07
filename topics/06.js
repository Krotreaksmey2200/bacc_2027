const TOPIC_06 = {
    id: 6,
    title: "អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល",
    icon: "📉",
    iconPath: "icons/06.png",
    tag: "មេរៀនទី៦",
    semester: 2,
    description: "អនុគមន៍ eˣ និងអនុវត្តន៍របស់វា",
    pdfs: [],
    research: [],
    exercises: [
        {
            id: 1,
            question: "គណនា \\(\\displaystyle \\frac{d}{dx}[e^{3x}]\\)",
            hint: "ប្រើរូបមន្ត \\(\\displaystyle \\frac{d}{dx}[e^{kx}] = ke^{kx}\\)",
            answer: "\\(\\displaystyle \\frac{d}{dx}[e^{3x}] = 3e^{3x}\\)"
        },
        {
            id: 2,
            question: "គណនា \\(\\displaystyle \\int e^{2x} \\, dx\\)",
            hint: "ប្រើរូបមន្ត \\(\\displaystyle \\int e^{kx} \\, dx = \\frac{1}{k}e^{kx} + C\\)",
            answer: "\\(\\displaystyle \\int e^{2x} \\, dx = \\frac{1}{2}e^{2x} + C\\)"
        },
        {
            id: 3,
            question: "គណនា \\(\\displaystyle \\lim\limits_{x \\to 0} \\frac{e^x - 1}{x}\\)",
            hint: "ប្រើរូបមន្តពិសេស",
            answer: "\\(\\displaystyle \\lim\limits_{x \\to 0} \\frac{e^x - 1}{x} = 1\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល <strong>f(x) = eˣ</strong> គឺជាអនុគមន៍សនិទានដែលមានមូលដ្ឋាន e</p>

        <div class="formula-box">
            \\(\\displaystyle f(x) = e^x, \\quad e \\approx 2.71828\\)
        </div>

        <h3>២. លក្ខណៈ</h3>
        <ul>
            <li>\\(\\displaystyle f(0) = 1\\)</li>
            <li>\\(\\displaystyle f'(x) = e^x\\) (ដេរីវ៉ាន់ស្មើនឹងខ្លួនឯង!)</li>
            <li>\\(\\displaystyle f(x) > 0\\) សម្រាប់ x ទាំងអស់</li>
            <li>\\(\\displaystyle f(x)\\) កើនសម្រាប់ x ទាំងអស់</li>
            <li>\\(\\displaystyle \\text{dom}(f) = \\mathbb{R}\\), \\(\\displaystyle \\text{ran}(f) = (0, +\\infty)\\)</li>
        </ul>

        <div class="formula-box">
            \\(\\displaystyle \\frac{d}{dx} e^x = e^x, \\quad \\int e^x \\, dx = e^x + C\\)
        </div>

        <h3>៣. ប្រមាណវិធី</h3>
        <div class="formula-box">
            \\(\\displaystyle e^x \\cdot e^y = e^{x+y}, \\quad \\frac{e^x}{e^y} = e^{x-y}, \\quad (e^x)^n = e^{nx}\\)
        </div>

        <h3>៤. អនុវត្តន៍</h3>
        <ul>
            <li>ការលូតលាស់ (Population growth)</li>
            <li>ការប្រមូលផ្ដុំប្រាក់ការ (Compound interest)</li>
            <li>ការថយចុះ (Radioactive decay)</li>
        </ul>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>គណនា \\(\\displaystyle \\lim\limits_{x \\to 0} \\frac{e^x - 1}{x} = 1\\)</p>
            <p>គណនា \\(\\displaystyle \\frac{d}{dx}[e^{3x}] = 3e^{3x}\\)</p>
        </div>
    `
};
