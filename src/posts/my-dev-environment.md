---
title: "A look around my dev environment"
date: "2019-11-29"
featuredImage: "./images/my-dev-environment.png"
tags: ["programming"]
---

Most of my life as a developer is wrapped up in [Visual Studio Code](https://code.visualstudio.com/). I love it - it's endlessly customisable and extendable, which is great when you have a burning need to impress your own personality upon your immediate environment.

Below I've linked to the VSCode extensions I use on the daily, along with the relevant settings from my `settings.json`. [Let me know](https://www.twitter.com/dentednerd) if any of these are useful to you!

#### Colours

I'm not a super girly girl, but in certain situations, cute is very much my aesthetic. Enter sailorhg's [fairyfloss](https://github.com/sailorhg/fairyfloss) theme. It's very much based on the colour palette seen in that most feminine of classic anime, Sailor Moon, but with a dark enough background to still go easy on those of us who prefer a dark scheme. The VSCode port lives [here](https://marketplace.visualstudio.com/items?itemName=nopjmp.fairyfloss).

```json
"workbench.colorTheme": "fairyfloss"
```

You might have guessed that I've based the colours of this very site on this theme too. What can I say? Watashi wa bishoujo senshi.

To easily differentiate between repos, I use [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) to change the colour of the workspace. I keep it subtle though - just enough colour to know which repo I'm working in at a glance, but not so much that it's distracting. I've set the colours to match the fairyfloss theme - it's all in the details.

```json
"peacock.affectActivityBar": true,
"peacock.affectTitleBar": false,
"peacock.affectStatusBar": false,
"peacock.elementAdjustments": {
  "statusBar": "darken"
},
"peacock.darkenLightenPercentage": 10,
"peacock.favoriteColors": [
  {
    "name": "FairyFloss Pink",
    "value": "rgba(252,184,209,1)",
  },
  {
    "name": "FairyFloss Yellow",
    "value": "rgba(241,206,56,1)",
  },
  {
    "name": "FairyFloss Green",
    "value": "rgba(184,255,218,1)",
  },
  {
    "name": "FairyFloss Blue",
    "value": "rgba(100,187,255,1)",
  },
  {
    "name": "FairyFloss Purple",
    "value": "rgba(190,150,255,1)",
  },
]
```

Here are some further customisations I've made to the colours in VSCode, in keeping with the theme but also maximising readability:

```json
"workbench.colorCustomizations" : {
  "terminal.background" : "#332E4A",
  "editor.selectionBackground": "#be96e1",
  "editor.selectionHighlightBackground": "#be96e1",
  "editor.lineHighlightBackground": "#8B6897",
  "editor.wordHighlightBackground": "#be96e1",
  "editor.findMatchBackground": "#be96e1",
  "editor.findMatchHighlightBackground": "#9c74c0"
}
```

#### Readability

[Fira Code](https://github.com/tonsky/FiraCode) is an excellent font choice for programmers. It renders characters in a very readable way by employing ligatures (that's a typographical term to describe two characters that are joined together to form a single glyph).

```json
"editor.fontFamily": "'Fira Code', Menlo, Monaco, 'Courier New', monospace",
"editor.fontLigatures": true
```

Lately, however, I've been trying out [Jetbrains Mono](https://www.jetbrains.com/lp/mono/), which has been specifically designed to decrease eye strain. It also has ligatures, and uses taller letter formation.

If you struggle to follow indentations every now and then, [Indent-Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) colorizes each step of indentation in your code. I use a rotation of five custom colours to match the fairyfloss theme. Details!

```json
"indentRainbow.colors": [
  "rgba(255,174,203,0.2)",
  "rgba(255,225,50,0.2)",
  "rgba(184,255,218,0.2)",
  "rgba(100,187,255,0.2)",
  "rgba(190,150,255,0.2)"
]
```

I've customised some of the CSS in [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) to better highlight the section of code I'm currently working in. I thought about matching the bracket colours to the Fairyfloss theme, but a) the automatic colours with BPC don't look out of place with the theme, and b) the slight distinction makes them easier to keep track of anyways. BPC is an invaluable extension to help you avoid errors from functions that haven't closed properly. I can't recommend it enough.

```json
"bracketPairColorizer.scopeLineCSS": [
  "borderStyle : dotted",
  "borderWidth : 2px",
  "borderColor : {color}; opacity: 0.75",
  "backgroundColor : {color}; opacity: 0.25"
]
```

#### Terminal

Let me head this section up with another recommendation - the [Command Line Power User](https://commandlinepoweruser.com/) video series by Wes Bos. It's been a big inspiration to me in achieving terminal zen. Here's a quick rundown of my setup:

- iTerm2 on Mac, Terminator on Ubuntu
- zsh and [Oh My ZSH!](https://ohmyz.sh/)
- Agnoster theme for Oh My ZSH!
- Fira Code font (or any [Powerline patched font](https://github.com/powerline/fonts) for the nifty special characters used by Agnoster
- [fairyfloss theme](https://github.com/aquartier/fairyfloss) for iTerm2, lightly customised for a darker background

In iTerm2, I've split up my default window into four panes, one for each of the repos I work with most often. I've set them up to run immediately on startup - one click to open iTerm, and a few seconds later all my Docker containers are up and running. No typing. Terminal zen.

Replicating this level of zen in VSCode's integrated terminal requires a few extra settings. To get VSCode to use iTerm, add these settings:

```json
"terminal.external.osxExec": "iTerm.app",
"terminal.explorerKind": "external",
```

With this, your integrated terminal will happily use zsh, Oh My ZSH and your chosen OMZ theme, but your iTerm colours likely won't match your external terminal. I had a looot of fun replicating the Fairyfloss theme in VSCode settings...

```json
"workbench.colorCustomizations" : {
  "terminal.background" : "#332E4A",
  "terminal.foreground":"#f8f8f2",
  "terminal.ansiBlack":"#332E4A",
  "terminal.ansiBrightBlack":"#8077a8",
  "terminal.ansiBlue": "#c5a3ff",
  "terminal.ansiBrightBlue":"#c5a3ff",
  "terminal.ansiCyan":"#c2ffdf",
  "terminal.ansiBrightCyan":"#c2ffdf",
  "terminal.ansiGreen":"#afecad",
  "terminal.ansiBrightGreen":"#afecad",
  "terminal.ansiMagenta":"#ffb8d1",
  "terminal.ansiBrightMagenta":"#ffb8d1",
  "terminal.ansiRed":"#ff857f",
  "terminal.ansiBrightRed":"#ff9e9a",
  "terminal.ansiWhite":"#f8f8f2",
  "terminal.ansiBrightWhite":"#feffff",
  "terminal.ansiYellow":"#ffea00",
  "terminal.ansiBrightYellow":"#ffea00",
  ...
},
```

One final recommendation:  [VSCode can do that?!](https://vscodecandothat.com/) lists a ton of features and extensions for VSCode that might make your dev life a little easier.

[Drop me a tweet](https://www.twitter.com/dentednerd) if you found anything in this post helpful!
