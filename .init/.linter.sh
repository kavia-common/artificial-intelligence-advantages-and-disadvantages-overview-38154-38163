#!/bin/bash
cd /home/kavia/workspace/code-generation/artificial-intelligence-advantages-and-disadvantages-overview-38154-38163/presentation_frontend
npm run lint
ESLINT_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

