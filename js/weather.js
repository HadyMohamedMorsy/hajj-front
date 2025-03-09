const API_KEY = "YOUR_API_KEY_HERE";
const CITY = "Mecca";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ar`
    );

    if (!response.ok) throw new Error("فشل جلب بيانات الطقس");

    const data = await response.json();

    // Weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weatherIcon").src = iconUrl;
  } catch (error) {
    console.error("خطأ:", error);
    document.getElementById("weatherInfo").innerHTML = `
      <p>تعذر تحميل بيانات الطقس</p>
    `;
  }
}

getWeather();
setInterval(getWeather, 600000);
