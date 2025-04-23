const form = document.getElementById('registration-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    console.log(data);
    login(data)
});

function login(data){
    fetch('http://localhost:3455/login',{
        method : 'POST',
        credentials: 'include',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })
    .then(res => {
        if(res.ok){
            alert('login success')
            window.location.href = "./notelist.html"
        }
        else {
        alert('unable to login')
        }
    })
}

