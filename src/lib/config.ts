#!/usr/bin/env node

//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import chalk from 'chalk';
import open from 'open';

//* ---------------------- MODELS --------------------- *\\

export interface ICardConfig {
  data: {
    name: string;
    work: string;
    twitter: string;
    github: string;
    linkedin: string;
    web: string;
    desc: string;
  };
  questions: {
    message: string;
    choices: {
      name: string;
      value: () => void;
    }[];
  };
}

//* ------------------ CONFIGURATION ------------------ *\\

const config: ICardConfig = {
  data: {
    name: 'Tobias Kärst',
    work: 'Computer Science student and Online Tutor',
    twitter: 'https://twitter.com/tobias_kaerst',
    github: 'https://github.com/DevTobias',
    linkedin: 'https://de.linkedin.com/in/tobias-kärst',
    web: 'https://tobiaskaerst.me',
    desc:
      "Currently I'm a full time student with a part\ntime job as Tutor.\nI'm always interestet in connecting with different\npeople for a project or anything else.",
  },
  questions: {
    message: 'Do you want to connect with me?',
    choices: [
      {
        name: `Send an ${chalk.green.bold('email')}`,
        value: () => open('mailto:tobi.kaerst@gmx.de'),
      },
      {
        name: 'Not at all',
        value: () => {},
      },
    ],
  },
};

//* --------------------- EXPORTS --------------------- *\\

export default config;
