#!/usr/bin/env node
import { program } from 'commander'
import { configureSetup, getApiKey, getSelectedModel } from '../src/config.js'
import { getGitDiff } from '../src/git-diff.js'
import { generateCommitMessage } from '../src/ai-generator.js'
import { selectOption } from '../src/utils.js'
import chalk from 'chalk'
import { execa } from 'execa';

program
    .command('setup')
    .description('Run interactive setup wizard')
    .action(() => configureSetup())

program
    .command('generate')
    .description('Generate an AI-powered commit message')
    .action(async () => {
        const apiKey = getApiKey()
        const model = getSelectedModel()
        if (!apiKey || !model) {
            console.log(
                chalk.red("❌ API Key or Model not set! Run 'commito setup' first.")
            )
            process.exit(1)
        }

        // 🔹 Auto-stage all changes before generating commit
        try {
            console.log(chalk.yellow('📌 Staging all changes (git add .)...'))
            await execa('git', ['add', '.'], { stdio: 'inherit' })  // Cross-platform execution of git add
        } catch (error) {
            console.log(
                chalk.red(
                    "❌ Error staging files. Make sure you're in a Git repository."
                )
            )
            process.exit(1)
        }

        console.log(chalk.blue('🔍 Fetching Git changes...'))
        const gitDiff = await getGitDiff()

        console.log(chalk.green('✨ Generating commit message using AI...'))
        const commitMessage = await generateCommitMessage(apiKey, model, gitDiff)

        const selectedMessage = await selectOption('Select a commit message:', [
            commitMessage,
            'Regenerate',
            'Cancel'
        ])

        if (selectedMessage === 'Regenerate') {
            const newMessage = await generateCommitMessage(apiKey, model, gitDiff)
            console.log(chalk.green(`\n📝 New Commit Message:\n"${newMessage}"\n`))

            // Ensure proper escaping for double quotes and avoid empty message
            const escapedMessage = newMessage.replace(/"/g, '\\"')
            if (!escapedMessage) {
                console.log(chalk.red('❌ Commit message is empty. Aborting commit.'))
                return
            }

            // Log the final message to check if it's correctly formatted
            console.log(`Commit Message: "${escapedMessage}"`)

            await execa('git', ['commit', '-m', escapedMessage, '--no-edit'], { stdio: 'inherit' })  // Cross-platform commit
        } else if (selectedMessage !== 'Cancel') {
            console.log(
                chalk.green(`\n✅ Final Commit Message:\n"${selectedMessage}"\n`)
            )

            // Ensure proper escaping for double quotes and avoid empty message
            const escapedMessage = selectedMessage.replace(/"/g, '\\"')
            if (!escapedMessage) {
                console.log(chalk.red('❌ Commit message is empty. Aborting commit.'))
                return
            }

            // Log the final message to check if it's correctly formatted
            console.log(`Commit Message: "${escapedMessage}"`)

            await execa('git', ['commit', '-m', escapedMessage, '--no-edit'], { stdio: 'inherit' })  // Cross-platform commit
        }
    })

program.parse(process.argv)
