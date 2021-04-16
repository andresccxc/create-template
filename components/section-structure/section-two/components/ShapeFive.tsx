

const ShapeFive = ({ setComponent }: any) => {
    return (
        <div className='section-structure structure-four flex justify-between items-center py-3 pl-4' onClick={setComponent}>
            <p className='text-xs four-item pt-1'>
                Cuatro nuevos acabados en vidrio mate, una pantalla Super Retina XDR de 5,8 o 6,5 pulgadas1 y el vidrio más resistente jamás usado en un smartphone. Graba videos 4K a 60 cps con rango dinámico extendido. Captura un campo visual 4 veces más amplio.</p>
            <img className='w-1/3 four-item' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/iPhone11Pro-4_ddfef236-dd25-43a5-bc92-59d9d6b473f3_900x.jpg?v=1602800269" alt="cellphone" />
        </div>
    );
}

export default ShapeFive;