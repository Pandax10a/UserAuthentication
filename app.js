// button to read the email and password that's entered, then it uses the function to_post
document.getElementById(`submit_loggin`).addEventListener(`click`, to_post);

// this function reads the 2 value entered and stored in 2 seperate variable then is made request to api through axios
function to_post (details) {
    let user_email = document.querySelector(`#client_email`)[`value`];
    let user_password = document.querySelector(`#client_pw`)[`value`];
    axios.request ({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: `${user_email}`,
            password: `${user_password}`
        }
    }).then(success1).catch(failed1);
}
// use listed email michael.lawson@reqres.in email": "lindsay.ferguson@reqres.in
function success1 (response22) {

    Cookies.set(`token`, `${response22[`data`][`token`]}`)
    location.href = "home.html"
}

function failed1 (error22) {
    document.body.insertAdjacentHTML(`beforeend`, `<p>Login is invalid</p>`)
}

// log out button
document.getElementById(`delete_me`).addEventListener(`click`, log_out_now);

function log_out_now () {
    Cookies.remove(`token`);
    document.body.insertAdjacentHTML(`beforeend`, `<h1>You've Logged out</h1>`)
}