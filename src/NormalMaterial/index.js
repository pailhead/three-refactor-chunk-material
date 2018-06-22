import * as THREE from 'three'
import ChunkMaterial from '../ChunkMaterial'
import vertexShader from './template.vert'
import fragmentShader from './template.frag'

/**
 * @author  pailhead / http://dusanbosnjak.com
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 * }
 */

export default class NormalMaterial extends ChunkMaterial {
    constructor(parameters) {
        //declare parameters for this material
        const defaultParameters = {
            opacity: 1,
            bumpMap: null,
            bumpScale: 1,
            normalMap: null,
            normalScale: new THREE.Vector2(1, 1),

            displacementMap: null,
            displacementScale: 1,
            displacementBias: 0
        }

        const uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.bumpmap,
            THREE.UniformsLib.normalmap,
            THREE.UniformsLib.displacementmap,
            {
                opacity: { value: 1.0 }
            }
        ])

        //init ShaderMaterial with templates and uniforms
        super({
            uniforms,
            vertexShader,
            fragmentShader,
            defaultParameters,
            parameters
        })
    }
}
