const fs = require('fs');
const path = require('path');
const dirPath = './src/app/view';

const searchFiles = (dirPath) => {
  const allDirents = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const dirent of allDirents) {
    if (dirent.isDirectory()) {
      const fp = `${dirPath}/${dirent.name}`;
      // const fp = path.join(dirPath, dirent.name);
      files.push(searchFiles(fp));
    } else if (dirent.isFile()) {
      files.push({
        // dir: path.join(dirPath, dirent.name),
        dir: `${dirPath}/${dirent.name}`,
        name: dirent.name,
      });
    }
  }
  return files.flat();
};
const files = searchFiles(dirPath);
const viewAndPressenterZone = {
  from: [],
  target: [],
};
files.map((file) =>
  file.name.includes('use')
    ? viewAndPressenterZone.target.push(file.dir)
    : viewAndPressenterZone.from.push(file.dir)
);
// console.log(viewAndPressenterZone);

module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          viewAndPressenterZone,
          {
            from: `./src/app/view/**/*`,
            target: `./src/app/usecase/**/*`,
          },
          {
            from: [`./src/app/usecase/**/*`, `./src/app/view/**/*`],
            target: `./src/app/repository/**/*`,
          },
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(^useDeep*)',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
  },
};
