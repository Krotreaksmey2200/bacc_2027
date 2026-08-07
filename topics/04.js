const TOPIC_04 = {
    id: 4,
    title: "ចំណោទបរមា",
    icon: "⛰️",
    iconPath: "icons/04.png",
    tag: "មេរៀនទី៤",
    semester: 1,
    description: "រកបរមា អតិបរមា និងតម្លៃអតិបរមា/បរមា",
    pdfs: [],
    research: [
        { name: "ចំនួនកុំផ្លិច ថ្មី (លឹម ផល្គុន).pdf", path: "pdfs/01_កុំផ្លិច/research/ចំនួនកុំផ្លិច ថ្មី (លឹម ផល្គុន).pdf" }
    ],
    exercises: [
        {
            id: 1,
            question: "រកបរមា/អតិបរមា \\(\\displaystyle f(x) = x^2 - 4x + 3\\)",
            hint: "រក f'(x) ដាក់ស្មើ 0 រួចប្រើ f''(x)",
            answer: "\\(\\displaystyle f'(x) = 2x - 4 = 0 \\Rightarrow x = 2\\), \\(\\displaystyle f''(x) = 2 > 0\\) → បរមា \\(\\displaystyle f(2) = -1\\)"
        },
        {
            id: 2,
            question: "រកអតិបរមា \\(\\displaystyle f(x) = -x^2 + 6x - 5\\)",
            hint: "រក f'(x) ដាក់ស្មើ 0",
            answer: "\\(\\displaystyle f'(x) = -2x + 6 = 0 \\Rightarrow x = 3\\), \\(\\displaystyle f''(x) = -2 < 0\\) → អតិបរមា \\(\\displaystyle f(3) = 4\\)"
        },
        {
            id: 3,
            question: "រកបរមា/អតិបរមា \\(\\displaystyle f(x) = x^3 - 3x^2 + 1\\)",
            hint: "រក f'(x) ដាក់ស្មើ 0",
            answer: "\\(\\displaystyle f'(x) = 3x^2 - 6x = 3x(x-2) = 0 \\Rightarrow x = 0\\) ឬ \\(\\displaystyle x = 2\\)"
        }
    ],
    content: `
        <h3>១. និយមន័យ</h3>
        <ul>
            <li><strong>បរមា (Minimum):</strong> \\(\\displaystyle f(c) \\leq f(x)\\) សម្រាប់ x ទាំងអស់</li>
            <li><strong>អតិបរមា (Maximum):</strong> \\(\\displaystyle f(c) \\geq f(x)\\) សម្រាប់ x ទាំងអស់</li>
        </ul>

        <h3>២. វិធីស្វែងរក</h3>
        <h4>ក. វិធីដេរីវ៉ាន់</h4>
        <ol>
            <li>រក \\(\\displaystyle f'(x)\\)</li>
            <li>ដាក់ \\(\\displaystyle f'(x) = 0\\) ដើម្បីរកចំណុចវិសោធនកម្ម</li>
            <li>ប្រើ \\(\\displaystyle f''(x)\\) ដើម្បីពិនិត្យ៖
                <ul>
                    <li>\\(\\displaystyle f''(c) > 0\\) → បរមា</li>
                    <li>\\(\\displaystyle f''(c) < 0\\) → អតិបរមា</li>
                </ul>
            </li>
        </ol>

        <h4>ខ. តារាងសញ្ញា</h4>
        <p>ពិនិត្យសញ្ញា \\(\\displaystyle f'(x)\\) នៅជុំវិញចំណុចវិសោធនកម្ម</p>

        <div class="formula-box">
            \\(\\displaystyle f'(c) = 0, \\quad f''(c) > 0 \\Rightarrow \\text{បរមា}, \\quad f''(c) < 0 \\Rightarrow \\text{អតិបរមា}\\)
        </div>

        <h3>៣. លំហាត់អនុវត្តន៍</h3>
        <p>រកបរមា/អតិបរមា \\(\\displaystyle f(x) = x^3 - 3x + 2\\)</p>

        <div class="example-box">
            <h4>ឧទាហរណ៍៖</h4>
            <p>\\(\\displaystyle f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)\\)</p>
            <p>\\(\\displaystyle f'(x) = 0 \\Rightarrow x = 1\\) ឬ \\(\\displaystyle x = -1\\)</p>
            <p>\\(\\displaystyle f''(x) = 6x\\)</p>
            <p>\\(\\displaystyle f''(1) = 6 > 0\\) → <strong>បរមា</strong> \\(\\displaystyle f(1) = 0\\)</p>
            <p>\\(\\displaystyle f''(-1) = -6 < 0\\) → <strong>អតិបរមា</strong> \\(\\displaystyle f(-1) = 4\\)</p>
        </div>

        <div class="note-box">
            <h4>ចំណាំសំខាន់៖</h4>
            <p>ចំណុចវិសោធនកម្មអាចជាចំណុចដែល \\(\\displaystyle f'(x) = 0\\) ឬ \\(\\displaystyle f'(x)\\) គ្មាន។</p>
        </div>
    `
};
