let count = document.getElementById("counter");
const pauseB = document.getElementById("pause");
const heart = document.getElementById("heart");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const submit = document.getElementById("submit");
const likes = document.querySelector(".likes");

heart.addEventListener("click", liked);
submit.addEventListener("click", subComment);
plus.addEventListener("click", () => { count.innerText = parseInt(count.innerText) + 1 })
minus.addEventListener("click", () => { count.innerText = parseInt(count.innerText) - 1 })

function liked() {
    const newLi = document.createElement("li");
    let oldLi = document.getElementById(`${count.textContent}`);
    oldLi === null ?
        (newLi.setAttribute("id", `${count.textContent}`),
            newLi.innerHTML = `${count.textContent} has been liked <span>` + 1 + `</span> time`, likes.appendChild(newLi))
        : oldLi.children[0].textContent = parseInt(oldLi.children[0].textContent) + 1;
}

function subComment(e) {
    e.preventDefault();
    let comment = document.getElementById("comment-input").value;
    const par = document.createElement('p');
    par.textContent = comment;
    comment=document.getElementById("comment-input").value="";
    par.textContent !== "" ?
        (document.getElementById("list").appendChild(par), comment) : comment;
}

function incrementor() {
    count.innerText = parseInt(count.innerText) + 1;
    pauseB.addEventListener("click", onPause);
}
let myInterval = setInterval(incrementor, 1000);


function onPause() {
    clearInterval(myInterval);
    pauseB.textContent = "resume";
    pauseB.addEventListener("click", onResume);
    pauseB.removeEventListener("click", onPause);
    plus.disabled = true;
    heart.disabled = true;
    minus.disabled = true;
    submit.disabled = true;
}

function onResume() {
    pauseB.textContent = "pause";
    myInterval = setInterval(incrementor, 1000);
    pauseB.removeEventListener("click", onResume);
    pauseB.addEventListener("click", onPause);
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
}