
if(window.document.body.onunload)
{
    window.document.body.style.visibility="hidden";
}
else
{
    window.document.body.style.visibility="visible";
}

function back()
{
    history.back();
}

var field = document.getElementsByClassName("field");

var button=document.getElementsByClassName("button");

var username = field[0].innerText;

var password = field[1].innerText;

function check()
{
    alert(username);
    alert(password);

    if(username == " ")
    {
        alert("ERROR : Enter Username");
    }
    else
    {
        if(password == " ")
        {
            alert("ERROR : Enter Password");
        }
        else
        {
            alert("Successful Login")
        }     
    }
}

