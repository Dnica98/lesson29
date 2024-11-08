const list= document.getElementById('list')


fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`, {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        data.forEach((user)=>{
            const item = document.createElement('li')
            item.innerText=user.name
            list.appendChild(item)
        })
    })
    .catch((err) => console.log(err))
    