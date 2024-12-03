export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331/ref=sr_1_1?crid=233HGWRV6IQNV&dib=eyJ2IjoiMSJ9.g6HxGbWNrXYJ1W09RvSZ_AX09Q_yZ3mrdmCv4rHiXS_fuc8dQjhPozTUqZCFxWuOgVBLbCjcjEZo2ca6h-HMthLJDdY1YWmbTMWpWuLS2kB7sXDhHduDRa3aqA15zd0vs1IKHZWmCo49bate5k-Jm_pAb7ajj-P8necXvmpr1X6dc6J4A1b8b6BTwq4CLju54pmq83crDrb8veEITQ4tuyK9tZxMG_G2Cjohx7Brsro.tpEPKEEdyx1lUpds0Ygrm0omBrHeJCMw4mew_5zDiLI&dib_tag=se&keywords=think+and+grow+rich&qid=1732544810&s=books&sprefix=think+and+grow+rich%2Cstripbooks%2C123&sr=1-1";
   let book2 = "https://www.amazon.com/The-Daily-Stoic-audiobook/dp/B01MA32SO0/ref=sr_1_1?crid=3J2XIQE0318G0&dib=eyJ2IjoiMSJ9.qct5jylgtQwuawjl69zu97BOCeYog2fYAk7VCjAitbayql8DLKlJLjgoRzl3ECOw7yUyI6R2yDAD1FTzf1yJGaakAcT4ysaA5L4J25CwNKoZnRqOFWP4ZU0_2eOcdWXZu519jM3lYVyE1OpN0mW_3E0KiW3FpEqwFY_CYrWpCPDyA7iEgvAhjAnCJqwpwZdXkFgp9dkYZap6w-Nn0-YIgKEnvDOI80vQdvji5NVMM9A.X-FNnuKtI6MgQxWkj3IZipdSxV-Zvh6B-Gr_cYPa5l0&dib_tag=se&keywords=daily+stoic&qid=1732544856&s=books&sprefix=daily+stoic%2Cstripbooks%2C148&sr=1-1";
   let book3 = "https://www.amazon.com/Tools-Titans-Billionaires-World-Class-Performers/dp/B082VKY29Q/ref=sr_1_1?crid=2IH9QAB2JZWBY&dib=eyJ2IjoiMSJ9.bWC7rR0s6bOmw8pEwqc34fNZCC8w2W2MbDexe0yyfDDdcoHZrkOqLSmTNofoNqAwXKdNkqlzcFfpqYWgsRgsjTqTpdWf0wI3jBioFX0VqlNWYxPq7qK-pXZIXQmqYdtxkm2Vxow5Jey5_BpL9iQalw.qGEAWZLTZhe-griqcdGl97UHvxFA9x6GX0ODwiLzblQ&dib_tag=se&keywords=tools+of+titans&qid=1732544939&s=audible&sprefix=tools+of+titans%2Caudible%2C118&sr=1-1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Book 1" />
         <img src={book2} alt="Book 2" />
         <img src={book3} alt="Book 3" />
      </div>      
   );
}