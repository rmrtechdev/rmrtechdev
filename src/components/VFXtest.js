

const glitch = () => (
    precision mediump float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    float nn(float y, float t) {
        float n = (
            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +
            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +
            sin(y * 1.1 + t * 2.8) * .4
        );
        n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;
        return n;
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = texture2D(src, uv);
        float t = mod(time, 3.14 * 10.);
        // Seed value
        float v = fract(sin(t * 2.) * 700.);
        if (abs(nn(uv.y, t)) < 1.2) {
            v *= 0.01;
        }
        // Prepare for chromatic Abbreveation
        vec2 focus = vec2(0.5);
        float d = v * 0.6;
        vec2 ruv = focus + (uv - focus) * (1. - d);
        vec2 guv = focus + (uv - focus) * (1. - 2. * d);
        vec2 buv = focus + (uv - focus) * (1. - 3. * d);


    
export default () => (
    <VFX.VFXProvider>
        {/* Render text as image, then apply the shader effect! */}
        <VFX.VFXSpan shader="rainbow">Hi there!</VFX.VFXSpan>

        {/* Render image with shader */}
        <VFX.VFXImg src="cat.png" alt="image" shader="rgbShift" />

        {/* It also supports animated GIFs! */}
        <VFX.VFXImg src="doge.gif" shader="pixelate" />

        {/* and videos! */}
        <VFX.VFXVideo src="mind_blown.mp4"
            autoplay playsinline loop muted
            shader="halftone" />
    </VFX.VFXProvider>
);