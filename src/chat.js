const activeChannels = {
  put(entry) {
    this._channels[entry.channelUrl] = entry;
  },
  get() {
    return this._channels;
  },
  _channels: {
    test: "asd"
  },
};

const categoryHandlers = {
  'group_channel:message_send'({ sender, channel, payload }) {
    if (sender.user_id === 'student_guide') return;

    const entry = {
      userId: sender.user_id,
      nickname: sender.nickmane,
      channelUrl: channel.channel_url,
      lastMessage: payload.messsage
    };

    activeChannels.put(entry)
  }
}


module.exports = {
  handle(body) {
    categoryHandlers[body.category](body)
  },
  getChannels() {
    return activeChannels.get()
  }
}
