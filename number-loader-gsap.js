gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const container = document.querySelector(".number-loader");
  const lines = gsap.utils.toArray(".line");

  if (!overlay || !container || !lines.length) return;

  // Show loader
  gsap.set(container, { visibility: "visible" });

  // Split characters
  const splits = lines.map(line =>
    new SplitText(line, { type: "chars", charsClass: "char" })
  );

  // 3D setup
  const depth = -window.innerWidth / 8;
  const origin = `50% 50% ${depth}`;

  gsap.set(lines, {
    perspective: 800,
    transformStyle: "preserve-3d"
  });

  const tl = gsap.timeline({
    onComplete: finishLoader
  });

  splits.forEach((split, i) => {
    tl.fromTo(
      split.chars,
      { rotationX: -90 },
      {
        rotationX: 90,
        stagger: 0.08,
        duration: 0.9,
        ease: "none",
        transformOrigin: origin
      },
      i * 0.45
    );
  });

  function finishLoader() {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        overlay.style.display = "none";
        window.startVideoAnimation?.();
      }
    });
  }
});
