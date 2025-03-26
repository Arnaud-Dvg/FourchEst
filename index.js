const citySelectIndex = document.getElementById("default-search");

citySelectIndex.addEventListener("change", function () {
    localStorage.setItem("citySelected", citySelectIndex.value);
})