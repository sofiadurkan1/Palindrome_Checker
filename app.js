const button = document.getElementById('button');
const result = document.getElementById('result');
const inputUser = document.getElementById("userInput");



button.addEventListener('click', () => {
  

    result.innerHTML = 'Loading...';


    const timeout = setTimeout(() => {
        const input = document.getElementById('userInput').value;
        const reversed = input.split('').reverse().join('');

        if (reversed === input){
            result.innerHTML = "Yes, It's a palindrome.."
            result.style.color = "#66dd29"

        }else{
            result.innerHTML = "No,not a palindrome..";
            result.style.color = "#ff2900";
        }

    },900)

    

})

inputUser.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      document.getElementById("button").click();
    }
  });