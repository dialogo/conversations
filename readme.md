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

##Technical Specifications

###Workflow
The project workflow is being managed by Yeoman.
Bower will be used to add components to the project.

###Raw Functionality
This lists the functionality that the app needs to have.
- HTML5 Audio Player
- HTML5 Video Player
- Local DB
- Subtitles
- Random mutes
- Random text omissions
- Touch events

###Technical Requirements
- Fast and optimized
- Clean
- Use Bootstrap but don't make it look like it.

###Component To-Do
- Video JS
  - [Get current time of video](http://stackoverflow.com/questions/6380956/current-duration-time-of-html5-video)
  - Have time as listener for captions
  - Randomizer to remove phrases

###Structure
####Models (LeBron James)
- Lesson or Conversation
- User

####Views (Game)
- Conversation Selection
- Conversation Lesson

####Controllers (Miami Heat)

###Data File
Preliminary data file.  
(TODO) See if it can be optimized

```
{
	"lesson": {
		"name": "Name",
		"duration": "00:00",
		"videoFile": "video.mp4",
		"audioFile": "audio.mp3",
		"cues": {
			"line": {
				"start": "0:00",
				"end": "0:03",
				"caption": "Good morning",
				"person": "user"
			}
		}
	}
}
```

##Design

###Inspiration
