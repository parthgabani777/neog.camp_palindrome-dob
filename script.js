const date = document.querySelector('#dob');
const check = document.querySelector('#check')
const output = document.querySelector('#output')

check.addEventListener('click',function(){
    let dob = date.value;

    if(dob){
        dob = dob.split("-");
        dob = {
            yyyy : dob[0],
            mm : dob[1],
            dd : dob[2]
        };

        if(checkPalindromeDate(dob)){
            output.innerText = "Your date is palindrome";
        }
        else{
            output.innerText = "Your date is not palindrome";
        }
    }
    else{
        output.innerText = "Enter dob";
    }
})

function checkPalindromeDate(dob){
    let dobarray = formatDate(dob);
    let flag = false;

    for(let i=0;i<dobarray.length;i++){
        if(checkPalindrome(dobarray[i])){
            flag = true;
            break;
        }
    }

    return flag;
}

function formatDate(date){
    let ddmmyyyy = date.dd+date.mm+date.yyyy;
    let mmddyyyy = date.mm+date.dd+date.yyyy;
    let yyyyddmm = date.yyyy+date.dd+date.mm;
    let ddmmyy = date.dd+date.mm+date.yyyy.slice(-2);
    let mmddyy = date.mm+date.dd+date.yyyy.slice(-2);
    let yyddmm = date.yyyy.slice(-2)+date.dd+date.mm;

    return [ddmmyyyy,mmddyyyy,yyyyddmm,ddmmyy,mmddyy,yyddmm];
}

function checkPalindrome(date){
    return date === reverseString(date);
}

function reverseString(date){
    let charArr = date.split("");
    let reverseOfArray = charArr.reverse();
    let reverseDate = reverseOfArray.join("");
    return reverseDate;
}