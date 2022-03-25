# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Gabriel Miki-Silva

Time spent: 3 hours spent in total

Link to project: https://dear-lean-club.glitch.me

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:
Added 3 difficulties, which simply set the size of the array that will be used for the pattern.

- [ ] List anything else that you can get done to improve the app!
      Add toggle buttons for customization

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/SUJNhtDDyH.gif)
![](http://g.recordit.co/nsiGU04ItU.gif)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   I decided to add 3 levels of difficulty, and at first was a little confusing because I wanted to have different functions depending on the functionality. I started doing this by copying and pasting the existing functions, and making small changes, for example, if the “Easy” difficulty was chosen, then it would call the “startGame2()” function, which did the exact same thing as the normal function, but it used a different array. Thankfully, I then I realized that it would be a better approach to add parameters to the existing functions, which is what I did. However, the "guess()" function used an array that was predetermined, which meant that I would have to have repeated sections of code depending on the selected difficulty. To do this I simply passed an integer as a parameter on the buttons, which then was stored into a global variable, which was then used by the "guess()" function, where I used a switch to compare the variable and to determine what to do.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   I was able to understand pretty good all of the instructions, however I am still not very familiarized with CSS, and in fact, I still do not understand why the "gameButtonArea" has a " > button" at the end, but not the other ids that modify the buttons.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   I am happy with how the logic turned out, but I would like to add more customization, like adding toggle options for the speed, having the option to change the colors of the buttons, adding more variation to the difficulties, adding an “infinite” mode, where the users keep playing until they lose, and trying to add different sounds, not only tones. I would also like to spend more time in the CSS file so that it can look better.

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright Gabriel Miki-Silva

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
