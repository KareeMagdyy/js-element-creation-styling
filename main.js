let numInput = document.querySelector("[name='elements']");
let textInput = document.querySelector("[name='texts']");
let typeInput = document.querySelector("[name='type']");
let submitBtn = document.querySelector("[name ='create']");
let result = document.querySelector(".results");
let form = document.querySelector("form");

//form Styling
document.body.style.cssText = `padding: 3rem 1rem; font-family: "Roboto", sans-serif;`;
let inputs = document.querySelectorAll("input");
form.style.cssText = `display: flex; flex-direction:column; align-items: center; margin:0 auto; gap: 1rem; width:80%;`;

inputs.forEach(
  (el) =>
    (el.style.cssText = `display:block; height: 2.5rem; width: 45%; margin: 0 auto; padding: 0.1em 1em; color: #000; background-color: lightblue; border-radius: 10px;font-family: "Roboto", sans-serif; font-size:clamp(0.6rem, 3vw, 1rem);`)
);

typeInput.style.cssText = `display:block; height: 2.5rem; width: 35%; margin: 0 auto; padding: 0.1em 1em; color: #000; background-color: lightblue; border-radius: 10px; text-align:center; font-family: "Roboto", sans-serif; font-size: font-size:clamp(0.6rem, 3vw, 1rem);`;

submitBtn.style.cssText = `background-color: #9cef8f;display:block; height: 2.5rem; width: 35%; margin: 0 auto 3rem auto; padding: 0.1em 1em; color: #000;border-radius: 10px; font-family: "Roboto", sans-serif; font-size:font-size:clamp(0.6rem, 3vw, 1rem);`;

// Remove Default Submit behavior
form.onsubmit = function (s) {
  s.preventDefault();
  // Remove all Elements on new request
  document.querySelectorAll(".box").forEach((e) => e.remove());
  //Validation & Creation
  if (textInput.value !== "" && numInput.value > 0) {
    for (let i = 1; i <= numInput.value; i++) {
      let myElements = document.createElement(typeInput.value);
      myElements.className = "box";
      myElements.title = "Element";
      myElements.id = `id-${i}`;
      myElements.textContent = textInput.value;
      //new Elements Styling
      result.style.cssText = `display: flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:1rem;`;
      myElements.style.cssText = `padding: 0.7em 3em; background-color:orange;  text-align:center; border-radius:2em;font-size: 1.5rem`;
      result.appendChild(myElements);
    }
  } else {
    alert("Both fields are required");
  }
};
