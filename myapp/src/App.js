import React, {Component} from 'react';
import './App.css';
function List(props) {
  return (
    <div className="post">
      <label>{props.title}</label>
      <img src = {props.url}/>
    </div>
  )
}
class App extends Component {
  imageStyle = {width : 100, height : 100};
  constructor(props) {
    super(props);
    this.state = {url:'', title :'',data:[{url:'https://assets3.thrillist.com/v1/image/2799859/size/tmg-article_default_mobile.jpg', title:'Dogs'}]};
  }
  handleURLInput = e => {
    this.setState({url:e.target.value});
  }
  handleTitleInput = e => {
    this.setState({title : e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({url:'',title:'',data:[...this.state.data, {url:this.state.url, title: this.state.title}]})
    
  }
  render(){
    return (
      <div className="App">
          <div className ="content">
            <div>
              <input  id="input1" placeholder = 'Enter URL' value = {this.state.url} onChange = {this.handleURLInput}/>
            </div>
            <div>
              <input id="input2" placeholder = 'Title'  value = {this.state.title} onChange = {this.handleTitleInput}/>
              <button onClick = {this.handleSubmit}>New Post</button>
            </div>
            <div className="container">
              {this.state.data.map((item, index)=>{
                  return <List title = {item.title} url = {item.url}/>
              })}
            </div>

          </div>
        
      </div>
      
    )
  }
}
export default App;
