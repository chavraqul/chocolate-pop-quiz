$(document).ready(function() {

/************Variables*************/
	var	randomQuestions = [];
	var questionNumber = 1;
	var counterRight = 0;
	var counterWrong = 0;
	var newQuiz = new Quiz();
	var loadNew = new Question();

/**********************************/

/***Hide and Show Questions & Answers***/

	/*--Begin Quiz--*/
	$("#beginQuiz").show();
	$("#start").show();

	$("#start").click(function() {
		$("#beginQuiz").hide();
		$("#start").hide();
		loadNew.loadQuestion();
		$(".quizProgress").text(questionNumber);
		$(".loadQuestion").show();
		$(".progress").show();
	});

	$("#submit").click(function() {
		$(".loadQuestion").hide();
		$(".progress").hide();
		newQuiz.rightOrWrong();
		loadNew.loadAnswer();
		$(".countRight").text(counterRight);
		$(".countWrong").text(counterWrong);
		$(".loadAnswer").show();
		$(".score").show();
		questionNumber = questionNumber + 1;
	});

	$("#next").click(function() {
		$(".loadAnswer").hide();
		$(".score").hide();
		loadNew.loadQuestion();
		$(".quizProgress").text(questionNumber);
		if(questionNumber == 10){
			newQuiz.rankFan();
			$("#endQuiz").show();
			$("#startOver").show();
		} else{
			$(".loadQuestion").show();
			$(".progress").show();
		}
	});

	$("#startOver").click(function() {
		location.reload();
	});

/*************************************/

/********Classes and Functions********/

	function Quiz(){
		this.rightOrWrong = function(){
			var input = $('input[name=field]:checked', '.radioIdentifier').val();

			if(input == randomQuestions[questionNumber-1].a){
				$('.wrong').hide();
				$('.right').show();
				counterRight = counterRight + 1;
			} else{
				$('.right').hide();
				$('.wrong').show();
				counterWrong = counterWrong + 1;
			}
		}
		this.rankFan = function(){
			if(counterRight == 10){
				$('#fanCategory').text("You've ranked Chocolate #1 fan!");
			} else if(counterRight > 6 && counterRight < 10){
				$('#fanCategory').text("You are quite the Chocolate lover.");
			} else if(counterRight > 3 && counterRight < 7){
				$('#fanCategory').text("You need more Chocolate in your life.");
			} else{
				$('#fanCategory').text("It seems like you do not like Chocolate.");
			}
		}
	}
	function Question () {
		/*--- Generate random number 1 to 10---*/
		var questions = [
			{
				"question": "What is the name of that magical ingredient that makes chocolate?", 
			  	"optionA" : "A. Butter",
			  	"optionB" : "B. Heavy Cream",
			  	"optionC" : "C. Cocoa",
			  	"optionD" : "D. Rat Poison",
			  	"answer"  : "Cocoa !!! Hand make your own chocolate with 1/2 cup cocoa butter, 1/2 cup virgin coconut oil, 1/2 cup (raw) organic cocoa powder, 1/4-1/2 cup agave syrup for sweetening (organic honey, stevia or raw cane sugar okay too; or you don’t have to use any sweetener at all).",
				"a"		  : "C" 
			},
			{
				"question": "Where does cocoa comes from?", 
				"optionA" : "A. Coffee raw beans",
				"optionB" : "B. Cacao raw beans",
				"optionC" : "C. Black eyed peas",
				"optionD" : "D. Edamame peas",
				"answer"  : "Cocoa is made from the cacao raw beans. The raw beans undergo a lengthy process to prepare them for chocolate making. The  beans, which are covered with a sweet white pulp or mucilage, are removed ready to undergo the two-part curing process - fermentation and drying. Then, the beans undergo a winnowing, roasting, grinding, pressing process. This prepares the beans into cocoa.",
				"a"		  : "B"
			},
			{
				"question": "From which region did cacao originated?", 
			  	"optionA" : "A. Central and South America",
			  	"optionB" : "B. Spain",
			  	"optionC" : "C. Mexico",
			  	"optionD" : "D. Australia",
			  	"answer"  : "Cacao originated in Central and South America more than 4,000 years ago.",
				"a"		  : "A"
			},
			{
				"question": "Which region is the largest producer of cocoa in the world nowadays?", 
			  	"optionA" : "A. China",
			 	"optionB" : "B. USA",
			 	"optionC" : "C. Africa",
			 	"optionD" : "D. Indonesia",
			 	"answer"  : "Today, approximately 70% of the world’s cacao is grown in Africa. Cote d’lvoire is the single largest producer of cocoa, providing roughly 40% of the world’s supply.",
				"a"		  : "C"
			},
			{
				"question": "How many cacao beans do you think it takes to make a single pound of rich, delicious chocolate?", 
			  	"optionA" : "A. 1",
			  	"optionB" : "B. 0",
			  	"optionC" : "C. 200",
			  	"optionD" : "D. 400",
			  	"answer"  : "It takes approximately 400 cacao beans to make one pound of chocolate.",
				"a"		  : "D"
			},
			{
				"question": "Which company was the first one to make the chocolate bar in the world?", 
			  	"optionA" : "A. Hershey",
			  	"optionB" : "B. IBM",
			  	"optionC" : "C. Nestle",
			  	"optionD" : "D. Cadbury",
			  	"answer"  : "The English chocolate company Cadbury made the first chocolate bar in the world in 1842.",
				"a"		  : "D"
			},
			{
				"question": "What is a close estimate of Kisses chocolates that Hershey's produces a day?", 
			  	"optionA" : "A. over 1 million",
			  	"optionB" : "B. over 5 million",
			  	"optionC" : "C. over 80 million",
			  	"optionD" : "D. over 100 million",
			  	"answer"  : "Hershey’s produces over 80 million chocolate Kisses every day.",
				"a"		  : "C"
			},
			{
				"question": "So, where do you think the German chocolate originated from?", 
			  	"optionA" : "A. USA",
			  	"optionB" : "B. Germany",
			  	"optionC" : "C. Spain",
			  	"optionD" : "D. South America",
			  	"answer"  : "German chocolate cake was named after Sam German, an American, and did not originate in Germany.",
				"a"		  : "A"
			},
			{
				"question": "Which American holiday sells the most chocolate?", 
			  	"optionA" : "A. Valentine's",
			  	"optionB" : "B. Diwali",
			  	"optionC" : "C. Halloween",
			  	"optionD" : "D. Easter",
			  	"answer"  : "Approximately 71 million pounds of chocolate candy is sold during the week leading up to Easter. Only 48 million pounds of chocolate is sold during Valentine’s week. In contrast, over 90 million pounds of chocolate candy is sold in the last week of October leading up to Halloween.",
				"a"		  : "C"
			},
			{
				"question": "Which one is a proven health fact found in chocolate?", 
			  	"optionA" : "A. Improves problem-solving skills",
			  	"optionB" : "B. Promotes lower blood pressure",
			  	"optionC" : "C. Boosts memory",
			  	"optionD" : "D. All of the above",
			  	"answer"  : "Research suggests that dark chocolate boosts memory, attention span, reaction time, and problem-solving skills by increasing blood flow to the brain. Studies have also found that dark chocolate can improve the ability to see in low-contrast situations (such as poor weather) and promote lower blood pressure, which has positive effects on cholesterol levels, platelet function, and insulin sensitivity.",
				"a"		  : "D"
			}
		];
		var i = questions.length,
		    j = 0;

		while (i--) {
		    j = Math.floor(Math.random() * (i+1));
		    randomQuestions.push(questions[j]);
		    questions.splice(j,1);
		}
		/*-------------------------------------*/
		this.loadQuestion = function(){
			$(".question").text("Q"+questionNumber+" "+randomQuestions[questionNumber-1].question);
			
			$(".radioIdentifier").html('<input id="option" type="radio" name="field" value="A">'+
							  		'<label for="option"><span><span></span></span>'+randomQuestions[questionNumber-1].optionA+'</label><br>'+
							  		'<input id="option" type="radio" name="field" value="B">'+
							  		'<label for="option"><span><span></span></span>'+randomQuestions[questionNumber-1].optionB+'</label><br>'+
							  		'<input id="option" type="radio" name="field" value="C">'+
							  		'<label for="option"><span><span></span></span>'+randomQuestions[questionNumber-1].optionC+'</label><br>'+
							  		'<input id="option" type="radio" name="field" value="D">'+
							  		'<label for="option"><span><span></span></span>'+randomQuestions[questionNumber-1].optionD+'</label>'
			);					  	    
		}
		this.loadAnswer = function(){
			$(".question").text("Q"+questionNumber+" "+randomQuestions[questionNumber-1].question);
			$(".answer").text(randomQuestions[questionNumber-1].answer);
		}
	}
/*************************************/
});