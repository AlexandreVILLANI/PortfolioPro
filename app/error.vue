<template>
  <error404 v-if="error.statusCode === 404" :error="props.error"/>
  <error500 v-else :error="error"></error500>
</template>

<script setup lang="ts">
import type {NuxtError} from '#app'
import Error404 from "~/components/error404.vue";

// Récupérer la prop 'error' qui contient les détails de l'erreur
const props = defineProps<{
  error: NuxtError
}>()

// Calculer dynamiquement le titre et le message en fonction du code de statut
const errorTitle = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return '404 - Page non trouvée'
    case 500:
      return '500 - Erreur interne du serveur'
    default:
      return `Erreur ${props.error.statusCode || 'inconnue'}`
  }
})

const errorMessage = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return "Désolé, la page que vous cherchez n'existe pas."
    case 500:
      return 'Oups, une erreur est survenue sur le serveur. Veuillez réessayer plus tard.'
    default:
      return props.error.statusMessage || 'Une erreur est survenue.'
  }
})

// Fonction pour effacer l'erreur et rediriger vers la page d'accueil
const handleClearError = () => {
  // La fonction clearError() est une utilitaire Nuxt pour gérer les erreurs full-screen
  clearError({redirect: '/'})
}
</script>

<style scoped>
/* Vous pouvez ajouter votre propre style ici pour personnaliser l'apparence */
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  color: #333;
}

.error-content {
  max-width: 600px;
}

h1 {
  font-size: 3em;
  color: #e53e3e;
  margin-bottom: 0.5em;
}

button {
  background-color: #42b883; /* Couleur de Nuxt/Vue */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5em;
  font-size: 1em;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #34996a;
}
</style>