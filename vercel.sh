#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]] ; then
  echo "🛑 - Don't build the main branch "
  exit 0;

else
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
fi

# if [[ "$VERCEL_GIT_COMMIT_REF" == "dev" || "$VERCEL_GIT_COMMIT_REF" == "staging" || "$VERCEL_GIT_COMMIT_REF" == "prod" || "$VERCEL_GIT_COMMIT_REF" == preview* ]] ; then
#   # Proceed with the build
#     echo "✅ - Build can proceed"
#   exit 1;

# else
#   # Don't build
#   echo "🛑 - Build cancelled, we only build dev, staging and prod branches"
#   exit 0;
# fi