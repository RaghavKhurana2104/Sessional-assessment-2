const xhr= new XMLHttpRequest;
xhr.open('GET','https://jsonplaceholder.typicode.com/photos',true)


xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);

let content1 ="";
let p=0;
const images=(i)=>{
for(i=p; i<p+50; i++){
    let id = response[i].thumbnailUrl;
    let title = response[i].title;
    let imag = response[i].url;
    content1 += `
    <div style="text-align;">
        <a href="${imag}"><img src="${id}" style="margin-right: 30px; margin-left:30px;"></a>
        <div style="width:150px; margin-left:30px; text-align: center;color:white;">
        <p style="overflow:auto">${title}</p>
        </div>
    </div>`
}

document.querySelector("#container1").innerHTML = content1;

}


images(p);

document.getElementById('more').addEventListener('click',()=>{
    console.log(p);
    p=p+50;
    if(p<5000){
        images(p);
    }
})
}

xhr.send()
