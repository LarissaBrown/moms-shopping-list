/* take value from input field and on input create ul with button with X on it. 
when button with X on it gets pressed it disappears.*/


const form = document["my-items"]

form.addEventListener("submit", event => {
    event.preventDefault()

    const inputItem = form.item.value
    const li = document.createElement('li')
    const ul = document.getElementById("list")

    li.innerHTML= '<button id=' + inputItem +'>X</button>' + " " + inputItem
    ul.appendChild(li);
    form.item.value = ""
  

    const buttonX = document.getElementById(inputItem)

    buttonX.addEventListener("click", event => {
      
       ul.removeChild(li)
    
        
    })

})


  