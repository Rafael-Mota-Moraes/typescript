let x;

if (typeof x === "undefined") x = 20;
console.log(x);

function createPerson(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName
  };
}

function squareOf(x: any) {
  if (typeof x == "number") {
    return x * x;
  } else {
    return null;
  }
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");

console.log(squareOfTwoNumber);
console.log(squareOfTwoString);
