const execa = require('execa');

async function roc(command){
    await execa('osascript', ['-e', command])
}

class popup_options{
    constructor(
        buttons,
        icon,
        giveupafter
    ){
        this.buttons = buttons;
        this.icon = icon;
        this.giveupafter = giveupafter;
    }
}

const opts = new popup_options(['yes','no'],'caution',5)

async function dialog(message,options){
    await roc(`display dialog '${message}'`)
}

dialog('123321',opts)