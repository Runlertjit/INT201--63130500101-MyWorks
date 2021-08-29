function ReverseString (){
    const text = document.getElementById("rev").value;
    let textRev = text.split('').reverse().join('');
    document.getElementById("Textrev").innerHTML = textRev;
}
