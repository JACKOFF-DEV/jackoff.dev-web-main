var row1 = [0,1,2,3,4,5];
var row2 = [0,1,2,3,4,5];
var row3 = [0,1,2,3,4,5];

var win = false;
var count = 0;

var money = 1000;
var bet = 0;

function betTime()
{
    bet += 10;

    updateText();
}

function updateText()
{
    document.getElementById("moneyText").innerText = "$" + money;
    document.getElementById("betText").innerText = "Current bet $" + bet;
}

function spinToWin()
{
    money -= bet;
    updateText();

    document.getElementById("winText").innerText = " ";
    win = false;

    for (var i = 0; i < 1; i++) 
    {
        count++;

        row1Outcome = row1[Math.floor(Math.random() * row1.length)];
        row2Outcome = row2[Math.floor(Math.random() * row2.length)];
        row3Outcome = row3[Math.floor(Math.random() * row3.length)];
    
        document.getElementById("slot1Text").innerText = row1Outcome;
        document.getElementById("slot2Text").innerText = row2Outcome;
        document.getElementById("slot3Text").innerText = row3Outcome;
    
        //console.log(row1Outcome + ", " + row2Outcome + ", " + row3Outcome);
    
        if(row1Outcome === row2Outcome && row2Outcome === row3Outcome)
        {
            money += bet * 1.5;
            win = true;
            i = 11;
        }
        else
        {
            bet = 10;
            updateText();
        }
    }

    if(win)
    {
        document.getElementById("winText").innerText = "winner chicken dinner";
    }
}