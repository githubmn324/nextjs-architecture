module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        // type: select/input/confirm を指定可能
        type: 'input',
        name: 'page',
        message: 'What is the page name? (No problem in blank)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
      },
      {
        type: 'confirm',
        name: 'have_props',
        message: 'Is it have props?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { page, name, have_props } = answers;
      const path = `${page ? `${page}/` : ``}${name}`;
      const abs_path = `src/app/view/${path}`;
      const alias_path = `@/app/view/${path}`;
      return { ...answers, path, abs_path, alias_path };
    });
  },
};
