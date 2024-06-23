document.querySelector("#run").addEventListener("click", function () {
  let code = document.querySelector("#code").value;
  let func = new Function(code);
  if (func()) {
    document.querySelector("#output").innerText = func();
  } else {
    document.querySelector("#output").innerText = "Bir Hata Oluştu ";
  }
});

let diziMetotlari = [
  {
    name: "map",
    description:
      "Her bir elemanı verilen fonksiyona göre dönüştürerek yeni bir dizi oluşturur.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet yeniDizi = dizi.map(x => x * 2);\nconsole.log(yeniDizi);\nreturn yeniDizi;\n // [2, 4, 6, 8, 10]",
  },
  {
    name: "filter",
    description:
      "Belirtilen fonksiyona göre filtreleme yaparak yeni bir dizi oluşturur.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet filtrelenmisDizi = dizi.filter(x => x > 2);\nconsole.log(filtrelenmisDizi);\nreturn filtrelenmisDizi;\n // [3, 4, 5]",
  },
  {
    name: "reduce",
    description:
      "Dizinin elemanlarını belirtilen fonksiyona göre azaltarak tek bir değer elde eder.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet toplam = dizi.reduce((acc, x) => acc + x, 0);\nconsole.log(toplam);\nreturn toplam;\n// 15",
  },
  {
    name: "forEach",
    description: "Dizinin her bir elemanı için belirtilen fonksiyonu çağırır.",
    example:
      "let dizi = [1, 2, 3, 4, 5]; \nlet yeniDizi = [];  \ndizi.forEach((x) => {yeniDizi.push(x);});\nconsole.log(yeniDizi); \nreturn yeniDizi; ",
  },
  {
    name: "find",
    description: "Belirtilen koşulu sağlayan ilk elemanı döner.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet bulunan = dizi.find(x => x > 3);\nconsole.log(bulunan);\nreturn  bulunan; \n// 4",
  },
  {
    name: "findIndex",
    description: "Belirtilen koşulu sağlayan ilk elemanın indeksini döner.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet indeks = dizi.findIndex(x => x > 3);\nconsole.log(indeks);\nreturn indeks; \n// 3",
  },
  {
    name: "some",
    description:
      "Dizinin en az bir elemanının belirtilen koşulu sağlayıp sağlamadığını kontrol eder.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet sonuc = dizi.some(x => x > 4);\nconsole.log(sonuc);\nreturn sonuc; \n// true",
  },
  {
    name: "every",
    description:
      "Dizinin tüm elemanlarının belirtilen koşulu sağlayıp sağlamadığını kontrol eder.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet sonuc = dizi.every(x => x > 0);\nconsole.log(sonuc);\nreturn sonuc; \n// true",
  },
  {
    name: "includes",
    description: "Dizinin belirtilen değeri içerip içermediğini kontrol eder.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet sonuc = dizi.includes(3);\nconsole.log(sonuc);\nreturn sonuc; \n// true",
  },
  {
    name: "sort",
    description: "Diziyi sıralar.",
    example:
      "let dizi = [5, 3, 1, 4, 2];\ndizi.sort();\nconsole.log(dizi);\nreturn dizi; \n// [1, 2, 3, 4, 5]",
  },
  {
    name: "splice",
    description:
      "Dizinin içeriğini değiştirir, yeni elemanlar ekleyebilir veya mevcut elemanları kaldırabilir.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\ndizi.splice(2, 1, 10, 11);\nconsole.log(dizi);\nreturn dizi; \n// [1, 2, 10, 11, 4, 5]",
  },
  {
    name: "slice",
    description: "Dizinin belirli bir kısmını seçerek yeni bir dizi oluşturur.",
    example:
      "let dizi = [1, 2, 3, 4, 5];\nlet yeniDizi = dizi.slice(1, 4);\nconsole.log(yeniDizi);\nreturn yeniDizi; \n// [2, 3, 4]",
  },
  {
    name: "concat",
    description:
      "İki veya daha fazla diziyi birleştirerek yeni bir dizi oluşturur.",
    example:
      "let dizi1 = [1, 2];\nlet dizi2 = [3, 4];\nlet birlesikDizi = dizi1.concat(dizi2);\nconsole.log(birlesikDizi);\nreturn birlesikDizi; \n// [1, 2, 3, 4]",
  },
  {
    name: "unshift",
    description: "Dizinin başına bir veya daha fazla eleman ekler.",
    example:
      "let dizi = [2, 3];\ndizi.unshift(1);\nconsole.log(dizi);\n return dizi; \n// [1, 2, 3]",
  },
  {
    name: "shift",
    description: "Dizinin başındaki ilk elemanı kaldırır.",
    example:
      "let dizi = [1, 2, 3];\nlet ilkEleman = dizi.shift();\nconsole.log(dizi);\nreturn dizi; \n// [2, 3]",
  },
  {
    name: "pop",
    description: "Dizinin sonundaki son elemanı kaldırır.",
    example:
      "let dizi = [1, 2, 3];\nlet sonEleman = dizi.pop();\nconsole.log(dizi);\nreturn dizi; \n// [1, 2]",
  },
  {
    name: "push",
    description: "Dizinin sonuna bir veya daha fazla eleman ekler.",
    example:
      "let dizi = [1, 2];\ndizi.push(3);\nconsole.log(dizi);\n return dizi; \n// [1, 2, 3]",
  },
];

let metotBox = document.querySelector(".metotBox");
for (let i = 0; i < diziMetotlari.length; i++) {
  let metot = diziMetotlari[i];
  metotBox.innerHTML += `
      <h2>${metot.name.toUpperCase()}</h2>
      <p>${metot.description}</p>
      <pre class="box"><code>${metot.example}</code></pre>
  `;
}
