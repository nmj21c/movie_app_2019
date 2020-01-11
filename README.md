# Movie app 2019

## Desc
- npm create-react-app ${app-name} --typescript (타입스크립트로 만들수 있지만 비추)
- yarn add prop-types : 값 형식 검증
- state는 변동되는 데이터를 넣을 것
- mounting(생겨날때), unmounting(죽을때, 화면이 바뀔때 등), updating(업데이트될때)
- yarn add axios : fetch 헬퍼
- yarn add gh-pages : cloud upload
```
  github static web 제공
  프로젝트 네임은 소문자로 입력
  package.json 에 homepage 항목 추가 ex) "homepage" : "https://nmj21c.github.io/movie_app_2019"
  URL : https://{github id}.github.io/{repository id} ex) https://nmj21c.github.io/movie_app_2019
  script >> "deploy": "gh-pages -d build"  // -d directory
```
- yarn add react-router-dom
```
HashRouter  : url/#/routername
BrowserRoutner : url/routername ( github page 에서 추가 설정이 필요함)
Route:  (path: 인실할 path, component: path 에 연결될 컴포넌트, exact : 정확이 path가 일치해야 하는 여부)
Link to="" : 페이지 이동 시 사용 <Link to="/">Home</Link>  , import {Link } from "react-router-dom", (Router 안의 Component에서만 사용 가능)
Link to={{pathname="/pahtname", state: { data...}}} 형태도 가능
props > location > state 에서 꺼낼 수 있음
Router 사용시 redirect는 props 의 history 의 push 메서드를 사용하면 된다. this.props.history.push("/home")
path 에 :변수 를 사용해도 무방 ex) /movie/:id 
```