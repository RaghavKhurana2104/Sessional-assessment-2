const xhr= new XMLHttpRequest;
xhr.open('GET','https://jsonplaceholder.typicode.com/photos',true)


xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);

let content1 ="";
let p=0;
const images=(i)=>{
for(i=p; i<p+48; i++){
    let id = response[i].thumbnailUrl;
    let title = response[i].title;
    content1 += `
    <div style="text-align;">
        <img src="${id}" style="margin-right: 30px; margin-left:30px;">
        <div style="width:150px; margin-left:50px; text-align: center;">
        <p style="overflow:auto">${title}</p>
        </div>
    </div>`
}

document.querySelector("#container1").innerHTML = content1;

}


images(p);

document.getElementById('more').addEventListener('click',()=>{
    console.log(p);
    p=p+48;
    if(p<5000){
        images(p);
    }
})
}

xhr.send()
