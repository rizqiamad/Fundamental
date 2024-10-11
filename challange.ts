function summingWords(str: string) {
  let wordArr = "abcdefghijklmnopqrstuvwxyz"; //variabel penampung setiap huruf abjad
  let detail = ""; //variabel penampung penjelasan

  //mengubah setiap huruf menjadi angka sesuai urutannya dalam abjad
  let numArr: number[] = str.split("").map((item) => {
    let i = 0;
    while (item.toLowerCase() !== wordArr[i]) i++;
    return ++i;
  });

  //penjelasan untuk panah pada hasil akhir
  for (let i = 0; i < numArr.length; i++) {
    if (i !== numArr.length - 1) detail += `${numArr[i]} + `;
    else detail += `${numArr[i]}`;
  }

  //menampilkan hasil penjumlahan dan juga detail
  console.log(`${numArr.reduce((a, b) => a + b)} => ${detail}`);
}

summingWords("Bandung");
