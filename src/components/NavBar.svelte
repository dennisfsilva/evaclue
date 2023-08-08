<script>
  let navLinks = [
    { text: 'Home', url: '/' },
    { text: 'Sobre Nós', url: '/about' },
    { text: 'Contacto', url: '/contact' },
  ];

  let currentPage = '/'; // Set the current page dynamically here
</script>

<nav class="hidden md:flex md:flex-row gap-2 p-1">
  {#each navLinks as link (link.url)}
    <a
      href={link.url}
      class="btn hover:border-b {currentPage === link.url ? 'active-nav' : ''}"
    >
      {link.text}
    </a>
  {/each}
</nav>

<style>
  .active-nav {
    border: 1px solid #ffffff; 
  }
</style>