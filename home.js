document.body.insertAdjacentHTML(`afterbegin`, `<h2>Welcome, you've logged in</h2>`);
document.getElementById(`checking_loggin`).addEventListener(`click`, load_axios);


// api request and display all data within the array
function load_axios () {
    if (Cookies.get(`token`) !== undefined) {
axios.request ({
    url: `https://reqres.in/api/unknown`
}).then(success1).catch(fail1);
    } else {
        document.body.insertAdjacentHTML(`beforeend`, `<h3> go log in</h3>`);
        document.body.insertAdjacentHTML(`beforeend`, `<button onclick = "to_index_page()">log in page</button>`);
    }
}

function success1 (response33) {
    for(let i = 0; i < response33[`data`][`data`].length; i++) {
        
        
        document.body.insertAdjacentHTML(`beforeend`, `<h3>name: ${response33[`data`][`data`][i][`name`]} <br>
        year created: ${response33[`data`][`data`][i][`year`]} </h3> <br> 
        <div id = "div${i}" background>color</div>`)
        document.getElementById(`div${i}`).style.backgroundColor = `${response33[`data`][`data`][i][`color`]}`
    }
        
    
}

function to_index_page () {
    location.href = "index.html"
}




function fail1 (error33) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>Failed</h1>`);

}

// on click go back to index page
// document.getElementById(`to_index`).addEventListener(`click`, index_page);

// function index_page () {
    // location.href = "index.html"
// }