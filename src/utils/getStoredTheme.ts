async function getStoredTheme() {
    if (typeof localStorage !== 'undefined') {
        const storedTheme = localStorage.getItem("theme");

        // Handle undefined case with a default theme
        if (storedTheme === null) {
            // Set your custom theme as the default
            const customTheme = await import('../evaclue.css');
            document.body.setAttribute("data-theme", "evaclue"); // Set the data-theme attribute to your custom theme name
            return 'evaclue'; // Return your custom theme name
        }

        // Handle different themes here, including your custom theme
        if (storedTheme === "evaclue") { // Evaclue custom theme
            const customTheme = await import('../evaclue.css');
            document.body.setAttribute("data-theme", "evaclue");
        } else if (storedTheme === "skeleton") {
            const module1 = await import("@skeletonlabs/skeleton/themes/theme-skeleton.css");
            document.body.setAttribute("data-theme", "skeleton");
        } else if (storedTheme === "sahara") {
            const module1 = await import("@skeletonlabs/skeleton/themes/theme-sahara.css");
            document.body.setAttribute("data-theme", "sahara");
        } else if (storedTheme === "modern") {
            const module1 = await import("@skeletonlabs/skeleton/themes/theme-modern.css");
            document.body.setAttribute("data-theme", "modern");
        } else if (storedTheme === "rocket") {
            const module1 = await import("@skeletonlabs/skeleton/themes/theme-rocket.css");
            document.body.setAttribute("data-theme", "rocket");
        } else if (storedTheme === "seafoam") {
            const module1 = await import('@skeletonlabs/skeleton/themes/theme-seafoam.css');
            document.body.setAttribute("data-theme", "seafoam");
        } else if (storedTheme === "vintage") {
            const module1 = await import('@skeletonlabs/skeleton/themes/theme-vintage.css');
            document.body.setAttribute("data-theme", "vintage");
        } else if (storedTheme === "hamlindigo") {
            const module1 = await import('@skeletonlabs/skeleton/themes/theme-hamlindigo.css');
            document.body.setAttribute("data-theme", "hamlindigo");
        } else if (storedTheme === "crimson") {
            const module1 = await import('@skeletonlabs/skeleton/themes/theme-crimson.css');
            document.body.setAttribute("data-theme", "crimson");
        } else if (storedTheme === "gold-nouveau") {
            const module1 = await import('@skeletonlabs/skeleton/themes/theme-gold-nouveau.css');
            document.body.setAttribute("data-theme", "gold-nouveau");
        } else {
            return storedTheme; // Return the stored theme if it's not matched above
        }

        return storedTheme;
    } else {
        // Handle localStorage not available (same as before)
        return 'evaclue';
    }
}

export default getStoredTheme;