$(document).ready(function(){
	$('.questions').hide();
	$('.info').hide();
	$('#restart').hide();
	var correct = 0;
	var wrong = 0;
	var currentQ = {
		question:" ",
		right: " ",
		choices:[], 
	}
	
	var r = 0;
	var guess;
	var questions = [
		{question: 'How many Playstation 2 consoles did Sony sell? (In Millions)',
			right: 155,
			choices: [35, 86, 102, 155]
			},
		{question: 'What was the first game Mario appeared in?',
			right: 'Donkey Kong',
			choices:['Super Mario World', 'Super Mario 64', 'Donkey Kong', 'Mario Bros'],
		},
		{question: 'What color is Pac-Man?',
			right: 'Yellow',
			choices:['Green', 'Red', 'Yellow', 'Orange'],
		},
		{question: 'What is the best-selling game console of all time?',
			right: 'Playstation 2',
			choices:['Nintendo DS', 'Game Boy/Game Boy Color', 'Playstation 2', 'Wii'],
		},
		{question: 'What is the most sold game of all time?',
			right: 'Tetris',
			choices:['Wii Sports', 'Minecraft', 'Grand Theft Auto V', 'Tetris'],
		},
		{question: 'The Covenant are a military alien race in which game series?',
			right: 'Halo',
			choices:['Alien: Isolation', 'Halo', 'Space Invaders', 'Doom'],
		},
		{question: 'Which was the first Pokemon game to be released to Game Boy?',
			right: 'Pokemon Red and Green',
			choices:['Pokemon Red and Green', 'Pokemon Red and Blue', 'Pokemon Blue', 'Pokemon Yellow'],
		},
		{question: 'How many mb is the biggest memory card offered by Nintendo for The GameCube?',
			right: '64 Mb',
			choices:['4 Mb', '16 Mb', '32 Mb', '64 Mb'],
		},
		{question: 'How many presses per button does it take to wear out an Xbox One controller?',
			right: '3 million',
			choices:['456 thousand', '757 thousand', '1.5 million', '3 million'],
		},
		{question: 'Which company just released a console on March 3, 2017?',
			right: 'Nintendo',
			choices:['Microsoft', 'Nintendo', 'Sony', 'Atari'],
		}
		
	]
	 var clock = {
		time: 20,
		int1:0,
		int2:0,
		reset:function() {
			clock.time = 20; 
			$('#timerem').html("time remaing: " + clock.time);
		},
		count: function() {
			clock.time--;
			$('#timerem').html("time remaing: " + clock.time);
		},
		start:function() {
			int1 = setInterval(clock.count, 1000);
			int2 = setTimeout(clock.out, 20000);
		},
		stop: function (){
			clearInterval(int1);
			clearTimeout(int2);
		},
		out: function() {
			clock.stop();
			$('.info').show();
			$('#info').html('wrong! the correct answer was ' + currentQ.right + '!');
			$('.questions').hide();
			what.play();
			wrong++;
			setTimeout(setQuestion, 3000);
			
		}


	}


	function setQuestion () {
		$('#restart').hide();
		if(r < questions.length){
			clock.reset();
			clock.start();
			$('.info').hide();
			$('.questions').show();
			currentQ = questions[r];
			console.log(currentQ);
			$('#question').html(currentQ.question);
				for(i=0; i<currentQ.choices.length; i++){
					$('#'+ parseInt(i+1)).attr('value', currentQ.choices[i]);
					$('#'+ parseInt(i+1)).html(currentQ.choices[i]);
			}
		r++; 

		} else {
		$('.questions').hide();
		$('#info').show();
		$('#info').html('game has ended you got ' + correct + ' questions correct and ' + wrong + ' questions wrong');
		$('#restart').show();
		}

	}; 
	 
	$('#start').on('click', function(){
		$('#start').hide();
		setQuestion();	
	});
	$('#restart').on('click', function(){
		$('#restart').hide();
		r=0;
		correct=0;
		wrong=0; 
		setQuestion();	

	});

	$('.btnChoice').click(function(){
		guess = $(this).attr("value"); 
		console.log($(this).attr("value"));
		if($(this).attr("value") == currentQ.right){
			$('.info').show();
			$('#info').html('correct!')
			$('.questions').hide();;
			clock.stop();
			setTimeout(setQuestion, 3000);
			right.play();
			correct++;
		}  else {
			$('.info').show();
			$('#info').html('wrong! the correct answer was ' + currentQ.right + '!');
			$('.questions').hide();
			clock.stop();
			setTimeout(setQuestion, 3000);
			what.play();
			wrong++;
		}
	}); 
	var q = questions.length; 
	console.log(questions.length)
	var timer = {

	}
	


});