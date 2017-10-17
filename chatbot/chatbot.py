import	os
import	time
import	random
import	sys

# inputs
yes = ['yes', 'i love manga']
no = ['never', 'no', 'first timer']
mangas = ['naruto', 'one piece', 'death note', 'fairytail', 'bleach']
tvshows = ['breaking bad', 'game of thrones', 'bojack horseman', 'rick and morty', 'silicon valley']

# outputs
questions = ['Which are your favorite mangas?', 'What do you like to read and/or watch?']

newlines = '\n\n\n\n'
print (newlines)
bot = 'Bot-> '
user = 'User-> '

print bot + ('Hello\n') + bot + ('Have you read manga before?')
sys.stdout.write(user)

i = 1;
while i is 1:
	usermsj = raw_input()
	ask = usermsj.lower()
	if ask == '':
		i = 0
		print bot + ('cya')
	elif ask in yes:
		print bot + questions[0]
	elif ask in no:
		print bot + questions[1]
	elif ask in mangas or tvshows:
		i = 0
		print ('list, imgs, video, what is going to be displayed')
	else:
		print bot + ('dont know what you mean')
	sys.stdout.write(user)
