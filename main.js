// Empty Array
let emptArr = [];

let flag;

// Toogle Closing button-1
function togClose() {
    var main = document.querySelector(".main");
    main.classList.toggle("active");
    var pop1 = document.querySelector("#pop1");
    pop1.classList.toggle("active");
}

// Toogle Closing button-2
function togClose2(arg) {
    if ( arg !== false) {
        let elmt = Number(arg.parentNode.parentNode.id);
        let main = document.querySelector(".main");
        main.classList.toggle("active");
        let pop2 = document.querySelector("#pop2");
        pop2.classList.toggle("active");
        flag = elmt;
    } else {
        let main = document.querySelector(".main");
        main.classList.toggle("active");
        let pop2 = document.querySelector("#pop2");
        pop2.classList.toggle("active");
    }
}

// Add ToDo button
function todoAdd() {
    let intHead = document.querySelector('#pop1-input').value;
    if (intHead !== "") {
        let Temptodo = { title : intHead, id : Date.now() }
        emptArr.push(Temptodo);
        console.log(emptArr);
        const empt = document.querySelector('.noItem');
        empt.style.display = 'none';
    } else {
        window.alert("Invalid Name");
        window.alert("Enter Name of TODO");
    }
    togClose();
    tabs();
}

// Create Tab for Todo List
function tabs() {
    let tab = document.createElement('div');
    let tab2 = document.querySelector('.que');
    tab.setAttribute('class' , 'tab2');
    for (let idx = 0; idx<emptArr.length; idx++) {
        let tab3 = emptArr[idx];
        tab.setAttribute('id' , tab3.id);
        tab.innerHTML = `<p class="head3">${tab3.title}</p>
        <hr class="hr">
        <div class="subList2"></div><br>
        <div class="btn2">
        <button onclick="clearTodo(this)" id="btn-2"><i class="fas fa-trash-alt" id="delete"></i></button>
        <button onclick="togClose2(this)" id="btn-2"><i class="fas fa-plus-circle" id="plus"></i></button>
        </div>`;
        tab2.appendChild(tab);
    }
}

// Add Sublists in Todo tab
function addsubList(sub_list) {
    let subList = document.querySelector('#subList').value;
    let tab = document.querySelector('.que').children;
    for(let idx = 0; idx < emptArr.length; idx++) {
        let elm = tab[idx];
        let elm2 = elm.children[2];
        let elm3 = emptArr[idx];
        if(elm3.id === flag) {
            if(subList !== "") {
                let lst = document.createElement('div');
                lst.setAttribute('class' , 'list1');
                lst.setAttribute('id' , flag+1);
                lst.innerHTML=`<p class="subList3">${subList}</p>
                <p class="markCut" onclick="lineMark(this)">Mark</p>`;
                elm2.appendChild(lst);
            }
            else {
                window.alert("Invalid Name");
                window.alert("Enter Name of Item");
            }
            break;
        }
    }
    togClose2(false);
}

// Deleting Todo Tab
function clearTodo(arg) {
    let clear = arg.parentNode.parentNode;
    const clear1 = Number(arg.parentNode.parentNode.id);
    for(let idx = 0; idx < emptArr.length; idx++) {
        let c = emptArr[idx];
        if(c.id === clear1) {
            emptArr.splice(idx , 1);
            break;
        }
    }
    clear.remove(clear);
    if(emptArr.length == 0) {
      const empty = document.querySelector('.noItem');
      empty.style.display = 'block';
    }
}

// Line-marking of sublist
function lineMark(line) {
    let ln1 = line.parentNode;
    let ln2 = line.parentNode.children[0];
    let ln3 = line.parentNode.children[1];
    const i = Number(ln1.id) - 1;
    for(let idx = 0; idx < emptArr.length; idx++) {
        let ln1 = emptArr[idx];
        if(ln1.id === i) {
            ln3.style.display = 'none';
            ln2.style.color = 'red';
            ln2.style.textDecoration = 'line-through';
            ln2.style.textDecorationColor = 'red';
            break;
        }
    }
}