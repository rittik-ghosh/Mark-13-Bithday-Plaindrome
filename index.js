date = {
    day: 17,
    month: 02,
    year: 2061
}

function reverseSting(dateString) {
    var charList = dateString.split('');
    // console.log(charList);
    var reverse = charList.reverse();
    // console.log(reverse);
    var joinedStr = reverse.join('');
    // console.log(joinedStr);
    return joinedStr;
}

function isPalindrome(str) {
    if (str === reverseSting(str)) {
        return true;
    } else
        return false;
}

function convertDateToStr(date) {
    var dateStr = {
        day: '',
        month: '',
        year: ''
    };
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();

    return dateStr;

}


function checkPalindromeForAllDateFormats(date) {
    var dateStr = convertDateToStr(date);
    console.log(dateStr);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    var flag = false;
    console.log( ddmmyyyy);
        console.log( mmddyyyy);
    console.log( yyyymmdd);console.log(ddmmyy);console.log( mmddyy);console.log(yymmdd);
    var allCombArray = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    for (var i = 0; i < allCombArray.length; i++) {
        if (isPalindrome(allCombArray[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;

}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var maxNoDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (date.month === 2) {
        if (leapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }

    } else {
        if (day > maxNoDays[month - 1]) {
            day = 1;
            month = date.month + 1;
        }

    }
    if (month > 12) {
        month = 1;
        year = date.year + 1;
    }
    return {
        day: day,
        month: month,
        year: year
    };
}

function getPreviousDate(date) {
    var day = date.day - 1;
    // console.log(day);
    var month = date.month;
    // console.log(month);
    var year = date.year;
    // console.log(year);
    var maxNoDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (date.month === 3) {
        if (leapYear(year)) {
            if (day < 1) {
                day = 29;
                month--;
            }
        } else {
            if (day < 1) {
                day = 28;
                month--;
            }
        }

    } else {
        if (day < 1) {

            month = date.month - 1;
            // console.log(month);
            day = maxNoDays[month];
            // console.log(day);
        }

    }
    if (month < 1) {
        month = 12;
        year = date.year - 1;
    }
    return {
        day: day,
        month: month,
        year: year
    };
}

function getNextPalindromeDate(date){
    var ctr = 0;
    var nextDate = getNextDate(date);
  if(checkPalindromeForAllDateFormats(date)!==true){
    while(1){
      ctr++;
      var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
      if(isPalindrome){
        break;
      }
      nextDate = getNextDate(nextDate);
    }
}
    return [ctr, nextDate];
  }
console.log(getNextPalindromeDate(date));
// console.log(previousPalindromeDate(date));
// console.log(convertDateToStr(date));
// console.log(ddmmyyyy);
//     console.log( mmddyyyy);
//     console.log( yyyymmdd);console.log(ddmmyy);console.log( mmddyy);console.log(yymmdd);


