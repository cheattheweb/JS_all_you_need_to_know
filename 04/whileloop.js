// https://www.youtube.com/watch?v=rZHeuqMFSLA&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=31
//var i = 0;
//while(i < 10){
//    console.log(i +' Arka Barua')
//    i++
//}

var isRunning = true

while(isRunning){
    var random = Math.floor(Math.random() * 10 + 1)
    if (random === 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    }else{
        console.log('You have rand' + random)
    }
}