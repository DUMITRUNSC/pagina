document.addEventListener("DOMContentLoaded", function () {
    // Manejar el clic en el botón de lenguajes de programación
    document.getElementById("showLanguages").addEventListener("click", function () {
        toggleVisibility("languageList");
    });

    // Manejar el clic en el botón de ideas de programación
    document.getElementById("showIdeas").addEventListener("click", function () {
        toggleVisibility("ideasContent");
    });

    // Manejar el clic en el botón de cursos
    document.getElementById("showCourses").addEventListener("click", function () {
        toggleVisibility("coursesList");
    });

    // Función para alternar la visibilidad
    function toggleVisibility(elementId) {
        var element = document.getElementById(elementId);
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    }
});
