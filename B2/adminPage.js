var sidebar = document.getElementById("side-bar")

function subMenu(x) {
    let subMenu = x.getElementsByClassName("side-bar-menu--link");
    let iconsubMenu = x.getElementsByClassName("side-bar-menu--list");
    for (let i = 0; i < subMenu.length; i++ ) {
        subMenu[i].classList.toggle("sub-menu");
    }
    for (let i = 0; i < iconsubMenu.length; i++ ) {
        iconsubMenu[i].classList.toggle("icon-sub-menu");
    }
}

function mouseMenu() {
    if (sidebar.classList.contains("new-width") == true) {     
        sidebar.style.width = "250px";
        let newMenu = document.getElementsByClassName("newMenu");
        for (let i = 0; i < newMenu.length; i++ ) {
            newMenu[i].style.display = "flex";
        }
    }
}

// function currentTime() {
//   let date = new Date(); 
//   let hh = date.getHours();
//   let mm = date.getMinutes();
//   let ss = date.getSeconds();
//   let session = "AM";

//   if(hh == 0){
//       hh = 12;
//   }
//   if(hh > 12){
//       hh = hh - 12;
//       session = "PM";
//    }

//    hh = (hh < 10) ? "0" + hh : hh;
//    mm = (mm < 10) ? "0" + mm : mm;
//    ss = (ss < 10) ? "0" + ss : ss;
    
//    let time = hh + ":" + mm + ":" + ss + " " + session;

//   document.getElementById("z").innerText = time; 
//   let t = setTimeout(function(){ currentTime() }, 3000);
// }

function outMenu() {
    if (sidebar.classList.contains("new-width") == true) { 
        sidebar.style.width = "60px";
        let newMenu = document.getElementsByClassName("newMenu");
        for (let i = 0; i < newMenu.length; i++ ) {
            newMenu[i].style.display = "none";
        }
    }
}

function toggleMenu() {
    let header = document.getElementsByClassName("side-bar-menu-header");
    let link = document.getElementsByClassName("side-bar-menu--link");
    let linkText = document.getElementsByClassName("side-bar-menu--link__text");
    let list = document.getElementsByClassName("side-bar-menu--list");
    for (let i = 0; i < header.length; i++ ) {
        header[i].classList.toggle("newMenu");
    }
    for (let i = 0; i < link.length; i++ ) {
        link[i].classList.toggle("newMenu");
    }
    for (let i = 0; i < linkText.length; i++ ) {
        linkText[i].classList.toggle("newMenu");
    }
    for (let i = 0; i < list.length; i++ ) {
        list[i].classList.toggle("newMenu");
    }
    sidebar.classList.toggle("new-width")
    var sidebarContent = document.getElementById("sidebarContent");
    sidebarContent.classList.toggle("newSize")
    document.getElementById("menuBtn").classList.toggle("newMenuBtn")
    var width = document.getElementById('side-bar').offsetWidth;
    // var pageZ = document.getElementById("z");
    // if (sidebar.classList.contains("new-width") == true) { 
        // sidebar.onmousemove = function (event) {
        //     pageX.innerText = event.pageX;
        //     // pageY.innerText = event.pageY;
        //     pageY.innerText = event.timeStamp;

        // }
//       
// sidebar.onmouseover = currentTime();


//         sidebar.onmouseout = currentTime();
       
//     }     
//     else {
//         sidebar.onmouseover = function () {
//         }
//         sidebar.onmouseout = function () {
//         };
//     } 


    //  if (sidebar.classList.contains("new-width") == true) { 
    //     subMenu(listGrand)
    //  }
    //     sidebar.onmouseover = function () {
    //         sidebar.style.width = "250px";
    //         sidebar.style.transitionDelay = "0.5s"
    //         let newMenu = document.getElementsByClassName("newMenu");
    //         for (let i = 0; i < newMenu.length; i++ ) {
    //             setTimeout(1);
    //             newMenu[i].style.display = "block";
    //             console.log(newMenu[i])
    //         }
    //     };
    //     sidebar.onmouseout = function () {
    //         sidebar.style.width = "60px";
    //         sidebar.style.transitionDelay = "0s"
    //         let newMenu = document.getElementsByClassName("newMenu");
    //         for (let i = 0; i < newMenu.length; i++ ) {
    //             newMenu[i].style.display = "none";
    //         }
    //     };
    // } else {
    //     sidebar.onmouseover = function () {
    //     }
    //     sidebar.onmouseout = function () {
    //     };
    // }

}


let editingItemIndex = -1;

function infoDialog() {
    const dialog = document.getElementById("dialog");
    dialog.showModal();
}

function submitDialog() {
    let addName = document.getElementById("addName").value;
    let addOtherInformation = document.getElementById("addOtherInformation").value;
    let addStartDate = document.getElementById("addStartDate").value;
    let addEndDate = document.getElementById("addEndDate").value;
    let addUserData = {}
    if (addName && addOtherInformation && addStartDate && addEndDate) {
        userData = {
            name: addName,
            info: addOtherInformation,
            start: addStartDate,
            end: addEndDate,
            valid: true
        }
        if (editingItemIndex !== -1) {
            defaultData[editingItemIndex].name = addName;
            defaultData[editingItemIndex].info = addOtherInformation;
            defaultData[editingItemIndex].start = addStartDate;
            defaultData[editingItemIndex].end = addEndDate;
            defaultData[editingItemIndex].valid = true;
        } else {
            defaultData.push(userData);
        }
        fulfillDataForUserTable(defaultData); 
        editingItemIndex = -1;
        document.getElementById("addName").value = ""
        document.getElementById("addOtherInformation").value = ""
        document.getElementById("addStartDate").value = ""
        document.getElementById("addEndDate").value = ""
    } else {
        alert('All info have to filled!')
    }
}

function editDialog(x) {
    document.getElementById("confirmBtn").style.display = "none";
    document.getElementById("editBtn").style.display = "";
    const dataUserIndex = x.parentElement.rowIndex;
    editingItemIndex = dataUserIndex - 1;
    console.log(dataUserIndex);
    infoDialog();
    document.getElementById("addName").value = defaultData[dataUserIndex-1].name;
    document.getElementById("addOtherInformation").value = defaultData[dataUserIndex-1].info;
    document.getElementById("addStartDate").value = defaultData[dataUserIndex-1].start;
    document.getElementById("addEndDate").value = defaultData[dataUserIndex-1].end;
    for (let key in defaultData[dataUserIndex-1]) {
        defaultData[dataUserIndex-1][key] = "";
    }   
    console.log(defaultData[dataUserIndex-1])
}

function deleteDialog(x) {
    const dataUserIndex = x.parentElement.rowIndex;
    const result = confirm("Want to delete?");
    if (result) {
        x.parentElement.style.display = "none";
        defaultData[dataUserIndex-1].valid = false
        console.log(defaultData[dataUserIndex-1])
    }
}

function resolveRequest(event) {
    console.log('event', event);
    let resolveData = defaultData;
    const filters = [false]
    resolveData = resolveData.filter(obj => filters.includes(obj["valid"]));
    fulfillDataForUserTable(resolveData);
}

var table = document.querySelector("#myTable");

const defaultData = [
    { 
        name: 'user1',
        info: 'ABC',
        start: '03/11/2021',
        end: '11/11/2021',
        valid: true
    }, 
    { 
        name: 'user12',
        info: 'ppp',
        start: '06/11/2021',
        end: '15/12/2021',
        valid: true
    }, 
    { 
        name: 'user3',
        info: 'To chuc',
        start: '20/20/2021',
        end: '01/02/2022',
        valid: true
    },
    { 
        name: 'user4',
        info: 'To chuc',
        start: '20/20/2021',
        end: '01/02/2022',
        valid: true
    },
    { 
        name: 'user5',
        info: 'To chuc',
        start: '20/20/2021',
        end: '01/02/2022',
        valid: true
    },
];

function fulfillDataForUserTable(data = defaultData) {
    const rows = table.rows;
    const rowLength = rows.length;
    for (let index = rowLength - 1; index > 0; index = index - 1) {
        rows[index].remove();
    }
    data.forEach((data) => { 
    const newRow = table.insertRow(rows.length);
    newRow.innerHTML =`
        <td>${data.name}</td>
        <td>${data.info}</td>
        <td>${data.start}</td>
        <td>${data.end}</td>
        <td class="tableIcon" onclick="editDialog(this)"><i <i class="fas fa-pen"></i></td>
        <td class="tableIcon" onclick="deleteDialog(this)"><i class="fas fa-trash-alt"></i></td>
        `
    }) 
}

function filterTable() {
    const nameFiltered = document.getElementById("nameFiltered").value;
    const otherInformationFiltered = document.getElementById("otherInformationFiltered").value;
    const startDateFiltered = document.getElementById("startDateFiltered").value;
    const endDateFiltered = document.getElementById("endDateFiltered").value;
    const shouldFilterOurAllDeletedUsers = document.getElementById("switch-button").checked;
    let newUserData = defaultData;
    if (shouldFilterOurAllDeletedUsers) {
        newUserData = newUserData.filter(user => user.valid);
    }
    if (nameFiltered) {
        newUserData = newUserData.filter(user => user.name.toLowerCase().includes(nameFiltered.toLowerCase()));
    }
    if (otherInformationFiltered) {
        newUserData = newUserData.filter(user => user.info.toLowerCase().includes(otherInformationFiltered.toLowerCase()));
    }
    if (startDateFiltered) {
        newUserData = newUserData.filter(user => user.start.toLowerCase().includes(startDateFiltered.toLowerCase()));
    }
    if (endDateFiltered) {
        newUserData = newUserData.filter(user => user.end.toLowerCase().includes(endDateFiltered.toLowerCase()));
    }
    fulfillDataForUserTable(newUserData);
}
  
