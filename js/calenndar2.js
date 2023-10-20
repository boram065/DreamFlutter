var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];

const setCalendar = (year, month) => {
    var titleMonthDiv = document.getElementsByClassName("month")[0];
    var firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // 첫째 날의 요일
    var lastMonthLastDate = new Date(year, month - 1, 0).getDate(); // 이전 달의 마지막 날짜

    titleMonthDiv.innerHTML = `${month}월`;
    datesContainerDiv.innerHTML = "";

    // 이전 달에서 보여줄 날 수를 계산
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        let dateItemDiv = document.createElement("div");
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.classList.add("previous-month");
        dateItemDiv.innerHTML = lastMonthLastDate - i;

        dateItemDiv.addEventListener("click", function() {
            console.log(`클릭한 날짜: ${year}-${month - 1}-${lastMonthLastDate - i}`);
            window.location.href = "diary2.html";
        });
        datesContainerDiv.appendChild(dateItemDiv);
    }

    var thisMonthLastDate = new Date(year, month, 0).getDate();
    for (let date = 1; date <= thisMonthLastDate; date++) {
        let dateItemDiv = document.createElement("div");
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.innerHTML = date;

        dateItemDiv.addEventListener("click", function() {
            console.log(`클릭한 날짜: ${year}-${month}-${date}`);
            window.location.href = "diary2.html";
        });
        datesContainerDiv.appendChild(dateItemDiv);
    }

    // 다음 달에서 보여줄 날 수를 계산
    var remainingDays = 35 - (thisMonthLastDate + firstDayOfWeek);
    for (let i = 1; i <= remainingDays; i++) {
        let dateItemDiv = document.createElement("div");
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.classList.add("next-month");
        dateItemDiv.innerHTML = i;

        dateItemDiv.addEventListener("click", function() {
            console.log(`클릭한 날짜: ${year}-${month + 1}-${i}`);
            window.location.href = "diary2.html";
        });
        datesContainerDiv.appendChild(dateItemDiv);
    }
}
setCalendar(year, month);

const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    if (month === 0) {
        year--;
        month = 12;
    }
    setCalendar(year, month);
}

let rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if (month === 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
}

document.addEventListener("DOMContentLoaded", function() {
    const dataItems = document.querySelectorAll(".date.item");
    
    dataItems.forEach(item => {
        item.addEventListener("click", function() {
            const date = parseInt(item.innerHTML);
            localStorage.setItem("genre", date);
            window.location.href = "diary2.html";
        });
    });
});

// let clickCount = 0; // 누른 횟수를 저장할 변수

// dataItems.forEach(item => {
//     item.addEventListener("click", function() {
//         clickCount++; // 클릭할 때마다 횟수 증가

//         // 두 번째로 눌렸을 때 diary2.html로 이동
//         if (clickCount === 2) {
//             window.location.href = "diary2.html";
//         } else {
//             // 아직 두 번째로 누르지 않은 경우 diary.html로 이동
//             const date = parseInt(item.innerHTML);
//             const diaryContent = document.getElementById("diary-textarea").value;

//             localStorage.setItem("selectedDate", date);
//             localStorage.setItem("diaryContent", diaryContent);
//             window.location.href = "diary.html";
//         }
//     });
// });

// 요소를 선택합니다.
// const dateElement = document.querySelector('.date.item');

// // .date.item을 클릭했을 때 diary2.html 페이지로 이동합니다.
// dateElement.addEventListener('click', function() {
//     // "genre" 키값을 로컬 스토리지에 저장합니다.
//     localStorage.setItem('genre', '4');
    
//     // 저장된 "genre" 값을 콘솔에 출력하여 확인합니다.
//     console.log(localStorage.getItem('genre'));

//     // diary2.html 페이지로 이동합니다.
//     window.location.href = 'diary2.html';
// });
// // 로컬 스토리지에서 "genre" 키값을 가져옵니다.
// const genreValue = localStorage.getItem('genre');
// console.log(genreValue);

// // 요소를 선택합니다.
// const dateElement = document.querySelector('.date.item');

// // .date.item을 클릭했을 때 diary2.html 페이지로 이동합니다.
// dateElement.addEventListener('click', function() {
//     // "genre" 키값이 이미 존재한다면 diary2.html 페이지로 이동합니다.
//     if (genreValue !== null) {
//         window.location.href = 'diary2.html';
//     } else {
//         // "genre" 키값을 저장하고 diary2.html 페이지로 이동합니다.
//         localStorage.setItem('genre', 'value');
//         window.location.href = 'diary2.html';
//     }
// });