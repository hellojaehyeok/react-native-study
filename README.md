# react-native-study
React Native 관련 저장소입니다.     
지금까지 해왔던 RN을 복습하고 각 기능들을 저장하기 위해 만들었습니다.       

* Sourcetree가 아닌 터미널로 깃 관리

* RN 구조 잡기

* 스타일링

* 상수관리 ex) 색상, 크기 등

* 상태관리

* 자주 사용하는 RN 기능, 로직 저장


<br /><br />

### Sourcetree가 아닌 터미널로 깃 관리
---
<strong>branch</strong>

* main
* style -> 스타일링
* development -> 개발


<br /><br />

### RN 구조 잡기
---
구조 관련 정리 : https://talkwithcode.tistory.com/49            
스크인 이동 정리 : https://talkwithcode.tistory.com/50?category=1019862

"Nesting navigators" 방식으로 진행했습니다.       
내비게이터 안에 내비게이터가 있는 구조로 이번 프로젝트는           
Stack Navigator 안에 Tab Navigator를 넣었습니다.      

공식 문서 : https://reactnavigation.org/docs/nesting-navigators/


### 스타일링
`react-native-extended-stylesheet`라이브러리를 사용하여 스타일링을 진행했습니다.        
RN에서 제공하는 방식보다 확장성이 좋아 사용하게 되었습니다.       


<br /><br />

### * 상수관리 ex)색상, 크기 등
constant파일 안에 js파일을 만들어 export 하였습니다.       
이렇게 되면 추후 유지보수/추가개발을 들어갔을 때 편해지고 확장성 또한 좋아집니다.

현재 constant 파일입니다.       
* constant
    * color.js -> 스타일링시 필요한 색상 코드입니다.
    * size.js -> 자주 사용하는 사이즈를 넣었습니다. ex) 화면 사이즈(vw, vh)

