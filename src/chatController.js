

const activeChannels = {
  put(entry) {
    this._channels[entry.channelUrl] = entry;
  },
  get() {
    return this._channels;
  },
  _channels: {
    "sendbird_group_channel_181293707_881e086530540d77b713696a8512a355f359801c": {
      "userId": "nathanael1234",
      "nickname": "natha",
      "channelUrl": "sendbird_group_channel_181293707_881e086530540d77b713696a8512a355f359801c",
      "lastMessage": "kljasdlkjasd"
    },
  }
}

  const categoryHandlers = {
    'group_channel:message_send'({ sender, channel, payload }) {
      if (sender.user_id === 'student_guide') return;

      const entry = {
        userId: sender.user_id,
        nickname: sender.nickname,
        channelUrl: channel.channel_url,
        lastMessage: payload.message
      };

      activeChannels.put(entry)
    }
  }

module.exports = {
    handle(body) {
      if (categoryHandlers[body.category]) {
        categoryHandlers[body.category](body)
      }
    },
    getChannels() {
      return activeChannels.get()
    }
  }
