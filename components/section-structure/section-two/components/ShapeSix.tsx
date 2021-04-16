
const ShapeSix = ({ setComponent }: any) => {
    return (
        <div className="section-structure structure-three flex justify-around py-4" onClick={setComponent}>
            <div className='three-section'>
                <img className='w-full product-image  m-auto' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/RedmiNote9T-6_6fefa032-9c80-468f-825f-14f69e77a2d0_900x.jpg?v=1613853936" alt="cellphone" />
                <p className='text-sm  text-center mt-1'>Mi 10 5G 128gb</p>
            </div>

            <div className='three-section'>
                <img className='w-full product-image  m-auto' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/SamsungGalaxyS21Ultra-7_900x.jpg?v=1611435524" alt="cellphone" />
                <p className='text-sm  text-center mt-1'>Samsung S21</p>
            </div>

            <div className='three-section'>
                <img className='w-full product-image m-auto' src="https://cdn.shopify.com/s/files/1/0485/4566/1094/products/Mi10-1_900x.jpg?v=1605797253" alt="cellphone" />
                <p className='text-sm text-center mt-1'>Mate 40 pro</p>
            </div>
        </div>
    );
}

export default ShapeSix;