const TOPIC_03 = {
    id: 3,
    title: "ភាពជាប់អនុគមន៍",
    icon: "🔗",
    iconPath: "icons/03.png",
    tag: "មេរៀនទី៣",
    semester: 1,
    description: "ស្គាល់ និងពិនិត្យភាពជាប់អនុគមន៍",
    pdfs: [],
    content: `
            <h3>១. និយមន័យ</h3>
            <p>អនុគមន៍ f(x) ជាប់នៅចំណុច a ប្រសិនបើ:</p>
            <ol>
                <li>f(a) មានតម្លៃ</li>
                <li>lim(x→a) f(x) មានតម្លៃ</li>
                <li>lim(x→a) f(x) = f(a)</li>
            </ol>

            <div class="formula-box">
                $$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$$
            </div>

            <h3>២. ប្រភេទភាពមិនជាប់</h3>
            <ul>
                <li><strong>រលាយ (Removable):</strong> លីមីតមានតែ f(a) គ្មាន</li>
                <li><strong>លោត (Jump):</strong> លីមីតឆ្វេង ≠ លីមីតស្ដាំ</li>
                <li><strong>អនន្ត (Infinite):</strong> លីមីត = ±∞</li>
            </ul>

            <h3>៣. លក្ខណៈភាពជាប់</h3>
            <p>ប្រសិនបើ f និង g ជាប់នៅ a នោះ:</p>
            <ul>
                <li>f + g, f - g, f·g ក៏ជាប់នៅ a ដែរ</li>
                <li>f/g ជាប់នៅ a ប្រសិនបើ g(a) ≠ 0</li>
                <li>f ∘ g (សមាសអនុគមន៍) ក៏ជាប់នៅ a ដែរ</li>
            </ul>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>ពិនិត្យភាពជាប់ f(x) = (x²-1)/(x-1) នៅ x = 1</p>
                <p>lim(x→1) (x²-1)/(x-1) = lim(x→1)(x+1) = 2 ប៉ុន្តែ f(1) គ្មាន → មិនជាប់ (removable)</p>
            </div>
        `
};
