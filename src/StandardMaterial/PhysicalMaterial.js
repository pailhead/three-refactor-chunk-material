import StandardMaterial from './index'

export default class PhysicalMaterial extends StandardMaterial {
    constructor(parameters) {
        super(parameters)

        this.defines = { PHYSICAL: '' }

        const defaultParameters = {
            reflectivity: 0.5,
            clearCoat: 0.0,
            clearCoatRoughness: 0.0
        }

        //this could go away if parameters have the same names as uniforms?
        this.extendUniforms({
            clearCoat: { value: 0 },
            clearCoatRoughness: { value: 0 }
        })

        //can add from outside too
        this.initParameters(defaultParameters, parameters)
    }
}
