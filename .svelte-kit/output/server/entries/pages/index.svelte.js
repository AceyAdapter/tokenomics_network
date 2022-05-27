import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-2835083a.js";
var logo = "/_app/assets/daisyui-6812931f.jpeg";
var svelte_logo = "/_app/assets/sveltekit-dd5d3dc4.png";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="${"text-2xl text-center p-10"}">Web App Boilerplate</div>
    <div class="${"flex flex-row w-full justify-center"}"><img${add_attribute("src", logo, 0)} alt="${"DaisyUI"}" class="${"rounded-xl w-96 shadow-xl"}">
        <div class="${"divider divider-horizontal mx-24 flex"}"><div class="${"text-purple-500"}">DaisyUI</div>
            <div class="${"text-3xl bold"}">+</div>
            <div class="${"text-orange-500"}">SvelteKit</div></div>
        <img${add_attribute("src", svelte_logo, 0)} alt="${"SvelteKit"}" class="${"rounded-xl w-96 shadow-xl"}"></div>
    <a href="${"/about"}">About</a></div>`;
});
export { Routes as default };
