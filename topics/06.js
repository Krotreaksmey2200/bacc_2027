const TOPIC_06 = {
    id: 6,
    title: "អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល",
    icon: "📉",
    iconPath: "icons/06.png",
    tag: "មេរៀនទី៦",
    semester: 2,
    description: "អនុគមន៍ eˣ និងអនុវត្តន៍របស់វា",
    pdfs: [],
    content: `
            <h3>១. និយមន័យ</h3>
            <p>អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល <strong>f(x) = eˣ</strong> គឺជាអនុគមន៍សនិទានដែលមានមូលដ្ឋាន e</p>

            <div class="formula-box">
                $$f(x) = e^x, \\quad e \\approx 2.71828$$
            </div>

            <h3>២. លក្ខណៈ</h3>
            <ul>
                <li>f(0) = 1</li>
                <li>f'(x) = eˣ (ដេរីវ៉ាន់ស្មើនឹងខ្លួនឯង!)</li>
                <li>f(x) &gt; 0 សម្រាប់ x ទាំងអស់</li>
                <li>f(x) កើនសម្រាប់ x ទាំងអស់</li>
                <li>dom(f) = ℝ, ran(f) = (0, +∞)</li>
            </ul>

            <div class="formula-box">
                $$\\frac{d}{dx} e^x = e^x, \\quad \\int e^x \\, dx = e^x + C$$
            </div>

            <h3>៣. ប្រមាណវិធី</h3>
            <div class="formula-box">
                $$e^x \\cdot e^y = e^{x+y}, \\quad \\frac{e^x}{e^y} = e^{x-y}, \\quad (e^x)^n = e^{nx}$$
            </div>

            <h3>៤. អនុវត្តន៍</h3>
            <ul>
                <li>ការលូតលាស់ (Population growth)</li>
                <li>ការប្រមូលផ្ដុំប្រាក់ការ (Compound interest)</li>
                <li>ការថយចុះ (Radioactive decay)</li>
            </ul>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>គណនា lim(x→0) (eˣ - 1)/x = 1</p>
                <p>គណនា d/dx[e^(3x)] = 3e^(3x)</p>
            </div>
        `
};
