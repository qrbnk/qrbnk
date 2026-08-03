document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.auto-skill-tags');

  containers.forEach(container => {
    const rawSkills = container.getAttribute('data-skills');
    if (!rawSkills) return;

    const skills = rawSkills.split(',').map(s => s.trim());
    
    // Generate the clickable hashtag markup automatically
    const html = skills.map(skill => {
      const cleanTag = skill.replace(/\s+/g, ''); // Remove spaces for tag URL
      return `<a href="portfolio_page.html?tag=${encodeURIComponent(cleanTag)}" 
                 class="chip font-label-sm text-label-sm border border-black/20 px-2 py-1 hover:bg-black hover:text-white transition-colors">
                #${skill}
              </a>`;
    }).join(' ');

    container.className = "flex flex-wrap gap-2 my-4";
    container.innerHTML = html;
  });
});