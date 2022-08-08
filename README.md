[godot]: https://github.com/godotengine/godot

[fre]: https://github.com/frejs/fre
[fre-godot]: https://github.com/vercix/fre-godot

[ECMAScript]: https://github.com/Geequlim/ECMAScript
[javascript bindings]: https://github.com/Geequlim/ECMAScript

[QuickJS]: https://bellard.org/quickjs/


# Godot-Fre Demo Project


## What
<br>

This is a demo project for [fre-godot]. A [fre] fork for the [Godot] engine with [javascript bindings].

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


Actual [godot] project is in project folder.

<br>

## You need to bundle npm packages:

Because the javascript vm used, in the [Godot] engine with [javascript bindings], is [QuickJS].

<br>

>**Important: if you want to use the demo project and start changing the folder structure.  
See more details at the [javascript bindings] repository.**

<br>

## Important Notes:

1. Project is build using esbuild.

2. Have a look at `/src/fre-godot`

3. Its designmated for bundling in `scripts.json`.

4. Which is used in `/build.js`

<br>

- I did my own hack for injecting jsx imports from `/src/fre-godot`. See `injectFre` plugin in `/build.js`
