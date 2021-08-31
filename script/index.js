//accessing the numeric buttons
let buttons = document.querySelectorAll('.num');
//accessing the label 
let label = document.querySelector('input');

function clickingEffect(b){ //function to add clicking effect
	let orignal = b.style.boxShadow;
	b.style.boxShadow = '0 2px black';
	b.style.position = 'relative';
	b.style.top = '3px';

	setTimeout(function(){
		b.style.position = 'relative';
		b.style.top = '0';
		b.style.boxShadow = orignal;
	},100);
}

let equation = '';//to be used to equate the final solution
for(let i = 0 ; i < buttons.length ; i++){
	buttons[i].addEventListener('click' , function(){
		label.value += buttons[i].innerHTML;
		equation += buttons[i].innerHTML;

		clickingEffect(buttons[i]);

	});
}

//utility function 
function isNumeric(v) {
  if (v == null || v == undefined || v== '') {
     return false;
  }                        
  return !isNaN(v) && isFinite(v);
}


//assigning non-numeric buttons functionality

let del = document.querySelector('.del');
del.addEventListener('click',function(){
	clickingEffect(del);
	let str = label.value;
	str = str.slice(0 , str.length-1);
	label.value = str;
	if(isNumeric(equation[equation.length-1]) || equation[equation.length-1] === '.'){
		equation = equation.slice(0 , equation.length - 1);
	}
});

let reset = document.querySelector('.reset');
reset.addEventListener('click',function(){
	clickingEffect(reset);
	label.value = "";
	equation = '';
})


const add = document.querySelector('.add');
add.addEventListener('click',function(){
	clickingEffect(add);
	if(equation)equation += ' + ';
	label.value = '';
});

const sub = document.querySelector('.sub');
sub.addEventListener('click',function(){
	clickingEffect(sub);
	if(equation)equation += ' - ';
	label.value = '';
}); 

const div = document.querySelector('.div');
div.addEventListener('click',function(){
	clickingEffect(div);
	if(equation)equation += ' / ';
	label.value = '';
});

const mul = document.querySelector('.mul');
mul.addEventListener('click',function(){
	clickingEffect(mul);
	if(equation){equation += ' * ';}
	label.value = '';
});

const dec = document.querySelector('.dec');
dec.addEventListener('click',function(){
	clickingEffect(dec);
	label.value += '.';
	equation += '.';
});

const equal = document.querySelector('.equal');

//Equating The Equation saved in 'equation'
equal.addEventListener('click',function(){
	clickingEffect(equal);
	let arr = equation.split(' ');
	// console.log(arr); for error detection
	let lastNum = '';
	let op = '';
	let solution = 0;
	for(let i = 0 ; i < arr.length ; i++){
		if(lastNum){
			if(isNumeric(arr[i])){
				switch(op){
					case '+':
						solution = parseFloat(lastNum) + parseFloat(arr[i]);
						break;
					case '-':
						solution = parseFloat(lastNum) - parseFloat(arr[i]);
						break;

					case '*':
						solution = parseFloat(lastNum) * parseFloat(arr[i]);
						break;
					case '/':
						solution = parseFloat(lastNum) / parseFloat(arr[i]);
						break;					
				}
				lastNum = solution;
			}else{
				op = arr[i];
			}
		}else{
			lastNum = parseFloat(arr[i]);
		}
	}
	label.value = '' + solution;
	equation ='' + solution;
});


//adding the changing theme functionality

let firstButton = document.querySelector('.first');
let secondButton = document.querySelector('.second');
let thirdButton = document.querySelector('.third');

let link = document.querySelector('link');


firstButton.addEventListener('click',function(){
	firstButton.id = 'selected';
	secondButton.id = '';
	thirdButton.id = '';
	link.setAttribute('href' , 'stylesheets/styles.css');
});

secondButton.addEventListener('click',function(){
	firstButton.id = '';
	secondButton.id = 'selected';
	thirdButton.id = '';
	link.setAttribute('href' , 'stylesheets/styles2.css');

});

thirdButton.addEventListener('click',function(){
	firstButton.id = '';
	secondButton.id = '';
	thirdButton.id = 'selected';
	link.setAttribute('href' , 'stylesheets/styles3.css');
});

