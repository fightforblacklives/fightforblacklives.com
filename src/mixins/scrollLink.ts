export default (el) => {
  const handleClick = (e) => {
    e.preventDefault();

    const [pathName, selector] = e.target.href.split("#");

    if (pathName !== window.location.pathname) {
      window.location.href = pathName + "#" + selector;
      return;
    }

    const el = document.querySelector("#" + selector);
    const bodyRect = window.document.body.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const scrollPosition = elRect.y - bodyRect.y;

    window.scroll({ top: scrollPosition - 150, behavior: "smooth" });
  };

  el.addEventListener("click", handleClick);

  return {
    destroy() {
      el.removeEventListener("click", handleClick);
    },
  };
};
