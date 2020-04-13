import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;

// 부모에 handleChange 메소드를 쓰고, 자식에 그대로 넘겨주고
// 자식에 호출하면 다시 부모로 돌아가서 함수의 내용이 실행된다
// 바뀐 내용은 부모에

// onchange는 input에 있을 수 있어서, 자식에 달아줌 
// 뭔가 변경사항이 생겼을 때 onchange(e)에 달아주는데 값을 부모에서 가져오겠다.
// 부모에서 이 컴포넌트의 props로 handleChange 메소드를 넘겨주는 거지
// 그럼 this.props.이름을 치면 자식에서 렌더되고 부모로 가서 메소드가 실행 됨


// 유저가 입력한 것과 몬스터 카드의 name과 비교해서 포함하면 보여지는 것
// 전부다 소문자로 만들고 찾기
// monster.name이랑 input을 모두 소문자로 바꾸고 값을 리턴한다
// carlist의 props로 전달이 되어야 함