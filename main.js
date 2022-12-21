const input_box = document.querySelector('#input');
const plus_btn = document.querySelector('#plus_btn');
const caution_msg = document.querySelector('.caution_msg');
const content = document.querySelector('#content');
const item_box = document.querySelector('.itemBox');
var count = 1; // item 개수 초과 방지를 위한 변수

plus_btn.addEventListener('click', () => { // plus 버튼 클릭 시 item 추가
    if (input_box.value == '') { // 빈 문자열일 시 팝업 메시지 출력
        caution_msg.textContent = "Empty Text!";
        caution_msg.style.visibility = "visible";
        caution_msg.classList.add('pop');
        setTimeout(() => {
            caution_msg.style.visibility = "hidden";
            caution_msg.classList.remove('pop');
        }, 500
        );
    }
    else if (count >= 15) {
        caution_msg.textContent = "Too many items!";
        caution_msg.style.visibility = "visible";
        caution_msg.classList.add('pop');
        setTimeout(() => {
            caution_msg.style.visibility = "hidden";
            caution_msg.classList.remove('pop');1
        }, 500
        );
    }
    else {
        createItemBox();
    }
    input_box.value = '';
});

const check_btn = document.querySelector('#check_btn');

check_btn.addEventListener('click', function (e) { // 초기 버튼 삭제
    check_btn.style.color = 'rgb(0, 255, 60)';
    check_btn.parentNode.parentNode.style.transition='all 200ms ease-out';
    check_btn.parentNode.parentNode.style.opacity='30%';
    check_btn.parentNode.parentNode.style.transform='translateX(-180px)';
    setTimeout(() => {
        check_btn.parentNode.parentNode.remove();
    }, 190)
    count--;
});



input_box.addEventListener("keydown", function (event) { // 엔터로 추가하기 기능
    if (event.isComposing == false) {
        if (event.code === 'Enter') {
            if (input_box.value == '') { // 빈 문자열일 시 팝업 메시지 출력
                caution_msg.textContent = "Empty Text!";
                caution_msg.style.visibility = "visible";
                caution_msg.classList.add('pop');
                setTimeout(() => {
                    caution_msg.style.visibility = "hidden";
                    caution_msg.classList.remove('pop');
                }, 500
                );
            }
            else if (count >= 15) {
                caution_msg.textContent = "Too many items!";
                caution_msg.style.visibility = "visible";
                caution_msg.classList.add('pop');
                setTimeout(() => {
                    caution_msg.style.visibility = "hidden";
                    caution_msg.classList.remove('pop');
                }, 500
                );
            }
            else {
                createItemBox();
            }
            input_box.value = '';
        }
    }
});


function createItemBox(){ // ItemBox 생성
    const msg = input_box.value;
        var itemBox = document.createElement('li');
        itemBox.classList.add('itemBox');
        var h2 = document.createElement('h2');
        h2.classList.add('item_title');
        h2.textContent = msg;
        input_box.value = null;
        var list = document.createElement('list');
        var trash_btn = document.createElement('button');
        trash_btn.classList.add('fa');
        trash_btn.classList.add('fa-trash');
        trash_btn.setAttribute('id', 'trash_btn');
        var check_btn = document.createElement('button');
        check_btn.classList.add('fa');
        check_btn.classList.add('fa-check');
        check_btn.setAttribute('isChecked', false);
        check_btn.setAttribute('id','check_btn');
        list.append(check_btn);
        list.append(trash_btn);
        addRemove(trash_btn);
        addCheck(check_btn);
        itemBox.append(h2);
        itemBox.append(list);
        content.append(itemBox);
        count++;
}

function addRemove(btn) { // 버튼 클릭 시 지우기
    btn.addEventListener('click', function (e) {
        btn.parentNode.parentNode.style.transition='all 200ms ease-out';
        btn.parentNode.parentNode.style.opacity='30%';
        btn.parentNode.parentNode.style.transform='translateX(-180px)'; // 삭제 애니메이션 추가
        setTimeout(() => {
            btn.parentNode.parentNode.remove();
        }, 190)
        count--;
    });
}

function addCheck(btn) {
    btn.addEventListener('click', function (e) {
        if (btn.attributes[1].value == 'false') {
            btn.style.color = 'rgb(0, 255, 60)';
            btn.attributes[1].value = 'true';
        }
        else {
            btn.style.color = 'rgb(167, 138, 104)';
            btn.attributes[1].value = 'false';
        }
    });

}


