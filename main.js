const tableBody = document.querySelector(".table__body");


// const tableD = document.querySelector()



function renderUser(){
    tableBody.innerHTML = null
    for(user of users){
        const [tr,tdCheck,div,input,label,userName] = createElements("tr","td","div","input","label" ,"td");
        tr.classList.add("table__row");
        tdCheck.classList.add("align-middle");
        $(div).addClass("custom-control").addClass('custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top');
        input.setAttribute("type",'checkbox');
        input.classList.add("custom-control-input");
        
        label.classList.add("custom-control-label")
        userName.classList.add("text-nowrap","align-middle")

        tableBody.append(tr);
        tr.append(tdCheck);
        tr.append(userName);
        tdCheck.append(div);
        div.append(input,label)

        let organised = tableBody.children.length;
        console.log(organised);
        input.setAttribute('id','item-'+organised);
        
        label.setAttribute("for",'item-'+organised)
        userName.textContent = user.userName
    }
}
function addUsers(e){
    e.preventDefault()
    const userName = document.querySelector('.name').value.trim();
    const nickname = document.querySelector('.username').value.trim();
    const userEmail = document.querySelector('.email').value.trim();
    const userBio = document.querySelector('.bio').value.trim();

    const newUser = {userName,nickname,userEmail,userBio};

    
    users.push(newUser);
    if(userName.value < 10){
        alert('Invalid username');
    }
    else{
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.modal-backdrop').remove();
    }
    return renderUser();

    

}
document.querySelector('.form__users').addEventListener('submit',addUsers);
renderUser()

$(document).ready( function () {
    $('#dataname').DataTable();
} );