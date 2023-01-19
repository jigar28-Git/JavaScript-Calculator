// // div.innerText = "Hello World"

// // const body = document.body
// // const div = document.createElement("div")
// // div.textContent = "<strong>Hello World 2</<strong>>"
// // const strong = document.createElement('strong')
// // strong.innerText = "Hello World 2"
// // div.append(strong)
// // body.append(div)

// // const div = document.querySelector("div")

// // console.log(div.textContent)
// // console.log(div.innerText)

// const body = document.body
// const div = document.querySelector("div")
// const spanhi = document.querySelector("#hi")
// const spanbye = document.querySelector("#bye")

// // spanHi.remove()

// spanhi.dataset.longername = "hi"

// spanhi.style.backgroundColor = "red"
// spanbye.style.color = "red"

// spanhi.classList.toggle("h3", false)

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener(
  "click",
  (e) => {
    console.log("GrandParent Capture");
  },
  { capture: true }
);
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("GrandParent Bubble");
  },
  { capture: true }
);
parent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Parent Capture");
  },
  { capture: true }
);
parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent Bubble");
  },
  { capture: true }
);
child.addEventListener(
  "click",
  (e) => {
    console.log("child Capture");
  },
  { capture: true }
);
child.addEventListener(
  "click",
  (e) => {
    console.log("child Bubble");
  },
  { capture: true }
);
document.addEventListener(
  "click",
  (e) => {
    console.log("document Capture");
  },
  { capture: true }
);
document.addEventListener(
  "click",
  (e) => {
    console.log("document Bubble");
  },
  { capture: true }
);
