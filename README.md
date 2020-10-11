# lorekeeper

A Discord bot which tracks and rewards server activity. Allows members to gain levels and customize their profile. Members will be able to tailor their profile just like an RPG with talents, items, and skills.

This is an open source project and is still a work in progress. A lot of the features still need to be planned.

## Contributing

Currently there are no strict plans around contributing. If you have any comments, questions, or ideas are around this, please create a GitHub issue. PRs will be removed.

## Feature List

- Tracks member's activity (chat, reactions, ect) and converts it to experience points
- Skill and Talent system which affects experience gain. Member's can tailor their profile to the way they interact with the server!

## Development

### Installing Locally

You will need to create a new Discord bot in order to get values like `LOCAL_TOKEN`.

### ENV Variables

```
# DISCORD VALUES / CONFIG
LOCAL_TOKEN=--

# DATABASE VALUES / CONFIG (MONGODB)
DB_USERNAME=---
DB_PASSWORD=---
DB_NAME=---
```

> DB values are for a mongoDB connection string

### Clone, Install, Run

1. clone the repo
2. install packages using **yarn**
3. build dist/bundle using either the `build` or the `watch` NPM scripts
4. create a `.env` file in the project root with the values from above
5. start the app using the `start` npm script
