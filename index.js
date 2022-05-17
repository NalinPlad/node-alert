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

    // Set Buttons
    if(options.buttons.length > 0){
        osa += ' buttons {"';
        
        for(button in options.buttons){
           if(button < options.buttons.length-1){
               osa += options.buttons[button] + '","';
           } else {
               osa += options.buttons[button] + '"} ';
           }
           
        }
    }

    // Set Default Buttons
    if (options.defaultbutton != '' && options.cancelbutton != ''){
        osa += 'default button "' + options.defaultbutton +
        '" cancel button "' + options.cancelbutton + '" ';
    }

    // Set Icon
    if(options.icon != ''){
        osa += 'with icon ' + options.icon;
    }

    await roc(osa)
    
}


const opts = new popup_options(
    ['Hi!',"hello","hee"],
    'Hi!',
    'hee',
    '',
    5)
dialog('Hello',opts)