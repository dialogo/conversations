#Dialogo Conversation App

###Lesson (App) Flow
The factor that determines the difficulty of the lessons is the 
omission of the dialog. The dialog will be in written format 
(captions) and aural(voice over). The last level of difficulty 
won't have caption or audio.

##Screens
###Splash
The splash screen will have a description of the app. 
The description will be written and spoken.

###New User
The user will enter in their name(textfield) and 
their gender(checkmark). The app will save this 
information locally.

####Login Screen
If the user has already registered their name and gender, 
a button will show their name to choose from.

###Conversation Selection
This screen will have a box list of the conversations that 
are available and any future conversations. The user 
will select the desired conversation.

###Difficulty Level Selection
This screen will have a one paragraph description of the 
conversation that they chose. It will have a list of the 
levels of difficulty and a description of what 
difficulty level entails.

####Evaluator prompt
The app will ask the user if they have a caretaker, 
speech pathologist to evaluate them or if 
they will self evaluate.

###Lesson
The lesson screen will have the video player at the 
top and on the bottom it will have the caption on 
a waterfall format. The dialog that the person has to 
repeat will be in a different visual indicator. The 
video will display an overlay indicating their turn.

###Evaluation
The evaluation screen will be star based evaluation. The 
user or caretaker will evaluate from 1 to 5. On this 
screen it will have a textual reference of 
what each rating represents.

##Content
- 3 conversations
- Various levels per conversation
- After all levels completed, it unlocks a joke.

##App Features
- Voice over of all interface screens
- Input name and gender
- Checkmark to determine has a perdon to review progress
- Level selection
- Lesson
  - Video with audio
  - Captions
- Self evaluation
  - Peer evaluation
- Unlockable Joke
- When video is playing, if screen is touched, the option to go home will show overlaying the video.

##Technical Features

###Components
- HTML5 Audio Player
- HTML5 Video Player
- Local DB
- Touch events