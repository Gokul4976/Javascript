let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        // if (buttonText == 'X') {
        //     buttonText = '*';
        //     screenValue += buttonText;
        //     screen.value = screenValue;
        // }
        if (buttonText === 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText === '=') {
            try{
                screen.value = eval(screenValue);
                screenValue = screen.value;
            } catch
            {
                screen.value = "Error";
                screenValue = "";
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    });
}

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if(!isNaN(key) || ['+','-', '*','/'].includes(key))
    {
        screenValue += key;
        screen.value = screenValue;
    }
    else if(key === 'Enter')
    {
        try{
            screen.value = eval(screenValue);
            screenValue = screen.value;
        } catch
        {
            screen.value = "Error";
            screenValue = "";
        }
    }
    else if(key === 'BackSpace')
    {
        screenValue = screenValue.slice(0,-1);
        screen.value = screenValue;
    }
    else if( key === 'Escape')
    {
        screenValue = "";
        screen.value = screenValue;
    }
});

