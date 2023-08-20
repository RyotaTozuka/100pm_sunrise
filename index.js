function onSubmit(){
    const text = document.getElementById('answer').value;

    const msg = text + "が亜門サンライズを召喚！！";
    console.log(msg);
    sendText(msg);

    return false;
}
