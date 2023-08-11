<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import ChangeThemeButton from "./ChangeThemeButton.svelte";

  let isNavOpen = false;

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }
</script>

<div class="pt-4 px-4">
  <div class="app-bar-row-main grid items-center grid-cols-[auto_1fr_auto] gap-4 max-w-screen-xl mx-auto px-4">
    <div class="flex items-center justify-between w-full">
      <a href="/" class="logo flex items-center space-x-4">
        <img src="/svg/logo.svg" alt="Logo" class="h-6">
        <h1 class="whitespace-nowrap text-lg sm:text-2xl font-bold uppercase">Evaclue</h1>
      </a>
    </div>

    <!-- Main Navigation Links -->
    <div class="hidden md:flex justify-between items-center space-x-8 w-full">
      <nav class="flex justify-between items-center space-x-8">
        <a href="/" class="font-bold py-2 transition-all hover:text-primary-500">Inicio</a>
        <a href="/about" class="font-bold py-2 transition-all hover:text-primary-500 text-surface-400">Sobre Nós</a>
        <a href="/contact" class="font-bold py-2 transition-all hover:text-primary-500 text-surface-400">Contacto</a>
        <a href="/faq" class="font-bold py-2 transition-all hover:text-primary-500 text-surface-400">FAQ</a>
      </nav>

      <nav class="hidden md:flex space-x-2 items-center">
        <LightSwitch />
        <ChangeThemeButton />
        <a href="/register" class="btn variant-filled">
          <span>Registar</span>
        </a>
        <a href="/signin" class="btn variant-filled-primary">
          <span>Login</span>
        </a>
      </nav>
    </div>

    <!-- Mobile menu button in the top right corner -->
    <div class="md:hidden flex items-center justify-end w-full">
      <button class="text-primary-500 hover:text-primary-600" on:click={toggleNav}>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile navigation links -->
  <nav class={isNavOpen ? "md:hidden block mt-4" : "md:hidden hidden"} >
    <a href="/" class="font-bold block py-2 transition-all hover:text-primary-500">Inicio</a>
    <a href="/about" class="font-bold block py-2 transition-all hover:text-primary-500 text-surface-400">Sobre Nós</a>
    <a href="/contact" class="font-bold block py-2 transition-all hover:text-primary-500 text-surface-400">Contacto</a>
    <a href="/faq" class="font-bold block py-2 transition-all hover:text-primary-500 text-surface-400">FAQ</a>
  </nav>
</div>
