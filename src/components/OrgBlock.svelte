<script>
  import { staticPath } from "config/static";

  let slides = [
    {
      imgSrc: "color_of_change_logo.png",
      imgAlt: "Color of Change Logo",
      p1:
        "Color Of Change is the nation’s largest online racial justice organization.",
      p2:
        "They help people respond effectively to injustice in the world around us. As a national online force driven by 1.7 million members, they move decision-makers in corporations and government to create a more human and less hostile world for Black people in America."
    },
    {
      imgSrc: "ACLU_logo.png",
      imgAlt: "ACLU",
      p1:
        "Color Of Change is the nation’s largest online racial justice organization.",
      p2:
        "They help people respond effectively to injustice in the world around us. As a national online force driven by 1.7 million members, they move decision-makers in corporations and government to create a more human and less hostile world for Black people in America."
    }
  ].map((x, i) => Object.assign({}, x, { id: i }));
  let currentSlideId = 0;
  async function changeSlide() {
    setInterval(() => {
      if (currentSlideId === slides.length - 1) {
        currentSlideId = 0;
      } else {
        currentSlideId = currentSlideId + 1;
      }
    }, 3000);
  }

  changeSlide();
  $: currentSlide = slides.find(x => x.id === currentSlideId);
</script>

<div
  style="flex: 0 0 500px; border-radius: 16px;"
  class="flex flex-col items-center border-2 border-c-border-3 lg:ml-16
  justify-center p-12 text-lg mt-16 lg:mt-0 jason-round">
  <img
    alt={currentSlide.imgAlt}
    class="w-48"
    src="{staticPath}/{currentSlide.imgSrc}" />

  <p class="self-stretch text-center my-8 mx-auto">{currentSlide.p1}</p>

  <p class="self-stretch text-center mx-auto">{currentSlide.p2}</p>
</div>
