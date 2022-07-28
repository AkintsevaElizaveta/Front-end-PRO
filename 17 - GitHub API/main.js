const login = document.querySelector('#loginForRequest');
const result = document.querySelector('#result');
const findUserBtn = document.querySelector('#findUser');

findUserBtn.addEventListener('click', onFindUserBtnClick);

function onFindUserBtnClick(e) {
    fetch(`https://api.github.com/users/${login.value}`)
        .then(status)
        .then(res => res.json())
        .then(renderUser)
        .catch((error) => {
            alert(`${error.message}. Please, enter login.`)
        })
    clearField(login);
}

function status(res){
    if(res.status !== 200){
        throw new Error (`Error ${res.status}`);
    }
    return res;
}

function renderUser(user) {
    const html = generateUserHtml(user);
    result.insertAdjacentHTML('afterbegin', html);
}

function generateUserHtml(user) {
    return `
        <li>
           <img src=${user.avatar_url} alt="">
           <div>
               <span> <b>Name</b> ${user.name}</span>
               <span> <b>Repositories</b> ${user.public_repos}</span>
               <span> <b>Followers</b> ${user.followers}</span>
               <span> <b>Following</b> ${user.following}</span>
           </div>
        </li>
        
    `;
}

function clearField(field){
    field.value = '';
}
