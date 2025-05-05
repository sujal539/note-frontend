function toCreate() {
    window.location.href = "./createnote.html";
}
async function getNotes() {
    const response = await fetch('http://localhost:3455/api/notes',
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    const notes = await response.json()

    const wrapperDiv = document.getElementById('cards-wrapper')
    notes.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card')
        const titleDiv = document.createElement('div')
        titleDiv.classList.add('title')
        titleDiv.innerHTML = element.title
        const contentDiv = document.createElement('div')
        contentDiv.classList.add('note-text')
        contentDiv.innerHTML = element.content
        const dateDiv = document.createElement('p')
        dateDiv.innerText = element.created_at
        const noteActionDiv = document.createElement('div')
        noteActionDiv.classList.add("note-action")
        const delBtn = document.createElement('button')
        delBtn.textContent = "DELETE"
        const editBtn = document.createElement('button')
        editBtn.textContent = "EDIT"
        card.appendChild(titleDiv)
        card.appendChild(contentDiv)
        card.appendChild(dateDiv)
        card.appendChild(noteActionDiv)

        noteActionDiv.appendChild(editBtn)
        noteActionDiv.appendChild(delBtn)

        wrapperDiv.appendChild(card)
        editBtn.addEventListener('click', () => {
            // window.location.href = "./editnote.html";
            const url = new URL('http://localhost:5501/editnote.html');
            url.searchParams.set('id', element.id);
            window.location.href = url.toString(); // Triggers navigation
            // window.history.pushState({}, '', url);
        })
        delBtn.addEventListener('click', () => {
            console.log('del')
            fetch(`http://localhost:3455/api/note/${element.id}`, {
                method: 'DELETE',
                credentials: 'include'
            })
                .then(res => {

                    if (res.ok) {
                        alert(`note with id ${element.id} deleted successfully`)
                    }
                    location.reload()
                })
                .catch(err => {
                    alert("Failed to delete the note!")
                })
        })
    });
}

async function logout() {
    const response = await fetch("http://localhost:3455/auth/logout",
        {
            method: "POST",
            credentials: "include"
        }
    )

    if (response.ok) {
        window.location.href = "/login.html"
    }
}
getNotes()

function getUserData() {
    fetch('http://localhost:3455/auth/me', {
        method: 'GET',
        credentials: 'include'
    }).then(res => res.json())
    .then(data => console.log(data, "user"))
    .catch(err => console.log(err))
    
    
}

getUserData()