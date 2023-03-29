# momentum
Javascript를 사용하여 Chrome Extention Momentum 클론코딩


--------------------------------------------------------

작업기간 : 03.20 - 03.29<br>
기술스택 : Javascript, html, CSS
<br>
<br>


## 주요 기능

> **login.js**
```
- submit event가 발생할 시, localstorage에 유저 정보 저장
- 유저 정보 저장 유무에 따라 기존의 form을 hidden, 이후 greeting message를 보이게 함
```

> **todo.js**
```
- 유저로부터 submit된 value를 localstorage에 string화한 객체(id와 todo)배열로 저장
- localstorage에 저장된 데이터 유지
- todo-list 추가 및 삭제 기능
```

> **time.js**
```
- Date 객체를 사용하여 현재 시간,분,초 호출
- setInterval() 일정주기로 실행되는 타이머 설정
- padStart()로 타이머 문자열 자릿수 설정
```

> **background.js + quotes.js**
```
Math.floor(), Math.random() 메소드를 호출하여 랜덤으로 화면에 출력
```

> **weather.js**
```
openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현
```
