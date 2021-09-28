class newBook extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({mode:'open'});
    }
      set buku(buku) {
      this.root.innerHTML = `
        <style>
        @import "tailwind.css"
        </style>

        <section class="relative">
        <div class="overflow-hidden container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
                    <h2 class="font-display text-gray-800 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        ${buku.promo_title}
                    </h2>
                    <p class="font-display text-gray-800 text-lg text-center lg:text-left mb-6">
                        ${buku.promo_text}
                    </p>
                <div class="flex justify-center flex-wrap gap-6">
                    <button type="button" class="font-display text-white py-2 px-3 shadow-lg rounded-md btn bg-indigo-500 hover:bg-white transition-all hover:text-black">
                        Get it on Store
                    </button>
                </div>
            </div>
          <!-- Image -->
          <div class="font-display flex justify-center flex-col flex-1 mb-10 md:mb-16 lg:mb-0 z-10 items-center lg:items-start  
          bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-8 rounded-md">
            <img class="rounded-md w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-96 md:h-96" src="${buku.img}" alt="" />
            <h1 class="text-2xl lg:text-5xl font-bold mt-3">${buku.judul}</h1>
            <p class="text-sm mt-1">${buku.penulis}, ${buku.tahun}</p>
            <p class="text-sm mt-3">${buku.deskripsi}</p>
            <h2 class="text-3xl font-bold mt-5">Rp. ${buku.harga}</h2>
            <div class="flex items-center mt-8">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star w-4 text-yellow-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path></svg>
              <p class=" text-yellow-500 text-sm ml-2">
                ${buku.rate}/5 from ${buku.ratecount}
              </p>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
            <div class="font-display flex flex-col lg:flex-row flex-wrap items-center mt-10">
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-4">
                    <div>
                        <p class="mt-2 text-gray-600">${buku.reviews[0].review}</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <p class="text-xl font-medium text-indigo-500">${buku.reviews[0].user}</p>
                    </div>
                </div>
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-4">
                    <div>
                        <p class="mt-2 text-gray-600">${buku.reviews[1].review}</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <p class="text-xl font-medium text-indigo-500">${buku.reviews[1].user}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rounded Rectangle -->
        <div
          class="
            hidden
            md:block
            overflow-hidden
            bg-indigo-500
            rounded-l-full
            absolute
            h-80
            w-2/4
            top-32
            right-0
            lg:
            -bottom-28
            lg:-right-36
          "
        ></div>

      </section>

            
    
      `;
    } 
}
window.customElements.define('book-item', newBook);

class popBook extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({mode:'open'});
    }
      set buku(buku) {
      this.root.innerHTML = `
        <style>
        @import "tailwind.css"
        </style>

        <section class="bg-gray-100 py-20 mt-20 lg:mt-20">
            <!-- Heading -->
            <div class="overflow-hidden sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 class="font-display font-bold text-3xl text-center text-indigo-500">Buku Terpopuler</h1>
            </div>
            
            <!-- Feature #1 -->
            <div class="relative mt-20 lg:mt-24">
                <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <!-- Image -->
                    <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <img
                            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-96 eounded-md shadow-lg"
                            src="${buku.img}"
                            alt=""
                        />
                    </div>
                    <!-- Content -->
                    <div class="font-display flex flex-1 flex-col items-center lg:items-start">
                        <h1 class="text-2xl lg:text-5xl font-bold mt-3">${buku.judul}</h1>
                        <p class="text-sm mt-1">${buku.penulis}, ${buku.tahun}</p>
                        <p class="text-sm mt-3">${buku.deskripsi}</p>
                        <h2 class="text-3xl font-bold mt-5">Rp. ${buku.harga}</h2>

                        <div class="flex items-center mt-8">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star w-4 text-yellow-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path></svg>
                          <p class=" text-yellow-500 text-sm ml-2">
                            ${buku.rate}/5 from ${buku.ratecount}
                          </p>
                        </div>
                        
                    </div>
                </div>
                <!-- Rounded Rectangle -->
                <div
                    class="
                    hidden
                    lg:block
                    overflow-hidden
                    bg-indigo-500
                    rounded-r-full
                    absolute
                    h-80
                    w-2/4
                    -top-10
                    -left-36
                    "
                ></div>

                <div class="container mx-auto flex flex-col lg:flex-row flex-wrap mx-20 items-center mt-10">
                    <div class="flex-grow max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-4">
                        <div>
                            <p class="mt-2 text-gray-600">${buku.reviews[0].review}</p>
                        </div>
                        <div class="flex justify-end mt-4">
                            <p class="text-xl font-medium text-indigo-500">${buku.reviews[0].user}</p>
                        </div>
                    </div>
                    <div class="flex-grow max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-4">
                        <div>
                            <p class="mt-2 text-gray-600">${buku.reviews[1].review}</p>
                        </div>
                        <div class="flex justify-end mt-4">
                            <p class="text-xl font-medium text-indigo-500">${buku.reviews[1].user}</p>
                        </div>
                    </div>
                </div>

            </div>
            
            
        </section>
      `;
    } 
}
window.customElements.define('book-pop', popBook);

  async function tampilkan() {
    const jsonfile = await fetch('https://dmujitempbagifile.s3.ap-southeast-1.amazonaws.com/buku.json');
    data = await jsonfile.json();
    data.forEach(item =>{
      if(item.flag=="toprate") {
        const temp = document.createElement('book-pop');
        temp.buku = item;
        toprate.appendChild(temp); 
      }
      else if(item.flag=="topnew") {
        const temp = document.createElement('book-item');
        temp.buku = item;
        topnew.appendChild(temp); 
      }
    });
  }
  
  tampilkan();