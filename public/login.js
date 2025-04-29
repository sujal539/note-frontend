const form = document.getElementById('registration-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    console.log(data);
    login(data)
});



async function login(data){

   const res =  await fetch('http://localhost:3455/login',{
        method : 'POST',
        credentials: 'include',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    });

    if(res.ok){
        alert('login success')
        const user = await res.json()
        localStorage.setItem("userId", user.data.userId)
        clearHistoryAndRedirect("/notelist.html")
      
    }else{
        alert("unable to login")
    }
    

}

