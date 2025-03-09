async function fetchData() {
  const today = new Date();
  const dateString = `${String(today.getDate()).padStart(2, "0")}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${today.getFullYear()}`;
  const apiUrl = `https://api.aladhan.com/v1/timingsByCity/${dateString}?city=Mecca&country=Saudi%20Arabia&method=5`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network error");

    const data = await response.json();
    const timings = data.data.timings;

    let fagr = document.getElementById("fagr");
    let daohr = document.getElementById("daohr");
    let alsr = document.getElementById("alsr");
    let maghreeb = document.getElementById("maghreeb");
    let alsha = document.getElementById("alsha");

    fagr.innerHTML = timings.Fajr;
    daohr.innerHTML = timings.Dhuhr;
    alsr.innerHTML = timings.Asr;
    maghreeb.innerHTML = timings.Maghrib;
    alsha.innerHTML = timings.Isha;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("prayerTimes").innerHTML =
      "حدث خطأ أثناء جلب البيانات";
  }
}

fetchData();
