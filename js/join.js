// 회원가입 함수
function registerUser() {
    const name = document.getElementById('name-input').value;
    const id = document.getElementById('id-input').value;
    const pw = document.getElementById('pw-input').value;
    const mailId = document.getElementById('mail-id-input').value;
    const mailDomain = document.getElementById('selbox').value;

    // 유효성 검사 (생략 가능)
    if (!name || !id || !pw || !mailId || !mailDomain) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    // 사용자 정보 객체 생성
    const user = {
        name: name,
        id: id,
        password: pw,
        email: `${mailId}@${mailDomain}`,
    };

    // 로컬 스토리지에서 저장된 사용자 정보 가져오기
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 아이디 중복 확인
    const existingUser = users.find(u => u.id === id);
    if (existingUser) {
        alert('이미 존재하는 아이디입니다. 다른 아이디를 입력해주세요.');
        return;
    }

    // 사용자 정보 추가
    users.push(user);

    // 로컬 스토리지에 사용자 정보 저장
    localStorage.setItem('users', JSON.stringify(users));

    alert('회원가입이 완료되었습니다!');
    window.location.href = 'index.html'; // 회원가입 후 페이지로 이동
}