export default (el) => {
  const handleClick = (e) => {
    e.preventDefault();

    const selector = e.target.href.split("#")[1];

    const el = document.querySelector("#" + selector);
    const bodyRect = window.document.body.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const scrollPosition = elRect.y - bodyRect.y;

    window.scroll({ top: scrollPosition - 100, behavior: "smooth" });
  };

  el.addEventListener("click", handleClick);

  return {
    destroy() {
      el.removeEventListener("click", handleClick);
    },
  };
};
