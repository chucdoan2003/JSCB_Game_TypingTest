var words=['nội dung 1','nội dung 2','nội dung 3']
var ShowE=document.querySelector('.show_admin');
var editE=document.querySelector('.edit_input');
var acceptEdit=document.querySelector('.edit');
var form=document.querySelector('.form')


render()

function render(){ 
    ShowE.innerHTML="";
    words.forEach((word,index) => {
        ShowE.innerHTML+=`<div class="row">
        <div class="col">${index}</div>
        <div class="col-9">${word}</div>
        <div class="col"><button onClick="edit(${index})" class="edit_${index}">Sửa</button></div>
        <div class="col"><button onClick="delet(${index})">Xóa</button></div>
    </div>`
    }); 
}

function edit(index){
    editE.value=words[index]
    var i=index;
    console.log(index)
    return i;
}
form.addEventListener('submit',update(edit(index)))

function update(index) {
    console.log(index)
    e.preventDefault()
    words[index]=editE.value;
    render();
}

function delet(index){
    words.splice(index,1)
    render()
}
var add=document.querySelector('.add')
