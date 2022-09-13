let base_config = {
    url: "https://relinker.duiker101.net",
    callback: undefined
}

function relink(user_config) {
    const config = {...base_config, ...user_config}

    window.addEventListener("load", () => {
        const links = document.querySelectorAll("a[data-relink]")
        for (const link of links) {
            fetch(config.url + "/api/link/" + link.getAttribute("data-relink"))
                .then((r) => r.json())
                .then((r) => {
                    if (!r.active) {
                        return;
                    }

                    link.setAttribute("href", r.url);
                    link.innerText = r.text;

                    if (config.callback) {
                        config.callback(link, r)
                    }
                })
                .catch(() => {

                })
        }
    });
}