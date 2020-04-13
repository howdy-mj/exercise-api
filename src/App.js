import React, { Component } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import CardList from "./components/CardList/CardList";
import "./App.css";

/**********************************************************
  3. 필터링 로직 구현 (filter 메소드 활용)
      여기서 비교 대상은 monster 객체의 name 값입니다.
      소문자로 바꾼 monster.name 값과 userInput값을 비교.
      filter 메소드가 반환하는 값을 변수에 저장 후 return 문 안에 CardList에 props로 전달
***********************************************************/

class App extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then( (data) =>
        data.json()
      ).then( (data) =>
        this.setState({
          monsters: data
        })
      )
  }

  // SearchBox에 props로 넘겨줄 handleChange 메소드 정의
  handleChange = (e) => {
    // console.log(e.target.value)
    // debugger;
    this.setState({
      userInput: e.target.value.toLowerCase(),
    })
  }

  render() {
    // 필터링 로직
    const { monsters, userInput } = this.state;
    const filteredList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(userInput)
    })
    console.log(filteredList); 

    return (
      <div className="App">
        <h1>컴포넌트 재사용 연습!</h1>
        <SearchBox handleChange={this.handleChange} userInput={this.state.userInput}/>
        <CardList monsters={filteredList} />
      </div>
    );
  }
}

export default App;
