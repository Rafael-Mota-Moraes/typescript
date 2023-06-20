const body = document.querySelector("body");

if (body !== null) {
  body.style.background = "blue";
}

// Non-null assertion (!)
const body2 = document.querySelector("body")!;
body2.style.background = "blue";

// Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "blue";
