<template>
  <div class="page-container font-sans">

    <header class="header-section relative z-20">
      <h1 class="big-title">À propos</h1>
    </header>

    <main class="content-section relative z-10">

      <div class="grid-layout">

        <div class="text-column">
          <p class="bio-text">
            <span class="font-bold">Alexandre VILLANI</span>, étudiant en troisième année de <span class="font-bold">Bachelor Universitaire Informatique</span> à Belfort, vous souhaite la bienvenue. Ce portfolio est le fruit de mes trois années de formation et de l'acquisition de compétences dans le domaine de l'informatique.
          </p>
          <p class="bio-text mt-8">
            Mes centres d'intérêt, notamment la photographie et l'informatique. C'est pourquoi vous trouverez ici des réalisations variées : projets académiques, expériences professionnelles (stage) et mes initiatives personnelles.
          </p>

          <div class="skills-group mt-10">
            <h3 class="category-title">Langages & Développement</h3>
            <ul class="tech-list">
              <li v-for="item in devSkills" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="skills-group mt-8">
            <h3 class="category-title">Bases de données</h3>
            <ul class="tech-list">
              <li v-for="item in dbSkills" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="skills-group mt-8">
            <h3 class="category-title">Outils & Technologies</h3>
            <ul class="tech-list">
              <li v-for="item in toolSkills" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="education-section mt-12">
            <h3 class="section-subtitle">Formation</h3>
            <div class="education-list">

              <div class="education-item">
                <span class="year">En cours</span>
                <div class="education-details">
                  <span class="degree">Bachelor Universitaire de Technologie</span>
                  <span class="school">IUT NFC Belfort</span>
                </div>
              </div>

              <div class="education-item">
                <span class="year">2025</span>
                <div class="education-details">
                  <span class="degree">Diplôme Universitaire de Technologie</span>
                  <span class="school">IUT NFC Belfort</span>
                </div>
              </div>

              <div class="education-item">
                <span class="year">2023</span>
                <div class="education-details">
                  <span class="degree">Baccalauréat Général</span>
                  <span class="school">Spécialités Maths / Physique</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="image-column">
          <NuxtImg
              src="/images/avatar.jpg"
              alt="Alexandre Villani"
              class="portrait"
              sizes="sm:100vw md:50vw lg:400px"
          />
        </div>

        <div class="contact-column relative">
          <div class="contact-info">
            <h3 class="contact-title">CONTACT</h3>
            <ul class="contact-list">
              <li><a href="mailto:alexandre.villani@edu.univ-fcomte.fr">email</a></li>
              <li><a href="https://www.linkedin.com/in/alexandre-villani-ab0889326/">linkedin</a></li>
              <li><a href="/cv.pdf">resumé</a></li>
            </ul>
          </div>

          <div class="flower-icon">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 90 C 50 90 55 60 50 50" stroke="#FF6B35" stroke-width="2" stroke-linecap="round"/>
              <path d="M50 50 C 30 40 20 60 35 70 C 45 75 50 50 50 50 Z" stroke="#FF6B35" stroke-width="2" stroke-linejoin="round"/>
              <path d="M50 50 C 70 40 80 60 65 70 C 55 75 50 50 50 50 Z" stroke="#FF6B35" stroke-width="2" stroke-linejoin="round"/>
              <path d="M50 50 C 40 30 20 30 25 45 C 30 55 50 50 50 50 Z" stroke="#FF6B35" stroke-width="2" stroke-linejoin="round"/>
              <path d="M50 50 C 60 30 80 30 75 45 C 70 55 50 50 50 50 Z" stroke="#FF6B35" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Données séparées pour une meilleure organisation
const devSkills = [
  'HTML / CSS', 'JavaScript', 'PHP', 'Java', 'Python',
  'SQL', 'Node.js', 'Vue.js', 'Angular', 'Swift'
]

const toolSkills = [
  'VS Code', 'IntelliJ', 'Postman', 'Git / GitHub', 'GitLab',
  'Jupyter Notebook', 'Docker', 'Trello'
]

const dbSkills = [
  'MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB'
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

.page-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* --- HEADER --- */
.header-section {
  background-color: #784421;
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-left: 2vw;
  position: relative;
}

.big-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  font-size: 18vw;
  line-height: 0.75;
  color: #D4E5FF;
  margin: 0;
  transform: translateY(40%);
}

/* --- CONTENU --- */
.content-section {
  background-color: #FEFBF3;
  flex-grow: 1;
  padding: 10vw 2rem 4rem 2rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .grid-layout {
    grid-template-columns: 5fr 4fr 2fr;
    gap: 4rem;
    padding-top: 2rem;
  }
}

/* --- TEXTE --- */
.text-column {
  color: #382E28;
}

.bio-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: justify;
}

@media (min-width: 768px) {
  .bio-text { font-size: 1.5rem; }
}

/* --- STYLES DES COMPÉTENCES (Catégories) --- */
.category-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.9rem; /* Un peu plus petit que le titre de section principal */
  font-weight: 700;
  color: #784421;
  margin-bottom: 0.8rem;
  opacity: 0.9;
}

.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-list li {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #784421;
  border: 1px solid #784421;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  transition: all 0.3s ease;
  cursor: default;
  background-color: rgba(120, 68, 33, 0.05); /* Fond très léger */
}

.tech-list li:hover {
  background-color: #784421;
  color: #FEFBF3;
  transform: translateY(-2px);
}

/* --- FORMATION --- */
.education-section {
  margin-top: 3.5rem; /* Un peu d'espace avant la formation */
}

.section-subtitle {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #784421;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  border-bottom: 2px solid rgba(120, 68, 33, 0.2);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
}

.year {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #784421;
  min-width: 3.5rem;
}

.education-details {
  display: flex;
  flex-direction: column;
}

.degree {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #382E28;
  line-height: 1.2;
}

.school {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size: 1rem;
  color: #382E28;
  opacity: 0.8;
  margin-top: 0.2rem;
}

/* --- PHOTO --- */
.image-column {
  display: flex;
  justify-content: center;
  align-items: start;
}

.portrait {
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 3/4;
  object-fit: cover;
}

/* --- CONTACT --- */
.contact-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}

.contact-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #784421;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  margin-bottom: 0.5rem;
}

.contact-list a {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1rem;
  color: #382E28;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  transition: opacity 0.3s;
}

.contact-list a:hover {
  opacity: 0.6;
}

/* --- FLEUR --- */
.flower-icon {
  align-self: flex-end;
  margin-top: auto;
  padding-top: 2rem;
  transform: rotate(-10deg);
}
</style>