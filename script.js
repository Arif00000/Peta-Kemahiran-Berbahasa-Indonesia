$(document).ready(function () {
  $("#check").change(function () {
    if ($(this).is(":checked")) {
      $(".nav-menu").css("top", "64px");
    } else {
      $(".nav-menu").css("top", "-200px");
    }
  });

  swal.fire({
    icon: "info",
    title: "Disclaimer",
    width: "52em",
    html: `
    <table>
      <tr>
        <td style="vertical-align: top" width="36">1.</td>
        <td style="text-align: justify">UKBI (Uji Kemahiran Berbahasa Indonesia) merupakan sarana uji untuk mengukur kemahiran seseorang dalam berbahasa Indonesia lisan atau tulis (Badan Pengembangan dan Pembinaan Bahasa, 2023). Peserta UKBI merupakan masyarakat umum yang telah mempunyai nomor identitas penduduk dan mendaftar di laman UKBI.
Data hasil tes UKBI didapatkan dari <a href="https://laporandataukbi.kemdikbud.go.id/petakemahiran.php ">https://laporandataukbi.kemdikbud.go.id/petakemahiran.php </a> 
</td>
      </tr>
      <tr>
        <td style="vertical-align: top" width="36">2.</td>
        <td style="text-align: justify">Indeks Alibaca (Aktivitas Literasi Membaca) merupakan ukuran yang digunakan untuk menilai dan menggambarkan tingkat aktivitas literasi membaca dalam suatu populasi atau komunitas. Indeks ini memberikan gambaran tentang seberapa sering dan seberapa banyak orang terlibat dalam aktivitas membaca, serta kualitas dan kuantitas bacaan yang mereka konsumsi.
Data Indeks Alibaca didapatkan dari Kementerian Pendidikan Dan Kebudayaan tahun 2019.
</td>
      </tr>
      <tr>
        <td style="vertical-align: top" width="36">3.</td>
        <td style="text-align: justify">Tingkat Penyelesaian Pendidikan merupakan informasi mengenai tingkat pencapaian pendidikan di berbagai jenjang dari SD, SMP, hingga SMA.
Peta online ini menggunakan data tingkat penyelesaian pendidikan hingga jenjang SMA tahun 2019 yang bersumber dari BPS (Badan Pusat Statistik). 
</td>
      </tr>
      <tr>
        <td style="vertical-align: top" width="36">4.</td>
        <td style="text-align: justify">Pengembangan yang dilakukan dari peta hasil UKBI yang telah ada dibandingkan dengan Peta Online Interaktif Kemahiran Berbahasa Indonesia ini adalah peta online ini menggunakan tiga variabel visual value (nilai) yakni warna, bentuk, dan ukuran untuk memvisualisasikan data. Selain itu, interaktivitas peta jauh lebih ditingkatkan menggunakan pendekatan customizable mapping experience yang memungkinkan pengguna melakukan berbagai kustomisasi pada peta dengan cara klik dan mengarahkan kursor diatas peta.</td>
      </tr>
      <tr>
        <td style="vertical-align: top" width="36">5.</td>
        <td style="text-align: justify">Peta online ini TIDAK bersifat membandingkan antar provinsi, tetapi menyajikan persentase hasil UKBI dimasing-masing provinsi menggunakan variabel visual berupa value (nilai) yang digambarkan dengan nilai kecerahan warna tertentu. Provinsi dengan warna paling gelap (persentase tinggi) tidak berarti provinsi itu paling baik dibandingkan dengan provinsi yang lain.</td>
      </tr>
    </table>
    `,
  });
});
