import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

class EntryItem extends Component {
    constructor (props) {
        super(props);

     

        this.state = {
              
        }
    }

  

render () {
    console.log(this.props.Entrys[0])
    let item = Array.from(this.props.Entrys)
    let [setDate, Journal] = item
    // let {setDate, Journal} = Journalitem
    // let oneItem= item.map(function (item) {
    //         return Object(item) } )
    
   
    
    

    let date = JSON.stringify(Journal)

    console.log(Journal)


    return (
        <div>
          <tr>
              <td>
                  {date}
              </td>
          </tr>
        </div>
    )
}

}
export default EntryItem;