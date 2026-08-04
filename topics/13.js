const TOPIC_13 = {
    id: 13,
    title: "ប៉ារ៉ាបូល",
    icon: "🔭",
    iconPath: "icons/13.png",
    tag: "មេរៀនទី១៣",
    semester: 2,
    description: "សមីការ និងលក្ខណៈប៉ារ៉ាបូល",
    pdfs: [],
    research: [],
    exercises: [
        {
            id: 1,
            question: "រកកំពូល \\(y = x^2 - 4x + 3\\)",
            hint: "ប្រើរូបមន្ត \\(x = -\\frac{b}{2a}\\)",
            answer: "\\(x = -\\frac{-4}{2 \\cdot 1} = 2\\), \\(y = 4 - 8 + 3 = -1\\)<br>កំពូល = \\((2, -1)\\)"
        },
        {
            id: 2,
            question: "រកផ្ចិតនៃ \\(y^2 = 8x\\)",
            hint: "ប្រើ \\(y^2 = 2px\\) → \\(p = 4\\)",
            answer: "\\(y^2 = 8x = 2 \\cdot 4 \\cdot x\\) → \\(p = 4\\)<br>ផ្ចិត = \\((\\frac{p}{2}, 0) = (2, 0)\\)"
        },
        {
            id: 3,
            question: "រក directrix នៃ \\(x^2 = -12y\\)",
            hint: "ប្រើ \\(x^2 = 2py\\) → \\(p = -6\\)",
            answer: "\\(x^2 = -12y = 2 \\cdot (-6) \\cdot y\\) → \\(p = -6\\)<br>directrix: \\(y = -\\frac{p}{2} = 3\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>ប៉ារ៉ាបូល (Parabola) គឺជាកំណាត់ស៊ីជម្រៅនៃចំណុច និងបន្ទាត់មួយ (directrix)</p>

        <h3>២. សមីការ</h3>
        <h4>ក. អ័ក្សស្ដាំ/ឆ្វេង (\\(y^2 = 2px\\))</h4>
        <div class="formula-box">
            \\(y^2 = 2px, \\quad \\text{កំពូល (0,0), ផ្ចិត (p/2, 0)}\\)
        </div>

        <h4>ខ. អ័ក្សកំពូល/បាត (\\(x^2 = 2py\\))</h4>
        <div class="formula-box">
            \\(x^2 = 2py, \\quad \\text{កំពូល (0,0), ផ្ចិត (0, p/2)}\\)
        </div>

        <h3>៣. លក្ខណៈ</h3>
        <ul>
            <li>សមីការទូទៅ: \\(y^2 - 2px = 0\\) (អ័ក្សស្ដាំ)</li>
            <li>ផ្ចិត: \\(F(p/2, 0)\\)</li>
            <li>បន្ទាត់កំណត់ (directrix): \\(x = -p/2\\)</li>
            <li>កែវ (latus rectum): \\(p\\)</li>
        </ul>

        <h3>៤. សមីការទូទៅ</h3>
        <div class="formula-box">
            \\(y = ax^2 + bx + c, \\quad \\text{កំពូល: } \\left(-\\frac{b}{2a}, c - \\frac{b^2}{4a}\\right)\\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>រកកំពូល \\(y = x^2 - 4x + 3\\)</p>
            <p>\\(x = -\\frac{-4}{2 \\cdot 1} = 2\\)</p>
            <p>\\(y = 4 - 8 + 3 = -1\\)</p>
            <p>កំពូល = <strong>\\((2, -1)\\)</strong></p>
        </div>
    `
};
