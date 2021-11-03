let addSpace = document.getElementById('add');


let addNode = (text = '') =>{
    let note = document.createElement("div");
    note.classList.add("note-area");
    
    const rhtml = 
    `
    <div class="edit-grp">
       <div class="edit"><i class="fas fa-toggle-on"></i></div>
       <div class="delete"><i class="fas fa-trash"></i></div>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea name="" class="${text ? "hidden" : ""}" id="written" cols="28" rows="6" placeholder="write note..."></textarea>
    `;

    note.insertAdjacentHTML("afterbegin", rhtml);
    //console.log(note);


    //reference
    const editButton = note.querySelector('.edit');
    const deltButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    //delete
    deltButton.addEventListener('click', () => {
        alert("do you want to delete?")
        note.remove();
    })
    //toggle
    editButton.addEventListener('click', ()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change', (event)=>{
        const userValue = event.target.value;
        mainDiv.innerHTML = userValue;

        
    })

    document.body.appendChild(note);   //here add the node in html page.
}  



addSpace.addEventListener('click', () => addNode() );
         