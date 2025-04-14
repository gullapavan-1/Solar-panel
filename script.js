function refreshData() {
  const fakeData = [
    { status: "Good", voltage: "12.5", temp: "45" },
    { status: "Warning", voltage: "10.1", temp: "60" }
  ];

  document.getElementById("status1").innerText = fakeData[0].status;
  document.getElementById("voltage1").innerText = `${fakeData[0].voltage} V`;
  document.getElementById("temp1").innerText = `${fakeData[0].temp} °C`;

  document.getElementById("status2").innerText = fakeData[1].status;
  document.getElementById("voltage2").innerText = `${fakeData[1].voltage} V`;
  document.getElementById("temp2").innerText = `${fakeData[1].temp} °C`;
}

// Auto-refresh when page loads
window.onload = refreshData;
