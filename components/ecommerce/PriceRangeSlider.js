import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../redux/action/productFiltersAction";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = ({ updateProductFilters }) => {
    
    const Router = useRouter();
    const searchTerm = Router.query.search;

    const [price, setPrice] = useState({ value: { min: 0, max: 500 } });

    useEffect(() => {
        const filters = {
            price: price.value,
        };

        updateProductFilters(filters);
    }, [price, searchTerm]);

    return (
        <div className="evara_price_slider_amount">
            <Slider
                range
                allowCross={false}
                defaultValue={[0, 100]}
                min={0}
                max={500}
                // onChange={(value) => console.log(value[0], value[1])} 
                onChange={(value) => setPrice({ value: { min: value[0], max: value[1] } })}
            />

            <div className="d-flex justify-content-between">
                <span>
                    {price.value.min}
                </span>
                <span>
                    {price.value.max}
                </span>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products.items,
});

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(PriceRangeSlider);
