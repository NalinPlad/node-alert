const { exec } = require("child_process");

// Run osascript
async function roc(command) {
  exec("osascript -e '" + command + "'", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    return stdout;
});
}

class popup_options {
  constructor(buttons, defaultbutton, cancelbutton, icon, giveupafter) {
    this.buttons = buttons;
    this.defaultbutton = defaultbutton;
    this.cancelbutton = cancelbutton;
    this.icon = icon;
    this.giveupafter = giveupafter;
  }
}

async function dialog(message, options) {
  let osa = "display dialog " + '"' + message + '"';
  if(options){
      // Set Buttons
      if (options.buttons.length > 0) {
        osa += ' buttons {"';
    
        for (button in options.buttons) {
          if (button < options.buttons.length - 1) {
            osa += options.buttons[button] + '","';
          } else {
            osa += options.buttons[button] + '"} ';
          }
        }
      }
    
      // Set Default Buttons
      if (options.defaultbutton != "" && options.cancelbutton != "") {
        osa +=
          'default button "' +
          options.defaultbutton +
          '" cancel button "' +
          options.cancelbutton +
          '" ';
      }
    
      // Set Icon
      if (options.icon != "") {
        osa += "with icon " + options.icon;
      }
  }

  await console.log(roc(osa));
}

const opts = new popup_options([], '','', '', 0);

dialog('GUYS!',opts);