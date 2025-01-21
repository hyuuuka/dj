# Discord Justice Bot Commands

This page provides a comprehensive list of commands available for the Discord Justice Bot. All commands use the default prefix `!dj`, which can be customized for your server.

## General Commands

- `!dj help`: Display a list of available commands
- `!dj info`: Show information about the bot and its version
- `!dj ping`: Check the bot's response time

## Moderation Commands

- `!dj warn @user [reason]`: Issue a warning to a user
- `!dj mute @user [duration] [reason]`: Temporarily mute a user
- `!dj unmute @user`: Unmute a previously muted user
- `!dj kick @user [reason]`: Kick a user from the server
- `!dj ban @user [reason]`: Ban a user from the server
- `!dj unban @user`: Unban a previously banned user

## Reporting Commands

- `!dj report @user [reason]`: Report a user for misconduct
- `!dj reportstatus [report_id]`: Check the status of a report

## Configuration Commands

- `!dj config`: Access the bot configuration menu
- `!dj config prefix [new_prefix]`: Change the bot's command prefix
- `!dj config logs #channel`: Set up a logging channel for moderation actions
- `!dj config autorole @role`: Set up automatic role assignment for new members

## Auto-Moderation Commands

- `!dj automod`: View current auto-moderation settings
- `!dj automod enable [feature]`: Enable a specific auto-moderation feature
- `!dj automod disable [feature]`: Disable a specific auto-moderation feature
- `!dj automod threshold [feature] [value]`: Set the threshold for an auto-moderation feature

## Statistics and Logs

- `!dj stats`: View moderation statistics for your server
- `!dj logs [number]`: View recent moderation logs (default: 10 most recent)

Remember to replace `@user`, `[reason]`, `[duration]`, `[report_id]`, `[new_prefix]`, `#channel`, `@role`, `[feature]`, and `[value]` with appropriate values when using these commands.

For more detailed information on how to use these commands effectively, please refer to the [Bot Usage](/docs/bot-usage) section.

