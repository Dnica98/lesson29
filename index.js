


// fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`, {
//     method: 'GET'
// })
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((user)=>{
//         const item = document.createElement('li')
//         item.innerText=user.name
//         list.appendChild(item)
//     })
// })
// .catch((err) => console.log(err))




// fetch('https://jsonplaceholder.typicode.com/users/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         name: 'Alex',
//         email: 'alex@mail.com'
//     }),
//     headers:{
//         'Content-type': 'application/json; charset-UTF-8',
        
        
//     }
// })

// .then((res) => res.json())
// .then((data)=>{
//     data.forEach((user)=>{
//         const item = document.createElement('li')
//         item.innerText=user.name
//         list.appendChild(item)
//     })
// })
// .catch((err) => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/users/1', {
//     method: 'PUT',
// })

// .then((res) => res.json())


//+++++++++++ recursii

// const recursion = (num) => {
//     if(num === 0){
//         return 1;
//     } else {
//         return num * recursion(num - 1)
//     }
// }

// console.log(recursion(3))



//+++++++++ deep clone

// const obj = {
//     a: 1,
//     b: {
//         c:{
//             d:{
//                 e: 2,
//                 func: () => console.log('pass')
//             }
//         }
//     }
// }


// const copy = {...obj}
// const copy = JSON.parse(JSON.stringify(obj))

// const deepClone = (obj) =>{
//     if (obj === null) return null
//     let clone = { ...obj }
//     Object.keys(clone).forEach((key) => {
//         clone[key] = typeof obj [key] === 'object' ? deepClone(obj[key]) : obj[key]
//     })

//     return clone;

// }

// const copy = deepClone(obj)

// copy.b.c.d.e = 3

// console.log(obj.b.c)
// console.log(obj.b.c)
// copy.b.c.d.func()



// ++++++++ set Time Out 

// setTimeout(() =>{
//     console.log('Show after 2 sec')
// }, 2000)

// setInterval(() =>{
//     console.log('show me each sec')
// }, 1000)

// const clearInterval = clearInterval(() =>{
//     console.log('clear interval')
// }, 1000)

// clearInterval(interval)

// console.log(1)
// setTimeout(() =>{
//     console.log(2)
// }, 1000)
// setTimeout(() =>{
//     console.log(3)
// }, 0)
// Promise.,resolve().then(()=> console.log(4))
// console.log(5)


// const p = () => {
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res('resolved')
//         }, 3000)
//     })
// }


// async function renderPage() {
//     console.log('rendering')
//     const users = await p()
//     console.log(users)
// }

// renderPage()


// const student = {
//     alex: [9,8,10],
//     victor: [6,7,7]
// }

// // {
// //     alex: 'Media: 9'
// //     victor: ' Media: 6.6'
// // }
// const media = (obj) =>{

//     const clone = { ...obj}
//     Object.keys(clone).forEach((key) =>{
//         const media = obj[key].reduce((acc, curr)=>acc + curr)/obj[key].length
//         clone[key] ='Media: ' + media.toFixed(1)
//     }) 
//     return clone
// }

// console.log(media(student))



const fetchData = async() => {
    const useresResponse = await fetch('https://jsonplaceholder.typicode.com/users') 
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')

    const users = await useresResponse.json()
    const posts = await postsResponse.json()

    return {users, posts}
}

const renderPage = async() => {
    const {users, posts} = await fetchData()

    console.log(users)
    console.log(posts)
}

