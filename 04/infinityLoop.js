// Infinity For Loop
// https://www.youtube.com/watch?v=vd8af77j2gk&list=PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1&index=36

var isRunning = true

for(;;){
    var random = Math.floor(Math.random() * 10 + 1)
    if (random === 9){
        console.log('Winner Winner Chicken Dinner')
       break
    }else{
        console.log('You have rand' + random)
    }
}