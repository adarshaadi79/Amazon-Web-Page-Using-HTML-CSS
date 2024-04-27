function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == 'pavani' && password == '123')
    {
        alert('Login succesfully!');
    }
        else {
            alert('Login failed');
        }
}