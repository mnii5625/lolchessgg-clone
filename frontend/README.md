# FRONTEND

#### START : 2022/04/14 ~

* USE  
  * React  
  * Next.js 
<hr>

### 2022/04/14  프로젝트 세팅 & Header Layout 제작  

Next.js & TypeScript 설치
```
npx create-next-app --typescript
```

Next.js 명령어
```
npm run dev : 핫 다시 로드, 파일 감시 및 작업 재실행을 통해 개발 인스턴스 실행
npm run build : 프로젝트 컴파일
npm start : 프로덕션 모드에서 앱 시작
```

삼항 연산자  
if else 처럼 사용 가능
```
condition ? exprIfTrue : exprIfFalse

condition : 조건문  
exprIfTrue : 참일 때 실행할 식  
exprIfFalse : 거짓일 때 실행할 식
```

#### Next component

```
next/link
import Link from "next/link";
<Link></Link>
```

- 주의사항  
태그 속 자식은 하나만  
여러 자식을 사용하려면 Link 태그 안에 <a> 태그 삽입 후 안에 작성

```
next/image
import Image from "next/image";

<Image 
    src = {url}
    width = {100}
    height = {100}
    alt = {text}
/>  
```







<hr>

참고영상  
https://www.youtube.com/watch?v=pdWQvfQBSGg&t=2160s&ab_channel=데브리
