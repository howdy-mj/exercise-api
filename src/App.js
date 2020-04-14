import React, { Component } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import CardList from "./components/CardList/CardList";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  // 데이터 로딩
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then( (data) =>
        data.json() // JSON 형태 파일의 Promise가 들어옴
      ).then( (data) =>
        this.setState({
          monsters: data
        })
      )

      // .then( (data) =>
      //   this.setState({
      //     monsters: data
      //   }, () => {
      //     console.log(this.state.monsters) // 확인하는 법 
      //   })
      // )
  }

  // SearchBox에 props로 넘겨줄 handleChange 메소드 정의
  handleChange = (e) => {
    // console.log(e.target.value)
    // debugger;
    this.setState({
      userInput: e.target.value, 
      // 온전히 user가 쓴 값을 저장하기 위해 lowercase는 filter할 때 사용
    })
  }

  render() {
    // 필터링 로직
    // 내가 친 값과 이름과 비교하고 싶기 때문에, render()가 불렸을 때 확인을 하고 싶어서 이 자리에 작성
    const { monsters, userInput } = this.state;
    const filteredList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(userInput.toLowerCase())
    })
    // console.log(filteredList); 

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
