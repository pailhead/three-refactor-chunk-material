import * as THREE from 'three'
import ChunkMaterial from '../ChunkMaterial'
import vertexShader from './template.vert'
import fragmentShader from './template.frag'

/**
 * @author  pailhead / http://dusanbosnjak.com
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 * }
 */

export default class LambertMaterial extends ChunkMaterial {
    constructor(parameters) {
        //declare parameters for this material
        const defaultParameters = {
            color: new THREE.Color(0xffffff),
            map: null,
            lightMap: null,
            lightMapIntensity: 1.0,
            aoMap: null,
            aoMapIntensity: 1.0,
            emissive: new THREE.Color(0x000000),
            emissiveIntensity: 1.0,
            emissiveMap: null,
            specularMap: null,
            alphaMap: null,
            envMap: null,
            combine: THREE.MultiplyOperation,
            reflectivity: 1,
            refractionRatio: 0.98
        }

        const uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.specularmap,
            THREE.UniformsLib.envmap,
            THREE.UniformsLib.aomap,
            THREE.UniformsLib.lightmap,
            THREE.UniformsLib.emissivemap,
            THREE.UniformsLib.fog,
            THREE.UniformsLib.lights,
            {
                emissive: { value: new THREE.Color(0x000000) }
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

        this.lights = true
    }
}
