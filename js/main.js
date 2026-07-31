// ===== DOM Elements =====
const topicsGrid = document.getElementById('topicsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const topicModal = document.getElementById('topicModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalIcon = document.getElementById('modalIcon');
const modalBody = document.getElementById('modalBody');
const exerciseBody = document.getElementById('exerciseBody');
const pdfFullscreen = document.getElementById('pdfFullscreen');
const pdfFullscreenFrame = document.getElementById('pdfFullscreenFrame');
const pdfFullscreenTitle = document.getElementById('pdfFullscreenTitle');

// ===== State =====
let searchQuery = '';
let currentTopicId = null;
let currentTab = 'lesson';
let uploadedPDFs = JSON.parse(localStorage.getItem('uploadedPDFs') || '{}');

// ===== PDF Folder Mapping =====
const PDF_FOLDERS = {
    1: 'pdfs/01_កុំផ្លិច',
    2: 'pdfs/02_លីមីតអនុគមន៍',
    3: 'pdfs/03_ភាពជាប់អនុគមន៍',
    4: 'pdfs/04_ចំណោទបរមា',
    5: 'pdfs/05_អនុគមន៍សនិទាន',
    6: 'pdfs/06_អនុគមន៍អ៊ិចស្ប៉ូណង់ស្យែល',
    7: 'pdfs/07_អនុគមន៍លោការីត',
    8: 'pdfs/08_អាំងតេក្រាលមិនកំណត់',
    9: 'pdfs/09_អាំងតេក្រាលកំណត់',
    10: 'pdfs/10_សមីការឌីផេរ៉ងស្យែលទី១',
    11: 'pdfs/11_សមីការឌីផេរ៉ងស្យែលទី២',
    12: 'pdfs/12_ធរណីមាត្រវិភាគក្នុងលំហ',
    13: 'pdfs/13_ប៉ារ៉ាបូល',
    14: 'pdfs/14_អេលីប',
    15: 'pdfs/15_អ៊ីពែប៉ូល'
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    renderTopics();
    setupEventListeners();
});

// ===== Theme =====
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// ===== Render Topics =====
function renderTopics(filter = '') {
    const filteredTopics = TOPICS.filter(topic => {
        if (!filter) return true;
        return topic.title.includes(filter) ||
               topic.description.includes(filter) ||
               topic.tag.includes(filter);
    });

    if (filteredTopics.length === 0) {
        topicsGrid.innerHTML = `
            <div class="no-results">
                <span class="no-results-icon">🔍</span>
                <p>រកមិនឃើញប្រធានបទដែលត្រូវនឹងការស្វែងរកទេ</p>
            </div>
        `;
        return;
    }

    topicsGrid.innerHTML = filteredTopics.map(topic => `
        <div class="topic-card" data-topic-id="${topic.id}" onclick="openTopic(${topic.id})">
            <span class="topic-card-icon">${topic.icon}</span>
            <span class="topic-card-number">${topic.id}</span>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <span class="topic-card-tag">${topic.tag}</span>
        </div>
    `).join('');
}

// ===== Switch Tabs =====
function switchTab(tab) {
    currentTab = tab;

    document.querySelectorAll('.modal-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-tab') === tab);
    });

    if (tab === 'lesson') {
        modalBody.classList.remove('hidden');
        exerciseBody.classList.add('hidden');
    } else {
        modalBody.classList.add('hidden');
        exerciseBody.classList.remove('hidden');
    }
}

// ===== Open Topic Modal =====
function openTopic(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    currentTopicId = topicId;

    modalIcon.textContent = topic.icon;
    modalTitle.textContent = topic.title;

    // Lesson Tab - Clean content only
    modalBody.innerHTML = topic.content;

    // Exercise Tab - PDFs only
    renderExerciseTab(topicId);

    switchTab('lesson');

    topicModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.MathJax) {
        MathJax.typesetPromise([modalBody]).catch(err => console.log('MathJax error:', err));
    }
}

// ===== Render Exercise Tab =====
function renderExerciseTab(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    const repoPDFs = topic?.pdfs || [];

    let html = '';

    if (repoPDFs.length > 0) {
        html += `<div class="pdf-list">`;
        repoPDFs.forEach(pdf => {
            html += `
                <div class="pdf-item">
                    <div class="pdf-info">
                        <span class="pdf-icon">📄</span>
                        <div>
                            <span class="pdf-name">${pdf.name}</span>
                        </div>
                    </div>
                    <div class="pdf-actions">
                        <button class="pdf-btn pdf-btn-view" onclick="viewRepoPDF('${pdf.path}', '${pdf.name}')">មើល</button>
                        <a class="pdf-btn pdf-btn-view" href="${pdf.path}" download style="text-decoration:none;">ទាញយក</a>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    } else {
        html += `
            <div class="pdf-viewer">
                <div class="pdf-viewer-empty">
                    <span class="empty-icon">📄</span>
                    <p>មិនទាន់មានឯកសារ PDF</p>
                </div>
            </div>
        `;
    }

    exerciseBody.innerHTML = html;
}

// ===== Close Modal =====
function closeModal() {
    topicModal.classList.add('hidden');
    document.body.style.overflow = '';
    currentTopicId = null;
}

// ===== Search =====
function handleSearch() {
    searchQuery = searchInput.value.trim();
    renderTopics(searchQuery);
}

// ===== Event Listeners =====
function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!pdfFullscreen.classList.contains('hidden')) {
                closePdfFullscreen();
            } else {
                closeModal();
            }
        }
    });

    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}
