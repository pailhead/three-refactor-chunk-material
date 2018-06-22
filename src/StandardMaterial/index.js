import * as THREE from 'three'
import ChunkMaterial from '../ChunkMaterial'
import vertexShader from './template.vert'
import fragmentShader from './template.frag'

/**
 * @author  pailhead / http://dusanbosnjak.com
 *
 * parameters = {
 *  color: <hex>,
 *  roughness: <float>,
 *  metalness: <float>,
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
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalMapType: THREE.TangentSpaceNormalMap,
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  roughnessMap: new THREE.Texture( <Image> ),
 *
 *  metalnessMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  envMapIntensity: <float>,
 *
 *  refractionRatio: <float>,
 * }
 */

export default class PhongMaterial extends ChunkMaterial {
    constructor(parameters) {
        //declare parameters for this material
        const defaultParameters = {
            color: new THREE.Color(0xffffff),
            roughness: 0.5,
            metalness: 0.5,
            map: null,
            lightMap: null,
            lightMapIntensity: 1.0,
            aoMap: null,
            aoMapIntensity: 1.0,
            emissive: new THREE.Color(0x000000),
            emissiveIntensity: 1.0,
            emissiveMap: null,
            bumpMap: null,
            bumpScale: 1,
            normalMap: null,
            normalMapType: THREE.TangentSpaceNormalMap,
            normalScale: new THREE.Vector2(1, 1),
            displacementMap: null,
            displacementScale: 1,
            displacementBias: 0,
            roughnessMap: null,
            metalnessMap: null,
            alphaMap: null,
            envMap: null,
            envMapIntensity: 1.0,
            refractionRatio: 0.98
        }

        const uniforms = THREE.UniformsUtils.merge([
            THREE.UniformsLib.common,
            THREE.UniformsLib.envmap,
            THREE.UniformsLib.aomap,
            THREE.UniformsLib.lightmap,
            THREE.UniformsLib.emissivemap,
            THREE.UniformsLib.bumpmap,
            THREE.UniformsLib.normalmap,
            THREE.UniformsLib.displacementmap,
            THREE.UniformsLib.roughnessmap,
            THREE.UniformsLib.metalnessmap,
            THREE.UniformsLib.fog,
            THREE.UniformsLib.lights,
            {
                emissive: { value: new THREE.Color(0x000000) },
                roughness: { value: 0.5 },
                metalness: { value: 0.5 },
                envMapIntensity: { value: 1 } // temporary
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

        //per mat stuff
        this.lights = true
        this.defines = { STANDARD: '' }
    }
}
