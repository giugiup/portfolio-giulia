// Home e relacionados reutilizam a mesma PageTransition do Layout.
document.querySelectorAll<HTMLAnchorElement>('a[data-project-transition]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.target === '_blank' || link.hasAttribute('download')) return;
    if (!document.querySelector('[data-page-transition]')) return;
    event.preventDefault();
    document.dispatchEvent(new CustomEvent('project-transition:start', {
      detail: { slug: link.dataset.projectTransition, url: link.href },
    }));
  });
});
