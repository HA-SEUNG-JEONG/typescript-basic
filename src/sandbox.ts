let greet: Function;

// greet = "Hello";

greet = () => {
  console.log("hello world");
};

//default paramter와 ?은 같이 쓸 수 없음
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(1, 2);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(2, 7);

// result = "some";
