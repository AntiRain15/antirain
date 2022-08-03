function sleep(t){
    return new Promise(a=>setTimeout(a,t));
}

(async function(){
    console.log('0초');
    await sleep(1000);
    console.log('1초');
})();