Proposal: MMA Sports Betting Dashboard

It's fight week!!! And that means it's time to make your Draftkings picks for
this Saturdays fight card. But I'm tired of going back and forth from my
Draftkings app and clicking through Sherdog.com for fighter stats and info.
What would be nice is if there was one place to look at all upcoming fights and
easily compare the fighter stats of an upcoming match-up.

The Fight-Pick Dashboard will let you :

* Organize all the upcoming match ups you are
interested in.

* Make fighter to fighter comparisons based on stats, records, and betting odds.

* Tallies your record of wins or losses picked.

In the future this app could be expanded to:

* Calculate your picks based on the Draftkings salary cap.

* Provide tips for improving your fight picks.


Wireframes:

![img_0864](https://git.generalassemb.ly/storage/user/7129/files/a6002f80-75ff-11e7-84ba-d55544fb7242)
![img_0865](https://git.generalassemb.ly/storage/user/7129/files/a5efbc2c-75ff-11e7-85cb-2c0be7a187a2)
![img_0866](https://git.generalassemb.ly/storage/user/7129/files/a60fbd6a-75ff-11e7-9b72-ce1fe0cca5e9)
![img_0867](https://git.generalassemb.ly/storage/user/7129/files/a62e3858-75ff-11e7-9ae6-b10022dff0e4)
![img_0869](https://git.generalassemb.ly/storage/user/7129/files/a61d9390-75ff-11e7-9983-803cbdb8bc75)


App structure:

This app will need user authentication. With out being logged in you could view
up and coming fights but to view and use any other route a user will need to be
logged in.

Once logged in a users can view their fight picks page or view up and coming
fights. When the user clicks to view a particular match they will be directed to
an page comparing the fighters stats. On that page a user can click to add a
fighter to their fight picks list. The users list can be updated, edited, or
deleted.

Phases of Completion:

1. File Structure set-up.
2. Set up mvc and user authentication.
3. Render data and fighter images to page.
4. Add algorithms to compare fighter stats.

Resources:

Github MMA API
https://github.com/valish/mma-api
