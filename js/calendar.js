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
            window.location.href = "diary.html";
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
            window.location.href = "diary.html";
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
            window.location.href = "diary.html";
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
            localStorage.setItem("selectedDate", date);
            window.location.href = "diary.html";
        });
    });
});