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

document.addEventListener("DOMContentLoaded", function() {
    const dataItems = document.querySelectorAll(".date.item");
    let selectedDates = JSON.parse(localStorage.getItem("selectedDates")) || [];

    // 초기에 선택한 날짜에 스타일을 적용
    dataItems.forEach(item => {
        const date = parseInt(item.innerHTML);
        if (selectedDates.includes(date)) {
            console.log(item);
            item.style.color = "#000000";
        }
    });

    // 업로드 버튼 클릭 이벤트 처리
    const backButton = document.querySelector(".upload");
    backButton.addEventListener("click", function() {
        dataItems.forEach(item => {
            const date = parseInt(item.innerHTML);

            item.addEventListener("click", function() {
                // 현재 클릭한 날짜 스타일 적용
                item.style.backgroundColor = "white";
                item.style.borderRadius = "20px";

                // 선택한 날짜 배열에 추가
                if (!selectedDates.includes(date)) {
                    selectedDates.push(date);
                }

                // 선택한 날짜 목록을 로컬 스토리지에 저장
                localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
            });
        });

        window.location.href = "index.html"; // index.html로 이동
    });
});