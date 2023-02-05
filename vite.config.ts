/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import VitePluginCustomElementsManifest from 'vite-plugin-cem'
import { jsdocExamplePlugin } from 'cem-plugin-jsdoc-example'
import { generateCustomData } from 'cem-plugin-vs-code-custom-data-generator'
import { generateWebTypes } from 'cem-plugin-jet-brains-ide-integration'

const ideIntegrations = {
	outdir: 'dist',
}

export default defineConfig(({ command, mode, ssrBuild }) => {
  const buildOptions =
    mode === "docs"
      ? { outDir: "docs" }
      : {
          lib: {
            entry: "src/index.ts",
            formats: ["es"],
          },
        };

  return {
    build: buildOptions,
    plugins: [
      VitePluginCustomElementsManifest({
        files: ["./src/index.ts"],
        plugins: [
          jsdocExamplePlugin(),
          generateCustomData(ideIntegrations),
          generateWebTypes(ideIntegrations),
        ],
      }),
    ],
  };
});
