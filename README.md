# first_vue

vue.js를 처음 만났을 때 겪은 삽질 기록보관소

### Reactivity

- html 문서의 요소가 변경될때마다 바로 변경된 문서를 보여준다

### instance

- Vue를 쓴다 -> Vue 인스턴스를 사용하게 된다
- 즉, Vue()에 구현된 속성과 API를 사용하게 된다
- Vue() 안에 객체 리터럴 형태로 넣는다

```javascript
new Vue({
	el: ,
	template: ,
	data: ,
	method: ,
	created: ,
	watch: ,
	...
});
```

### component

- 화면의 영역을 컴포넌트로 구분하여 개발하게 된다
- 재사용성이 올라가고 빠르게 화면 제작이 가능하다

```javascript
//전역 컴포넌트
Vue.component('컴포넌트 이름', '컴포넌트 내용');

//지역 컴포넌트
new Vue({
	el: '#app',
	components: {
		'컴포넌트 이름': '컴포넌트 내용'
	},
	...
});
```

### 전역 컴포넌트 vs 지역 컴포넌트

- 지역 컴포넌트 -> components (<- 끝에 s 들어감)
- why? 컴포넌트를 여러개 등록하게 되기 때문
- 전역 컴포넌트는 대부분 플러그인이나 라이브러리 형태로 글로벌하게 하나만 사용

### 컴포넌트간 규칙

- 단방향 (추적 용이)
- 상위 컴포넌트 -> 하위 컴포넌트 : props 전달
- 하위 컴포넌트 -> 상위 컴포넌트 : 이벤트 전달

### 같은 레벨의 컴포넌트간 데이터 전달
- 컴포넌트 -> 컴포넌트 : 다이렉트로 데이터 전달 불가능
- 상위 컴포넌트로 데이터를 올리고 상위 -> 하위 컴포넌트로 데이터를 내려줘야 함
- 하위 -> 상위 (이벤트 전달) -> 하위 (props 전달)

### Vue-Router
- vue scipt 외에 router 스크립트 하나 더 필요
```html
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```
- 라우터 연결
```javascript
const vm = new Vue({
  el: '#app',
  router: router
});
```
- router-view : 마치 백엔드 코딩할때 url 라우팅 기능 처럼 path 하나당 컴포넌트 하나로 바로 보여줌
```javascript
const LoginComponent = {
  template: '<div>login</div>'
}
const MainComponent = {
  template: '<div>main</div>'
}

const router = new VueRouter({
  routes: [
    {
      path:'/login',
      // component's' 가 아니다 (path 하나당 한가지 컴포넌트 라우팅)
      component: LoginComponent,
    },
    {
      path:'/main',
      component: MainComponent,
    },
  ]
});
```  
- router-link : 사용자는 url을 직접 치고 오지 않고 링크로 들어옴(내부적으로 a tag)
```html
<div id="app">
    <div>
      # router-link : 내부적으로 a tag 링크 생성
      <router-link to="/login">Login</router-link>
      <router-link to="/main">Main</router-link>
    </div>
    <router-view></router-view>
  </div>
```
