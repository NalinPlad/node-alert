import {execa} from 'execa'; 

async function roc(command){
    await execa('osascript', ['-e', command])
}

class popup_options{
    constructor(
        buttons,
        icon,
        giveupafter
    )
}

const opts = new popup_options(['yes','no'],'caution',5)

async function dialog(message,options){
    await roc(`display dialog '${message}'`)
}

dialog('123321',opts)