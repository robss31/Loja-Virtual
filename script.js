
const tela = [
    {
        id: 0,
        nome: '',
        imgum: './image/tela/tela1.jpg',
        qtde: 0,

    },

    {
        id: 1,
        nome: '',
        imgum: './image/tela/tela2.jpg',
        qtde: 0
    },

    {
        id: 2,
        nome: '',
        imgum: './image/tela/tela3.jpg',
        qtde: 0
    },

    {
        id: 3,
        nome: '',
        imgum: './image/tela/tela4.jpg',
        qtde: 0
    },

    {
        id: 4,
        nome: '',
        imgum: './image/tela/tela5.jpg',
        qtde: 0
    },

    {
        id: 5,
        nome: '',
        imgum: './image/tela/tela6.jpg',
        qtde: 0
    },

    {
        id: 6,
        nome: '',
        imgum: './image/tela/tela1.jpg',
        qtde: 0
    },

    {
        id: 7,
        nome: '',
        imgum: './image/tela/tela3.jpg',
        qtde: 0
    },

    {
        id: 8,
        nome: '',
        imgum: './image/tela/tela2.jpg',
        qtde: 0
    }

]

const blusas = [
    {
        id: 9,
        nome: 'Blusa1',
        img1: './image/blusas/blusa1.jpg',
        qtde: 0,

    },

    {
        id: 10,
        nome: 'Blusa2',
        img1: './image/blusas/blusa2.jpg',
        qtde: 0
    },

    {
        id: 11,
        nome: 'Blusa3',
        img1: './image/blusas/blusa3.jpg',
        qtde: 0
    },

    {
        id: 12,
        nome: 'Blusa4',
        img1: './image/blusas/blusa4.jpg',
        qtde: 0
    },

    {
        id: 13,
        nome: 'Blusa5',
        img1: './image/blusas/blusa5.jpg',
        qtde: 0
    },

    {
        id: 14,
        nome: 'Blusa6',
        img1: './image/blusas/blusa6.jpg',
        qtde: 0
    },

    {
        id: 15,
        nome: 'Blusa7',
        img1: './image/blusas/blusa1.jpg',
        qtde: 0
    }


]


const calcas = [
    {
        id: 18,
        nome: 'Calça1',
        img1: './image/calças/calça1.jpg',
        qtde: 0,

    },

    {
        id: 19,
        nome: 'Calça2',
        img1: './image/calças/calça2.jpg',
        qtde: 0
    },

    {
        id: 20,
        nome: 'Calça3',
        img1: './image/calças/calça3.jpg',
        qtde: 0
    },

    {
        id: 21,
        nome: 'Calça4',
        img1: './image/calças/calça4.jpg',
        qtde: 0
    },

    {
        id: 22,
        nome: 'Calça5',
        img1: './image/calças/calça5.jpg',
        qtde: 0
    },

    {
        id: 23,
        nome: 'Calça6',
        img1: './image/calças/calça6.jpg',
        qtde: 0
    }
]

const bermudas = [
    {
        id: 24,
        nome: 'Bermuda1',
        img1: './image/bermudas/bermuda1.jpg',
        qtde: 0,

    },

    {
        id: 25,
        nome: 'Bermuda2',
        img1: './image/bermudas/bermuda2.jpg',
        qtde: 0
    },

    {
        id: 26,
        nome: 'Bermuda3',
        img1: './image/bermudas/bermuda3.jpg',
        qtde: 0
    },

    {
        id: 27,
        nome: 'Bermuda4',
        img1: './image/bermudas/bermuda4.jpg',
        qtde: 0
    },

    {
        id: 28,
        nome: 'Bermuda5',
        img1: './image/bermudas/bermuda5.jpg',
        qtde: 0
    },

    {
        id: 29,
        nome: 'Bermuda6',
        img1: './image/bermudas/bermuda6.jpg',
        qtde: 0
    }
]

const toalhas = [
    {
        id: 30,
        nome: 'Toalha1',
        img1: './image/toalhas/toalha1.jpg',
        qtde: 0,

    },

    {
        id: 31,
        nome: 'Toalha2',
        img1: './image/toalhas/toalha2.jpg',
        qtde: 0
    },

    {
        id: 32,
        nome: 'Toalha3',
        img1: './image/toalhas/toalha3.jpg',
        qtde: 0
    },

    {
        id: 33,
        nome: 'Toalha4',
        img1: './image/toalhas/toalha4.jpg',
        qtde: 0
    },

    {
        id: 34,
        nome: 'Toalha5',
        img1: './image/toalhas/toalha5.jpg',
        qtde: 0
    },

    {
        id: 35,
        nome: 'Toalha6',
        img1: './image/toalhas/toalha6.jpg',
        qtde: 0
    }

]

inicializarLoja = () => {
    var containerTela = document.getElementById('tela');
    tela.map((val) => {
        containerTela.innerHTML += `

        <div class="tela"  id= "tela">

            <img id="imgum" src=" `+ val.imgum + ` "/>
            <p id="nome">`+ val.nome + `</p>

            <a id="f-tela" href="#" i= " `+ val.id + `" >   </a>

        </div>
        `;

    })

    var containerBlusas = document.getElementById('blusas');
    blusas.map((val) => {
        containerBlusas.innerHTML += `


        <div class="blusas"  >

            <img id="img1" src=" `+ val.img1 + ` "/>
            <p>`+ val.nome + `</p>

            <a href="#" i= " `+ val.id + `" >   </a>

        </div>
        `;

    })

    var containerCalcas = document.getElementById('calcas');
    calcas.map((val) => {
        containerCalcas.innerHTML += `

    <div class="calcas">

            <img id="img1" src=" `+ val.img1 + ` "/>
            <p>`+ val.nome + `</p>

            <a href="#" i= " `+ val.id + `" > Add Carrinho!</a>

        </div>
        `;

    })

    var containerBermudas = document.getElementById('bermudas');
    bermudas.map((val) => {
        containerBermudas.innerHTML += `

    <div class="bermudas">

            <img id="img1" src=" `+ val.img1 + ` "/>

            <p>`+ val.nome + `</p>

            <a href="#" i= " `+ val.id + `" >Add Carrinho!</a>

        </div>
        `;

    })

    var containerToalhas = document.getElementById('toalhas');
    toalhas.map((val) => {
        containerToalhas.innerHTML += `

    <div class="toalhas">

            <img id="img1" src=" `+ val.img1 + ` "/>
           
            <p>`+ val.nome + `</p>      
         
            <a href="#" i= " `+ val.id + `" >Add Carrinho!</a>

        </div>
        `;

    })


    // ANIMAiS, CASA,
    const imgs = document.getElementById("tela");
    const img = document.querySelectorAll("#tela img");

    let idf = 0;

    function carousel() {
        idf++;

        if (idf > imgum.length - 2) {
            idf = 0;
        }

        imgs.style.transform = `translateX(${-idf * 128}px)`;
    }

    setInterval(carousel, 2500);



}

inicializarLoja();




atualizarCarrinho = () => {

    //console.log(items)

}

//console.log(qtde);
/*
var links = document.getElementsByTagName('a');
//var quatidade = document.getElementsByTagName('#q');

console.log(i);

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let i = this.getAttribute('i');

    console.log(i);
    console.log(items[i]);

        //items[key].qtde++;
        atualizarCarrinho();
        return false;
    })
}*/