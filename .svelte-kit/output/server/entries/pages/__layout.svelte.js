import { c as create_ssr_component, v as validate_component } from "../../chunks/index-5f038599.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><div tabindex="${"0"}" class="${"btn btn-ghost lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h8m-8 6h16"}"></path></svg></div>
        <ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 outline rounded-box w-52"}"><li><a href="${"/"}">Home</a></li>
            <div class="${"divider m-1"}"></div>
            <li><a href="${"/projects"}">Projects</a></li>
            <div class="${"divider m-1"}"></div>
            <li><a href="${"/nmi"}">NMI Portfolio</a></li></ul></div>
      <a class="${"btn btn-ghost normal-case text-xl"}" href="${"/"}">Nick</a></div>
    <div class="${"navbar-center hidden lg:flex"}"><ul class="${"menu menu-horizontal p-0"}"><li><a href="${"/"}">Home</a></li>
        <li><a href="${"/projects"}">Projects</a></li>
        <li><a href="${"/nmi"}">NMI Portfolio</a></li></ul></div>
    <div class="${"navbar-end"}"><a class="${"btn btn-primary"}" href="${"/contact"}">Contact Me</a></div></div>`;
});
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  
  ${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
