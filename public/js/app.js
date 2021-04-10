// const weatherform=document.querySelector('form');
// const searchval=document.querySelector('input');
// const location=document.querySelector('#message-1');
// const forecast=document.querySelector('#message-2');
// weatherform.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     location.value="Loading...";
//     forecast.value="Loading...";
//     const val=searchval.value;
//     fetch('http://localhost:3000/weather?address='+val).then((response)=>{
//         response.json().then((data)=>{
//             if (data.error) {
//                 console.log(data.error);
//             }else{
//                 location.value=data.location;
//                 forecast.value=data.forecast;
                
//                 console.log(data.location);
//                 console.log(data.forecast);
//             }
//         })
//     })
//     console.log(val);
// })

console.log("Client side javascript on..")
const weatherform=document.querySelector('form');
const searchval=document.querySelector('input');
const location1=document.querySelector('#message-1');
const forecast=document.querySelector('#message-2');
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    location1.textContent="Loading...";
    forecast.textContent="Loading...";
    const val=searchval.value;
    fetch('/weather?address='+val).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                console.log(data.error);
                location1.textContent=data.location;
            }else{
                location1.textContent=data.location;
                forecast.textContent=data.forecast;
                
                console.log(data.location);
                console.log(data.forecast);
            }
        })
    })
    console.log(val);
})
