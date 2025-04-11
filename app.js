
// let user = null
const getUser = function(){
    fetch('http://127.0.0.1:3455', {
        method: 'GET'
    })
    // .then(function(res){return res.json()}) // anonymous syntax
     .then(res => res.json()) // anonymous syntax
    .then(data => {
        var userNameEle = document.getElementById('user-name')
        var ageEle = document.getElementById('age')
        userNameEle.innerHTML = data.data.name
        ageEle.innerHTML = data.data.age
    }) // fat arrow function
    .catch(e => {
        console.log("error ", e)
    })
}

getUser();

function postRequest(){
    fetch('http://127.0.0.1:3455/contacts', {
        method: 'POST',
        data: "hello"
    }).then(res => res)
    .then(data => console.log(data))
    .catch(e => console.log(e))
}

document.getElementById('btn').addEventListener('click' , () => {
    console.log('clicked')
    postRequest()
})

console.log(user, 'user')







