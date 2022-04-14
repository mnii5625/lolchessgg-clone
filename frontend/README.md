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
```typescript
condition ? exprIfTrue : exprIfFalse

condition : 조건문  
exprIfTrue : 참일 때 실행할 식  
exprIfFalse : 거짓일 때 실행할 식
```

#### Next component

```typescript
next/link
import Link from "next/link";
<Link>
    <a>
    </a>
</Link>
```

- 주의사항  
태그 속 자식은 하나만  

```typescript
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

### 2022/04/15  Main Top Layout 제작 & 메타 Component 제작 시작

#### TypeScript 

```typescript
let a: string = 'text'; // 문자열
let b: number = 0; // 숫자형
let c: boolena = true; // 논리형
let d: any = true; // 어떤 타입이 올지 모를 때
let e: string | number = '0'; // 문자열이나 숫자
let f: string[] = ['a', 'b', 'c']
```
```typescript
Function
function sum(a: number, b: number): number {
    return a + b;
}
```
```typescript
Object
let user: { name: string, age: number } = {
    name : 'a',
    age : 20
};
```
```typescript
Custom Type
type Name = {
    a : string,
    b : number
}
```
#### CSS 
```css
SELECTER
.className[title = "gold"]
AND
.className1.className2{ }
OR
.className1 .className2{ }
```
```html
Class 여러개 적용법
<div className= {`${class1} ${class2}`}> </div>
```
 






<hr>

참고영상  
https://www.youtube.com/watch?v=pdWQvfQBSGg&t=2160s&ab_channel=데브리
