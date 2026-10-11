import{a as e,c as t,n}from"./index-DRHD3s1y.js";import{$t as r,A as i,Bt as a,Qt as o,en as s,g as c,l,m as u,p as d,pt as f,r as p,s as m}from"./shared-D-c8--jJ.js";var h=t(e()),g=parseInt(`186`.replace(/\D+/g,``)),_=class extends a{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${g>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}},v=e=>e&&e.constructor===Float32Array,y=e=>[e.r,e.g,e.b],b=e=>e instanceof o||e instanceof r||e instanceof s,x=e=>Array.isArray(e)?e:b(e)?e.toArray():[e,e,e];function S(e,t,n){return h.useMemo(()=>{if(t!==void 0){if(v(t))return t;if(t instanceof i){let n=Array.from({length:e*3},()=>y(t)).flat();return Float32Array.from(n)}if(b(t)||Array.isArray(t)){let n=Array.from({length:e*3},()=>x(t)).flat();return Float32Array.from(n)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},n)},[t])}var C=h.forwardRef(({noise:e=1,count:t=100,speed:n=1,opacity:r=1,scale:a=1,size:o,color:s,children:p,...m},g)=>{h.useMemo(()=>d({SparklesImplMaterial:_}),[]);let y=h.useRef(null),b=c(e=>e.viewport.dpr),C=x(a),w=h.useMemo(()=>Float32Array.from(Array.from({length:t},()=>C.map(f.randFloatSpread)).flat()),[t,...C]),T=S(t,o,Math.random),E=S(t,r),D=S(t,n),O=S(t*3,e),k=S(s===void 0?t*3:t,v(s)?s:new i(s),()=>1);return u(e=>{y.current&&y.current.material&&(y.current.material.time=e.clock.elapsedTime)}),h.useImperativeHandle(g,()=>y.current,[]),h.createElement(`points`,l({key:`particle-${t}-${JSON.stringify(a)}`},m,{ref:y}),h.createElement(`bufferGeometry`,null,h.createElement(`bufferAttribute`,{attach:`attributes-position`,args:[w,3]}),h.createElement(`bufferAttribute`,{attach:`attributes-size`,args:[T,1]}),h.createElement(`bufferAttribute`,{attach:`attributes-opacity`,args:[E,1]}),h.createElement(`bufferAttribute`,{attach:`attributes-speed`,args:[D,1]}),h.createElement(`bufferAttribute`,{attach:`attributes-color`,args:[k,3]}),h.createElement(`bufferAttribute`,{attach:`attributes-noise`,args:[O,3]})),p||h.createElement(`sparklesImplMaterial`,{transparent:!0,pixelRatio:b,depthWrite:!1}))}),w=n(),T=7,E=1.5,D=`#c9a24a`,O=1.1;function k({glow:e=`#6fe0a8`,still:t=!1,thinkStart:n}){let r=(0,h.useRef)(null),i=(0,h.useMemo)(()=>p(`AI`,`600 150px Fraunces, Georgia, serif`,`#ffffff`,256,6),[]),a=(0,h.useMemo)(()=>{let e=[],t=E/8;for(let n=1;n<=T;n++){let r=-1.5/2+n*t,i=.85;e.push({pos:[r,-.04,i],rot:0},{pos:[r,-.04,-.85],rot:0}),e.push({pos:[i,-.04,r],rot:Math.PI/2},{pos:[-.85,-.04,r],rot:Math.PI/2})}return e},[]);return u(({clock:e})=>{if(!r.current)return;let i=e.elapsedTime,a=i-(n?.current??-99);if(a>=0&&a<1.1){r.current.emissiveIntensity=3+Math.sin(a*30)*1.5;return}let o=t?.4:Math.max(0,Math.sin(i*2.4))**6+.6*Math.max(0,Math.sin(i*2.4-.7))**6;r.current.emissiveIntensity=1.1+o*2.2}),(0,w.jsxs)(`group`,{children:[(0,w.jsx)(m,{args:[E,.16,E],radius:.05,smoothness:4,children:(0,w.jsx)(`meshStandardMaterial`,{color:`#161616`,roughness:.7,metalness:.15})}),(0,w.jsx)(m,{args:[E*.66,.05,E*.66],radius:.02,smoothness:3,position:[0,.1,0],children:(0,w.jsx)(`meshStandardMaterial`,{color:`#202220`,roughness:.5,metalness:.25})}),(0,w.jsxs)(`mesh`,{position:[0,.082,0],rotation:[-Math.PI/2,0,0],children:[(0,w.jsx)(`ringGeometry`,{args:[E*.36,E*.38,4,1,Math.PI/4]}),(0,w.jsx)(`meshStandardMaterial`,{color:D,metalness:1,roughness:.3})]}),(0,w.jsxs)(`mesh`,{position:[0,.127,0],rotation:[-Math.PI/2,0,0],children:[(0,w.jsx)(`planeGeometry`,{args:[E*.6,E*.6]}),(0,w.jsx)(`meshStandardMaterial`,{ref:r,color:e,alphaMap:i,emissive:e,emissiveMap:i,transparent:!0,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2})]}),(0,w.jsxs)(`mesh`,{position:[-1.5*.4,.082,E*.4],rotation:[-Math.PI/2,0,0],children:[(0,w.jsx)(`circleGeometry`,{args:[.04,24]}),(0,w.jsx)(`meshStandardMaterial`,{color:D,metalness:1,roughness:.3})]}),a.map((e,t)=>(0,w.jsxs)(`mesh`,{position:e.pos,rotation:[0,e.rot,0],children:[(0,w.jsx)(`boxGeometry`,{args:[.07,.035,.22]}),(0,w.jsx)(`meshStandardMaterial`,{color:D,metalness:1,roughness:.28})]},t)),(0,w.jsx)(`pointLight`,{position:[0,-.25,0],intensity:t?2:4,distance:2.5,color:e})]})}export{O as n,C as r,k as t};