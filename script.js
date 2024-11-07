const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const randomBtn = document.querySelector(".random");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  // generating a random color in hexadecimal format
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    // generating a random color
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  // creating a gradient string using the select menu value with color input values
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
};

const copyCode = () => {
  // copying textarea value and updating the copy btn text
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied ✅";
  setTimeout(() => (copyBtn.innerText = "Copy Code"), 1600);
};

colorInputs.forEach((input) => {
  // calling generateGradient func on each color input clicks
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
randomBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);

// for smooth scroll

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
