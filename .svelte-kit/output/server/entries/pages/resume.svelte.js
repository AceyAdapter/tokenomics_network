import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../chunks/index-2835083a.js";
var resume = "/_app/assets/Nicholas_Kreitz_resume-482b94d6.pdf";
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-center w-full"}"><div class="${"p-10"}">${validate_component(missing_component, "svelte:component").$$render($$result, { url: resume }, {}, {})}</div></div>`;
});
export { Resume as default };
