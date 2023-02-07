let buttonToDo = document.getElementById('buttonToDo')
let tache = document.getElementById('tache')
let nouvelle = document.getElementById('nouvelle')
const colors = ["yellow", "blue", "red", "orange", "green"];



buttonToDo.addEventListener('click', () => {
    let newElement = document.createElement('li');
    let content = nouvelle.value;
    newElement.innerText = content;

    // let newElement.textContent = "nouvelle";
    const color = colors[Math.floor(Math.random() * colors.length)];
    newElement.style.color = color;
    newElement.innerHTML = content 

    newElement.innerHTML = `<span>` +  content + `</span>`+ `    <button id="edit"> edit</button>` +` <button id="remove">&times;</button>`
    tache.appendChild(newElement);
    nouvelle.value = "";
    newElement.querySelector('#edit').addEventListener('click', () => {
        let newContent = prompt("Enter the new task content: ");
        if (newContent !== null && newContent != ""){
            newElement.querySelector('span').innerText = newContent;
        }else{
            alert("Rentrez quelque chose")
        }
  
    });

    // let edit = document.getElementById('edit')
    // edit.addEventListener("click", ()=>{
    //     let test =document.querySelector('span')
    //     console.log(test.innerText)
    // })
    
    // newElement.addEventListener("click", function(event) {
    //     let input = `<input type="text" id="input" value = ${event.target.content}>
    //                  <button id="saveButton">Enregistrer</button> `;
    //     newElement.innerHTML = input;
      
    //         const contenue = document.querySelector("#input");
    //         contenue.value =newElement.textContent ;
        
    //         const saveButton = document.querySelector("#saveButton");
    //         saveButton.addEventListener("click", function() {
    //           if (document.contains(contenue)) {
    //             newElement.innerHTML = contenue.value + `<button id="edit">edit</button>`  + ` <button id="remove">&times;</button>` ;
    //           }
    //         });

    
    //   });
    newElement.querySelector("#remove").addEventListener("click", () => {
        newElement.remove();

})



// setTimeout(() => {
//     alert("To do bien ajouté")
// }, 100);

})


