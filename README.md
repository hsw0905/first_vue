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
	}
	...
});
```

### 전역 컴포넌트 vs 지역 컴포넌트

- 지역 컴포넌트 -> components (s 들어감)
- why? 컴포넌트를 여러개 등록하게 되기 때문
- 전역 컴포넌트는 대부분 플러그인이나 라이브러리 형태로 글로벌하게 하나만 사용

### 컴포넌트간 규칙

- 단방향 (추적 용이)
- 상위 컴포넌트 -> 하위 컴포넌트 : props 전달
- 하위 컴포넌트 -> 상위 컴포넌트 : 이벤트 전달
