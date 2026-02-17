<template>
  <form @submit.prevent="submitForm"
        class="flex flex-col gap-6 max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#4A235A] text-[#F3EFE0] shadow-2xl border-l-8 border-[#F3EFE0] font-bricolage relative overflow-hidden">

    <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#F3EFE0] opacity-5 rounded-full blur-3xl pointer-events-none"></div>

    <h3 class="text-3xl font-bold uppercase tracking-tight text-[#F3EFE0] mb-2">Me contacter</h3>

    <div class="flex flex-col sm:flex-row w-full gap-5">
      <div class="flex-1 group">
        <label for="surname" class="block text-xs font-bold uppercase tracking-widest mb-2 opacity-80 group-focus-within:opacity-100 transition-opacity">
          Prénom <span class="text-[#FF6B35]">*</span>
        </label>
        <input
            id="surname"
            type="text"
            v-model.trim="surname"
            @blur="touchedFields.surname = true"
            @input="clearFieldError('surname')"
            placeholder="Votre prénom"
            class="custom-input"
            :class="{'!border-[#FF6B35] !bg-[#FF6B35]/10 !text-[#FF6B35] placeholder:text-[#FF6B35]/50': touchedFields.surname && errors.surname}"
        >
        <Transition name="error">
          <span v-if="touchedFields.surname && errors.surname" class="text-[#FF6B35] text-xs mt-1 font-medium flex items-center gap-1">
            <span class="text-sm">⚠</span> {{ errors.surname }}
          </span>
        </Transition>
      </div>
      <div class="flex-1 group">
        <label for="name" class="block text-xs font-bold uppercase tracking-widest mb-2 opacity-80 group-focus-within:opacity-100 transition-opacity">
          Nom <span class="text-[#FF6B35]">*</span>
        </label>
        <input
            id="name"
            type="text"
            v-model.trim="name"
            @blur="touchedFields.name = true"
            @input="clearFieldError('name')"
            placeholder="Votre nom"
            class="custom-input"
            :class="{'!border-[#FF6B35] !bg-[#FF6B35]/10 !text-[#FF6B35] placeholder:text-[#FF6B35]/50': touchedFields.name && errors.name}"
        >
        <Transition name="error">
          <span v-if="touchedFields.name && errors.name" class="text-[#FF6B35] text-xs mt-1 font-medium flex items-center gap-1">
             <span class="text-sm">⚠</span> {{ errors.name }}
          </span>
        </Transition>
      </div>
    </div>

    <div class="group">
      <label for="email" class="block text-xs font-bold uppercase tracking-widest mb-2 opacity-80 group-focus-within:opacity-100 transition-opacity">
        Email <span class="text-[#FF6B35]">*</span>
      </label>
      <input
          id="email"
          type="email"
          v-model.trim="email"
          @blur="touchedFields.email = true"
          @input="clearFieldError('email')"
          placeholder="votre.email@exemple.com"
          class="custom-input"
          :class="{'!border-[#FF6B35] !bg-[#FF6B35]/10 !text-[#FF6B35] placeholder:text-[#FF6B35]/50': touchedFields.email && errors.email}"
      >
      <Transition name="error">
        <span v-if="touchedFields.email && errors.email" class="text-[#FF6B35] text-xs mt-1 font-medium flex items-center gap-1">
           <span class="text-sm">⚠</span> {{ errors.email }}
        </span>
      </Transition>
    </div>

    <div class="group">
      <label for="object" class="block text-xs font-bold uppercase tracking-widest mb-2 opacity-80 group-focus-within:opacity-100 transition-opacity">
        Objet <span class="text-[#FF6B35]">*</span>
      </label>
      <input
          id="object"
          type="text"
          v-model.trim="object"
          @blur="touchedFields.object = true"
          @input="clearFieldError('object')"
          placeholder="Sujet du message"
          class="custom-input"
          :class="{'!border-[#FF6B35] !bg-[#FF6B35]/10 !text-[#FF6B35] placeholder:text-[#FF6B35]/50': touchedFields.object && errors.object}"
      >
      <Transition name="error">
        <span v-if="touchedFields.object && errors.object" class="text-[#FF6B35] text-xs mt-1 font-medium flex items-center gap-1">
           <span class="text-sm">⚠</span> {{ errors.object }}
        </span>
      </Transition>
    </div>

    <div class="group">
      <label for="message" class="block text-xs font-bold uppercase tracking-widest mb-2 opacity-80 group-focus-within:opacity-100 transition-opacity">
        Message <span class="text-[#FF6B35]">*</span>
      </label>
      <textarea
          id="message"
          v-model.trim="message"
          @blur="touchedFields.message = true"
          @input="clearFieldError('message')"
          placeholder="Bonjour Alexandre, j'ai vu ton portfolio et..."
          rows="5"
          class="custom-input py-3 min-h-[120px] resize-y"
          :class="{'!border-[#FF6B35] !bg-[#FF6B35]/10 !text-[#FF6B35] placeholder:text-[#FF6B35]/50': touchedFields.message && errors.message}"
      ></textarea>
      <Transition name="error">
        <span v-if="touchedFields.message && errors.message" class="text-[#FF6B35] text-xs mt-1 font-medium flex items-center gap-1">
           <span class="text-sm">⚠</span> {{ errors.message }}
        </span>
      </Transition>
    </div>

    <div class="flex flex-col gap-3 text-sm mt-2">
      <label for="consent" class="flex flex-row items-start gap-3 cursor-pointer group">
        <div class="relative flex-shrink-0 mt-0.5">
          <input
              id="consent"
              class="peer sr-only"
              type="checkbox"
              v-model="acceptDataTreatment"
              @change="touchedFields.consent = true; clearFieldError('consent')"
          >
          <div
              class="w-5 h-5 rounded border transition-all duration-200 flex items-center justify-center"
              :class="touchedFields.consent && errors.consent ? 'border-[#FF6B35] bg-[#FF6B35]/10' : 'border-[#F3EFE0] bg-[#F3EFE0] hover:scale-110'"
          >
            <svg
                class="w-3.5 h-3.5 text-[#4A235A] opacity-0 peer-checked:opacity-100 transition-opacity duration-200 font-bold"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <span class="text-justify text-[#F3EFE0]/80 group-hover:text-[#F3EFE0] transition-colors text-xs font-light leading-relaxed">
          En soumettant ce formulaire, j'accepte que mes données soient utilisées pour me recontacter.
        </span>
      </label>
      <Transition name="error">
        <span v-if="touchedFields.consent && errors.consent" class="text-[#FF6B35] text-xs pl-8">
          {{ errors.consent }}
        </span>
      </Transition>
    </div>

    <Transition name="fade">
      <div v-if="submitStatus === 'success'"
           class="bg-[#F3EFE0] text-[#4A235A] px-4 py-3 rounded-xl flex flex-row items-center gap-3 border border-[#F3EFE0] shadow-lg">
        <div class="bg-green-500 rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="fill-white">
            <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
          </svg>
        </div>
        <p class="text-sm font-bold">Message envoyé avec succès !</p>
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="submitStatus === 'error'"
           class="bg-[#FF6B35]/20 border border-[#FF6B35] text-[#F3EFE0] px-4 py-3 rounded-xl flex flex-row items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             class="fill-[#FF6B35] flex-shrink-0">
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        </svg>
        <p class="text-sm">Une erreur est survenue. Veuillez réessayer.</p>
      </div>
    </Transition>

    <Button
        type="submit"
        :disabled="isSubmitting || !isFormValid"
        class="group flex flex-row gap-2 items-center justify-center w-full !rounded-full !px-8 !py-4 transition-all duration-300 mt-4 border-2"
        :class="{
          'opacity-50 cursor-not-allowed bg-[#F3EFE0]/50': isSubmitting,
          'opacity-50 cursor-not-allowed border-[#F3EFE0]/30 text-[#F3EFE0]/50': !isFormValid && !isSubmitting,
          'bg-[#F3EFE0] border-[#F3EFE0] text-[#4A235A] hover:bg-transparent hover:text-[#F3EFE0] cursor-pointer shadow-[0_0_20px_rgba(243,239,224,0.3)] hover:shadow-none': isFormValid && !isSubmitting
        }"
    >
      <span v-if="isSubmitting" class="animate-spin h-5 w-5 border-2 border-[#4A235A] border-t-transparent rounded-full mr-2"></span>

      <span class="text-lg font-bold uppercase tracking-wider">
          {{ isSubmitting ? 'Envoi...' : 'Envoyer le message' }}
      </span>

      <svg v-if="!isSubmitting" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </Button>

  </form>
</template>

<script setup lang="ts">
import Button from "~/components/elements/Button.vue";

const URL = "https://formspree.io/f/xzzngzkd";

// Form data
const name = ref("");
const surname = ref("");
const email = ref("");
const object = ref("");
const message = ref("");
const acceptDataTreatment = ref(false);

// Form state
const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');
const errors = ref<Record<string, string>>({});
const touchedFields = ref<Record<string, boolean>>({
  surname: false,
  name: false,
  email: false,
  object: false,
  message: false,
  consent: false
});

/**
 * Validation rules
 */
const validationRules = {
  surname: (value: string) => {
    if (!value) return "Requis";
    if (value.length < 2) return "Trop court";
    return "";
  },
  name: (value: string) => {
    if (!value) return "Requis";
    if (value.length < 2) return "Trop court";
    return "";
  },
  email: (value: string) => {
    if (!value) return "Requis";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Invalide";
    return "";
  },
  object: (value: string) => {
    if (!value) return "Requis";
    if (value.length < 3) return "Trop court";
    return "";
  },
  message: (value: string) => {
    if (!value) return "Requis";
    if (value.length < 10) return "Minimum 10 caractères";
    return "";
  },
  consent: (value: boolean) => {
    if (!value) return "Requis";
    return "";
  }
};

/**
 * Validate a single field
 */
function validateField(fieldName: string) {
  const value = fieldName === 'consent' ? acceptDataTreatment.value :
      fieldName === 'surname' ? surname.value :
          fieldName === 'name' ? name.value :
              fieldName === 'email' ? email.value :
                  fieldName === 'object' ? object.value :
                      message.value;

  const rule = validationRules[fieldName as keyof typeof validationRules];
  const error = rule(value as never);

  if (error) {
    errors.value[fieldName] = error;
  } else {
    delete errors.value[fieldName];
  }
}

/**
 * Clear error for a specific field
 */
function clearFieldError(fieldName: string) {
  delete errors.value[fieldName];
}

/**
 * Validate all fields
 */
function validateAllFields(): boolean {
  errors.value = {};

  Object.keys(validationRules).forEach(field => {
    validateField(field);
  });

  return Object.keys(errors.value).length === 0;
}

/**
 * Computed property to check if the form is valid
 */
const isFormValid = computed(() => {
  return surname.value.trim() !== "" &&
      name.value.trim() !== "" &&
      email.value.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
      object.value.trim() !== "" &&
      message.value.trim() !== "" &&
      acceptDataTreatment.value === true;
});

/**
 * Watch for field changes and validate on blur
 */
watch([surname, name, email, object, message, acceptDataTreatment], () => {
  // Clear success/error status when the user modifies the form
  if (submitStatus.value !== 'idle') {
    submitStatus.value = 'idle';
  }

  // Validate touched fields
  Object.keys(touchedFields.value).forEach(field => {
    if (touchedFields.value[field]) {
      validateField(field);
    }
  });
});

/**
 * Submit the form data to the server
 */
async function submitForm() {
  // Mark all fields as touched
  Object.keys(touchedFields.value).forEach(field => {
    touchedFields.value[field] = true;
  });

  // Validate all fields
  if (!validateAllFields()) {
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = 'idle';

  try {
    await $fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        name: name.value,
        surname: surname.value,
        email: email.value,
        object: object.value,
        message: message.value
      }
    });

    submitStatus.value = 'success';

    setTimeout(() => {
      name.value = "";
      surname.value = "";
      email.value = "";
      object.value = "";
      message.value = "";
      acceptDataTreatment.value = false;

      Object.keys(touchedFields.value).forEach(field => {
        touchedFields.value[field] = false;
      });

      errors.value = {};
    }, 2000);

  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
/* Import de la police si elle n'est pas globale */
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

/* Style des Inputs */
.custom-input {
  width: 100%;
  border-radius: 0.75rem; /* rounded-xl */
  padding: 0 1rem;
  height: 3rem;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;

  /* COULEURS */
  background-color: #F3EFE0;
  color: #4A235A;
  border: 2px solid transparent;

  /* Placeholder couleur violet clair */
  &::placeholder {
    color: rgba(74, 35, 90, 0.5);
  }

  /* Transition fluide */
  transition: all 0.2s ease-in-out;
}

.custom-input:focus {
  outline: none;
  /* Bordure violette au focus ou ombre */
  border-color: #F3EFE0;
  box-shadow: 0 0 0 4px rgba(243, 239, 224, 0.2);
  transform: translateY(-2px);
}

/* Animations pour les erreurs */
.error-enter-active,
.error-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Animations pour les messages de statut */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>