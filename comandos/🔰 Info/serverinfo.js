.addFields(
      {
        name: `<:ServerOwner:981456566073053235> **Owner**`,
        value: `<@${message.guild.ownerId}>`,
        inline: true
      },
      {
        name: `🆔 **Server ID**`,
        value: `${message.guild.id}`,
        inline: true
      },
      {
        name: `📅 **Fecha de Creacion**`,
        value: `${createsv}`,
        inline: true
      }
    )
    .addFields(
      {
        name: `<:DiscordMembers:975424273583857694> **Total Miembros**`,
        value: `**${message.guild.memberCount}** members`,
        inline: true
      },
      {
        name: `<:hashtag:975425278195146802> ** Channels**`,
        value: `**${channels.filter(channel => channel.type === 'GUILD_TEXT').size}** text | **${channels.filter(channel => channel.type === 'GUILD_VOICE').size}** voice`,
        inline: true
      },
      {
        name: `<:buffCord:975426852606836746> **Verification level**`,
        value: `${seguridad}`,
        inline: true
      }
    )

    .addFields(
      {
        name: `<:boost_pink_heart:975424277392269342> **Boost**`,
        value: `**${message.guild.premiumSubscriptionCount}** boost`,
        inline: true
      },
      {
        name: `<:arrow:985092509216690176>   **Roles**`,
        value: `**[${guild.roles.cache.size}]** roles`
      }
    )
