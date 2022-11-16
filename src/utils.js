export const getBackgroundColor = (score) => {
  switch (score) {
    case "A":
      return "#1A844C33";

    case "B":
      return "#8ACC4733";

    case "C":
      return "#EEE95D33";

    case "D":
      return "#F2CB2633";

    case "E": 
      return "#EF901B33";
  
    default:
      return "#E6E6E633";
  }
}

export const getPurchaseLink = (id) => {
  switch (id) {
    case "Latitude 7320 Detachable":
      return "https://www.dell.com/de-de/shop/dell-notebooks/latitude-7320-detachable/spd/latitude-13-7320-detachable-laptop/gxctol732013emea_det?redirectTo=SOC"
    case "MacBook Air with M2 chip":
      return "https://www.amazon.de/2022-Apple-MacBook-Laptop-Chip/dp/B0B3BW9HV1/ref=asc_df_B0B3BW9HV1?tag=bingshoppin0b-21&linkCode=df0&hvadid=80539356784166&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584138878084821&psc=1"
    case "13-inch MacBook Air":
      return "https://www.amazon.de/Apple-MacBook-Air-mit-Chip/dp/B08N5R7XXZ/ref=asc_df_B08N5R7XXZ?tag=bingshoppin0b-21&linkCode=df0&hvadid=80127018015019&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583726551144295&psc=1"
    case "13-inch MacBook Pro":
      return "https://www.amazon.de/2022-Apple-MacBook-Laptop-Chip/dp/B0B3C5P8N8/ref=asc_df_B0B3C5P8N8?tag=bingshoppin0b-21&linkCode=df0&hvadid=80745515307423&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584345036550115&psc=1"
    case "14-inch MacBook Pro":
      return "https://www.backmarket.de/de-de/p/macbook-pro-2021-14-m1-pro-mit-8core-cpu-und-14-core-gpu-16gb-ram-ssd-512gb-qwerty-niederlandisch/6480b5ae-5ec9-470b-aa0c-967f7eecd430?shopping=gmc&msclkid=c54b7d65bec315985f4f1e06c79d3e1e&utm_source=bing&utm_medium=cpc&utm_campaign=rShopping%20Others&utm_term=4582558340371971&utm_content=All%20Products#%3Fl=10&l=10"
    case "Vostro 3515":
      return "https://www.dell.com/de-de/shop/dell-notebooks/vostro-3515/spd/vostro-15-3515-laptop/n6270vn3515emea01_2201?cjevent=8ebd9d905ea011ed8146217c0a180510&dgc=CJ&publisherid=5380028&publisher=&cjdata=MXxZfDB8WXww"
    case "ThinkPad X1 Fold 16 Gen 1":
      return "https://www.klarsicht-it.de/Lenovo-ThinkPad-X1-Fold-16-Gen-1-21ES-Tablet-klappbar-Intel-Core-i7-i7-1260U-1.1-GHz-Intel-Evo-vPro-Enterprise-Platform-Win-11-Pro/25457716?pg=1a63f77907e915168c0e9051447bc7ce&affiliateCode=Idealo"
    case "ThinkPad Z13 Gen 1":
      return "https://www.cyberport.de/?DEEP=1C30-XLH&APID=21&msclkid=95ed8327fc4418221792e04ef8770898"
    case "Inspiron 13 5320":
      return "https://www.dell.com/de-de/shop/dell-notebooks/inspiron-13/spd/inspiron-13-5310-laptop/cn53007"
    case "Vostro 5320":
      return "https://www.dell.com/de-de/shop/dell-notebooks/vostro-5320-laptop/spd/vostro-13-5320-laptop"
    case "Inspiron 14 5420":
      return "https://www.kaufland.de/product/440292425/?utm_source=bing&utm_medium=cpc&utm_content=de_01&utm_campaign=pricecomparison&utm_term=97548&msclkid=dde5fbf45b5411ed9521dff00fab70db"
    case "16-inch MacBook Pro":
      return "https://www.amazon.de/Apple-MacBook-Pro-Chip-10%E2%80%91Core-CPU-16%E2%80%91Core-GPU/dp/B09JQZZRZ7/ref=asc_df_B09JQZZRZ7?tag=bingshoppin0b-21&linkCode=df0&hvadid=79920871227964&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583520398003633&psc=1"
    case "Latitude 9520":
      return "https://www.dell.com/de-de/shop/dell-notebooks/latitude-9520-laptop-oder-2-in-1-system/spd/latitude-15-9520-2-in-1-laptop/gxctol952015emea?redirectTo=SOC"
    case "IdeaPad 5 15":
      return "https://www.mediamarkt.de/de/product/_lenovo-ideapad-5-notebook-mit-156-zoll-display-amd-ryzentm-7-prozessor-8-gb-ram-512-gb-ssd-amd-radeon-grafikeinheit-graphitgrau-2776179.html?storeId=432"
    case "ThinkPad T14 Gen 2":
      return "https://www.lenovo.com/de/de/laptops/thinkpad/t-series/T14-G2-Intel/p/20W0012TGE?orgRef=https%253A%252F%252Fwww.google.com%252F&cid=de:sem|se|google|G-DE-SEM-CONSCOM-PUBLIC-CCF-LF-Shopping-PLA-NonBrand-Consumer|NonBrand-CommercialLaptops-Intel&gclid=CjwKCAiA9qKbBhAzEiwAS4yeDTEmtVpu46A9LZb_1C4ojre9HuWg1QgTlqYIPoJY8hTXrQx5ujX5DhoCM7kQAvD_BwE"
    case "ThinkPad T15 G2":
      return "https://www.cyberport.de/?DEEP=1C30-XSG"
    case "Precision 7750":
      return "https://www.dell.com/de-de/shop/dell-notebooks/mobile-precision-7750/spd/precision-17-7750-laptop/n006p7750emea_vi?gacd=9642282-5052-5761040-271215685-0&dgc=ST&gclid=CjwKCAiA9qKbBhAzEiwAS4yeDXZ78keMzP9HVECD1Bvp1eAI-Dx-zSL6sbAhf1SEES3wxDfh0B3ioBoCiWwQAvD_BwE&gclsrc=aw.ds&nclid=ZE13cCEVJgwXsPLAhABA-pEJo_kDWpYsxcZTRwnyqcQAYvXQemxbJJWI1IKE3okf"
    case "XPS 17 9710":
      return "https://www.cyberport.de/?DEEP=1C33-24Z&APID=276&gclid=Cj0KCQjwqoibBhDUARIsAH2OpWifAlcWRapXA3n0nxGlXlx9ZYQFN5DPZGIlAW44sWyv8KeJVtDJKVIaAtFjEALw_wcB"
    case "Precision 7730":
      return "https://www.refurbed.de/p/dell-precision-7730-i7-8850h/?co=de&utm_cluster=gradeA&utm_group=dell-precision-7730-i7-8850h&gclid=4e940a59ee7b19eefb92693a9103b632&gclsrc=3p.ds&&utm_source=bing&msclkid=4e940a59ee7b19eefb92693a9103b632&utm_source=bing&utm_medium=cpc&utm_campaign=DE%20-%20Bing%20Smart%20Shopping&utm_term=4574930452090941&utm_content=Ad%20group%20%231"
    case "ThinkPad L14 Gen 2":
      return "https://www.conrad.de/de/p/lenovo-notebook-thinkpad-l14-gen-2-20x1-35-6-cm-14-zoll-full-hd-intel-core-i5-i5-1135g7-8-gb-ram-256-gb-ssd-intel-2561874.html?hk=SEM&+B%C3%BCro=&+B%C3%BCro=&ef_id=b6e1b3a206341ba5202cd0cadc35ed40%3AG%3As&s_kwcid=AL%21222%2110%2172568048608233%214576167417233514&msclkid=b6e1b3a206341ba5202cd0cadc35ed40&utm_source=bing&utm_medium=cpc&utm_campaign=Computer+%26+B%C3%BCro&utm_term=4576167417233514&utm_content=Computer+%26+B%C3%BCro"
    default:
      return "/"
  }
}