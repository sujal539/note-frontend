// Parse the URL parameters
const params = new URLSearchParams(window.location.search);

// Get the 'id' parameter
const id = params.get('id');

console.log('ID:', id); // You can use it however you like

const findNoteById = () => {
    fetch(`http://localhost:3455/api/note/${id}`, {
        method: "GET",
        credentials: "include"
    })
    .then(res => res.json())
    .then(data => {
        const note = data[0]
        const titleInput = document.getElementById('title')
        const contentInput = document.getElementById('content')
        titleInput.value = note.title
        contentInput.value = note.content

    })
    .catch(err => console.log(err))
} 

findNoteById()

const form = document.getElementById("update-form");

const handleUpdate = function (e) {
    console.log(e)
    e.preventDefault();

    const formData = new FormData(form)
    const title = formData.get('title')
    const content = formData.get('content')

    fetch(`http://localhost:3455/api/note/${id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({title, content})  // ← this should be "body", not "data"
        })
        .then(res => {
            console.log(res);
            if (res.ok) {
                alert('note updated successfully');
                window.location.href = './notelist.html';
            } else {
                console.log(res.body.error)
                alert(`note failed: + ${res.body.error}`);
            }
        })
}
form.addEventListener('submit', handleUpdate)

