#Dialogo Conversation App

###Lesson (App) Flow
The factor that determines the difficulty of the lessons is the 
omission of the dialog. The dialog will be in written format 
(captions) and aural(voice over). The last level of difficulty 
won't have caption or audio.

##Screens

- **Splash** - The splash screen will have a description of the app. 
The description will be written and spoken.
- **New User** - The user will enter in their name(textfield) and 
their gender(checkmark). The app will save this information locally.
- **Login** - If the user has already registered their name and gender, 
a button will show their name to choose from.
- **Conversation(Lesson) Selection** - This screen will have a box list 
of the conversations that are available and any future conversations. 
The user will select the desired conversation.
- **Difficulty Selection** - This screen will have a one paragraph 
description of the conversation that they chose. It will have a list 
of the levels of difficulty and a description of what difficulty level entails.
- **Evaluator prompt** - The app will ask the user if they have a caretaker, 
speech pathologist to evaluate them or if they will self evaluate.
- **Lesson** - The lesson screen will have the video player at the top 
and on the bottom it will have the caption on a waterfall format. The 
dialog that the person has to repeat will be in a different visual indicator. 
The video will display an overlay indicating their turn.
- **Evaluation** - The evaluation screen will be star based evaluation. 
The user or caretaker will evaluate from 1 to 5. On this screen it will 
have a textual reference of what each rating represents.

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

###What does it need to do
- Register user
  - Record name
  - Record progress
  - Record Evaluation score
- Lessons
  - List them
  - Launch individual one
- Lesson
  - Load captions
  - Load video

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

###Structure
####Models (A Single Lesson or Single User)
- Lesson or Conversation
- User
  - It will store the users personal info
  - It will store the score of the self evaluation of the lesson

####Controllers (What we do with a Lesson or User)
- 

####Views (How we display)
- Conversation Selection
- Conversation Lesson

###Suggested Technical Approach

####Components
- Video JS
  - [Get current time of video](http://stackoverflow.com/questions/6380956/current-duration-time-of-html5-video)
  - Have time as listener for captions
  - Randomizer to remove phrases
  - <https://github.com/zurb/html5_video_voting/blob/master/javascripts/application.js>

####Lesson Video
The video will have a data sheet file that has cue points. These cue 
points will be synched with the time of the video. I should run an 
if statement if time is >== entry time and <== end time it should
display the approapriate caption data in the ul.

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

Suggested Captions  

```
1
00:00:00,000 --> 00:00:07,200
[Background Music Playing]

2
00:00:16,000 --> 00:00:17,200
Welcome to this week's episode

3
00:00:17,400 --> 00:00:19,000
of explore California

```

###Libraries
- <http://damirfoy.com/iCheck/>

##Design
- Fonts: ` @import url(http://fonts.googleapis.com/css?family=Domine:400,700|Neuton|PT+Sans|Satisfy|Merienda|Berkshire+Swash|Sanchez|Marko+One|Scada); `

###Inspiration
- <http://pinterest.com/pin/31103053647864959/>
- <http://pinterest.com/pin/31103053648477596/>