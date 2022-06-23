import { c as create_ssr_component, v as validate_component } from "../../chunks/index-2835083a.js";
import { W as Wave } from "../../chunks/wave-78e11b96.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"z-30 h-full"}"><div class="${"flex flex-col justify-center items-center h-3/4 text-4xl"}"><div class="${"flex flex-wrap w-1/2 justify-center text-center"}"><p>Developing <span class="${"text-secondary"}">creative</span> and <span class="${"text-accent"}">innovative</span> solutions to grow <span class="${"text-primary"}">Web 3.0</span></p></div>
        <div class="${"flex flex-row mt-10"}"><a href="${"/team"}" class="${"btn btn-primary mx-4"}">Learn About Us</a>
            <a href="${"/contact"}" class="${"btn btn-secondary mx-4"}">Get In Touch</a></div></div></div>
<div class="${"z-20"}">${validate_component(Wave, "Wave").$$render($$result, {}, {}, {})}</div>`;
});
export { Routes as default };
