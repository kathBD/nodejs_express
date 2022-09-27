const { response } = require("express");
const { get } = require("../../routes");

const message = document.querySelector('#message');

fetch('http://localhost:3000/users',{

method: 'GET',
headers:{
    'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(data=>{
    message.textContent = data.message;
})
.catch(err=>{
    console.log(err);
});

/**
 * forma 2 funtion arrow lambda
 * 
 * const restApi = async()=>{
 *  const data = awat fetch('http://localhost:3000/users',{
 *   method: 'GET',
     headers:{
    'Content-Type': 'application/json'
 * },
     }).then(response)=>response.json());
      message.textContent = data.message;
 * };
   
    restAPi();
 * 
 */