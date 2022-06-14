# Godot-Fre Demo Project


## What
<br>

This is a demo project for <a href="https://github.com/Vercix/fre">fre-godot</a>. A fre fork for the Godot engine with <a href="https://github.com/GodotExplorer/ECMAScript">javascript bindings</a>.

<br>


## How to use

<br>

Start by installing the packages:

```shell
npm install
``` 

Then build root.
```shell
npm run watch
```


Actual godot project is in project folder.

<br>

## You need to bundle npm packages:

**Important if you want to use the demo project and start changing the folder structure.  
See more details at the <a href="https://github.com/GodotExplorer/ECMAScript#readme">javascript bindings repository</a>.**

<br>



Project is build using esbuild.

Have a look at `/src/fre-godot`

Its designmated for bundling in `scripts.json`.

Which is used in `/build.js`

I did my own hack for injecting jsx imports from `/src/fre-godot`. See `injectFre` plugin in `/build.js`
