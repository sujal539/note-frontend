function toCreate() {
    window.location.href = "./createnote.html";
}
async function getNotes() {
    const response = await fetch('http://localhost:3455/notes',
        {
            method: "GET",
            credentials: "include",
            mode: 'cors',
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
    });

    console.log(notes)
}
async function logout() {
    fetch("http://localhost:3455/logout",
        {
            method:"POST",
            credentials:"include"
        }
    )
}
getNotes()