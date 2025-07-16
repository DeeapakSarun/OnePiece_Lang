// postinstall.js
import chalk from 'chalk';
import boxen from 'boxen';

const asciiBanner = `
********************************************************************************************************************************************************
*                                                                                                                                                      *
*  .d88888b.                             d8b                                  888                                                                      *
* d88P" "Y88b                            Y8P                                  888                                                                      *
* 888     888                                                                 888                                                                      *
* 888     888 88888b.   .d88b.  88888b.  888  .d88b.   .d8888b  .d88b.        888       8888b. 88888b.   .d88b.  888  888  8888b.   .d88b.   .d88b.    *
* 888     888 888 "88b d8P  Y8b 888 "88b 888 d8P  Y8b d88P"    d8P  Y8b       888          "88b 888 "88b d88P"88b 888  888     "88b d88P"88b d8P  Y8b  *
* 888     888 888  888 88888888 888  888 888 88888888 888      88888888       888      .d888888 888  888 888  888 888  888 .d888888 888  888 88888888  *
* Y88b. .d88P 888  888 Y8b.     888 d88P 888 Y8b.     Y88b.    Y8b.           888      888  888 888  888 Y88b 888 Y88b 888 888  888 Y88b 888 Y8b.      *
*  "Y88888P"  888  888  "Y8888  88888P"  888  "Y8888   "Y8888P  "Y8888        88888888 "Y888888 888  888  "Y88888  "Y88888 "Y888888  "Y88888  "Y8888   *
*                               888                                                                           888                        888           *
*                               888                                                                      Y8b d88P                   Y8b d88P           *
*                               888                                                                       "Y88P"                     "Y88P"            *
*                                                                                                                                                      *
********************************************************************************************************************************************************
`;

const pirateMsg = chalk.greenBright.bold(`🏴‍☠️ Ahoy, developer!

You've just installed the ${chalk.yellow('One Piece Programming Language')}!

⚙️  Run your first pirate file:
   ${chalk.cyan('onepiece run examples.onepiece')}

📘  Read the Pirate’s Code (Docs):
   ${chalk.cyan('https://github.com/DeeapakSarun/OnePiece_Lang/tree/master')}

💬  Follow the voyage: ${chalk.gray('#ifExistsIBuild')}
🍖  Raise your Jolly Roger — the Grand Line of Code awaits!
`);

console.log(boxen(
  chalk.yellowBright(asciiBanner) + '\n' + pirateMsg,
  {
    padding: 1,
    margin: 1,
    borderStyle: 'classic',
    borderColor: 'green',
    title: chalk.redBright.bold(' One Piece Lang Installed '),
    titleAlignment: 'center'
  }
));
