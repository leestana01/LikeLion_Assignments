function imgChangeTrigger(){
    characterList = ['짱구','철수','훈이','유리','액션','오수']
    document.getElementById("shin").src = `./imgs/${characterList[now]}.png`
    now = now>4 ? 0 : now+1
}

var now = 0
setInterval(() => imgChangeTrigger(), 2000);
