$(function() {

	// chat aliases
	var you = 'You';
	var robot = 'Navee';

	// slow reply by 400 to 800 ms
	var delayStart = 400;
	var delayEnd = 800;

	// initialize
	var bot = new chatBot();
	var chat = $('.chat');
	var waiting = 0;
	$('.busy').text(robot + ' is typing...');

	// submit user input and get chat-bot's reply
	var submitChat = function() {

		var input = $('.input input').val();
		if(input == '') return;

		$('.input input').val('');
		updateChat(you, input);

		var reply = bot.respondTo(input);
		if(reply == null) return;

		var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
		$('.busy').css('display', 'block');
		waiting++;
		setTimeout( function() {
			if(typeof reply === 'string')
				updateChat(robot, reply);
			else
				for(var i = 0; i < reply.length; i++)
				{
					updateChat(robot, reply[i]);
					if (reply[i] == 'Berserk from Kentarō Miura')
					{
						updateChat2(robot, "Set in a medieval Europe-inspired dark fantasy world, the story centers on isolation, camaraderie, and the question of whether humanity is fundamentally good or evil. Graphic violence and sexual content pervade the story.");
						updateChat(robot, "Are you tempted? Just click on the picture and start reading!");
						updateChat(robot, "Otherwise don’t worry, I have some other ideas for you.");
					}
				}
			if(--waiting == 0) $('.busy').css('display', 'none');
		}, latency);
	}

	var display_image = function(src, width, height, alt)
	{
		var img = document.createElement("img");
		img.src = 'img/berserk.jpg';
		img.width = 150;
		img.height = 250;
		img.alt = 'berserk';
		chat.append(img);
	}

	// add a new line to the chat
	var updateChat = function(party, text) {

		var style = 'you';
		if(party != you) {
			style = 'other';
		}


		var line = $('<div class="row"><span class="party "></span> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').addClass(style).text(party + ':');
		line.find('.text').text(text);

		chat.append(line);

		if (text == 'Berserk from Kentarō Miura')
		{
			display_image('img/berserk.jpg', 150, 250, 'berserk');
		}

		chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});

	}

	var updateChat2 = function(party, text) {

		var style = 'you';
		if(party != you) {
			style = 'other';
		}


		var line = $('<div class="row"><span class="party "></span> <div class="text"></div></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').addClass(style).text(party + ':');
		line.find('.text').text(text);

		chat.append(line);
		chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});

	}


	// event binding
	$('.input').bind('keydown', function(e) {
		if(e.keyCode == 13) {
			submitChat();
		}
	});
	$('.input a').bind('click', submitChat);

	// initial chat state
	updateChat(robot, "Hi, I'm Navee, nice to e-meet you!");
	updateChat(robot, "I'm Here to help you pick the best manga for you.");
	updateChat(robot, "First of all, are you a manga reader yet?");
});
