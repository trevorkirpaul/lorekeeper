import { MessageEmbed } from "discord.js";

type Field = {
  name: string;
  value: string;
  inline?: boolean | null;
};

interface A {
  title: string;
  fields?: Array<Field>;
}
const createRichEmbed = ({ title, fields }: A) => {
  const embed = new MessageEmbed().setTitle(title);

  fields &&
    fields.length > 0 &&
    fields.forEach(({ name, value, inline = false }) =>
      embed.addField(name, value, inline)
    );

  return embed;
};

export { createRichEmbed };
