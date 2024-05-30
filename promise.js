{
    let myPromise = new Promise(function(myResolver, myReject){
        let x = 0;
        if(x == 0){
            myResolver("OK")
        }else{
            myReject("Error")
        }
    })
    myPromise.then(
        function(value){console.log(value)},
        function(error){console.log(error)}
    )
}