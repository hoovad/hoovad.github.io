document.addEventListener("DOMContentLoaded", () => {
    const items = [...document.querySelectorAll(".accordion-item")];

    function closeItem(item) {
        const button = item.querySelector(".accordion-toggle");
        const panel = item.querySelector(".panel");
        const label = item.querySelector(".toggle-label");

        button.setAttribute("aria-expanded", "false");
        panel.classList.add('collapsed');
        panel.addEventListener('transitionend', () => {    
            if (panel.classList.contains("collapsed")) {
                panel.setAttribute('hidden', 'until-found');
            }
        }, { once: true });
        panel.style.maxHeight = null;
        label.textContent = "[expand]";
    }

    function openItem(item, closeOthers = true) {
        if (closeOthers) {
            items.forEach(other => {
                if (other !== item) closeItem(other);
            });
        }

        const button = item.querySelector(".accordion-toggle");
        const panel = item.querySelector(".panel");
        const label = item.querySelector(".toggle-label");

        button.setAttribute("aria-expanded", "true");
        requestAnimationFrame(() => {
            panel.classList.remove('collapsed');
        });
        panel.hidden = false;
        panel.style.maxHeight = panel.scrollHeight + "px";
        label.textContent = "[collapse]";
    }

    items.forEach(item => {
        const button = item.querySelector(".accordion-toggle");
        const panel = item.querySelector(".panel");

        button.addEventListener("click", () => {
            const isOpen = button.getAttribute("aria-expanded") === "true";
            if (isOpen) {
                closeItem(item);
            } else {
                openItem(item);
            }
        });

        panel.addEventListener("focusin", () => {
            openItem(item);
        });

        panel.addEventListener("beforematch", () => {  
            openItem(item, closeOthers = false);
        });
    });

    window.addEventListener("resize", () => {
        items.forEach(item => {
            const button = item.querySelector(".accordion-toggle");
            const panel = item.querySelector(".panel");
            if (button.getAttribute("aria-expanded") === "true") {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});