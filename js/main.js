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
let currentSemester = 1;

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

// ===== Filter by Semester =====
function filterBySemester(semester) {
    currentSemester = semester;
    
    // Update active tab
    document.querySelectorAll('.semester-tab').forEach(tab => {
        tab.classList.toggle('active', parseInt(tab.getAttribute('data-semester')) === semester);
    });
    
    renderTopics(searchQuery);
}

// ===== Render Topics =====
function renderTopics(filter = '') {
    const filteredTopics = TOPICS.filter(topic => {
        // Filter by semester
        if (topic.semester !== currentSemester) return false;
        
        // Filter by search
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

    topicsGrid.innerHTML = filteredTopics.map(topic => {
        const iconHTML = topic.iconPath 
            ? `<img src="${topic.iconPath}" alt="${topic.title}" class="topic-card-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
               <span class="topic-card-icon" style="display:none;">${topic.icon}</span>`
            : `<span class="topic-card-icon">${topic.icon}</span>`;
        
        return `
        <div class="topic-card" data-topic-id="${topic.id}" onclick="openTopic(${topic.id})">
            <div class="topic-card-icon-wrapper">
                ${iconHTML}
            </div>
            <span class="topic-card-number">${topic.id}</span>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <span class="topic-card-tag">${topic.tag}</span>
        </div>
        `;
    }).join('');
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

    renderLessonTab(topicId);
    renderExerciseTab(topicId);

    switchTab('lesson');

    topicModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.MathJax) {
        MathJax.typesetPromise([modalBody]).catch(err => console.log('MathJax error:', err));
    }
}

// ===== Render Lesson Tab =====
function renderLessonTab(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    const lessonPDFs = (topic?.pdfs || []).filter(p => p.type === 'lesson');

    let html = '';

    // Lesson content
    html += topic.content;

    // Lesson PDFs with preview
    if (lessonPDFs.length > 0) {
        html += `<div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border);">`;
        html += `<h3>📁 ឯកសារមេរៀន</h3>`;
        lessonPDFs.forEach((pdf, index) => {
            html += `
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <div class="pdf-info">
                            <span class="pdf-icon">📖</span>
                            <span class="pdf-name">${pdf.name}</span>
                        </div>
                        <div class="pdf-actions">
                            <a class="pdf-btn pdf-btn-download" href="${pdf.path}" download="${pdf.name}" style="text-decoration:none;">⬇️ ទាញយក</a>
                        </div>
                    </div>
                    <div class="pdf-preview">
                        <iframe src="${pdf.path}" frameborder="0"></iframe>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }

    modalBody.innerHTML = html;
}

// ===== Render Exercise Tab =====
function renderExerciseTab(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    const exercisePDFs = (topic?.pdfs || []).filter(p => p.type === 'exercise');

    let html = '';

    if (exercisePDFs.length > 0) {
        exercisePDFs.forEach((pdf, index) => {
            html += `
                <div class="pdf-card">
                    <div class="pdf-card-header">
                        <div class="pdf-info">
                            <span class="pdf-icon">✏️</span>
                            <span class="pdf-name">${pdf.name}</span>
                        </div>
                        <div class="pdf-actions">
                            <a class="pdf-btn pdf-btn-download" href="${pdf.path}" download="${pdf.name}" style="text-decoration:none;">⬇️ ទាញយក</a>
                        </div>
                    </div>
                    <div class="pdf-preview">
                        <iframe src="${pdf.path}" frameborder="0"></iframe>
                    </div>
                </div>
            `;
        });
    } else {
        html += `
            <div class="pdf-viewer">
                <div class="pdf-viewer-empty">
                    <span class="empty-icon">📄</span>
                    <p>មិនទាន់មានឯកសារលំហាត់</p>
                </div>
            </div>
        `;
    }

    exerciseBody.innerHTML = html;
}

// ===== Toggle Preview =====
function togglePreview(id) {
    const preview = document.getElementById(id);
    if (preview) {
        preview.classList.toggle('hidden');
    }
}

// ===== View PDF =====
function viewPDF(path, name) {
    pdfFullscreenTitle.textContent = name;
    pdfFullscreenFrame.src = path;
    pdfFullscreen.classList.remove('hidden');
}

// ===== Close PDF Fullscreen =====
function closePdfFullscreen() {
    pdfFullscreen.classList.add('hidden');
    pdfFullscreenFrame.src = '';
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
