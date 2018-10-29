# ChunkMaterial for three.js

Flexible version of built-in materials for three.js.

## Introduction

Three.js has "built-in" materials. These usually represent:
- some "surface" effect, ie. various lighting models (lambert, phong, PBR)
- effects (toon, normal) 
- utilities (depth, distance)
- node specific (Line, Points, Sprite)

Out of the box they do their respective jobs, and have a high level interface:

```javascript
someMaterial.someMap = new Texture() //change the appearance of a material
someMaterial.someNumber = 5
someMaterial.receiveShadow = true //make it work with the rest of the system
```

Under the hood, three.js has a system that manages how GLSL is assembled. Three.js extends the GLSL syntax and is able to inject little snippets of code into a shader template. A shader template is some version of this:

```glsl
void main(){
	gl_Position = someResult;
}
```

When three encounters a template with `#include <some_chunk>` statements, it looks up a global dictionary `THREE.ShaderChunk` for the snippet, and replaces the statement with the shader string:

```glsl
#include <some_pars> //not glsl

void main() { //GLSL

        vec4 computationResult; //GLSL - a variable specific to the template, not the chunks
	
	#include <some_computation> //not GLSL (three replaces this with GLSL)

	gl_Position = computationResult; //GLSL
}
```

## Problems with built-in materials

There various issues with the built-in materials. If one wants to dig under the high level interface, the code that makes the system is scattered across the codebase. For shading alone (skinning not included):

- ***Chunks*** - [Found here.](https://github.com/mrdoob/three.js/tree/dev/src/renderers/shaders/ShaderChunk) Hold 99% of GLSL code. Available to three.js via `THREE.ShaderChunk` dictionary. 
- ***Shader templates*** [Found here.](https://github.com/mrdoob/three.js/tree/dev/src/renderers/shaders/ShaderLib) These hold a list of ordered `#include <some_chunk>` statements, that get replaced by three.js before compiling the shader. With some additional free uniforms and some `#define` branching
- ***Uniform libraries*** [Found here.](https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/UniformsLib.js) These are some common groupings of various uniforms, that various materials combine.
- ***Shader libraries*** [Found here.](https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib.js) These are all actually arguments for `THREE.ShaderMaterial`. Grouped together, these reference the templates and combine the uniforms.
- ***Materials*** [Found here.](https://github.com/mrdoob/three.js/tree/dev/src/materials) These are the high level interface objects, but they do not directly contain anything shader related. 

`THREE.WebGLRenderer` has to know about all of these types. This doesn't have to be, since it already knows how to work with `THREE.ShaderMaterial`. The `Material` interface is completely decoupled from the appropriate shader. The renderer owns the libraries and the chunks, and builds or looks up appropriate shaders. This causes a lot of coupling and a scaling issue, the more materials are added to the library, the more `WebGLRenderer` needs to know about them. 

It's similar with the `Material` super class. When serializing, [the super class knows about all the possible properties that any sub class can have](https://github.com/mrdoob/three.js/blob/dev/src/materials/Material.js#L136). This also causes a scaling issue, as more materials are added, or existing materials are extended with new properties, the super class always has to be kept in sync.

The shaders are blackboxed and only accessible through `onBeforeCompile` which comes with it's own plethora of problems. Extending shaders is possible, but cumbersome.


## An attempt to solve these problems

This is a refactor of the material system that moves the responsibility for ultimately building valid GLSL outside of three.js. 

All the materials are built on top of `THREE.ShaderMaterial` but retain the same interface as their built-in versions.

`onBeforeCompile` is used to bypass three's internal parsing system. The parser is modified to take the default provided chunks or optional user provided chunks, and parses the shader before three's had a chance to *(by the time the internal parser sees the template, it's valid GLSL, there's no extra syntax)*.

The templates (GLSL), uniforms and interface are all consolidated into one folder. The materials define their own properties, and a `ChunkMaterial` super class figures out how wire this to the uniforms. The parameters are abstracted and stored as a list, in order to make the serialization easier.


Theoretically `THREE.WebGLRenderer` could be made smaller by removing references to these materials. 

## Pitfalls

- currently only a limited set of shading properties (color, map, normalMap etc.) has been tested
- the most optimal strategy for building / tree shaking this should be found
- the idea is to be able to refactor the structure of the tamplates and chunks, this will lead to duplicated code
- some optimizations may be lost in the process of moving these out of the core
- tree shaking, i'm having trouble identifying the problem with the chunks, whats the best outcome with static analysis and would even fetching these remotely make sense


