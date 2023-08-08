function changeTheme(theme: string) {
    const validThemes = [
        'evaclue', 'skeleton', 'sahara', 'modern', 
        'rocket', 'seafoam', 'vintage', 'hamlindigo', 
        'crimson', 'gold-nouveau'
    ];

    if (validThemes.includes(theme)) {
        localStorage.setItem('theme', theme);
        document.body.setAttribute('data-theme', theme);
        window.location.reload();
        console.log(theme);
    } else {
        console.log('Invalid theme:', theme);
    }
}

export default changeTheme;
