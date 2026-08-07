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
            question: "រកកំពូល \\(\\displaystyle y = x^2 - 4x + 3\\)",
            hint: "ប្រើរូបមន្ត \\(\\displaystyle x = -\\frac{b}{2a}\\)",
            answer: "\\(\\displaystyle x = -\\frac{-4}{2 \\cdot 1} = 2\\), \\(\\displaystyle y = 4 - 8 + 3 = -1\\)<br>កំពូល = \\(\\displaystyle (2, -1)\\)"
        },
        {
            id: 2,
            question: "រកផ្ចិតនៃ \\(\\displaystyle y^2 = 8x\\)",
            hint: "ប្រើ \\(\\displaystyle y^2 = 2px\\) → \\(\\displaystyle p = 4\\)",
            answer: "\\(\\displaystyle y^2 = 8x = 2 \\cdot 4 \\cdot x\\) → \\(\\displaystyle p = 4\\)<br>ផ្ចិត = \\(\\displaystyle (\\frac{p}{2}, 0) = (2, 0)\\)"
        },
        {
            id: 3,
            question: "រក directrix នៃ \\(\\displaystyle x^2 = -12y\\)",
            hint: "ប្រើ \\(\\displaystyle x^2 = 2py\\) → \\(\\displaystyle p = -6\\)",
            answer: "\\(\\displaystyle x^2 = -12y = 2 \\cdot (-6) \\cdot y\\) → \\(\\displaystyle p = -6\\)<br>directrix: \\(\\displaystyle y = -\\frac{p}{2} = 3\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <p>ប៉ារ៉ាបូល (Parabola) គឺជាកំណាត់ស៊ីជម្រៅនៃចំណុច និងបន្ទាត់មួយ (directrix)</p>

        <h3>២. សមីការ</h3>
        <h4>ក. អ័ក្សស្ដាំ/ឆ្វេង (\\(\\displaystyle y^2 = 2px\\))</h4>
        <div class="formula-box">
            \\(\\displaystyle y^2 = 2px, \\quad \\text{កំពូល (0,0), ផ្ចិត (p/2, 0)}\\)
        </div>

        <h4>ខ. អ័ក្សកំពូល/បាត (\\(\\displaystyle x^2 = 2py\\))</h4>
        <div class="formula-box">
            \\(\\displaystyle x^2 = 2py, \\quad \\text{កំពូល (0,0), ផ្ចិត (0, p/2)}\\)
        </div>

        <h3>៣. លក្ខណៈ</h3>
        <ul>
            <li>សមីការទូទៅ: \\(\\displaystyle y^2 - 2px = 0\\) (អ័ក្សស្ដាំ)</li>
            <li>ផ្ចិត: \\(\\displaystyle F(p/2, 0)\\)</li>
            <li>បន្ទាត់កំណត់ (directrix): \\(\\displaystyle x = -p/2\\)</li>
            <li>កែវ (latus rectum): \\(\\displaystyle p\\)</li>
        </ul>

        <h3>៤. សមីការទូទៅ</h3>
        <div class="formula-box">
            \\(\\displaystyle y = ax^2 + bx + c, \\quad \\text{កំពូល: } \\left(-\\frac{b}{2a}, c - \\frac{b^2}{4a}\\right)\\)
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>រកកំពូល \\(\\displaystyle y = x^2 - 4x + 3\\)</p>
            <p>\\(\\displaystyle x = -\\frac{-4}{2 \\cdot 1} = 2\\)</p>
            <p>\\(\\displaystyle y = 4 - 8 + 3 = -1\\)</p>
            <p>កំពូល = <strong>\\(\\displaystyle (2, -1)\\)</strong></p>
        </div>
    `
};
