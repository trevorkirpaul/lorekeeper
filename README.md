# lorekeeper

A Discord bot which tracks and rewards server activity. Allows members to gain levels and customize their profile. Members will be able to tailor their profile just like an RPG with talents, items, and skills.

This is an open source project and is still a work in progress. A lot of the features still need to be planned.

## Contributing

Currently there are no strict plans around contributing. If you have any comments, questions, or ideas are around this, please create a GitHub issue. PRs will be removed.

## Feature List

- Tracks member's activity (chat, reactions, ect) and converts it to experience points

- Skill and Talent system which affects experience gain. Member's can tailor their profile to the way they interact with the server!

## Development

### **Quick Start**

1. clone the repo
2. install packages using **yarn**
3. build dist/bundle using either the `build` or the `watch` NPM scripts

```bash
# runs the rollup build process in "watch mode"
$ yarn watch

# runs the rollup build process once
$ yarn build
```

4. create a `.env`

```bash
# DISCORD VALUES / CONFIG
LOCAL_TOKEN=--

# DATABASE VALUES / CONFIG (MONGODB)
DB_USERNAME=---
DB_PASSWORD=---
DB_NAME=---
```

> DB (database) values will be found within your MongoDB Atlas instance. It is highly recommended to use [Atlas](https://www.mongodb.com/cloud/atlas#:~:text=MongoDB%20Atlas%20is%20the%20global,data%20security%20and%20privacy%20standards.) to host your MongoDB instance. It's free and very powerful.

5. start the app using the `start` npm script

```bash
# runs the app using nodemon and the bundle from rollup
$ yarn start
```

### Installing Locally

You will need to create a new Discord bot in order to get values like `LOCAL_TOKEN`.

### ENV Variables

#### LOCAL_TOKEN

Discord Bot token/secret

#### DB_USERNAME

Used for mongoDB

#### DB_PASSWORD

Used for mongoDB

#### DB_NAME

Used for mongoDB
