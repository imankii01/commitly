import { exec } from "child_process";



export function getGitDiff() {
  return new Promise((resolve, reject) => {
    exec(
      "git diff --cached --name-only --diff-filter=d | grep -v node_modules | xargs git diff --cached",
      { maxBuffer: 1024 * 1024 * 10 },
      (err, stdout, stderr) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      }
    );
  });
}
