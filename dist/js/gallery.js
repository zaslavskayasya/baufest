
document.addEventListener("DOMContentLoaded", function() {
    const themeFilters = document.getElementsByClassName("theme-filter");
    const casesContainer = document.querySelector(".case-container");
    const cases = Array.from(document.getElementsByClassName("case"));

    Array.from(themeFilters).forEach(function(themeFilter) {
        themeFilter.addEventListener("click", function() {
            const selectedTheme = themeFilter.getAttribute("data-theme");

            Array.from(themeFilters).forEach(function(filter) {
                filter.classList.remove("active");
            });

            themeFilter.classList.add("active");

            cases.forEach(function(caseElement) {
                const caseTheme = caseElement.getAttribute("data-theme");

                if (selectedTheme === "all" || selectedTheme === caseTheme) {
                    caseElement.classList.remove("hide");
                } else {
                    caseElement.classList.add("hide");
                }
            });

            rearrangeCases();
        });
    });

    function rearrangeCases() {
        const visibleCases = cases.filter(function(caseElement) {
            return !caseElement.classList.contains("hide");
        });

        const hiddenCases = cases.filter(function(caseElement) {
            return caseElement.classList.contains("hide");
        });

        casesContainer.innerHTML = "";

        visibleCases.forEach(function(caseElement) {
            casesContainer.appendChild(caseElement);
        });

        hiddenCases.forEach(function(caseElement) {
            casesContainer.appendChild(caseElement);
        });
    }
});

//# sourceMappingURL=gallery.js.map
