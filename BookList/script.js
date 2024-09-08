const button = document.querySelector('.button')
const displyMain = document.querySelector('.disply-main')


const addToLocal = (list)=>{
   if(list.length < 0){
    return
   }

   let oldList;

   if(localStorage.getItem('lists')===null){
      oldList = [];
   }else{
     oldList = JSON.parse(localStorage.getItem('lists'))
   }
   oldList.push(list)
   localStorage.setItem('lists', JSON.stringify(oldList))
}

const deleteFromLocal = (deleted)=>{
  let oldList;

    if(localStorage.getItem('lists')===null){
            oldList = [];
     }else{
             oldList = JSON.parse(localStorage.getItem('lists'))
    }

    oldList.map((lis, index)=>{
      if(lis[0] === deleted.children[0].textContent.trim() && lis[1] === deleted.children[1].textContent.trim() ){
        oldList.splice(index, 1)
      }
    })
      localStorage.setItem('lists', JSON.stringify(oldList))

}

button.addEventListener('click',  ()=>{

const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
const btnv = document.querySelector('.btn')


let Title = title.value;
let Author = author.value;
let Isbn = isbn.value;

if(Title === '' && Author === ''){
     return;
}else{

  displyMain.innerHTML += `
 <div class="display-info-table">
    <span>${Title}</span>
    <span>${Author}</span>
    <span>${Isbn}</span>
    <div class="btn">
      <button  class="btn-p">Delete</button>
    </div>
  </div>
  `
  addToLocal([Title, Author, Isbn]);

  title.value = '';
  author.value = '';
  isbn.value = '';

}



})

document.querySelector('.disply-main').addEventListener('click', (e) => {
if (e.target.classList.contains('btn-p')) {
    e.target.closest('.display-info-table').remove();
    deleteFromLocal(e.target.closest('.display-info-table'))
}
});


const getBooks = ()=>{
let oldList;

   if(localStorage.getItem('lists')===null){
      oldList = [];
   }else{
     oldList = JSON.parse(localStorage.getItem('lists'))
   }

   oldList.forEach( (lis)=>{
    displyMain.innerHTML += `
     <div class="display-info-table">
    <span>${lis[0]}</span>
    <span>${lis[1]}</span>
    <span>${lis[2]}</span>
    <div class="btn">
      <button  class="btn-p">Delete</button>
    </div>
  </div>
     `
   })
}

document.addEventListener('DOMContentLoaded', getBooks)