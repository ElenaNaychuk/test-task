import { useState } from 'react';
import style from './product.module.scss';

function Product(props) {

    const [selected, setSelected] = useState(false);

    const handleChange = () => {
        setSelected(!selected)
    };

    return (
        <section className={style.product__container}>
            <div onClick={handleChange} className={style.product} disabled={props.disabled}>
                <div className={`${style.productBlock} ${selected ? style.productBlock_pink : null}`}>
                    <p className={`${style.product__productText} 
                        ${selected ? style.product__productText_red : null}`}>
                        {`${selected ? props.product.selectedHoverText : props.product.defaulText}`}
                    </p>
                    <h2 className={style.product__name}>{props.product.name}</h2>
                    <p className={style.product__ingredient}>{props.product.ingredient}</p>
                    <p className={style.product__portions}>
                        {props.product.portions} порций<br />
                        {props.product.present}<br />
                        {props.product.like}
                    </p>
                    <div className={`${style.product__weight} ${selected ? style.product__weight_pink : style.product__weight_blue}`}>
                        <span className={style.product__weightText_text}>{props.product.weight}<br />кг</span>
                    </div>
                </div>
                <p className={style.product__text}>
                    {props.disabled ? <p className={style.product__text_yellow}>{props.text.isNotAvailable}</p>
                        : <p className={style.product__text}>{`${selected ? props.text.productDiscription : props.text.callToAction}`}
                            {!selected
                                ? <a onClick={handleChange} className={style.product__link} href="#"> купи</a>
                                : null}</p>}
                </p>
            </div>
        </section>
    );
}

export default Product;