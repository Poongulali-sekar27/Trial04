//Example resume for iterat

var JSON =[
    {
        "id":"Poongulali",
        "msg":"For the given JSON iterat over all For loos(for, for in, forEach)",
        "mail":"kuzhal27@gmail.com",

    }
];
//----------------------------------------------------------------------------------------------------------------
//For Loop
// for(var i=0;i<JSON.length;i++){
//     var obj =JSON[i];
//     console.log(obj.id);
//     console.log(obj.msg);
//     console.log(obj.mail);
// }
//--------------------------------------------------------------------------------------------------------------
//for Each
// JSON.forEach(function(obj){console.log(obj.id);
// })
//---------------------------------------------------------------------------------------------------------------
//for In
// for(var key in JSON){
//     if(JSON.hasOwnProperty(key)){
//         console.log(JSON[key].id);
//         console.log(JSON[key].msg)
//     }
// }
//--------------------------------------------------------------------------------------------------------------
//for Of
let text = "";
for(let x of JSON[key].id){
text +=x;
}
console.log(text);