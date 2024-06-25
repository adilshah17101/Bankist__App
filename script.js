"use strict";

const data = [5000, 3400,[ -150, [-790, -3210], -1000], 8500, -30];
console.log('first ', data);
const nwarr = data.flatMap(mov => mov);
console.log('second', nwarr);
console.log('third', nwarr.flatMap(mov => mov));
const A = [1,2,3,4,5,6];
const B = [7,8,9,11];
const find = A.concat(B)
console.log(find)
const greaterNo = find.sort((a, b) => a - b);
console.log('The greatest No, is:', greaterNo[greaterNo.length - 1]);
const smallerNO = find.sort((a,b) =>a - b);
console.log('The smaller no is: ', smallerNO[0])

// another methode to find maximum and minimum number;
console.log(Math.max(...find))
console.log(Math.min(...find));
console.log(Math.trunc(Math.random() * 6));
 
//Date formating;

const dateformate =function(date){
  const output = date.lingn
}
console.log('⚡🌩⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡')


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// DIFFERENT DATA! Contains movement dates, currency and locale
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates : [
    "2024-01-10T08:12:45.123Z",
    "2024-02-15T11:30:21.456Z",
    "2024-03-20T14:45:37.789Z",
    "2024-04-25T18:02:44.321Z",
    "2024-05-30T21:20:59.654Z",
    "2024-06-15T00:50:12.987Z",
    "2024-06-18T04:17:33.654Z",
    "2024-06-19T09:30:22.789Z",
],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Alamin Mt",
  movements: [2500, 400, -260, 830, -4210, 2200, 4600, -70],
  interestRate: 1.8,
  pin: 2222,

  movementsDates: [
    "2019-11-03T13:15:33.035Z",
    "2019-11-25T09:48:16.867Z",
    "2019-12-16T06:04:23.907Z",
    "2020-01-12T14:18:46.235Z",
    "2020-02-25T16:33:06.386Z",
    "2020-04-11T14:43:26.374Z",
    "2020-06-15T18:49:59.371Z",
    "2020-07-30T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "de-DE",
};

const account3 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 3333,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "ar-SY",
};

const accounts = [account1, account2, account3];
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

////////////////////////////
//sorting of arrray;
 /*const arr = [-99933, 223, 455, -342, 2000, 500, -300];
const newArr = arr.sort((a, b) =>{
  return a - b;
})
console.log(newArr)
     OR
const sortedArr = arr.sort((a, b)=>{
  if(a > b){
    return -1;
  }
  if(a < b ){
    return 1;
  }
})
console.log(sortedArr)*/



containerApp.style.opacity = '100%';

const No = 5500.12;
const options = {
  style: 'currency',
  currency: 'EUR'
}
console.log('US',new Intl.NumberFormat('en-Us', options).format(No));

console.log('Syria:', new Intl.NumberFormat('ar-sy', options).format(No))

console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(No))

const arr = [-99933, 223, 455, -342, 2000, 500, -300];
const newArr = arr.sort((a, b) =>{
  return b - a;
})
console.log(newArr)

const cur = 2500;
const option = {
  style: 'currency',
  currency: 'USD',
   currencyDisplay: 'narrowSymbol'

}
console.log( new Intl.NumberFormat('en-us',option).format(cur))
console.log(new Intl.NumberFormat('de-DE',option).format(cur));
console.log(new Intl.NumberFormat('ar-SY',option).format(cur))


/////////////////////////////////////////////

// Date Calculation;
const movementDateFormate = function(date, locale){
  const calcDate = (date_1, date_2) => Math.round(Math.abs((date_2 - date_1)/(1000 * 60 * 60 * 24)));
  const passedDays = calcDate(new Date(), date);
  console.log(passedDays)

  if(passedDays === 0) return 'Today';
  if(passedDays === 1) return 'yesterday'
  if(passedDays <= 7) return `${passedDays} days ago`
  else{
    // const day = `${date.getDate()}`.padStart(2, 0);
    //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
    //   const year = date.getFullYear();
    //  return `${day}/${month}/${year}`;
     return new Intl.DateTimeFormat(locale).format(date)
  }
  
};

///////////////////////////////////
// Timer
const parsal = ['Pizza', 'Spinach']
let pizza = setTimeout((ing_1, ing_2) => {
  console.log(`This is your...${ing_1} and ${ing_2}`)
}, 3000, ...parsal);
console.log('fetching Data...')
if(parsal.includes('Pizza'))clearInterval(pizza)
 let counter =100;
const countDownTimer = setInterval(() => {
counter--;
// labelTimer.textContent = counter
// const min = counter/60 
// const sec = counter/60 *60
// console.log(`${Math.round(min)}/${Math.round(sec)}`)
 },1000)

    

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
 // FUNCTION FOR CHANGING CURRENCY;

 const formatMov = function(value, locale, currency){
  return new Intl.NumberFormat(locale, { //local: en-Us
    style: 'currency',
    currency: currency
  }).format(value)
}


// displayMovements
const displayMovements = function(movements, sort = false){
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
 
  containerMovements.innerHTML = ' '
  movs.forEach(function(mov, i){

    const date = new Date(currentAccount.movementsDates[i]);//Movements Date
    const displayDate = movementDateFormate(date, currentAccount.locale)//Assigning Date to new varible

    const formattedMov = formatMov(mov, currentAccount.local, currentAccount.currency)// Assigning value to a variable;
    
 const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date"></div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov} </div>
        </div>
       `
// to change html div-movements;
containerMovements.insertAdjacentHTML("afterbegin", html)
})};
// displayMovements(arr)


/////////////////////////////////
// CREAT USERNAME;
const user = 'Mian Adil Shah';
const creatUserName = function(accs){
  accs.forEach(function(acc){
 acc.userName = acc.owner.toLowerCase().split(' ').map(char => char[0]).join('');
});
return accs;
}
 console.log(creatUserName(accounts));


 /////////////////////////////////////////////////
 // ADDING BALANCE;'

//  const movements = [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300];
 const calcBalance = function(acc){
     acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    // to display on Dom;
    labelBalance.textContent =  `${ formatMov(acc.balance, acc.local, acc.currency)}`// calling fomatMov func;
    return acc.balance;
    
  }

  ////////////////////////////////////////
  //BLANCE __SUMMARY;
    const displaySummary = function(acc){
    // ICOME_SUM
      const income = acc.movements
      .filter((mov) => mov > 0)
      .reduce((mov, cur)=> mov + cur, 0);
      labelSumIn.textContent = formatMov(income, acc.locale, acc.currency)/* Or`${Math.abs(deposit.toFixed(3))}€ `*/

      // OUT_
      const deposit = acc.movements.filter(mov => mov < 0).reduce((mov, cur) => mov + cur, 0);
      labelSumOut.textContent = formatMov(deposit, acc.local, acc.currency)/*`${Math.abs(deposit.toFixed(3))}€ `Or*///we entered depsite so it is a value 
  
      // INTERUST_
      const interest = acc.movements
      .filter((mov) => mov > 0)
      .map(deposit => (deposit * acc.interestRate)/100)
      .filter((int, i, arr) =>{
        console.log(arr);
        return int >=1;
      })
      .reduce( (cur, int) =>cur + int, 0)   // here cur is the first no. which add with the second no. an arr i,e [cur, int]       
      labelSumInterest.textContent =formatMov(acc.balance, acc.local, acc.currency)/*`${interest.toFixed(3)}€` Or*/
    }
    // displaySummary(accounts)


    /////////////////////////////////////////////////
    // UPDATE UI;
     let timer; // defining timer;

    const updateUI = function(acc){
     console.log(acc)

    // display movements;
    displayMovements(acc.movements);

    // CALLING BALANCE FUNCTION;
    calcBalance(acc);
     
    // DISPLAY BALANCE SUMMARY;
    displaySummary(acc);

    // If timer alredy exist so it will remove and new will start
    if(timer) clearInterval(timer)
    setLogOutTimer();// Then this new timer will call
    }


    ////////////////////////////
    // LogOut Timer;
    const setLogOutTimer = function () {
      // define a varible and set time;
      let count = 300;
    //   //countDown function;
      return timer = setInterval(function () {
        // conversion to min and to sec;
        const min = String(Math.trunc(count / 60)).padStart(2, 0);// For padstart first we should convert it into string;
        const sec = String((count % 60)).padStart(2,0);// For second we use remaider operator because 120 sec is => 02:00;

        //In each Call print the remaing time;
        labelTimer.textContent = `${min}:${sec}`;

       // when count become 0, timer will clear and acc will LogOut
       if(count === 0){
        //After completion timer will remove
        clearInterval(timer)

        currentAccount = {}; // To empty the whole object
    containerApp.style.opacity = '0';
    labelWelcome.textContent = 'Log in to get started';
    window.scrollTo(0,0);// move page back to upword;
    inputLoginUsername.focus();
    console.log('You have been logOut:',currentAccount)
       }

       //Decreas 
       count --;

       },1000)
        
     }
     
    //////////////////////////////////
    //Current date
    // const currentDate = function(date){
    //   const now = new Date();
    //   const day = `${now.getDate()}`.padStart(2, 0);
    //   const month = `${now.getMonth() + 1}`.padStart(2, 0);
    //   const year = now.getFullYear();
    //   const hour = now.getHours();
    //   const min = now.getMinutes();
    //   labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`;
    //   return now;
    // }

    const currentDate = function(date){
const current = new Date();
const option={
  hour : 'numeric',
  minute : 'numeric',
  day : 'numeric',
  month: '2-digit',// Can write 'long' mean month name as August,September etc;
  year: 'numeric',
  weekday: 'long'// Or can write 'narrow'
}
/*  const locale = navigator.language;// OUTPUT: en-US => to show local Language
 console.log(locale)*/

 labelDate.textContent = new Intl.DateTimeFormat(date,option).format(current); 
}

  ///////////////////////////////////////////
  //LOGING__BUTTON
  let currentAccount; // this is now big object;
 btnLogin.addEventListener('click',function(e){
    console.log('clicked')
   e.preventDefault();
      currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
      if(currentAccount.pin === Number( inputLoginPin.value))
     console.log(currentAccount)
    // owern Name
    
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
    inputLoginPin.blur(); //to remove cursor blinking from pin box
          // OPACITY;
    containerApp.style.opacity = '100%';
    inputLoginUsername.value = inputLoginPin.value = '';
     currentDate(currentAccount.locale);
    // CALLING UPDATEUI FUNCTION;
     updateUI(currentAccount);

    });

    btnTransfer.addEventListener('click', function(e){
      e.preventDefault();
      const amount = Number(inputTransferAmount.value);
           const reciverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
      console.log(amount, reciverAcc)   ;
        if(amount > 0 &&
       reciverAcc && amount <=
       currentAccount.balance &&
       reciverAcc?.userName !== currentAccount.userName
      ){
        
        currentAccount.movements.push(-amount);

        reciverAcc.movements.push(amount);
        // transfer date;
        currentAccount.movementsDates.push(new Date().toISOString());
        reciverAcc.movementsDates.push(new Date().toISOString());
        updateUI(currentAccount);//Calling calcBlace, displaySummary

        inputTransferAmount.value = inputTransferTo.value = '';
        console.log('Transfer valide:',amount)
      }else{
        console.log('Enter Correct Data');
      }
    
      // currentAccount.movementsDates.push(new Date())//it add new date in mov.date of js account
    })
////////////////////////////////////////////////////
//CLOSING__BUTTON;
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  const closeUserName = inputCloseUsername.value;
  const closePin = Number(inputClosePin.value);
  console.log(closeUserName,closePin);
  console.log(currentAccount.userName)
  
  if((currentAccount.userName === closeUserName) && (currentAccount.pin === closePin)){
    console.log('Closed')
    currentAccount = {}; // To empty the whole object;
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = '0';
    labelWelcome.textContent = 'Log in to get started';
    window.scrollTo(0,0);// move page back to upword;
   
    inputLoginUsername.focus();
  }
  else{
    console.log('Incorrect UserName or Password')
  }
  
}) 
 
/////////////////////////////////////////////
// LOAN__MENUE AND BUTTON;
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 1.2)){
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString())
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});
//////////////////////////////////////////////
let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
   sorted  = !sorted;
   
  console.log('clicked')
  })
 