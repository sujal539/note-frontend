const form = document.getElementById("create-form");

const handleCreate = function (e) {
    console.log(e)
    e.preventDefault();

    const formData = new FormData(form)
    const title = formData.get('title')
    const content = formData.get('content')

    fetch('http://localhost:3455/note', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, content})  // ← this should be "body", not "data"
        })
        .then(res => {
            console.log(res);
            if (res.ok) {
                alert('note successful');
                window.location.href = './login.html';
            } else {
                console.log(res.body.error)
                alert(`note failed: + ${res.body.error}`);
            }
        })
}
form.addEventListener('submit', handleCreate)

