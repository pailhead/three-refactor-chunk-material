import defaultChunks from './chunks'

//modified version of parseIncludes from WebGLRenderer, this one considers outside chunks
export function parseIncludes(string, optionalChunks = {}) {
    var pattern = /^[ \t]*#include +<([\w\d.]+)>/gm

    function replace(match, include) {
        var replace = optionalChunks[include] || defaultChunks[include]

        if (replace === undefined) {
            throw new Error('Can not resolve #include <' + include + '>')
        }

        return parseIncludes(replace)
    }

    return string.replace(pattern, replace)
}
