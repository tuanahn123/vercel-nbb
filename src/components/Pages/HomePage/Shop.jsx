import product1 from '../../../assets/images/HomePage/Shop/product1.svg'
import product2 from '../../../assets/images/HomePage/Shop/product2.svg'
import product3 from '../../../assets/images/HomePage/Shop/product3.svg'
import product4 from '../../../assets/images/HomePage/Shop/product4.svg'

const images = {
    product1,
    product2,
    product3,
    product4
}

export function Shop() {
    const products = [
        { image: images.product1, name: "Gậy Bi-A" },
        { image: images.product2, name: "Phíp" },
        { image: images.product3, name: "Bi-A" },
        { image: images.product4, name: "Bao tay" },
    ];

    return (
        <div className="container mx-auto mt-20 px-4 sm:px-0">
            <div className="text-service text-white font-sora font-semibold text-4xl flex justify-center">CỬA HÀNG</div>
            <div className="text-white grid grid-cols-12 justify-center mt-7">
                <div className="col-span-12 sm:col-span-8 sm:col-start-3 text-lg font-normal font-sora text-center">
                    Cửa hàng của chúng tôi cung cấp những sản phẩm billiards tốt và uy tín nhất cho những vận động viên, các anh em 
                    mới tập chơi bida. Khám phá và mua sắm ngay hôm nay để biến mọi trận đấu của bạn thành trải nghiệm đỉnh cao.
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 my-14 sm:my-24">
                {products.map((product, index) => (
                    <div key={index} className="col-span-1 sm:col-span-6 lg:col-span-3 flex flex-col items-center">
                        <div className="flex justify-center items-center w-full h-full bg-service py-8">
                            <img src={product.image} alt={product.name} className="max-w-full h-auto" />
                        </div>
                        <div className="text-white text-lg font-sora my-4 font-semibold text-center">
                            {product.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
