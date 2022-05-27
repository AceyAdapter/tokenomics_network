import { c as create_ssr_component, v as validate_component } from "../../chunks/index-5f038599.js";
var wave_svelte_svelte_type_style_lang = "";
const css = {
  code: "@-webkit-keyframes svelte-ho4pvt-move_wave{0%{transform:translateX(0) translateZ(0) scaleY(1)\n    }50%{transform:translateX(-25%) translateZ(0) scaleY(0.55)\n    }100%{transform:translateX(-50%) translateZ(0) scaleY(1)\n    }}@keyframes svelte-ho4pvt-move_wave{0%{transform:translateX(0) translateZ(0) scaleY(1)\n    }50%{transform:translateX(-25%) translateZ(0) scaleY(0.55)\n    }100%{transform:translateX(-50%) translateZ(0) scaleY(1)\n    }}.waveWrapper.svelte-ho4pvt.svelte-ho4pvt{overflow:hidden;position:absolute;left:0;right:0;bottom:0;top:0;margin:auto}.waveWrapperInner.svelte-ho4pvt.svelte-ho4pvt{position:absolute;width:100%;overflow:hidden;height:100%;bottom:-1px;background-image:linear-gradient(to top, primary, 20%, #27273c 80%)}.bgTop.svelte-ho4pvt.svelte-ho4pvt{z-index:15;opacity:0.5}.bgMiddle.svelte-ho4pvt.svelte-ho4pvt{z-index:10;opacity:0.75}.bgBottom.svelte-ho4pvt.svelte-ho4pvt{z-index:5}.wave.svelte-ho4pvt.svelte-ho4pvt{position:absolute;left:0;width:200%;height:100%;background-repeat:repeat no-repeat;background-position:0 bottom;transform-origin:center bottom}.waveTop.svelte-ho4pvt.svelte-ho4pvt{background-size:50% 100px}.waveAnimation.svelte-ho4pvt .waveTop.svelte-ho4pvt{animation:move-wave 3s;-webkit-animation:move-wave 3s;-webkit-animation-delay:1s;animation-delay:1s}.waveMiddle.svelte-ho4pvt.svelte-ho4pvt{background-size:50% 120px}.waveAnimation.svelte-ho4pvt .waveMiddle.svelte-ho4pvt{-webkit-animation:svelte-ho4pvt-move_wave 10s linear infinite;animation:svelte-ho4pvt-move_wave 10s linear infinite}.waveBottom.svelte-ho4pvt.svelte-ho4pvt{background-size:50% 100px}.waveAnimation.svelte-ho4pvt .waveBottom.svelte-ho4pvt{-webkit-animation:svelte-ho4pvt-move_wave 15s linear infinite;animation:svelte-ho4pvt-move_wave 15s linear infinite}",
  map: null
};
const Wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"waveWrapper waveAnimation svelte-ho4pvt"}"><div class="${"waveWrapperInner bgTop svelte-ho4pvt"}"><div class="${"wave waveTop svelte-ho4pvt"}" style="${"background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"}"></div></div>
    <div class="${"waveWrapperInner bgMiddle svelte-ho4pvt"}"><div class="${"wave waveMiddle svelte-ho4pvt"}" style="${"background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}"></div></div>
    <div class="${"waveWrapperInner bgBottom svelte-ho4pvt"}"><div class="${"wave waveBottom svelte-ho4pvt"}" style="${"background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}"></div></div>
  </div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"z-30 h-full"}"><div class="${"flex flex-col justify-center items-center h-2/3 text-4xl"}"><div class="${"flex flex-wrap w-1/2 justify-center text-center"}"><p class="${""}">Hi! I&#39;m <span class="${"text-primary"}">Nick</span>. A <span class="${"text-accent"}">student</span>, <span class="${"text-secondary"}">programmer</span>, and enthusiast for anything creative.</p></div>
        <div class="${"flex flex-row mt-10"}"><div class="${"btn btn-accent mx-4"}">View My Resume</div>
            <div class="${"btn btn-secondary mx-4"}">View My Work</div></div></div></div>
<div class="${"z-20"}">${validate_component(Wave, "Wave").$$render($$result, {}, {}, {})}</div>`;
});
export { Routes as default };
