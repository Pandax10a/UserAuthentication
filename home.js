document.body.insertAdjacentHTML(`afterbegin`, `<h2>Welcome, you've logged in</h2>`);

axios.request ({
    url: `https://reqres.in/api/unknown`
}).then(success1).catch(fail1);

function success1 (response33) {
    for(let i = 0; i < response33[`data`][`data`].length; i++) {
        document.body.insertAdjacentHTML(`beforeend`, `<h3>name: ${response33[`data`][`data`][i][`name`]} <br>
        year created: ${response33[`data`][`data`][i][`year`]} </h3> <br> 
        <div id = "div${i}" background>color</div>`)
        document.getElementById(`div${i}`).style.backgroundColor = `${response33[`data`][`data`][i][`color`]}`
    }
}

{/* <div width = "100px" height = "100px" background = "${response33[`data`][i][`color`]}">aa</div> */}

function fail1 (error33) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>Failed</h1>`);

}