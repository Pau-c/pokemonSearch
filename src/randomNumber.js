export default function generateRandomNumber() {
    const min = 15;
    const max = 33;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  