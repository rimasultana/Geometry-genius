document.getElementById('triangle').addEventListener('click', function(){
    const inputB =Number( document.getElementById('traingle-b').value);
    const inputH =Number(document.getElementById('traingle-h').value);
   /*  console.log(inputB);
    console.log(inputH); */
    const sum = 0.5 * inputB * inputH;
const show = document.getElementById('show');
show.innerText = sum;

    
    
})
