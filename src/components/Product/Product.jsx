import { useState } from 'react';
import * as classnames from 'classnames'
import style from './product.module.scss';

function Product({ product, message, disabled }) {

    const [selected, setSelected] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setSelected(!selected)
    };

    const productBlock = classnames(
        style.productBlock,
        {
            [style.productBlock_pink]: selected,
        });

    const product__productText = classnames(
        style.product__productText,
        {
            [style.product__productText_red]: selected,
        }
    );

    const product__weight = classnames(
        style.product__weight,
        {
            [style.product__weight_pink]: selected,
            [style.product__weight_blue]: !selected,
        }
    );

    return (
        <div className={style.product__container}>
            <div onClick={handleChange} className={style.product} disabled={disabled}>
                <div className={productBlock}>
                    <p className={product__productText}>{product.defaulText}</p>
                    <h2 className={style.product__name}>{product.name}</h2>
                    <p className={style.product__ingredient}>{product.ingredient}</p>
                    <p className={style.product__portions}>
                        {product.portions} порций<br />
                        {product.present}<br />
                        {product.like}
                    </p>
                    <div className={product__weight}>
                        <span className={style.product__weightText_number}>{product.weight}<br /> </span>
                        <span className={style.product__weightText_text}>кг</span>
                    </div>
                </div>
                <div className={style.product__message}>
                    {disabled ? <p className={style.product__message_yellow}>{message.isNotAvailable}</p>
                        : <p className={style.product__message}>
                            {`${selected ? message.productDiscription : message.callToAction}`}
                            {!selected
                                ? <a onClick={handleChange} className={style.product__link} href="#"> купи</a>
                                : null}
                        </p>}
                </div>
            </div>
        </div>
    );
}

export default Product;