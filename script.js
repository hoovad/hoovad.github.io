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

    var random_images_array = [
        "1363382418078.png", 
        "141000167429.png", 
        "1410001686910.png", 
        "1410306398205.png", 
        "1418972601666.png", 
        "1422254058570.png",
        "1422254999827.png",
        "1424092566613.png",
        "1428177826695.png",
        "1428177904344.png",
        "1428178080167.png",
        "1428178155255.png",
        "1428178187507.png",
        "1428254016467.png",
        "1428423289437.png",
        "1428707759205.png",
        "1429510703681.png",
        "14350958102351.png",
        "1435095810963.png",
        "1435212506997.png",
        "1436240851027.png",
        "1444797684947.png",
        "1444797896875.png",
        "1444912076567.png",
        "1444925656945.png",
        "1445288849940.png",
        "1445289056206.png",
        "1445902711571.png",
        "1446055508030.png",
        "1446382234634.png",
        "1446463082730.png",
        "1446543984763.png",
        "1446567791227.png",
        "1446781681255.png",
        "1448061734635.png",
        "1448184200057.png",
        "1448242472700.png",
        "1448242666775.png",
        "1448491901093.png",
        "1450726187259.png",
        "1448856052869.png",
        "1449726465401.png",
        "1450354879735.png",
        "1450722871010.png",
        "1450724583409.png",
        "1450726187259.png",
        "1453766877670.png",
        "1456435736475.png",
        "1456795820199.png",
        "1457343592535.png",
        "1457740113058.png",
        "1457765150963.png",
        "1457903809526.png",
        "1458107401807.png",
        "1458114655716.png",
        "1458181302393.png",
        "1458378445396.png",
        "1458438424722.png",
        "1458689827974.png",
        "1458701216283.png",
        "1458879883654.png",
        "1459005360759.png",
        "1459039594461.png",
        "1466924283295.png",
        "1468421480662.png",
        "1471262460053.png",
        "1471285748918.png",
        "1472894659994.png",
        "1480486527028.png",
        "1484879057343.png",
        "1486346829409.png",
        "1489034771085.png",
        "1489257402500.png",
        "1490418851494.png",
        "1492281060221.png",
        "1494909700688.png",
        "1506616576326.png",
        "1512072270390.png",
        "1512276789957.png",
        "7ckzd1.png",
        "e1c25e2f18430875d15fdcfbb14257e8.png",
        "megumin_1.png",
        "megumin_2.png",
        "nz5vnb.png",
        "patreon-1.png",
        "patreon-2.png",
        "patreon-3.png"
    ];

    path = 'assets/qts/'; 
    var num = Math.floor( Math.random() * random_images_array.length );
    var img = random_images_array[num];
    var imgStr = '<img src="' + path + img + '" alt="cute grill">';

    document.querySelector('div.image').innerHTML = imgStr;
});