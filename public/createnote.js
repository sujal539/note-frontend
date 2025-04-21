const form = document.getElementById("create-form");

const handleCreate = function (e){
    console.log(e)
    e.preventDefault();

    const formData = new FormData(form)
    const title = formData.get('title')
    const content = formData.get('content')

    fetch()
}
form.addEventListener('submit', handleCreate)

