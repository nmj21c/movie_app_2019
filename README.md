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
  package.json 에 homepage 항목 추가 ex) "homepage" : "https://nmj21c.github.id/movie_app_2019"
  URL : https://{github id}.github.io/{repository id} ex) https://nmj21c.github.id/movie_app_2019
  script >> "deploy": "gh-pages -d build"  // -d directory

```