import {execa} from 'execa'; 

async function roc(command){
    await execa('osascript', ['-e', command])
}

roc('display dialog "Do, or do not. There is no try."')