# Kettering Clubs App

##Background
Three years ago, @ericbarch and myself created the Kettering Open Source Club to fill the gap in computing clubs at Kettering university. As a club president, I learned many things about leadership and the bureaucracy that is KSG(Kettering Student Government). 

One of the requirements was that a formal sign-in be administered at each meeting. These sheets would be turned in weekly and used by KSG to determine how much money your club got based on attendance reported by the sign in sheets. Simple right? 

It was pretty easy though to lose or forget to turn in a sheet. KSG also tried (and failed miserably) to implement a digital sign-in system in which clubs were required to put sign-in sheets onto non-Kettering owned IT assets (Dropbox/Google Drive). Managing the privileges in this system was a nightmare. There had to be a better way.

----------
##How it works

The system has a few different parts 

* A server backend which administers codes
* A client mobile app(likely HTML5) to let users sign in.

Each club is in a database and has listed what the date each club's weekly meeting is. Within 30 minutes of the start of the scheduled meeting and up to two hours after the scheduled end of the meeting, the application makes available a sign-in code.

A designated meeting administrator (usually the club president) signs in on the client app and serves as the "bouncer" for the meeting. A QR code gets displayed on the client app which other users can scan. The "bouncer" can even print off this code and associated short url before the meeting.

As of right now, I'm just working on the server side application for managing the clubs and creating the codes. I hope to just be able to make it responsive enough that it could work on any modern smartphone browser for the purposes of signing in.

##Questions and Challenges

###But Don, not everyone has a smartphone.
Well, it's the 21st century and we go to an engineering school. For every club, there's likely going to be someone with a smartphone that can act as "bouncer" for the meeting. As everyone might not have access to a device capable of hitting a url, I hope to add a feature that will let the bouncer scan the student id cards of anyone who elects to sign in with student ID.

###But Don, IT is less than willing to give students access to API's and authentication resources(LDAP, etc).
I DON'T NEED THEM! Ever since the school switched over to Google apps, I don't need access to any Kettering internal server/database/service. I can just use Google oauth to verify that KU students are who they say they are. The oath call's return the user's e-mail after they've been signed in, and all it requires is a check for @kettering.edu. This means you only need to be logged into your Kettering gmail/drive/calendar account on the device you're using the app from in order to be authenticated.

###But Don, won't IT call this heresy because it's not one of their Oracle APEX apps?
Probably. I fully anticipate them to either just completely ignore this project, or refuse to adopt it because they probably think Node and Mongo are whichcraft. If that's the case, maybe I can convince KSG to pay external hosting (Heroku etc). Either way, I can at least have the satisfaction of knowing I tried to make things better. 

###Why are you doing this?
My web skills were gettering rusty between the end of the spring work term and now. I had this idea and it seemed to be about the scale and scope of a project I'd have one workday to complete at Livio's lab-days. I wanted to see if I really could implement something quickly using boilerplate Node project templates on Github. I also just bought a Chromebook and needed an excuse to evaluate online code editors like Cloud9.


----------


## Getting Started

To install the app locally, you'll need Node.js and MongoDB.

Clone this repository

    $ npm install
    $ npm start
In order to get the project to work, you'll need to add your own database and API key data to config.js. I don't commit this file just so people won't see how to access my development database or try to copy my app secret key for Google authentication. If you don't want  to install MongoDB locally, you can get free sandbox database hosting at [MongoLab][1].



  [1]: https://mongolab.com/
