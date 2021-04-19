const path = require('path')
const spawn = require('child_process').spawn

/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */
function runCommand (command, arguments, options) {
  return new Promise((resolve, reject) => {
    const spwan = spawn(
      command,
      arguments,
      Object.assign(
        {
          cwd: process.cwd(),
          stdio: 'inherit',
          shell: true,
        },
        options
      )
    )

    spwan.on('exit', code => {
      if (code) {
        console.log()
        console.log(` ${cmd} install FAILED... Possible temporary npm registry issues?`)
        console.log(` Please try again later...`)
        console.log()

        process.exit(1)
      }

      resolve()
    })
  })
}

/**
 * Runs `npm install` in the project directory
 * @param {string} cwd Path of the created project directory
 * @param {object} data Data from questionnaire
 */
function installDependencies (cwd, color) {
  console.log(`\n\n ${color('[*] Installing project dependencies...')}\n`)
  return runCommand('npm', ['install'], { cwd })
}

/**
 * Runs `npm run lint -- --fix` in the project directory
 * @param {string} cwd Path of the created project directory
 * @param {object} data Data from questionnaire
 */
function runLintFix (cwd, color) {
  console.log(`\n ${color('[*] Running eslint --fix to comply with chosen preset rules...')}\n`)
  return runCommand('npm', ['run', 'lint', '--', '--fix'], { cwd })
}

module.exports.complete = function (data, { chalk }) {
  const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)
  const green = chalk.green

  installDependencies(cwd, green)
    .then(() => {
      return runLintFix(cwd, green)
    })
    .then(() => {
      console.log(`\n ${green('[*] Asteroid project initialization finished!')}\n`)
    })
    .catch(error => {
      console.log(chalk.red('Error:'), error)
    })
}
