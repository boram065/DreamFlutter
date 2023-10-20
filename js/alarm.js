// plus-icon 클래스를 가진 요소를 찾습니다.
var plusIcon = document.querySelector('#plusicon');

// 팝업을 나타내는 함수를 정의합니다.
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// plus-icon을 클릭하면 팝업을 나타내도록 이벤트 리스너를 추가합니다.
plusIcon.addEventListener('click', showPopup);

// 팝업 바깥을 클릭하면 팝업을 닫는 함수를 정의합니다.
function hidePopup(event) {
    if (event.target === document.getElementById('popup') || event.target === document.getElementById('x-icon')) {
        document.getElementById('popup').style.display = 'none';
        // document.getElementById('x-icon').style.display = 'none';
    }
}

// 팝업 바깥을 클릭하면 팝업을 닫도록 이벤트 리스너를 추가합니다.
document.getElementById('popup').addEventListener('click', hidePopup);
document.getElementById('x-icon').addEventListener('click', hidePopup);

function toggleTime() {
    const timeText = document.getElementById('timeText');
    // 현재 텍스트를 확인하고 반대로 변경합니다.
    if (timeText.textContent === '오전') {
        timeText.textContent = '오후';
    } else {
        timeText.textContent = '오전';
    }
}

// select-time-text 클래스를 가진 요소를 클릭하면 toggleTime 함수가 실행되도록 이벤트 리스너를 추가합니다.
document.querySelector('.select-time-text').addEventListener('click', toggleTime);

// 버튼 요소들을 선택합니다.
const buttons = document.querySelectorAll('.sleep-btn');

// 각 버튼에 대한 클릭 이벤트 리스너를 추가합니다.
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(item => {
            item.style.backgroundColor = '';
            item.style.color = '';
        });
        // 현재 클릭한 버튼의 배경색을 변경합니다.
        this.style.backgroundColor = 'var(--main-color)';
        this.style.color = 'white';
    });
});

// "check" 버튼에 대한 클릭 이벤트 리스너를 추가합니다.
document.getElementById('check').addEventListener('click', function() {
    // jjajan 클래스를 가진 요소들의 스타일을 변경하여 화면에 보이게 만듭니다.
    const jjajanElements = document.querySelectorAll('.jjajan');
    jjajanElements.forEach(element => {
        element.style.display = 'block';
    });
});

const okButton = document.querySelector('.ok');
const popupElement = document.getElementById('popup');
const time2Element = document.querySelector('.time2');

// "ok" 버튼에 대한 클릭 이벤트 리스너를 추가합니다.
okButton.addEventListener('click', function() {
    // ".popup" 클래스를 가진 요소의 display 속성을 'none'으로 설정하여 팝업을 숨깁니다.
    if (popupElement) {
        popupElement.style.display = 'none';
    }

    // ".time2" 클래스를 가진 요소의 display 속성을 'block'으로 설정하여 화면에 보이게 합니다.
    if (time2Element) {
        time2Element.style.display = 'block';
    }
});

const pre = document.querySelector('.pre');
pre.addEventListener('click', function() {
    // jjajan 클래스를 가진 요소들의 스타일을 변경하여 화면에 보이게 만듭니다.
    const jjajanElements = document.querySelectorAll('.jjajan');
    jjajanElements.forEach(element => {
        element.style.display = 'block';
    });
});