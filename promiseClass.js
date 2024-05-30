{
    const posts = [
        {title: 'Post One', body: "This is post one"},
        {title: "Post Two", body: "This is post two"}
    ]
    function getPosts(){
        setTimeout(()=>{
            let output = ''
            posts.forEach((post, index)=>{
                output += `<li>${post.title}</li>`
            })
            document.body.innerHTML = output
        }, 1000)
    }
    function createPost(post){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                posts.push(post)
                //stuff
                const error = false
                if(!error){
                    resolve("OK")
                }else{
                    reject("Error")
                }
            }, 2000)
        })
    }
    getPosts()
    createPost({title: "Post 3", body: "This is post 3"}).then((resp)=>{
        getPosts()
        console.log(resp)
    }).catch((err)=>{
        console.log(err)
    })
}