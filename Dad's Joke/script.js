const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.jokeBtn');

const generateJoke = async function(){
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    joke.innerHTML = data.value;
}

jokeBtn.addEventListener('click', generateJoke);