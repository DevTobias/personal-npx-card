#!/usr/bin/env node

//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import inquirer from 'inquirer';
import config from './config';

//* ------------------ CONFIGURATION ------------------ *\\

const prompt = inquirer.createPromptModule();

//* ------------------ DRAWQUESTIONS ------------------ *\\

function drawQuestions() {
  const questions = [
    {
      type: 'list',
      name: 'action',
      message: config.questions.message,
      choices: config.questions.choices,
    },
  ];

  prompt(questions).then((answer) => answer.action());
}

//* --------------------- EXPORTS --------------------- *\\

export default drawQuestions;
