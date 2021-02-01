exports.handler = function (event, context, callback) {
  const memberContent = `
    <h3>Hello, new member!</h3>
    <h3>Welcome to the <a href="./members-area.html">member's area</a>! Each member is entitled to enter our game programme.</h3>
    <ul>Here're the game rules: </ul>
    <li>Each member belongs to a <a href="./guilds.html">guild(3)</a>. </li>
    <li>Each guild member serves a <a href="./roles.html">role(5)</a>.</li>
    <li>Each role will perform certain tasks to build up their <a href="./scores.html">score</a>.</li>
    <li>Scores can be used in a number of <a href="./ways.html">ways</a>.</li>
    <li>You may <a href="./member-referrals.html">invite your friends </a>to join your team to increase your guild's strength.</li>
    `;

  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: memberContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
