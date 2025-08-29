#!/bin/bash
cd /home/kavia/workspace/code-generation/mindsync-frontend-152310-152319/mindsync_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

