<script>
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import ChangeThemeButton from "./ChangeThemeButton.svelte";

</script>


<div class="pt-4 px-4"></div>
<div class="flex justify-between items-center max-w-content mx-auto px-4 max-w-screen-xl">
  <a href="/" class="logo flex justify-between items-center space-x-4">
    <img src="/svg/logo.svg" alt="Logo" class="h-6">
    <h1 class="whitespace-nowrap text-lg sm:text-2xl font-bold uppercase">Evaclue</h1>
  </a>
  <nav class="flex justify-between items-center space-x-8">
    <div class="hidden md:flex justify-between items-center space-x-8">
      <a href="/" class="font-bold py-2 transition-all hover:text-primary-500">Inicio</a>
      <a href="/about" class="font-bold py-2 transition-all hover:text-primary-500 text-surface-400">Sobre Nós</a>
      <a href="/contact" class="font-bold py-2 transition-all hover:text-primary-500 text-surface-400">Contacto</a>
    </div>
    <ChangeThemeButton />
    <LightSwitch />
    <a href="" class="btn variant-filled-primary">
      <span>Sign In</span>
    </a>
  </nav>
</div>
