var x = document.getElementById("login1");
var y = document.getElementById("register1");
var z = document.getElementById("btn");

function register(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
} 
 btnsearch.addEventListener('click',(e)=>{
   e.preventDefault();
   var date = document.getElementById('date').value;
   var to = document.getElementById("to").value;
   var from = document.getElementById("from").value;

    let p = fetch(`https://railway-w6eh.onrender.com/proxy?from=${from}&to=${to}&date=${date}`)
   p.then((data) =>{
     return data.json()
  })
  .then((trains) => {
      console.log(trains)

     let tabledata="";
    trains.data.forEach(element => {
      
     var values = element.train_base;
       // console.log(objectData[0].title);
      tabledata+= `<tr>
       <td>${values.train_name}</td>
       <td>${values.train_no}</td>
       <td>${values.from_time}</td>
       <td>${values.to_time}</td>
     </tr>`;
     });
     document.getElementById("table-body").innerHTML=tabledata;
    })
   .catch((error)=>{
     console.log(error);
   })
})
