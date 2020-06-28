## Starting the Backend

Note: the non-default yarn scripts can be found in package.json

### yarn update-api

This will go into the api folder and automatically run pip install -r requirements.txt. Do this before proceeding.

### yarn start-api

This will run the flask backend which can be found in the "api" folder.

.env is in the .gitignore as we should not have keys out on Git. However, you can find the two pieces we need in info.txt (ironically). COGSVCS_CLIENTURL & COGSVCS_KEY.

.gitignore ignores both .env and venv from committing to the repository. Add more if needed.

api.py is the primary backend file. You can add routes, store info in a database, and do the bulk processing here.

api.pyc are binaries and should be in the .gitignore.

info.txt is where all Azure services information is stored.

requirements.txt is where all Flask dependencies are located.

## Starting the Frontend

### yarn install

This will refer to package.json and install all React frontend dependencies. Do this before proceeding.

### yarn start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Middle Tier

The middle tier makes it easy to call the Flask services from react. Essentially, it's a class found in the MiddleTier folder that uses axios to make calls. You can then instantiate an ApiService (MiddleTier instance) in any part of the frontend to make method calls with arguments.

You'll find that the format parallels the routes defined in api.py almost exactly.

## Useful Scripts Definitions

### yarn build

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Scripts we probably won't use Definitions

### yarn eject

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### yarn test

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Presentation Transcript :)

Oh, he's starting it.

I yeah.

All right?

This Is This Is there I do everything running.

Right on your machine.

I see that.

Yeah.

Hello.

Hello.

Hello.

Me too.

Correct?

Hello.

Good, how are you?

I let's, let's see what you got.

Alright, so we prepared a presentation and will do a live demo.

I think there's something girl of maybe silver should turn off her legs.

Yeah, just to only like keeping me until unless you're saying OK so.

Let's get the presentation ever.

So we'll start. The presentation is going to live demo.

Sorry, was the other is OK, so welcome to Microsoft Ideate you guys in here right right?

Yep.

OK awesome yeah. Welcome to Microsoft ID. So pretty much we saw that right now with COVID-19 and with quarantine happening a lot, a lot of students especially always like internships. We've seen mental health kind of go on the decline and a lot of people feeling awkward. And so we've all had the situation now coming back from school and joining in those team calls where things feel really forced an things feel super awkward and you kind of don't really know what to talk about. And so we thought, why don't we?

In a way to improve mental health and of the students and the people who are trying to strengthen their relationships that they already have. And so instead of trying to create new relationships, how we allow it. So the ones that you currently have can be a lot stronger with topics and things to talk about. Bothering things like teams, Skype or just talking with other people. So that way there's not an awkward pause between different things and you have a constant flow ideas using Microsoft services to get it done, and this will strengthen.

Existing social ties foster deeper connections and make people feel just closer when they're working remote. Even when you're living alone.

I'm.

So do I get everyone take their text app?

Yes, Sir, for the back end we developed it in Python using fast that I think Christopher was talking about yesterday and for the front end we use react which is like a JavaScript framework and we interface with a lot of Azure services that will touch on in the moment and then we deployed it on fire Rays.

Yeah, so the idea of IPA is that during virtual conversations like James calls that can be awkward and so people can run out of things to say they don't know what to say next, so idea isn't.

Conversation were having an suggests related conversation topics that you can be discussing and we also make intelligent recommendations or these suggestions to keep the conversation flowing naturally and will discuss the pipeline on the next slide.

So first, during the Microsoft Teams call, an idea will capture the audio from people speaking and then it will feed it into Azure cognitive speech services. Specifically, we use the speech to text to get the text transcript of the conversation and then we use Azure text analytics to extract the main idea of the conversation and finally we query Bing web search to get related topics which we provide.

The conversation participants.

So we can also integrate idea into any Microsoft product that has speech conversation such as teams, Xbox, right? And also Skype. So in this way we will be able to increase customer satisfaction of using these tools by creating this social good plug-in ideate in order to foster social connections and reduce social isolation during the time of social distancing and corn.

Yeah, so just to tell a story a little bit here. Let's say that you're coming from social distancing in quarantine, and you've been living alone in a condo for months. And it's not like I haven't been doing that. 'cause I had totally happen. I know exactly what it feels like, and so let's say I want to play Xbox with my friends, but I have no idea what the talk about, and I have no idea what to do to continue to conversation. Things are really awkward, and if things go bad, I know that my relationship with online gamer Slayer 24 will be ruined forever. And so if I use.

I'd hate, I'll be able to keep up that relationship. No one to talk about and even have ideas to talk about next time. So now let's see a live demo of this working in action. So here's here's the UI right now. As you can see, we base it off of the current existing from the current existing Microsoft UI developed in photo shop, just to give like a very realistic Microsoft Service, look up with the refresh the new Office 365 logos and the new teams logos and so this is what it looks like.

The way that it's going to work is it going to show you a transcript of everything you say? As you say it, and I'll even give you the most important thing, which is like what you last said right here. So it's like the most current of the conversation. And then once you're ready to get the topics that we've been talking about and the suggestions using the Bing search machine learning algorithms, it'll pop out some things. So let's just have an example. Let's start. So hey, how you doing? I'm having a great day right now, but I really want to talk about.

Eggs and bacon.

Uhm, actually let me talk about Xbox. I think the Xbox Series X is something that's really cool right now. I wonder how much it's going to cost.

PlayStation not for Maine.

I'm maybe I'm going to grab a Cup of coffee. It's been kind of a long day.

And now let's stop. So as you can see, what you last said is out because it's been in the transcript and we have everything we've been talking about. So it might be somewhat realistic. Look back on everything but how well, let's use our advanced get topics feature and see what we get.

I think it's just loading.

All right?

Let me just try one more time. Let's do a different.

I wanna try cooking eggs, bacon and all its.

OK, here we go. So this is an example. So those are the topics that we've been talking about in the last sentence, and it gives you all these different new things that you can talk about. So now that I've been talking about homeless and cooking eggs, maybe I can talk about potato, bacon omelettes or spatial bacon omelettes. Or ham and cheese bacon outlets. There's so many ideas that you can carry on to the next conversation. Let's try something different. Let's talk about just to show like the power Bing. Let's talk about like animals. Did you play the latest Animal Crossing game?

Um, how to raccoon? Maybe that should be my name.

So let's stop that and let's get some topics.

So that's like us. Come back from the Azure service, so it's it's loading right now from the topics that we suggest.

Think it's contacting Bing right now.

So.

I'm not actually sure that it's happening. I mean just fresh that.

Have you played the latest Animal Crossing game I think I'm going to go with the Raccoon.

Alright, let's see. Oh, there we go. So now it's showing you advice and topics that we suggest using completely. Microsoft services end to end. So that's I need you guys have any questions?

No, no, I I think we're good. So yeah, um, I'm I'm I'm glad to see that uh, you know we're we're making sure you can talk to to game Slayer 36.

Yeah, great work awesome.

Alright, thank you.

Hello.

Thanks.

It wasn't that bad.

I was just taking the last sentence right. So on a couple of them lost something too small to like, yeah?

Got to put the set to like, clear that field so I had to refresh it is giving me the same one from the last one 'cause I did that on that last field.

Yeah, I know, but it.

But then, like I was really good.

They seem happy.

Yeah.

I just I'm curious to see what I do. You like what other people made in the time frame is like that was not a long time.

Yeah, to be arraigned recorder video if you like.

I don't like the video that we have, only the picture we have.

Effort.

Try to Bernie Daniel is just that.

It's like it's a vertical video and everything.

You don't see the whole screen. It's like, oh look, there's some results at the bottom.
