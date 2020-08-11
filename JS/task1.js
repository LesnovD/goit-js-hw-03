const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.table(user);
const entries = Object.entries(user);
for (const entrie of entries) {
  const key = entrie[0];
  const value = entrie[1];
  console.log(`${key}: ${value}`);
}
