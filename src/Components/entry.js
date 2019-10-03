import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

class EntryItem extends Component {
    constructor (props) {
        super(props);

     

        this.state = {
              
        }
    }

  

render () {
   
   
    let item = Array.from(this.props.Entrys)
    let [JournalEntry] = item
    let [setDate, Journal] = JournalEntry
    console.log(JournalEntry)

    // let entryItem = item.map((entryItem) =>
    //     <tr>
    //      <td>{setDate}</td>
    //     <td>{Journal}</td>
    //     </tr>);

    
   
    
    

    // let date = JSON.stringify(item)

    // console.log(item)


    return (
        <div>
          <tr>
              <td>
                  {}
              </td>
          </tr>
        </div>
    )
}

}
export default EntryItem;