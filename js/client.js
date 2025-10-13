/* lets get the users stuff on here

*/

let button = document.querySelector('button')

button.addEventListener("click", () => {

    let output = document.querySelector('#output')
    let userInputWord = document.querySelector('#userInputWord').value

    if(!userInputWord){
        console.log("enter a word please")
        output.innerHTML = "Please Enter a word!"
    }

    // placing the userInput Word in the fetch
    fetch(`/api?word=${userInputWord}`)
    .then(res => res.json())
    .then(data => {
      if (data.isPalindrome) {
        output.textContent = `"${data.userInputWords}" IS a palindrome!`
      } else {
        output.textContent = `"${data.userInputWords}" is NOT a palindrome!`
      }
    })
    .catch(err => {
      console.error(err)
      output.textContent = 'Something went wrong 😢'
    })

})