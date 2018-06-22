import alphamap_fragment from './Chunks/alphamap_fragment.glsl'
import alphamap_pars_fragment from './Chunks/alphamap_pars_fragment.glsl'
import alphatest_fragment from './Chunks/alphatest_fragment.glsl'
import aomap_fragment from './Chunks/aomap_fragment.glsl'
import aomap_pars_fragment from './Chunks/aomap_pars_fragment.glsl'
import begin_vertex from './Chunks/begin_vertex.glsl'
import beginnormal_vertex from './Chunks/beginnormal_vertex.glsl'
import bsdfs from './Chunks/bsdfs.glsl'
import bumpmap_pars_fragment from './Chunks/bumpmap_pars_fragment.glsl'
import clipping_planes_fragment from './Chunks/clipping_planes_fragment.glsl'
import clipping_planes_pars_fragment from './Chunks/clipping_planes_pars_fragment.glsl'
import clipping_planes_pars_vertex from './Chunks/clipping_planes_pars_vertex.glsl'
import clipping_planes_vertex from './Chunks/clipping_planes_vertex.glsl'
import color_fragment from './Chunks/color_fragment.glsl'
import color_pars_fragment from './Chunks/color_pars_fragment.glsl'
import color_pars_vertex from './Chunks/color_pars_vertex.glsl'
import color_vertex from './Chunks/color_vertex.glsl'
import common from './Chunks/common.glsl'
import cube_uv_reflection_fragment from './Chunks/cube_uv_reflection_fragment.glsl'
import defaultnormal_vertex from './Chunks/defaultnormal_vertex.glsl'
import displacementmap_pars_vertex from './Chunks/displacementmap_pars_vertex.glsl'
import displacementmap_vertex from './Chunks/displacementmap_vertex.glsl'
import emissivemap_fragment from './Chunks/emissivemap_fragment.glsl'
import emissivemap_pars_fragment from './Chunks/emissivemap_pars_fragment.glsl'
import encodings_fragment from './Chunks/encodings_fragment.glsl'
import encodings_pars_fragment from './Chunks/encodings_pars_fragment.glsl'
import envmap_fragment from './Chunks/envmap_fragment.glsl'
import envmap_pars_fragment from './Chunks/envmap_pars_fragment.glsl'
import envmap_pars_vertex from './Chunks/envmap_pars_vertex.glsl'
import envmap_vertex from './Chunks/envmap_vertex.glsl'
import fog_vertex from './Chunks/fog_vertex.glsl'
import fog_pars_vertex from './Chunks/fog_pars_vertex.glsl'
import fog_fragment from './Chunks/fog_fragment.glsl'
import fog_pars_fragment from './Chunks/fog_pars_fragment.glsl'
import gradientmap_pars_fragment from './Chunks/gradientmap_pars_fragment.glsl'
import lightmap_fragment from './Chunks/lightmap_fragment.glsl'
import lightmap_pars_fragment from './Chunks/lightmap_pars_fragment.glsl'
import lights_lambert_vertex from './Chunks/lights_lambert_vertex.glsl'
import lights_pars_begin from './Chunks/lights_pars_begin.glsl'
import lights_pars_maps from './Chunks/lights_pars_maps.glsl'
import lights_phong_fragment from './Chunks/lights_phong_fragment.glsl'
import lights_phong_pars_fragment from './Chunks/lights_phong_pars_fragment.glsl'
import lights_physical_fragment from './Chunks/lights_physical_fragment.glsl'
import lights_physical_pars_fragment from './Chunks/lights_physical_pars_fragment.glsl'
import lights_fragment_begin from './Chunks/lights_fragment_begin.glsl'
import lights_fragment_maps from './Chunks/lights_fragment_maps.glsl'
import lights_fragment_end from './Chunks/lights_fragment_end.glsl'
import logdepthbuf_fragment from './Chunks/logdepthbuf_fragment.glsl'
import logdepthbuf_pars_fragment from './Chunks/logdepthbuf_pars_fragment.glsl'
import logdepthbuf_pars_vertex from './Chunks/logdepthbuf_pars_vertex.glsl'
import logdepthbuf_vertex from './Chunks/logdepthbuf_vertex.glsl'
import map_fragment from './Chunks/map_fragment.glsl'
import map_pars_fragment from './Chunks/map_pars_fragment.glsl'
import map_particle_fragment from './Chunks/map_particle_fragment.glsl'
import map_particle_pars_fragment from './Chunks/map_particle_pars_fragment.glsl'
import metalnessmap_fragment from './Chunks/metalnessmap_fragment.glsl'
import metalnessmap_pars_fragment from './Chunks/metalnessmap_pars_fragment.glsl'
import morphnormal_vertex from './Chunks/morphnormal_vertex.glsl'
import morphtarget_pars_vertex from './Chunks/morphtarget_pars_vertex.glsl'
import morphtarget_vertex from './Chunks/morphtarget_vertex.glsl'
import normal_fragment_begin from './Chunks/normal_fragment_begin.glsl'
import normal_fragment_maps from './Chunks/normal_fragment_maps.glsl'
import normalmap_pars_fragment from './Chunks/normalmap_pars_fragment.glsl'
import packing from './Chunks/packing.glsl'
import premultiplied_alpha_fragment from './Chunks/premultiplied_alpha_fragment.glsl'
import project_vertex from './Chunks/project_vertex.glsl'
import dithering_fragment from './Chunks/dithering_fragment.glsl'
import dithering_pars_fragment from './Chunks/dithering_pars_fragment.glsl'
import roughnessmap_fragment from './Chunks/roughnessmap_fragment.glsl'
import roughnessmap_pars_fragment from './Chunks/roughnessmap_pars_fragment.glsl'
import shadowmap_pars_fragment from './Chunks/shadowmap_pars_fragment.glsl'
import shadowmap_pars_vertex from './Chunks/shadowmap_pars_vertex.glsl'
import shadowmap_vertex from './Chunks/shadowmap_vertex.glsl'
import shadowmask_pars_fragment from './Chunks/shadowmask_pars_fragment.glsl'
import skinbase_vertex from './Chunks/skinbase_vertex.glsl'
import skinning_pars_vertex from './Chunks/skinning_pars_vertex.glsl'
import skinning_vertex from './Chunks/skinning_vertex.glsl'
import skinnormal_vertex from './Chunks/skinnormal_vertex.glsl'
import specularmap_fragment from './Chunks/specularmap_fragment.glsl'
import specularmap_pars_fragment from './Chunks/specularmap_pars_fragment.glsl'
import tonemapping_fragment from './Chunks/tonemapping_fragment.glsl'
import tonemapping_pars_fragment from './Chunks/tonemapping_pars_fragment.glsl'
import uv_pars_fragment from './Chunks/uv_pars_fragment.glsl'
import uv_pars_vertex from './Chunks/uv_pars_vertex.glsl'
import uv_vertex from './Chunks/uv_vertex.glsl'
import uv2_pars_fragment from './Chunks/uv2_pars_fragment.glsl'
import uv2_pars_vertex from './Chunks/uv2_pars_vertex.glsl'
import uv2_vertex from './Chunks/uv2_vertex.glsl'
import worldpos_vertex from './Chunks/worldpos_vertex.glsl'

//TODO: hook these up later

// import cube_frag from './ShaderLib/cube_frag.glsl'
// import cube_vert from './ShaderLib/cube_vert.glsl'
// import depth_frag from './ShaderLib/depth_frag.glsl'
// import depth_vert from './ShaderLib/depth_vert.glsl'
// import distanceRGBA_frag from './ShaderLib/distanceRGBA_frag.glsl'
// import distanceRGBA_vert from './ShaderLib/distanceRGBA_vert.glsl'
// import equirect_frag from './ShaderLib/equirect_frag.glsl'
// import equirect_vert from './ShaderLib/equirect_vert.glsl'
// import linedashed_frag from './ShaderLib/linedashed_frag.glsl'
// import linedashed_vert from './ShaderLib/linedashed_vert.glsl'
// import meshbasic_frag from './ShaderLib/meshbasic_frag.glsl'
// import meshbasic_vert from './ShaderLib/meshbasic_vert.glsl'
// import meshlambert_frag from './ShaderLib/meshlambert_frag.glsl'
// import meshlambert_vert from './ShaderLib/meshlambert_vert.glsl'
// import meshphong_frag from './ShaderLib/meshphong_frag.glsl'
// import meshphong_vert from './ShaderLib/meshphong_vert.glsl'
// import meshphysical_frag from './ShaderLib/meshphysical_frag.glsl'
// import meshphysical_vert from './ShaderLib/meshphysical_vert.glsl'
// import normal_frag from './ShaderLib/normal_frag.glsl'
// import normal_vert from './ShaderLib/normal_vert.glsl'
// import points_frag from './ShaderLib/points_frag.glsl'
// import points_vert from './ShaderLib/points_vert.glsl'
// import shadow_frag from './ShaderLib/shadow_frag.glsl'
// import shadow_vert from './ShaderLib/shadow_vert.glsl'

//TODO: it's either this, or each material have a list of it's own require('somechunk.glsl')
//      it leads to duplication, the template already holds all the names and a regex could extract them
//      but then it requires a dynamic import

const Chunks = {
    alphamap_fragment,
    alphamap_pars_fragment,
    alphatest_fragment,
    aomap_fragment,
    aomap_pars_fragment,
    begin_vertex,
    beginnormal_vertex,
    bsdfs,
    bumpmap_pars_fragment,
    clipping_planes_fragment,
    clipping_planes_pars_fragment,
    clipping_planes_pars_vertex,
    clipping_planes_vertex,
    color_fragment,
    color_pars_fragment,
    color_pars_vertex,
    color_vertex,
    common,
    cube_uv_reflection_fragment,
    defaultnormal_vertex,
    displacementmap_pars_vertex,
    displacementmap_vertex,
    emissivemap_fragment,
    emissivemap_pars_fragment,
    encodings_fragment,
    encodings_pars_fragment,
    envmap_fragment,
    envmap_pars_fragment,
    envmap_pars_vertex,
    envmap_vertex,
    fog_vertex,
    fog_pars_vertex,
    fog_fragment,
    fog_pars_fragment,
    gradientmap_pars_fragment,
    lightmap_fragment,
    lightmap_pars_fragment,
    lights_lambert_vertex,
    lights_pars_begin,
    lights_pars_maps,
    lights_phong_fragment,
    lights_phong_pars_fragment,
    lights_physical_fragment,
    lights_physical_pars_fragment,
    lights_fragment_begin,
    lights_fragment_maps,
    lights_fragment_end,
    logdepthbuf_fragment,
    logdepthbuf_pars_fragment,
    logdepthbuf_pars_vertex,
    logdepthbuf_vertex,
    map_fragment,
    map_pars_fragment,
    map_particle_fragment,
    map_particle_pars_fragment,
    metalnessmap_fragment,
    metalnessmap_pars_fragment,
    morphnormal_vertex,
    morphtarget_pars_vertex,
    morphtarget_vertex,
    normal_fragment_begin,
    normal_fragment_maps,
    normalmap_pars_fragment,
    packing,
    premultiplied_alpha_fragment,
    project_vertex,
    dithering_fragment,
    dithering_pars_fragment,
    roughnessmap_fragment,
    roughnessmap_pars_fragment,
    shadowmap_pars_fragment,
    shadowmap_pars_vertex,
    shadowmap_vertex,
    shadowmask_pars_fragment,
    skinbase_vertex,
    skinning_pars_vertex,
    skinning_vertex,
    skinnormal_vertex,
    specularmap_fragment,
    specularmap_pars_fragment,
    tonemapping_fragment,
    tonemapping_pars_fragment,
    uv_pars_fragment,
    uv_pars_vertex,
    uv_vertex,
    uv2_pars_fragment,
    uv2_pars_vertex,
    uv2_vertex,
    worldpos_vertex
}

export default Chunks

// export { cube_frag }
// export { cube_vert }
// export { depth_frag }
// export { depth_vert }
// export { distanceRGBA_frag }
// export { distanceRGBA_vert }
// export { equirect_frag }
// export { equirect_vert }
// export { linedashed_frag }
// export { linedashed_vert }
// export { meshbasic_frag }
// export { meshbasic_vert }
// export { meshlambert_frag }
// export { meshlambert_vert }
// export { meshphong_frag }
// export { meshphong_vert }
// export { meshphysical_frag }
// export { meshphysical_vert }
// export { normal_frag }
// export { normal_vert }
// export { points_frag }
// export { points_vert }
// export { shadow_frag }
// export { shadow_vert }
