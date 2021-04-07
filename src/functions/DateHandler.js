export default function DateHandler(date, month) {
    //date = string of date data
    //month = true / false
    const dateSorted = date.split('T')[0];
    let dateArray = dateSorted.split('-');

    if(month){
        let monthNumber = dateArray[1];
        let monthWord = '';
        switch (monthNumber){
            case '01':
                monthWord = 'JAN'
                break;
            case '02':
                monthWord = 'FEB'
                break;
            case '03':
                monthWord = 'MAR'
                break;
            case '04':
                monthWord = 'APR'
                break;
            case '05':
                monthWord = 'MAY'
                break;
            case '06':
                monthWord = 'JUN'
                break;
            case '07':
                monthWord = 'JUL'
                break;
            case '08':
                monthWord = 'AUG'
                break;
            case '09':
                monthWord = 'SEP'
                break;
            case '10':
                monthWord = 'OCT'
                break;
            case '11':
                monthWord = 'NOV'
                break;
            case '12':
                monthWord = 'DEC'
                break;
            default:
                monthWord = 'SEP'
                break;
        }
        
        dateArray[1] = monthWord
        return dateArray.reverse().join(' ');
    } else {
        return dateArray.join(' ');
    }
     
}
