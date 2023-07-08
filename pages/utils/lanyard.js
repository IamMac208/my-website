const CONSTANTS = {
  WEBSOCKET_URL: "wss://api.lanyard.rest/socket",
  HEARTBEAT_PERIOD: 1000 * 30
};


async function lanyard(opts) {
  if (!opts) throw new Error("Specify an options object");
  if (!opts.userId) throw new Error("Specify a user ID");
  if (!opts.onPresenceUpdate) throw new Error("Specify onPresenceUpdate callback");

  const socket = new WebSocket(CONSTANTS.WEBSOCKET_URL);
  const subscription = typeof opts.userId === "string" ? "subscribe_to_id" : "subscribe_to_ids";
  let heartbeat = null;

  socket.addEventListener("open", () => {
    socket.send(
      JSON.stringify({
        op: 2,
        d: {
          [subscription]: opts.userId,
        },
      })
    );
    heartbeat = setInterval(() => {
      socket.send(
        JSON.stringify({
          op: 3,
        })
      );
    }, CONSTANTS.HEARTBEAT_PERIOD);
  });

  socket.addEventListener("message", ({ data }) => {
    const { t, d } = JSON.parse(data);
    if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
      opts.onPresenceUpdate(d);
    }
  });

  socket.onclose = (event) => {
    try {
      console.log("Socket closed");
      clearInterval(heartbeat);
      setTimeout(() => {
        console.log("Trying to reconnect");
        lanyard(opts);
      }, 3000);
    } catch (err) {
      console.log("Socket closed");
    }
    console.log(event);
  };

  return socket;
}

export { lanyard };




