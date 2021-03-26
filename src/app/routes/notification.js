//*****************Push notification Route *******************//
const publicVapidKey ="BPY0YWhD8CRlGMGPlCy7hU4EoJdT8cOfwzn1x3as4-RK6_RyQKob_lEBBzMnVSYX9Upgl8_be7fI9bximCX4o8I";
const privateVapidKey = "hOlDl3gsw-andwZQkThfe-9RLFJYC7aDdTFAUyUave8";
webpush.setVapidDetails("mailto:t4n3r@msn.com",
publicVapidKey,privateVapidKey);
app.post("/subscribe", (req, res) => {
const { subscription, title, message } = req.body;
const payload = JSON.stringify({ title, message });
webpush.sendNotification(subscription, payload)
.catch((err) => console.error("err", err));
res.status(200).json({ success: true });
});