//투두리스트에 필요한 state들이 모두 모여있을 todos.js

// Action Value

// Action Creator

// Initial State

// Reducer

// export default reducer


//Action Creator
// value는 상수로 생성
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const LIST_TODO = "LIST_TODO";

// 액션객체를 반환하는 함수 생성
// export 가 붙는 이유는 addTodo()는 밖으로 나가서 사용될 예정이기 때문입니다.
export const addTodo = (payload) => {
	
  return { type: ADD_TODO, payload };
	// type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원), payload는 목적어
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};


export const updateTodo = (payload) => {
  return { type:UPDATE_TODO, payload };
};

export const listTodo = (payload) => {
  return { type:LIST_TODO, payload };
};




// 초기 상태값
const initialState = {
	todos: [],
};

// 리듀서//값 수정은 리듀서에서 일어난다
//리듀서가 액션객체를 받아 상태를 바꾸는 원리는 아래와 같습니다.

// 1. 컴포넌트로부터 dispatch를 통해 액션객체를 전달 받는다.
// 2. action 안에 있는 type을 스위치문을 통해 하나씩 검사해서, 일치하는 case를 찾는다.
// 3. type과 case가 일치하는 경우에, 해당 코드가 실행되고 새로운 state를 반환(return) 한다.
// 4. 리듀서가 새로운 state를 반환하면, 그게 새로운 모듈의 state가 된다.
const todos = (state = initialState, action) => {
	
  switch (action.type) {
		//추가
    case ADD_TODO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
      return {
        ...state, todos: [...state.todos, action.payload],
      };

			//삭제
		case DELETE_TODO:
			return {
				todos : state.todos.filter((item) => {
					return item.id !== action.payload
				})
			}

		//완료취소
		case UPDATE_TODO:
			return {
				todos: state.todos.map((item)=> item.id === action.payload ? { ...item, isDone: !item.isDone } : item)
			};
			
		//리스트
		case LIST_TODO:
			return	[...action.payload];
			
		default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;