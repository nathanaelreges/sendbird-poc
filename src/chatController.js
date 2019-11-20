

const activeChannels = {
  put(entry) {
    this._channels[entry.channelUrl] = entry;
  },
  get() {
    return this._channels;
  },
  _channels: {},
};

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
