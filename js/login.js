const btn = document.getElementsByClassName('login-btn');
// 로그인 함수
function login() {
    const id = document.getElementById('id-input').value;
    const pw = document.getElementById('pw-input').value;

    // 로컬 스토리지에서 저장된 사용자 정보 가져오기
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 사용자 확인
    const user = users.find(u => u.id === id && u.password === pw);

    if (user) {
        // 로그인 성공
        alert('로그인 성공!');
        // 로그인 후 페이지로 이동하거나 다른 작업을 수행할 수 있습니다.
        // 예를 들어, 로그인 후의 페이지로 이동하는 코드를 추가할 수 있습니다.
        window.location.href = 'index.html';
    } else {
        // 로그인 실패
        alert('로그인 실패. 올바른 아이디와 비밀번호를 입력하세요.');
    }
}