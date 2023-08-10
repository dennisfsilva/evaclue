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
    import getStoredTheme from "../utils/getStoredTheme";
    import theme from "../store/store";
  
    // Get Stored Theme From Local Storage
    onMount(() => {
      getStoredTheme();
    });
    // onDOMLoaded
  
    async function storeTheme() {
      // Get Stored Theme From Local Storage Wait For Promise
      await getStoredTheme().then((storedTheme) => {
        // Set Theme to Stored Theme
        theme.set(storedTheme);
      });
    }
    storeTheme();

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">

		<!-- App Bar -->
		<!-- <AppBar> -->
			<NavBar />
		<!-- </AppBar> -->
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
