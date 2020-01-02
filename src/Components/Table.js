import React, { useState } from 'react';
import WarCouncil from "./warcouncil";
import { makeStyles } from '@material-ui/core/styles';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import Modal from '@material-ui/core/Modal';
import "./Entrylist.css";
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';



export default function EntryTable(props) {



 

let myItem = props.Entrys;

let testItems = JSON.stringify(myItem);

let entryId;
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
// for (i = 0; i< myItem.length; i++) {
//   let itemList = myItem[i];

   tableItems = myItem.map( function (item, i){
     var itemIndex = item[i];
    var entryId = item._id;
    var setDate = item.setDate;
    var King = item.Journal[0].King;
    var Warrior = item.Journal[1].Warrior;
    var Magician = item.Journal[2].Magician;
    var Lover = item.Journal[3].Lover;
    
    

    

  

    // console.log(deleteclick);
    
   return (<tr>
        <td>{i}</td>
          <td>{setDate}</td>
          <td>
              <span id="tableTitle">King:</span> {King} <span> </span>
              <span id="tableTitle">Warrior:</span>{Warrior} <span> </span> 
              <span id="tableTitle">Magician:</span>{Magician} <span> </span>
              <span id="tableTitle">Lover:</span>{Lover}<span> </span>
        </td>
        <td id="update-delete">
          <div>
          <DeleteButton item={i} />
          <span>  </span>
          <UpdateButton item={i}/>
          </div>
        </td>
         </tr>
         )
  });

  

return <tr>{tableItems}</tr>
}

