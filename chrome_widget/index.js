const url='quotes.json';
const quotes_array=[];

fetch(url)
.then(response=>{
    if(!response.ok){
        throw new Error ("Not ok!");
        
    }
    return response.json();
})
.then(data=>{
    quotes_array.push(...data);
})
.catch(error=>{
console.error("Cannot fetch");
});

const btn=document.getElementById('btn');
const text=document.getElementById('text');

document.addEventListener('click',()=>{
    const random=Math.floor(Math.random()*quotes_array.length);
    const randomQuote=quotes_array[random];
    text.textContent=(`${randomQuote.quoteText} 
        - ${randomQuote.quoteAuthor}`);
})