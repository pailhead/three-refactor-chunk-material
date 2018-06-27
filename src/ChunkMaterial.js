import { parseIncludes, parseHooks } from './utils'

//some parameters have different uniform names
const SPECIAL_UNIFORM_MAPPING = {
    color: 'diffuse'
}

export default class ChunkMaterial extends THREE.ShaderMaterial {
    constructor({
        uniforms,
        vertexShader,
        fragmentShader,
        defaultParameters = {},
        parameters
    }) {
        super({
            uniforms,
            vertexShader,
            fragmentShader
        })

        Object.defineProperty(this, 'opacity', {
            get: () => this.uniforms.opacity.value,
            set: value => (this.uniforms.opacity.value = value)
        })

        this.materialParameters = Object.keys(defaultParameters)

        this.initParameters(defaultParameters, parameters)

        // console.log(this)

        //bypass three's compilation system alltogether
        this.onBeforeCompile = shader => {
            shader.vertexShader = parseHooks(
                parseIncludes(vertexShader, this.shaderChunks)
            )
            shader.fragmentShader = parseHooks(
                parseIncludes(fragmentShader, this.shaderChunks)
            )
        }
    }

    //initializes default parameters and hooks up uniforms
    initParameters(defaultParameters, optionalParameters = {}) {
        Object.keys(defaultParameters).forEach(paramName => {
            if (this.materialParameters.indexOf(paramName) === -1) {
                this.materialParameters.push(paramName)
            }
            //some parameters have different uniform names
            const uniformName = this.uniforms[
                SPECIAL_UNIFORM_MAPPING[paramName]
            ]
                ? SPECIAL_UNIFORM_MAPPING[paramName]
                : paramName

            //if there is a uniform
            if (this.uniforms[uniformName]) {
                Object.defineProperty(this, paramName, {
                    get: () => this.uniforms[uniformName].value,
                    set: value => (this.uniforms[uniformName].value = value)
                })
                console.log('uniform', paramName)
            } else {
                console.log('no uniform', paramName)
                //TODO: figure out what to do with these, probably shouldnt be on material
                //      or lookup some mapping and modify the uniform (param)
            }

            //wire input parameters, consider types and map appropriately
            //
            this[paramName] = defaultParameters[paramName]

            const currentValue = this[paramName]
            const optionalParam = optionalParameters[paramName]

            if (currentValue && currentValue.isColor && optionalParam) {
                currentValue.set(optionalParam)
            } else if (
                currentValue &&
                currentValue.isVector3 &&
                (optionalParam && optionalParam.isVector3)
            ) {
                currentValue.copy(optionalParam)
            } else if (optionalParam !== undefined) {
                this[paramName] = optionalParam
            }
        })
    }

    extendUniforms(extendedUniforms) {
        this.uniforms = THREE.UniformsUtils.merge([
            this.uniforms,
            extendedUniforms
        ])
    }
}
