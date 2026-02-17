<template>
  <div class="page-container font-sans">

    <header class="header-section relative z-20">
      <h1 class="big-title">À propos</h1>
    </header>

    <main class="content-section relative z-10">

      <div class="grid-layout">

        <div class="text-column">
          <p class="bio-text">
            <span class="font-bold">Alexandre VILLANI</span>, étudiant en troisième année de <span class="font-bold">Bachelor Universitaire de Technologie Informatique</span> à Belfort, vous souhaite la bienvenue. Ce portfolio est le fruit de mes trois années de formation et de l'acquisition de compétences dans le domaine de l'informatique.
          </p>
          <p class="bio-text mt-8">
            Mes centres d'intérêt sont la photographie et l'informatique. C'est pourquoi vous trouverez ici des réalisations variées : projets académiques, expériences professionnelles (stage) et mes initiatives personnelles.
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

          <div class="skills-group mt-10 w-full max-w-[400px]">
            <h3 class="category-title text-center">Soft Skills</h3>
            <ul class="tech-list justify-center">
              <li v-for="item in softSkills" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="contact-column relative">
          
          <div
              @click="isLightboxOpen = true"
              class="polaroid-wrapper group"
          >
            <div class="tape"></div>

            <div class="polaroid-card">
              <NuxtImg
                  src="/images/background/stripproject.jpg"
                  alt="stripproject"
                  class="polaroid-img"
              />
              <p class="polaroid-caption">Cliquez pour agrandir</p>
            </div>
          </div>

          <div class="contact-info">
            <h3 class="contact-title">CONTACT</h3>
            <ul class="contact-list">
              <li><a href="mailto:alexandre.villani@edu.univ-fcomte.fr">email</a></li>
              <li><a href="https://www.linkedin.com/in/alexandre-villani-ab0889326/">linkedin</a></li>
              <li><a href="/documents/CV_Alexandre_VILLANI.pdf">resumé</a></li>
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

    <Teleport to="body">
      <Transition name="fade">
        <div
            v-if="isLightboxOpen"
            class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#784421]/90 backdrop-blur-sm p-4"
            @click.self="isLightboxOpen = false"
        >
          <div class="relative max-w-5xl w-full flex flex-col items-center">
            <button
                @click="isLightboxOpen = false"
                class="absolute -top-12 right-0 md:-right-8 text-[#FEFBF3] hover:text-white hover:scale-110 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
            <div class="bg-[#FEFBF3] p-2 md:p-4 rounded shadow-2xl">
              <NuxtImg
                  src="/images/background/stripproject.jpg"
                  alt="stripproject"
                  class="max-h-[70vh] w-auto object-contain rounded-sm"
              />
            </div>
            <div class="mt-6 text-center">
              <h4 class="text-2xl md:text-3xl text-[#FEFBF3] font-bricolage font-bold uppercase tracking-widest">
                Planche de surf - Strip Project
              </h4>
              <p class="text-[#FEFBF3]/80 font-serif italic text-lg mt-2">
                « Le surf n’est pas un sport, c’est un style de vie. » Kelly Slater <br>
                <span class="text-sm opacity-60 not-italic font-sans">Photographie personnelle</span>
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isLightboxOpen = ref(false);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isLightboxOpen.value = false;
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

// --- DATA ---
const devSkills = [ 'HTML / CSS', 'JavaScript', 'PHP', 'Java', 'Python', 'SQL', 'Node.js', 'Vue.js', 'Angular', 'Swift', 'Flutter' ]
const toolSkills = [ 'VS Code', 'IntelliJ', 'Postman', 'Git / GitHub', 'GitLab', 'Jupyter Notebook', 'Docker', 'Trello', 'Oracle Virtualbox' ]
const dbSkills = [ 'MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB' ]
const softSkills = [ 'Curiosité', 'Travail d\'équipe', 'Adaptabilité','Patience','Écoute','Ésprit d\'équipe' ]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

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

/* --- SKILLS & FORMATION --- */
.category-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.9rem;
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
  background-color: rgba(120, 68, 33, 0.05);
}

.tech-list li:hover {
  background-color: #784421;
  color: #FEFBF3;
  transform: translateY(-2px);
}

.education-section { margin-top: 3.5rem; }
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
.education-list { display: flex; flex-direction: column; gap: 1.5rem; }
.education-item { display: flex; align-items: baseline; gap: 1.5rem; }
.year {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #784421;
  min-width: 3.5rem;
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

/* --- COLONNE CENTRALE (Portrait + Soft Skills) --- */
.image-column {
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: flex-start;
}

.portrait {
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 3/4;
  object-fit: cover;
}

/* --- COLONNE DROITE (Contact + Polaroid + Fleur) --- */
.contact-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}

/* Style du Polaroid ajusté pour la colonne de droite */
.polaroid-wrapper {
  position: relative;
  width: 100%;
  max-width: 250px; /* Limite la taille pour la colonne de droite */
  margin: 0 auto 3rem auto; /* Centre et marge en bas */
  transform: rotate(3deg);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.polaroid-wrapper:hover {
  transform: rotate(0deg) scale(1.05);
}

.tape {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 80px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  z-index: 20;
}

.polaroid-card {
  background-color: #FEFBF3;
  border: 8px solid #FEFBF3;
  padding: 10px 10px 35px 10px;
  box-shadow: 0 4px 15px rgba(120, 68, 33, 0.2);
  transition: box-shadow 0.3s ease;
}

.polaroid-wrapper:hover .polaroid-card {
  box-shadow: 0 8px 25px rgba(120, 68, 33, 0.3);
}

.polaroid-img {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  filter: sepia(0.3);
  transition: filter 0.3s ease;
}

.polaroid-wrapper:hover .polaroid-img {
  filter: sepia(0);
}

.polaroid-caption {
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size: 0.9rem;
  color: #784421;
  text-align: center;
  margin-top: 10px;
  margin-bottom: -25px;
}

/* Contact Styles */
.contact-title {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #784421;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.contact-list { list-style: none; padding: 0; margin: 0; }
.contact-list li { margin-bottom: 0.5rem; }
.contact-list a {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1rem;
  color: #382E28;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  transition: opacity 0.3s;
}
.contact-list a:hover { opacity: 0.6; }

/* Fleur */
.flower-icon {
  align-self: flex-end;
  margin-top: auto;
  padding-top: 2rem;
  transform: rotate(-10deg);
}

/* Lightbox Animations */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>