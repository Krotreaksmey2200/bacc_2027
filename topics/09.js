const TOPIC_09 = {
    id: 9,
    title: "ធរណីមាត្រវិភាគក្នុងលំហ",
    icon: "🌐",
    iconPath: "icons/09.png",
    tag: "មេរៀនទី៩",
    semester: 1,
    description: "ចំណុច សរសៃរ រង្វាល់ និងប្លង់ក្នុងលំហ",
    pdfs: [],
    exercises: [
        {
            id: 1,
            question: "រកប្រវែង AB ដែល A(1,2,3) និង B(4,6,8)",
            hint: "ប្រើរូបមន្ត $$d(A,B) = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$",
            answer: "$$d = \\sqrt{(4-1)^2 + (6-2)^2 + (8-3)^2} = \\sqrt{9+16+25} = \\sqrt{50} = 5\\sqrt{2}$$"
        },
        {
            id: 2,
            question: "រកសមីការសរសៃរកាត់ចំណុច A(1,2,3) និង B(4,6,8)",
            hint: "ប្រើទម្រង់ប៉ារ៉ាម៉ែត្រ",
            answer: "$$x = 1 + 3t, \\quad y = 2 + 4t, \\quad z = 3 + 5t$$"
        },
        {
            id: 3,
            question: "រកសមីការរង្វាល់ដែលមានកណ្ដាល O(1,2,3) និងកាំង R = 4",
            hint: "ប្រើរូបមន្ត $$(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$$",
            answer: "$$(x-1)^2 + (y-2)^2 + (z-3)^2 = 16$$"
        }
    ],
    content: `
        <h3>១. ចំណុចក្នុងលំហ ℝ³</h3>
        <p>ចំណុច M(x, y, z) មានកូអរដោនេ 3 វិមាត្រ</p>

        <div class="formula-box">
            $$M(x, y, z) \\in \\mathbb{R}^3$$
        </div>

        <h3>២. រវាងចំណុចពីរ</h3>
        <div class="formula-box">
            $$d(A,B) = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$
        </div>

        <h3>៣. សមីការសរសៃរ</h3>
        <p>សរសៃរ AB កាត់ចំណុច M ដែល M = (1-t)A + tB</p>

        <h4>ទម្រង់រង្វាល់ (Symmetric)</h4>
        <div class="formula-box">
            $$\\frac{x-x_1}{a} = \\frac{y-y_1}{b} = \\frac{z-z_1}{c}$$
        </div>

        <h4>ទម្រង់ប៉ារ៉ាម៉ែត្រ</h4>
        <div class="formula-box">
            $$x = x_1 + at, \\quad y = y_1 + bt, \\quad z = z_1 + ct$$
        </div>

        <h3>៤. សមីការប្លង់</h3>
        <div class="formula-box">
            $$ax + by + cz + d = 0$$
        </div>

        <h3>៥. សមីការរង្វាល់</h3>
        <div class="formula-box">
            $$(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$$
        </div>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>រកប្រវែង AB ដែល A(1,2,3) និង B(4,6,8)</p>
            <p>$$d = \\sqrt{(4-1)^2 + (6-2)^2 + (8-3)^2} = \\sqrt{9+16+25} = \\sqrt{50} = 5\\sqrt{2}$$</p>
        </div>
    `
};
