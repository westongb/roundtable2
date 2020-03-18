import React, { useState } from 'react';
import WarCouncil from "./warcouncil";
import { makeStyles } from '@material-ui/core/styles';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import Modal from '@material-ui/core/Modal';
import "./Entrylist.css";
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';
import Popup from './Popup';



export default function EntryTable(props) {

let myItem = props.Entrys;

let testItems = JSON.stringify(myItem);

let entryId = "";
let entrySetDate;
let entryJournal;
let displayItem;
let entryKing;
let listKing;
let entryWarrior;
let listWarrior;
let entryMagician;
let listMagician;
let entryLover;
let listLover;
let journalTable;
let tableItems;



var i;

//deconstruct data from Get
tableItems = myItem.map( function (item, i){
     var itemIndex = item[i];
    var entryId = item._id;
    var setDate = item.setDate;
    var King = item.Journal[0].King;
    var Warrior = item.Journal[1].Warrior;
    var Magician = item.Journal[2].Magician;
    var Lover = item.Journal[3].Lover;
  

    
    //Arrange data into Table
   return (<tr>
            <td>{setDate}</td>
            <td>
              <ul>
                    <li><span id="tableTitle">King:</span> {King} <span><input type="checkbox"/>  </span></li>
                    <li> <span id="tableTitle">Warrior:</span>{Warrior} <span> <input type="checkbox" /></span> </li>
                    <li><span id="tableTitle">Magician:</span>{Magician} <span>  <input type="checkbox" /></span></li>
                    <li> <span id="tableTitle">Lover:</span>{Lover}<span> <input type="checkbox" /> </span></li>
                    </ul>
            </td>
        <td id="update-delete">
          <div>
          <DeleteButton item={entryId}/>
          <span>  </span>
          <Popup entryId={entryId} item={i} King={King} Warrior={Warrior} Magician={Magician} Lover={Lover}/>
          </div>
        </td>
         </tr>
         )
  });

  

return <tr>{tableItems}</tr>
}
