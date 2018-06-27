// import defaultChunks from './chunks'

const defaultChunks = {}

//modified version of parseIncludes from WebGLRenderer, this one considers outside chunks
export function parseIncludes(string, optionalChunks = {}) {
    var pattern = /^[ \t]*#include +<([\w\d.]+)>/gm

    function replace(match, include) {
        // 1. first try to lookup a user provided chunk
        // 2. then try to lookup module provided chunks
        // 3. finally lookup three's default chunks
        var replace =
            optionalChunks[include] ||
            defaultChunks[include] ||
            THREE.ShaderChunk[include]

        if (replace === undefined) {
            throw new Error('Can not resolve #include <' + include + '>')
        }

        return parseIncludes(replace)
    }

    return string.replace(pattern, replace)
}

export function parseHooks(string, hooks = {}) {
    var pattern = /^[ \t]*%-- +([\w\d.]+) --%/gm

    function replace(match, include) {
        var replace = hooks[include] || '\n'

        // if (replace === undefined) {
        //     throw new Error('Can not resolve #include <' + include + '>')
        // }

        return parseHooks(replace)
    }

    return string.replace(pattern, replace)
}
