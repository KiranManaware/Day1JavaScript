// Programm to find the year is leap year or not
let year=2000;
if(year%4===0)
{
    if(year%100===0)
    {
        if(year%400===0)
        {
            console.log("This year is Leap year");  
        }
        else
        {
            console.log("This is not a leap year");
        }
    }
    else
    {
        console.log("This is a leap year");        
    }
}
else{
    console.log("This is not a leap year");
}