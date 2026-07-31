const TOPIC_14 = {
    id: 14,
    title: "អេលីប",
    icon: "⭕",
    iconPath: "icons/14.png",
    tag: "មេរៀនទី១៤",
    semester: 2,
    description: "សមីការ និងលក្ខណៈអេលីប",
    pdfs: [],
    content: `
            <h3>១. និយមន័យ</h3>
            <p>អេលីប (Ellipse) គឺជាកំណាត់ដែលមានផលបូកប្រវែងពីចំណុចពីរ (foci) ថេរ</p>

            <h3>២. សមីការ</h3>
            <h4>ក. អ័ក្សស្ដាំ (a &gt; b)</h4>
            <div class="formula-box">
                $$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$
            </div>

            <h4>ខ. អ័ក្សកំពូល (b &gt; a)</h4>
            <div class="formula-box">
                $$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$
            </div>

            <h3>៣. លក្ខណៈ</h3>
            <ul>
                <li><strong>កំពូល:</strong> (±a, 0) ឬ (0, ±b)</li>
                <li><strong>ផ្ចិត:</strong> (±c, 0) ដែល c² = a² - b²</li>
                <li><strong>អ័ក្សឆ្លង:</strong> 2a និង 2b</li>
                <li><strong>ឧស្សាហកម្ម:</strong> e = c/a (0 &lt; e &lt; 1)</li>
            </ul>

            <div class="formula-box">
                $$c^2 = a^2 - b^2, \\quad e = \\frac{c}{a}$$
            </div>

            <h3>៤. ទំនាក់ទំនង</h3>
            <ul>
                <li>រង្វាល់ (circle): a = b, e = 0</li>
                <li>អេលីប: 0 &lt; e &lt; 1</li>
                <li>ប៉ារ៉ាបូល: e = 1</li>
                <li>អ៊ីពែប៉ូល: e &gt; 1</li>
            </ul>

            <div class="example-box">
                <h4>ឧទាហរណ៍៖</h4>
                <p>រក c និង e នៃ x²/25 + y²/9 = 1</p>
                <p>a² = 25, b² = 9 → c² = 25 - 9 = 16 → c = 4</p>
                <p>e = 4/5 = <strong>0.8</strong></p>
            </div>
        `
};
