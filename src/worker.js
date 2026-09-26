const images = [
  "1363382418078.png",
  "141000167429.png",
  "1410001686910.png",
  "1422254058570.png",
  "1422254999827.png",
  "1424092566613.png",
  "1428177826695.png",
  "1428177904344.png",
  "1428178080167.png",
  "1428178155255.png",
  "1428178187507.png",
  "1428254016467.png",
  "1428707759205.png",
  "1429510703681.png",
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
  "1448242666775.png",
  "1448491901093.png",
  "1450726187259.png",
  "1448856052869.png",
  "1449726465401.png",
  "1450722871010.png",
  "1450724583409.png",
  "1453766877670.png",
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
  "7ckzd1.png",
  "e1c25e2f18430875d15fdcfbb14257e8.png",
  "megumin_1.png",
  "megumin_2.png",
  "nz5vnb.png",
  "patreon-1.png",
  "patreon-2.png",
  "patreon-3.png"
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const response = await env.ASSETS.fetch(request);

    if (
      response.status === 200 &&
      url.pathname === "/"
    ) {
      const image =
        images[Math.floor(Math.random() * images.length)];

      return new HTMLRewriter()
        .on("div.image", {
          element(element) {
            element.setInnerContent(
              `<img src="/assets/qts/${image}" alt="cute grill" fetchpriority="high">`,
              { html: true }
            );
          }
        })
        .transform(response);
    }

    return response;
  }
};
