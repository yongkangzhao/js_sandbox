const name = 'John';
const age = 123;
const job = 'Web Dev';
const city = 'Miami';
let html;
//Without template strings;

html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + "</li></ul>";

html = "<ul>"+
        "<li>Name: " + name + "</li>"+
        "<li>Age: " + age + "</li>"+
        "<li>Job: " + job + "</li>"+
        "<li>City: " + city + "</li>"+
        "</ul>";

//With template strings;

html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    </ul>



`;

document.body.innerHTML = html;