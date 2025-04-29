function clearHistoryAndRedirect(path) {
    // window.location.href = "./notelist.html"
    window.history.replaceState({}, document.title, path);
    window.location.reload();
}

async function validateSession() {
    const res = await fetch('http://localhost:3455/me', {
        method: 'GET',
        credentials: 'include'
    });
    if (res.ok) {

        window.location.replace('/notelist.html')
    }


}

async function validate() {
    if (location.pathname === '/login.html' || '/registration.html') {
        validateSession()

        //   if(resp.status === 200){
        //     window.location.replace('/notelist.html')
        //   }
    }
}

validate()

