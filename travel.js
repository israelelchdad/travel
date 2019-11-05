 let idd=0;
 let arr=[];

let arrtravels=[
    {code:1,name:'taiman',price:100},
    {code:2,name:'london',price:200},
    {code:3,name:'israel',price:-300},
    {code:4,name:'paris',price:400},
    {code:5,name:'prag',price:500},
    {code:6,name:'bodapest',price:600},
    {code:7,name:'oman',price:700},
    {code:8,name:'hungaria',price:800},
    {code:9,name:'germnaia',price:900},
    {code:10,name:'maroko',price:1000}

]
console.log(arrtravels)
let str1='<tr><td>#code</td><td>#name</td><td>#price</td></tr>';
let str2='';
arrtravels.forEach(travel=>
str2+=str1.replace('#code',travel.code)
          .replace('#name',travel.name)
          .replace('#price',travel.price))
    console.log(str2);      
let v=document.getElementById('b1');
v.innerHTML+=str2;
function sent(){
    let namee=document.getElementById('name').value;
    let idname=document.getElementById('menid').value;

   let codtravel=document.getElementById('travid').value;
   let tr=arrtravels.find(travel=>{return travel.code==codtravel});
   // let tr=arrtravels.find(travel=>{return 6<7});
   let numpasangers=document.getElementById('passengers').value;
   let total=tr.price*numpasangers;
   orders(namee,idname,tr.name,numpasangers,total)
console.log(tr.name);
}
function orders(namee,idname,name3,numpasangers,total){
    idd++;
    arr.push({id:idd,name:namee,meneid:idname,city:name3,pasangers:numpasangers,total2:total})
    console.log(arr);
    let t3='<tr><td>'+idd+'</td><td>'+namee+'</td><td>'+idname+'</td><td>'+name3+'</td><td>'+numpasangers+'</td><td>'+total+'</td>';
    let v2=document.getElementById('b2');
    v2.innerHTML+=t3;
}
function serch(){
    let name5=document.getElementById("serch").value;
    let far=arr.filter(travels=>{return travels.name==name5});
    setarr(far);

    console.log(name5);
}
function setarr(far){
     let str3="";
    far.forEach(alement=>{
        str3+='<tr><td>'+alement.id+'</td><td>'+alement.name+'</td><td>'+alement.pasangers+'</td><td>'+alement.total2+'</td>';
    })
  let v4=document.getElementById('b3');
  v4.innerHTML=str3;


}

 