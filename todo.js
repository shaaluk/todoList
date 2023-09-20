//to prevent default form submission request(9 line)

let form=document.getElementById("form");
let textInput=document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks= document.getElementById("tasks");
let add=document.getElementById("add");


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  formValidation(); //invoke the function-- everytime I click submit this is invoked
});

let formValidation=()=>{
    if(textInput.value ===""){
        console.log('failure');
        msg.innerHTML="Task cannot be blank";
    }
    else{
        console.log('success');
        msg.innerHTML="";
        acceptData();  //trigger
        add.setAttribute("data-bs-dismiss", "modal");
                         //attribute        //value
          add.click();
          
       (()=>{
           add.setAttribute("data-bs-dismiss","");
       }) ();
    }

};


let data={}; //collecting data from input


//pushing the data inside
let acceptData=() =>{
     data["text"]= textInput.value;
     data["date"]= dateInput.value;
     data["description"]= textarea.value;

     createTasks();

};


//output results in todo list
let createTasks =() =>{
 tasks.innerHTML +=`
 <div>
 <span class="fw-bold">${data.text}</span><br>
 <span class="small text-secondary">${data.date}</span>
 <p>${data.description}</p>


<span class="options">
<i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
<i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
</span>
</div>
 
 `;
 resetForm();
};


let resetForm =() =>{
    textInput.value="";
    dateInput.value="";
    textarea.value="";
};

let deleteTask =(e) =>{
  e.parentElement.parentElement.remove();
};

let editTask=(e)=>{
  let selectedTask= e.parentElement.parentElement;
  
    textInput.value=selectedTask.children[0].innerHTML;
    dateInput.value=selectedTask.children[0].innerHTML;
    textarea.value=selectedTask.children[3].innerHTML;

    selectedTask.remove();
};