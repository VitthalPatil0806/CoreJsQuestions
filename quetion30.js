const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(9, "0")}`;

console.log(randomHex());