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