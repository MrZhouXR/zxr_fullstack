import React, {Component, Fragment} from 'react'
import EatItem from './eatItem'


class Eat extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: ['1','2']
    }
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    console.log(e.target.value);
    console.log(this.state.inputValue);

  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  deleteItem(index) {
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list: list
    })
  }

  

  render() {
    return (
      <Fragment>
        <div>
          {/* <label for="addGoods">加菜:</label> */}
          <input id="addGoods" defaultValue={ this.state.inputValue } onChange={ this.inputChange.bind(this) }></input>
          <button onClick={this.addList.bind(this)}>下单</button></div>
        <ul>
         {
           this.state.list.map((item,index) => {
            //  return <li key={index + item} onClick={this.deleteItem.bind(this, index)} dangerouslySetInnerHTML={{__html:item}}></li>
            return (
              <EatItem content={item} index={index} deleteItem={this.deleteItem.bind(this)} key={index + item}></EatItem>
            )
          })
         }
        </ul>
      </Fragment>
    )
  }
}

export default Eat