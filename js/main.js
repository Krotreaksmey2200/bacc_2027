// ===== DOM Elements =====
const topicsGrid = document.getElementById('topicsGrid');
const exercisesList = document.getElementById('exercisesList');
const exerciseFilter = document.getElementById('exerciseFilter');
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

// ===== State =====
let currentFilter = 'all';
let searchQuery = '';

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    renderTopics();
    renderExercises();
    renderExerciseFilters();
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

// ===== Render Exercise Filters =====
function renderExerciseFilters() {
    const topics = [...new Set(EXERCISES.map(e => e.topicId))];
    exerciseFilter.innerHTML = `
        <button class="filter-btn active" data-topic="all" onclick="filterExercises('all')">ទាំងអស់</button>
        ${topics.map(topicId => {
            const topic = TOPICS.find(t => t.id === topicId);
            return `<button class="filter-btn" data-topic="${topicId}" onclick="filterExercises(${topicId})">${topic.title}</button>`;
        }).join('')}
    `;
}

// ===== Render Exercises =====
function renderExercises(topicFilter = 'all') {
    let filtered = EXERCISES;

    if (topicFilter !== 'all') {
        filtered = filtered.filter(e => e.topicId === parseInt(topicFilter));
    }

    if (searchQuery) {
        filtered = filtered.filter(e =>
            e.title.includes(searchQuery) ||
            e.problem.includes(searchQuery)
        );
    }

    if (filtered.length === 0) {
        exercisesList.innerHTML = `
            <div class="no-results">
                <span class="no-results-icon">✏️</span>
                <p>រកមិនឃើញលំហាត់ដែលត្រូវនឹងការស្វែងរកទេ</p>
            </div>
        `;
        return;
    }

    exercisesList.innerHTML = filtered.map(exercise => {
        const topic = TOPICS.find(t => t.id === exercise.topicId);
        const badgeClass = exercise.difficulty === 'easy' ? 'badge-easy' :
                          exercise.difficulty === 'medium' ? 'badge-medium' : 'badge-hard';
        const difficultyLabel = exercise.difficulty === 'easy' ? 'ងាយ' :
                               exercise.difficulty === 'medium' ? 'មធ្យម' : 'ពិបាក';

        return `
            <div class="exercise-card" onclick="openTopic(${exercise.topicId})">
                <div class="exercise-card-header">
                    <span class="exercise-badge ${badgeClass}">${difficultyLabel}</span>
                    <h4>${exercise.title}</h4>
                </div>
                <p>${topic.icon} ${topic.title}</p>
                <div class="exercise-math">${exercise.problem}</div>
            </div>
        `;
    }).join('');
}

// ===== Filter Exercises =====
function filterExercises(topicId) {
    currentFilter = topicId;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-topic') === topicId.toString());
    });
    renderExercises(topicId);
}

// ===== Open Topic Modal =====
function openTopic(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (!topic) return;

    modalIcon.textContent = topic.icon;
    modalTitle.textContent = topic.title;
    modalBody.innerHTML = topic.content;

    topicModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.MathJax) {
        MathJax.typesetPromise([modalBody]).catch(err => console.log('MathJax error:', err));
    }
}

// ===== Close Modal =====
function closeModal() {
    topicModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===== Search =====
function handleSearch() {
    searchQuery = searchInput.value.trim();
    renderTopics(searchQuery);
    renderExercises(currentFilter);
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
        if (e.key === 'Escape') closeModal();
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
