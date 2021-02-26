#!/usr/bin/env node

//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import boxen from 'boxen';
import chalk from 'chalk';

//* Module imports
import config from './config';

//* --------------------- DRAWCARD -------------------- *\\

/**
 * Draws the business card on the terminal.
 *
 */
function drawCard(): void {
  const card = boxen(
    [
      `                  ${chalk.red(config.data.name)}`,
      '',
      `    ${config.data.work}`,
      '',
      ` Twitter: ${chalk.bold.blue(config.data.twitter)}`,
      `  GitHub: ${chalk.bold.blue(config.data.github)}`,
      `LinkedIn: ${chalk.bold.blue(config.data.linkedin)}`,
      `     Web: ${chalk.bold.blue(config.data.web)}`,
      '',
      `${chalk.italic(config.data.desc)}`,
    ].join('\n'),
    {
      borderStyle: 'single',
      float: 'center',
      margin: 1,
      padding: 1,
    }
  );

  console.log(card);
}

//* --------------------- EXPORTS --------------------- *\\

export default drawCard;
