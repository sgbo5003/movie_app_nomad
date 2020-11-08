# Movie App 2020

# 2020/11/03

### ReactJS로 영화 웹 서비스 만들기 시작!

## 리액트 설정

### **리액트 앱 만들기**

> npx create-react-app 폴더명

### **깃허브 연동**

> git init

> git remote add origin https://github.com/sgbo5003/movie_app_nomad.git

> git add

> git config user.email "sgbo5003@naver.com"

> git config user.name "sgbo5003"

> git commit -m "#1.0 Createing my first React App"

> git push

### **JSX & Props**

react application은 한 번에 **하나의** component만 rendering 할 수 있다.

**JSX = Javascript + html**

**component**는 **대문자**로 시작해야하고, **component**로 **정보**를 보낼 수 있다.

**PropTypes**

React **입력 타입 체크**

# 11/04 공부내용

## **03 STATE**

**state**는 **object**이고 **component**의 **data**를 넣을 **공간**이 있고 이 데이터는 **변한다.**

**set.state**를 호출 할 때마다 **react**는 다시 **render**한다.

## **Component life cycle**

**render()함수** : 화면에 그려준다.

**componentDidMount()함수** : render()함수가 화면에 다 그린 이후 호출되는 함수

**componentDidUpdate()함수** : 업데이트를 한 뒤에 호출되는 함수

**componentWillUnmount()함수** : 컴포넌트가 떠날 때 호출되는 함수

# 11/05 공부내용

## **04 MAKING THE MOVIE APP**

**state**를 이용하기위해서 **class component**를 사용한다.

**object**를 풀어줄 때 **map함수**를 사용하고, 또, **jsx**에서는 **props**를 통해서 값을 전달합니다. **key**는 표현되지 않지만 **필수props**이다.

# 11/07 공부내용

## **04 MAKING THE MOVIE APP**

css 파일을 **import** 해 스타일 입히기(Movie.css, App.css)

**slice(0, 값)** 을 이용해 배열 **자르기** (원하는 부분까지 출력 하기 위해)

ex)

```
summary.slice(0, 180)
```

# 11/08 공부내용

## **05 Deploying to Github Pages**

### **gh-pages 설치**

**gh-pages**는 나의 웹사이트를 github의 **github page 도메인**에 나타나게 해준다.

### **홈페이지 양식**

https://{your github username}.github.io/{the name of your project in github}

**(소문자 이어야하고, 띄어쓰기 x)**

**npm run build** : **build 폴더**를 얻는 방법

deploy : build 폴더를 upload 한다.

### **<생성 순서>**

먼저 **npm i gh-pages**로 설치 **>** **package.JSON**에 **homepage**를 넣는다 **>** **deploy** 와 **predeploy** 를 만든다

내 주소 : https://sgbo5003.github.io/movie_app_nomad/
