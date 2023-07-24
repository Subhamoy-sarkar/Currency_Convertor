const apiKey='457ea85583ee4440c1b34228';

const convert=async ()=>{
    const value=document.getElementById('temp').value;
    const Select1=document.getElementById('options1').value;
    const Select2=document.getElementById('options2').value;
    const res=document.getElementById('Result');
    let ans;
    const response=await fetch(`https://v6.exchangerate-api.com/v6/457ea85583ee4440c1b34228/latest/${Select1}`);
    const data=await response.json();
    ans=(value*(data.conversion_rates[Select2])).toFixed(2);
    res.innerHTML=`${ans}`;
}