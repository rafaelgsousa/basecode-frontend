module.exports = {
  '*.{js,jsx,tsx}': (filenames) => [
    `npm run lint --fix . ${filenames.join('--file')}`,
    `prettier --write ${filenames.join(' ')}`
  ]
}
