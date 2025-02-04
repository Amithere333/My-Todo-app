const inputField=document.querySelector('#task-input');  //input field selected

const listItems=document.querySelector('#list-items'); //unordered list selected 

const addButton=document.querySelector('#add-image'); //add button selected using add icon

//event added on click of add button
addButton.addEventListener('click',()=>{
    const todoValue=inputField.value.trim();
        // return if empty string
        if(todoValue===''){
            alert('input field is empty! Please enter your task')
            return;
        }
        // adding task here
        const newTask=document.createElement('li');
        newTask.innerText=todoValue;
        listItems.appendChild(newTask);

        // creating complete button for linethrough in completion
        const completeButton=document.createElement('button');

        completeButton.innerText="✅";
        completeButton.classList.add('complete-btn'); //class added 


        //creating delete button for deleting the task
        const deleteButton=document.createElement('button');
        

        //adding delete icon 
        deleteButton.innerText='❎';
        deleteButton.classList.add('delete-btn'); //class added


        //creating div for delete and completed button
        const buttonContainer=document.createElement('div');
        buttonContainer.classList.add('buttons-class');


        //appending div to list item
        newTask.appendChild(buttonContainer);
        

        //appending buttons to div
        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);
        inputField.value='';

        
        
        //event listener for complete button 
    completeButton.addEventListener('click',()=>{
       newTask.style.textDecoration='line-through';
       
})


    //event listener for complete button 
    deleteButton.addEventListener("click", ()=>{
        newTask.remove(); //
    })
    
});