import { User } from "discord.js";

interface A {
  user: User;
}

/**
 * Function used to return a string which tags
 * the given discord user. You can place
 * the returned string inside your string/message.
 */
const createUserTag = ({ user }: A) => {
  if (!user) {
    return null;
  }

  return `<@${user.id}>`;
};
export { createUserTag };
