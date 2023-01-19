import { isContentEditable } from '@testing-library/user-event/dist/utils';
import Product from '../Product/Product';
import style from './productsList.module.scss'

function ProductsList(props) {
    return (
        <div className={style.productList__container}>
            <h2 className={style.productList__title}>Ты сегодня покормил кота?</h2>
            <div className={style.productList__list}>
                {
                    props.products.map((item) =>
                        <Product
                            key={item.id}
                            product={item.product}
                            src={item.src}
                            text={item.text}
                            disabled={item.disabled}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default ProductsList;