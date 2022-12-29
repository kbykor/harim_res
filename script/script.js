
// 로그인 아이디, 패스워드 검사
 // form태그
document.getElementById('formLogin').addEventListener('submit', function(e){
  e.preventDefault(); // form 태그의 기본 페이지 이동 막기 (로그인을 처리해주는 서버단 페이지가 없기 때문)
  let idText = document.getElementById('id_txt'); // input id
  let pwText = document.getElementById('pw_txt'); // input pw
  if(idText.value == 'master'){
    if(pwText.value == '1234'){
      alert('로그인에 성공하셨습니다!');
      location.href = 'index.html'; // 페이지 이동
    } else {
      alert('로그인에 실패하셨습니다. 다시 로그인해주세요.');
    }
  } else if(idText.value == '' || pwText.value == '') {
    alert('아이디또는 패스워드를 입력하지 않았습니다.');
  } else { // 로그인 실패시
    alert('로그인에 실패하셨습니다. 다시 로그인해주세요.');
  }
});