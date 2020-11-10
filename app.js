const http = new EasyHTTP;

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}


// get users
http.get('https://jsonplaceholder.typicode.com/users');

// post user
http.post('https://jsonplaceholder.typicode.com/users/', data);

// put user
http.put('https://jsonplaceholder.typicode.com/users/1', data);

// delete user
http.delete('https://jsonplaceholder.typicode.com/users/111');
