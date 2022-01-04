
const URL = 'https://randomuser.me/api/';
const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    const person = data.results[0]
    // console.log(person);
    const {large: image} = person.picture
    const {first, last} = person.name
    const {email, phone} = person
    const {age} = person.dob
    const {password} = person.login
    const{street: {number, name}} = person.location
    return{
        image,
        name: `${first}, ${last}`,
        age,
        street: `${number} ${name}`,
        phone,
        password,
        email
    }
}

export default getUser;