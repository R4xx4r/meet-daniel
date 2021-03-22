# MEET DANIEL

> Welcome to my personal portfolio page.

This page is built with [Vue.js](https://vuejs.org/) and created via [Vue CLI](https://cli.vuejs.org/). For more infos take a look at their pages. They have great docs! :thumbsup: :muscle: 

## Project setup
It's really simple, or at least I hope it is :wink:

```bash 
$ git clone git@github.com:R4xx4r/meet-daniel.git [PATH_TO_YOUR_DIR]
$ cd [PATH_TO_YOUR_DIR]
$ npm i
```

## NPM scripts
After installing our project you have some npm scripts available:

| command | description |
| ---------- | ---------- |
| `npm run icons` | Generates icon components from SVG's in folder `assets/svg` |
| `npm run serve` | Compiles and hot-reloads for development |
| `npm run build` | Compiles and minifies for production |
| `npm run lint` | Lints and fixes files |

## SVG handling
I use a npm package called `vue-svgicon`. If you have svg's which you wanna use in one of your components take following steps:
* create folder `assets/svg` (you can adapt all this in package.json scripts)
* if you adapt your output path in package.json please also adapt .gitignore so the generated files don't increase your repo size :wink:
* copy your SVG's in this folder
* run the script `npm run icons`
* go to the component you wanna use your svg
* import them `import [PATH_TO_ASSETS]/icons` or just one specific `[PATH_TO_ASSETS]/icons/[SPECIFIC_ONE]`
* use them like ` <svgicon name="[SVG_NAME]" height="16" width="16"></svgicon>`
<br>
The script runs automatically once you started `npm run serve` or `npm run build`. If you add a new SVG after this (especially for the serve command) you have to run it manually again.
<br>
For more info please look at the npm page [here](https://www.npmjs.com/package/vue-svgicon).

## Image handling
If you wanna use "my" project to adapt it to your needs, first of all **THANK YOU SO MUCH**, I really appreciate it!<br>
So back to topic :wink:. If you wanna use I think you have to adapt images too. Everytime I use images in json/data I used the path absolute from `assets/images` (this is the "base path"). So if your pic is in there just add the filename to the part, otherwise if you created a folder or something like that you have to adapt the methods where I build the src or just adapt the data for something like `folder/image.jpg`.

## Customize configuration
If you wanna adapt the basic configuration to your needs take a look at [Vue CLI configuration reference](https://cli.vuejs.org/config/).


## Bugs
You found a bug, have a new idea, an improvement, ... please write an [issue](https://github.com/R4xx4r/meet-daniel/issues). <br>
I really appreciate it - **YOU are awesome!** :sunglasses:
