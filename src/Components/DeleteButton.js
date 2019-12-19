import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Octicon, {Trashcan, IssueReopened} from '@primer/octicons-react';

export default function deleteButton () {

    

    return (
    <button><Octicon icon={Trashcan}/></button>
    )
}