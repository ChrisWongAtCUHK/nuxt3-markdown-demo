<script setup>
const md = `
# Welcome to docs4.dev

Paragraphs can contain inline code \`const codeInline: string = 'highlighted code inline'\`{lang="ts"} with language prop.

Code block:
\`\`\` typescript [index.js] {1, 3 - 5} additional meta data
import {parseMarkdown} from '@nuxtjs/mdc/runtime'

async function main(mdc: string) {
  const ast = await parseMarkdown(mdc)

  return ast
}
\`\`\`
`
</script>
<template>
  <div>
    <MDC :value="md" />
  </div>
</template>