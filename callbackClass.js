{
    const posts = [
        {title: 'Post One', body: 'This is post one'},
        {title: 'Post Two', body: 'This is post two'}
    ]
    button= document.getElementById("myButton")
    count=2

    function getPosts(){
        setTimeout(() =>{
            let outPut =''
            posts.forEach((post, index)=>{
                outPut += `<li> ${post.title}<li>`
            })

            document.getElementById("myUl").innerHTML= outPut
        }, 2000)
    }
    
    function createPost(post, callback){
        setTimeout(()=>{
            posts.push(post)
            callback()
        }, 2000)
        
    }

    getPosts()
    button.addEventListener('click', ()=>{
    count++
    newPost = {title: `Post ${count}`, body: `This is post ${count}`}
    createPost(newPost, getPosts)
})
}