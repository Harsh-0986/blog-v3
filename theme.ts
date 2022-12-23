import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--my-red": "#db4437",
    "--my-green": "#0f9d58",
    "--my-dark-purple": "#2D033B",
    "--my-light-purple": "#C147E9",
    "--my-mid-purple": "#810CA8",
    "--my-pink": "#E5B8F4",
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-mid-purple"],
    "--component-text-color": props["--my-pink"],

    // Brand
    "--brand-primary": props["--my-mid-purple"],

    // Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-light-purple"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-pink"],
    "--default-button-danger-color": props["--my-red"],

    // State
    "--state-info-color": props["--my-dark-purple"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-light-purple"],
    "--state-danger-color": props["--my-red"],

    // Navbar
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props['--my-pink'],

    "--focus-color": props["--my-white"]
})