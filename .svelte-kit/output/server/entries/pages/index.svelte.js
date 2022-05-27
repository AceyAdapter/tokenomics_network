import { c as create_ssr_component, v as validate_component } from "../../chunks/index-2835083a.js";
import { W as Wave } from "../../chunks/wave-78e11b96.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"z-30 h-full"}"><div class="${"flex flex-col justify-center items-center h-3/4 text-4xl"}"><div class="${"flex flex-wrap w-1/2 justify-center text-center"}"><p class="${""}">Hi! I&#39;m <span class="${"text-primary"}">Nick</span>. A <span class="${"text-accent"}">student</span>, <span class="${"text-secondary"}">programmer</span>, and enthusiast for anything creative.</p></div>
        <div class="${"flex flex-row mt-10"}"><div class="${"btn btn-accent mx-4"}">View My Resume</div>
            <div class="${"btn btn-secondary mx-4"}">View My Work</div></div></div></div>
<div class="${"z-20"}">${validate_component(Wave, "Wave").$$render($$result, {}, {}, {})}</div>`;
});
export { Routes as default };
