// emoji-item과 category-item이 선택되었는지 여부를 저장하는 변수들
let emojiSelected = false;
let categorySelected = false;

// emoji-item을 클릭했을 때의 이벤트 핸들러
const emojiItems = document.querySelectorAll('.emoji-item');
emojiItems.forEach(item => {
    item.addEventListener('click', function() {
        emojiSelected = true;
        checkSelectionAndClosePopup();
    });
});

// category-item을 클릭했을 때의 이벤트 핸들러
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('click', function() {
        categorySelected = true;
        checkSelectionAndClosePopup();
    });
});

// emoji-item과 category-item이 모두 선택되었는지 확인하고 팝업을 닫는 함수
function checkSelectionAndClosePopup() {
    if (emojiSelected && categorySelected) {
        closePopup();
    }
}

// 팝업을 닫는 함수 (여기에 실제 팝업을 닫는 동작을 추가하세요)
function closePopup() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none'; // 팝업을 숨기는 예제 코드, 실제로는 팝업을 닫는 로직을 추가하세요.
    console.log('팝업이 닫혔습니다.');
}

// emoji-item을 클릭했을 때의 이벤트 핸들러
// const emojiItems = document.querySelectorAll('.emoji-item');
emojiItems.forEach(item => {
    item.addEventListener('click', function() {
        // 모든 emoji-item의 배경색 초기화
        emojiItems.forEach(item => {
            item.style.backgroundColor = '';
        });
        // 클릭한 emoji-item의 배경색 변경
        this.style.backgroundColor = 'var(--main-color)';
        this.style.borderRadius = '50px';
        // emoji 선택 여부 변수 설정
        emojiSelected = true;
        checkSelectionAndClosePopup();
    });
});

// const btnUpload = document.getElementsByClassName("upload");
// btnUpload.addEventListener('click', function() {
//     window.location.href="index.html";
//     /* calendar.js 에서 클릭한 날짜를 가져오기 */
//     /* 업로드 버튼을 누르면 index.html에 가져온 날짜 배경화면을 흰색으로 바꾸기 */
// });

document.addEventListener("DOMContentLoaded", function() {
    const selectedDate = localStorage.getItem("selectedDate");
    
    if (selectedDate) {
        const dataItems = document.querySelectorAll(".date.item");
    let selectedDates = JSON.parse(localStorage.getItem("selectedDates")) || [];

    // 초기에 선택한 날짜에 스타일을 적용
        dataItems.forEach(item => {
            item.style.backgroundColor = "white";
            item.style.borderRadius = "10px";
        });
    }
    const backButton = document.querySelector(".upload");
    backButton.addEventListener("click", function() {
        localStorage.removeItem("selectedDate"); // 이전에 선택한 날짜 삭제
        window.location.href = "index2.html"; // index.html로 이동
    });
});

// 꿈일기 입력 요소를 선택합니다.
const dreamBox = document.getElementById('dream-box');
const uploadButton = document.querySelector('.upload');

// 로컬 스토리지에서 데이터를 불러와 꿈일기 입력 요소에 설정합니다.
if (localStorage.getItem('dream')) {
    dreamBox.value = localStorage.getItem('dream');
}

// 입력된 꿈일기를 로컬 스토리지에 저장하는 함수
function saveDreamToLocalStorage() {
    const dreamText = dreamBox.value;
    localStorage.setItem('dream', dreamText);
}

// "일기 업로드" 버튼에 대한 클릭 이벤트 리스너를 추가합니다.
uploadButton.addEventListener('click', function() {
    // 입력된 꿈일기를 로컬 스토리지에 저장합니다.
    saveDreamToLocalStorage();
    // alert('일기가 업로드되었습니다.'); // 업로드 완료 메시지를 띄울 수 있습니다.
});