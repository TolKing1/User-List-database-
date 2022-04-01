const tableBody = document.querySelector(".table__body");
// const tableD = document.querySelector()



function renderUser(){
    for(user of users){
        const [tr,tdCheck,div,input,label,userName] = createElements("tr","td","div","input","label" ,"td");
        tr.classList.add("table__row");
        tdCheck.classList.add("align-middle");
        div.classList.add('custom-control', 'custom-control-inline', 'custom-checkbox', 'custom-control-nameless', '-0', 'align-top');
        input.classList.add("custom-control-input");
        input.setAttribute("type",'checkbox');
        label.classList.add("custom-control-label")
        userName.classList.add("text-nowrap","align-middle")

        tableBody.append(tr);
        tr.append(tdCheck);
        tr.append(userName);
        tdCheck.append(input,label);

        userName.textContent = user.userName
    }
}
renderUser()