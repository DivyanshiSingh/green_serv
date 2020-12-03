export function phoneValidator( number) {
if(number && number.length===10 && /^[0-9\b]+$/.test(number)){
    return true;
}
return false;
}
export function checkEmpty( value){
    if(!value) return false;
    return true;
}
