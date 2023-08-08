<script lang="ts">
	import '../app.postcss';
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import 'iconify-icon';
	import NavBar from '../components/NavBar.svelte';
	import { onMount } from "svelte";
    import ChangeThemeButton from "../components/ChangeThemeButton.svelte";
    import getStoredTheme from "../utils/getStoredTheme";
    import theme from "../store/store";
  
    //get stored theme from local storage
    onMount(() => {
      getStoredTheme();
    });
    //onDOMLoaded
  
    async function storeTheme() {
      //get stored theme from local storage wait for promise
      await getStoredTheme().then((storedTheme) => {
        //set theme to stored theme
        theme.set(storedTheme);
      });
    }
    storeTheme();

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">

		<!-- App Bar -->
		<AppBar class="transparent-app-bar" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<!-- Left Corner -->
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Evaclue</strong>
			</svelte:fragment>
			<!-- Nav Bar -->
			<NavBar />
			<!-- Right Corner -->
			<svelte:fragment slot="trail">
				<ChangeThemeButton />
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
