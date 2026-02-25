const button = document.getElementById("load-btn");

button.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(data=> dataLoad(data))

})


 const dataLoad= (data)=>{
    //1. get the container
//--------------------------------------------------post-container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = ''
    data.forEach((data) => {

        //2, create HTML element

        const li = document.createElement("li");
        li.innerText= data.title;
        

        
// console.log(postContainer);
        postContainer.appendChild(li);
    });
}



