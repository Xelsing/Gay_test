function clickEvent_alert(){
    alert("ЕЕЕЕЕ!!")
}

function pidor_question(){
    let pidor = ('Так и знал что пидор!');
    let answer = confirm('Ты пидор?');
    if (answer == false) {
    while (answer == false) {
    answer = confirm('а может все таки пидор?');
    } alert (pidor);
    } else alert (pidor); 
}
