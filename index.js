// const buttonValue = document.getElementsByTagName('td');

// console.log(buttonValue); gives HTML collections so we have to change it to array

const buttonValue = [...document.getElementsByTagName('td')];
// console.log(buttonValue); //gives you array of 19 elements

const solution = document.getElementsByTagName('th');
// console.log(solution); // its just one in number so should be fine for now

buttonValue.forEach((button) => {
  button.addEventListener('click', (e) => {
    // console.log(e.currentTarget);current target can be obtained
  });
});
