//1
const extractNumbers = (str) => {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6dfg8"))
 //2
  fibonacciD = (pre=0, cur=1) =>{
    if(cur>144)return
    console.log(cur)
    setTimeout(()=>
        fibonacciD(cur,pre+cur,), 1000)
  }
  fibonacciD();
  //3
  const fetchTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(item => console.log(item.title));
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
};

fetchTitles();
//4
document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});
//5

    //7
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    document.getElementById('fetch-btn').addEventListener('click', fetchData);
//6
let count = 0;
    const counterElement = document.getElementById('counter');

    const interval = setInterval(() => {
        count++;
        counterElement.textContent = count;
        if (count >= 100) clearInterval(interval);
    }, 1000);