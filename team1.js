class Navbar extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const template = document.createElement('template');

        template.innerHTML = `
        <style>
        @import "tailwind.css";
        </style>
        <nav class="container mx-auto px-1 font-display">
        <div class="max-w-screen mx-auto px-4">
          <div class="flex justify-between">
      
            <div class="flex space-x-4">
              <!-- logo -->
              <div>
                <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <span class="font-bold">Penerbit Buku</span>
                </a>
              </div>
      
              <!-- primary nav -->
              <div class="hidden md:flex items-center text-gray-800 space-x-1">
                <a href="#" class="py-5 px-3  hover:text-gray-900">Beranda</a>
                <a href="#" class="py-5 px-3  hover:text-gray-900">Buku</a>
                <a href="#" class="py-5 px-3  hover:text-gray-900">Tentang</a>
              </div>
            </div>
      
            <!-- secondary nav -->
            <div class="hidden md:flex items-center space-x-1">
              <button type="button" class="bg-red-500 text-white rounded-md px-7 py-3">Search</button>
            </div>
      
            <!-- mobile button goes here -->
            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
      
          </div>
        </div>
      
        <!-- mobile menu -->
        <div class="mobile-menu hidden md:hidden">
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Beranda</a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Buku</a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Tentang</a>
        </div>
      </nav>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('navbar-comp', Navbar);

class Footer extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const template = document.createElement('template');

        template.innerHTML = `
        <style>
        @import "tailwind.css";
        </style>
        <div class="bg-gray-800 text-center text-white font-display py-20 flex flex-col md:flex-row md:justify-around">
        <div class="flex flex-col items-center py-5 md:items-start">
            <h3 class="text-xl font-bold">Tentang Kami</h3>
            <h4>Nama Penerbit</h4>
            <p>Penerbit ini adalah</p>
            <p>Jl Pegangsaan baru no 1</p>
        </div>

        <div class="flex flex-col items-center py-5 md:items-start">
            <h3 class="text-xl font-bold">Social Media</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>

        <div class="flex flex-col items-center py-5 md:items-start">
            <h3 class="text-xl font-bold">Hubungi kami</h3>
            <p>Email</p>
            <p>Nomor HP</p>
        </div>
        </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('footer-comp', Footer);


export default class Buku extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
      }

    render(){
        const template = document.createElement('template');

        template.innerHTML = `
        <style>
        @import "tailwind.css";
        </style>
        
        <div class="p-10 font-display">  
            <!--Card-->
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="flex justify-center items-center mt-5">
                    <img class="h-48" src="${this.getAttribute('imageSrc')}">
                </div>
                <div class="px-6 py-4">
                    <div class="flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star w-4 text-yellow-400" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path></svg>
                    <p class="text-yellow-500 text-sm ml-2">
                    ${this.getAttribute('rating')}/5 from ${this.getAttribute('count')}
                    </p>
                    </div>

                    <div class="font-bold text-xl mb-2">${this.getAttribute('title')}</div>
                    <p class="text-indigo-500 text-sm">Rp. ${this.getAttribute('price')}</p>
                    <p class="text-gray-700 text-base">
                    <slot/>
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${this.getAttribute('category')}</span>
                </div>
            </div>
        </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('buku-buku', Buku);


{/* <h3 >${this.getAttribute('title')}</h3>
<img src="${this.getAttribute('imageSrc')}"/>
<p>${this.slot}</p> */}
async function fetchBook() {
    const res = await fetch('https://dmujitempbagifile.s3.ap-southeast-1.amazonaws.com/buku.json');
    return res.json();
}

document.addEventListener('DOMContentLoaded', async () => {
    const buku = await fetchBook();
    const bukuContainer = document.querySelector('#bwuku');

    buku.forEach((data) => {
        // create new element
        const books = new Buku();

        //set each attribute
        books.setAttribute('title',data.judul);
        books.setAttribute('imageSrc',data.img);
        books.setAttribute('category',data.kategori)
        books.setAttribute('price',data.harga);
        books.setAttribute('rating',data.rate);
        books.setAttribute('count',data.ratecount);
        books.innerText = data.deskripsi;

        //append to dom
        bukuContainer.appendChild(books);
    });
});