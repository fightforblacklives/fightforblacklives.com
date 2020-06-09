export default (el) => {
  const scrollEl = document.documentElement || document.body;

  const handleClick = (e) => {
    const aHref = new URL(e.target.href);

    if (aHref.pathname !== window.location.pathname) {
      window.location.href = e.target.href;
      return;
    }

    e.preventDefault();

    const el = document.querySelector(aHref.hash);
    const bodyRect = window.document.body.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const scrollPosition = elRect.top - bodyRect.top;

    scrollEl.scroll({ top: scrollPosition - 150, behavior: "smooth" });
  };

  el.addEventListener("click", handleClick);

  return {
    destroy() {
      el.removeEventListener("click", handleClick);
    },
  };
};
