const execa = require('execa');

async function roc(command){
    return await execa('osascript', ['-e', command]).stdout
}

class popup_options{
    constructor(
        buttons,
        defaultbutton,
        cancelbutton,
        icon,
        giveupafter
    ){
        this.buttons = buttons;
        this.defaultbutton = defaultbutton;
        this.cancelbutton = cancelbutton;
        this.icon = icon;
        this.giveupafter = giveupafter;
    }
}


async function dialog(message,options){
    let osa = 'display dialog ' + '"' + message + '"';

    if(options.buttons.length > 1){
        osa += ' buttons {"';
        osa += options.buttons[0] + '","' + options.buttons[1] + '","' + options.buttons[2] + '"}';
    } else if(options.buttons.length == 1){
        osa += ' buttons {"' + options.buttons[0] + '"}';
    }
    await roc(osa)
    
}


const opts = new popup_options(
    ['Hi!',"No!"],
    'Hi!',
    'No!',
    'caution',
    5)
dialog('Hello',opts)